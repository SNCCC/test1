System.register("chunks:///_virtual/GameMgr.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,o,a,n,r,l,i,c;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,a=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,i=e.EditBox,c=e.Component}],execute:function(){var s,g,u,p,h,d,f;r._RF.push({},"60da0aADclK+YZE7aUuHa4z","GameMgr",void 0);var v=l.ccclass,D=l.property;e("GameMgr",(s=v("GameMgr"),g=D(i),u=D(i),s((d=t((h=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,a(t,"EditBoxData1",d,n(t)),a(t,"EditBoxData2",f,n(t)),t}o(t,e);var r=t.prototype;return r.btnStart=function(){var e=this.getData();this.EditBoxData2.string=e},r.btnDownData=function(){var e=this.getData();this.downFlie("Data"+(new Date).getTime(),e)},r.getData=function(){var e=this.EditBoxData1.string;console.log(e);var t=",{a"+Math.floor(1e7*Math.random())+"/*z},";console.log(t),console.log("开始转换");var o=(e=(e=e.replace(/\n/g,t)).replace(/\s+/g,",")).split(",");console.log(o);for(var a=-1,n=t.replace(/,/g,""),r=0;r<o.length;r++){o[r]==n&&(-1==a&&(a=r),r=o.length)}console.log(a);for(var l=[],i=0;i<a;i++)l.push(o[i]);console.log(l);for(var c=0;c<o.length;c++)o[c]==n&&o.splice(c,1);o.splice(o.length-1,1),console.log(o);var s=o.length/l.length-1;console.log(s);for(var g=[],u=0;u<l.length;u++)for(var p=0;p<s;p++){var h=o[p*l.length+3+u];console.log(h),g.push(h)}console.log(g);for(var d=[],f=0;f<s;f++){d.push({});for(var v=0;v<l.length;v++)d[f][l[v]]=g[f+v*s]}return console.log(d),JSON.stringify(d)},r.downFlie=function(e,t){var o=document.createElement("a");o.download=e+".json",o.style.display="none";var a=new Blob([t]);o.href=URL.createObjectURL(a),document.body.appendChild(o),o.click(),document.body.removeChild(o)},t}(c)).prototype,"EditBoxData1",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){}}),f=t(h.prototype,"EditBoxData2",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){}}),p=h))||p));r._RF.pop()}}}));

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