(this.webpackJsonpbackgroundgen=this.webpackJsonpbackgroundgen||[]).push([[0],{34:function(e,t,o){e.exports=o(46)},43:function(e,t,o){},46:function(e,t,o){"use strict";o.r(t);var a=o(12),n=o(13),r=o(15),l=o(14),c=o(0),s=o.n(c),i=o(19),d=o.n(i),g=o(62),u=o(59),p=o(63),m=function(e){Object(r.a)(o,e);var t=Object(l.a)(o);function o(){return Object(a.a)(this,o),t.apply(this,arguments)}return Object(n.a)(o,[{key:"render",value:function(){return s.a.createElement("div",{style:{width:"150px",margin:"5px 10px"}},s.a.createElement(p.a,{value:Number(this.props.stop),max:100,onChange:this.props.stopPointChange,valueLabelDisplay:"auto"}))}}]),o}(s.a.Component),y=o(60),h=o(29),b=o.n(h),f=o(28),C=(o(43),function(e){Object(r.a)(o,e);var t=Object(l.a)(o);function o(e){var n;return Object(a.a)(this,o),(n=t.call(this,e)).populateStorage=function(){localStorage.setItem("bgcolor1deg",n.state.deg),localStorage.setItem("bgcolor1color0",n.state.bgcolor[0].color),localStorage.setItem("bgcolor1stop0",n.state.bgcolor[0].stop),localStorage.setItem("bgcolor1color1",n.state.bgcolor[1].color),localStorage.setItem("bgcolor1stop1",n.state.bgcolor[1].stop)},n.setBackground=function(){for(var e=[],t=0;t<(localStorage.length-1)/2;t++){var o=localStorage.getItem("bgcolor1color"+[t]),a=localStorage.getItem("bgcolor1stop"+[t]);e.push({color:o,stop:a})}n.setState({bgcolor:e}),n.setState({deg:localStorage.getItem("bgcolor1deg")})},n.updateBackground=function(){localStorage.clear(),localStorage.setItem("bgcolor1deg",n.state.deg);for(var e=0;e<n.state.bgcolor.length;e++)localStorage.setItem("bgcolor1color"+[e],n.state.bgcolor[e].color),localStorage.setItem("bgcolor1stop"+[e],n.state.bgcolor[e].stop)},n.setBackgroundColor=function(){var e="";e=n.state.gradtype?"radial-gradient(circle":"linear-gradient("+n.state.deg+"deg";for(var t=0;t<n.state.bgcolor.length;t++)e+=", "+n.state.bgcolor[t].color+" "+n.state.bgcolor[t].stop+"%";e+=")",document.getElementById("colorstring").innerText=e+";",document.body.style.background=e,document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundAttachment="fixed",document.getElementById("color1").style.background=e},n.setLayout=function(){window.matchMedia("(max-width: 420px)").matches?(console.log("The viewport is less than, or equal to, 700 pixels wide"),document.getElementById("layout").style.flexDirection="column",document.getElementById("presets").style.flexFlow="column wrap",document.getElementById("presets").style.alignContent="space-evenly",document.getElementById("colorCardList").style.maxWidth="50vw",document.getElementById("colorCardList").style.justifyContent="center",document.getElementById("degSetter").style.flexDirection="row",document.getElementById("addBtn").style.flexDirection="column",document.body.style.fontSize="12px"):console.log("The viewport is greater than 700 pixels wide")},n.setToRadial=function(){n.setState({gradtype:!0}),document.getElementById("degSetter").style.display="none"},n.setToLinear=function(){n.setState({gradtype:!1}),document.getElementById("degSetter").style.display="initial"},n.addNewColorCard=function(){var e=n.state.bgcolor.slice();e.push({color:"#F8F7F7",stop:"80"}),n.setState({bgcolor:e})},n.onColorChange=function(e){var t=n.state.bgcolor.slice();t[e.target.name].color=e.target.value.toUpperCase(),n.setState({bgcolor:t})},n.onRemoveCard=function(e){var t=n.state.bgcolor.slice();t.splice(e.target.parentElement.parentElement.firstChild.firstChild.name,1),n.setState({bgcolor:t})},n.onDegChange=function(e){n.setState({deg:e})},n.onHover=function(){document.getElementById("controlbar").style.opacity="1.0"},n.onHoverOut=function(){document.getElementById("controlbar").style.opacity="0.3"},n.onStopPointChange=function(e){return function(t,o){var a=n.state.bgcolor.slice();a[e].stop=o,n.setState({bgcolor:a})}},n.state={gradtype:!1,bgcolor:[{color:"#FF0BF2",stop:0},{color:"#E7F62A",stop:30}],deg:"45"},n}return Object(n.a)(o,[{key:"componentDidMount",value:function(){this.setLayout(),localStorage.getItem("bgcolor1color1")?this.setBackground():this.populateStorage(),this.setBackgroundColor()}},{key:"componentDidUpdate",value:function(){this.updateBackground(),this.setBackgroundColor()}},{key:"render",value:function(){return s.a.createElement(g.a,{style:{minHeight:"100vh"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"},s.a.createElement("h1",null,"Background Generator"),s.a.createElement("div",{id:"colorstring",style:{maxWidth:"70vw"}}),s.a.createElement(g.a,{display:"flex",flexDirection:"column",className:"background",id:"controlbar",onMouseOver:this.onHover,onMouseLeave:this.onHoverOut},s.a.createElement(g.a,{display:"flex",flexDirection:"row",justifyContent:"center",id:"layout"},s.a.createElement(x,{gradTypeR:this.setToRadial,gradTypeL:this.setToLinear}),s.a.createElement(g.a,{display:"flex",flexDirection:"column",justifyContent:"space-evenly",className:"degSetter background",id:"degSetter"},s.a.createElement(f.CircleSlider,{onChange:this.onDegChange,value:this.state.deg,size:80,max:"361",shadow:!1,knobRadius:6,knobColor:"#ff5722",showTooltip:!0,tooltipSize:25,progressColor:"#FDB11B",progressWidth:10,circleWidth:10})),s.a.createElement(v,{bgcolor:this.state.bgcolor,colorChange:this.onColorChange,stopPointChange:this.onStopPointChange,removeCard:this.onRemoveCard}),s.a.createElement(g.a,{display:"flex",className:"background",id:"addBtn"},s.a.createElement("button",{type:"button",onClick:this.addNewColorCard,className:"addColor"},"+"))),s.a.createElement(g.a,null,s.a.createElement(u.a,{variant:"middle"})),s.a.createElement(g.a,{display:"flex",flexDirection:"row",justifyContent:"space-evenly",id:"presets"},s.a.createElement("div",{className:"colorBox",id:"color1"}),s.a.createElement("div",{className:"colorBox",id:"color2"}),s.a.createElement("div",{className:"colorBox",id:"color3"}))))}}]),o}(s.a.Component)),v=function(e){Object(r.a)(o,e);var t=Object(l.a)(o);function o(){return Object(a.a)(this,o),t.apply(this,arguments)}return Object(n.a)(o,[{key:"render",value:function(){var e=this;return s.a.createElement(g.a,{display:"flex",flexDirection:"row",flexWrap:"wrap",id:"colorCardList",style:{maxWidth:"64vw"}},this.props.bgcolor.map((function(t,o){return s.a.createElement(E,{key:o,num:o,color:e.props.bgcolor[o].color,stop:e.props.bgcolor[o].stop,colorChange:e.props.colorChange,stopPointChange:e.props.stopPointChange,removeCard:e.props.removeCard})})))}}]),o}(s.a.Component),E=function(e){Object(r.a)(o,e);var t=Object(l.a)(o);function o(){return Object(a.a)(this,o),t.apply(this,arguments)}return Object(n.a)(o,[{key:"render",value:function(){return s.a.createElement(g.a,{className:"background",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"},s.a.createElement(g.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",style:{width:"100%"}},s.a.createElement("input",{className:"color",type:"color",name:this.props.num,value:this.props.color,onChange:this.props.colorChange}),s.a.createElement("button",{type:"button",onClick:this.props.removeCard,className:"closeColor"},"X")),s.a.createElement(m,{stop:this.props.stop,stopPointChange:this.props.stopPointChange(this.props.num)}))}}]),o}(s.a.Component),x=function(e){Object(r.a)(o,e);var t=Object(l.a)(o);function o(){return Object(a.a)(this,o),t.apply(this,arguments)}return Object(n.a)(o,[{key:"render",value:function(){return s.a.createElement(g.a,{className:"background",display:"flex",flexDirection:"column",justifyContent:"space-evenly"},s.a.createElement("button",{type:"button",onClick:this.props.gradTypeL},s.a.createElement(y.a,{fontSize:"small"},"texture"),s.a.createElement("h4",null,"Linear")),s.a.createElement("button",{type:"button",onClick:this.props.gradTypeR},s.a.createElement(b.a,{fontSize:"small"}),s.a.createElement("h4",null,"Radial")))}}]),o}(s.a.Component);d.a.render(s.a.createElement(C,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.36dc3803.chunk.js.map