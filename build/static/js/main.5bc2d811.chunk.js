(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{25:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(11),c=t.n(r),l=(t(38),t(6)),s=(t(39),t(16),t(17)),i=t(3),m=t(5),u=t.n(m),d=t(13),p=t(26),E=t(33),g=function(e){e.text;return o.a.createElement("div",null,o.a.createElement("i",{className:"fas fa-map-marker marker fa-2x"}))},f=function(){var e=[],a=[],t=Object(n.useState)([]),r=Object(l.a)(t,2),c=r[0],s=r[1],i=Object(n.useState)({lat:4.539202,lng:-74.109463}),m=Object(l.a)(i,2),u=m[0],d=m[1];navigator.geolocation.getCurrentPosition((function(e){var a={lat:e.coords.latitude,lng:e.coords.longitude};d(a)}));for(var f=0;f<e.length;f++)a.push(o.a.createElement(g,{lat:e[f].lat,lng:e[f].lng,text:e[f].text}));return Object(n.useEffect)((function(){fetch("api/locations/").then((function(e){e.json().then((function(e){var t=[];console.log(e);var n,r=Object(p.a)(e);try{for(r.s();!(n=r.n()).done;){var c=n.value,l={text:c.nombre,lat:c.latitud,lng:c.longitud};t.push(l)}}catch(i){r.e(i)}finally{r.f()}a=[],function(e){for(var t=0;t<e.length;t++)a.push(o.a.createElement(g,{lat:e[t].lat,lng:e[t].lng,text:e[t].text}));s(a)}(t)}))}))}),[]),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("h3",null,"Encuentra todas las donaciones cercanas a las que puedes realizar esta donaci\xf3n"),o.a.createElement("div",{style:{height:"500px",width:"60%"}},o.a.createElement(E.a,{bootstrapURLKeys:{key:"AIzaSyDWDt2-VHy5BZHqJKI5c6tmcaNJVrm6U8c"},defaultCenter:u,defaultZoom:14},c)))},v=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),s=Object(l.a)(c,2),i=s[0],m=s[1],p=Object(n.useState)(!1),E=Object(l.a)(p,2),g=E[0],v=E[1];function h(){for(var e=document.getElementById("tipo-donacion").parentNode.parentNode;e.firstElementChild!==e.lastElementChild;)e.removeChild(e.lastElementChild)}function b(){var e=document.createElement("div");e.classList.add("form-group"),e.classList.add("input-group"),e.innerHTML='<div class="input-group-prepend">\n        <span class="input-group-text">\n          <i class="fas fa-home"></i>\n        </span>\n      </div>\n      <select class="form-control" id="tipo-receptor" required>\n        <option selected="" value="">\xbfDeseas donar a una fundaci\xf3n?</option>\n        <option value="si">Si</option>\n        <option value="no">No, prefiero donar directamente a personas que lo necesitan</option>\n      </select>',document.getElementById("donacion").appendChild(e),document.getElementById("donarbtn").addEventListener("click",N)}function N(){if(function(){var e=document.getElementById("tipo-donacion"),a=e.value,t=document.getElementById("donacion");if("\xbfQu\xe9 deseas donar?"===a)return!1;if("Ropa"===a){if(console.log("AAAAAAAAAAAAAA",typeof e,typeof t),console.log(t.checkValidity()),!1===t.checkValidity())return!1}else if(!1===t.checkValidity())return!1;return!0}()){var e=document.getElementById("tipo-receptor");return m(!1),console.log(e.value),"si"===e.value?r(!0):r(!1),console.log("AC\xc4 NO "),void function(){y.apply(this,arguments)}()}m(!0),console.log("ESTAMOS AQU\xed ESTAMOS AQU\xed",i)}function y(){return(y=Object(d.a)(u.a.mark((function e(){var a,t,n,o,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.getElementById("tipo-donacion").value,t={},console.log(document.getElementById("tipo-receptor").value),n="si"==document.getElementById("tipo-receptor").value,t="Ropa"===a?{tipo:"ropa",estado:document.getElementById("estado-ropa").value,genero:document.getElementById("genero-ropa").value,edad:document.getElementById("edad-ropa").value,fundacion:n}:"Comida"===a?{tipo:"comida",edad:document.getElementById("tipo-persona").value,estado:document.getElementById("tipo-comida").value,fundacion:n}:"Dinero"===a?{tipo:"dinero",cant:document.getElementById("monto-dinero").value,mod:document.getElementById("modo-pago").value,fundacion:n}:{tipo:"otro",descripcion:document.getElementById("otros-value").value,fundacion:n},console.log("LE BODY",t),o={"Content-Type":"application/json"},e.next=9,fetch("/api/donations/",{method:"POST",headers:o,body:JSON.stringify(t)});case 9:(r=e.sent).ok&&200===r.status&&(v(!0),setTimeout((function(){v(!1)}),3e3));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o.a.createElement("div",null,o.a.createElement("section",{id:"donation"},o.a.createElement("a",{name:"Donar"}),o.a.createElement("div",{className:"card bg-light",id:"donationDiv"},o.a.createElement("article",{className:"card-body mx-auto",style:{maxwidth:"400px"}},o.a.createElement("a",{name:"Registro"}),o.a.createElement("h4",{className:"card-title mt-3 text-center"},"\xbfQuieres realizar una donaci\xf3n?"),o.a.createElement("p",{className:"text-center"},"\xa1Gracias por ayudar!"),o.a.createElement("form",{id:"donacion"},o.a.createElement("div",{className:"form-group input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},o.a.createElement("i",{className:"fas fa-hand-holding-usd"}))),o.a.createElement("select",{className:"form-control",id:"tipo-donacion",onChange:function(){var e=document.getElementById("tipo-donacion");console.log(document.getElementById("mapa")),r(!1),m(!1);var a=e.value;if("\xbfQu\xe9 deseas donar?"===a)h();else if("Ropa"===a){h();var t=document.createElement("div");t.classList.add("form-group"),t.classList.add("input-group"),t.innerHTML='<div class="input-group-prepend">\n          <span class="input-group-text">\n              <i class="fas fa-tshirt"></i>\n          </span>\n        </div>\n        <select class="form-control" id="estado-ropa" required>\n          <option selected="" value="">\xbfEn qu\xe9 estado se encuentra?</option>\n          <option>Usada</option>\n          <option>Nueva</option>\n          <option>Tengo de ambos tipos</option>\n        </select>';var n=document.createElement("div");n.classList.add("form-group"),n.classList.add("input-group"),n.innerHTML='<div class="input-group-prepend">\n          <span class="input-group-text">\n            <i class="fas fa-venus-mars"></i>\n          </span>\n        </div>\n        <select class="form-control" id="genero-ropa" required>\n          <option selected="" value="">\xbfA qui\xe9n le sirve la ropa?</option>\n          <option>Mujeres</option>\n          <option>Hombres</option>\n          <option>Ambos</option>\n        </select>';var o=document.createElement("div");o.classList.add("form-group"),o.classList.add("input-group"),o.innerHTML='<div class="input-group-prepend">\n          <span class="input-group-text">\n            <i class="fas fa-user-friends"></i>\n          </span>\n        </div>\n        <select class="form-control" id="edad-ropa" required>\n          <option selected="" value="">\xbfA que tipo de persona?</option>\n          <option>Ni\xf1os</option>\n          <option>Adultos</option>\n          <option>Ambos</option>\n        </select>';var c=document.getElementById("donacion");c.appendChild(t),c.appendChild(n),c.appendChild(o),b()}else if("Comida"===a){h();var l=document.createElement("div");l.classList.add("form-group"),l.classList.add("input-group"),l.innerHTML='<div class="input-group-prepend">\n          <span class="input-group-text">\n            <i class="fas fa-user-friends"></i>\n          </span>\n        </div>\n        <select class="form-control" id="tipo-persona" required>\n          <option selected="" value="">\xbfA qui\xe9n quisieras donar?</option>\n          <option>Ni\xf1os</option>\n          <option>Adultos/Ancianos</option>\n          <option>Cualquiera</option>\n        </select>';var s=document.createElement("div");s.classList.add("form-group"),s.classList.add("input-group"),s.innerHTML='<div class="input-group-prepend">\n        <span class="input-group-text">\n          <i class="fas fa-utensils"></i>\n        </span>\n      </div>\n      <select class="form-control" id="tipo-comida" required>\n        <option selected="" value="">\xbfQu\xe9 tipo de comida es?</option>\n        <option>Lista para consumir</option>\n        <option>Requiere preparaci\xf3n</option>\n        <option>Tengo de ambos tipos</option>\n      </select>';var i=document.getElementById("donacion");i.appendChild(l),i.appendChild(s),b()}else if("Dinero"===a){h();var u=document.createElement("div");u.classList.add("form-group"),u.classList.add("input-group"),u.innerHTML='<div class="input-group-prepend">\n        <span class="input-group-text">\n          <i class="fas fa-dollar-sign"></i>\n        </span>\n      </div>\n      <input required type="number" value="50000" min="1000" step="1000" data-number-to-fixed="2" data-number-stepfactor="1000" class="form-control currency" id="monto-dinero" />';var d=document.createElement("div");d.classList.add("form-group"),d.classList.add("input-group"),d.innerHTML='<div class="input-group-prepend">\n        <span class="input-group-text">\n          <i class="fas fa-money-bill-wave"></i>\n        </span>\n      </div>\n      <select class="form-control" id="modo-pago" required>\n        <option selected="" value="">\xbfQu\xe9 modalidad prefieres?</option>\n        <option>Directamente con el beneficiario</option>\n        <option>Pago online inmediato</option>\n      </select>\n      ';var p=document.getElementById("donacion");p.appendChild(u),p.appendChild(d),b()}else{h();var E=document.createElement("div");E.classList.add("form-group"),E.innerHTML='<label for="otros-value">Por favor especifica que deseas donar</label>\n      <textarea required class="form-control" id="otros-value" rows="3"></textarea>',document.getElementById("donacion").appendChild(E),b()}}},o.a.createElement("option",{defaultValue:""},"\xbfQu\xe9 deseas donar?"),o.a.createElement("option",null,"Ropa"),o.a.createElement("option",null,"Comida"),o.a.createElement("option",null,"Dinero"),o.a.createElement("option",null,"Otros")))),i&&o.a.createElement("label",{className:"incorrect",id:"lbl-incorrect"},"Aseg\xfarate de llenar todos los campos correctamente"),o.a.createElement("button",{onChange:N,type:"button",id:"donarbtn",className:"btn btn-primary btn-block"},"Donar"),g&&o.a.createElement("label",{style:{color:"green"}},"Donaci\xf3n creada correctamente")))),t&&o.a.createElement(f,{id:"mapa"}))};var h=function(e){return o.a.createElement("div",null,o.a.createElement("header",{id:"banner",className:"masthead text-white text-center"},o.a.createElement("div",{className:"overlay"}),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xl-9 mx-auto"},o.a.createElement("h1",{className:"mb-5"},"Bienvenidos a Donarte, la mejor opci\xf3n para ayudar!")),o.a.createElement("div",{className:"col-md-10 col-lg-8 col-xl-7 mx-auto"})))))},b=function(){return o.a.createElement("section",null,o.a.createElement(h,null),o.a.createElement(v,null),o.a.createElement("section",null,o.a.createElement("h1",null,o.a.createElement("a",{id:"Us"})),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4 justify-content-center"},o.a.createElement("div",{className:"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3"},o.a.createElement("div",{id:"icons",className:"container features-icons-icon d-flex justify-content-center"},o.a.createElement("img",{id:"icon1",alt:""})),o.a.createElement("h3",null,"Quienes Somos!"),o.a.createElement("p",{className:"lead mb-0"},"Donarte es una empresa colombiana, fundadada por estudiantes de los Andes!"))),o.a.createElement("div",{className:"col-lg-4 justify-content-center"},o.a.createElement("div",{className:"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3"},o.a.createElement("div",{id:"icons",className:"container features-icons-icon"},o.a.createElement("img",{id:"icon2",alt:""})),o.a.createElement("h3",null,"Que hacemos!"),o.a.createElement("p",{className:"lead mb-0"},"Ofrecemos un canal efectivo de donaciones a personas y fundaciones!"))),o.a.createElement("div",{className:"col-lg-4 justify-content-center"},o.a.createElement("div",{className:"features-icons-item mx-auto mb-0 mb-lg-3 "},o.a.createElement("div",{id:"icons",className:" container features-icons-icon justify-content-center"},o.a.createElement("img",{id:"icon3",alt:""})),o.a.createElement("h3",null,"Como lo hacemos!"),o.a.createElement("p",{className:"lead mb-0"},"Con tu ayuda localizamos a las personas y fundaciones m\xe1s necesitadas!"))))),o.a.createElement("hr",null)),o.a.createElement("h1",null,o.a.createElement("a",{id:"Who"})),o.a.createElement("section",{className:"text-center",id:"who"},o.a.createElement("h1",null,"A qui\xe9n ayudamos!"),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row align-items-center"},o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("div",{className:"p-5"},o.a.createElement("img",{id:"usImage1",className:"img-fluid rounded-circle",alt:""}))),o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("div",{className:"p-5"},o.a.createElement("h2",{className:"display-4"},"Fundaciones"),o.a.createElement("p",null,"Con donarte puedes ayudar donando a las fundaciones que se han registrado en nuestro sistema. Tambi\xe9n ayudamos a las fundaciones a contactar a las personas m\xe1s necesitadas a lo largo del pa\xeds. Reg\xedstrate ahora y ay\xfadanos a beneficiar a cientos de personas."))))),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row align-items-center"},o.a.createElement("div",{className:"col-lg-6 order-lg-2"},o.a.createElement("div",{className:"p-5"},o.a.createElement("img",{id:"usImage2",className:"img-fluid rounded-circle",alt:""}))),o.a.createElement("div",{className:"col-lg-6 order-lg-1"},o.a.createElement("div",{className:"p-5"},o.a.createElement("h2",{className:"display-4"},"Personas"),o.a.createElement("p",null,"Con donarte tambi\xe9n puedes ayudar a las personas que m\xe1s lo necesitan directamente. No hay necesidad de una organizaci\xf3n intermediaria. Ay\xfadanos a encontrar mas personas necesitadas, reporta alguna que conozcas.")))))),o.a.createElement("a",{id:"Testimonies"}),o.a.createElement("section",{className:"testimonials text-center bg-light",id:"testimonies"},o.a.createElement("div",{className:"container"},o.a.createElement("h2",{className:"mb-5"},"Personas que hemos ayudado..."),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"testimonial-item mx-auto mb-5 mb-lg-0"},o.a.createElement("img",{id:"personImg1",className:"img-fluid rounded-circle mb-3",alt:""}),o.a.createElement("h5",null,"Juan E."),o.a.createElement("p",{className:"font-weight-light mb-0"},'"\xa1Gracias Donarte! Me ayudaron cuando nadie mas lo hizo"'))),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"testimonial-item mx-auto mb-5 mb-lg-0"},o.a.createElement("img",{id:"personImg2",className:"img-fluid rounded-circle mb-3",alt:""}),o.a.createElement("h5",null,"Sara R."),o.a.createElement("p",{className:"font-weight-light mb-0"},'"\xa1Donarte me contact\xf3 y me brind\xf3 alimentos y ropa!"'))),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement("div",{className:"testimonial-item mx-auto mb-5 mb-lg-0"},o.a.createElement("img",{id:"personImg3",className:"img-fluid rounded-circle mb-3",alt:""}),o.a.createElement("h5",null,"Pedro C."),o.a.createElement("p",{className:"font-weight-light mb-0"},'"\xa1Donarte es amor puro! \xa1Muchas gracias!"')))))))},N=t(7),y=(t(46),t.p+"static/media/logout.4114e54e.svg"),x=(t.p,function(e){var a=Object(l.a)(e.user,2),t=a[0],n=a[1];return o.a.createElement("section",null,o.a.createElement("nav",{id:"navigation-bar",className:"navbar navbar-expand-xl navbar-light bg-light fixed-top"},o.a.createElement(N.HashLink,{to:"/",id:"navbar-brand",className:"navbar-brand ml-5"},"DONARTE"),o.a.createElement("div",{className:"collapse navbar-collapse justify-content-center",id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav ml-5 mr-5",id:"nav-menu"},o.a.createElement("li",null,o.a.createElement(N.HashLink,{smooth:!0,className:"nav-link",to:"/#Us"},"Nosotros")),o.a.createElement("li",null,o.a.createElement(N.HashLink,{smooth:!0,className:"nav-link",to:"/#Who"},"A qui\xe9n ayudamos")),o.a.createElement("li",null,o.a.createElement(N.HashLink,{smooth:!0,className:"nav-link",to:"/#Testimonies"},"Testimonios")),o.a.createElement("li",null,o.a.createElement(N.HashLink,{to:"/report",className:"nav-link"},"Reporta a personas")))),o.a.createElement("div",{className:"ml-7 mr-7"},o.a.createElement("span",{className:t&&t.email?"d-none":""},o.a.createElement(N.HashLink,{to:"/Donate",id:"donarNav",className:"btn btn-dark ml-2 mr-2"},"Donar"),o.a.createElement(N.HashLink,{to:"/login",className:"btn btn-outline-dark ml-2 mr-2 bold"},"Ingresar"),o.a.createElement(N.HashLink,{to:"/register",className:"btn btn-outline-dark ml-2 mr-2 bold"},"Registro")),o.a.createElement("span",{className:t&&t.email?"ml-3 user-name":"d-none"},t.nombre),o.a.createElement("span",{className:t&&t.email?"ml-3":"d-none"},o.a.createElement("img",{src:y,alt:"\xcdcono de logout",className:"logout-icon",onClick:function(){n({})}})))))}),O=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("footer",{id:"footer",className:"footer bg-dark"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6 h-100 text-center text-lg-left my-auto"},o.a.createElement("ul",{className:"list-inline mb-2"},o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("a",{href:"#"},"About")),o.a.createElement("li",{className:"list-inline-item"},"\u22c5"),o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("a",{href:"#"},"Contact")),o.a.createElement("li",{className:"list-inline-item"},"\u22c5"),o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("a",{href:"#"},"Terms of Use")),o.a.createElement("li",{className:"list-inline-item"},"\u22c5"),o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("a",{href:"#"},"Privacy Policy"))),o.a.createElement("p",{className:"text-muted small mb-4 mb-lg-0"},"\xa9 Desarrollado por el equipo 3 del curso programaci\xf3n con tecnolog\xedas web, secci\xf3n 1, semestre 2020-20.")),o.a.createElement("div",{className:"col-lg-6 h-100 text-center text-lg-right my-auto"},o.a.createElement("ul",{className:"list-inline mb-0"},o.a.createElement("li",{className:"list-inline-item mr-3"},o.a.createElement("a",{href:"https://github.com/isis3710-uniandes/202020_S1_E3/tree/master/Entrega2"},o.a.createElement("i",{className:"fab fa-github fa-2x fa-fw"}))),o.a.createElement("li",{className:"list-inline-item mr-3"},o.a.createElement("a",{href:"https://www.youtube.com/watch?v=Mm_94q5AfJg&feature=youtu.be"},o.a.createElement("i",{className:"fab fa-youtube fa-2x fa-fw"})))))))))},j=t(2),w=(t(25),function(e){var a=e.user,t=Object(n.useState)({correo:"",password:"",existeUsuario:!0,correctPassword:!0}),r=Object(l.a)(t,2),c=r[0],s=r[1],m=Object(i.k)();function p(){return(p=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s(Object(j.a)(Object(j.a)({},c),{existeUsuario:!0})),s(Object(j.a)(Object(j.a)({},c),{correctPassword:!0})),e.prev=3,e.next=6,fetch("/api/users/".concat(c.correo));case 6:return e.next=8,e.sent.json();case 8:(n=e.sent).clave===c.password?(localStorage.setItem("user",JSON.stringify(n)),a(n),m.push("/")):s(Object(j.a)(Object(j.a)({},c),{correctPassword:!1})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),s(Object(j.a)(Object(j.a)({},c),{existeUsuario:!1}));case 15:case"end":return e.stop()}}),e,null,[[3,12]])})))).apply(this,arguments)}return o.a.createElement("section",{id:"Login"},o.a.createElement("div",{className:"container login-container"},o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-md-6 login-form-1"},o.a.createElement("h3",null,"Hola! Bienvenido de nuevo"),o.a.createElement("form",{onSubmit:function(e){return p.apply(this,arguments)},id:"login-form"},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{id:"login-email",type:"email",className:"form-control",placeholder:"Correo *",value:c.correo,onChange:function(e){s(Object(j.a)(Object(j.a)({},c),{correo:e.target.value}))},defaultValue:"",required:!0})),o.a.createElement("div",{className:c.existeUsuario?" d-none ":"d-block m-2 font-weight-bold warning-red"},"\xa1No se encontr\xf3 un usuario con este correo!"),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{id:"login-password",type:"password",className:"form-control",placeholder:"Contrase\xf1a *",defaultValue:"",value:c.password,onChange:function(e){s(Object(j.a)(Object(j.a)({},c),{password:e.target.value}))},required:!0})),o.a.createElement("div",{className:c.correctPassword?" d-none ":"d-block m-2 font-weight-bold warning-red"},"Contrase\xf1a incorrecta"),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"submit",id:"loginbtn",className:"btnSubmit btn btn-primary btn-block",defaultValue:"Ingresar"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("a",{href:"olvidaste-contrasenia",className:"ForgetPwd"},"Olvidaste tu contrase\xf1a?")),o.a.createElement("div",{className:"form-group"},o.a.createElement(N.HashLink,{id:"registerLink",className:"ForgetPwd",to:"/register"},"Registrate Aqui")))))))}),k=function(e){var a=e.user,t=Object(n.useState)({nombre:"",apellido:"",correo:"",extension:"+57 1",telefono:"",tipoUsuario:"",password:"",confirmationPassword:"",matchingPasswords:!0,uniqueEmail:!0}),r=Object(l.a)(t,2),c=r[0],s=r[1],m=Object(i.k)();function p(){return(p=Object(d.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),c.password===c.confirmationPassword){e.next=5;break}s(Object(j.a)(Object(j.a)({},c),{matchingPasswords:!1})),e.next=11;break;case 5:return s(Object(j.a)(Object(j.a)({},c),{matchingPasswords:!0})),console.log("Seteado a True"),e.next=9,E(c.correo);case 9:e.sent?s(Object(j.a)(Object(j.a)({},c),{uniqueEmail:!1})):(s(Object(j.a)(Object(j.a)({},c),{uniqueEmail:!0})),f());case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return g.apply(this,arguments)}function g(){return(g=Object(d.a)(u.a.mark((function e(a){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/users/".concat(a));case 3:return e.next=5,e.sent.json();case 5:return t=e.sent,e.abrupt("return",!!t.email);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function f(){return v.apply(this,arguments)}function v(){return(v=Object(d.a)(u.a.mark((function e(){var t,n,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={nombre:c.nombre,apellidos:c.apellido,email:c.correo,telefono:"".concat(c.extension," ").concat(c.telefono),fundacion:"Fundaci\xf3n"===c.tipoUsuario,clave:c.password},n={"Content-Type":"application/json"},e.next=4,fetch("/api/users",{method:"POST",headers:n,body:JSON.stringify(t)});case 4:return e.next=6,e.sent.json();case 6:o=e.sent,localStorage.setItem("user",JSON.stringify(o)),a(o),m.push("/");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return o.a.createElement("section",{id:"register"},o.a.createElement("div",{className:"card bg-light",id:"registerdiv"},o.a.createElement("article",{className:"card-body mx-auto",style:{maxWidth:"400px"}},o.a.createElement("h4",{className:"card-title mt-3 text-center"},"Crea tu cuenta"),o.a.createElement("p",{className:"text-center"},"y empieza a donar!"),o.a.createElement("form",{id:"form-registro",onSubmit:function(e){return p.apply(this,arguments)}},o.a.createElement("div",{className:"form-group input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},o.a.createElement("i",{className:"fa fa-user"}))),o.a.createElement("input",{name:"name",className:"form-control",placeholder:"Nombre",value:c.nombre,onChange:function(e){s(Object(j.a)(Object(j.a)({},c),{nombre:e.target.value}))},type:"text",required:!0}),o.a.createElement("input",{name:"lastname",className:"form-control",placeholder:"Apellido",value:c.apellido,onChange:function(e){s(Object(j.a)(Object(j.a)({},c),{apellido:e.target.value}))},type:"text",required:!0})),o.a.createElement("div",{className:"form-group input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},o.a.createElement("i",{className:"fa fa-envelope"}))),o.a.createElement("input",{name:"email",className:"form-control",placeholder:"Correo Electr\xf3nico",value:c.correo,onChange:function(e){s(Object(j.a)(Object(j.a)({},c),{correo:e.target.value}))},type:"email"})),o.a.createElement("div",{className:c.uniqueEmail?" d-none ":"d-block m-2 font-weight-bold warning-red"},"\xa1Ya hay un usuario con este correo!"),o.a.createElement("div",{className:"form-group input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},o.a.createElement("i",{className:"fa fa-phone"}))),o.a.createElement("select",{className:"custom-select",style:{maxWidth:"120px"},value:c.extension,onChange:function(e){s(Object(j.a)(Object(j.a)({},c),{extension:e.target.value}))}},o.a.createElement("option",null,"+57 1"),o.a.createElement("option",null,"+57 2"),o.a.createElement("option",null,"+57 3"),o.a.createElement("option",null,"+57 4"),o.a.createElement("option",null,"+57 5"),o.a.createElement("option",null,"+57 6"),o.a.createElement("option",null,"+57 7"),o.a.createElement("option",null,"+57 8")),o.a.createElement("input",{required:!0,name:"phone",className:"form-control",placeholder:"N\xfamero de Tel\xe9fono",value:c.telefono,onChange:function(e){s(Object(j.a)(Object(j.a)({},c),{telefono:e.target.value}))},type:"text"})),o.a.createElement("div",{className:"form-group input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},o.a.createElement("i",{className:"fa fa-building"}))),o.a.createElement("select",{className:"form-control",required:!0,value:c.tipoUsuario,onChange:function(e){s(Object(j.a)(Object(j.a)({},c),{tipoUsuario:e.target.value}))}},o.a.createElement("option",null,"Seleccione el tipo de usuario"),o.a.createElement("option",null,"Fundaci\xf3n"),o.a.createElement("option",null,"Persona Natural"))),o.a.createElement("div",{className:"form-group input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},o.a.createElement("i",{className:"fa fa-lock"}))),o.a.createElement("input",{required:!0,name:"password",className:"form-control",placeholder:"Create password",value:c.password,onChange:function(e){s(Object(j.a)(Object(j.a)({},c),{password:e.target.value}))},type:"password"})),o.a.createElement("div",{className:c.matchingPasswords?"form-group input-group":"form-group input-group  not-matching-passwords"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},o.a.createElement("i",{className:"fa fa-lock"}))),o.a.createElement("input",{required:!0,className:c.matchingPasswords?"form-control":"form-control no-box-shadow",placeholder:"Repeat password",value:c.confirmationPassword,onChange:function(e){s(Object(j.a)(Object(j.a)({},c),{confirmationPassword:e.target.value}))},type:"password"})),o.a.createElement("div",{className:c.matchingPasswords?"d-none":"d-block m-2 font-weight-bold warning-red"},"\xa1Las contrase\xf1as no coinciden!"),o.a.createElement("div",{className:"form-group"},o.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Registrame")),o.a.createElement("p",{className:"text-center"},"Ya tienes una cuenta?",o.a.createElement(N.HashLink,{to:"/login",id:"IniciarSesionLink"}," Inicia sesion "))))))},C=t(12),I=t(29),q=t(30),L=t(18),A=t(32),S=t(31),B=function(e){Object(A.a)(t,e);var a=Object(S.a)(t);function t(e){var n;return Object(I.a)(this,t),(n=a.call(this,e)).state={cantidadAdultos:0,cantidadNinos:0,comida:!1,ropa:!1,otros:!1,otrosDescripcion:"",comentario:""},n.handleInputChange=n.handleInputChange.bind(Object(L.a)(n)),n}return Object(q.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"React POST Request Example"})},e.next=3,fetch("/api/reports",a);case 3:return t=e.sent,e.next=6,t.json();case 6:e.sent,this.setState(this.report);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleInputChange",value:function(e){var a,t=e.target,n=t.name;this.setState((a={},Object(C.a)(a,n,n),Object(C.a)(a,"comida","checkComida"===e.target.id?t.checked:this.state.comida),Object(C.a)(a,"otros","checkOtros"===e.target.id?t.checked:this.state.otros),Object(C.a)(a,"cantidadAdultos","cantAd"===e.target.id?t.value:this.state.cantidadAdultos),Object(C.a)(a,"cantidadNinos","cantNin"===e.target.id?t.value:this.state.cantidadNinos),Object(C.a)(a,"ropa","checkRopa"===e.target.id?t.checked:this.state.ropa),Object(C.a)(a,"otrosDescripcion","descripcion"===e.target.id?t.value:this.state.otrosDescripcion),Object(C.a)(a,"comentario","comentario"===e.target.id?t.value:this.state.comentario),a))}},{key:"render",value:function(){return o.a.createElement("section",{id:"report"},o.a.createElement("div",{className:"card bg-light"},o.a.createElement("article",{className:"card-body mx-auto"},o.a.createElement("h1",{className:"card-title mb-4 text-center"},"Reporta personas que necesiten ayuda"),o.a.createElement("form",{id:"reporte"},o.a.createElement("div",{className:"form-group input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},o.a.createElement("i",{className:"fa fa-user"}))),o.a.createElement("input",{name:"",id:"cantAd",className:"form-control",placeholder:"\xbfCuantos adultos hay?",type:"number",value:this.state.cantidadAdultos,min:"0",onChange:this.handleInputChange})),o.a.createElement("div",{className:"form-group input-group"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},o.a.createElement("i",{className:"fa fa-user"}))),o.a.createElement("input",{name:"",id:"cantNin",className:"form-control",placeholder:"\xbfCuantos ni\xf1os hay?",type:"number",value:this.state.cantidadNinos,onChange:this.handleInputChange,min:"0"})),o.a.createElement("div",{className:"form-group input-group justify-content-center"},o.a.createElement("h2",null,"\xbfQu\xe9 necesitan?")),o.a.createElement("div",{className:"form-group input-group justify-content-center"},o.a.createElement("div",{className:"custom-control custom-checkbox"},o.a.createElement("input",{type:"checkbox",className:"custom-control-input pr-3",id:"checkRopa",checked:this.state.ropa,onChange:this.handleInputChange}),o.a.createElement("label",{className:"custom-control-label pr-2",htmlFor:"checkRopa"},"Ropa")),o.a.createElement("div",{className:"custom-control custom-checkbox"},o.a.createElement("input",{type:"checkbox",className:"custom-control-input pr-3",id:"checkComida",checked:this.state.comida,onChange:this.handleInputChange}),o.a.createElement("label",{className:"custom-control-label pr-2",htmlFor:"checkComida"},"Comida")),o.a.createElement("div",{className:"custom-control custom-checkbox"},o.a.createElement("input",{type:"checkbox",className:"custom-control-input pr-3",id:"checkOtros",checked:this.state.otros,onChange:this.handleInputChange}),o.a.createElement("label",{className:"custom-control-label pr-2",htmlFor:"checkOtros"},"Otros"))),o.a.createElement("div",{className:"custom-control mt-3",id:"divReportComida",style:{display:this.state.comida?"block":"none"}},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text"},o.a.createElement("i",{className:"fas fa-utensils"})),o.a.createElement("select",{className:"form-control",id:"tipo-comida",required:!0},o.a.createElement("option",{defaultValue:""},"\xbfQu\xe9 tipo de comida es?"),o.a.createElement("option",null,"Lista para consumir"),o.a.createElement("option",null,"Requiere preparaci\xf3n"),o.a.createElement("option",null,"Cualquiera")))),o.a.createElement("div",{className:"custom-control mt-3 text-center",id:"divOtros",style:{display:this.state.otros?"block":"none",width:"100%"}},o.a.createElement("textarea",{rows:"10",id:"descripcion",placeholder:"\xbfQue necesitan?",value:this.state.otrosDescripcion,onChange:this.handleInputChange})),o.a.createElement("div",{className:"custom-control m-3 text",id:"divOtros"},o.a.createElement("textarea",{rows:"10",id:"comentario",placeholder:"Describe el problema de manera detallada...",style:{width:"100%"},value:this.state.comentario,onChange:this.handleInputChange})),o.a.createElement("div",{className:"form-group"},o.a.createElement("div",{id:"map"}),o.a.createElement("button",{className:"btn btn-primary btn-block"},"Reportar!"))))))}}]),t}(o.a.Component);var D=function(){var e=Object(n.useState)({}),a=Object(l.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));e&&e.email&&r(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("user",JSON.stringify(t))}),[t]),o.a.createElement("div",{className:"d-flex flex-column justify-content-between min-vh-100"},o.a.createElement(s.BrowserRouter,null,o.a.createElement(x,{user:[t,r]}),o.a.createElement("section",{id:"main-content"},o.a.createElement(i.g,null,o.a.createElement(i.d,{path:"/",exact:!0,component:b}),o.a.createElement(i.d,{path:"/login",component:function(){return o.a.createElement(w,{user:r})}}),o.a.createElement(i.d,{path:"/register",component:function(){return o.a.createElement(k,{user:r})}}),o.a.createElement(i.d,{path:"/donate",component:v}),o.a.createElement(i.d,{path:"/report",component:B})))),o.a.createElement(O,null))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null)),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.5bc2d811.chunk.js.map