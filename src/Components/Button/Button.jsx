//Styles
import { ButtonStyle } from "./ButtonStyle";

export const Button = ({ id, text, action }) => {
  const handleAction = (e) => {
    action(e);
  };

  return (
    <ButtonStyle>
      <button id={id} onClick={handleAction}>
        {text}
      </button>
    </ButtonStyle>
  );
};
