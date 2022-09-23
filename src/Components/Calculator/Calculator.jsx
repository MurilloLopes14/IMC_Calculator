//Styles
import { CalculatorStyle } from "./CalculatorStyle";
import { Button } from "../Button/Button";

//Hooks
import { useState, useEffect } from "react";

export const Calculator = ({ calcImc }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {}, []);

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handleHeight = (e) => {
    const updatedValue = validDigits(e.target.value);

    setHeight(updatedValue);
  };

  const handleWeight = (e) => {
    const updatedValue = validDigits(e.target.value);

    setWeight(updatedValue);
  };

  return (
    <CalculatorStyle>
      <h2>Calculadora de IMC</h2>
      <form id="imc_form">
        <div className="form_inputs">
          <div className="form_control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo: 1,75"
              onChange={(e) => handleHeight(e)}
              value={height}
            />
          </div>
          <div className="form_control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name=""
              id="weight"
              placeholder="Exemplo: 60kg"
              onChange={(e) => handleWeight(e)}
              value={weight}
            />
          </div>
        </div>
        <div className="action_control">
          <Button
            id="calc_btn"
            text="Calcular"
            action={(e) => calcImc(e, height, weight)}
          />
          <Button id="clear" text="Limpar" action={clearForm} />
        </div>
      </form>
    </CalculatorStyle>
  );
};
