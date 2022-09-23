//Styles
import { AppSyle } from "./Styles.js";

//Components
import { Calculator } from "./Components/Calculator/Calculator.jsx";
import { Table } from "./Components/Table/Table.jsx";

//Hooks
import { useState } from "react";

//Data
import { data } from "./data/data";

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();
    if (!weight || !height) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    if (!info) return;
  };

  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <>
      <AppSyle>
        {!imc ? (
          <Calculator calcImc={calcImc} />
        ) : (
          <Table
            data={data}
            imc={imc}
            info={info}
            infoClass={infoClass}
            resetCalc={resetCalc}
          />
        )}
      </AppSyle>
    </>
  );
}

export default App;
