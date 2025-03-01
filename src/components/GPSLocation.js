import { useState, useEffect } from "react";

const GPSComponent = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  // Function to fetch GPS location
  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchAddress(latitude, longitude);
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  // Function to convert GPS coordinates to address
  const fetchAddress = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      setAddress(data.display_name || "Address not found");
    } catch (err) {
      setError("Failed to fetch address");
    }
  };

  useEffect(() => {
    getLocation(); // Auto-fetch location on component mount
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>GPS Tracker</h2>
      <button
        onClick={getLocation}
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
          <GoogleMapsEmbed
            latitude={location.latitude}
            longitude={location.longitude}
          />
        </div>
      )}
    </div>
  );
};

// Google Maps Embed Component
const GoogleMapsEmbed = ({ latitude, longitude }) => {
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
  return (
    <iframe
      title="Google Maps"
      width="100%"
      height="400px"
      src={mapUrl}
      style={{ border: 0 }}
      allowFullScreen
    ></iframe>
  );
};

export default GPSComponent;
