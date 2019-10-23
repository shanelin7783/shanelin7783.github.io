import { GAME_KIND } from "..";

export const GAME_KIND_DESC = {
    [GAME_KIND.DXDS]: "混合",
};

export const RULE_DICTIONARY = {
    [GAME_KIND.DXDS]: {
        title: GAME_KIND_DESC.DXDS,
        desc:
            "<p>投注『万、千、百、十、个』所选择位置，且开出如下对应号码<br/><br/>大：开奖号码为5~9，即中奖<br/>小：开奖号码为0~4，即中奖<br/>单：开奖号码为单数，即中奖<br/>双：开奖号码为双数，即中奖<br/><br/>如：<br/>投注万位大，拉霸开出94321，万位为9，即中奖</p>",
    },
};
export const RULE_DIALOG_DICTIONARY = {
    [GAME_KIND.DXDS]: {
        title: GAME_KIND_DESC.DXDS,
        desc: "<p>大：开奖号码为5~9，即中奖<br>小：开奖号码为0~4，即中奖<br>单：开奖号码为单数，即中奖<br>双：开奖号码为双数，即中奖</p>",
    },
};
