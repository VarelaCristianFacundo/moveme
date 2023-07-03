import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import "./Form.css";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = data;

  const [success, setSuccess] = useState();
  const [danger, setDanger] = useState();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (data.name != "" && data.email != "" && data.message != "") {
        const response = await fetch(
          "https://v1.nocodeapi.com/cristianvarela/google_sheets/AoSZboOOODpSmSON?tabId=contacto",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([
              [name, email, message, new Date().toLocaleString()],
            ]),
          }
        );
        await response.json();
        setData({ ...data, name: "", email: "", message: "" });
        setSuccess(true);
        setDanger(false);
      } else {
        setDanger(true);
      }
    } catch (err) {
      console.log(err);
      setDanger(true);
    }
  };

  return (
    <>
      <div className="form">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="form.Name" className="formContent">
            <Form.Control
              type="text"
              placeholder="Escribe tu nombre"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="form.Name" className="formContent">
            <Form.Control
              width={"100%"}
              type="email"
              placeholder="Escribe tu email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="form.Textarea" className="formContent">
            <br />
            <Form.Control
              value={message}
              onChange={handleChange}
              name="message"
              as="textarea"
              rows={5}
              placeholder="Escribe tu mensaje"
            />
          </Form.Group>
          <br />
          <button className="btn">Enviar Mensaje</button>
        </Form>
      </div>
      {success ? (
        <Alert key="success" variant="success" className="alert">
          El mensaje ha sido enviado
        </Alert>
      ) : (
        <></>
      )}
      {danger ? (
        <Alert key="danger" variant="danger">
          El mensaje no pudo enviarse, inténtalo nuevamente
        </Alert>
      ) : (
        <></>
      )}
    </>
  );
}

// import React from "react";
// import "./Form.css";

// function Form(props) {
//   return (
//     <div className="form">
//       <form>
//         <label>Nombre</label>
//         <input type="text"></input>
//         <label>Email</label>
//         <input type="email"></input>
//         <label>Asunto</label>
//         <input type="text"></input>
//         <label>Consulta</label>
//         <textarea rows="6" placeholder="Escribime tu consulta" />
//         <button className="btn">Enviar</button>
//       </form>
//     </div>
//   );
// }

// export default Form;
