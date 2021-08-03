import {emailRegex} from "../../constants/regex";

function validaEmail(email) {
    if (!email) return "";
    return !emailRegex.test(email) ? "Email inválido" : "";
}

export default validaEmail;
