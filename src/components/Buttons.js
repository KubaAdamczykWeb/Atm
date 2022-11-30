export default function Buttons(props) {
  const { leftButtons = [], rightButtons = [] } = props;

  return (
    <div className="buttons">
      <div className="left-buttons">
        {leftButtons.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              item.action();
            }}
          >
            <span className="icon">&lsaquo;</span>
            <span>{item.text}</span>
          </button>
        ))}
      </div>
      <div className="right-buttons">
        {rightButtons.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              item.action();
            }}
          >
            <span>{item.text}</span>
            <span className="icon">&rsaquo;</span>
          </button>
        ))}
      </div>
    </div>
  );
}
