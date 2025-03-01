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
export default GoogleMapsEmbed;
