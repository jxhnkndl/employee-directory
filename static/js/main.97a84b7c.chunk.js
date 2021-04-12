(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(13),n=a.n(s),r=(a(24),a(0));var l=function(){return Object(r.jsx)("header",{className:"p-4 mb-3",children:Object(r.jsxs)("h1",{className:"mb-0 text-center text-light",children:["directory",Object(r.jsx)("i",{id:"icon-header-yellow",className:"fas fa-comment-dots ml-2"}),Object(r.jsx)("i",{id:"icon-header-orange",className:"fas fa-comment-dots ml-2"})]})})},i=a(14),o=a(15),d=a(19),m=a(18);var j=function(e){return Object(r.jsx)("div",{className:"container",children:e.children})};var h=function(e){return Object(r.jsx)("div",{className:"form-group py-4",children:Object(r.jsx)("input",{className:"form-control",id:"search",type:"text",name:"search",placeholder:"Search by name or phone number",value:e.value,onChange:e.handleInputChange})})},u=a(4);a(26);var b=function(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),s=a[0],n=a[1],l=Object(c.useState)(!1),i=Object(u.a)(l,2),o=i[0],d=i[1];return Object(r.jsxs)("table",{className:"table table-striped table-responsive-md p-0",children:[Object(r.jsx)("thead",{className:"text-light",children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{id:"col-image",scope:"col",children:Object(r.jsx)("p",{className:"mb-0",children:"Image"})}),Object(r.jsxs)("th",{id:"col-name",onClick:function(){e.handleNameSort(),d(!o)},onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)},scope:"col",children:[Object(r.jsx)("i",{id:"sort-icon",className:"fas fa-sort mr-2"}),Object(r.jsx)("p",{className:"mb-0 d-inline-block",children:"Name"}),s&&o&&Object(r.jsx)("i",{className:"fas fa-sort-alpha-up ml-2"}),s&&!o&&Object(r.jsx)("i",{className:"fas fa-sort-alpha-down ml-2"})]}),Object(r.jsx)("th",{id:"col-phone",scope:"col",children:Object(r.jsx)("p",{className:"mb-0",children:"Phone"})}),Object(r.jsx)("th",{id:"col-email",scope:"col",children:Object(r.jsx)("p",{className:"mb-0 px-2",children:"Email"})}),Object(r.jsx)("th",{id:"col-dob",scope:"col",children:Object(r.jsx)("p",{className:"mb-0",children:"DOB"})})]})}),Object(r.jsx)("tbody",{children:e.children})]})};a(27);var f=function(e){return Object(r.jsxs)("tr",{"data-id":e.id,children:[Object(r.jsx)("th",{scope:"row",className:"align-middle",children:Object(r.jsx)("img",{src:e.image,alt:"Company headshot"})}),Object(r.jsx)("td",{className:"align-middle",children:e.name}),Object(r.jsx)("td",{className:"align-middle",children:e.phone}),Object(r.jsx)("td",{className:"align-middle",children:Object(r.jsx)("a",{className:"p-2",href:"mailto:".concat(e.email),children:e.email})}),Object(r.jsx)("td",{className:"align-middle",children:e.dob})]},e.id)},p=a(16),O=a.n(p),x=function(){return O.a.get("https://randomuser.me/api/?seed=bootcamp&results=50&nat=us")},N=a(17),v=a.n(N),g=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={search:"",results:[],sorted:!1},e.componentDidMount=function(){e.getEmployees()},e.getEmployees=function(){x().then((function(t){t.data.results.forEach((function(e){e.fullName="".concat(e.name.first," ").concat(e.name.last)})),e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.formatDate=function(e){return v()(e).format("MM/DD/YYYY")},e.handleInputChange=function(t){var a=t.target.value;e.setState({search:a})},e.handleNameSort=function(t){if(e.setState({sorted:!0}),e.state.sorted){var a=e.state.results.reverse();e.setState({results:a})}else{var c=e.state.results.sort((function(e,t){return e.fullName<t.fullName?-1:e.fullName>t.fullName?1:0}));e.setState({results:c})}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(r.jsx)("main",{children:Object(r.jsxs)(j,{children:[Object(r.jsx)(h,{value:this.state.search,handleInputChange:this.handleInputChange}),Object(r.jsx)(b,{handleNameSort:this.handleNameSort,children:this.state.results.filter((function(t){var a=t.name.first.toLowerCase(),c=t.cell,s=e.state.search;return s.match(/^[a-zA-Z]+$/)?a.includes(s.toLowerCase()):s.match(/^[0-9]+$/)?c.includes(s):t})).map((function(t,a){return Object(r.jsx)(f,{id:a,image:t.picture.thumbnail,name:t.fullName,phone:t.cell,email:t.email,dob:e.formatDate(t.dob.date)},a)}))})]})})}}]),a}(c.Component);a(46);var y=function(){return Object(r.jsx)("footer",{className:"p-3",children:Object(r.jsxs)("p",{className:"mb-0 text-center text-light",children:[Object(r.jsx)("i",{id:"icon-footer",className:"fas fa-exclamation-circle mr-2"}),"For Interal Use Only"]})})};a(47);var S=function(){return Object(r.jsxs)("div",{id:"app-wrapper",children:[Object(r.jsx)(l,{}),Object(r.jsx)(g,{}),Object(r.jsx)(y,{})]})};n.a.render(Object(r.jsx)(S,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.97a84b7c.chunk.js.map