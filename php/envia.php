<?php
$destino = "leonardoriascos82@gmail.com";
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$telefono = $_POST["telefono"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];
$header = "Mensaje enviado desde mi portafolio";
$contenido = "Nombre: ". $nombre . "\n\nApellidos: " . $apellidos . "\n\nTelefono: " . $telefono . "\n\nCorreo: " . $correo . "\n\nMensaje: " . $mensaje;
mail($destino, "Contacto", $contenido, $header);
echo"<script>alert('Correo enviado exitosamente, pronto Leonardo se contactará contigo')</script>";
?>