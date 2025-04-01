window.__require = (function t(e, o, i) {
  function n(c, s) {
    if (!o[c]) {
      if (!e[c]) {
        var a = c.split("/");
        if (((a = a[a.length - 1]), !e[a])) {
          var p = "function" == typeof __require && __require;
          if (!s && p) return p(a, !0);
          if (r) return r(a, !0);
          throw new Error("Cannot find module '" + c + "'");
        }
        c = a;
      }
      var h = (o[c] = { exports: {} });
      e[c][0].call(
        h.exports,
        function (t) {
          return n(e[c][1][t] || t);
        },
        h,
        h.exports,
        t,
        e,
        o,
        i
      );
    }
    return o[c].exports;
  }
  for (
    var r = "function" == typeof __require && __require, c = 0;
    c < i.length;
    c++
  )
    n(i[c]);
  return n;
})(
  {
    AddAutoScale: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "13eb1H42fZOVYII0gfMjAoU", "AddAutoScale");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          a = c.property,
          p = c.executeInEditMode,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.nodesChildren = []), e;
            }
            return (
              n(e, t),
              (e.prototype.start = function () {
                this.getNodesChildren(), this.addAutoScaleToChildren();
              }),
              (e.prototype.onEnable = function () {
                this.addAutoScaleToChildren();
              }),
              (e.prototype.onDisable = function () {
                this.removeAutoScaleFromChildren();
              }),
              (e.prototype.getNodesChildren = function () {
                var t = this;
                this.node.children.forEach(function (e) {
                  -1 === t.nodesChildren.indexOf(e) && t.nodesChildren.push(e);
                });
              }),
              (e.prototype.addAutoScaleToChildren = function () {
                this.nodesChildren.forEach(function (t) {
                  t &&
                    cc.isValid(t) &&
                    (t.getComponent("AutoScale") ||
                      t.addComponent("AutoScale"));
                });
              }),
              (e.prototype.removeAutoScaleFromChildren = function () {
                this.nodesChildren.forEach(function (t) {
                  t &&
                    cc.isValid(t) &&
                    t.getComponent("AutoScale") &&
                    t.removeComponent("AutoScale");
                });
              }),
              r(
                [
                  a({
                    type: [cc.Node],
                    tooltip:
                      "Danh s\xe1ch c\xe1c node con c\u1ea7n th\xeam AutoScale",
                  }),
                ],
                e.prototype,
                "nodesChildren",
                void 0
              ),
              r([s, p], e)
            );
          })(cc.Component);
        (o.default = h), cc._RF.pop();
      },
      {},
    ],
    AspectRatioFitterFollowNode: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(
          e,
          "a6f67WgUatBgoqQqzz27OvB",
          "AspectRatioFitterFollowNode"
        );
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          a = c.property,
          p = c.executeInEditMode,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.leftNode = null),
                (e.leftSpacing = 0),
                (e.rightNode = null),
                (e.rightSpacing = 0),
                (e.nodeDown = null),
                (e.downSpacing = 0),
                (e.nodeUp = null),
                (e.upSpacing = 0),
                (e.aspectRatio = 1),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.onEnable = function () {
                this.setAspectRatio();
              }),
              (e.prototype.update = function () {
                if (this.leftNode && !this.nodeDown) this.updateAspectRatioX();
                else if (this.nodeDown && !this.leftNode)
                  this.updateAspectRatioY();
                else if (this.leftNode && this.nodeDown) {
                  var t = this.node.getBoundingBox(),
                    e = this.leftNode.getBoundingBox(),
                    o = this.nodeDown.getBoundingBox(),
                    i = this.node.parent.convertToWorldSpaceAR(cc.v2(t.x, t.y)),
                    n = this.leftNode.parent.convertToWorldSpaceAR(
                      cc.v2(e.x, e.y)
                    ),
                    r = this.nodeDown.parent.convertToWorldSpaceAR(
                      cc.v2(o.x, o.y)
                    );
                  Math.abs(i.x - n.x) - this.leftSpacing <
                  Math.abs(i.y - r.y) - this.downSpacing
                    ? this.updateAspectRatioX()
                    : this.updateAspectRatioY();
                }
              }),
              (e.prototype.setAspectRatio = function () {
                this.aspectRatio = this.node.width / this.node.height;
              }),
              (e.prototype.updateAspectRatioX = function () {
                if (this.leftNode) {
                  var t = this.node.getBoundingBox(),
                    e = this.leftNode.getBoundingBox(),
                    o = this.node.parent.convertToWorldSpaceAR(cc.v2(t.x, t.y)),
                    i = this.leftNode.parent.convertToWorldSpaceAR(
                      cc.v2(e.x, e.y)
                    ),
                    n = Math.abs(o.x - i.x) - this.leftSpacing,
                    r = n / this.aspectRatio;
                  (this.node.width = n), (this.node.height = r);
                }
              }),
              (e.prototype.updateAspectRatioY = function () {
                if (this.nodeDown) {
                  var t = this.node.getBoundingBox(),
                    e = this.nodeDown.getBoundingBox(),
                    o = this.node.parent.convertToWorldSpaceAR(cc.v2(t.x, t.y)),
                    i = this.nodeDown.parent.convertToWorldSpaceAR(
                      cc.v2(e.x, e.y)
                    ),
                    n = Math.abs(o.y - i.y) - this.downSpacing,
                    r = n * this.aspectRatio;
                  (this.node.width = r), (this.node.height = n);
                }
              }),
              r(
                [
                  a({
                    type: cc.Node,
                    tooltip:
                      "Node b\xean tr\xe1i \u0111\u1ec3 c\u0103n ch\u1ec9nh",
                  }),
                ],
                e.prototype,
                "leftNode",
                void 0
              ),
              r(
                [
                  a({
                    tooltip: "Kho\u1ea3ng c\xe1ch v\u1edbi node b\xean tr\xe1i",
                  }),
                ],
                e.prototype,
                "leftSpacing",
                void 0
              ),
              r(
                [
                  a({
                    type: cc.Node,
                    tooltip:
                      "Node b\xean ph\u1ea3i \u0111\u1ec3 c\u0103n ch\u1ec9nh",
                  }),
                ],
                e.prototype,
                "rightNode",
                void 0
              ),
              r(
                [
                  a({
                    tooltip:
                      "Kho\u1ea3ng c\xe1ch v\u1edbi node b\xean ph\u1ea3i",
                  }),
                ],
                e.prototype,
                "rightSpacing",
                void 0
              ),
              r(
                [
                  a({
                    type: cc.Node,
                    tooltip:
                      "Node ph\xeda d\u01b0\u1edbi \u0111\u1ec3 c\u0103n ch\u1ec9nh",
                  }),
                ],
                e.prototype,
                "nodeDown",
                void 0
              ),
              r(
                [
                  a({
                    tooltip:
                      "Kho\u1ea3ng c\xe1ch v\u1edbi node ph\xeda d\u01b0\u1edbi",
                  }),
                ],
                e.prototype,
                "downSpacing",
                void 0
              ),
              r(
                [
                  a({
                    type: cc.Node,
                    tooltip:
                      "Node ph\xeda tr\xean \u0111\u1ec3 c\u0103n ch\u1ec9nh",
                  }),
                ],
                e.prototype,
                "nodeUp",
                void 0
              ),
              r(
                [
                  a({
                    tooltip:
                      "Kho\u1ea3ng c\xe1ch v\u1edbi node ph\xeda tr\xean",
                  }),
                ],
                e.prototype,
                "upSpacing",
                void 0
              ),
              r(
                [
                  a({
                    type: cc.Float,
                    tooltip:
                      "T\u1ef7 l\u1ec7 khung h\xecnh mong mu\u1ed1n (width / height)",
                  }),
                ],
                e.prototype,
                "aspectRatio",
                void 0
              ),
              r([s, p], e)
            );
          })(cc.Component);
        (o.default = h), cc._RF.pop();
      },
      {},
    ],
    AspectRatioFitterHold: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "afe9eTjX85P+a3ZPlk7WnIV", "AspectRatioFitterHold");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          a = c.property,
          p = c.executeInEditMode,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.autoUpdate = !0),
                (e.aspectRatio = 1),
                (e.isFollowWidth = !0),
                (e.isFollowHeight = !0),
                (e.isHold = !0),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.start = function () {
                this.getAspectRatio();
              }),
              (e.prototype.update = function () {
                this.autoUpdate &&
                  (this.moveToParentCenter(), this.updateAspectRatio());
              }),
              (e.prototype.resetInEditor = function () {
                this.getAspectRatio(), (this.autoUpdate = !0);
              }),
              (e.prototype.getAspectRatio = function () {
                this.node &&
                  (this.aspectRatio = this.node.width / this.node.height);
              }),
              (e.prototype.updateAspectRatio = function () {
                var t = this.node.parent;
                if (t) {
                  var e,
                    o,
                    i = t.width,
                    n = t.height,
                    r = i / n;
                  if (this.isHold && r < this.aspectRatio)
                    return (this.node.width = i), void (this.node.height = n);
                  this.isFollowWidth && !this.isFollowHeight
                    ? (o = (e = i) / this.aspectRatio)
                    : this.isFollowHeight && !this.isFollowWidth
                    ? (e = (o = n) * this.aspectRatio)
                    : this.isFollowWidth &&
                      this.isFollowHeight &&
                      (i / n < this.aspectRatio
                        ? (o = (e = i) / this.aspectRatio)
                        : (e = (o = n) * this.aspectRatio)),
                    void 0 !== e &&
                      void 0 !== o &&
                      ((this.node.width = e), (this.node.height = o));
                }
              }),
              (e.prototype.getParentPointCenter = function () {
                var t = this.node.parent;
                if (t) {
                  var e = t.width,
                    o = t.height,
                    i = t.anchorX,
                    n = t.anchorY,
                    r = this.node.anchorX,
                    c = this.node.anchorY;
                  return cc.v2(
                    e * (0.5 - i + 0.5 - r),
                    o * (0.5 - n + 0.5 - c)
                  );
                }
              }),
              (e.prototype.moveToParentCenter = function () {
                var t = this.getParentPointCenter();
                t && this.node.setPosition(t);
              }),
              r([a], e.prototype, "autoUpdate", void 0),
              r(
                [
                  a({
                    tooltip:
                      "T\u1ef7 l\u1ec7 khung h\xecnh mong mu\u1ed1n (width / height)",
                  }),
                ],
                e.prototype,
                "aspectRatio",
                void 0
              ),
              r(
                [a({ tooltip: "Theo chi\u1ec1u r\u1ed9ng" })],
                e.prototype,
                "isFollowWidth",
                void 0
              ),
              r(
                [a({ tooltip: "Theo chi\u1ec1u cao" })],
                e.prototype,
                "isFollowHeight",
                void 0
              ),
              r(
                [
                  a({
                    tooltip:
                      "Khi chi\u1ec1u d\xe0i v\u01b0\u1ee3t ng\u1eefng Ratio th\xec s\u1ebd kh\xf4ng b\u1ecb thay \u0111\u1ed5i v\xe0 ng\u01b0\u1ee3c l\u1ea1i",
                  }),
                ],
                e.prototype,
                "isHold",
                void 0
              ),
              r([s, p], e)
            );
          })(cc.Component);
        (o.default = h), cc._RF.pop();
      },
      {},
    ],
    AspectRatioFitter: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "a91bfPvaw1BtIfdsgENYzcT", "AspectRatioFitter");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var c,
          s = t("../MoveLayoutToCenter"),
          a = cc._decorator,
          p = a.ccclass,
          h = a.property,
          d = a.executeInEditMode;
        (function (t) {
          (t[(t.None = 0)] = "None"),
            (t[(t.FitInside = 1)] = "FitInside"),
            (t[(t.FitOutside = 2)] = "FitOutside");
        })(c || (c = {}));
        var l = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.aspectRatio = 1),
              (e.isFollowWidth = !0),
              (e.isFollowHeight = !0),
              (e.aspectMode = c.FitInside),
              e
            );
          }
          return (
            n(e, t),
            (e.prototype.start = function () {
              s.MoveLayoutToCenter.ensureComponent(this.node);
            }),
            (e.prototype.onEnable = function () {
              this.getAspectRatio();
            }),
            (e.prototype.update = function () {
              this.aspectMode == c.FitInside
                ? this.InsideAspectRatio()
                : this.aspectMode == c.FitOutside && this.OutsideAspectRatio();
            }),
            (e.prototype.getAspectRatio = function () {
              if (this.node) {
                var t = this.node.getBoundingBox();
                this.aspectRatio = t.width / t.height;
              }
            }),
            (e.prototype.getRotatedDimensions = function (t, e, o) {
              var i = (o * Math.PI) / 180,
                n = Math.abs(Math.cos(i)),
                r = Math.abs(Math.sin(i));
              return { width: t * n + e * r, height: t * r + e * n };
            }),
            (e.prototype.InsideAspectRatio = function () {
              var t = this.node.parent;
              if (t) {
                var e,
                  o,
                  i = -t.angle,
                  n = this.getRotatedDimensions(t.width, t.height, i);
                this.isFollowWidth && !this.isFollowHeight
                  ? (o = (e = n.width) / this.aspectRatio)
                  : this.isFollowHeight && !this.isFollowWidth
                  ? (e = (o = n.height) * this.aspectRatio)
                  : this.isFollowWidth &&
                    this.isFollowHeight &&
                    (n.width / n.height < this.aspectRatio
                      ? (o = (e = n.width) / this.aspectRatio)
                      : (e = (o = n.height) * this.aspectRatio));
                var r = -this.node.angle,
                  c = this.getRotatedDimensions(e, o, -r);
                (this.node.width = c.width), (this.node.height = c.height);
              }
            }),
            (e.prototype.OutsideAspectRatio = function () {
              var t = this.node.parent;
              if (t) {
                var e,
                  o,
                  i = -t.angle,
                  n = this.getRotatedDimensions(t.width, t.height, i);
                this.isFollowWidth && !this.isFollowHeight
                  ? (o = (e = n.width) / this.aspectRatio)
                  : this.isFollowHeight && !this.isFollowWidth
                  ? (e = (o = n.height) * this.aspectRatio)
                  : this.isFollowWidth &&
                    this.isFollowHeight &&
                    (n.width / n.height > this.aspectRatio
                      ? (o = (e = n.width) / this.aspectRatio)
                      : (e = (o = n.height) * this.aspectRatio));
                var r = -this.node.angle,
                  c = this.getRotatedDimensions(e, o, -r);
                (this.node.width = c.width), (this.node.height = c.height);
              }
            }),
            r([h], e.prototype, "aspectRatio", void 0),
            r([h], e.prototype, "isFollowWidth", void 0),
            r([h], e.prototype, "isFollowHeight", void 0),
            r([h({ type: cc.Enum(c) })], e.prototype, "aspectMode", void 0),
            r([p, d], e)
          );
        })(cc.Component);
        (o.default = l), cc._RF.pop();
      },
      { "../MoveLayoutToCenter": "MoveLayoutToCenter" },
    ],
    AspectRatioManager: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "80653jUuk5C9ZbuB/rPlAnk", "AspectRatioManager");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.AspectRatioManager = void 0);
        var c = cc._decorator,
          s = c.ccclass,
          a = c.property,
          p = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.nodeWidth = []), (e.nodeHeight = []), (e.minRate = 1), e
              );
            }
            return (
              n(e, t),
              (e.prototype.onLoad = function () {
                this.updateNodeVisibility(),
                  cc.view.on("canvas-resize", this.updateNodeVisibility, this);
              }),
              (e.prototype.onDestroy = function () {
                cc.view.off("canvas-resize", this.updateNodeVisibility, this);
              }),
              (e.prototype.updateNodeVisibility = function () {
                this.getRate() < this.minRate
                  ? (this.setActiveNodes(this.nodeWidth, !1),
                    this.setActiveNodes(this.nodeHeight, !0))
                  : (this.setActiveNodes(this.nodeWidth, !0),
                    this.setActiveNodes(this.nodeHeight, !1));
              }),
              (e.prototype.setActiveNodes = function (t, e) {
                t.forEach(function (t) {
                  t && cc.isValid(t) && (t.active = e);
                });
              }),
              (e.prototype.getRate = function () {
                var t = cc.game.canvas;
                return t.width / t.height;
              }),
              r(
                [
                  a({
                    type: [cc.Node],
                    tooltip:
                      "Danh s\xe1ch node s\u1ebd \u0111\u01b0\u1ee3c active khi ratio >= 1 (m\xe0n h\xecnh ngang)",
                  }),
                ],
                e.prototype,
                "nodeWidth",
                void 0
              ),
              r(
                [
                  a({
                    type: [cc.Node],
                    tooltip:
                      "Danh s\xe1ch node s\u1ebd \u0111\u01b0\u1ee3c active khi ratio < 1 (m\xe0n h\xecnh d\u1ecdc)",
                  }),
                ],
                e.prototype,
                "nodeHeight",
                void 0
              ),
              r(
                [
                  a({
                    tooltip:
                      "T\u1ef7 l\u1ec7 khung h\xecnh t\u1ed1i thi\u1ec3u",
                  }),
                ],
                e.prototype,
                "minRate",
                void 0
              ),
              r([s], e)
            );
          })(cc.Component);
        (o.AspectRatioManager = p), cc._RF.pop();
      },
      {},
    ],
    AutoChangeVideo: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "2af3eetMDBHy7w5/BGkR/Vx", "AutoChangeVideo");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.AutoChangeVideo = void 0);
        var c = cc._decorator,
          s = c.ccclass,
          a = c.property,
          p = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.videoPlayer = null),
                (e.videoList = []),
                (e.maxRetries = 3),
                (e.retryDelay = 1),
                (e.retryCount = 0),
                (e.currentVideoIndex = 0),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.start = function () {
                var t = this;
                this.initializeVideo(),
                  window.addEventListener("beforeunload", function () {
                    var e;
                    cc.sys.localStorage.setItem(
                      "videoState",
                      JSON.stringify({
                        index: t.currentVideoIndex,
                        time:
                          (null === (e = t.videoPlayer) || void 0 === e
                            ? void 0
                            : e.currentTime) || 0,
                        timestamp: Date.now(),
                      })
                    );
                  }),
                  this.checkPreviousState(),
                  cc.game.on("websiteLoaded", this.restartVideo, this),
                  cc.game.on(
                    "websiteVisibilityChanged",
                    this.onVisibilityChanged,
                    this
                  );
              }),
              (e.prototype.onVisibilityChanged = function (t) {
                var e;
                (null === (e = t.detail) || void 0 === e
                  ? void 0
                  : e.isVisible) && this.checkAndRestartVideo();
              }),
              (e.prototype.checkPreviousState = function () {
                var t = this;
                try {
                  var e = cc.sys.localStorage.getItem("videoState");
                  if (e) {
                    var o = JSON.parse(e);
                    Date.now() - o.timestamp < 3e3 &&
                      ((this.currentVideoIndex = o.index),
                      this.scheduleOnce(function () {
                        t.playCurrentVideo(),
                          t.videoPlayer && (t.videoPlayer.currentTime = o.time);
                      }, 0.5)),
                      cc.sys.localStorage.removeItem("videoState");
                  }
                } catch (i) {
                  cc.error("Error restoring video state:", i);
                }
              }),
              (e.prototype.initializeVideo = function () {
                var t = this;
                this.videoPlayer && 0 !== this.videoList.length
                  ? (this.videoPlayer.node.off(
                      "completed",
                      this.onVideoCompleted,
                      this
                    ),
                    this.videoPlayer.node.off("error", this.onVideoError, this),
                    this.videoPlayer.node.on(
                      "completed",
                      this.onVideoCompleted,
                      this
                    ),
                    this.videoPlayer.node.on("error", this.onVideoError, this),
                    this.scheduleOnce(function () {
                      t.playCurrentVideo();
                    }, 0.1))
                  : cc.warn(
                      "Video player or video list not properly initialized"
                    );
              }),
              (e.prototype.playCurrentVideo = function () {
                var t = this;
                if (this.videoPlayer && this.videoList.length)
                  try {
                    if (
                      ((this.retryCount = 0),
                      !(null === navigator || void 0 === navigator
                        ? void 0
                        : navigator.onLine))
                    )
                      return void this.scheduleOnce(
                        this.playCurrentVideo.bind(this),
                        1
                      );
                    this.videoPlayer.isPlaying && this.videoPlayer.stop(),
                      (this.currentVideoIndex =
                        this.currentVideoIndex % this.videoList.length),
                      (this.videoPlayer.remoteURL =
                        this.videoList[this.currentVideoIndex].url),
                      this.scheduleOnce(function () {
                        t.videoPlayer &&
                          cc.isValid(t.videoPlayer) &&
                          (t.videoPlayer.play(),
                          t.schedule(t.checkVideoPlayback, 0.5, 5));
                      }, 0.3);
                  } catch (e) {
                    cc.error("Error playing video:", e),
                      this.handlePlaybackFailure();
                  }
                else cc.error("Video player or video list not initialized");
              }),
              (e.prototype.checkVideoPlayback = function () {
                this.videoPlayer &&
                  !this.videoPlayer.isPlaying &&
                  this.handlePlaybackFailure();
              }),
              (e.prototype.handlePlaybackFailure = function () {
                var t = this;
                this.retryCount < this.maxRetries
                  ? (cc.warn(
                      "Retry attempt " +
                        (this.retryCount + 1) +
                        " of " +
                        this.maxRetries
                    ),
                    this.retryCount++,
                    this.scheduleOnce(function () {
                      t.playCurrentVideo();
                    }, this.retryDelay * this.retryCount))
                  : (cc.error("Max retries reached, moving to next video"),
                    (this.retryCount = 0),
                    (this.currentVideoIndex =
                      (this.currentVideoIndex + 1) % this.videoList.length),
                    this.playCurrentVideo());
              }),
              (e.prototype.checkAndRestartVideo = function () {
                this.videoPlayer &&
                  (!this.videoPlayer.isPlaying ||
                    this.videoPlayer.currentTime >=
                      this.videoPlayer.getDuration()) &&
                  this.restartVideo();
              }),
              (e.prototype.onVideoCompleted = function () {
                (this.currentVideoIndex =
                  (this.currentVideoIndex + 1) % this.videoList.length),
                  this.playCurrentVideo();
              }),
              (e.prototype.onVideoError = function (t) {
                cc.error("Video playback error:", t),
                  this.handlePlaybackFailure();
              }),
              (e.prototype.onDestroy = function () {
                var t;
                (null === (t = this.videoPlayer) || void 0 === t
                  ? void 0
                  : t.node) &&
                  (this.videoPlayer.node.off(
                    "completed",
                    this.onVideoCompleted,
                    this
                  ),
                  this.videoPlayer.node.off("error", this.onVideoError, this)),
                  cc.game.off("websiteLoaded", this.restartVideo, this),
                  cc.game.off(
                    "websiteVisibilityChanged",
                    this.onVisibilityChanged,
                    this
                  ),
                  this.unscheduleAllCallbacks();
              }),
              (e.prototype.restartVideo = function () {
                (this.currentVideoIndex = 0),
                  (this.retryCount = 0),
                  this.initializeVideo();
              }),
              r([a(cc.VideoPlayer)], e.prototype, "videoPlayer", void 0),
              r(
                [a({ type: [cc.Asset], tooltip: "List of videos to play" })],
                e.prototype,
                "videoList",
                void 0
              ),
              r([a], e.prototype, "maxRetries", void 0),
              r([a], e.prototype, "retryDelay", void 0),
              r([s], e)
            );
          })(cc.Component);
        (o.AutoChangeVideo = p), cc._RF.pop();
      },
      {},
    ],
    AutoPlayClips: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "9b5eatJp6lCrYrJPb7CRvry", "AutoPlayClips");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.AutoPlayClips = void 0);
        var c = cc._decorator,
          s = c.ccclass,
          a = c.property,
          p = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.anim = null), (e.currentClipIndex = 0), e;
            }
            return (
              n(e, t),
              (e.prototype.onLoad = function () {
                this.anim &&
                  (this.anim.on("finished", this.onAnimationFinished, this),
                  this.playCurrentClip());
              }),
              (e.prototype.playCurrentClip = function () {
                if (this.anim && cc.isValid(this.anim)) {
                  var t = this.anim.getClips();
                  if (t && t.length > 0) {
                    this.currentClipIndex >= t.length &&
                      (this.currentClipIndex = 0);
                    var e = t[this.currentClipIndex].name;
                    e && this.anim.play(e);
                  }
                }
              }),
              (e.prototype.onAnimationFinished = function () {
                this.currentClipIndex++, this.playCurrentClip();
              }),
              (e.prototype.onDestroy = function () {
                this.anim &&
                  cc.isValid(this.anim) &&
                  this.anim.off("finished", this.onAnimationFinished, this);
              }),
              r([a(cc.Animation)], e.prototype, "anim", void 0),
              r([s], e)
            );
          })(cc.Component);
        (o.AutoPlayClips = p), cc._RF.pop();
      },
      {},
    ],
    AutoScale: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "6764ekXXFlBaZk5Dd3udtO3", "AutoScale");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          a = c.property,
          p = c.executeInEditMode,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.parentNode = null),
                (e.parentContentSize = cc.v2(0, 0)),
                (e.contentSize = cc.v2(0, 0)),
                (e.position = cc.v2(0, 0)),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.onEnable = function () {
                (this.parentNode = this.node.parent),
                  this.parentNode &&
                    (this.parentContentSize = cc.v2(
                      this.parentNode.width,
                      this.parentNode.height
                    )),
                  (this.contentSize = cc.v2(this.node.width, this.node.height)),
                  (this.position = cc.v2(this.node.x, this.node.y));
              }),
              (e.prototype.update = function () {
                this.updateTransform();
              }),
              (e.prototype.updateTransform = function () {
                if (this.parentNode) {
                  var t = this.parentNode.width / this.parentContentSize.x,
                    e = this.parentNode.height / this.parentContentSize.y;
                  (this.node.width = this.contentSize.x * t),
                    (this.node.height = this.contentSize.y * e),
                    (this.node.x = this.position.x * t),
                    (this.node.y = this.position.y * e);
                }
              }),
              r(
                [a({ type: cc.Node, tooltip: "Node cha" })],
                e.prototype,
                "parentNode",
                void 0
              ),
              r(
                [a({ tooltip: "K\xedch th\u01b0\u1edbc c\u1ee7a node cha" })],
                e.prototype,
                "parentContentSize",
                void 0
              ),
              r(
                [
                  a({
                    tooltip:
                      "K\xedch th\u01b0\u1edbc ban \u0111\u1ea7u c\u1ee7a node con",
                  }),
                ],
                e.prototype,
                "contentSize",
                void 0
              ),
              r(
                [
                  a({
                    tooltip:
                      "V\u1ecb tr\xed ban \u0111\u1ea7u c\u1ee7a node con",
                  }),
                ],
                e.prototype,
                "position",
                void 0
              ),
              r([s, p], e)
            );
          })(cc.Component);
        (o.default = h), cc._RF.pop();
      },
      {},
    ],
    Helloworld: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          a = c.property,
          p = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.label = null), (e.text = "hello"), e;
            }
            return (
              n(e, t),
              (e.prototype.start = function () {
                var t = this;
                (this.label.string = this.text),
                  (this.playSound = this.getComponent(cc.AudioSource)),
                  cc.resources.load(
                    "particle",
                    cc.ParticleAsset,
                    function (e, o) {
                      console.log("asset:" + o);
                      var i = new cc.Node("Particle"),
                        n = i.addComponent(cc.ParticleSystem);
                      (n.file = o), n.resetSystem(), t.node.addChild(i);
                    }
                  );
              }),
              (e.prototype.onBtnClick = function () {
                this.playSound.play(), console.log("Click me");
              }),
              r([a(cc.Label)], e.prototype, "label", void 0),
              r([a], e.prototype, "text", void 0),
              r([s], e)
            );
          })(cc.Component);
        (o.default = p), cc._RF.pop();
      },
      {},
    ],
    LayoutTopDown: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "c2d33WUH2hKWbc5dJIIuoAv", "LayoutTopDown");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.LayoutTopDown = void 0);
        var c = cc._decorator,
          s = c.ccclass,
          a = c.property,
          p = c.executeInEditMode,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.layoutTop = null),
                (e.layoutBottom = null),
                (e.layoutTopSize = cc.v2(0, 0)),
                (e.layoutBottomSize = cc.v2(0, 0)),
                (e.autoUpdate = !0),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.start = function () {}),
              (e.prototype.resetInEditor = function () {
                (this.autoUpdate = !0),
                  this.getLayoutTopDown(),
                  this.getLayoutSize(),
                  this.updateLayout();
              }),
              (e.prototype.getLayoutTopDown = function () {
                (this.layoutTop = this.node.children[1]),
                  (this.layoutBottom = this.node.children[0]),
                  this.layoutTop &&
                    (this.layoutTop.anchorX = this.layoutTop.anchorY = 0),
                  this.layoutBottom &&
                    (this.layoutBottom.anchorX = this.layoutBottom.anchorY = 0);
              }),
              (e.prototype.update = function () {
                this.autoUpdate && this.updateLayout();
              }),
              (e.prototype.updateLayout = function () {
                if (this.layoutTop && this.layoutBottom) {
                  for (
                    var t = this.node.width, e = 0, o = this.node.children;
                    e < o.length;
                    e++
                  )
                    o[e].width = t;
                  this.layoutTop.setPosition(
                    0,
                    this.node.height - this.layoutTop.height
                  ),
                    this.layoutBottom.setPosition(0, 0),
                    this.autoScaleLayout();
                }
              }),
              (e.prototype.autoScaleLayout = function () {
                var t = this.node.width;
                this.layoutTop.height + this.layoutBottom.height >
                this.node.height
                  ? ((this.layoutTop.height =
                      this.node.height - this.layoutBottom.height),
                    (this.layoutTop.width = t))
                  : ((this.layoutTop.width = t),
                    (this.layoutTop.height = this.layoutTopSize.y));
              }),
              (e.prototype.getLayoutSize = function () {
                this.layoutTop &&
                  this.layoutBottom &&
                  ((this.layoutTopSize = cc.v2(
                    this.layoutTop.width,
                    this.layoutTop.height
                  )),
                  (this.layoutBottomSize = cc.v2(
                    this.layoutBottom.width,
                    this.layoutBottom.height
                  )));
              }),
              r(
                [a({ type: cc.Node, tooltip: "Layout tr\xean" })],
                e.prototype,
                "layoutTop",
                void 0
              ),
              r(
                [a({ type: cc.Node, tooltip: "Layout d\u01b0\u1edbi" })],
                e.prototype,
                "layoutBottom",
                void 0
              ),
              r([a({ visible: !1 })], e.prototype, "layoutTopSize", void 0),
              r([a({ visible: !1 })], e.prototype, "layoutBottomSize", void 0),
              r(
                [
                  a({
                    tooltip:
                      "T\u1ef1 \u0111\u1ed9ng c\u1eadp nh\u1eadt trong runtime",
                  }),
                ],
                e.prototype,
                "autoUpdate",
                void 0
              ),
              r([s, p], e)
            );
          })(cc.Component);
        (o.LayoutTopDown = h), cc._RF.pop();
      },
      {},
    ],
    ListButtonOpenPage: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "24cd8Fo+0FDWKvM3QNl/EEa", "ListButtonOpenPage");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          a = c.property,
          p = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.testbutton = null),
                (e.buttons = []),
                (e.url = "https://example.com"),
                (e.delayTime = 1),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.start = function () {
                this.testbutton.on(
                  cc.Node.EventType.TOUCH_END,
                  this.handleButtonClick,
                  this
                );
              }),
              (e.prototype.onEnable = function () {
                console.log("[ListButtonOpenPage] Starting setup");
              }),
              (e.prototype.handleButtonClick = function () {
                var t = this;
                console.log(
                  "[ListButtonOpenPage] Button clicked, will open URL:",
                  this.url
                ),
                  this.scheduleOnce(function () {
                    window.open(t.url, "_blank");
                  }, this.delayTime);
              }),
              r([a(cc.Node)], e.prototype, "testbutton", void 0),
              r(
                [
                  a({
                    type: [cc.Node],
                    tooltip:
                      "Danh s\xe1ch c\xe1c button s\u1ebd m\u1edf c\xf9ng m\u1ed9t URL",
                  }),
                ],
                e.prototype,
                "buttons",
                void 0
              ),
              r(
                [
                  a({
                    type: cc.String,
                    tooltip:
                      "URL s\u1ebd \u0111\u01b0\u1ee3c m\u1edf khi nh\u1ea5n b\u1ea5t k\u1ef3 button n\xe0o",
                  }),
                ],
                e.prototype,
                "url",
                void 0
              ),
              r(
                [
                  a({
                    type: cc.Float,
                    tooltip:
                      "Th\u1eddi gian delay tr\u01b0\u1edbc khi m\u1edf link (gi\xe2y)",
                  }),
                ],
                e.prototype,
                "delayTime",
                void 0
              ),
              r([s], e)
            );
          })(cc.Component);
        (o.default = p), cc._RF.pop();
      },
      {},
    ],
    ListenWebBehavior: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "47f9cwZO6dCaZ5YpV87YobZ", "ListenWebBehavior");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          a =
            (c.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                n(e, t),
                (e.prototype.start = function () {
                  var t = this;
                  (this.websiteLoadedHandler = function (e) {
                    try {
                      var o = e.getUserData(),
                        i = o.isFirstLoad,
                        n = o.fromCache,
                        r = o.loadTime,
                        c = o.timestamp;
                      cc.log("Website loaded:", {
                        isFirstLoad: i,
                        fromCache: n,
                        loadTime: r,
                        timestamp: c,
                      }),
                        t.onWebsiteReady();
                    } catch (s) {
                      cc.error("Error handling website loaded event:", s);
                    }
                  }),
                    (this.visibilityChangedHandler = function (e) {
                      try {
                        var o = e.getUserData(),
                          i = o.isVisible;
                        o.timestamp,
                          i ? t.onWebsiteVisible() : t.onWebsiteHidden();
                      } catch (n) {
                        cc.error("Error handling visibility change:", n);
                      }
                    }),
                    cc.systemEvent.on(
                      "websiteLoaded",
                      this.websiteLoadedHandler,
                      this
                    ),
                    cc.systemEvent.on(
                      "websiteVisibilityChanged",
                      this.visibilityChangedHandler,
                      this
                    );
                }),
                (e.prototype.onWebsiteReady = function () {}),
                (e.prototype.onWebsiteVisible = function () {}),
                (e.prototype.onWebsiteHidden = function () {}),
                (e.prototype.onDestroy = function () {
                  cc.systemEvent.off(
                    "websiteLoaded",
                    this.websiteLoadedHandler,
                    this
                  ),
                    cc.systemEvent.off(
                      "websiteVisibilityChanged",
                      this.visibilityChangedHandler,
                      this
                    );
                }),
                r([s], e)
              );
            })(cc.Component));
        (o.default = a), cc._RF.pop();
      },
      {},
    ],
    MoveLayoutToCenter: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "882a9kuV+BFLYXkz+HHPFQ9", "MoveLayoutToCenter");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.MoveLayoutToCenter = void 0);
        var c = cc._decorator,
          s = c.ccclass,
          a = (c.property, c.executeInEditMode),
          p = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            var o;
            return (
              n(e, t),
              (o = e),
              (e.ensureComponent = function (t) {
                var e = t.getComponent(o);
                return e || (e = t.addComponent(o)), e;
              }),
              (e.prototype.update = function () {
                this.moveToParentCenter();
              }),
              (e.prototype.getPointCenter = function () {
                var t = this.node.parent;
                if (t) {
                  var e = t.width,
                    o = t.height,
                    i = this.node.width,
                    n = this.node.height,
                    r = t.anchorX,
                    c = t.anchorY,
                    s = this.node.anchorX,
                    a = this.node.anchorY,
                    p = cc.v2(e * (0.5 - r), o * (0.5 - c)),
                    h = i * (0.5 - s),
                    d = n * (0.5 - a);
                  return cc.v2(p.x - h, p.y - d);
                }
              }),
              (e.prototype.moveToParentCenter = function () {
                var t = this.getPointCenter();
                t && this.node.setPosition(t);
              }),
              (o = r([s, a], e))
            );
          })(cc.Component);
        (o.MoveLayoutToCenter = p), cc._RF.pop();
      },
      {},
    ],
    OnClickThis: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "aa8afshcExB2Kl8V3V0yIiV", "OnClickThis");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          a = c.property,
          p = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.nodesToActive = []),
                (e.nodesToDisable = []),
                (e.nodesToAnimation = []),
                (e.isAnimationPlaying = !1),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.onLoad = function () {
                this.addClickEvent();
              }),
              (e.prototype.addClickEvent = function () {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
              }),
              (e.prototype.onClick = function () {
                var t = this;
                this.nodesToActive.forEach(function (t) {
                  t && cc.isValid(t) && (t.active = !0);
                }),
                  this.nodesToDisable.forEach(function (t) {
                    t && cc.isValid(t) && (t.active = !1);
                  }),
                  this.nodesToAnimation.forEach(function (e) {
                    if (e && cc.isValid(e)) {
                      var o = e.getComponent(cc.Animation);
                      o &&
                        !t.isAnimationPlaying &&
                        (o.play(),
                        (t.isAnimationPlaying = !0),
                        o.on(
                          "finished",
                          function () {
                            t.isAnimationPlaying = !1;
                          },
                          t
                        ));
                    }
                  });
              }),
              (e.prototype.onDestroy = function () {
                this.node.off(
                  cc.Node.EventType.TOUCH_START,
                  this.onClick,
                  this
                ),
                  this.nodesToAnimation.forEach(function (t) {
                    if (t && cc.isValid(t)) {
                      var e = t.getComponent(cc.Animation);
                      e && e.off("finished");
                    }
                  });
              }),
              r(
                [
                  a({
                    type: [cc.Node],
                    tooltip:
                      "Danh s\xe1ch node s\u1ebd \u0111\u01b0\u1ee3c active khi click",
                  }),
                ],
                e.prototype,
                "nodesToActive",
                void 0
              ),
              r(
                [
                  a({
                    type: [cc.Node],
                    tooltip:
                      "Danh s\xe1ch node s\u1ebd \u0111\u01b0\u1ee3c disable khi click",
                  }),
                ],
                e.prototype,
                "nodesToDisable",
                void 0
              ),
              r(
                [
                  a({
                    type: [cc.Node],
                    tooltip:
                      "Danh s\xe1ch animation s\u1ebd \u0111\u01b0\u1ee3c play khi click",
                  }),
                ],
                e.prototype,
                "nodesToAnimation",
                void 0
              ),
              r([s], e)
            );
          })(cc.Component);
        (o.default = p), cc._RF.pop();
      },
      {},
    ],
    OnCountdown: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "9d16bDkmuxGLaRhBYsosHFq", "OnCountdown");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.OnCountdown = void 0);
        var c = t("../PlayableAds"),
          s = cc._decorator,
          a = cc.Component,
          p = cc.Node,
          h = (cc.VideoPlayer, s.ccclass),
          d = s.property,
          l = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.nodeActive = []),
                (e.nodeInactive = []),
                (e.delayTime = 5),
                (e.url = "https://example.com"),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.start = function () {
                var t = this;
                this.scheduleOnce(function () {
                  t.switchNodes();
                }, this.delayTime);
              }),
              (e.prototype.switchNodes = function () {
                var t = this;
                this.nodeActive.forEach(function (e) {
                  e && (t.node.active = !0);
                }),
                  this.nodeInactive.forEach(function (e) {
                    e && (t.node.active = !1);
                  }),
                  this.PlayableAds.installGame(),
                  this.PlayableAds.endGame();
              }),
              (e.prototype.onDestroy = function () {
                this.unscheduleAllCallbacks();
              }),
              r(
                [
                  d({
                    type: [p],
                    tooltip:
                      "Danh s\xe1ch node s\u1ebd \u0111\u01b0\u1ee3c active sau th\u1eddi gian \u0111\u1ecbnh s\u1eb5n",
                  }),
                ],
                e.prototype,
                "nodeActive",
                void 0
              ),
              r(
                [
                  d({
                    type: [p],
                    tooltip:
                      "Danh s\xe1ch node s\u1ebd \u0111\u01b0\u1ee3c inactive sau th\u1eddi gian \u0111\u1ecbnh s\u1eb5n",
                  }),
                ],
                e.prototype,
                "nodeInactive",
                void 0
              ),
              r(
                [
                  d({
                    tooltip:
                      "Th\u1eddi gian ch\u1edd tr\u01b0\u1edbc khi chuy\u1ec3n (gi\xe2y)",
                  }),
                ],
                e.prototype,
                "delayTime",
                void 0
              ),
              r(
                [
                  d({
                    tooltip:
                      "\u0110\u01b0\u1eddng d\u1eabn website s\u1ebd \u0111\u01b0\u1ee3c m\u1edf sau khi h\u1ebft th\u1eddi gian",
                  }),
                ],
                e.prototype,
                "url",
                void 0
              ),
              r([d(c.PlayableAds)], e.prototype, "PlayableAds", void 0),
              r([h("OnCountdown")], e)
            );
          })(a);
        (o.OnCountdown = l), cc._RF.pop();
      },
      { "../PlayableAds": "PlayableAds" },
    ],
    OpenPanelWhenClick: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "0d593pbRbVErKFPMKmPmLin", "OpenPanelWhenClick");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.OpenPanelWhenClick = void 0);
        var c = cc._decorator,
          s = cc.Component,
          a = cc.Node,
          p = c.ccclass,
          h = c.property,
          d = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.url = "https://example.com"), (e.delayTime = 0), e;
            }
            return (
              n(e, t),
              (e.prototype.start = function () {
                this.node &&
                  cc.isValid(this.node) &&
                  this.node.on(a.EventType.TOUCH_END, this.openPanel, this);
              }),
              (e.prototype.openPanel = function () {
                var t = this;
                this.node &&
                  cc.isValid(this.node) &&
                  this.url &&
                  "" !== this.url &&
                  this.scheduleOnce(function () {
                    try {
                      window.open(t.url, "_blank");
                    } catch (e) {
                      cc.error("Failed to open URL:", e);
                    }
                  }, this.delayTime);
              }),
              r(
                [h({ tooltip: "URL to open after delay" })],
                e.prototype,
                "url",
                void 0
              ),
              r(
                [h({ tooltip: "Delay time in seconds before opening URL" })],
                e.prototype,
                "delayTime",
                void 0
              ),
              r([p("OpenPanelWhenClick")], e)
            );
          })(s);
        (o.OpenPanelWhenClick = d), cc._RF.pop();
      },
      {},
    ],
    PlayAnimationClips: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "f3be1XLpDlH86kvObn61B0l", "PlayAnimationClips");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.PlayAnimationClips = void 0);
        var c = cc._decorator,
          s = c.ccclass,
          a = c.property,
          p = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.anim = null),
                (e.currentClipIndex = 0),
                (e.clipLoopIndex = 0),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.onLoad = function () {
                this.anim &&
                  (this.anim.on("finished", this.onAnimationFinished, this),
                  this.playCurrentClip());
              }),
              (e.prototype.playCurrentClip = function () {
                var t = this.anim.getClips();
                if (t && 0 !== t.length) {
                  this.currentClipIndex >= t.length &&
                    (this.currentClipIndex = this.clipLoopIndex);
                  var e = t[this.currentClipIndex].name;
                  e && cc.isValid(this.anim) && this.anim.play(e);
                }
              }),
              (e.prototype.onAnimationFinished = function () {
                this.currentClipIndex++, this.playCurrentClip();
              }),
              (e.prototype.onDestroy = function () {
                this.anim &&
                  cc.isValid(this.anim) &&
                  this.anim.off("finished", this.onAnimationFinished, this);
              }),
              r([a(cc.Animation)], e.prototype, "anim", void 0),
              r(
                [
                  a({
                    type: cc.Integer,
                    tooltip:
                      "Clip s\u1ebd \u0111\u01b0\u1ee3c l\u1eadp \u0111i l\u1eadp l\u1ea1i khi m\u1ea3ng h\u1ebft",
                  }),
                ],
                e.prototype,
                "clipLoopIndex",
                void 0
              ),
              r([s], e)
            );
          })(cc.Component);
        (o.PlayAnimationClips = p), cc._RF.pop();
      },
      {},
    ],
    PlayableAds: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "26583jIHtlHo67D1n/WcFYl", "PlayableAds");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.PlayableAds = void 0);
        var c = cc._decorator,
          s = cc.Component,
          a = cc.log,
          p = cc.warn,
          h = c.ccclass,
          d = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              n(e, t),
              (e.prototype.start = function () {
                this.checkAPI(), this.gameReady(), this.startGame();
              }),
              (e.prototype.checkAPI = function () {
                "undefined" != typeof window &&
                  (a("\ud83d\udd39 Checking Playturbo API..."),
                  a(
                    "\ud83d\udd39 gameStart exists:",
                    void 0 !== window.gameStart
                  ),
                  a("\ud83d\udd39 gameEnd exists:", void 0 !== window.gameEnd),
                  a(
                    "\ud83d\udd39 gameReplay exists:",
                    void 0 !== window.gameReplay
                  ),
                  a("\ud83d\udd39 install exists:", void 0 !== window.install));
              }),
              (e.prototype.gameReady = function () {
                "undefined" != typeof window && window.gameReady
                  ? (window.gameReady(), a(" Game is ready!"))
                  : p("\u26a0 gameReady API kh\xf4ng t\u1ed3n t\u1ea1i!");
              }),
              (e.prototype.startGame = function () {
                "undefined" != typeof window && window.gameStart
                  ? (window.gameStart(), a("Game Start!"))
                  : p("\u26a0 gameStart API kh\xf4ng t\u1ed3n t\u1ea1i!");
              }),
              (e.prototype.endGame = function () {
                "undefined" != typeof window && window.gameEnd
                  ? (window.gameEnd(), a(" Game End!"))
                  : p("\u26a0 gameEnd API kh\xf4ng t\u1ed3n t\u1ea1i!");
              }),
              (e.prototype.replayGame = function () {
                "undefined" != typeof window && window.gameReplay
                  ? (window.gameReplay(), a("Game Replay!"))
                  : p("\u26a0 gameReplay API kh\xf4ng t\u1ed3n t\u1ea1i!");
              }),
              (e.prototype.installGame = function () {
                "undefined" != typeof window && window.install
                  ? (window.install(), a(" Install Clicked!"))
                  : p("install API kh\xf4ng t\u1ed3n t\u1ea1i!");
              }),
              r([h("PlayableAds")], e)
            );
          })(s);
        (o.PlayableAds = d), cc._RF.pop();
      },
      {},
    ],
    RatioAutoScale: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "30929QUkfhAKZGrVPWATjCr", "RatioAutoScale");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          a = c.property,
          p = c.executeInEditMode,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.parentNode = null),
                (e.parentContentSize = cc.v2(0, 0)),
                (e.contentSize = cc.v2(0, 0)),
                (e.position = cc.v2(0, 0)),
                (e.autoUpdate = !0),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.resetInEditor = function () {
                this.node.parent &&
                  ((this.parentNode = this.node.parent),
                  (this.parentContentSize = cc.v2(
                    this.parentNode.width,
                    this.parentNode.height
                  )),
                  (this.contentSize = cc.v2(this.node.width, this.node.height)),
                  (this.position = cc.v2(this.node.x, this.node.y))),
                  (this.autoUpdate = !0);
              }),
              (e.prototype.update = function () {
                this.autoUpdate && this.updateUITransform();
              }),
              (e.prototype.updateUITransform = function () {
                if (this.parentNode) {
                  var t = this.parentNode.width / this.parentContentSize.x,
                    e = this.parentNode.height / this.parentContentSize.y;
                  (this.node.width = this.contentSize.x * t),
                    (this.node.height = this.contentSize.y * e),
                    (this.node.x = this.position.x * t),
                    (this.node.y = this.position.y * e);
                }
              }),
              r(
                [a({ type: cc.Node, tooltip: "Node cha" })],
                e.prototype,
                "parentNode",
                void 0
              ),
              r(
                [a({ tooltip: "K\xedch th\u01b0\u1edbc c\u1ee7a node cha" })],
                e.prototype,
                "parentContentSize",
                void 0
              ),
              r(
                [
                  a({
                    tooltip:
                      "K\xedch th\u01b0\u1edbc ban \u0111\u1ea7u c\u1ee7a node con",
                  }),
                ],
                e.prototype,
                "contentSize",
                void 0
              ),
              r(
                [
                  a({
                    tooltip:
                      "V\u1ecb tr\xed ban \u0111\u1ea7u c\u1ee7a node con",
                  }),
                ],
                e.prototype,
                "position",
                void 0
              ),
              r(
                [
                  a({
                    tooltip:
                      "T\u1ef1 \u0111\u1ed9ng c\u1eadp nh\u1eadt trong runtime",
                  }),
                ],
                e.prototype,
                "autoUpdate",
                void 0
              ),
              r([s, p], e)
            );
          })(cc.Component);
        (o.default = h), cc._RF.pop();
      },
      {},
    ],
    ScaleFollowLayout: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "d69ae8KECFDc79mBO2qlOh2", "ScaleFollowLayout");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          a = c.property,
          p = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e.parent = null),
                (e.followWidth = !0),
                (e.followHeight = !0),
                e
              );
            }
            return (
              n(e, t),
              (e.prototype.start = function () {
                this.updateScale();
              }),
              (e.prototype.update = function () {
                this.updateScale();
              }),
              (e.prototype.updateScale = function () {
                if (this.parent) {
                  var t = this.parent.width,
                    e = this.parent.height,
                    o = t / this.node.width,
                    i = e / this.node.height;
                  if (this.followWidth && this.followHeight) {
                    var n = Math.min(o, i);
                    (this.node.scaleX = n), (this.node.scaleY = n);
                  } else
                    this.followWidth
                      ? (this.node.scaleX = o)
                      : this.followHeight && (this.node.scaleY = i);
                }
              }),
              r(
                [a({ type: cc.Node, tooltip: "Node cha" })],
                e.prototype,
                "parent",
                void 0
              ),
              r(
                [a({ tooltip: "Theo chi\u1ec1u r\u1ed9ng" })],
                e.prototype,
                "followWidth",
                void 0
              ),
              r(
                [a({ tooltip: "Theo chi\u1ec1u cao" })],
                e.prototype,
                "followHeight",
                void 0
              ),
              r([s], e)
            );
          })(cc.Component);
        (o.default = p), cc._RF.pop();
      },
      {},
    ],
    ScreenRatio: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "89ecfk6e3dD6rahWp6nZiRc", "ScreenRatio");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          a =
            (c.property,
            (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return (
                n(e, t),
                (e.prototype.start = function () {
                  cc.view.on("canvas-resize", this.onResize, this),
                    this.onResize();
                }),
                (e.prototype.onResize = function () {
                  var t = cc.view.getFrameSize(),
                    e = t.width / t.height;
                  cc.log("Screen ratio: " + e);
                  var o = new cc.Event.EventCustom("screenRatioChanged", !0);
                  o.setUserData({ ratio: e }), this.node.dispatchEvent(o);
                }),
                (e.prototype.onDestroy = function () {
                  cc.view.off("canvas-resize", this.onResize, this);
                }),
                r([s], e)
              );
            })(cc.Component));
        (o.default = a), cc._RF.pop();
      },
      {},
    ],
    Test: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "66feb8U6PBPLYsqVsoZWokb", "Test");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.Test = void 0);
        var c = cc._decorator,
          s = cc.Component,
          a = (cc.Node, cc.Label),
          p = c.ccclass,
          h = c.property,
          d = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (
                (e._count = 0), (e.increment = 1), (e.countLabel = null), e
              );
            }
            return (
              n(e, t),
              (e.prototype.start = function () {
                this.updateLabel();
              }),
              (e.prototype.updateLabel = function () {
                this.countLabel &&
                  (this.countLabel.string = "Count: " + this._count);
              }),
              (e.prototype.increaseCount = function () {
                (this._count += this.increment),
                  this.updateLabel(),
                  console.log("Count increased to:", this._count);
              }),
              (e.prototype.resetCount = function () {
                (this._count = 0),
                  this.updateLabel(),
                  console.log("Count reset");
              }),
              r([h], e.prototype, "_count", void 0),
              r(
                [
                  h({
                    tooltip:
                      "T\u1ed1c \u0111\u1ed9 thay \u0111\u1ed5i gi\xe1 tr\u1ecb",
                  }),
                ],
                e.prototype,
                "increment",
                void 0
              ),
              r([h(a)], e.prototype, "countLabel", void 0),
              r([p("Test")], e)
            );
          })(s);
        (o.Test = d), cc._RF.pop();
      },
      {},
    ],
    VerticalLayoutNoScale: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "1e20dUk9v1M+5SDgxYBp4fb", "VerticalLayoutNoScale");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          a = c.property,
          p = c.executeInEditMode,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.autoUpdate = !0), (e.childSize = []), e;
            }
            return (
              n(e, t),
              (e.prototype.start = function () {
                this.initChildSize(),
                  (this.node.anchorX = 0),
                  (this.node.anchorY = 0),
                  this.updateLayout();
                for (var t = 0, e = this.node.children; t < e.length; t++) {
                  var o = e[t];
                  (o.anchorX = 0), (o.anchorY = 0);
                }
              }),
              (e.prototype.resetInEditor = function () {
                this.initChildSize(), (this.autoUpdate = !0);
              }),
              (e.prototype.update = function () {
                this.autoUpdate || this.updateLayout();
              }),
              (e.prototype.initChildSize = function () {
                this.childSize = [];
                for (var t = 0, e = this.node.children; t < e.length; t++) {
                  var o = e[t];
                  this.childSize.push(cc.v2(o.width, o.height));
                }
              }),
              (e.prototype.updateLayout = function () {
                var t = this.node.width,
                  e = this.getChildHeight(),
                  o = this.node.children[this.node.children.length - 1],
                  i = this.node.height - o.height;
                this.node.children[this.node.children.length - 1].setPosition(
                  cc.v2(0, i)
                );
                for (
                  var n = cc.v2(0, 0), r = 0;
                  r < this.node.children.length - 1;
                  r++
                )
                  this.node.children[r].setPosition(n), (n.y += e);
                for (r = 0; r < this.node.children.length; r++)
                  this.node.children[r].width = t;
              }),
              (e.prototype.getChildHeight = function () {
                var t = this.node.children.length;
                return this.node.height / t;
              }),
              r(
                [
                  a({
                    tooltip:
                      "T\u1ef1 \u0111\u1ed9ng c\u1eadp nh\u1eadt trong runtime",
                  }),
                ],
                e.prototype,
                "autoUpdate",
                void 0
              ),
              r([a({ type: [cc.Vec2] })], e.prototype, "childSize", void 0),
              r([s, p], e)
            );
          })(cc.Component);
        (o.default = h), cc._RF.pop();
      },
      {},
    ],
    VerticalLayout: [
      function (t, e, o) {
        "use strict";
        cc._RF.push(e, "a52e2KrCABAYoiSUVSODViG", "VerticalLayout");
        var i,
          n =
            (this && this.__extends) ||
            ((i = function (t, e) {
              return (i =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
                })(t, e);
            }),
            function (t, e) {
              function o() {
                this.constructor = t;
              }
              i(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((o.prototype = e.prototype), new o()));
            }),
          r =
            (this && this.__decorate) ||
            function (t, e, o, i) {
              var n,
                r = arguments.length,
                c =
                  r < 3
                    ? e
                    : null === i
                    ? (i = Object.getOwnPropertyDescriptor(e, o))
                    : i;
              if (
                "object" == typeof Reflect &&
                "function" == typeof Reflect.decorate
              )
                c = Reflect.decorate(t, e, o, i);
              else
                for (var s = t.length - 1; s >= 0; s--)
                  (n = t[s]) &&
                    (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
              return r > 3 && c && Object.defineProperty(e, o, c), c;
            };
        Object.defineProperty(o, "__esModule", { value: !0 });
        var c = cc._decorator,
          s = c.ccclass,
          a = c.property,
          p = c.executeInEditMode,
          h = (function (t) {
            function e() {
              var e = (null !== t && t.apply(this, arguments)) || this;
              return (e.spacing = 10), e;
            }
            return (
              n(e, t),
              (e.prototype.start = function () {
                (this.node.anchorX = 0),
                  (this.node.anchorY = 0),
                  this.updateLayout();
              }),
              (e.prototype.update = function () {
                this.updateLayout();
              }),
              (e.prototype.updateLayout = function () {
                for (
                  var t = this.node.width,
                    e = this.getChildHeight(),
                    o = 0,
                    i = this.node.children;
                  o < i.length;
                  o++
                )
                  ((c = i[o]).width = t), (c.height = e);
                for (
                  var n = cc.v3(0, 0, 0), r = 0;
                  r < this.node.children.length;
                  r++
                ) {
                  var c;
                  ((c = this.node.children[r]).anchorX = 0),
                    (c.anchorY = 0),
                    c.setPosition(n),
                    (n.y += e + this.getSpacing());
                }
              }),
              (e.prototype.getSpacing = function () {
                var t = this.node.children.length;
                return (this.spacing * (t - 1)) / t;
              }),
              (e.prototype.getChildHeight = function () {
                var t = this.node.children.length;
                return (this.node.height - this.getSpacing() * (t - 1)) / t;
              }),
              r(
                [
                  a({
                    type: cc.Float,
                    tooltip:
                      "Kho\u1ea3ng c\xe1ch gi\u1eefa c\xe1c ph\u1ea7n t\u1eed con",
                    min: 0,
                  }),
                ],
                e.prototype,
                "spacing",
                void 0
              ),
              r([s, p], e)
            );
          })(cc.Component);
        (o.default = h), cc._RF.pop();
      },
      {},
    ],
    "use_v2.1-2.2.1_cc.Toggle_event": [
      function (t, e) {
        "use strict";
        cc._RF.push(
          e,
          "17ba0RZdqhEd7knP5K3/7CK",
          "use_v2.1-2.2.1_cc.Toggle_event"
        ),
          cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0),
          cc._RF.pop();
      },
      {},
    ],
  },
  {},
  [
    "ListButtonOpenPage",
    "OnClickThis",
    "OpenPanelWhenClick",
    "OnCountdown",
    "Helloworld",
    "AddAutoScale",
    "AspectRatioFitter",
    "AspectRatioFitterFollowNode",
    "AspectRatioFitterHold",
    "AutoScale",
    "MoveLayoutToCenter",
    "VerticalLayout",
    "AspectRatioManager",
    "AutoChangeVideo",
    "AutoPlayClips",
    "LayoutTopDown",
    "ListenWebBehavior",
    "PlayAnimationClips",
    "RatioAutoScale",
    "ScaleFollowLayout",
    "ScreenRatio",
    "VerticalLayoutNoScale",
    "PlayableAds",
    "Test",
    "use_v2.1-2.2.1_cc.Toggle_event",
  ]
);
