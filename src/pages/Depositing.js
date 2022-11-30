import Layout from "./../components/Layout";
import AmountInput from "./../components/AmountInput";
import { useState } from "react";
import { currency, depositLimit, depositsDenominations } from "./../settings";
import denominationErrorDetect from "./../functions/denominationErrorDetect";

export default function Depositing(props) {
  const { setPage, setStatementData, setBalance, balance } = props;
  const [amount, setAmount] = useState("");
  const header = "Enter the amount that you are depositing";

  const validation = (amount) => {
    if (amount < 1) {
      return { status: "fail", message: "You have not entered any amount" };
    } else if (depositLimit && amount > depositLimit) {
      return {
        status: "fail",
        message: `The maximum amount you can deposit in this ATM is ${depositLimit} ${currency}`
      };
    } else if (denominationErrorDetect(amount, depositsDenominations)) {
      return {
        status: "fail",
        message: `The ATM accepts denominations: ${depositsDenominations.join(
          ", "
        )} ${currency}`
      };
    } else {
      return {
        status: "ok",
        message: `You deposited ${amount} ${currency} into your account`
      };
    }
  };

  const goBack = () => {
    setPage("start");
  };

  const confirm = () => {
    const amountNamber = Number(amount);
    const validationResult = validation(amountNamber);

    if (validationResult.status === "ok") {
      setBalance((prev) => prev + amountNamber);
      setStatementData({
        text: validationResult.message
      });
      setPage("success");
    } else {
      setStatementData({
        header: validationResult.message,
        text: "Do you want to deposit a different amount?",
        page: "depositing"
      });
      setPage("error");
    }
  };

  return (
    <Layout
      pageClass="depositing"
      header={header}
      balance={balance}
      leftButtons={[{ text: "Back", action: goBack }]}
      rightButtons={[{ text: "Confirm", action: confirm }]}
      keyboarListener={{
        onCancel: goBack,
        onConfirm: confirm,
        setAmount: setAmount
      }}
    >
      <AmountInput amount={amount} setAmount={setAmount} />
    </Layout>
  );
}
