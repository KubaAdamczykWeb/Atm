import Layout from "./../components/Layout";

export default function ActionSelector(props) {
  const { balance, setPage } = props;
  const header = "Choose what you want to do:";

  const depositPage = () => {
    setPage("depositing");
  };

  const withdrawPage = () => {
    setPage("withdrawing");
  };

  return (
    <Layout
      pageClass="action-selector"
      header={header}
      balance={balance}
      rightButtons={[
        { text: "Deposit money", action: depositPage },
        { text: "Withdraw money", action: withdrawPage }
      ]}
    />
  );
}
