function loadContactModule() {
  const moduleContentDiv = document.querySelector("#module-content");
  moduleContentDiv.textContent = "";

  const topSection = document.createElement("section");
  topSection.className = "top-section";
  const h1Pizzeria = document.createElement("h1");
  h1Pizzeria.textContent = "Pizzeria Da Nono";
  const h1ContactUs = document.createElement("h1");
  h1ContactUs.textContent = "Contact Us";
  topSection.appendChild(h1Pizzeria);
  topSection.appendChild(h1ContactUs);

  const mainContact = document.createElement("main");
  mainContact.className = "contact";
  const contactContentSection = document.createElement("section");
  contactContentSection.className = "contact-content";

  const p = document.createElement("p");
  p.textContent =
    "We'd love to hear from you! Whether you have a question about our menu, want to make a reservation, or just want to share your experience, please feel free to reach out. Fill out the form below, and we will get back to you as soon as possible.";
  contactContentSection.appendChild(p);

  const form = document.createElement("form");
  form.className = "contact-form";
  form.id = "contact-form";
  form.action = "#";
  form.method = "#";

  function createFormGroup(labelText, inputType, inputId, inputName) {
    const formGroup = document.createElement("div");
    formGroup.className = "form-group";

    const label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.textContent = labelText;

    const input = document.createElement(
      inputType === "textarea" ? "textarea" : "input"
    );
    if (inputType !== "textarea") {
      input.type = inputType;
    }
    input.id = inputId;
    input.name = inputName;

    formGroup.appendChild(label);
    formGroup.appendChild(input);

    return formGroup;
  }

  form.appendChild(createFormGroup("Name:", "text", "form-name-input", "name"));
  form.appendChild(
    createFormGroup("Email:", "email", "form-email-input", "email")
  );
  form.appendChild(
    createFormGroup("Subject:", "text", "form-subject-input", "subject")
  );
  form.appendChild(
    createFormGroup("Message:", "textarea", "message", "form-message-input")
  );

  const button = document.createElement("button");
  button.className = "form-submit-button";
  button.id = "form-submit";
  button.type = "submit";
  button.textContent = "Send Message";
  button.addEventListener("click", (e) => { e.preventDefault() });
  form.appendChild(button);

  contactContentSection.appendChild(form);
  mainContact.appendChild(contactContentSection);

  moduleContentDiv.appendChild(topSection);
  moduleContentDiv.appendChild(mainContact);
}

export { loadContactModule };
