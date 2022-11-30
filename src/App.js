import ActionSelector from "./pages/ActionSelector";
import Depositing from "./pages/Depositing";
import Withdrawing from "./pages/Withdrawing";
import SuccessStatement from "./pages/SuccessStatement";
import ErrorStatement from "./pages/ErrorStatement";

import { useState } from "react";

import "./styles/styles.scss";

export default function App() {
  const [balance, setBalance] = useState(1000);
  const [page, setPage] = useState("start");
  const [statementData, setStatementData] = useState();

  const pages = {
    start: () => <ActionSelector balance={balance} setPage={setPage} />,
    depositing: () => (
      <Depositing
        balance={balance}
        setPage={setPage}
        setBalance={setBalance}
        setStatementData={setStatementData}
      />
    ),
    withdrawing: () => (
      <Withdrawing
        balance={balance}
        setPage={setPage}
        setBalance={setBalance}
        setStatementData={setStatementData}
      />
    ),
    success: () => (
      <SuccessStatement
        balance={balance}
        setPage={setPage}
        statementData={statementData}
        setStatementData={setStatementData}
      />
    ),
    error: () => (
      <ErrorStatement
        balance={balance}
        setPage={setPage}
        statementData={statementData}
        setStatementData={setStatementData}
      />
    )
  };

  return pages[page]();
}
