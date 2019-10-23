import getConfig from "next/config";

export const { API_PATH, PUBLIC } = getConfig().publicRuntimeConfig;
export const requestSetting = PUBLIC ? { responseType: "text", method: "POST" } : { method: "POST" };
export const uid = PUBLIC ? {} : { uid: "1541141696_2" };
export const OPEN_SEND_CONSOLE = false;
