(function(t){function e(e){for(var c,a,l=e[0],i=e[1],u=e[2],b=0,d=[];b<l.length;b++)a=l[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);s&&s(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(c=!1)}c&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var c={},o={app:0},r=[];function a(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=c,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)a.d(n,c,function(e){return t[e]}.bind(null,c));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-next-demo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"08f8":function(t,e,n){},"0f22":function(t,e,n){},"192c":function(t,e,n){},"1afb":function(t,e,n){"use strict";n("a3fe")},"27f7":function(t,e,n){"use strict";n("c5b2")},"2a8c":function(t,e,n){},"2b76":function(t,e,n){"use strict";n("5856")},"341f":function(t,e,n){"use strict";n("b68a")},4363:function(t,e,n){"use strict";n("0f22")},"470f":function(t,e,n){"use strict";n("dcc9")},"4fa3":function(t,e,n){"use strict";n("08f8")},5856:function(t,e,n){},6425:function(t,e,n){"use strict";n("8f2c")},7209:function(t,e,n){},"8d11":function(t,e,n){"use strict";n("9e12")},"8f2c":function(t,e,n){},"9e12":function(t,e,n){},a3fe:function(t,e,n){},a5f0:function(t,e,n){"use strict";n("c77d")},b68a:function(t,e,n){},c544:function(t,e,n){"use strict";n("7209")},c5b2:function(t,e,n){},c5bf:function(t,e,n){"use strict";n("192c")},c77d:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("6d93");var c=n("830f"),o=n("8d09"),r=n("5c40"),a=n("6690"),l={id:"nav"},i=Object(r["k"])("div",{id:"modal-container"},null,-1);function u(t,e){return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["k"])("div",l,[(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.routes,(function(e){return Object(r["r"])(),Object(r["f"])("a",{href:"javascript:;",key:e.path,onClick:function(n){return t.goto(e.path)}},Object(a["B"])(e.path),9,["onClick"])})),128))]),(Object(r["r"])(),Object(r["f"])(Object(r["y"])(t.view))),i])}n("99af"),n("4160"),n("159b");var s=n("a1e9"),b=(n("fb6a"),n("b0c0"),Object(r["G"])("data-v-23069bd8"));Object(r["t"])("data-v-23069bd8");var d={class:"commitsapp"},f=Object(r["k"])("h1",null,"Latest Vue.js Commits",-1),j=Object(r["j"])(" - "),O={class:"message"},p=Object(r["k"])("br",null,null,-1),m=Object(r["j"])(" by "),h={class:"author"},v=Object(r["j"])(" at "),k={class:"date"};Object(r["s"])();var y=b((function(t,e){return Object(r["r"])(),Object(r["f"])("div",d,[f,(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.branches,(function(n){return Object(r["r"])(),Object(r["f"])("div",{key:n},[Object(r["F"])(Object(r["k"])("input",{type:"radio",id:n,value:n,name:"branch","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.currentBranch=e})},null,8,["id","value"]),[[c["e"],t.currentBranch]]),Object(r["k"])("label",{for:n},Object(a["B"])(n),9,["for"])])})),128)),Object(r["k"])("p",null,"vuejs/vue@"+Object(a["B"])(t.currentBranch),1),Object(r["k"])("ul",null,[(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.commits,(function(e){var n=e.html_url,c=e.sha,o=e.author,l=e.commit;return Object(r["r"])(),Object(r["f"])("li",{key:c},[Object(r["k"])("a",{href:n,target:"_blank",class:"commit"},Object(a["B"])(c.slice(0,7)),9,["href"]),j,Object(r["k"])("span",O,Object(a["B"])(t.truncate(l.message)),1),p,m,Object(r["k"])("span",h,[Object(r["k"])("a",{href:o.html_url,target:"_blank"},Object(a["B"])(l.author.name),9,["href"])]),v,Object(r["k"])("span",k,Object(a["B"])(t.formatDate(l.author.date)),1)])})),128))])])})),g=(n("c975"),n("d3b7"),n("ac1f"),n("5319"),"https://api.github.com/repos/vuejs/vue-next/commits?per_page=3&sha="),w=function(t){var e=t.indexOf("\n");return e>0?t.slice(0,e):t},C=function(t){return t.replace(/T|Z/g," ")},x=Object(r["l"])({setup:function(){var t=Object(s["m"])("master"),e=Object(s["m"])(null);return Object(r["D"])((function(){fetch("".concat(g).concat(t.value)).then((function(t){return t.json()})).then((function(t){Array.isArray(t)?e.value=t:e.value=[]}))})),{branches:["master","sync"],currentBranch:t,commits:e,truncate:w,formatDate:C}}});n("1afb");x.render=y,x.__scopeId="data-v-23069bd8";var T=x,B=Object(r["G"])("data-v-71e93230");Object(r["t"])("data-v-71e93230");var _={id:"search"},F=Object(r["j"])(" Search "),D={key:0},E={key:1};Object(r["s"])();var M=B((function(t,e){return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["k"])("form",_,[F,Object(r["F"])(Object(r["k"])("input",{name:"query","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.filterKey=e})},null,512),[[c["f"],t.filterKey]])]),t.filteredData.length?(Object(r["r"])(),Object(r["f"])("table",D,[Object(r["k"])("thead",null,[Object(r["k"])("tr",null,[(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.columns,(function(e){return Object(r["r"])(),Object(r["f"])("th",{key:e,onClick:function(n){return t.sortBy(e)},class:{active:t.state.sortKey==e}},[Object(r["j"])(Object(a["B"])(t.capitalize(e))+" ",1),Object(r["k"])("span",{class:["arrow",t.state.sortOrders[e]>0?"asc":"dsc"]},null,2)],10,["onClick"])})),128))])]),Object(r["k"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.filteredData,(function(e,n){return Object(r["r"])(),Object(r["f"])("tr",{key:n},[(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.columns,(function(t){return Object(r["r"])(),Object(r["f"])("td",{key:n+t},Object(a["B"])(e[t]),1)})),128))])})),128))])])):(Object(r["r"])(),Object(r["f"])("p",E,"No matches found."))])})),L=(n("4de4"),n("13d5"),n("45fc"),n("4e82"),n("b64b"),function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),U=Object(r["l"])({setup:function(){var t=Object(s["m"])(""),e=Object(s["k"])(["name","power"]),n=Object(s["k"])([{name:"Chuck Norris",power:1/0},{name:"Bruce Lee",power:9e3},{name:"Jackie Chan",power:7e3},{name:"Jet Li",power:8e3}]),c=Object(s["k"])({sortKey:"",sortOrders:e.reduce((function(t,e){return t[e]=1,t}),{})}),o=Object(r["e"])((function(){var e=n;if(t.value){var o=t.value.toLowerCase();e=e.filter((function(t){return Object.keys(t).some((function(e){return String(t[e]).toLowerCase().indexOf(o)>-1}))}))}var r=c.sortKey;if(r){var a=c.sortOrders[r];e=e.slice().sort((function(t,e){return t=t[r],e=e[r],(t===e?0:t>e?1:-1)*a}))}return e}));function a(t){c.sortKey=t,c.sortOrders[t]*=-1}return{filterKey:t,columns:e,data:n,state:c,filteredData:o,sortBy:a,capitalize:L}}});n("470f");U.render=M,U.__scopeId="data-v-71e93230";var V=U,I=Object(r["G"])("data-v-363e4682");Object(r["t"])("data-v-363e4682");var K={id:"editor"};Object(r["s"])();var S=I((function(t,e){return Object(r["r"])(),Object(r["f"])("div",K,[Object(r["k"])("textarea",{value:t.input,onInput:e[1]||(e[1]=function(){return t.update.apply(t,arguments)})},null,40,["value"]),Object(r["k"])("div",{innerHTML:t.output},null,8,["innerHTML"])])})),A=n("2ef0"),N=n.n(A),P=n("0e54"),G=n.n(P),J="#test"===window.location.hash?16:300,z=Object(r["l"])({setup:function(){var t=Object(s["m"])("# hello"),e=Object(r["e"])((function(){return G()(t.value,{sanitize:!0})})),n=N.a.debounce((function(e){t.value=e.target.value}),J);return{input:t,output:e,update:n}}});n("a5f0");z.render=S,z.__scopeId="data-v-363e4682";var $=z,H={class:"svgapp"},q={width:"200",height:"200"},R={id:"add"},W={id:"raw"};function X(t,e){var n=Object(r["w"])("polygraph");return Object(r["r"])(),Object(r["f"])("div",H,[(Object(r["r"])(),Object(r["f"])("svg",q,[Object(r["k"])(n,{stats:t.stats},null,8,["stats"])])),(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.stats,(function(e){return Object(r["r"])(),Object(r["f"])("div",{key:e.label},[Object(r["k"])("label",null,Object(a["B"])(e.label),1),Object(r["F"])(Object(r["k"])("input",{type:"range","onUpdate:modelValue":function(t){return e.value=t},min:"0",max:"100"},null,8,["onUpdate:modelValue"]),[[c["f"],e.value]]),Object(r["k"])("span",null,Object(a["B"])(e.value),1),Object(r["k"])("button",{onClick:function(n){return t.remove(e)},class:"remove"},"X",8,["onClick"])])})),128)),Object(r["k"])("form",R,[Object(r["F"])(Object(r["k"])("input",{name:"newlabel","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.newLabel=e})},null,512),[[c["f"],t.newLabel]]),Object(r["k"])("button",{onClick:e[2]||(e[2]=function(){return t.add.apply(t,arguments)})},"Add a Stat")]),Object(r["k"])("pre",W,Object(a["B"])(t.stats),1)])}n("a434");var Y=Object(r["k"])("circle",{cx:"100",cy:"100",r:"80"},null,-1);function Z(t,e){var n=Object(r["w"])("axis-label");return Object(r["r"])(),Object(r["f"])("g",null,[Object(r["k"])("polygon",{points:t.points},null,8,["points"]),Y,(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.stats,(function(e,c){return Object(r["r"])(),Object(r["f"])(n,{key:c,stat:e,index:c,total:t.stats.length},null,8,["stat","index","total"])})),128))])}n("a15b"),n("d81d");function Q(t,e){return Object(r["r"])(),Object(r["f"])("text",{x:t.point.x,y:t.point.y},Object(a["B"])(t.stat.label),9,["x","y"])}n("a9e3");function tt(t,e,n){var c=0,o=.8*-t,r=2*Math.PI/n*e,a=Math.cos(r),l=Math.sin(r),i=c*a-o*l+100,u=c*l+o*a+100;return{x:i,y:u}}var et=Object(r["l"])({props:{stat:Object,index:Number,total:Number},setup:function(t){return{point:Object(r["e"])((function(){return tt(+t.stat.value+10,t.index,t.total)}))}}});et.render=Q;var nt=et,ct=Object(r["l"])({props:["stats"],setup:function(t){return{points:Object(r["e"])((function(){var e=t.stats.length;return t.stats.map((function(t,n){var c=tt(t.value,n,e);return c.x+","+c.y})).join(" ")}))}},components:{AxisLabel:nt}});ct.render=Z;var ot=ct,rt=[{label:"A",value:100},{label:"B",value:100},{label:"C",value:100},{label:"D",value:100},{label:"E",value:100},{label:"F",value:100}],at=Object(r["l"])({components:{Polygraph:ot},setup:function(){var t=Object(s["m"])(""),e=Object(s["k"])(rt);function n(n){n.preventDefault(),t.value&&(e.push({label:t.value,value:100}),t.value="")}function c(t){e.length>3?e.splice(e.indexOf(t),1):alert("Can't delete more!")}return{newLabel:t,stats:e,add:n,remove:c}}});n("f11e");at.render=X;var lt=at,it=Object(r["G"])("data-v-5efb4f00");Object(r["t"])("data-v-5efb4f00");var ut={class:"todoapp"},st={class:"header"},bt=Object(r["k"])("h1",null,"todos",-1),dt={class:"main"},ft=Object(r["k"])("label",{for:"toggle-all"},"Mark all as complete",-1),jt={class:"todo-list"},Ot={class:"view"},pt={class:"footer"},mt={class:"todo-count"},ht={class:"filters"};Object(r["s"])();var vt=it((function(t,e){var n=Object(r["x"])("todo-focus");return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["k"])("section",ut,[Object(r["k"])("header",st,[bt,Object(r["F"])(Object(r["k"])("input",{class:"new-todo",autofocus:"",autocomplete:"off",placeholder:"What needs to be done?","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.state.newTodo=e}),onKeyup:e[2]||(e[2]=Object(c["h"])((function(){return t.addTodo.apply(t,arguments)}),["enter"]))},null,544),[[c["f"],t.state.newTodo]])]),Object(r["F"])(Object(r["k"])("section",dt,[Object(r["F"])(Object(r["k"])("input",{id:"toggle-all",class:"toggle-all",type:"checkbox","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.state.allDone=e})},null,512),[[c["d"],t.state.allDone]]),ft,Object(r["k"])("ul",jt,[(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.state.filteredTodos,(function(e){return Object(r["r"])(),Object(r["f"])("li",{class:["todo",{completed:e.completed,editing:e===t.state.editedTodo}],key:e.id},[Object(r["k"])("div",Ot,[Object(r["F"])(Object(r["k"])("input",{class:"toggle",type:"checkbox","onUpdate:modelValue":function(t){return e.completed=t}},null,8,["onUpdate:modelValue"]),[[c["d"],e.completed]]),Object(r["k"])("label",{onDblclick:function(n){return t.editTodo(e)}},Object(a["B"])(e.title),41,["onDblclick"]),Object(r["k"])("button",{class:"destroy",onClick:function(n){return t.removeTodo(e)}},null,8,["onClick"])]),Object(r["F"])(Object(r["k"])("input",{class:"edit",type:"text","onUpdate:modelValue":function(t){return e.title=t},onBlur:function(n){return t.doneEdit(e)},onKeyup:[Object(c["h"])((function(n){return t.doneEdit(e)}),["enter"]),Object(c["h"])((function(n){return t.cancelEdit(e)}),["escape"])]},null,40,["onUpdate:modelValue","onBlur","onKeyup"]),[[c["f"],e.title],[n,e===t.state.editedTodo]])],2)})),128))])],512),[[c["g"],t.state.todos.length]]),Object(r["F"])(Object(r["k"])("footer",pt,[Object(r["k"])("span",mt,[Object(r["k"])("strong",null,Object(a["B"])(t.state.remaining),1),Object(r["k"])("span",null,Object(a["B"])(t.state.remainingText),1)]),Object(r["k"])("ul",ht,[Object(r["k"])("li",null,[Object(r["k"])("a",{href:"javascript:;",onClick:e[4]||(e[4]=function(e){return t.state.visibility="all"}),class:{selected:"all"===t.state.visibility}},"All",2)]),Object(r["k"])("li",null,[Object(r["k"])("a",{href:"javascript:;",onClick:e[5]||(e[5]=function(e){return t.state.visibility="active"}),class:{selected:"active"===t.state.visibility}},"Active",2)]),Object(r["k"])("li",null,[Object(r["k"])("a",{href:"javascript:;",onClick:e[6]||(e[6]=function(e){return t.state.visibility="completed"}),class:{selected:"completed"===t.state.visibility}},"Completed",2)])]),Object(r["F"])(Object(r["k"])("button",{class:"clear-completed",onClick:e[7]||(e[7]=function(){return t.removeCompleted.apply(t,arguments)})}," Clear completed ",512),[[c["g"],t.state.todos.length>t.state.remaining]])],512),[[c["g"],t.state.todos.length]])])])})),kt=(n("498a"),"todos-vuejs-3.x"),yt={fetch:function(){var t=JSON.parse(localStorage.getItem(kt)||"[]");return t.forEach((function(t,e){t.id=e})),yt.uid=t.length,t},save:function(t){localStorage.setItem(kt,JSON.stringify(t))}},gt={all:function(t){return t},active:function(t){return t.filter((function(t){return!t.completed}))},completed:function(t){return t.filter((function(t){return t.completed}))}};function wt(t){return 1===t?"item":"items"}var Ct=Object(r["l"])({setup:function(){var t=Object(s["k"])({todos:yt.fetch(),editedTodo:null,newTodo:"",beforeEditCache:"",visibility:"all",remaining:Object(r["e"])((function(){return gt.active(t.todos).length})),remainingText:Object(r["e"])((function(){return" ".concat(wt(t.remaining)," left")})),filteredTodos:Object(r["e"])((function(){return gt[t.visibility](t.todos)})),allDone:Object(r["e"])({get:function(){return 0===t.remaining},set:function(e){t.todos.forEach((function(t){t.completed=e}))}})});function e(){var e=t.newTodo&&t.newTodo.trim();e&&(t.todos.push({id:yt.uid++,title:e,completed:!1}),t.newTodo="")}function n(e){t.todos.splice(t.todos.indexOf(e),1)}function c(e){t.beforeEditCache=e.title,t.editedTodo=e}function o(e){t.editedTodo&&(t.editedTodo=null,e.title=e.title.trim(),e.title||n(e))}function a(e){t.editedTodo=null,e.title=t.beforeEditCache}function l(){t.todos=gt.active(t.todos)}return Object(r["D"])((function(){yt.save(t.todos)})),{state:t,addTodo:e,removeTodo:n,editTodo:c,doneEdit:o,cancelEdit:a,removeCompleted:l}},directives:{"todo-focus":function(t,e){var n=e.value;n&&t.focus()}}});n("e7b1");Ct.render=vt,Ct.__scopeId="data-v-5efb4f00";var xt=Ct,Tt=Object(r["G"])("data-v-a3f9f1ea");Object(r["t"])("data-v-a3f9f1ea");var Bt=Object(r["k"])("p",null,"(You can double click on an item to turn it into a folder.)",-1),_t={id:"demo"};Object(r["s"])();var Ft=Tt((function(t,e){var n=Object(r["w"])("tree-item");return Object(r["r"])(),Object(r["f"])("div",null,[Bt,Object(r["k"])("ul",_t,[Object(r["k"])(n,{class:"item",model:t.treeData},null,8,["model"])])])})),Dt={key:0},Et={key:0};function Mt(t,e){var n=Object(r["w"])("tree-item");return Object(r["r"])(),Object(r["f"])("li",null,[Object(r["k"])("div",{class:{bold:t.isFolder},onClick:e[1]||(e[1]=function(){return t.toggle.apply(t,arguments)}),onDblclick:e[2]||(e[2]=function(){return t.changeType.apply(t,arguments)})},[Object(r["j"])(Object(a["B"])(t.model.name)+" ",1),t.isFolder?(Object(r["r"])(),Object(r["f"])("span",Dt,"["+Object(a["B"])(t.open?"-":"+")+"]",1)):Object(r["g"])("",!0)],34),t.isFolder?Object(r["F"])((Object(r["r"])(),Object(r["f"])("ul",Et,[(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.model.children,(function(t,e){return Object(r["r"])(),Object(r["f"])(n,{class:"item",key:e,model:t},null,8,["model"])})),128)),Object(r["k"])("li",{class:"add",onClick:e[3]||(e[3]=function(){return t.addChild.apply(t,arguments)})},"+")],512)),[[c["g"],t.open]]):Object(r["g"])("",!0)])}var Lt=n("5530"),Ut=n("bae6"),Vt=Object(r["l"])({name:"TreeItem",props:{model:{type:Object,required:!0}},setup:function(t){var e=Object(s["k"])({open:!1,isFolder:Object(r["e"])((function(){return Object(Ut["a"])(t.model,["children","length"])}))});function n(){e.open=!e.open}function c(){t.model.children.push({name:"new stuff"})}function o(){e.isFolder||(Object(Ut["b"])(t.model,"children",[]),c(),e.open=!0)}return Object(Lt["a"])(Object(Lt["a"])({},Object(s["r"])(e)),{},{toggle:n,changeType:o,addChild:c})}});Vt.render=Mt;var It=Vt,Kt={name:"My Tree",children:[{name:"hello"},{name:"wat2"},{name:"child folder",children:[{name:"child folder",children:[{name:"hello"},{name:"wat"}]},{name:"hello"},{name:"wat"},{name:"child folder",children:[{name:"hello"},{name:"wat"}]}]}]},St=Object(r["l"])({components:{TreeItem:It},data:function(){return{treeData:Kt}}});n("fe39");St.render=Ft,St.__scopeId="data-v-a3f9f1ea";var At=St,Nt=[{path:"/composition/commits",component:T},{path:"/composition/grid",component:V},{path:"/composition/markdown",component:$},{path:"/composition/svg",component:lt},{path:"/composition/todomvc",component:xt},{path:"/composition/tree",component:At}],Pt=Object(r["G"])("data-v-53f89832");Object(r["t"])("data-v-53f89832");var Gt={class:"commitsapp"},Jt=Object(r["k"])("h1",null,"Latest Vue.js Commits",-1),zt=Object(r["j"])(" - "),$t={class:"message"},Ht=Object(r["k"])("br",null,null,-1),qt=Object(r["j"])(" by "),Rt={class:"author"},Wt=Object(r["j"])(" at "),Xt={class:"date"};Object(r["s"])();var Yt=Pt((function(t,e){return Object(r["r"])(),Object(r["f"])("div",Gt,[Jt,(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.branches,(function(n){return Object(r["r"])(),Object(r["f"])("div",{key:n},[Object(r["F"])(Object(r["k"])("input",{type:"radio",id:n,value:n,name:"branch","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.currentBranch=e})},null,8,["id","value"]),[[c["e"],t.currentBranch]]),Object(r["k"])("label",{for:n},Object(a["B"])(n),9,["for"])])})),128)),Object(r["k"])("p",null,"vuejs/vue@"+Object(a["B"])(t.currentBranch),1),Object(r["k"])("ul",null,[(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.commits,(function(e){var n=e.html_url,c=e.sha,o=e.author,l=e.commit;return Object(r["r"])(),Object(r["f"])("li",{key:c},[Object(r["k"])("a",{href:n,target:"_blank",class:"commit"},Object(a["B"])(c.slice(0,7)),9,["href"]),zt,Object(r["k"])("span",$t,Object(a["B"])(t.truncate(l.message)),1),Ht,qt,Object(r["k"])("span",Rt,[Object(r["k"])("a",{href:o.html_url,target:"_blank"},Object(a["B"])(l.author.name),9,["href"])]),Wt,Object(r["k"])("span",Xt,Object(a["B"])(t.formatDate(l.author.date)),1)])})),128))])])})),Zt="https://api.github.com/repos/vuejs/vue-next/commits?per_page=3&sha=",Qt=Object(r["l"])({data:function(){return{branches:["master","sync"],currentBranch:"master",commits:[]}},created:function(){this.fetchData()},watch:{currentBranch:"fetchData"},methods:{fetchData:function(){var t=this;fetch("".concat(Zt).concat(this.currentBranch)).then((function(t){return t.json()})).then((function(e){Array.isArray(e)?t.commits=e:t.commits=[]}))},truncate:function(t){var e=t.indexOf("\n");return e>0?t.slice(0,e):t},formatDate:function(t){return t.replace(/T|Z/g," ")}}});n("8d11");Qt.render=Yt,Qt.__scopeId="data-v-53f89832";var te=Qt,ee=Object(r["G"])("data-v-6fdb4342");Object(r["t"])("data-v-6fdb4342");var ne={id:"search"},ce=Object(r["j"])(" Search "),oe={key:0},re={key:1};Object(r["s"])();var ae=ee((function(t,e){return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["k"])("form",ne,[ce,Object(r["F"])(Object(r["k"])("input",{name:"query","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.filterKey=e})},null,512),[[c["f"],t.filterKey]])]),t.filteredData.length?(Object(r["r"])(),Object(r["f"])("table",oe,[Object(r["k"])("thead",null,[Object(r["k"])("tr",null,[(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.columns,(function(e){return Object(r["r"])(),Object(r["f"])("th",{key:e,onClick:function(n){return t.sortBy(e)},class:{active:t.state.sortKey==e}},[Object(r["j"])(Object(a["B"])(t.capitalize(e))+" ",1),Object(r["k"])("span",{class:["arrow",t.state.sortOrders[e]>0?"asc":"dsc"]},null,2)],10,["onClick"])})),128))])]),Object(r["k"])("tbody",null,[(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.filteredData,(function(e,n){return Object(r["r"])(),Object(r["f"])("tr",{key:n},[(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.columns,(function(t){return Object(r["r"])(),Object(r["f"])("td",{key:n+t},Object(a["B"])(e[t]),1)})),128))])})),128))])])):(Object(r["r"])(),Object(r["f"])("p",re,"No matches found."))])})),le=Object(r["l"])({data:function(){var t=["name","power"];return{filterKey:"",columns:t,data:[{name:"Chuck Norris",power:1/0},{name:"Bruce Lee",power:9e3},{name:"Jackie Chan",power:7e3},{name:"Jet Li",power:8e3}],state:{sortKey:"",sortOrders:t.reduce((function(t,e){return t[e]=1,t}),{})}}},computed:{filteredData:function(){var t=this.data,e=this.state;if(this.filterKey){var n=this.filterKey.toLowerCase();t=t.filter((function(t){return Object.keys(t).some((function(e){return String(t[e]).toLowerCase().indexOf(n)>-1}))}))}var c=e.sortKey;if(c){var o=e.sortOrders[c];t=t.slice().sort((function(t,e){return t=t[c],e=e[c],(t===e?0:t>e?1:-1)*o}))}return t}},methods:{sortBy:function(t){this.state.sortKey=t,this.state.sortOrders[t]*=-1},capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}});n("27f7");le.render=ae,le.__scopeId="data-v-6fdb4342";var ie=le,ue=Object(r["G"])("data-v-5e895898");Object(r["t"])("data-v-5e895898");var se={id:"editor"};Object(r["s"])();var be=ue((function(t,e){return Object(r["r"])(),Object(r["f"])("div",se,[Object(r["k"])("textarea",{value:t.input,onInput:e[1]||(e[1]=function(){return t.update.apply(t,arguments)})},null,40,["value"]),Object(r["k"])("div",{innerHTML:t.output},null,8,["innerHTML"])])})),de="#test"===window.location.hash?16:300,fe={data:function(){return{input:"# hello"}},computed:{output:function(){return G()(this.input,{sanitize:!0})}},methods:{update:N.a.debounce((function(t){this.input=t.target.value}),de)}};n("2b76");fe.render=be,fe.__scopeId="data-v-5e895898";var je=fe,Oe={class:"svgapp"},pe={width:"200",height:"200"},me={id:"add"},he={id:"raw"};function ve(t,e){var n=Object(r["w"])("polygraph");return Object(r["r"])(),Object(r["f"])("div",Oe,[(Object(r["r"])(),Object(r["f"])("svg",pe,[Object(r["k"])(n,{stats:t.stats},null,8,["stats"])])),(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.stats,(function(e){return Object(r["r"])(),Object(r["f"])("div",{key:e.label},[Object(r["k"])("label",null,Object(a["B"])(e.label),1),Object(r["F"])(Object(r["k"])("input",{type:"range","onUpdate:modelValue":function(t){return e.value=t},min:"0",max:"100"},null,8,["onUpdate:modelValue"]),[[c["f"],e.value]]),Object(r["k"])("span",null,Object(a["B"])(e.value),1),Object(r["k"])("button",{onClick:function(n){return t.remove(e)},class:"remove"},"X",8,["onClick"])])})),128)),Object(r["k"])("form",me,[Object(r["F"])(Object(r["k"])("input",{name:"newlabel","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.newLabel=e})},null,512),[[c["f"],t.newLabel]]),Object(r["k"])("button",{onClick:e[2]||(e[2]=function(){return t.add.apply(t,arguments)})},"Add a Stat")]),Object(r["k"])("pre",he,Object(a["B"])(t.stats),1)])}var ke=Object(r["k"])("circle",{cx:"100",cy:"100",r:"80"},null,-1);function ye(t,e){var n=Object(r["w"])("axis-label");return Object(r["r"])(),Object(r["f"])("g",null,[Object(r["k"])("polygon",{points:t.points},null,8,["points"]),ke,(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.stats,(function(e,c){return Object(r["r"])(),Object(r["f"])(n,{key:c,stat:e,index:c,total:t.stats.length},null,8,["stat","index","total"])})),128))])}function ge(t,e){return Object(r["r"])(),Object(r["f"])("text",{x:t.point.x,y:t.point.y},Object(a["B"])(t.stat.label),9,["x","y"])}function we(t,e,n){var c=0,o=.8*-t,r=2*Math.PI/n*e,a=Math.cos(r),l=Math.sin(r),i=c*a-o*l+100,u=c*l+o*a+100;return{x:i,y:u}}var Ce=Object(r["l"])({props:{stat:Object,index:Number,total:Number},computed:{point:function(){return we(+this.stat.value+10,this.index,this.total)}}});Ce.render=ge;var xe=Ce,Te=Object(r["l"])({props:["stats"],computed:{points:function(){var t=this.stats.length;return this.stats.map((function(e,n){var c=we(e.value,n,t);return c.x+","+c.y})).join(" ")}},components:{AxisLabel:xe}});Te.render=ye;var Be=Te,_e=[{label:"A",value:100},{label:"B",value:100},{label:"C",value:100},{label:"D",value:100},{label:"E",value:100},{label:"F",value:100}],Fe=Object(r["l"])({components:{Polygraph:Be},data:function(){return{newLabel:"",stats:_e}},methods:{add:function(t){t.preventDefault(),this.newLabel&&(this.stats.push({label:this.newLabel,value:100}),this.newLabel="")},remove:function(t){this.stats.length>3?this.stats.splice(this.stats.indexOf(t),1):alert("Can't delete more!")}}});n("c5bf");Fe.render=ve;var De=Fe,Ee=Object(r["G"])("data-v-662aff09");Object(r["t"])("data-v-662aff09");var Me={class:"todoapp"},Le={class:"header"},Ue=Object(r["k"])("h1",null,"todos",-1),Ve={class:"main"},Ie=Object(r["k"])("label",{for:"toggle-all"},"Mark all as complete",-1),Ke={class:"todo-list"},Se={class:"view"},Ae={class:"footer"},Ne={class:"todo-count"},Pe={class:"filters"};Object(r["s"])();var Ge=Ee((function(t,e){var n=Object(r["x"])("todo-focus");return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["k"])("section",Me,[Object(r["k"])("header",Le,[Ue,Object(r["F"])(Object(r["k"])("input",{class:"new-todo",autofocus:"",autocomplete:"off",placeholder:"What needs to be done?","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.newTodo=e}),onKeyup:e[2]||(e[2]=Object(c["h"])((function(){return t.addTodo.apply(t,arguments)}),["enter"]))},null,544),[[c["f"],t.newTodo]])]),Object(r["F"])(Object(r["k"])("section",Ve,[Object(r["F"])(Object(r["k"])("input",{id:"toggle-all",class:"toggle-all",type:"checkbox","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.allDone=e})},null,512),[[c["d"],t.allDone]]),Ie,Object(r["k"])("ul",Ke,[(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.filteredTodos,(function(e){return Object(r["r"])(),Object(r["f"])("li",{class:["todo",{completed:e.completed,editing:e===t.editedTodo}],key:e.id},[Object(r["k"])("div",Se,[Object(r["F"])(Object(r["k"])("input",{class:"toggle",type:"checkbox","onUpdate:modelValue":function(t){return e.completed=t}},null,8,["onUpdate:modelValue"]),[[c["d"],e.completed]]),Object(r["k"])("label",{onDblclick:function(n){return t.editTodo(e)}},Object(a["B"])(e.title),41,["onDblclick"]),Object(r["k"])("button",{class:"destroy",onClick:function(n){return t.removeTodo(e)}},null,8,["onClick"])]),Object(r["F"])(Object(r["k"])("input",{class:"edit",type:"text","onUpdate:modelValue":function(t){return e.title=t},onBlur:function(n){return t.doneEdit(e)},onKeyup:[Object(c["h"])((function(n){return t.doneEdit(e)}),["enter"]),Object(c["h"])((function(n){return t.cancelEdit(e)}),["escape"])]},null,40,["onUpdate:modelValue","onBlur","onKeyup"]),[[c["f"],e.title],[n,e===t.editedTodo]])],2)})),128))])],512),[[c["g"],t.todos.length]]),Object(r["F"])(Object(r["k"])("footer",Ae,[Object(r["k"])("span",Ne,[Object(r["k"])("strong",null,Object(a["B"])(t.remaining),1),Object(r["k"])("span",null,Object(a["B"])(t.remainingText),1)]),Object(r["k"])("ul",Pe,[Object(r["k"])("li",null,[Object(r["k"])("a",{href:"javascript:;",onClick:e[4]||(e[4]=function(e){return t.visibility="all"}),class:{selected:"all"===t.visibility}},"All",2)]),Object(r["k"])("li",null,[Object(r["k"])("a",{href:"javascript:;",onClick:e[5]||(e[5]=function(e){return t.visibility="active"}),class:{selected:"active"===t.visibility}},"Active",2)]),Object(r["k"])("li",null,[Object(r["k"])("a",{href:"javascript:;",onClick:e[6]||(e[6]=function(e){return t.visibility="completed"}),class:{selected:"completed"===t.visibility}},"Completed",2)])]),Object(r["F"])(Object(r["k"])("button",{class:"clear-completed",onClick:e[7]||(e[7]=function(){return t.removeCompleted.apply(t,arguments)})}," Clear completed ",512),[[c["g"],t.todos.length>t.remaining]])],512),[[c["g"],t.todos.length]])])])})),Je="todos-vuejs-3.x",ze={fetch:function(){var t=JSON.parse(localStorage.getItem(Je)||"[]");return t.forEach((function(t,e){t.id=e})),ze.uid=t.length,t},save:function(t){localStorage.setItem(Je,JSON.stringify(t))}},$e={all:function(t){return t},active:function(t){return t.filter((function(t){return!t.completed}))},completed:function(t){return t.filter((function(t){return t.completed}))}};function He(t){return 1===t?"item":"items"}var qe=Object(r["l"])({data:function(){return{todos:ze.fetch(),editedTodo:null,newTodo:"",beforeEditCache:"",visibility:"all"}},computed:{remaining:function(){return $e.active(this.todos).length},remainingText:function(){return" ".concat(He(this.remaining)," left")},filteredTodos:function(){return $e[this.visibility](this.todos)},allDone:{get:function(){return 0===this.remaining},set:function(t){this.todos.forEach((function(e){e.completed=t}))}}},watch:{todos:function(){ze.save(this.todos)}},methods:{addTodo:function(){var t=this.newTodo&&this.newTodo.trim();t&&(this.todos.push({id:ze.uid++,title:t,completed:!1}),this.newTodo="")},removeTodo:function(t){this.todos.splice(this.todos.indexOf(t),1)},editTodo:function(t){this.beforeEditCache=t.title,this.editedTodo=t},doneEdit:function(t){this.editedTodo&&(this.editedTodo=null,t.title=t.title.trim(),t.title||this.removeTodo(t))},cancelEdit:function(t){this.editedTodo=null,t.title=this.beforeEditCache},removeCompleted:function(){this.todos=$e.active(this.todos)}},directives:{"todo-focus":function(t,e){var n=e.value;n&&t.focus()}}});n("c544");qe.render=Ge,qe.__scopeId="data-v-662aff09";var Re=qe,We=Object(r["G"])("data-v-20333cef");Object(r["t"])("data-v-20333cef");var Xe=Object(r["k"])("p",null,"(You can double click on an item to turn it into a folder.)",-1),Ye={id:"demo"};Object(r["s"])();var Ze=We((function(t,e){var n=Object(r["w"])("tree-item");return Object(r["r"])(),Object(r["f"])("div",null,[Xe,Object(r["k"])("ul",Ye,[Object(r["k"])(n,{class:"item",model:t.treeData},null,8,["model"])])])})),Qe={key:0},tn={key:0};function en(t,e){var n=Object(r["w"])("tree-item");return Object(r["r"])(),Object(r["f"])("li",null,[Object(r["k"])("div",{class:{bold:t.isFolder},onClick:e[1]||(e[1]=function(){return t.toggle.apply(t,arguments)}),onDblclick:e[2]||(e[2]=function(){return t.changeType.apply(t,arguments)})},[Object(r["j"])(Object(a["B"])(t.model.name)+" ",1),t.isFolder?(Object(r["r"])(),Object(r["f"])("span",Qe,"["+Object(a["B"])(t.open?"-":"+")+"]",1)):Object(r["g"])("",!0)],34),t.isFolder?Object(r["F"])((Object(r["r"])(),Object(r["f"])("ul",tn,[(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.model.children,(function(t,e){return Object(r["r"])(),Object(r["f"])(n,{class:"item",key:e,model:t},null,8,["model"])})),128)),Object(r["k"])("li",{class:"add",onClick:e[3]||(e[3]=function(){return t.addChild.apply(t,arguments)})},"+")],512)),[[c["g"],t.open]]):Object(r["g"])("",!0)])}var nn=Object(r["l"])({name:"TreeItem",props:{model:Object},data:function(){return{open:!1}},computed:{isFolder:function(){return Object(Ut["a"])(this.model,"children.length")}},methods:{toggle:function(){this.open=!this.open},addChild:function(){this.model.children.push({name:"new stuff"})},changeType:function(){this.isFolder||(Object(Ut["b"])(this.model,"children",[]),this.addChild(),this.open=!0)}}});nn.render=en;var cn=nn,on={name:"My Tree",children:[{name:"hello"},{name:"wat"},{name:"child folder",children:[{name:"child folder",children:[{name:"hello"},{name:"wat"}]},{name:"hello"},{name:"wat"},{name:"child folder",children:[{name:"hello"},{name:"wat"}]}]}]},rn=Object(r["l"])({components:{TreeItem:cn},data:function(){return{treeData:on}}});n("341f");rn.render=Ze,rn.__scopeId="data-v-20333cef";var an=rn,ln=[{path:"/classic/commits",component:te},{path:"/classic/grid",component:ie},{path:"/classic/markdown",component:je},{path:"/classic/svg",component:De},{path:"/classic/todomvc",component:Re},{path:"/classic/tree",component:an}],un={class:"listapp"};function sn(t,e){var n=Object(r["w"])("item");return Object(r["r"])(),Object(r["f"])("div",un,[Object(r["k"])("button",{onClick:e[1]||(e[1]=function(){return t.insert.apply(t,arguments)})},"insert at random index"),Object(r["k"])("button",{onClick:e[2]||(e[2]=function(){return t.reset.apply(t,arguments)})},"reset"),Object(r["k"])("button",{onClick:e[3]||(e[3]=function(){return t.shuffle.apply(t,arguments)})},"shuffle"),Object(r["k"])(c["b"],{tag:"ul",name:"fade",class:"container"},{default:Object(r["E"])((function(){return[(Object(r["r"])(!0),Object(r["f"])(r["b"],null,Object(r["u"])(t.items,(function(e){return Object(r["r"])(),Object(r["f"])(n,{class:"item",msg:e,key:e,onRm:function(n){return t.remove(e)}},null,8,["msg","onRm"])})),128))]})),_:1})])}function bn(t,e){return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["j"])(Object(a["B"])(t.msg)+" ",1),Object(r["k"])("button",{onClick:e[1]||(e[1]=function(e){return t.$emit("rm")})},"x")])}var dn={props:["msg"]};dn.render=bn;var fn=dn,jn=function(){return[1,2,3,4,5]},On=jn().length+1,pn=Object(r["l"])({components:{Item:fn},data:function(){return{items:jn()}},methods:{insert:function(){var t=Math.round(Math.random()*this.items.length);this.items.splice(t,0,On++)},reset:function(){this.items=jn()},shuffle:function(){this.items=N.a.shuffle(this.items)},remove:function(t){var e=this.items.indexOf(t);e>-1&&this.items.splice(e,1)}}});n("4363");pn.render=sn;var mn=pn,hn=Object(r["k"])("h3",null,"custom header",-1);function vn(t,e){var n=Object(r["w"])("modal");return Object(r["r"])(),Object(r["f"])("div",null,[Object(r["k"])("div",null,[Object(r["k"])("button",{id:"show-modal",onClick:e[1]||(e[1]=function(e){return t.showModal=!0})},"Show Modal"),(Object(r["r"])(),Object(r["f"])(r["c"],{to:"#modal-container"},[Object(r["k"])(n,{show:t.showModal,onClose:e[2]||(e[2]=function(e){return t.showModal=!1})},{header:Object(r["E"])((function(){return[hn]})),_:1},8,["show"])]))])])}var kn={key:0,class:"modal-mask"},yn={class:"modal-wrapper"},gn={class:"modal-container"},wn={class:"modal-header"},Cn=Object(r["j"])(" default header "),xn={class:"modal-body"},Tn=Object(r["j"])(" default body "),Bn={class:"modal-footer"},_n=Object(r["j"])(" default footer ");function Fn(t,e){return Object(r["r"])(),Object(r["f"])(c["a"],{name:"modal"},{default:Object(r["E"])((function(){return[t.show?(Object(r["r"])(),Object(r["f"])("div",kn,[Object(r["k"])("div",yn,[Object(r["k"])("div",gn,[Object(r["k"])("div",wn,[Object(r["v"])(t.$slots,"header",{},(function(){return[Cn]}))]),Object(r["k"])("div",xn,[Object(r["v"])(t.$slots,"body",{},(function(){return[Tn]}))]),Object(r["k"])("div",Bn,[Object(r["v"])(t.$slots,"footer",{},(function(){return[_n,Object(r["k"])("button",{class:"modal-default-button",onClick:e[1]||(e[1]=function(e){return t.$emit("close")})}," OK ")]}))])])])])):Object(r["g"])("",!0)]})),_:1})}var Dn={props:["show"]},En=Dn;En.render=Fn;var Mn=En,Ln={components:{Modal:Mn},data:function(){return{showModal:!1}}};n("4fa3");Ln.render=vn;var Un=Ln,Vn=[{path:"/transition/list",component:mn},{path:"/transition/modal",component:Un}],In=Object(r["l"])({setup:function(){var t=Object(s["m"])("/"),e=Object(s["k"])(Object(s["h"])([{path:"/"}].concat(Nt,ln,Vn))),n=Object(r["e"])((function(){var n="";return e.forEach((function(e){e.path===t.value&&(n=e.component)})),n}));function c(e){t.value=e}return{routes:e,view:n,goto:c}}});n("6425");In.render=u;var Kn=In,Sn=Object(o["a"])(),An=Object(c["c"])(Kn,{myroot:1,xRoot:2});An.use(Sn).mount("#app")},dcc9:function(t,e,n){},e007:function(t,e,n){},e7b1:function(t,e,n){"use strict";n("e007")},eca4:function(t,e,n){},f11e:function(t,e,n){"use strict";n("eca4")},fe39:function(t,e,n){"use strict";n("2a8c")}});
//# sourceMappingURL=app.cdc7427f.js.map