(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1105:function(t,e,o){var content=o(1117);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(93).default)("f77a94a6",content,!0,{sourceMap:!1})},1116:function(t,e,o){"use strict";var n=o(1105);o.n(n).a},1117:function(t,e,o){(t.exports=o(92)(!1)).push([t.i,".done{text-decoration:line-through}",""])},1125:function(t,e,o){"use strict";o.r(e);var n=o(43),r=o(247),c={computed:{todos:function(){return[]}},methods:Object(n.a)({addTodo:function(t){this.$store.commit("todos/add",t.target.value),t.target.value=""}},Object(r.b)({toggle:"todos/toggle"}))},d=(o(1116),o(51)),component=Object(d.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[t._l(t.todos,function(e){return o("li",[o("input",{attrs:{type:"checkbox"},domProps:{checked:e.done},on:{change:function(o){return t.toggle(e)}}}),t._v(" "),o("span",{class:{done:e.done}},[t._v(t._s(e.text))])])}),t._v(" "),o("li",[o("input",{attrs:{placeholder:"What needs to be done?"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}}})])],2)},[],!1,null,null,null);e.default=component.exports}}]);