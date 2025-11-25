export default function APODDisplay({ apod }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{apod.title}</h2>

      {apod.media_type === "image" ? (
        <img src={apod.url} alt={apod.title} style={styles.img} />
      ) : (
        <iframe
          title={apod.title}
          src={apod.url}
          style={styles.video}
          allowFullScreen
        ></iframe>
      )}

      <p style={styles.text}>{apod.explanation}</p>
      <p style={styles.copyright}>
        © {apod.copyright || "Public Domain / NASA"}
      </p>
    </div>
  );
}

const styles = {
  card: {
    background: "#111727",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 0 20px #4facfe40",
    marginBottom: "40px",
  },
  title: {
    fontSize: "1.8rem",
    color: "#4facfe",
    marginBottom: "15px",
  },
  img: {
    width: "100%",       // full width of container
    height: "auto",      // maintain aspect ratio
    maxHeight: "80vh",   // don't exceed viewport height
    objectFit: "contain",// prevent cropping
    borderRadius: "15px",
    marginBottom: "20px",
    display: "block",
  },
  video: {
    width: "100%",
    height: "60vh",      // responsive height
    borderRadius: "15px",
    marginBottom: "20px",
    display: "block",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#e0e0e0",
  },
  copyright: {
    marginTop: "10px",
    color: "#a5b6ff",
  },
};
