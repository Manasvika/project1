const FetchAddress = async (lat, lng, setAddress, setError) => {
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
export default FetchAddress;
