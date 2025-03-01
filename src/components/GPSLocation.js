import { useState, useEffect } from "react";
import GetLocation from "./gps/Getlocation";
import GoogleMapsEmbed from "./gps/GoogleMapsEmbed";

const GPSComponent = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  // Correct function assignment
  const getLocation = () => GetLocation(setLocation, setError, setAddress);

  useEffect(() => {
    getLocation(); // Auto-fetch location on mount
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>GPS Tracker</h2>
      <button
        onClick={getLocation} // Correct function reference
        style={{ padding: "10px", marginBottom: "10px" }}
      >
        Get My Location
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {location.latitude && (
        <div>
          <p>
            <strong>Latitude:</strong> {location.latitude},{" "}
            <strong>Longitude:</strong> {location.longitude}
          </p>
          <p>
            <strong>Address:</strong> {address || "Fetching..."}
          </p>
          {/* <GoogleMapsEmbed
            latitude={location.latitude}
            longitude={location.longitude}
          /> */}
        </div>
      )}
    </div>
  );
};

export default GPSComponent;
