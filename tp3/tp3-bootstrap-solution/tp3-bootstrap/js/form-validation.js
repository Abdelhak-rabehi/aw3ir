
window.onload = function () {

  console.log("DOM ready!");

  const form = document.getElementById("registrationForm");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  const myModal = new bootstrap.Modal(
    document.getElementById("myModal")
  );

  // 1. Vérification de l'adresse e-mail
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
  }

  // 2. Vérification de la date de naissance
  function isValidBirthday(value) {

    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return false;
    }

    const birthdayDate = new Date(value + "T00:00:00");

    if (Number.isNaN(birthdayDate.getTime())) {
      return false;
    }

    const [year, month, day] = value.split("-").map(Number);

    if (
      birthdayDate.getFullYear() !== year ||
      birthdayDate.getMonth() + 1 !== month ||
      birthdayDate.getDate() !== day
    ) {
      return false;
    }

    const birthdayTimestamp = birthdayDate.getTime();
    const nowTimestamp = Date.now();

    return birthdayTimestamp <= nowTimestamp;
  }

  // 3. Intercepter la soumission
  form.addEventListener("submit", function (event) {

    event.preventDefault();

    const errors = [];

    const fields = form.querySelectorAll("input");

    fields.forEach(function (field) {
      field.classList.remove("is-invalid");
    });

    function addError(field, message) {
      field.classList.add("is-invalid");
      errors.push(message);
    }

    // 4. Vérifier les champs texte
    const textFields = [
      { id: "name", label: "Nom" },
      { id: "firstname", label: "Prénom" },
      { id: "address", label: "Adresse postale" },
      { id: "city", label: "Ville" }
    ];

    textFields.forEach(function (item) {

      const field = document.getElementById(item.id);
      const value = field.value.trim();

      if (value.length === 0) {

        addError(
          field,
          `Le champ « ${item.label} » est obligatoire.`
        );

      } else if (value.length < 5) {

        addError(
          field,
          `Le champ « ${item.label} » doit contenir au moins 5 caractères.`
        );

      }
    });

    // 5. Vérifier la date de naissance
    const birthday = document.getElementById("birthday");

    if (birthday.value === "") {

      addError(
        birthday,
        "La date de naissance est obligatoire."
      );

    } else if (!isValidBirthday(birthday.value)) {

      addError(
        birthday,
        "La date de naissance est invalide ou dans le futur."
      );

    }

    // 6. Vérifier l'adresse e-mail
    const email = document.getElementById("email");

    if (email.value.trim() === "") {

      addError(
        email,
        "L'adresse e-mail est obligatoire."
      );

    } else if (!validateEmail(email.value.trim())) {

      addError(
        email,
        "L'adresse e-mail n'est pas au bon format."
      );

    }

    // 7. Effacer l'ancien contenu de la modal
    modalBody.replaceChildren();

    // 8. Si des erreurs existent
    if (errors.length > 0) {

      modalTitle.textContent = "Erreur de validation";

      const intro = document.createElement("p");

      intro.textContent =
        "Veuillez corriger les erreurs suivantes :";

      modalBody.appendChild(intro);

      const list = document.createElement("ul");
      list.className = "mb-0";

      errors.forEach(function (message) {

        const item = document.createElement("li");
        item.textContent = message;

        list.appendChild(item);

      });

      modalBody.appendChild(list);

    } else {

      // 9. Tous les champs sont corrects
      modalTitle.textContent = "Formulaire valide !";

      const confirmation = document.createElement("p");

      confirmation.textContent =
        "Tous les champs sont corrects.";

      modalBody.appendChild(confirmation);

      // 10. Récupérer la ville
      const city = document
        .getElementById("city")
        .value.trim();

      const description = document.createElement("p");

      description.appendChild(
        document.createTextNode(
          "Afficher la ville sur Google Maps : "
        )
      );

      // 11. Créer le lien Google Maps
      const link = document.createElement("a");

      link.href =
        "https://maps.google.com/maps?q=" +
        encodeURIComponent(city);

      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = city;

      description.appendChild(link);
      modalBody.appendChild(description);

    }

    // 12. Afficher la fenêtre modale
    myModal.show();

  });

};
