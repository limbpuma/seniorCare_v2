<?php
/**
 * Senior Care Backend - Texts API Endpoint
 * 
 * This endpoint provides dynamic content for the frontend
 */

// Set content type to JSON
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

// Include database connection
require_once '../partials/database.php';

try {
    $db = SeniorCareDatabase::getInstance();
    
    $start_time = microtime(true);
    
    // Log API call
    $db->insert('api_logs', [
        'endpoint' => '/api/texts.php',
        'method' => $_SERVER['REQUEST_METHOD'],
        'ip_address' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
        'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown',
        'response_code' => 200,
        'response_time' => 0
    ]);
    
    // Get all content from database
    $content = $db->select("SELECT section, key, value FROM site_content ORDER BY section, key");
    
    // Group content by section
    $texts = [];
    foreach ($content as $item) {
        $texts[$item['section']][$item['key']] = $item['value'];
    }
    
    // If no content exists, provide default structure
    if (empty($texts)) {
        $texts = [
            'seo' => [
                'title' => 'Senior Care - Cuidado Profesional para Adultos Mayores',
                'description' => 'Servicios profesionales de cuidado y atención para adultos mayores. Cuidadores capacitados, atención personalizada y tranquilidad para toda la familia.',
                'keywords' => 'cuidado adultos mayores, cuidadores profesionales, atención geriátrica, servicios domiciliarios'
            ],
            'header' => [
                'phone' => '+1 (555) 123-4567',
                'email' => 'info@seniorcare.com',
                'cta_button' => 'Solicitar Información'
            ],
            'home' => [
                'hero_title' => 'Cuidado Profesional para Adultos Mayores',
                'hero_subtitle' => 'Brindamos servicios de cuidado personalizado con cariño y profesionalismo',
                'hero_cta' => 'Conoce Nuestros Servicios'
            ],
            'contact' => [
                'title' => 'Contáctanos',
                'subtitle' => 'Estamos aquí para ayudarte',
                'form_title' => 'Solicita más información',
                'submit_button' => 'Enviar Mensaje'
            ]
        ];
    }
    
    $end_time = microtime(true);
    $response_time = ($end_time - $start_time) * 1000; // Convert to milliseconds
    
    // Set cache headers (1 hour)
    $cache_ttl = 3600;
    header("Cache-Control: public, max-age=$cache_ttl");
    header('Expires: ' . gmdate('D, d M Y H:i:s', time() + $cache_ttl) . ' GMT');
    header('Last-Modified: ' . gmdate('D, d M Y H:i:s', time()) . ' GMT');
    
    // Return JSON response
    echo json_encode($texts, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    
} catch (Exception $e) {
    // Log error
    error_log("API Error: " . $e->getMessage());
    
    // Return error response
    http_response_code(500);
    echo json_encode([
        'error' => 'Internal server error',
        'message' => 'Unable to fetch content'
    ]);
}
?>
