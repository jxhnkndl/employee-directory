(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{42:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(12),s=n.n(c),r=n(0);var l=function(){return Object(r.jsx)("header",{className:"bg-primary p-3",children:Object(r.jsx)("h1",{className:"h4 mb-0 text-center text-light",children:"Employee Directory"})})},i=n(13),o=n(14),h=n(18),d=n(17);var j=function(e){return Object(r.jsx)("div",{className:"container",children:e.children})};var m=function(e){return console.log(e),Object(r.jsxs)("div",{className:"form-group py-4",children:[Object(r.jsx)("label",{htmlFor:"search",children:"Filter employees by name or phone number:"}),Object(r.jsx)("input",{className:"form-control",id:"search",type:"text",name:"search",placeholder:"Search by name or phone number",value:e.value,onChange:e.handleInputChange})]})},u={image:{width:"10%"},name:{width:"30%"},phone:{width:"20%"},email:{width:"30%"},dob:{width:"10%"}};var b=function(e){return Object(r.jsxs)("table",{className:"table table-hover table-striped p-0",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{style:u.image,scope:"col",children:"Image"}),Object(r.jsx)("th",{style:u.name,scope:"col",children:"Name"}),Object(r.jsx)("th",{style:u.phone,scope:"col",children:"Phone"}),Object(r.jsx)("th",{style:u.email,scope:"col",children:"Email"}),Object(r.jsx)("th",{style:u.dob,scope:"col",children:"DOB"})]})}),Object(r.jsx)("tbody",{children:e.children})]})};var p=function(e){return Object(r.jsxs)("tr",{"data-id":e.id,children:[Object(r.jsx)("th",{scope:"row",className:"align-middle",children:Object(r.jsx)("img",{src:e.image,alt:"Company headshot"})}),Object(r.jsx)("td",{className:"align-middle",children:e.name}),Object(r.jsx)("td",{className:"align-middle",children:e.phone}),Object(r.jsx)("td",{className:"align-middle",children:e.email}),Object(r.jsx)("td",{className:"align-middle",children:e.dob})]},e.id)},O=n(15),x=n.n(O),g=function(){return x.a.get("https://randomuser.me/api/?seed=bootcamp&results=50&nat=us")},f=n(16),v=n.n(f),y=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={search:"",results:[]},e.componentDidMount=function(){e.getEmployees()},e.getEmployees=function(){g().then((function(t){e.setState({results:t.data.results}),console.log(e.state)})).catch((function(e){return console.log(e)}))},e.formatDate=function(e){return v()(e).format("MM/DD/YYYY")},e.handleInputChange=function(t){var n=t.target.value;console.log(n),e.setState({search:n})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsx)("main",{children:Object(r.jsxs)(j,{children:[Object(r.jsx)(m,{value:this.state.search,handleInputChange:this.handleInputChange}),Object(r.jsx)(b,{children:this.state.results.filter((function(t){var n=t.name.first.toLowerCase(),a=t.cell,c=e.state.search;return/^[a-zA-Z]+$/.test(c)?n.includes(c.toLowerCase()):/^[0-9]+$/.test(c)?a.includes(c):t})).map((function(t,n){return Object(r.jsx)(p,{id:n,image:t.picture.thumbnail,name:"".concat(t.name.first," ").concat(t.name.last),phone:t.cell,email:t.email,dob:e.formatDate(t.dob.date)},n)}))})]})})}}]),n}(a.Component);var N=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{}),Object(r.jsx)(y,{})]})};s.a.render(Object(r.jsx)(N,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.716696f3.chunk.js.map