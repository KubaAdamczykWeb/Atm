import { currency } from "./../settings";

export default function AmountInput(props) {
  const { setAmount, amount } = props;

  const changeAmount = (event) => {
    const amount = event.target.value.replace(/^0+/, "");
    setAmount(amount);
  };

  return (
    <label className="amount-input">
      <input
        type="number"
        value={amount}
        onChange={changeAmount}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        size="15"
      />
      <span>{currency}</span>
    </label>
  );
}
