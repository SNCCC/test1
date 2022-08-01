System.register("chunks:///_virtual/GameMgr.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,i,a,r,o,n,l,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,a=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){o=t.cclegacy,n=t._decorator,l=t.EditBox,s=t.Component}],execute:function(){var c,g,h,u,p,f,d,v,m;o._RF.push({},"60da0aADclK+YZE7aUuHa4z","GameMgr",void 0);var y=n.ccclass,D=n.property;t("GameMgr",(c=y("GameMgr"),g=D(l),h=D(l),u=D(l),c((d=e((f=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return e=t.call.apply(t,[this].concat(o))||this,a(e,"EditBoxData1",d,r(e)),a(e,"EditBoxData2",v,r(e)),a(e,"EditBoxName",m,r(e)),e}i(e,t);var o=e.prototype;return o.btnStart=function(){try{var t=this.getData();this.EditBoxData2.string=t}catch(t){this.log("导出数据错误")}},o.btnDownData=function(){try{var t=this.getData(),e=this.EditBoxName.string;0==e.length&&(e="Data"+(new Date).getTime()),this.downFlie(e,t)}catch(t){this.log("导出文件错误")}},o.getData=function(){var t=this.EditBoxData1.string;this.log(t);var e=",{a"+Math.floor(1e7*Math.random())+"/*z},";this.log(e),this.log("开始转换");var i=(t=(t=t.replace(/\n/g,e)).replace(/\s+/g,",")).split(",");this.log(i);for(var a=-1,r=e.replace(/,/g,""),o=0;o<i.length;o++){i[o]==r&&(-1==a&&(a=o),o=i.length)}if(this.log("ft: "+a),-1!=a){for(var n=[],l=0;l<a;l++)n.push(i[l]);this.log(n);for(var s=0;s<i.length;s++)i[s]==r&&i.splice(s,1);0==i[i.length-1].length&&i.splice(i.length-1,1),this.log(i);var c=i.length/n.length-1;this.log("line: "+c);for(var g=[],h=0;h<n.length;h++)for(var u=0;u<c;u++){var p=i[u*n.length+n.length+h];this.log(p),g.push(p)}this.log(g);for(var f=[],d=0;d<c;d++){f.push({});for(var v=0;v<n.length;v++)f[d][n[v]]=g[d+v*c]}return this.log(f),JSON.stringify(f)}this.log("数据转换错误")},o.downFlie=function(t,e){var i=document.createElement("a");i.download=t+".json",i.style.display="none";var a=new Blob([e]);i.href=URL.createObjectURL(a),document.body.appendChild(i),i.click(),document.body.removeChild(i)},o.log=function(){},e}(s)).prototype,"EditBoxData1",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){}}),v=e(f.prototype,"EditBoxData2",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){}}),m=e(f.prototype,"EditBoxName",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){}}),p=f))||p));o._RF.pop()}}}));

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