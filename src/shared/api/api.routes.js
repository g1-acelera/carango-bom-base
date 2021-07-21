const API = process.env.REACT_APP_ENV === "Development" ?
    "https://carango-bom-api.herokuapp.com" :
    "https://carango-bom-api.herokuapp.com";

export default API;