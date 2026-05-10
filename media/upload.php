<?php

header("Access-Control-Allow-Origin: https://skymark-digital.com");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Method not allowed"
    ]);
    exit;
}

if (!isset($_FILES['file'])) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "No file uploaded"
    ]);
    exit;
}

$uploadDir = __DIR__ . "/../uploads/";

if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

/**
 * Allowed file extensions
 */
$allowedExtensions = [
    'jpg',
    'jpeg',
    'png',
    'webp',
    'gif',
    'jfif',
    'avif'
];

$originalName = $_FILES['file']['name'];
$fileSize = $_FILES['file']['size'];
$tmpPath = $_FILES['file']['tmp_name'];

$extension = strtolower(pathinfo($originalName, PATHINFO_EXTENSION));

/**
 * Validate extension
 */
if (!in_array($extension, $allowedExtensions)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Invalid file type"
    ]);
    exit;
}

/**
 * Validate file size (5MB)
 */
$maxFileSize = 5 * 1024 * 1024;

if ($fileSize > $maxFileSize) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "File size exceeds 5MB"
    ]);
    exit;
}

/**
 * Generate unique filename
 */
$newFileName = uniqid("img_", true) . "." . $extension;

$targetPath = $uploadDir . $newFileName;

/**
 * Move uploaded file
 */
if (move_uploaded_file($tmpPath, $targetPath)) {

    $publicUrl = "https://" . $_SERVER['HTTP_HOST'] . "/uploads/" . $newFileName;

    echo json_encode([
        "success" => true,
        "url" => $publicUrl,
        "fileName" => $newFileName
    ]);

} else {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Upload failed"
    ]);
}
?>