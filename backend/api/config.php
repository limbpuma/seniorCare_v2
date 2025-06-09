<?php
// Configuration API endpoint for frontend integration
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
    
    // Get all configuration from site_config table
    $configs = $db->select("SELECT key, value, type FROM site_config ORDER BY key");
    
    $configData = [];
    foreach ($configs as $config) {
        $key = $config['key'];
        $value = $config['value'];
        $type = $config['type'];
        
        // Convert value based on type
        switch ($type) {
            case 'boolean':
                $configData[$key] = filter_var($value, FILTER_VALIDATE_BOOLEAN);
                break;
            case 'integer':
                $configData[$key] = (int)$value;
                break;
            case 'float':
                $configData[$key] = (float)$value;
                break;
            case 'json':
                $configData[$key] = json_decode($value, true);
                break;
            default:
                $configData[$key] = $value;
        }
    }
    
    // Organize data by categories for frontend
    $organizedConfig = [
        'site' => [
            'name' => $configData['site_name'] ?? 'Senior Care',
            'description' => $configData['site_description'] ?? 'Cuidado profesional para adultos mayores',
            'logo' => $configData['site_logo'] ?? '/images/logo.png',
            'favicon' => $configData['site_favicon'] ?? '/favicon.ico'
        ],
        'contact' => [
            'email' => $configData['contact_email'] ?? 'info@seniorcare.com',
            'phone' => $configData['contact_phone'] ?? '+1 (555) 123-4567',
            'address' => $configData['contact_address'] ?? '123 Care Street, Health City, HC 12345',
            'business_hours' => $configData['business_hours'] ?? 'Lunes a Viernes: 8:00 AM - 6:00 PM'
        ],
        'social_media' => [
            'facebook' => $configData['social_facebook'] ?? '',
            'instagram' => $configData['social_instagram'] ?? '',
            'twitter' => $configData['social_twitter'] ?? '',
            'linkedin' => $configData['social_linkedin'] ?? '',
            'youtube' => $configData['social_youtube'] ?? ''
        ],
        'technical' => [
            'frontend_url' => $configData['frontend_url'] ?? 'http://localhost:4321',
            'api_cache_ttl' => $configData['api_cache_ttl'] ?? 3600,
            'google_analytics_id' => $configData['google_analytics_id'] ?? '',
            'google_maps_api_key' => $configData['google_maps_api_key'] ?? '',
            'recaptcha_site_key' => $configData['recaptcha_site_key'] ?? ''
        ]
    ];
    
    $response = [
        'success' => true,
        'data' => $organizedConfig,
        'cache_time' => date('c'),
        'expires_at' => date('c', time() + ($configData['api_cache_ttl'] ?? 3600))
    ];
    
    // Set cache headers
    $cacheMaxAge = $configData['api_cache_ttl'] ?? 3600;
    header("Cache-Control: public, max-age={$cacheMaxAge}");
    header('ETag: "' . md5(serialize($organizedConfig)) . '"');
    header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . ' GMT');
    
    http_response_code(200);
    echo json_encode($response, JSON_PRETTY_PRINT);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to load configuration',
        'error' => $e->getMessage(),
        'timestamp' => date('c')
    ], JSON_PRETTY_PRINT);
}
?>
