var se=Object.defineProperty;var ae=(e,t,o)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var N=(e,t,o)=>(ae(e,typeof t!="symbol"?t+"":t,o),o);import{c as w,r as u,o as l,a as d,b as s,w as v,v as b,d as O,e as g,f as U,g as I,h as _,i as A,j as W,s as ne,k as re,l as ie,S as x,n as D,m as V,p as C,q as R,t as J,u as z,x as Q,y as ce,z as le,A as X,B as k,F as M,C as Z,D as P,E,G as y,H as F,I as de,J as ue,K as me,L as he,M as pe,N as _e,V as fe}from"./vendor.2f0af20c.js";const ge=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}};ge();var m=(e,t)=>{const o=e.__vccOpts||e;for(const[n,a]of t)o[n]=a;return o};const ve={};function $e(e,t){const o=u("RouterView");return l(),w(o)}var ye=m(ve,[["render",$e]]);const we={class:"w-100 bg-dark rounded-3 p-4 shadow"},be=s("h1",{class:"mb-3 text-white"},"Log in",-1),Re={class:"form-group"},Se=s("label",{class:"text-white opacity-75",for:"email-form"},"E-mail",-1),Ce=s("label",{class:"text-white opacity-75 mt-3",for:"password-form"},"Password",-1),ke=s("input",{class:"btn btn-primary mt-3 mb-2",type:"submit",value:"Login"},null,-1),Be=I("Create new account");function Ie(e,t,o,n,a,r){const i=u("router-link");return l(),d("div",we,[be,s("form",{onSubmit:t[2]||(t[2]=O((...c)=>e.login&&e.login(...c),["prevent"]))},[s("div",Re,[Se,v(s("input",{class:"form-control",id:"email-form","onUpdate:modelValue":t[0]||(t[0]=c=>e.email=c),required:""},null,512),[[b,e.email]]),Ce,v(s("input",{class:"form-control",id:"password-form",type:"password","onUpdate:modelValue":t[1]||(t[1]=c=>e.password=c),required:""},null,512),[[b,e.password]]),ke])],32),g(i,{class:"text-decoration-none",to:"/register"},{default:U(()=>[Be]),_:1})])}const xe=_({name:"LoginDialog",emits:["login"],data(){return{email:"",password:""}},methods:{login(){const e={email:this.email,password:this.password};this.$emit("login",e)}}});var Le=m(xe,[["render",Ie]]);const $=A({id:"user",state:()=>({auth:W(),user:W().currentUser}),actions:{async loginWithCredentials(e,t){if(this.user===null)try{let o=await ne(this.auth,e,t);this.user=o.user,this.auth.updateCurrentUser(this.user)}catch(o){throw o}},async signOut(){if(this.user!==null)try{await re(this.auth),this.user=null}catch(e){throw e}},async createUser(e,t){if(this.user===null)try{let o=await ie(this.auth,e,t);this.user=o.user}catch(o){throw o}},async bindUser(){return new Promise((e,t)=>{this.auth.onAuthStateChanged(async o=>{this.user=o||null,e()},t)})}},getters:{loggedIn(){return this.user!==null},email(){var e;return((e=this.user)==null?void 0:e.email)?this.user.email:""},username(){var t,o,n;const e=(t=this.user)==null?void 0:t.displayName;return e||((n=(o=this.user)==null?void 0:o.email)==null?void 0:n.split("@")[0])}}}),B=x.mixin({toast:!0,position:"bottom-end",timer:3e3,timerProgressBar:!0,showConfirmButton:!1}),Ne={class:"container-fluid"},Ve={class:"row"},Me={class:"col-sm-12 col-md-8 col-lg-4 vh-100 justify-content-center align-items-center d-flex mx-auto"};function Ue(e,t,o,n,a,r){const i=u("Login-Dialog");return l(),d("div",Ne,[s("div",Ve,[s("div",Me,[g(i,{onLogin:e.login},null,8,["onLogin"])])])])}const ze=_({name:"LoginView",data(){return{userStore:$()}},components:{LoginDialog:Le},methods:{async login(e){try{await this.userStore.loginWithCredentials(e.email,e.password),B.fire({icon:"success",title:"Logged in."}),this.$router.push("/")}catch(t){console.log(t),x.fire("Firebase throwed error.","Firebase throwed error.","error")}}}});var Oe=m(ze,[["render",Ue]]);const Ae={class:"w-100 bg-dark rounded-3 p-4 shadow"},De=s("h1",{class:"mb-3 text-white"},"Register",-1),Pe={class:"form-group"},Ee=s("label",{class:"text-white opacity-75",for:"email-form"},"E-mail",-1),Fe=s("label",{class:"text-white opacity-75 mt-3",for:"password-form"},"Password",-1),Te=s("label",{class:"text-white opacity-75 mt-3",for:"repeatedPassword-form"},"Repeat password",-1),je=s("input",{class:"btn btn-primary mt-3 mb-2",type:"submit",value:"Register"},null,-1),qe=I("Login to exist account");function We(e,t,o,n,a,r){const i=u("router-link");return l(),d("div",Ae,[De,s("form",{onSubmit:t[3]||(t[3]=O((...c)=>e.createUser&&e.createUser(...c),["prevent"]))},[s("div",Pe,[Ee,v(s("input",{class:"form-control",id:"email-form",type:"email","onUpdate:modelValue":t[0]||(t[0]=c=>e.email=c),required:""},null,512),[[b,e.email]]),Fe,v(s("input",{class:"form-control",id:"password-form",type:"password","onUpdate:modelValue":t[1]||(t[1]=c=>e.password=c),required:""},null,512),[[b,e.password]]),Te,v(s("input",{class:"form-control",id:"repeatedPassword-form",type:"password","onUpdate:modelValue":t[2]||(t[2]=c=>e.repeatedPassword=c),required:""},null,512),[[b,e.repeatedPassword]]),je])],32),g(i,{class:"text-decoration-none",to:"/login"},{default:U(()=>[qe]),_:1})])}const He=_({name:"RegisterDialog",emits:["createUser"],data(){return{email:"",password:"",repeatedPassword:""}},methods:{createUser(){if(this.password!==this.repeatedPassword)x.fire("Form values are invalid","Passwords are not the same","error");else{const e={email:this.email,password:this.password};this.$emit("createUser",e)}}}});var Ke=m(He,[["render",We]]);const Ge={class:"container-fluid"},Je={class:"row"},Qe={class:"col-sm-12 col-md-8 col-lg-4 vh-100 justify-content-center align-items-center d-flex mx-auto"};function Xe(e,t,o,n,a,r){const i=u("RegisterDialog");return l(),d("div",Ge,[s("div",Je,[s("div",Qe,[g(i,{onCreateUser:e.createUser},null,8,["onCreateUser"])])])])}const Ze=_({name:"LoginView",components:{RegisterDialog:Ke},methods:{async createUser(e){let t=$();try{await t.createUser(e.email,e.password),B.fire({icon:"success",title:"Created new user."}),this.$router.push("/")}catch(o){console.log(o),x.fire("Firebase throwed error.","Firebase throwed error.","error")}}}});var Ye=m(Ze,[["render",Xe]]);function T(){return window.innerWidth<768}const et=s("div",{class:"d-flex flex-column"},null,-1),tt=[et];function ot(e,t,o,n,a,r){return l(),d("div",{class:"rounded rounded-circle chat-icon d-flex align-items-center justify-content-center text-white fs-2",style:V({backgroundColor:e.chatRoomInfo.color,width:e.circleSize,height:e.circleSize})},[s("i",{class:D(e.chatRoomInfo.icon),style:V({fontSize:e.iconSize})},tt,6)],4)}const st=_({props:{size:{type:Number,required:!0},chatRoomInfo:{type:Object,required:!0}},computed:{circleSize(){return this.size+"rem"},iconSize(){return this.size/1.5+"rem"}}});var Y=m(st,[["render",ot]]);const S=A({id:"chat",state:()=>({messages:[],selectedRoom:void 0}),actions:{setSelectedRoom(e){this.selectedRoom=e},async deleteSelectedRoom(){var o;const e=C(),t=R(e,`/room/${(o=this.selectedRoom)==null?void 0:o.key}`);await ce(t),this.selectedRoom=void 0},updateLastMessage(e){const{key:t}=this.selectedRoom,o=C(),n=R(o,`/room/${t}`);le(n,{lastMessage:e})},sendMessage(e){const t=$(),o=C(),{key:n}=this.selectedRoom,a=R(o,`/room/${n}/message/`);X(a,{username:t.username,content:e,date:new Date}),this.updateLastMessage(e)},messageExists(e){var o;const t=(o=this.messages)==null?void 0:o.map(n=>n.key);return!!(t==null?void 0:t.includes(e))},addMessage(e){var t;this.messageExists(e.key)||(t=this.messages)==null||t.push(e)},onFirebaseRoomDeletion(e){const{key:t}=this.selectedRoom;return e===t?(this.selectedRoom=void 0,!0):!1}},getters:{isMyRoom(){var t,o;let e=$();return((t=this.selectedRoom)==null?void 0:t.createdBy)===((o=e.user)==null?void 0:o.uid)}}});function at(){var a;const e=S(),t=C(),o=R(t,`room/${(a=e.selectedRoom)==null?void 0:a.key}/message`),n=R(t,"room/");J(o,r=>{const i=r.key,{content:c,username:h,date:f}=r.val();e.addMessage({key:i,username:h,content:c,date:f})}),z(o,r=>{const{key:i}=r.val();e.messages=e.messages.filter(c=>c.key!==i)}),z(n,r=>{const{key:i}=r.val();e.onFirebaseRoomDeletion(i)}),Q(o,r=>{const{key:i,content:c,username:h,date:f}=r.val();e.messages.forEach(p=>{p.key===i&&(p.content=c,p.username=h,p.date=f)})})}const L=A({id:"chatRooms",state:()=>({rooms:[],animated:!1}),getters:{getRooms(){return this.rooms}},actions:{async addRoom(e){var c;let t=$(),o=C(),n=await R(o,"room/");const{roomName:a,color:r,icon:i}=e;X(n,{name:a,color:r,icon:i,createdBy:(c=t.user)==null?void 0:c.uid})},getChatRoomById(e){return this.rooms.filter(t=>t.key===e)[0]}}});function nt(){const e=C(),t=R(e,"room"),o=L();J(t,n=>{const a=n.key,{icon:r,name:i,color:c,lastMessage:h,createdBy:f}=n.val(),p={key:a,icon:r,roomName:i,color:c,lastMessage:h||"",createdBy:f};o.rooms.push(p)}),z(t,n=>{o.rooms=o.rooms.filter(a=>a.key!==n.key)}),Q(t,n=>{const a=o.rooms.filter(p=>p.key===n.key)[0],{icon:r,name:i,color:c,lastMessage:h,createdBy:f}=n.val();a.icon=r,a.roomName=i,a.color=c,a.lastMessage=h,a.createdBy=f})}const rt=["id"],it={class:"d-flex flex-column"},ct={class:"h5 mb-0"},lt={class:"text-muted mb-0 last-message"};function dt(e,t,o,n,a,r){const i=u("ChatIcon"),c=u("router-link");return l(),w(c,{class:"text-decoration-none text-black",to:`/chat/${e.chatRoomInfo.key}`},{default:U(()=>[s("div",{class:D(["chat-room","d-flex","flex-row","align-items-center","gap-3","p-2","rounded-pill",e.isThisChatRoomActive?"active":""]),id:`chat-room-${e.chatRoomInfo.key}`,onAnimationend:t[0]||(t[0]=(...h)=>e.animationEnd&&e.animationEnd(...h))},[g(i,{chatRoomInfo:e.chatRoomInfo,size:3},null,8,["chatRoomInfo"]),s("div",it,[s("p",ct,k(e.chatRoomInfo.roomName),1),s("span",lt,k(e.chatRoomInfo.lastMessage),1)])],42,rt)]),_:1},8,["to"])}const ut=_({components:{ChatIcon:Y},props:{chatRoomInfo:{type:Object,required:!0}},data(){return{animated:!1,chatRoomStore:L(),chatStore:S()}},computed:{isThisChatRoomActive(){var e;return((e=this.chatStore.selectedRoom)==null?void 0:e.key)===this.chatRoomInfo.key}},methods:{animationEnd(){let e=document.getElementById(`chat-room-${this.chatRoomInfo.key}`);e==null||e.classList.remove("animate__animated","animate__slideInLeft","animate__faster"),this.chatRoomStore.animated=!0}},mounted(){if(!this.chatRoomStore.animated){let e=document.getElementById(`chat-room-${this.chatRoomInfo.key}`);e==null||e.classList.add("animate__animated","animate__slideInLeft","animate__faster")}}});var mt=m(ut,[["render",dt],["__scopeId","data-v-3e4dcd04"]]);const ht=x.mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger"},buttonsStyling:!1}),pt=s("span",{class:"me-2"},"Create new",-1),_t=s("i",{class:"fa-solid fa-plus"},null,-1),ft=[pt,_t];function gt(e,t,o,n,a,r){return l(),d("button",{class:"btn btn-primary w-100 btn-lg rounded-pill my-3",onClick:t[0]||(t[0]=(...i)=>e.onClick&&e.onClick(...i))},ft)}const vt=_({methods:{onClick(){ht.fire({title:"Create new room",confirmButtonText:"Create",html:`
                <div class="form-group">
                    <label for="room-name">Room name</label>
                    <input type="text" id="room-name" class="form-control"/>
                </div>
                <div class="form-group mt-3">
                    <label for="icon">Select icon</label>
                    <select class="form-control" id="icon">
                        <option selected value="fa-vuejs">Vue</option>
                        <option value="fa-php">Php</option>
                        <option value="fa-js">JavaScript</option>
                        <option value="fa-linux">Linux</option>
                        <option value="fa-python">Python</option>
                    </select>
                </div>
                <div class="form-group mt-3">
                    <label for="color">Select color</label>
                    <select class="form-control" id="color">
                        <option selected value="blue">Blue</option>
                        <option value="violet">Violet</option>
                        <option value="green">Green</option>
                        <option value="black">Black</option>
                    </select>
                </div>
                `,preConfirm:async()=>{const e=document.getElementById("room-name").value,t="fab "+document.getElementById("icon").value,o=document.getElementById("color").value;await L().addRoom({roomName:e,icon:t,color:o,lastMessage:""})}})}}});var $t=m(vt,[["render",gt]]);function yt(e,t,o,n,a,r){return l(),d("p",{class:"color-primary text-decoration-underline mt-auto text-center",onClick:t[0]||(t[0]=(...i)=>e.logOut&&e.logOut(...i))},"Logout")}const wt=_({methods:{async logOut(){await $().signOut(),this.$router.push("/login")}}});var bt=m(wt,[["render",yt],["__scopeId","data-v-506254f0"]]);const Rt=s("h2",{class:"text-center mt-3 mb-4"},"Vue chat",-1);function St(e,t){const o=u("router-link");return l(),w(o,{class:"text-black text-decoration-none",to:"/"},{default:U(()=>[Rt]),_:1})}const Ct={};var kt=m(Ct,[["render",St]]);const Bt=e=>(P("data-v-39867b58"),e=e(),E(),e),It=Bt(()=>s("hr",{class:"mx-4 mb-3"},null,-1)),xt={class:"chat-rooms-list"};function Lt(e,t,o,n,a,r){const i=u("NavLogo"),c=u("CreateChatRoomButton"),h=u("ChatRoom"),f=u("LogoutButton");return l(),d(M,null,[g(i),v(s("input",{class:"w-100 border px-4 py-2 fs-5 rounded-pill text-muted",type:"text","onUpdate:modelValue":t[0]||(t[0]=p=>e.searchText=p),placeholder:"Search..."},null,512),[[b,e.searchText]]),g(c),It,s("div",xt,[(l(!0),d(M,null,Z(e.getRooms,p=>(l(),w(h,{chatRoomInfo:p,id:p.key},null,8,["chatRoomInfo","id"]))),256))]),g(f)],64)}const Nt=_({components:{ChatRoom:mt,CreateChatRoomButton:$t,LogoutButton:bt,NavLogo:kt},data(){return{searchText:"",chatRoomStore:L()}},computed:{getRooms(){return this.$data.chatRoomStore.getRooms.filter(e=>e.roomName.toLowerCase().includes(this.$data.searchText.toLowerCase()))}}});var ee=m(Nt,[["render",Lt],["__scopeId","data-v-39867b58"]]);const Vt=s("i",{class:"fa-solid fa-hand-pointer h1"},null,-1),Mt=s("h5",null,"Chat room not selected",-1),Ut=s("p",{class:"text-muted"},"select any to continue",-1);function zt(e,t,o,n,a,r){return l(),d(M,null,[Vt,Mt,Ut],64)}const Ot=_({setup(){}});var At=m(Ot,[["render",zt]]);const Dt={class:"container-fluid"},Pt={class:"row"},Et={class:"col-12 col-md-5 col-lg-3 border-end vh-100 d-flex flex-column"},Ft={key:0,class:"col-12 col-md-7 col-lg-9 d-flex vh-100 flex-column align-items-center justify-content-center"};function Tt(e,t,o,n,a,r){const i=u("ChatRoomNav"),c=u("NotSelected"),h=F("resize");return v((l(),d("div",Dt,[s("div",Pt,[s("div",Et,[g(i)]),e.showContent?(l(),d("div",Ft,[e.showContent?(l(),w(c,{key:0})):y("",!0)])):y("",!0)])])),[[h,e.updateShowContent]])}const jt=_({components:{ChatRoomNav:ee,NotSelected:At},data(){return{showContent:!1}},methods:{updateShowContent(){return this.showContent=!T(),this.showContent}},mounted(){this.updateShowContent()}});var qt=m(jt,[["render",Tt]]);const Wt=s("i",{class:"fa-solid fa-arrow-left"},null,-1),Ht=[Wt];function Kt(e,t){return l(),d("div",{class:"btn",onClick:t[0]||(t[0]=o=>this.$emit("click"))},Ht)}const Gt={};var Jt=m(Gt,[["render",Kt]]);const Qt={key:0,class:"chat-heading text-align-left w-100 py-3 px-2 d-flex justify-content-between border-bottom"},Xt={class:"chat-heading__left-wrapper d-flex align-items-center"},Zt={class:"m-0 ms-3"},Yt={class:"chat-heading__right-wrapper"},eo=s("i",{class:"fa-solid fa-trash-can pe-2"},null,-1),to=I("Delete"),oo=[eo,to];function so(e,t,o,n,a,r){const i=u("BackButton"),c=u("ChatIcon"),h=F("resize");return e.chatStore.selectedRoom!==void 0?v((l(),d("div",Qt,[s("div",Xt,[e.showBackButton?(l(),w(i,{key:0,class:"me-1",onClick:e.onBackClick},null,8,["onClick"])):y("",!0),g(c,{chatRoomInfo:e.chatStore.selectedRoom,size:2.5},null,8,["chatRoomInfo","size"]),s("h5",Zt,k(e.chatStore.selectedRoom.roomName),1)]),s("div",Yt,[e.chatStore.isMyRoom?(l(),d("button",{key:0,class:"btn btn-danger me-1",onClick:t[0]||(t[0]=(...f)=>e.deleteRoom&&e.deleteRoom(...f))},oo)):y("",!0)])])),[[h,e.updateShowBackButton]]):y("",!0)}const ao=_({components:{ChatIcon:Y,BackButton:Jt},data(){return{chatStore:S(),showBackButton:!1}},methods:{async deleteRoom(){this.$router.replace("/");try{await this.chatStore.deleteSelectedRoom()}catch{B.fire({title:"Error occured while deleting room.",icon:"error"})}B.fire({title:"Room deleted.",icon:"success"})},onBackClick(){this.$router.push("/")},updateShowBackButton(){return this.showBackButton=T(),this.showBackButton}},mounted(){this.updateShowBackButton()}});var no=m(ao,[["render",so]]);const ro=[{color:"red",textColor:"white"},{color:"green",textColor:"white"},{color:"pink",textColor:"white"},{color:"violet",textColor:"white"},{color:"black",textColor:"white"}];class io{constructor({availableColors:t=ro}){N(this,"colors");this.colors=t}getColorForUsername(t){const n=de.create(t)(this.colors.length);return this.colors[n]}}const co={class:"message__avatar__letter"},lo={class:"text-white opacity-50 message__username"};function uo(e,t,o,n,a,r){return l(),d("li",{class:D(["d-flex align-items-center",e.isMyMessage?"--my-message":""])},[e.isMyMessage?y("",!0):(l(),d("div",{key:0,class:"message__avatar",style:V({backgroundColor:e.userColor.color,color:e.userColor.textColor})},[s("span",co,k(e.message.username[0]),1)],4)),s("div",{class:"text-white px-4 py-2 rounded-pill my-2 message__content d-flex flex-column",style:V({backgroundColor:e.chatColor})},[I(k(e.message.content),1),s("span",lo,k(e.message.username),1)],4)],2)}const mo=_({props:{message:{type:Object,required:!0}},data(){return{avatarColorInstance:new io({})}},computed:{userColor(){return this.avatarColorInstance.getColorForUsername(this.message.username)},chatColor(){var t;return(t=S().selectedRoom)==null?void 0:t.color},isMyMessage(){const e=$();return this.message.username===e.username}}});var ho=m(mo,[["render",uo],["__scopeId","data-v-a92e89a0"]]);const po=e=>(P("data-v-2caacba2"),e=e(),E(),e),_o={class:"message-sender__wrapper w-100"},fo=po(()=>s("button",{class:"btn btn-primary"},[I("Send"),s("i",{class:"fa-regular fa-paper-plane"})],-1));function go(e,t,o,n,a,r){return l(),d("div",_o,[s("form",{class:"d-flex align-items-center flex-row w-100 p-3",onSubmit:t[1]||(t[1]=O((...i)=>e.onSend&&e.onSend(...i),["prevent"]))},[v(s("input",{class:"form-control",type:"text","onUpdate:modelValue":t[0]||(t[0]=i=>e.messageContent=i),placeholder:"Type your message here..."},null,512),[[b,e.messageContent]]),fo],32)])}const vo=_({data(){return{messageContent:"",chatStore:S()}},methods:{onSend(){this.messageContent&&(this.chatStore.sendMessage(this.messageContent),this.messageContent="")}}});var $o=m(vo,[["render",go],["__scopeId","data-v-2caacba2"]]);const yo={class:"h-100 w-100 d-flex align-items-center justify-content-center flex-column"},wo=s("div",{class:"spinner-border text-primary mb-2",role:"status"},[s("span",{class:"sr-only"},"Loading...")],-1),bo=s("p",null,"Loading...",-1),Ro=[wo,bo];function So(e,t){return l(),d("div",yo,Ro)}const Co={};var ko=m(Co,[["render",So]]);const Bo=e=>(P("data-v-4a8905e6"),e=e(),E(),e),Io={class:"container-fluid"},xo={class:"row"},Lo={key:0,class:"col-12 col-md-5 col-lg-3 border-end vh-100 d-flex flex-column"},No={class:"col-12 col-md-7 col-lg-9 d-flex vh-100 flex-column align-items-center px-0"},Vo={class:"messages w-100"},Mo={class:"messages__list px-3"},Uo=Bo(()=>s("span",{class:"messages__bottom"},null,-1));function zo(e,t,o,n,a,r){const i=u("ChatRoomNav"),c=u("ChatHeading"),h=u("Spinner"),f=u("Message"),p=u("MessageSender"),oe=F("resize");return v((l(),d("div",Io,[s("div",xo,[e.showNav?(l(),d("div",Lo,[g(i)])):y("",!0),s("div",No,[g(c),e.loading?(l(),w(h,{key:0})):y("",!0),s("div",Vo,[s("ul",Mo,[(l(!0),d(M,null,Z(e.chatStore.messages,q=>(l(),w(f,{key:q.key,message:q},null,8,["message"]))),128))]),Uo]),g(p,{class:"message-sender"})])])])),[[oe,e.updateShowNav]])}const Oo=_({components:{ChatRoomNav:ee,ChatHeading:no,Spinner:ko,Message:ho,MessageSender:$o},props:{id:{type:String,required:!0}},methods:{updateShowNav(){return this.showNav=!T(),this.showNav},scrollToBottom(){document.querySelector("span.messages__bottom").scrollIntoView({behavior:"smooth"})}},data(){return{chatStore:S(),showNav:!1}},computed:{loading(){return this.chatStore.messages===void 0}},updated(){this.scrollToBottom()},mounted(){this.updateShowNav(),this.chatStore.$onAction(e=>{const{name:t,after:o}=e;o(n=>{t==="onFirebaseRoomDeletion"&&(B.fire({title:"The room has just been removed.",icon:"error"}),this.$router.replace("/"))})})}});var Ao=m(Oo,[["render",zo],["__scopeId","data-v-4a8905e6"]]);class j{constructor(){N(this,"redirectIfNotValid","/")}}class H extends j{constructor(){super(...arguments);N(this,"redirectIfNotValid","/login")}validate(t){return $().loggedIn}}class K extends j{validate(t){let o=L(),n=S();if(t.name=="chat"){let a=t.params.id.toString(),r=o.getChatRoomById(a);return r?(n.setSelectedRoom(r),n.messages=[],at(),!0):!1}else return n.selectedRoom=void 0,n.messages=void 0,!0}}class G extends j{validate(t){return!$().loggedIn}}function Do(e){return"guardValidators"in e}class Po{handleRouting(t,o,n){let a=t.meta.pageOptions;if(Do(a)){let r=a;for(const i of r.guardValidators)if(!this.handleValidator(t,i,n))return;n()}}handleValidator(t,o,n){let a=o.validate(t);return a||n({path:o.redirectIfNotValid}),a}}const Eo=new Po,te=ue({history:me("/"),routes:[{path:"/",name:"index",component:qt,meta:{pageOptions:{guardValidators:[new H,new K]}}},{path:"/login",name:"login",component:Oe,meta:{pageOptions:{guardValidators:[new G]}}},{path:"/register",name:"register",component:Ye,meta:{pageOptions:{guardValidators:[new G]}}},{path:"/chat/:id",name:"chat",component:Ao,props:!0,meta:{pageOptions:{guardValidators:[new H,new K]}}}]});te.beforeEach((e,t,o)=>{Eo.handleRouting(e,t,o)});const Fo={apiKey:"AIzaSyBv7DZXblFNT1LWF5ukKQ-AvdVH1__wgUw",authDomain:"vue-chat-c04db.firebaseapp.com",databaseURL:"https://vue-chat-c04db-default-rtdb.firebaseio.com",projectId:"vue-chat-c04db",storageBucket:"vue-chat-c04db.appspot.com",messagingSenderId:"197907026099",appId:"1:197907026099:web:65f2ff88abb9a58e2a60c6"};he(Fo);(async()=>{const e=pe(ye);e.use(_e()),e.use(fe);const{bindUser:t}=$();await t(),nt(),e.use(te),e.mount("#app")})();