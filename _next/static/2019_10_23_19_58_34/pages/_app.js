(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("hfKm"),i=n.n(r);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),i()(e,r.key,r)}}var s=n("XVgq"),a=n.n(s),u=n("Z7t5"),c=n.n(u);function l(e){return(l="function"===typeof c.a&&"symbol"===typeof a.a?function(e){return typeof e}:function(e){return e&&"function"===typeof c.a&&e.constructor===c.a&&e!==c.a.prototype?"symbol":typeof e})(e)}function d(e){return(d="function"===typeof c.a&&"symbol"===l(a.a)?function(e){return l(e)}:function(e){return e&&"function"===typeof c.a&&e.constructor===c.a&&e!==c.a.prototype?"symbol":l(e)})(e)}function f(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var p=n("Bhuq"),h=n.n(p),w=n("TRZx"),m=n.n(w);function v(e){return(v=m.a?h.a:function(e){return e.__proto__||h()(e)})(e)}var b=n("SqZg"),y=n.n(b);function g(e,t){return(g=m.a||function(e,t){return e.__proto__=t,e})(e,t)}var x=n("8Bbg"),k=n.n(x),_=n("q1tI"),S=n.n(_),T=n("/MKj"),O=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),E=function(){return(E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},C=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{u(r.next(e))}catch(t){o(t)}}function a(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,a)}u((r=r.apply(e,t||[])).next())})},P=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},A=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},M={storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(e){return e},deserializeState:function(e){return e}},j=n("m/Pd"),I=n.n(j),N=n("HohS"),R=n.n(N),z=n("ANjH"),B=n("mrSG"),q=n("h9Dq"),D=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r}return B.a(t,e),t.prototype.schedule=function(t,n){return void 0===n&&(n=0),n>0?e.prototype.schedule.call(this,t,n):(this.delay=n,this.state=t,this.scheduler.flush(this),this)},t.prototype.execute=function(t,n){return n>0||this.closed?e.prototype.execute.call(this,t,n):this._execute(t,n)},t.prototype.requestAsyncId=function(t,n,r){return void 0===r&&(r=0),null!==r&&r>0||null===r&&this.delay>0?e.prototype.requestAsyncId.call(this,t,n,r):t.flush(this)},t}(q.a),U=n("CS9Q"),G=new(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return B.a(t,e),t}(U.a))(D),W=n("K9Ia"),V=n("0/uQ"),F=n("FFOo"),H=n("60iU");function L(e,t){return void 0===t&&(t=0),function(n){return n.lift(new K(e,t))}}var K=function(){function e(e,t){void 0===t&&(t=0),this.scheduler=e,this.delay=t}return e.prototype.call=function(e,t){return t.subscribe(new X(e,this.scheduler,this.delay))},e}(),X=function(e){function t(t,n,r){void 0===r&&(r=0);var i=e.call(this,t)||this;return i.scheduler=n,i.delay=r,i}return B.a(t,e),t.dispatch=function(e){var t=e.notification,n=e.destination;t.observe(n),this.unsubscribe()},t.prototype.scheduleMessage=function(e){this.destination.add(this.scheduler.schedule(t.dispatch,this.delay,new Q(e,this.destination)))},t.prototype._next=function(e){this.scheduleMessage(H.a.createNext(e))},t.prototype._error=function(e){this.scheduleMessage(H.a.createError(e)),this.unsubscribe()},t.prototype._complete=function(){this.scheduleMessage(H.a.createComplete()),this.unsubscribe()},t}(F.a),Q=function(){return function(e,t){this.notification=e,this.destination=t}}(),Z=n("67Y/"),Y=n("psW0"),J=n("6blF"),$=1,ee={};var te=function(e){var t=$++;return ee[t]=e,Promise.resolve().then(function(){return function(e){var t=ee[e];t&&t()}(t)}),t},ne=function(e){delete ee[e]},re=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r}return B.a(t,e),t.prototype.requestAsyncId=function(t,n,r){return void 0===r&&(r=0),null!==r&&r>0?e.prototype.requestAsyncId.call(this,t,n,r):(t.actions.push(this),t.scheduled||(t.scheduled=te(t.flush.bind(t,null))))},t.prototype.recycleAsyncId=function(t,n,r){if(void 0===r&&(r=0),null!==r&&r>0||null===r&&this.delay>0)return e.prototype.recycleAsyncId.call(this,t,n,r);0===t.actions.length&&(ne(n),t.scheduled=void 0)},t}(q.a),ie=new(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return B.a(t,e),t.prototype.flush=function(e){this.active=!0,this.scheduled=void 0;var t,n=this.actions,r=-1,i=n.length;e=e||n.shift();do{if(t=e.execute(e.state,e.delay))break}while(++r<i&&(e=n.shift()));if(this.active=!1,t){for(;++r<i&&(e=n.shift());)e.unsubscribe();throw t}},t}(U.a))(re),oe=n("/21U"),se=function(e){function t(t,n,r){void 0===n&&(n=0),void 0===r&&(r=ie);var i=e.call(this)||this;return i.source=t,i.delayTime=n,i.scheduler=r,(!Object(oe.a)(n)||n<0)&&(i.delayTime=0),r&&"function"===typeof r.schedule||(i.scheduler=ie),i}return B.a(t,e),t.create=function(e,n,r){return void 0===n&&(n=0),void 0===r&&(r=ie),new t(e,n,r)},t.dispatch=function(e){var t=e.source,n=e.subscriber;return this.add(t.subscribe(n))},t.prototype._subscribe=function(e){var n=this.delayTime,r=this.source;return this.scheduler.schedule(t.dispatch,n,{source:r,subscriber:e})},t}(J.a);var ae=function(){function e(e,t){this.scheduler=e,this.delay=t}return e.prototype.call=function(e,t){return new se(t,this.delay,this.scheduler).subscribe(e)},e}(),ue=n("F/XL"),ce=n("jOth"),le=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var de=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.source=e,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,J["a"]),le(t,null,[{key:"of",value:function(){return new this(ue.a.apply(void 0,arguments))}},{key:"from",value:function(e,t){return new this(Object(V.a)(e,t))}}]),le(t,[{key:"lift",value:function(e){var n=new t(this);return n.operator=e,n}},{key:"ofType",value:function(){return ce.a.apply(void 0,arguments)(this)}}]),t}();var fe=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,function(e){var t=r.__notifier.subscribe(e);return t&&!t.closed&&e.next(r.value),t}));return r.value=n,r.__notifier=new W.a,r.__subscription=e.subscribe(function(e){e!==r.value&&(r.value=e,r.__notifier.next(e))}),r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,J["a"]),t}();function pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new(0,G.constructor)(G.SchedulerAction);var n=new W.a,r=void 0,i=function(i){r=i;var o=(new W.a).pipe(L(t)),s=(new W.a).pipe(L(t)),a=new de(o),u=new fe(s,r.getState());return n.pipe(Object(Z.a)(function(t){var n="dependencies"in e?t(a,u,e.dependencies):t(a,u);if(!n)throw new TypeError('Your root Epic "'+(t.name||"<anonymous>")+"\" does not return a stream. Double check you're not missing a return statement!");return n}),Object(Y.a)(function(e){return Object(V.a)(e).pipe((n=t,void 0===r&&(r=0),function(e){return e.lift(new ae(n,r))}),L(t));var n,r})).subscribe(r.dispatch),function(e){return function(t){var n=e(t);return s.next(r.getState()),o.next(t),n}}};return i.run=function(e){n.next(e)},i}var he=n("7HYe"),we=n("+Qwk"),me=n("iR9m"),ve=n("2qff"),be=n("VB5F"),ye=n("l18S"),ge=n("fKTs"),xe=n("qW62"),ke=n("yT3Q"),_e=n("ar3r"),Se=n("U9ri"),Te=Object(z.c)({Auth:he.d,BaseInfo:we.b,Bet:me.c,Config:ve.d,Dialog:be.a,RecentInfo:ye.e,History:ge.b,Query:xe.b,BetRecord:ke.c,EarnInfo:_e.b,Fair:Se.b}),Oe=n("bWGZ"),Ee=n("NSH1");n("CxY0"),n("K4CH"),n("XmPd");var Ce=n("Mj6V"),Pe=n.n(Ce),Ae=n("nOHt"),Me=n.n(Ae),je=n("rbv/"),Ie=S.a.createElement,Ne=(R()().publicRuntimeConfig.PUBLIC,function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,v(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=y()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,k.a),n=t,(r=[{key:"componentDidMount",value:function(){Me.a.events.on("routeChangeStart",function(){Pe.a.start()}),Me.a.events.on("routeChangeComplete",function(){Pe.a.done()})}},{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,r=e.store,i=r.getState().BaseInfo,o=i.game_group,s=i.game_code,a=i.game_name;return Ie(_.Fragment,null,Ie(I.a,null,Ie("title",null,a),Ie("link",{rel:"stylesheet",type:"text/css",href:Object(je.a)("".concat(o,"/").concat(s,"/mobile/css/mobile-main.css"))})),Ie(T.a,{store:r},Ie(t,n)))}}])&&o(n.prototype,r),i&&o(n,i),t}());t.default=function(e,t){t=E({},M,t);var n="undefined"===typeof window,r=function(r){var i=r.initialState,o=r.ctx,s=t.storeKey,a=function(){return e(t.deserializeState(i),E({},o,t,{isServer:n}))};return n?a():(window.hasOwnProperty(s)||(window[s]=a()),window[s])};return function(e){var i;return(i=function(n){function i(e,i){var o=n.call(this,e,i)||this,s=e.initialState;return t.debug&&console.log("4. WrappedApp.render created new store with initialState",s),o.store=r({initialState:s}),o}return O(i,n),i.prototype.render=function(){var t=this.props,n=t.initialProps,r=(t.initialState,A(t,["initialProps","initialState"]));return S.a.createElement(e,E({},r,n,{store:this.store}))},i}(_.Component)).displayName="withRedux("+(e.displayName||e.name||"App")+")",i.getInitialProps=function(i){return C(void 0,void 0,void 0,function(){var o,s;return P(this,function(a){switch(a.label){case 0:if(!i)throw new Error("No app context");if(!i.ctx)throw new Error("No page context");return o=r({ctx:i.ctx}),t.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",o.getState()),i.ctx.store=o,i.ctx.isServer=n,s={},"getInitialProps"in e?[4,e.getInitialProps.call(e,i)]:[3,2];case 1:s=a.sent(),a.label=2;case 2:return t.debug&&console.log("3. WrappedApp.getInitialProps has store state",o.getState()),[2,{isServer:n,initialState:t.serializeState(o.getState()),initialProps:s}]}})})},i}}(function(e){var t=pe({dependencies:{request:Ee.request}}),n=Object(z.d)(Te,e,Object(z.a)(t));return t.run(Oe.a),n})(Ne)},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"3JuP":function(e,t,n){"use strict";var r=n("hfKm"),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var o=i(n("q1tI"));t.AmpStateContext=o.createContext({})},"4hZ1":function(e,t,n){"use strict";var r=n("/HRN"),i=n("ZDA2"),o=n("/+P4"),s=n("K47E"),a=n("WaGi"),u=n("N9n2"),c=n("TbGu"),l=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var d=n("q1tI"),f=!1;t.default=function(){var e,t=new l;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){function l(e){var a;return r(this,l),a=i(this,o(l).call(this,e)),f&&(t.add(s(a)),n(s(a))),a}return u(l,c),a(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(d.Component)}},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("/HRN"),i=n("WaGi"),o=n("ZDA2"),s=n("/+P4"),a=n("N9n2"),u=n("ln6h"),c=n("KI45");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=y,t.default=void 0;var l=c(n("htGi")),d=c(n("+oT+")),f=c(n("q1tI")),p=c(n("17x9")),h=n("Bu4q");t.AppInitialProps=h.AppInitialProps;var w=n("nOHt");function m(e){return v.apply(this,arguments)}function v(){return(v=(0,d.default)(u.mark(function e(t){var n,r,i;return u.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,e.next=3,(0,h.loadGetInitialProps)(n,r);case 3:return i=e.sent,e.abrupt("return",{pageProps:i});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var b=function(e){function t(){return r(this,t),o(this,s(t).apply(this,arguments))}return a(t,e),i(t,[{key:"getChildContext",value:function(){return{router:(0,w.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,i=y(t);return f.default.createElement(n,(0,l.default)({},r,{url:i}))}}]),t}(f.default.Component);function y(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",i=n||t;return e.push(r,i)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",i=n||t;return e.replace(r,i)}}}t.default=b,b.childContextTypes={router:p.default.object},b.origGetInitialProps=m,b.getInitialProps=m},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])},IClC:function(e,t,n){"use strict";var r=n("hfKm"),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var o=i(n("q1tI"));t.HeadManagerContext=o.createContext(null)},K4CH:function(e,t,n){var r;!function(i,o){"use strict";var s="model",a="name",u="type",c="vendor",l="version",d="mobile",f="tablet",p={extend:function(e,t){var n={};for(var r in e)t[r]&&t[r].length%2===0?n[r]=t[r].concat(e[r]):n[r]=e[r];return n},has:function(e,t){return"string"===typeof e&&-1!==t.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"===typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},h={rgx:function(e,t){for(var n,r,i,o,s,a,u=0;u<t.length&&!s;){var c=t[u],l=t[u+1];for(n=r=0;n<c.length&&!s;)if(s=c[n++].exec(e))for(i=0;i<l.length;i++)a=s[++r],"object"===typeof(o=l[i])&&o.length>0?2==o.length?"function"==typeof o[1]?this[o[0]]=o[1].call(this,a):this[o[0]]=o[1]:3==o.length?"function"!==typeof o[1]||o[1].exec&&o[1].test?this[o[0]]=a?a.replace(o[1],o[2]):void 0:this[o[0]]=a?o[1].call(this,a,o[2]):void 0:4==o.length&&(this[o[0]]=a?o[3].call(this,a.replace(o[1],o[2])):void 0):this[o]=a||void 0;u+=2}},str:function(e,t){for(var n in t)if("object"===typeof t[n]&&t[n].length>0){for(var r=0;r<t[n].length;r++)if(p.has(t[n][r],e))return"?"===n?void 0:n}else if(p.has(t[n],e))return"?"===n?void 0:n;return e}},w={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},m={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,l],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],l],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],l],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[a,l],[/(konqueror)\/([\w\.]+)/i],[[a,"Konqueror"],l],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],l],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],l],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],l],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],l],[/(focus)\/([\w\.]+)/i],[[a,"Firefox Focus"],l],[/(opt)\/([\w\.]+)/i],[[a,"Opera Touch"],l],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],l],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],l],[/(windowswechat qbcore)\/([\w\.]+)/i],[[a,"WeChat(Win) Desktop"],l],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],l],[/(brave)\/([\w\.]+)/i],[[a,"Brave"],l],[/(qqbrowserlite)\/([\w\.]+)/i],[a,l],[/(QQ)\/([\d\.]+)/i],[a,l],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,l],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[a,l],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,l],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[l,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[l,[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[a,l],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[l,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],l],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],l],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[l,[a,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[a,"Sailfish Browser"],l],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,l],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],l],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],l],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],l],[/fxios\/([\w\.-]+)/i],[l,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[l,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[l,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],l],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[l,h.str,w.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[a,l],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],l],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,l]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",p.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",p.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",p.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[s,c,[u,f]],[/applecoremedia\/[\w\.]+ \((ipad)/],[s,[c,"Apple"],[u,f]],[/(apple\s{0,1}tv)/i],[[s,"Apple TV"],[c,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[c,s,[u,f]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[s,[c,"Amazon"],[u,f]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[s,h.str,w.device.amazon.model],[c,"Amazon"],[u,d]],[/android.+aft([bms])\sbuild/i],[s,[c,"Amazon"],[u,"smarttv"]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[s,c,[u,d]],[/\((ip[honed|\s\w*]+);/i],[s,[c,"Apple"],[u,d]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[c,s,[u,d]],[/\(bb10;\s(\w+)/i],[s,[c,"BlackBerry"],[u,d]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[s,[c,"Asus"],[u,f]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[c,"Sony"],[s,"Xperia Tablet"],[u,f]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[s,[c,"Sony"],[u,d]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[c,s,[u,"console"]],[/android.+;\s(shield)\sbuild/i],[s,[c,"Nvidia"],[u,"console"]],[/(playstation\s[34portablevi]+)/i],[s,[c,"Sony"],[u,"console"]],[/(sprint\s(\w+))/i],[[c,h.str,w.device.sprint.vendor],[s,h.str,w.device.sprint.model],[u,d]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[c,[s,/_/g," "],[u,d]],[/(nexus\s9)/i],[s,[c,"HTC"],[u,f]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[s,[c,"Huawei"],[u,d]],[/(microsoft);\s(lumia[\s\w]+)/i],[c,s,[u,d]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[s,[c,"Microsoft"],[u,"console"]],[/(kin\.[onetw]{3})/i],[[s,/\./g," "],[c,"Microsoft"],[u,d]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[s,[c,"Motorola"],[u,d]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[s,[c,"Motorola"],[u,f]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[c,p.trim],[s,p.trim],[u,"smarttv"]],[/hbbtv.+maple;(\d+)/i],[[s,/^/,"SmartTV"],[c,"Samsung"],[u,"smarttv"]],[/\(dtv[\);].+(aquos)/i],[s,[c,"Sharp"],[u,"smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[c,"Samsung"],s,[u,f]],[/smart-tv.+(samsung)/i],[c,[u,"smarttv"],s],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[c,"Samsung"],s,[u,d]],[/sie-(\w*)/i],[s,[c,"Siemens"],[u,d]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[c,"Nokia"],s,[u,d]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[s,[c,"Acer"],[u,f]],[/android.+([vl]k\-?\d{3})\s+build/i],[s,[c,"LG"],[u,f]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[c,"LG"],s,[u,f]],[/(lg) netcast\.tv/i],[c,s,[u,"smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[s,[c,"LG"],[u,d]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[c,s,[u,f]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[s,[c,"Lenovo"],[u,f]],[/(lenovo)[_\s-]?([\w-]+)/i],[c,s,[u,d]],[/linux;.+((jolla));/i],[c,s,[u,d]],[/((pebble))app\/[\d\.]+\s/i],[c,s,[u,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[c,s,[u,d]],[/crkey/i],[[s,"Chromecast"],[c,"Google"]],[/android.+;\s(glass)\s\d/i],[s,[c,"Google"],[u,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[s,[c,"Google"],[u,f]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[s,[c,"Google"],[u,d]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[c,"Xiaomi"],[u,d]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[s,/_/g," "],[c,"Xiaomi"],[u,f]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[s,[c,"Meizu"],[u,d]],[/(mz)-([\w-]{2,})/i],[[c,"Meizu"],s,[u,d]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[s,[c,"OnePlus"],[u,d]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[s,[c,"RCA"],[u,f]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[s,[c,"Dell"],[u,f]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[s,[c,"Verizon"],[u,f]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[c,"Barnes & Noble"],s,[u,f]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[s,[c,"NuVision"],[u,f]],[/android.+;\s(k88)\sbuild/i],[s,[c,"ZTE"],[u,f]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[s,[c,"Swiss"],[u,d]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[s,[c,"Swiss"],[u,f]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[s,[c,"Zeki"],[u,f]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[c,"Dragon Touch"],s,[u,f]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[s,[c,"Insignia"],[u,f]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[s,[c,"NextBook"],[u,f]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[c,"Voice"],s,[u,d]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[c,"LvTel"],s,[u,d]],[/android.+;\s(PH-1)\s/i],[s,[c,"Essential"],[u,d]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[s,[c,"Envizen"],[u,f]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[c,s,[u,f]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[s,[c,"MachSpeed"],[u,f]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[c,s,[u,f]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[s,[c,"Rotor"],[u,f]],[/android.+(KS(.+))\s+build/i],[s,[c,"Amazon"],[u,f]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[c,s,[u,f]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[u,p.lowerize],c,s],[/[\s\/\(](smart-?tv)[;\)]/i],[[u,"smarttv"]],[/(android[\w\.\s\-]{0,9});.+build/i],[s,[c,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[l,[a,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)/i],[[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,l],[/rv\:([\w\.]{1,9}).+(gecko)/i],[l,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,l],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[l,h.str,w.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[l,h.str,w.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],l],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[a,l],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],l],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],l],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,l],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],l],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],l],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,l],[/(haiku)\s(\w+)/i],[a,l],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[l,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[l,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,l]]},v=function(e,t){if("object"===typeof e&&(t=e,e=void 0),!(this instanceof v))return new v(e,t).getResult();var n=e||(i&&i.navigator&&i.navigator.userAgent?i.navigator.userAgent:""),r=t?p.extend(m,t):m;return this.getBrowser=function(){var e={name:void 0,version:void 0};return h.rgx.call(e,n,r.browser),e.major=p.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return h.rgx.call(e,n,r.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return h.rgx.call(e,n,r.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return h.rgx.call(e,n,r.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return h.rgx.call(e,n,r.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};v.VERSION="0.7.20",v.BROWSER={NAME:a,MAJOR:"major",VERSION:l},v.CPU={ARCHITECTURE:"architecture"},v.DEVICE={MODEL:s,VENDOR:c,TYPE:u,CONSOLE:"console",MOBILE:d,SMARTTV:"smarttv",TABLET:f,WEARABLE:"wearable",EMBEDDED:"embedded"},v.ENGINE={NAME:a,VERSION:l},v.OS={NAME:a,VERSION:l},"undefined"!==typeof t?("undefined"!==typeof e&&e.exports&&(t=e.exports=v),t.UAParser=v):void 0===(r=function(){return v}.call(t,n,t,e))||(e.exports=r);var b=i&&(i.jQuery||i.Zepto);if("undefined"!==typeof b&&!b.ua){var y=new v;b.ua=y.getResult(),b.ua.get=function(){return y.getUA()},b.ua.set=function(e){y.setUA(e);var t=y.getResult();for(var n in t)b.ua[n]=t[n]}}}("object"===typeof window?window:this)},Mj6V:function(e,t,n){var r,i;void 0===(i="function"===typeof(r=function(){var e={version:"0.2.0"},t=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(e,t,n){return e<t?t:e>n?n:e}function r(e){return 100*(-1+e)}e.configure=function(e){var n,r;for(n in e)void 0!==(r=e[n])&&e.hasOwnProperty(n)&&(t[n]=r);return this},e.status=null,e.set=function(s){var a=e.isStarted();s=n(s,t.minimum,1),e.status=1===s?null:s;var u=e.render(!a),c=u.querySelector(t.barSelector),l=t.speed,d=t.easing;return u.offsetWidth,i(function(n){""===t.positionUsing&&(t.positionUsing=e.getPositioningCSS()),o(c,function(e,n,i){var o;return(o="translate3d"===t.positionUsing?{transform:"translate3d("+r(e)+"%,0,0)"}:"translate"===t.positionUsing?{transform:"translate("+r(e)+"%,0)"}:{"margin-left":r(e)+"%"}).transition="all "+n+"ms "+i,o}(s,l,d)),1===s?(o(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout(function(){o(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){e.remove(),n()},l)},l)):setTimeout(n,l)}),this},e.isStarted=function(){return"number"===typeof e.status},e.start=function(){e.status||e.set(0);var n=function(){setTimeout(function(){e.status&&(e.trickle(),n())},t.trickleSpeed)};return t.trickle&&n(),this},e.done=function(t){return t||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(t){var r=e.status;return r?("number"!==typeof t&&(t=(1-r)*n(Math.random()*r,.1,.95)),r=n(r+t,0,.994),e.set(r)):e.start()},e.trickle=function(){return e.inc(Math.random()*t.trickleRate)},function(){var t=0,n=0;e.promise=function(r){return r&&"resolved"!==r.state()?(0===n&&e.start(),t++,n++,r.always(function(){0===--n?(t=0,e.done()):e.set((t-n)/t)}),this):this}}(),e.render=function(n){if(e.isRendered())return document.getElementById("nprogress");a(document.documentElement,"nprogress-busy");var i=document.createElement("div");i.id="nprogress",i.innerHTML=t.template;var s,u=i.querySelector(t.barSelector),c=n?"-100":r(e.status||0),d=document.querySelector(t.parent);return o(u,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),t.showSpinner||(s=i.querySelector(t.spinnerSelector))&&l(s),d!=document.body&&a(d,"nprogress-custom-parent"),d.appendChild(i),i},e.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(t.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&l(e)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var i=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),o=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()}),t[n]||(t[n]=function(t){var n=document.body.style;if(t in n)return t;for(var r,i=e.length,o=t.charAt(0).toUpperCase()+t.slice(1);i--;)if((r=e[i]+o)in n)return r;return t}(n))}function r(e,t,r){t=n(t),e.style[t]=r}return function(e,t){var n,i,o=arguments;if(2==o.length)for(n in t)void 0!==(i=t[n])&&t.hasOwnProperty(n)&&r(e,n,i);else r(e,o[1],o[2])}}();function s(e,t){var n="string"==typeof e?e:c(e);return n.indexOf(" "+t+" ")>=0}function a(e,t){var n=c(e),r=n+t;s(n,t)||(e.className=r.substring(1))}function u(e,t){var n,r=c(e);s(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function c(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function l(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return e})?r.call(t,n,t,e):r)||(e.exports=i)},PQJW:function(e,t,n){var r=n("d04V"),i=n("yLu3");e.exports=function(e){if(i(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},TbGu:function(e,t,n){var r=n("fGSI"),i=n("PQJW"),o=n("2PDY");e.exports=function(e){return r(e)||i(e)||o()}},Wziy:function(e,t,n){"use strict";var r=n("hfKm"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var o=i(n("q1tI")),s=n("3JuP");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery;return n||i&&(void 0!==o&&o)}t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(s.AmpStateContext))}},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"m/Pd":function(e,t,n){"use strict";var r=n("ttDY"),i=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};i(t,"__esModule",{value:!0});var s=o(n("q1tI")),a=o(n("4hZ1")),u=n("3JuP"),c=n("IClC"),l=n("Wziy");function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{key:"charSet",charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=d;var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce(function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,i={};return function(o){if(o.key&&"number"!==typeof o.key&&0===o.key.indexOf(".$"))return!e.has(o.key)&&(e.add(o.key),!0);switch(o.type){case"title":case"base":if(t.has(o.type))return!1;t.add(o.type);break;case"meta":for(var s=0,a=p.length;s<a;s++){var u=p[s];if(o.props.hasOwnProperty(u))if("charSet"===u){if(n.has(u))return!1;n.add(u)}else{var c=o.props[u],l=i[u]||new r;if(l.has(c))return!1;l.add(c),i[u]=l}}}return!0}}()).reverse().map(function(e,t){var n=e.key||t;return s.default.cloneElement(e,{key:n})})}var w=a.default();function m(e){var t=e.children;return s.default.createElement(u.AmpStateContext.Consumer,null,function(e){return s.default.createElement(c.HeadManagerContext.Consumer,null,function(n){return s.default.createElement(w,{reduceComponentsToState:h,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)})})}m.rewind=w.rewind,t.default=m}},[["GcxT",1,0]]]);