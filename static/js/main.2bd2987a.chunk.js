(this.webpackJsonpbackgroundgen=this.webpackJsonpbackgroundgen||[]).push([[0],{50:function(e,t,o){e.exports=o(61)},58:function(e,t,o){},61:function(e,t,o){"use strict";o.r(t);var n=o(20),r=o(21),a=o(23),l=o(22),s=o(0),c=o.n(s),i=o(8),d=o.n(i),g=o(96),u=o(92),p=o(94),m=o(97),y=function(e){Object(a.a)(o,e);var t=Object(l.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return c.a.createElement("div",{style:{width:"150px",margin:"5px 10px"}},c.a.createElement(m.a,{value:Number(this.props.stop),max:100,onChange:this.props.stopPointChange,valueLabelDisplay:"auto"}))}}]),o}(c.a.Component),h=o(93),b=o(43),f=o.n(b),C=o(42),E=(o(58),function(e){Object(a.a)(o,e);var t=Object(l.a)(o);function o(e){var r;return Object(n.a)(this,o),(r=t.call(this,e)).populateStorage=function(){localStorage.setItem("Preset",0);var e=[{deg:180,gradtype:!1,bgcolor:[{color:"#FFFFFF",stop:47},{color:"#FE0000",stop:54}],bgcolorstr:"linear-gradient(0deg, #FF0BF2 0%, #E7F62A 30%)"},{deg:15,gradtype:!0,bgcolor:[{color:"#FF0BF2",stop:0},{color:"#E7F62A",stop:40},{color:"#5BE219",stop:100}],bgcolorstr:"radial-gradient(circle, #FF0BF2 0%, #E7F62A 40%, #5BE219 100%)"},{deg:90,gradtype:!1,bgcolor:[{color:"#4845CB",stop:30},{color:"#58C937",stop:60}],bgcolorstr:"linear-gradient(90deg, #4845CB 30%, #58C937 60%)"}];localStorage.setItem("Presets",JSON.stringify(e)),r.getNewStorage()},r.getNewStorage=function(){var e=localStorage.getItem("Preset");r.setState({preset:Number(e)});var t=localStorage.getItem("Presets"),o=JSON.parse(t),n=o[Number(e)];r.setState({deg:n.deg}),r.setState({gradtype:n.gradtype}),r.setState({bgcolor:n.bgcolor}),document.getElementById("color0").style.background=o[0].bgcolorstr,document.getElementById("color1").style.background=o[1].bgcolorstr,document.getElementById("color2").style.background=o[2].bgcolorstr},r.setActiveBtn=function(){document.getElementById("color0").style.border="2px solid #D3C6C6",document.getElementById("color1").style.border="2px solid #D3C6C6",document.getElementById("color2").style.border="2px solid #D3C6C6",document.getElementById("color"+r.state.preset).style.border="3px solid #FBC50B"},r.updatePresetStorage=function(){localStorage.setItem("Preset",r.state.preset)},r.updatePresetsStorage=function(){var e=localStorage.getItem("Presets"),t=JSON.parse(e);t[r.state.preset].deg=r.state.deg,t[r.state.preset].gradtype=r.state.gradtype,t[r.state.preset].bgcolor=r.state.bgcolor;var o=r.createBgcolorStr();t[r.state.preset].bgcolorstr=o,localStorage.setItem("Presets",JSON.stringify(t))},r.setBackgroundColor=function(){var e=r.createBgcolorStr();document.getElementById("colorstring").innerText=e+";",document.body.style.background=e,document.body.style.backgroundRepeat="no-repeat",document.body.style.backgroundAttachment="fixed",document.getElementById("color"+r.state.preset).style.background=e},r.createBgcolorStr=function(){var e="";e=r.state.gradtype?"radial-gradient(circle":"linear-gradient("+r.state.deg+"deg";for(var t=0;t<r.state.bgcolor.length;t++)e+=", "+r.state.bgcolor[t].color+" "+r.state.bgcolor[t].stop+"%";return e+=")"},r.setLayout=function(){window.matchMedia("(max-width: 420px)").matches&&(document.getElementById("layout").style.flexDirection="column",document.getElementById("presets").style.flexFlow="column wrap",document.getElementById("presets").style.justifyContent="center",document.getElementById("presets").style.alignContent="space-evenly",document.getElementById("colorCardList").style.maxWidth="50vw",document.getElementById("colorCardList").style.justifyContent="center",document.getElementById("degSetter").style.flexDirection="column",document.getElementById("degSetter").style.alignContent="center",document.getElementById("addBtn").style.flexDirection="column",document.body.style.fontSize="12px")},r.toggleDegSetter=function(){r.state.gradtype?document.getElementById("degSetter").style.display="none":document.getElementById("degSetter").style.display="flex"},r.setToRadial=function(){r.setState({gradtype:!0})},r.setToLinear=function(){r.setState({gradtype:!1})},r.addNewColorCard=function(){var e=r.state.bgcolor.slice();e.push({color:"#F8F7F7",stop:"80"}),r.setState({bgcolor:e})},r.onColorChange=function(e){var t=r.state.bgcolor.slice();t[e.target.name].color=e.target.value.toUpperCase(),r.setState({bgcolor:t})},r.onRemoveCard=function(e){var t=r.state.bgcolor.slice();t.splice(e.target.parentElement.parentElement.firstChild.firstChild.name,1),r.setState({bgcolor:t})},r.onDegChange=function(e){r.setState({deg:e})},r.onDegChange1=function(e){r.setState({deg:e.target.value})},r.onHover=function(){document.getElementById("controlbar").style.opacity="1.0"},r.onHoverOut=function(){document.getElementById("controlbar").style.opacity="0.3"},r.onStopPointChange=function(e){return function(t,o){var n=r.state.bgcolor.slice();n[e].stop=o,r.setState({bgcolor:n})}},r.onPresetChange=function(e){return function(){r.setState({preset:e});var t=localStorage.getItem("Presets"),o=JSON.parse(t)[e];r.setState({deg:o.deg}),r.setState({gradtype:o.gradtype}),r.setState({bgcolor:o.bgcolor})}},r.state={preset:0,deg:"",gradtype:"",bgcolor:[],bgcolorstr:""},r}return Object(r.a)(o,[{key:"componentDidMount",value:function(){this.setLayout(),localStorage.getItem("Preset")?this.getNewStorage():this.populateStorage(),this.setBackgroundColor()}},{key:"componentDidUpdate",value:function(){this.updatePresetStorage(),this.updatePresetsStorage(),this.setBackgroundColor(),this.toggleDegSetter(),this.setActiveBtn()}},{key:"render",value:function(){return c.a.createElement(g.a,{style:{minHeight:"100vh"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"},c.a.createElement("h1",null,"Background Generator"),c.a.createElement("div",{id:"colorstring",style:{maxWidth:"70vw"}}),c.a.createElement(g.a,{display:"flex",flexDirection:"column",className:"background",id:"controlbar",onMouseOver:this.onHover,onMouseLeave:this.onHoverOut},c.a.createElement(g.a,{display:"flex",flexDirection:"row",justifyContent:"center",id:"layout"},c.a.createElement(x,{gradTypeR:this.setToRadial,gradTypeL:this.setToLinear}),c.a.createElement(g.a,{display:"flex",flexDirection:"column",justifyContent:"space-evenly",className:"degSetter background",id:"degSetter"},c.a.createElement(g.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},c.a.createElement(C.CircleSlider,{onChange:this.onDegChange,value:this.state.deg,size:80,max:"360",shadow:!1,knobRadius:6,knobColor:"#ff5722",showTooltip:!0,tooltipSize:25,progressColor:"#FDB11B",progressWidth:10,circleWidth:10})),c.a.createElement(g.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},c.a.createElement(p.a,{id:"outlined-number",value:this.state.deg,onChange:this.onDegChange1,style:{width:73,margin:5},size:"small",type:"number",variant:"outlined"}))),c.a.createElement(v,{bgcolor:this.state.bgcolor,colorChange:this.onColorChange,stopPointChange:this.onStopPointChange,removeCard:this.onRemoveCard}),c.a.createElement(g.a,{display:"flex",className:"background",id:"addBtn"},c.a.createElement("button",{type:"button",onClick:this.addNewColorCard,className:"addColor"},"+"))),c.a.createElement(g.a,null,c.a.createElement(u.a,{variant:"middle"})),c.a.createElement(g.a,{display:"flex",flexDirection:"row",justifyContent:"space-evenly",id:"presets"},c.a.createElement("div",{className:"colorBox",id:"color0",onClick:this.onPresetChange(0)}),c.a.createElement("div",{className:"colorBox",id:"color1",onClick:this.onPresetChange(1)}),c.a.createElement("div",{className:"colorBox",id:"color2",onClick:this.onPresetChange(2)}))))}}]),o}(c.a.Component)),v=function(e){Object(a.a)(o,e);var t=Object(l.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){var e=this;return c.a.createElement(g.a,{display:"flex",flexDirection:"row",flexWrap:"wrap",id:"colorCardList",style:{maxWidth:"64vw"}},this.props.bgcolor.map((function(t,o){return c.a.createElement(S,{key:o,num:o,color:e.props.bgcolor[o].color,stop:e.props.bgcolor[o].stop,colorChange:e.props.colorChange,stopPointChange:e.props.stopPointChange,removeCard:e.props.removeCard})})))}}]),o}(c.a.Component),S=function(e){Object(a.a)(o,e);var t=Object(l.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return c.a.createElement(g.a,{className:"background",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"},c.a.createElement(g.a,{display:"flex",flexDirection:"row",justifyContent:"space-between",style:{width:"100%"}},c.a.createElement("input",{className:"color",type:"color",name:this.props.num,value:this.props.color,onChange:this.props.colorChange}),c.a.createElement("button",{type:"button",onClick:this.props.removeCard,className:"closeColor"},"X")),c.a.createElement(y,{stop:this.props.stop,stopPointChange:this.props.stopPointChange(this.props.num)}))}}]),o}(c.a.Component),x=function(e){Object(a.a)(o,e);var t=Object(l.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(r.a)(o,[{key:"render",value:function(){return c.a.createElement(g.a,{className:"background",display:"flex",flexDirection:"column",justifyContent:"space-evenly"},c.a.createElement("button",{type:"button",onClick:this.props.gradTypeL},c.a.createElement(h.a,{fontSize:"small"},"texture"),c.a.createElement("h4",null,"Linear")),c.a.createElement("button",{type:"button",onClick:this.props.gradTypeR},c.a.createElement(f.a,{fontSize:"small"}),c.a.createElement("h4",null,"Radial")))}}]),o}(c.a.Component);d.a.render(c.a.createElement(E,null),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.2bd2987a.chunk.js.map