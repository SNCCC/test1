System.register("chunks:///_virtual/GameMgr.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,a,i,r,o,l,g,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,a=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,o=t._decorator,l=t.EditBox,g=t.Toggle,s=t.Component}],execute:function(){var c,h,u,p,d,f,m,v,y,b,D;r._RF.push({},"60da0aADclK+YZE7aUuHa4z","GameMgr",void 0);var E=o.ccclass,x=o.property;t("GameMgr",(c=E("GameMgr"),h=x(l),u=x(l),p=x(l),d=x(g),c((v=e((m=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r))||this,a(e,"EditBoxData1",v,i(e)),a(e,"EditBoxData2",y,i(e)),a(e,"EditBoxName",b,i(e)),a(e,"ToggleIsStr",D,i(e)),e}n(e,t);var r=e.prototype;return r.start=function(){},r.btnStart=function(){var t=this.getData();null!=t&&(this.EditBoxData2.string=t)},r.btnDownData=function(){var t=this.getData();if(null!=t){var e=this.EditBoxName.string;0==e.length&&(e="Data"+(new Date).getTime()),this.downFlie(e,t)}},r.btnCopyData=function(){this.copyText(this.EditBoxData2.string)},r.btnStartCopy=function(){var t=this.getData();null!=t&&(this.EditBoxData2.string=t,this.btnCopyData())},r.copyText=function(t){var e=document.createElement("input");e.setAttribute("id","cp_hgz_input"),e.value=t,document.getElementsByTagName("body")[0].appendChild(e),document.getElementById("cp_hgz_input").select(),document.execCommand("copy"),document.getElementById("cp_hgz_input").remove()},r.getData=function(){var t=this.EditBoxData1.string;this.log(t);var e=",{a"+Math.floor(1e7*Math.random())+"/*z},",n="{d"+Math.floor(1e7*Math.random())+"e/r}";this.log(e),this.log("开始转换");for(var a=(t=(t=(t=t.replace(/,/g,n)).replace(/\n/g,e)).replace(/\s+/g,",")).split(","),i=0;i<a.length;i++)0==a[i].length&&a.splice(i,1);this.log(a);for(var r=-1,o=e.replace(/,/g,""),l=0;l<a.length;l++){a[l]==o&&(-1==r&&(r=l),l=a.length)}if(this.log("ft: "+r),-1==r)return alert("数据转换错误"),void this.log("数据转换错误");for(var g=[],s=0;s<r;s++)g.push(a[s]);this.log(g);for(var c=0;c<a.length;c++)a[c]==o&&a.splice(c,1);this.log("strs: ",a),this.log("strsLeng:"+a.length,"keysLeng:"+g.length);var h=Math.floor(a.length/g.length-1);this.log("line: "+h);for(var u=[],p=g.length,d=0;d<h;d++){u.push([]);for(var f=p;f<g.length+p;f++){var m=a[f];isNaN(Number(m))&&(m=m.replace(RegExp(n,"g"),",")),u[u.length-1].push(m)}p+=g.length}this.log(u);for(var v=[],y=0;y<u.length;y++){v.push({});for(var b=0;b<g.length;b++){var D=u[y][b];this.ToggleIsStr.isChecked||isNaN(Number(D))?v[v.length-1][g[b]]=D:v[v.length-1][g[b]]=Number(D)}}return this.log(v),JSON.stringify(v)},r.downFlie=function(t,e){var n=document.createElement("a");n.download=t+".json",n.style.display="none";var a=new Blob([e]);n.href=URL.createObjectURL(a),document.body.appendChild(n),n.click(),document.body.removeChild(n)},r.log=function(){},e}(s)).prototype,"EditBoxData1",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){}}),y=e(m.prototype,"EditBoxData2",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){}}),b=e(m.prototype,"EditBoxName",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){}}),D=e(m.prototype,"ToggleIsStr",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){}}),f=m))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./GameMgr.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});