(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8405:function(t,e,o){Promise.resolve().then(o.t.bind(o,1723,23)),Promise.resolve().then(o.bind(o,8430))},4619:function(t,e,o){"use strict";o.d(e,{N:function(){return a}});let a="http://46.101.192.129:1000"},8430:function(t,e,o){"use strict";o.d(e,{default:function(){return d}});var a=o(7821),n=o(8160),r=o(3260),c=o(3659),s=o(9211),l=o(2841),i=(0,n.xC)({reducer:{auth:r.ZP,post:c.ZP,story:s.ZP,profile:l.ZP}}),u=o(6878);function d(t){let{children:e}=t;return(0,a.jsx)(u.zt,{store:i,children:e})}},3260:function(t,e,o){"use strict";o.d(e,{ni:function(){return u},uX:function(){return p},y1:function(){return d}});var a=o(8160),n=o(3598),r=o(3940),c=o(4619);let s={isAuth:!1,currentUser:null,tokenExt:0};{let t=localStorage.getItem("token");if(t){let e=(0,r.o)(t);1e3*e.exp>Date.now()?(s={isAuth:!0,currentUser:{id:e.id,email:e.email,username:e.username},tokenExt:e.exp},n.Z.defaults.headers.common.Authorization="Bearer ".concat(t)):localStorage.removeItem("token")}}let l=(0,a.oM)({name:"auth",initialState:s,reducers:{authorize:(t,e)=>{localStorage.setItem("token",e.payload.token),n.Z.defaults.headers.common.Authorization="Bearer ".concat(e.payload.token);let o=(0,r.o)(e.payload.token);t.currentUser={id:o.id,email:o.email,username:o.username},t.isAuth=!0,t.tokenExt=o.exp},logOut:t=>{t.isAuth=!1,t.currentUser=null,t.tokenExt=0,localStorage.removeItem("token")}}}),{authorize:i,logOut:u}=l.actions,d=(t,e,o)=>a=>{n.Z.post("".concat(c.N,"/api/auth/signup"),{email:t,password:e,username:o}).then(t=>{a(i(t.data))})},p=(t,e)=>o=>{n.Z.post("".concat(c.N,"/api/auth/login"),{email:t,password:e}).then(t=>{o(i(t.data))})};e.ZP=l.reducer},3659:function(t,e,o){"use strict";o.d(e,{Bd:function(){return P},Ir:function(){return N},Nk:function(){return S},Q5:function(){return k},YF:function(){return v},dq:function(){return Z},fR:function(){return w},gQ:function(){return h},j:function(){return b},qb:function(){return m}});var a=o(8160),n=o(3598),r=o(4619);let c=(0,a.oM)({name:"post",initialState:{posts:[],post:{comments:[]},allPost:[],likes:[]},reducers:{getMyPosts:(t,e)=>{t.posts=e.payload.posts},createMyPost:(t,e)=>{t.posts.push(e.payload.post)},deleteMyPost:(t,e)=>{let o=[...t.posts];o=o.filter(t=>t.id!==e.payload),t.posts=o},setPost:(t,e)=>{t.post=e.payload.post},setComment:(t,e)=>{let o=e.payload.comment;t.post.comments.push(o)},deletedComment:(t,e)=>{let o=t.post.comments.filter(t=>t.id!==e.payload);t.post.comments=o},setAllPosts:(t,e)=>{t.allPost=e.payload.postsAll},setLike:(t,e)=>{t.likes=[...t.likes,e.payload]},deletedLike:(t,e)=>{let o=[...t.likes];o.filter(t=>t.postId!=e.payload),t.likes=o}}}),{getMyPosts:s,createMyPost:l,deleteMyPost:i,setPost:u,setComment:d,deletedComment:p,setAllPosts:y,setLike:f,deletedLike:g}=c.actions,h=()=>async t=>{try{let e=await n.Z.get("".concat(r.N,"/api/posts/my"));t(s({posts:e.data}))}catch(t){alert("Запрос на сервер не удался")}},m=t=>async e=>{try{let o=await n.Z.post("".concat(r.N,"/api/post/create"),t);e(l({post:o.data}))}catch(t){alert("Запрос на сервер не удался")}},w=t=>async e=>{try{await n.Z.delete("".concat(r.N,"/api/post/delete/").concat(t)),e(i(t))}catch(t){alert("Запрос на сервер не удался")}},k=t=>async e=>{try{let o=await n.Z.get("".concat(r.N,"/api/post/").concat(t));e(u({post:o.data}))}catch(t){alert("Запрос на сервер не удался")}},Z=(t,e)=>async o=>{console.log(t),console.log();try{await n.Z.put("".concat(r.N,"/api/post/").concat(t),e)}catch(t){console.log(t),alert("Запрос на сервер не удался")}},N=t=>async e=>{try{let o=await n.Z.post("".concat(r.N,"/api/add-comment"),t);e(d({comment:o.data}))}catch(t){console.log(t),alert("Запрос на сервер не удался")}},v=t=>async e=>{console.log("request id:",t);try{await n.Z.delete("".concat(r.N,"/api/delete-comment/").concat(t)),e(p(t))}catch(t){console.log(t),alert("Запрос на сервер не удался")}},P=()=>async t=>{try{let e=await n.Z.get("".concat(r.N,"/api/posts/all"));t(y({postsAll:e.data})),console.log("datd",e.data)}catch(t){console.log(t),alert("Запрос на сервер не удался")}},b=t=>async e=>{try{let o=await n.Z.post("".concat(r.N,"/api/post/like"),t);e(f(o.data))}catch(t){console.log(t),alert(t.response&&t.response.data.error)}},S=t=>async e=>{try{await n.Z.delete("".concat(r.N,"/api/post/like/").concat(t)),e(g(t))}catch(t){console.log(t),alert("Запрос на сервер не удался")}};e.ZP=c.reducer},2841:function(t,e,o){"use strict";o.d(e,{$e:function(){return w},Ai:function(){return y},FH:function(){return h},PX:function(){return f},fv:function(){return m},nX:function(){return g},vt:function(){return k}});var a=o(8160),n=o(3598),r=o(4619);let c=(0,a.oM)({name:"profile",initialState:{profile:{},following:[],MyFollowing:[],followers:[],suggestions:[]},reducers:{setProfile:(t,e)=>{t.profile=e.payload},setFollowing:(t,e)=>{t.following=e.payload},setFollowers:(t,e)=>{t.followers=e.payload},addFollow:(t,e)=>{t.followers=[...t.followers,e.payload]},setMyFollowing:(t,e)=>{t.MyFollowing=e.payload},setSuggestions:(t,e)=>{t.suggestions=e.payload}}}),{setProfile:s,setFollowing:l,setFollowers:i,addFollow:u,setMyFollowing:d,setSuggestions:p}=c.actions,y=t=>async e=>{try{let o=await n.Z.get("".concat(r.N,"/api/user/").concat(t));e(s(o.data)),console.log(o.data)}catch(t){console.log(t)}},f=t=>async e=>{try{console.log("iddd",t);let o=await n.Z.post("".concat(r.N,"/api/follow"),{id:t});e(u(o.data))}catch(t){console.log(t)}},g=t=>async e=>{try{let o=await n.Z.get("".concat(r.N,"/api/users/").concat(t,"/following"));e(l(o.data))}catch(t){console.log(t,"jh,dgskvkv")}},h=t=>async e=>{try{let o=await n.Z.get("".concat(r.N,"/api/users/").concat(t,"/following"));e(d(o.data))}catch(t){console.log(t,"jh,dgskvkv")}},m=t=>async e=>{try{await n.Z.delete("".concat(r.N,"/api/unsubscribe/").concat(t))}catch(t){console.log(t)}},w=t=>async e=>{try{let o=await n.Z.get("".concat(r.N,"/api/users/").concat(t,"/followers"));e(i(o.data))}catch(t){console.log(t)}},k=()=>async t=>{try{let e=await n.Z.get("".concat(r.N,"/api/suggestions"));t(p(e.data))}catch(t){console.log(t)}};e.ZP=c.reducer},9211:function(t,e,o){"use strict";o.d(e,{DZ:function(){return d},LA:function(){return p},vD:function(){return u}});var a=o(8160),n=o(3598),r=o(4619);let c=(0,a.oM)({name:"story",initialState:{stories:[],story:[]},reducers:{getMyStories:(t,e)=>{t.stories=e.payload.stories},createMyStory:(t,e)=>{let o=[...t.stories,e.payload];t.stories=o},deleteMyStory:(t,e)=>{let o=[...t.stories];o=o.filter(t=>t.id!==e.payload),t.stories=o}}}),{getMyStories:s,createMyStory:l,deleteMyStory:i}=c.actions,u=()=>async t=>{try{let e=await n.Z.get("".concat(r.N,"/api/story"));t(s({stories:e.data}))}catch(t){alert("Запрос на сервер не удался")}},d=t=>async e=>{try{let o=new FormData;o.append("imageUrl",t.selectedFile);let a=await n.Z.post("".concat(r.N,"/api/story/create"),o,{headers:{"Content-Type":"multipart/form-data"}});e(l({story:a.data})),console.log("Story created successfully",a.data)}catch(t){console.error("Error creating story",t),alert("Запрос на сервер не удался")}},p=t=>async e=>{try{await n.Z.post("".concat(r.N,"/api/story/delete/").concat(t)),e(i(t))}catch(t){alert("Запрос на сервер не удался"),console.log(t)}};e.ZP=c.reducer},1723:function(){},3940:function(t,e,o){"use strict";o.d(e,{o:function(){return n}});class a extends Error{}function n(t,e){let o;if("string"!=typeof t)throw new a("Invalid token specified: must be a string");e||(e={});let n=!0===e.header?0:1,r=t.split(".")[n];if("string"!=typeof r)throw new a(`Invalid token specified: missing part #${n+1}`);try{o=function(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw Error("base64 string is not of the correct length")}try{var o;return o=e,decodeURIComponent(atob(o).replace(/(.)/g,(t,e)=>{let o=e.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}catch(t){return atob(e)}}(r)}catch(t){throw new a(`Invalid token specified: invalid base64 for part #${n+1} (${t.message})`)}try{return JSON.parse(o)}catch(t){throw new a(`Invalid token specified: invalid json for part #${n+1} (${t.message})`)}}a.prototype.name="InvalidTokenError"}},function(t){t.O(0,[198,314,115,205,744],function(){return t(t.s=8405)}),_N_E=t.O()}]);