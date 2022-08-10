System.register("chunks:///_virtual/GameMgr.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,r,a,o,n,l,s,g;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,r=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){o=t.cclegacy,n=t._decorator,l=t.EditBox,s=t.Toggle,g=t.Component}],execute:function(){var c,h,u,p,f,d,v,m,b,y,D;o._RF.push({},"60da0aADclK+YZE7aUuHa4z","GameMgr",void 0);var B=n.ccclass,E=n.property;t("GameMgr",(c=B("GameMgr"),h=E(l),u=E(l),p=E(l),f=E(s),c((m=e((v=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return e=t.call.apply(t,[this].concat(o))||this,r(e,"EditBoxData1",m,a(e)),r(e,"EditBoxData2",b,a(e)),r(e,"EditBoxName",y,a(e)),r(e,"ToggleIsStr",D,a(e)),e}i(e,t);var o=e.prototype;return o.start=function(){},o.btnStart=function(){try{var t=this.getData();this.EditBoxData2.string=t}catch(t){this.log("导出数据错误")}},o.btnDownData=function(){try{var t=this.getData(),e=this.EditBoxName.string;0==e.length&&(e="Data"+(new Date).getTime()),this.downFlie(e,t)}catch(t){this.log("导出文件错误")}},o.getData=function(){var t=this.EditBoxData1.string;this.log(t);var e=",{a"+Math.floor(1e7*Math.random())+"/*z},";this.log(e),this.log("开始转换");for(var i=(t=(t=t.replace(/\n/g,e)).replace(/\s+/g,",")).split(","),r=0;r<i.length;r++)0==i[r].length&&i.splice(r,1);this.log(i);for(var a=-1,o=e.replace(/,/g,""),n=0;n<i.length;n++){i[n]==o&&(-1==a&&(a=n),n=i.length)}if(this.log("ft: "+a),-1!=a){for(var l=[],s=0;s<a;s++)l.push(i[s]);this.log(l);for(var g=0;g<i.length;g++)i[g]==o&&i.splice(g,1);this.log("strs: ",i);var c=Math.floor(i.length/l.length-1);this.log("line: "+c);for(var h=[],u=l.length,p=0;p<c;p++){h.push([]);for(var f=u;f<l.length+u;f++)h[h.length-1].push(i[f]);u+=l.length}this.log(h);for(var d=[],v=0;v<h.length;v++){d.push({});for(var m=0;m<l.length;m++){var b=h[v][m];this.ToggleIsStr.isChecked||isNaN(Number(b))?d[d.length-1][l[m]]=b:d[d.length-1][l[m]]=Number(b)}}return this.log(d),JSON.stringify(d)}this.log("数据转换错误")},o.downFlie=function(t,e){var i=document.createElement("a");i.download=t+".json",i.style.display="none";var r=new Blob([e]);i.href=URL.createObjectURL(r),document.body.appendChild(i),i.click(),document.body.removeChild(i)},o.log=function(){},e}(g)).prototype,"EditBoxData1",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){}}),b=e(v.prototype,"EditBoxData2",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){}}),y=e(v.prototype,"EditBoxName",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){}}),D=e(v.prototype,"ToggleIsStr",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){}}),d=v))||d));o._RF.pop()}}}));

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