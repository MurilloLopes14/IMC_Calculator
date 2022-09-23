import styled from "styled-components";

export const ButtonStyle = styled.div`
  display: flex;

  & button {
    text-transform: uppercase;
    padding: 1rem 1.5rem;
    background-color: var(--color_2);
    border: none;
    color: azure;
    cursor: pointer;
    opacity: 0.9;
    flex: 1;
  }

  & button:hover {
    opacity: 1;
  }

  & #clear {
    background-color: var(--color_1);
  }
`;
