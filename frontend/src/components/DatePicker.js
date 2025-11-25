export default function DatePicker({ date, onDateChange }) {
  return (
    <div style={styles.box}>
      <label style={styles.label}>📅 Pick a Date</label>
      <input
        type="date"
        value={date}
        max={new Date().toISOString().split("T")[0]}
        onChange={(e) => onDateChange(e.target.value)}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  box: {
    margin: "10px auto 30px",
    textAlign: "center",
  },
  label: {
    marginRight: "15px",
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  input: {
    padding: "10px 15px",
    borderRadius: "10px",
    border: "none",
    fontSize: "1rem",
    outline: "none",
    background: "#1b2138",
    color: "white",
    boxShadow: "0 0 10px #4facfe50",
  },
};
