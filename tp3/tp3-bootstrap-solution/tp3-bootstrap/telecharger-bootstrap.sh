#!/usr/bin/env bash
# Installation de Bootstrap 5.1.3 pour le TP3 (macOS / Linux / Git Bash)
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p css js
curl -fL --retry 2 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.css' -o css/bootstrap.css
curl -fL --retry 2 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.js' -o js/bootstrap.bundle.js
echo 'Bootstrap 5.1.3 installe ! Ouvrez index.html dans un navigateur.'
