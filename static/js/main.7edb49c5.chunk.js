(window.webpackJsonpchat=window.webpackJsonpchat||[]).push([[3],{21:function(e,t,a){e.exports={nav:"Nav_nav__dmHs2",list:"Nav_list__2Jd23",link:"Nav_link__3iMic",active:"Nav_active__3Uye6"}},24:function(e,t,a){e.exports={chat:"MessageInput_chat__2Sw31",form:"MessageInput_form__3lAnP",input:"MessageInput_input__I7JX3",button:"MessageInput_button__2h3Kp"}},25:function(e,t,a){e.exports={container:"App_container__uDjcb",header:"App_header__2MU3W",main:"App_main__3PqOm",footer:"App_footer__2oXxv"}},28:function(e,t,a){e.exports={header:"Header_header__2ojd8",info:"Header_info__2Mu6x"}},29:function(e,t,a){e.exports={container:"MyChatPage_container__3fGGx"}},30:function(e,t,a){e.exports={footer:"Footer_footer__1DDMP",text:"Footer_text__3cOBf"}},31:function(e,t,a){e.exports={authentication:"Login_authentication__supjz",form:"Login_form__2Lwoe",input:"Login_input__3lB4O"}},38:function(e,t,a){e.exports={counters:"Counters_counters__mrGKk",data:"Counters_data__o3x7t"}},39:function(e,t,a){e.exports={backdrop:"Spinner_backdrop__3zd4g",Loader:"Spinner_Loader__OpXXu",spin:"Spinner_spin__u1NY9"}},40:function(e,t,a){e.exports={list:"ChatList_list__2sDDt",item:"ChatList_item__x4ctk"}},5:function(e,t,a){e.exports={item:"ChatItem_item__29WUN",img:"ChatItem_img__3wvmK",content:"ChatItem_content__1W8Ry",btn:"ChatItem_btn__1cyA7",created:"ChatItem_created__fM3hq",title:"ChatItem_title__1m7pg",message:"ChatItem_message__3qIed",button:"ChatItem_button__1AL9A",itemUser:"ChatItem_itemUser__2SJbe ChatItem_item__29WUN",userMessage:"ChatItem_userMessage__3sWul ChatItem_message__3qIed",edit:"ChatItem_edit__1GWpQ ChatItem_button__1AL9A"}},56:function(e,t,a){e.exports={logo:"Logo_logo__2TwlX"}},58:function(e,t,a){e.exports={last:"LastMessage_last__1mipy"}},60:function(e,t,a){e.exports=a.p+"static/media/no-avatar.993fc663.png"},61:function(e,t,a){e.exports={signIn:"LoginIcon_signIn__2Jp3k"}},62:function(e,t,a){e.exports=a(92)},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),s=a(13),l=a(12),o=a(9),u=a(10),i=a(53),m=a(54),p={FETCH_REQUEST:"messages/FETCH_REQUEST",FETCH_SUCCESS:"messages/FETCH_SUCCESS",FETCH_ERROR:"messages/FETCH_ERROR",ADD_MESSAGE:"messages/ADD_MESSAGE",EDIT_MESSAGE:"messages/EDIT_MESSAGE",DELETE_MESSAGE:"messages/DELETE_MESSAGE"},f={fetchDataRequest:function(){return{type:p.FETCH_REQUEST}},fetchDataSuccess:function(e){return{type:p.FETCH_SUCCESS,payload:e}},fetchDataError:function(e){return{type:p.FETCH_ERROR,payload:e}},addMessage:function(e){return{type:p.ADD_MESSAGE,payload:e}},editMessage:function(e){return{type:p.EDIT_MESSAGE,payload:e}},deleteMessage:function(e){return{type:p.DELETE_MESSAGE,payload:e}}},E=a(34),d=a.n(E),g=a(55),_=a(35),h=a.n(_);h.a.defaults.baseURL="https://api.dev.buki.com.ua";var v={fetchMessages:function(){return function(){var e=Object(g.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(f.fetchDataRequest()),e.prev=1,e.next=4,h.a.get("/frontend_test");case 4:a=e.sent,t(f.fetchDataSuccess(a.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(f.fetchDataError(e.t0));case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()}},b=a(17);var O=a(20),y=a(23),M=function(e){return e.messages},C=Object(O.a)(M,function(e){return e.length}),S=Object(O.a)(M,function(e){var t=e.map(function(e){return e.user});return Object(b.a)(new Set(t))}),N=Object(O.a)([S,M],function(e,t){return e.map(function(e){var a=t.find(function(t){return t.user===e}).avatar;return{user:e,avatar:a}})}),j={getAllMessages:M,getMessageLength:C,getUniqueUsers:S,getUsersLength:Object(O.a)(S,function(e){return e.length}),getLastMessage:Object(O.a)(M,function(e){var t=e.map(function(e){return y(e.created_at)});return y.max(t)}),getUsersAvatar:N},L={LOGIN:"auth/LOGIN"},D={signIn:function(e){return{type:L.LOGIN,payload:e}}};var x=function(e){return e.user},A={OPEN_MODAL:"modal/OPEN_MODAL",CLOSE_MODAL:"modal/CLOSE_MODAL"},I={openModal:function(e){return{type:A.OPEN_MODAL,payload:e}},closeModal:function(){return{type:A.CLOSE_MODAL}}};var w=Object(u.combineReducers)({modalMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case A.OPEN_MODAL:return n;case A.CLOSE_MODAL:return null;default:return e}},modalIsOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case A.OPEN_MODAL:return!0;case A.CLOSE_MODAL:return!1;default:return e}}}),k={ADD_LIKE:"like/ADD_LIKE",REMOVE_LIKE:"like/REMOVE_LIKE"},R={addLike:function(e){return{type:k.ADD_LIKE,payload:{id:e}}},removeLike:function(e){return{type:k.REMOVE_LIKE,payload:{id:e}}}};var T=Object(u.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case L.LOGIN:return n;default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case p.FETCH_SUCCESS:return n;case p.ADD_MESSAGE:return[].concat(Object(b.a)(e),[n]);case p.EDIT_MESSAGE:return e.map(function(e){return e.id===n.id?n:e});case p.DELETE_MESSAGE:return e.filter(function(e){return e.id!==n});default:return e}},modal:w,likes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case k.ADD_LIKE:return e.includes(n.id)?e:[].concat(Object(b.a)(e),[n.id]);case k.REMOVE_LIKE:return e.filter(function(e){return e!==n.id});default:return e}}}),P=Object(u.applyMiddleware)(m.a),U=Object(i.composeWithDevTools)(P),G=Object(u.createStore)(T,U),H=Object.freeze({MAIN:"/",HOME:"/home",ABOUT:"/about",CONTACT:"/contact"}),F=a(56),B=a.n(F),z=function(){return r.a.createElement(s.b,{className:B.a.logo,to:H.MAIN},"My Chat")},K=a(38),q=a.n(K),W=function(e){var t=e.messages,a=e.users;return r.a.createElement("div",{className:q.a.counters},r.a.createElement("div",{className:q.a.data},a>0&&r.a.createElement("p",null,a,r.a.createElement("span",null," users "))),r.a.createElement("div",null,t>0&&r.a.createElement("p",null,t,r.a.createElement("span",null," messages"))))},J=a(58),V=a.n(J),Y=function(e){var t=e.date;return r.a.createElement("div",{className:V.a.last},t._i&&r.a.createElement("p",null,"Last Message: ",t._i," "))},X=a(28),Q=a.n(X),Z=Object(o.b)(function(e){return{usersCount:j.getUsersLength(e),messagesCount:j.getMessageLength(e),lastMessage:j.getLastMessage(e)}},null)(function(e){var t=e.usersCount,a=e.messagesCount,n=e.lastMessage;return r.a.createElement("div",{className:Q.a.header},r.a.createElement(z,{className:Q.a.logo}),r.a.createElement("div",{className:Q.a.info},r.a.createElement(W,{users:t,messages:a})),r.a.createElement(Y,{date:n}))}),$=a(14),ee=a(15),te=a(18),ae=a(16),ne=a(19),re=a(59),ce=a(39),se=a.n(ce),le=function(){return r.a.createElement("div",{className:se.a.backdrop},r.a.createElement("div",{className:se.a.Loader}))},oe=a(5),ue=a.n(oe),ie=a(60),me=a.n(ie);function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Ee=r.a.createElement("path",{d:"M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z"}),de=r.a.createElement("g",null),ge=r.a.createElement("g",null),_e=r.a.createElement("g",null),he=r.a.createElement("g",null),ve=r.a.createElement("g",null),be=r.a.createElement("g",null),Oe=r.a.createElement("g",null),ye=r.a.createElement("g",null),Me=r.a.createElement("g",null),Ce=r.a.createElement("g",null),Se=r.a.createElement("g",null),Ne=r.a.createElement("g",null),je=r.a.createElement("g",null),Le=r.a.createElement("g",null),De=r.a.createElement("g",null),xe=function(e){var t=e.svgRef,a=e.title,n=fe(e,["svgRef","title"]);return r.a.createElement("svg",pe({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 51.997 51.997",style:{enableBackground:"new 0 0 51.997 51.997"},xmlSpace:"preserve",ref:t},n),r.a.createElement("title",null,a),Ee,de,ge,_e,he,ve,be,Oe,ye,Me,Ce,Se,Ne,je,Le,De)},Ae=r.a.forwardRef(function(e,t){return r.a.createElement(xe,pe({svgRef:t},e))});a.p;function Ie(){return(Ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function we(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ke=r.a.createElement("g",null,r.a.createElement("path",{d:"M414.41,60.676c-16.084-16.083-35.446-24.125-58.102-24.125h-91.357c-2.478,0-4.429,0.614-5.853,1.855 c-1.431,1.237-2.382,3.093-2.854,5.568c-0.479,2.474-0.76,4.709-0.853,6.707c-0.096,1.997-0.051,4.521,0.144,7.565 c0.186,3.046,0.281,4.949,0.281,5.713c0.571,1.524,0.767,2.81,0.571,3.855c-0.191,1.043,0.476,1.903,1.998,2.568 c1.52,0.666,2.279,1.191,2.279,1.569c0,0.378,1.096,0.662,3.285,0.855c2.19,0.192,3.289,0.284,3.289,0.284h3.713h3.142h82.228 c12.56,0,23.312,4.471,32.258,13.422c8.952,8.945,13.422,19.696,13.422,32.261V319.77c0,12.563-4.47,23.312-13.422,32.258 c-8.945,8.948-19.698,13.421-32.258,13.421h-91.357c-2.478,0-4.436,0.62-5.853,1.855c-1.43,1.242-2.382,3.094-2.857,5.564 c-0.476,2.478-0.763,4.716-0.855,6.714c-0.092,1.995-0.051,4.518,0.144,7.563c0.195,3.046,0.288,4.948,0.288,5.708 c0,2.478,0.896,4.613,2.707,6.427c1.81,1.807,3.949,2.71,6.427,2.71h91.357c22.648,0,42.018-8.042,58.095-24.133 c16.084-16.077,24.126-35.446,24.126-58.095V118.769C438.533,96.118,430.491,76.754,414.41,60.676z"}),r.a.createElement("path",{d:"M338.047,219.27c0-4.948-1.813-9.233-5.427-12.85L177.302,51.101c-3.616-3.612-7.895-5.424-12.847-5.424 c-4.952,0-9.233,1.812-12.85,5.424c-3.615,3.617-5.424,7.904-5.424,12.85v82.226H18.274c-4.952,0-9.235,1.812-12.851,5.424 C1.807,155.219,0,159.503,0,164.452v109.635c0,4.949,1.807,9.233,5.424,12.848c3.619,3.61,7.902,5.427,12.851,5.427h127.906 v82.225c0,4.945,1.809,9.233,5.424,12.847c3.621,3.617,7.902,5.428,12.85,5.428c4.949,0,9.231-1.811,12.847-5.428l155.318-155.312 C336.234,228.501,338.047,224.216,338.047,219.27z"})),Re=function(e){var t=e.svgRef,a=e.title,n=we(e,["svgRef","title"]);return r.a.createElement("svg",Ie({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 438.542 438.542",style:{enableBackground:"new 0 0 438.542 438.542"},xmlSpace:"preserve",ref:t},n),r.a.createElement("title",null,a),ke)},Te=r.a.forwardRef(function(e,t){return r.a.createElement(Re,Ie({svgRef:t},e))});a.p;function Pe(){return(Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Ue(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Ge=r.a.createElement("g",null,r.a.createElement("g",{id:"c142_x"},r.a.createElement("path",{d:"M13.98,0C6.259,0,0,6.261,0,13.983c0,7.721,6.259,13.982,13.98,13.982c7.725,0,13.985-6.262,13.985-13.982 C27.965,6.261,21.705,0,13.98,0z M19.992,17.769l-2.227,2.224c0,0-3.523-3.78-3.786-3.78c-0.259,0-3.783,3.78-3.783,3.78 l-2.228-2.224c0,0,3.784-3.472,3.784-3.781c0-0.314-3.784-3.787-3.784-3.787l2.228-2.229c0,0,3.553,3.782,3.783,3.782 c0.232,0,3.786-3.782,3.786-3.782l2.227,2.229c0,0-3.785,3.523-3.785,3.787C16.207,14.239,19.992,17.769,19.992,17.769z"})),r.a.createElement("g",{id:"Capa_1_104_"})),He=function(e){var t=e.svgRef,a=e.title,n=Ue(e,["svgRef","title"]);return r.a.createElement("svg",Pe({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 27.965 27.965",style:{enableBackground:"new 0 0 27.965 27.965"},xmlSpace:"preserve",ref:t},n),r.a.createElement("title",null,a),Ge)},Fe=r.a.forwardRef(function(e,t){return r.a.createElement(He,Pe({svgRef:t},e))}),Be=(a.p,function(e){var t=e.messages,a=t.id,n=t.avatar,c=t.created_at,s=t.user,l=t.message,o=e.addLike,u=e.userName,i=e.openModal,m=e.handleDeleteNote;return r.a.createElement("div",{className:u!==s?ue.a.item:ue.a.itemUser},r.a.createElement("img",{className:ue.a.img,src:n||me.a,alt:s,width:"80px",height:"80px"}),r.a.createElement("div",{className:ue.a.content},r.a.createElement("p",{className:ue.a.created},c),r.a.createElement("h2",{className:ue.a.title},s),r.a.createElement("p",{className:u!==s?ue.a.message:ue.a.userMessage},l),u!==s?r.a.createElement("button",{className:ue.a.button,onClick:function(){return o(a)},type:"button"},r.a.createElement(Ae,null)):r.a.createElement("div",{className:ue.a.btn},r.a.createElement("button",{className:ue.a.edit,onClick:function(){return i(a)},type:"button"},r.a.createElement(Te,null)),r.a.createElement("button",{className:ue.a.edit,onClick:function(){return m(a)},type:"button"},r.a.createElement(Fe,null)))))}),ze=a(40),Ke=a.n(ze),qe=function(e){function t(){var e,a;Object($.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(te.a)(this,(e=Object(ae.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!1},a.handleDeleteNote=function(e){(0,a.props.deleteMessage)(e)},a}return Object(ne.a)(t,e),Object(ee.a)(t,[{key:"componentDidMount",value:function(){this.setState({isLoading:!0}),(0,this.props.fetchMessages)(),this.setState({isLoading:!1})}},{key:"render",value:function(){var e=this,t=this.props,a=t.messages,n=void 0===a?[]:a,c=t.addLike,s=t.editMessage,l=t.user,o=t.openModal,u=this.state.isLoading;return r.a.createElement("div",null,u?r.a.createElement(le,null):r.a.createElement("section",null,r.a.createElement(re.a,null,r.a.createElement("ul",{className:Ke.a.list},n.reverse().map(function(t){return r.a.createElement("li",{className:Ke.a.item,key:t.id},r.a.createElement(Be,{messages:t,addLike:c,editMessage:s,userName:l,openModal:o,handleDeleteNote:e.handleDeleteNote}))})))))}}]),t}(n.Component),We={fetchMessages:v.fetchMessages,deleteMessage:f.deleteMessage,addLike:R.addLike,openModal:I.openModal},Je=Object(o.b)(function(e){return{messages:j.getAllMessages(e),user:x(e)}},We)(qe),Ve=a(41),Ye=a(24),Xe=a.n(Ye);function Qe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var Ze={message:""},$e=function(e){function t(){var e,a;Object($.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(te.a)(this,(e=Object(ae.a)(t)).call.apply(e,[this].concat(r)))).state=Ze,a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(Ve.a)({},n,r))},a.handleSubmitForm=function(e){e.preventDefault();var t=a.props,n=t.user,r=t.addMessage,c=t.usersAvatar,s=a.state.message,l=null,o=c.find(function(e){return e.user===n});o&&(l=o.avatar);r({id:(new Date).getTime().toString(36),user:n,avatar:l,created_at:y().format("YYYY-MM-DD HH:mm:ss"),message:s}),a.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Qe(a,!0).forEach(function(t){Object(Ve.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Qe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},Ze))},a}return Object(ne.a)(t,e),Object(ee.a)(t,[{key:"render",value:function(){var e=this.state.message;return r.a.createElement("div",{className:Xe.a.chat},r.a.createElement("form",{onSubmit:this.handleSubmitForm,className:Xe.a.form},r.a.createElement("input",{className:Xe.a.input,type:"text",name:"message",placeholder:"Type something...",value:e,onChange:this.handleChange}),r.a.createElement("button",{className:Xe.a.button,type:"submit"},"Send")))}}]),t}(n.Component),et={addMessage:f.addMessage},tt=Object(o.b)(function(e){return{user:x(e),usersAvatar:j.getUsersAvatar(e)}},et)($e),at=a(29),nt=a.n(at),rt=function(){return r.a.createElement("section",{className:nt.a.container},r.a.createElement("div",{className:nt.a.input},r.a.createElement(tt,null)),r.a.createElement("div",{className:nt.a.list},r.a.createElement(Je,null)))},ct=[{name:"Home",path:H.HOME},{name:"About",path:H.ABOUT},{name:"Contact us",path:H.CONTACT}],st=a(21),lt=a.n(st),ot=function(e){var t=e.items,a=void 0===t?[]:t;return r.a.createElement("nav",{className:lt.a.nav},r.a.createElement("ul",{className:lt.a.list},a.map(function(e){var t=e.name,a=e.path;return r.a.createElement("li",{key:t,className:lt.a.link},r.a.createElement(s.c,{exact:!0,to:a,activeClassName:lt.a.active,className:lt.a.link},t))})))},ut=a(30),it=a.n(ut),mt=function(){return r.a.createElement("div",{className:it.a.footer},r.a.createElement(ot,{className:it.a.nav,items:ct}),r.a.createElement("div",{className:it.a.text},"@ Copyright 2019"))},pt=a(61),ft=a.n(pt),Et=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"submit",className:ft.a.signIn},r.a.createElement(Te,null)))},dt=a(31),gt=a.n(dt),_t=function(e){function t(){var e,a;Object($.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(te.a)(this,(e=Object(ae.a)(t)).call.apply(e,[this].concat(r)))).state={userName:""},a.handleChangeInput=function(e){var t=e.target.value;a.setState({userName:t})},a.handleSubmitForm=function(e){e.preventDefault(),(0,a.props.signIn)(a.state.userName),a.resetForm()},a.resetForm=function(){a.setState({userName:""})},a}return Object(ne.a)(t,e),Object(ee.a)(t,[{key:"render",value:function(){var e=this.state.userName;return r.a.createElement("section",{className:gt.a.authentication},r.a.createElement("form",{className:gt.a.form,onSubmit:this.handleSubmitForm},r.a.createElement("input",{className:gt.a.input,type:"text",value:e,required:!0,onChange:this.handleChangeInput,placeholder:"Your name"}),r.a.createElement(Et,null)))}}]),t}(n.Component),ht=a(25),vt=a.n(ht),bt=Object(n.lazy)(function(){return a.e(2).then(a.bind(null,93))}),Ot=Object(n.lazy)(function(){return a.e(0).then(a.bind(null,94))}),yt=Object(n.lazy)(function(){return a.e(1).then(a.bind(null,95))}),Mt={signIn:D.signIn},Ct=Object(o.b)(function(e){return{user:x(e)}},Mt)(function(e){var t=e.user,a=e.signIn;return r.a.createElement("div",{className:vt.a.container},r.a.createElement("header",{className:vt.a.header},r.a.createElement(Z,null)),r.a.createElement("main",{className:vt.a.main},t?r.a.createElement(n.Suspense,{fallback:le},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:H.MAIN,component:rt}),r.a.createElement(l.b,{exact:!0,path:H.HOME,component:bt}),r.a.createElement(l.b,{exact:!0,path:H.ABOUT,component:Ot}),r.a.createElement(l.b,{exact:!0,path:H.CONTACT,component:yt}),r.a.createElement(l.a,{to:"/"}))):r.a.createElement(_t,{signIn:a})),r.a.createElement("footer",{className:vt.a.footer},r.a.createElement(mt,null)))});a(91);Object(c.render)(r.a.createElement(o.a,{store:G},r.a.createElement(s.a,null,r.a.createElement(l.b,{component:Ct}))),document.getElementById("root"))}},[[62,4,5]]]);
//# sourceMappingURL=main.7edb49c5.chunk.js.map