import { combineReducers } from "redux";
import Auth from "./Auth";
import BaseInfo from "./BaseInfo";
import Bet from "./Bet";
import Config from "./Config";
import Dialog from "./Dialog";
import RecentInfo from "./RecentInfo";
import History from "./History";
import Query from "./Query";
// import WinRecord from "./WinRecord";
import BetRecord from "./BetRecord";
// import Profile from "./Profile";
import EarnInfo from "./EarnInfo";
import Fair from "./Fair";
// import Sound from "./Sound";
// import Temp from "./Temp";

export default combineReducers({
    Auth,
    BaseInfo,
    Bet,
    Config,
    Dialog,
    RecentInfo,
    History,
    Query,
    // WinRecord,
    BetRecord,
    // Profile,
    EarnInfo,
    Fair,
    // Sound,
    // Temp,
});
