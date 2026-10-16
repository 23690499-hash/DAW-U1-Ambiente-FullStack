<?php

session_start();

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Método no permitido.'
    ]);
    exit;
}

$datos = json_decode(file_get_contents('php://input'), true);

$usuario = trim($datos['usuario'] ?? '');
$contrasena = $datos['contrasena'] ?? '';

// Credenciales de prueba para la práctica.
if ($usuario === 'admin' && $contrasena === '123456') {
    session_regenerate_id(true);

    $_SESSION['user'] = [
        'usuario' => 'admin',
        'nombre' => 'Administrador'
    ];

    echo json_encode([
        'success' => true,
        'message' => 'Inicio de sesión exitoso.',
        'user' => $_SESSION['user']
    ]);
    exit;
}

http_response_code(401);

echo json_encode([
    'success' => false,
    'message' => 'Usuario o contraseña incorrectos.'
]);
