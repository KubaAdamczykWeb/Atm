export default function TextContent(props) {
  const { header, text } = props;

  return (
    <div className="text-content">
      <h2>{header}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
