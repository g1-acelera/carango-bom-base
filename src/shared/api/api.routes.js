const API = process.env.REACT_APP_ENV === "Development"
  ? "http://localhost:8080"
  : "https://carangobom-api.herokuapp.com";

export default API;