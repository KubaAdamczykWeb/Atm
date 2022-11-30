import Layout from "./../components/Layout";
import StatusIcon from "./../components/StatusIcon";

export default function SuccessStatement(props) {
  const { statementData, setStatementData, setPage, balance } = props;
  const header = "Transaction completed";
  const { text } = statementData;

  const goBack = () => {
    setStatementData("");
    setPage("start");
  };

  return (
    <Layout
      header={header}
      text={text}
      balance={balance}
      leftButtons={[{ text: "Back", action: goBack }]}
      keyboarListener={{
        onCancel: goBack,
        onConfirm: goBack
      }}
    >
      <StatusIcon status="success" />
    </Layout>
  );
}
