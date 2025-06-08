<?php
// SEO API endpoint for frontend integration
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
    
    // Get page parameter
    $page = $_GET['page'] ?? '';
    
    if (empty($page)) {
        // Return all SEO data
        $seoData = $db->select("SELECT key, value FROM site_content WHERE section = 'seo'");
        
        $allSeoData = [];
        foreach ($seoData as $seo) {
            $pageKey = $seo['key'];
            $seoContent = json_decode($seo['value'], true);
            
            if ($seoContent) {
                $allSeoData[$pageKey] = [
                    'title' => $seoContent['title'] ?? '',
                    'description' => $seoContent['description'] ?? '',
                    'keywords' => $seoContent['keywords'] ?? '',
                    'og_image' => $seoContent['og_image'] ?? ''
                ];
            }
        }
        
        $response = [
            'success' => true,
            'data' => $allSeoData,
            'cache_time' => date('c'),
            'expires_at' => date('c', time() + 3600) // 1 hour cache
        ];
        
    } else {
        // Return SEO data for specific page
        $seoRecord = $db->selectOne("SELECT value FROM site_content WHERE section = 'seo' AND key = ?", [$page]);
        
        if ($seoRecord) {
            $seoContent = json_decode($seoRecord['value'], true);
            
            $pageData = [
                'title' => $seoContent['title'] ?? '',
                'description' => $seoContent['description'] ?? '',
                'keywords' => $seoContent['keywords'] ?? '',
                'og_image' => $seoContent['og_image'] ?? ''
            ];
        } else {
            // Return default SEO data for the page
            $defaults = [
                'home' => [
                    'title' => 'Senior Care - Cuidado Profesional para Adultos Mayores',
                    'description' => 'Brindamos servicios de cuidado geriátrico profesional y personalizado. Más de 10 años de experiencia cuidando a nuestros adultos mayores.',
                    'keywords' => 'cuidado geriátrico, adultos mayores, cuidado domiciliario, enfermería, acompañamiento',
                    'og_image' => ''
                ],
                'services' => [
                    'title' => 'Servicios de Cuidado Geriátrico - Senior Care',
                    'description' => 'Descubre nuestros servicios especializados: cuidado domiciliario, acompañamiento, asistencia médica y más.',
                    'keywords' => 'servicios geriátricos, cuidado domiciliario, enfermería a domicilio, acompañamiento',
                    'og_image' => ''
                ],
                'about' => [
                    'title' => 'Acerca de Nosotros - Senior Care',
                    'description' => 'Conoce nuestra historia, misión y el equipo profesional dedicado al cuidado de adultos mayores.',
                    'keywords' => 'equipo profesional, experiencia geriátrica, cuidadores certificados',
                    'og_image' => ''
                ],
                'contact' => [
                    'title' => 'Contacto - Senior Care',
                    'description' => 'Contáctanos para más información sobre nuestros servicios de cuidado geriátrico. Estamos aquí para ayudarte.',
                    'keywords' => 'contacto, información, consultas, cuidado geriátrico',
                    'og_image' => ''
                ],
                'blog' => [
                    'title' => 'Blog - Senior Care',
                    'description' => 'Artículos y consejos sobre el cuidado de adultos mayores, salud geriátrica y bienestar.',
                    'keywords' => 'blog, consejos, salud geriátrica, cuidado adultos mayores',
                    'og_image' => ''
                ]
            ];
            
            $pageData = $defaults[$page] ?? [
                'title' => 'Senior Care',
                'description' => 'Cuidado profesional para adultos mayores',
                'keywords' => 'cuidado geriátrico, adultos mayores',
                'og_image' => ''
            ];
        }
        
        $response = [
            'success' => true,
            'data' => $pageData,
            'page' => $page,
            'cache_time' => date('c'),
            'expires_at' => date('c', time() + 3600) // 1 hour cache
        ];
    }
    
    // Set cache headers
    header('Cache-Control: public, max-age=3600');
    header('ETag: "' . md5(serialize($response['data'])) . '"');
    header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . ' GMT');
    
    http_response_code(200);
    echo json_encode($response, JSON_PRETTY_PRINT);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to load SEO data',
        'error' => $e->getMessage(),
        'page' => $page ?? 'unknown',
        'timestamp' => date('c')
    ], JSON_PRETTY_PRINT);
}
?>
