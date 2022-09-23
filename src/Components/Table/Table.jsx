//Styles
import { Button } from "../Button/Button";
import { TableStyle } from "./TableStyle";

export const Table = ({ data, imc, info, infoClass, resetCalc }) => {
  return (
    <TableStyle>
      <h1>Tabela de IMC</h1>
      <div className="result">
        <p id="imc_number">
          Seu IMC: <span className={infoClass}>{imc}</span>
        </p>
        <p id="imc_info">
          Situação atual: <span className={infoClass}>{info}</span>
        </p>
        <h3>Confira as classificações</h3>
        <div id="imc_table">
          <div className="table_header">
            <h4>IMC</h4>
            <h4>Classificação</h4>
            <h4>Obesidade</h4>
          </div>
          {data.map((item) => (
            <div className="table_data" key={item.info}>
              <p>{item.classification}</p>
              <p>{item.info}</p>
              <p>{item.obesity}</p>
            </div>
          ))}
        </div>
        <Button id="back" text="Voltar" action={resetCalc} />
      </div>
    </TableStyle>
  );
};
