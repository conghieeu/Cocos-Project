System.register("chunks:///_virtual/btnClickToScreen.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var t,o,c,e;return{setters:[function(n){t=n.inheritsLoose},function(n){o=n.cclegacy,c=n._decorator,e=n.Component}],execute:function(){var i;o._RF.push({},"9432cnkrj5M4J+6yiFAU5VJ","btnClickToScreen",void 0);var r=c.ccclass;c.property,n("btnClickToScreen",r("btnClickToScreen")(i=function(n){function o(){return n.apply(this,arguments)||this}t(o,n);var c=o.prototype;return c.start=function(){this.node.on("click",this.onClick,this)},c.onClick=function(){window.open("https://www.google.com","_blank")},o}(e))||i);o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./btnClickToScreen.ts","./playVideo.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/playVideo.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var i,r,t,o,n,a,l,c;return{setters:[function(e){i=e.applyDecoratedDescriptor,r=e.inheritsLoose,t=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,a=e._decorator,l=e.VideoPlayer,c=e.Component}],execute:function(){var p,s,u,y,d;n._RF.push({},"39232I6EixKEqsivFMn4hdt","playVideo",void 0);var f=a.ccclass,v=a.property;e("playVideo",(p=f("playVideo"),s=v(l),p((d=i((y=function(e){function i(){for(var i,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return i=e.call.apply(e,[this].concat(n))||this,t(i,"videoPlayer",d,o(i)),i}r(i,e);var n=i.prototype;return n.start=function(){this.videoPlayer&&this.videoPlayer.play()},n.update=function(e){},i}(c)).prototype,"videoPlayer",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),u=y))||u));n._RF.pop()}}}));

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