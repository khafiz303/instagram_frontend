(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[443],{2122:function(e,s,l){Promise.resolve().then(l.bind(l,187))},187:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return f}});var o=l(7821),n=l(6796),t=l(2707),i=l(8078),r=l(9699),a=l(8927),c=l(2841),d=l(6878),u=l(168);function m(e){let{close:s,follow:l}=e,n=(0,d.v9)(e=>e.profile.following)||[],t=(0,d.v9)(e=>e.profile.MyFollowing)||[],r=(0,d.v9)(e=>e.auth.currentUser),a=(0,d.I0)(),{username:m}=(0,u.useParams)();console.log("userFollowinguserFollowing",n),(0,i.useEffect)(()=>{a((0,c.nX)(m)),a((0,c.$e)(m)),a((0,c.FH)(null==r?void 0:r.username))},[m,n]);let h=e=>t.some(s=>s.userFollower.id===e),v=[];return v=[...n].sort((e,s)=>{var l,o;return null===(o=e.userFollower)||void 0===o?void 0:o.fullName.localeCompare(null===(l=s.userFollower)||void 0===l?void 0:l.fullName)}),(0,o.jsxs)("div",{className:"modal",children:[(0,o.jsx)("div",{className:"modal-white-drop",onClick:s}),(0,o.jsxs)("div",{className:"modal-inner-mini",children:[(0,o.jsxs)("div",{className:"header-follow",children:[(0,o.jsx)("span",{}),(0,o.jsx)("h2",{children:l}),(0,o.jsx)("span",{onClick:s,children:"X"})]}),(0,o.jsx)("div",{children:v&&v.map(e=>{var s,l;return(0,o.jsx)("div",{children:h(e.follower_id)?(0,o.jsxs)("div",{className:"follow",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"/images/ink.png"}),(0,o.jsx)("p",{children:null===(s=e.userFollower)||void 0===s?void 0:s.fullName})]}),(0,o.jsx)("button",{className:"button btn-mini",onClick:()=>a((0,c.fv)(e.follower_id)),children:"Following"})]}):(0,o.jsxs)("div",{className:"follow",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"/images/ink.png"}),(0,o.jsx)("p",{children:null===(l=e.userFollower)||void 0===l?void 0:l.fullName})]}),(0,o.jsx)("button",{className:"button btn-mini-blue",onClick:()=>a((0,c.PX)(e.follower_id)),children:"Follow"})]})},e.follower_id)})})]})]})}var h=l(4233),v=l(3659),p=l(3260);function f(){var e;let[s,l]=(0,i.useState)(),[f,g]=(0,i.useState)(!0),[x,j]=(0,i.useState)(0),w=(0,i.useRef)(null),[N,k]=(0,i.useState)(null),[y,b]=(0,i.useState)(""),[C,F]=(0,i.useState)([]),[P,S]=(0,i.useState)(!1),[Z,E]=(0,i.useState)(!1),[I,_]=(0,i.useState)(""),[A,U]=(0,i.useState)(""),[X,$]=(0,i.useState)(),M=(0,d.I0)(),H=(0,u.useRouter)();(0,d.v9)(e=>e.post.posts);let R=(0,d.v9)(e=>{var s;return null===(s=e.auth.currentUser)||void 0===s?void 0:s.id}),L=(0,d.v9)(e=>e.auth.currentUser),{username:O}=(0,u.useParams)(),z=(0,d.v9)(e=>e.profile.profile),B=(0,d.v9)(e=>e.profile.following),D=(0,d.v9)(e=>e.profile.followers);(0,d.v9)(e=>e.post.post.comments),console.log("userFollowers",D),console.log(R),(0,i.useEffect)(()=>{function e(e){w.current&&!w.current.contains(e.target)&&j(0)}return 1===x?document.addEventListener("mousedown",e):document.removeEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[x]),(0,i.useEffect)(()=>{M((0,c.Ai)(O)),M((0,c.nX)(O)),M((0,c.$e)(O)),M((0,c.FH)(null==L?void 0:L.username)),X&&z.posts&&J(X)},[M,z]);let J=e=>{let s=z.posts.find(s=>s.id===e.id);s&&(U(s.description),F(s.comments),l(s.id),$(e),1!=N&&k(s))},T=()=>{k(null),$(),S(!1),E(!1)};(0,i.useEffect)(()=>{_(O||"username")},[O]);let Y=null===(e=z.posts)||void 0===e?void 0:e.length;return(0,o.jsxs)("div",{className:"profile",children:[(0,o.jsxs)("div",{className:"header profile-header",children:[(0,o.jsx)("div",{className:"profile-header-logo",children:(0,o.jsx)("img",{src:"/images/logo-profile.png",alt:"Profile Logo",onClick:()=>H.push("/home")})}),(0,o.jsxs)("div",{className:"header-search",children:[(0,o.jsx)("img",{src:"/images/vector.png",alt:"Search Icon"}),(0,o.jsx)("input",{placeholder:"Search"})]}),(0,o.jsxs)("div",{className:"header-nav",children:[(0,o.jsx)(h.default,{href:"/home",children:(0,o.jsx)("img",{src:"/images/home.png",alt:"Home Icon"})}),(0,o.jsx)("img",{onClick:()=>j(1),src:"/images/NewPosts.png",alt:"New Posts Icon"}),(0,o.jsx)("img",{onClick:()=>{M((0,p.ni)()),H.push("/")},src:"/images/exit.svg"}),(0,o.jsx)("img",{onClick:()=>H.push("/profile/".concat(L.username)),src:"/images/ink.png",alt:"Profile Picture"})]})]}),(0,o.jsxs)("div",{className:"main-p",children:[(0,o.jsx)("div",{className:"main-p-left",children:(0,o.jsx)("img",{src:"/images/ink.png",alt:"Profile Picture"})}),(0,o.jsxs)("div",{className:"main-p-right",children:[(0,o.jsxs)("div",{className:"user-info-up",children:[(0,o.jsx)("h1",{children:I}),void 0!==R&&void 0!==z.id&&(R===z.id?(0,o.jsx)("button",{className:"button",children:"Edit"}):Array.isArray(D)&&D.some(e=>e.user_id===R)?(0,o.jsx)("button",{className:"button button-color",onClick:()=>M((0,c.fv)(z.id)),children:"Following"}):(0,o.jsx)("button",{className:"button",onClick:()=>M((0,c.PX)(z.id)),children:"Follow"})),(0,o.jsx)("span",{children:"..."})]}),(0,o.jsxs)("div",{className:"user-info-center",children:[(0,o.jsxs)("p",{children:[Y," posts"]}),(0,o.jsxs)("p",{onClick:()=>S(!0),children:[D.length>0?D.length:0," followers"]}),(0,o.jsxs)("p",{onClick:()=>E(!0),children:[" ",B.length," following"]})]}),(0,o.jsx)("p",{children:I})]})]}),1===x&&(0,o.jsx)("div",{ref:w,children:(0,o.jsx)(t.Z,{setCreatePost:j,name:I,create:!0,edit:!1})}),z.posts&&z.posts.length>0&&(0,o.jsx)(n.Z,{posts:z.posts,onClickPost:J}),null!==N&&(0,o.jsxs)("div",{className:"modal",children:[(0,o.jsx)("div",{className:"modal-white-drop",onClick:T}),(0,o.jsxs)("div",{className:"modal-inner",children:[(0,o.jsx)("div",{className:"modal-img",children:(0,o.jsx)("img",{src:"http://46.101.192.129:1000".concat(N.imageUrl),alt:"Post"})}),(0,o.jsxs)("div",{className:"modal-right",children:[(0,o.jsxs)("div",{className:"modal-header",children:[(0,o.jsx)(r.Z,{username:I,close:()=>k(null),userId:z.id,selectedPost:N.id,shadow:"shadow",dop:"..."}),(0,o.jsx)("p",{children:A})]}),(0,o.jsxs)("div",{className:"comments",children:[(0,o.jsx)("div",{className:"comment",children:C.map((e,s)=>{var l,n,t;return(0,o.jsx)(r.Z,{username:null===(l=e.userC)||void 0===l?void 0:l.fullName,text:e.text,remove:R===(null===(n=e.userC)||void 0===n?void 0:n.id)?"remove":void 0,deleted:R===(null===(t=e.userC)||void 0===t?void 0:t.id)?()=>M((0,v.YF)(e.id)):void 0},s)})}),(0,o.jsxs)("div",{className:"add-comment",children:[(0,o.jsx)("input",{type:"text",placeholder:"Add a comment",onChange:e=>{b(e.target.value)},value:y}),(0,o.jsx)("p",{onClick:()=>{M((0,v.Ir)({text:y,postId:s})),b(""),J(s)},children:"Post"})]})]})]})]})]}),P&&(0,o.jsx)(a.Z,{follow:"Followers",close:T}),Z&&(0,o.jsx)(m,{follow:"Following",close:T})]})}},3260:function(e,s,l){"use strict";l.d(s,{ni:function(){return d},uX:function(){return m},y1:function(){return u}});var o=l(8160),n=l(3598),t=l(3940),i=l(4619);let r={isAuth:!1,currentUser:null,tokenExt:0};{let e=localStorage.getItem("token");if(e){let s=(0,t.o)(e);1e3*s.exp>Date.now()?(r={isAuth:!0,currentUser:{id:s.id,email:s.email,username:s.username},tokenExt:s.exp},n.Z.defaults.headers.common.Authorization="Bearer ".concat(e)):localStorage.removeItem("token")}}let a=(0,o.oM)({name:"auth",initialState:r,reducers:{authorize:(e,s)=>{localStorage.setItem("token",s.payload.token),n.Z.defaults.headers.common.Authorization="Bearer ".concat(s.payload.token);let l=(0,t.o)(s.payload.token);e.currentUser={id:l.id,email:l.email,username:l.username},e.isAuth=!0,e.tokenExt=l.exp},logOut:e=>{e.isAuth=!1,e.currentUser=null,e.tokenExt=0,localStorage.removeItem("token")}}}),{authorize:c,logOut:d}=a.actions,u=(e,s,l)=>o=>{n.Z.post("".concat(i.N,"/api/auth/signup"),{email:e,password:s,username:l}).then(e=>{o(c(e.data))})},m=(e,s)=>l=>{n.Z.post("".concat(i.N,"/api/auth/login"),{email:e,password:s}).then(e=>{l(c(e.data))})};s.ZP=a.reducer},2841:function(e,s,l){"use strict";l.d(s,{$e:function(){return x},Ai:function(){return h},FH:function(){return f},PX:function(){return v},fv:function(){return g},nX:function(){return p},vt:function(){return j}});var o=l(8160),n=l(3598),t=l(4619);let i=(0,o.oM)({name:"profile",initialState:{profile:{},following:[],MyFollowing:[],followers:[],suggestions:[]},reducers:{setProfile:(e,s)=>{e.profile=s.payload},setFollowing:(e,s)=>{e.following=s.payload},setFollowers:(e,s)=>{e.followers=s.payload},addFollow:(e,s)=>{e.followers=[...e.followers,s.payload]},setMyFollowing:(e,s)=>{e.MyFollowing=s.payload},setSuggestions:(e,s)=>{e.suggestions=s.payload}}}),{setProfile:r,setFollowing:a,setFollowers:c,addFollow:d,setMyFollowing:u,setSuggestions:m}=i.actions,h=e=>async s=>{try{let l=await n.Z.get("".concat(t.N,"/api/user/").concat(e));s(r(l.data)),console.log(l.data)}catch(e){console.log(e)}},v=e=>async s=>{try{console.log("iddd",e);let l=await n.Z.post("".concat(t.N,"/api/follow"),{id:e});s(d(l.data))}catch(e){console.log(e)}},p=e=>async s=>{try{let l=await n.Z.get("".concat(t.N,"/api/users/").concat(e,"/following"));s(a(l.data))}catch(e){console.log(e,"jh,dgskvkv")}},f=e=>async s=>{try{let l=await n.Z.get("".concat(t.N,"/api/users/").concat(e,"/following"));s(u(l.data))}catch(e){console.log(e,"jh,dgskvkv")}},g=e=>async s=>{try{await n.Z.delete("".concat(t.N,"/api/unsubscribe/").concat(e))}catch(e){console.log(e)}},x=e=>async s=>{try{let l=await n.Z.get("".concat(t.N,"/api/users/").concat(e,"/followers"));s(c(l.data))}catch(e){console.log(e)}},j=()=>async e=>{try{let s=await n.Z.get("".concat(t.N,"/api/suggestions"));e(m(s.data))}catch(e){console.log(e)}};s.ZP=i.reducer},8927:function(e,s,l){"use strict";l.d(s,{Z:function(){return a}});var o=l(7821),n=l(6878),t=l(8078),i=l(168),r=l(2841);function a(e){let{close:s,follow:l}=e,a=(0,n.v9)(e=>e.profile.followers)||[],c=(0,n.v9)(e=>e.profile.MyFollowing)||[],d=(0,n.v9)(e=>e.auth.currentUser),u=(0,n.I0)(),{username:m}=(0,i.useParams)();(0,t.useEffect)(()=>{u((0,r.nX)(m)),u((0,r.$e)(m)),u((0,r.FH)(null==d?void 0:d.username))},[m,null==d?void 0:d.username,u,a]);let h=e=>c.some(s=>s.userFollower.id===e),v=[];return v=[...a].sort((e,s)=>{var l,o;return null===(o=e.userFollowing)||void 0===o?void 0:o.fullName.localeCompare(null===(l=s.userFollowing)||void 0===l?void 0:l.fullName)}),(0,o.jsxs)("div",{className:"modal",children:[(0,o.jsx)("div",{className:"modal-white-drop",onClick:s}),(0,o.jsxs)("div",{className:"modal-inner-mini",children:[(0,o.jsxs)("div",{className:"header-follow",children:[(0,o.jsx)("span",{}),(0,o.jsx)("h2",{children:l}),(0,o.jsx)("span",{onClick:s,children:"X"})]}),(0,o.jsx)("div",{children:Array.isArray(v)&&v.length>0?v.map(e=>{var s;return(0,o.jsxs)("div",{className:"follow",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"/images/ink.png",alt:"User Avatar"}),(0,o.jsx)("p",{children:null===(s=e.userFollowing)||void 0===s?void 0:s.fullName})]}),h(e.user_id)?(0,o.jsx)("button",{className:"button btn-mini",onClick:()=>u((0,r.fv)(e.user_id)),children:"Following"}):(0,o.jsx)("button",{className:"button btn-mini-blue",onClick:()=>u((0,r.PX)(e.user_id)),children:"Follow"})]},e.user_id)}):null})]})]})}},6796:function(e,s,l){"use strict";l.d(s,{Z:function(){return t}});var o=l(7821);function n(e){let{item:s,posts:l,onClickPost:n}=e;return(0,o.jsx)("div",{className:"post-img",onClick:()=>n(s),children:s&&s.imageUrl&&(0,o.jsx)("img",{src:"http://46.101.192.129:1000".concat(s.imageUrl),alt:"Post"})})}function t(e){let{posts:s,onClickPost:l}=e,t=s.map(e=>(0,o.jsx)(n,{item:e,onClickPost:l},e.id));return(0,o.jsx)("div",{className:"profile-posts",children:t})}},9699:function(e,s,l){"use strict";l.d(s,{Z:function(){return c}});var o=l(7821),n=l(8078),t=l(6878),i=l(3659),r=l(168);l(2841);var a=l(4233);function c(e){let{username:s,shadow:l,dop:c,text:d,remove:u,follow:m,size:h,imgSize:v,selectedPost:p,deleted:f,close:g,follower:x,myFollowing:j,following:w,link:N,userId:k}=e,[y,b]=(0,n.useState)(!1),C=(0,r.useRouter)(),F=(0,t.I0)(),P=(0,t.v9)(e=>{var s;return null===(s=e.auth.currentUser)||void 0===s?void 0:s.id});return(0,o.jsxs)("div",{className:"user-mini ".concat(l," ").concat(h),children:[(0,o.jsxs)("div",{className:"user-m-img",children:[(0,o.jsx)("img",{src:"/images/ink.png",alt:"Profile Picture",className:v}),!m&&(0,o.jsx)("p",{children:s}),m&&(0,o.jsx)("div",{className:"df",children:N?(0,o.jsx)(a.default,{href:"/profile/".concat(s),children:(0,o.jsx)("p",{children:s})}):(0,o.jsx)("p",{children:s})})]}),(0,o.jsxs)("div",{children:[d&&(0,o.jsx)("p",{children:d}),c&&k==P&&(0,o.jsx)("span",{onClick:()=>{b(!0)},children:c}),u&&(0,o.jsx)("button",{className:"button btn-mini",onClick:f,children:u?"remove":""})]}),y&&(0,o.jsxs)("div",{className:"toggle",children:[(0,o.jsx)("div",{onClick:()=>C.push("/edit-post/"+p),children:(0,o.jsx)("p",{children:"Edit"})}),(0,o.jsx)("div",{children:(0,o.jsx)("p",{onClick:()=>{F((0,i.fR)(p)),g()},children:"Delete"})})]})]})}},3940:function(e,s,l){"use strict";l.d(s,{o:function(){return n}});class o extends Error{}function n(e,s){let l;if("string"!=typeof e)throw new o("Invalid token specified: must be a string");s||(s={});let n=!0===s.header?0:1,t=e.split(".")[n];if("string"!=typeof t)throw new o(`Invalid token specified: missing part #${n+1}`);try{l=function(e){let s=e.replace(/-/g,"+").replace(/_/g,"/");switch(s.length%4){case 0:break;case 2:s+="==";break;case 3:s+="=";break;default:throw Error("base64 string is not of the correct length")}try{var l;return l=s,decodeURIComponent(atob(l).replace(/(.)/g,(e,s)=>{let l=s.charCodeAt(0).toString(16).toUpperCase();return l.length<2&&(l="0"+l),"%"+l}))}catch(e){return atob(s)}}(t)}catch(e){throw new o(`Invalid token specified: invalid base64 for part #${n+1} (${e.message})`)}try{return JSON.parse(l)}catch(e){throw new o(`Invalid token specified: invalid json for part #${n+1} (${e.message})`)}}o.prototype.name="InvalidTokenError"}},function(e){e.O(0,[314,178,707,115,205,744],function(){return e(e.s=2122)}),_N_E=e.O()}]);