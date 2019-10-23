import getConfig from "next/config";
import Big from "big.js";

const {
    serverRuntimeConfig: { isServer },
    publicRuntimeConfig: { PUBLIC },
} = getConfig();

export const getCookie = (name) => {
    var pairs = document.cookie.split("; "),
        count = pairs.length,
        parts;
    while (count--) {
        parts = pairs[count].split("=");
        if (parts[0] === name) return parts[1];
    }
    return false;
};

// if (!isServer) {
//     const canNotConsole = PUBLIC && !getCookie("consolelog");
//     if (canNotConsole) {
//         //window["console"]["log"] = function() {};
//     }
// }

export const _thoughComma = function(number = 0) {
    let value = number.toString();
    if (!value.includes(".")) value += ".";
    return value
        .replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
            return $1 + ",";
        })
        .replace(/\.$/, "");
};

export const _floorWithDigits = (value = 0, { digits = 4, comma = false } = {}) => {
    const number = Big(value).toFixed(digits);
    return comma ? _thoughComma(number) : number;
};

export const _pad = (number, length) => {
    let my_string = "" + number;
    while (my_string.length < length) {
        my_string = "0" + my_string;
    }
    return my_string;
};

export const _rangeArr = (start, end) =>
    Array(end - start + 1)
        .fill(0)
        .map((v, i) => i + start);

export const _transformSpanTime = (start = "", end = "") => {
    return end ? (Date.parse(end.replace(/-/g, "/")) - start) / 1000 : 0;
};

export const _transformHour = (time) => {
    return Math.floor((time % (24 * 24 * 3600)) / 3600);
};

export const _transformHourToMinutes = (time) => {
    return Math.floor((time % (3600 * 24)) / 60);
};

export const _transformMinutes = (time) => {
    return Math.floor((time % 3600) / 60);
};

export const _transformMinutesToSeconds = (time) => {
    return Math.floor(time % 3600);
};

export const _transformSeconds = (time) => {
    return Math.floor(time % 60);
};

export const _delete_cookie = (name) => {
    if (typeof window != "undefined" && window.document) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
};

export const _loadImage = async (url) =>
    new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            resolve(image);
        };
        image.onerror = () => {
            reject();
        };
        image.src = url;
    });
