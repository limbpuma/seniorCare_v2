# Script para limpiar la carpeta docs
# Solo conserva la documentación V2 y elimina el resto

# Archivos a conservar
$filesToKeep = @(
    "V2_DOCUMENTATION.md"
)

# Obtener todos los archivos en la carpeta docs
$allFiles = Get-ChildItem -Path "docs" -File

# Eliminar archivos que no están en la lista de conservación
foreach ($file in $allFiles) {
    if ($filesToKeep -notcontains $file.Name) {
        Write-Host "Eliminando archivo: $($file.Name)"
        Remove-Item -Path $file.FullName -Force
    }
}

Write-Host "Limpieza completada. Solo se conservaron los siguientes archivos:"
foreach ($file in $filesToKeep) {
    Write-Host " - $file"
}
