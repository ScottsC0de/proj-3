(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{126:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);var a,c,r,s,i,l,o,d,j,m,u,b=n(0),g=n.n(b),h=n(110),O=n.n(h),x=(n(125),n(28)),v=n(27),p=n(9),f=(n(126),n(10)),I=n(159),k=n(148),w=n(158),y=n(154),S=n(160),N=n(12),C=n(17),_=n(19),$=n(156),L=n(145),T=n(146),F=n(144),q=n(34),D=n(35),E=Object(D.a)(a||(a=Object(q.a)(["\n  mutation loginUser($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n        imageCount\n      savedImages {\n        imageId\n        title\n        caption\n        src\n      }\n      comments {\n        _id\n        commentText\n        username\n        createdAt\n      }\n      }\n    }\n  }\n"]))),A=Object(D.a)(c||(c=Object(q.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n        email\n        imageCount\n      savedImages {\n        imageId\n        title\n        caption\n        src\n      }\n      comments {\n        _id\n        commentText\n        username\n        createdAt\n      }\n      }\n    }\n  }\n"]))),P=Object(D.a)(r||(r=Object(q.a)(["\n mutation SaveImage($imageId: String!, $title: String!, $imageSrc: String, $caption: String!) {\n  saveImage( imageId: $imageId, title: $title, src: $imageSrc, caption: $caption) {\n    _id\n    username\n    email\n    imageCount\n    savedImages {\n      caption\n      imageId\n      src\n      title\n    }\n  }\n}\n"]))),U=Object(D.a)(s||(s=Object(q.a)(["\n  mutation removeImage($imageId: String!) {\n    removeImage(imageId: $imageId) {\n      _id\n      username\n      imageCount\n      savedImages {\n        imageId\n        title\n        caption\n        src\n      }\n    }\n  }\n"]))),Y=Object(D.a)(i||(i=Object(q.a)(["\n  mutation addComment($userId: ID!, $commentText: String!, $username: String!) {\n    addComment(userId: $userId ,commentText: $commentText, username: $username) {\n      _id\n      comments {\n        _id\n        commentText\n        createdAt\n      }\n    }\n  }\n"]))),V=Object(D.a)(l||(l=Object(q.a)(["\n mutation likeImage($imageId: String!) {\n  likeImage( imageId: $imageId) {\n    # _id\n    # username\n    # email\n    # imageCount\n    # savedImages {\n    #   caption\n    #   imageId\n    #   src\n    #   title\n    # }\n    likedImages{\n      imageId\n    }\n  }\n}\n"]))),G=n(21),z=n(22),J=n(100),B=n.n(J),H=new(function(){function e(){Object(G.a)(this,e)}return Object(z.a)(e,[{key:"getProfile",value:function(){return B()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return B()(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),K=n(1),M=function(){var e=Object(b.useState)({username:"",email:"",password:""}),t=Object(f.a)(e,2),n=t[0],a=t[1],c=Object(b.useState)(!1),r=Object(f.a)(c,1)[0],s=Object(b.useState)(!1),i=Object(f.a)(s,2),l=i[0],o=i[1],d=Object(F.a)(A),j=Object(f.a)(d,2),m=j[0],u=(j[1].error,function(e){var t=e.target,c=t.name,r=t.value;a(Object(x.a)(Object(x.a)({},n),{},Object(_.a)({},c,r)))}),g=function(){var e=Object(C.a)(Object(N.a)().mark((function e(t){var c,r;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,m({variables:Object(x.a)({},n)});case 6:c=e.sent,r=c.data,H.login(r.addUser.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),o(!0);case 15:a({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)($.a,{noValidate:!0,validated:r,onSubmit:g,children:[Object(K.jsx)(L.a,{dismissible:!0,onClose:function(){return o(!1)},show:l,variant:"danger",children:"Something went wrong with your signup!"}),Object(K.jsxs)($.a.Group,{children:[Object(K.jsx)($.a.Label,{htmlFor:"username",children:"Username"}),Object(K.jsx)($.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:u,value:n.username,required:!0}),Object(K.jsx)($.a.Control.Feedback,{type:"invalid",children:"Username is required!"})]}),Object(K.jsxs)($.a.Group,{children:[Object(K.jsx)($.a.Label,{htmlFor:"email",children:"Email"}),Object(K.jsx)($.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:u,value:n.email,required:!0}),Object(K.jsx)($.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(K.jsxs)($.a.Group,{children:[Object(K.jsx)($.a.Label,{htmlFor:"password",children:"Password"}),Object(K.jsx)($.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:u,value:n.password,required:!0}),Object(K.jsx)($.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(K.jsx)(T.a,{disabled:!(n.username&&n.email&&n.password),type:"submit",variant:"success",children:"Submit"})]})})},R=function(){var e=Object(b.useState)({email:"",password:""}),t=Object(f.a)(e,2),n=t[0],a=t[1],c=Object(b.useState)(!1),r=Object(f.a)(c,1)[0],s=Object(b.useState)(!1),i=Object(f.a)(s,2),l=i[0],o=i[1],d=Object(F.a)(E),j=Object(f.a)(d,1)[0],m=function(e){var t=e.target,c=t.name,r=t.value;a(Object(x.a)(Object(x.a)({},n),{},Object(_.a)({},c,r)))},u=function(){var e=Object(C.a)(Object(N.a)().mark((function e(t){var c,r;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),!1===t.currentTarget.checkValidity()&&(t.preventDefault(),t.stopPropagation()),e.prev=3,e.next=6,j({variables:Object(x.a)({},n)});case 6:c=e.sent,r=c.data,H.login(r.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),o(!0);case 15:a({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsx)(K.Fragment,{children:Object(K.jsxs)($.a,{noValidate:!0,validated:r,onSubmit:u,children:[Object(K.jsx)(L.a,{dismissible:!0,onClose:function(){return o(!1)},show:l,variant:"danger",children:"Something went wrong with your login credentials!"}),Object(K.jsxs)($.a.Group,{children:[Object(K.jsx)($.a.Label,{htmlFor:"email",children:"Email"}),Object(K.jsx)($.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:m,value:n.email,required:!0}),Object(K.jsx)($.a.Control.Feedback,{type:"invalid",children:"Email is required!"})]}),Object(K.jsxs)($.a.Group,{children:[Object(K.jsx)($.a.Label,{htmlFor:"password",children:"Password"}),Object(K.jsx)($.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:m,value:n.password,required:!0}),Object(K.jsx)($.a.Control.Feedback,{type:"invalid",children:"Password is required!"})]}),Object(K.jsx)(T.a,{disabled:!(n.email&&n.password),type:"submit",variant:"success",children:"Submit"})]})})},W=n(162),Q=Object(D.a)(o||(o=Object(q.a)(["\n  query me {\n    me {\n      _id\n      username\n      email\n      imageCount\n      savedImages {\n        imageId\n        title\n        caption\n        src\n      }\n    }\n  }\n"]))),X=Object(D.a)(d||(d=Object(q.a)(["\n  query allUsers {\n    users {\n      _id\n      username\n      email\n      imageCount\n      savedImages {\n        caption\n        imageId\n        src\n        title\n      }\n      comments {\n        _id\n      }\n    }\n  }\n"]))),Z=Object(D.a)(j||(j=Object(q.a)(["\n  query allUsers {\n    users {\n      savedImages {\n        caption\n        imageId\n        src\n        title\n      }\n    }\n  }\n"]))),ee=Object(D.a)(m||(m=Object(q.a)(["\n  query singleUser($userId: ID!) {\n    user(userId: $userId) {\n      _id\n      username\n      email\n      imageCount\n      savedImages {\n        caption\n        imageId\n        src\n        title\n      }\n      comments {\n        _id\n        commentText\n        username\n        createdAt\n      }\n    }\n  }\n"]))),te=(Object(D.a)(u||(u=Object(q.a)(["\n query likedImages($imageId: String!) {\n  likedImages( imageId: $imageId) {\n    _id\n    # username\n    # email\n    # imageCount\n    # savedImages {\n    #   caption\n    #   imageId\n    #   src\n    #   title\n    # }\n    likedImages{\n      imageId\n    }\n  }\n}\n"]))),function(){var e=Object(b.useState)(!1),t=Object(f.a)(e,2),n=t[0],a=t[1],c=Object(b.useState)("My Images"),r=Object(f.a)(c,2),s=(r[0],r[1],Object(p.k)()),i=Object(p.o)().userId,l=Object(W.a)(ee,{variables:{userId:i}}),o=(l.loading,l.data);null===o||void 0===o||o.user;return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(I.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(K.jsxs)(k.a,{fluid:!0,children:[Object(K.jsx)(I.a.Toggle,{"aria-controls":"navbar"}),Object(K.jsx)(I.a.Collapse,{id:"navbar",children:Object(K.jsxs)(w.a,{className:"ml-auto",children:["/"!==s.pathname?Object(K.jsx)(w.a.Link,{as:v.b,to:"/",children:"Home"}):"",H.loggedIn()?Object(K.jsxs)(K.Fragment,{children:["/saved"!==s.pathname?Object(K.jsx)(w.a.Link,{as:v.b,to:"/saved",children:"Your Images"}):"","/allsaved"!==s.pathname?Object(K.jsx)(w.a.Link,{as:v.b,to:"/allsaved",children:"Everyone's Images"}):"","/allusers"!==s.pathname?Object(K.jsx)(w.a.Link,{as:v.b,to:"/allusers",children:"Images by User"}):"",Object(K.jsx)(w.a.Link,{onClick:H.logout,children:"Logout"})]}):Object(K.jsx)(w.a.Link,{onClick:function(){return a(!0)},children:"Login/Sign Up"})]})})]})}),Object(K.jsx)(y.a,{size:"lg",show:n,onHide:function(){return a(!1)},"aria-labelledby":"signup-modal",children:Object(K.jsxs)(S.a.Container,{defaultActiveKey:"login",children:[Object(K.jsx)(y.a.Header,{closeButton:!0,children:Object(K.jsx)(y.a.Title,{id:"signup-modal",children:Object(K.jsxs)(w.a,{variant:"pills",children:[Object(K.jsx)(w.a.Item,{children:Object(K.jsx)(w.a.Link,{eventKey:"login",children:"Login"})}),Object(K.jsx)(w.a.Item,{children:Object(K.jsx)(w.a.Link,{eventKey:"signup",children:"Sign Up"})})]})})}),Object(K.jsx)(y.a.Body,{children:Object(K.jsxs)(S.a.Content,{children:[Object(K.jsx)(S.a.Pane,{eventKey:"login",children:Object(K.jsx)(R,{handleModalClose:function(){return a(!1)}})}),Object(K.jsx)(S.a.Pane,{eventKey:"signup",children:Object(K.jsx)(M,{handleModalClose:function(){return a(!1)}})})]})})]})})]})}),ne=n(149),ae=n(150),ce=n(161),re=function(e){var t=localStorage.getItem("saved_images")?JSON.parse(localStorage.getItem("saved_images")):null;if(!t)return!1;var n=null===t||void 0===t?void 0:t.filter((function(t){return t!==e}));return localStorage.setItem("saved_images",JSON.stringify(n)),!0},se=function(){var e,t=Object(W.a)(Q),n=t.loading,a=t.data,c=(null===a||void 0===a?void 0:a.me)||[],r=Object(F.a)(U),s=Object(f.a)(r,1)[0],i=function(){var e=Object(C.a)(Object(N.a)().mark((function e(t){var n;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H.loggedIn()?H.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,s({variables:{imageId:t}});case 6:n=e.sent,n.data,re(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return n?Object(K.jsx)("h2",{children:"LOADING..."}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(ne.a,{fluid:!0,className:"text-light bg-primary",children:Object(K.jsx)(k.a,{children:Object(K.jsxs)("h1",{children:["Your saved images ",Object(K.jsxs)(ae.a,{className:"bg-warning text-dark",children:[" ",c.savedImages.length," "]})," "]})})}),Object(K.jsx)(k.a,{children:Object(K.jsx)("div",{className:"masonry-with-columns",children:null===(e=c.savedImages)||void 0===e?void 0:e.map((function(e){return Object(K.jsxs)(ce.a,{className:"card",children:[Object(K.jsx)(ce.a.Img,{src:"".concat(e.src),alt:"".concat(e.title),thumbnailheight:350,thumbnailwidth:350,caption:"".concat(e.title)},"".concat(e.imageId)),Object(K.jsx)("h4",{children:e.title}),Object(K.jsx)(T.a,{className:"btn-block btn-danger",onClick:function(){return i(e.imageId)},children:"Delete this Image!"})]},e.imageId)}))})})]})},ie=n(23),le=n(111);n(113).config();var oe=function(){var e=Object(b.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1],c=Object(b.useState)(""),r=Object(f.a)(c,2),s=r[0],i=r[1],l=Object(b.useState)(""),o=Object(f.a)(l,2),d=o[0],j=o[1],m=Object(b.useState)(localStorage.getItem("saved_images")?JSON.parse(localStorage.getItem("saved_images")):[]),u=Object(f.a)(m,2),g=u[0],h=u[1],O=Object(F.a)(P),v=Object(f.a)(O,2),p=v[0];v[1].error;Object(b.useEffect)((function(){return function(){var e;(e=g).length?localStorage.setItem("saved_images",JSON.stringify(e)):localStorage.removeItem("saved_images")}}));var I=function(){var e=Object(C.a)(Object(N.a)().mark((function e(t){var n,c,r,l,o;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n="8cc95ac0f29514284d94232a32a7c4c3",s){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(n,"&tags=").concat(s,"&format=json&nojsoncallback=1"));case 7:if((c=e.sent).ok){e.next=10;break}throw new Error("something went wrong!");case 10:return e.next=12,c.json();case 12:r=e.sent,l=r.photos.photo,o=l.map((function(e){return{imageId:e.id,title:e.title,caption:e.title,server:e.server,secret:e.secret,imageSrc:"https://live.staticflickr.com/".concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg")}})),a(o),j(s),i(""),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(4),console.error(e.t0);case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(C.a)(Object(N.a)().mark((function e(t){var a,c,r;return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("handleSaveImage: ",n),console.log("imageSrc: ",t),a=n.find((function(e){return e.imageSrc===t})),console.log("imageToSave: ",a),H.loggedIn()?H.getToken():null){e.next=7;break}return e.abrupt("return",!1);case 7:return console.log("VALIDATED LOGGING IN"),e.prev=8,e.next=11,p({variables:Object(x.a)({},a)});case 11:c=e.sent,r=c.data,console.log("RECEIVED DATA"),console.log(r),console.log(g),h([].concat(Object(ie.a)(g),[a.imageSrc])),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),console.error(e.t0);case 22:case"end":return e.stop()}}),e,null,[[8,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(ne.a,{fluid:!0,className:"text-light bg-primary",children:Object(K.jsxs)(k.a,{children:[Object(K.jsx)("h1",{children:"Search for Images!"}),Object(K.jsx)($.a,{onSubmit:I,children:Object(K.jsxs)($.a.Row,{children:[Object(K.jsx)(le.a,{xs:12,md:8,children:Object(K.jsx)($.a.Control,{name:"searchInput",value:s,onChange:function(e){return i(e.target.value)},type:"text",size:"lg",placeholder:"Search for an image"})}),Object(K.jsx)(le.a,{xs:12,md:4,children:Object(K.jsx)(T.a,{type:"submit",variant:"warning",size:"lg",children:"Submit Search"})})]})})]})}),Object(K.jsxs)(k.a,{children:[Object(K.jsx)("h2",{children:n.length?"Viewing ".concat(n.length," results for ").concat(d,":"):""}),Object(K.jsx)("div",{className:"masonry-with-columns",children:n.map((function(e){return Object(K.jsxs)(ce.a,{className:"card",children:[Object(K.jsx)(ce.a.Img,{src:"https://live.staticflickr.com/".concat(e.server,"/").concat(e.imageId,"_").concat(e.secret,".jpg"),alt:"".concat(e.title),thumbnailheight:350,thumbnailwidth:350,caption:"".concat(e.title)},"".concat(e.imageId)),Object(K.jsx)("h4",{children:e.src}),H.loggedIn()&&Object(K.jsx)(T.a,{disabled:null===g||void 0===g?void 0:g.some((function(t){return t===e.imageSrc})),className:"btn-block btn-info",onClick:function(){return w(e.imageSrc)},children:null!==g&&void 0!==g&&g.some((function(t){return t===e.imageSrc}))?"This image has already been saved!":"Save this Image!"})]},e.imageId)}))})]})]})},de=function(e){var t=e.users,n=e.title;return t.length?Object(K.jsxs)("div",{children:[Object(K.jsx)("h3",{className:"text-primary",children:n}),Object(K.jsx)("div",{className:"flex-row justify-space-between my-4",children:t&&t.map((function(e){return Object(K.jsx)("div",{className:"col-12 col-xl-6",children:Object(K.jsxs)("div",{className:"card mb-3",children:[Object(K.jsxs)("h4",{className:"card-header bg-dark text-light p-2 m-0",children:[e.username," ",Object(K.jsx)("br",{}),Object(K.jsxs)("span",{className:"text-white",style:{fontSize:"1rem"},children:["currently has ",e.savedImages?e.savedImages.length:0," ","image",e.savedImages&&1===e.savedImages.length?"":"s"," saved"]})," ",Object(K.jsx)("br",{}),Object(K.jsxs)("span",{className:"text-white",style:{fontSize:"1rem"},children:["currently has ",e.comments?e.comments.length:0," ","comments on their album page",(e.comments&&e.comments.length,"")]})]}),Object(K.jsxs)(v.b,{className:"btn btn-block btn-squared btn-outline-info btn-light text-dark",to:"/users/".concat(e._id),children:["View and share comments on ",e.username,"'s images."]})]})},t._id)}))})]}):Object(K.jsx)("h3",{children:"No Saved images Yet"})};var je=function(e){return Object(K.jsxs)("div",{className:"photo",children:[Object(K.jsx)("img",{src:e.src,alt:e.alt}),Object(K.jsx)(me,{})]})};var me=function(){var e=Object(b.useState)(!1),t=Object(f.a)(e,2),n=t[0],a=t[1],c={backgroundColor:n?"salmon":"skyblue",color:"white",borderRadius:"8px",padding:"8px 16px",border:"none",cursor:"pointer"};return Object(K.jsx)("button",{style:c,onClick:function(){a(!n),console.log("User ".concat(je.userId," liked photo ").concat(je.photoId))},children:n?"Love-it!!:}":"Like this image"})},ue=function(){var e=Object(b.useState)(localStorage.getItem("liked_images")?JSON.parse(localStorage.getItem("liked_images")):[]),t=Object(f.a)(e,2),n=(t[0],t[1],Object(W.a)(Z)),a=n.loading,c=n.data;console.log("Hello",c);var r=(null===c||void 0===c?void 0:c.users)||[];console.log("users: ",r);for(var s=[],i=0;i<r.length;i++)s.push(r[i].savedImages);console.log("allImages: ",s.flat());var l=s.flat();console.log("images: ",l);var o=Object(F.a)(V),d=Object(f.a)(o,2);d[0],d[1].error;return Object(K.jsx)(K.Fragment,{children:a?Object(K.jsx)("div",{children:"Loading..."}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(ne.a,{fluid:!0,className:"text-light bg-primary",children:Object(K.jsx)(k.a,{children:Object(K.jsxs)("h1",{children:["Everyone's saved images"," ",Object(K.jsxs)(ae.a,{className:"bg-warning text-dark",children:[" ",l.length," "]})," "]})})}),Object(K.jsx)(k.a,{children:Object(K.jsx)("div",{className:"masonry-with-columns",children:l.map((function(e){return Object(K.jsxs)(ce.a,{className:"card",children:[Object(K.jsx)(ce.a.Img,{src:"".concat(e.src),alt:"".concat(e.title),thumbnailheight:350,thumbnailwidth:350,caption:"".concat(e.title)},"".concat(e.imageId)),Object(K.jsx)(me,{className:"btn-block btn-danger",onClick:function(){return alert("Liked ".concat(e.title))},onclick:function(){return console.log("Liked ".concat(e.title))},children:"Like this Image!"})]},e.imageId)}))})})]})})},be=function(){var e=Object(W.a)(X),t=e.loading,n=e.data,a=(null===n||void 0===n?void 0:n.users)||[];return Object(K.jsx)(K.Fragment,{children:Object(K.jsx)("main",{children:Object(K.jsx)(k.a,{children:Object(K.jsx)("div",{className:"flex-row justify-center",children:Object(K.jsx)("div",{className:"col-12 col-md-10 my-3",children:t?Object(K.jsx)("div",{children:"Loading..."}):Object(K.jsx)(de,{users:a,title:"See what inspires other users..."})})})})})})},ge=function(e){var t=e.comments;return t.length?Object(K.jsx)(K.Fragment,{children:Object(K.jsx)("div",{className:"flex-row my-4",children:t&&t.map((function(e){return Object(K.jsx)("div",{className:"col-12 mb-3 pb-3",children:Object(K.jsxs)("div",{className:"p-3 bg-dark text-light",children:[Object(K.jsxs)("h5",{className:"card-header",children:[e.username," commented"," ",Object(K.jsxs)("span",{style:{fontSize:"0.825rem"},children:["on ",e.createdAt]})]}),Object(K.jsx)("p",{className:"card-body",children:e.commentText})]})},e._id)}))})}):Object(K.jsx)("h3",{children:"No Comments Yet"})},he=function(e){var t=e.userId,n=Object(b.useState)(""),a=Object(f.a)(n,2),c=a[0],r=a[1],s=Object(b.useState)(0),i=Object(f.a)(s,2),l=i[0],o=i[1],d=Object(F.a)(Y),j=Object(f.a)(d,2),m=j[0],u=j[1].error,g=function(){var e=Object(C.a)(Object(N.a)().mark((function e(n){return Object(N.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,m({variables:{userId:t,commentText:c,username:H.getProfile().data.username}});case 4:e.sent,r(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsxs)("div",{children:[Object(K.jsx)("h4",{children:"Add some more comments below."}),H.loggedIn()?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)("p",{className:"m-0 ".concat(280===l||u?"text-danger":""),children:["Character Count: ",l,"/280",u&&Object(K.jsx)("span",{className:"ml-2",children:u.message})]}),Object(K.jsxs)("form",{className:"flex-row justify-center justify-space-between-md align-center",onSubmit:g,children:[Object(K.jsx)("div",{className:"col-12 col-lg-9",children:Object(K.jsx)("textarea",{name:"commentText",placeholder:"Add your comment...",value:c,className:"form-input w-100",style:{lineHeight:"1.5",resize:"vertical"},onChange:function(e){var t=e.target,n=t.name,a=t.value;"commentText"===n&&a.length<=280&&(r(a),o(a.length))}})}),Object(K.jsx)("div",{className:"col-12 col-lg-3",children:Object(K.jsx)("button",{className:"btn btn-primary btn-block py-3",type:"submit",children:"Add Comment"})})]})]}):Object(K.jsxs)("p",{children:["You need to be logged in to share your thoughts. Please"," ",Object(K.jsx)(v.b,{to:"/login",children:"login"})," or ",Object(K.jsx)(v.b,{to:"/signup",children:"signup."})]})]})},Oe=function(){var e,t,n,a=Object(p.o)().userId,c=Object(W.a)(ee,{variables:{userId:a}}),r=c.loading,s=c.data,i=(null===s||void 0===s?void 0:s.user)||{};return r?Object(K.jsx)("div",{children:"Loading..."}):Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(ne.a,{fluid:!0,className:"text-light bg-primary",children:Object(K.jsx)(k.a,{children:Object(K.jsxs)("h1",{children:["Viewing ",i.username,"'s saved images ",Object(K.jsxs)(ae.a,{className:"bg-warning text-dark",children:[" ",i.savedImages.length," "]})," "]})})}),Object(K.jsxs)(k.a,{children:[Object(K.jsx)("h2",{children:null!==(e=i.savedImages)&&void 0!==e&&e.length?"Viewing ".concat(i.savedImages.length," saved ").concat(1===i.savedImages.length?"image":"images",":"):"You have no saved images"}),Object(K.jsx)("div",{className:"masonry-with-columns",children:null===(t=i.savedImages)||void 0===t?void 0:t.map((function(e){return Object(K.jsxs)(ce.a,{className:"card",children:[Object(K.jsx)(ce.a.Img,{src:"".concat(e.src),alt:"".concat(e.title),thumbnailheight:350,thumbnailwidth:350,caption:"".concat(e.title)},"".concat(e.imageId)),Object(K.jsx)("h4",{children:e.title})]},e.imageId)}))})]}),Object(K.jsx)(k.a,{children:Object(K.jsxs)("div",{children:[Object(K.jsxs)("h2",{className:"card-header",children:[i.username,"'s friends have commented on their image album..."]}),(null===(n=i.comments)||void 0===n?void 0:n.length)>0&&Object(K.jsx)(ge,{comments:i.comments}),Object(K.jsx)("div",{className:"my-4 p-4",style:{border:"1px dotted #1a1a1a"},children:Object(K.jsx)(he,{userId:i._id})})]})})]})},xe=n(116),ve=n(155),pe=n(157),fe=n(153),Ie=n(114),ke=Object(xe.a)({uri:"/graphql"}),we=Object(Ie.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(x.a)(Object(x.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),ye=new ve.a({link:we.concat(ke),cache:new pe.a});var Se=function(){return Object(K.jsx)(fe.a,{client:ye,children:Object(K.jsx)(v.a,{children:Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(te,{}),Object(K.jsxs)(p.c,{children:[Object(K.jsx)(p.a,{path:"/",element:Object(K.jsx)(oe,{})}),Object(K.jsx)(p.a,{path:"/saved",element:Object(K.jsx)(se,{})}),Object(K.jsx)(p.a,{path:"/allsaved",element:Object(K.jsx)(ue,{})}),Object(K.jsx)(p.a,{path:"/allusers",element:Object(K.jsx)(be,{})}),Object(K.jsx)(p.a,{path:"/users/:userId",element:Object(K.jsx)(Oe,{})}),Object(K.jsx)(p.a,{path:"*",element:Object(K.jsx)("h1",{className:"display-2",children:"Wrong page!"})})]})]})})})},Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,163)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};O.a.createRoot(document.getElementById("root")).render(Object(K.jsx)(g.a.StrictMode,{children:Object(K.jsx)(Se,{})})),Ne()}},[[137,1,2]]]);
//# sourceMappingURL=main.29610ff6.chunk.js.map