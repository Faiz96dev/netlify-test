(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [3], {
        ZMKu: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return sr
            })), n.d(e, "b", (function() {
                return er
            })), n.d(e, "c", (function() {
                return pr
            })), n.d(e, "d", (function() {
                return dr
            }));
            var r = n("mrSG"),
                i = n("eUsl"),
                o = n("tKSW"),
                a = n("82gj"),
                s = n("Ibe6"),
                u = n("Neuu"),
                c = n("lyHL"),
                l = n("q1tI"),
                f = n.n(l),
                d = function(t) {
                    return "object" === typeof t && t.hasOwnProperty("current")
                },
                h = function() {
                    function t(t) {
                        var e, n = this;
                        this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.updateAndNotify = function(t, e) {
                            void 0 === e && (e = !0), n.prev = n.current, n.current = t, n.updateSubscribers && n.prev !== n.current && n.updateSubscribers.forEach(n.notifySubscriber), e && n.renderSubscribers && n.renderSubscribers.forEach(n.notifySubscriber);
                            var r = Object(i.c)(),
                                o = r.delta,
                                a = r.timestamp;
                            n.lastUpdated !== a && (n.timeDelta = o, n.lastUpdated = a, i.b.postRender(n.scheduleVelocityCheck))
                        }, this.notifySubscriber = function(t) {
                            t(n.current)
                        }, this.scheduleVelocityCheck = function() {
                            return i.b.postRender(n.velocityCheck)
                        }, this.velocityCheck = function(t) {
                            t.timestamp !== n.lastUpdated && (n.prev = n.current)
                        }, this.set(t, !1), this.canTrackVelocity = (e = this.current, !isNaN(parseFloat(e)))
                    }
                    return t.prototype.subscribeTo = function(t, e) {
                        var n = this,
                            r = function() {
                                return e(n.current)
                            };
                        return t.add(r),
                            function() {
                                return t.delete(r)
                            }
                    }, t.prototype.onChange = function(t) {
                        return this.updateSubscribers || (this.updateSubscribers = new Set), this.subscribeTo(this.updateSubscribers, t)
                    }, t.prototype.clearListeners = function() {
                        var t;
                        null === (t = this.updateSubscribers) || void 0 === t || t.clear()
                    }, t.prototype.onRenderRequest = function(t) {
                        return this.renderSubscribers || (this.renderSubscribers = new Set), this.notifySubscriber(t), this.subscribeTo(this.renderSubscribers, t)
                    }, t.prototype.attach = function(t) {
                        this.passiveEffect = t
                    }, t.prototype.set = function(t, e) {
                        void 0 === e && (e = !0), e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                    }, t.prototype.get = function() {
                        return this.current
                    }, t.prototype.getPrevious = function() {
                        return this.prev
                    }, t.prototype.getVelocity = function() {
                        return this.canTrackVelocity ? Object(o.n)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                    }, t.prototype.start = function(t) {
                        var e = this;
                        return this.stop(), new Promise((function(n) {
                            e.stopAnimation = t(n)
                        })).then((function() {
                            return e.clearAnimation()
                        }))
                    }, t.prototype.stop = function() {
                        this.stopAnimation && this.stopAnimation(), this.clearAnimation()
                    }, t.prototype.isAnimating = function() {
                        return !!this.stopAnimation
                    }, t.prototype.clearAnimation = function() {
                        this.stopAnimation = null
                    }, t.prototype.destroy = function() {
                        this.updateSubscribers && this.updateSubscribers.clear(), this.renderSubscribers && this.renderSubscribers.clear(), this.stop()
                    }, t
                }();

            function p(t) {
                return new h(t)
            }
            var v = function() {
                function t(t, e) {
                    var n = this;
                    this.children = new Set, this.latest = {}, this.values = new Map, this.valueSubscriptions = new Map, this.config = {}, this.update = function() {
                        return n.config.onUpdate(n.latest)
                    }, this.triggerRender = function() {
                        return n.render()
                    }, this.scheduleRender = function() {
                        return i.b.render(n.triggerRender, !1, !0)
                    }, this.ref = function(t) {
                        t ? n.mount(t) : n.unmount(), n.externalRef && ("function" === typeof n.externalRef ? n.externalRef(t) : d(n.externalRef) && (n.externalRef.current = t))
                    }, this.parent = t, this.rootParent = t ? t.rootParent : this, this.treePath = t ? Object(r.d)(t.treePath, [t]) : [], this.depth = t ? t.depth + 1 : 0, this.externalRef = e
                }
                return t.prototype.subscribe = function(t) {
                    var e = this;
                    return this.children.add(t),
                        function() {
                            return e.children.delete(t)
                        }
                }, t.prototype.hasValue = function(t) {
                    return this.values.has(t)
                }, t.prototype.addValue = function(t, e) {
                    this.hasValue(t) && this.removeValue(t), this.values.set(t, e), this.latest[t] = e.get(), this.element && this.subscribeToValue(t, e)
                }, t.prototype.removeValue = function(t) {
                    var e = this.valueSubscriptions.get(t);
                    e && e(), this.values.delete(t), delete this.latest[t], this.valueSubscriptions.delete(t)
                }, t.prototype.getValue = function(t, e) {
                    var n = this.values.get(t);
                    return void 0 === n && void 0 !== e && (n = new h(e), this.addValue(t, n)), n
                }, t.prototype.forEachValue = function(t) {
                    this.values.forEach(t)
                }, t.prototype.getInstance = function() {
                    return this.element
                }, t.prototype.updateConfig = function(t) {
                    void 0 === t && (t = {}), this.config = Object(r.a)({}, t)
                }, t.prototype.setSingleStaticValue = function(t, e) {
                    this.latest[t] = e
                }, t.prototype.setStaticValues = function(t, e) {
                    if ("string" === typeof t) this.setSingleStaticValue(t, e);
                    else
                        for (var n in t) this.setSingleStaticValue(n, t[n])
                }, t.prototype.scheduleUpdateLayoutDelta = function() {
                    i.b.update(this.rootParent.updateLayoutDelta, !1, !0)
                }, t.prototype.subscribeToValue = function(t, e) {
                    var n = this,
                        r = e.onChange((function(e) {
                            n.setSingleStaticValue(t, e), n.latest[t] = e, n.config.onUpdate && i.b.update(n.update, !1, !0)
                        })),
                        o = e.onRenderRequest(this.scheduleRender);
                    this.valueSubscriptions.set(t, (function() {
                        r(), o()
                    }))
                }, t.prototype.mount = function(t) {
                    var e = this;
                    Object(a.a)(!!t, "No ref found. Ensure components created with motion.custom forward refs using React.forwardRef"), this.parent && (this.removeFromParent = this.parent.subscribe(this)), this.element = this.current = t, this.forEachValue((function(t, n) {
                        return e.subscribeToValue(n, t)
                    }))
                }, t.prototype.unmount = function() {
                    var t = this;
                    this.forEachValue((function(e, n) {
                        return t.removeValue(n)
                    })), i.a.update(this.update), i.a.render(this.render), this.removeFromParent && this.removeFromParent()
                }, t
            }();

            function m(t) {
                return t
            }

            function g(t) {
                var e = t.top;
                return {
                    x: {
                        min: t.left,
                        max: t.right
                    },
                    y: {
                        min: e,
                        max: t.bottom
                    }
                }
            }

            function y(t) {
                return {
                    x: Object(r.a)({}, t.x),
                    y: Object(r.a)({}, t.y)
                }
            }
            var b = {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            };

            function x() {
                return {
                    x: Object(r.a)({}, b),
                    y: Object(r.a)({}, b)
                }
            }
            var j = Object(r.a)(Object(r.a)({}, s.g), {
                    transform: Math.round
                }),
                O = {
                    color: s.b,
                    backgroundColor: s.b,
                    outlineColor: s.b,
                    fill: s.b,
                    stroke: s.b,
                    borderColor: s.b,
                    borderTopColor: s.b,
                    borderRightColor: s.b,
                    borderBottomColor: s.b,
                    borderLeftColor: s.b,
                    borderWidth: s.j,
                    borderTopWidth: s.j,
                    borderRightWidth: s.j,
                    borderBottomWidth: s.j,
                    borderLeftWidth: s.j,
                    borderRadius: s.j,
                    radius: s.j,
                    borderTopLeftRadius: s.j,
                    borderTopRightRadius: s.j,
                    borderBottomRightRadius: s.j,
                    borderBottomLeftRadius: s.j,
                    width: s.j,
                    maxWidth: s.j,
                    height: s.j,
                    maxHeight: s.j,
                    size: s.j,
                    top: s.j,
                    right: s.j,
                    bottom: s.j,
                    left: s.j,
                    padding: s.j,
                    paddingTop: s.j,
                    paddingRight: s.j,
                    paddingBottom: s.j,
                    paddingLeft: s.j,
                    margin: s.j,
                    marginTop: s.j,
                    marginRight: s.j,
                    marginBottom: s.j,
                    marginLeft: s.j,
                    rotate: s.d,
                    rotateX: s.d,
                    rotateY: s.d,
                    rotateZ: s.d,
                    scale: s.l,
                    scaleX: s.l,
                    scaleY: s.l,
                    scaleZ: s.l,
                    skew: s.d,
                    skewX: s.d,
                    skewY: s.d,
                    distance: s.j,
                    translateX: s.j,
                    translateY: s.j,
                    translateZ: s.j,
                    x: s.j,
                    y: s.j,
                    z: s.j,
                    perspective: s.j,
                    opacity: s.a,
                    originX: s.i,
                    originY: s.i,
                    originZ: s.j,
                    zIndex: j,
                    fillOpacity: s.a,
                    strokeOpacity: s.a,
                    numOctaves: j
                },
                E = [s.g, s.j, s.h, s.d, s.n, s.m, {
                    test: function(t) {
                        return "auto" === t
                    },
                    parse: function(t) {
                        return t
                    }
                }],
                w = function(t) {
                    return function(e) {
                        return e.test(t)
                    }
                },
                P = function(t) {
                    return E.find(w(t))
                },
                C = Object(r.d)(E, [s.b, s.c]),
                S = function(t) {
                    return C.find(w(t))
                },
                V = function(t) {
                    return O[t]
                },
                A = function(t, e) {
                    return e && "number" === typeof t ? e.transform(t) : t
                },
                T = ["", "X", "Y", "Z"],
                L = ["x", "y", "z"];

            function k(t, e) {
                return L.indexOf(t) - L.indexOf(e)
            }["translate", "scale", "rotate", "skew", "transformPerspective"].forEach((function(t) {
                T.forEach((function(e) {
                    return L.push(t + e)
                }))
            }));
            var B = new Set(L);

            function R(t) {
                return B.has(t)
            }
            var D = new Set(["originX", "originY", "originZ"]);

            function M(t) {
                return D.has(t)
            }
            var F = {
                x: "translateX",
                y: "translateY",
                z: "translateZ"
            };

            function U(t) {
                return t.startsWith("--")
            }

            function I(t, e) {
                return t / (e.max - e.min) * 100
            }
            var H = {
                    process: function(t, e) {
                        return "number" !== typeof t ? t : I(t, e.x) + "% " + I(t, e.y) + "%"
                    }
                },
                Y = {
                    borderRadius: Object(r.a)(Object(r.a)({}, H), {
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    }),
                    borderTopLeftRadius: H,
                    borderTopRightRadius: H,
                    borderBottomLeftRadius: H,
                    borderBottomRightRadius: H,
                    boxShadow: {
                        process: function(t, e, n, r) {
                            var i = s.c.parse(t),
                                a = s.c.createTransformer(t),
                                u = n.x.scale * r.x,
                                c = n.y.scale * r.y;
                            i[1] /= u, i[2] /= c;
                            var l = Object(o.h)(u, c, .5);
                            return "number" === typeof i[3] && (i[3] /= l), "number" === typeof i[4] && (i[4] /= l), a(i)
                        }
                    }
                };

            function X(t, e) {
                return "translate3d(" + t.x.translate / e.x + "px, " + t.y.translate / e.y + "px, 0) scale(" + t.x.scale + ", " + t.y.scale + ")"
            }

            function z(t, e, n, r, i, o, a, s, u, c, l, f) {
                var d = a.enableHardwareAcceleration,
                    h = a.transformTemplate,
                    p = a.allowTransformNone;
                o.length = 0;
                var v = !!s,
                    m = !!s,
                    g = !0;
                for (var y in t) {
                    var b = t[y],
                        x = V(y),
                        j = A(b, x);
                    if (R(y)) {
                        if (v = !0, r[y] = j, o.push(y), !g) continue;
                        b !== (void 0 !== x.default ? x.default : 0) && (g = !1)
                    } else if (M(y)) i[y] = j, m = !0;
                    else if ("transform" !== y || "function" !== typeof b) {
                        var O = U(y) ? n : e;
                        if (s && Y[y]) {
                            var E = Y[y].process(b, f, u, l),
                                w = Y[y].applyTo;
                            if (w)
                                for (var P = w.length, C = 0; C < P; C++) O[w[C]] = E;
                            else O[y] = E
                        } else O[y] = j
                    }
                }
                if ((v || h) && (s ? (e.transform = X(c, l), h && (e.transform = h(r, e.transform))) : e.transform = function(t, e, n, r, i, o) {
                        void 0 === i && (i = !0), void 0 === o && (o = !0);
                        var a = "",
                            s = !1;
                        e.sort(k);
                        for (var u = e.length, c = 0; c < u; c++) {
                            var l = e[c];
                            a += (F[l] || l) + "(" + t[l] + ") ", "z" === l && (s = !0)
                        }
                        return !s && i ? a += "translateZ(0)" : a = a.trim(), n ? a = n(t, r ? "" : a) : o && r && (a = "none"), a
                    }(r, o, h, g, d, p)), m) {
                    var S = s ? 100 * c.x.origin + "%" : i.originX || "50%",
                        T = s ? 100 * c.y.origin + "%" : i.originY || "50%",
                        L = i.originZ || "0";
                    e.transformOrigin = S + " " + T + " " + L
                }
            }

            function N(t, e) {
                t.min = e.min, t.max = e.max
            }

            function W(t, e, n) {
                return n + e * (t - n)
            }

            function G(t, e, n, r, i) {
                return void 0 !== i && (t = W(t, i, r)), W(t, n, r) + e
            }

            function Z(t, e, n, r, i) {
                void 0 === e && (e = 0), void 0 === n && (n = 1), t.min = G(t.min, e, n, r, i), t.max = G(t.max, e, n, r, i)
            }

            function K(t, e) {
                var n = e.x,
                    r = e.y;
                Z(t.x, n.translate, n.scale, n.originPoint), Z(t.y, r.translate, r.scale, r.originPoint)
            }

            function $(t, e, n, r) {
                var i = r[0],
                    a = r[1],
                    s = r[2];
                t.min = e.min, t.max = e.max;
                var u = Object(o.h)(e.min, e.max, n[s] || .5);
                Z(t, n[i], n[a], u, n.scale)
            }
            var _ = ["x", "scaleX", "originX"],
                q = ["y", "scaleY", "originY"];

            function J(t, e, n, r, i) {
                return t = W(t -= e, 1 / n, r), void 0 !== i && (t = W(t, 1 / i, r)), t
            }

            function Q(t, e, n) {
                var r = n[0],
                    i = n[1],
                    a = n[2];
                ! function(t, e, n, r, i) {
                    void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === r && (r = .5);
                    var a = Object(o.h)(t.min, t.max, r) - e;
                    t.min = J(t.min, e, n, a, i), t.max = J(t.max, e, n, a, i)
                }(t, e[r], e[i], e[a], e.scale)
            }
            var tt = Object(o.d)(0, 1);

            function et(t, e, n) {
                return void 0 === e && (e = 0), void 0 === n && (n = .01), Object(o.e)(t, e) < n
            }

            function nt(t, e) {
                var n = .5,
                    r = t.max - t.min,
                    i = e.max - e.min;
                return i > r ? n = Object(o.l)(e.min, e.max - r, t.min) : r > i && (n = Object(o.l)(t.min, t.max - i, e.min)), tt(n)
            }

            function rt(t, e, n, r) {
                var i = e.max - e.min,
                    a = n.max - n.min;
                t.origin = void 0 === r ? nt(e, n) : r, t.originPoint = Object(o.h)(e.min, e.max, t.origin), t.scale = a / i, et(t.scale, 1, 1e-4) && (t.scale = 1), t.translate = function(t, e, n) {
                    var r = Object(o.h)(t.min, t.max, n);
                    return Object(o.h)(e.min, e.max, n) - r
                }(e, n, t.origin), et(t.translate) && (t.translate = 0)
            }

            function it(t, e, n, r) {
                rt(t.x, e.x, n.x, r), rt(t.y, e.y, n.y, r)
            }

            function ot(t) {
                return [t("x"), t("y")]
            }
            var at = function(t) {
                    return Array.isArray(t)
                },
                st = function() {
                    return {
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                        restDelta: .5,
                        restSpeed: 10
                    }
                },
                ut = function(t) {
                    return {
                        type: "spring",
                        stiffness: 700,
                        damping: 0 === t ? 100 : 35
                    }
                },
                ct = function() {
                    return {
                        ease: "linear",
                        duration: .3
                    }
                },
                lt = function(t) {
                    return {
                        type: "keyframes",
                        duration: .8,
                        values: t
                    }
                },
                ft = {
                    x: st,
                    y: st,
                    z: st,
                    rotate: st,
                    rotateX: st,
                    rotateY: st,
                    rotateZ: st,
                    scaleX: ut,
                    scaleY: ut,
                    scale: ut,
                    opacity: ct,
                    backgroundColor: ct,
                    color: ct,
                    default: ut
                },
                dt = function(t) {
                    var e = t.to,
                        n = t.duration;
                    return Object(u.a)((function(t) {
                        var r = t.update,
                            i = t.complete;
                        r(e), n ? Object(u.b)(n).start({
                            complete: i
                        }) : i()
                    }))
                },
                ht = function(t) {
                    if (Array.isArray(t)) {
                        Object(a.a)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        var e = t[0],
                            n = t[1],
                            r = t[2],
                            i = t[3];
                        return Object(c.cubicBezier)(e, n, r, i)
                    }
                    return "string" === typeof t ? (Object(a.a)(void 0 !== c[t], "Invalid easing type '" + t + "'"), c[t]) : t
                },
                pt = function(t) {
                    return Array.isArray(t) && "number" !== typeof t[0]
                },
                vt = function(t, e) {
                    return "zIndex" !== t && (!("number" !== typeof e && !Array.isArray(e)) || !("string" !== typeof e || !s.c.test(e) || e.startsWith("url(")))
                },
                mt = function(t) {
                    return 1e3 * t
                },
                gt = {
                    tween: u.f,
                    spring: u.e,
                    keyframes: u.d,
                    inertia: u.c,
                    just: dt
                },
                yt = {
                    tween: function(t) {
                        if (t.ease) {
                            var e = pt(t.ease) ? t.ease[0] : t.ease;
                            t.ease = ht(e)
                        }
                        return t
                    },
                    keyframes: function(t) {
                        var e = t.from,
                            n = (t.to, t.velocity, Object(r.c)(t, ["from", "to", "velocity"]));
                        if (n.values && null === n.values[0]) {
                            var i = Object(r.d)(n.values);
                            i[0] = e, n.values = i
                        }
                        return n.ease && (n.easings = pt(n.ease) ? n.ease.map(ht) : ht(n.ease)), n.ease = c.linear, n
                    }
                },
                bt = function(t, e, n) {
                    var i = n ? n.delay : 0;
                    if (void 0 === n || ! function(t) {
                            t.when, t.delay, t.delayChildren, t.staggerChildren, t.staggerDirection;
                            var e = Object(r.c)(t, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection"]);
                            return Object.keys(e).length
                        }(n)) return Object(r.a)({
                        delay: i
                    }, function(t, e) {
                        var n;
                        return n = at(e) ? lt : ft[t] || ft.default, Object(r.a)({
                            to: e
                        }, n(e))
                    }(t, e));
                    var o = n[t] || n.default || n;
                    return !1 === o.type ? {
                        delay: o.hasOwnProperty("delay") ? o.delay : i,
                        to: at(e) ? e[e.length - 1] : e,
                        type: "just"
                    } : at(e) ? Object(r.a)(Object(r.a)({
                        values: e,
                        duration: .8,
                        delay: i,
                        ease: "linear"
                    }, o), {
                        type: "keyframes"
                    }) : Object(r.a)({
                        type: "tween",
                        to: e,
                        delay: i
                    }, o)
                },
                xt = function(t, e, n, i) {
                    var o = e.get(),
                        s = vt(t, o),
                        u = vt(t, n);
                    Object(a.b)(s === u, "You are trying to animate " + t + ' from "' + o + '" to "' + n + '". ' + o + " is not an animatable value - to enable this animation set " + o + " to a value animatable to " + n + " via the `style` property.");
                    var c, l = bt(t, n, i),
                        f = l.type,
                        d = void 0 === f ? "tween" : f,
                        h = Object(r.c)(l, ["type"]),
                        p = s && u ? gt[d] : dt,
                        v = function(t, e) {
                            return yt[t] ? yt[t](e) : e
                        }(d, Object(r.a)({
                            from: o,
                            velocity: e.getVelocity()
                        }, h));
                    return ((c = v).hasOwnProperty("duration") || c.hasOwnProperty("repeatDelay")) && (v.duration && (v.duration = mt(v.duration)), v.repeatDelay && (v.repeatDelay = mt(v.repeatDelay))), [p, v]
                };

            function jt(t, e, n, i) {
                void 0 === i && (i = {});
                var o = i.delay,
                    a = void 0 === o ? 0 : o,
                    s = Object(r.c)(i, ["delay"]);
                return e.start((function(i) {
                    var o, c = xt(t, e, n, s),
                        l = c[0],
                        f = c[1],
                        d = f.delay,
                        h = Object(r.c)(f, ["delay"]);
                    void 0 !== d && (a = d);
                    var p = function() {
                        var t = l(h);
                        o = t.start({
                            update: function(t) {
                                return e.set(t)
                            },
                            complete: i
                        })
                    };
                    return a ? o = Object(u.b)(mt(a)).start({
                            complete: p
                        }) : p(),
                        function() {
                            o && o.stop()
                        }
                }))
            }

            function Ot(t, e) {
                return g(function(t, e) {
                    var n = t.top,
                        r = t.left,
                        i = t.bottom,
                        o = t.right;
                    void 0 === e && (e = m);
                    var a = e({
                            x: r,
                            y: n
                        }),
                        s = e({
                            x: o,
                            y: i
                        });
                    return {
                        top: a.y,
                        left: a.x,
                        bottom: s.y,
                        right: s.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            var Et = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.defaultConfig = {
                            enableHardwareAcceleration: !0,
                            allowTransformNone: !0
                        }, e.style = {}, e.reactStyle = {}, e.vars = {}, e.transform = {}, e.transformOrigin = {}, e.transformKeys = [], e.config = e.defaultConfig, e.isLayoutProjectionEnabled = !1, e.layoutUpdateListeners = new Set, e.hasViewportBoxUpdated = !1, e.targetBoxFinal = {
                            x: {
                                min: 0,
                                max: 1
                            },
                            y: {
                                min: 0,
                                max: 1
                            }
                        }, e.treeScale = {
                            x: 1,
                            y: 1
                        }, e.delta = x(), e.deltaFinal = x(), e.stopLayoutAxisAnimation = {
                            x: function() {},
                            y: function() {}
                        }, e.isTargetBoxLocked = !1, e.axisProgress = {
                            x: p(0),
                            y: p(0)
                        }, e.updateLayoutDelta = function() {
                            e.isLayoutProjectionEnabled && e.box && e.updateLayoutDeltas(), e.children.forEach(wt)
                        }, e
                    }
                    return Object(r.b)(e, t), e.prototype.removeValue = function(e) {
                        t.prototype.removeValue.call(this, e), delete this.vars[e], delete this.style[e]
                    }, e.prototype.clean = function() {
                        this.style = {}, this.vars = {}, this.transform = {}
                    }, e.prototype.updateConfig = function(t) {
                        void 0 === t && (t = {}), this.config = Object(r.a)(Object(r.a)({}, this.defaultConfig), t)
                    }, e.prototype.read = function(t) {
                        return this.getComputedStyle()[t] || 0
                    }, e.prototype.readNativeValue = function(t) {
                        if (R(t)) {
                            var e = V(t);
                            return e && e.default || 0
                        }
                        return this.read(t)
                    }, e.prototype.enableLayoutProjection = function() {
                        this.isLayoutProjectionEnabled = !0
                    }, e.prototype.hide = function() {
                        !1 !== this.isVisible && (this.isVisible = !1, this.scheduleRender())
                    }, e.prototype.show = function() {
                        !0 !== this.isVisible && (this.isVisible = !0, this.scheduleRender())
                    }, e.prototype.onLayoutUpdate = function(t) {
                        var e = this;
                        return this.layoutUpdateListeners.add(t),
                            function() {
                                return e.layoutUpdateListeners.delete(t)
                            }
                    }, e.prototype.layoutReady = function(t) {
                        var e = this;
                        this.layoutUpdateListeners.forEach((function(n) {
                            n(e.box, e.prevViewportBox || e.box, t)
                        }))
                    }, e.prototype.getBoundingBox = function() {
                        var t = this.config.transformPagePoint;
                        return Ot(this.element, t)
                    }, e.prototype.getBoundingBoxWithoutTransforms = function() {
                        var t, e, n = this.getBoundingBox();
                        return t = n, e = this.latest, Q(t.x, e, _), Q(t.y, e, q), n
                    }, e.prototype.getComputedStyle = function() {
                        return window.getComputedStyle(this.element)
                    }, e.prototype.snapshotBoundingBox = function() {
                        this.prevViewportBox = this.getBoundingBoxWithoutTransforms();
                        var t = this.axisProgress,
                            e = t.x,
                            n = t.y;
                        this.isTargetBoxLocked || e.isAnimating() || n.isAnimating() || (this.targetBox = y(this.prevViewportBox))
                    }, e.prototype.measureLayout = function() {
                        this.box = this.getBoundingBox(), this.boxCorrected = y(this.box), this.targetBox || (this.targetBox = y(this.box))
                    }, e.prototype.refreshTargetBox = function() {
                        this.targetBox = this.getBoundingBoxWithoutTransforms()
                    }, e.prototype.lockTargetBox = function() {
                        this.isTargetBoxLocked = !0
                    }, e.prototype.unlockTargetBox = function() {
                        this.stopLayoutAnimation(), this.isTargetBoxLocked = !1
                    }, e.prototype.resetTransform = function() {
                        var t = this.config.transformTemplate;
                        this.element.style.transform = t ? t({}, "") : "none", this.scheduleRender()
                    }, e.prototype.setAxisTarget = function(t, e, n) {
                        var r = this.targetBox[t];
                        r.min = e, r.max = n, this.hasViewportBoxUpdated = !0, this.rootParent.scheduleUpdateLayoutDelta()
                    }, e.prototype.startLayoutAxisAnimation = function(t, e) {
                        var n = this,
                            r = this.axisProgress[t],
                            i = this.targetBox[t],
                            o = i.min,
                            a = i.max - o;
                        return r.clearListeners(), r.set(o), r.set(o), r.onChange((function(e) {
                            return n.setAxisTarget(t, e, e + a)
                        })), jt(t, r, 0, e)
                    }, e.prototype.stopLayoutAnimation = function() {
                        var t = this;
                        ot((function(e) {
                            return t.axisProgress[e].stop()
                        }))
                    }, e.prototype.updateLayoutDeltas = function() {
                        var t, e, n, r, i, o, a;
                        n = this.boxCorrected, r = this.box, N(n.x, r.x), N(n.y, r.y), this.parent && (i = this.treeScale, o = this.parent.treeScale, a = this.parent.delta, i.x = o.x * a.x.scale, i.y = o.y * a.y.scale),
                            function(t, e) {
                                for (var n = e.length, r = 0; r < n; r++) K(t, e[r].delta)
                            }(this.boxCorrected, this.treePath), it(this.delta, this.boxCorrected, this.targetBox), this.hasViewportBoxUpdated && (null === (e = (t = this.config).onViewportBoxUpdate) || void 0 === e || e.call(t, this.targetBox, this.delta)), this.hasViewportBoxUpdated = !1;
                        var s = X(this.delta, this.treeScale);
                        s !== this.deltaTransform && this.scheduleRender(), this.deltaTransform = s
                    }, e.prototype.updateTransformDeltas = function() {
                        var t, e, n;
                        this.isLayoutProjectionEnabled && this.box && (t = this.targetBoxFinal, e = this.targetBox, n = this.latest, $(t.x, e.x, n, _), $(t.y, e.y, n, q), it(this.deltaFinal, this.boxCorrected, this.targetBoxFinal))
                    }, e.prototype.build = function() {
                        this.updateTransformDeltas(), void 0 !== this.isVisible && (this.style.visibility = this.isVisible ? "visible" : "hidden"), z(this.latest, this.style, this.vars, this.transform, this.transformOrigin, this.transformKeys, this.config, this.isLayoutProjectionEnabled && !!this.box, this.delta, this.deltaFinal, this.treeScale, this.targetBoxFinal)
                    }, e.prototype.render = function() {
                        for (var t in this.build(), Object.assign(this.element.style, this.style), this.vars) this.element.style.setProperty(t, this.vars[t])
                    }, e
                }(v),
                wt = function(t) {
                    return t.updateLayoutDelta()
                };

            function Pt(t) {
                var e = Object(l.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }

            function Ct(t, e, n) {
                return "string" === typeof t ? t : s.j.transform(e + n * t)
            }
            var St = function(t, e) {
                    return s.j.transform(t * e)
                },
                Vt = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                At = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };
            var Tt = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };

            function Lt(t, e, n, i, o, a, s, u, c, l, f, d, h, p, v) {
                var m = t.attrX,
                    g = t.attrY,
                    y = t.originX,
                    b = t.originY,
                    x = t.pathLength,
                    j = t.pathSpacing,
                    O = void 0 === j ? 1 : j,
                    E = t.pathOffset,
                    w = void 0 === E ? 0 : E;
                return z(Object(r.c)(t, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), i, n, o, a, s, u, f, d, h, p, v), i.transform && (e.transform = i.transform, delete i.transform), (void 0 !== y || void 0 !== b || e.transform) && (e.transformOrigin = function(t, e, n) {
                    return Ct(e, t.x, t.width) + " " + Ct(n, t.y, t.height)
                }(c || Tt, void 0 !== y ? y : .5, void 0 !== b ? b : .5)), void 0 !== m && (i.x = m), void 0 !== g && (i.y = g), void 0 !== l && void 0 !== x && function(t, e, n, r, i, o) {
                    void 0 === r && (r = 1), void 0 === i && (i = 0), void 0 === o && (o = !0);
                    var a = o ? Vt : At;
                    t[a.offset] = St(-i, e);
                    var s = St(n, e),
                        u = St(r, e);
                    t[a.array] = s + " " + u
                }(i, l, x, O, w, !1), i
            }
            var kt = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues"]),
                Bt = /([a-z])([A-Z])/g,
                Rt = function(t) {
                    return t.replace(Bt, "$1-$2").toLowerCase()
                },
                Dt = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.attrs = {}, e.defaultConfig = {
                            enableHardwareAcceleration: !1
                        }, e.config = e.defaultConfig, e
                    }
                    return Object(r.b)(e, t), e.prototype.mount = function(e) {
                        t.prototype.mount.call(this, e), this.measure()
                    }, e.prototype.measure = function() {
                        try {
                            this.dimensions = "function" === typeof this.element.getBBox ? this.element.getBBox() : this.element.getBoundingClientRect()
                        } catch (t) {
                            this.dimensions = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            }
                        }
                        "path" === this.element.tagName && (this.totalPathLength = this.element.getTotalLength())
                    }, e.prototype.clean = function() {
                        t.prototype.clean.call(this), this.attrs = {}
                    }, e.prototype.read = function(t) {
                        return t = kt.has(t) ? t : Rt(t), this.element.getAttribute(t)
                    }, e.prototype.build = function() {
                        this.updateTransformDeltas(), Lt(this.latest, this.style, this.vars, this.attrs, this.transform, this.transformOrigin, this.transformKeys, this.config, this.dimensions, this.totalPathLength, this.isLayoutProjectionEnabled && !!this.box, this.delta, this.deltaFinal, this.treeScale, this.targetBoxFinal)
                    }, e.prototype.render = function() {
                        for (var e in t.prototype.render.call(this), this.attrs) this.element.setAttribute(Rt(e), this.attrs[e])
                    }, e
                }(Et);
            var Mt = new Set(["animate", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use", "view"]);

            function Ft(t) {
                return "string" === typeof t && Mt.has(t)
            }
            var Ut = Object(l.createContext)(null);

            function It() {
                var t = Object(l.useContext)(Ut);
                if (null === t) return [!0, null];
                var e = t.isPresent,
                    n = t.onExitComplete,
                    r = t.register,
                    i = Xt();
                Object(l.useEffect)((function() {
                    return r(i)
                }), []);
                return !e && n ? [!1, function() {
                    return null === n || void 0 === n ? void 0 : n(i)
                }] : [!0]
            }
            var Ht = 0,
                Yt = function() {
                    return Ht++
                },
                Xt = function() {
                    return Pt(Yt)
                },
                zt = function(t, e, n, i, o) {
                    var a = Pt((function() {
                        return new(Ft(t) ? Dt : Et)(n, o)
                    }));
                    a.updateConfig(Object(r.a)({
                        enableHardwareAcceleration: !i
                    }, e)), a.layoutId = e.layoutId;
                    var s = function() {
                        var t = Object(l.useContext)(Ut);
                        return null === t || t.isPresent
                    }();
                    return a.isPresent = void 0 !== e.isPresent ? e.isPresent : s, a
                },
                Nt = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "static", "layout", "layoutId", "onLayoutAnimationComplete", "onViewportBoxUpdate", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "whileHover", "whileTap", "onHoverEnd", "onHoverStart"]);

            function Wt(t) {
                return Nt.has(t)
            }
            var Gt = function(t) {
                return !Wt(t)
            };
            try {
                var Zt = n("9uj6").default;
                Gt = function(t) {
                    return t.startsWith("on") ? !Wt(t) : Zt(t)
                }
            } catch (Rn) {}

            function Kt(t, e, n) {
                var i = "string" === typeof t ? function(t) {
                    var e = {};
                    for (var n in t) Gt(n) && (e[n] = t[n]);
                    return e
                }(e) : e;
                n.clean(), n.build();
                var o = Ft(t) ? function(t) {
                    return Object(r.a)(Object(r.a)({}, t.attrs), {
                        style: Object(r.a)({}, t.reactStyle)
                    })
                }(n) : function(t, e) {
                    var n = e.drag,
                        i = {
                            style: Object(r.a)(Object(r.a)(Object(r.a)({}, t.reactStyle), t.style), t.vars)
                        };
                    return n && (i.style.userSelect = "none", i.draggable = !1), i
                }(n, e);
                return Object(l.createElement)(t, Object(r.a)(Object(r.a)(Object(r.a)({}, i), {
                    ref: n.ref
                }), o))
            }

            function $t(t) {
                return "string" === typeof t && t.startsWith("var(--")
            }
            var _t = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function qt(t, e, n) {
                void 0 === n && (n = 1), Object(a.a)(n <= 4, 'Max CSS variable fallback depth detected in property "' + t + '". This may indicate a circular fallback dependency.');
                var r = function(t) {
                        var e = _t.exec(t);
                        return e ? [e[1], e[2]] : [, ]
                    }(t),
                    i = r[0],
                    o = r[1];
                if (i) {
                    var s = window.getComputedStyle(e).getPropertyValue(i);
                    return s || ($t(o) ? qt(o, e, n + 1) : o)
                }
            }
            var Jt, Qt = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                te = function(t) {
                    return Qt.has(t)
                },
                ee = function(t, e) {
                    t.set(e, !1), t.set(e)
                },
                ne = function(t) {
                    return t === s.g || t === s.j
                };
            ! function(t) {
                t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
            }(Jt || (Jt = {}));
            var re = function(t, e) {
                    return parseFloat(t.split(", ")[e])
                },
                ie = function(t, e) {
                    return function(n, r) {
                        var i = r.transform;
                        if ("none" === i || !i) return 0;
                        var o = i.match(/^matrix3d\((.+)\)$/);
                        if (o) return re(o[1], e);
                        var a = i.match(/^matrix\((.+)\)$/);
                        return a ? re(a[1], t) : 0
                    }
                },
                oe = new Set(["x", "y", "z"]),
                ae = L.filter((function(t) {
                    return !oe.has(t)
                }));
            var se = {
                    width: function(t) {
                        var e = t.x;
                        return e.max - e.min
                    },
                    height: function(t) {
                        var e = t.y;
                        return e.max - e.min
                    },
                    top: function(t, e) {
                        var n = e.top;
                        return parseFloat(n)
                    },
                    left: function(t, e) {
                        var n = e.left;
                        return parseFloat(n)
                    },
                    bottom: function(t, e) {
                        var n = t.y,
                            r = e.top;
                        return parseFloat(r) + (n.max - n.min)
                    },
                    right: function(t, e) {
                        var n = t.x,
                            r = e.left;
                        return parseFloat(r) + (n.max - n.min)
                    },
                    x: ie(4, 13),
                    y: ie(5, 14)
                },
                ue = function(t, e, n, i) {
                    void 0 === n && (n = {}), void 0 === i && (i = {}), e = Object(r.a)({}, e), i = Object(r.a)({}, i);
                    var o = Object.keys(e).filter(te),
                        u = [],
                        c = !1,
                        l = [];
                    if (o.forEach((function(r) {
                            var o = t.getValue(r);
                            if (t.hasValue(r)) {
                                var f, d = n[r],
                                    h = e[r],
                                    p = P(d);
                                if (at(h))
                                    for (var v = h.length, m = null === h[0] ? 1 : 0; m < v; m++) f ? Object(a.a)(P(h[m]) === f, "All keyframes must be of the same type") : (f = P(h[m]), Object(a.a)(f === p || ne(p) && ne(f), "Keyframes must be of the same dimension as the current value"));
                                else f = P(h);
                                if (p !== f)
                                    if (ne(p) && ne(f)) {
                                        var g = o.get();
                                        "string" === typeof g && o.set(parseFloat(g)), "string" === typeof h ? e[r] = parseFloat(h) : Array.isArray(h) && f === s.j && (e[r] = h.map(parseFloat))
                                    } else c || (u = function(t) {
                                        var e = [];
                                        return ae.forEach((function(n) {
                                            var r = t.getValue(n);
                                            void 0 !== r && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                                        })), e.length && t.render(), e
                                    }(t), c = !0), l.push(r), i[r] = void 0 !== i[r] ? i[r] : e[r], ee(o, h)
                            }
                        })), l.length) {
                        var f = function(t, e, n) {
                            var r = e.getBoundingBox(),
                                i = e.getComputedStyle(),
                                o = i.display,
                                a = {
                                    top: i.top,
                                    left: i.left,
                                    bottom: i.bottom,
                                    right: i.right,
                                    transform: i.transform
                                };
                            "none" === o && e.setStaticValues("display", t.display || "block"), e.render();
                            var s = e.getBoundingBox();
                            return n.forEach((function(n) {
                                var o = e.getValue(n);
                                ee(o, se[n](r, a)), t[n] = se[n](s, i)
                            })), t
                        }(e, t, l);
                        return u.length && u.forEach((function(e) {
                            var n = e[0],
                                r = e[1];
                            t.getValue(n).set(r)
                        })), t.render(), {
                            target: f,
                            transitionEnd: i
                        }
                    }
                    return {
                        target: e,
                        transitionEnd: i
                    }
                };

            function ce(t, e, n, r) {
                return function(t) {
                    return Object.keys(t).some(te)
                }(e) ? ue(t, e, n, r) : {
                    target: e,
                    transitionEnd: r
                }
            }
            var le = function(t, e, n, i) {
                var o = function(t, e, n) {
                    var i = Object(r.c)(e, []),
                        o = t.getInstance();
                    if (!(o instanceof HTMLElement)) return {
                        target: i,
                        transitionEnd: n
                    };
                    for (var a in n && (n = Object(r.a)({}, n)), t.forEachValue((function(t) {
                            var e = t.get();
                            if ($t(e)) {
                                var n = qt(e, o);
                                n && t.set(n)
                            }
                        })), i) {
                        var s = i[a];
                        if ($t(s)) {
                            var u = qt(s, o);
                            u && (i[a] = u, n && void 0 === n[a] && (n[a] = s))
                        }
                    }
                    return {
                        target: i,
                        transitionEnd: n
                    }
                }(t, e, i);
                return ce(t, e = o.target, n, i = o.transitionEnd)
            };
            var fe = function() {
                    function t() {
                        this.hasMounted = !1, this.pendingAnimations = [], this.componentControls = new Set
                    }
                    return t.prototype.setVariants = function(t) {
                        this.variants = t, this.componentControls.forEach((function(e) {
                            return e.setVariants(t)
                        }))
                    }, t.prototype.setDefaultTransition = function(t) {
                        this.defaultTransition = t, this.componentControls.forEach((function(e) {
                            return e.setDefaultTransition(t)
                        }))
                    }, t.prototype.subscribe = function(t) {
                        var e = this;
                        return this.componentControls.add(t), this.variants && t.setVariants(this.variants), this.defaultTransition && t.setDefaultTransition(this.defaultTransition),
                            function() {
                                return e.componentControls.delete(t)
                            }
                    }, t.prototype.start = function(t, e) {
                        var n = this;
                        if (this.hasMounted) {
                            var r = [];
                            return this.componentControls.forEach((function(n) {
                                var i = n.start(t, {
                                    transitionOverride: e
                                });
                                r.push(i)
                            })), Promise.all(r)
                        }
                        return new Promise((function(r) {
                            n.pendingAnimations.push({
                                animation: [t, e],
                                resolve: r
                            })
                        }))
                    }, t.prototype.set = function(t) {
                        return Object(a.a)(this.hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), this.componentControls.forEach((function(e) {
                            return e.apply(t)
                        }))
                    }, t.prototype.stop = function() {
                        this.componentControls.forEach((function(t) {
                            return t.stop()
                        }))
                    }, t.prototype.mount = function() {
                        var t = this;
                        this.hasMounted = !0, this.pendingAnimations.forEach((function(e) {
                            var n = e.animation,
                                r = e.resolve;
                            return t.start.apply(t, n).then(r)
                        }))
                    }, t.prototype.unmount = function() {
                        this.hasMounted = !1, this.stop()
                    }, t
                }(),
                de = Object(l.createContext)({
                    static: !1
                }),
                he = function(t) {
                    return "string" === typeof t || Array.isArray(t)
                },
                pe = function(t) {
                    return t instanceof fe
                },
                ve = function(t, e, n, r, i) {
                    void 0 === r && (r = !1);
                    var o, a = i.initial,
                        s = i.animate,
                        u = i.variants,
                        c = i.whileTap,
                        f = i.whileHover,
                        d = i.layoutId,
                        h = Object(l.useContext)(Ut),
                        p = null === h || void 0 === h ? void 0 : h.id;
                    n.isPresenceRoot = t.presenceId !== p, void 0 !== (null === h || void 0 === h ? void 0 : h.initial) && (a = h.initial), !1 !== a || pe(s) ? "boolean" !== typeof a && (o = a) : o = s;
                    var v = Object(l.useRef)(!1),
                        m = u || he(s) || he(c) || he(f) || pe(s),
                        g = he(o) ? o : t.initial,
                        y = he(s) ? s : t.animate,
                        b = r ? g : null,
                        x = m && he(y) ? y : null,
                        j = Object(l.useMemo)((function() {
                            return {
                                controls: m ? e : t.controls,
                                initial: g,
                                animate: y,
                                visualElement: n,
                                hasMounted: v,
                                isReducedMotion: t.isReducedMotion,
                                presenceId: p
                            }
                        }), [b, x, t.isReducedMotion, s, d, p]);
                    return j.static = r,
                        function(t, e) {
                            void 0 === e && (e = !1);
                            var n = Object(l.useRef)(!0);
                            (!e || e && n.current) && t(), n.current = !1
                        }((function() {
                            var n = o || t.initial;
                            n && e.apply(n)
                        }), !r), Object(l.useEffect)((function() {
                            v.current = !0
                        }), []), j
                },
                me = function(t) {
                    var e = t.animate,
                        n = t.variants,
                        r = t.inherit;
                    return (void 0 === r || r) && !!n && (!e || e instanceof fe)
                },
                ge = function(t) {
                    return t instanceof h
                };

            function ye(t, e, n, r) {
                for (var i in void 0 === r && (r = !1), r && (t.reactStyle = {}), n) {
                    var o = n[i],
                        a = !1;
                    if (ge(o)) be.has(i) || (t.addValue(i, o), a = !0);
                    else if (R(i) || M(i)) {
                        if (t.hasValue(i)) {
                            if (o !== e[i]) {
                                t.getValue(i).set(o)
                            }
                        } else t.addValue(i, p(o));
                        a = !0
                    } else r && (t.reactStyle[i] = o);
                    a && (e[i] = o)
                }
            }
            var be = new Set([]),
                xe = function() {
                    return {}
                },
                je = function(t) {
                    return at(t) ? t[t.length - 1] || 0 : t
                },
                Oe = function() {
                    function t(t, e) {
                        var n = this,
                            r = e.makeTargetAnimatable;
                        this.props = {}, this.variants = {}, this.baseTarget = {}, this.overrides = [], this.resolvedOverrides = [], this.activeOverrides = new Set, this.isAnimating = new Set, this.hasValue = function(t) {
                            return !n.visualElement.hasValue(t)
                        }, this.visualElement = t, this.makeTargetAnimatable = r, this.visualElement.forEachValue((function(t, e) {
                            return n.baseTarget[e] = t.get()
                        }))
                    }
                    return t.prototype.setProps = function(t) {
                        this.props = t
                    }, t.prototype.setVariants = function(t) {
                        t && (this.variants = t)
                    }, t.prototype.setDefaultTransition = function(t) {
                        t && (this.defaultTransition = t)
                    }, t.prototype.setValues = function(t, e) {
                        var n = void 0 === e ? {} : e,
                            i = n.isActive,
                            o = void 0 === i ? new Set : i,
                            a = n.priority,
                            s = this.resolveVariant(t),
                            u = s.target,
                            c = s.transitionEnd;
                        for (var l in u = this.transformValues(Object(r.a)(Object(r.a)({}, u), c))) {
                            if (o.has(l)) return;
                            if (o.add(l), u) {
                                var f = je(u[l]);
                                if (this.visualElement.hasValue(l)) {
                                    var d = this.visualElement.getValue(l);
                                    d && d.set(f)
                                } else this.visualElement.addValue(l, p(f));
                                a || (this.baseTarget[l] = f)
                            }
                        }
                    }, t.prototype.transformValues = function(t) {
                        var e = this.props.transformValues;
                        return e ? e(t) : t
                    }, t.prototype.checkForNewValues = function(t) {
                        var e = Object.keys(t).filter(this.hasValue),
                            n = e.length;
                        if (n)
                            for (var r = 0; r < n; r++) {
                                var i = e[r],
                                    o = t[i],
                                    u = null;
                                if (Array.isArray(o) && (u = o[0]), null === u) {
                                    var c = this.visualElement.readNativeValue(i);
                                    u = void 0 !== c ? c : t[i], Object(a.a)(null !== u, 'No initial value for "' + i + '" can be inferred. Ensure an initial value for "' + i + '" is defined on the component.')
                                }
                                "string" === typeof u && /^\-?\d*\.?\d+$/.test(u) ? u = parseFloat(u) : !S(u) && s.c.test(o) && (u = s.c.getAnimatableNone(o)), this.visualElement.addValue(i, p(u)), this.baseTarget[i] = u
                            }
                    }, t.prototype.resolveVariant = function(t) {
                        if (!t) return {
                            target: void 0,
                            transition: void 0,
                            transitionEnd: void 0
                        };
                        "function" === typeof t && (t = t(this.props.custom, function(t) {
                            var e = {};
                            return t.forEachValue((function(t, n) {
                                return e[n] = t.get()
                            })), e
                        }(this.visualElement), function(t) {
                            var e = {};
                            return t.forEachValue((function(t, n) {
                                return e[n] = t.getVelocity()
                            })), e
                        }(this.visualElement)));
                        var e = t.transition;
                        return {
                            transition: void 0 === e ? this.defaultTransition : e,
                            transitionEnd: t.transitionEnd,
                            target: Object(r.c)(t, ["transition", "transitionEnd"])
                        }
                    }, t.prototype.getHighestPriority = function() {
                        return this.activeOverrides.size ? Math.max.apply(Math, Array.from(this.activeOverrides)) : 0
                    }, t.prototype.setOverride = function(t, e) {
                        this.overrides[e] = t, this.children && this.children.forEach((function(n) {
                            return n.setOverride(t, e)
                        }))
                    }, t.prototype.startOverride = function(t) {
                        var e = this.overrides[t];
                        if (e) return this.start(e, {
                            priority: t
                        })
                    }, t.prototype.clearOverride = function(t) {
                        var e = this;
                        if (this.children && this.children.forEach((function(e) {
                                return e.clearOverride(t)
                            })), this.overrides[t]) {
                            this.activeOverrides.delete(t);
                            var n = this.getHighestPriority();
                            if (this.resetIsAnimating(), n) this.overrides[n] && this.startOverride(n);
                            var r = this.resolvedOverrides[t];
                            if (r) {
                                var i = {};
                                for (var o in this.baseTarget) void 0 !== r[o] && (i[o] = this.baseTarget[o]);
                                this.onStart(), this.animate(i).then((function() {
                                    return e.onComplete()
                                }))
                            }
                        }
                    }, t.prototype.apply = function(t) {
                        return Array.isArray(t) ? this.applyVariantLabels(t) : "string" === typeof t ? this.applyVariantLabels([t]) : void this.setValues(t)
                    }, t.prototype.applyVariantLabels = function(t) {
                        var e = this,
                            n = new Set;
                        Object(r.d)(t).reverse().forEach((function(r) {
                            var i = e.resolveVariant(e.variants[r]),
                                o = i.target,
                                a = i.transitionEnd;
                            a && e.setValues(a, {
                                isActive: n
                            }), o && e.setValues(o, {
                                isActive: n
                            }), e.children && e.children.size && e.children.forEach((function(e) {
                                return e.applyVariantLabels(t)
                            }))
                        }))
                    }, t.prototype.start = function(t, e) {
                        var n, r, i = this;
                        return void 0 === e && (e = {}), e.priority && this.activeOverrides.add(e.priority), this.resetIsAnimating(e.priority), r = t, n = Array.isArray(r) ? this.animateVariantLabels(t, e) : "string" === typeof t ? this.animateVariant(t, e) : this.animate(t, e), this.onStart(), n.then((function() {
                            return i.onComplete()
                        }))
                    }, t.prototype.animate = function(t, e) {
                        var n = this,
                            i = void 0 === e ? {} : e,
                            o = i.delay,
                            a = void 0 === o ? 0 : o,
                            s = i.priority,
                            u = void 0 === s ? 0 : s,
                            c = i.transitionOverride,
                            l = this.resolveVariant(t),
                            f = l.target,
                            d = l.transition,
                            h = l.transitionEnd;
                        if (c && (d = c), !f) return Promise.resolve();
                        f = this.transformValues(f), h && (h = this.transformValues(h)), this.checkForNewValues(f);
                        var p = this.transformValues(function(t, e, n) {
                            var r, i, o = {};
                            for (var a in t) o[a] = null !== (r = Ee(a, e)) && void 0 !== r ? r : null === (i = n.getValue(a)) || void 0 === i ? void 0 : i.get();
                            return o
                        }(f, d, this.visualElement));
                        if (this.makeTargetAnimatable) {
                            var v = this.makeTargetAnimatable(this.visualElement, f, p, h);
                            f = v.target, h = v.transitionEnd
                        }
                        u && (this.resolvedOverrides[u] = f), this.checkForNewValues(f);
                        var m = [];
                        for (var g in f) {
                            var y = this.visualElement.getValue(g);
                            if (y && f && void 0 !== f[g]) {
                                var b = f[g];
                                u || (this.baseTarget[g] = je(b)), this.isAnimating.has(g) || (this.isAnimating.add(g), m.push(jt(g, y, b, Object(r.a)({
                                    delay: a
                                }, d))))
                            }
                        }
                        var x = Promise.all(m);
                        return h ? x.then((function() {
                            n.setValues(h, {
                                priority: u
                            })
                        })) : x
                    }, t.prototype.animateVariantLabels = function(t, e) {
                        var n = this,
                            i = Object(r.d)(t).reverse().map((function(t) {
                                return n.animateVariant(t, e)
                            }));
                        return Promise.all(i)
                    }, t.prototype.animateVariant = function(t, e) {
                        var n = this,
                            r = !1,
                            i = 0,
                            o = 0,
                            a = 1,
                            s = e && e.priority || 0,
                            u = this.variants[t],
                            c = u ? function() {
                                return n.animate(u, e)
                            } : function() {
                                return Promise.resolve()
                            },
                            l = this.children ? function() {
                                return n.animateChildren(t, i, o, a, s)
                            } : function() {
                                return Promise.resolve()
                            };
                        if (u && this.children) {
                            var f = this.resolveVariant(u).transition;
                            f && (r = f.when || r, i = f.delayChildren || i, o = f.staggerChildren || o, a = f.staggerDirection || a)
                        }
                        if (r) {
                            var d = "beforeChildren" === r ? [c, l] : [l, c],
                                h = d[1];
                            return (0, d[0])().then(h)
                        }
                        return Promise.all([c(), l()])
                    }, t.prototype.animateChildren = function(t, e, n, r, i) {
                        if (void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 1), void 0 === i && (i = 0), !this.children) return Promise.resolve();
                        var o = [],
                            a = (this.children.size - 1) * n,
                            s = 1 === r ? function(t) {
                                return t * n
                            } : function(t) {
                                return a - t * n
                            };
                        return Array.from(this.children).forEach((function(n, r) {
                            var a = n.animateVariant(t, {
                                priority: i,
                                delay: e + s(r)
                            });
                            o.push(a)
                        })), Promise.all(o)
                    }, t.prototype.onStart = function() {
                        var t = this.props.onAnimationStart;
                        t && t()
                    }, t.prototype.onComplete = function() {
                        var t = this.props.onAnimationComplete;
                        t && t()
                    }, t.prototype.checkOverrideIsAnimating = function(t) {
                        for (var e = this.overrides.length, n = t + 1; n < e; n++) {
                            var r = this.resolvedOverrides[n];
                            if (r)
                                for (var i in r) this.isAnimating.add(i)
                        }
                    }, t.prototype.resetIsAnimating = function(t) {
                        void 0 === t && (t = 0), this.isAnimating.clear(), t < this.getHighestPriority() && this.checkOverrideIsAnimating(t), this.children && this.children.forEach((function(e) {
                            return e.resetIsAnimating(t)
                        }))
                    }, t.prototype.stop = function() {
                        this.visualElement.forEachValue((function(t) {
                            return t.stop()
                        }))
                    }, t.prototype.addChild = function(t) {
                        this.children || (this.children = new Set), this.children.add(t), this.overrides.forEach((function(e, n) {
                            e && t.setOverride(e, n)
                        }))
                    }, t.prototype.removeChild = function(t) {
                        this.children && this.children.delete(t)
                    }, t.prototype.resetChildren = function() {
                        this.children && this.children.clear()
                    }, t
                }();

            function Ee(t, e) {
                if (e) return (e[t] || e.default || e).from
            }

            function we(t, e, n) {
                var i = me(e),
                    o = e.variants,
                    a = e.transition,
                    s = Object(l.useContext)(de).controls,
                    u = Object(l.useContext)(Ut),
                    c = Pt((function() {
                        return new Oe(t, n)
                    }));
                return u && !u.isPresent || (c.resetChildren(), c.setProps(e), c.setVariants(o), c.setDefaultTransition(a)), Object(l.useEffect)((function() {
                    i && s && s.addChild(c)
                })), Object(l.useEffect)((function() {
                    return function() {
                        e.onAnimationComplete;
                        var t = Object(r.c)(e, ["onAnimationComplete"]);
                        c.setProps(t), s && s.removeChild(c)
                    }
                }), []), c
            }
            var Pe, Ce, Se = Object(l.createContext)({
                transformPagePoint: function(t) {
                    return t
                },
                features: []
            });
            ! function(t) {
                t[t.Entering = 0] = "Entering", t[t.Present = 1] = "Present", t[t.Exiting = 2] = "Exiting"
            }(Pe || (Pe = {})),
            function(t) {
                t[t.Hide = 0] = "Hide", t[t.Show = 1] = "Show"
            }(Ce || (Ce = {}));
            var Ve = {
                    measureLayout: function(t) {
                        return t.measureLayout()
                    },
                    layoutReady: function(t) {
                        return t.layoutReady()
                    }
                },
                Ae = function(t, e) {
                    return t.depth - e.depth
                };

            function Te() {
                var t = new Set;
                return {
                    add: function(e) {
                        return t.add(e)
                    },
                    flush: function(e) {
                        var n = void 0 === e ? Ve : e,
                            r = n.measureLayout,
                            i = n.layoutReady,
                            o = Array.from(t).sort(Ae);
                        o.forEach((function(t) {
                            return t.resetTransform()
                        })), o.forEach(r), o.forEach(i), o.forEach((function(t) {
                            t.isPresent && (t.presence = Pe.Present)
                        })), t.clear()
                    }
                }
            }

            function Le(t) {
                return !!t.forceUpdate
            }
            var ke = Object(l.createContext)(Te());

            function Be(t) {
                return Object(l.useEffect)((function() {
                    return function() {
                        return t()
                    }
                }), [])
            }

            function Re(t, e) {
                var n = e.defaultFeatures,
                    i = e.useVisualElement,
                    o = e.render,
                    a = e.animationControlsConfig;
                return Object(l.forwardRef)((function(e, s) {
                    var u = Object(l.useContext)(de),
                        c = me(e),
                        f = u.static || e.static || !1,
                        d = i(t, e, u.visualElement, f, s);
                    ! function(t, e) {
                        var n = Pt(xe);
                        for (var r in n) {
                            var i = R(r) || M(r),
                                o = e[r],
                                a = e.style && e.style[r],
                                s = o && ge(e[r]),
                                u = a && ge(e.style[r]);
                            (i && !o && !a || !i && !s && !u) && (t.removeValue(r), delete n[r])
                        }
                        ye(t, n, e), e.style && ye(t, n, e.style, !0), e.transformValues && (t.reactStyle = e.transformValues(t.reactStyle))
                    }(d, e);
                    var h = we(d, e, a),
                        p = ve(u, h, d, f, e),
                        v = function(t, e, n, i, o, a, s, u) {
                            var c = Object(l.useContext)(Se);
                            if (e || "undefined" === typeof window) return null;
                            for (var f = Object(r.d)(t, c.features), d = f.length, h = [], p = 0; p < d; p++) {
                                var v = f[p],
                                    m = v.shouldRender,
                                    g = v.key,
                                    y = v.getComponent;
                                if (m(o, s)) {
                                    var b = y(o);
                                    b && h.push(Object(l.createElement)(b, Object(r.a)({
                                        key: g
                                    }, o, {
                                        localContext: a,
                                        parentContext: s,
                                        visualElement: n,
                                        controls: i,
                                        inherit: u
                                    })))
                                }
                            }
                            return h
                        }(n, f, d, h, e, p, u, c),
                        m = o(t, e, d);
                    return function(t) {
                        var e = Object(l.useContext)(ke);
                        Be((function() {
                            Le(e) && e.remove(t)
                        }))
                    }(d), Object(l.createElement)(l.Fragment, null, Object(l.createElement)(de.Provider, {
                        value: p
                    }, m), v)
                }))
            }

            function De(t) {
                var e = null;
                return function() {
                    return null === e && (e = t, function() {
                        e = null
                    })
                }
            }
            var Me = De("dragHorizontal"),
                Fe = De("dragVertical");

            function Ue(t) {
                var e = !1;
                if ("y" === t) e = Fe();
                else if ("x" === t) e = Me();
                else {
                    var n = Me(),
                        r = Fe();
                    n && r ? e = function() {
                        n(), r()
                    } : (n && n(), r && r())
                }
                return e
            }
            var Ie = !1;
            "undefined" !== typeof window && document.addEventListener("touchmove", (function(t) {
                Ie && t.preventDefault()
            }), {
                passive: !1
            });
            var He = function() {
                return Ie = !1
            };

            function Ye(t, e, n, r) {
                if (n) return t.addEventListener(e, n, r),
                    function() {
                        return t.removeEventListener(e, n, r)
                    }
            }

            function Xe(t) {
                return "undefined" !== typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
            }

            function ze(t) {
                return !!t.touches
            }
            var Ne = {
                pageX: 0,
                pageY: 0
            };

            function We(t, e) {
                void 0 === e && (e = "page");
                var n = t.touches[0] || t.changedTouches[0] || Ne;
                return {
                    x: n[e + "X"],
                    y: n[e + "Y"]
                }
            }

            function Ge(t, e) {
                return void 0 === e && (e = "page"), {
                    x: t[e + "X"],
                    y: t[e + "Y"]
                }
            }

            function Ze(t, e) {
                return void 0 === e && (e = "page"), {
                    point: ze(t) ? We(t, e) : Ge(t, e)
                }
            }

            function Ke(t) {
                return Ze(t, "client")
            }
            var $e, _e = function(t, e) {
                    if (void 0 === e && (e = !1), t) {
                        var n = function(e) {
                            return t(e, Ze(e))
                        };
                        return e ? function(t) {
                            if (t) return function(e) {
                                var n = e instanceof MouseEvent;
                                (!n || n && 0 === e.button) && t(e)
                            }
                        }(n) : n
                    }
                },
                qe = "undefined" !== typeof window,
                Je = {
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointercancel: "mousecancel",
                    pointerover: "mouseover",
                    pointerout: "mouseout",
                    pointerenter: "mouseenter",
                    pointerleave: "mouseleave"
                },
                Qe = {
                    pointerdown: "touchstart",
                    pointermove: "touchmove",
                    pointerup: "touchend",
                    pointercancel: "touchcancel"
                };

            function tn(t) {
                return qe && null === window.onpointerdown ? t : qe && null === window.ontouchstart ? Qe[t] : qe && null === window.onmousedown ? Je[t] : t
            }

            function en(t, e, n, r) {
                return Ye(t, tn(e), _e(n, "pointerdown" === e), r)
            }

            function nn(t, e, n, r) {
                return function(t, e, n, r) {
                    Object(l.useEffect)((function() {
                        var i = t.current;
                        if (n && i) return Ye(i, e, n, r)
                    }), [t, e, n, r])
                }(t, tn(e), _e(n, "pointerdown" === e), r)
            }! function(t) {
                t.subtract = function(t, e) {
                    return {
                        x: t.x - e.x,
                        y: t.y - e.y
                    }
                }, t.relativeTo = function(t) {
                    var e;
                    return function(n) {
                        var r = n.x,
                            i = n.y,
                            o = void 0 !== e ? e : e = "string" === typeof t ? document.getElementById(t) : t;
                        if (o) {
                            var a = o.getBoundingClientRect();
                            return {
                                x: r - a.left - window.scrollX,
                                y: i - a.top - window.scrollY
                            }
                        }
                    }
                }
            }($e || ($e = {}));
            var rn = function() {
                function t(t, e, n) {
                    var a = this,
                        s = (void 0 === n ? {} : n).transformPagePoint;
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
                            if (a.lastMoveEvent && a.lastMoveEventInfo) {
                                var t = an(a.lastMoveEventInfo, a.history),
                                    e = null !== a.startEvent,
                                    n = Object(o.e)(t.offset, {
                                        x: 0,
                                        y: 0
                                    }) >= 3;
                                if (e || n) {
                                    var s = t.point,
                                        u = Object(i.c)().timestamp;
                                    a.history.push(Object(r.a)(Object(r.a)({}, s), {
                                        timestamp: u
                                    }));
                                    var c = a.handlers,
                                        l = c.onStart,
                                        f = c.onMove;
                                    e || (l && l(a.lastMoveEvent, t), a.startEvent = a.lastMoveEvent), f && f(a.lastMoveEvent, t)
                                }
                            }
                        }, !(ze(t) && t.touches.length > 1)) {
                        this.handlers = e, this.transformPagePoint = s;
                        var u = on(Ze(t), this.transformPagePoint),
                            c = u.point,
                            l = Object(i.c)().timestamp;
                        this.history = [Object(r.a)(Object(r.a)({}, c), {
                            timestamp: l
                        })];
                        var f = e.onSessionStart;
                        f && f(t, an(u, this.history));
                        var d = en(window, "pointermove", (function(t, e) {
                                return a.handlePointerMove(t, e)
                            })),
                            h = en(window, "pointerup", (function(t, e) {
                                return a.handlePointerUp(t, e)
                            }));
                        this.removeListeners = function() {
                            d && d(), h && h()
                        }
                    }
                }
                return t.prototype.handlePointerMove = function(t, e) {
                    this.lastMoveEvent = t, this.lastMoveEventInfo = on(e, this.transformPagePoint), Xe(t) && 0 === t.buttons ? this.handlePointerUp(t, e) : i.b.update(this.updatePoint, !0)
                }, t.prototype.handlePointerUp = function(t, e) {
                    this.end();
                    var n = this.handlers.onEnd;
                    if (n) {
                        var r = an(on(e, this.transformPagePoint), this.history);
                        n && n(t, r)
                    }
                }, t.prototype.updateHandlers = function(t) {
                    this.handlers = t
                }, t.prototype.end = function() {
                    this.removeListeners && this.removeListeners(), i.a.update(this.updatePoint), He()
                }, t
            }();

            function on(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function an(t, e) {
                var n = t.point;
                return {
                    point: n,
                    delta: $e.subtract(n, un(e)),
                    offset: $e.subtract(n, sn(e)),
                    velocity: cn(e, .1)
                }
            }

            function sn(t) {
                return t[0]
            }

            function un(t) {
                return t[t.length - 1]
            }

            function cn(t, e) {
                if (t.length < 2) return {
                    x: 0,
                    y: 0
                };
                for (var n = t.length - 1, r = null, i = un(t); n >= 0 && (r = t[n], !(i.timestamp - r.timestamp > mt(e)));) n--;
                if (!r) return {
                    x: 0,
                    y: 0
                };
                var o = (i.timestamp - r.timestamp) / 1e3;
                if (0 === o) return {
                    x: 0,
                    y: 0
                };
                var a = {
                    x: (i.x - r.x) / o,
                    y: (i.y - r.y) / o
                };
                return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
            }

            function ln(t, e, n, r, i) {
                var a = t - e * n;
                return r ? function(t, e, n) {
                    var r = e.min,
                        i = e.max;
                    return void 0 !== r && t < r ? t = n ? Object(o.h)(r, t, n) : Math.max(t, r) : void 0 !== i && t > i && (t = n ? Object(o.h)(i, t, n) : Math.min(t, i)), t
                }(a, r, i) : a
            }

            function fn(t, e, n) {
                var r = {},
                    i = t.max - t.min;
                return void 0 !== e && (r.min = t.min + e), void 0 !== n && (r.max = Math.max(t.min + n - i, t.min)), r
            }

            function dn(t, e) {
                var n, r = e.min - t.min,
                    i = e.max - t.max;
                return e.max - e.min < t.max - t.min && (r = (n = [i, r])[0], i = n[1]), {
                    min: t.min + r,
                    max: t.min + i
                }
            }
            var hn, pn = new WeakMap,
                vn = function() {
                    function t(t) {
                        var e = t.visualElement;
                        this.isDragging = !1, this.currentDirection = null, this.constraints = !1, this.props = {}, this.cursorProgress = {
                            x: .5,
                            y: .5
                        }, this.openGlobalLock = null, this.panSession = null, this.visualElement = e, this.visualElement.enableLayoutProjection(), pn.set(e, this)
                    }
                    return t.prototype.start = function(t, e) {
                        var n = this,
                            r = void 0 === e ? {} : e,
                            i = r.snapToCursor,
                            a = void 0 !== i && i,
                            s = r.cursorProgress;
                        a && this.snapToCursor(t);
                        var u = this.props.transformPagePoint;
                        this.panSession = new rn(t, {
                            onSessionStart: function() {
                                Ie = !0, n.stopMotion()
                            },
                            onStart: function(t, e) {
                                var r, i, a = n.props,
                                    u = a.drag,
                                    c = a.dragPropagation;
                                if (!u || c || (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = Ue(u), n.openGlobalLock)) {
                                    n.prepareBoundingBox(), n.visualElement.lockTargetBox(), n.resolveDragConstraints();
                                    var l = Ke(t).point;
                                    ot((function(t) {
                                        var e = n.visualElement.targetBox[t],
                                            r = e.min,
                                            i = e.max;
                                        n.cursorProgress[t] = s ? s[t] : Object(o.l)(r, i, l[t])
                                    })), n.isDragging = !0, n.currentDirection = null, null === (i = (r = n.props).onDragStart) || void 0 === i || i.call(r, t, e)
                                }
                            },
                            onMove: function(t, e) {
                                var r, i, o, a, s = n.props,
                                    u = s.dragPropagation,
                                    c = s.dragDirectionLock;
                                if (u || n.openGlobalLock) {
                                    var l = e.offset;
                                    if (c && null === n.currentDirection) return n.currentDirection = function(t, e) {
                                        void 0 === e && (e = 10);
                                        var n = null;
                                        Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x");
                                        return n
                                    }(l), void(null !== n.currentDirection && (null === (i = (r = n.props).onDirectionLock) || void 0 === i || i.call(r, n.currentDirection)));
                                    n.updateAxis("x", t), n.updateAxis("y", t), null === (a = (o = n.props).onDrag) || void 0 === a || a.call(o, t, e), hn = t
                                }
                            },
                            onEnd: function(t, e) {
                                return n.stop(t, e)
                            }
                        }, {
                            transformPagePoint: u
                        })
                    }, t.prototype.prepareBoundingBox = function() {
                        var t = this.visualElement.getInstance(),
                            e = t.style.transform;
                        this.visualElement.resetTransform(), this.visualElement.measureLayout(), t.style.transform = e, this.visualElement.refreshTargetBox()
                    }, t.prototype.resolveDragConstraints = function() {
                        var t = this.props.dragConstraints;
                        this.constraints = !!t && (d(t) ? this.resolveRefConstraints(this.visualElement.box, t) : function(t, e) {
                            var n = e.top,
                                r = e.left,
                                i = e.bottom,
                                o = e.right;
                            return {
                                x: fn(t.x, r, o),
                                y: fn(t.y, n, i)
                            }
                        }(this.visualElement.box, t))
                    }, t.prototype.resolveRefConstraints = function(t, e) {
                        var n = this.props,
                            r = n.onMeasureDragConstraints,
                            i = n.transformPagePoint,
                            o = e.current;
                        Object(a.a)(null !== o, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."), this.constraintsBox = Ot(o, i);
                        var s = function(t, e) {
                            return {
                                x: dn(t.x, e.x),
                                y: dn(t.y, e.y)
                            }
                        }(t, this.constraintsBox);
                        if (r) {
                            var u = r(function(t) {
                                var e = t.x,
                                    n = t.y;
                                return {
                                    top: n.min,
                                    bottom: n.max,
                                    left: e.min,
                                    right: e.max
                                }
                            }(s));
                            u && (s = g(u))
                        }
                        return s
                    }, t.prototype.cancelDrag = function() {
                        He(), this.isDragging = !1, this.panSession && this.panSession.end(), this.panSession = null, !this.props.dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null)
                    }, t.prototype.stop = function(t, e) {
                        var n;
                        this.visualElement.unlockTargetBox(), null === (n = this.panSession) || void 0 === n || n.end(), this.panSession = null;
                        var r = this.isDragging;
                        if (this.cancelDrag(), r) {
                            var i = this.props,
                                o = i.dragMomentum,
                                a = i.dragElastic,
                                s = i.onDragEnd;
                            if (o || a) {
                                var u = e.velocity;
                                this.animateDragEnd(u)
                            }
                            null === s || void 0 === s || s(t, e)
                        }
                    }, t.prototype.snapToCursor = function(t) {
                        this.prepareBoundingBox(), this.cursorProgress.x = .5, this.cursorProgress.y = .5, this.updateAxis("x", t), this.updateAxis("y", t)
                    }, t.prototype.updateAxis = function(t, e) {
                        var n, r = this.props,
                            i = r.drag,
                            o = r.dragElastic;
                        if (mn(t, i, this.currentDirection)) {
                            var a = this.visualElement.box[t],
                                s = a.max - a.min,
                                u = this.cursorProgress[t],
                                c = ln(Ke(e).point[t], s, u, null === (n = this.constraints) || void 0 === n ? void 0 : n[t], o);
                            this.visualElement.setAxisTarget(t, c, c + s)
                        }
                    }, t.prototype.updateProps = function(t) {
                        var e = t.drag,
                            n = void 0 !== e && e,
                            i = t.dragDirectionLock,
                            o = void 0 !== i && i,
                            a = t.dragPropagation,
                            s = void 0 !== a && a,
                            u = t.dragConstraints,
                            c = void 0 !== u && u,
                            l = t.dragElastic,
                            f = void 0 === l ? .35 : l,
                            d = t.dragMomentum,
                            h = void 0 === d || d,
                            p = Object(r.c)(t, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
                        this.props = Object(r.a)({
                            drag: n,
                            dragDirectionLock: o,
                            dragPropagation: s,
                            dragConstraints: c,
                            dragElastic: f,
                            dragMomentum: h
                        }, p)
                    }, t.prototype.animateDragEnd = function(t) {
                        var e = this,
                            n = this.props,
                            i = n.drag,
                            o = n.dragMomentum,
                            a = n.dragElastic,
                            s = n.dragTransition,
                            u = ot((function(n) {
                                if (mn(n, i, e.currentDirection)) {
                                    var u = e.constraints ? e.constraints[n] : {},
                                        c = a ? 200 : 1e6,
                                        l = a ? 40 : 1e7,
                                        f = Object(r.a)(Object(r.a)({
                                            type: "inertia",
                                            velocity: o ? t[n] : 0,
                                            bounceStiffness: c,
                                            bounceDamping: l,
                                            timeConstant: 750,
                                            restDelta: 1,
                                            restSpeed: 10
                                        }, s), u);
                                    return e.visualElement.startLayoutAxisAnimation(n, f)
                                }
                            }));
                        return Promise.all(u).then((function() {
                            var t, n;
                            null === (n = (t = e.props).onDragTransitionEnd) || void 0 === n || n.call(t)
                        }))
                    }, t.prototype.stopMotion = function() {
                        this.visualElement.stopLayoutAnimation()
                    }, t.prototype.scalePoint = function() {
                        var t = this,
                            e = this.props,
                            n = e.drag,
                            r = e.dragConstraints;
                        if (d(r) && this.constraintsBox) {
                            this.stopMotion();
                            var i = {
                                x: 0,
                                y: 0
                            };
                            ot((function(e) {
                                i[e] = nt(t.visualElement.targetBox[e], t.constraintsBox[e])
                            })), this.prepareBoundingBox(), this.resolveDragConstraints(), ot((function(e) {
                                if (mn(e, n, null)) {
                                    var r = function(t, e, n) {
                                            var r = t.max - t.min,
                                                i = Object(o.h)(e.min, e.max - r, n);
                                            return {
                                                min: i,
                                                max: i + r
                                            }
                                        }(t.visualElement.targetBox[e], t.constraintsBox[e], i[e]),
                                        a = r.min,
                                        s = r.max;
                                    t.visualElement.setAxisTarget(e, a, s)
                                }
                            }))
                        }
                    }, t.prototype.mount = function(t) {
                        var e = this,
                            n = en(t.getInstance(), "pointerdown", (function(t) {
                                var n = e.props,
                                    r = n.drag,
                                    i = n.dragListener;
                                r && (void 0 === i || i) && e.start(t)
                            })),
                            r = Ye(window, "resize", (function() {
                                e.scalePoint()
                            })),
                            i = t.onLayoutUpdate((function() {
                                e.isDragging && e.resolveDragConstraints()
                            })),
                            o = t.prevSnapshot;
                        return (null === o || void 0 === o ? void 0 : o.isDragging) && this.start(hn, {
                                cursorProgress: o.cursorProgress
                            }),
                            function() {
                                null === n || void 0 === n || n(), null === r || void 0 === r || r(), null === i || void 0 === i || i(), e.cancelDrag()
                            }
                    }, t
                }();

            function mn(t, e, n) {
                return (!0 === e || e === t) && (null === n || n === t)
            }
            var gn = function(t) {
                    return function(e) {
                        return t(e), null
                    }
                },
                yn = gn((function(t) {
                    var e = t.visualElement;
                    return function(t, e) {
                        var n = t.dragControls,
                            i = Object(l.useContext)(Se).transformPagePoint,
                            o = Pt((function() {
                                return new vn({
                                    visualElement: e
                                })
                            }));
                        o.updateProps(Object(r.a)(Object(r.a)({}, t), {
                            transformPagePoint: i
                        })), Object(l.useEffect)((function() {
                            return n && n.subscribe(o)
                        }), [o]), Object(l.useEffect)((function() {
                            return o.mount(e)
                        }), [])
                    }(Object(r.c)(t, ["visualElement"]), e)
                })),
                bn = {
                    key: "drag",
                    shouldRender: function(t) {
                        return !!t.drag
                    },
                    getComponent: function() {
                        return yn
                    }
                };
            var xn = function(t, e) {
                    return !!e && (t === e || xn(t, e.parentElement))
                },
                jn = ["whileHover", "whileTap", "whileDrag"],
                On = function(t) {
                    return jn.indexOf(t) + 1
                },
                En = On("whileTap");
            var wn = On("whileHover"),
                Pn = function(t) {
                    return function(e, n) {
                        Xe(e) && t(e, n)
                    }
                };

            function Cn(t, e) {
                ! function(t, e) {
                    var n = t.onPan,
                        r = t.onPanStart,
                        i = t.onPanEnd,
                        o = t.onPanSessionStart,
                        a = n || r || i || o,
                        s = Object(l.useRef)(null),
                        u = Object(l.useContext)(Se).transformPagePoint,
                        c = {
                            onSessionStart: o,
                            onStart: r,
                            onMove: n,
                            onEnd: function(t, e) {
                                s.current = null, i && i(t, e)
                            }
                        };
                    Object(l.useEffect)((function() {
                        null !== s.current && s.current.updateHandlers(c)
                    })), nn(e, "pointerdown", a && function(t) {
                        s.current = new rn(t, c, {
                            transformPagePoint: u
                        })
                    }), Be((function() {
                        return s.current && s.current.end()
                    }))
                }(t, e),
                function(t, e) {
                    var n = t.onTap,
                        r = t.onTapStart,
                        i = t.onTapCancel,
                        o = t.whileTap,
                        a = t.controls,
                        s = n || r || i || o,
                        u = Object(l.useRef)(!1),
                        c = Object(l.useRef)(null);

                    function f() {
                        c.current && c.current(), c.current = null
                    }
                    o && a && a.setOverride(o, En);
                    var d = Object(l.useRef)(null);
                    d.current = function(t, r) {
                        var s = e.current;
                        if (f(), u.current && s) {
                            u.current = !1, a && o && a.clearOverride(En);
                            var c = Ue(!0);
                            c && (c(), xn(s, t.target) ? n && n(t, r) : i && i(t, r))
                        }
                    }, nn(e, "pointerdown", s ? function(t, n) {
                        f(), c.current = en(window, "pointerup", (function(t, e) {
                            return d.current(t, e)
                        })), e.current && !u.current && (u.current = !0, r && r(t, n), a && o && a.startOverride(En))
                    } : void 0), Be(f)
                }(t, e),
                function(t, e) {
                    var n = t.whileHover,
                        r = t.onHoverStart,
                        i = t.onHoverEnd,
                        o = t.controls;
                    n && o && o.setOverride(n, wn), nn(e, "pointerenter", Pn((function(t, e) {
                        r && r(t, e), n && o && o.startOverride(wn)
                    }))), nn(e, "pointerleave", Pn((function(t, e) {
                        i && i(t, e), n && o && o.clearOverride(wn)
                    })))
                }(t, e)
            }
            var Sn, Vn = ["onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "whileTap", "whileHover", "onHoverStart", "onHoverEnd"],
                An = gn((function(t) {
                    var e = t.visualElement;
                    Cn(Object(r.c)(t, ["visualElement"]), e)
                })),
                Tn = {
                    key: "gestures",
                    shouldRender: function(t) {
                        return Vn.some((function(e) {
                            return t.hasOwnProperty(e)
                        }))
                    },
                    getComponent: function() {
                        return An
                    }
                },
                Ln = gn((function(t) {
                    var e = t.animate,
                        n = t.controls,
                        i = t.exit,
                        o = It(),
                        a = o[0],
                        s = o[1],
                        u = Object(l.useContext)(Ut),
                        c = Object(l.useRef)(!1),
                        f = void 0 !== (null === u || void 0 === u ? void 0 : u.custom) ? u.custom : t.custom;
                    Object(l.useEffect)((function() {
                        a ? !c.current || !e || "boolean" === typeof e || e instanceof fe || n.start(e) : (!c.current && i && (n.setProps(Object(r.a)(Object(r.a)({}, t), {
                            custom: f
                        })), n.start(i).then(s)), c.current = !0), a && (c.current = !1)
                    }), [e, n, f, i, a, s, t])
                })),
                kn = {
                    key: "exit",
                    shouldRender: function(t) {
                        return !!t.exit && !me(t)
                    },
                    getComponent: function() {
                        return Ln
                    }
                };
            ! function(t) {
                t.Target = "Target", t.VariantLabel = "VariantLabel", t.AnimationSubscription = "AnimationSubscription"
            }(Sn || (Sn = {}));

            function Bn(t, e) {
                void 0 === e && (e = !1);
                t.transition;
                var n = t.transitionEnd,
                    i = Object(r.c)(t, ["transition", "transitionEnd"]);
                return e ? Object(r.a)(Object(r.a)({}, i), n) : i
            }
            var Rn, Dn, Mn = function(t) {
                var e, n = t instanceof h ? t.get() : t;
                return Array.from(new Set((e = n) ? Array.isArray(e) ? e : [e] : []))
            };
            var Fn = ((Rn = {})[Sn.Target] = gn((function(t) {
                    return function(t, e, n, i) {
                        var o = Object(l.useRef)(!0),
                            a = Object(l.useRef)(null);
                        a.current || (a.current = Bn(t, !0)), Object(l.useEffect)((function() {
                            var s, u, c = {},
                                l = Bn(t),
                                f = Bn(t, !0);
                            for (var d in l) {
                                var h = o.current && (!n.hasValue(d) || n.getValue(d).get() !== f[d]),
                                    p = null !== f[d],
                                    v = (s = a.current[d], void 0 !== (u = f[d]) && (Array.isArray(s) && Array.isArray(u) ? ! function(t, e) {
                                        if (null === e) return !1;
                                        var n = e.length;
                                        if (n !== t.length) return !1;
                                        for (var r = 0; r < n; r++)
                                            if (e[r] !== t[r]) return !1;
                                        return !0
                                    }(u, s) : s !== u));
                                p && (v || h) && (c[d] = l[d])
                            }
                            o.current = !1, a.current = Object(r.a)(Object(r.a)({}, a.current), f), Object.keys(c).length && e.start(Object(r.a)(Object(r.a)({}, c), {
                                transition: t.transition || i,
                                transitionEnd: t.transitionEnd
                            }))
                        }), [t])
                    }(t.animate, t.controls, t.visualElement, t.transition)
                })), Rn[Sn.VariantLabel] = gn((function(t) {
                    var e = t.animate,
                        n = t.inherit,
                        r = void 0 === n || n,
                        i = t.controls;
                    return function(t, e, n, r) {
                        var i = Mn(e),
                            o = Object(l.useContext)(de),
                            a = o.hasMounted && o.hasMounted.current,
                            s = Object(l.useRef)(!1);
                        Object(l.useEffect)((function() {
                            var e, u, c = !1;
                            n ? (c = !!a, i = Mn(o.animate)) : c = s.current || (e = Mn(t), u = i, e.join(",") !== u.join(",")), c && r.start(i), s.current = !0
                        }), [i.join(",")])
                    }(t.initial, e, r, i)
                })), Rn[Sn.AnimationSubscription] = gn((function(t) {
                    return function(t, e) {
                        var n = Object(l.useMemo)((function() {
                            return t.subscribe(e)
                        }), [t]);
                        Object(l.useEffect)((function() {
                            return function() {
                                n && n()
                            }
                        }), [n])
                    }(t.animate, t.controls)
                })), Rn),
                Un = function(t) {
                    return t.animate instanceof fe
                },
                In = ["initial", "animate", "whileTap", "whileHover"],
                Hn = ((Dn = {})[Sn.Target] = function(t) {
                    return void 0 !== t.animate && (e = t.animate, !(Array.isArray(e) || "string" === typeof e)) && !Un(t);
                    var e
                }, Dn[Sn.VariantLabel] = function(t) {
                    return void 0 !== t.variants || In.some((function(e) {
                        return "string" === typeof t[e]
                    }))
                }, Dn[Sn.AnimationSubscription] = Un, Dn),
                Yn = {
                    key: "animation",
                    shouldRender: function() {
                        return !0
                    },
                    getComponent: function(t) {
                        var e = void 0;
                        for (var n in Sn) Hn[n](t) && (e = n);
                        return e ? Fn[e] : void 0
                    }
                };
            var Xn = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.frameTarget = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }, e.stopAxisAnimation = {
                        x: void 0,
                        y: void 0
                    }, e.animate = function(t, n, i) {
                        void 0 === i && (i = {});
                        var o = i.originBox,
                            a = i.targetBox,
                            s = i.visibilityAction,
                            u = Object(r.c)(i, ["originBox", "targetBox", "visibilityAction"]),
                            c = e.props,
                            l = c.visualElement,
                            f = c.layout,
                            d = Nn(n = o || n, t = a || t),
                            h = ot((function(r) {
                                if ("position" === f) {
                                    var i = t[r].max - t[r].min;
                                    n[r].max = n[r].min + i
                                }
                                if (!l.isTargetBoxLocked) return void 0 === s ? d ? e.animateAxis(r, t[r], n[r], u) : l.setAxisTarget(r, t[r].min, t[r].max) : void(s === Ce.Hide ? l.hide() : l.show())
                            }));
                        return l.render(), Promise.all(h).then((function() {
                            var t, n;
                            null === (n = (t = e.props).onLayoutAnimationComplete) || void 0 === n || n.call(t), l.isPresent ? l.presence = Pe.Present : e.safeToRemove()
                        }))
                    }, e
                }
                return Object(r.b)(e, t), e.prototype.componentDidMount = function() {
                    var t = this.props.visualElement;
                    t.enableLayoutProjection(), this.unsubLayoutReady = t.onLayoutUpdate(this.animate)
                }, e.prototype.componentWillUnmount = function() {
                    var t = this;
                    this.unsubLayoutReady(), ot((function(e) {
                        var n, r;
                        return null === (r = (n = t.stopAxisAnimation)[e]) || void 0 === r ? void 0 : r.call(n)
                    }))
                }, e.prototype.animateAxis = function(t, e, n, r) {
                    var i, a, s = void 0 === r ? {} : r,
                        u = s.transition,
                        c = s.crossfadeOpacity;
                    null === (a = (i = this.stopAxisAnimation)[t]) || void 0 === a || a.call(i);
                    var l = this.props.visualElement,
                        f = this.frameTarget[t],
                        d = l.axisProgress[t];
                    d.clearListeners(), d.set(0), d.set(0);
                    var h = c && this.createCrossfadeAnimation(c),
                        p = function() {
                            var r = d.get() / 1e3;
                            ! function(t, e, n, r) {
                                t.min = Object(o.h)(e.min, n.min, r), t.max = Object(o.h)(e.max, n.max, r)
                            }(f, n, e, r), l.setAxisTarget(t, f.min, f.max), null === h || void 0 === h || h(r)
                        };
                    p();
                    var v = jt("x" === t ? "layoutX" : "layoutY", d, 1e3, u || this.props.transition || Gn),
                        m = d.onChange(p);
                    return this.stopAxisAnimation[t] = function() {
                        d.stop(), m()
                    }, v
                }, e.prototype.createCrossfadeAnimation = function(t) {
                    var e = this.props.visualElement.getValue("opacity", 0);
                    return function(n) {
                        e.set(Kn(Object(o.h)(0, 1, n))), t.set($n(Object(o.h)(1, 0, n)))
                    }
                }, e.prototype.safeToRemove = function() {
                    var t, e;
                    null === (e = (t = this.props).safeToRemove) || void 0 === e || e.call(t)
                }, e.prototype.render = function() {
                    return null
                }, e
            }(l.Component);

            function zn(t) {
                var e = It()[1];
                return Object(l.createElement)(Xn, Object(r.a)({}, t, {
                    safeToRemove: e
                }))
            }

            function Nn(t, e) {
                return Wn(t.x, e.x) || Wn(t.y, e.y)
            }

            function Wn(t, e) {
                return t.min !== e.min || t.max !== e.max
            }
            var Gn = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function Zn(t, e, n) {
                return function(r) {
                    return r < t ? 0 : r > e ? 1 : n(Object(o.l)(t, e, r))
                }
            }
            var Kn = Zn(0, .5, o.c),
                $n = Zn(.5, .95, o.g),
                _n = {
                    key: "animate-layout",
                    shouldRender: function(t) {
                        return !!t.layout || !!t.layoutId
                    },
                    getComponent: function() {
                        return zn
                    }
                },
                qn = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this,
                            r = e.syncLayout;
                        return Le(r) || (n.componentDidUpdate = function() {
                            return r.flush()
                        }), n
                    }
                    return Object(r.b)(e, t), e.prototype.componentDidMount = function() {
                        var t = this.props,
                            e = t.syncLayout,
                            n = t.visualElement;
                        Le(e) && e.register(n)
                    }, e.prototype.getSnapshotBeforeUpdate = function() {
                        var t = this.props,
                            e = t.syncLayout,
                            n = t.visualElement;
                        return Le(e) ? e.syncUpdate() : (n.snapshotBoundingBox(), e.add(n)), null
                    }, e.prototype.componentDidUpdate = function() {}, e.prototype.render = function() {
                        return null
                    }, e
                }(f.a.Component);

            function Jn(t) {
                var e = Object(l.useContext)(ke);
                return f.a.createElement(qn, Object(r.a)({}, t, {
                    syncLayout: e
                }))
            }
            var Qn = {
                key: "measure-layout",
                shouldRender: function(t) {
                    return !!t.drag || !!t.layout || !!t.layoutId
                },
                getComponent: function() {
                    return Jn
                }
            };

            function tr(t) {
                var e = {
                    defaultFeatures: t,
                    useVisualElement: zt,
                    render: Kt,
                    animationControlsConfig: {
                        makeTargetAnimatable: le
                    }
                };
                var n = new Map;
                return new Proxy({
                    custom: function(t) {
                        return Re(t, e)
                    }
                }, {
                    get: function(t, r) {
                        return "custom" === r ? t.custom : (n.has(r) || n.set(r, Re(r, e)), n.get(r))
                    }
                })
            }
            var er = tr([Qn, Yn, bn, Tn, kn, _n]);
            var nr = 0;

            function rr() {
                var t = nr;
                return nr++, t
            }
            var ir = function(t) {
                var e = t.children,
                    n = t.initial,
                    r = t.isPresent,
                    i = t.onExitComplete,
                    o = t.custom,
                    a = Pt(or),
                    s = {
                        id: Pt(rr),
                        initial: n,
                        isPresent: r,
                        custom: o,
                        onExitComplete: function(t) {
                            a.set(t, !0);
                            var e = !0;
                            a.forEach((function(t) {
                                t || (e = !1)
                            })), e && (null === i || void 0 === i || i())
                        },
                        register: function(t) {
                            return a.set(t, !1),
                                function() {
                                    return a.delete(t)
                                }
                        }
                    };
                return Object(l.useMemo)((function() {
                    a.forEach((function(t, e) {
                        return a.set(e, !1)
                    }))
                }), [r]), Object(l.createElement)(Ut.Provider, {
                    value: s
                }, e)
            };

            function or() {
                return new Map
            }

            function ar(t) {
                return t.key || ""
            }
            var sr = function(t) {
                var e = t.children,
                    n = t.custom,
                    i = t.initial,
                    o = void 0 === i || i,
                    a = t.onExitComplete,
                    s = t.exitBeforeEnter,
                    u = function() {
                        var t = Object(l.useState)(0),
                            e = t[0],
                            n = t[1];
                        return Object(l.useCallback)((function() {
                            return n(e + 1)
                        }), [e])
                    }(),
                    c = Object(l.useContext)(ke);
                Le(c) && (u = c.forceUpdate);
                var f = Object(l.useRef)(!0),
                    d = function(t) {
                        var e = [];
                        return l.Children.forEach(t, (function(t) {
                            Object(l.isValidElement)(t) && e.push(t)
                        })), e
                    }(e),
                    h = Object(l.useRef)(d),
                    p = Object(l.useRef)(new Map).current,
                    v = Object(l.useRef)(new Set).current;
                if (function(t, e) {
                        t.forEach((function(t) {
                            var n = ar(t);
                            e.set(n, t)
                        }))
                    }(d, p), f.current) return f.current = !1, Object(l.createElement)(l.Fragment, null, d.map((function(t) {
                    return Object(l.createElement)(ir, {
                        key: ar(t),
                        isPresent: !0,
                        initial: !!o && void 0
                    }, t)
                })));
                for (var m = Object(r.d)(d), g = h.current.map(ar), y = d.map(ar), b = g.length, x = 0; x < b; x++) {
                    var j = g[x]; - 1 === y.indexOf(j) ? v.add(j) : v.delete(j)
                }
                return s && v.size && (m = []), v.forEach((function(t) {
                    if (-1 === y.indexOf(t)) {
                        var e = p.get(t);
                        if (e) {
                            var r = g.indexOf(t);
                            m.splice(r, 0, Object(l.createElement)(ir, {
                                key: ar(e),
                                isPresent: !1,
                                onExitComplete: function() {
                                    p.delete(t), v.delete(t);
                                    var e = h.current.findIndex((function(e) {
                                        return e.key === t
                                    }));
                                    h.current.splice(e, 1), v.size || (h.current = d, u(), a && a())
                                },
                                custom: n
                            }, e))
                        }
                    }
                })), m = m.map((function(t) {
                    var e = t.key;
                    return v.has(e) ? t : Object(l.createElement)(ir, {
                        key: ar(t),
                        isPresent: !0
                    }, t)
                })), h.current = m, Object(l.createElement)(l.Fragment, null, v.size ? m : m.map((function(t) {
                    return Object(l.cloneElement)(t)
                })))
            };

            function ur(t, e) {
                return e && t !== e.lead ? {
                    visibilityAction: Ce.Hide
                } : e && t.presence !== Pe.Entering && t === e.lead && e.lead !== e.prevLead ? {
                    visibilityAction: Ce.Show
                } : (t.presence === Pe.Entering ? n = null === e || void 0 === e ? void 0 : e.getFollowOrigin() : t.presence === Pe.Exiting && (r = null === e || void 0 === e ? void 0 : e.getFollowTarget()), {
                    originBox: n,
                    targetBox: r
                });
                var n, r
            }

            function cr(t, e) {
                var n, r, i, o = {},
                    a = e && e.lead,
                    s = null === a || void 0 === a ? void 0 : a.presence;
                return e && t === a ? t.presence === Pe.Entering ? o.originBox = e.getFollowOrigin() : t.presence === Pe.Exiting && (o.targetBox = e.getFollowTarget()) : e && t === e.follow && (o.transition = e.getLeadTransition(), s === Pe.Entering ? o.targetBox = e.getLeadTarget() : s === Pe.Exiting && (o.originBox = e.getLeadOrigin())), (null === (n = null === e || void 0 === e ? void 0 : e.follow) || void 0 === n ? void 0 : n.isPresenceRoot) || (null === a || void 0 === a ? void 0 : a.isPresenceRoot) ? (e && t !== a ? e && t === e.follow ? a && s !== Pe.Entering && s === Pe.Exiting && (o.crossfadeOpacity = null === (i = null === e || void 0 === e ? void 0 : e.lead) || void 0 === i ? void 0 : i.getValue("opacity", 1)) : o.visibilityAction = Ce.Hide : t.presence === Pe.Entering && (o.crossfadeOpacity = null === (r = null === e || void 0 === e ? void 0 : e.follow) || void 0 === r ? void 0 : r.getValue("opacity", 0)), o) : o
            }
            var lr = function() {
                function t() {
                    this.order = [], this.hasChildren = !1
                }
                return t.prototype.add = function(t) {
                    var e, n = t.config.layoutOrder;
                    if (void 0 === n) this.order.push(t);
                    else {
                        var r = this.order.findIndex((function(t) {
                            return n <= (t.config.layoutOrder || 0)
                        })); - 1 === r && (t.presence = this.hasChildren ? Pe.Entering : Pe.Present, r = this.order.length), this.order.splice(r, 0, t)
                    }
                    if (this.snapshot) {
                        t.prevSnapshot = this.snapshot, t.prevViewportBox = this.snapshot.boundingBox;
                        var i = this.snapshot.latestMotionValues;
                        for (var o in i) t.hasValue(o) ? null === (e = t.getValue(o)) || void 0 === e || e.set(i[o]) : t.addValue(o, p(i[o]))
                    }
                    this.hasChildren = !0
                }, t.prototype.remove = function(t) {
                    var e = this.order.findIndex((function(e) {
                        return t === e
                    })); - 1 !== e && this.order.splice(e, 1)
                }, t.prototype.updateLeadAndFollow = function() {
                    this.prevLead = this.lead, this.prevFollow = this.follow;
                    var t = function(t, e) {
                            for (var n = e[0], r = e[1], i = void 0, o = 0, a = void 0, s = t.length, u = !1, c = s - 1; c >= 0; c--) {
                                var l = t[c];
                                if (c === s - 1 && (u = l.isPresent), u) i = l;
                                else {
                                    var f = t[c - 1];
                                    f && f.isPresent && (i = l)
                                }
                                if (i) {
                                    o = c;
                                    break
                                }
                            }
                            if (i || (i = t[0]), a = t[o - 1], i)
                                for (c = o - 1; c >= 0; c--)
                                    if ((l = t[c]).isPresent) {
                                        a = l;
                                        break
                                    }
                            return i !== n && !u && a === r && t.find((function(t) {
                                return t === n
                            })) && (i = n), [i, a]
                        }(this.order, [this.lead, this.follow]),
                        e = t[0],
                        n = t[1];
                    this.lead = e, this.follow = n
                }, t.prototype.updateSnapshot = function() {
                    if (this.lead) {
                        var t = {
                            boundingBox: this.lead.prevViewportBox,
                            latestMotionValues: {}
                        };
                        this.lead.forEachValue((function(e, n) {
                            var r = e.get();
                            R(r) || (t.latestMotionValues[n] = r)
                        }));
                        var e = pn.get(this.lead);
                        e && e.isDragging && (t.isDragging = !0, t.cursorProgress = e.cursorProgress), this.snapshot = t
                    }
                }, t.prototype.isLeadPresent = function() {
                    var t;
                    return this.lead && (null === (t = this.lead) || void 0 === t ? void 0 : t.presence) !== Pe.Exiting
                }, t.prototype.shouldStackAnimate = function() {
                    return !0
                }, t.prototype.getFollowOrigin = function() {
                    var t;
                    return this.follow ? this.follow.prevViewportBox : null === (t = this.snapshot) || void 0 === t ? void 0 : t.boundingBox
                }, t.prototype.getFollowTarget = function() {
                    var t;
                    return null === (t = this.follow) || void 0 === t ? void 0 : t.box
                }, t.prototype.getLeadOrigin = function() {
                    var t;
                    return null === (t = this.lead) || void 0 === t ? void 0 : t.prevViewportBox
                }, t.prototype.getLeadTarget = function() {
                    var t;
                    return null === (t = this.lead) || void 0 === t ? void 0 : t.box
                }, t.prototype.getLeadTransition = function() {
                    var t;
                    return null === (t = this.lead) || void 0 === t ? void 0 : t.config.transition
                }, t
            }();
            ! function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.children = new Set, e.stacks = new Map, e.hasMounted = !1, e.updateScheduled = !1, e.renderScheduled = !1, e.syncContext = Object(r.a)(Object(r.a)({}, Te()), {
                        syncUpdate: function(t) {
                            return e.scheduleUpdate(t)
                        },
                        forceUpdate: function() {
                            e.syncContext = Object(r.a)({}, e.syncContext), e.scheduleUpdate(!0)
                        },
                        register: function(t) {
                            return e.addChild(t)
                        },
                        remove: function(t) {
                            return e.removeChild(t)
                        }
                    }), e
                }
                Object(r.b)(e, t), e.prototype.componentDidMount = function() {
                    this.hasMounted = !0, this.updateStacks()
                }, e.prototype.componentDidUpdate = function() {
                    this.startLayoutAnimation()
                }, e.prototype.shouldComponentUpdate = function() {
                    return this.renderScheduled = !0, !0
                }, e.prototype.startLayoutAnimation = function() {
                    var t = this;
                    this.renderScheduled = this.updateScheduled = !1;
                    var e = this.props.type;
                    this.children.forEach((function(t) {
                        t.isPresent ? t.presence !== Pe.Entering && (t.presence = t.presence === Pe.Exiting ? Pe.Entering : Pe.Present) : t.presence = Pe.Exiting
                    })), this.updateStacks();
                    var n = "crossfade" === e ? cr : ur,
                        r = {
                            measureLayout: function(t) {
                                return t.measureLayout()
                            },
                            layoutReady: function(e) {
                                var r = e.layoutId;
                                e.layoutReady(n(e, t.getStack(r)))
                            }
                        };
                    this.children.forEach((function(e) {
                        return t.syncContext.add(e)
                    })), this.syncContext.flush(r), this.stacks.forEach((function(t) {
                        return t.snapshot = void 0
                    }))
                }, e.prototype.updateStacks = function() {
                    this.stacks.forEach((function(t) {
                        return t.updateLeadAndFollow()
                    }))
                }, e.prototype.scheduleUpdate = function(t) {
                    void 0 === t && (t = !1), !t && this.updateScheduled || (this.updateScheduled = !0, this.children.forEach((function(t) {
                        return t.snapshotBoundingBox()
                    })), this.stacks.forEach((function(t) {
                        return t.updateSnapshot()
                    })), !t && this.renderScheduled || (this.renderScheduled = !0, this.forceUpdate()))
                }, e.prototype.addChild = function(t) {
                    this.children.add(t), this.addToStack(t), t.presence = this.hasMounted ? Pe.Entering : Pe.Present
                }, e.prototype.removeChild = function(t) {
                    this.scheduleUpdate(), this.children.delete(t), this.removeFromStack(t)
                }, e.prototype.addToStack = function(t) {
                    var e = this.getStack(t.layoutId);
                    null === e || void 0 === e || e.add(t)
                }, e.prototype.removeFromStack = function(t) {
                    var e = this.getStack(t.layoutId);
                    null === e || void 0 === e || e.remove(t)
                }, e.prototype.getStack = function(t) {
                    if (void 0 !== t) return !this.stacks.has(t) && this.stacks.set(t, new lr), this.stacks.get(t)
                }, e.prototype.render = function() {
                    return Object(l.createElement)(ke.Provider, {
                        value: this.syncContext
                    }, this.props.children)
                }
            }(l.Component);

            function fr(t) {
                return Pt((function() {
                    return p(t)
                }))
            }

            function dr(t, e) {
                void 0 === e && (e = {});
                var n = Object(l.useRef)(null),
                    i = fr(ge(t) ? t.get() : t);
                return Object(l.useMemo)((function() {
                        return i.attach((function(t, o) {
                            return n.current && n.current.stop(), n.current = Object(u.e)(Object(r.a)({
                                from: i.get(),
                                to: t,
                                velocity: i.getVelocity()
                            }, e)).start(o), i.get()
                        }))
                    }), Object.values(e)),
                    function(t, e) {
                        Object(l.useEffect)((function() {
                            return ge(t) ? t.onChange(e) : void 0
                        }), [t])
                    }(t, (function(t) {
                        return i.set(parseFloat(t))
                    })), i
            }

            function hr() {
                return {
                    scrollX: p(0),
                    scrollY: p(0),
                    scrollXProgress: p(0),
                    scrollYProgress: p(0)
                }
            }
            "undefined" !== typeof window ? l.useLayoutEffect : l.useEffect;
            hr();

            function pr() {
                var t = Pt((function() {
                    return new fe
                }));
                return Object(l.useEffect)((function() {
                    return t.mount(),
                        function() {
                            return t.unmount()
                        }
                }), []), t
            }
            var vr = p(null);
            if ("undefined" !== typeof window)
                if (window.matchMedia) {
                    var mr = window.matchMedia("(prefers-reduced-motion)"),
                        gr = function() {
                            return vr.set(mr.matches)
                        };
                    mr.addListener(gr), gr()
                } else vr.set(!1);
            ! function() {
                function t() {
                    this.componentControls = new Set
                }
                t.prototype.subscribe = function(t) {
                    var e = this;
                    return this.componentControls.add(t),
                        function() {
                            return e.componentControls.delete(t)
                        }
                }, t.prototype.start = function(t, e) {
                    this.componentControls.forEach((function(n) {
                        n.start(t.nativeEvent || t, e)
                    }))
                }
            }();
            ! function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.initialState = {}, e
                }
                Object(r.b)(e, t), e.prototype.updateLayoutDelta = function() {}, e.prototype.build = function() {}, e.prototype.clean = function() {}, e.prototype.getBoundingBox = function() {
                    return {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }
                }, e.prototype.readNativeValue = function(t) {
                    return this.initialState[t] || 0
                }, e.prototype.render = function() {
                    this.build()
                }
            }(v)
        }
    }
]);