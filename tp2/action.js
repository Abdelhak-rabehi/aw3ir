window.onload = () => {
    // Récupération des données envoyées par le formulaire dans l'URL
    const paramsString = document.location.search; 
    const searchParams = new URLSearchParams(paramsString); 

    // Itération sur les paramètres de la recherche
    for (const param of searchParams) {
        console.log(param); // Affichage dans la console pour voir la donnée [clé, valeur]

        const elementId = param[0];   // exemple: "name", "firstname", etc.
        const elementValue = param[1]; // exemple: "John", "Doe", etc.
        const element = document.getElementById(elementId);

        // Mettre à jour le texte si l'élément existe dans la page HTML
        if (element !== null) {
            element.textContent = elementValue;
        }

        // Cas spécifique : Construire le lien Google Maps pour l'adresse
        if (param[0] === "address" && element !== null) {
            element.href = `https://www.google.com/maps/search/?api=1&query=${elementValue}`;
        } 
        // Cas spécifique : Construire le lien "mailto" pour l'email
        else if (param[0] === "email" && element !== null) {
            element.href = `mailto:${elementValue}?subject=Hello!&body=What's up?`;
        }
    }
};