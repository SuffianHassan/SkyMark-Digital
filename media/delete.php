<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['file'])) {
    $uploadDir = __DIR__ . "/../uploads/";
    $fileName = basename($_POST['file']);
    $filePath = $uploadDir . $fileName;

    if (file_exists($filePath)) {
        if (unlink($filePath)) {
            echo json_encode([
                "success" => true,
                "message" => "File deleted successfully"
            ]);
        } else {
            http_response_code(500);
            echo json_encode([
                "success" => false,
                "message" => "Failed to delete file"
            ]);
        }
    } else {
        http_response_code(404);
        echo json_encode([
            "success" => false,
            "message" => "File not found"
        ]);
    }
} else {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "No file specified"
    ]);
}
?>