export default function Keyboard(props) {
  const { keyboarListener = {} } = props;
  const { setAmount, onCancel, onConfirm } = keyboarListener;
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "000"];
  const actions = ["cancel", "clear", "enter", ""];

  const digitClick = (digit) => {
    if ("setAmount" in keyboarListener)
      setAmount((prev) => Number(prev + digit));
  };

  const actionClick = {
    cancel: () => {
      if ("onCancel" in keyboarListener) onCancel();
    },
    clear: () => {
      if ("setAmount" in keyboarListener) setAmount("");
    },
    enter: () => {
      if ("onConfirm" in keyboarListener) onConfirm();
    }
  };

  return (
    <div className="keyboard">
      <div className="digits">
        {digits.map((item) => (
          <button
            key={item}
            onClick={
              item
                ? () => {
                    digitClick(item);
                  }
                : () => false
            }
            disabled={item === ""}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="actions">
        {actions.map((item) => (
          <button
            className={item}
            key={item}
            onClick={
              item
                ? () => {
                    actionClick[item]();
                  }
                : () => false
            }
            disabled={item === ""}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
