(this.webpackJsonpbluehillsuwon=this.webpackJsonpbluehillsuwon||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(8),r=n.n(c),l=(n(15),n(1)),s=n(2),o=n(5),u=n(3),d=n(4),h=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.data!==e.data}},{key:"render",value:function(){for(var e=[],t=this.props.data,n=0;n<t.length;)e.push(i.a.createElement("li",{key:t[n].id},i.a.createElement("a",{href:"/content/"+t[n].id,onClick:function(e,t){t.preventDefault(),this.props.onChangePage(e)}.bind(this,t[n].id)},t[n].title))),n+=1;return i.a.createElement("nav",null,i.a.createElement("ul",null,e))}}]),t}(a.Component),m=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("article",null,i.a.createElement("h2",null,this.props.title),this.props.desc)}}]),t}(a.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("article",null,i.a.createElement("h2",null,"Create"),i.a.createElement("form",{action:"/create_process/",method:"post",onSubmit:function(e){e.preventDefault(),this.props.onSubmit(e.target.title.value,e.target.desc.value)}.bind(this)},i.a.createElement("p",null,i.a.createElement("input",{type:"text",name:"title",placeholder:"title"})),i.a.createElement("p",null,i.a.createElement("textarea",{name:"desc",placeholder:"description"})),i.a.createElement("p",null,i.a.createElement("input",{type:"submit"}))))}}]),t}(a.Component),b=n(9),f=n(6),E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={id:n.props.data.id,title:n.props.data.title,desc:n.props.data.desc},n.inputFormHandler=n.inputFormHandler.bind(Object(f.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"inputFormHandler",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return i.a.createElement("article",null,i.a.createElement("h2",null,"Update"),i.a.createElement("form",{action:"/create_process/",method:"post",onSubmit:function(e){e.preventDefault(),this.props.onSubmit(this.state.id,this.state.title,this.state.desc)}.bind(this)},i.a.createElement("input",{type:"hidden",name:"id",value:this.state.id}),i.a.createElement("p",null,i.a.createElement("input",{type:"text",name:"title",placeholder:"title",value:this.state.title,onChange:this.inputFormHandler})),i.a.createElement("p",null,i.a.createElement("textarea",{name:"desc",placeholder:"description",value:this.state.desc,onChange:this.inputFormHandler})),i.a.createElement("p",null,i.a.createElement("input",{type:"submit"}))))}}]),t}(a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement("h1",null,i.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),this.props.onChangePage()}.bind(this)},this.props.title)),this.props.sub)}}]),t}(a.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"/create/",onClick:function(e){e.preventDefault(),this.props.onChangeMode("create")}.bind(this)},"create")),i.a.createElement("li",null,i.a.createElement("a",{href:"/update/",onClick:function(e){e.preventDefault(),this.props.onChangeMode("update")}.bind(this)},"update")),i.a.createElement("li",null,i.a.createElement("input",{onClick:function(e){e.preventDefault(),this.props.onChangeMode("delete")}.bind(this),type:"button",value:"delete"})))}}]),t}(a.Component),O=(n(16),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).max_content_id=3,n.state={mode:"welcome",selected_content_id:3,subject:{title:"\uccad\uad6c\uacbd\ud76c\ud55c\uc758\uc6d0 \uc218\uc6d0\uc810",sub:"\uc784\uc0c1\uacfc \uc5f0\uad6c\ub97c \uacb0\ud569\ud558\uc5ec \uce58\ub8cc\uc5d0 \ucd5c\uc120\uc744 \ub2e4\ud558\ub294 \uccad\uad6c\uacbd\ud76c\ud55c\uc758\uc6d0\uc785\ub2c8\ub2e4."},welcome:{title:"\uc548\ub155\ud558\uc138\uc694.",desc:"\uccad\uad6c\uacbd\ud76c\ud55c\uc758\uc6d0 \uc218\uc6d0\uc810\uc758 \uc791\uc740 \ud648\ud398\uc774\uc9c0\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4."},contents:[{id:1,title:"\uc9c4\ub8cc\uc2dc\uac04",desc:"\uc6d4-\uae08 \ub9e4\uc77c 8\uc2dc, \ud1a0 2\uc2dc\uae4c\uc9c0"},{id:2,title:"\uc704\uce58",desc:"\uc218\uc6d0\uc2dc\uccad\uc5ed 7\ubc88\ucd9c\uad6c \uc55e"},{id:3,title:"\uc778\uc0ac\ub9d0",desc:"\uc548\ub155\ud558\uc138\uc694. \uae40\ud615\uaddc\uc785\ub2c8\ub2e4."}]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"getReadContent",value:function(){for(var e=0;e<this.state.contents.length;){var t=this.state.contents[e];if(t.id===this.state.selected_content_id)return t;e+=1}}},{key:"getContent",value:function(){var e,t,n=null;if("welcome"===this.state.mode)e=this.state.welcome.title,t=this.state.welcome.desc,n=i.a.createElement(m,{title:e,desc:t});else if("read"===this.state.mode){var a=this.getReadContent();n=i.a.createElement(m,{title:a.title,desc:a.desc})}else"create"===this.state.mode?n=i.a.createElement(p,{onSubmit:function(e,t){this.max_content_id=this.max_content_id+1;var n=this.state.contents.concat({id:this.max_content_id,title:e,desc:t});this.setState({contents:n,mode:"read",selected_content_id:this.max_content_id})}.bind(this)}):"update"===this.state.mode&&(a=this.getReadContent(),n=i.a.createElement(E,{data:a,onSubmit:function(e,t,n){for(var a=Array.from(this.state.contents),i=0;i<a.length;){if(a[i].id===e){a[i]={id:e,title:t,desc:n};break}i+=1}this.setState({contents:a,mode:"read"})}.bind(this)}));return n}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(v,{title:this.state.subject.title,sub:this.state.subject.sub,onChangePage:function(){this.setState({mode:"welcome"})}.bind(this)}),i.a.createElement(h,{data:this.state.contents,onChangePage:function(e){this.setState({mode:"read",selected_content_id:Number(e)})}.bind(this)}),i.a.createElement(j,{onChangeMode:function(e){if("delete"===e){if(window.confirm("\uc9c4\uc9dc\ub85c\uc694?")){for(var t=Array.from(this.state.contents),n=0;n<t.length;){if(t[n].id===this.state.selected_content_id){t.splice(n,1);break}n+=1}this.setState({mode:"welcome",contents:t}),alert("\uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4\u3160")}}else this.setState({mode:e})}.bind(this)}),this.getContent())}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.97d587e1.chunk.js.map