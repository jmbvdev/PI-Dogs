(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,a){e.exports={landing:"ladingPage_landing__Lucq3",image:"ladingPage_image__2HY27",title:"ladingPage_title__1bP7s",text_container:"ladingPage_text_container__1zCWG",btn:"ladingPage_btn__2asY0",icon_container:"ladingPage_icon_container__1ZDb_"}},20:function(e,t,a){e.exports={card:"dogCard_card__zQSV8",image:"dogCard_image__YHx0v",text:"dogCard_text__1HNmV",temperaments:"dogCard_temperaments__3rbMC",weight:"dogCard_weight__2i6Zm"}},23:function(e,t,a){e.exports={details:"dogDetails_details__2RtUL",container:"dogDetails_container__5fEBE",text:"dogDetails_text__3mQRU",specs:"dogDetails_specs__1LITJ",btn:"dogDetails_btn__2cMQr"}},3:function(e,t,a){e.exports={container:"createDog_container__22Bos",background:"createDog_background__3Hz8A",form:"createDog_form__1y7KD",input_container:"createDog_input_container__23J5d",temperaments:"createDog_temperaments__2vnxS",option:"createDog_option__2w9Xb",temperament:"createDog_temperament__3czaQ",temperaments_container:"createDog_temperaments_container__1ewDW",errors:"createDog_errors__p8nCS",error:"createDog_error__3CXb5",submit:"createDog_submit__6-jQn",btn_back:"createDog_btn_back__1eIMg",complete_alert:"createDog_complete_alert__3pfR3",temperament_alert:"createDog_temperament_alert__2QWNa"}},30:function(e,t,a){e.exports={created:"alert_created__2QGVN",alert:"alert_alert__7k91Y"}},48:function(e,t,a){e.exports={search:"search_search__2uQjo"}},55:function(e,t,a){},6:function(e,t,a){e.exports={container:"home_container__aixzT",header:"home_header__1C1cF",header_search:"home_header_search__lQKPg",logo:"home_logo__1pXOm",cards:"home_cards__1R39L",filters:"home_filters__2Besh",search:"home_search__1xJr_",create:"home_create__2k8UR",select:"home_select__4VAgW",alpha:"home_alpha__3J-A2",pages:"home_pages__LYGTx",page_number:"home_page_number__1P-n0",bone:"home_bone__1Z9bR"}},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t){e.exports={validate:function(e){var t={};return e.name?e.name&&e.name.length<4||e.name.length>20?t.name="Name must be a minimun of 4 and max of 20":/^[A-Z]+$/i.test(e.name)||(t.name="Name is invalid"):t.name="Name is required",e.minHeight||(t.minHeight="Min Height is required"),+e.minHeight>=+e.maxHeight&&(t.minHeight="The minimum height cannot be greater or equal than the maximum height"),e.maxHeight||(t.maxHeight="Max Height is required"),+e.maxHeight<=+e.minHeight?t.maxHeight="The maximum height cannot be less or equal than the minimum height":e.minWeight?+e.minWeight>=+e.maxWeight?t.minWeight="The minimum weight cannot be greater or equal than the maximum weight":e.maxWeight?+e.maxWeight<=+e.minWeight?t.maxWeight="The maximum weight cannot be less or equal than the minimum weight":e.minLife?+e.minLife>=+e.maxLife?t.minLife="The minimum life span cannot be greater or equal than the maximum life span":e.maxLife?+e.maxLife<=+e.minLife?t.maxLife="The maximum life span cannot be less or equal than the minimum life span":e.image?e.image.match(/^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim)||(t.image="invalid url"):t.image="URL is required":t.maxLife="Max Life span is required":t.minLife="Min Life span is required":t.maxWeight="Max Weight is required":t.minWeight="Min Weight is required",t}}},91:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(28),r=a.n(i),s=(a(55),a(2)),l=a(5),o=a(19),m=a(13),u=a(9),j=a(20),h=a.n(j),d=a(0),b=function(e){var t=e.name,a=e.id,n=e.weight,c=e.image,i=e.temperaments,r=Object(l.e)();return Object(d.jsxs)("div",{onClick:function(){r.push("/details/".concat(a))},className:h.a.card,children:[Object(d.jsx)("img",{className:h.a.image,src:c,alt:""}),Object(d.jsxs)("div",{className:h.a.text,children:[Object(d.jsx)("strong",{children:t}),Object(d.jsxs)("p",{className:h.a.weight,children:[Object(d.jsx)("strong",{children:"Weight: "}),n]}),Object(d.jsxs)("p",{className:h.a.temperaments,children:[Object(d.jsx)("strong",{children:"Temperament:"})," ",a.length>4?null===i||void 0===i?void 0:i.map((function(e){return e.name+", "})):"".concat(i)]})]})]})},g=a(14),p=a(21),x=a(22),O=a.n(x),f="http://localhost:3001",_="GET_DOGS",v="GET_DOG_DETAILS",N="SEARCH_DOGS",y="GET_TEMPERAMENTS",L="ADD_DOG",w="FILTER_BY_TEMPERAMENTS",D="FILTER_BY_RACES",C="FILTER_BY_ORIGIN",H="ORDER_BY_ALPHABET",W="ORDER_BY_WEIGHT";function k(){return function(){var e=Object(p.a)(Object(g.a)().mark((function e(t){return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O.a.get(f+"/temperaments").then((function(e){t({type:y,payload:e.data})})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}var T=a(48),E=a.n(T),M=function(){var e=Object(u.b)(),t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],i=a[1];function r(t){var a;t.preventDefault(),i(t.target.value),e((a=c,function(){var e=Object(p.a)(Object(g.a)().mark((function e(t){return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O.a.get(f+"/dogs?name=".concat(a)).then((function(e){t({type:N,payload:e.data})})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}return Object(d.jsxs)("div",{className:E.a.search,children:[Object(d.jsx)("p",{children:"Search by breed"}),Object(d.jsx)("i",{className:"fa-solid fa-paw"}),Object(d.jsx)("input",{type:"text",onChange:function(e){return r(e)}})]})},S=a(6),R=a.n(S),A=a.p+"static/media/dogiIcon.95af15bd.png",I=(a(88),function(){return Object(d.jsx)("div",{className:"loading",children:Object(d.jsx)("img",{src:"https://barfdeshidratado.com/wp-content/uploads/2022/02/piq-loading.gif",alt:"loading"})})}),B=function(){var e=Object(u.b)(),t=Object(l.e)(),a=Object(u.c)((function(e){return e.dogs})),c=Object(u.c)((function(e){return e.temperaments})),i=Object(n.useState)(!0),r=Object(m.a)(i,2),s=r[0],j=r[1],h=Object(n.useState)(!0),x=Object(m.a)(h,2),v=x[0],N=x[1],y=Object(n.useState)(1),L=Object(m.a)(y,2),T=L[0],E=L[1];function S(t){var a;e((a=t.target.value,{type:w,payload:a})),E(1)}function B(t){var a;e((a=t.target.value,{type:D,payload:a})),E(1)}function q(t){var a;e((a=t.target.value,{type:C,payload:a})),E(1)}Object(n.useEffect)((function(){e(function(){var e=Object(p.a)(Object(g.a)().mark((function e(t){return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O.a.get(f+"/dogs").then((function(e){t({type:_,payload:e.data})})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(k())}),[e]);for(var P=[],G=0;G<c.length;G++)P.push(c[G].name);for(var Y=Object(o.a)(new Set(P)),Q=[],z=0;z<a.length;z++)Q.push(a[z].name);for(var V=Object(o.a)(new Set(Q)),J=8*T,U=J-8,F=a.slice(U,J),Z=Math.ceil(a.length/8),X=[],K=0;K<Z;K++)X.push(K);return Object(d.jsxs)("div",{className:R.a.container,children:[Object(d.jsxs)("header",{className:R.a.header,children:[Object(d.jsxs)("div",{className:R.a.header_search,children:[Object(d.jsx)("img",{onClick:function(){t.push("/")},className:R.a.logo,src:A,alt:"dog-icon"}),Object(d.jsxs)("div",{className:R.a.search,children:[Object(d.jsx)("h1",{children:"PuppypediA"}),Object(d.jsx)(M,{})]}),Object(d.jsxs)("button",{className:R.a.create,onClick:function(){t.push("/create")},children:["  ",Object(d.jsx)("i",{className:"fa-solid fa-plus"}),"Add dog"]})]}),Object(d.jsxs)("div",{className:R.a.filters,children:[Object(d.jsx)("div",{className:R.a.select,children:Object(d.jsxs)("select",{name:"filterBytemperament",defaultValue:"default",onChange:function(e){return S(e)},children:[Object(d.jsx)("option",{value:"all",children:"Temperaments"}),null===Y||void 0===Y?void 0:Y.map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))]})}),Object(d.jsx)("div",{className:R.a.select,children:Object(d.jsxs)("select",{name:"filterByRace",defaultValue:"default",onChange:function(e){return B(e)},children:[Object(d.jsx)("option",{value:"all",children:"Breeds"}),null===V||void 0===V?void 0:V.map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))]})}),Object(d.jsx)("div",{className:R.a.select,children:Object(d.jsxs)("select",{name:"filterByOrigin",defaultValue:"default",onChange:function(e){return q(e)},children:[Object(d.jsx)("option",{value:"all",children:"DB-API"}),Object(d.jsx)("option",{value:"api",children:"Only Api"}),Object(d.jsx)("option",{value:"db",children:"Only DB"})]})}),Object(d.jsx)("button",{className:R.a.alpha,onClick:function(){j(!s),e({type:H,payload:s}),E(1)},children:s?Object(d.jsx)("i",{className:"fa-solid fa-arrow-up-a-z"}):Object(d.jsx)("i",{className:"fa-solid fa-arrow-down-z-a"})}),Object(d.jsx)("button",{className:R.a.alpha,onClick:function(){N(!v),e({type:W,payload:v}),E(1)},children:Object(d.jsx)("i",{className:"fa-solid fa-weight-hanging"})})]})]}),Object(d.jsxs)("div",{className:R.a.pages,children:[1!==T&&Object(d.jsx)("button",{className:R.a.page_number,onClick:function(){return E(T-1)},children:Object(d.jsx)("i",{className:"fa-solid fa-circle-left"})}),X.map((function(e){return e>0?Object(d.jsx)("button",{className:R.a.page_number,onClick:function(){return E(e)},children:e},e):null})),T!==Z&&Object(d.jsx)("button",{className:R.a.page_number,onClick:function(){return E(T+1)},children:Object(d.jsx)("i",{className:"fa-solid fa-circle-right"})})]}),Object(d.jsx)("main",{className:R.a.cards,children:a.length?null===F||void 0===F?void 0:F.map((function(e){return Object(d.jsx)(b,{id:e.id,name:e.name,weight:e.weight,height:e.height,yearsLife:e.yearsLife,image:e.image,temperaments:e.temperaments},e.id)})):Object(d.jsx)(I,{})}),Object(d.jsxs)("div",{className:R.a.bone,children:[Object(d.jsxs)("span",{children:["#",T]}),Object(d.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bone_noun_71979_cc.svg/1280px-Bone_noun_71979_cc.svg.png",alt:"bone"})]})]})},q=(a(89),a(15)),P=a(16),G=a.n(P),Y=a.p+"static/media/dogi.8651bac6.png",Q=function(){var e=Object(l.e)();return Object(d.jsxs)("div",{className:G.a.landing,children:[Object(d.jsxs)("div",{className:G.a.text_container,children:[Object(d.jsx)("h1",{className:G.a.title,children:"PuppypediA"}),Object(d.jsx)("p",{children:"Learn about the characteristics and behaviors of your dog's breed and group. "}),Object(d.jsxs)("div",{className:G.a.icon_container,children:[Object(d.jsx)("button",{onClick:function(){e.push("/home")},className:G.a.btn,children:Object(d.jsx)(q.b,{to:"/home",children:"Entry"})}),Object(d.jsx)("a",{href:"https://github.com/jmbvdev/PI-Dogs",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("i",{className:"fa-brands fa-github"})})]})]}),Object(d.jsx)("img",{className:G.a.image,src:Y,alt:"dog"})]})},z=a(23),V=a.n(z),J=function(){var e,t,a=Object(l.f)().id,c=Object(u.b)(),i=Object(l.e)(),r=Object(u.c)((function(e){return e.dogDetails}));return Object(n.useEffect)((function(){c(function(e){return function(){var t=Object(p.a)(Object(g.a)().mark((function t(a){return Object(g.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",O.a.get(f+"/dogs/".concat(e)).then((function(e){a({type:v,payload:e.data})})).catch((function(e){return console.log(e)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(a))}),[a,c]),Object(d.jsxs)("div",{className:V.a.details,children:[Object(d.jsx)("div",{className:V.a.btn,children:Object(d.jsx)("button",{onClick:function(){i.push("/home")},children:Object(d.jsx)("i",{className:"fa-solid fa-circle-chevron-left"})})}),r.image?Object(d.jsxs)("div",{className:V.a.container,children:[Object(d.jsx)("img",{src:r.image,alt:""}),Object(d.jsxs)("div",{className:V.a.text,children:[Object(d.jsx)("h1",{children:r.name}),Object(d.jsxs)("div",{className:V.a.specs,children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Temperament: "}),a.length>3?null===r||void 0===r||null===(e=r.temperaments)||void 0===e?void 0:e.map((function(e){return e.name+", "})):"".concat(null===r||void 0===r||null===(t=r.temperaments)||void 0===t?void 0:t[0])]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Height: "}),r.height]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Weight: "}),r.weight]}),Object(d.jsxs)("p",{children:[Object(d.jsx)("strong",{children:"Life Span: "}),r.yearsLife]}),Object(d.jsxs)("button",{onClick:function(){i.push("/create")},children:[Object(d.jsx)("i",{className:"fa-solid fa-plus"})," Create a dog"]})]})]})]}):Object(d.jsx)(I,{})]})},U=a(24),F=a(30),Z=a.n(F),X=function(e){var t=e.setCompleteAlert;return Object(d.jsxs)("div",{className:Z.a.created,children:[Object(d.jsx)("span",{children:"dog successfully created"}),Object(d.jsx)("button",{onClick:function(){t(!1)},children:Object(d.jsx)("i",{className:"fa-solid fa-rectangle-xmark"})})]})},K=function(e){var t=e.setTemperamentAlert;return Object(d.jsxs)("div",{className:Z.a.alert,children:[Object(d.jsx)("button",{onClick:function(){t(!1)},children:Object(d.jsx)("i",{className:"fa-solid fa-xmark"})}),Object(d.jsx)("i",{className:"fa-solid fa-triangle-exclamation"}),Object(d.jsx)("h2",{children:"You can't add more than six temperaments!"})]})},$=a(3),ee=a.n($),te=a(90).validate,ae=function(){var e=Object(u.b)(),t=Object(l.e)();Object(n.useEffect)((function(){e(k())}),[e]);var a=Object(n.useState)({name:"",minHeight:"",maxHeight:"",minWeight:"",maxWeight:"",minLife:"",maxLife:"",image:"",temperaments:[]}),c=Object(m.a)(a,2),i=c[0],r=c[1],j=Object(n.useState)({}),h=Object(m.a)(j,2),b=h[0],x=h[1],f=Object(n.useState)(!1),_=Object(m.a)(f,2),v=_[0],N=_[1],y=Object(n.useState)(!1),L=Object(m.a)(y,2),w=L[0],D=L[1],C=Object(u.c)((function(e){return e.temperaments}));function H(e){e.preventDefault(),r(Object(s.a)(Object(s.a)({},i),{},Object(U.a)({},e.target.name,e.target.value))),x(te(Object(s.a)(Object(s.a)({},i),{},Object(U.a)({},e.target.name,e.target.value))))}function W(t){t.preventDefault(),x(i),e(function(e){var t=e.name,a=e.minHeight,n=e.maxHeight,c=e.minWeight,i=e.maxWeight,r=e.minLife,s=e.maxLife,l=e.image,o=e.temperaments;return Object(p.a)(Object(g.a)().mark((function e(){var m;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("http://localhost:3001/dogs",{name:t,height:"".concat(a," - ").concat(n),weight:"".concat(c," - ").concat(i),yearsLife:"".concat(r," - ").concat(s," years"),image:l,temperaments:o});case 2:return m=e.sent,e.abrupt("return",m);case 4:case"end":return e.stop()}}),e)})))}(i)),N(!0),r({name:"",minHeight:"",maxHeight:"",minWeight:"",maxWeight:"",minLife:"",maxLife:"",image:"",temperaments:[]}),x({})}te(i);for(var T=[],E=0;E<C.length;E++)T.push(C[E].name);var M=Object(o.a)(new Set(T));return Object(d.jsxs)("div",{className:ee.a.container,children:[w&&Object(d.jsx)("div",{className:ee.a.temperament_alert,children:Object(d.jsx)(K,{setTemperamentAlert:D})}),v&&Object(d.jsx)("div",{className:ee.a.complete_alert,children:Object(d.jsx)(X,{setCompleteAlert:N})}),Object(d.jsx)("div",{className:ee.a.btn_back,children:Object(d.jsx)("button",{onClick:function(){t.push("/home")},children:Object(d.jsx)("i",{className:"fa-solid fa-circle-chevron-left"})})}),Object(d.jsx)("div",{className:ee.a.background,children:Object(d.jsxs)("form",{className:ee.a.form,onSubmit:W,children:[Object(d.jsx)("h4",{children:"CREATE YOUR OWN DOG"}),Object(d.jsxs)("div",{className:ee.a.input_container,children:[Object(d.jsx)("label",{title:"name",children:"Name: "}),Object(d.jsx)("input",{type:"text",name:"name",placeholder:"Dog name...",onChange:function(e){return H(e)},value:i.name},"name"),b.name&&Object(d.jsx)("p",{className:ee.a.error,children:b.name})]}),Object(d.jsxs)("div",{className:ee.a.input_container,children:[Object(d.jsx)("label",{title:"minHeight",children:"Min Height:"}),Object(d.jsx)("input",{type:"number",name:"minHeight",placeholder:"Minimum Height",onChange:function(e){return H(e)},value:i.minHeight,min:"1"},"minHeight"),b.minHeight&&Object(d.jsx)("p",{className:ee.a.error,children:b.minHeight})]}),Object(d.jsxs)("div",{className:ee.a.input_container,children:[Object(d.jsx)("label",{title:"maxHeight",children:"M\xe1x Height:"}),Object(d.jsx)("input",{type:"number",name:"maxHeight",placeholder:"M\xe1ximum Height",onChange:function(e){return H(e)},value:i.maxHeight,min:i.minHeight},"maxHeight"),b.maxHeight&&Object(d.jsx)("p",{className:ee.a.error,children:b.maxHeight})]}),Object(d.jsxs)("div",{className:ee.a.input_container,children:[Object(d.jsx)("label",{title:"minWeight",children:"Min Weight:"}),Object(d.jsx)("input",{type:"number",name:"minWeight",placeholder:"Minimum Weight",onChange:function(e){return H(e)},value:i.minWeight,min:"1"},"minWeight"),b.minWeight&&Object(d.jsx)("p",{className:ee.a.error,children:b.minWeight})]}),Object(d.jsxs)("div",{className:ee.a.input_container,children:[Object(d.jsx)("label",{title:"maxWeight",children:"M\xe1x Weight:"}),Object(d.jsx)("input",{type:"number",name:"maxWeight",placeholder:"M\xe1ximum Height",onChange:function(e){return H(e)},value:i.maxWeight,min:i.minWeight},"maxWeight"),b.maxWeight&&Object(d.jsx)("p",{className:ee.a.error,children:b.maxWeight})]}),Object(d.jsxs)("div",{className:ee.a.input_container,children:[Object(d.jsx)("label",{title:"minLife",children:"Min life"}),Object(d.jsx)("input",{type:"number",name:"minLife",placeholder:"Minimum Life Span",onChange:function(e){return H(e)},value:i.minLife,min:"1"},"minLife"),b.minLife&&Object(d.jsx)("p",{className:ee.a.error,children:b.minLife})]}),Object(d.jsxs)("div",{className:ee.a.input_container,children:[Object(d.jsx)("label",{title:"maxLife",children:"M\xe1x life"}),Object(d.jsx)("input",{type:"number",name:"maxLife",placeholder:"M\xe1ximum Life Span",onChange:function(e){return H(e)},value:i.maxLife,min:i.minLife},"maxLife"),b.maxLife&&Object(d.jsx)("p",{className:ee.a.error,children:b.maxLife})]}),Object(d.jsxs)("div",{className:ee.a.input_container,children:[Object(d.jsx)("label",{title:"image",children:"Image:"}),Object(d.jsx)("input",{type:"text",name:"image",placeholder:"URL image",onChange:function(e){return H(e)},value:i.image,min:"1"},"image"),b.image&&Object(d.jsx)("p",{className:ee.a.error,children:b.image})]}),Object(d.jsxs)("div",{className:ee.a.temperaments,children:[Object(d.jsx)("label",{children:"Temperaments:"}),Object(d.jsx)("select",{multiple:!0,name:"temperaments",onChange:function(e){return function(e){return i.temperaments.includes(e.target.value)?b.select="Remember you can't add the same temperament!":i.temperaments.length<6?r(Object(s.a)(Object(s.a)({},i),{},{temperaments:[].concat(Object(o.a)(i.temperaments),[e.target.value])})):D(!0),b}(e)},required:!0,value:i.temperaments,children:null===M||void 0===M?void 0:M.map((function(e){return Object(d.jsx)("option",{className:ee.a.option,value:e,children:e},e)}))},"temperaments"),Object(d.jsx)("div",{className:ee.a.temperaments_container,children:i.temperaments.map((function(e){return Object(d.jsxs)("div",{className:ee.a.temperament,children:[Object(d.jsx)("button",{type:"button",onClick:function(){return t=e,void r(Object(s.a)(Object(s.a)({},i),{},{temperaments:i.temperaments.filter((function(e){return e!==t}))}));var t},children:Object(d.jsx)("i",{className:"fa-solid fa-xmark"})}),Object(d.jsx)("p",{children:e})]},e)}))})]}),b.select&&Object(d.jsx)("p",{className:ee.a.errors,children:b.select}),""!==i.name&&""!==i.minHeight&&""!==i.maxHeight&&""!==i.minWeight&&""!==i.maxWeight&&""!==i.maxLife&&""!==i.minLife&&""!==i.image&&i.temperaments.length>0?Object(d.jsx)("button",{className:ee.a.submit,type:"submit",name:"submit",onClick:function(e){return W(e)},children:"submit"}):Object(d.jsx)("p",{className:ee.a.errors,children:"You must enter all the data to submit"})]})})]})};var ne=function(){return Object(n.useEffect)((function(){window.process=Object(s.a)({},window.process)}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l.a,{exact:!0,path:"/",component:Q}),Object(d.jsx)(l.a,{exact:!0,path:"/home",component:B}),Object(d.jsx)(l.a,{exact:!0,path:"/details/:id",component:J}),Object(d.jsx)(l.a,{exact:!0,path:"/create",component:ae})]})},ce=a(31),ie={dogs:[],allDogs:[],temperaments:[],dogDetails:{}};var re=a(50),se=a(49),le=Object(ce.createStore)((function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case _:return Object(s.a)(Object(s.a)({},a),{},{dogs:n.payload,allDogs:n.payload});case v:return Object(s.a)(Object(s.a)({},a),{},{dogDetails:n.payload});case N:return Object(s.a)(Object(s.a)({},a),{},{dogs:n.payload});case y:return Object(s.a)(Object(s.a)({},a),{},{temperaments:n.payload});case L:return Object(s.a)({},a);case w:var c=a.allDogs,i="all"===n.payload?c:a.dogs.filter((function(e){return e.temperaments.length>1?e.temperaments.map((function(e){return e.name})).includes(n.payload):e.temperaments[0].includes(n.payload)}));return Object(s.a)(Object(s.a)({},a),{},{dogs:i});case D:var r=a.allDogs,l="all"===n.payload?r:a.dogs.filter((function(e){return e.name===n.payload}));return Object(s.a)(Object(s.a)({},a),{},{dogs:l});case C:var o=a.allDogs,m="all"===n.payload?o:a.dogs.filter((function(e){return"db"===n.payload?e.id.length>3:"number"==typeof e.id}));return Object(s.a)(Object(s.a)({},a),{},{dogs:m});case H:return Object(s.a)(Object(s.a)({},a),{},{dogs:!0===n.payload?null===(e=a.dogs)||void 0===e?void 0:e.sort((function(e,t){return e.name.localeCompare(t.name)})):null===(t=a.dogs)||void 0===t?void 0:t.sort((function(e,t){return t.name.localeCompare(e.name)}))});case W:return Object(s.a)(Object(s.a)({},a),{},{dogs:!0===n.payload?a.dogs.sort((function(e,t){return parseInt(t.weight)>parseInt(e.weight)?1:parseInt(t.weight)<parseInt(e.weight)?-1:0})):a.dogs.sort((function(e,t){return parseInt(e.weight)>parseInt(t.weight)?1:parseInt(e.weight)<parseInt(t.weight)?-1:0}))});default:return Object(s.a)({},a)}}),Object(se.composeWithDevTools)(Object(ce.applyMiddleware)(re.a))),oe=le;r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(u.a,{store:oe,children:Object(d.jsx)(q.a,{children:Object(d.jsx)(ne,{})})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.ad8eab25.chunk.js.map