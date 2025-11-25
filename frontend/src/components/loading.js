export default function Loading() {
  return (
    <div style={styles.loaderBox}>
      <div style={styles.loader}></div>
      <p>Fetching data from NASA…</p>
    </div>
  );
}

const styles = {
  loaderBox: {
    textAlign: "center",
    marginTop: "40px",
  },
  loader: {
    margin: "auto",
    width: "60px",
    height: "60px",
    border: "6px solid #ffffff40",
    borderTop: "6px solid #4facfe",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};
