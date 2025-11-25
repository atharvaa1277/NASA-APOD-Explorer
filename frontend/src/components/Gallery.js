export default function Gallery({ items = [] }) {
  if (!items.length) return null;

  // ✔ Filter only images
  const imageItems = items.filter(item => item.media_type === "image");

  if (!imageItems.length) return null;

  return (
    <div style={styles.grid}>
      {imageItems.map((item, i) => (
        <div key={i} style={styles.card}>
          <img src={item.url} alt={item.title} style={styles.img} />
          <div style={styles.caption}>{item.title}</div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#111727",
    padding: "10px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 0 15px #4facfe30",
    cursor: "pointer",
    transition: "transform 0.3s, boxShadow 0.3s",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "200px",      // uniform height
    objectFit: "cover",   // no distortion, looks clean
    borderRadius: "10px",
    display: "block",
  },
  caption: {
    marginTop: "10px",
    fontSize: "0.9rem",
    color: "white",
  },
};
