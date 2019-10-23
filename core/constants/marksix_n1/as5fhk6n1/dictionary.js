import { GAME_KIND } from ".";

export const GAME_KIND_DESC = {
    [GAME_KIND.REGULAR]: "正码全",
    [GAME_KIND.COLOR]: "特码色波",
};

export const RULE_DICTIONARY = {
    [GAME_KIND.REGULAR]: {
        title: GAME_KIND_DESC.REGULAR,
        desc: "<p>投注与开奖号码正码相同为中奖，所选型态与开奖结果相同为中奖。（例：选择17，开出03,08,17,29,36,49特码25， 其中17为正码，即中奖）",
    },
    [GAME_KIND.COLOR]: {
        title: GAME_KIND_DESC.COLOR,
        desc: "<p>分为「红、蓝、绿」三个色波，从中选择一注，所选型态与开奖结果相同即为中奖。（例：选择红波小，开出03,25,17,29,36,49特码08 ，其中特码08为红波小，即中奖）<br/></p>",
 },
}