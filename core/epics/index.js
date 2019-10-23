import { combineEpics } from "redux-observable";
// import {
//     fetchBalanceEpic,
//     fetchBaseInfoEpic,
//     fetchBetRecordDetailEpic,
//     fetchBetRecordEpic,
//     fetchConfigEpic,
//     fetchIntroductionEpic,
//     fetchRecentInfoEpic,
//     fetchWinLose,
//     fetchWinNumberEpic,
//     fetchWinRecordEpic,
// sendBetListEpic,
// } from "./apiEpic";
import { tokenRejectedEpic, touchTokenEpic, fetchBalanceEpic } from "./authEpic";
import { fetchBaseInfoEpic } from "./baseInfoEpic";
import { fetchConfigEpic, fetchIntroductionEpic } from "./configEpic";
import { fetchRecentInfoEpic, fetchWinNumberEpic, currentFinishedEpic } from "./recentInfoEpic";
import { fetchHistoryEpic } from "./historyEpic";
import { sendBetListEpic } from "./betEpic";
import { fetchEarnInfoEpic } from "./earnInfoEpic";
import { fetchBetRecordEpic, fetchBetRecordDetailEpic } from "./betRecordEpic";
import { fetchFairEpic } from "./fairEpic";

export const rootEpic = combineEpics(
    fetchBaseInfoEpic,
    fetchConfigEpic,
    fetchRecentInfoEpic,
    fetchWinNumberEpic,
    currentFinishedEpic,
    fetchHistoryEpic,
    // fetchWinRecordEpic,
    fetchIntroductionEpic,
    fetchBetRecordEpic,
    fetchBetRecordDetailEpic,
    fetchEarnInfoEpic,
    sendBetListEpic,
    // currentFinishedEpic,
    // changeGameEpic,
    // fetchWinNumberEpic,
    touchTokenEpic,
    tokenRejectedEpic,
    // changeChartEpic,
    fetchBalanceEpic,
    fetchFairEpic,
);
