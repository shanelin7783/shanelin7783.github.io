(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+D8n":function(e,n,t){"use strict";t.r(n);var c=t("q1tI"),a=t.n(c),i=t("/MKj"),l=t("i7Ga"),u=t("eWGX"),r=t("YBzW"),o=t("inKG"),s=t("AayY"),m=t("PNTa"),b=t("rm3j"),_=t("Wnt5"),d=t("0M6J"),p=t("MCXi"),f=a.a.createElement,v=Object(c.forwardRef)(function(e,n){var t=Object(c.useContext)(u.a),a=t.multiple,i=t.multipleHandle,l=function(e){return function(){i.change(e)}};return f("nav",{ref:n,className:"active"},f("h3",null,"\u5355\u6ce8\u91d1\u989d"),f("ol",null,p.b.map(function(e){return f("li",{key:e,className:"".concat(e===a?"active":""),onClick:l(e)},e)})),f("div",{className:"btn_content"},f("button",{className:"btn_repeat",onClick:i.clean},"\u91cd\u7f6e"),f("div",{className:"btn_mul"},f("button",{onClick:i.decrement},"-"),f("div",null,a),f("button",{onClick:i.increment},"+"))))}),g=t("kEFp"),O=t("s5kP"),j=t("KNC6"),E=t("XmPd"),C=a.a.createElement,L=function(){var e=Object(j.a)(),n=Object(E.d)(Object(E.f)(e),3);return C(c.Fragment,null,C("div",{className:"next_tit"},"\u8ddd\u79bb\u4e0b\u671f"),C("h2",null,n),C("div",{className:"next_sec"},"\u79d2"))},k=a.a.createElement,y=Object(c.memo)(function(){var e=Object(b.c)(),n=Object(c.useContext)(O.a),t=Object(i.c)(function(e){return e.Query.currency}),a=Object(i.c)(function(e){return e.Auth.balance}),l=Object(c.useState)(!1),u=l[0],r=l[1],o=Object(g.a)(u,r);return k("div",{className:"smenu"},k("img",{onClick:function(){return r(!u)},src:e("btn_smenu.png"),alt:"\u9009\u5355"}),k("nav",null,k(L,null),k("div",{ref:o,className:"smenucon ".concat(u?"active":"")},k("h3",null,"\u4f59\u989d\uff1a",a," ",t),k("ul",null,k("li",null,k("a",{onClick:function(){return n("rule")}},k("div",null,k("img",{src:e("menu_guide.png"),alt:""})),k("div",null,"\u73a9\u6cd5\u4ecb\u7ecd"))),k("li",null,k("a",{onClick:function(){return n("history")}},k("div",null,k("img",{src:e("menu_numbers.png"),alt:""})),k("div",null,"\u5f00\u5956\u516c\u544a"))),k("li",null,k("a",{onClick:function(){return n("trend")}},k("div",null,k("img",{src:e("menu_trend.png"),alt:""})),k("div",null,"\u5f00\u5956\u8d70\u52bf")))),k("ul",null,k("li",null,k("a",{onClick:function(){return n("betRecord")}},k("div",null,k("img",{src:e("menu_record.png"),alt:""})),k("div",null,"\u6295\u6ce8\u8bb0\u5f55")))))))}),S=t("pLtp"),N=t.n(S),M=t("kcif"),R=t.n(M),I=t("BH1N"),h=a.a.createElement,B=a.a.createContext(),G=function(e){var n=Object(c.useState)(I.a.SUM),t=n[0],a=n[1],i=Object(c.useState)(!1),l=i[0],u=i[1];return h(B.Provider,{value:{showGameKindMenu:l,toggleGameKindMenu:u,gameKind:t,setGameKind:a}},e.children)},A=t("ovE6"),x=a.a.createElement,U=function(){var e=Object(b.c)(),n=Object(c.useContext)(B),t=n.showGameKindMenu,a=n.toggleGameKindMenu,i=n.gameKind,l=n.setGameKind,u=Object(g.a)(t,a),r=function(){a(!1)};return x("nav",{onClick:function(){return a(!t)}},x("div",{className:"play_option"},"\u73a9\u6cd5\u9009\u62e9"),x("h2",null,A.b[i]),x("div",{className:"play_arr"},x("img",{src:e("".concat(t?"nav_down.png":"nav_up.png")),alt:""})),x("div",{ref:u,className:"menu ".concat(t?"active":"")},x("h3",null,"\u8bf7\u9009\u62e9\u4e00\u73a9\u6cd5"),R()(N()(I.a),3).map(function(e,n){return x("ul",{key:n},e.map(function(e){return x("li",{key:e,className:"".concat(i===e?"active":"")},x("a",{onClick:(n=e,function(e){e.stopPropagation(),l(n),r()})},A.b[e]));var n}))})))},D=t("/y6K"),H=a.a.createElement,T=function(){var e=Object(D.a)({length:4,delayTime:0}),n=e.numbers,t=e.expect;return H("div",{className:"number_now"},H("h2",null,t,"\u671f\u5f00\u5956"),H("div",{className:"number_nowcon"},n.map(function(e,t){var a=t==n.length-1;return H(c.Fragment,{key:t},H("div",null,e),!a&&H("div",null,t<2?"+":"="))})))},K=t("ymiZ"),w=t("df70"),P=a.a.createElement,Y=function(){var e=Object(b.c)(),n=Object(w.a)().backApp,t=Object(K.a)();return P("header",null,P("div",{className:"close"},P("img",{src:e("btn_close.png"),alt:"\u5173\u95ed",onClick:n}),P(U,null)),P("div",{className:"logo"},P("h1",{onClick:t},P("img",{src:e("logo.png"),alt:"\u5317\u4eac28"})),P(T,null)),P(y,null))},X=t("vYYK"),V=["three_identical_all"],F=["special_number_big_side","special_number_middle_side","special_number_small_side"],J=["guess_number_0","guess_number_1","guess_number_2","guess_number_3","guess_number_4","guess_number_5","guess_number_6","guess_number_7","guess_number_8","guess_number_9"],W=["special_number_0","special_number_1","special_number_2","special_number_3","special_number_4","special_number_5","special_number_6","special_number_7","special_number_8","special_number_9","special_number_10","special_number_11","special_number_12","special_number_13","special_number_14","special_number_15","special_number_16","special_number_17","special_number_18","special_number_19","special_number_20","special_number_21","special_number_22","special_number_23","special_number_24","special_number_25","special_number_26","special_number_27"],q=["special_number_big","special_number_small","special_number_odd","special_number_even","special_number_big_odd","special_number_small_odd","special_number_big_even","special_number_small_even"],z=["special_number_extremely_big","special_number_extremely_small"],Q=["special_number_mod3_0","special_number_mod3_1","special_number_mod3_2"],Z=["special_number_red","special_number_blue","special_number_green"],$=a.a.createElement,ee=function(){var e=Object(c.useContext)(u.a),n=e.itemList,t=e.itemListHandle,a=Object(i.c)(function(e){return e.Config.config.pc28}).bet_odds_config,l=function(e){return function(){t.toggle(e,{bet_type:e})}};return $("section",{className:"play_number"},R()(W,4).map(function(e,t){return $("div",{key:t,className:"number_con"},e.map(function(e){var t=a[e]||{},c=t.odds,i=void 0===c?0:c,u=t.bet_type_msg,r=void 0===u?"":u,o=n.has(e);return $("div",{key:e,className:"number_box1 ".concat(o?"active":""),onClick:l(e)},$("div",null,r),$("div",null,Object(E.b)(i)))}))}))},ne=a.a.createElement,te=function(){var e=Object(c.useContext)(u.a),n=e.itemList,t=e.itemListHandle,a=Object(i.c)(function(e){return e.Config.config.pc28}).bet_odds_config,l=function(e){return function(){t.toggle(e,{bet_type:e})}};return ne("section",{className:"play_number"},ne("div",{className:"number_con"},Q.map(function(e){var t=a[e]||{},c=t.odds,i=void 0===c?0:c,u=t.bet_type_msg,r=void 0===u?"":u,o=n.has(e);return ne("div",{key:e,className:"number_box2 ".concat(o?"active":""),onClick:l(e)},ne("div",null,r),ne("div",null,Object(E.b)(i)))})))},ce=a.a.createElement,ae=function(){var e=Object(c.useContext)(u.a),n=e.itemList,t=e.itemListHandle,a=Object(i.c)(function(e){return e.Config.config.pc28}).bet_odds_config,l=function(e){return function(){t.toggle(e,{bet_type:e})}};return ce("section",{className:"play_number"},R()(q,4).map(function(e,t){return ce("div",{key:t,className:"number_con"},e.map(function(e){var t=a[e]||{},c=t.odds,i=void 0===c?0:c,u=t.bet_type_msg,r=void 0===u?"":u,o=n.has(e);return ce("div",{key:e,className:"number_box3 ".concat(o?"active":""),onClick:l(e)},ce("div",null,r),ce("div",null,Object(E.b)(i)))}))}))},ie=a.a.createElement,le=function(){var e=Object(c.useContext)(u.a),n=e.itemList,t=e.itemListHandle,a=Object(i.c)(function(e){return e.Config.config.pc28}).bet_odds_config,l=function(e){return function(){t.toggle(e,{bet_type:e})}};return ie("section",{className:"play_number"},ie("div",{className:"number_con"},z.map(function(e){var t=a[e]||{},c=t.odds,i=void 0===c?0:c,u=t.bet_type_msg,r=void 0===u?"":u,o=n.has(e);return ie("div",{key:e,className:"number_box4 ".concat(o?"active":""),onClick:l(e)},ie("div",null,r),ie("div",null,Object(E.b)(i)))})))},ue=t("doui"),re=a.a.createElement,oe=function(){var e=Object(c.useContext)(u.a),n=e.itemList,t=e.itemListHandle,a=Object(i.c)(function(e){return e.Config.config.pc28}),l=a.bet_odds_config,r=a.color_config,o=function(e){return function(){t.toggle(e,{bet_type:e})}};return re("section",{className:"play_number"},Z.map(function(e){var t=e.split("_"),c=Object(ue.a)(t,3)[2],a=r["".concat(c,"_numbers")],i=l[e]||{},u=i.odds,s=void 0===u?0:u,m=i.bet_type_msg,b=void 0===m?"":m,_=n.has(e);return re("div",{key:e,className:"number_".concat(c," ").concat(_?"active":""),onClick:o(e)},re("div",null,b),re("div",{className:"color_".concat(c)},a.map(function(e){return re("div",{key:e},e)})),re("div",null,Object(E.b)(s)))}))},se=a.a.createElement,me=function(){var e=Object(c.useContext)(u.a),n=e.itemList,t=e.itemListHandle,a=Object(i.c)(function(e){return e.Config.config.pc28}).bet_odds_config,l=function(e){return function(){t.toggle(e,{bet_type:e})}};return se("section",{className:"play_number"},se("div",{className:"number_con"},F.map(function(e){var t=a[e]||{},c=t.odds,i=void 0===c?0:c,u=t.bet_type_msg,r=void 0===u?"":u,o=n.has(e);return se("div",{key:e,className:"number_box5 ".concat(o?"active":""),onClick:l(e)},se("div",null,r),se("div",null,Object(E.b)(i)))})))},be=a.a.createElement,_e=function(){var e=Object(b.c)(),n=Object(c.useContext)(u.a),t=n.itemList,a=n.itemListHandle,l=Object(i.c)(function(e){return e.Config.config.pc28}).bet_odds_config,r=function(e){return function(){a.toggle(e,{bet_type:e})}};return be("section",{className:"play_number"},V.map(function(n){var c=(l[n]||{}).odds,a=void 0===c?0:c,i=t.has(n);return be("div",{key:n,className:"number_leopard ".concat(i?"active":""),onClick:r(n)},be("div",{className:"leopard_con"},be("img",{src:e("img_leo.png"),alt:""}),"+",be("img",{src:e("img_leo.png"),alt:""}),"+",be("img",{src:e("img_leo.png"),alt:""})),be("div",null,Object(E.b)(a)))}))},de=t("d04V"),pe=t.n(de),fe=a.a.createElement,ve=function(){var e=Object(c.useContext)(u.a),n=e.itemList,t=e.itemListHandle,a=Object(i.c)(function(e){return e.Config.config.pc28}).bet_odds_config,l=function(e){return function(){t.toggle(e,{bet_type:e})}};return fe("section",{className:"play_number"},R()(J,4).map(function(e,t){return fe("div",{key:t,className:"number_con"},e.concat(pe()({length:4-e.length},function(){return""})).map(function(e,t){var c=a[e]||{},i=c.odds,u=void 0===i?0:i,r=c.bet_type_msg,o=void 0===r?"":r,s=n.has(e);return e?fe("div",{key:e,className:"number_box1 ".concat(s?"active":""),onClick:l(e)},fe("div",null,o),fe("div",null,Object(E.b)(u))):fe("div",{key:t,className:"none"})}))}))},ge=a.a.createElement,Oe=function(){var e,n=Object(c.useContext)(B).gameKind;return ge("article",{style:{flex:1,overflow:"auto"}},(e={},Object(X.a)(e,I.a.SUM,ge(ee,null)),Object(X.a)(e,I.a.DIVISOR_THREE,ge(te,null)),Object(X.a)(e,I.a.BIG_SMALL,ge(ae,null)),Object(X.a)(e,I.a.EXTREMELY_BIG_SMALL,ge(le,null)),Object(X.a)(e,I.a.COLOR,ge(oe,null)),Object(X.a)(e,I.a.SIDE,ge(me,null)),Object(X.a)(e,I.a.LEOPARD,ge(_e,null)),Object(X.a)(e,I.a.GUESS_NUMBER,ge(ve,null)),e)[n]||null)},je=t("iR9m"),Ee=t("Mpt7"),Ce=function(e){return e[Math.floor(Math.random()*e.length)]},Le=a.a.createElement,ke=function(){var e=Object(b.c)(),n=Object(c.useContext)(u.a),t=n.betRate,a=n.totalBets,p=n.betResult,f=n.itemList,g=n.itemListHandle,O=Object(_.a)(),j=O.showMultipleMenu,E=O.toggleMultipleMenu,C=O.multipleMenuRef,L=Object(r.a)(),k=L.showCleanConfirm,y=L.onOpenCleanConfirm,S=L.onCloseCleanConfirm,N=Object(m.a)(),M=N.showBetConfirm,R=N.onOpenBetConfirm,h=N.onCloseBetConfirm,G=Object(i.c)(function(e){return e.Query.currency}),A=function(){var e=Object(i.b)(),n=Object(c.useContext)(u.a),t=n.multiple,a=n.itemList,l=n.itemListHandle;return Object(c.useCallback)(function(){var n=a.keySeq().toArray().reduce(function(e,n){var c=a.get(n),i=c.bet_type,l=c.bet_detail,u=void 0===l?"":l;return e.push({bet_type:i,bet_detail:u,multiple:t,bet_amount:1}),e},[]);l.clean(),e(Object(je.d)({bet_list:n}))},[a,t])}(),x=function(){var e=Object(c.useContext)(u.a).itemListHandle,n=Object(c.useContext)(B).gameKind;return Object(c.useCallback)(function(){var t,c=(t={},Object(X.a)(t,I.a.SUM,function(){return Ce(W)}),Object(X.a)(t,I.a.DIVISOR_THREE,function(){return Ce(Q)}),Object(X.a)(t,I.a.BIG_SMALL,function(){return Ce(q)}),Object(X.a)(t,I.a.EXTREMELY_BIG_SMALL,function(){return Ce(z)}),Object(X.a)(t,I.a.SIDE,function(){return Ce(F)}),Object(X.a)(t,I.a.GUESS_NUMBER,function(){return Ce(J)}),Object(X.a)(t,I.a.COLOR,function(){return Ce(Z)}),Object(X.a)(t,I.a.LEOPARD,function(){return Ce(V)}),t)[n](),a=Object(Ee.a)().set(c,{bet_type:c});e.set(a)},[n])}();return Le(l.a,null,Le(Y,null),Le(Oe,null),Le("aside",null,Le("div",{className:"number_confirm"},Le("div",null,Le("img",{src:Object(d.a)(G),alt:"eth"}),"1 \u6ce8 \u2248 ",t," ",G),Le("div",null,"|"),Le("div",null,Le("span",null,a),"\u6ce8\uff0c\u5171",Le("span",null,p),G)),Le("ul",null,Le("li",{onClick:E},Le("img",{src:e("btn_price.png"),alt:""}),Le("p",null,"\u5355\u6ce8\u91d1\u989d")),Le("li",{onClick:x},Le("img",{src:e("btn_random.png"),alt:""}),Le("p",null,"\u673a\u9009")),Le("li",{onClick:y},Le("img",{src:e("".concat(f.size>0?"btn_clear.png":"btn_clear_non.png")),alt:""}),Le("p",null,"\u6e05\u7a7a\u6295\u6ce8")),Le("li",{onClick:R},Le("img",{src:e("btn_check.png"),alt:""}),Le("p",null,"\u6295\u6ce8"))),j&&Le(v,{ref:C})),Le(o.a,{state:k,type:s.c.CLEAN_BET,callback:g.clean,close:S}),Le(o.a,{state:M,type:s.c.BET,callback:A,close:h}))},ye=a.a.createElement;n.default=function(){var e=Object(i.c)(function(e){return e.BaseInfo.game_code});return ye(G,null,{as5f28:ye(ke,null)}[e]||null)}},BH1N:function(e,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"a",function(){return i});var c=t("vYYK"),a={SPECIAL:"SPECIAL",GUESS_NUMBER:"GUESS_NUMBER"},i={SUM:"SUM",DIVISOR_THREE:"DIVISOR_THREE",BIG_SMALL:"BIG_SMALL",EXTREMELY_BIG_SMALL:"EXTREMELY_BIG_SMALL",COLOR:"COLOR",SIDE:"SIDE",LEOPARD:"LEOPARD",GUESS_NUMBER:"GUESS_NUMBER"};Object(c.a)({},a.SPECIAL,[{category:"\u7279\u4e32",kinds:[{name:"\u548c\u503c",kind:i.SUM},{name:"\u9664\u4e09\u4f59\u6570",kind:i.DIVISOR_THREE}]},{category:"\u6df7\u5408",kinds:[{name:"\u5927\u5c0f\u5355\u53cc",kind:i.BIG_SMALL},{name:"\u6781\u5927\u6781\u5c0f",kind:i.EXTREMELY_BIG_SMALL}]},{category:"\u8da3\u5473",kinds:[{name:"\u8272\u6ce2",kind:i.COLOR}]},{category:"\u4e2d\u8fb9",kinds:[{name:"\u5927\u4e2d\u5c0f\u8fb9",kind:i.SIDE}]},{category:"\u8c79\u5b50",kinds:[{name:"\u8c79\u5b50",kind:i.LEOPARD}]}])},ovE6:function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return o});var c,a,i,l=t("vYYK"),u=t("BH1N"),r=(c={},Object(l.a)(c,u.a.SUM,{desc:"\u4ece0\u523027\u4e2d\u9009\u62e9\u4e00\u4e2a\u6570\u5b57\u8fdb\u884c\u6295\u6ce8\uff0c\u6240\u9009\u6570\u503c\u7b49\u4e8e\u4e09\u4e2a\u5f00\u5956\u53f7\u7801\u7684\u76f8\u52a0\u4e4b\u548c(\u7279\u7801\u6570\u5b57)\uff0c\u5373\u4e3a\u4e2d\u5956\u3002 (\u4f8b\u5982\uff1a\u6295\u6ce8\u548c\u503c3\uff0c\u5f00\u51fa\u4e09\u7801\u4e3a0,1,2\uff0c\u603b\u548c\u4e3a3\uff0c\u5373\u4e2d\u5956\u3002)",sample:"\u9009\u62e95\uff0c\u5f00\u5956\u53f7\u7801\u4e3a\u662f113(\u548c\u503c\u4e3a5(\u987a\u5e8f\u4e0d\u9650\uff0c\u5373\u4e3a\u4e2d\u5956\u3002"}),Object(l.a)(c,u.a.DIVISOR_THREE,{desc:"\u4ece0\u52302\u4e2d\u9009\u62e9\u4e00\u4e2a\u6570\u5b57\u6784\u62101\u6ce8\uff0c\u6240\u9009\u6570\u503c\u7b49\u4e8e\u7279\u7801\u9664\u4e09\u4f59\u6570\uff0c\u5373\u4e3a\u4e2d\u5956\u3002 (\u4f8b\u5982\uff1a\u6295\u6ce8\u4f59\u65700\uff0c\u5f00\u5956\u53f7\u78011,2,3\uff0c\u7279\u7801\u4e3a6\uff0c\u9664\u4e09\u4f59\u6570\u4e3a0\uff0c\u5373\u4e3a\u4e2d\u5956\u3002)",sample:"\u9009\u62e92\uff0c\u5f00\u5956\u53f7\u7801\u4e3a233(\u548c\u503c\u4e3a8\uff0c\u4f59\u65702\uff0c\u5373\u4e3a\u4e2d\u5956\u3002"}),Object(l.a)(c,u.a.BIG_SMALL,{desc:"\u6240\u9009\u7684\u6295\u6ce8\u9879\u76ee\uff0c\u7b49\u4e8e\u5f00\u51fa\u7684\u4e09\u4e2a\u53f7\u7801\u52a0\u603b\u7684\u5f62\u6001(\u5373\u7279\u7801\u6240\u5c5e\u7684\u578b\u6001)\uff0c\u5373\u4e3a\u4e2d\u5956\u3002\u5927\u5c0f\uff1a14~27\u4e3a\u5927\uff0c0~13\u4e3a\u5c0f\n\u5355\uff1a0~27\u7684\u5355\u6570\n\u53cc\uff1a0~27\u7684\u53cc\u6570\n\u5927\u5355\uff1a15\u300117\u300119\u300121\u300123\u300125\u300127\n\u5c0f\u5355\uff1a1\u30013\u3001 5\u30017\u30019\u300111\u300113\n\u5927\u53cc\uff1a14\u300116\u300118\u300120\u300122\u300124\u300126\n\u5c0f\u53cc\uff1a0\u30012\u30014\u30016\u30018\u300110\u300112\n(\u4f8b\u5982\uff1a\u6295\u6ce8\u5c0f\uff0c\u5f00\u5956\u53f7\u7801\u4e3a1,2,3\uff0c\u7279\u7801\u4e3a6\uff0c\u5373\u4e3a\u4e2d\u5956\u3002)",sample:"\u6295\u6ce8\u5927\u5355\uff0c\u5f00\u5956\u53f7\u7801\u4e3a788(\u548c\u503c\u4e3a23\uff0c\u5373\u4e3a\u4e2d\u5956\u3002"}),Object(l.a)(c,u.a.EXTREMELY_BIG_SMALL,{desc:"\u6240\u9009\u7684\u6295\u6ce8\u9879\u76ee\uff0c\u7b49\u4e8e\u5f00\u51fa\u7684\u4e09\u4e2a\u53f7\u7801\u52a0\u603b\u7684\u5f62\u6001\uff0c\u5373\u4e3a\u4e2d\u5956\u3002\u6781\u5927\uff1a22~27\uff0c\u6781\u5c0f\uff1a0~5\u3002\u5956\u91d1{odds}\u3002",sample:"\u6295\u6ce8\u6781\u5927\uff0c\u5f00\u5956\u53f7\u7801\u4e3a788(\u548c\u503c\u4e3a23\uff0c\u5373\u4e3a\u4e2d\u5956\u3002"}),Object(l.a)(c,u.a.COLOR,{desc:"\u6240\u9009\u7684\u6295\u6ce8\u9879\u76ee\uff0c\u7b49\u4e8e\u5f00\u51fa\u7684\u4e09\u4e2a\u53f7\u7801\u52a0\u603b\u7684\u6ce2\u8272\uff0c\u5373\u4e3a\u4e2d\u5956\u3002\u7ea2\u6ce2\uff1a3\u30016\u30019\u300112\u300115\u300118\u300121\u300124\uff1b\u7eff\u6ce2\uff1a1\u30014\u30017\u300110\u300116\u300119\u300122\u300125\uff1b\u84dd\u6ce2\uff1a2\u30015\u30018\u300111\u300117\u300120\u300123\u300126\u5956\u91d1{odds}\u3002",sample:"\u6295\u6ce8\u84dd\u6ce2\uff0c\u5f00\u5956\u53f7\u7801\u4e3a788(\u548c\u503c\u4e3a23\uff0c\u5373\u4e3a\u4e2d\u5956\u3002"}),Object(l.a)(c,u.a.SIDE,{desc:"\u9009\u62e9\u4e00\u4e2a\u578b\u6001\u8fdb\u884c\u6295\u6ce8\uff0c\u5f00\u51fa\u7684\u4e09\u4e2a\u53f7\u7801\u603b\u548c\u4e3a\u8be5\u578b\u6001\uff0c\u5373\u4e3a\u4e2d\u5956\u30020~9\u4e3a\u5c0f\u8fb9\uff0c10~17\u4e3a\u4e2d\uff0c18~27\u4e3a\u5927\u8fb9\u3002\u5956\u91d1{odds}\u3002",sample:"\u6295\u6ce8\u5927\u8fb9\uff0c\u5f00\u5956\u53f7\u7801\u4e3a888(\u548c\u503c\u4e3a24\uff0c\u5373\u4e3a\u4e2d\u5956\u3002"}),Object(l.a)(c,u.a.LEOPARD,{desc:"\u9009\u62e9\u4e00\u4e2a\u578b\u6001\u6295\u6ce8\uff0c\u5f00\u51fa\u7684\u4e09\u4e2a\u53f7\u7801\u76f8\u540c\uff0c\u5373\u4e3a\u4e2d\u5956\u3002\u5956\u91d1{odds}\u3002",sample:"\u6295\u6ce8\u8c79\u5b50\uff0c\u5f00\u5956\u53f7\u7801\u4e3a888(\u4e09\u540c\u53f7\uff0c\u5373\u4e3a\u4e2d\u5956\u3002"}),Object(l.a)(c,u.a.GUESS_NUMBER,{desc:"\u4ece0~9\u4efb\u610f\u9009\u62e9\u4e00\u4e2a\u53f7\u7801\uff0c\u53ea\u8981\u5f00\u5956\u53f7\u7801\u6709\u51fa\u73b0\u6240\u9009\u53f7\u7801\uff0c\u5373\u4e2d\u5956(\u5982\uff1a\u9009\u62e93 , \u5f00\u51fa123)\u3002\u5956\u91d1{odds}\u3002",sample:"\u6295\u6ce88\uff0c\u5f00\u5956\u53f7\u7801\u4e3a888\uff0c\u5373\u4e3a\u4e2d\u5956\uff0c\u4e2d\u4e00\u7b49\u5956\uff1b\u5f00\u5956\u53f7\u7801\u4e3a128\uff0c\u4e2d\u4e09\u7b49\u5956\u3002"}),c),o=(a={},Object(l.a)(a,u.b.SPECIAL,"\u7279\u7801"),Object(l.a)(a,u.b.GUESS_NUMBER,"\u731c\u4e00\u7801"),i={},Object(l.a)(i,u.a.SUM,"\u548c\u503c"),Object(l.a)(i,u.a.DIVISOR_THREE,"\u9664\u4e09\u4f59\u6570"),Object(l.a)(i,u.a.BIG_SMALL,"\u5927\u5c0f\u5355\u53cc"),Object(l.a)(i,u.a.EXTREMELY_BIG_SMALL,"\u6781\u5927\u6781\u5c0f"),Object(l.a)(i,u.a.COLOR,"\u8272\u6ce2"),Object(l.a)(i,u.a.SIDE,"\u5927\u4e2d\u5c0f\u8fb9"),Object(l.a)(i,u.a.LEOPARD,"\u8c79\u5b50"),Object(l.a)(i,u.a.GUESS_NUMBER,"\u731c\u4e00\u7801"),i)}}]);