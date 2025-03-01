import { useState, useEffect } from "react";
import styled from "styled-components";
import GetLocation from "./gps/Getlocation";
import GoogleMapsEmbed from "./gps/GoogleMapsEmbed";

const GPSComponent = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  const getLocation = () => GetLocation(setLocation, setError, setAddress);

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Container>
      <TopContainer>
        <Title>📍 GPS Location Finder</Title>
        <Button onClick={getLocation}>Get My Current Location</Button>
      </TopContainer>
      <InfoCard>
        <InfoText>
          <strong>Address:</strong> {address || "Fetching..."}
        </InfoText>
        {error && <ErrorText>{error}</ErrorText>}
      </InfoCard>
      {location.latitude && (
        <MapContainer>
          <GoogleMapsEmbed
            latitude={location.latitude}
            longitude={location.longitude}
          />
        </MapContainer>
      )}
    </Container>
  );
};

export default GPSComponent;

// Styled Components
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #f4f7f9;
  padding: 2rem;
`;

const TopContainer = styled.div`
  position: sticky;
  top: 1rem;
  width: 100%;
  // max-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e3a5f;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #007bff;
  color: white;
  font-size: 0.8rem;
  letter-spacing: 1px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #0056b3;
    transform: scale(1.05);
  }
`;

const InfoCard = styled.div`
  width: 100%;
  // max-width: 600px;
  background: white;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  // text-align: center;
`;

const InfoText = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 5px 0;
`;

const ErrorText = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: 1rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
