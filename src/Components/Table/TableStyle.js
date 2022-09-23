import styled from "styled-components";

export const TableStyle = styled.div`
  text-align: center;

  & .result {
    display: flex;
    flex-direction: column;
    text-align: center;

    & h3 {
      margin-top: 1rem;
      color: azure;
    }
  }

  & #imc_number {
    font-size: 2.4rem;
    margin-bottom: 0.6rem;
  }

  & #imc_info {
    font-size: 1.4rem;
    color: azure;
  }

  & #imc_table {
    margin: 1.5rem 0;
    font-size: 0.8rem;

    & .table_header {
      font-weight: 600;
      color: aliceblue;
      display: flex;
      justify-content: space-between;
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid var(--color_1);

      & h4 {
        flex: 1;
      }

      & h4:nth-child(3) {
        max-width: 80px;
      }
    }
  }

  & .table_data {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid var(--color_1);

    & p {
      flex: 1;
    }

    & p:nth-child(3) {
      max-width: 80px;
    }
  }

  & #back {
    align-self: center;
  }

  & .good {
    color: #4ef90f;
  }
  & .low {
    color: #e3ff46;
  }
  & .medium {
    color: #dba806;
  }
  & .high {
    color: #c50e0e;
  }
`;
