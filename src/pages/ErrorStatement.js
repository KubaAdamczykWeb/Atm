import Layout from "./../components/Layout";
import StatusIcon from "./../components/StatusIcon";

export default function ErrorStatement(props) {
  const { statementData, setStatementData, setPage, balance } = props;
  const { header, text, page } = statementData;

  const goBack = () => {
    setStatementData("");
    setPage("start");
  };

  const newAmount = () => {
    setStatementData("");
    setPage(page);
  };

  return (
    <Layout
      pageClass="error"
      header={header}
      text={text}
      balance={balance}
      leftButtons={[{ text: "No. Go back", action: goBack }]}
      rightButtons={[{ text: "Yes. Change the amount", action: newAmount }]}
      keyboarListener={{
        onCancel: goBack,
        onConfirm: newAmount
      }}
    >
      <StatusIcon status="error" />
    </Layout>
  );
}
