import { getLink } from "./getLink";

export const getCurrencyImage = (currency) => {
    return getLink(`currency/${currency}.png`);
};