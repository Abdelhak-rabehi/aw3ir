# Installation de Bootstrap 5.1.3 pour le TP3 (Windows / PowerShell)
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
New-Item -ItemType Directory -Force -Path 'css', 'js' | Out-Null
Invoke-WebRequest -Uri 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.css' -OutFile 'css/bootstrap.css' -UseBasicParsing
Invoke-WebRequest -Uri 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.js' -OutFile 'js/bootstrap.bundle.js' -UseBasicParsing
Write-Host 'Bootstrap 5.1.3 installe ! Ouvrez index.html dans un navigateur.'
