import styled from "styled-components";

export const CalculatorStyle = styled.div`
  & h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  & .form_inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & .form_control {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-bottom: 1rem;

    & label {
      font-weight: 700;
      margin-bottom: 0.6rem;
      font-size: 1.2rem;
      color: azure;
    }

    & input {
      padding: 1rem 0.5rem;
      outline: none;
    }
  }

  & .action_control {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1rem;
  }
`;
