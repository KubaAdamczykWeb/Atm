export default function StatusIcon(props) {
  const { status } = props;

  return (
    <div className={"status-icon " + status}>
      {status === "success" ? "✔" : "✕"}
    </div>
  );
}
