import { currency, fastWithdrawButtons } from "./../settings";

export default function WithdrawButtons(props) {
  const { action } = props;

  return (
    <div className="fast-withdraw">
      {fastWithdrawButtons &&
        fastWithdrawButtons.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              action(item);
            }}
          >
            {item + " " + currency}
          </button>
        ))}
    </div>
  );
}
