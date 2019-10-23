import pesHandler from "./pes/pesHandler";
const APIKEY = "aWe!Some#78!Fk@o";
export const paramsEncode = obj => {
    return pesHandler().encrypt(APIKEY, JSON.stringify(obj).replace(/\u005C{2,}/gi, "\u005C"));
};

export const paramsDecode = str => {
    return JSON.parse(pesHandler().decrypt(APIKEY, str));
};
