import getConfig from "next/config";
const { PUBLIC, BUILD_ID, CDN_ENV, CDN_PATH, USE_CDN } = getConfig().publicRuntimeConfig;

export const getLink = (url) => {
    if (USE_CDN) {
        return `${CDN_PATH}${CDN_ENV}/static/${BUILD_ID}/${url}`;
    } else {
        if(PUBLIC) {
            return `/static/${BUILD_ID}/${url}`
        }
        return `/static/${url}`;
    }
};
