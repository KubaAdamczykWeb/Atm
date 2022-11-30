import Layout from "./../components/Layout";
import AmountInput from "./../components/AmountInput";
import WithdrawButtons from "./../components/WithdrawButtons";
import { useState } from "react";
import {
  currency,
  withdrawLimit,
  withdrawalsDenominations
} from "./../settings";
import denominationErrorDetect from "./../functions/denominationErrorDetect";

export default function Withdrawing(props) {
  const { setPage, setStatementData, setBalance, balance } = props;
  const [amount, setAmount] = useState("");
  const header = "How much do you wont to withdraw?";

  const validation = (amount) => {
    if (amount < 1) {
      return { status: "fail", message: "You have not entered any amount" };
    } else if (amount > balance) {
      return {
        status: "fail",
        message: "You do not have enought money in your account"
      };
    } else if (withdrawLimit && amount > withdrawLimit) {
      return {
        status: "fail",
        message: `The maximum amount you can withdraw in this ATM is ${withdrawLimit} ${currency}`
      };
    } else if (denominationErrorDetect(amount, withdrawalsDenominations)) {
      return {
        status: "fail",
        message: `The ATM only pays in denominations: ${withdrawalsDenominations.join(
          ", "
        )} ${currency}`
      };
    } else {
      return {
        status: "ok",
        message: `You have withdrawn ${amount} ${currency} from your account`
      };
    }
  };

  const goBack = () => {
    setPage("start");
  };

  const confirm = (amountNamber = Number(amount)) => {
    const validationResult = validation(amountNamber);

    if (validationResult.status === "ok") {
      setBalance((prev) => prev - amountNamber);
      setStatementData({
        text: validationResult.message
      });
      setPage("success");
    } else {
      setStatementData({
        header: validationResult.message,
        text: "Do you want to withdraw a different amount?",
        page: "withdrawing"
      });
      setPage("error");
    }
  };

  return (
    <Layout
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
      <WithdrawButtons action={confirm} />
    </Layout>
  );
}
