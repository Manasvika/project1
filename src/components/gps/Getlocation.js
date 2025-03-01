import FetchAddress from "./FetchAddress";

const GetLocation = (setLocation, setError, setAddress) => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        FetchAddress(latitude, longitude, setAddress, setError);
      },
      (err) => {
        setError(err.message);
      }
    );
  } else {
    setError("Geolocation is not supported by this browser.");
  }
};
export default GetLocation;
