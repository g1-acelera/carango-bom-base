const API = process.env.REACT_APP_ENV === "Development" ?
    "https://carango-bom-api.herokuapp.com/marcas/" :
    "http://localhost";

export default API;
