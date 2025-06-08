<?php
/**
 * Senior Care Backend - Contact Form API Endpoint
 * 
 * This endpoint processes contact form submissions
 */

// Set content type to JSON
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Include database connection
require_once '../partials/database.php';

try {
    $db = SeniorCareDatabase::getInstance();
    
    $start_time = microtime(true);
    
    // Get POST data
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    // Validate required fields
    $required_fields = ['name', 'email', 'message'];
    $errors = [];
    
    foreach ($required_fields as $field) {
        if (empty($data[$field])) {
            $errors[] = "El campo '$field' es requerido";
        }
    }
    
    // Validate email format
    if (!empty($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors[] = "El formato del email es inválido";
    }
    
    if (!empty($errors)) {
        http_response_code(400);
        echo json_encode([
            'error' => 'Validation failed',
            'errors' => $errors
        ]);
        exit();
    }
    
    // Sanitize input data
    $name = htmlspecialchars(trim($data['name']));
    $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
    $phone = !empty($data['phone']) ? htmlspecialchars(trim($data['phone'])) : null;
    $subject = !empty($data['subject']) ? htmlspecialchars(trim($data['subject'])) : null;
    $message = htmlspecialchars(trim($data['message']));
    
    // Insert into database
    $messageId = $db->insert('contact_messages', [
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'subject' => $subject,
        'message' => $message,
        'status' => 'new'
    ]);
    
    // Send email notification (basic implementation)
    $to = getenv('CONTACT_EMAIL') ?: 'admin@seniorcare.dev';
    $email_subject = "Nuevo mensaje de contacto - Senior Care";
    $email_message = "
        Nuevo mensaje de contacto recibido:
        
        Nombre: $name
        Email: $email
        " . ($phone ? "Teléfono: $phone\n" : "") . "
        " . ($subject ? "Asunto: $subject\n" : "") . "
        
        Mensaje:
        $message
        
        ---
        Este mensaje fue enviado desde el formulario de contacto del sitio web.
    ";
    
    $headers = "From: noreply@seniorcare.dev\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Attempt to send email (basic mail function - in production use PHPMailer or similar)
    $email_sent = @mail($to, $email_subject, $email_message, $headers);
    
    $end_time = microtime(true);
    $response_time = ($end_time - $start_time) * 1000;
    
    // Log API call
    $db->insert('api_logs', [
        'endpoint' => '/api/contact.php',
        'method' => 'POST',
        'ip_address' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown',
        'response_code' => 200,
        'response_time' => $response_time
    ]);
    
    // Return success response
    echo json_encode([
        'success' => true,
        'message' => 'Mensaje enviado correctamente',
        'message_id' => $messageId,
        'email_sent' => $email_sent
    ]);
    
} catch (Exception $e) {
    // Log error
    error_log("Contact API Error: " . $e->getMessage());
    
    $end_time = microtime(true);
    $response_time = ($end_time - $start_time) * 1000;
    
    // Log failed API call
    try {
        $db->insert('api_logs', [
            'endpoint' => '/api/contact.php',
            'method' => 'POST',
            'ip_address' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
            'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown',
            'response_code' => 500,
            'response_time' => $response_time
        ]);
    } catch (Exception $log_error) {
        // Ignore logging errors
    }
    
    // Return error response
    http_response_code(500);
    echo json_encode([
        'error' => 'Internal server error',
        'message' => 'No se pudo procesar el mensaje. Inténtalo más tarde.'
    ]);
}
?>
