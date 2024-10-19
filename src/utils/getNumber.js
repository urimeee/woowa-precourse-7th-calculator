import { escapeRegExp } from "./escapeRegExp.js";
import { SEPARATORS } from "./constants.js";

export const getNumber = (input) => {
    const regexSeparator = new RegExp(SEPARATORS.map(escapeRegExp).join('|'));
    return input.split(regexSeparator);
}