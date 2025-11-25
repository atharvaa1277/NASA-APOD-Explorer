import { useEffect, useState } from "react";
import APODDisplay from "./components/APODDisplay";
import DatePicker from "./components/DatePicker";
import Gallery from "./components/Gallery";
import "./theme.css";

function App() {
  const [apod, setApod] = useState(null);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [recent, setRecent] = useState([]);

  // Fetch APOD from backend
  const fetchData = (selectedDate = "") => {
    setLoading(true);
    let url = "http://localhost:3000/api/apod/today";
    if (selectedDate) url = `http://localhost:3000/api/apod?date=${selectedDate}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setApod(data.payload);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  // On mount → fetch today's APOD + recent gallery
  useEffect(() => {
    fetchData();

    fetch("http://localhost:3000/api/apod/recent?count=9")
      .then((res) => res.json())
      .then((data) => {
        if (data.ok && data.payload) setRecent(data.payload);
      });
  }, []);

  const handleDateChange = (selected) => {
    setDate(selected);
    fetchData(selected);
  };

  return (
    <div style={styles.container} className="app-container">
      <h1 className="title">🚀 NASA APOD Explorer</h1>
      <p className="subtitle">Discover the cosmos, one day at a time</p>

      {/* Date Picker */}
      <DatePicker date={date} onDateChange={handleDateChange} />

      {/* Main APOD Display */}
      {loading ? (
        <div className="loading-box">Loading...</div>
      ) : apod ? (
        <APODDisplay apod={apod} />
      ) : (
        <div className="no-data">No data found.</div>
      )}

      {/* Recent Gallery */}
      <h2 className="gallery-title">🌌 Recent APOD Gallery</h2>
      <Gallery items={recent} />
    </div>
  );
}

// Responsive container style
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "1200px", // optional: increase if you want wider images
    width: "90%",        // responsive width
    margin: "0 auto",
  },
};

export default App;
