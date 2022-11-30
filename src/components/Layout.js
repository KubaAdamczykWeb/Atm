import AccountBalance from "./AccountBalance";
import TextContent from "./TextContent";
import Keyboard from "./Keyboard";
import Buttons from "./Buttons";

export default function ActionSelector(props) {
  const {
    pageClass,
    balance,
    header,
    text,
    children,
    leftButtons,
    rightButtons,
    keyboarListener
  } = props;

  return (
    <>
      <div className={"atm-screen " + pageClass}>
        <div className="flex-container ">
          <AccountBalance balance={balance} />
          <TextContent header={header} text={text} />
          {children}
        </div>
        <Buttons leftButtons={leftButtons} rightButtons={rightButtons} />
      </div>
      <Keyboard keyboarListener={keyboarListener} />
    </>
  );
}
