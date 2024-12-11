import styled from '@emotion/styled';

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tfoot = styled.tfoot``;

export const TableLayout = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  text-align: left;
  font-size: 14px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 2px;
  overflow: hidden;

  ${Thead} {
    th {
      background-color: #666666;
      color: #fff;
      padding: 14px;
      border: 1px solid #646464;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      text-align: center;
    }
  }

  ${Tbody} {
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    tr:nth-child(odd) {
      background-color: #fff;
    }

    td {
      padding: 14px;
      border: 1px solid #ddd;
      text-align: center;
    }

    td:nth-child(2) {
      color: #666;
    }

    tr:hover {
      background-color: #ffecd2;
    }
  }

  ${Tfoot} {
  }

  @media (max-width: 600px) {
    table {
      font-size: 16px;
    }
  }
`;
