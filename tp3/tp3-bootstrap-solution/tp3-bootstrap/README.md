# TP3 - Formulaire avec Bootstrap 5.1.3

Solution pour l'énoncé : https://github.com/bilelz/aw3ir.readme/blob/main/tp3/readme.md

## Fichiers

- `index.html` : formulaire Bootstrap et modal.
- `js/form-validation.js` : validation JavaScript et lien dynamique Google Maps.
- `css/bootstrap.css` et `js/bootstrap.bundle.js` : bibliothèques officielles à télécharger (elles ne sont pas intégrées dans cette archive).
- `telecharger-bootstrap.ps1` et `telecharger-bootstrap.sh` : scripts de téléchargement facultatifs.

## Installation

**Option A : téléchargement manuel, sans terminal**

1. Allez sur https://getbootstrap.com/docs/5.1/getting-started/download/ .
2. Téléchargez *Compiled CSS and JS* (version 5.1.3).
3. Dans l'archive Bootstrap, copiez `css/bootstrap.css` dans le dossier `css` du TP.
4. Copiez `js/bootstrap.bundle.js` dans le dossier `js` du TP.
5. Ouvrez `index.html` avec votre navigateur ou l'extension Live Server de Visual Studio Code.

**Option B : téléchargement automatique (Internet nécessaire)**

- Windows PowerShell, depuis ce dossier : `powershell -ExecutionPolicy Bypass -File .\telecharger-bootstrap.ps1`
- macOS, Linux ou Git Bash : `bash telecharger-bootstrap.sh`

## Vérifications

- Sans aucun champ : modal listant les champs obligatoires.
- Nom, prénom, adresse ou ville de moins de 5 caractères : modal d'erreur et bordure rouge.
- Adresse e-mail incorrecte : modal d'erreur.
- Date de naissance dans le futur : modal d'erreur.
- Tout correct : modal de confirmation et lien vers Google Maps pour la ville renseignée.

La dernière version de l'énoncé indique de **ne pas afficher d'image Google Maps**.
