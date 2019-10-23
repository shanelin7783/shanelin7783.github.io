import { useSelector } from "react-redux";
import { useImage } from "@core/hooks/useImage";
import { useBackGame } from "@core/hooks/useBackGame";
import LayoutContainer from "@components/common/LayoutContainer";

export const As5fhk6Rule = () => {
    const image = useImage();
    const introduction = useSelector((state) => state.Config.introduction);
    const onBack = useBackGame();

    return (
        <LayoutContainer>
            <header className="inside_header">
                <nav>
                    <div className="left-menu">
                        <a className="lhc_back" onClick={onBack}>
                            <span>
                                <img src={image("backindex.png")} alt="" />
                                返回
                            </span>
                        </a>
                    </div>
                    <div className="title">玩法介绍</div>
                    <div className="right-menu" />
                </nav>
            </header>

            <main style={{ height: "100%", overflow: "auto" }}>
                <div className="main_number">
                    <article className="lhc_kind2">
                        <div className="topborder">
                            <div className="lhc_btn_title"></div>
                        </div>

                        <div className="lottery_rules">
                            <div className="introduction">
                                <div dangerouslySetInnerHTML={{ __html: introduction }} />
                            </div>
                            <div className="howtoplay">
                                <dl>
                                    <dd className="ddtit">
                                        <div>臣座</div>
                                    </dd>
                                    <dt>
                                        <div>项目</div>
                                        <div>玩法说明</div>
                                    </dt>
                                    <dd>
                                        <div>臣座全</div>
                                        <div>
                                            投注与开奖号码臣座任1相同为中奖，所选型态与开奖结果相同为中奖。（例：选择17，开出03,08,17,29,36,49铁王座25，
                                            其中17为臣座，即中奖）
                                        </div>
                                    </dd>
                                    <dd>
                                        <div>臣座一</div>
                                        <div>
                                            投注与开奖号码臣座一相同为中奖，所选型态与开奖结果相同为中奖。（例：选择17，开出17,08,03,29,36,49铁王座25，
                                            其中17为臣座一，即中奖）
                                        </div>
                                    </dd>
                                    <dd>
                                        <div>臣座二</div>
                                        <div>
                                            投注与开奖号码臣座二相同为中奖，所选型态与开奖结果相同为中奖。（例：选择17，开出03,17,08,29,36,49铁王座25，
                                            其中17为臣座二，即中奖）
                                        </div>
                                    </dd>
                                    <dd>
                                        <div>臣座三</div>
                                        <div>
                                            投注与开奖号码臣座三相同为中奖，所选型态与开奖结果相同为中奖。（例：选择17，开出03,08,17,29,36,49铁王座25，
                                            其中17为臣座三，即中奖）
                                        </div>
                                    </dd>
                                    <dd>
                                        <div>臣座四</div>
                                        <div>
                                            投注与开奖号码臣座四相同为中奖，所选型态与开奖结果相同为中奖。（例：选择17，开出03,08,29,17,36,49铁王座25，
                                            其中17为臣座四，即中奖）
                                        </div>
                                    </dd>
                                    <dd>
                                        <div>臣座五</div>
                                        <div>
                                            投注与开奖号码臣座五相同为中奖，所选型态与开奖结果相同为中奖。（例：选择17，开出03,08,36,29,17,49铁王座25，
                                            其中17为臣座五，即中奖）
                                        </div>
                                    </dd>
                                    <dd>
                                        <div>臣座六</div>
                                        <div>
                                            投注与开奖号码臣座六相同为中奖，所选型态与开奖结果相同为中奖。（例：选择17，开出03,08,49,29,36,17铁王座25，
                                            其中17为臣座六，即中奖）
                                        </div>
                                    </dd>
                                    <dd>
                                        <div>铁王座</div>
                                        <div>
                                            投注与开奖号码铁王座相同为中奖，所选型态与开奖结果相同为中奖。（例：选择17，开出03,08,25,29,36,49铁王座17，
                                            其中17为铁王座，即中奖）
                                        </div>
                                    </dd>
                                    <dd className="ddtit">
                                        <div>生肖</div>
                                    </dd>
                                    <dt>
                                        <div>项目</div>
                                        <div>玩法说明</div>
                                    </dt>
                                    <dd>
                                        <div>臣座全</div>
                                        <div>
                                            依据开出的所有臣座为主，若开出的6个臣座有一个在下注生肖范围内，则视为中奖。（例：选择鼠，开出
                                            鼠、兔、龙、羊、鸡、兔，其中含有鼠，即中奖）
                                        </div>
                                    </dd>
                                    <dd>
                                        <div>臣座一</div>
                                        <div>
                                            若开出的臣座一在下注生肖范围内，则视为中奖。（例：选择鼠，开出
                                            鼠、兔、龙、羊、鸡、兔，其中臣座一含有鼠，即中奖）
                                        </div>
                                    </dd>
                                    <dd>
                                        <div>臣座二</div>
                                        <div>
                                            若开出的臣座二在下注生肖范围内，则视为中奖。（例：选择鼠，开出
                                            虎、鼠、龙、羊、鸡、兔，其中臣座二含有鼠，即中奖）
                                        </div>
                                    </dd>
                                    <dd>
                                        <div>臣座三</div>
                                        <div>
                                            若开出的臣座三在下注生肖范围内，则视为中奖。（例：选择鼠，开出
                                            虎、牛、鼠、羊、鸡、兔，其中臣座三含有鼠，即中奖）
                                        </div>
                                    </dd>
                                    <dd>
                                        <div>臣座四</div>
                                        <div>
                                            若开出的臣座四在下注生肖范围内，则视为中奖。（例：选择鼠，开出
                                            虎、牛、羊、鼠、鸡、兔，其中臣座四含有鼠，即中奖）
                                        </div>
                                    </dd>
                                    <dd>
                                        <div>臣座五</div>
                                        <div>
                                            若开出的臣座五在下注生肖范围内，则视为中奖。（例：选择鼠，开出
                                            虎、牛、鸡、羊、鼠、兔，其中臣座五含有鼠，即中奖）
                                        </div>
                                    </dd>
                                    <dd>
                                        <div>臣座六</div>
                                        <div>
                                            若开出的臣座六在下注生肖范围内，则视为中奖。（例：选择鼠，开出
                                            虎、牛、兔、羊、鸡、鼠，其中臣座六含有鼠，即中奖）
                                        </div>
                                    </dd>
                                    <dd>
                                        <div>铁王座</div>
                                        <div>若开出的铁王座在下注生肖范围内，则视为中奖。（例：选择鼠，其中铁王座为鼠，即中奖）</div>
                                    </dd>
                                    <dd className="ddtit">
                                        <div>场景</div>
                                    </dd>
                                    <dt>
                                        <div>项目</div>
                                        <div>玩法说明</div>
                                    </dt>
                                    <dd className="other">
                                        {/*<div>红婚礼、斟满<br/>大杯、小杯<br/>敬酒、罚酒<br/>蓝异鬼、鬼王<br/>大鬼、小鬼<br/>鬼单、鬼双<br/>绿苔原、炸弹<br/>大石、小石<br/>木棍、骷髅*/}
                                        {/*</div>*/}
                                        {/*<div>投注与开奖号码臣座任1相同为中奖，所选型态与开奖结果相同为中奖。（例：选择17，开出03,08,17,29,36,49铁王座25，*/}
                                        {/*    其中17为臣座，即中奖）*/}
                                        {/*</div>*/}
                                        <div>红婚礼</div>
                                        <div>
                                            斟满对应号码：01、02、07、08、12、13、18、19、23、24、29、30、34、35、40、45、46
                                            <br />
                                            大杯对应号码：29、30、34、35、40、45、46
                                            <br />
                                            小杯对应号码：01、02、07、08、12、13、18、19、23、24
                                            <br />
                                            敬酒对应号码：01、07、13、19、23、29、35、45
                                            <br />
                                            罚酒对应号码：02、08、12、18、24、30、34、40、46
                                            <br />
                                        </div>
                                    </dd>
                                    <dd className="other">
                                        <div>蓝异鬼</div>
                                        <div>
                                            鬼王对应号码：03、04、09、10、14、15、20、25、26、31、36、37、41、42、47、48
                                            <br />
                                            大鬼对应号码：25、26、31、36、37、41、42、47、48
                                            <br />
                                            小鬼对应号码：03、04、09、10、14、15、20
                                            <br />
                                            鬼单对应号码：03、09、15、25、31、37、41、47
                                            <br />
                                            鬼双对应号码：04、10、14、20、26、36、42、48
                                            <br />
                                        </div>
                                    </dd>
                                    <dd className="other">
                                        <div>绿苔原</div>
                                        <div>
                                            炸弹对应号码：05、06、11、16、17、21、22、27、28、32、33、38、39、43、44、49
                                            <br />
                                            大石对应号码：27、28、32、33、38、39、43、44、49
                                            <br />
                                            小石对应号码：05、06、11、16、17、21、22
                                            <br />
                                            木棍对应号码：05、11、17、21、27、33、39、43、49
                                            <br />
                                            骷髅对应号码：06、16、22、28、32、38、44
                                            <br />
                                        </div>
                                    </dd>
                                    <dd className="ddtit">
                                        <div>肖數</div>
                                    </dd>
                                    <dt>
                                        <div>项目</div>
                                        <div>玩法说明</div>
                                    </dt>
                                    <dd className="other">
                                        <div>
                                            二肖
                                            <br />
                                            三肖
                                            <br />
                                            四肖
                                            <br />
                                            五肖
                                            <br />
                                            六肖
                                            <br />
                                            七肖
                                            <br />
                                            肖数单
                                            <br />
                                            肖数双
                                        </div>
                                        <div>
                                            从8种组合中选择一个型态下注。如下注的型态，与开奖结果7个号码的所属型态相同，即为中奖。（例：选择五肖，开出
                                            牛、狗、马、猪、牛、马、鸡 含有5种生肖，即中奖）
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </article>
                </div>
            </main>
        </LayoutContainer>
    );
};
