import React from "react";
import "./Contact.modules.css";

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  let errors = {};
  if (!inputs.name) {
    errors.name = "Se requiere un nombre";
  }
  if (!inputs.email) {
    errors.email = "Se requiere un correo electrónico";
  } else if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (inputs.phone <= 0) {
    errors.phone = "Sólo números positivos";
  }
  if (!inputs.subject) {
    errors.subject = "Se requiere un asunto";
  }
  if (!inputs.message) {
    errors.message = "Se requiere un mensaje";
  }
  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    phone: 0,
    subject: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    setErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (Object.keys(errors).length === 0) alert('Debes corregir los errores');
      else {
        alert('Datos completos');
        setInputs({
          name: "",
          email: "",
          phone: 0,
          subject: "",
          message: "",
        });
      }
    setErrors({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  }

  return (
    <div>
      <div>Crear Formulario</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          className={errors.name && "warning"}
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          placeholder="Escribe tu nombre..."
        />
        {errors.name && <p className="danger">{errors.name}</p>}

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          className={errors.email && "warning"}
          type="text"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Escribe tu email..."
        />
        {errors.email && <p className="danger">{errors.email}</p>}

        <label htmlFor="phone">Teléfono:</label>
        <input
          className={errors.phone && "warning"}
          type="number"
          name="phone"
          value={inputs.phone}
          onChange={handleChange}
          placeholder="Escribe un teléfono..."
        />
        {errors.phone && <p className="danger">{errors.phone}</p>}

        <label htmlFor="subject">Asunto:</label>
        <input
          className={errors.subject && "warning"}
          type="text"
          name="subject"
          value={inputs.subject}
          onChange={handleChange}
          placeholder="Escribe el asunto..."
        />
        {errors.subject && <p className="danger">{errors.subject}</p>}

        <label htmlFor="message">Mensaje:</label>
        <textarea
          name="message"
          value={inputs.message}
          onChange={handleChange}
          id=""
          type="text"
          cols="30"
          className={errors.message && "warning"}
          rows="10"
          placeholder="Escribe tu mensaje..."
        />
        {errors.message && <p className="danger">{errors.message}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
