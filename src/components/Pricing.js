import React from "react";
import "./Pricing.css";

function Pricing(props) {
  return (
    <div className="pricing">
      <div>
        <h3 className="text-white">
          Selecciona el tipo de entrenamiento que desees y nuestro Staff{" "}
        </h3>
      </div>
      <div className="card-container">
        <div className="card">
          <h3>PLAN SÓLO RUTINA PERSONALIZADA</h3>
          <span className="bar"></span>
          <p className="btc">USD 12 mensual</p>
          <p className="">Argentina: $4.500 tu tarjeta hace la conversión</p>
          <p>✔ Rutina Personalizada </p>
          <p>✔ Videos demonstrando los ejercicios </p>
          <p>✔ Seguimiento por whastapp </p>
          <p>✔ Ingreso a grupo privado </p>
          <a
            href="https://api.whatsapp.com/send?phone=541136710228&text=%C2%A1Hola%20Martin%20Ercolano!%20Quiero%20comprar%20el%20plan%20RUTINA%20PERSONALIZADA%20"
            className="btn"
          >
            Quiero Empezar
          </a>
        </div>
        <div className="card">
          <h3>PROGRAMA VIP + COMUNIDAD WHATSAPP</h3>
          <span className="bar"></span>
          <p className="btc">USD 25 mensual</p>
          <p className="">Argentina: $9500 tu tarjeta hace la conversión</p>
          <p>✔ Rutina Personalizada</p>
          <p>✔ Plan de comidas Personalizado </p>
          <p>✔ Lista de compras </p>
          <p>✔ Diferentes opciones de comidas </p>
          <p>✔ Videos demonstrando los ejercicios </p>
          <p>✔ Grupo whatsapp motivación y coaching </p>
          <a
            href="https://api.whatsapp.com/send?phone=541136710228&text=%C2%A1Hola%20Martin%20Ercolano!%20Quiero%20comprar%20el%20plan%20PROGRAMA%20VIP%20"
            className="btn"
          >
            Quiero Empezar
          </a>
        </div>
        <div className="card">
          <h3>PLAN PERSONALIZADO ELITE + COACHING</h3>
          <span className="bar"></span>
          <p className="btc">USD 150 mensual</p>
          <p className="">Argentina: $57.000 tu tarjeta hace la conversión</p>
          <p>✔ Rutina Personalizada </p>
          <p>✔ Plan de comidas Personalizado </p>
          <p>✔ Lista de compras </p>
          <p>✔ Diferentes opciones de comidas </p>
          <p>✔ Videos demonstrando los ejercicios </p>
          <p>✔ Grupo whatsapp motivación y coaching </p>
          <p>✔ Video llamada privada de coaching 1 a 1 </p>
          <a
            href="https://api.whatsapp.com/send?phone=541136710228&text=%C2%A1Hola%20Martin%20Ercolano!%20Quiero%20comprar%20el%20plan%20ELITE%20COACHING%20"
            className="btn"
          >
            Quiero Empezar
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
