<?php
// Health check endpoint for frontend integration testing
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow GET requests
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
    exit();
}

try {
    // Include database connection
    include_once '../partials/database.php';
    
    $db = SeniorCareDatabase::getInstance();
    
    // Test database connection
    $dbTest = $db->selectOne("SELECT 1 as test");
    $dbStatus = $dbTest ? 'connected' : 'error';
    
    // Get some basic stats
    $stats = [];
    
    try {
        $stats['texts_count'] = $db->selectOne("SELECT COUNT(*) as count FROM site_content")['count'] ?? 0;
        $stats['messages_count'] = $db->selectOne("SELECT COUNT(*) as count FROM contact_messages")['count'] ?? 0;
        $stats['users_count'] = $db->selectOne("SELECT COUNT(*) as count FROM admin_users")['count'] ?? 0;
    } catch (Exception $e) {
        $stats['error'] = 'Could not fetch stats';
    }
    
    // PHP version and extensions
    $phpInfo = [
        'version' => PHP_VERSION,
        'extensions' => [
            'pdo' => extension_loaded('pdo'),
            'pdo_sqlite' => extension_loaded('pdo_sqlite'),
            'json' => extension_loaded('json'),
            'curl' => extension_loaded('curl')
        ]
    ];
    
    // Server info
    $serverInfo = [
        'software' => $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown',
        'php_sapi' => PHP_SAPI,
        'document_root' => $_SERVER['DOCUMENT_ROOT'] ?? 'Unknown',
        'script_name' => $_SERVER['SCRIPT_NAME'] ?? 'Unknown'
    ];
    
    $response = [
        'success' => true,
        'message' => 'Senior Care Backend is healthy',
        'timestamp' => date('c'),
        'database' => $dbStatus,
        'stats' => $stats,
        'php' => $phpInfo,
        'server' => $serverInfo,
        'endpoints' => [
            'texts' => './texts.php',
            'contact' => './contact.php',
            'config' => './config.php',
            'seo' => './seo.php'
        ]
    ];
    
    http_response_code(200);
    echo json_encode($response, JSON_PRETTY_PRINT);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Health check failed',
        'error' => $e->getMessage(),
        'timestamp' => date('c')
    ], JSON_PRETTY_PRINT);
}
?>
