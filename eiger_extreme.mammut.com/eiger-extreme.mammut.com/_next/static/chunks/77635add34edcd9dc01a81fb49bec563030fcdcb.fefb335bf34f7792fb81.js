(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [5], {
        "+QUH": function(e, t, n) {
            e.exports = {
                slide: "GoreTextSlide_slide__CCw_Z",
                slideSide: "GoreTextSlide_slideSide__mdu6j",
                left: "GoreTextSlide_left__3rSe7",
                right: "GoreTextSlide_right__W_tc7",
                isFixed: "GoreTextSlide_isFixed__N-s_-",
                image: "GoreTextSlide_image__2qjT2",
                textContainer: "GoreTextSlide_textContainer__2Jcsi",
                text: "GoreTextSlide_text__2l_jp",
                infoContainer: "GoreTextSlide_infoContainer__3bVw4",
                smallText: "GoreTextSlide_smallText__1eO0_",
                line: "GoreTextSlide_line__2nI1y",
                isActive: "GoreTextSlide_isActive__1by6D",
                lottie: "GoreTextSlide_lottie__MuqWk"
            }
        },
        "/0+H": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.isInAmpMode = i, t.useAmp = function() {
                return i(o.default.useContext(a.AmpStateContext))
            };
            var r, o = (r = n("q1tI")) && r.__esModule ? r : {
                    default: r
                },
                a = n("lwAK");

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = void 0 !== t && t,
                    r = e.hybrid,
                    o = void 0 !== r && r,
                    a = e.hasQuery,
                    i = void 0 !== a && a;
                return n || o && i
            }
        },
        "/6c9": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== c(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = n("tbWI"),
                a = n("mzdp");

            function i() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function c(e) {
                return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        g(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (u) {
                        o = !0, a = u
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function v(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = m(e);
                    if (t) {
                        var o = m(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }

            function h(e, t) {
                return !t || "object" !== c(t) && "function" !== typeof t ? b(e) : t
            }

            function b(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function m(e) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function g(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var O = /list=([a-zA-Z0-9_-]+)/,
                _ = /user\/([a-zA-Z0-9_-]+)\/?/,
                j = /youtube-nocookie\.com/,
                C = function(e) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && y(e, t)
                    }(u, e);
                    var t, n, i, c = v(u);

                    function u() {
                        var e;
                        d(this, u);
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return g(b(e = c.call.apply(c, [this].concat(n))), "callPlayer", o.callPlayer), g(b(e), "parsePlaylist", (function(t) {
                            return t instanceof Array ? {
                                listType: "playlist",
                                playlist: t.map(e.getID).join(",")
                            } : O.test(t) ? {
                                listType: "playlist",
                                list: s(t.match(O), 2)[1]
                            } : _.test(t) ? {
                                listType: "user_uploads",
                                list: s(t.match(_), 2)[1]
                            } : {}
                        })), g(b(e), "onStateChange", (function(t) {
                            var n = t.data,
                                r = e.props,
                                o = r.onPlay,
                                a = r.onPause,
                                i = r.onBuffer,
                                c = r.onBufferEnd,
                                u = r.onEnded,
                                l = r.onReady,
                                s = r.loop,
                                f = r.config,
                                d = f.playerVars,
                                p = f.onUnstarted,
                                y = window.YT.PlayerState,
                                v = y.UNSTARTED,
                                h = y.PLAYING,
                                b = y.PAUSED,
                                m = y.BUFFERING,
                                g = y.ENDED,
                                O = y.CUED;
                            if (n === v && p(), n === h && (o(), c()), n === b && a(), n === m && i(), n === g) {
                                var _ = !!e.callPlayer("getPlaylist");
                                s && !_ && (d.start ? e.seekTo(d.start) : e.play()), u()
                            }
                            n === O && l()
                        })), g(b(e), "mute", (function() {
                            e.callPlayer("mute")
                        })), g(b(e), "unmute", (function() {
                            e.callPlayer("unMute")
                        })), g(b(e), "ref", (function(t) {
                            e.container = t
                        })), e
                    }
                    return t = u, (n = [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.onMount && this.props.onMount(this)
                        }
                    }, {
                        key: "getID",
                        value: function(e) {
                            return !e || e instanceof Array ? null : e.match(a.MATCH_URL_YOUTUBE)[1]
                        }
                    }, {
                        key: "load",
                        value: function(e, t) {
                            var n = this,
                                r = this.props,
                                a = r.playing,
                                i = r.muted,
                                c = r.playsinline,
                                u = r.controls,
                                s = r.loop,
                                f = r.config,
                                d = r.onError,
                                p = f.playerVars,
                                y = f.embedOptions,
                                v = this.getID(e);
                            if (t) return O.test(e) || _.test(e) || e instanceof Array ? void this.player.loadPlaylist(this.parsePlaylist(e)) : void this.player.cueVideoById({
                                videoId: v,
                                startSeconds: (0, o.parseStartTime)(e) || p.start,
                                endSeconds: (0, o.parseEndTime)(e) || p.end
                            });
                            (0, o.getSDK)("https://www.youtube.com/iframe_api", "YT", "onYouTubeIframeAPIReady", (function(e) {
                                return e.loaded
                            })).then((function(t) {
                                n.container && (n.player = new t.Player(n.container, l({
                                    width: "100%",
                                    height: "100%",
                                    videoId: v,
                                    playerVars: l(l({
                                        autoplay: a ? 1 : 0,
                                        mute: i ? 1 : 0,
                                        controls: u ? 1 : 0,
                                        start: (0, o.parseStartTime)(e),
                                        end: (0, o.parseEndTime)(e),
                                        origin: window.location.origin,
                                        playsinline: c
                                    }, n.parsePlaylist(e)), p),
                                    events: {
                                        onReady: function() {
                                            s && n.player.setLoop(!0), n.props.onReady()
                                        },
                                        onStateChange: n.onStateChange,
                                        onError: function(e) {
                                            return d(e.data)
                                        }
                                    },
                                    host: j.test(e) ? "https://www.youtube-nocookie.com" : void 0
                                }, y)))
                            }), d)
                        }
                    }, {
                        key: "play",
                        value: function() {
                            this.callPlayer("playVideo")
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.callPlayer("pauseVideo")
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            document.body.contains(this.callPlayer("getIframe")) && this.callPlayer("stopVideo")
                        }
                    }, {
                        key: "seekTo",
                        value: function(e) {
                            this.callPlayer("seekTo", e), this.props.playing || this.pause()
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.callPlayer("setVolume", 100 * e)
                        }
                    }, {
                        key: "setPlaybackRate",
                        value: function(e) {
                            this.callPlayer("setPlaybackRate", e)
                        }
                    }, {
                        key: "setLoop",
                        value: function(e) {
                            this.callPlayer("setLoop", e)
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            return this.callPlayer("getDuration")
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.callPlayer("getCurrentTime")
                        }
                    }, {
                        key: "getSecondsLoaded",
                        value: function() {
                            return this.callPlayer("getVideoLoadedFraction") * this.getDuration()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = {
                                width: "100%",
                                height: "100%",
                                display: this.props.display
                            };
                            return r.default.createElement("div", {
                                style: e
                            }, r.default.createElement("div", {
                                ref: this.ref
                            }))
                        }
                    }]) && p(t.prototype, n), i && p(t, i), u
                }(r.Component);
            t.default = C, g(C, "displayName", "YouTube"), g(C, "canPlay", a.canPlay.youtube)
        },
        "/v2g": function(e, t, n) {
            e.exports = {
                container: "CloseIcon_container__3KnqW"
            }
        },
        "0+g7": function(e, t, n) {
            e.exports = {
                container: "PauseIcon_container__fI9N4"
            }
        },
        "02l6": function(e, t, n) {
            e.exports = {
                container: "GenderToggle_container__2fadM",
                button: "GenderToggle_button__1ZlFp",
                isActive: "GenderToggle_isActive__2Ff30"
            }
        },
        "0SoA": function(e, t, n) {
            e.exports = {
                container: "VerticalMeter_container__2ZQM2",
                dark: "VerticalMeter_dark__3uZNu",
                progressBar: "VerticalMeter_progressBar__L74wp",
                labelTop: "VerticalMeter_labelTop__1v50l",
                labelBottom: "VerticalMeter_labelBottom__1NQww",
                details: "VerticalMeter_details__3DlhL",
                value: "VerticalMeter_value__3YT0C"
            }
        },
        "2D6l": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "a", (function() {
                return o
            })), n.d(t, "e", (function() {
                return a
            })), n.d(t, "f", (function() {
                return i
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "d", (function() {
                return u
            }));
            n("ODXe");

            function r(e, t) {
                return e > t ? e - t : t - e
            }

            function o(e, t, n) {
                return e < t ? t : e > n ? n : e
            }

            function a(e, t, n) {
                return t[0] + (n - e[0]) * (t[1] - t[0]) / (e[1] - e[0])
            }

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return ~~(e * t) / t
            }
            var c = function(e) {
                    var t = e.getBoundingClientRect(),
                        n = document.body,
                        r = document.documentElement,
                        o = window.pageYOffset || r.scrollTop || n.scrollTop,
                        a = window.pageXOffset || r.scrollLeft || n.scrollLeft,
                        i = r.clientTop || n.clientTop || 0,
                        c = r.clientLeft || n.clientLeft || 0;
                    return {
                        top: ~~(t.top + o - i),
                        left: ~~(t.left + a - c)
                    }
                },
                u = function(e) {
                    var t = e.target,
                        n = e.value,
                        o = e.creep,
                        a = void 0 === o ? .1 : o,
                        c = e.cutOff,
                        u = void 0 === c ? .1 : c,
                        l = e.precision,
                        s = void 0 === l ? 100 : l,
                        f = n + (t - n) * a;
                    return r(t, f) < u ? t : i(f, s)
                }
        },
        "2qu3": function(e, t, n) {
            "use strict";
            var r = n("oI91"),
                o = n("/GRZ"),
                a = n("i2R6");

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        r(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function u(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return l(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, i = !0,
                    c = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        c = !0, a = e
                    },
                    f: function() {
                        try {
                            i || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                }
            }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            t.__esModule = !0, t.default = void 0;
            var s, f = (s = n("q1tI")) && s.__esModule ? s : {
                    default: s
                },
                d = n("8L3h"),
                p = n("jwwS");
            var y = [],
                v = [],
                h = !1;

            function b(e) {
                var t = e(),
                    n = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return n.promise = t.then((function(e) {
                    return n.loading = !1, n.loaded = e, e
                })).catch((function(e) {
                    throw n.loading = !1, n.error = e, e
                })), n
            }

            function m(e) {
                var t = {
                        loading: !1,
                        loaded: {},
                        error: null
                    },
                    n = [];
                try {
                    Object.keys(e).forEach((function(r) {
                        var o = b(e[r]);
                        o.loading ? t.loading = !0 : (t.loaded[r] = o.loaded, t.error = o.error), n.push(o.promise), o.promise.then((function(e) {
                            t.loaded[r] = e
                        })).catch((function(e) {
                            t.error = e
                        }))
                    }))
                } catch (r) {
                    t.error = r
                }
                return t.promise = Promise.all(n).then((function(e) {
                    return t.loading = !1, e
                })).catch((function(e) {
                    throw t.loading = !1, e
                })), t
            }

            function g(e, t) {
                return f.default.createElement(function(e) {
                    return e && e.__esModule ? e.default : e
                }(e), t)
            }

            function O(e, t) {
                var n = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        render: g,
                        webpack: null,
                        modules: null
                    }, t),
                    r = null;

                function o() {
                    if (!r) {
                        var t = new _(e, n);
                        r = {
                            getCurrentValue: t.getCurrentValue.bind(t),
                            subscribe: t.subscribe.bind(t),
                            retry: t.retry.bind(t),
                            promise: t.promise.bind(t)
                        }
                    }
                    return r.promise()
                }
                if (!h && "function" === typeof n.webpack) {
                    var a = n.webpack();
                    v.push((function(e) {
                        var t, n = u(a);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var r = t.value;
                                if (-1 !== e.indexOf(r)) return o()
                            }
                        } catch (i) {
                            n.e(i)
                        } finally {
                            n.f()
                        }
                    }))
                }
                var i = function(e, t) {
                    o();
                    var a = f.default.useContext(p.LoadableContext),
                        i = (0, d.useSubscription)(r);
                    return f.default.useImperativeHandle(t, (function() {
                        return {
                            retry: r.retry
                        }
                    }), []), a && Array.isArray(n.modules) && n.modules.forEach((function(e) {
                        a(e)
                    })), f.default.useMemo((function() {
                        return i.loading || i.error ? f.default.createElement(n.loading, {
                            isLoading: i.loading,
                            pastDelay: i.pastDelay,
                            timedOut: i.timedOut,
                            error: i.error,
                            retry: r.retry
                        }) : i.loaded ? n.render(i.loaded, e) : null
                    }), [e, i])
                };
                return i.preload = function() {
                    return o()
                }, i.displayName = "LoadableComponent", f.default.forwardRef(i)
            }
            var _ = function() {
                function e(t, n) {
                    o(this, e), this._loadFn = t, this._opts = n, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return a(e, [{
                    key: "promise",
                    value: function() {
                        return this._res.promise
                    }
                }, {
                    key: "retry",
                    value: function() {
                        var e = this;
                        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                            pastDelay: !1,
                            timedOut: !1
                        };
                        var t = this._res,
                            n = this._opts;
                        t.loading && ("number" === typeof n.delay && (0 === n.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function() {
                            e._update({
                                pastDelay: !0
                            })
                        }), n.delay)), "number" === typeof n.timeout && (this._timeout = setTimeout((function() {
                            e._update({
                                timedOut: !0
                            })
                        }), n.timeout))), this._res.promise.then((function() {
                            e._update({}), e._clearTimeouts()
                        })).catch((function(t) {
                            e._update({}), e._clearTimeouts()
                        })), this._update({})
                    }
                }, {
                    key: "_update",
                    value: function(e) {
                        this._state = c(c({}, this._state), {}, {
                            error: this._res.error,
                            loaded: this._res.loaded,
                            loading: this._res.loading
                        }, e), this._callbacks.forEach((function(e) {
                            return e()
                        }))
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function() {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }
                }, {
                    key: "getCurrentValue",
                    value: function() {
                        return this._state
                    }
                }, {
                    key: "subscribe",
                    value: function(e) {
                        var t = this;
                        return this._callbacks.add(e),
                            function() {
                                t._callbacks.delete(e)
                            }
                    }
                }]), e
            }();

            function j(e) {
                return O(b, e)
            }

            function C(e, t) {
                for (var n = []; e.length;) {
                    var r = e.pop();
                    n.push(r(t))
                }
                return Promise.all(n).then((function() {
                    if (e.length) return C(e, t)
                }))
            }
            j.Map = function(e) {
                if ("function" !== typeof e.render) throw new Error("LoadableMap requires a `render(loaded, props)` function");
                return O(m, e)
            }, j.preloadAll = function() {
                return new Promise((function(e, t) {
                    C(y).then(e, t)
                }))
            }, j.preloadReady = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise((function(t) {
                    var n = function() {
                        return h = !0, t()
                    };
                    C(v, e).then(n, n)
                }))
            }, window.__NEXT_PRELOADREADY = j.preloadReady;
            var w = j;
            t.default = w
        },
        "3WQB": function(e, t, n) {
            e.exports = {
                container: "TextInternalLink_container__1dfgF",
                arrow: "TextInternalLink_arrow__3ltbz"
            }
        },
        "3bd0": function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return c
            })), n.d(t, "f", (function() {
                return s
            })), n.d(t, "g", (function() {
                return f
            })), n.d(t, "d", (function() {
                return d
            })), n.d(t, "b", (function() {
                return y
            })), n.d(t, "e", (function() {
                return h
            })), n.d(t, "h", (function() {
                return b
            })), n.d(t, "a", (function() {
                return g
            }));
            var r, o = n("KQm4"),
                a = n("2D6l"),
                i = n("wNob"),
                c = function(e, t) {
                    var n, r, o = t || {},
                        a = o.width,
                        i = o.height,
                        c = (null === e || void 0 === e || null === (n = e.fields) || void 0 === n || null === (r = n.coords) || void 0 === r ? void 0 : r.Coords) || e || {},
                        u = c.x,
                        l = c.y;
                    return {
                        x: u && a && u / a * 100,
                        y: l && i && l / i * 100
                    }
                };
            var u, l = {
                    "image/png": "png",
                    "image/webp": "webp",
                    "image/jpeg": "jpg",
                    "image/svg+xml": "svg"
                },
                s = function(e) {
                    return "svg" === (e = l[e] || e) ? e : function() {
                        if ("boolean" === typeof r) return r;
                        var e = window.document && window.document.createElement && document.createElement("canvas");
                        return r = !(!e.getContext || !e.getContext("2d")) && 0 == e.toDataURL("image/webp").indexOf("data:image/webp")
                    }() ? "webp" : "webp" === e ? "jpg" : e
                },
                f = function(e) {
                    var t, n, r, o, a = ((null === e || void 0 === e || null === (t = e.sys) || void 0 === t || null === (n = t.contentType) || void 0 === n ? void 0 : n.sys) || {}).id,
                        i = void 0 === a ? "" : a,
                        c = (null === e || void 0 === e ? void 0 : e.fields) || {};
                    if ("richImage" === i) return {
                        fields: null === c || void 0 === c || null === (r = c.image) || void 0 === r ? void 0 : r.fields,
                        focus: null === c || void 0 === c || null === (o = c.focalPoint) || void 0 === o ? void 0 : o.focalPoint
                    };
                    if ("imageWithFocalPoint" === i) {
                        var u = c.focalPoint,
                            l = c.image,
                            s = null === u || void 0 === u ? void 0 : u.focalPoint,
                            f = !!s && "number" === typeof s.x && "number" === typeof s.y;
                        return {
                            fields: null === l || void 0 === l ? void 0 : l.fields,
                            focus: f && s
                        }
                    }
                    return {
                        fields: c,
                        focus: !1
                    }
                },
                d = function(e, t) {
                    return !e || !t || e <= 0 || t <= 0 ? 50 : Object(a.f)(t / (e / 100))
                },
                p = function(e) {
                    return Math.min(e, 4e3)
                },
                y = function(e, t, n, r) {
                    if ("svg" === n) return e;
                    var o = new URLSearchParams;
                    return o.append("fm", n), o.append("w", p(t)), r && (o.append("fit", "fill"), o.append("h", p(r))), o.append("q", 75), "".concat(e, "?").concat(o.toString())
                },
                v = function(e, t) {
                    return t.find((function(t) {
                        return t >= 1.75 * e
                    })) || Object(o.a)(t).reverse()[0]
                },
                h = function(e) {
                    var t = e.asset,
                        n = e.el,
                        r = e.sizes,
                        o = e.focus;
                    if (e.useRatio) return [v(n.offsetWidth, r), !1];
                    if (!o) return [v(n.offsetWidth, r), v(n.offsetHeight, r)];
                    var a = f(t).fields,
                        i = b(a),
                        c = Math.floor(n.offsetHeight / (i / 100));
                    return [v(Math.max(c, n.offsetWidth), r), !1]
                },
                b = function(e) {
                    var t, n, r = (null === e || void 0 === e || null === (t = e.file) || void 0 === t || null === (n = t.details) || void 0 === n ? void 0 : n.image) || {},
                        o = r.width,
                        i = void 0 === o ? 16 : o,
                        c = r.height,
                        u = void 0 === c ? 9 : c;
                    return Object(a.f)(u / i * 100, 100)
                },
                m = {},
                g = function(e, t) {
                    u || (u = new Worker("/scripts/image.worker.js")).addEventListener("message", (function(e) {
                        var t = e.data || {},
                            n = t.uid,
                            r = t.blobUrl,
                            o = m[n];
                        o && (delete m[n], o(r))
                    }));
                    var n = "".concat(Object(i.b)(5), "-").concat(e);
                    m[n] = t, u.postMessage({
                        url: e,
                        uid: n
                    })
                }
        },
        "5Cgt": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== c(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = n("tbWI"),
                a = n("mzdp");

            function i() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function c(e) {
                return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        b(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }

            function y(e, t) {
                return !t || "object" !== c(t) && "function" !== typeof t ? v(e) : t
            }

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(u, e);
                var t, n, i, c = p(u);

                function u() {
                    var e;
                    s(this, u);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return b(v(e = c.call.apply(c, [this].concat(n))), "callPlayer", o.callPlayer), b(v(e), "duration", null), b(v(e), "currentTime", null), b(v(e), "secondsLoaded", null), b(v(e), "mute", (function() {})), b(v(e), "unmute", (function() {})), b(v(e), "ref", (function(t) {
                        e.iframe = t
                    })), e
                }
                return t = u, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        var t = this;
                        (0, o.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js", "Mixcloud").then((function(e) {
                            t.player = e.PlayerWidget(t.iframe), t.player.ready.then((function() {
                                t.player.events.play.on(t.props.onPlay), t.player.events.pause.on(t.props.onPause), t.player.events.ended.on(t.props.onEnded), t.player.events.error.on(t.props.error), t.player.events.progress.on((function(e, n) {
                                    t.currentTime = e, t.duration = n
                                })), t.props.onReady()
                            }))
                        }), this.props.onError)
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop",
                    value: function() {}
                }, {
                    key: "seekTo",
                    value: function(e) {
                        this.callPlayer("seek", e)
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {}
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.currentTime
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return null
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.url,
                            n = e.config,
                            i = t.match(a.MATCH_URL_MIXCLOUD)[1],
                            c = (0, o.queryString)(l(l({}, n.options), {}, {
                                feed: "/".concat(i, "/")
                            }));
                        return r.default.createElement("iframe", {
                            key: i,
                            ref: this.ref,
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            src: "https://www.mixcloud.com/widget/iframe/?".concat(c),
                            frameBorder: "0"
                        })
                    }
                }]) && f(t.prototype, n), i && f(t, i), u
            }(r.Component);
            t.default = m, b(m, "displayName", "Mixcloud"), b(m, "canPlay", a.canPlay.mixcloud), b(m, "loopOnEnded", !0)
        },
        "5Hne": function(e, t, n) {
            e.exports = {
                container: "MammutLogo_container__K4RDB"
            }
        },
        "5fIB": function(e, t, n) {
            var r = n("7eYB");
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        "6tYh": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createReactPlayer = void 0;
            var r = L(n("q1tI")),
                o = s(n("PE4B")),
                a = s(n("Wwog")),
                i = s(n("bmMU")),
                c = n("QXAm"),
                u = n("tbWI"),
                l = s(n("q+qS"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f(e) {
                return (f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        w(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function y() {
                return (y = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return h(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function g(e, t) {
                return (g = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function O(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = C(e);
                    if (t) {
                        var o = C(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return _(this, n)
                }
            }

            function _(e, t) {
                return !t || "object" !== f(t) && "function" !== typeof t ? j(e) : t
            }

            function j(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function C(e) {
                return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function w(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function P() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return P = function() {
                    return e
                }, e
            }

            function L(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== f(e) && "function" !== typeof e) return {
                    default: e
                };
                var t = P();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                    }
                return n.default = e, t && t.set(e, n), n
            }
            var k = (0, r.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return L(n("fflM"))
                    }))
                })),
                S = "undefined" !== typeof window && window.document,
                M = Object.keys(c.propTypes),
                E = S ? r.Suspense : function() {
                    return null
                },
                x = [];
            t.createReactPlayer = function(e, t) {
                var n, s;
                return s = n = function(n) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && g(e, t)
                    }(_, n);
                    var s, f, d, h = O(_);

                    function _() {
                        var n;
                        b(this, _);
                        for (var i = arguments.length, s = new Array(i), f = 0; f < i; f++) s[f] = arguments[f];
                        return w(j(n = h.call.apply(h, [this].concat(s))), "state", {
                            showPreview: !!n.props.light
                        }), w(j(n), "references", {
                            wrapper: function(e) {
                                n.wrapper = e
                            },
                            player: function(e) {
                                n.player = e
                            }
                        }), w(j(n), "handleClickPreview", (function() {
                            n.setState({
                                showPreview: !1
                            })
                        })), w(j(n), "showPreview", (function() {
                            n.setState({
                                showPreview: !0
                            })
                        })), w(j(n), "getDuration", (function() {
                            return n.player ? n.player.getDuration() : null
                        })), w(j(n), "getCurrentTime", (function() {
                            return n.player ? n.player.getCurrentTime() : null
                        })), w(j(n), "getSecondsLoaded", (function() {
                            return n.player ? n.player.getSecondsLoaded() : null
                        })), w(j(n), "getInternalPlayer", (function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "player";
                            return n.player ? n.player.getInternalPlayer(e) : null
                        })), w(j(n), "seekTo", (function(e, t) {
                            if (!n.player) return null;
                            n.player.seekTo(e, t)
                        })), w(j(n), "handleReady", (function() {
                            n.props.onReady(j(n))
                        })), w(j(n), "getActivePlayer", (0, a.default)((function(n) {
                            for (var r = 0, o = [].concat(x, v(e)); r < o.length; r++) {
                                var a = o[r];
                                if (a.canPlay(n)) return a
                            }
                            return t || null
                        }))), w(j(n), "getConfig", (0, a.default)((function(e, t) {
                            var r = n.props.config;
                            return o.default.all([c.defaultProps.config, c.defaultProps.config[t] || {}, r, r[t] || {}])
                        }))), w(j(n), "getAttributes", (0, a.default)((function(e) {
                            return (0, u.omit)(n.props, M)
                        }))), w(j(n), "renderActivePlayer", (function(e) {
                            if (!e) return null;
                            var t = n.getActivePlayer(e);
                            if (!t) return null;
                            var o = n.getConfig(e, t.key);
                            return r.default.createElement(l.default, y({}, n.props, {
                                key: t.key,
                                ref: n.references.player,
                                config: o,
                                activePlayer: t.lazyPlayer || t,
                                onReady: n.handleReady
                            }))
                        })), n
                    }
                    return s = _, (f = [{
                        key: "shouldComponentUpdate",
                        value: function(e, t) {
                            return !(0, i.default)(this.props, e) || !(0, i.default)(this.state, t)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props.light;
                            !e.light && t && this.setState({
                                showPreview: !0
                            }), e.light && !t && this.setState({
                                showPreview: !1
                            })
                        }
                    }, {
                        key: "renderPreview",
                        value: function(e) {
                            if (!e) return null;
                            var t = this.props,
                                n = t.light,
                                o = t.playIcon;
                            return r.default.createElement(k, {
                                url: e,
                                light: n,
                                playIcon: o,
                                onClick: this.handleClickPreview
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.url,
                                n = e.style,
                                o = e.width,
                                a = e.height,
                                i = e.wrapper,
                                c = this.state.showPreview,
                                u = this.getAttributes(t);
                            return r.default.createElement(i, y({
                                ref: this.references.wrapper,
                                style: p(p({}, n), {}, {
                                    width: o,
                                    height: a
                                })
                            }, u), r.default.createElement(E, {
                                fallback: null
                            }, c ? this.renderPreview(t) : this.renderActivePlayer(t)))
                        }
                    }]) && m(s.prototype, f), d && m(s, d), _
                }(r.Component), w(n, "displayName", "ReactPlayer"), w(n, "propTypes", c.propTypes), w(n, "defaultProps", c.defaultProps), w(n, "addCustomPlayer", (function(e) {
                    x.push(e)
                })), w(n, "removeCustomPlayers", (function() {
                    x.length = 0
                })), w(n, "canPlay", (function(t) {
                    for (var n = 0, r = [].concat(x, v(e)); n < r.length; n++) {
                        if (r[n].canPlay(t)) return !0
                    }
                    return !1
                })), w(n, "canEnablePIP", (function(t) {
                    for (var n = 0, r = [].concat(x, v(e)); n < r.length; n++) {
                        var o = r[n];
                        if (o.canEnablePIP && o.canEnablePIP(t)) return !0
                    }
                    return !1
                })), s
            }
        },
        "7Bdg": function(e, t, n) {
            "use strict";
            var r = n("wx14"),
                o = n("Ff2n"),
                a = n("q1tI"),
                i = n.n(a),
                c = n("wNob"),
                u = n("0+g7"),
                l = n.n(u),
                s = i.a.createElement;
            t.a = function(e) {
                var t = e.className,
                    n = Object(o.a)(e, ["className"]);
                return s("svg", Object(r.a)({
                    width: "12",
                    height: "13",
                    viewBox: "0 0 12 13",
                    className: Object(c.a)(l.a.container, t)
                }, n), s("path", {
                    d: "M0.443359 12.6221V0.622311L4.29929 0.622311V12.6221H0.443359Z"
                }), s("path", {
                    d: "M7.64109 12.6218V0.62207L11.497 0.62207V12.6218H7.64109Z"
                }))
            }
        },
        "7C6t": function(e, t, n) {
            e.exports = {
                container: "BlockImageCollageDevelopment_container__13hwk",
                info: "BlockImageCollageDevelopment_info__bQiY_",
                infoItem: "BlockImageCollageDevelopment_infoItem__1s3WV",
                svg: "BlockImageCollageDevelopment_svg__n2Fex"
            }
        },
        "7jaY": function(e, t, n) {
            e.exports = {
                container: "Jacket_container__2-sEh",
                path: "Jacket_path__29IEX"
            }
        },
        "7l9Y": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, o = (r = n("zuFh")) && r.__esModule ? r : {
                    default: r
                },
                a = n("6tYh");
            var i = o.default[o.default.length - 1],
                c = (0, a.createReactPlayer)(o.default, i);
            t.default = c
        },
        "8Kt/": function(e, t, n) {
            "use strict";
            n("oI91");
            t.__esModule = !0, t.defaultHead = s, t.default = void 0;
            var r, o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var t = l();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                a = (r = n("Xuae")) && r.__esModule ? r : {
                    default: r
                },
                i = n("lwAK"),
                c = n("FYa8"),
                u = n("/0+H");

            function l() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return l = function() {
                    return e
                }, e
            }

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [o.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(o.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function f(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((function(e, t) {
                    return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
                }), [])) : e.concat(t)
            }
            var d = ["name", "httpEquiv", "charSet", "itemProp"];

            function p(e, t) {
                return e.reduce((function(e, t) {
                    var n = o.default.Children.toArray(t.props.children);
                    return e.concat(n)
                }), []).reduce(f, []).reverse().concat(s(t.inAmpMode)).filter(function() {
                    var e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return function(o) {
                        var a = !0;
                        if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
                            var i = o.key.slice(o.key.indexOf("$") + 1);
                            e.has(i) ? a = !1 : e.add(i)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                t.has(o.type) ? a = !1 : t.add(o.type);
                                break;
                            case "meta":
                                for (var c = 0, u = d.length; c < u; c++) {
                                    var l = d[c];
                                    if (o.props.hasOwnProperty(l))
                                        if ("charSet" === l) n.has(l) ? a = !1 : n.add(l);
                                        else {
                                            var s = o.props[l],
                                                f = r[l] || new Set;
                                            f.has(s) ? a = !1 : (f.add(s), r[l] = f)
                                        }
                                }
                        }
                        return a
                    }
                }()).reverse().map((function(e, t) {
                    var n = e.key || t;
                    return o.default.cloneElement(e, {
                        key: n
                    })
                }))
            }

            function y(e) {
                var t = e.children,
                    n = (0, o.useContext)(i.AmpStateContext),
                    r = (0, o.useContext)(c.HeadManagerContext);
                return o.default.createElement(a.default, {
                    reduceComponentsToState: p,
                    headManager: r,
                    inAmpMode: (0, u.isInAmpMode)(n)
                }, t)
            }
            y.rewind = function() {};
            var v = y;
            t.default = v
        },
        "8pX6": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return o
            }));
            var r = {
                    orange: {
                        textColor: "#fff",
                        backgroundColor: "#F56905",
                        backgroundRgb: "245,105,5",
                        loadingBackgroundColor: "#491f01"
                    },
                    blue: {
                        textColor: "#fff",
                        backgroundColor: "#23293C",
                        backgroundRgb: "35,41,60",
                        loadingBackgroundColor: "#7a87b1"
                    },
                    grey: {
                        textColor: "#000",
                        backgroundColor: "#F5F5F5",
                        backgroundRgb: "245,245,245",
                        loadingBackgroundColor: "#000"
                    },
                    dark: {
                        textColor: "#fff",
                        backgroundColor: "#191919",
                        backgroundRgb: "25,25,25",
                        loadingBackgroundColor: "#fff"
                    },
                    "arctic-blue": {
                        textColor: "#fff",
                        backgroundColor: "#0079BD",
                        backgroundRgb: "7,48,104",
                        loadingBackgroundColor: "#002438"
                    },
                    "pure-white": {
                        textColor: "#000",
                        backgroundColor: "#fff",
                        backgroundRgb: "255,255,255",
                        loadingBackgroundColor: "#000"
                    },
                    red: {
                        textColor: "#fff",
                        backgroundColor: "#E00B25",
                        backgroundRgb: "224,11,37",
                        loadingBackgroundColor: "#59040e"
                    },
                    "dark-green": {
                        textColor: "#fff",
                        backgroundColor: "#252920",
                        backgroundRgb: "37,41,32",
                        loadingBackgroundColor: "#fff"
                    },
                    sand: {
                        textColor: "#000",
                        backgroundColor: "#DDD4C4",
                        backgroundRgb: "221,212,196",
                        loadingBackgroundColor: "#000"
                    },
                    "soft-green": {
                        textColor: "#000",
                        backgroundColor: "#999999",
                        backgroundRgb: "183,197,190",
                        loadingBackgroundColor: "#000"
                    }
                },
                o = function(e) {
                    var t = r[e] || {},
                        n = t.textColor,
                        o = t.backgroundColor;
                    return n && o ? {
                        backgroundColor: o,
                        color: n
                    } : {}
                }
        },
        "9IiE": function(e, t, n) {
            e.exports = {
                title: "BlockExtendedHorizontalSlider_title__AHhJB",
                slider: "BlockExtendedHorizontalSlider_slider__3XNCK",
                imagesContainer: "BlockExtendedHorizontalSlider_imagesContainer__3RuKO",
                block: "BlockExtendedHorizontalSlider_block__2-aUA",
                first: "BlockExtendedHorizontalSlider_first__3jdRO",
                last: "BlockExtendedHorizontalSlider_last__6Aw4n",
                text: "BlockExtendedHorizontalSlider_text__ryEFf",
                imageWrapper: "BlockExtendedHorizontalSlider_imageWrapper__1KGGO",
                portrait: "BlockExtendedHorizontalSlider_portrait__29Cib",
                marginLeft: "BlockExtendedHorizontalSlider_marginLeft__3gvKM",
                marginRight: "BlockExtendedHorizontalSlider_marginRight__1eKO1",
                landscapeSmall: "BlockExtendedHorizontalSlider_landscapeSmall__2fz5a",
                landscapeMedium: "BlockExtendedHorizontalSlider_landscapeMedium__2Idtm",
                landscapeLarge: "BlockExtendedHorizontalSlider_landscapeLarge__3CVtD",
                image: "BlockExtendedHorizontalSlider_image__2eAtQ"
            }
        },
        "9WRR": function(e, t, n) {
            "use strict";
            var r = n("wx14"),
                o = n("Ff2n"),
                a = n("q1tI"),
                i = n.n(a),
                c = n("wNob"),
                u = n("dXjJ"),
                l = n.n(u),
                s = i.a.createElement;
            t.a = function(e) {
                var t = e.className,
                    n = Object(o.a)(e, ["className"]);
                return s("svg", Object(r.a)({
                    viewBox: "0 0 24 21",
                    fill: "none",
                    className: Object(c.a)(l.a.container, t)
                }, n), s("path", {
                    d: "M20 18.5869L4 18.5869L1 5.58691L23 5.58691L20 18.5869Z",
                    className: l.a.bag
                }), s("path", {
                    d: "M8.02734 1V0L7.02734 1H8.02734ZM15.9768 1H16.9768L15.9768 0V1ZM8.02734 2H15.9768V0H8.02734V2ZM14.9768 1V3.98104H16.9768V1H14.9768ZM9.02734 3.98104V1H7.02734V3.98104H9.02734Z",
                    className: l.a.handle
                }))
            }
        },
        "9WjZ": function(e, t, n) {
            e.exports = {
                container: "HeartBeat_container__3TcjZ"
            }
        },
        "9e+4": function(e, t, n) {
            e.exports = {
                container: "ContentfulImage_container__14QGm",
                ratio: "ContentfulImage_ratio__3PIl0",
                hasLoadingState: "ContentfulImage_hasLoadingState__1_6Io",
                pulse: "ContentfulImage_pulse__4teyV",
                imgEl: "ContentfulImage_imgEl__3wJU-",
                visible: "ContentfulImage_visible__3cYm1",
                contain: "ContentfulImage_contain__2YXBk",
                noZoom: "ContentfulImage_noZoom__14C42",
                zoomOut: "ContentfulImage_zoomOut__UkifG",
                observer: "ContentfulImage_observer__152CF"
            }
        },
        A4H7: function(e, t, n) {
            e.exports = {
                container: "TextHighlight_container__1HHu3"
            }
        },
        ASWg: function(e, t, n) {
            "use strict";
            var r, o = n("q1tI"),
                a = n("j6bO"),
                i = new Set,
                c = new Set,
                u = !1,
                l = 0,
                s = 0,
                f = function e(t) {
                    c.forEach((function(e) {
                        e(l, t)
                    })), r = r && window.requestAnimationFrame(e)
                },
                d = function() {
                    l = Object(a.a)(),
                        function() {
                            var e = "top";
                            l > s && (e = "down"), s = l <= 0 ? 0 : l, i.forEach((function(t) {
                                t({
                                    direction: e,
                                    y: l
                                })
                            }))
                        }()
                },
                p = function() {
                    var e = c.size > 0;
                    e && !r && (r = window.requestAnimationFrame(f)), !e && r && (window.cancelAnimationFrame(r), r = void 0)
                };
            t.a = function(e) {
                var t = e.onScroll,
                    n = e.onAnimationFrame,
                    r = e.active,
                    a = void 0 === r || r;
                Object(o.useEffect)((function() {
                    if (a) {
                        var e = "function" === typeof t,
                            r = "function" === typeof n;
                        e && i.add(t), r && (c.add(n), p()), u || !r && !e || (u = !0, d(), window.addEventListener("scroll", d))
                    }
                    return function() {
                        i.delete(t), c.delete(n), p(), 0 === i.size && 0 === c.size && (window.removeEventListener("scroll", d), u = !1)
                    }
                }), [t, n, a])
            }
        },
        AUtv: function(e, t, n) {
            e.exports = {
                container: "BlockFullScreenImageFade_container__3SpHJ",
                imageWrap: "BlockFullScreenImageFade_imageWrap__6cZb6",
                image: "BlockFullScreenImageFade_image__2awCo",
                imageActive: "BlockFullScreenImageFade_imageActive__36QVf"
            }
        },
        AWD8: function(e, t, n) {
            e.exports = {
                container: "BlockNextUp_container__26gRU",
                imageContainer: "BlockNextUp_imageContainer__38gw_",
                title: "BlockNextUp_title__3RL_U",
                isActive: "BlockNextUp_isActive__M__rs",
                titleForeground: "BlockNextUp_titleForeground__2VOi0",
                isExiting: "BlockNextUp_isExiting__PzBmG",
                titleBackground: "BlockNextUp_titleBackground__y09DX",
                button: "BlockNextUp_button__2BP1m",
                isRemoved: "BlockNextUp_isRemoved__1RKYH",
                backdrop: "BlockNextUp_backdrop__1SkJ8",
                observer: "BlockNextUp_observer__HKbLg"
            }
        },
        CiMY: function(e, t, n) {
            e.exports = {
                container: "TextExternalLink_container__38t5W",
                arrow: "TextExternalLink_arrow__1rePy"
            }
        },
        ECgy: function(e, t, n) {
            e.exports = {
                tooltip: "LinkedProductTooltip_tooltip__3dcEM"
            }
        },
        FBcq: function(e, t, n) {
            e.exports = {
                inView: "ImageCollage_inView__1RF0R",
                introContainer: "ImageCollage_introContainer__4YLGD",
                introScrollContainer: "ImageCollage_introScrollContainer__1ES0v",
                introVideoWrapper: "ImageCollage_introVideoWrapper__3vH-r",
                introImageWrapper: "ImageCollage_introImageWrapper__35biV",
                mainContainer: "ImageCollage_mainContainer__1J4P3",
                mainImageWrapper: "ImageCollage_mainImageWrapper___WdaG",
                aside: "ImageCollage_aside__Upi_9",
                asideImageWrapper: "ImageCollage_asideImageWrapper__2XYFA",
                captionedImageContainer: "ImageCollage_captionedImageContainer__8swj2",
                captionedImage: "ImageCollage_captionedImage__7r3KL",
                caption: "ImageCollage_caption__12bUg"
            }
        },
        FYa8: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.HeadManagerContext = void 0;
            var o = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.HeadManagerContext = o
        },
        FpTa: function(e, t, n) {
            e.exports = {
                container: "BackgroundVideo_container__2f3rz",
                hasLoadingState: "BackgroundVideo_hasLoadingState__18bg4",
                pulse: "BackgroundVideo_pulse__2C-KG",
                video: "BackgroundVideo_video__1n-Qg",
                audioControlButton: "BackgroundVideo_audioControlButton__KItJ3",
                audioControlIcon: "BackgroundVideo_audioControlIcon__2tPP4",
                isPlayIcon: "BackgroundVideo_isPlayIcon__X5QBj"
            }
        },
        GZAR: function(e, t, n) {
            e.exports = {
                container: "BlockAthleteInfo_container__2kmSc",
                name: "BlockAthleteInfo_name__3TUaG",
                partialName: "BlockAthleteInfo_partialName__3IMZS",
                facts: "BlockAthleteInfo_facts__2HVuJ",
                fact: "BlockAthleteInfo_fact__28ACI",
                key: "BlockAthleteInfo_key__1zxiO",
                value: "BlockAthleteInfo_value__3nFO2"
            }
        },
        GdC5: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== c(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = n("tbWI"),
                a = n("mzdp");

            function i() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function c(e) {
                return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }

            function d(e, t) {
                return !t || "object" !== c(t) && "function" !== typeof t ? p(e) : t
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function y(e) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function v(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var h = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && s(e, t)
                }(d, e);
                var t, n, i, c = f(d);

                function d() {
                    var e;
                    u(this, d);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return v(p(e = c.call.apply(c, [this].concat(n))), "callPlayer", o.callPlayer), v(p(e), "duration", null), v(p(e), "currentTime", null), v(p(e), "secondsLoaded", null), v(p(e), "mute", (function() {
                        e.callPlayer("mute")
                    })), v(p(e), "unmute", (function() {
                        e.callPlayer("unmute")
                    })), v(p(e), "ref", (function(t) {
                        e.iframe = t
                    })), e
                }
                return t = d, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        var t = this;
                        (0, o.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js", "playerjs").then((function(e) {
                            t.iframe && (t.player = new e.Player(t.iframe), t.player.setLoop(t.props.loop), t.player.on("ready", t.props.onReady), t.player.on("play", t.props.onPlay), t.player.on("pause", t.props.onPause), t.player.on("seeked", t.props.onSeek), t.player.on("ended", t.props.onEnded), t.player.on("error", t.props.onError), t.player.on("timeupdate", (function(e) {
                                var n = e.duration,
                                    r = e.seconds;
                                t.duration = n, t.currentTime = r
                            })), t.player.on("buffered", (function(e) {
                                var n = e.percent;
                                t.duration && (t.secondsLoaded = t.duration * n)
                            })), t.props.muted && t.player.mute())
                        }), this.props.onError)
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop",
                    value: function() {}
                }, {
                    key: "seekTo",
                    value: function(e) {
                        this.callPlayer("setCurrentTime", e)
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.callPlayer("setVolume", 100 * e)
                    }
                }, {
                    key: "setLoop",
                    value: function(e) {
                        this.callPlayer("setLoop", e)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.currentTime
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return this.secondsLoaded
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.url.match(a.MATCH_URL_STREAMABLE)[1];
                        return r.default.createElement("iframe", {
                            ref: this.ref,
                            src: "https://streamable.com/o/".concat(e),
                            frameBorder: "0",
                            scrolling: "no",
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            allowFullScreen: !0
                        })
                    }
                }]) && l(t.prototype, n), i && l(t, i), d
            }(r.Component);
            t.default = h, v(h, "displayName", "Streamable"), v(h, "canPlay", a.canPlay.streamable)
        },
        GqpQ: function(e, t, n) {
            e.exports = {
                svgContainer: "RouteIndicator_svgContainer__2usAn",
                svg: "RouteIndicator_svg__3ebJt",
                animatePath: "RouteIndicator_animatePath__2l6MM",
                line: "RouteIndicator_line__2Vd6h",
                letter: "RouteIndicator_letter__211vr",
                ellipse: "RouteIndicator_ellipse__KWzNX"
            }
        },
        Konj: function(e, t, n) {
            e.exports = {
                products: "RichMedia_products__mAI26",
                figure: "RichMedia_figure__3dU6o",
                productIndicator: "RichMedia_productIndicator__14u5M",
                bagIcon: "RichMedia_bagIcon__1xSZS",
                productCount: "RichMedia_productCount__1Onyj"
            }
        },
        LLoX: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== c(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = n("tbWI"),
                a = n("mzdp");

            function i() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function c(e) {
                return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function d(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = v(e);
                    if (t) {
                        var o = v(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }

            function p(e, t) {
                return !t || "object" !== c(t) && "function" !== typeof t ? y(e) : t
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v(e) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var b = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t)
                }(c, e);
                var t, n, a, i = d(c);

                function c() {
                    var e;
                    l(this, c);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return h(y(e = i.call.apply(i, [this].concat(n))), "callPlayer", o.callPlayer), h(y(e), "duration", null), h(y(e), "currentTime", null), h(y(e), "secondsLoaded", null), h(y(e), "mute", (function() {
                        e.setVolume(0)
                    })), h(y(e), "unmute", (function() {
                        null !== e.props.volume && e.setVolume(e.props.volume)
                    })), h(y(e), "ref", (function(t) {
                        e.container = t
                    })), e
                }
                return t = c, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        var t = this;
                        this.duration = null, (0, o.getSDK)("https://player.vimeo.com/api/player.js", "Vimeo").then((function(n) {
                            t.container && (t.player = new n.Player(t.container, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                                        h(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({
                                url: e,
                                autoplay: t.props.playing,
                                muted: t.props.muted,
                                loop: t.props.loop,
                                playsinline: t.props.playsinline,
                                controls: t.props.controls
                            }, t.props.config.playerOptions)), t.player.ready().then((function() {
                                var e = t.container.querySelector("iframe");
                                e.style.width = "100%", e.style.height = "100%"
                            })).catch(t.props.onError), t.player.on("loaded", (function() {
                                t.props.onReady(), t.refreshDuration()
                            })), t.player.on("play", (function() {
                                t.props.onPlay(), t.refreshDuration()
                            })), t.player.on("pause", t.props.onPause), t.player.on("seeked", (function(e) {
                                return t.props.onSeek(e.seconds)
                            })), t.player.on("ended", t.props.onEnded), t.player.on("error", t.props.onError), t.player.on("timeupdate", (function(e) {
                                var n = e.seconds;
                                t.currentTime = n
                            })), t.player.on("progress", (function(e) {
                                var n = e.seconds;
                                t.secondsLoaded = n
                            })), t.player.on("bufferstart", t.props.onBuffer), t.player.on("bufferend", t.props.onBufferEnd))
                        }), this.props.onError)
                    }
                }, {
                    key: "refreshDuration",
                    value: function() {
                        var e = this;
                        this.player.getDuration().then((function(t) {
                            e.duration = t
                        }))
                    }
                }, {
                    key: "play",
                    value: function() {
                        var e = this.callPlayer("play");
                        e && e.catch(this.props.onError)
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.callPlayer("unload")
                    }
                }, {
                    key: "seekTo",
                    value: function(e) {
                        this.callPlayer("setCurrentTime", e)
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.callPlayer("setVolume", e)
                    }
                }, {
                    key: "setLoop",
                    value: function(e) {
                        this.callPlayer("setLoop", e)
                    }
                }, {
                    key: "setPlaybackRate",
                    value: function(e) {
                        this.callPlayer("setPlaybackRate", e)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.currentTime
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return this.secondsLoaded
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            display: this.props.display
                        };
                        return r.default.createElement("div", {
                            key: this.props.url,
                            ref: this.ref,
                            style: e
                        })
                    }
                }]) && s(t.prototype, n), a && s(t, a), c
            }(r.Component);
            t.default = b, h(b, "displayName", "Vimeo"), h(b, "canPlay", a.canPlay.vimeo), h(b, "forceLoad", !0)
        },
        Mtom: function(e, t, n) {
            e.exports = {
                container: "CirculairMeter_container__1y-U5",
                dark: "CirculairMeter_dark__3xXt5",
                indicator: "CirculairMeter_indicator__RB5Zw",
                start: "CirculairMeter_start__2mhVV",
                end: "CirculairMeter_end__aHLVC",
                value: "CirculairMeter_value__z-6wa"
            }
        },
        MuZe: function(e, t) {
            function n(e, t) {
                e.onload = function() {
                    this.onerror = this.onload = null, t(null, e)
                }, e.onerror = function() {
                    this.onerror = this.onload = null, t(new Error("Failed to load " + this.src), e)
                }
            }

            function r(e, t) {
                e.onreadystatechange = function() {
                    "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, t(null, e))
                }
            }
            e.exports = function(e, t, o) {
                var a = document.head || document.getElementsByTagName("head")[0],
                    i = document.createElement("script");
                "function" === typeof t && (o = t, t = {}), t = t || {}, o = o || function() {}, i.type = t.type || "text/javascript", i.charset = t.charset || "utf8", i.async = !("async" in t) || !!t.async, i.src = e, t.attrs && function(e, t) {
                    for (var n in t) e.setAttribute(n, t[n])
                }(i, t.attrs), t.text && (i.text = "" + t.text), ("onload" in i ? n : r)(i, o), i.onload || n(i, o), a.appendChild(i)
            }
        },
        NYZm: function(e, t, n) {
            e.exports = {
                dot: "ProductTooltip_dot__2DyeD",
                visible: "ProductTooltip_visible__22oVY",
                dotIcon: "ProductTooltip_dotIcon__qxJnY",
                info: "ProductTooltip_info__xFaZ-",
                title: "ProductTooltip_title__2f3GI",
                imageContainer: "ProductTooltip_imageContainer__2L4LF",
                image: "ProductTooltip_image__3tOwe",
                price: "ProductTooltip_price__ygkzG",
                mask: "ProductTooltip_mask__6GtPH",
                inner: "ProductTooltip_inner__2g5J0",
                toolTip: "ProductTooltip_toolTip__2oPzR",
                card: "ProductTooltip_card__20PLE",
                horizontal: "ProductTooltip_horizontal__2bIhi",
                container: "ProductTooltip_container__3eN1D",
                leftSide: "ProductTooltip_leftSide__3PQ4o",
                loaded: "ProductTooltip_loaded__2FZof",
                delayedInView: "ProductTooltip_delayedInView__2oRTB",
                quickView: "ProductTooltip_quickView__9CJft",
                quickViewIcon: "ProductTooltip_quickViewIcon__2df1C",
                quickViewLabel: "ProductTooltip_quickViewLabel__3wTh-"
            }
        },
        NbP0: function(e, t, n) {
            e.exports = {
                container: "BlockIntroDevelopment_container__18web",
                mammutLogo: "BlockIntroDevelopment_mammutLogo__s1Np8",
                titleContainer: "BlockIntroDevelopment_titleContainer__2c7s8",
                title: "BlockIntroDevelopment_title__2UuuC",
                video: "BlockIntroDevelopment_video__1xQy8",
                controls: "BlockIntroDevelopment_controls__FGuu1"
            }
        },
        Nvsu: function(e, t, n) {
            e.exports = {
                container: "HorizontalSlider_container__2fRZP",
                inView: "HorizontalSlider_inView__2zWkN",
                sliderWrapper: "HorizontalSlider_sliderWrapper__PaDWp",
                slider: "HorizontalSlider_slider__32CJZ"
            }
        },
        "OjA/": function(e, t, n) {
            e.exports = {
                container: "BlockVideoSequence_container__UHfN-",
                hasLoadingState: "BlockVideoSequence_hasLoadingState__2pc7r",
                pulse: "BlockVideoSequence_pulse__1-7Nd",
                isGoreTex: "BlockVideoSequence_isGoreTex__t68AG",
                image: "BlockVideoSequence_image__1UZe7",
                imageWrapper: "BlockVideoSequence_imageWrapper__2zxdq",
                visible: "BlockVideoSequence_visible__2SI9d",
                mammutLogo: "BlockVideoSequence_mammutLogo__ZYMfv",
                content: "BlockVideoSequence_content__3CAHi",
                titleContainer: "BlockVideoSequence_titleContainer__3YtYX",
                title: "BlockVideoSequence_title__nHHKL",
                trademark: "BlockVideoSequence_trademark__14OvA",
                text: "BlockVideoSequence_text__22hzs",
                button: "BlockVideoSequence_button__3dtKb",
                isHidden: "BlockVideoSequence_isHidden__2SOqV",
                buttonIconWrapper: "BlockVideoSequence_buttonIconWrapper__3tQmP",
                buttonIcon: "BlockVideoSequence_buttonIcon__1SwJi"
            }
        },
        PE4B: function(e, t, n) {
            "use strict";
            var r = function(e) {
                return function(e) {
                    return !!e && "object" === typeof e
                }(e) && ! function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                        return e.$$typeof === o
                    }(e)
                }(e)
            };
            var o = "function" === typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function a(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? s((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
                var n
            }

            function i(e, t, n) {
                return e.concat(t).map((function(e) {
                    return a(e, n)
                }))
            }

            function c(e) {
                return Object.keys(e).concat(function(e) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
                        return e.propertyIsEnumerable(t)
                    })) : []
                }(e))
            }

            function u(e, t) {
                try {
                    return t in e
                } catch (n) {
                    return !1
                }
            }

            function l(e, t, n) {
                var r = {};
                return n.isMergeableObject(e) && c(e).forEach((function(t) {
                    r[t] = a(e[t], n)
                })), c(t).forEach((function(o) {
                    (function(e, t) {
                        return u(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                    })(e, o) || (u(e, o) && n.isMergeableObject(t[o]) ? r[o] = function(e, t) {
                        if (!t.customMerge) return s;
                        var n = t.customMerge(e);
                        return "function" === typeof n ? n : s
                    }(o, n)(e[o], t[o], n) : r[o] = a(t[o], n))
                })), r
            }

            function s(e, t, n) {
                (n = n || {}).arrayMerge = n.arrayMerge || i, n.isMergeableObject = n.isMergeableObject || r, n.cloneUnlessOtherwiseSpecified = a;
                var o = Array.isArray(t);
                return o === Array.isArray(e) ? o ? n.arrayMerge(e, t, n) : l(e, t, n) : a(t, n)
            }
            s.all = function(e, t) {
                if (!Array.isArray(e)) throw new Error("first argument should be an array");
                return e.reduce((function(e, n) {
                    return s(e, n, t)
                }), {})
            };
            var f = s;
            e.exports = f
        },
        PjWa: function(e, t, n) {
            e.exports = {
                container: "BlockVideo_container__SYyaF",
                videoContainer: "BlockVideo_videoContainer__nylMt",
                title: "BlockVideo_title__s50vi",
                thumbnailContainer: "BlockVideo_thumbnailContainer__2jDcz",
                isHidden: "BlockVideo_isHidden__1iukX",
                buttonOuter: "BlockVideo_buttonOuter__37_Os",
                buttonInner: "BlockVideo_buttonInner__1OWLr",
                buttonIconWrapper: "BlockVideo_buttonIconWrapper__1FozO",
                buttonText: "BlockVideo_buttonText__1tyic",
                buttonIcon: "BlockVideo_buttonIcon__1mmUb"
            }
        },
        QXAm: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defaultProps = t.propTypes = void 0;
            var r, o = (r = n("17x9")) && r.__esModule ? r : {
                default: r
            };
            var a = o.default.string,
                i = o.default.bool,
                c = o.default.number,
                u = o.default.array,
                l = o.default.oneOfType,
                s = o.default.shape,
                f = o.default.object,
                d = o.default.func,
                p = o.default.node,
                y = {
                    url: l([a, u, f]),
                    playing: i,
                    loop: i,
                    controls: i,
                    volume: c,
                    muted: i,
                    playbackRate: c,
                    width: l([a, c]),
                    height: l([a, c]),
                    style: f,
                    progressInterval: c,
                    playsinline: i,
                    pip: i,
                    stopOnUnmount: i,
                    light: l([i, a]),
                    playIcon: p,
                    wrapper: l([a, d, s({
                        render: d.isRequired
                    })]),
                    config: s({
                        soundcloud: s({
                            options: f
                        }),
                        youtube: s({
                            playerVars: f,
                            embedOptions: f,
                            onUnstarted: d
                        }),
                        facebook: s({
                            appId: a,
                            version: a,
                            playerId: a
                        }),
                        dailymotion: s({
                            params: f
                        }),
                        vimeo: s({
                            playerOptions: f
                        }),
                        file: s({
                            attributes: f,
                            tracks: u,
                            forceVideo: i,
                            forceAudio: i,
                            forceHLS: i,
                            forceDASH: i,
                            forceFLV: i,
                            hlsOptions: f,
                            hlsVersion: a,
                            dashVersion: a,
                            flvVersion: a
                        }),
                        wistia: s({
                            options: f,
                            playerId: a
                        }),
                        mixcloud: s({
                            options: f
                        }),
                        twitch: s({
                            options: f,
                            playerId: a
                        }),
                        vidyard: s({
                            options: f
                        })
                    }),
                    onReady: d,
                    onStart: d,
                    onPlay: d,
                    onPause: d,
                    onBuffer: d,
                    onBufferEnd: d,
                    onEnded: d,
                    onError: d,
                    onDuration: d,
                    onSeek: d,
                    onProgress: d,
                    onEnablePIP: d,
                    onDisablePIP: d
                };
            t.propTypes = y;
            var v = function() {},
                h = {
                    playing: !1,
                    loop: !1,
                    controls: !1,
                    volume: null,
                    muted: !1,
                    playbackRate: 1,
                    width: "640px",
                    height: "360px",
                    style: {},
                    progressInterval: 1e3,
                    playsinline: !1,
                    pip: !1,
                    stopOnUnmount: !0,
                    light: !1,
                    wrapper: "div",
                    config: {
                        soundcloud: {
                            options: {
                                visual: !0,
                                buying: !1,
                                liking: !1,
                                download: !1,
                                sharing: !1,
                                show_comments: !1,
                                show_playcount: !1
                            }
                        },
                        youtube: {
                            playerVars: {
                                playsinline: 1,
                                showinfo: 0,
                                rel: 0,
                                iv_load_policy: 3,
                                modestbranding: 1
                            },
                            embedOptions: {},
                            onUnstarted: v
                        },
                        facebook: {
                            appId: "1309697205772819",
                            version: "v3.3",
                            playerId: null
                        },
                        dailymotion: {
                            params: {
                                api: 1,
                                "endscreen-enable": !1
                            }
                        },
                        vimeo: {
                            playerOptions: {
                                autopause: !1,
                                byline: !1,
                                portrait: !1,
                                title: !1
                            }
                        },
                        file: {
                            attributes: {},
                            tracks: [],
                            forceVideo: !1,
                            forceAudio: !1,
                            forceHLS: !1,
                            forceDASH: !1,
                            forceFLV: !1,
                            hlsOptions: {},
                            hlsVersion: "0.13.1",
                            dashVersion: "2.9.2",
                            flvVersion: "1.5.0"
                        },
                        wistia: {
                            options: {},
                            playerId: null
                        },
                        mixcloud: {
                            options: {
                                hide_cover: 1
                            }
                        },
                        twitch: {
                            options: {},
                            playerId: null
                        },
                        vidyard: {
                            options: {}
                        }
                    },
                    onReady: v,
                    onStart: v,
                    onPlay: v,
                    onPause: v,
                    onBuffer: v,
                    onBufferEnd: v,
                    onEnded: v,
                    onError: v,
                    onDuration: v,
                    onSeek: v,
                    onProgress: v,
                    onEnablePIP: v,
                    onDisablePIP: v
                };
            t.defaultProps = h
        },
        Qvqy: function(e, t, n) {
            e.exports = {
                container: "LayoutBlock_container__l539v"
            }
        },
        R8uD: function(e, t, n) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, o = n("q1tI"),
                    a = (r = o) && "object" === typeof r && "default" in r ? r.default : r,
                    i = function() {
                        return (i = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }).apply(this, arguments)
                    },
                    c = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof e ? e : "undefined" !== typeof self ? self : {};
                var u, l = function(e, t) {
                    return e(t = {
                        exports: {}
                    }, t.exports), t.exports
                }((function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof c ? c : "undefined" !== typeof self ? self : {};

                    function r(e, t) {
                        return e(t = {
                            exports: {}
                        }, t.exports), t.exports
                    }
                    var o = function(e) {
                            return e && e.Math == Math && e
                        },
                        a = o("object" == typeof globalThis && globalThis) || o("object" == typeof window && window) || o("object" == typeof self && self) || o("object" == typeof n && n) || Function("return this")(),
                        i = function(e) {
                            try {
                                return !!e()
                            } catch (t) {
                                return !0
                            }
                        },
                        u = !i((function() {
                            return 7 != Object.defineProperty({}, 1, {
                                get: function() {
                                    return 7
                                }
                            })[1]
                        })),
                        l = {}.propertyIsEnumerable,
                        s = Object.getOwnPropertyDescriptor,
                        f = {
                            f: s && !l.call({
                                1: 2
                            }, 1) ? function(e) {
                                var t = s(this, e);
                                return !!t && t.enumerable
                            } : l
                        },
                        d = function(e, t) {
                            return {
                                enumerable: !(1 & e),
                                configurable: !(2 & e),
                                writable: !(4 & e),
                                value: t
                            }
                        },
                        p = {}.toString,
                        y = "".split,
                        v = i((function() {
                            return !Object("z").propertyIsEnumerable(0)
                        })) ? function(e) {
                            return "String" == function(e) {
                                return p.call(e).slice(8, -1)
                            }(e) ? y.call(e, "") : Object(e)
                        } : Object,
                        h = function(e) {
                            return v(function(e) {
                                if (void 0 == e) throw TypeError("Can't call method on " + e);
                                return e
                            }(e))
                        },
                        b = function(e) {
                            return "object" === typeof e ? null !== e : "function" === typeof e
                        },
                        m = function(e, t) {
                            if (!b(e)) return e;
                            var n, r;
                            if (t && "function" == typeof(n = e.toString) && !b(r = n.call(e))) return r;
                            if ("function" == typeof(n = e.valueOf) && !b(r = n.call(e))) return r;
                            if (!t && "function" == typeof(n = e.toString) && !b(r = n.call(e))) return r;
                            throw TypeError("Can't convert object to primitive value")
                        },
                        g = {}.hasOwnProperty,
                        O = function(e, t) {
                            return g.call(e, t)
                        },
                        _ = a.document,
                        j = b(_) && b(_.createElement),
                        C = function(e) {
                            return j ? _.createElement(e) : {}
                        },
                        w = !u && !i((function() {
                            return 7 != Object.defineProperty(C("div"), "a", {
                                get: function() {
                                    return 7
                                }
                            }).a
                        })),
                        P = Object.getOwnPropertyDescriptor,
                        L = {
                            f: u ? P : function(e, t) {
                                if (e = h(e), t = m(t, !0), w) try {
                                    return P(e, t)
                                } catch (n) {}
                                if (O(e, t)) return d(!f.f.call(e, t), e[t])
                            }
                        },
                        k = function(e) {
                            if (!b(e)) throw TypeError(String(e) + " is not an object");
                            return e
                        },
                        S = Object.defineProperty,
                        M = {
                            f: u ? S : function(e, t, n) {
                                if (k(e), t = m(t, !0), k(n), w) try {
                                    return S(e, t, n)
                                } catch (r) {}
                                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                                return "value" in n && (e[t] = n.value), e
                            }
                        },
                        E = u ? function(e, t, n) {
                            return M.f(e, t, d(1, n))
                        } : function(e, t, n) {
                            return e[t] = n, e
                        },
                        x = function(e, t) {
                            try {
                                E(a, e, t)
                            } catch (n) {
                                a[e] = t
                            }
                            return t
                        },
                        I = a["__core-js_shared__"] || x("__core-js_shared__", {}),
                        N = Function.toString;
                    "function" != typeof I.inspectSource && (I.inspectSource = function(e) {
                        return N.call(e)
                    });
                    var T, R, D, A = I.inspectSource,
                        B = a.WeakMap,
                        V = "function" === typeof B && /native code/.test(A(B)),
                        H = r((function(e) {
                            (e.exports = function(e, t) {
                                return I[e] || (I[e] = void 0 !== t ? t : {})
                            })("versions", []).push({
                                version: "3.6.5",
                                mode: "global",
                                copyright: "\xa9 2020 Denis Pushkarev (zloirock.ru)"
                            })
                        })),
                        Z = 0,
                        W = Math.random(),
                        G = function(e) {
                            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++Z + W).toString(36)
                        },
                        U = H("keys"),
                        F = function(e) {
                            return U[e] || (U[e] = G(e))
                        },
                        z = {},
                        q = a.WeakMap;
                    if (V) {
                        var K = new q,
                            Y = K.get,
                            X = K.has,
                            Q = K.set;
                        T = function(e, t) {
                            return Q.call(K, e, t), t
                        }, R = function(e) {
                            return Y.call(K, e) || {}
                        }, D = function(e) {
                            return X.call(K, e)
                        }
                    } else {
                        var J = F("state");
                        z[J] = !0, T = function(e, t) {
                            return E(e, J, t), t
                        }, R = function(e) {
                            return O(e, J) ? e[J] : {}
                        }, D = function(e) {
                            return O(e, J)
                        }
                    }
                    var $ = {
                            set: T,
                            get: R,
                            has: D,
                            enforce: function(e) {
                                return D(e) ? R(e) : T(e, {})
                            },
                            getterFor: function(e) {
                                return function(t) {
                                    var n;
                                    if (!b(t) || (n = R(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                                    return n
                                }
                            }
                        },
                        ee = r((function(e) {
                            var t = $.get,
                                n = $.enforce,
                                r = String(String).split("String");
                            (e.exports = function(e, t, o, i) {
                                var c = !!i && !!i.unsafe,
                                    u = !!i && !!i.enumerable,
                                    l = !!i && !!i.noTargetGet;
                                "function" == typeof o && ("string" != typeof t || O(o, "name") || E(o, "name", t), n(o).source = r.join("string" == typeof t ? t : "")), e !== a ? (c ? !l && e[t] && (u = !0) : delete e[t], u ? e[t] = o : E(e, t, o)) : u ? e[t] = o : x(t, o)
                            })(Function.prototype, "toString", (function() {
                                return "function" == typeof this && t(this).source || A(this)
                            }))
                        })),
                        te = a,
                        ne = function(e) {
                            return "function" == typeof e ? e : void 0
                        },
                        re = function(e, t) {
                            return arguments.length < 2 ? ne(te[e]) || ne(a[e]) : te[e] && te[e][t] || a[e] && a[e][t]
                        },
                        oe = Math.ceil,
                        ae = Math.floor,
                        ie = function(e) {
                            return isNaN(e = +e) ? 0 : (e > 0 ? ae : oe)(e)
                        },
                        ce = Math.min,
                        ue = Math.max,
                        le = Math.min,
                        se = function(e) {
                            return function(t, n, r) {
                                var o, a, i = h(t),
                                    c = (o = i.length) > 0 ? ce(ie(o), 9007199254740991) : 0,
                                    u = function(e, t) {
                                        var n = ie(e);
                                        return n < 0 ? ue(n + t, 0) : le(n, t)
                                    }(r, c);
                                if (e && n != n) {
                                    for (; c > u;)
                                        if ((a = i[u++]) != a) return !0
                                } else
                                    for (; c > u; u++)
                                        if ((e || u in i) && i[u] === n) return e || u || 0;
                                return !e && -1
                            }
                        },
                        fe = {
                            includes: se(!0),
                            indexOf: se(!1)
                        },
                        de = fe.indexOf,
                        pe = function(e, t) {
                            var n, r = h(e),
                                o = 0,
                                a = [];
                            for (n in r) !O(z, n) && O(r, n) && a.push(n);
                            for (; t.length > o;) O(r, n = t[o++]) && (~de(a, n) || a.push(n));
                            return a
                        },
                        ye = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                        ve = ye.concat("length", "prototype"),
                        he = {
                            f: Object.getOwnPropertyNames || function(e) {
                                return pe(e, ve)
                            }
                        },
                        be = {
                            f: Object.getOwnPropertySymbols
                        },
                        me = re("Reflect", "ownKeys") || function(e) {
                            var t = he.f(k(e)),
                                n = be.f;
                            return n ? t.concat(n(e)) : t
                        },
                        ge = function(e, t) {
                            for (var n = me(t), r = M.f, o = L.f, a = 0; a < n.length; a++) {
                                var i = n[a];
                                O(e, i) || r(e, i, o(t, i))
                            }
                        },
                        Oe = /#|\.prototype\./,
                        _e = function(e, t) {
                            var n = Ce[je(e)];
                            return n == Pe || n != we && ("function" == typeof t ? i(t) : !!t)
                        },
                        je = _e.normalize = function(e) {
                            return String(e).replace(Oe, ".").toLowerCase()
                        },
                        Ce = _e.data = {},
                        we = _e.NATIVE = "N",
                        Pe = _e.POLYFILL = "P",
                        Le = _e,
                        ke = L.f,
                        Se = function(e, t) {
                            var n, r, o, i, c, u = e.target,
                                l = e.global,
                                s = e.stat;
                            if (n = l ? a : s ? a[u] || x(u, {}) : (a[u] || {}).prototype)
                                for (r in t) {
                                    if (i = t[r], o = e.noTargetGet ? (c = ke(n, r)) && c.value : n[r], !Le(l ? r : u + (s ? "." : "#") + r, e.forced) && void 0 !== o) {
                                        if (typeof i === typeof o) continue;
                                        ge(i, o)
                                    }(e.sham || o && o.sham) && E(i, "sham", !0), ee(n, r, i, e)
                                }
                        },
                        Me = Object.keys || function(e) {
                            return pe(e, ye)
                        },
                        Ee = f.f,
                        xe = function(e) {
                            return function(t) {
                                for (var n, r = h(t), o = Me(r), a = o.length, i = 0, c = []; a > i;) n = o[i++], u && !Ee.call(r, n) || c.push(e ? [n, r[n]] : r[n]);
                                return c
                            }
                        },
                        Ie = {
                            entries: xe(!0),
                            values: xe(!1)
                        }.values;
                    Se({
                        target: "Object",
                        stat: !0
                    }, {
                        values: function(e) {
                            return Ie(e)
                        }
                    });
                    te.Object.values;
                    var Ne, Te = !!Object.getOwnPropertySymbols && !i((function() {
                            return !String(Symbol())
                        })),
                        Re = Te && !Symbol.sham && "symbol" == typeof Symbol.iterator,
                        De = H("wks"),
                        Ae = a.Symbol,
                        Be = Re ? Ae : Ae && Ae.withoutSetter || G,
                        Ve = u ? Object.defineProperties : function(e, t) {
                            k(e);
                            for (var n, r = Me(t), o = r.length, a = 0; o > a;) M.f(e, n = r[a++], t[n]);
                            return e
                        },
                        He = re("document", "documentElement"),
                        Ze = F("IE_PROTO"),
                        We = function() {},
                        Ge = function(e) {
                            return "<script>" + e + "<\/script>"
                        },
                        Ue = function() {
                            try {
                                Ne = document.domain && new ActiveXObject("htmlfile")
                            } catch (t) {}
                            Ue = Ne ? function(e) {
                                e.write(Ge("")), e.close();
                                var t = e.parentWindow.Object;
                                return e = null, t
                            }(Ne) : function() {
                                var e, t = C("iframe");
                                return t.style.display = "none", He.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(Ge("document.F=Object")), e.close(), e.F
                            }();
                            for (var e = ye.length; e--;) delete Ue.prototype[ye[e]];
                            return Ue()
                        };
                    z[Ze] = !0;
                    var Fe, ze = Object.create || function(e, t) {
                            var n;
                            return null !== e ? (We.prototype = k(e), n = new We, We.prototype = null, n[Ze] = e) : n = Ue(), void 0 === t ? n : Ve(n, t)
                        },
                        qe = (O(De, Fe = "unscopables") || (Te && O(Ae, Fe) ? De[Fe] = Ae[Fe] : De[Fe] = Be("Symbol." + Fe)), De[Fe]),
                        Ke = Array.prototype;
                    void 0 == Ke[qe] && M.f(Ke, qe, {
                        configurable: !0,
                        value: ze(null)
                    });
                    var Ye, Xe = Object.defineProperty,
                        Qe = {},
                        Je = function(e) {
                            throw e
                        },
                        $e = fe.includes;
                    Se({
                        target: "Array",
                        proto: !0,
                        forced: ! function(e, t) {
                            if (O(Qe, e)) return Qe[e];
                            t || (t = {});
                            var n = [][e],
                                r = !!O(t, "ACCESSORS") && t.ACCESSORS,
                                o = O(t, 0) ? t[0] : Je,
                                a = O(t, 1) ? t[1] : void 0;
                            return Qe[e] = !!n && !i((function() {
                                if (r && !u) return !0;
                                var e = {
                                    length: -1
                                };
                                r ? Xe(e, 1, {
                                    enumerable: !0,
                                    get: Je
                                }) : e[1] = 1, n.call(e, o, a)
                            }))
                        }("indexOf", {
                            ACCESSORS: !0,
                            1: 0
                        })
                    }, {
                        includes: function(e) {
                            return $e(this, e, arguments.length > 1 ? arguments[1] : void 0)
                        }
                    }), Ye = "includes", Ke[qe][Ye] = !0;
                    var et, tt, nt, rt = function(e, t, n) {
                            if (function(e) {
                                    if ("function" != typeof e) throw TypeError(String(e) + " is not a function")
                                }(e), void 0 === t) return e;
                            switch (n) {
                                case 0:
                                    return function() {
                                        return e.call(t)
                                    };
                                case 1:
                                    return function(n) {
                                        return e.call(t, n)
                                    };
                                case 2:
                                    return function(n, r) {
                                        return e.call(t, n, r)
                                    };
                                case 3:
                                    return function(n, r, o) {
                                        return e.call(t, n, r, o)
                                    }
                            }
                            return function() {
                                return e.apply(t, arguments)
                            }
                        },
                        ot = Function.call;
                    et = "includes", rt(ot, a["Array"].prototype[et], tt);
                    ! function(e) {
                        e.DOCUMENT = "document", e.PARAGRAPH = "paragraph", e.HEADING_1 = "heading-1", e.HEADING_2 = "heading-2", e.HEADING_3 = "heading-3", e.HEADING_4 = "heading-4", e.HEADING_5 = "heading-5", e.HEADING_6 = "heading-6", e.OL_LIST = "ordered-list", e.UL_LIST = "unordered-list", e.LIST_ITEM = "list-item", e.HR = "hr", e.QUOTE = "blockquote", e.EMBEDDED_ENTRY = "embedded-entry-block", e.EMBEDDED_ASSET = "embedded-asset-block"
                    }(nt || (nt = {}));
                    var at, it = nt;
                    ! function(e) {
                        e.HYPERLINK = "hyperlink", e.ENTRY_HYPERLINK = "entry-hyperlink", e.ASSET_HYPERLINK = "asset-hyperlink", e.EMBEDDED_ENTRY = "embedded-entry-inline"
                    }(at || (at = {}));
                    var ct, ut = at,
                        lt = [it.PARAGRAPH, it.HEADING_1, it.HEADING_2, it.HEADING_3, it.HEADING_4, it.HEADING_5, it.HEADING_6, it.OL_LIST, it.UL_LIST, it.HR, it.QUOTE, it.EMBEDDED_ENTRY, it.EMBEDDED_ASSET],
                        st = [it.HR, it.EMBEDDED_ENTRY, it.EMBEDDED_ASSET],
                        ft = ((ct = {})[it.OL_LIST] = [it.LIST_ITEM], ct[it.UL_LIST] = [it.LIST_ITEM], ct[it.LIST_ITEM] = lt.slice(), ct[it.QUOTE] = [it.PARAGRAPH], ct),
                        dt = {
                            nodeType: it.DOCUMENT,
                            data: {},
                            content: [{
                                nodeType: it.PARAGRAPH,
                                data: {},
                                content: [{
                                    nodeType: "text",
                                    value: "",
                                    marks: [],
                                    data: {}
                                }]
                            }]
                        };
                    var pt = Object.freeze({
                        isInline: function(e) {
                            return Object.values(ut).includes(e.nodeType)
                        },
                        isBlock: function(e) {
                            return Object.values(it).includes(e.nodeType)
                        },
                        isText: function(e) {
                            return "text" === e.nodeType
                        }
                    });
                    t.BLOCKS = it, t.CONTAINERS = ft, t.EMPTY_DOCUMENT = dt, t.INLINES = ut, t.MARKS = {
                        BOLD: "bold",
                        ITALIC: "italic",
                        UNDERLINE: "underline",
                        CODE: "code"
                    }, t.TOP_LEVEL_BLOCKS = lt, t.VOID_BLOCKS = st, t.helpers = pt
                }));
                (u = l) && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") && u.default;
                var s, f, d = l.BLOCKS,
                    p = (l.CONTAINERS, l.EMPTY_DOCUMENT, l.INLINES),
                    y = l.MARKS,
                    v = (l.TOP_LEVEL_BLOCKS, l.VOID_BLOCKS, l.helpers);

                function h(e, t) {
                    return e.map((function(e, n) {
                        return r = b(e, t), a = n, o.isValidElement(r) && null === r.key ? o.cloneElement(r, {
                            key: a
                        }) : r;
                        var r, a
                    }))
                }

                function b(e, t) {
                    var n = t.renderNode,
                        r = t.renderMark,
                        o = t.renderText;
                    if (v.isText(e)) return e.marks.reduce((function(e, t) {
                        return r[t.type] ? r[t.type](e) : e
                    }), o ? o(e.value) : e.value);
                    var i = h(e.content, t);
                    return e.nodeType && n[e.nodeType] ? n[e.nodeType](e, i) : a.createElement(a.Fragment, null, i)
                }
                var m = ((s = {})[d.DOCUMENT] = function(e, t) {
                        return t
                    }, s[d.PARAGRAPH] = function(e, t) {
                        return a.createElement("p", null, t)
                    }, s[d.HEADING_1] = function(e, t) {
                        return a.createElement("h1", null, t)
                    }, s[d.HEADING_2] = function(e, t) {
                        return a.createElement("h2", null, t)
                    }, s[d.HEADING_3] = function(e, t) {
                        return a.createElement("h3", null, t)
                    }, s[d.HEADING_4] = function(e, t) {
                        return a.createElement("h4", null, t)
                    }, s[d.HEADING_5] = function(e, t) {
                        return a.createElement("h5", null, t)
                    }, s[d.HEADING_6] = function(e, t) {
                        return a.createElement("h6", null, t)
                    }, s[d.EMBEDDED_ENTRY] = function(e, t) {
                        return a.createElement("div", null, t)
                    }, s[d.UL_LIST] = function(e, t) {
                        return a.createElement("ul", null, t)
                    }, s[d.OL_LIST] = function(e, t) {
                        return a.createElement("ol", null, t)
                    }, s[d.LIST_ITEM] = function(e, t) {
                        return a.createElement("li", null, t)
                    }, s[d.QUOTE] = function(e, t) {
                        return a.createElement("blockquote", null, t)
                    }, s[d.HR] = function() {
                        return a.createElement("hr", null)
                    }, s[p.ASSET_HYPERLINK] = function(e) {
                        return O(p.ASSET_HYPERLINK, e)
                    }, s[p.ENTRY_HYPERLINK] = function(e) {
                        return O(p.ENTRY_HYPERLINK, e)
                    }, s[p.EMBEDDED_ENTRY] = function(e) {
                        return O(p.EMBEDDED_ENTRY, e)
                    }, s[p.HYPERLINK] = function(e, t) {
                        return a.createElement("a", {
                            href: e.data.uri
                        }, t)
                    }, s),
                    g = ((f = {})[y.BOLD] = function(e) {
                        return a.createElement("b", null, e)
                    }, f[y.ITALIC] = function(e) {
                        return a.createElement("i", null, e)
                    }, f[y.UNDERLINE] = function(e) {
                        return a.createElement("u", null, e)
                    }, f[y.CODE] = function(e) {
                        return a.createElement("code", null, e)
                    }, f);

                function O(e, t) {
                    return a.createElement("span", {
                        key: t.data.target.sys.id
                    }, "type: ", t.nodeType, " id: ", t.data.target.sys.id)
                }
                t.documentToReactComponents = function(e, t) {
                    return void 0 === t && (t = {}), e ? b(e, {
                        renderNode: i({}, m, t.renderNode),
                        renderMark: i({}, g, t.renderMark),
                        renderText: t.renderText
                    }) : null
                }
            }).call(this, n("yLpj"))
        },
        Rom6: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== c(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = n("tbWI"),
                a = n("mzdp");

            function i() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function c(e) {
                return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        g(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (u) {
                        o = !0, a = u
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function y(e, t) {
                return (y = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function v(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = m(e);
                    if (t) {
                        var o = m(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }

            function h(e, t) {
                return !t || "object" !== c(t) && "function" !== typeof t ? b(e) : t
            }

            function b(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function m(e) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function g(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var O = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && y(e, t)
                }(u, e);
                var t, n, i, c = v(u);

                function u() {
                    var e;
                    d(this, u);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return g(b(e = c.call.apply(c, [this].concat(n))), "callPlayer", o.callPlayer), g(b(e), "onDurationChange", (function() {
                        var t = e.getDuration();
                        e.props.onDuration(t)
                    })), g(b(e), "mute", (function() {
                        e.callPlayer("setMuted", !0)
                    })), g(b(e), "unmute", (function() {
                        e.callPlayer("setMuted", !1)
                    })), g(b(e), "ref", (function(t) {
                        e.container = t
                    })), e
                }
                return t = u, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        var t = this,
                            n = this.props,
                            r = n.controls,
                            i = n.config,
                            c = n.onError,
                            u = n.playing,
                            f = s(e.match(a.MATCH_URL_DAILYMOTION), 2)[1];
                        this.player ? this.player.load(f, {
                            start: (0, o.parseStartTime)(e),
                            autoplay: u
                        }) : (0, o.getSDK)("https://api.dmcdn.net/all.js", "DM", "dmAsyncInit", (function(e) {
                            return e.player
                        })).then((function(n) {
                            if (t.container) {
                                var a = n.player;
                                t.player = new a(t.container, {
                                    width: "100%",
                                    height: "100%",
                                    video: f,
                                    params: l({
                                        controls: r,
                                        autoplay: t.props.playing,
                                        mute: t.props.muted,
                                        start: (0, o.parseStartTime)(e),
                                        origin: window.location.origin
                                    }, i.params),
                                    events: {
                                        apiready: t.props.onReady,
                                        seeked: function() {
                                            return t.props.onSeek(t.player.currentTime)
                                        },
                                        video_end: t.props.onEnded,
                                        durationchange: t.onDurationChange,
                                        pause: t.props.onPause,
                                        playing: t.props.onPlay,
                                        waiting: t.props.onBuffer,
                                        error: function(e) {
                                            return c(e)
                                        }
                                    }
                                })
                            }
                        }), c)
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop",
                    value: function() {}
                }, {
                    key: "seekTo",
                    value: function(e) {
                        this.callPlayer("seek", e)
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.callPlayer("setVolume", e)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.player.duration || null
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.player.currentTime
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return this.player.bufferedTime
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                            width: "100%",
                            height: "100%",
                            display: this.props.display
                        };
                        return r.default.createElement("div", {
                            style: e
                        }, r.default.createElement("div", {
                            ref: this.ref
                        }))
                    }
                }]) && p(t.prototype, n), i && p(t, i), u
            }(r.Component);
            t.default = O, g(O, "displayName", "DailyMotion"), g(O, "canPlay", a.canPlay.dailymotion), g(O, "loopOnEnded", !0)
        },
        S930: function(e, t, n) {
            e.exports = {
                title: "BlockGoreTextSlides_title__1z7HH",
                slides: "BlockGoreTextSlides_slides__2INzS"
            }
        },
        SrqT: function(e, t, n) {
            e.exports = {
                container: "VideoPlayer_container__1rEUL",
                cover: "VideoPlayer_cover__22YJv",
                hasLoadingState: "VideoPlayer_hasLoadingState__3yhPB",
                pulse: "VideoPlayer_pulse__3gCzp",
                videoWrapper: "VideoPlayer_videoWrapper__3Xohu",
                src: "VideoPlayer_src__3ScgN",
                controlsOuter: "VideoPlayer_controlsOuter__1EYr-",
                controls: "VideoPlayer_controls__2e5cQ",
                visible: "VideoPlayer_visible__2zjLE",
                toggle: "VideoPlayer_toggle__3RuZM",
                indicator: "VideoPlayer_indicator__3frWS",
                mute: "VideoPlayer_mute__KoNsE",
                playSvg: "VideoPlayer_playSvg__IunjS",
                pauseSvg: "VideoPlayer_pauseSvg__1aAtO",
                status: "VideoPlayer_status__3TKjr",
                statusBackground: "VideoPlayer_statusBackground__3Qfm8",
                statusDragger: "VideoPlayer_statusDragger__3TPs0",
                time: "VideoPlayer_time__dIwSy",
                muteSvg: "VideoPlayer_muteSvg__3oJgw"
            }
        },
        Td48: function(e, t, n) {
            e.exports = {
                container: "ArrowDown_container__3CBes"
            }
        },
        TpTL: function(e, t, n) {
            "use strict";
            var r, o = n("wx14"),
                a = n("rePB"),
                i = n("ODXe"),
                c = n("Ff2n"),
                u = n("q1tI"),
                l = n.n(u),
                s = n("ob4f"),
                f = n("wNob"),
                d = n("3bd0"),
                p = n("9e+4"),
                y = n.n(p),
                v = n("/MKj"),
                h = function(e) {
                    return {
                        getNavOpen: function() {
                            return e.appReducer.navOpen
                        }
                    }
                },
                b = {},
                m = function(e) {
                    return Object(v.b)(h, b)(e)
                },
                g = n("bdgK"),
                O = new Map,
                _ = new g.a((function(e) {
                    clearTimeout(r), r = setTimeout((function() {
                        e.forEach((function(e) {
                            var t = O.get(e.target);
                            "function" === typeof t && t(e)
                        }))
                    }), 500)
                })),
                j = function(e) {
                    var t = Object(u.useRef)(null),
                        n = Object(u.useCallback)((function() {
                            null !== t.current && (_.unobserve(t.current), O.delete(t.current))
                        }), []),
                        r = Object(u.useCallback)((function(r) {
                            null === r ? null !== t.current && O.delete(t.current) : (r !== t.current && (n(), t.current = r, _.observe(t.current)), O.set(t.current, e))
                        }), [e, n]);
                    return Object(u.useEffect)((function() {
                        return n
                    }), [n]), r
                },
                C = n("y94e"),
                w = l.a.createElement;

            function P(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var L = function(e) {
                var t, n, r = e.className,
                    l = e.outerClassName,
                    p = e.asset,
                    v = e.ratio,
                    h = e.widths,
                    b = e.useRatio,
                    m = e.containImg,
                    g = e.getNavOpen,
                    O = e.preventZoom,
                    _ = e.forceLoad,
                    L = void 0 !== _ && _,
                    k = e.placeholder,
                    S = void 0 === k ? null : k,
                    M = e.hasLoadingState,
                    E = void 0 === M || M,
                    x = Object(c.a)(e, ["className", "outerClassName", "asset", "ratio", "widths", "useRatio", "containImg", "getNavOpen", "preventZoom", "forceLoad", "placeholder", "hasLoadingState"]),
                    I = Object(u.useState)(""),
                    N = I[0],
                    T = I[1],
                    R = Object(u.useState)(!1),
                    D = R[0],
                    A = R[1],
                    B = Object(s.a)({
                        triggerOnce: !0,
                        rootMargin: "1500px"
                    }),
                    V = Object(i.a)(B, 2),
                    H = V[0],
                    Z = V[1],
                    W = Object(s.a)(),
                    G = Object(i.a)(W, 2),
                    U = G[0],
                    F = G[1],
                    z = Object(C.a)(Z),
                    q = Object(C.a)(L),
                    K = Object(u.useRef)(""),
                    Y = Object(u.useRef)(),
                    X = g(),
                    Q = Object(d.g)(p),
                    J = Q.fields,
                    $ = Q.focus,
                    ee = J.description,
                    te = void 0 === ee ? "" : ee,
                    ne = J.title,
                    re = void 0 === ne ? "" : ne,
                    oe = J.file,
                    ae = void 0 === oe ? {} : oe,
                    ie = ae.contentType,
                    ce = (null === ae || void 0 === ae ? void 0 : ae.url) || "",
                    ue = Object(C.a)(ce),
                    le = te || re || "",
                    se = Object(u.useMemo)((function() {
                        var e = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? P(Object(n), !0).forEach((function(t) {
                                    Object(a.a)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, x.style) || {};
                        if ($ && !m) {
                            var t, n = (null === ae || void 0 === ae || null === (t = ae.details) || void 0 === t ? void 0 : t.image) || {},
                                r = n.width,
                                o = void 0 === r ? 0 : r,
                                i = n.height,
                                c = void 0 === i ? 0 : i,
                                u = Object(d.d)(o, $.x),
                                l = Object(d.d)(c, $.y);
                            e.objectPosition = "".concat(u, "% ").concat(l, "%")
                        }
                        return e
                    }), [m, null === ae || void 0 === ae || null === (t = ae.details) || void 0 === t ? void 0 : t.image, $, x.style]),
                    fe = Object(u.useMemo)((function() {
                        var e, t = (null === ae || void 0 === ae || null === (e = ae.details) || void 0 === e ? void 0 : e.image) || {},
                            n = t.width,
                            r = void 0 === n ? 0 : n,
                            o = t.height;
                        return [r, void 0 === o ? 0 : o]
                    }), [null === ae || void 0 === ae || null === (n = ae.details) || void 0 === n ? void 0 : n.image]),
                    de = fe[0],
                    pe = fe[1],
                    ye = Object(u.useRef)(!1);
                Object(u.useEffect)((function() {
                    return function() {
                        return ye.current = !1
                    }
                }), []);
                var ve = Object(u.useCallback)((function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if ((t || "" !== N) && ce) {
                            var n = Object(d.e)({
                                    asset: p,
                                    el: Y.current,
                                    sizes: h,
                                    focus: $,
                                    useRatio: b && !v
                                }),
                                r = Object(i.a)(n, 2),
                                o = r[0],
                                a = r[1];
                            if (0 !== o) {
                                var c = Object(d.f)(ie),
                                    u = Object(d.b)(ce, o, c, a);
                                K.current !== u && (K.current = u, ye.current = !0, Object(d.a)(u, (function(e) {
                                    ye.current && (T(e), ye.current = !1)
                                })))
                            }
                        }
                    }), [ce, T, N, p, $, v, ie, b, h]),
                    he = j(ve),
                    be = Object(u.useCallback)((function(e) {
                        Y.current = e, he(e), U(e)
                    }), [he, U]);
                Object(u.useEffect)((function() {
                    ce !== ue && ve(!1, !1)
                }), [ce, ue, ve]), Object(u.useEffect)((function() {
                    (Z && !z || L && !q) && ve(!1, !0)
                }), [Z, z, L, q, ve]);
                var me = E && !D && Z;
                return w("picture", {
                    className: Object(f.a)(y.a.container, b && y.a.ratio, me && y.a.hasLoadingState, l),
                    style: b ? {
                        paddingBottom: "".concat(v || Object(d.h)(J), "%")
                    } : null,
                    ref: be
                }, w("img", Object(o.a)({
                    className: Object(f.a)(r, y.a.imgEl, D && y.a.visible, m && y.a.contain, O && y.a.noZoom, !O && F && X && y.a.zoomOut),
                    width: de,
                    height: pe,
                    src: N || S || null,
                    ref: H,
                    alt: le
                }, x, {
                    onLoad: function(e) {
                        A(!0), x.onLoad && x.onLoad(e)
                    },
                    style: se
                })))
            };
            L.defaultProps = {
                asset: "",
                useRatio: !0,
                containImg: !1,
                widths: [256, 384, 512, 768, 1024, 1280, 1536, 1920, 2080, 2560]
            };
            t.a = m(L)
        },
        UDXs: function(e, t, n) {
            "use strict";
            t.a = function(e, t) {
                var n = (null === e || void 0 === e ? void 0 : e.fields) || {},
                    r = n.product,
                    o = n.womensProduct;
                return "Women" === t && o ? o : r
            }
        },
        Vk1G: function(e, t, n) {
            e.exports = {
                container: "TextType_container__3W5li",
                visible: "TextType_visible__1rHJG",
                letter: "TextType_letter__32xrN",
                word: "TextType_word__2DDtW"
            }
        },
        "W4/P": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== c(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = n("tbWI"),
                a = n("mzdp");

            function i() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function c(e) {
                return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        b(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }

            function y(e, t) {
                return !t || "object" !== c(t) && "function" !== typeof t ? v(e) : t
            }

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(u, e);
                var t, n, i, c = p(u);

                function u() {
                    var e;
                    s(this, u);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return b(v(e = c.call.apply(c, [this].concat(n))), "callPlayer", o.callPlayer), b(v(e), "playerID", e.props.config.playerId || "".concat("wistia-player-").concat((0, o.randomString)())), b(v(e), "onPlay", (function() {
                        var t;
                        return (t = e.props).onPlay.apply(t, arguments)
                    })), b(v(e), "onPause", (function() {
                        var t;
                        return (t = e.props).onPause.apply(t, arguments)
                    })), b(v(e), "onSeek", (function() {
                        var t;
                        return (t = e.props).onSeek.apply(t, arguments)
                    })), b(v(e), "onEnded", (function() {
                        var t;
                        return (t = e.props).onEnded.apply(t, arguments)
                    })), b(v(e), "mute", (function() {
                        e.callPlayer("mute")
                    })), b(v(e), "unmute", (function() {
                        e.callPlayer("unmute")
                    })), e
                }
                return t = u, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        var t = this,
                            n = this.props,
                            r = n.playing,
                            a = n.muted,
                            i = n.controls,
                            c = n.onReady,
                            u = n.config,
                            s = n.onError;
                        (0, o.getSDK)("https://fast.wistia.com/assets/external/E-v1.js", "Wistia").then((function() {
                            window._wq = window._wq || [], window._wq.push({
                                id: t.playerID,
                                options: l({
                                    autoPlay: r,
                                    silentAutoPlay: "allow",
                                    muted: a,
                                    controlsVisibleOnLoad: i,
                                    fullscreenButton: i,
                                    playbar: i,
                                    playbackRateControl: i,
                                    qualityControl: i,
                                    volumeControl: i,
                                    settingsControl: i,
                                    smallPlayButton: i
                                }, u.options),
                                onReady: function(e) {
                                    t.player = e, t.unbind(), t.player.bind("play", t.onPlay), t.player.bind("pause", t.onPause), t.player.bind("seek", t.onSeek), t.player.bind("end", t.onEnded), c()
                                }
                            })
                        }), s)
                    }
                }, {
                    key: "unbind",
                    value: function() {
                        this.player.unbind("play", this.onPlay), this.player.unbind("pause", this.onPause), this.player.unbind("seek", this.onSeek), this.player.unbind("end", this.onEnded)
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.unbind(), this.callPlayer("remove")
                    }
                }, {
                    key: "seekTo",
                    value: function(e) {
                        this.callPlayer("time", e)
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.callPlayer("volume", e)
                    }
                }, {
                    key: "setPlaybackRate",
                    value: function(e) {
                        this.callPlayer("playbackRate", e)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.callPlayer("duration")
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.callPlayer("time")
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return null
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.url,
                            t = e && e.match(a.MATCH_URL_WISTIA)[1],
                            n = "wistia_embed wistia_async_".concat(t);
                        return r.default.createElement("div", {
                            id: this.playerID,
                            key: t,
                            className: n,
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        })
                    }
                }]) && f(t.prototype, n), i && f(t, i), u
            }(r.Component);
            t.default = m, b(m, "displayName", "Wistia"), b(m, "canPlay", a.canPlay.wistia), b(m, "loopOnEnded", !0)
        },
        Wwog: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
            n.r(t), t.default = function(e, t) {
                var n;
                void 0 === t && (t = r);
                var o, a = [],
                    i = !1;
                return function() {
                    for (var r = [], c = 0; c < arguments.length; c++) r[c] = arguments[c];
                    return i && n === this && t(r, a) || (o = e.apply(this, r), i = !0, n = this, a = r), o
                }
            }
        },
        Wx3s: function(e, t, n) {
            e.exports = {
                outer: "SoundPlayer_outer__3VoSI",
                inner: "SoundPlayer_inner__1ardJ",
                imageContainer: "SoundPlayer_imageContainer__QTo6q",
                image: "SoundPlayer_image__11GOF",
                heartBeat: "SoundPlayer_heartBeat__3AdmI",
                copy: "SoundPlayer_copy__3OCML",
                title: "SoundPlayer_title__3Gk3p",
                subtitle: "SoundPlayer_subtitle__1EVce",
                description: "SoundPlayer_description__1KF16",
                audioControl: "SoundPlayer_audioControl__HFF6o",
                audioControlIcons: "SoundPlayer_audioControlIcons__2F1h9",
                audioControlIcon: "SoundPlayer_audioControlIcon__4cb7V",
                time: "SoundPlayer_time__2ZzTV",
                grabButton: "SoundPlayer_grabButton__2uL62"
            }
        },
        XQF6: function(e, t, n) {
            e.exports = {
                container: "QuestionMark_container__3cLbw"
            }
        },
        Xuae: function(e, t, n) {
            "use strict";
            var r = n("mPvQ"),
                o = n("/GRZ"),
                a = n("i2R6"),
                i = (n("qXWd"), n("48fX")),
                c = n("tCBg"),
                u = n("T0f4");

            function l(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = u(e);
                    if (t) {
                        var o = u(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            t.__esModule = !0, t.default = void 0;
            var s = n("q1tI"),
                f = function(e) {
                    i(n, e);
                    var t = l(n);

                    function n(e) {
                        var a;
                        return o(this, n), (a = t.call(this, e))._hasHeadManager = void 0, a.emitChange = function() {
                            a._hasHeadManager && a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances), a.props))
                        }, a._hasHeadManager = a.props.headManager && a.props.headManager.mountedInstances, a
                    }
                    return a(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.emitChange()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), n
                }(s.Component);
            t.default = f
        },
        YVhj: function(e, t, n) {
            "use strict";
            var r = n("wx14"),
                o = n("q1tI"),
                a = n.n(o),
                i = n("3bd0"),
                c = n("2D6l"),
                u = n("wNob"),
                l = n("xp16"),
                s = n("zLfV"),
                f = function(e) {
                    return function(t) {
                        e.forEach((function(e) {
                            "function" === typeof e ? e(t) : "object" === typeof e && null !== e && (e.current = t)
                        }))
                    }
                },
                d = n("TpTL"),
                p = n("9WRR"),
                y = n("o0o1"),
                v = n.n(y),
                h = n("rePB"),
                b = n("ODXe"),
                m = n("HaE+"),
                g = n("nOHt"),
                O = n("UDXs"),
                _ = n("2fO7"),
                j = n("YxYj"),
                C = n("wpIr"),
                w = n("ECgy"),
                P = n.n(w),
                L = n("/MKj"),
                k = n("ZpDd"),
                S = function(e) {
                    return {
                        getActiveGender: function() {
                            return e.appReducer.activeGender
                        }
                    }
                },
                M = {
                    setActiveGender: k.c
                },
                E = function(e) {
                    return Object(L.b)(S, M)(e)
                },
                x = a.a.createElement;

            function I(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function N(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(n), !0).forEach((function(t) {
                        Object(h.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var T = E((function(e) {
                    var t = e.sys,
                        n = e.hidden,
                        r = e.renderDot,
                        a = e.leftSide,
                        i = e.x,
                        c = e.y,
                        u = e.getActiveGender,
                        l = (Object(g.useRouter)().query || {}).locale,
                        s = null === t || void 0 === t ? void 0 : t.id,
                        f = u(),
                        d = Object(o.useState)({}),
                        p = d[0],
                        y = d[1],
                        h = Object(O.a)(p, f);
                    return Object(o.useEffect)((function() {
                        (function() {
                            var e = Object(m.a)(v.a.mark((function e() {
                                var t, n, r;
                                return v.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (s) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, Object(_.a)({
                                                content_type: "productSet",
                                                "sys.id": s,
                                                include: 3,
                                                locale: Object(j.a)({
                                                    locale: l
                                                })
                                            });
                                        case 4:
                                            t = e.sent, n = Object(b.a)(t.items, 1), r = n[0], y(N({}, r || {}));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), [s, l]), h ? x(C.a, {
                        className: P.a.tooltip,
                        hidden: n,
                        dot: r,
                        delayedInView: !0,
                        leftSide: a,
                        focusable: !0,
                        product: h,
                        style: {
                            top: "".concat(c, "%"),
                            left: "".concat(i, "%")
                        }
                    }) : null
                })),
                R = n("afiy"),
                D = a.a.createElement;

            function A(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(n), !0).forEach((function(t) {
                        Object(h.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var V = function(e) {
                    var t = e.sys,
                        n = e.x,
                        a = e.y,
                        i = (Object(g.useRouter)().query || {}).locale,
                        c = null === t || void 0 === t ? void 0 : t.id,
                        u = Object(o.useState)(),
                        l = u[0],
                        s = u[1];
                    return Object(o.useEffect)((function() {
                        (function() {
                            var e = Object(m.a)(v.a.mark((function e() {
                                var t, n, r;
                                return v.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (c) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, Object(_.a)({
                                                content_type: "audio",
                                                "sys.id": c,
                                                locale: Object(j.a)({
                                                    locale: i
                                                })
                                            });
                                        case 4:
                                            t = e.sent, n = Object(b.a)(t.items, 1), r = n[0], s(B({}, r || {}));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), [c, i]), l ? D(R.a, Object(r.a)({}, l, {
                        x: n,
                        y: a
                    })) : null
                },
                H = n("Konj"),
                Z = n.n(H),
                W = a.a.createElement,
                G = function(e, t) {
                    var n, y = e.asset,
                        v = e.productCardIndex,
                        h = void 0 === v ? null : v,
                        b = e.hideProducts,
                        m = e.showToolTips,
                        g = e.showAudio,
                        O = void 0 === g || g,
                        _ = e.extraToolTips,
                        j = void 0 === _ ? null : _,
                        C = e.tooltipProps,
                        w = void 0 === C ? {} : C,
                        P = e.className,
                        L = e.imageOuterClassName,
                        k = e.imageSrcClassName,
                        S = e.containImg,
                        M = e.useRatio,
                        E = e.ratio,
                        x = e.handleOnFocus,
                        I = e.preventZoom,
                        N = e.hasLoadingState,
                        R = e.opensOverlay,
                        D = e.getPopupIndex,
                        A = e.setOverlayOpen,
                        B = e.uid,
                        H = e.getScale,
                        G = e.forceLoad,
                        U = void 0 !== G && G,
                        F = e.soundPlayerParallax,
                        z = void 0 === F || F,
                        q = Object(o.useState)(!1),
                        K = q[0],
                        Y = q[1],
                        X = Object(s.a)(),
                        Q = Object(i.g)(y),
                        J = Q.fields,
                        $ = Q.focus,
                        ee = E || Object(i.h)(J),
                        te = J.file,
                        ne = void 0 === te ? {} : te,
                        re = (null === ne || void 0 === ne || null === (n = ne.details) || void 0 === n ? void 0 : n.image) || {},
                        oe = re.width,
                        ae = $ ? Object(i.d)(oe, $.x) : 50,
                        ie = ((null === y || void 0 === y ? void 0 : y.fields) || {}).linkedItems,
                        ce = void 0 === ie ? [] : ie,
                        ue = ce.filter((function(e) {
                            var t, n, r, o = e.item;
                            return "productSet" === (null === o || void 0 === o || null === (t = o.sys) || void 0 === t || null === (n = t.contentType) || void 0 === n || null === (r = n.sys) || void 0 === r ? void 0 : r.id)
                        })),
                        le = ce.filter((function(e) {
                            var t, n, r, o = e.item;
                            return "audio" === (null === o || void 0 === o || null === (t = o.sys) || void 0 === t || null === (n = t.contentType) || void 0 === n || null === (r = n.sys) || void 0 === r ? void 0 : r.id)
                        }));
                    Object(o.useEffect)((function() {
                        return Y(!0)
                    }), []);
                    var se = K && !!(ue.length > 0 && m || j),
                        fe = K && !(!(ue.length > 0) || m),
                        de = le && le.length > 0 && O,
                        pe = {};
                    "boolean" === typeof M && M && X && se && (pe = {
                        width: "".concat(Object(c.f)(100 / ee * 100), "vh"),
                        transform: "translate3d(-".concat(ae, "%, 0, 0)"),
                        left: "50%"
                    });
                    var ye = Object(o.useRef)(),
                        ve = y && D ? D(y.sys.id) : -1,
                        he = Object(o.useCallback)((function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (!(ve < 0)) {
                                var n = H && H() || 1;
                                A({
                                    id: "".concat(B, "__").concat(ve),
                                    sidebarOpen: t,
                                    coords: Object(l.c)(ye.current, n),
                                    scale: n
                                })
                            }
                        }), [ve, A, B, H]),
                        be = Object(o.useCallback)((function() {
                            return W(d.a, {
                                outerClassName: L,
                                className: k,
                                asset: y,
                                containImg: S,
                                ratio: E,
                                useRatio: M,
                                preventZoom: I,
                                forceLoad: U,
                                hasLoadingState: N
                            })
                        }), [M, L, k, y, S, E, I, U, N]);
                    return W(a.a.Fragment, null, R ? W("button", {
                        onFocus: x,
                        onClick: function(e) {
                            return he(e, !1)
                        },
                        className: Object(u.a)(P, Z.a.figure),
                        ref: f([ye, t])
                    }, be()) : W("div", {
                        className: Object(u.a)(P, Z.a.figure),
                        ref: f([ye, t])
                    }, be()), de && le.map((function(e) {
                        var t, n = e.item,
                            o = e.x,
                            a = e.y,
                            c = Object(i.c)({
                                x: o,
                                y: a
                            }, re),
                            u = c.x,
                            l = c.y;
                        return W(V, Object(r.a)({
                            key: null === n || void 0 === n || null === (t = n.sys) || void 0 === t ? void 0 : t.id,
                            x: "".concat(u, "%"),
                            y: "".concat(l, "%"),
                            parallax: z
                        }, n))
                    })), fe && W("button", {
                        onClick: function(e) {
                            return he(e, !0)
                        },
                        className: Z.a.productIndicator
                    }, W(p.a, {
                        className: Z.a.bagIcon
                    })), se && W("div", Object(r.a)({
                        className: Z.a.products
                    }, w, {
                        style: pe
                    }), se && ue.map((function(e, t) {
                        var n, o = e || {},
                            a = o.item,
                            c = o.renderDot,
                            u = o.x,
                            l = o.y;
                        if (!e) return null;
                        var s = Object(i.c)({
                                x: u,
                                y: l
                            }, re),
                            f = s.x,
                            d = s.y,
                            p = "number" === typeof h && h !== t;
                        return a && W(T, Object(r.a)({
                            hidden: p || b,
                            key: (null === a || void 0 === a || null === (n = a.sys) || void 0 === n ? void 0 : n.id) || t,
                            renderDot: c,
                            leftSide: !X && f < ae,
                            x: f,
                            y: d
                        }, a))
                    })), j))
                };
            t.a = Object(o.forwardRef)(G)
        },
        YpAL: function(e, t, n) {
            e.exports = {
                outer: "BlockSingleImage_outer__2zRlj",
                bordered: "BlockSingleImage_bordered__1jQRu",
                inner: "BlockSingleImage_inner__8jIHb",
                image: "BlockSingleImage_image__383bk",
                inView: "BlockSingleImage_inView__3_xjr"
            }
        },
        ZS8T: function(e, t, n) {
            e.exports = {
                container: "MountainRoute_container__2SsyX",
                inView: "MountainRoute_inView__1n3bQ",
                wrapper: "MountainRoute_wrapper__1mKiH",
                svg: "MountainRoute_svg__2STUY"
            }
        },
        Ztge: function(e, t, n) {
            e.exports = {
                slider: "BlockHorizontalSlider_slider__2TnCQ",
                hasText: "BlockHorizontalSlider_hasText__2le0R",
                imagesContainer: "BlockHorizontalSlider_imagesContainer__34hiB",
                imageWrapper: "BlockHorizontalSlider_imageWrapper__LCx0W",
                text: "BlockHorizontalSlider_text__1mUvU"
            }
        },
        a6RD: function(e, t, n) {
            "use strict";
            var r = n("oI91");

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        r(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.__esModule = !0, t.noSSR = u, t.default = function(e, t) {
                var n = i.default,
                    r = {
                        loading: function(e) {
                            e.error, e.isLoading;
                            return e.pastDelay, null
                        }
                    };
                e instanceof Promise ? r.loader = function() {
                    return e
                } : "function" === typeof e ? r.loader = e : "object" === typeof e && (r = a(a({}, r), e));
                if (r = a(a({}, r), t), "object" === typeof e && !(e instanceof Promise) && (e.render && (r.render = function(t, n) {
                        return e.render(n, t)
                    }), e.modules)) {
                    n = i.default.Map;
                    var o = {},
                        c = e.modules();
                    Object.keys(c).forEach((function(e) {
                        var t = c[e];
                        "function" !== typeof t.then ? o[e] = t : o[e] = function() {
                            return t.then((function(e) {
                                return e.default || e
                            }))
                        }
                    })), r.loader = o
                }
                r.loadableGenerated && delete(r = a(a({}, r), r.loadableGenerated)).loadableGenerated;
                if ("boolean" === typeof r.ssr) {
                    if (!r.ssr) return delete r.ssr, u(n, r);
                    delete r.ssr
                }
                return n(r)
            };
            c(n("q1tI"));
            var i = c(n("2qu3"));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }
        },
        a7YW: function(e, t, n) {
            e.exports = {
                container: "ArrowRight_container__1qrqb"
            }
        },
        aAZM: function(e, t, n) {
            "use strict";
            var r = n("wx14"),
                o = n("Ff2n"),
                a = n("q1tI"),
                i = n.n(a),
                c = n("wNob"),
                u = n("/v2g"),
                l = n.n(u),
                s = i.a.createElement;
            t.a = function(e) {
                var t = e.className,
                    n = Object(o.a)(e, ["className"]);
                return s("svg", Object(r.a)({
                    viewBox: "0 0 15 15",
                    className: Object(c.a)(l.a.container, t)
                }, n), s("path", {
                    d: "m6.106 18.834c-.293.293-.293.768 0 1.06.293.293.768.293 1.061 0l5.569-5.568-1.061-1.061zm7.16-7.16 1.06 1.061 5.569-5.569c.293-.292.293-.767 0-1.06s-.768-.293-1.061 0z",
                    transform: "matrix(1.05404 0 0 1.05443 -6.203817 -6.206646)"
                }), s("path", {
                    d: "m14.325 13.265-1.06 1.061 5.568 5.568c.293.293.768.293 1.061 0 .293-.292.293-.767 0-1.06zm-1.591-1.591-5.568-5.568c-.293-.293-.768-.293-1.061 0s-.293.768 0 1.06l5.569 5.569z",
                    transform: "matrix(1.05404 0 0 1.05443 -6.202763 -6.206646)"
                }))
            }
        },
        afiy: function(e, t, n) {
            "use strict";
            var r = n("o0o1"),
                o = n.n(r),
                a = n("HaE+"),
                i = n("ODXe"),
                c = n("q1tI"),
                u = n.n(c),
                l = n("nOHt"),
                s = n("ob4f"),
                f = n("2D6l"),
                d = n("3bd0"),
                p = n("bbAf"),
                y = n("icDD"),
                v = n("xAw8"),
                h = n("9NXD"),
                b = n("ASWg"),
                m = n("wix9"),
                g = n("7Bdg"),
                O = n("wx14"),
                _ = n("Ff2n"),
                j = n("ZMKu"),
                C = n("y94e"),
                w = n("wNob"),
                P = n("9WjZ"),
                L = n.n(P),
                k = n("59OL"),
                S = u.a.createElement,
                M = function(e) {
                    var t = e.className,
                        n = Object(_.a)(e, ["className"]),
                        r = Object(c.useRef)(),
                        o = Object(j.c)(),
                        a = Object(s.a)(),
                        u = Object(i.a)(a, 2),
                        l = u[0],
                        f = u[1],
                        d = Object(C.a)(f),
                        p = Object(c.useRef)(),
                        y = function() {
                            var e;
                            p.current = (null === (e = r.current) || void 0 === e ? void 0 : e.getTotalLength()) || 0
                        },
                        v = Object(c.useCallback)((function() {
                            o.set({
                                strokeDasharray: p.current,
                                strokeDashoffset: p.current
                            }), o.start({
                                strokeDashoffset: -p.current,
                                transition: {
                                    duration: 2
                                }
                            })
                        }), [o]);
                    return Object(c.useEffect)((function() {
                        f && !d && (y(), v())
                    }), [d, f, v, r, o]), Object(k.a)((function(e) {
                        e.isLastTick && y()
                    }), [y]), S("svg", Object(O.a)({
                        ref: l,
                        width: "86",
                        height: "21",
                        viewBox: "0 0 86 21",
                        className: Object(w.a)(L.a.container, t)
                    }, n), S(j.b.path, {
                        ref: r,
                        className: L.a.line,
                        animate: o,
                        onAnimationComplete: function() {
                            return f && v()
                        },
                        d: "M0 13.4034H13.3018C13.3964 13.4034 13.4892 13.3777 13.5704 13.3291L14.619 12.701C14.8508 12.5621 15.1503 12.6229 15.3096 12.8411L16.145 13.9848C16.2984 14.1949 16.5831 14.2602 16.8127 14.1379L18.087 13.4594C18.1562 13.4225 18.2299 13.4019 18.3082 13.3987C19.5154 13.3507 29.7663 12.9577 31.4407 13.4034C32.3515 13.6459 32.9516 13.392 33.3204 13.0862C33.6121 12.8444 34.1067 12.7679 34.3661 13.0442L34.9534 13.6696C35.2332 13.9676 35.7314 13.8435 35.8387 13.4491L39.0733 1.5655C39.2109 1.05995 39.924 1.04873 40.0774 1.54971L45.7251 19.9907C45.8799 20.496 46.601 20.4788 46.7314 19.9667L48.5438 12.8495C48.6028 12.6179 48.7927 12.5312 48.9913 12.6642C49.1957 12.8011 49.5188 13.0278 50.0283 13.4034C51.3136 14.351 85.8473 13.4034 85.8473 13.4034"
                    }))
                },
                E = n("Wx3s"),
                x = n.n(E),
                I = u.a.createElement;
            t.a = function(e) {
                var t, n, r, O = e.fields,
                    _ = void 0 === O ? {} : O,
                    j = e.x,
                    C = void 0 === j ? 0 : j,
                    w = e.y,
                    P = void 0 === w ? 0 : w,
                    L = e.parallax,
                    k = void 0 === L || L,
                    S = (Object(l.useRouter)().query || {}).locale,
                    E = _.title,
                    N = _.personName,
                    T = _.personRole,
                    R = _.picture,
                    D = _.audioFile,
                    A = null === R || void 0 === R || null === (t = R.fields) || void 0 === t || null === (n = t.file) || void 0 === n ? void 0 : n.url,
                    B = (null === R || void 0 === R || null === (r = R.fields) || void 0 === r ? void 0 : r.title) || "",
                    V = Object(h.a)("General"),
                    H = Object(s.a)({
                        triggerOnce: !0,
                        rootMargin: "2000px"
                    }),
                    Z = Object(i.a)(H, 2),
                    W = Z[0],
                    G = Z[1],
                    U = Object(s.a)({
                        rootMargin: "50px"
                    }),
                    F = Object(i.a)(U, 2),
                    z = F[0],
                    q = F[1],
                    K = Object(c.useState)(!1),
                    Y = K[0],
                    X = K[1],
                    Q = Object(c.useRef)(),
                    J = Object(c.useRef)(0),
                    $ = Object(c.useState)(!1),
                    ee = $[0],
                    te = $[1],
                    ne = Object(c.useRef)(),
                    re = Object(c.useState)(""),
                    oe = re[0],
                    ae = re[1],
                    ie = Object(c.useState)(!1),
                    ce = ie[0],
                    ue = ie[1],
                    le = Object(c.useRef)(!1),
                    se = Object(c.useCallback)((function(e) {
                        ne.current = e, W(e)
                    }), [W]);
                Object(c.useEffect)((function() {
                    return function() {
                        return le.current = !1
                    }
                }), []), Object(c.useEffect)((function() {
                    G && !ce && function() {
                        var e = Object(a.a)(o.a.mark((function e() {
                            var t, n, r;
                            return o.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (le.current = !0, r = null === D || void 0 === D || null === (t = D.fields) || void 0 === t || null === (n = t.file) || void 0 === n ? void 0 : n.url) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        Object(d.a)(r, (function(e) {
                                            le.current && (ae(e), ue(!0), Q.current.load(), le.current = !1)
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()()
                }), [G, ce, D, S]);
                var fe = Object(c.useRef)();
                Object(p.a)((function() {
                    var e = ne.current,
                        t = Object(f.c)(e).top,
                        n = e.offsetHeight,
                        r = window.innerHeight;
                    fe.current = [t - r, t + n]
                }), []);
                var de = Object(y.a)(),
                    pe = Object(v.a)();
                Object(b.a)({
                    onScroll: Object(c.useCallback)((function(e) {
                        var t = e.y,
                            n = Object(f.a)(Object(f.e)(fe.current, [-50, 50], t), -50, 50),
                            r = pe(n),
                            o = Object(i.a)(r, 2),
                            a = o[0];
                        a !== o[1] && (ne.current.style.transform = "translate3d(0, ".concat(a, "px, 0)"))
                    }), [pe]),
                    active: k && de && q
                });
                var ye = function(e) {
                    return [e % 3600 / 60, e % 60].map((function(e) {
                        return "0".concat(Math.floor(e)).slice(-2)
                    })).join(":")
                };
                Object(c.useEffect)((function() {
                    Q.current && Q.current.addEventListener("durationchange", (function() {
                        var e = Q.current.duration,
                            t = ye(e);
                        te(t)
                    }))
                }), []);
                var ve = Object(c.useCallback)((function() {
                        var e, t = (null === (e = Q.current) || void 0 === e ? void 0 : e.currentTime) || 0;
                        if (0 !== (t = Math.round(t)) && t !== J.current) {
                            J.current = t;
                            var n = ye(J.current);
                            te(n)
                        }
                    }), [J]),
                    he = Object(c.useCallback)((function() {
                        Q.current.currentTime = 0
                    }), [Q]),
                    be = Object(c.useCallback)((function() {
                        Y ? (X(!1), Q.current.pause()) : (X(!0), Q.current.play())
                    }), [Y]);
                return I("div", {
                    ref: se,
                    style: {
                        left: C,
                        top: P
                    },
                    className: x.a.outer
                }, I("button", {
                    ref: z,
                    className: x.a.inner,
                    onClick: be,
                    type: "button"
                }, I("div", {
                    className: x.a.imageContainer
                }, A && I("img", {
                    src: A,
                    alt: B,
                    className: x.a.image
                }), I(M, {
                    className: x.a.heartBeat
                })), I("div", {
                    className: x.a.copy
                }, I("h3", {
                    className: x.a.title
                }, E), I("h4", {
                    className: x.a.subtitle
                }, N), I("p", {
                    className: x.a.description
                }, T), I("div", {
                    className: x.a.audioControl
                }, I("div", {
                    className: x.a.audioControlIcons
                }, Y ? I(u.a.Fragment, null, I(g.a, {
                    className: x.a.audioControlIcon
                }), I("span", {
                    className: "screen-reader-only"
                }, V("PauseSoundFragment"))) : I(u.a.Fragment, null, I(m.a, {
                    className: x.a.audioControlIcon
                }), I("span", {
                    className: "screen-reader-only"
                }, V("PlaySoundFragment")))), ee && I("span", {
                    className: x.a.time
                }, ee))), I("audio", {
                    preload: "metadata",
                    ref: Q,
                    src: oe,
                    onTimeUpdate: ve,
                    onEnded: he
                })))
            }
        },
        bA2t: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== c(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = n("tbWI"),
                a = n("mzdp");

            function i() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function c(e) {
                return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function d(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = v(e);
                    if (t) {
                        var o = v(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }

            function p(e, t) {
                return !t || "object" !== c(t) && "function" !== typeof t ? y(e) : t
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v(e) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var b = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t)
                }(p, e);
                var t, n, i, c = d(p);

                function p() {
                    var e;
                    l(this, p);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return h(y(e = c.call.apply(c, [this].concat(n))), "callPlayer", o.callPlayer), h(y(e), "playerID", e.props.config.playerId || "".concat("twitch-player-").concat((0, o.randomString)())), h(y(e), "mute", (function() {
                        e.callPlayer("setMuted", !0)
                    })), h(y(e), "unmute", (function() {
                        e.callPlayer("setMuted", !1)
                    })), e
                }
                return t = p, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load",
                    value: function(e, t) {
                        var n = this,
                            r = this.props,
                            i = r.playsinline,
                            c = r.onError,
                            l = r.config,
                            s = r.controls,
                            f = a.MATCH_URL_TWITCH_CHANNEL.test(e),
                            d = f ? e.match(a.MATCH_URL_TWITCH_CHANNEL)[1] : e.match(a.MATCH_URL_TWITCH_VIDEO)[1];
                        t ? f ? this.player.setChannel(d) : this.player.setVideo("v" + d) : (0, o.getSDK)("https://player.twitch.tv/js/embed/v1.js", "Twitch").then((function(e) {
                            n.player = new e.Player(n.playerID, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                                        h(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({
                                video: f ? "" : d,
                                channel: f ? d : "",
                                height: "100%",
                                width: "100%",
                                playsinline: i,
                                autoplay: n.props.playing,
                                muted: n.props.muted,
                                controls: !!f || s
                            }, l.options));
                            var t = e.Player,
                                r = t.READY,
                                o = t.PLAYING,
                                a = t.PAUSE,
                                c = t.ENDED,
                                p = t.ONLINE,
                                y = t.OFFLINE;
                            n.player.addEventListener(r, n.props.onReady), n.player.addEventListener(o, n.props.onPlay), n.player.addEventListener(a, n.props.onPause), n.player.addEventListener(c, n.props.onEnded), n.player.addEventListener(p, n.props.onLoaded), n.player.addEventListener(y, n.props.onLoaded)
                        }), c)
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "seekTo",
                    value: function(e) {
                        this.callPlayer("seek", e)
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.callPlayer("setVolume", e)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.callPlayer("getDuration")
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.callPlayer("getCurrentTime")
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return null
                    }
                }, {
                    key: "render",
                    value: function() {
                        return r.default.createElement("div", {
                            style: {
                                width: "100%",
                                height: "100%"
                            },
                            id: this.playerID
                        })
                    }
                }]) && s(t.prototype, n), i && s(t, i), p
            }(r.Component);
            t.default = b, h(b, "displayName", "Twitch"), h(b, "canPlay", a.canPlay.twitch), h(b, "loopOnEnded", !0)
        },
        bdgK: function(e, t, n) {
            "use strict";
            (function(e) {
                var n = function() {
                        if ("undefined" !== typeof Map) return Map;

                        function e(e, t) {
                            var n = -1;
                            return e.some((function(e, r) {
                                return e[0] === t && (n = r, !0)
                            })), n
                        }
                        return function() {
                            function t() {
                                this.__entries__ = []
                            }
                            return Object.defineProperty(t.prototype, "size", {
                                get: function() {
                                    return this.__entries__.length
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.get = function(t) {
                                var n = e(this.__entries__, t),
                                    r = this.__entries__[n];
                                return r && r[1]
                            }, t.prototype.set = function(t, n) {
                                var r = e(this.__entries__, t);
                                ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
                            }, t.prototype.delete = function(t) {
                                var n = this.__entries__,
                                    r = e(n, t);
                                ~r && n.splice(r, 1)
                            }, t.prototype.has = function(t) {
                                return !!~e(this.__entries__, t)
                            }, t.prototype.clear = function() {
                                this.__entries__.splice(0)
                            }, t.prototype.forEach = function(e, t) {
                                void 0 === t && (t = null);
                                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                    var o = r[n];
                                    e.call(t, o[1], o[0])
                                }
                            }, t
                        }()
                    }(),
                    r = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
                    o = "undefined" !== typeof e && e.Math === Math ? e : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
                    a = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(o) : function(e) {
                        return setTimeout((function() {
                            return e(Date.now())
                        }), 1e3 / 60)
                    };
                var i = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                    c = "undefined" !== typeof MutationObserver,
                    u = function() {
                        function e() {
                            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                                var n = !1,
                                    r = !1,
                                    o = 0;

                                function i() {
                                    n && (n = !1, e()), r && u()
                                }

                                function c() {
                                    a(i)
                                }

                                function u() {
                                    var e = Date.now();
                                    if (n) {
                                        if (e - o < 2) return;
                                        r = !0
                                    } else n = !0, r = !1, setTimeout(c, t);
                                    o = e
                                }
                                return u
                            }(this.refresh.bind(this), 20)
                        }
                        return e.prototype.addObserver = function(e) {
                            ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                        }, e.prototype.removeObserver = function(e) {
                            var t = this.observers_,
                                n = t.indexOf(e);
                            ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
                        }, e.prototype.refresh = function() {
                            this.updateObservers_() && this.refresh()
                        }, e.prototype.updateObservers_ = function() {
                            var e = this.observers_.filter((function(e) {
                                return e.gatherActive(), e.hasActive()
                            }));
                            return e.forEach((function(e) {
                                return e.broadcastActive()
                            })), e.length > 0
                        }, e.prototype.connect_ = function() {
                            r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), c ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                        }, e.prototype.disconnect_ = function() {
                            r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                        }, e.prototype.onTransitionEnd_ = function(e) {
                            var t = e.propertyName,
                                n = void 0 === t ? "" : t;
                            i.some((function(e) {
                                return !!~n.indexOf(e)
                            })) && this.refresh()
                        }, e.getInstance = function() {
                            return this.instance_ || (this.instance_ = new e), this.instance_
                        }, e.instance_ = null, e
                    }(),
                    l = function(e, t) {
                        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                            var o = r[n];
                            Object.defineProperty(e, o, {
                                value: t[o],
                                enumerable: !1,
                                writable: !1,
                                configurable: !0
                            })
                        }
                        return e
                    },
                    s = function(e) {
                        return e && e.ownerDocument && e.ownerDocument.defaultView || o
                    },
                    f = b(0, 0, 0, 0);

                function d(e) {
                    return parseFloat(e) || 0
                }

                function p(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    return t.reduce((function(t, n) {
                        return t + d(e["border-" + n + "-width"])
                    }), 0)
                }

                function y(e) {
                    var t = e.clientWidth,
                        n = e.clientHeight;
                    if (!t && !n) return f;
                    var r = s(e).getComputedStyle(e),
                        o = function(e) {
                            for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                                var o = r[n],
                                    a = e["padding-" + o];
                                t[o] = d(a)
                            }
                            return t
                        }(r),
                        a = o.left + o.right,
                        i = o.top + o.bottom,
                        c = d(r.width),
                        u = d(r.height);
                    if ("border-box" === r.boxSizing && (Math.round(c + a) !== t && (c -= p(r, "left", "right") + a), Math.round(u + i) !== n && (u -= p(r, "top", "bottom") + i)), ! function(e) {
                            return e === s(e).document.documentElement
                        }(e)) {
                        var l = Math.round(c + a) - t,
                            y = Math.round(u + i) - n;
                        1 !== Math.abs(l) && (c -= l), 1 !== Math.abs(y) && (u -= y)
                    }
                    return b(o.left, o.top, c, u)
                }
                var v = "undefined" !== typeof SVGGraphicsElement ? function(e) {
                    return e instanceof s(e).SVGGraphicsElement
                } : function(e) {
                    return e instanceof s(e).SVGElement && "function" === typeof e.getBBox
                };

                function h(e) {
                    return r ? v(e) ? function(e) {
                        var t = e.getBBox();
                        return b(0, 0, t.width, t.height)
                    }(e) : y(e) : f
                }

                function b(e, t, n, r) {
                    return {
                        x: e,
                        y: t,
                        width: n,
                        height: r
                    }
                }
                var m = function() {
                        function e(e) {
                            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = b(0, 0, 0, 0), this.target = e
                        }
                        return e.prototype.isActive = function() {
                            var e = h(this.target);
                            return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                        }, e.prototype.broadcastRect = function() {
                            var e = this.contentRect_;
                            return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                        }, e
                    }(),
                    g = function(e, t) {
                        var n = function(e) {
                            var t = e.x,
                                n = e.y,
                                r = e.width,
                                o = e.height,
                                a = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                                i = Object.create(a.prototype);
                            return l(i, {
                                x: t,
                                y: n,
                                width: r,
                                height: o,
                                top: n,
                                right: t + r,
                                bottom: o + n,
                                left: t
                            }), i
                        }(t);
                        l(this, {
                            target: e,
                            contentRect: n
                        })
                    },
                    O = function() {
                        function e(e, t, r) {
                            if (this.activeObservations_ = [], this.observations_ = new n, "function" !== typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                            this.callback_ = e, this.controller_ = t, this.callbackCtx_ = r
                        }
                        return e.prototype.observe = function(e) {
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" !== typeof Element && Element instanceof Object) {
                                if (!(e instanceof s(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) || (t.set(e, new m(e)), this.controller_.addObserver(this), this.controller_.refresh())
                            }
                        }, e.prototype.unobserve = function(e) {
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" !== typeof Element && Element instanceof Object) {
                                if (!(e instanceof s(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                            }
                        }, e.prototype.disconnect = function() {
                            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                        }, e.prototype.gatherActive = function() {
                            var e = this;
                            this.clearActive(), this.observations_.forEach((function(t) {
                                t.isActive() && e.activeObservations_.push(t)
                            }))
                        }, e.prototype.broadcastActive = function() {
                            if (this.hasActive()) {
                                var e = this.callbackCtx_,
                                    t = this.activeObservations_.map((function(e) {
                                        return new g(e.target, e.broadcastRect())
                                    }));
                                this.callback_.call(e, t, e), this.clearActive()
                            }
                        }, e.prototype.clearActive = function() {
                            this.activeObservations_.splice(0)
                        }, e.prototype.hasActive = function() {
                            return this.activeObservations_.length > 0
                        }, e
                    }(),
                    _ = "undefined" !== typeof WeakMap ? new WeakMap : new n,
                    j = function e(t) {
                        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        var n = u.getInstance(),
                            r = new O(t, n, this);
                        _.set(this, r)
                    };
                ["observe", "unobserve", "disconnect"].forEach((function(e) {
                    j.prototype[e] = function() {
                        var t;
                        return (t = _.get(this))[e].apply(t, arguments)
                    }
                }));
                var C = "undefined" !== typeof o.ResizeObserver ? o.ResizeObserver : j;
                t.a = C
            }).call(this, n("yLpj"))
        },
        bmMU: function(e, t) {
            var n = "undefined" !== typeof Element,
                r = "function" === typeof Map,
                o = "function" === typeof Set,
                a = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;
            e.exports = function(e, t) {
                try {
                    return function e(t, i) {
                        if (t === i) return !0;
                        if (t && i && "object" == typeof t && "object" == typeof i) {
                            if (t.constructor !== i.constructor) return !1;
                            var c, u, l, s;
                            if (Array.isArray(t)) {
                                if ((c = t.length) != i.length) return !1;
                                for (u = c; 0 !== u--;)
                                    if (!e(t[u], i[u])) return !1;
                                return !0
                            }
                            if (r && t instanceof Map && i instanceof Map) {
                                if (t.size !== i.size) return !1;
                                for (s = t.entries(); !(u = s.next()).done;)
                                    if (!i.has(u.value[0])) return !1;
                                for (s = t.entries(); !(u = s.next()).done;)
                                    if (!e(u.value[1], i.get(u.value[0]))) return !1;
                                return !0
                            }
                            if (o && t instanceof Set && i instanceof Set) {
                                if (t.size !== i.size) return !1;
                                for (s = t.entries(); !(u = s.next()).done;)
                                    if (!i.has(u.value[0])) return !1;
                                return !0
                            }
                            if (a && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
                                if ((c = t.length) != i.length) return !1;
                                for (u = c; 0 !== u--;)
                                    if (t[u] !== i[u]) return !1;
                                return !0
                            }
                            if (t.constructor === RegExp) return t.source === i.source && t.flags === i.flags;
                            if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === i.valueOf();
                            if (t.toString !== Object.prototype.toString) return t.toString() === i.toString();
                            if ((c = (l = Object.keys(t)).length) !== Object.keys(i).length) return !1;
                            for (u = c; 0 !== u--;)
                                if (!Object.prototype.hasOwnProperty.call(i, l[u])) return !1;
                            if (n && t instanceof Element) return !1;
                            for (u = c; 0 !== u--;)
                                if (("_owner" !== l[u] && "__v" !== l[u] && "__o" !== l[u] || !t.$$typeof) && !e(t[l[u]], i[l[u]])) return !1;
                            return !0
                        }
                        return t !== t && i !== i
                    }(e, t)
                } catch (i) {
                    if ((i.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw i
                }
            }
        },
        "bq/u": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== c(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = n("tbWI"),
                a = n("mzdp");

            function i() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function c(e) {
                return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u() {
                return (u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function d(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = v(e);
                    if (t) {
                        var o = v(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }

            function p(e, t) {
                return !t || "object" !== c(t) && "function" !== typeof t ? y(e) : t
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v(e) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var b = "undefined" !== typeof navigator && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                m = /www\.dropbox\.com\/.+/,
                g = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,
                O = function(e) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && f(e, t)
                    }(p, e);
                    var t, n, i, c = d(p);

                    function p() {
                        var e;
                        l(this, p);
                        for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                        return h(y(e = c.call.apply(c, [this].concat(n))), "onReady", (function() {
                            var t;
                            return (t = e.props).onReady.apply(t, arguments)
                        })), h(y(e), "onPlay", (function() {
                            var t;
                            return (t = e.props).onPlay.apply(t, arguments)
                        })), h(y(e), "onBuffer", (function() {
                            var t;
                            return (t = e.props).onBuffer.apply(t, arguments)
                        })), h(y(e), "onBufferEnd", (function() {
                            var t;
                            return (t = e.props).onBufferEnd.apply(t, arguments)
                        })), h(y(e), "onPause", (function() {
                            var t;
                            return (t = e.props).onPause.apply(t, arguments)
                        })), h(y(e), "onEnded", (function() {
                            var t;
                            return (t = e.props).onEnded.apply(t, arguments)
                        })), h(y(e), "onError", (function() {
                            var t;
                            return (t = e.props).onError.apply(t, arguments)
                        })), h(y(e), "onEnablePIP", (function() {
                            var t;
                            return (t = e.props).onEnablePIP.apply(t, arguments)
                        })), h(y(e), "onDisablePIP", (function(t) {
                            var n = e.props,
                                r = n.onDisablePIP,
                                o = n.playing;
                            r(t), o && e.play()
                        })), h(y(e), "onPresentationModeChange", (function(t) {
                            if (e.player && (0, o.supportsWebKitPresentationMode)(e.player)) {
                                var n = e.player.webkitPresentationMode;
                                "picture-in-picture" === n ? e.onEnablePIP(t) : "inline" === n && e.onDisablePIP(t)
                            }
                        })), h(y(e), "onSeek", (function(t) {
                            e.props.onSeek(t.target.currentTime)
                        })), h(y(e), "mute", (function() {
                            e.player.muted = !0
                        })), h(y(e), "unmute", (function() {
                            e.player.muted = !1
                        })), h(y(e), "renderSourceElement", (function(e, t) {
                            return "string" === typeof e ? r.default.createElement("source", {
                                key: t,
                                src: e
                            }) : r.default.createElement("source", u({
                                key: t
                            }, e))
                        })), h(y(e), "renderTrack", (function(e, t) {
                            return r.default.createElement("track", u({
                                key: t
                            }, e))
                        })), h(y(e), "ref", (function(t) {
                            e.player && (e.prevPlayer = e.player), e.player = t
                        })), e
                    }
                    return t = p, (n = [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.onMount && this.props.onMount(this), this.addListeners(this.player), b && this.player.load()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) && (this.removeListeners(this.prevPlayer), this.addListeners(this.player))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.removeListeners(this.player), this.hls && this.hls.destroy()
                        }
                    }, {
                        key: "addListeners",
                        value: function(e) {
                            var t = this.props.playsinline;
                            e.addEventListener("canplay", this.onReady), e.addEventListener("play", this.onPlay), e.addEventListener("waiting", this.onBuffer), e.addEventListener("playing", this.onBufferEnd), e.addEventListener("pause", this.onPause), e.addEventListener("seeked", this.onSeek), e.addEventListener("ended", this.onEnded), e.addEventListener("error", this.onError), e.addEventListener("enterpictureinpicture", this.onEnablePIP), e.addEventListener("leavepictureinpicture", this.onDisablePIP), e.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), t && (e.setAttribute("playsinline", ""), e.setAttribute("webkit-playsinline", ""), e.setAttribute("x5-playsinline", ""))
                        }
                    }, {
                        key: "removeListeners",
                        value: function(e) {
                            e.removeEventListener("canplay", this.onReady), e.removeEventListener("play", this.onPlay), e.removeEventListener("waiting", this.onBuffer), e.removeEventListener("playing", this.onBufferEnd), e.removeEventListener("pause", this.onPause), e.removeEventListener("seeked", this.onSeek), e.removeEventListener("ended", this.onEnded), e.removeEventListener("error", this.onError), e.removeEventListener("enterpictureinpicture", this.onEnablePIP), e.removeEventListener("leavepictureinpicture", this.onDisablePIP), e.removeEventListener("webkitpresentationmodechanged", this.onPresentationModeChange)
                        }
                    }, {
                        key: "shouldUseAudio",
                        value: function(e) {
                            return !e.config.forceVideo && !e.config.attributes.poster && (a.AUDIO_EXTENSIONS.test(e.url) || e.config.forceAudio)
                        }
                    }, {
                        key: "shouldUseHLS",
                        value: function(e) {
                            return !!this.props.config.forceHLS || !b && (a.HLS_EXTENSIONS.test(e) || g.test(e))
                        }
                    }, {
                        key: "shouldUseDASH",
                        value: function(e) {
                            return a.DASH_EXTENSIONS.test(e) || this.props.config.forceDASH
                        }
                    }, {
                        key: "shouldUseFLV",
                        value: function(e) {
                            return a.FLV_EXTENSIONS.test(e) || this.props.config.forceFLV
                        }
                    }, {
                        key: "load",
                        value: function(e) {
                            var t = this,
                                n = this.props.config,
                                r = n.hlsVersion,
                                a = n.hlsOptions,
                                i = n.dashVersion,
                                c = n.flvVersion;
                            if (this.hls && this.hls.destroy(), this.dash && this.dash.reset(), this.shouldUseHLS(e) && (0, o.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION", r), "Hls").then((function(n) {
                                    if (t.hls = new n(a), t.hls.on(n.Events.ERROR, (function(e, r) {
                                            t.props.onError(e, r, t.hls, n)
                                        })), g.test(e)) {
                                        var r = e.match(g)[1];
                                        t.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}", r))
                                    } else t.hls.loadSource(e);
                                    t.hls.attachMedia(t.player), t.props.onLoaded()
                                })), this.shouldUseDASH(e) && (0, o.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION", i), "dashjs").then((function(n) {
                                    t.dash = n.MediaPlayer().create(), t.dash.initialize(t.player, e, t.props.playing), t.dash.on("error", t.props.onError), parseInt(i) < 3 ? t.dash.getDebug().setLogToBrowserConsole(!1) : t.dash.updateSettings({
                                        debug: {
                                            logLevel: n.Debug.LOG_LEVEL_NONE
                                        }
                                    }), t.props.onLoaded()
                                })), this.shouldUseFLV(e) && (0, o.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION", c), "flvjs").then((function(n) {
                                    t.flv = n.createPlayer({
                                        type: "flv",
                                        url: e
                                    }), t.flv.attachMediaElement(t.player), t.flv.load(), t.props.onLoaded()
                                })), e instanceof Array) this.player.load();
                            else if ((0, o.isMediaStream)(e)) try {
                                this.player.srcObject = e
                            } catch (u) {
                                this.player.src = window.URL.createObjectURL(e)
                            }
                        }
                    }, {
                        key: "play",
                        value: function() {
                            var e = this.player.play();
                            e && e.catch(this.props.onError)
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.player.pause()
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.player.removeAttribute("src"), this.dash && this.dash.reset()
                        }
                    }, {
                        key: "seekTo",
                        value: function(e) {
                            this.player.currentTime = e
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.player.volume = e
                        }
                    }, {
                        key: "enablePIP",
                        value: function() {
                            this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player ? this.player.requestPictureInPicture() : (0, o.supportsWebKitPresentationMode)(this.player) && "picture-in-picture" !== this.player.webkitPresentationMode && this.player.webkitSetPresentationMode("picture-in-picture")
                        }
                    }, {
                        key: "disablePIP",
                        value: function() {
                            document.exitPictureInPicture && document.pictureInPictureElement === this.player ? document.exitPictureInPicture() : (0, o.supportsWebKitPresentationMode)(this.player) && "inline" !== this.player.webkitPresentationMode && this.player.webkitSetPresentationMode("inline")
                        }
                    }, {
                        key: "setPlaybackRate",
                        value: function(e) {
                            this.player.playbackRate = e
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            if (!this.player) return null;
                            var e = this.player,
                                t = e.duration,
                                n = e.seekable;
                            return t === 1 / 0 && n.length > 0 ? n.end(n.length - 1) : t
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.player ? this.player.currentTime : null
                        }
                    }, {
                        key: "getSecondsLoaded",
                        value: function() {
                            if (!this.player) return null;
                            var e = this.player.buffered;
                            if (0 === e.length) return 0;
                            var t = e.end(e.length - 1),
                                n = this.getDuration();
                            return t > n ? n : t
                        }
                    }, {
                        key: "getSource",
                        value: function(e) {
                            var t = this.shouldUseHLS(e),
                                n = this.shouldUseDASH(e),
                                r = this.shouldUseFLV(e);
                            if (!(e instanceof Array || (0, o.isMediaStream)(e) || t || n || r)) return m.test(e) ? e.replace("www.dropbox.com", "dl.dropboxusercontent.com") : e
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.url,
                                n = e.playing,
                                o = e.loop,
                                a = e.controls,
                                i = e.muted,
                                c = e.config,
                                l = e.width,
                                s = e.height,
                                f = this.shouldUseAudio(this.props) ? "audio" : "video",
                                d = {
                                    width: "auto" === l ? l : "100%",
                                    height: "auto" === s ? s : "100%"
                                };
                            return r.default.createElement(f, u({
                                ref: this.ref,
                                src: this.getSource(t),
                                style: d,
                                preload: "auto",
                                autoPlay: n || void 0,
                                controls: a,
                                muted: i,
                                loop: o
                            }, c.attributes), t instanceof Array && t.map(this.renderSourceElement), c.tracks.map(this.renderTrack))
                        }
                    }]) && s(t.prototype, n), i && s(t, i), p
                }(r.Component);
            t.default = O, h(O, "displayName", "FilePlayer"), h(O, "canPlay", a.canPlay.file)
        },
        cbz1: function(e, t, n) {
            e.exports = {
                container: "BlockTwoImages_container__J7Y_h",
                isDark: "BlockTwoImages_isDark__2M-An",
                images: "BlockTwoImages_images__1YDXW",
                imageWrapper: "BlockTwoImages_imageWrapper__3nhYz",
                mask: "BlockTwoImages_mask__hO0kO",
                image: "BlockTwoImages_image__14ow2",
                inView: "BlockTwoImages_inView__2Md71",
                caption: "BlockTwoImages_caption__3cvJ3",
                isCenter: "BlockTwoImages_isCenter__2LKiw"
            }
        },
        dMWq: function(e, t, n) {
            e.exports = {
                group: "ProgressCircle_group__2pftA",
                default: "ProgressCircle_default__2e_ac",
                active: "ProgressCircle_active__3qhBW",
                indicator: "ProgressCircle_indicator__11YHS"
            }
        },
        dXjJ: function(e, t, n) {
            e.exports = {
                bag: "BagIcon_bag__1HpNo",
                handle: "BagIcon_handle__3UCm0"
            }
        },
        eCXG: function(e, t, n) {
            e.exports = {
                container: "MoreIcon_container__1S61o"
            }
        },
        eHS7: function(e, t, n) {
            "use strict";
            var r = n("wx14"),
                o = n("Ff2n"),
                a = n("q1tI"),
                i = n.n(a),
                c = n("wNob"),
                u = n("a7YW"),
                l = n.n(u),
                s = i.a.createElement;
            t.a = function(e) {
                var t = e.className,
                    n = Object(o.a)(e, ["className"]);
                return s("svg", Object(r.a)({
                    className: Object(c.a)(l.a.container, t)
                }, n, {
                    viewBox: "0 0 37 37"
                }), s("path", {
                    d: "M3.5 2H35V35"
                }), s("path", {
                    d: "M35 2L2 35"
                }))
            }
        },
        f77o: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== c(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = n("tbWI"),
                a = n("mzdp");

            function i() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function c(e) {
                return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }

            function d(e, t) {
                return !t || "object" !== c(t) && "function" !== typeof t ? p(e) : t
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function y(e) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function v(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var h = "https://connect.facebook.net/en_US/sdk.js",
                b = function(e) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && s(e, t)
                    }(c, e);
                    var t, n, a, i = f(c);

                    function c() {
                        var e;
                        u(this, c);
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return v(p(e = i.call.apply(i, [this].concat(n))), "callPlayer", o.callPlayer), v(p(e), "playerID", e.props.config.playerId || "".concat("facebook-player-").concat((0, o.randomString)())), v(p(e), "mute", (function() {
                            e.callPlayer("mute")
                        })), v(p(e), "unmute", (function() {
                            e.callPlayer("unmute")
                        })), e
                    }
                    return t = c, (n = [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.onMount && this.props.onMount(this)
                        }
                    }, {
                        key: "load",
                        value: function(e, t) {
                            var n = this;
                            t ? (0, o.getSDK)(h, "FB", "fbAsyncInit").then((function(e) {
                                return e.XFBML.parse()
                            })) : (0, o.getSDK)(h, "FB", "fbAsyncInit").then((function(e) {
                                e.init({
                                    appId: n.props.config.appId,
                                    xfbml: !0,
                                    version: n.props.config.version
                                }), e.Event.subscribe("xfbml.render", (function(e) {
                                    n.props.onLoaded()
                                })), e.Event.subscribe("xfbml.ready", (function(e) {
                                    "video" === e.type && e.id === n.playerID && (n.player = e.instance, n.player.subscribe("startedPlaying", n.props.onPlay), n.player.subscribe("paused", n.props.onPause), n.player.subscribe("finishedPlaying", n.props.onEnded), n.player.subscribe("startedBuffering", n.props.onBuffer), n.player.subscribe("finishedBuffering", n.props.onBufferEnd), n.player.subscribe("error", n.props.onError), n.props.muted || n.callPlayer("unmute"), n.props.onReady(), document.getElementById(n.playerID).querySelector("iframe").style.visibility = "visible")
                                }))
                            }))
                        }
                    }, {
                        key: "play",
                        value: function() {
                            this.callPlayer("play")
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.callPlayer("pause")
                        }
                    }, {
                        key: "stop",
                        value: function() {}
                    }, {
                        key: "seekTo",
                        value: function(e) {
                            this.callPlayer("seek", e)
                        }
                    }, {
                        key: "setVolume",
                        value: function(e) {
                            this.callPlayer("setVolume", e)
                        }
                    }, {
                        key: "getDuration",
                        value: function() {
                            return this.callPlayer("getDuration")
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function() {
                            return this.callPlayer("getCurrentPosition")
                        }
                    }, {
                        key: "getSecondsLoaded",
                        value: function() {
                            return null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return r.default.createElement("div", {
                                style: {
                                    width: "100%",
                                    height: "100%"
                                },
                                id: this.playerID,
                                className: "fb-video",
                                "data-href": this.props.url,
                                "data-autoplay": this.props.playing ? "true" : "false",
                                "data-allowfullscreen": "true",
                                "data-controls": this.props.controls ? "true" : "false"
                            })
                        }
                    }]) && l(t.prototype, n), a && l(t, a), c
                }(r.Component);
            t.default = b, v(b, "displayName", "Facebook"), v(b, "canPlay", a.canPlay.facebook), v(b, "loopOnEnded", !0)
        },
        fPw2: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== c(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = n("tbWI"),
                a = n("mzdp");

            function i() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function c(e) {
                return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function d(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = v(e);
                    if (t) {
                        var o = v(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }

            function p(e, t) {
                return !t || "object" !== c(t) && "function" !== typeof t ? y(e) : t
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v(e) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var b = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t)
                }(p, e);
                var t, n, i, c = d(p);

                function p() {
                    var e;
                    l(this, p);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return h(y(e = c.call.apply(c, [this].concat(n))), "callPlayer", o.callPlayer), h(y(e), "mute", (function() {
                        e.setVolume(0)
                    })), h(y(e), "unmute", (function() {
                        null !== e.props.volume && e.setVolume(e.props.volume)
                    })), h(y(e), "ref", (function(t) {
                        e.container = t
                    })), e
                }
                return t = p, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load",
                    value: function(e) {
                        var t = this,
                            n = this.props,
                            r = n.playing,
                            i = n.config,
                            c = n.onError,
                            l = n.onDuration,
                            s = e && e.match(a.MATCH_URL_VIDYARD)[1];
                        this.player && this.stop(), (0, o.getSDK)("https://play.vidyard.com/embed/v4.js", "VidyardV4", "onVidyardAPI").then((function(e) {
                            t.container && (e.api.addReadyListener((function(e, n) {
                                t.player = n, t.player.on("ready", t.props.onReady), t.player.on("play", t.props.onPlay), t.player.on("pause", t.props.onPause), t.player.on("seek", t.props.onSeek), t.player.on("playerComplete", t.props.onEnded)
                            }), s), e.api.renderPlayer(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                                        h(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({
                                uuid: s,
                                container: t.container,
                                autoplay: r ? 1 : 0
                            }, i.options)), e.api.getPlayerMetadata(s).then((function(e) {
                                t.duration = e.length_in_seconds, l(e.length_in_seconds)
                            })))
                        }), c)
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop",
                    value: function() {
                        window.VidyardV4.api.destroyPlayer(this.player)
                    }
                }, {
                    key: "seekTo",
                    value: function(e) {
                        this.callPlayer("seek", e)
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.callPlayer("setVolume", e)
                    }
                }, {
                    key: "setPlaybackRate",
                    value: function(e) {
                        this.callPlayer("setPlaybackSpeed", e)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.callPlayer("currentTime")
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return null
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                            width: "100%",
                            height: "100%",
                            display: this.props.display
                        };
                        return r.default.createElement("div", {
                            style: e
                        }, r.default.createElement("div", {
                            ref: this.ref
                        }))
                    }
                }]) && s(t.prototype, n), i && s(t, i), p
            }(r.Component);
            t.default = b, h(b, "displayName", "Vidyard"), h(b, "canPlay", a.canPlay.vidyard)
        },
        fflM: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== a(e) && "function" !== typeof e) return {
                    default: e
                };
                var t = o();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var c = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        c && (c.get || c.set) ? Object.defineProperty(n, i, c) : n[i] = e[i]
                    }
                n.default = e, t && t.set(e, n);
                return n
            }(n("q1tI"));

            function o() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return o = function() {
                    return e
                }, e
            }

            function a(e) {
                return (a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        v(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function s(e, t) {
                return (s = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = y(e);
                    if (t) {
                        var o = y(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return d(this, n)
                }
            }

            function d(e, t) {
                return !t || "object" !== a(t) && "function" !== typeof t ? p(e) : t
            }

            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function y(e) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function v(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var h = {},
                b = function(e) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && s(e, t)
                    }(i, e);
                    var t, n, o, a = f(i);

                    function i() {
                        var e;
                        u(this, i);
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return v(p(e = a.call.apply(a, [this].concat(n))), "mounted", !1), v(p(e), "state", {
                            image: null
                        }), v(p(e), "handleKeyPress", (function(t) {
                            "Enter" !== t.key && " " !== t.key || e.props.onClick()
                        })), e
                    }
                    return t = i, (n = [{
                        key: "componentDidMount",
                        value: function() {
                            this.mounted = !0, this.fetchImage(this.props)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props,
                                n = t.url,
                                r = t.light;
                            e.url === n && e.light === r || this.fetchImage(this.props)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.mounted = !1
                        }
                    }, {
                        key: "fetchImage",
                        value: function(e) {
                            var t = this,
                                n = e.url,
                                r = e.light;
                            if ("string" !== typeof r) {
                                if (!h[n]) return this.setState({
                                    image: null
                                }), window.fetch("https://noembed.com/embed?url=".concat(n)).then((function(e) {
                                    return e.json()
                                })).then((function(e) {
                                    if (e.thumbnail_url && t.mounted) {
                                        var r = e.thumbnail_url.replace("height=100", "height=480");
                                        t.setState({
                                            image: r
                                        }), h[n] = r
                                    }
                                }));
                                this.setState({
                                    image: h[n]
                                })
                            } else this.setState({
                                image: r
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.onClick,
                                n = e.playIcon,
                                o = this.state.image,
                                a = {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                i = {
                                    preview: c({
                                        width: "100%",
                                        height: "100%",
                                        backgroundImage: o ? "url(".concat(o, ")") : void 0,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        cursor: "pointer"
                                    }, a),
                                    shadow: c({
                                        background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                                        borderRadius: "64px",
                                        width: "64px",
                                        height: "64px"
                                    }, a),
                                    playIcon: {
                                        borderStyle: "solid",
                                        borderWidth: "16px 0 16px 26px",
                                        borderColor: "transparent transparent transparent white",
                                        marginLeft: "7px"
                                    }
                                },
                                u = r.default.createElement("div", {
                                    style: i.shadow,
                                    className: "react-player__shadow"
                                }, r.default.createElement("div", {
                                    style: i.playIcon,
                                    className: "react-player__play-icon"
                                }));
                            return r.default.createElement("div", {
                                style: i.preview,
                                className: "react-player__preview",
                                onClick: t,
                                tabIndex: 0,
                                onKeyPress: this.handleKeyPress
                            }, n || u)
                        }
                    }]) && l(t.prototype, n), o && l(t, o), i
                }(r.Component);
            t.default = b
        },
        fp64: function(e, t, n) {
            e.exports = {
                svg: "CutCornerBackground_svg__1pFxK",
                path: "CutCornerBackground_path__aWb0Q",
                background: "CutCornerBackground_background__2huOQ"
            }
        },
        frax: function(e, t, n) {
            e.exports = {
                container: "MammutLogoIcon_container__3LcYT"
            }
        },
        h0Lr: function(e, t, n) {
            e.exports = {
                container: "PlayIcon_container__2shOQ"
            }
        },
        i5A8: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("8Kt/"),
                i = n.n(a),
                c = n("nOHt"),
                u = o.a.createElement;
            t.a = function(e) {
                var t = e.title,
                    n = void 0 === t ? "" : t,
                    r = e.metaDescription,
                    o = void 0 === r ? "" : r,
                    a = (e.queryOverwrites, Object(c.useRouter)().asPath),
                    l = n ? "".concat(n, " | ").concat("Mammut") : "Mammut",
                    s = "undefined" === typeof document ? "".concat("https://eiger-extreme.mammut.com").concat(a) : window.location.href;
                return u(i.a, null, u("title", null, l), u("meta", {
                    name: "description",
                    content: o
                }), u("meta", {
                    name: "viewport",
                    content: "initial-scale=1.0, width=device-width"
                }), u("meta", {
                    property: "og:url",
                    content: s
                }), u("meta", {
                    property: "og:title",
                    content: l
                }), u("meta", {
                    property: "og:type",
                    content: "website"
                }), u("meta", {
                    property: "og:image",
                    content: "https://images.ctfassets.net/1sddvf4stexr/2JG4C1Z3dXYptRQT6bLxe7/2d997dfca576ec76a174d085c22b8c66/eiger_dani-arnold_baikal_2080608.jpg"
                }), o && u("meta", {
                    property: "og:description",
                    content: o
                }))
            }
        },
        j6bO: function(e, t, n) {
            "use strict";
            t.a = function() {
                return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
            }
        },
        j8vA: function(e, t, n) {
            e.exports = {
                container: "CategoryPopup_container__3mQZg",
                pointerAll: "CategoryPopup_pointerAll__2Esor",
                overlay: "CategoryPopup_overlay__uratQ",
                closeBtn: "CategoryPopup_closeBtn__2_Gkd",
                closeIcon: "CategoryPopup_closeIcon__3AEn5",
                content: "CategoryPopup_content__2tf7Z",
                inner: "CategoryPopup_inner__MGWog",
                isVideo: "CategoryPopup_isVideo__2NE0t",
                label: "CategoryPopup_label__1eXwZ",
                text: "CategoryPopup_text__1WOvs",
                video: "CategoryPopup_video__3mPxo",
                src: "CategoryPopup_src__2BJyk",
                controls: "CategoryPopup_controls__1jPi1",
                textWrapper: "CategoryPopup_textWrapper__1lXNb",
                textInner: "CategoryPopup_textInner__b4ogx"
            }
        },
        "jM3/": function(e, t, n) {
            e.exports = {
                container: "Logo_container__11pHQ",
                svg: "Logo_svg__12Ywn",
                label: "Logo_label__2yJU-"
            }
        },
        jwwS: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.LoadableContext = void 0;
            var o = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext(null);
            t.LoadableContext = o
        },
        kG2m: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        kmhn: function(e, t, n) {
            e.exports = {
                container: "Mute_container__kgWQ6",
                dash: "Mute_dash__3Oa-t",
                muted: "Mute_muted__Le29F"
            }
        },
        "l/uS": function(e, t, n) {
            e.exports = {
                group: "ProgressBar_group__27qw5",
                dark: "ProgressBar_dark__3QCfw",
                default: "ProgressBar_default__2nIP8",
                active: "ProgressBar_active__2cEc6",
                indicator: "ProgressBar_indicator__2SgHb"
            }
        },
        lMyf: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = ["Men", "Women"],
                i = n("wNob"),
                c = n("9NXD"),
                u = n("02l6"),
                l = n.n(u),
                s = o.a.createElement;
            t.a = function(e) {
                var t = e.className,
                    n = e.activeGender,
                    o = e.setActiveGender,
                    u = e.focusable,
                    f = Object(c.a)("General"),
                    d = Object(r.useRef)([]),
                    p = Object(r.useCallback)((function(e, t) {
                        e.stopPropagation();
                        var r = a.findIndex((function(e) {
                            return e === n
                        })) || 0;
                        if (39 === e.keyCode || 37 === e.keyCode) {
                            var i;
                            39 === e.keyCode ? ++r >= a.length && (r = 0) : 37 === e.keyCode && --r < 0 && (r = a.length - 1), null === (i = d.current[r]) || void 0 === i || i.focus();
                            var c = a[r];
                            o && o(c)
                        }
                    }), [n, o]);
                return s("div", {
                    role: "tablist",
                    className: Object(i.a)(l.a.container, t)
                }, a.map((function(e, t) {
                    var r = e === n;
                    return s("button", {
                        ref: function(e) {
                            return d.current[t] = e
                        },
                        key: e,
                        role: "tab",
                        onKeyDown: p,
                        onClick: function() {
                            return o && o(e)
                        },
                        "aria-selected": r ? "true" : "false",
                        tabIndex: r && u ? 0 : -1,
                        className: Object(i.a)(l.a.button, r && l.a.isActive)
                    }, f(e))
                })))
            }
        },
        lSWW: function(e, t, n) {
            e.exports = {
                container: "BlockText_container__3A90Q",
                text: "BlockText_text__307sA",
                right: "BlockText_right__3w3vs"
            }
        },
        lwAK: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.AmpStateContext = void 0;
            var o = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.AmpStateContext = o
        },
        mPvQ: function(e, t, n) {
            var r = n("5fIB"),
                o = n("rlHP"),
                a = n("KckH"),
                i = n("kG2m");
            e.exports = function(e) {
                return r(e) || o(e) || a(e) || i()
            }
        },
        msoq: function(e, t, n) {
            e.exports = {
                container: "SmallArrowRight_container__1gUzL",
                stroke: "SmallArrowRight_stroke__dGuqW",
                path: "SmallArrowRight_path__3s1g-"
            }
        },
        mzdp: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.canPlay = t.FLV_EXTENSIONS = t.DASH_EXTENSIONS = t.HLS_EXTENSIONS = t.VIDEO_EXTENSIONS = t.AUDIO_EXTENSIONS = t.MATCH_URL_VIDYARD = t.MATCH_URL_MIXCLOUD = t.MATCH_URL_DAILYMOTION = t.MATCH_URL_TWITCH_CHANNEL = t.MATCH_URL_TWITCH_VIDEO = t.MATCH_URL_WISTIA = t.MATCH_URL_STREAMABLE = t.MATCH_URL_FACEBOOK = t.MATCH_URL_VIMEO = t.MATCH_URL_SOUNDCLOUD = t.MATCH_URL_YOUTUBE = void 0;
            var r = n("tbWI");

            function o(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, c = !0,
                    u = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        u = !0, i = e
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (u) throw i
                        }
                    }
                }
            }

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var i = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
            t.MATCH_URL_YOUTUBE = i;
            var c = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
            t.MATCH_URL_SOUNDCLOUD = c;
            var u = /vimeo\.com\/.+/;
            t.MATCH_URL_VIMEO = u;
            var l = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
            t.MATCH_URL_FACEBOOK = l;
            var s = /streamable\.com\/([a-z0-9]+)$/;
            t.MATCH_URL_STREAMABLE = s;
            var f = /(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/;
            t.MATCH_URL_WISTIA = f;
            var d = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
            t.MATCH_URL_TWITCH_VIDEO = d;
            var p = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
            t.MATCH_URL_TWITCH_CHANNEL = p;
            var y = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
            t.MATCH_URL_DAILYMOTION = y;
            var v = /mixcloud\.com\/([^/]+\/[^/]+)/;
            t.MATCH_URL_MIXCLOUD = v;
            var h = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-]+)/;
            t.MATCH_URL_VIDYARD = h;
            var b = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
            t.AUDIO_EXTENSIONS = b;
            var m = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
            t.VIDEO_EXTENSIONS = m;
            var g = /\.(m3u8)($|\?)/i;
            t.HLS_EXTENSIONS = g;
            var O = /\.(mpd)($|\?)/i;
            t.DASH_EXTENSIONS = O;
            var _ = /\.(flv)($|\?)/i;
            t.FLV_EXTENSIONS = _;
            var j = {
                youtube: function(e) {
                    return e instanceof Array ? e.every((function(e) {
                        return i.test(e)
                    })) : i.test(e)
                },
                soundcloud: function(e) {
                    return c.test(e) && !b.test(e)
                },
                vimeo: function(e) {
                    return u.test(e) && !m.test(e) && !g.test(e)
                },
                facebook: function(e) {
                    return l.test(e)
                },
                streamable: function(e) {
                    return s.test(e)
                },
                wistia: function(e) {
                    return f.test(e)
                },
                twitch: function(e) {
                    return d.test(e) || p.test(e)
                },
                dailymotion: function(e) {
                    return y.test(e)
                },
                mixcloud: function(e) {
                    return v.test(e)
                },
                vidyard: function(e) {
                    return h.test(e)
                },
                file: function e(t) {
                    if (t instanceof Array) {
                        var n, a = o(t);
                        try {
                            for (a.s(); !(n = a.n()).done;) {
                                var i = n.value;
                                if ("string" === typeof i && e(i)) return !0;
                                if (e(i.src)) return !0
                            }
                        } catch (c) {
                            a.e(c)
                        } finally {
                            a.f()
                        }
                        return !1
                    }
                    return !!(0, r.isMediaStream)(t) || (b.test(t) || m.test(t) || g.test(t) || O.test(t) || _.test(t))
                }
            };
            t.canPlay = j
        },
        oDo3: function(e, t, n) {
            e.exports = {
                container: "BlockImageWithMeters_container__39V46",
                dark: "BlockImageWithMeters_dark__2q2VP",
                inView: "BlockImageWithMeters_inView__1VR4H",
                imageWrapper: "BlockImageWithMeters_imageWrapper__3sXRw",
                image: "BlockImageWithMeters_image__1Svq2",
                metersWrapper: "BlockImageWithMeters_metersWrapper__hmMmu",
                meters: "BlockImageWithMeters_meters__2dTYH",
                meter: "BlockImageWithMeters_meter__BKQjn",
                caption: "BlockImageWithMeters_caption__2j9rw"
            }
        },
        oI91: function(e, t) {
            e.exports = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
        },
        "oJ/v": function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("ZMKu"),
                i = n("wNob"),
                c = n("UEuK"),
                u = n("y94e"),
                l = n("rePB"),
                s = n("wx14"),
                f = n("vbKG"),
                d = n("R8uD"),
                p = n("A4H7"),
                y = n.n(p),
                v = o.a.createElement,
                h = function(e) {
                    var t = e.fields,
                        n = (void 0 === t ? {} : t).text,
                        r = void 0 === n ? "" : n;
                    return v("span", {
                        className: y.a.container
                    }, r)
                },
                b = n("eHS7"),
                m = n("CiMY"),
                g = n.n(m),
                O = o.a.createElement,
                _ = function(e) {
                    var t = e.fields,
                        n = void 0 === t ? {} : t,
                        r = e.gender,
                        o = void 0 === r ? "Men" : r,
                        a = n.text,
                        i = n.url,
                        c = n.womensUrl;
                    return O("a", {
                        href: "Women" === o && c ? c : i,
                        rel: "noreferrer",
                        target: "_blank",
                        className: g.a.container
                    }, a, O(b.a, {
                        className: g.a.arrow,
                        "aria-hidden": "true"
                    }))
                },
                j = n("KsYO"),
                C = n("3WQB"),
                w = n.n(C),
                P = o.a.createElement,
                L = function(e) {
                    var t = e.fields,
                        n = void 0 === t ? {} : t,
                        r = n.slug,
                        o = n.text;
                    return P(j.a, {
                        page: "/".concat(r)
                    }, P("a", {
                        className: w.a.container
                    }, o, P(b.a, {
                        className: w.a.arrow,
                        "aria-hidden": "true"
                    })))
                },
                k = n("TpTL"),
                S = n("uwFg"),
                M = n.n(S),
                E = o.a.createElement,
                x = function(e) {
                    var t = e.fields,
                        n = (void 0 === t ? {} : t).image;
                    return E("span", {
                        className: M.a.imageWrapper
                    }, E(k.a, {
                        useRatio: !1,
                        asset: n
                    }))
                },
                I = o.a.createElement,
                N = {
                    textHighlight: h,
                    textExternalLink: _,
                    textInternalLink: L,
                    textImage: x
                },
                T = function(e) {
                    return console.error("Block type for ".concat(e.sys.id, " not found."), e), I(o.a.Fragment, null)
                },
                R = o.a.createElement,
                D = function(e) {
                    var t, n = e.text,
                        r = e.className,
                        o = e.gender,
                        a = e.tag || "p",
                        i = {
                            renderNode: (t = {}, Object(l.a)(t, f.INLINES.EMBEDDED_ENTRY, (function(e) {
                                var t, n = e.data.target,
                                    r = (null === n || void 0 === n ? void 0 : n.sys).contentType,
                                    a = N[null === r || void 0 === r || null === (t = r.sys) || void 0 === t ? void 0 : t.id] || T;
                                return R(a, Object(s.a)({}, n, {
                                    gender: o
                                }))
                            })), Object(l.a)(t, f.BLOCKS.PARAGRAPH, (function(e, t) {
                                return R(a, {
                                    className: r
                                }, t)
                            })), t)
                        };
                    return Object(d.documentToReactComponents)(n, i)
                },
                A = n("aAZM"),
                B = n("/MKj"),
                V = n("ZpDd"),
                H = function(e) {
                    return {
                        getCategoryPopupContent: function() {
                            return e.appReducer.categoryPopupContent
                        },
                        getAnimateCategoryPopup: function() {
                            return e.appReducer.animateCategoryPopup
                        },
                        toggleCategoryPopup: function() {
                            return e.appReducer.animateCategoryPopup
                        }
                    }
                },
                Z = {
                    toggleCategoryPopup: V.j,
                    setCategoryPopupContent: V.d
                },
                W = function(e) {
                    return Object(B.b)(H, Z)(e)
                },
                G = n("j8vA"),
                U = n.n(G),
                F = o.a.createElement,
                z = W((function(e) {
                    var t = e.getCategoryPopupContent,
                        n = e.getAnimateCategoryPopup,
                        o = e.toggleCategoryPopup,
                        l = e.setCategoryPopupContent,
                        s = t(),
                        f = n(),
                        d = Object(u.a)(f),
                        p = s.fields,
                        y = p.title,
                        v = p.text,
                        h = Object(r.useRef)(),
                        b = Object(r.useRef)();
                    return Object(r.useEffect)((function() {
                        f && !d ? Object(c.b)("hidden") : !f && d && Object(c.b)("initial")
                    }), [f, d]), F("div", {
                        className: Object(i.a)(U.a.container, f && U.a.pointerAll),
                        ref: b
                    }, F(a.b.div, {
                        animate: f ? "open" : "closed",
                        variants: {
                            open: {
                                opacity: 1
                            },
                            closed: {
                                opacity: 0
                            }
                        },
                        transition: {
                            duration: 1,
                            ease: [.16, 1, .3, 1]
                        },
                        onClick: function() {
                            o(!1)
                        },
                        className: U.a.overlay
                    }), F(a.b.div, {
                        className: U.a.content,
                        animate: f ? "open" : "closed",
                        variants: {
                            open: {
                                x: "0"
                            },
                            closed: {
                                x: "110%"
                            }
                        },
                        transition: {
                            duration: 1,
                            ease: [.16, 1, .3, 1]
                        },
                        onAnimationComplete: function() {
                            return !f && l({
                                fields: {
                                    title: "",
                                    text: ""
                                }
                            })
                        },
                        ref: h
                    }, F("div", {
                        className: U.a.inner
                    }, y && F("span", {
                        className: U.a.label
                    }, y), v && F("div", {
                        className: U.a.textWrapper
                    }, F("div", {
                        className: U.a.textInner
                    }, F(D, {
                        className: U.a.text,
                        text: v
                    })))), F("button", {
                        "aria-label": "Close Popup",
                        onClick: function() {
                            o(!1)
                        },
                        className: U.a.closeBtn
                    }, F(A.a, {
                        className: U.a.closeIcon
                    }))))
                })),
                q = n("ODXe"),
                K = n("KQm4"),
                Y = n("a6RD"),
                X = n.n(Y),
                Q = n("xp16"),
                J = n("3bd0"),
                $ = function(e) {
                    return {
                        getOverlayOpen: function() {
                            return e.appReducer.overlayOpen || ""
                        }
                    }
                },
                ee = {
                    setOverlayOpen: V.h
                },
                te = function(e) {
                    return Object(B.b)($, ee)(e)
                },
                ne = o.a.createElement;

            function re(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function oe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? re(Object(n), !0).forEach((function(t) {
                        Object(l.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : re(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ae = X()((function() {
                    return n.e(17).then(n.bind(null, "/OcK"))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["/OcK"]
                        },
                        modules: ["_components/global/ImagesPopUp"]
                    }
                }),
                ie = te((function(e) {
                    var t, n = e.page,
                        o = e.getOverlayOpen,
                        i = e.setOverlayOpen,
                        c = o() || {},
                        u = c.id,
                        l = c.sidebarOpen,
                        s = c.scale,
                        f = u && u.split("__") || [],
                        d = Object(q.a)(f, 2),
                        p = d[0],
                        y = void 0 === p ? "" : p,
                        v = d[1],
                        h = void 0 === v ? -1 : v;
                    h = parseInt(h);
                    var b = (null === n || void 0 === n || null === (t = n.sys) || void 0 === t ? void 0 : t.id) || "",
                        m = Object(r.useMemo)((function() {
                            return function(e, t) {
                                var n = (t || {}).fields,
                                    r = (void 0 === n ? {} : n).layoutBlock,
                                    o = [];
                                return ((void 0 === r ? [] : r) || []).forEach((function(t) {
                                    var n, r = t.fields,
                                        a = null === r || void 0 === r ? void 0 : r.image,
                                        i = (null === r || void 0 === r ? void 0 : r.images) || (null === r || void 0 === r || null === (n = r.blocks) || void 0 === n ? void 0 : n.reduce((function(e, t) {
                                            var n = t.fields,
                                                r = (void 0 === n ? {} : n).images,
                                                o = [];
                                            return (void 0 === r ? [] : r).forEach((function(e) {
                                                var t = e.fields,
                                                    n = (void 0 === t ? {} : t).image;
                                                n && o.push(n)
                                            })), [].concat(Object(K.a)(e), o)
                                        }), []));
                                    if (Array.isArray(i) && i.forEach((function(t) {
                                            var n = Object(J.g)(t).fields.file,
                                                r = (n || {}).contentType;
                                            if (n && "image/png" !== r) {
                                                var a = Object(Q.a)(t);
                                                a && o.push(oe({
                                                    id: "".concat(e, "__").concat(o.length)
                                                }, a))
                                            }
                                        })), a) {
                                        var c = r.image,
                                            u = Object(J.g)(c).fields,
                                            l = (void 0 === u ? {} : u).file,
                                            s = (l || {}).contentType;
                                        if (!l || "image/png" === s) return;
                                        var f = Object(Q.a)(c);
                                        f && o.push(oe({
                                            id: "".concat(e, "__").concat(o.length)
                                        }, f))
                                    }
                                })), o
                            }(b, n)
                        }), [b, n]),
                        g = y && y === b && h >= 0 && m.length > h;
                    return ne(a.a, null, g && ne(ae, {
                        toPrevSlide: function() {
                            h <= 0 || i({
                                id: "".concat(b, "__").concat(h - 1),
                                sidebarOpen: !1
                            })
                        },
                        toNextSlide: function() {
                            h >= m.length - 1 || i({
                                id: "".concat(b, "__").concat(h + 1),
                                sidebarOpen: !1,
                                scale: 1
                            })
                        },
                        activeIndex: h,
                        slides: m,
                        scale: s,
                        defaultSidebarOpen: l
                    }))
                })),
                ce = n("Ff2n"),
                ue = n("ob4f"),
                le = n("o0o1"),
                se = n.n(le),
                fe = n("HaE+"),
                de = n("YoLo"),
                pe = n("DNwj"),
                ye = n("JQml"),
                ve = n("Cap7"),
                he = n("frax"),
                be = n.n(he),
                me = o.a.createElement,
                ge = function(e) {
                    var t = e.className;
                    return me("svg", {
                        className: Object(i.a)(be.a.container, t),
                        viewBox: "0 0 43 41",
                        "aria-labelledby": "logoIconTitle"
                    }, me("title", {
                        id: "logoIconTitle"
                    }, "Logo Mammut"), me("path", {
                        d: "M2.36557 20.3026C2.36557 10.5509 10.3639 2.64287 20.2298 2.64287C27.3774 2.64287 33.541 6.79394 36.3973 12.7887C35.6969 12.9564 35.0328 13.347 34.6607 13.7268L34.8704 14.0706C35.4642 13.8837 36.098 13.7495 36.8566 13.8478C37.6516 15.8484 38.094 18.0252 38.094 20.3038C38.094 20.5326 38.0855 20.7578 38.077 20.983C37.7377 21.0777 37.265 21.1771 36.7997 21.1771C36.6021 21.1771 36.3973 21.1639 36.1889 21.1388C35.3527 21.0358 34.6256 20.5278 34.0439 20.0091C34.0342 19.343 33.9906 16.3025 33.9748 16.2641L30.4895 10.9031L31.1511 10.8168L31.1596 10.7318L29.5333 8.96112L29.5515 8.9108L30.3949 8.58375V8.53224L28.8559 7.88771L28.874 7.82661L29.2558 7.45763L29.2303 7.40492L27.4307 7.09583L27.3192 7.12219L26.6842 7.4744L26.5715 7.49237L24.3126 7.28632L24.2592 7.3546C24.2689 7.39653 24.338 7.63733 24.3465 7.69843C24.355 7.75833 24.3816 7.956 24.3816 7.98115L24.338 8.03387L23.1128 8.17164L23.0607 8.23154L22.1663 9.8129L22.096 9.8728C22.0621 9.88957 13.676 12.3299 13.6105 12.3419C13.5451 12.3539 13.4675 12.4066 13.3766 12.4701C13.2845 12.5348 6.1151 18.0755 6.08965 18.1102L6.02906 18.23L4.88263 21.7438L5.5019 22.0433L6.17448 20.8345L6.34293 21.3928L6.3599 21.5305C6.35384 21.5617 5.13833 26.4471 4.55179 28.7652C3.15814 26.2518 2.36557 23.3683 2.36557 20.3026ZM39.713 13.849C41.5332 15.047 42.1307 16.7553 42.1016 18.2157C42.0689 19.8402 41.4339 21.3125 40.0536 22.3799C38.157 23.8463 35.755 23.5671 34.2572 22.9394C32.7278 22.2984 31.1427 20.7842 30.2471 19.3801C30.1392 18.4768 31.3487 17.4406 31.8577 18.0575C32.3436 18.6457 33.1265 19.6281 33.4476 19.9408C34.2426 20.7123 35.1128 21.3628 36.1441 21.4898C40.4789 22.0217 41.7938 17.2764 39.4137 14.8062C38.157 13.5027 36.5694 13.2775 35.2049 13.686C36.5731 12.5719 38.6078 13.1218 39.713 13.849ZM28.9346 12.8858L28.9758 12.7911L29.3321 12.7528L29.6811 12.9564L29.7272 13.0619L29.663 13.1338L29.4 13.3242L28.9346 12.8858ZM25.459 13.958L25.3184 14.1748L24.5828 13.4656L24.5864 11.4961L24.6822 11.3943L26.1655 11.7057L26.2491 11.8519L26.3327 12.1418L24.9645 11.7441L24.9318 13.3434L25.459 13.958ZM20.2298 37.9635C14.4964 37.9635 9.39806 35.2896 6.12964 31.1385L8.1462 31.1373L7.92685 29.526L10.6317 24.2404C10.6317 24.2404 12.8604 24.5411 12.9149 24.5615L12.8507 24.8071L10.839 24.6909L9.54833 27.1563L9.12418 31.1433L13.7353 31.1421L12.9089 29.2888L13.9486 25.5905L15.2029 25.5953L15.5859 26.1524L16.456 25.6744L16.759 26.2219L17.8654 25.7703L17.0898 31.1385H21.0272L20.7497 29.5631L21.8937 26.9862L19.6602 24.8861L19.7814 23.5456L20.0443 23.4377L20.0698 24.6489L22.3469 26.7886L22.1991 31.1397H27.3701L26.4491 29.7272C26.4406 29.6925 25.4505 24.1949 25.459 24.0919C25.4675 23.9876 26.5363 19.8222 26.5715 19.7707L27.6234 19.2555C27.667 19.2711 29.257 21.1016 29.3188 21.1112C29.3782 21.1196 29.9005 20.6212 29.9453 20.6129L30.744 21.4023L28.05 24.8813L29.623 27.6224L29.9102 26.6867L31.1802 26.9623L29.7405 24.9868L33.0138 22.7106L33.0332 22.6854C33.3871 22.9154 33.7518 23.1155 34.1214 23.27C34.9492 23.6162 35.8993 23.8067 36.8009 23.8067C37.0542 23.8067 37.4953 23.766 37.7583 23.7348C36.1392 31.8429 28.9092 37.9635 20.2298 37.9635ZM20.231 40.3008C30.6119 40.3008 39.164 32.5725 40.3262 22.6183C41.7223 21.5161 42.4615 19.9947 42.4615 18.2145C42.4615 16.9278 42.0192 14.9391 39.913 13.5519C39.6682 13.3901 39.4004 13.2488 39.1216 13.129C36.2047 5.62709 28.8474 0.300781 20.231 0.300781C9.05873 0.300781 0 9.25583 0 20.3002C0 31.3469 9.05873 40.3008 20.231 40.3008Z"
                    }))
                },
                Oe = function(e) {
                    return {
                        getShowIntro: function() {
                            return e.appReducer.showIntro
                        }
                    }
                },
                _e = {
                    toggleIntro: V.k,
                    setIntroHasStarted: V.f
                },
                je = function(e) {
                    return Object(B.b)(Oe, _e)(e)
                },
                Ce = n("xL8b"),
                we = n.n(Ce),
                Pe = o.a.createElement,
                Le = je((function(e) {
                    var t = e.fields,
                        n = void 0 === t ? {} : t,
                        o = e.getShowIntro,
                        c = e.toggleIntro,
                        u = e.setIntroHasStarted,
                        l = n.title,
                        s = n.images,
                        f = Object(r.useState)(-1),
                        d = f[0],
                        p = f[1],
                        y = o(),
                        v = Object(a.c)(),
                        h = Object(a.c)(),
                        b = Object(r.useRef)(!1);
                    Object(r.useEffect)((function() {
                        v.set({
                            scale: .85,
                            y: "-50%"
                        }), h.set({
                            opacity: 1
                        })
                    }), [v, h]);
                    var m = Object(r.useCallback)(Object(fe.a)(se.a.mark((function e() {
                            var t, n, r;
                            return se.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (y) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        t = s.length - 4, n = s.length - 1, r = 0;
                                    case 5:
                                        if (!(r <= s.length)) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.next = 8, Object(pe.a)(500);
                                    case 8:
                                        p(r), r === t && (u(!0), v.start({
                                            scale: 1,
                                            y: "-50%",
                                            transition: {
                                                duration: 4.1,
                                                ease: ve.a
                                            }
                                        })), r === n && h.start({
                                            opacity: 0,
                                            transition: {
                                                duration: 1,
                                                ease: ve.a
                                            }
                                        });
                                    case 11:
                                        r++, e.next = 5;
                                        break;
                                    case 14:
                                        window.scrollTo(0, 0), c(!1);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [y, s, v, h, c]),
                        g = Object(de.a)([ye.a.whyteInktrapBook]),
                        O = Object(r.useRef)(0),
                        _ = Object(r.useState)(!1),
                        j = _[0],
                        C = _[1],
                        w = Object(r.useCallback)((function() {
                            j || (O.current++, O.current >= s.length && C(!0))
                        }), [s, j]);
                    return Object(r.useEffect)((function() {
                        var e = g && j;
                        !b.current && e && (b.current = !0, m())
                    }), [g, j]), y && Pe("div", {
                        className: we.a.introContainer
                    }, Pe(a.b.div, {
                        animate: h,
                        className: we.a.logoWrapper
                    }, Pe(ge, {
                        className: we.a.logo
                    })), Pe(a.b.div, {
                        animate: v,
                        className: we.a.titleWrapper
                    }, Pe("h1", {
                        className: Object(i.a)(we.a.title, g && we.a.fontLoaded)
                    }, l)), s.map((function(e, t) {
                        var n;
                        return Pe("div", {
                            key: null === e || void 0 === e || null === (n = e.sys) || void 0 === n ? void 0 : n.id,
                            className: Object(i.a)(we.a.imageWrapper, we.a["imageWrapper" + t], t === d && we.a.show)
                        }, Pe(k.a, {
                            onLoad: w,
                            useRatio: !1,
                            asset: e
                        }))
                    })))
                })),
                ke = n("2D6l"),
                Se = function(e, t) {
                    return Object(ke.a)(Object(ke.e)(e, [0, 100], t), 0, 100)
                },
                Me = n("ASWg"),
                Ee = n("bbAf"),
                xe = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        o = Object(r.useCallback)(e, t),
                        a = Object(r.useRef)(null),
                        i = Object(r.useRef)([0, 0]);
                    return Object(Ee.a)((function() {
                        var e = a.current,
                            t = Object(ke.c)(e).top,
                            n = e.offsetHeight,
                            r = window.innerHeight;
                        i.current = [t - r, t + n]
                    }), []), Object(Me.a)({
                        onAnimationFrame: Object(r.useCallback)((function(e) {
                            var t = Se(i.current, e);
                            o(t)
                        }), [o]),
                        active: n
                    }), a
                },
                Ie = n("xAw8"),
                Ne = n("zLfV"),
                Te = n("YVhj"),
                Re = n("9NXD"),
                De = n("7Bdg"),
                Ae = n("wix9"),
                Be = n("FpTa"),
                Ve = n.n(Be),
                He = o.a.createElement,
                Ze = function(e) {
                    var t, n, a, c, u, l, s, f, d, p, y, v, h = e.className,
                        b = e.asset,
                        m = e.hideControls,
                        g = e.isAutoPlay,
                        O = void 0 === g || g,
                        _ = e.hasLoadingState,
                        j = void 0 === _ || _,
                        C = Object(Re.a)("General"),
                        w = null === b || void 0 === b || null === (t = b.fields) || void 0 === t || null === (n = t.asset) || void 0 === n || null === (a = n.fields) || void 0 === a || null === (c = a.file) || void 0 === c ? void 0 : c.url,
                        P = null === b || void 0 === b || null === (u = b.fields) || void 0 === u || null === (l = u.asset) || void 0 === l || null === (s = l.fields) || void 0 === s || null === (f = s.file) || void 0 === f ? void 0 : f.contentType,
                        L = null === b || void 0 === b || null === (d = b.fields) || void 0 === d || null === (p = d.asset) || void 0 === p || null === (y = p.fields) || void 0 === y ? void 0 : y.title,
                        S = null === b || void 0 === b || null === (v = b.fields) || void 0 === v ? void 0 : v.poster,
                        M = Object(r.useState)(""),
                        E = M[0],
                        x = M[1],
                        I = Object(r.useState)(!1),
                        N = I[0],
                        T = I[1],
                        R = Object(r.useState)(!1),
                        D = R[0],
                        A = R[1],
                        B = Object(r.useState)(!1),
                        V = B[0],
                        H = B[1],
                        Z = Object(r.useRef)(),
                        W = Object(ue.a)(),
                        G = Object(q.a)(W, 2),
                        U = G[0],
                        F = G[1],
                        z = Object(ue.a)({
                            triggerOnce: !0,
                            rootMargin: "2000px"
                        }),
                        K = Object(q.a)(z, 2),
                        Y = K[0],
                        X = K[1],
                        Q = Object(r.useCallback)((function(e) {
                            Z.current = e, Y(e)
                        }), [Y]),
                        $ = Object(r.useRef)(!1);
                    Object(r.useEffect)((function() {
                        return function() {
                            return $.current = !1
                        }
                    }), []), Object(r.useEffect)((function() {
                        X && !N && ($.current = !0, Object(J.a)("".concat(w, "#t=0.1"), (function(e) {
                            $.current && (x(e), Z.current.load(), $.current = !1)
                        }))), N && !V && O && (F ? (Z.current.play(), A(!0)) : (Z.current.pause(), A(!1)))
                    }), [X, w, N, F, Z, V, O]);
                    var ee = Object(r.useCallback)((function() {
                            D ? Z.current.pause() : Z.current.play(), H(!V), A(!D)
                        }), [D, Z, V]),
                        te = j && !N && F;
                    return He("div", {
                        ref: U,
                        className: Object(i.a)(Ve.a.container, h, te && Ve.a.hasLoadingState)
                    }, He("video", {
                        ref: Q,
                        className: Ve.a.video,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                        title: L,
                        preload: "metadata",
                        onLoadedMetadata: function() {
                            T(!0)
                        },
                        key: w
                    }, He("source", {
                        src: E,
                        type: P
                    }), S && He(k.a, {
                        asset: S
                    })), O && He("button", {
                        type: "button",
                        className: Ve.a.audioControlButton,
                        onClick: ee
                    }, !m && (D ? He(o.a.Fragment, null, He(De.a, {
                        className: Ve.a.audioControlIcon
                    }), He("span", {
                        className: "screen-reader-only"
                    }, C("PauseVideo"))) : He(o.a.Fragment, null, He(Ae.a, {
                        className: Object(i.a)(Ve.a.audioControlIcon, Ve.a.isPlayIcon)
                    }), He("span", {
                        className: "screen-reader-only"
                    }, C("PlayVideo"))))))
                },
                We = n("afiy"),
                Ge = n("cbz1"),
                Ue = n.n(Ge),
                Fe = o.a.createElement,
                ze = function(e) {
                    var t = e.fields,
                        n = t.theme,
                        o = t.orientation,
                        a = t.images,
                        c = void 0 === a ? [] : a,
                        u = t.caption,
                        l = t.audio,
                        f = e.inView,
                        d = e.getPopupIndex,
                        p = e.uid,
                        y = e.setOverlayOpen,
                        v = Object(Ie.a)(),
                        h = Object(Ne.a)(),
                        b = Object(r.useRef)([{
                            current: null
                        }, {
                            current: null
                        }]),
                        m = "portrait" === o ? 133.333 : 75,
                        g = Object(r.useRef)([1, 1]),
                        O = xe((function(e) {
                            var t = v(e),
                                n = Object(q.a)(t, 2),
                                r = n[0];
                            if (r !== n[1]) {
                                var o = .01 * r,
                                    a = m * (h ? .002 : 6e-4);
                                g.current = [1 + o * a, 1 + a - o * a], b.current.forEach((function(e, t) {
                                    e.current && (e.current.style.transform = "scale(".concat(g.current[t], ")"))
                                }))
                            }
                        }), [h], f);
                    return Fe("figure", {
                        className: Object(i.a)(Ue.a.container, "dark" === n && Ue.a.isDark, f && Ue.a.inView),
                        ref: O
                    }, Fe("div", {
                        className: Ue.a.images
                    }, c && c.map((function(e, t) {
                        var n, r = null === e || void 0 === e || null === (n = e.fields) || void 0 === n ? void 0 : n.image,
                            o = 0 === t,
                            a = t === c.length - 1;
                        return Fe("div", {
                            className: Ue.a.imageWrapper,
                            key: e.sys.id
                        }, Fe("div", {
                            className: Ue.a.mask
                        }, r ? Fe(Te.a, {
                            ref: b.current[t],
                            className: Object(i.a)(Ue.a.image, f ? Ue.a.inView : null),
                            asset: e,
                            useRatio: !1,
                            opensOverlay: !0,
                            getPopupIndex: d,
                            setOverlayOpen: y,
                            uid: p,
                            getScale: function() {
                                return function(e) {
                                    return g.current[e]
                                }(t)
                            },
                            scale: g.current[t]
                        }) : Fe(Ze, {
                            asset: e
                        })), !h && o && l && Fe(We.a, Object(s.a)({
                            x: "calc(100% - 5.6rem)",
                            y: "10%"
                        }, l)), h && a && l && Fe(We.a, Object(s.a)({
                            x: "1.5rem",
                            y: "-5rem"
                        }, l)))
                    }))), u && Fe("figcaption", {
                        className: Object(i.a)(Ue.a.caption, "portrait" === o && Ue.a.isCenter)
                    }, u))
                },
                qe = function(e) {
                    var t = e.inView,
                        n = e.desktopOnly,
                        o = Object(r.useRef)(null),
                        a = Object(r.useRef)(!1),
                        i = Object(r.useRef)(0),
                        c = Object(Ie.a)();
                    Object(Ee.a)((function() {
                        a.current = s.current.offsetHeight - o.current.offsetHeight, i.current = window.innerHeight
                    }), []);
                    var u = Object(Ne.a)(),
                        l = t && (n && !u || !n);
                    Object(r.useEffect)((function() {
                        u && n && (o.current.style.transform = "")
                    }), [u, n]);
                    var s = xe((function(e) {
                        var t = Object(ke.e)([0, 100], [0, a.current], e),
                            n = c(t),
                            r = Object(q.a)(n, 2),
                            i = r[0];
                        i !== r[1] && (o.current.style.transform = "translate3d(0, ".concat(i, "px, 0)"))
                    }), [], l);
                    return [s, o]
                },
                Ke = n("8pX6"),
                Ye = n("dMWq"),
                Xe = n.n(Ye),
                Qe = o.a.createElement,
                Je = function(e) {
                    var t = e.difficulty,
                        n = e.activeColor,
                        o = (Ke.a[n] || {}).backgroundColor,
                        a = Object(ue.a)(),
                        c = Object(q.a)(a, 2),
                        u = c[0],
                        l = c[1],
                        s = Math.round(62 * t),
                        f = Object(r.useRef)(null),
                        d = Object(r.useRef)([0, 0]),
                        p = Object(r.useRef)(null),
                        y = Object(r.useRef)(null),
                        v = Object(r.useRef)(null),
                        h = Object(r.useRef)(0),
                        b = Object(r.useRef)(!1);
                    Object(Ee.a)((function() {
                        var e = window.innerHeight,
                            t = f.current,
                            n = Object(ke.c)(t).top,
                            r = t.getBoundingClientRect().height,
                            o = n + r - e;
                        d.current = [o + r / 2, o + 2 * r]
                    }), []), Object(r.useEffect)((function() {
                        l || (b.current = !1)
                    }), [l]), Object(Me.a)({
                        onAnimationFrame: Object(r.useCallback)((function(e) {
                            var t, n, r, o = h.current;
                            if (h.current = Math.round(Object(ke.a)(Object(ke.e)(d.current, [0, s], e), 0, s)), o !== h.current) {
                                for (var a = (null === (t = p.current) || void 0 === t ? void 0 : t.childNodes) || [], i = (null === (n = y.current) || void 0 === n ? void 0 : n.childNodes) || [], c = (null === (r = v.current) || void 0 === r ? void 0 : r.childNodes) || [], u = 0; u < a.length; u++) a[u].style.opacity = u < h.current ? 0 : "";
                                for (var l = 0; l < i.length; l++) i[l].style.opacity = l < h.current ? 1 : "";
                                for (var f = 0; f < c.length; f++) c[f].style.opacity = f === h.current - 1 ? 1 : ""
                            }
                        }), [h, p, y, v, s]),
                        active: l
                    });
                    var m = Object(r.useCallback)((function(e) {
                        f.current = e, u(e)
                    }), [f, u]);
                    return Qe("svg", {
                        ref: m,
                        viewBox: "0 0 244.6 216"
                    }, Qe("g", {
                        ref: p,
                        className: Object(i.a)(Xe.a.group, Xe.a.default)
                    }, Qe("path", {
                        d: "M61.3 195.4L50.6 208C50.1 207.6 49.5 207.1 49 206.6L59.7 194C60.2 194.5 60.7 195 61.3 195.4Z"
                    }), Qe("path", {
                        d: "M53.8 189.3L42.2 201C42.7 201.5 43.2 202 43.7 202.5L55.4 190.8C54.8 190.3 54.3 189.8 53.8 189.3Z"
                    }), Qe("path", {
                        d: "M48.8 183.7L36.2 194.4C36.7 194.9 37.1 195.5 37.6 196L50.2 185.3C49.7 184.8 49.2 184.3 48.8 183.7Z"
                    }), Qe("path", {
                        d: "M44.2 177.8L30.8 187.5C31.2 188.1 31.6 188.6 32 189.2L45.4 179.5C45 178.9 44.6 178.3 44.2 177.8Z"
                    }), Qe("path", {
                        d: "M40.1 171.5L26 180.1C26.4 180.7 26.7 181.3 27.1 181.9L41.2 173.3C40.8 172.7 40.4 172.1 40.1 171.5Z"
                    }), Qe("path", {
                        d: "M36.5 164.9L21.8 172.4C22.1 173 22.4 173.7 22.8 174.3L37.5 166.8C37.1 166.1 36.8 165.5 36.5 164.9Z"
                    }), Qe("path", {
                        d: "M33.4 158L18.1 164.3C18.4 164.9 18.6 165.6 18.9 166.2L34.2 159.9C33.9 159.3 33.7 158.7 33.4 158Z"
                    }), Qe("path", {
                        d: "M30.9 150.9L15.1 156C15.3 156.7 15.5 157.3 15.7 158L31.4 152.9C31.3 152.3 31.1 151.6 30.9 150.9Z"
                    }), Qe("path", {
                        d: "M28.9 143.7L12.8 147.6C13 148.3 13.1 149 13.3 149.6L29.4 145.7C29.2 145 29.1 144.3 28.9 143.7Z"
                    }), Qe("path", {
                        d: "M27.5 136.3L11.2 138.9C11.3 139.6 11.4 140.3 11.5 141L27.8 138.4C27.7 137.6 27.6 137 27.5 136.3Z"
                    }), Qe("path", {
                        d: "M26.7 128.8L10.2 130.1C10.2 130.8 10.3 131.5 10.4 132.2L26.9 130.9C26.8 130.2 26.8 129.5 26.7 128.8Z"
                    }), Qe("path", {
                        d: "M26.5 122.3C26.5 121.9 26.5 121.6 26.5 121.3H10C10 121.7 10 122 10 122.3C10 122.7 10 123 10 123.4H26.5C26.5 123 26.5 122.7 26.5 122.3Z"
                    }), Qe("path", {
                        d: "M26.9 113.8L10.4 112.5C10.3 113.2 10.3 113.9 10.2 114.6L26.7 115.9C26.8 115.1 26.8 114.4 26.9 113.8Z"
                    }), Qe("path", {
                        d: "M27.9 106.3L11.6 103.7C11.5 104.4 11.4 105.1 11.3 105.8L27.6 108.4C27.6 107.7 27.7 107 27.9 106.3Z"
                    }), Qe("path", {
                        d: "M29.4 98.9L13.3 95C13.1 95.7 13 96.4 12.8 97L28.9 100.9C29.1 100.3 29.2 99.6 29.4 98.9Z"
                    }), Qe("path", {
                        d: "M31.5 91.7L15.8 86.6C15.6 87.3 15.4 87.9 15.2 88.6L30.9 93.7C31.1 93 31.3 92.4 31.5 91.7Z"
                    }), Qe("path", {
                        d: "M34.2 84.7L18.9 78.4C18.6 79 18.4 79.7 18.1 80.3L33.4 86.6C33.7 86 33.9 85.3 34.2 84.7Z"
                    }), Qe("path", {
                        d: "M37.4 77.9L22.7 70.4C22.4 71 22.1 71.6 21.7 72.3L36.4 79.8C36.8 79.1 37.1 78.5 37.4 77.9Z"
                    }), Qe("path", {
                        d: "M41.2 71.4L27.1 62.8C26.7 63.4 26.4 64 26 64.6L40.1 73.2C40.4 72.6 40.8 72 41.2 71.4Z"
                    }), Qe("path", {
                        d: "M45.4 65.2L32 55.5C31.6 56.1 31.2 56.6 30.8 57.2L44.2 66.9C44.6 66.3 45 65.7 45.4 65.2Z"
                    }), Qe("path", {
                        d: "M50.2 59.3L37.6 48.6C37.1 49.1 36.7 49.7 36.2 50.2L48.8 60.9C49.2 60.4 49.7 59.8 50.2 59.3Z"
                    }), Qe("path", {
                        d: "M55.3 53.8L43.6 42.2C43.1 42.7 42.6 43.2 42.1 43.7L53.8 55.4C54.3 54.8 54.8 54.3 55.3 53.8Z"
                    }), Qe("path", {
                        d: "M60.9 48.8L50.2 36.2C49.7 36.7 49.1 37.1 48.6 37.6L59.3 50.2C59.8 49.7 60.4 49.2 60.9 48.8Z"
                    }), Qe("path", {
                        d: "M66.9 44.2L57.2 30.8C56.6 31.2 56.1 31.6 55.5 32L65.2 45.4C65.7 45 66.3 44.6 66.9 44.2Z"
                    }), Qe("path", {
                        d: "M73.2 40.1L64.5 26C63.9 26.4 63.3 26.7 62.7 27.1L71.3 41.2C72 40.8 72.6 40.4 73.2 40.1Z"
                    }), Qe("path", {
                        d: "M79.8 36.5L72.3 21.8C71.7 22.1 71 22.4 70.4 22.8L77.9 37.5C78.5 37.1 79.1 36.8 79.8 36.5Z"
                    }), Qe("path", {
                        d: "M86.6 33.4L80.3 18.1C79.7 18.4 79 18.6 78.4 18.9L84.7 34.2C85.3 33.9 86 33.7 86.6 33.4Z"
                    }), Qe("path", {
                        d: "M93.7 30.9L88.6 15.2C87.9 15.4 87.3 15.6 86.6 15.8L91.7 31.5C92.4 31.3 93 31.1 93.7 30.9Z"
                    }), Qe("path", {
                        d: "M101 28.9L97.1 12.8C96.4 13 95.7 13.1 95.1 13.3L99 29.4C99.6 29.2 100.3 29.1 101 28.9Z"
                    }), Qe("path", {
                        d: "M108.4 27.5L105.8 11.2C105.1 11.3 104.4 11.4 103.7 11.5L106.3 27.8C107 27.7 107.7 27.6 108.4 27.5Z"
                    }), Qe("path", {
                        d: "M115.8 26.7L114.5 10.2C113.8 10.2 113.1 10.3 112.4 10.4L113.7 26.9C114.4 26.8 115.1 26.8 115.8 26.7Z"
                    }), Qe("path", {
                        d: "M122.3 26.5C122.7 26.5 123 26.5 123.4 26.5V10C123 10 122.7 10 122.3 10C121.9 10 121.6 10 121.3 10V26.5C121.6 26.5 122 26.5 122.3 26.5Z"
                    }), Qe("path", {
                        d: "M130.9 26.9L132.2 10.4C131.5 10.3 130.8 10.3 130.1 10.2L128.8 26.7C129.5 26.8 130.2 26.8 130.9 26.9Z"
                    }), Qe("path", {
                        d: "M138.3 27.9L140.9 11.6C140.2 11.5 139.5 11.4 138.8 11.3L136.2 27.6C137 27.6 137.6 27.7 138.3 27.9Z"
                    }), Qe("path", {
                        d: "M145.7 29.4L149.6 13.3C148.9 13.1 148.2 13 147.6 12.8L143.7 28.9C144.3 29.1 145 29.2 145.7 29.4Z"
                    }), Qe("path", {
                        d: "M152.9 31.5L158 15.8C157.3 15.6 156.7 15.4 156 15.2L150.9 30.9C151.6 31.1 152.3 31.3 152.9 31.5Z"
                    }), Qe("path", {
                        d: "M159.9 34.2L166.2 18.9C165.6 18.6 164.9 18.4 164.3 18.1L158 33.4C158.7 33.7 159.3 33.9 159.9 34.2Z"
                    }), Qe("path", {
                        d: "M166.7 37.4L174.2 22.7C173.6 22.4 173 22.1 172.3 21.7L164.8 36.4C165.5 36.8 166.1 37.1 166.7 37.4Z"
                    }), Qe("path", {
                        d: "M173.3 41.2L181.9 27.1C181.3 26.7 180.7 26.4 180.1 26L171.5 40.1C172.1 40.4 172.7 40.8 173.3 41.2Z"
                    }), Qe("path", {
                        d: "M179.5 45.4L189.2 32C188.6 31.6 188.1 31.2 187.5 30.8L177.8 44.2C178.3 44.6 178.9 45 179.5 45.4Z"
                    }), Qe("path", {
                        d: "M185.3 50.2L196 37.6C195.5 37.1 194.9 36.7 194.4 36.2L183.7 48.8C184.3 49.2 184.8 49.7 185.3 50.2Z"
                    }), Qe("path", {
                        d: "M190.8 55.3L202.5 43.6C202 43.1 201.5 42.6 201 42.1L189.3 53.8C189.8 54.3 190.3 54.8 190.8 55.3Z"
                    }), Qe("path", {
                        d: "M195.8 60.9L208.4 50.2C208 49.7 207.5 49.1 207 48.6L194.4 59.3C194.9 59.8 195.4 60.4 195.8 60.9Z"
                    }), Qe("path", {
                        d: "M200.4 66.9L213.8 57.2C213.4 56.6 213 56.1 212.6 55.5L199.2 65.2C199.6 65.7 200 66.3 200.4 66.9Z"
                    }), Qe("path", {
                        d: "M204.5 73.2L218.6 64.6C218.2 64 217.9 63.4 217.5 62.8L203.4 71.4C203.8 72 204.2 72.6 204.5 73.2Z"
                    }), Qe("path", {
                        d: "M208.2 79.8L222.9 72.3C222.6 71.7 222.3 71 221.9 70.4L207.2 77.9C207.5 78.5 207.8 79.1 208.2 79.8Z"
                    }), Qe("path", {
                        d: "M211.2 86.6L226.5 80.3C226.2 79.7 226 79 225.7 78.4L210.4 84.7C210.7 85.3 211 86 211.2 86.6Z"
                    }), Qe("path", {
                        d: "M213.8 93.7L229.5 88.6C229.3 87.9 229.1 87.3 228.9 86.6L213.2 91.7C213.3 92.4 213.6 93 213.8 93.7Z"
                    }), Qe("path", {
                        d: "M215.7 101L231.8 97.1C231.6 96.4 231.5 95.7 231.3 95.1L215.2 99C215.4 99.6 215.6 100.3 215.7 101Z"
                    }), Qe("path", {
                        d: "M217.1 108.4L233.4 105.8C233.3 105.1 233.2 104.4 233.1 103.7L216.8 106.3C216.9 107 217 107.7 217.1 108.4Z"
                    }), Qe("path", {
                        d: "M217.9 115.8L234.4 114.5C234.4 113.8 234.3 113.1 234.2 112.4L217.7 113.7C217.8 114.4 217.8 115.1 217.9 115.8Z"
                    }), Qe("path", {
                        d: "M234.6 121.3H218.1C218.1 121.7 218.1 122 218.1 122.3C218.1 122.7 218.1 123 218.1 123.4H234.6C234.6 123 234.6 122.7 234.6 122.3C234.6 122 234.6 121.6 234.6 121.3Z"
                    }), Qe("path", {
                        d: "M217.7 130.9L234.2 132.2C234.3 131.5 234.3 130.8 234.4 130.1L217.9 128.8C217.8 129.5 217.8 130.2 217.7 130.9Z"
                    }), Qe("path", {
                        d: "M216.8 138.3L233.1 140.9C233.2 140.2 233.3 139.5 233.4 138.8L217.1 136.2C217 137 216.9 137.6 216.8 138.3Z"
                    }), Qe("path", {
                        d: "M215.2 145.7L231.3 149.6C231.5 148.9 231.6 148.2 231.8 147.6L215.7 143.7C215.6 144.3 215.4 145 215.2 145.7Z"
                    }), Qe("path", {
                        d: "M213.1 152.9L228.8 158C229 157.3 229.2 156.7 229.4 156L213.7 150.9C213.6 151.6 213.3 152.3 213.1 152.9Z"
                    }), Qe("path", {
                        d: "M210.4 159.9L225.7 166.2C226 165.6 226.2 164.9 226.5 164.3L211.2 158C211 158.7 210.7 159.3 210.4 159.9Z"
                    }), Qe("path", {
                        d: "M207.2 166.7L221.9 174.2C222.2 173.6 222.5 173 222.9 172.3L208.2 164.8C207.8 165.5 207.5 166.1 207.2 166.7Z"
                    }), Qe("path", {
                        d: "M203.4 173.3L217.5 181.9C217.9 181.3 218.2 180.7 218.6 180.1L204.5 171.5C204.2 172.1 203.8 172.7 203.4 173.3Z"
                    }), Qe("path", {
                        d: "M199.2 179.5L212.6 189.2C213 188.6 213.4 188.1 213.8 187.5L200.4 177.8C200 178.3 199.6 178.9 199.2 179.5Z"
                    }), Qe("path", {
                        d: "M194.5 185.3L207.1 196C207.6 195.5 208 194.9 208.5 194.4L195.9 183.7C195.4 184.3 194.9 184.8 194.5 185.3Z"
                    }), Qe("path", {
                        d: "M189.3 190.8L201 202.5C201.5 202 202 201.5 202.5 201L190.8 189.3C190.3 189.8 189.8 190.3 189.3 190.8Z"
                    }), Qe("path", {
                        d: "M183.7 195.8L194.4 208.4C194.9 208 195.5 207.5 196 207L185.3 194.4C184.8 194.9 184.3 195.4 183.7 195.8Z"
                    })), Qe("g", {
                        ref: y,
                        style: {
                            fill: o
                        },
                        className: Object(i.a)(Xe.a.group, Xe.a.active)
                    }, Qe("path", {
                        d: "M61.3 195.4L50.6 208C50.1 207.6 49.5 207.1 49 206.6L59.7 194C60.2 194.5 60.7 195 61.3 195.4Z"
                    }), Qe("path", {
                        d: "M53.8 189.3L42.2 201C42.7 201.5 43.2 202 43.7 202.5L55.4 190.8C54.8 190.3 54.3 189.8 53.8 189.3Z"
                    }), Qe("path", {
                        d: "M48.8 183.7L36.2 194.4C36.7 194.9 37.1 195.5 37.6 196L50.2 185.3C49.7 184.8 49.2 184.3 48.8 183.7Z"
                    }), Qe("path", {
                        d: "M44.2 177.8L30.8 187.5C31.2 188.1 31.6 188.6 32 189.2L45.4 179.5C45 178.9 44.6 178.3 44.2 177.8Z"
                    }), Qe("path", {
                        d: "M40.1 171.5L26 180.1C26.4 180.7 26.7 181.3 27.1 181.9L41.2 173.3C40.8 172.7 40.4 172.1 40.1 171.5Z"
                    }), Qe("path", {
                        d: "M36.5 164.9L21.8 172.4C22.1 173 22.4 173.7 22.8 174.3L37.5 166.8C37.1 166.1 36.8 165.5 36.5 164.9Z"
                    }), Qe("path", {
                        d: "M33.4 158L18.1 164.3C18.4 164.9 18.6 165.6 18.9 166.2L34.2 159.9C33.9 159.3 33.7 158.7 33.4 158Z"
                    }), Qe("path", {
                        d: "M30.9 150.9L15.1 156C15.3 156.7 15.5 157.3 15.7 158L31.4 152.9C31.3 152.3 31.1 151.6 30.9 150.9Z"
                    }), Qe("path", {
                        d: "M28.9 143.7L12.8 147.6C13 148.3 13.1 149 13.3 149.6L29.4 145.7C29.2 145 29.1 144.3 28.9 143.7Z"
                    }), Qe("path", {
                        d: "M27.5 136.3L11.2 138.9C11.3 139.6 11.4 140.3 11.5 141L27.8 138.4C27.7 137.6 27.6 137 27.5 136.3Z"
                    }), Qe("path", {
                        d: "M26.7 128.8L10.2 130.1C10.2 130.8 10.3 131.5 10.4 132.2L26.9 130.9C26.8 130.2 26.8 129.5 26.7 128.8Z"
                    }), Qe("path", {
                        d: "M26.5 122.3C26.5 121.9 26.5 121.6 26.5 121.3H10C10 121.7 10 122 10 122.3C10 122.7 10 123 10 123.4H26.5C26.5 123 26.5 122.7 26.5 122.3Z"
                    }), Qe("path", {
                        d: "M26.9 113.8L10.4 112.5C10.3 113.2 10.3 113.9 10.2 114.6L26.7 115.9C26.8 115.1 26.8 114.4 26.9 113.8Z"
                    }), Qe("path", {
                        d: "M27.9 106.3L11.6 103.7C11.5 104.4 11.4 105.1 11.3 105.8L27.6 108.4C27.6 107.7 27.7 107 27.9 106.3Z"
                    }), Qe("path", {
                        d: "M29.4 98.9L13.3 95C13.1 95.7 13 96.4 12.8 97L28.9 100.9C29.1 100.3 29.2 99.6 29.4 98.9Z"
                    }), Qe("path", {
                        d: "M31.5 91.7L15.8 86.6C15.6 87.3 15.4 87.9 15.2 88.6L30.9 93.7C31.1 93 31.3 92.4 31.5 91.7Z"
                    }), Qe("path", {
                        d: "M34.2 84.7L18.9 78.4C18.6 79 18.4 79.7 18.1 80.3L33.4 86.6C33.7 86 33.9 85.3 34.2 84.7Z"
                    }), Qe("path", {
                        d: "M37.4 77.9L22.7 70.4C22.4 71 22.1 71.6 21.7 72.3L36.4 79.8C36.8 79.1 37.1 78.5 37.4 77.9Z"
                    }), Qe("path", {
                        d: "M41.2 71.4L27.1 62.8C26.7 63.4 26.4 64 26 64.6L40.1 73.2C40.4 72.6 40.8 72 41.2 71.4Z"
                    }), Qe("path", {
                        d: "M45.4 65.2L32 55.5C31.6 56.1 31.2 56.6 30.8 57.2L44.2 66.9C44.6 66.3 45 65.7 45.4 65.2Z"
                    }), Qe("path", {
                        d: "M50.2 59.3L37.6 48.6C37.1 49.1 36.7 49.7 36.2 50.2L48.8 60.9C49.2 60.4 49.7 59.8 50.2 59.3Z"
                    }), Qe("path", {
                        d: "M55.3 53.8L43.6 42.2C43.1 42.7 42.6 43.2 42.1 43.7L53.8 55.4C54.3 54.8 54.8 54.3 55.3 53.8Z"
                    }), Qe("path", {
                        d: "M60.9 48.8L50.2 36.2C49.7 36.7 49.1 37.1 48.6 37.6L59.3 50.2C59.8 49.7 60.4 49.2 60.9 48.8Z"
                    }), Qe("path", {
                        d: "M66.9 44.2L57.2 30.8C56.6 31.2 56.1 31.6 55.5 32L65.2 45.4C65.7 45 66.3 44.6 66.9 44.2Z"
                    }), Qe("path", {
                        d: "M73.2 40.1L64.5 26C63.9 26.4 63.3 26.7 62.7 27.1L71.3 41.2C72 40.8 72.6 40.4 73.2 40.1Z"
                    }), Qe("path", {
                        d: "M79.8 36.5L72.3 21.8C71.7 22.1 71 22.4 70.4 22.8L77.9 37.5C78.5 37.1 79.1 36.8 79.8 36.5Z"
                    }), Qe("path", {
                        d: "M86.6 33.4L80.3 18.1C79.7 18.4 79 18.6 78.4 18.9L84.7 34.2C85.3 33.9 86 33.7 86.6 33.4Z"
                    }), Qe("path", {
                        d: "M93.7 30.9L88.6 15.2C87.9 15.4 87.3 15.6 86.6 15.8L91.7 31.5C92.4 31.3 93 31.1 93.7 30.9Z"
                    }), Qe("path", {
                        d: "M101 28.9L97.1 12.8C96.4 13 95.7 13.1 95.1 13.3L99 29.4C99.6 29.2 100.3 29.1 101 28.9Z"
                    }), Qe("path", {
                        d: "M108.4 27.5L105.8 11.2C105.1 11.3 104.4 11.4 103.7 11.5L106.3 27.8C107 27.7 107.7 27.6 108.4 27.5Z"
                    }), Qe("path", {
                        d: "M115.8 26.7L114.5 10.2C113.8 10.2 113.1 10.3 112.4 10.4L113.7 26.9C114.4 26.8 115.1 26.8 115.8 26.7Z"
                    }), Qe("path", {
                        d: "M122.3 26.5C122.7 26.5 123 26.5 123.4 26.5V10C123 10 122.7 10 122.3 10C121.9 10 121.6 10 121.3 10V26.5C121.6 26.5 122 26.5 122.3 26.5Z"
                    }), Qe("path", {
                        d: "M130.9 26.9L132.2 10.4C131.5 10.3 130.8 10.3 130.1 10.2L128.8 26.7C129.5 26.8 130.2 26.8 130.9 26.9Z"
                    }), Qe("path", {
                        d: "M138.3 27.9L140.9 11.6C140.2 11.5 139.5 11.4 138.8 11.3L136.2 27.6C137 27.6 137.6 27.7 138.3 27.9Z"
                    }), Qe("path", {
                        d: "M145.7 29.4L149.6 13.3C148.9 13.1 148.2 13 147.6 12.8L143.7 28.9C144.3 29.1 145 29.2 145.7 29.4Z"
                    }), Qe("path", {
                        d: "M152.9 31.5L158 15.8C157.3 15.6 156.7 15.4 156 15.2L150.9 30.9C151.6 31.1 152.3 31.3 152.9 31.5Z"
                    }), Qe("path", {
                        d: "M159.9 34.2L166.2 18.9C165.6 18.6 164.9 18.4 164.3 18.1L158 33.4C158.7 33.7 159.3 33.9 159.9 34.2Z"
                    }), Qe("path", {
                        d: "M166.7 37.4L174.2 22.7C173.6 22.4 173 22.1 172.3 21.7L164.8 36.4C165.5 36.8 166.1 37.1 166.7 37.4Z"
                    }), Qe("path", {
                        d: "M173.3 41.2L181.9 27.1C181.3 26.7 180.7 26.4 180.1 26L171.5 40.1C172.1 40.4 172.7 40.8 173.3 41.2Z"
                    }), Qe("path", {
                        d: "M179.5 45.4L189.2 32C188.6 31.6 188.1 31.2 187.5 30.8L177.8 44.2C178.3 44.6 178.9 45 179.5 45.4Z"
                    }), Qe("path", {
                        d: "M185.3 50.2L196 37.6C195.5 37.1 194.9 36.7 194.4 36.2L183.7 48.8C184.3 49.2 184.8 49.7 185.3 50.2Z"
                    }), Qe("path", {
                        d: "M190.8 55.3L202.5 43.6C202 43.1 201.5 42.6 201 42.1L189.3 53.8C189.8 54.3 190.3 54.8 190.8 55.3Z"
                    }), Qe("path", {
                        d: "M195.8 60.9L208.4 50.2C208 49.7 207.5 49.1 207 48.6L194.4 59.3C194.9 59.8 195.4 60.4 195.8 60.9Z"
                    }), Qe("path", {
                        d: "M200.4 66.9L213.8 57.2C213.4 56.6 213 56.1 212.6 55.5L199.2 65.2C199.6 65.7 200 66.3 200.4 66.9Z"
                    }), Qe("path", {
                        d: "M204.5 73.2L218.6 64.6C218.2 64 217.9 63.4 217.5 62.8L203.4 71.4C203.8 72 204.2 72.6 204.5 73.2Z"
                    }), Qe("path", {
                        d: "M208.2 79.8L222.9 72.3C222.6 71.7 222.3 71 221.9 70.4L207.2 77.9C207.5 78.5 207.8 79.1 208.2 79.8Z"
                    }), Qe("path", {
                        d: "M211.2 86.6L226.5 80.3C226.2 79.7 226 79 225.7 78.4L210.4 84.7C210.7 85.3 211 86 211.2 86.6Z"
                    }), Qe("path", {
                        d: "M213.8 93.7L229.5 88.6C229.3 87.9 229.1 87.3 228.9 86.6L213.2 91.7C213.3 92.4 213.6 93 213.8 93.7Z"
                    }), Qe("path", {
                        d: "M215.7 101L231.8 97.1C231.6 96.4 231.5 95.7 231.3 95.1L215.2 99C215.4 99.6 215.6 100.3 215.7 101Z"
                    }), Qe("path", {
                        d: "M217.1 108.4L233.4 105.8C233.3 105.1 233.2 104.4 233.1 103.7L216.8 106.3C216.9 107 217 107.7 217.1 108.4Z"
                    }), Qe("path", {
                        d: "M217.9 115.8L234.4 114.5C234.4 113.8 234.3 113.1 234.2 112.4L217.7 113.7C217.8 114.4 217.8 115.1 217.9 115.8Z"
                    }), Qe("path", {
                        d: "M234.6 121.3H218.1C218.1 121.7 218.1 122 218.1 122.3C218.1 122.7 218.1 123 218.1 123.4H234.6C234.6 123 234.6 122.7 234.6 122.3C234.6 122 234.6 121.6 234.6 121.3Z"
                    }), Qe("path", {
                        d: "M217.7 130.9L234.2 132.2C234.3 131.5 234.3 130.8 234.4 130.1L217.9 128.8C217.8 129.5 217.8 130.2 217.7 130.9Z"
                    }), Qe("path", {
                        d: "M216.8 138.3L233.1 140.9C233.2 140.2 233.3 139.5 233.4 138.8L217.1 136.2C217 137 216.9 137.6 216.8 138.3Z"
                    }), Qe("path", {
                        d: "M215.2 145.7L231.3 149.6C231.5 148.9 231.6 148.2 231.8 147.6L215.7 143.7C215.6 144.3 215.4 145 215.2 145.7Z"
                    }), Qe("path", {
                        d: "M213.1 152.9L228.8 158C229 157.3 229.2 156.7 229.4 156L213.7 150.9C213.6 151.6 213.3 152.3 213.1 152.9Z"
                    }), Qe("path", {
                        d: "M210.4 159.9L225.7 166.2C226 165.6 226.2 164.9 226.5 164.3L211.2 158C211 158.7 210.7 159.3 210.4 159.9Z"
                    }), Qe("path", {
                        d: "M207.2 166.7L221.9 174.2C222.2 173.6 222.5 173 222.9 172.3L208.2 164.8C207.8 165.5 207.5 166.1 207.2 166.7Z"
                    }), Qe("path", {
                        d: "M203.4 173.3L217.5 181.9C217.9 181.3 218.2 180.7 218.6 180.1L204.5 171.5C204.2 172.1 203.8 172.7 203.4 173.3Z"
                    }), Qe("path", {
                        d: "M199.2 179.5L212.6 189.2C213 188.6 213.4 188.1 213.8 187.5L200.4 177.8C200 178.3 199.6 178.9 199.2 179.5Z"
                    }), Qe("path", {
                        d: "M194.5 185.3L207.1 196C207.6 195.5 208 194.9 208.5 194.4L195.9 183.7C195.4 184.3 194.9 184.8 194.5 185.3Z"
                    }), Qe("path", {
                        d: "M189.3 190.8L201 202.5C201.5 202 202 201.5 202.5 201L190.8 189.3C190.3 189.8 189.8 190.3 189.3 190.8Z"
                    }), Qe("path", {
                        d: "M183.7 195.8L194.4 208.4C194.9 208 195.5 207.5 196 207L185.3 194.4C184.8 194.9 184.3 195.4 183.7 195.8Z"
                    })), Qe("g", {
                        ref: v,
                        style: {
                            fill: o
                        },
                        className: Object(i.a)(Xe.a.group, Xe.a.indicator)
                    }, Qe("path", {
                        d: "M59.3 194.5L42.1 214.7L43.7 216.1L60.9 195.9C60.4 195.4 59.8 194.9 59.3 194.5Z"
                    }), Qe("path", {
                        d: "M53.8 189.3L35 208.1L36.5 209.6L55.3 190.8C54.8 190.3 54.3 189.8 53.8 189.3Z"
                    }), Qe("path", {
                        d: "M48.8 183.7L28.6 200.9L30 202.5L50.2 185.3C49.7 184.8 49.2 184.3 48.8 183.7Z"
                    }), Qe("path", {
                        d: "M44.2 177.8L22.8 193.4L24 195.1L45.5 179.5C45 178.9 44.6 178.3 44.2 177.8Z"
                    }), Qe("path", {
                        d: "M40.1 171.5L17.5 185.4L18.6 187.2L41.2 173.3C40.8 172.7 40.4 172.1 40.1 171.5Z"
                    }), Qe("path", {
                        d: "M36.5 164.9L12.9 176.9L13.9 178.8L37.5 166.8C37.1 166.1 36.8 165.5 36.5 164.9Z"
                    }), Qe("path", {
                        d: "M33.4 158L8.89999 168.1L9.69999 170L34.2 159.9C33.9 159.3 33.7 158.7 33.4 158Z"
                    }), Qe("path", {
                        d: "M30.9 150.9L5.7 159.1L6.3 161.1L31.5 152.9C31.3 152.3 31.1 151.6 30.9 150.9Z"
                    }), Qe("path", {
                        d: "M28.9 143.7L3.10001 149.9L3.60001 151.9L29.4 145.7C29.2 145 29.1 144.3 28.9 143.7Z"
                    }), Qe("path", {
                        d: "M27.5 136.3L1.3 140.4L1.6 142.5L27.8 138.4C27.7 137.6 27.6 137 27.5 136.3Z"
                    }), Qe("path", {
                        d: "M26.7 128.8L0.300003 130.9L0.500003 133L26.9 130.9C26.8 130.2 26.8 129.5 26.7 128.8Z"
                    }), Qe("path", {
                        d: "M26.5 122.3C26.5 121.9 26.5 121.6 26.5 121.3H0V123.4H26.5C26.5 123 26.5 122.7 26.5 122.3Z"
                    }), Qe("path", {
                        d: "M26.9 113.8L0.500003 111.7L0.300003 113.8L26.7 115.9C26.8 115.1 26.8 114.4 26.9 113.8Z"
                    }), Qe("path", {
                        d: "M27.9 106.3L1.69999 102.2L1.39999 104.3L27.6 108.4C27.6 107.7 27.7 107 27.9 106.3Z"
                    }), Qe("path", {
                        d: "M29.4 98.9L3.60001 92.7L3.10001 94.7L28.9 100.9C29.1 100.3 29.2 99.6 29.4 98.9Z"
                    }), Qe("path", {
                        d: "M31.5 91.7L6.3 83.5L5.7 85.5L30.9 93.7C31.1 93 31.3 92.4 31.5 91.7Z"
                    }), Qe("path", {
                        d: "M34.2 84.7L9.69999 74.5L8.89999 76.4L33.4 86.5C33.7 86 33.9 85.3 34.2 84.7Z"
                    }), Qe("path", {
                        d: "M37.4 77.9L13.8 65.9L12.8 67.8L36.4 79.8C36.8 79.1 37.1 78.5 37.4 77.9Z"
                    }), Qe("path", {
                        d: "M41.2 71.4L18.6 57.5L17.5 59.3L40.1 73.2C40.4 72.6 40.8 72 41.2 71.4Z"
                    }), Qe("path", {
                        d: "M45.4 65.2L24 49.6L22.8 51.3L44.2 66.9C44.6 66.3 45 65.7 45.4 65.2Z"
                    }), Qe("path", {
                        d: "M50.2 59.3L30 42.1L28.6 43.7L48.8 60.9C49.2 60.4 49.7 59.8 50.2 59.3Z"
                    }), Qe("path", {
                        d: "M55.3 53.8L36.6 35.1L35.1 36.6L53.9 55.4C54.3 54.8 54.8 54.3 55.3 53.8Z"
                    }), Qe("path", {
                        d: "M60.9 48.8L43.7 28.6L42.1 30L59.3 50.2C59.8 49.7 60.4 49.2 60.9 48.8Z"
                    }), Qe("path", {
                        d: "M66.9 44.2L51.3 22.7L49.6 24L65.2 45.5C65.7 45 66.3 44.6 66.9 44.2Z"
                    }), Qe("path", {
                        d: "M73.2 40.1L59.3 17.5L57.5 18.6L71.4 41.2C72 40.8 72.6 40.4 73.2 40.1Z"
                    }), Qe("path", {
                        d: "M79.8 36.5L67.8 12.9L65.9 13.9L77.9 37.5C78.5 37.1 79.1 36.8 79.8 36.5Z"
                    }), Qe("path", {
                        d: "M86.6 33.4L76.5 8.89999L74.6 9.69999L84.7 34.2C85.3 33.9 86 33.7 86.6 33.4Z"
                    }), Qe("path", {
                        d: "M93.7 30.9L85.5 5.70001L83.5 6.30001L91.7 31.5C92.4 31.3 93 31.1 93.7 30.9Z"
                    }), Qe("path", {
                        d: "M101 28.9L94.8 3.10001L92.8 3.60001L99 29.4C99.6 29.2 100.3 29.1 101 28.9Z"
                    }), Qe("path", {
                        d: "M108.4 27.5L104.3 1.29999L102.2 1.59999L106.3 27.8C107 27.7 107.7 27.6 108.4 27.5Z"
                    }), Qe("path", {
                        d: "M115.8 26.7L113.7 0.299988L111.6 0.499988L113.7 26.9C114.4 26.8 115.1 26.8 115.8 26.7Z"
                    }), Qe("path", {
                        d: "M122.3 26.5C122.7 26.5 123 26.5 123.4 26.5V0H121.3V26.5C121.6 26.5 122 26.5 122.3 26.5Z"
                    }), Qe("path", {
                        d: "M130.9 26.9L133 0.499988L130.9 0.299988L128.8 26.7C129.5 26.8 130.2 26.8 130.9 26.9Z"
                    }), Qe("path", {
                        d: "M138.3 27.9L142.4 1.69999L140.3 1.39999L136.2 27.6C137 27.6 137.6 27.7 138.3 27.9Z"
                    }), Qe("path", {
                        d: "M145.7 29.4L151.9 3.60001L149.9 3.10001L143.7 28.9C144.3 29.1 145 29.2 145.7 29.4Z"
                    }), Qe("path", {
                        d: "M152.9 31.5L161.1 6.30001L159.1 5.70001L150.9 30.9C151.6 31.1 152.3 31.3 152.9 31.5Z"
                    }), Qe("path", {
                        d: "M159.9 34.2L170 9.69999L168.1 8.89999L158 33.4C158.7 33.7 159.3 33.9 159.9 34.2Z"
                    }), Qe("path", {
                        d: "M166.7 37.4L178.7 13.8L176.8 12.8L164.8 36.4C165.5 36.8 166.1 37.1 166.7 37.4Z"
                    }), Qe("path", {
                        d: "M173.3 41.2L187.2 18.6L185.4 17.5L171.5 40.1C172.1 40.4 172.7 40.8 173.3 41.2Z"
                    }), Qe("path", {
                        d: "M179.5 45.4L195.1 24L193.4 22.8L177.8 44.2C178.3 44.6 178.9 45 179.5 45.4Z"
                    }), Qe("path", {
                        d: "M185.3 50.2L202.5 30L200.9 28.6L183.7 48.8C184.3 49.2 184.8 49.7 185.3 50.2Z"
                    }), Qe("path", {
                        d: "M190.8 55.3L209.6 36.5L208.1 35L189.3 53.8C189.8 54.3 190.3 54.8 190.8 55.3Z"
                    }), Qe("path", {
                        d: "M195.8 60.9L216 43.7L214.6 42.1L194.4 59.3C194.9 59.8 195.4 60.4 195.8 60.9Z"
                    }), Qe("path", {
                        d: "M200.4 66.9L221.8 51.3L220.6 49.6L199.1 65.2C199.6 65.7 200 66.3 200.4 66.9Z"
                    }), Qe("path", {
                        d: "M204.5 73.2L227.1 59.3L226 57.5L203.4 71.4C203.8 72 204.2 72.6 204.5 73.2Z"
                    }), Qe("path", {
                        d: "M208.2 79.8L231.8 67.8L230.8 65.9L207.2 77.9C207.5 78.5 207.8 79.1 208.2 79.8Z"
                    }), Qe("path", {
                        d: "M211.2 86.6L235.7 76.5L234.9 74.6L210.4 84.7C210.7 85.3 211 86 211.2 86.6Z"
                    }), Qe("path", {
                        d: "M213.8 93.7L239 85.5L238.4 83.5L213.2 91.7C213.3 92.4 213.6 93 213.8 93.7Z"
                    }), Qe("path", {
                        d: "M215.7 101L241.5 94.8L241 92.8L215.2 99C215.4 99.6 215.6 100.3 215.7 101Z"
                    }), Qe("path", {
                        d: "M217.1 108.4L243.3 104.3L243 102.2L216.8 106.3C216.9 107 217 107.7 217.1 108.4Z"
                    }), Qe("path", {
                        d: "M217.9 115.8L244.3 113.7L244.1 111.6L217.7 113.7C217.8 114.4 217.8 115.1 217.9 115.8Z"
                    }), Qe("path", {
                        d: "M218.1 121.3C218.1 121.7 218.1 122 218.1 122.3C218.1 122.7 218.1 123 218.1 123.4H244.6V121.3H218.1Z"
                    }), Qe("path", {
                        d: "M217.7 130.9L244.1 133L244.3 130.9L217.9 128.8C217.8 129.5 217.8 130.2 217.7 130.9Z"
                    }), Qe("path", {
                        d: "M216.8 138.3L243 142.4L243.3 140.3L217.1 136.2C217 137 216.9 137.6 216.8 138.3Z"
                    }), Qe("path", {
                        d: "M215.2 145.7L241 151.9L241.5 149.9L215.7 143.7C215.6 144.3 215.4 145 215.2 145.7Z"
                    }), Qe("path", {
                        d: "M213.1 152.9L238.3 161.1L238.9 159.1L213.7 150.9C213.6 151.6 213.3 152.3 213.1 152.9Z"
                    }), Qe("path", {
                        d: "M210.4 159.9L234.9 170L235.7 168.1L211.2 158C211 158.7 210.7 159.3 210.4 159.9Z"
                    }), Qe("path", {
                        d: "M207.2 166.7L230.8 178.7L231.8 176.8L208.2 164.8C207.8 165.5 207.5 166.1 207.2 166.7Z"
                    }), Qe("path", {
                        d: "M203.4 173.3L226 187.2L227.1 185.4L204.5 171.5C204.2 172.1 203.8 172.7 203.4 173.3Z"
                    }), Qe("path", {
                        d: "M199.2 179.5L220.7 195.1L221.9 193.4L200.5 177.8C200 178.3 199.6 178.9 199.2 179.5Z"
                    }), Qe("path", {
                        d: "M194.5 185.3L214.7 202.5L216.1 200.9L195.9 183.7C195.4 184.3 194.9 184.8 194.5 185.3Z"
                    }), Qe("path", {
                        d: "M189.3 190.8L208.1 209.6L209.6 208.1L190.8 189.3C190.3 189.8 189.8 190.3 189.3 190.8Z"
                    }), Qe("path", {
                        d: "M183.7 195.8L201 216L202.6 214.6L185.4 194.4C184.8 194.9 184.3 195.4 183.7 195.8Z"
                    })))
                },
                $e = n("Mtom"),
                et = n.n($e),
                tt = o.a.createElement,
                nt = function(e) {
                    var t = e.className,
                        n = e.difficulty,
                        r = void 0 === n ? 1 : n,
                        o = e.color,
                        a = e.theme,
                        c = e.startValue,
                        u = void 0 === c ? "" : c,
                        l = e.endValue,
                        s = void 0 === l ? "" : l,
                        f = e.value,
                        d = void 0 === f ? "" : f,
                        p = e.measureUnit,
                        y = void 0 === p ? "" : p;
                    return tt("div", {
                        className: Object(i.a)(et.a.container, et.a[a], t)
                    }, tt(Je, {
                        theme: a,
                        difficulty: r,
                        activeColor: o
                    }), tt("span", {
                        className: Object(i.a)(et.a.indicator, et.a.start)
                    }, u), tt("span", {
                        className: Object(i.a)(et.a.indicator, et.a.end)
                    }, s), tt("p", {
                        className: et.a.value
                    }, d, tt("sup", null, " ", y)))
                },
                rt = n("oDo3"),
                ot = n.n(rt),
                at = o.a.createElement,
                it = function(e) {
                    var t = e.fields,
                        n = t.image,
                        r = t.caption,
                        o = void 0 === r ? "" : r,
                        a = t.meters,
                        c = void 0 === a ? [] : a,
                        u = t.theme,
                        l = e.inView,
                        f = Object(Ne.a)(),
                        d = qe({
                            inView: l,
                            desktopOnly: !0
                        }),
                        p = Object(q.a)(d, 2),
                        y = p[0],
                        v = p[1];
                    return at("figure", {
                        className: Object(i.a)(ot.a.container, ot.a[u])
                    }, at("div", {
                        className: ot.a.imageWrapper
                    }, at(k.a, {
                        outerClassName: ot.a.image,
                        asset: n,
                        useRatio: !f,
                        ratio: !f && 75
                    }), at("div", {
                        ref: y,
                        className: Object(i.a)(ot.a.metersWrapper, l && ot.a.inView)
                    }, at("div", {
                        className: ot.a.meters,
                        ref: v
                    }, c.map((function(e) {
                        var t = e.fields,
                            n = e.sys;
                        return at(nt, Object(s.a)({
                            key: null === n || void 0 === n ? void 0 : n.id,
                            className: ot.a.meter,
                            theme: u
                        }, t))
                    }))))), o && at("figcaption", {
                        className: ot.a.caption
                    }, o))
                },
                ct = n("y4v0"),
                ut = n("7l9Y"),
                lt = n.n(ut),
                st = n("vDWm"),
                ft = n("fp64"),
                dt = n.n(ft),
                pt = o.a.createElement,
                yt = function(e) {
                    var t = e.className,
                        n = e.cutOutSize,
                        a = void 0 === n ? 10 : n,
                        c = Object(ce.a)(e, ["className", "cutOutSize"]),
                        u = Object(r.useState)(!1),
                        l = u[0],
                        f = u[1],
                        d = Object(r.useState)(1),
                        p = d[0],
                        y = d[1],
                        v = Object(st.a)().width,
                        h = Object(r.useRef)(a),
                        b = Object(r.useRef)(),
                        m = Object(r.useRef)();
                    Object(r.useEffect)((function() {
                        h.current !== a && f(!0)
                    }), [a]);
                    var g = Object(r.useCallback)((function() {
                            b.current.setAttribute("d", function(e) {
                                return "M0 0H".concat(418 - e, "L").concat(418, " ").concat(e, "V").concat(63, "H0V0Z")
                            }(h.current)), m.current.style.height = function(e) {
                                return "calc(100% - ".concat(e, "px)")
                            }(h.current * p)
                        }), [p]),
                        O = Object(r.useCallback)((function() {
                            var e = .15 * (a - h.current),
                                t = h.current + e,
                                n = Object(ke.b)(a, t);
                            h.current = n < .5 ? a : Object(ke.f)(t, 100)
                        }), [a]);
                    return Object(Me.a)({
                        onAnimationFrame: Object(r.useCallback)((function() {
                            O(), g(), h.current === a && f(!1)
                        }), [a, g, O]),
                        active: l
                    }), Object(r.useEffect)((function() {
                        var e = m.current.offsetWidth;
                        y(e / 418), g()
                    }), [y, g, v]), pt(o.a.Fragment, null, pt("svg", Object(s.a)({}, c, {
                        className: Object(i.a)(dt.a.svg, t),
                        viewBox: "0 0 ".concat(418, " ").concat(63)
                    }), pt("path", {
                        className: dt.a.path,
                        ref: b
                    })), pt("div", {
                        className: dt.a.background,
                        ref: m
                    }))
                },
                vt = n("kmhn"),
                ht = n.n(vt),
                bt = o.a.createElement,
                mt = function(e) {
                    var t = e.className,
                        n = e.muted,
                        r = void 0 !== n && n,
                        o = Object(ce.a)(e, ["className", "muted"]);
                    return bt("svg", Object(s.a)({
                        viewBox: "0 0 22 22",
                        className: Object(i.a)(ht.a.container, t)
                    }, o), bt("path", {
                        d: "M14.4793 1H15.2293L14.0347 0.395975L14.4793 1ZM4.9801 7.99171V8.74171H5.22636L5.42468 8.59573L4.9801 7.99171ZM1 7.99171V7.24171H0.25V7.99171H1ZM14.0347 0.395975L4.53552 7.38768L5.42468 8.59573L14.9239 1.60403L14.0347 0.395975ZM4.9801 7.24171H1V8.74171H4.9801V7.24171ZM0.25 7.99171V13.8823H1.75V7.99171H0.25ZM15.2293 10.592V1H13.7293V10.592H15.2293Z"
                    }), bt("path", {
                        d: "M14.4793 21H15.2293L14.0437 21.6106L14.4793 21ZM4.9801 14.2239V13.4739H5.22019L5.41564 13.6133L4.9801 14.2239ZM1 14.2239V14.9739H0.25V14.2239H1ZM0.25 8.33334V7.58334H1.75V8.33334H0.25ZM13.7293 10.0029V9.2529H15.2293V10.0029H13.7293ZM14.0437 21.6106L4.54455 14.8345L5.41564 13.6133L14.9148 20.3894L14.0437 21.6106ZM4.9801 14.9739H1V13.4739H4.9801V14.9739ZM0.25 14.2239V8.33334H1.75V14.2239H0.25ZM15.2293 11.6236V21H13.7293V11.6236H15.2293ZM13.7293 11.6236V10.0029H15.2293V11.6236H13.7293Z"
                    }), bt("path", {
                        className: Object(i.a)(ht.a.dash, r && ht.a.muted),
                        d: "M21 1L1 21"
                    }))
                },
                gt = n("SrqT"),
                Ot = n.n(gt),
                _t = o.a.createElement;

            function jt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ct(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? jt(Object(n), !0).forEach((function(t) {
                        Object(l.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var wt = function(e) {
                    var t = e.className,
                        n = e.controlsClassName,
                        o = e.srcClassName,
                        a = e.portraitOnly,
                        c = e.hideCustomControls,
                        u = e.fields,
                        l = void 0 === u ? {} : u,
                        f = e.fullscreen,
                        d = e.cover,
                        p = e.playing,
                        y = e.onInViewChange,
                        v = e.defaultMuted,
                        h = void 0 === v || v,
                        b = e.hasLoadingState,
                        m = void 0 === b || b,
                        g = e.onEnded,
                        O = e.children,
                        _ = e.showControlsOnTrigger,
                        j = void 0 === _ || _,
                        C = Object(ue.a)({
                            threshold: .7
                        }),
                        w = Object(q.a)(C, 2),
                        P = w[0],
                        L = w[1],
                        k = Object(r.useState)(!1),
                        S = k[0],
                        M = k[1],
                        E = Object(r.useState)(""),
                        x = E[0],
                        I = E[1],
                        N = Object(r.useState)(!1),
                        T = N[0],
                        R = N[1],
                        D = Object(r.useState)(h),
                        A = D[0],
                        B = D[1],
                        V = Object(r.useState)({
                            current: 0,
                            total: 0
                        }),
                        H = V[0],
                        Z = V[1],
                        W = Object(r.useRef)(),
                        G = Object(r.useRef)(),
                        U = Object(r.useRef)(),
                        F = Object(r.useRef)(0),
                        z = l.portraitVideo,
                        K = l.portraitVideoUrl,
                        Y = l.landscapeVideo,
                        X = l.landscapeVideoUrl,
                        J = Object(r.useRef)(0);
                    Object(Ee.a)((function() {
                        if (!c) {
                            var e = G.current.offsetWidth;
                            J.current = e
                        }
                    }), []), Object(r.useEffect)((function() {
                        var e, t, n = $.current;
                        !(n.offsetWidth < n.offsetHeight || a) || !z && !K ? I(Y ? (null === (t = Y.fields.file) || void 0 === t ? void 0 : t.url) || "" : X) : I(z ? (null === (e = z.fields.file) || void 0 === e ? void 0 : e.url) || "" : K)
                    }), [z, Y, K, X, a]), Object(r.useEffect)((function() {
                        y && y(L)
                    }), [L]);
                    var $ = Object(r.useRef)(),
                        ee = Object(r.useRef)(),
                        te = Object(r.useCallback)((function(e) {
                            $.current = e, P(e)
                        }), [P]),
                        ne = p && L && !T,
                        re = Object(r.useRef)(!1),
                        oe = Object(r.useRef)(!1),
                        ae = Object(r.useRef)(0),
                        ie = Object(r.useRef)(0),
                        ce = Object(r.useCallback)((function(e) {
                            if (!S && !T) {
                                !1 === re.current && (re.current = e), !1 === oe.current && (oe.current = ae.current * H.total);
                                var t = e - re.current;
                                F.current = Math.min(oe.current + t / 1e3, H.total), Math.floor(F.current) !== H.current && Z(Ct(Ct({}, H), {}, {
                                    current: Math.floor(F.current)
                                })), ae.current = F.current / H.total
                            }
                        }), [S, T, H]),
                        le = Object(r.useCallback)((function() {
                            if (ae.current !== ie.current) {
                                var e = J.current * ae.current;
                                G.current.style.transform = "scaleX(".concat(ae.current, ")"), U.current.style.transform = "translateX(".concat(e, "px)"), ie.current = ae.current
                            }
                        }), []);
                    Object(Me.a)({
                        onAnimationFrame: Object(r.useCallback)((function(e, t) {
                            ce(t), le()
                        }), [le, ce]),
                        active: !c && p && L
                    });
                    var de = function() {
                            R(!0), re.current = !1, oe.current = !1
                        },
                        ye = Object(ct.a)({
                            onDrag: function(e) {
                                var t = Object(q.a)(e.vxvy, 1)[0],
                                    n = Object(q.a)(e.xy, 1)[0];
                                t && !S && M(!0);
                                var r = function(e) {
                                    var t = W.current.offsetWidth,
                                        n = Object(ke.c)(W.current).left;
                                    return e = Object(ke.a)(e - n, 0, t), Object(ke.e)([0, t], [0, 1], e)
                                }(n);
                                ae.current = r, oe.current = r * H.total, re.current = !1, ee.current.seekTo(r)
                            },
                            onDragEnd: function() {
                                var e = Object(fe.a)(se.a.mark((function e() {
                                    return se.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Object(pe.a)(10);
                                            case 2:
                                                M(!1);
                                            case 3:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            axis: "x"
                        }),
                        ve = Object(r.useState)(!1),
                        he = ve[0],
                        be = ve[1],
                        me = m && !he && L;
                    return _t("div", {
                        className: Object(i.a)(Ot.a.container, t, d && Ot.a.cover, me && Ot.a.hasLoadingState),
                        ref: te
                    }, _t("div", {
                        className: Ot.a.videoWrapper
                    }, _t(lt.a, {
                        className: Object(i.a)(o, Ot.a.src),
                        ref: ee,
                        playsinline: !0,
                        controls: !!c,
                        playing: ne && !S,
                        width: "100%",
                        height: "100%",
                        onReady: function() {
                            return be(!0)
                        },
                        volume: 1,
                        muted: A,
                        loop: !1,
                        url: "".concat(x, "#t=0.1"),
                        type: "video/mp4",
                        onDuration: function(e) {
                            Z(Ct(Ct({}, H), {}, {
                                total: e
                            }))
                        },
                        onEnded: function() {
                            le(), de(), g && g()
                        }
                    })), O, !c && _t("div", {
                        className: Ot.a.controlsOuter,
                        style: f ? {} : {
                            top: "".concat(30, "%"),
                            height: "".concat(70, "%")
                        }
                    }, _t("div", {
                        className: Object(i.a)(n, Ot.a.controls, L && j && Ot.a.visible)
                    }, _t(yt, null), _t("button", {
                        className: Ot.a.toggle,
                        onClick: function() {
                            T ? (1 === ae.current && (ae.current = 0, oe.current = !1, re.current = !1), R(!1)) : de()
                        }
                    }, !ne && _t(Ae.a, {
                        className: Ot.a.playSvg
                    }), ne && _t(De.a, {
                        className: Ot.a.pauseSvg
                    })), _t("div", {
                        className: Ot.a.indicator,
                        ref: W
                    }, _t("div", Object(s.a)({
                        className: Ot.a.status
                    }, ye()), _t("div", {
                        className: Ot.a.statusBackground,
                        ref: G
                    }), _t("div", {
                        className: Ot.a.statusDragger,
                        ref: U
                    })), _t("span", {
                        className: Ot.a.time
                    }, Object(Q.b)(H.current)), _t("span", {
                        className: Ot.a.time
                    }, Object(Q.b)(H.total))), _t("button", {
                        className: Ot.a.mute,
                        onClick: function() {
                            B(!A)
                        }
                    }, _t(mt, {
                        className: Ot.a.muteSvg,
                        muted: A
                    })))))
                },
                Pt = n("PjWa"),
                Lt = n.n(Pt),
                kt = function(e) {
                    return {
                        getScrollToDocumentary: function() {
                            return e.appReducer.scrollToDocumentary
                        }
                    }
                },
                St = {
                    setScrollToDocumentary: V.i
                },
                Mt = function(e) {
                    return Object(B.b)(kt, St)(e)
                },
                Et = o.a.createElement,
                xt = Mt((function(e) {
                    var t = e.fields,
                        n = void 0 === t ? {} : t,
                        a = e.setScrollToDocumentary,
                        c = e.getScrollToDocumentary,
                        u = Object(r.useState)(!1),
                        l = u[0],
                        f = u[1],
                        d = n.video,
                        p = n.title,
                        y = n.thumbnail,
                        v = n.playText,
                        h = void 0 === v ? "play" : v,
                        b = Object(r.useRef)(),
                        m = Object(r.useRef)();
                    Object(Ee.a)((function() {
                        m.current = Object(ke.c)(b.current).top
                    }), []);
                    var g = c();
                    return Object(r.useEffect)((function() {
                        g && (window.scrollTo({
                            top: m.current,
                            behavior: "smooth"
                        }), a(!1))
                    }), [g, a]), Et(o.a.Fragment, null, Et("h2", {
                        className: Lt.a.title
                    }, p), Et("div", {
                        className: Lt.a.container,
                        ref: b
                    }, !!y && Et("div", {
                        className: Object(i.a)(Lt.a.thumbnailContainer, l && Lt.a.isHidden)
                    }, Et(k.a, {
                        asset: y
                    }), Et("button", {
                        className: Lt.a.buttonOuter,
                        onClick: function() {
                            return f(!0)
                        }
                    }, Et("div", {
                        className: Lt.a.buttonInner
                    }, Et("div", {
                        className: Lt.a.buttonIconWrapper
                    }, Et(Ae.a, {
                        className: Lt.a.buttonIcon
                    })), Et("span", {
                        className: Lt.a.buttonText
                    }, h)))), !!d && Et(wt, Object(s.a)({
                        hideCustomControls: !0,
                        className: Lt.a.videoContainer,
                        playing: y ? l : void 0
                    }, d))))
                })),
                It = n("vO2Z"),
                Nt = n("j6bO"),
                Tt = n("icDD"),
                Rt = n("Nvsu"),
                Dt = n.n(Rt),
                At = o.a.createElement;

            function Bt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Vt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Bt(Object(n), !0).forEach((function(t) {
                        Object(l.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ht = function(e) {
                    var t = e.tag,
                        n = e.style,
                        o = e.sliderClassName,
                        c = e.children,
                        l = e.focusIndex,
                        f = e.focussedImageBounds,
                        d = e.inView,
                        p = Object(r.useRef)(null),
                        y = Object(r.useRef)(null),
                        v = Object(r.useRef)([0, 0]),
                        h = Object(r.useRef)([0, 0]),
                        b = Object(Tt.a)(),
                        m = Object(r.useRef)(!1),
                        g = Object(r.useRef)(0),
                        O = Object(r.useState)(),
                        _ = O[0],
                        j = O[1],
                        C = Object(a.d)(0, {
                            damping: 100,
                            mass: 3,
                            stiffness: 400
                        });
                    Object(Ee.a)((function() {
                        var e = p.current.getBoundingClientRect().width,
                            t = void 0 === e ? 0 : e,
                            n = y.current.getBoundingClientRect().width,
                            r = void 0 === n ? 0 : n,
                            o = r - t;
                        if (window.innerWidth > It.a.medium) {
                            var a = Object(ke.c)(p.current).top;
                            p.current.style.height = "".concat(window.innerHeight + o, "px"), v.current = [a, a + o], h.current = [0, o]
                        } else {
                            if (p.current.style.height = "", r <= t) return C.set(0), j();
                            j(-1 * o)
                        }
                    }), [b]);
                    var w = Object(Ie.a)();
                    Object(Me.a)({
                        onAnimationFrame: Object(r.useCallback)((function(e) {
                            var t = Object(q.a)(h.current, 2),
                                n = t[0],
                                r = t[1],
                                o = Object(ke.a)(Object(ke.e)(v.current, h.current, e), n, r),
                                a = w(o, .5),
                                i = Object(q.a)(a, 2),
                                c = i[0];
                            i[1] !== o && (y.current.style.transform = "translate3d(-".concat(c, "px, 0, 0)"))
                        }), [w]),
                        active: d && b
                    });
                    var P = Object(r.useRef)(!1),
                        L = Object(u.a)(l);
                    Object(r.useEffect)((function() {
                        if (L !== l && !P.current) {
                            var e = Object(q.a)(v.current, 2),
                                t = e[0],
                                n = e[1],
                                r = f || {},
                                o = r.left,
                                a = r.width;
                            if (o) {
                                var i = (window.innerWidth - a) / 2,
                                    c = Object(Nt.a)() + (o - i),
                                    u = Object(ke.a)(Object(ke.e)(v.current, [t, n], c), t, n);
                                window.scrollTo(0, u)
                            }
                        }
                    }), [f, L, l]);
                    var k = Object(ct.a)({
                            onDrag: function(e) {
                                var t = Object(q.a)(e.vxvy, 1)[0],
                                    n = Object(q.a)(e.delta, 2),
                                    r = n[0],
                                    o = n[1],
                                    a = e.velocity;
                                o > 4 || o < -4 || !t || (m.current || (m.current = !0), g.current = Object(ke.a)(g.current + r * (a + 1) * 1.2, _, 0), C.set(g.current))
                            },
                            onDragEnd: function() {
                                var e = Object(fe.a)(se.a.mark((function e() {
                                    return se.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Object(pe.a)(10);
                                            case 2:
                                                m.current = !1;
                                            case 3:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            axis: "x"
                        }),
                        S = a.b[t] || a.b.figure,
                        M = {};
                    return _ && !b && (M = Vt(Vt({}, k()), {}, {
                        style: {
                            x: C
                        }
                    })), At("div", {
                        ref: p,
                        onMouseDown: function() {
                            return P.current = !0
                        },
                        onMouseUp: function() {
                            return P.current = !1
                        },
                        className: Dt.a.container,
                        style: n
                    }, At("div", {
                        className: Object(i.a)(Dt.a.sliderWrapper, d && Dt.a.inView)
                    }, At(S, Object(s.a)({
                        ref: y
                    }, M, {
                        className: Object(i.a)(Dt.a.slider, o, d && Dt.a.inView)
                    }), c)))
                },
                Zt = n("Ztge"),
                Wt = n.n(Zt),
                Gt = o.a.createElement,
                Ut = function(e) {
                    var t = e.fields,
                        n = t.images,
                        o = void 0 === n ? [] : n,
                        a = t.text,
                        c = t.backgroundColor,
                        u = e.setOverlayOpen,
                        l = e.getPopupIndex,
                        s = e.uid,
                        f = e.inView,
                        d = Ke.a[c] || {},
                        p = {
                            backgroundColor: d.backgroundColor,
                            "--loading-background-color": d.loadingBackgroundColor
                        },
                        y = Object(ue.a)({
                            rootMargin: "1500px"
                        }),
                        v = Object(q.a)(y, 2),
                        h = v[0],
                        b = v[1],
                        m = Object(r.useRef)([]),
                        g = Object(r.useState)(0),
                        O = g[0],
                        _ = g[1],
                        j = Object(r.useState)(0),
                        C = j[0],
                        w = j[1];
                    return Gt(Ht, {
                        tag: "figure",
                        sliderClassName: Object(i.a)(Wt.a.slider, a && Wt.a.hasText),
                        focussedImageBounds: O,
                        focusIndex: C,
                        inView: f,
                        style: p
                    }, a && Gt("figcaption", {
                        className: Wt.a.text
                    }, a), Gt("div", {
                        ref: h,
                        className: Wt.a.imagesContainer
                    }, o.map((function(e, t) {
                        var n;
                        return Gt("div", {
                            key: null === e || void 0 === e || null === (n = e.sys) || void 0 === n ? void 0 : n.id,
                            ref: function(e) {
                                return m.current[t] = e
                            },
                            className: Wt.a.imageWrapper
                        }, Gt(Te.a, {
                            asset: e,
                            ratio: 133.333,
                            opensOverlay: !0,
                            setOverlayOpen: u,
                            getPopupIndex: l,
                            uid: s,
                            handleOnFocus: function() {
                                return function(e) {
                                    var t = m.current[e].getBoundingClientRect();
                                    _(t), w(e)
                                }(t)
                            },
                            forceLoad: b,
                            soundPlayerParallax: !1
                        }))
                    }))))
                },
                Ft = n("lSWW"),
                zt = n.n(Ft),
                qt = o.a.createElement,
                Kt = function(e) {
                    var t = e.fields,
                        n = t.text,
                        r = t.align;
                    return qt("div", {
                        className: zt.a.container
                    }, qt(D, {
                        className: Object(i.a)(zt.a.text, zt.a[r]),
                        text: n
                    }))
                },
                Yt = n("wa2x"),
                Xt = n.n(Yt),
                Qt = o.a.createElement,
                Jt = function(e) {
                    var t, n, r = e.fields,
                        o = r.image,
                        a = r.images,
                        c = void 0 === a ? [] : a,
                        u = r.caption,
                        l = r.audio,
                        f = e.setOverlayOpen,
                        d = e.getPopupIndex,
                        p = e.uid,
                        y = e.inView,
                        v = Object(Ne.a)(),
                        h = c[0];
                    return Qt("figure", {
                        className: Xt.a.container
                    }, Qt("div", {
                        className: Xt.a.mediaContainer
                    }, Qt("div", {
                        className: Object(i.a)(Xt.a.aside, y && Xt.a.inView)
                    }, Qt("div", {
                        className: Xt.a.asideMediaWrapper
                    }, (null === h || void 0 === h || null === (t = h.fields) || void 0 === t ? void 0 : t.image) ? Qt(Te.a, {
                        opensOverlay: !0,
                        setOverlayOpen: f,
                        getPopupIndex: d,
                        uid: p,
                        asset: h,
                        ratio: 160
                    }) : Qt(Ze, {
                        asset: h
                    }), l && Qt(We.a, Object(s.a)({
                        key: null === l || void 0 === l || null === (n = l.sys) || void 0 === n ? void 0 : n.id,
                        x: v ? "calc(100% - 10.5rem)" : "calc(100% - 5.6rem)",
                        y: v ? "-5rem" : "15%"
                    }, l)))), Qt("div", {
                        className: Xt.a.mainImageWrapper
                    }, Qt(Te.a, {
                        asset: o,
                        ratio: v ? 133 : 75,
                        opensOverlay: !0,
                        setOverlayOpen: f,
                        getPopupIndex: d,
                        uid: p
                    }))), Qt("figcaption", {
                        className: Xt.a.caption
                    }, u))
                },
                $t = n("AUtv"),
                en = n.n($t),
                tn = o.a.createElement,
                nn = function(e) {
                    var t = e.image,
                        n = e.active;
                    return t && tn("div", {
                        className: Object(i.a)(en.a.image, n && en.a.imageActive)
                    }, tn(k.a, {
                        asset: t,
                        useRatio: !1
                    })) || null
                },
                rn = function(e) {
                    var t = e.fields.images,
                        n = void 0 === t ? [] : t,
                        o = e.inView,
                        a = Object(q.a)(n, 2),
                        i = a[0],
                        c = a[1],
                        u = Object(r.useRef)(),
                        l = Object(r.useState)(!0),
                        s = l[0],
                        f = l[1],
                        d = Object(r.useRef)([0, 0]);
                    return Object(Ee.a)((function() {
                        var e = u.current,
                            t = Object(ke.c)(e).top,
                            n = e.offsetHeight,
                            r = window.innerHeight / 2;
                        d.current = [t - r, t + n - r]
                    }), []), Object(Me.a)({
                        onScroll: Object(r.useCallback)((function(e) {
                            var t = e.y,
                                n = Se(d.current, t) < 50;
                            n !== s && f(n)
                        }), [s]),
                        active: o
                    }), tn("div", {
                        ref: u
                    }, tn("div", {
                        className: en.a.imageWrap
                    }, tn(nn, {
                        active: s,
                        image: i
                    })), tn("div", {
                        className: en.a.imageWrap
                    }, tn(nn, {
                        active: !s,
                        image: c
                    })))
                },
                on = n("YpAL"),
                an = n.n(on),
                cn = o.a.createElement,
                un = function(e) {
                    var t = e.fields,
                        n = void 0 === t ? {} : t,
                        o = e.getPopupIndex,
                        a = e.uid,
                        c = e.setOverlayOpen,
                        u = e.inView,
                        l = n.image,
                        s = n.orientation,
                        f = n.addWhitespace,
                        d = Object(Tt.a)(),
                        p = Object(r.useRef)(null),
                        y = Object(Ie.a)(),
                        v = Object(r.useRef)(0),
                        h = xe((function(e) {
                            var t = y(e),
                                n = Object(q.a)(t, 2),
                                r = n[0];
                            if (r !== n[1]) {
                                var o = .01 * r;
                                v.current = 1 + .1 * o, p.current.style.transform = "scale(".concat(v.current, ")")
                            }
                        }), [], u);
                    return cn("div", {
                        className: Object(i.a)(an.a.outer, f && an.a.bordered)
                    }, cn("figure", {
                        className: an.a.inner,
                        ref: h
                    }, cn(Te.a, {
                        ref: p,
                        className: Object(i.a)(an.a.image, u && an.a.inView),
                        asset: l,
                        ratio: "portrait" === s ? 133.333 : 75,
                        useRatio: d,
                        opensOverlay: !0,
                        getPopupIndex: o,
                        setOverlayOpen: c,
                        uid: a,
                        getScale: function() {
                            return v.current
                        }
                    })))
                },
                ln = n("UDXs"),
                sn = n("lMyf"),
                fn = n("l/uS"),
                dn = n.n(fn),
                pn = o.a.createElement,
                yn = function(e) {
                    var t = e.className,
                        n = e.difficulty,
                        o = e.activeColor,
                        a = e.percentage,
                        c = e.theme,
                        u = (Ke.a[o] || {}).backgroundColor,
                        l = Object(r.useRef)(null),
                        s = Object(r.useRef)(null),
                        f = Object(r.useRef)(null),
                        d = Math.round(28 * n);
                    Object(r.useEffect)((function() {
                        for (var e, t, n = Math.round(Object(ke.a)(Object(ke.e)([0, 75], [0, d], a), 0, d)), r = (null === (e = s.current) || void 0 === e ? void 0 : e.childNodes) || [], o = (null === (t = f.current) || void 0 === t ? void 0 : t.childNodes) || [], i = 0; i < r.length; i++) r[i].style.opacity = i < n ? 0 : "";
                        for (var c = 0; c < o.length; c++) o[c].style.opacity = c < n ? 1 : ""
                    }), [d, a]);
                    var p = Object(r.useCallback)((function(e) {
                        l.current = e
                    }), [l]);
                    return pn("svg", {
                        ref: p,
                        className: t,
                        viewBox: "0 0 80 274"
                    }, pn("g", {
                        ref: s,
                        className: Object(i.a)(dn.a.group, dn.a.default, dn.a[c])
                    }, pn("line", {
                        y1: "272",
                        x2: "80",
                        y2: "272"
                    }), pn("line", {
                        y1: "262",
                        x2: "80",
                        y2: "262"
                    }), pn("line", {
                        y1: "252",
                        x2: "80",
                        y2: "252"
                    }), pn("line", {
                        y1: "242",
                        x2: "80",
                        y2: "242"
                    }), pn("line", {
                        y1: "232",
                        x2: "80",
                        y2: "232"
                    }), pn("line", {
                        y1: "222",
                        x2: "80",
                        y2: "222"
                    }), pn("line", {
                        y1: "212",
                        x2: "80",
                        y2: "212"
                    }), pn("line", {
                        y1: "202",
                        x2: "80",
                        y2: "202"
                    }), pn("line", {
                        y1: "192",
                        x2: "80",
                        y2: "192"
                    }), pn("line", {
                        y1: "182",
                        x2: "80",
                        y2: "182"
                    }), pn("line", {
                        y1: "172",
                        x2: "80",
                        y2: "172"
                    }), pn("line", {
                        y1: "162",
                        x2: "80",
                        y2: "162"
                    }), pn("line", {
                        y1: "152",
                        x2: "80",
                        y2: "152"
                    }), pn("line", {
                        y1: "142",
                        x2: "80",
                        y2: "142"
                    }), pn("line", {
                        y1: "132",
                        x2: "80",
                        y2: "132"
                    }), pn("line", {
                        y1: "122",
                        x2: "80",
                        y2: "122"
                    }), pn("line", {
                        y1: "112",
                        x2: "80",
                        y2: "112"
                    }), pn("line", {
                        y1: "102",
                        x2: "80",
                        y2: "102"
                    }), pn("line", {
                        y1: "92",
                        x2: "80",
                        y2: "92"
                    }), pn("line", {
                        y1: "82",
                        x2: "80",
                        y2: "82"
                    }), pn("line", {
                        y1: "72",
                        x2: "80",
                        y2: "72"
                    }), pn("line", {
                        y1: "62",
                        x2: "80",
                        y2: "62"
                    }), pn("line", {
                        y1: "52",
                        x2: "80",
                        y2: "52"
                    }), pn("line", {
                        y1: "42",
                        x2: "80",
                        y2: "42"
                    }), pn("line", {
                        y1: "32",
                        x2: "80",
                        y2: "32"
                    }), pn("line", {
                        y1: "22",
                        x2: "80",
                        y2: "22"
                    }), pn("line", {
                        y1: "12",
                        x2: "80",
                        y2: "12"
                    }), pn("line", {
                        y1: "2",
                        x2: "80",
                        y2: "2"
                    })), pn("g", {
                        ref: f,
                        style: {
                            stroke: u
                        },
                        className: Object(i.a)(dn.a.group, dn.a.active)
                    }, pn("line", {
                        y1: "272",
                        x2: "80",
                        y2: "272"
                    }), pn("line", {
                        y1: "262",
                        x2: "80",
                        y2: "262"
                    }), pn("line", {
                        y1: "252",
                        x2: "80",
                        y2: "252"
                    }), pn("line", {
                        y1: "242",
                        x2: "80",
                        y2: "242"
                    }), pn("line", {
                        y1: "232",
                        x2: "80",
                        y2: "232"
                    }), pn("line", {
                        y1: "222",
                        x2: "80",
                        y2: "222"
                    }), pn("line", {
                        y1: "212",
                        x2: "80",
                        y2: "212"
                    }), pn("line", {
                        y1: "202",
                        x2: "80",
                        y2: "202"
                    }), pn("line", {
                        y1: "192",
                        x2: "80",
                        y2: "192"
                    }), pn("line", {
                        y1: "182",
                        x2: "80",
                        y2: "182"
                    }), pn("line", {
                        y1: "172",
                        x2: "80",
                        y2: "172"
                    }), pn("line", {
                        y1: "162",
                        x2: "80",
                        y2: "162"
                    }), pn("line", {
                        y1: "152",
                        x2: "80",
                        y2: "152"
                    }), pn("line", {
                        y1: "142",
                        x2: "80",
                        y2: "142"
                    }), pn("line", {
                        y1: "132",
                        x2: "80",
                        y2: "132"
                    }), pn("line", {
                        y1: "122",
                        x2: "80",
                        y2: "122"
                    }), pn("line", {
                        y1: "112",
                        x2: "80",
                        y2: "112"
                    }), pn("line", {
                        y1: "102",
                        x2: "80",
                        y2: "102"
                    }), pn("line", {
                        y1: "92",
                        x2: "80",
                        y2: "92"
                    }), pn("line", {
                        y1: "82",
                        x2: "80",
                        y2: "82"
                    }), pn("line", {
                        y1: "72",
                        x2: "80",
                        y2: "72"
                    }), pn("line", {
                        y1: "62",
                        x2: "80",
                        y2: "62"
                    }), pn("line", {
                        y1: "52",
                        x2: "80",
                        y2: "52"
                    }), pn("line", {
                        y1: "42",
                        x2: "80",
                        y2: "42"
                    }), pn("line", {
                        y1: "32",
                        x2: "80",
                        y2: "32"
                    }), pn("line", {
                        y1: "22",
                        x2: "80",
                        y2: "22"
                    }), pn("line", {
                        y1: "12",
                        x2: "80",
                        y2: "12"
                    }), pn("line", {
                        y1: "2",
                        x2: "80",
                        y2: "2"
                    })))
                },
                vn = n("XQF6"),
                hn = n.n(vn),
                bn = o.a.createElement,
                mn = function(e) {
                    var t = e.handleOnClick;
                    return bn("button", {
                        className: hn.a.container,
                        onClick: t,
                        "aria-label": "Product Info"
                    }, "i")
                },
                gn = n("0SoA"),
                On = n.n(gn),
                _n = function(e) {
                    return {}
                },
                jn = {
                    setCategoryPopupContent: V.d,
                    toggleCategoryPopup: V.j
                },
                Cn = function(e) {
                    return Object(B.b)(_n, jn)(e)
                },
                wn = o.a.createElement,
                Pn = Cn((function(e) {
                    var t = e.className,
                        n = e.difficulty,
                        r = void 0 === n ? 1 : n,
                        o = e.color,
                        a = e.theme,
                        c = e.labelTop,
                        u = void 0 === c ? "" : c,
                        l = e.labelBottom,
                        s = void 0 === l ? "" : l,
                        f = e.percentage,
                        d = e.categoryPopup,
                        p = e.setCategoryPopupContent,
                        y = e.toggleCategoryPopup;
                    return wn("div", {
                        className: Object(i.a)(On.a.container, On.a[a], t)
                    }, wn(yn, {
                        className: On.a.progressBar,
                        percentage: f,
                        difficulty: r,
                        activeColor: o,
                        theme: a
                    }), wn("div", {
                        className: On.a.details
                    }, wn("span", {
                        className: On.a.labelTop
                    }, u, !!d && wn(mn, {
                        handleOnClick: function() {
                            y(!0), p(d)
                        }
                    })), wn("span", {
                        className: Object(i.a)(On.a.labelBottom)
                    }, s)))
                })),
                Ln = n("tLwA"),
                kn = n.n(Ln),
                Sn = o.a.createElement,
                Mn = function(e) {
                    var t = e.fields,
                        n = t.text,
                        o = t.meters,
                        a = e.scrollRange,
                        c = void 0 === a ? [0, 0] : a,
                        u = e.index,
                        l = e.slidesLength,
                        f = e.activeSlideIndex,
                        d = e.activeGender,
                        p = void 0 === d ? "" : d,
                        y = Object(r.useRef)(null),
                        v = Object(r.useState)(0),
                        h = v[0],
                        b = v[1],
                        m = Object(r.useRef)(0);
                    return Object(r.useEffect)((function() {
                        f !== u && (y.current.style.opacity = 0)
                    }), [u, f]), Object(Me.a)({
                        onAnimationFrame: Object(r.useCallback)((function(e) {
                            var t = Se(c, e),
                                n = Object(ke.a)(t < 75 ? Object(ke.e)([0, 20], [0, 1], t) : Object(ke.e)([75, 100], [0, 1], t), 0, 1),
                                r = Math.round(t);
                            h !== r && b(r), n !== m.current && (t > 75 ? u !== l - 1 && (y.current.style.opacity = 1 - n) : y.current.style.opacity = n), m.current = n
                        }), [u, l, h, c]),
                        active: f === u
                    }), Sn("li", {
                        className: Object(i.a)(kn.a.container, f === u && kn.a.isActive)
                    }, Sn("div", {
                        ref: y,
                        className: kn.a.content
                    }, n && Sn(D, {
                        className: Object(i.a)(kn.a.text, kn.a[p.toLocaleLowerCase()]),
                        text: n
                    }), o && Sn("div", {
                        className: kn.a.meters
                    }, o.map((function(e) {
                        var t = e.fields,
                            n = e.sys;
                        return Sn(Pn, Object(s.a)({
                            key: null === n || void 0 === n ? void 0 : n.id,
                            percentage: h,
                            theme: "dark"
                        }, t))
                    })))))
                },
                En = n("msoq"),
                xn = n.n(En),
                In = o.a.createElement,
                Nn = function(e) {
                    var t = e.className;
                    return In("svg", {
                        className: Object(i.a)(t, xn.a.container),
                        viewBox: "0 0 19 16"
                    }, In("path", {
                        className: xn.a.stroke,
                        d: "M17.1031 7.91846H0.5"
                    }), In("path", {
                        className: xn.a.path,
                        d: "M17.4969 7.39961L18.5969 7.39961L18.5969 6.87057L18.1836 6.54029L17.4969 7.39961ZM17.4969 8.60033L18.1836 9.45964L18.5969 9.12937L18.5969 8.60033L17.4969 8.60033ZM9.29766 2.25531L16.8102 8.25892L18.1836 6.54029L10.6711 0.536682L9.29766 2.25531ZM16.3969 7.39961L16.3969 8.60033L18.5969 8.60033L18.5969 7.39961L16.3969 7.39961ZM16.8102 7.74102L9.29766 13.7446L10.6711 15.4633L18.1836 9.45964L16.8102 7.74102Z"
                    }))
                },
                Tn = n("pyrT"),
                Rn = n.n(Tn),
                Dn = function(e) {
                    return {
                        getActiveGender: function() {
                            return e.appReducer.activeGender
                        }
                    }
                },
                An = {
                    setActiveGender: V.c
                },
                Bn = function(e) {
                    return Object(B.b)(Dn, An)(e)
                },
                Vn = o.a.createElement,
                Hn = Bn((function(e) {
                    var t = e.fields,
                        n = t.description,
                        o = t.productSet,
                        a = t.uspSlides,
                        c = void 0 === a ? [] : a,
                        u = t.theme,
                        l = t.shopLinkText,
                        f = t.slidesBackgroundImage,
                        d = t.slidesBackgroundVideoMobile,
                        p = t.slidesBackgroundVideoDesktop,
                        y = e.setActiveGender,
                        v = e.getActiveGender,
                        h = Object(Ne.a)(),
                        b = Object(ue.a)(),
                        m = Object(q.a)(b, 2),
                        g = m[0],
                        O = m[1],
                        _ = v(),
                        j = ((null === o || void 0 === o ? void 0 : o.fields) || {}).womensProduct,
                        C = Object(ln.a)(o, _),
                        w = h ? d : p,
                        P = (null === C || void 0 === C ? void 0 : C.fields) || {},
                        L = P.image,
                        S = P.url,
                        M = Object(J.g)(L).fields,
                        E = Object(J.h)(M),
                        x = Object(r.useRef)(null),
                        I = Object(r.useRef)(null),
                        N = Object(r.useRef)(null),
                        T = Object(r.useRef)(null),
                        R = Object(r.useRef)(!1),
                        A = Object(r.useRef)(1),
                        B = Object(r.useRef)(0),
                        V = Object(r.useRef)(0),
                        H = Object(Ie.a)(),
                        Z = Object(r.useRef)([0, 0]),
                        W = Object(r.useRef)([0, 0]),
                        G = Object(r.useRef)([0, 0]),
                        U = Object(r.useRef)([0, 0]),
                        F = Object(r.useRef)([0, 0]),
                        z = Object(r.useRef)([0, 0]),
                        K = Object(r.useState)([]),
                        Y = K[0],
                        X = K[1],
                        Q = Object(r.useState)(!1),
                        $ = Q[0],
                        ee = Q[1],
                        te = Object(r.useState)(-1),
                        ne = te[0],
                        re = te[1],
                        oe = Object(r.useState)(!0),
                        ae = oe[0],
                        ie = oe[1],
                        ce = c.reduce((function(e, t) {
                            var n;
                            return Math.max(e, null === t || void 0 === t || null === (n = t.fields) || void 0 === n ? void 0 : n.zoomFactor)
                        }), 1) || 1,
                        le = Object(r.useCallback)((function(e, t, n) {
                            var r, o = E / 100,
                                a = Object(ke.c)(I.current),
                                i = a.top,
                                c = a.left,
                                u = Object(ke.c)(x.current),
                                l = u.top,
                                s = u.left,
                                f = null === (r = I.current) || void 0 === r ? void 0 : r.offsetWidth,
                                d = .8 * e,
                                p = Math.min(.7 * t / o, d) * ce,
                                y = p * o,
                                v = f / p,
                                h = 1 / ce;
                            W.current = [v, h];
                            var b = e / 2 - (c - s),
                                m = T.current.getBoundingClientRect().height / 2 - (i - l),
                                g = p / 2,
                                O = y / 2;
                            G.current = [b, m], F.current = [0, g - b * ce], z.current = [0, O - m * ce], Z.current = [l, l + n];
                            var _ = 1 / v * b,
                                j = 1 / v * m;
                            U.current = [_, j], N.current.style.width = "".concat(p, "px")
                        }), [E, ce]),
                        se = Object(r.useCallback)((function(e) {
                            var t = Object(q.a)(Z.current, 2),
                                n = (t[0], t[1]),
                                r = [],
                                o = n;
                            c.forEach((function() {
                                r.push([o, o + e]), o += e
                            })), X(r)
                        }), [c]);
                    Object(r.useEffect)((function() {
                        if (Y.length && !R.current) {
                            var e = Object(Nt.a)(),
                                t = c.length - 1,
                                n = Object(q.a)(Y[t], 2),
                                r = (n[0], n[1]);
                            if (e < Object(q.a)(Z.current, 1)[0]) {
                                var o = Object(q.a)(W.current, 1)[0],
                                    a = Object(q.a)(U.current, 2),
                                    i = a[0],
                                    u = a[1];
                                N.current.style.transform = "scale(".concat(o, ") translate3d(-").concat(i, "px, -").concat(u, "px, 0)")
                            } else if (e > r) {
                                var l, s, f, d, p = ((null === (l = c[t]) || void 0 === l || null === (s = l.fields) || void 0 === s ? void 0 : s.zoomFactor) || 1) / ce,
                                    y = null === (f = c[t]) || void 0 === f || null === (d = f.fields) || void 0 === d ? void 0 : d.imagePosition,
                                    v = "left" === y ? h ? 10 : 100 : 50,
                                    b = "left" === y && h ? 75 : 50;
                                N.current.style.transform = "scale(".concat(p, ") translate3d(-").concat(v, "%, -").concat(b, "%, 0)")
                            }
                        }
                    }), [h, ce, c, Y]), Object(Ee.a)((function() {
                        var e = window.innerWidth,
                            t = window.innerHeight,
                            n = h ? .85 * t : .6 * t,
                            r = n + (c.length + 1) * t;
                        x.current.style.height = "".concat(r, "px"), le(e, t, n), se(t)
                    }), [h, le, c.length]);
                    var fe = Object(r.useCallback)((function(e, t, n, r, o) {
                            var a, i, u, l, s, f, d = null === (a = c[o - 1]) || void 0 === a || null === (i = a.fields) || void 0 === i ? void 0 : i.imagePosition,
                                p = null === (u = c[o]) || void 0 === u || null === (l = u.fields) || void 0 === l ? void 0 : l.imagePosition;
                            return "x" === e ? h ? (s = "left" === d ? 10 : 50, f = "left" === p ? 10 : 50) : (s = "left" === d ? 100 : 50, f = "left" === p ? 100 : 50) : h ? (s = "left" === d ? 75 : 50, f = "left" === p ? 75 : 50) : (s = 50, f = 50), s > f ? f + (s - Object(ke.a)(Object(ke.e)([n, r], [f, s], t), f, s)) : Object(ke.a)(Object(ke.e)([n, r], [s, f], t), s, f)
                        }), [c, h]),
                        de = Object(r.useCallback)((function(e, t, n, r) {
                            var o, a, i, u, l = ((null === (o = c[r - 1]) || void 0 === o || null === (a = o.fields) || void 0 === a ? void 0 : a.zoomFactor) || 1) / ce,
                                s = ((null === (i = c[r]) || void 0 === i || null === (u = i.fields) || void 0 === u ? void 0 : u.zoomFactor) || 1) / ce;
                            return l > s ? s + (l - Object(ke.a)(Object(ke.e)([t, n], [s, l], e), s, l)) : Object(ke.a)(Object(ke.e)([t, n], [l, s], e), l, s)
                        }), [ce, c]),
                        pe = Object(r.useCallback)((function(e, t, n) {
                            if (h) {
                                var r = Object(q.a)(W.current, 1)[0],
                                    o = Object(q.a)(U.current, 2),
                                    a = o[0],
                                    i = o[1],
                                    c = Object(ke.a)(Object(ke.e)([t, t + 100], [0, 1], e), 0, 1);
                                if (c === A.current && i === V.current) return;
                                N.current.style.transform = "scale(".concat(r, ") translate3d(-").concat(a, "px, -").concat(i, "px, 0)"), N.current.style.opacity = 1 - c, A.current = c, B.current = a, V.current = i
                            } else {
                                var u = Object(q.a)(W.current, 2),
                                    l = u[0],
                                    s = u[1],
                                    f = Object(ke.a)(Object(ke.e)([t, n], W.current, e), l, s),
                                    d = H(f),
                                    p = Object(q.a)(d, 2),
                                    y = p[0],
                                    v = p[1],
                                    b = Object(q.a)(G.current, 2),
                                    m = b[0],
                                    g = b[1] * (1 / y),
                                    O = m * (1 / y) + Object(ke.e)([t, n], F.current, e),
                                    _ = g + Object(ke.e)([t, n], z.current, e);
                                if (y === v && O === B.current && _ === V.current) return;
                                N.current.style.transform = "scale(".concat(y, ") translate3d(-").concat(O, "px, -").concat(_, "px, 0)"), B.current = O, V.current = _
                            }
                        }), [H, h]),
                        ye = Object(r.useCallback)((function(e, t, n, r) {
                            var o = de(e, t, n, r),
                                a = fe("x", e, t, n, r),
                                i = fe("y", e, t, n, r),
                                c = H(o),
                                u = Object(q.a)(c, 2),
                                l = u[0];
                            l !== u[1] && (N.current.style.transform = "scale(".concat(l, ") translate3d(-").concat(a, "%, -").concat(i, "%, 0)"))
                        }), [H, de, fe]),
                        ve = Object(r.useCallback)((function(e, t) {
                            if (h) {
                                var n = Object(ke.a)(Object(ke.e)([t, t + 100], [0, 1], e), 0, 1);
                                N.current.style.opacity = n, A.current = n
                            } else 1 !== A.current && (N.current.style.opacity = 1)
                        }), [h]),
                        he = Object(r.useCallback)((function() {
                            $ && ee(!1), -1 !== ne && re(-1)
                        }), [$, ne]);
                    Object(Me.a)({
                        onAnimationFrame: Object(r.useCallback)((function(e) {
                            var t = Z.current || [],
                                n = Object(q.a)(t, 2),
                                r = n[0],
                                o = n[1];
                            e >= r && e < o ? (R.current || (R.current = !0), he(), pe(e, r, o)) : e > o ? (ve(e, o), c.forEach((function(t, n) {
                                var r = Y[n] || [],
                                    o = Object(q.a)(r, 2),
                                    a = o[0],
                                    i = o[1];
                                e >= a && e < i && (R.current || (R.current = !0), ne !== n && re(n), ye(e, a, i, n)), n === c.length - 1 && (e > i ? ae && ie(!1) : !ae && ie(!0))
                            })), !$ && ee(!0)) : (R.current && (R.current = !1), function() {
                                var e = Object(q.a)(W.current, 1)[0],
                                    t = Object(q.a)(U.current, 2),
                                    n = t[0],
                                    r = t[1];
                                B.current === n && V.current === r && 1 === A.current || (Object.assign(N.current.style, {
                                    transform: "scale(".concat(e, ") translate3d(-").concat(n, "px, -").concat(r, "px, 0)"),
                                    opacity: 1
                                }), B.current = n, V.current = r, A.current = 1)
                            }(), he())
                        }), [ne, Y, ae, ve, ye, pe, c, $, he]),
                        active: O
                    });
                    var be = Object(r.useCallback)((function(e) {
                        x.current = e, g(e)
                    }), [x, g]);
                    return Vn("div", {
                        ref: be,
                        className: Rn.a.container
                    }, Vn("div", {
                        className: Rn.a.scrollContainer
                    }, Vn("aside", {
                        className: Rn.a.aside
                    }, Vn("div", {
                        className: Rn.a.toggle
                    }, j && Vn(sn.a, {
                        activeGender: _,
                        setActiveGender: y,
                        focusable: !0
                    })), Vn("a", {
                        href: S,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        ref: I,
                        className: Rn.a.imagePlaceholder
                    }, Vn(k.a, {
                        className: Rn.a.image,
                        asset: L,
                        preventZoom: !0
                    }))), Vn(D, {
                        className: Rn.a.text,
                        text: n,
                        gender: _
                    })), Vn("div", {
                        ref: T,
                        className: Object(i.a)(Rn.a.stickyContainer, $ ? Rn.a.dark : Rn.a[u])
                    }, Vn("div", {
                        "aria-hidden": "true",
                        className: Object(i.a)(Rn.a.backgroundMedia, $ && ae && Rn.a.isVisible)
                    }, f && Vn(k.a, {
                        useRatio: !1,
                        asset: f
                    }), w && Vn(Ze, {
                        asset: w,
                        hideControls: !0
                    })), Vn("div", {
                        ref: N,
                        className: Object(i.a)(Rn.a.imageContainer, O && Rn.a.inView)
                    }, Vn(k.a, {
                        className: Rn.a.image,
                        asset: L,
                        hasLoadingState: !1,
                        preventZoom: !0
                    })), Vn("ul", {
                        className: Object(i.a)(Rn.a.slides, $ && Rn.a.isVisible)
                    }, c.map((function(e, t) {
                        var n;
                        return Vn(Mn, Object(s.a)({
                            key: null === e || void 0 === e || null === (n = e.sys) || void 0 === n ? void 0 : n.id,
                            index: t,
                            slidesLength: c.length,
                            scrollRange: Y[t],
                            activeSlideIndex: ne,
                            activeGender: _
                        }, e))
                    })), Vn("a", {
                        href: S,
                        rel: "noreferrer",
                        target: "_blank",
                        className: Object(i.a)(Rn.a.link, ae && Rn.a.isFixed)
                    }, Vn(Nn, {
                        className: Rn.a.arrow
                    }), l))))
                })),
                Zn = function(e, t, n, o) {
                    var a = Object(r.useCallback)(e, t),
                        i = Object(Ne.a)(),
                        c = Object(r.useRef)(null),
                        u = Object(r.useRef)([0, 0]);
                    Object(Ee.a)((function() {
                        var e = c.current.getBoundingClientRect().height,
                            t = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) + c.current.getBoundingClientRect().top;
                        u.current = [t, t + (e - window.innerHeight)]
                    }), []);
                    var l = n && (o && !i || !o);
                    return Object(Me.a)({
                        onAnimationFrame: Object(r.useCallback)((function(e) {
                            var t = Object(ke.a)(Object(ke.e)(u.current, [0, 100], e), 0, 100);
                            a(t)
                        }), [a]),
                        active: l
                    }), c
                },
                Wn = n("GqpQ"),
                Gn = n.n(Wn),
                Un = o.a.createElement,
                Fn = Object(r.forwardRef)((function(e, t) {
                    var n = e.className,
                        o = e.pathLength,
                        c = e.animatePath,
                        u = e.inView,
                        l = e.onMount,
                        f = Object(ce.a)(e, ["className", "pathLength", "animatePath", "inView", "onMount"]),
                        d = Object(a.c)(),
                        p = Object(r.useRef)(!1),
                        y = Object(Ne.a)(),
                        v = Object(r.useCallback)((function(e, t) {
                            d.set({
                                strokeDashoffset: e
                            }), d.start({
                                strokeDashoffset: t,
                                transition: {
                                    duration: 1.25
                                }
                            })
                        }), [d]);
                    return Object(r.useEffect)((function() {
                        d.set({
                            strokeDashoffset: o,
                            strokeDasharray: o
                        })
                    }), [d, o]), Object(r.useEffect)(l, []), Object(Me.a)({
                        onScroll: Object(r.useCallback)((function(e) {
                            var t = e.direction;
                            c && !p.current && v(o, "down" === t ? 0 : 2 * o), p.current = c
                        }), [o, v, c]),
                        active: u
                    }), y ? Un("svg", {
                        viewBox: "0 0 318 841",
                        preserveAspectRatio: "xMidYMin slice",
                        className: Object(i.a)(Gn.a.svg, n, c && Gn.a.animatePath)
                    }, Un(a.b.path, {
                        className: Gn.a.line,
                        animate: d,
                        d: "M77.6,840.2l8-32.6c0.1-0.3,0.1-0.8,0-1.1l-2.8-14.1c0-0.2,0-0.5,0-0.7l0.6-10.3c0-0.3,0-0.5,0.1-0.7l3.6-7.5  c0-0.1,0.1-0.3,0.1-0.6l0.7-9.7c0-0.1,0-0.2,0-0.3L89,756c0-0.3,0.1-0.4,0.2-0.5l14.8-10.2l15.2-12.2c0.1,0,0.2-0.2,0.2-0.4l8-38  c0.1-0.1,0.1-0.1,0.1-0.2l4.9-13.7c0.1-0.2,0.1-0.3,0.1-0.5l2.5-24.9c0-0.1,0.1-0.3,0.1-0.4l2.6-7.5c0.1-0.2,0.2-0.3,0.3-0.2  l1.6,0.9c0.1,0.1,0.2,0,0.3-0.2l2.1-5.5c0-0.1,0.1-0.2,0.1-0.2l2.1-2.9c0-0.1,0.1-0.2,0.1-0.4l3.3-15.4c0-0.1,0-0.2,0.1-0.3  l6.8-10.3c0.1-0.1,0.2-0.3,0.2-0.6l2.6-30.6l1.7-16.2l-0.1,0.6l18.4-31.3c0.2-0.4,0.2-1.5,0-1.8l-3.3-4.5c-0.3-0.3-0.3-1.4,0-1.8  l3.8-5.6c0.2-0.3,0.2-0.9,0.1-1.4l-1.2-5.9c-0.1-0.5,0-1.2,0.1-1.4l14.9-22.5l3.5-6.2l0.1-0.3l1.9-3.5l2.1-4l3.7-8.9V467l2.7-9.3  c0-0.2,0.1-0.3,0.1-0.5l0.7-20c0-0.4,0.1-0.8,0.3-0.9l5.2-2.8c0.1,0,0.1-0.2,0.2-0.3l2.1-8c0.1-0.2,0.1-0.5,0.1-0.8l-0.5-13.3  c0-0.3,0-0.5,0.1-0.7l1.9-7.9c0-0.1,0-0.2,0-0.2l0.9-6.9c0-0.3,0-0.6,0-0.8l-7.2-41.1l-7-43.1c0-0.2,0-0.5,0-0.7l4.1-43.6  c0-0.1,0-0.2,0-0.3l0.1-20.5c0-0.2,0-0.4,0-0.5l4.5-22.1c0-0.2,0-0.3,0-0.5l0.1-11.1c0-0.3,0-0.6-0.1-0.8l-1.3-3.2  c-0.1-0.2-0.1-0.5-0.1-0.8v-8.4c0-0.1,0-0.2,0-0.3l-0.7-6.8c0-0.2,0-0.4,0-0.6l1.6-17.8c0-0.2,0-0.4,0-0.5l-1.9-22.6  c0-0.3,0-0.6,0-0.8l5.8-26.2l2.8-14.2c0-0.3,0.1-0.4,0.2-0.5l4-1.8l0.1-0.1l7.4-14.2c0.3-0.5,0.2-1.8-0.1-1.8l-4.7-1.4  c-0.3-0.1-0.4-1.2-0.2-1.8l1.8-4.8c0.2-0.5,0.1-1.4-0.1-1.7l-2.5-3.4c-0.2-0.3-0.3-1.1-0.1-1.6l2.4-8.6c0-0.1,0-0.2,0.1-0.3  l2.2-15.9c0.1-0.4,0-1-0.1-1.2l-3.2-6.3c0-0.1-0.1-0.2-0.1-0.3l-2.2-9.9c-0.1-0.5-0.1-1.2,0.1-1.4l4-7c0.2-0.3,0.2-1.1,0.1-1.6  l-3.4-10.6c-0.1-0.5-0.1-1.2,0.1-1.5l4.7-9.3"
                    }), Un("g", null, Un("ellipse", {
                        className: Gn.a.ellipse,
                        cx: "0",
                        cy: "0",
                        rx: "7.4",
                        ry: "7.4"
                    })), Un("path", {
                        className: Gn.a.letter,
                        d: "M52.3,822.8c-0.6,0-1,0.3-1.4,1c-0.3,0.7-0.5,1.7-0.5,2.9c0,1.3,0.2,2.2,0.5,2.9c0.3,0.7,0.8,1,1.4,1 c0.6,0,1-0.3,1.4-1c0.3-0.7,0.5-1.7,0.5-2.9c0-1.3-0.2-2.2-0.5-2.9C53.3,823.1,52.9,822.8,52.3,822.8z M52.3,831.8 c-0.9,0-1.7-0.4-2.3-1.3c-0.6-0.9-0.8-2.1-0.8-3.7c0-1.6,0.3-2.8,0.8-3.7c0.6-0.9,1.3-1.3,2.3-1.3c0.9,0,1.7,0.4,2.3,1.3 c0.6,0.9,0.8,2.1,0.8,3.7s-0.3,2.8-0.8,3.7C54,831.3,53.3,831.8,52.3,831.8z"
                    }), Un("path", {
                        className: Gn.a.letter,
                        d: "M63.6,827.3c0-0.7-0.1-1.2-0.2-1.4c-0.1-0.3-0.3-0.4-0.7-0.4c-0.4,0-0.7,0.2-0.9,0.5c-0.2,0.3-0.3,0.8-0.3,1.3 v3.1h0.1c0.3,0,0.5,0,0.6,0.1c0.1,0.1,0.2,0.2,0.2,0.4c0,0.2,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1h-1c-0.2,0-0.4,0-0.4-0.2 c-0.1-0.1-0.1-0.3-0.1-0.6v-0.2v-3.2v-0.6c0-0.4-0.1-0.7-0.3-0.9c-0.2-0.2-0.4-0.3-0.7-0.3c-0.2,0-0.4,0.1-0.6,0.2 c-0.2,0.1-0.3,0.3-0.5,0.6v4.2h0.3c0.3,0,0.5,0,0.6,0.1c0.1,0.1,0.2,0.2,0.2,0.4c0,0.2,0,0.4-0.1,0.4c-0.1,0.1-0.2,0.1-0.5,0.1h-2 c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.4-0.1,0.7-0.1h0.2v-4.8h-0.1c-0.4,0-0.6,0-0.7-0.1 c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.1,0.5-0.1h1.2c0.2,0,0.3,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.4 c0.2-0.2,0.4-0.4,0.7-0.5c0.2-0.1,0.5-0.2,0.8-0.2c0.4,0,0.6,0.1,0.9,0.2c0.2,0.2,0.4,0.4,0.5,0.7c0.2-0.3,0.5-0.6,0.7-0.7 c0.3-0.2,0.6-0.2,1-0.2c0.7,0,1.1,0.2,1.4,0.6c0.3,0.4,0.5,1.1,0.5,2.1v3.4h0.1c0.3,0,0.5,0,0.6,0.1c0.1,0.1,0.2,0.2,0.2,0.4 c0,0.2,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1h-0.9c-0.2,0-0.4-0.1-0.4-0.2c-0.1-0.1-0.1-0.3-0.1-0.6V827.3z"
                    }), Un("path", {
                        className: Gn.a.letter,
                        d: "M234.5,395.8c0.6,0.2,1,0.5,1.4,0.9c0.3,0.4,0.5,0.9,0.5,1.6c0,0.9-0.3,1.6-0.9,2.2c-0.6,0.6-1.4,0.8-2.4,0.8 c-0.8,0-1.4-0.1-2-0.4c-0.6-0.3-0.9-0.6-0.9-1c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.2-0.2,0.4-0.2c0.1,0,0.4,0.1,0.9,0.4 c0.5,0.3,1,0.4,1.5,0.4c0.6,0,1.1-0.2,1.5-0.5c0.4-0.3,0.6-0.8,0.6-1.3c0-0.4-0.1-0.8-0.4-1.1c-0.3-0.3-0.6-0.5-1.1-0.6 c-0.1,0-0.3,0-0.5-0.1c-0.4,0-0.6-0.2-0.6-0.5c0-0.3,0.2-0.5,0.6-0.5c0.2,0,0.3,0,0.4-0.1c0.4-0.1,0.7-0.2,1-0.5 c0.2-0.3,0.4-0.6,0.4-1c0-0.5-0.1-0.9-0.4-1.2c-0.3-0.3-0.7-0.5-1.1-0.5c-0.4,0-0.9,0.1-1.3,0.4c-0.4,0.3-0.7,0.4-0.8,0.4 c-0.1,0-0.3,0-0.4-0.1c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.3,0.3-0.6,0.8-0.9c0.6-0.3,1.2-0.5,1.9-0.5c0.8,0,1.4,0.2,2,0.7 c0.5,0.5,0.8,1.1,0.8,1.8c0,0.5-0.1,1-0.4,1.3C235.4,395.3,235,395.6,234.5,395.8z"
                    }), Un("path", {
                        className: Gn.a.letter,
                        d: "M241.8,392.3c-0.6,0-1,0.3-1.4,1c-0.3,0.7-0.5,1.7-0.5,2.9c0,1.3,0.2,2.2,0.5,2.9c0.3,0.7,0.8,1,1.4,1 c0.6,0,1-0.3,1.4-1c0.3-0.7,0.5-1.7,0.5-2.9c0-1.3-0.2-2.2-0.5-2.9C242.9,392.6,242.4,392.3,241.8,392.3z M241.8,401.3 c-0.9,0-1.7-0.4-2.3-1.3c-0.6-0.9-0.8-2.1-0.8-3.7c0-1.6,0.3-2.8,0.8-3.7c0.6-0.9,1.3-1.3,2.3-1.3s1.7,0.4,2.3,1.3 c0.6,0.9,0.8,2.1,0.8,3.7s-0.3,2.8-0.8,3.7C243.5,400.8,242.8,401.3,241.8,401.3z"
                    }), Un("path", {
                        className: Gn.a.letter,
                        d: "M253.2,396.8c0-0.7-0.1-1.2-0.2-1.4c-0.1-0.3-0.3-0.4-0.7-0.4c-0.4,0-0.7,0.2-0.9,0.5c-0.2,0.3-0.3,0.8-0.3,1.3 v3.1h0.1c0.3,0,0.5,0,0.6,0.1c0.1,0.1,0.2,0.2,0.2,0.4c0,0.2,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1h-1c-0.2,0-0.4,0-0.4-0.2 c-0.1-0.1-0.1-0.3-0.1-0.6V400v-3.2v-0.6c0-0.4-0.1-0.7-0.3-0.9c-0.2-0.2-0.4-0.3-0.7-0.3c-0.2,0-0.4,0.1-0.6,0.2 c-0.2,0.1-0.3,0.3-0.5,0.6v4.2h0.3c0.3,0,0.5,0,0.6,0.1c0.1,0.1,0.2,0.2,0.2,0.4c0,0.2,0,0.4-0.1,0.4c-0.1,0.1-0.2,0.1-0.5,0.1h-2 c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.4-0.1,0.7-0.1h0.2v-4.8h-0.1c-0.4,0-0.6,0-0.7-0.1 c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.1,0.5-0.1h1.2c0.2,0,0.3,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.4 c0.2-0.2,0.4-0.4,0.7-0.5s0.5-0.2,0.8-0.2c0.4,0,0.6,0.1,0.9,0.2c0.2,0.2,0.4,0.4,0.5,0.7c0.2-0.3,0.5-0.6,0.7-0.7s0.6-0.2,1-0.2 c0.6,0,1.1,0.2,1.4,0.6c0.3,0.4,0.5,1.1,0.5,2.1v3.4h0.1c0.3,0,0.5,0,0.6,0.1c0.1,0.1,0.2,0.2,0.2,0.4c0,0.2,0,0.3-0.1,0.4 c-0.1,0.1-0.2,0.1-0.4,0.1h-0.9c-0.2,0-0.3-0.1-0.4-0.2s-0.1-0.3-0.1-0.6V396.8z"
                    }), Un("path", {
                        className: Gn.a.letter,
                        d: "M186.5,21.1c0,0.6,0.2,1.1,0.5,1.5c0.3,0.4,0.7,0.6,1.3,0.6c0.5,0,0.9-0.2,1.2-0.6c0.3-0.4,0.5-0.8,0.5-1.4 c0-0.6-0.2-1.1-0.5-1.5c-0.3-0.4-0.7-0.6-1.2-0.6c-0.5,0-0.9,0.2-1.2,0.6C186.7,20,186.5,20.5,186.5,21.1z M186.3,19 c0.3-0.4,0.6-0.6,0.9-0.8c0.3-0.2,0.7-0.3,1.1-0.3c0.8,0,1.5,0.3,2,0.9c0.6,0.6,0.8,1.3,0.8,2.2c0,0.9-0.3,1.7-0.8,2.3 c-0.5,0.6-1.2,0.9-2.1,0.9c-1,0-1.8-0.4-2.4-1.2c-0.6-0.8-0.9-1.8-0.9-3.2c0-1.7,0.4-3.1,1.3-4.1c0.9-1,2-1.6,3.5-1.6 c0.5,0,0.8,0,1,0.1c0.2,0.1,0.2,0.2,0.2,0.4c0,0.3-0.3,0.5-0.9,0.5c-0.4,0-0.7,0-0.9,0.1c-0.8,0.2-1.4,0.6-1.9,1.2 C186.8,17.1,186.5,18,186.3,19z"
                    }), Un("path", {
                        className: Gn.a.letter,
                        d: "M196.7,15.3c-0.6,0-1,0.3-1.4,1c-0.3,0.7-0.5,1.7-0.5,2.9c0,1.3,0.2,2.2,0.5,2.9c0.3,0.7,0.8,1,1.4,1 c0.6,0,1-0.3,1.4-1c0.3-0.7,0.5-1.7,0.5-2.9c0-1.3-0.2-2.2-0.5-2.9C197.7,15.6,197.3,15.3,196.7,15.3z M196.7,24.2 c-0.9,0-1.7-0.4-2.3-1.3c-0.6-0.9-0.8-2.1-0.8-3.7c0-1.6,0.3-2.8,0.8-3.7c0.6-0.9,1.3-1.3,2.3-1.3s1.7,0.4,2.3,1.3 c0.6,0.9,0.8,2.1,0.8,3.7c0,1.5-0.3,2.8-0.8,3.7C198.4,23.8,197.6,24.2,196.7,24.2z"
                    }), Un("path", {
                        className: Gn.a.letter,
                        d: "M208,19.8c0-0.7-0.1-1.2-0.2-1.4c-0.1-0.3-0.3-0.4-0.7-0.4c-0.4,0-0.7,0.2-0.9,0.5c-0.2,0.3-0.3,0.8-0.3,1.3 v3.1h0.1c0.3,0,0.5,0,0.6,0.1c0.1,0.1,0.2,0.2,0.2,0.4c0,0.2,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1h-1c-0.2,0-0.4-0.1-0.4-0.2 c-0.1-0.1-0.1-0.3-0.1-0.7V23v-3.2v-0.6c0-0.4-0.1-0.7-0.3-0.9c-0.2-0.2-0.4-0.3-0.7-0.3c-0.2,0-0.4,0.1-0.6,0.2 c-0.2,0.1-0.3,0.3-0.5,0.6v4.2h0.3c0.3,0,0.5,0,0.6,0.1c0.1,0.1,0.2,0.2,0.2,0.4c0,0.2,0,0.4-0.1,0.4c-0.1,0.1-0.2,0.1-0.5,0.1h-2 c-0.2,0-0.3,0-0.4-0.1c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.4-0.1,0.7-0.1h0.2v-4.8h-0.1c-0.4,0-0.6,0-0.7-0.1 c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.2,0.1-0.3,0.2-0.4c0.1-0.1,0.3-0.1,0.5-0.1h1.2c0.2,0,0.3,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.4 c0.2-0.2,0.4-0.4,0.7-0.5c0.2-0.1,0.5-0.2,0.8-0.2c0.4,0,0.6,0.1,0.9,0.2c0.2,0.2,0.4,0.4,0.5,0.7c0.2-0.3,0.5-0.6,0.7-0.7 c0.3-0.2,0.6-0.2,1-0.2c0.6,0,1.1,0.2,1.4,0.6c0.3,0.4,0.5,1.1,0.5,2.1v3.4h0.1c0.3,0,0.5,0,0.6,0.1c0.1,0.1,0.2,0.2,0.2,0.4 c0,0.2,0,0.3-0.1,0.4c-0.1,0.1-0.2,0.1-0.4,0.1h-0.9c-0.2,0-0.4-0.1-0.4-0.2c-0.1-0.1-0.1-0.3-0.1-0.6V19.8z"
                    })) : Un("svg", Object(s.a)({
                        viewBox: "0 0 584 841",
                        preserveAspectRatio: "xMidYMin slice",
                        className: Object(i.a)(Gn.a.svg, n, c && Gn.a.animatePath),
                        ref: t
                    }, f), Un(a.b.path, {
                        className: Gn.a.line,
                        animate: d,
                        d: "M51.7,840l24.6-32.6c0.2-0.3,0.3-0.8,0.1-1.1l-8.5-14c-0.1-0.2-0.2-0.4-0.1-0.7l1.7-10.3c0-0.3,0.2-0.5,0.4-0.7 l11.1-7.5c0.2-0.1,0.4-0.4,0.4-0.6l2-9.7c0-0.1,0.1-0.2,0.1-0.3l3.5-6.6c0.1-0.3,0.4-0.4,0.7-0.5l45.6-10.2l46.7-12.1 c0.2-0.1,0.5-0.2,0.6-0.4l24.7-38c0-0.1,0.1-0.1,0.2-0.2l15.2-13.7c0.1-0.1,0.2-0.3,0.3-0.5l7.7-24.9c0.1-0.2,0.1-0.3,0.3-0.4 l8.2-7.5c0.2-0.2,0.5-0.3,0.9-0.2l5,0.9c0.3,0.1,0.6,0,0.8-0.2l6.4-5.5c0.1-0.1,0.2-0.1,0.2-0.2l6.5-2.9c0.2-0.1,0.3-0.2,0.4-0.4 l10.2-15.4c0.1-0.1,0.2-0.3,0.4-0.3l20.9-10.3c0.3-0.1,0.5-0.4,0.5-0.6l8.1-30.6l5.3-16.2l-0.2,0.6l56.8-31.3 c0.7-0.4,0.7-1.5-0.1-1.8l-10-4.5c-0.8-0.3-0.8-1.4,0-1.8l11.8-5.6c0.5-0.3,0.7-0.9,0.4-1.4l-3.6-5.9c-0.3-0.5-0.1-1.2,0.4-1.4 l45.9-22.5l10.8-6.2l0.3-0.3l6-3.5l6.5-4l11.4-8.9c0,0,0.1-0.1,0.1-0.1l8.2-9.3c0.1-0.2,0.2-0.3,0.2-0.5l2.3-20 c0.1-0.4,0.4-0.8,0.8-0.9l16.1-2.8c0.2,0,0.4-0.2,0.6-0.3l6.6-8c0.2-0.2,0.3-0.5,0.2-0.8l-1.6-13.3c0-0.3,0-0.5,0.2-0.7l6-7.9 c0.1-0.1,0.1-0.2,0.1-0.2l2.7-6.9c0.1-0.3,0.1-0.6-0.1-0.8l-22.2-41.1l-21.5-43.1c-0.1-0.2-0.1-0.5-0.1-0.7l12.5-43.6 c0-0.1,0-0.2,0-0.3l0.3-20.5c0-0.2,0.1-0.4,0.1-0.5l13.8-22.1c0.1-0.1,0.1-0.3,0.2-0.5l0.3-11.1c0-0.3-0.1-0.6-0.4-0.8l-4-3.2 c-0.2-0.2-0.4-0.5-0.4-0.8l-0.1-8.4c0-0.1,0-0.2,0-0.3l-2.1-6.8c-0.1-0.2-0.1-0.4,0-0.6l4.9-17.8c0-0.2,0-0.3,0-0.5l-5.9-22.6 c-0.1-0.3,0-0.6,0.1-0.8l17.8-26.2l8.5-14.2c0.2-0.3,0.4-0.4,0.7-0.5l12.4-1.8c0.1,0,0.3-0.1,0.4-0.1L520,91.3 c0.8-0.5,0.5-1.8-0.4-1.8l-14.4-1.4c-0.9-0.1-1.2-1.2-0.5-1.8l5.6-4.8c0.6-0.5,0.4-1.4-0.2-1.7l-7.7-3.4c-0.6-0.3-0.8-1.1-0.4-1.6 l7.3-8.6c0.1-0.1,0.1-0.2,0.2-0.3l6.8-15.9c0.2-0.4,0-1-0.4-1.2l-9.8-6.3c-0.1-0.1-0.2-0.2-0.3-0.3l-6.9-9.9 c-0.3-0.5-0.2-1.2,0.3-1.4l12.4-7c0.6-0.3,0.7-1.1,0.2-1.6l-10.4-10.6c-0.4-0.5-0.4-1.2,0.2-1.5L516,1"
                    }), Un("g", null, Un("ellipse", {
                        className: Gn.a.ellipse,
                        cx: "0",
                        cy: "0",
                        rx: "6",
                        ry: "6"
                    })), Un("path", {
                        className: Gn.a.letter,
                        d: "M86.3082 822.796C85.7284 822.796 85.2771 823.139 84.9544 823.825C84.6317 824.51 84.4704 825.478 84.4704 826.729C84.4704 827.984 84.6317 828.958 84.9544 829.648C85.2771 830.334 85.7284 830.677 86.3082 830.677C86.8931 830.677 87.3469 830.334 87.6697 829.648C87.9924 828.958 88.1537 827.984 88.1537 826.729C88.1537 825.478 87.9924 824.51 87.6697 823.825C87.3469 823.139 86.8931 822.796 86.3082 822.796ZM86.3082 831.751C85.3603 831.751 84.6065 831.305 84.0468 830.412C83.4922 829.515 83.2148 828.287 83.2148 826.729C83.2148 825.176 83.4922 823.953 84.0468 823.061C84.6065 822.163 85.3603 821.714 86.3082 821.714C87.2562 821.714 88.01 822.163 88.5697 823.061C89.1294 823.958 89.4092 825.181 89.4092 826.729C89.4092 828.277 89.1294 829.502 88.5697 830.405C88.01 831.302 87.2562 831.751 86.3082 831.751Z"
                    }), Un("path", {
                        className: Gn.a.letter,
                        d: "M97.6427 827.289C97.6427 826.578 97.5771 826.099 97.446 825.852C97.32 825.599 97.1006 825.473 96.788 825.473C96.4149 825.473 96.1174 825.635 95.8955 825.957C95.6787 826.28 95.5703 826.724 95.5703 827.289V830.435H95.7065C96.014 830.435 96.2182 830.473 96.3191 830.548C96.425 830.619 96.4779 830.755 96.4779 830.957C96.4779 831.138 96.4351 831.274 96.3493 831.365C96.2636 831.456 96.1325 831.501 95.956 831.501H94.9955C94.7787 831.501 94.6299 831.451 94.5493 831.35C94.4736 831.249 94.4358 831.032 94.4358 830.7V830.48V827.289V826.699C94.4358 826.32 94.3501 826.023 94.1787 825.806C94.0072 825.584 93.7728 825.473 93.4753 825.473C93.2484 825.473 93.0391 825.541 92.8475 825.678C92.661 825.809 92.4996 826.005 92.3635 826.267V830.435H92.6433C92.9458 830.435 93.15 830.473 93.2559 830.548C93.3618 830.624 93.4148 830.76 93.4148 830.957C93.4148 831.163 93.3719 831.307 93.2862 831.388C93.2005 831.464 93.0366 831.501 92.7946 831.501H90.7827C90.5861 831.501 90.4399 831.458 90.344 831.373C90.2533 831.282 90.2079 831.143 90.2079 830.957C90.2079 830.755 90.2659 830.619 90.3819 830.548C90.5029 830.473 90.7348 830.435 91.0777 830.435H91.229V825.587H91.0928C90.7399 825.587 90.4978 825.546 90.3667 825.466C90.2407 825.385 90.1777 825.244 90.1777 825.042C90.1777 824.866 90.2281 824.735 90.3289 824.649C90.4298 824.558 90.581 824.513 90.7827 824.513H91.9399C92.1063 824.513 92.2147 824.543 92.2651 824.604C92.3206 824.659 92.3534 824.78 92.3635 824.967C92.5702 824.745 92.792 824.581 93.029 824.475C93.266 824.369 93.5333 824.316 93.8307 824.316C94.1837 824.316 94.4736 824.394 94.7005 824.551C94.9325 824.702 95.1039 824.934 95.2148 825.246C95.4266 824.929 95.6712 824.694 95.9485 824.543C96.2258 824.392 96.5435 824.316 96.9015 824.316C97.5519 824.316 98.0259 824.528 98.3234 824.951C98.6259 825.375 98.7772 826.061 98.7772 827.009V830.435H98.8982C99.2108 830.435 99.4201 830.473 99.5259 830.548C99.6318 830.624 99.6848 830.76 99.6848 830.957C99.6848 831.138 99.6394 831.274 99.5486 831.365C99.4579 831.456 99.3243 831.501 99.1478 831.501H98.2326C98.0309 831.501 97.8822 831.441 97.7864 831.32C97.6906 831.199 97.6427 831.007 97.6427 830.745V827.289Z"
                    }), Un("path", {
                        className: Gn.a.letter,
                        d: "M496.49 395.797C497.08 395.958 497.536 396.253 497.859 396.682C498.187 397.105 498.351 397.625 498.351 398.24C498.351 399.122 498.038 399.846 497.413 400.41C496.788 400.97 495.978 401.25 494.985 401.25C494.219 401.25 493.535 401.104 492.935 400.811C492.34 400.514 492.043 400.189 492.043 399.836C492.043 399.684 492.096 399.561 492.202 399.465C492.313 399.364 492.446 399.314 492.603 399.314C492.688 399.314 492.998 399.442 493.533 399.699C494.072 399.957 494.574 400.085 495.038 400.085C495.638 400.085 496.125 399.914 496.498 399.571C496.876 399.228 497.065 398.784 497.065 398.24C497.065 397.791 496.934 397.413 496.672 397.105C496.415 396.793 496.059 396.593 495.605 396.508C495.469 396.483 495.29 396.462 495.068 396.447C494.645 396.422 494.433 396.246 494.433 395.918C494.433 395.62 494.64 395.446 495.053 395.396C495.215 395.381 495.348 395.363 495.454 395.343C495.847 395.282 496.165 395.121 496.407 394.859C496.649 394.597 496.77 394.279 496.77 393.906C496.77 393.427 496.621 393.036 496.324 392.734C496.026 392.431 495.648 392.28 495.189 392.28C494.766 392.28 494.33 392.411 493.881 392.673C493.437 392.935 493.16 393.066 493.049 393.066C492.908 393.066 492.789 393.021 492.693 392.93C492.603 392.839 492.557 392.726 492.557 392.59C492.557 392.282 492.84 391.977 493.404 391.675C493.969 391.367 494.594 391.213 495.28 391.213C496.067 391.213 496.72 391.453 497.239 391.932C497.763 392.406 498.026 392.991 498.026 393.687C498.026 394.216 497.9 394.652 497.647 394.995C497.4 395.338 497.015 395.605 496.49 395.797Z"
                    }), Un("path", {
                        className: Gn.a.letter,
                        d: "M503.839 392.295C503.259 392.295 502.808 392.638 502.485 393.324C502.162 394.009 502.001 394.977 502.001 396.228C502.001 397.483 502.162 398.457 502.485 399.147C502.808 399.833 503.259 400.176 503.839 400.176C504.424 400.176 504.877 399.833 505.2 399.147C505.523 398.457 505.684 397.483 505.684 396.228C505.684 394.977 505.523 394.009 505.2 393.324C504.877 392.638 504.424 392.295 503.839 392.295ZM503.839 401.25C502.891 401.25 502.137 400.804 501.577 399.911C501.023 399.014 500.745 397.786 500.745 396.228C500.745 394.675 501.023 393.452 501.577 392.56C502.137 391.662 502.891 391.213 503.839 391.213C504.787 391.213 505.541 391.662 506.1 392.56C506.66 393.457 506.94 394.68 506.94 396.228C506.94 397.776 506.66 399.001 506.1 399.904C505.541 400.801 504.787 401.25 503.839 401.25Z"
                    }), Un("path", {
                        className: Gn.a.letter,
                        d: "M515.173 396.788C515.173 396.077 515.108 395.598 514.977 395.351C514.85 395.098 514.631 394.972 514.319 394.972C513.945 394.972 513.648 395.134 513.426 395.456C513.209 395.779 513.101 396.223 513.101 396.788V399.934H513.237C513.545 399.934 513.749 399.972 513.85 400.047C513.955 400.118 514.008 400.254 514.008 400.456C514.008 400.637 513.966 400.773 513.88 400.864C513.794 400.955 513.663 401 513.487 401H512.526C512.309 401 512.16 400.95 512.08 400.849C512.004 400.748 511.966 400.531 511.966 400.199V399.979V396.788V396.198C511.966 395.819 511.881 395.522 511.709 395.305C511.538 395.083 511.303 394.972 511.006 394.972C510.779 394.972 510.57 395.04 510.378 395.177C510.191 395.308 510.03 395.504 509.894 395.767V399.934H510.174C510.476 399.934 510.681 399.972 510.786 400.047C510.892 400.123 510.945 400.259 510.945 400.456C510.945 400.663 510.902 400.806 510.817 400.887C510.731 400.963 510.567 401 510.325 401H508.313C508.117 401 507.97 400.957 507.875 400.872C507.784 400.781 507.738 400.642 507.738 400.456C507.738 400.254 507.796 400.118 507.912 400.047C508.033 399.972 508.265 399.934 508.608 399.934H508.759V395.086H508.623C508.27 395.086 508.028 395.045 507.897 394.965C507.771 394.884 507.708 394.743 507.708 394.541C507.708 394.365 507.759 394.234 507.859 394.148C507.96 394.057 508.112 394.012 508.313 394.012H509.47C509.637 394.012 509.745 394.042 509.796 394.103C509.851 394.158 509.884 394.279 509.894 394.466C510.101 394.244 510.323 394.08 510.56 393.974C510.797 393.868 511.064 393.815 511.361 393.815C511.714 393.815 512.004 393.893 512.231 394.05C512.463 394.201 512.634 394.433 512.745 394.745C512.957 394.428 513.202 394.193 513.479 394.042C513.756 393.891 514.074 393.815 514.432 393.815C515.082 393.815 515.556 394.027 515.854 394.45C516.156 394.874 516.308 395.56 516.308 396.508V399.934H516.429C516.741 399.934 516.951 399.972 517.056 400.047C517.162 400.123 517.215 400.259 517.215 400.456C517.215 400.637 517.17 400.773 517.079 400.864C516.988 400.955 516.855 401 516.678 401H515.763C515.561 401 515.413 400.94 515.317 400.819C515.221 400.698 515.173 400.506 515.173 400.244V396.788Z"
                    }), Un("path", {
                        className: Gn.a.letter,
                        d: "M531.514 21.0582C531.514 21.6784 531.678 22.1851 532.006 22.5784C532.334 22.9667 532.755 23.1608 533.269 23.1608C533.753 23.1608 534.149 22.9768 534.456 22.6087C534.769 22.2406 534.925 21.7591 534.925 21.1641C534.925 20.5489 534.764 20.0498 534.441 19.6665C534.124 19.2833 533.713 19.0917 533.208 19.0917C532.719 19.0917 532.313 19.2758 531.991 19.6439C531.673 20.0119 531.514 20.4834 531.514 21.0582ZM531.348 19.0464C531.62 18.6934 531.923 18.4287 532.255 18.2522C532.588 18.0757 532.951 17.9875 533.344 17.9875C534.141 17.9875 534.817 18.2875 535.371 18.8875C535.931 19.4875 536.211 20.2262 536.211 21.1036C536.211 22.0213 535.941 22.7751 535.402 23.365C534.862 23.955 534.171 24.2499 533.329 24.2499C532.336 24.2499 531.539 23.8566 530.939 23.07C530.344 22.2784 530.047 21.2246 530.047 19.9086C530.047 18.1942 530.488 16.8177 531.37 15.779C532.253 14.7352 533.418 14.2134 534.865 14.2134C535.354 14.2134 535.677 14.2487 535.833 14.3193C535.989 14.3899 536.067 14.5235 536.067 14.7201C536.067 15.0428 535.77 15.2092 535.175 15.2193C534.782 15.2243 534.466 15.2496 534.229 15.2949C533.433 15.4462 532.785 15.8471 532.286 16.4975C531.791 17.1429 531.479 17.9925 531.348 19.0464Z"
                    }), Un("path", {
                        className: Gn.a.letter,
                        d: "M541.669 15.2949C541.089 15.2949 540.638 15.6378 540.315 16.3236C539.992 17.0093 539.831 17.9774 539.831 19.2279C539.831 20.4834 539.992 21.4565 540.315 22.1473C540.638 22.8331 541.089 23.1759 541.669 23.1759C542.254 23.1759 542.707 22.8331 543.03 22.1473C543.353 21.4565 543.514 20.4834 543.514 19.2279C543.514 17.9774 543.353 17.0093 543.03 16.3236C542.707 15.6378 542.254 15.2949 541.669 15.2949ZM541.669 24.2499C540.721 24.2499 539.967 23.8037 539.407 22.9112C538.853 22.0137 538.575 20.7859 538.575 19.2279C538.575 17.6749 538.853 16.4521 539.407 15.5597C539.967 14.6621 540.721 14.2134 541.669 14.2134C542.617 14.2134 543.37 14.6621 543.93 15.5597C544.49 16.4572 544.77 17.6799 544.77 19.2279C544.77 20.7758 544.49 22.0011 543.93 22.9037C543.37 23.8012 542.617 24.2499 541.669 24.2499Z"
                    }), Un("path", {
                        className: Gn.a.letter,
                        d: "M553.003 19.7876C553.003 19.0766 552.938 18.5976 552.806 18.3505C552.68 18.0984 552.461 17.9724 552.148 17.9724C551.775 17.9724 551.478 18.1337 551.256 18.4564C551.039 18.7791 550.931 19.2228 550.931 19.7876V22.9339H551.067C551.374 22.9339 551.579 22.9717 551.68 23.0474C551.785 23.118 551.838 23.2541 551.838 23.4558C551.838 23.6373 551.796 23.7734 551.71 23.8642C551.624 23.955 551.493 24.0003 551.317 24.0003H550.356C550.139 24.0003 549.99 23.9499 549.91 23.8491C549.834 23.7482 549.796 23.5314 549.796 23.1986V22.9793V19.7876V19.1976C549.796 18.8195 549.711 18.522 549.539 18.3051C549.368 18.0833 549.133 17.9724 548.836 17.9724C548.609 17.9724 548.4 18.0404 548.208 18.1766C548.021 18.3077 547.86 18.5043 547.724 18.7665V22.9339H548.004C548.306 22.9339 548.51 22.9717 548.616 23.0474C548.722 23.123 548.775 23.2591 548.775 23.4558C548.775 23.6625 548.732 23.8062 548.647 23.8869C548.561 23.9625 548.397 24.0003 548.155 24.0003H546.143C545.947 24.0003 545.8 23.9575 545.705 23.8718C545.614 23.781 545.568 23.6423 545.568 23.4558C545.568 23.2541 545.626 23.118 545.742 23.0474C545.863 22.9717 546.095 22.9339 546.438 22.9339H546.589V18.0858H546.453C546.1 18.0858 545.858 18.0455 545.727 17.9648C545.601 17.8841 545.538 17.7429 545.538 17.5412C545.538 17.3648 545.589 17.2337 545.689 17.148C545.79 17.0572 545.941 17.0118 546.143 17.0118H547.3C547.467 17.0118 547.575 17.0421 547.626 17.1026C547.681 17.158 547.714 17.2791 547.724 17.4656C547.931 17.2438 548.153 17.0799 548.389 16.974C548.626 16.8681 548.894 16.8152 549.191 16.8152C549.544 16.8152 549.834 16.8933 550.061 17.0496C550.293 17.2009 550.464 17.4328 550.575 17.7455C550.787 17.4278 551.032 17.1933 551.309 17.0421C551.586 16.8908 551.904 16.8152 552.262 16.8152C552.912 16.8152 553.386 17.0269 553.684 17.4505C553.986 17.874 554.138 18.5598 554.138 19.5077V22.9339H554.259C554.571 22.9339 554.781 22.9717 554.886 23.0474C554.992 23.123 555.045 23.2591 555.045 23.4558C555.045 23.6373 555 23.7734 554.909 23.8642C554.818 23.955 554.685 24.0003 554.508 24.0003H553.593C553.391 24.0003 553.243 23.9398 553.147 23.8188C553.051 23.6978 553.003 23.5062 553.003 23.244V19.7876Z"
                    }))
                })),
                zn = n("ZS8T"),
                qn = n.n(zn),
                Kn = o.a.createElement,
                Yn = function(e) {
                    var t = e.startPercentage,
                        n = void 0 === t ? 0 : t,
                        o = e.inView,
                        a = Object(Ie.a)(),
                        c = Object(r.useRef)(null),
                        u = Object(r.useRef)(null),
                        l = Object(r.useState)(0),
                        s = l[0],
                        f = l[1],
                        d = Object(r.useState)(!1),
                        p = d[0],
                        y = d[1],
                        v = Object(r.useRef)(null),
                        h = Object(r.useCallback)((function() {
                            var e = v.current;
                            e && (c.current = e.querySelector("path"), u.current = e.querySelector("g"), f(c.current.getTotalLength()))
                        }), []);
                    Object(Ee.a)(h, []);
                    var b = Zn((function(e) {
                            var t = e > 0 && e < 100;
                            !1 === p ? t && y(!0) : t || y(!1);
                            var r = a(e),
                                o = Object(q.a)(r, 2),
                                i = o[0];
                            if (i !== o[1]) {
                                var l = Object(ke.a)(n + .6 * i, n, n + 50) / 100,
                                    f = c.current.getPointAtLength(l * s),
                                    d = f.x,
                                    v = f.y;
                                u.current.setAttribute("transform", "translate(".concat(d, ",").concat(v, ")"))
                            }
                        }), [a, p, s], o),
                        m = Object(r.useCallback)((function(e) {
                            b.current = e
                        }), [b]);
                    return Object(r.useEffect)((function() {
                        o || y(!1)
                    }), [o]), Kn("div", {
                        className: Object(i.a)(qn.a.container, o && qn.a.inView),
                        ref: m
                    }, Kn("div", {
                        className: qn.a.wrapper
                    }, Kn(Fn, {
                        ref: v,
                        inView: o,
                        className: qn.a.svg,
                        animatePath: p,
                        pathLength: s,
                        onMount: h
                    })))
                },
                Xn = n("zAPv"),
                Qn = n.n(Xn),
                Jn = o.a.createElement,
                $n = function(e) {
                    var t = e.text,
                        n = void 0 === t ? "" : t,
                        r = e.delay,
                        a = void 0 === r ? 0 : r,
                        c = e.canAnimate,
                        u = Object(ue.a)({
                            triggerOnce: !0
                        }),
                        l = Object(q.a)(u, 2),
                        s = l[0],
                        f = l[1] && c,
                        d = -1;
                    return Jn(o.a.Fragment, null, n.split(" ").map((function(e, t) {
                        var n = e.split("");
                        return Jn("span", {
                            ref: s,
                            className: Object(i.a)(Qn.a.word, f && Qn.a.isActive),
                            key: "".concat(e, "-").concat(t)
                        }, n.map((function(e) {
                            return d += 1, Jn("span", {
                                key: "".concat(e, "-").concat(d),
                                className: Qn.a.letter,
                                style: {
                                    transitionDelay: "".concat(f ? .04 * (a + d) : 0, "s")
                                }
                            }, e)
                        })))
                    })))
                },
                er = n("FBcq"),
                tr = n.n(er),
                nr = o.a.createElement,
                rr = function(e) {
                    var t = e.children,
                        n = e.caption,
                        a = e.video,
                        c = e.images,
                        u = e.inView,
                        l = e.getPopupIndex,
                        f = e.setOverlayOpen,
                        d = e.audios,
                        p = e.firstAudioOnVideo,
                        y = e.uid,
                        v = Object(ue.a)(),
                        h = Object(q.a)(v, 2),
                        b = h[0],
                        m = h[1],
                        g = Object(ue.a)(),
                        O = Object(q.a)(g, 2),
                        _ = O[0],
                        j = O[1],
                        C = Object(Ne.a)(),
                        w = qe({
                            inView: m,
                            desktopOnly: !0
                        }),
                        P = Object(q.a)(w, 2),
                        L = P[0],
                        k = P[1],
                        S = qe({
                            inView: j,
                            desktopOnly: !0
                        }),
                        M = Object(q.a)(S, 2),
                        E = M[0],
                        x = M[1],
                        I = Object(r.useCallback)((function(e) {
                            b(e), L.current = e
                        }), [b, L]),
                        N = Object(r.useCallback)((function(e) {
                            _(e), E.current = e
                        }), [_, E]),
                        T = Object(r.useCallback)((function(e) {
                            var t = e.asset,
                                n = e.orientation,
                                r = e.useRatio,
                                o = void 0 === r || r,
                                a = e.className;
                            return nr(Te.a, {
                                asset: t,
                                ratio: "portrait" === n ? 133.333 : 75,
                                useRatio: o,
                                className: a,
                                opensOverlay: !0,
                                setOverlayOpen: f,
                                getPopupIndex: l,
                                uid: y
                            })
                        }), [y, f, l]);
                    return nr(o.a.Fragment, null, nr("div", {
                        className: tr.a.introContainer
                    }, nr("div", {
                        className: tr.a.introScrollContainer,
                        ref: I
                    }, nr("div", {
                        className: Object(i.a)(tr.a.introVideoWrapper, u && tr.a.inView),
                        ref: k
                    }, nr(Ze, {
                        asset: a
                    }), t, d[0] && p && nr(We.a, Object(s.a)({
                        x: C ? "calc(100% - 7.5rem)" : "calc(100% - 5.6rem)",
                        y: C ? "-5rem" : "15%"
                    }, d[0])))), nr("figure", {
                        className: tr.a.introImageWrapper
                    }, T({
                        asset: c[0],
                        orientation: "portrait"
                    }), d[0] && !p && nr(We.a, Object(s.a)({
                        x: C ? "calc(100% - 7.5rem)" : "-5.6rem",
                        y: C ? "-5rem" : "15%"
                    }, d[0])))), nr("figure", {
                        className: tr.a.mainContainer,
                        ref: N
                    }, nr("div", {
                        className: tr.a.mainImageWrapper
                    }, T({
                        asset: c[1],
                        orientation: "portrait"
                    }), d[1] && nr(We.a, Object(s.a)({
                        x: C ? "calc(100% - 7.5rem)" : "calc(100% - 5.6rem)",
                        y: C ? "-5rem" : "70%"
                    }, d[1]))), nr("div", {
                        className: Object(i.a)(tr.a.aside, u && tr.a.inView),
                        ref: x
                    }, nr("div", {
                        className: tr.a.asideImageWrapper
                    }, T({
                        asset: c[2],
                        orientation: "portrait"
                    })), nr("div", {
                        className: tr.a.asideImageWrapper
                    }, T({
                        asset: c[3],
                        orientation: "portrait"
                    })))), nr("figure", {
                        className: tr.a.captionedImageContainer
                    }, T({
                        asset: c[4],
                        orientation: "landscape",
                        useRatio: !C,
                        className: tr.a.captionedImage
                    }), n && nr("figcaption", {
                        className: tr.a.caption
                    }, n), d[2] && nr(We.a, Object(s.a)({
                        x: C ? "1.5rem" : "-5.6rem",
                        y: C ? "-5rem" : "60%"
                    }, d[2]))))
                },
                or = n("obQm"),
                ar = n.n(or),
                ir = o.a.createElement,
                cr = function(e) {
                    var t = e.fields,
                        n = t.caption,
                        r = t.video,
                        o = t.images,
                        a = void 0 === o ? [] : o,
                        i = t.gps,
                        c = void 0 === i ? "" : i,
                        u = t.temp,
                        l = void 0 === u ? "" : u,
                        s = t.bpm,
                        f = void 0 === s ? "" : s,
                        d = t.startRouteHalfway,
                        p = t.startHeight,
                        y = void 0 === p ? "" : p,
                        v = t.centerHeight,
                        h = void 0 === v ? "" : v,
                        b = t.endHeight,
                        m = void 0 === b ? "" : b,
                        g = t.audios,
                        O = void 0 === g ? [] : g,
                        _ = e.getPopupIndex,
                        j = e.setOverlayOpen,
                        C = e.uid,
                        w = e.inView,
                        P = "GPS: ".concat(c),
                        L = "TMP: ".concat(l),
                        k = "BPM: ".concat(f);
                    return ir("div", {
                        className: ar.a.container
                    }, ir(rr, {
                        video: r,
                        images: a,
                        getPopupIndex: _,
                        setOverlayOpen: j,
                        inView: w,
                        uid: C,
                        audios: O,
                        caption: n
                    }, ir("ul", {
                        className: ar.a.info
                    }, ir("li", {
                        "aria-label": P,
                        className: ar.a.infoItem
                    }, ir($n, {
                        text: P,
                        canAnimate: !0
                    })), ir("li", {
                        "aria-label": L,
                        className: ar.a.infoItem
                    }, ir($n, {
                        text: L,
                        delay: P.length,
                        canAnimate: !0
                    })), ir("li", {
                        "aria-label": k,
                        className: ar.a.infoItem
                    }, ir($n, {
                        text: k,
                        delay: P.length + L.length,
                        canAnimate: !0
                    })))), ir(Yn, {
                        startHeight: y,
                        centerHeight: h,
                        endHeight: m,
                        inView: w,
                        startPercentage: d ? 50 : 0
                    }))
                },
                ur = n("7jaY"),
                lr = n.n(ur),
                sr = o.a.createElement,
                fr = function(e) {
                    var t = e.className,
                        n = e.showSvg,
                        o = Object(r.useRef)(),
                        c = Object(r.useRef)([]),
                        u = Object(a.c)();
                    return Object(Ee.a)((function() {
                        var e;
                        ((null === (e = o.current) || void 0 === e ? void 0 : e.childNodes) || []).forEach((function(e) {
                            var t = null === e || void 0 === e ? void 0 : e.getTotalLength();
                            t && c.current.push(t)
                        }))
                    }), []), Object(r.useEffect)((function() {
                        u.set((function(e) {
                            return {
                                strokeDashoffset: c.current[e],
                                strokeDasharray: c.current[e]
                            }
                        }))
                    }), [u]), Object(r.useEffect)((function() {
                        n ? u.start({
                            strokeDashoffset: 0,
                            transition: {
                                duration: 1
                            }
                        }) : u.start((function(e) {
                            return {
                                strokeDashoffset: c.current[e],
                                transition: {
                                    duration: 1
                                }
                            }
                        }))
                    }), [u, n]), sr("svg", {
                        className: Object(i.a)(t, lr.a.container),
                        width: "980",
                        height: "1033",
                        viewBox: "0 0 980 1033"
                    }, sr("g", {
                        ref: o
                    }, sr(a.b.path, {
                        custom: 0,
                        animate: u,
                        className: lr.a.path,
                        d: "M487.092 0.199219C508.642 0.199219 533.27 1.90953 554.478 16.6182C596.209 45.6934 596.209 137.366 596.209 137.366C595.525 162.336 578.764 241.695 575.344 257.772C572.949 273.848 575.686 314.212 575.686 320.369C634.862 341.235 668.042 344.997 718.325 379.546C831.546 488.663 916.035 621.383 930.743 668.93C957.082 753.077 966.318 910.425 964.265 954.209C955.714 954.551 936.216 954.551 932.112 951.815L907.483 936.422C903.037 934.027 898.248 933.001 893.117 932.659L862.332 931.291C855.148 900.847 839.414 756.84 819.574 698.005C818.89 695.953 812.733 692.874 812.049 691.164C810.681 687.743 817.18 681.928 816.154 679.534C814.785 676.797 806.918 677.481 805.55 675.771C769.975 628.908 719.009 583.756 704.3 583.072L689.249 999.703C673.515 1009.28 612.97 1027.07 487.092 1027.07C361.215 1027.07 300.67 1009.62 284.935 999.703L270.227 583.756C255.518 584.098 204.551 629.593 168.977 676.455C167.609 678.165 159.742 677.139 158.373 680.218C157.005 682.612 163.504 688.769 162.478 691.848C161.794 693.558 155.637 696.637 154.953 698.689C135.113 757.182 119.379 901.532 112.195 931.975L81.41 933.343C76.2792 933.685 71.4903 934.712 67.0436 937.106L48.5724 952.499C44.4676 955.235 19.1553 955.577 10.6038 954.893C8.55141 910.767 17.787 753.761 44.1256 669.614C59.1762 622.067 143.323 489.347 256.544 380.23C306.827 345.681 340.007 341.919 399.183 321.053C399.183 314.896 401.92 274.191 399.525 258.456C396.105 242.379 379.344 163.021 378.66 138.05C378.66 138.05 378.66 46.3775 420.391 17.3023C440.914 1.56747 465.885 0.199219 487.092 0.199219Z"
                    }), sr(a.b.path, {
                        custom: 1,
                        animate: u,
                        className: lr.a.path,
                        d: "M487.432 257.088C509.323 257.088 537.372 251.273 552.423 236.906C561.316 228.697 563.711 192.78 563.711 163.363C563.711 146.602 561.316 130.867 556.527 120.605C554.475 116.159 551.739 112.738 548.318 111.028C540.109 106.239 530.189 113.422 487.432 113.764C444.674 113.764 434.412 106.581 426.545 111.028C423.124 112.738 420.73 116.159 418.336 120.605C413.547 130.867 411.152 146.602 411.152 163.363C411.152 192.78 413.889 228.355 422.44 236.906C436.123 251.273 466.908 257.088 487.432 257.088Z"
                    }), sr(a.b.path, {
                        custom: 2,
                        animate: u,
                        className: lr.a.path,
                        d: "M284.938 998.677H689.936"
                    }), sr(a.b.path, {
                        custom: 3,
                        animate: u,
                        className: lr.a.path,
                        d: "M739.875 402.122L658.123 516.712V998.335"
                    }), sr(a.b.path, {
                        custom: 4,
                        animate: u,
                        className: lr.a.path,
                        d: "M234.65 402.122L316.745 516.712V998.335"
                    }), sr(a.b.path, {
                        custom: 5,
                        className: lr.a.path,
                        animate: u,
                        d: "M316.746 845.776L480.935 914.188"
                    }), sr(a.b.path, {
                        custom: 6,
                        animate: u,
                        className: lr.a.path,
                        d: "M481.276 998.335C481.618 622.409 480.592 256.745 481.276 256.061"
                    }), sr(a.b.path, {
                        custom: 7,
                        animate: u,
                        className: lr.a.path,
                        d: "M494.957 257.088C494.957 257.088 495.299 622.41 494.957 997.993"
                    }), sr(a.b.path, {
                        custom: 8,
                        animate: u,
                        className: lr.a.path,
                        d: "M689.932 473.612C689.932 473.612 851.384 623.777 863.356 662.772C872.249 691.506 881.827 854.669 891.405 933.001"
                    }), sr(a.b.path, {
                        custom: 9,
                        className: lr.a.path,
                        animate: u,
                        d: "M657.781 845.776L495.303 914.188"
                    }), sr(a.b.path, {
                        custom: 10,
                        animate: u,
                        className: lr.a.path,
                        d: "M286.305 473.612C286.305 473.612 124.853 623.777 112.881 662.772C103.987 691.506 94.4097 854.669 84.832 933.001"
                    })))
                },
                dr = n("7C6t"),
                pr = n.n(dr),
                yr = o.a.createElement,
                vr = function(e) {
                    var t = e.fields,
                        n = t.caption,
                        o = t.video,
                        a = t.images,
                        c = void 0 === a ? [] : a,
                        u = t.audios,
                        l = e.getPopupIndex,
                        s = e.setOverlayOpen,
                        f = e.uid,
                        d = e.inView,
                        p = Object(r.useRef)(),
                        y = Object(r.useRef)([0, 0]),
                        v = Object(r.useState)(!1),
                        h = v[0],
                        b = v[1];
                    return Object(Ee.a)((function() {
                        var e = Object(ke.c)(p.current).top,
                            t = p.current.getBoundingClientRect().height;
                        y.current = [e, e + t - window.innerHeight]
                    }), []), Object(Me.a)({
                        onScroll: Object(r.useCallback)((function(e) {
                            var t = e.y,
                                n = Object(q.a)(y.current, 2),
                                r = n[0],
                                o = n[1];
                            t > r && o > t ? !h && b(!0) : h && b(!1)
                        }), [h]),
                        active: d
                    }), yr("div", {
                        ref: p,
                        className: Object(i.a)(pr.a.container, d && pr.a.inView)
                    }, yr(rr, {
                        video: o,
                        images: c,
                        getPopupIndex: l,
                        setOverlayOpen: s,
                        inView: d,
                        uid: f,
                        caption: n,
                        firstAudioOnVideo: !0,
                        audios: u
                    }), yr(fr, {
                        showSvg: h,
                        className: pr.a.svg
                    }))
                },
                hr = n("5Hne"),
                br = n.n(hr),
                mr = o.a.createElement,
                gr = function(e) {
                    var t = e.className;
                    return mr("svg", {
                        className: Object(i.a)(br.a.container, t),
                        viewBox: "0 0 550 62",
                        "aria-labelledby": "logoTitle"
                    }, mr("title", {
                        id: "logoTitle"
                    }, "Logo Mammut"), mr("path", {
                        d: "M52.938.00042725L52.7872.476342C52.4755 1.51558 45.6383 23.903 44.1803 29.546L35.4931.00042725H10.6278L0 58.7128h22.6331l3.9314-23.5821c.1709-1.5734.3117-3.1857.4324-4.7786.2815 1.7386.744 3.448 1.2367 5.206l8.4862 23.1547h14.3581l9.4212-24.5922c.4625-1.2141.8044-2.4961 1.1262-3.8462l4.052 28.4384h22.6532L77.5217.00042725H52.938zM423.735 31.1287c0 4.1278.895 11.1889-5.762 11.1889-6.314 0-5.791-7.0611-5.791-11.1889V0h-24.463v36.0821c0 16.1423 10.748 25.0292 30.264 25.0292 19.507 0 30.245-8.8869 30.245-25.0292V0h-24.483v31.1287h-.01zM465.109 0v20.2992h13.755v38.4131h24.483V20.2992h13.745V0h-51.983zM338.27.00918579l-.151.47591521c-.311 1.029529-7.149 23.446099-8.607 29.079399L320.825.00918579H295.97L285.332 58.741h22.643l3.932-23.5918c.171-1.5637.311-3.176.432-4.7883.282 1.7191.724 3.3897 1.237 5.2156l8.486 23.1645h14.348l9.421-24.6019c.463-1.2238.805-2.5059 1.126-3.8462l4.062 28.4481h22.644L362.864.00918579H338.27zM120.786 0l-20.532 58.7123h22.744l2.312-7.129h20.381l2.192 7.129h23.86L150.698 0h-29.912zm20.541 37.2476h-11.583l5.892-18.9103 5.691 18.9103zM236.624.00918579l-.151.47591521c-.312 1.029529-7.159 23.446099-8.607 29.079399L219.169.00918579h-24.855L183.676 58.741h22.633l3.931-23.5918c.171-1.5637.312-3.1857.433-4.7883.281 1.7191.724 3.3897 1.236 5.2156l8.487 23.1645h14.358l9.421-24.6116c.452-1.2141.794-2.467 1.116-3.8365l4.062 28.4481h22.633L261.218.00918579h-24.594zM539.813 9.54743c1.428 0 2.685-.13597 2.685-1.75797 0-1.35975-1.378-1.51515-2.514-1.51515h-2.292v3.27312h2.121zm-2.121 6.35197h-1.911V4.71059h4.394c2.806 0 4.223.94211 4.223 3.21485 0 2.02021-1.287 2.86516-3.016 3.05946l3.248 4.9145h-2.152l-2.986-4.7882h-1.79v4.7882h-.01zm2.071-14.14143c-4.535 0-8.064 3.43824-8.064 8.35283 0 4.594 3.087 8.343 8.064 8.343 4.474 0 8.004-3.3994 8.004-8.343 0-4.91459-3.53-8.35283-8.004-8.35283zm0 18.46353c-6.023 0-10.306-4.3512-10.306-10.1107C529.457 4.03071 534.213 0 539.763 0c5.48 0 10.236 4.03071 10.236 10.1108 0 6.08-4.756 10.1107-10.236 10.1107z"
                    }))
                },
                Or = n("jM3/"),
                _r = n.n(Or),
                jr = o.a.createElement,
                Cr = function(e) {
                    var t = e.label,
                        n = e.className,
                        r = Object(ce.a)(e, ["label", "className"]);
                    return jr("div", Object(s.a)({
                        className: Object(i.a)(_r.a.container, n)
                    }, r), jr(gr, {
                        className: _r.a.svg
                    }), jr("span", {
                        className: _r.a.label
                    }, t))
                },
                wr = n("Td48"),
                Pr = n.n(wr),
                Lr = o.a.createElement,
                kr = function(e) {
                    var t = e.className,
                        n = Object(ce.a)(e, ["className"]);
                    return Lr("svg", Object(s.a)({
                        className: Object(i.a)(Pr.a.container, t)
                    }, n, {
                        viewBox: "0 0 15 17"
                    }), Lr("path", {
                        d: "M8.38016 16.0005L8.38016 17.0005L8.8611 17.0005L9.16135 16.6248L8.38016 16.0005ZM7.25007 16.0005L6.46887 16.6248L6.76912 17.0005L7.25007 17.0005L7.25007 16.0005ZM8.89151 15.6281L8.8915 0.00173728L6.8915 0.00173736L6.89151 15.6281L8.89151 15.6281ZM13.2494 8.30557L7.59896 15.3762L9.16135 16.6248L14.8118 9.55415L13.2494 8.30557ZM8.38016 15.0005L7.25007 15.0005L7.25007 17.0005L8.38016 17.0005L8.38016 15.0005ZM8.03126 15.3762L2.3808 8.30558L0.818415 9.55415L6.46887 16.6248L8.03126 15.3762Z"
                    }))
                },
                Sr = n("OjA/"),
                Mr = n.n(Sr),
                Er = function(e) {
                    return {}
                },
                xr = {
                    setScrollToDocumentary: V.i
                },
                Ir = function(e) {
                    return Object(B.b)(Er, xr)(e)
                },
                Nr = o.a.createElement,
                Tr = {
                    mobile: {
                        "gore-tex": 27,
                        watch: 37
                    },
                    desktop: {
                        "gore-tex": 32,
                        watch: 31
                    }
                },
                Rr = Ir((function(e) {
                    for (var t = e.fields, n = void 0 === t ? {} : t, o = e.setScrollToDocumentary, c = e.inView, u = n.text, l = n.title, s = n.mammutLogoLabel, f = n.page, d = n.alt, p = n.cta, y = Object(Tt.a)() ? "desktop" : "mobile", v = Object(r.useState)(0), h = v[0], b = v[1], m = Object(r.useRef)(0), g = Object(r.useRef)(), O = Object(r.useRef)([0, 0]), _ = Object(r.useRef)([0, 0]), j = [], C = Tr[y][f], w = 0; w < C; w++) j.push("/".concat(f, "/").concat(y, "/").concat(f, "-").concat(w, ".jpg"));
                    Object(Ee.a)((function() {
                        O.current = [0, window.innerHeight]
                    }), []);
                    var P = Object(r.useCallback)((function() {
                        return o(!0)
                    }), [o]);
                    Object(r.useEffect)((function() {
                        _.current = [0, C - 1]
                    }), [C]);
                    var L = "gore-tex" === f,
                        k = Object(r.useState)(!1),
                        S = k[0],
                        M = k[1];
                    Object(Me.a)({
                        onAnimationFrame: Object(r.useCallback)((function(e) {
                            if (p) {
                                var t = e > 50;
                                t !== S && M(t)
                            }
                            var n = Object(q.a)(_.current, 2),
                                r = n[0],
                                o = n[1],
                                a = Object(ke.a)(Object(ke.e)(O.current, _.current, e), r, o);
                            m.current = parseInt(a), m.current !== h && b(m.current)
                        }), [h, p, S]),
                        active: c
                    });
                    var E = Object(r.useRef)(0),
                        x = Object(r.useState)(!1),
                        I = x[0],
                        N = x[1],
                        T = Object(r.useCallback)((function() {
                            I || (E.current++, E.current >= C && N(!0))
                        }), [C, I]),
                        R = !I && c;
                    return Nr("div", {
                        className: Object(i.a)(Mr.a.container, R && Mr.a.hasLoadingState, L && Mr.a.isGoreTex),
                        ref: g
                    }, Nr("div", {
                        className: Mr.a.content
                    }, j.map((function(e, t) {
                        return Nr("picture", {
                            className: Object(i.a)(Mr.a.imageWrapper, h === t && Mr.a.visible),
                            key: e
                        }, Nr("img", {
                            className: Mr.a.image,
                            src: e,
                            alt: d,
                            "aria-hidden": t > 0 && "true",
                            onLoad: T
                        }))
                    })), u && Nr("p", {
                        "aria-label": u,
                        className: Mr.a.text
                    }, Nr($n, {
                        text: u,
                        canAnimate: !0,
                        delay: 5
                    }))), Nr("div", {
                        className: Mr.a.titleContainer
                    }, Nr(Cr, {
                        label: s,
                        className: Mr.a.mammutLogo
                    }), Nr(a.b.h1, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 1,
                            delay: .4,
                            ease: [.16, 1, .3, 1]
                        },
                        className: Mr.a.title
                    }, l)), !L && p && Nr("button", {
                        className: Object(i.a)(Mr.a.button, S && Mr.a.isHidden),
                        onClick: P
                    }, p, Nr("span", {
                        className: Mr.a.buttonIconWrapper
                    }, Nr(kr, {
                        className: Mr.a.buttonIcon
                    }))))
                })),
                Dr = n("nOHt"),
                Ar = n("nboK"),
                Br = n("wHTj"),
                Vr = n.n(Br),
                Hr = function(e) {
                    return {
                        getIntroHasStarted: function() {
                            return e.appReducer.introHasStarted
                        },
                        getShowIntro: function() {
                            return e.appReducer.showIntro
                        }
                    }
                },
                Zr = {},
                Wr = function(e) {
                    return Object(B.b)(Hr, Zr)(e)
                },
                Gr = o.a.createElement,
                Ur = Wr((function(e) {
                    var t = e.fields,
                        n = void 0 === t ? {} : t,
                        o = e.getIntroHasStarted,
                        c = e.getShowIntro,
                        u = e.inView,
                        l = n.text,
                        s = n.theme,
                        f = n.align,
                        d = n.images,
                        p = n.mobileImages,
                        y = void 0 === p ? [] : p,
                        v = n.title,
                        h = n.orientation,
                        b = n.isIntro,
                        m = n.mammutLogoLabel,
                        g = n.highlight,
                        O = Object(a.c)(),
                        _ = Object(a.c)(),
                        j = o(),
                        C = c(),
                        w = (Object(Dr.useRouter)().query || "en").locale,
                        P = Object(Tt.a)(),
                        L = Object(r.useRef)(),
                        S = Object(r.useRef)(),
                        M = Object(r.useRef)(),
                        E = Object(r.useRef)(),
                        x = Object(r.useRef)(),
                        I = Object(r.useRef)([0, 0]),
                        N = Object(r.useRef)([0, 0]),
                        T = Object(r.useRef)([0, 0]),
                        R = Object(Ie.a)(),
                        A = Object(Ie.a)(),
                        B = !P && y.length > 0 ? y : d,
                        V = Object(r.useRef)(!1),
                        H = Object(r.useRef)(!1);
                    Object(r.useEffect)((function() {
                        C && !V.current && (V.current = !0, O.set({
                            scale: .85
                        }), _.set({
                            scale: P ? 1.2 : 1.45
                        }))
                    }), [C, O, _, P]), Object(r.useEffect)((function() {
                        j && C && !H.current && (H.current = !0, O.start({
                            scale: 1,
                            transition: {
                                duration: 4.1,
                                ease: ve.a
                            }
                        }), _.start({
                            scale: 1,
                            transition: {
                                duration: 4.3,
                                ease: ve.a
                            }
                        }))
                    }), [C, j, _, O, P]), Object(Ee.a)((function() {
                        var e = L.current.getBoundingClientRect().height,
                            t = Object(ke.c)(L.current).top,
                            n = b && x.current.getBoundingClientRect().height || 0;
                        I.current = [t, t + e], N.current = [0, (e - n) / 4], T.current = [t, t + e - window.innerHeight]
                    }), [b]);
                    var Z = Object(r.useCallback)((function(e) {
                            var t = Object(q.a)(N.current, 2),
                                n = t[0],
                                r = t[1],
                                o = Object(ke.a)(Object(ke.e)(I.current, N.current, e), n, r),
                                a = R(o),
                                i = Object(q.a)(a, 2),
                                c = i[0];
                            c !== i[1] && (M.current.style.transform = "translate3d(0, calc(-50% - ".concat(.25 * c, "px), 0)"), E.current.style.transform = "translate3d(0,  -".concat(.75 * c, "px, 0)"))
                        }), [R]),
                        W = Object(r.useCallback)((function(e) {
                            var t = [0, .9],
                                n = Object(ke.a)(Object(ke.e)(T.current, t, e), t[0], t[1]),
                                r = A(n),
                                o = Object(q.a)(r, 2),
                                a = o[0];
                            a !== o[1] && (S.current.style.opacity = a)
                        }), [A]);
                    return Object(Me.a)({
                        onAnimationFrame: Object(r.useCallback)((function(e) {
                            b && P && Z(e), W(e)
                        }), [Z, W, b, P]),
                        active: u
                    }), Gr("div", {
                        ref: L,
                        className: Object(i.a)(Vr.a.blurContainer, Vr.a[s], "landscape" !== h && Vr.a.isPortrait, u && Vr.a.inView)
                    }, Gr("div", {
                        className: Vr.a.stickyContainer
                    }, Gr("div", {
                        className: Vr.a.overlay,
                        ref: S
                    }), Gr("div", {
                        className: Vr.a.imagesContainer,
                        ref: E
                    }, B.map((function(e, t) {
                        var n;
                        return Gr(a.b.div, {
                            animate: _,
                            key: null === e || void 0 === e || null === (n = e.sys) || void 0 === n ? void 0 : n.id,
                            className: Vr.a.imageWrapper
                        }, Gr(k.a, {
                            useRatio: !1,
                            asset: e,
                            className: Vr.a.image,
                            hasLoadingState: t !== B.length - 1
                        }))
                    })), b && Gr("div", {
                        className: Vr.a.titleOuter
                    }, Gr(Cr, {
                        label: m,
                        className: Vr.a.logo
                    }), Gr("div", {
                        ref: M,
                        className: Vr.a.titleInner
                    }, Gr(a.b.h1, {
                        ref: x,
                        className: Vr.a.title,
                        animate: O
                    }, v))))), Gr("div", {
                        className: Object(i.a)(Vr.a.textContainer, Vr.a[f])
                    }, b ? Gr("ul", {
                        className: Vr.a.languagesList
                    }, [{
                        slug: "en",
                        lang: "English"
                    }, {
                        slug: "de",
                        lang: "Deutsch"
                    }, {
                        slug: "fr",
                        lang: "Fran\xe7ais"
                    }].map((function(e) {
                        var t = e.slug,
                            n = e.lang;
                        return Gr("li", {
                            key: t,
                            className: Object(i.a)(Vr.a.languageItem, t === w && Vr.a.selectedLang)
                        }, Gr(Ar.a, {
                            href: "/".concat(t)
                        }, Gr("a", {
                            className: Vr.a.languageName
                        }, n)))
                    }))) : Gr("h2", {
                        className: Object(i.a)(Vr.a.highlight, !g && Vr.a.highlightTextOut)
                    }, g), Gr(D, {
                        className: Vr.a.text,
                        text: l
                    })))
                })),
                Fr = n("Vk1G"),
                zr = n.n(Fr),
                qr = o.a.createElement;

            function Kr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var Yr = function(e) {
                    var t = e.className,
                        n = void 0 === t ? "" : t,
                        r = (e.typeSpeed, e.tag),
                        o = void 0 === r ? "h2" : r,
                        a = e.active,
                        c = void 0 === a ? void 0 : a,
                        u = e.label,
                        f = void 0 === u ? "" : u,
                        d = e.inViewSettings,
                        p = void 0 === d ? {} : d,
                        y = Object(ce.a)(e, ["className", "typeSpeed", "tag", "active", "label", "inViewSettings"]),
                        v = Object(ue.a)(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Kr(Object(n), !0).forEach((function(t) {
                                    Object(l.a)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kr(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({
                            triggerOnce: !0
                        }, p)),
                        h = Object(q.a)(v, 2),
                        b = h[0],
                        m = h[1],
                        g = o || "h2",
                        O = "boolean" === typeof c ? c : m,
                        _ = f.split(" "),
                        j = -1;
                    return qr(g, Object(s.a)({
                        className: Object(i.a)(zr.a.container, n, O && zr.a.visible)
                    }, y, {
                        ref: b
                    }), _.map((function(e, t) {
                        var n = e.split("");
                        return qr("div", {
                            className: zr.a.word,
                            key: "".concat(e, "-").concat(t)
                        }, n.map((function(e) {
                            return j += 1, qr("span", {
                                key: "".concat(e, "-").concat(j),
                                className: zr.a.letter,
                                style: {
                                    transitionDelay: "".concat(.04 * j, "s")
                                }
                            }, e)
                        })))
                    })))
                },
                Xr = n("wpIr"),
                Qr = function(e) {
                    return {
                        getActiveGender: function() {
                            return e.appReducer.activeGender
                        }
                    }
                },
                Jr = {
                    setActiveGender: V.c
                },
                $r = function(e) {
                    return Object(B.b)(Qr, Jr)(e)
                },
                eo = n("swa8"),
                to = n.n(eo),
                no = o.a.createElement;

            function ro(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function oo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ro(Object(n), !0).forEach((function(t) {
                        Object(l.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ro(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ao = function(e) {
                    var t = e.product,
                        n = e.onClick,
                        r = e.onMouseDown,
                        o = e.onMouseUp,
                        a = e.handleOnFocus,
                        i = e.activeGender,
                        c = Object(ln.a)(t, i);
                    return no(Xr.a, {
                        className: to.a.suggestionCard,
                        product: c,
                        type: "card",
                        onLinkClick: n,
                        focusable: !0,
                        onMouseDown: r,
                        onMouseUp: o,
                        handleOnFocus: a,
                        horizontal: !0
                    })
                },
                io = $r((function(e) {
                    var t = e.fields,
                        n = void 0 === t ? {} : t,
                        o = e.tag,
                        c = void 0 === o ? "h3" : o,
                        u = e.getActiveGender,
                        l = e.setActiveGender,
                        f = n.products,
                        d = void 0 === f ? [] : f,
                        p = n.title,
                        y = Object(st.a)().width,
                        v = u(),
                        h = Object(r.useState)(),
                        b = h[0],
                        m = h[1],
                        g = Object(r.useRef)(!1),
                        O = Object(r.useRef)(),
                        _ = Object(r.useRef)(),
                        j = Object(r.useRef)(0),
                        C = Object(r.useRef)(0),
                        w = Object(r.useRef)(!1),
                        P = Object(a.d)(0, {
                            damping: 100,
                            mass: 3,
                            stiffness: 400
                        }),
                        L = Object(r.useState)(0),
                        k = L[0],
                        S = L[1],
                        M = Object(r.useRef)();
                    Object(Ee.a)((function() {
                        var e = _.current.offsetWidth - y;
                        C.current = e / (d.length - 1)
                    }), [y]);
                    var E = function() {
                            w.current = !0
                        },
                        x = function() {
                            w.current = !1
                        },
                        I = Object(r.useCallback)((function(e) {
                            var t = C.current * -e;
                            e > d.length - 1 || e < 0 || (S(e), P.set(t))
                        }), [P, d.length]),
                        N = Object(r.useCallback)((function(e, t) {
                            M.current !== e.currentTarget && (M.current = e.currentTarget, w.current || I(t))
                        }), [I]);
                    Object(r.useEffect)((function() {
                        var e = O.current.offsetWidth,
                            t = _.current.offsetWidth;
                        if (t <= e) return P.set(0), m();
                        m(-1 * (t - e))
                    }), [y, P]);
                    var T = Object(ct.a)({
                            onDrag: function(e) {
                                var t = Object(q.a)(e.vxvy, 1)[0],
                                    n = Object(q.a)(e.delta, 2),
                                    r = n[0],
                                    o = n[1],
                                    a = e.velocity;
                                if (!(o > 4 || o < -4) && t) {
                                    g.current || (g.current = !0), j.current = Object(ke.a)(j.current + r * (a + 1) * 1.2, b, 0);
                                    var i = Math.round(Math.abs(j.current / C.current * -1));
                                    S(i), P.set(j.current)
                                }
                            },
                            onDragEnd: function() {
                                var e = Object(fe.a)(se.a.mark((function e() {
                                    return se.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Object(pe.a)(10);
                                            case 2:
                                                g.current = !1;
                                            case 3:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            axis: "x"
                        }),
                        R = {};
                    b && (R = oo(oo({}, T()), {}, {
                        style: {
                            x: P
                        }
                    }));
                    var D = function(e) {
                        g.current && e.preventDefault()
                    };
                    return no("div", {
                        className: to.a.container,
                        ref: O
                    }, p && no(Yr, {
                        className: to.a.title,
                        tag: c,
                        label: p
                    }), no(sn.a, {
                        className: to.a.toggle,
                        activeGender: v,
                        setActiveGender: l,
                        focusable: !0
                    }), no("div", {
                        className: to.a.slider
                    }, no(a.b.div, Object(s.a)({
                        className: to.a.track
                    }, R, {
                        ref: _
                    }), d.map((function(e, t) {
                        return no(ao, {
                            key: "".concat(null === e || void 0 === e ? void 0 : e.sku, "-").concat(t),
                            product: e,
                            activeGender: v,
                            onClick: D,
                            onMouseDown: E,
                            onMouseUp: x,
                            handleOnFocus: function(e) {
                                return N(e, t)
                            }
                        })
                    }))), 0 !== k && no("button", {
                        className: Object(i.a)(to.a.button, to.a.prev),
                        onClick: function(e) {
                            return I(k - 1)
                        }
                    }, no(Nn, {
                        className: to.a.arrow
                    })), k !== d.length - 1 && no("button", {
                        className: Object(i.a)(to.a.button, to.a.next),
                        onClick: function(e) {
                            return I(k + 1)
                        }
                    }, no(Nn, {
                        className: to.a.arrow
                    }))))
                })),
                co = n("0G7d"),
                uo = function(e) {
                    return {
                        getNavOpen: function() {
                            return e.appReducer.navOpen
                        }
                    }
                },
                lo = {
                    toggleNav: V.l,
                    setMenuBar: V.g
                },
                so = function(e) {
                    return Object(B.b)(uo, lo)(e)
                },
                fo = n("AWD8"),
                po = n.n(fo),
                yo = o.a.createElement,
                vo = Object(r.forwardRef)((function(e, t) {
                    var n = e.slug,
                        r = e.label,
                        o = e.onClick;
                    return yo(j.a, {
                        page: n
                    }, yo("a", {
                        ref: t,
                        onClick: o,
                        className: Object(i.a)(po.a.button)
                    }, r))
                })),
                ho = so((function(e) {
                    var t = e.fields,
                        n = void 0 === t ? {} : t,
                        a = e.toggleNav,
                        c = e.getNavOpen,
                        l = e.setMenuBar,
                        s = n.image,
                        f = n.title,
                        d = n.slug,
                        p = void 0 === d ? "" : d,
                        y = n.buttonLabel,
                        v = void 0 === y ? "Explore" : y,
                        h = Object(r.useRef)(0),
                        b = c(),
                        m = Object(Tt.a)(),
                        g = Object(Dr.useRouter)(),
                        O = g.push,
                        _ = g.query,
                        j = g.pathname,
                        C = void 0 === j ? "" : j,
                        w = (_ || {}).locale,
                        P = Object(r.useRef)(),
                        L = Object(ue.a)({
                            threshold: 1
                        }),
                        S = Object(q.a)(L, 2),
                        M = S[0],
                        E = S[1],
                        x = Object(u.a)(E),
                        I = Object(r.useRef)(),
                        N = Object(r.useState)(!1),
                        T = N[0],
                        R = N[1],
                        D = Object(r.useRef)(),
                        A = Object(r.useCallback)((function() {
                            var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = n.pageSwitchTriggered,
                                o = void 0 === r || r;
                            o && (R(!0), null === (t = D.current) || void 0 === t || t.classList.add(po.a.isRemoved));
                            a(!1), l(), null === (e = D.current) || void 0 === e || e.classList.remove(po.a.isActive)
                        }), [a, l]);
                    return Object(r.useEffect)((function() {
                        var e = function() {
                            var e = Object(fe.a)(se.a.mark((function e() {
                                var t, n, r;
                                return se.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = h.current, e.next = 3, Object(pe.a)(100);
                                        case 3:
                                            if (h.current === n) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return r = co.a.findIndex((function(e) {
                                                return e.slug === p
                                            })), l({
                                                activeIndex: r,
                                                focusIndex: r - 1,
                                                loading: !0,
                                                count: co.a.length
                                            }), a(!0), null === (t = D.current) || void 0 === t || t.classList.add(po.a.isActive), e.next = 11, Object(pe.a)(5e3);
                                        case 11:
                                            if (h.current === n) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 13:
                                            O("/[locale]".concat(p), "/".concat(w).concat(p)), A();
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        I.current = E, E && !x ? e() : !E && x && A({
                            pageSwitchTriggered: !1
                        })
                    }), [O, l, a, w, E, C, p, x, A]), Object(r.useEffect)((function() {
                        b || h.current++
                    }), [b]), Object(r.useEffect)((function() {
                        return function() {
                            return h.current++
                        }
                    }), []), yo("div", {
                        ref: P,
                        className: po.a.container
                    }, yo(k.a, {
                        outerClassName: po.a.imageContainer,
                        asset: s,
                        useRatio: !1
                    }), m && yo(o.a.Fragment, null, yo("div", {
                        className: Object(i.a)(po.a.backdrop, E && po.a.isActive)
                    }), f && yo("div", {
                        className: Object(i.a)(po.a.title, E && po.a.isActive, T && po.a.isExiting)
                    }, yo("h2", {
                        className: po.a.titleBackground,
                        "aria-hidden": !0
                    }, f), yo("h2", {
                        className: po.a.titleForeground
                    }, f)), yo(vo, {
                        slug: p,
                        ref: D,
                        label: v,
                        onClick: A
                    })), yo("div", {
                        className: po.a.observer,
                        ref: M
                    }))
                })),
                bo = n("lPHp"),
                mo = n.n(bo),
                go = o.a.createElement,
                Oo = function(e) {
                    var t, n, o = e.file,
                        a = e.id,
                        i = e.className,
                        c = e.play,
                        u = null === o || void 0 === o || null === (t = o.fields) || void 0 === t || null === (n = t.file) || void 0 === n ? void 0 : n.url,
                        l = Object(r.useRef)();
                    return Object(r.useEffect)((function() {
                        l.current && mo.a && u && mo.a.loadAnimation({
                            container: l.current,
                            name: a,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            path: u
                        })
                    }), [u, a]), Object(r.useEffect)((function() {
                        a && (c ? mo.a.play(a) : mo.a.stop(a))
                    }), [c, a]), go("div", {
                        ref: l,
                        className: i
                    })
                },
                _o = n("+QUH"),
                jo = n.n(_o),
                Co = o.a.createElement,
                wo = function(e) {
                    var t = e.fields,
                        n = void 0 === t ? {} : t,
                        o = e.sys,
                        c = void 0 === o ? {} : o,
                        u = e.index,
                        l = e.activeIndex,
                        s = e.isFixed,
                        f = c.id,
                        d = n.image,
                        p = n.description,
                        y = n.smallText,
                        v = void 0 === y ? "" : y,
                        h = n.photographerText,
                        b = n.lottieFile,
                        m = Object(Tt.a)(),
                        g = {
                            hidden: {
                                opacity: 0
                            },
                            visible: {
                                opacity: m ? 1 : .5
                            }
                        },
                        O = Object(ue.a)(),
                        _ = Object(q.a)(O, 2),
                        j = _[0],
                        C = _[1],
                        w = Object(r.useRef)(),
                        P = Object(r.useRef)(0),
                        L = Object(r.useState)(!1),
                        S = L[0],
                        M = L[1],
                        E = Object(r.useState)(!1),
                        x = E[0],
                        I = E[1],
                        N = Object(r.useCallback)((function(e, t) {
                            e >= (t ? 45 : 20) && e < (t ? 55 : 80) ? S || M(!0) : 0 !== e && 100 !== e || S && M(!1)
                        }), [S]),
                        T = Object(r.useCallback)((function(e, t) {
                            e >= (t ? 45 : 35) && e < (t ? 65 : 80) ? x || I(!0) : x && I(!1)
                        }), [x]),
                        R = xe((function(e) {
                            N(e, m), T(e, m),
                                function(e) {
                                    if (e <= 40) {
                                        var t = Object(ke.a)(Object(ke.e)([20, 40], [0, 1], e), 0, 1);
                                        t !== P.current && (w.current.style.opacity = t, P.current = t)
                                    } else if (e >= 60) {
                                        var n = Object(ke.a)(Object(ke.e)([60, 80], [0, 1], e), 0, 1);
                                        n !== P.current && (w.current.style.opacity = 1 - n, P.current = n)
                                    } else P.current < 1 && (w.current.style.opacity = 1, P.current = 1)
                                }(e)
                        }), [m, T, N], C),
                        A = Object(r.useCallback)((function(e) {
                            e && (j(e), R.current = e)
                        }), [R, j]),
                        B = Object(r.useRef)(!0);
                    Object(r.useEffect)((function() {
                        return B.current = !0,
                            function() {
                                return B.current = !1
                            }
                    })), Object(r.useEffect)((function() {
                        !C && B.current && M(!1)
                    }), [C]);
                    var V = l === u ? "visible" : "hidden";
                    return Co("li", {
                        ref: A,
                        className: jo.a.slide
                    }, Co("div", {
                        className: Object(i.a)(jo.a.left, jo.a.slideSide)
                    }, Co("div", {
                        className: jo.a.textContainer,
                        ref: w
                    }, Co(D, {
                        className: jo.a.text,
                        text: p
                    })), Co(a.b.div, {
                        variants: {
                            hidden: {
                                opacity: 0
                            },
                            visible: {
                                opacity: 1
                            }
                        },
                        initial: V,
                        animate: V,
                        transition: {
                            ease: ve.b,
                            duration: .3
                        },
                        className: Object(i.a)(x && jo.a.isActive, jo.a.infoContainer, s && jo.a.isFixed)
                    }, Co("small", {
                        "aria-label": v,
                        className: jo.a.smallText
                    }, Co($n, {
                        text: v,
                        canAnimate: x
                    })), h && Co("small", {
                        "aria-label": h,
                        className: jo.a.smallText
                    }, Co($n, {
                        text: h,
                        canAnimate: x,
                        delay: v.length
                    })))), Co(a.b.div, {
                        variants: g,
                        initial: V,
                        animate: V,
                        transition: {
                            ease: ve.b,
                            duration: 1
                        },
                        className: Object(i.a)(jo.a.right, jo.a.slideSide, s && jo.a.isFixed)
                    }, d && Co(k.a, {
                        className: jo.a.image,
                        useRatio: !1,
                        asset: d
                    }), m && Co(Oo, {
                        id: f,
                        className: jo.a.lottie,
                        file: b,
                        play: S
                    })), !m && Co(Oo, {
                        id: f,
                        className: jo.a.lottie,
                        file: b,
                        play: S
                    }))
                },
                Po = n("S930"),
                Lo = n.n(Po),
                ko = o.a.createElement,
                So = function(e) {
                    var t = e.fields,
                        n = t.title,
                        a = t.slides,
                        i = void 0 === a ? [] : a,
                        c = e.inView,
                        u = Object(r.useState)(0),
                        l = u[0],
                        s = u[1],
                        f = Object(r.useState)(!1),
                        d = f[0],
                        p = f[1],
                        y = 100 / (i.length - 1),
                        v = Object(r.useRef)(),
                        h = Object(r.useRef)([0, 0]),
                        b = Object(r.useRef)(!1);
                    Object(r.useEffect)((function() {
                        return function() {
                            return b.current = !0
                        }
                    }), []), Object(Ee.a)((function() {
                        var e = v.current.getBoundingClientRect().height,
                            t = Object(ke.c)(v.current).top;
                        h.current = [t, t + (e - window.innerHeight)]
                    }), []);
                    Object(Me.a)({
                        onScroll: Object(r.useCallback)((function(e) {
                            var t = e.y;
                            if (c && !b.current) {
                                var n, r, o = (n = h.current, r = t, Object(ke.a)(Object(ke.e)(n, [0, 100], r), 0, 100)),
                                    a = Math.min(Math.floor((o + y / 2) / y), i.length - 1);
                                a !== l && s(a), 100 === o || 0 === o ? d && p(!1) : !d && p(!0)
                            }
                        }), [l, d, c, i.length, y]),
                        active: c
                    });
                    return ko(o.a.Fragment, null, ko("h2", {
                        className: Lo.a.title
                    }, n), ko("ul", {
                        ref: v,
                        className: Lo.a.slides
                    }, i.map((function(e, t) {
                        var n = e.fields,
                            r = e.sys,
                            o = r.id;
                        return ko(wo, {
                            key: o,
                            index: t,
                            sys: r,
                            fields: n,
                            isFixed: d,
                            activeIndex: l
                        })
                    }))))
                },
                Mo = n("9IiE"),
                Eo = n.n(Mo),
                xo = o.a.createElement,
                Io = function(e) {
                    var t = e.fields,
                        n = t.title,
                        a = t.blocks,
                        c = void 0 === a ? [] : a,
                        u = t.audio,
                        l = e.setOverlayOpen,
                        f = e.getPopupIndex,
                        d = e.uid,
                        p = e.inView,
                        y = Object(ue.a)({
                            rootMargin: "1500px"
                        }),
                        v = Object(q.a)(y, 2),
                        h = v[0],
                        b = v[1],
                        m = Object(Ne.a)(),
                        g = Object(r.useRef)([]),
                        O = Object(r.useState)(0),
                        _ = O[0],
                        j = O[1],
                        C = Object(r.useState)(0),
                        w = C[0],
                        P = C[1],
                        L = !1,
                        k = 0;
                    return xo(o.a.Fragment, null, xo("h2", {
                        className: Eo.a.title
                    }, n), xo(Ht, {
                        tag: "div",
                        focusIndex: w,
                        focussedImageBounds: _,
                        inView: p,
                        sliderClassName: Eo.a.slider
                    }, xo("div", {
                        ref: h,
                        className: Eo.a.imagesContainer
                    }, c.map((function(e, t) {
                        var n = e.fields,
                            r = void 0 === n ? {} : n,
                            o = e.sys,
                            a = void 0 === o ? {} : o,
                            p = r.text,
                            y = r.images,
                            v = void 0 === y ? [] : y,
                            h = r.backgroundColor,
                            O = Ke.a[h] || {},
                            _ = {
                                backgroundColor: O.backgroundColor,
                                "--loading-background-color": O.loadingBackgroundColor
                            },
                            C = 0 === t,
                            w = t === c.length - 1;
                        return xo("figure", {
                            className: Object(i.a)(Eo.a.block, C && Eo.a.first, w && Eo.a.last),
                            key: a.id,
                            style: _
                        }, p && xo("figcaption", {
                            className: Eo.a.text
                        }, p), v.map((function(e, t) {
                            var n, r = e.fields,
                                o = void 0 === r ? {} : r,
                                a = o.image,
                                c = o.size,
                                p = L && "portrait" !== L;
                            L = c;
                            var y = t === v.length - 1,
                                h = k++,
                                O = t === v.length - 1,
                                _ = C && O;
                            return xo("div", {
                                ref: function(e) {
                                    return g.current[h] = e
                                },
                                key: null === a || void 0 === a || null === (n = a.sys) || void 0 === n ? void 0 : n.id,
                                className: Object(i.a)(Eo.a.imageWrapper, Eo.a[c], p && Eo.a.marginLeft, y && Eo.a.marginRight)
                            }, xo(Te.a, {
                                className: Eo.a.image,
                                asset: a,
                                useRatio: "portrait" === c,
                                ratio: "portrait" === c ? 133.333 : null,
                                uid: d,
                                opensOverlay: !0,
                                setOverlayOpen: l,
                                getPopupIndex: f,
                                handleOnFocus: function() {
                                    return function(e) {
                                        var t = g.current[e].getBoundingClientRect();
                                        j(t), P(e)
                                    }(h)
                                },
                                forceLoad: b,
                                soundPlayerParallax: !1
                            }), _ && u && xo(We.a, Object(s.a)({
                                x: m ? "calc(100% - 7.5rem)" : "calc(100% - 5.6rem)",
                                y: m ? "-5rem" : "10%",
                                parallax: !1
                            }, u)))
                        })))
                    })))))
                },
                No = n("NbP0"),
                To = n.n(No),
                Ro = o.a.createElement,
                Do = function(e) {
                    var t = e.fields,
                        n = void 0 === t ? {} : t,
                        o = e.inView,
                        i = n.title,
                        c = n.mammutLogoLabel,
                        u = n.video,
                        l = Object(r.useState)(!1),
                        f = l[0],
                        d = l[1],
                        p = Object(r.useRef)(),
                        y = Object(r.useRef)(0);
                    return Object(Ee.a)((function() {
                        var e = p.current.getBoundingClientRect().height,
                            t = Object(ke.c)(p.current).top;
                        y.current = t + e
                    }), []), Object(Me.a)({
                        onScroll: Object(r.useCallback)((function(e) {
                            e.y >= y.current ? d(!0) : d(!1)
                        }), []),
                        active: o
                    }), Ro("div", {
                        className: To.a.container
                    }, Ro("div", {
                        className: To.a.titleContainer
                    }, Ro(Cr, {
                        label: c,
                        className: To.a.mammutLogo
                    }), Ro(a.b.h1, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 1,
                            delay: .4,
                            ease: [.16, 1, .3, 1]
                        },
                        className: To.a.title,
                        ref: p
                    }, i)), Ro(wt, Object(s.a)({
                        className: To.a.video,
                        cover: !0,
                        controlsClassName: To.a.controls,
                        srcClassName: To.a.src,
                        playing: f,
                        showControlsOnTrigger: f
                    }, u)))
                },
                Ao = n("GZAR"),
                Bo = n.n(Ao),
                Vo = o.a.createElement,
                Ho = function(e) {
                    var t = e.fields,
                        n = t.firstName,
                        r = t.lastName,
                        o = t.introHeading,
                        a = t.intro,
                        c = t.startYearHeading,
                        u = t.startYear,
                        l = t.birthdateHeading,
                        s = t.birthdate;
                    return Vo("div", {
                        className: Bo.a.container
                    }, Vo("div", {
                        className: Bo.a.name
                    }, Vo("div", {
                        className: Bo.a.partialName
                    }, n), Vo("div", {
                        className: Bo.a.partialName
                    }, r)), Vo("div", {
                        className: Bo.a.facts
                    }, Vo("div", {
                        className: Object(i.a)(Bo.a.fact, Bo.a.intro)
                    }, Vo("div", {
                        className: Bo.a.key
                    }, o), Vo("div", {
                        className: Bo.a.value
                    }, a)), Vo("div", {
                        className: Object(i.a)(Bo.a.fact, Bo.a.birthdate)
                    }, Vo("div", {
                        className: Bo.a.key
                    }, l), Vo("div", {
                        className: Bo.a.value
                    }, s)), Vo("div", {
                        className: Object(i.a)(Bo.a.fact, Bo.a.startYear)
                    }, Vo("div", {
                        className: Bo.a.key
                    }, c), Vo("div", {
                        className: Bo.a.value
                    }, u))))
                },
                Zo = o.a.createElement,
                Wo = {
                    blockTwoImages: ze,
                    blockImageWithMeters: it,
                    blockVideo: xt,
                    blockHorizontalSlider: Ut,
                    blockText: Kt,
                    blockThreeColumnImageCollage: Jt,
                    blockFullScreenImageFade: rn,
                    blockSingleImage: un,
                    blockProduct: Hn,
                    blockImageCollage: cr,
                    blockIntro: Le,
                    blockVideoSequence: Rr,
                    blurComponent: Ur,
                    blockShopMore: io,
                    blockNextUp: ho,
                    blockGoreTexSlides: So,
                    blockExtendedHorizontalSlider: Io,
                    blockIntroDevelopment: Do,
                    blockImageCollageDevelopment: vr,
                    blockAthleteInfo: Ho
                },
                Go = function(e) {
                    return Zo(o.a.Fragment, null)
                },
                Uo = function(e) {
                    return {
                        getOverlayOpen: function() {
                            return e.appReducer.overlayOpen || ""
                        }
                    }
                },
                Fo = {
                    setOverlayOpen: V.h
                },
                zo = function(e) {
                    return Object(B.b)(Uo, Fo)(e)
                },
                qo = n("Qvqy"),
                Ko = n.n(qo),
                Yo = o.a.createElement,
                Xo = zo((function(e) {
                    var t, n = e.block,
                        r = void 0 === n ? {} : n,
                        o = (e.index, Object(ce.a)(e, ["block", "index"])),
                        a = (null === r || void 0 === r ? void 0 : r.sys).contentType,
                        i = Wo[null === a || void 0 === a || null === (t = a.sys) || void 0 === t ? void 0 : t.id] || Go,
                        c = Object(ue.a)(),
                        u = Object(q.a)(c, 2),
                        l = u[0],
                        f = u[1];
                    return Yo("section", {
                        ref: l,
                        className: Ko.a.container
                    }, Yo(i, Object(s.a)({}, r, o, {
                        inView: f
                    })))
                })),
                Qo = n("uPTg"),
                Jo = n.n(Qo),
                $o = o.a.createElement;
            t.a = function(e) {
                var t = e.layoutBlock,
                    n = e.getPopupIndex,
                    r = e.uid,
                    o = e.data;
                return $o(a.b.div, {
                    className: Jo.a.container,
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1,
                        transition: {
                            delay: .2
                        }
                    },
                    exit: {
                        opacity: 0
                    }
                }, t.map((function(e, t) {
                    return $o(Xo, {
                        key: e.sys.id,
                        block: e,
                        getPopupIndex: n,
                        index: t,
                        uid: r
                    })
                })), $o(z, null), $o(ie, {
                    page: o
                }))
            }
        },
        ob4f: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return b
            }));
            var r = n("q1tI");
            var o = function(e, t) {
                if (!e) throw new Error("Invariant failed")
            };

            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            var u = new Map,
                l = new Map,
                s = new Map,
                f = 0;

            function d(e, t, n) {
                void 0 === n && (n = {}), n.threshold || (n.threshold = 0);
                var r = n,
                    a = r.root,
                    i = r.rootMargin,
                    c = r.threshold;
                if (u.has(e) && o(!1), e) {
                    var d = function(e) {
                            return e ? s.has(e) ? s.get(e) : (f += 1, s.set(e, f.toString()), s.get(e) + "_") : ""
                        }(a) + (i ? c.toString() + "_" + i : c.toString()),
                        p = l.get(d);
                    p || (p = new IntersectionObserver(y, n), d && l.set(d, p));
                    var v = {
                        callback: t,
                        element: e,
                        inView: !1,
                        observerId: d,
                        observer: p,
                        thresholds: p.thresholds || (Array.isArray(c) ? c : [c])
                    };
                    return u.set(e, v), p.observe(e), v
                }
            }

            function p(e) {
                if (e) {
                    var t = u.get(e);
                    if (t) {
                        var n = t.observerId,
                            r = t.observer,
                            o = r.root;
                        r.unobserve(e);
                        var a = !1,
                            i = !1;
                        n && u.forEach((function(t, r) {
                            r !== e && (t.observerId === n && (a = !0, i = !0), t.observer.root === o && (i = !0))
                        })), !i && o && s.delete(o), r && !a && r.disconnect(), u.delete(e)
                    }
                }
            }

            function y(e) {
                e.forEach((function(e) {
                    var t = e.isIntersecting,
                        n = e.intersectionRatio,
                        r = e.target,
                        o = u.get(r);
                    if (o && n >= 0) {
                        var a = o.thresholds.some((function(e) {
                            return o.inView ? n > e : n >= e
                        }));
                        void 0 !== t && (a = a && t), o.inView = a, o.callback(a, e)
                    }
                }))
            }
            var v = function(e) {
                var t, n;

                function u() {
                    for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    return a(c(t = e.call.apply(e, [this].concat(r)) || this), "state", {
                        inView: !1,
                        entry: void 0
                    }), a(c(t), "node", null), a(c(t), "handleNode", (function(e) {
                        t.node && (p(t.node), e || t.props.triggerOnce || t.setState({
                            inView: !1,
                            entry: void 0
                        })), t.node = e || null, t.observeNode()
                    })), a(c(t), "handleChange", (function(e, n) {
                        (e !== t.state.inView || e) && t.setState({
                            inView: e,
                            entry: n
                        }), t.props.onChange && t.props.onChange(e, n)
                    })), t
                }
                n = e, (t = u).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
                var l = u.prototype;
                return l.componentDidMount = function() {
                    this.node || o(!1)
                }, l.componentDidUpdate = function(e, t) {
                    e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold || (p(this.node), this.observeNode()), t.inView !== this.state.inView && this.state.inView && this.props.triggerOnce && (p(this.node), this.node = null)
                }, l.componentWillUnmount = function() {
                    this.node && (p(this.node), this.node = null)
                }, l.observeNode = function() {
                    if (this.node) {
                        var e = this.props,
                            t = e.threshold,
                            n = e.root,
                            r = e.rootMargin;
                        d(this.node, this.handleChange, {
                            threshold: t,
                            root: n,
                            rootMargin: r
                        })
                    }
                }, l.render = function() {
                    var e = this.state,
                        t = e.inView,
                        n = e.entry;
                    if (! function(e) {
                            return "function" !== typeof e.children
                        }(this.props)) return this.props.children({
                        inView: t,
                        entry: n,
                        ref: this.handleNode
                    });
                    var o = this.props,
                        a = o.children,
                        c = o.as,
                        u = o.tag,
                        l = (o.triggerOnce, o.threshold, o.root, o.rootMargin, o.onChange, function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(o, ["children", "as", "tag", "triggerOnce", "threshold", "root", "rootMargin", "onChange"]));
                    return Object(r.createElement)(c || u || "div", i({
                        ref: this.handleNode
                    }, l), a)
                }, u
            }(r.Component);
            a(v, "displayName", "InView"), a(v, "defaultProps", {
                threshold: 0,
                triggerOnce: !1
            });
            var h = {
                inView: !1,
                entry: void 0
            };

            function b(e) {
                void 0 === e && (e = {});
                var t = Object(r.useRef)(),
                    n = Object(r.useState)(h),
                    o = n[0],
                    a = n[1],
                    i = Object(r.useCallback)((function(n) {
                        t.current && p(t.current), n && d(n, (function(t, r) {
                            a({
                                inView: t,
                                entry: r
                            }), t && e.triggerOnce && p(n)
                        }), e), t.current = n
                    }), [e.threshold, e.root, e.rootMargin, e.triggerOnce]);
                return Object(r.useEffect)((function() {
                    t.current || o === h || e.triggerOnce || a(h)
                })), [i, o.inView, o.entry]
            }
        },
        obQm: function(e, t, n) {
            e.exports = {
                container: "BlockImageCollage_container__2QXik",
                info: "BlockImageCollage_info__2htsu",
                infoItem: "BlockImageCollage_infoItem__wNgKD"
            }
        },
        pyrT: function(e, t, n) {
            e.exports = {
                container: "BlockProduct_container__15eYT",
                scrollContainer: "BlockProduct_scrollContainer__2kZrh",
                aside: "BlockProduct_aside__3c1hA",
                imagePlaceholder: "BlockProduct_imagePlaceholder__1MH5S",
                toggle: "BlockProduct_toggle__1s00w",
                stickyContainer: "BlockProduct_stickyContainer__3HOAS",
                dark: "BlockProduct_dark__3knPk",
                backgroundMedia: "BlockProduct_backgroundMedia__1Wadl",
                isVisible: "BlockProduct_isVisible__GQC6w",
                imageContainer: "BlockProduct_imageContainer__RxXb8",
                inView: "BlockProduct_inView__2CO31",
                image: "BlockProduct_image__3thoO",
                text: "BlockProduct_text__TxlX2",
                slides: "BlockProduct_slides__18dcC",
                link: "BlockProduct_link__3dlD3",
                isFixed: "BlockProduct_isFixed__1kYBw",
                arrow: "BlockProduct_arrow__15Bo1"
            }
        },
        "q+qS": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== u(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = c();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                a = (r = n("bmMU")) && r.__esModule ? r : {
                    default: r
                },
                i = n("QXAm");

            function c() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function u(e) {
                return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function l() {
                return (l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }

            function y(e, t) {
                return !t || "object" !== u(t) && "function" !== typeof t ? v(e) : t
            }

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(c, e);
                var t, n, r, i = p(c);

                function c() {
                    var e;
                    s(this, c);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return b(v(e = i.call.apply(i, [this].concat(n))), "mounted", !1), b(v(e), "isReady", !1), b(v(e), "isPlaying", !1), b(v(e), "isLoading", !0), b(v(e), "loadOnReady", null), b(v(e), "startOnPlay", !0), b(v(e), "seekOnPlay", null), b(v(e), "onDurationCalled", !1), b(v(e), "handlePlayerMount", (function(t) {
                        e.player = t, e.player.load(e.props.url), e.progress()
                    })), b(v(e), "getInternalPlayer", (function(t) {
                        return e.player ? e.player[t] : null
                    })), b(v(e), "progress", (function() {
                        if (e.props.url && e.player && e.isReady) {
                            var t = e.getCurrentTime() || 0,
                                n = e.getSecondsLoaded(),
                                r = e.getDuration();
                            if (r) {
                                var o = {
                                    playedSeconds: t,
                                    played: t / r
                                };
                                null !== n && (o.loadedSeconds = n, o.loaded = n / r), o.playedSeconds === e.prevPlayed && o.loadedSeconds === e.prevLoaded || e.props.onProgress(o), e.prevPlayed = o.playedSeconds, e.prevLoaded = o.loadedSeconds
                            }
                        }
                        e.progressTimeout = setTimeout(e.progress, e.props.progressFrequency || e.props.progressInterval)
                    })), b(v(e), "handleReady", (function() {
                        if (e.mounted) {
                            e.isReady = !0, e.isLoading = !1;
                            var t = e.props,
                                n = t.onReady,
                                r = t.playing,
                                o = t.volume,
                                a = t.muted;
                            n(), a || null === o || e.player.setVolume(o), e.loadOnReady ? (e.player.load(e.loadOnReady, !0), e.loadOnReady = null) : r && e.player.play(), e.handleDurationCheck()
                        }
                    })), b(v(e), "handlePlay", (function() {
                        e.isPlaying = !0, e.isLoading = !1;
                        var t = e.props,
                            n = t.onStart,
                            r = t.onPlay,
                            o = t.playbackRate;
                        e.startOnPlay && (e.player.setPlaybackRate && 1 !== o && e.player.setPlaybackRate(o), n(), e.startOnPlay = !1), r(), e.seekOnPlay && (e.seekTo(e.seekOnPlay), e.seekOnPlay = null), e.handleDurationCheck()
                    })), b(v(e), "handlePause", (function(t) {
                        e.isPlaying = !1, e.isLoading || e.props.onPause(t)
                    })), b(v(e), "handleEnded", (function() {
                        var t = e.props,
                            n = t.activePlayer,
                            r = t.loop,
                            o = t.onEnded;
                        n.loopOnEnded && r && e.seekTo(0), r || (e.isPlaying = !1, o())
                    })), b(v(e), "handleError", (function() {
                        var t;
                        e.isLoading = !1, (t = e.props).onError.apply(t, arguments)
                    })), b(v(e), "handleDurationCheck", (function() {
                        clearTimeout(e.durationCheckTimeout);
                        var t = e.getDuration();
                        t ? e.onDurationCalled || (e.props.onDuration(t), e.onDurationCalled = !0) : e.durationCheckTimeout = setTimeout(e.handleDurationCheck, 100)
                    })), b(v(e), "handleLoaded", (function() {
                        e.isLoading = !1
                    })), e
                }
                return t = c, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.mounted = !0
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = !1
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this,
                            n = this.props,
                            r = n.url,
                            o = n.playing,
                            i = n.volume,
                            c = n.muted,
                            u = n.playbackRate,
                            l = n.pip,
                            s = n.loop,
                            f = n.activePlayer;
                        if (!(0, a.default)(e.url, r)) {
                            if (this.isLoading && !f.forceLoad) return console.warn("ReactPlayer: the attempt to load ".concat(r, " is being deferred until the player has loaded")), void(this.loadOnReady = r);
                            this.isLoading = !0, this.startOnPlay = !0, this.onDurationCalled = !1, this.player.load(r, this.isReady)
                        }
                        e.playing || !o || this.isPlaying || this.player.play(), e.playing && !o && this.isPlaying && this.player.pause(), !e.pip && l && this.player.enablePIP && this.player.enablePIP(), e.pip && !l && this.player.disablePIP && this.player.disablePIP(), e.volume !== i && null !== i && this.player.setVolume(i), e.muted !== c && (c ? this.player.mute() : (this.player.unmute(), null !== i && setTimeout((function() {
                            return t.player.setVolume(i)
                        })))), e.playbackRate !== u && this.player.setPlaybackRate && this.player.setPlaybackRate(u), e.loop !== s && this.player.setLoop && this.player.setLoop(s)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.isReady ? this.player.getDuration() : null
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.isReady ? this.player.getCurrentTime() : null
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return this.isReady ? this.player.getSecondsLoaded() : null
                    }
                }, {
                    key: "seekTo",
                    value: function(e, t) {
                        var n = this;
                        if (!this.isReady && 0 !== e) return this.seekOnPlay = e, void setTimeout((function() {
                            n.seekOnPlay = null
                        }), 5e3);
                        if (t ? "fraction" === t : e > 0 && e < 1) {
                            var r = this.player.getDuration();
                            return r ? void this.player.seekTo(r * e) : void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")
                        }
                        this.player.seekTo(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.activePlayer;
                        return e ? o.default.createElement(e, l({}, this.props, {
                            onMount: this.handlePlayerMount,
                            onReady: this.handleReady,
                            onPlay: this.handlePlay,
                            onPause: this.handlePause,
                            onEnded: this.handleEnded,
                            onLoaded: this.handleLoaded,
                            onError: this.handleError
                        })) : null
                    }
                }]) && f(t.prototype, n), r && f(t, r), c
            }(o.Component);
            t.default = m, b(m, "displayName", "Player"), b(m, "propTypes", i.propTypes), b(m, "defaultProps", i.defaultProps)
        },
        rlHP: function(e, t) {
            e.exports = function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        swa8: function(e, t, n) {
            e.exports = {
                container: "BlockShopMore_container__3KpOS",
                title: "BlockShopMore_title__2D4LH",
                toggle: "BlockShopMore_toggle__2b-R6",
                slider: "BlockShopMore_slider__V6JwE",
                track: "BlockShopMore_track__2y1pf",
                suggestionCard: "BlockShopMore_suggestionCard__2awRR",
                button: "BlockShopMore_button__38dcY",
                prev: "BlockShopMore_prev__1eg0C",
                arrow: "BlockShopMore_arrow__3YTrI",
                next: "BlockShopMore_next__So2Bs"
            }
        },
        tLwA: function(e, t, n) {
            e.exports = {
                container: "USPSlide_container__1brNF",
                isActive: "USPSlide_isActive__1670i",
                content: "USPSlide_content__3gfDC",
                text: "USPSlide_text__Z5vH6",
                men: "USPSlide_men__3V2S0",
                women: "USPSlide_women__3SGLp",
                meters: "USPSlide_meters__3fv6V"
            }
        },
        tbWI: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.parseStartTime = function(e) {
                return d(e, u)
            }, t.parseEndTime = function(e) {
                return d(e, l)
            }, t.randomString = function() {
                return Math.random().toString(36).substr(2, 5)
            }, t.queryString = function(e) {
                return Object.keys(e).map((function(t) {
                    return "".concat(t, "=").concat(e[t])
                })).join("&")
            }, t.getSDK = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {
                        return !0
                    },
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.default,
                    i = p(t);
                if (i && o(i)) return Promise.resolve(i);
                return new Promise((function(r, o) {
                    if (y[e]) y[e].push({
                        resolve: r,
                        reject: o
                    });
                    else {
                        y[e] = [{
                            resolve: r,
                            reject: o
                        }];
                        var i = function(t) {
                            y[e].forEach((function(e) {
                                return e.resolve(t)
                            }))
                        };
                        if (n) {
                            var c = window[n];
                            window[n] = function() {
                                c && c(), i(p(t))
                            }
                        }
                        a(e, (function(r) {
                            r ? (y[e].forEach((function(e) {
                                return e.reject(r)
                            })), y[e] = null) : n || i(p(t))
                        }))
                    }
                }))
            }, t.getConfig = function(e, t) {
                return (0, o.default)(t.config, e.config)
            }, t.omit = function(e) {
                for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                for (var a = (t = []).concat.apply(t, r), i = {}, c = Object.keys(e), u = 0, l = c; u < l.length; u++) {
                    var s = l[u]; - 1 === a.indexOf(s) && (i[s] = e[s])
                }
                return i
            }, t.callPlayer = function(e) {
                var t;
                if (!this.player || !this.player[e]) {
                    var n = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(e, "%c \u2013 ");
                    return this.player ? this.player[e] || (n += "The method was not available") : n += "The player was not available", console.warn(n, "font-weight: bold", ""), null
                }
                for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
                return (t = this.player)[e].apply(t, o)
            }, t.isMediaStream = function(e) {
                return "undefined" !== typeof window && "undefined" !== typeof window.MediaStream && e instanceof window.MediaStream
            }, t.supportsWebKitPresentationMode = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.createElement("video"),
                    t = !1 === /iPhone|iPod/.test(navigator.userAgent);
                return e.webkitSupportsPresentationMode && "function" === typeof e.webkitSetPresentationMode && t
            };
            var r = a(n("MuZe")),
                o = a(n("PE4B"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                    } catch (u) {
                        o = !0, a = u
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var u = /[?&#](?:start|t)=([0-9hms]+)/,
                l = /[?&#]end=([0-9hms]+)/,
                s = /(\d+)(h|m|s)/g,
                f = /^\d+$/;

            function d(e, t) {
                if (!(e instanceof Array)) {
                    var n = e.match(t);
                    if (n) {
                        var r = n[1];
                        if (r.match(s)) return function(e) {
                            var t = 0,
                                n = s.exec(e);
                            for (; null !== n;) {
                                var r = i(n, 3),
                                    o = r[1],
                                    a = r[2];
                                "h" === a && (t += 60 * parseInt(o, 10) * 60), "m" === a && (t += 60 * parseInt(o, 10)), "s" === a && (t += parseInt(o, 10)), n = s.exec(e)
                            }
                            return t
                        }(r);
                        if (f.test(r)) return parseInt(r)
                    }
                }
            }

            function p(e) {
                return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null
            }
            var y = {}
        },
        thD0: function(e, t, n) {
            "use strict";
            var r = n("rePB"),
                o = n("KQm4"),
                a = n("q1tI"),
                i = n("3bd0");

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.a = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = Object(a.useMemo)((function() {
                        var t = -1;
                        return (e.layoutBlock || []).reduce((function(e, n) {
                            var a, c = n.fields,
                                l = null === c || void 0 === c ? void 0 : c.image,
                                s = (null === c || void 0 === c ? void 0 : c.images) || (null === c || void 0 === c || null === (a = c.blocks) || void 0 === a ? void 0 : a.reduce((function(e, t) {
                                    var n = t.fields,
                                        r = (void 0 === n ? {} : n).images,
                                        a = [];
                                    return (void 0 === r ? [] : r).forEach((function(e) {
                                        var t = e.fields,
                                            n = (void 0 === t ? {} : t).image;
                                        n && a.push(n)
                                    })), [].concat(Object(o.a)(e), a)
                                }), []));
                            if (Array.isArray(s) && s.forEach((function(n) {
                                    var o, a = Object(i.g)(n).fields.file,
                                        c = (a || {}).contentType;
                                    if (!a || "image/png" === c) return e;
                                    e = u(u({}, e), {}, Object(r.a)({}, null === n || void 0 === n || null === (o = n.sys) || void 0 === o ? void 0 : o.id, ++t))
                                })), l) {
                                var f, d = c.image,
                                    p = Object(i.g)(d).fields.file,
                                    y = (void 0 === p ? {} : p).contentType;
                                if (!d || "image/png" === y) return e;
                                if (d) e = u(u({}, e), {}, Object(r.a)({}, null === d || void 0 === d || null === (f = d.sys) || void 0 === f ? void 0 : f.id, ++t))
                            }
                            return e
                        }), {})
                    }), [e]),
                    n = Object(a.useCallback)((function(e) {
                        return "number" === typeof t[e] ? t[e] : -1
                    }), [t]);
                return n
            }
        },
        uPTg: function(e, t, n) {
            e.exports = {
                container: "LayoutBlocks_container__3hJ5r"
            }
        },
        uwFg: function(e, t, n) {
            e.exports = {
                imageWrapper: "TextImage_imageWrapper__2MO2i"
            }
        },
        vDWm: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = function() {
                    return {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                },
                a = new Set,
                i = !1,
                c = function() {
                    a.forEach((function(e) {
                        e(o())
                    }))
                };
            t.a = function() {
                var e = Object(r.useState)("undefined" !== typeof document ? o() : {}),
                    t = e[0],
                    n = e[1];
                return Object(r.useEffect)((function() {
                    return a.add(n), i || (window.addEventListener("resize", c), i = !0), n({
                            width: window.innerWidth,
                            height: window.innerHeight
                        }),
                        function() {
                            a.delete(n), 0 === a.size && (window.removeEventListener("resize", c), i = !1)
                        }
                }), []), t
            }
        },
        vbKG: function(e, t, n) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof e ? e : "undefined" !== typeof self ? self : {};

                function r(e, t) {
                    return e(t = {
                        exports: {}
                    }, t.exports), t.exports
                }
                var o = function(e) {
                        return e && e.Math == Math && e
                    },
                    a = o("object" == typeof globalThis && globalThis) || o("object" == typeof window && window) || o("object" == typeof self && self) || o("object" == typeof n && n) || Function("return this")(),
                    i = function(e) {
                        try {
                            return !!e()
                        } catch (t) {
                            return !0
                        }
                    },
                    c = !i((function() {
                        return 7 != Object.defineProperty({}, 1, {
                            get: function() {
                                return 7
                            }
                        })[1]
                    })),
                    u = {}.propertyIsEnumerable,
                    l = Object.getOwnPropertyDescriptor,
                    s = {
                        f: l && !u.call({
                            1: 2
                        }, 1) ? function(e) {
                            var t = l(this, e);
                            return !!t && t.enumerable
                        } : u
                    },
                    f = function(e, t) {
                        return {
                            enumerable: !(1 & e),
                            configurable: !(2 & e),
                            writable: !(4 & e),
                            value: t
                        }
                    },
                    d = {}.toString,
                    p = "".split,
                    y = i((function() {
                        return !Object("z").propertyIsEnumerable(0)
                    })) ? function(e) {
                        return "String" == function(e) {
                            return d.call(e).slice(8, -1)
                        }(e) ? p.call(e, "") : Object(e)
                    } : Object,
                    v = function(e) {
                        return y(function(e) {
                            if (void 0 == e) throw TypeError("Can't call method on " + e);
                            return e
                        }(e))
                    },
                    h = function(e) {
                        return "object" === typeof e ? null !== e : "function" === typeof e
                    },
                    b = function(e, t) {
                        if (!h(e)) return e;
                        var n, r;
                        if (t && "function" == typeof(n = e.toString) && !h(r = n.call(e))) return r;
                        if ("function" == typeof(n = e.valueOf) && !h(r = n.call(e))) return r;
                        if (!t && "function" == typeof(n = e.toString) && !h(r = n.call(e))) return r;
                        throw TypeError("Can't convert object to primitive value")
                    },
                    m = {}.hasOwnProperty,
                    g = function(e, t) {
                        return m.call(e, t)
                    },
                    O = a.document,
                    _ = h(O) && h(O.createElement),
                    j = function(e) {
                        return _ ? O.createElement(e) : {}
                    },
                    C = !c && !i((function() {
                        return 7 != Object.defineProperty(j("div"), "a", {
                            get: function() {
                                return 7
                            }
                        }).a
                    })),
                    w = Object.getOwnPropertyDescriptor,
                    P = {
                        f: c ? w : function(e, t) {
                            if (e = v(e), t = b(t, !0), C) try {
                                return w(e, t)
                            } catch (n) {}
                            if (g(e, t)) return f(!s.f.call(e, t), e[t])
                        }
                    },
                    L = function(e) {
                        if (!h(e)) throw TypeError(String(e) + " is not an object");
                        return e
                    },
                    k = Object.defineProperty,
                    S = {
                        f: c ? k : function(e, t, n) {
                            if (L(e), t = b(t, !0), L(n), C) try {
                                return k(e, t, n)
                            } catch (r) {}
                            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                            return "value" in n && (e[t] = n.value), e
                        }
                    },
                    M = c ? function(e, t, n) {
                        return S.f(e, t, f(1, n))
                    } : function(e, t, n) {
                        return e[t] = n, e
                    },
                    E = function(e, t) {
                        try {
                            M(a, e, t)
                        } catch (n) {
                            a[e] = t
                        }
                        return t
                    },
                    x = a["__core-js_shared__"] || E("__core-js_shared__", {}),
                    I = Function.toString;
                "function" != typeof x.inspectSource && (x.inspectSource = function(e) {
                    return I.call(e)
                });
                var N, T, R, D = x.inspectSource,
                    A = a.WeakMap,
                    B = "function" === typeof A && /native code/.test(D(A)),
                    V = r((function(e) {
                        (e.exports = function(e, t) {
                            return x[e] || (x[e] = void 0 !== t ? t : {})
                        })("versions", []).push({
                            version: "3.6.5",
                            mode: "global",
                            copyright: "\xa9 2020 Denis Pushkarev (zloirock.ru)"
                        })
                    })),
                    H = 0,
                    Z = Math.random(),
                    W = function(e) {
                        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++H + Z).toString(36)
                    },
                    G = V("keys"),
                    U = function(e) {
                        return G[e] || (G[e] = W(e))
                    },
                    F = {},
                    z = a.WeakMap;
                if (B) {
                    var q = new z,
                        K = q.get,
                        Y = q.has,
                        X = q.set;
                    N = function(e, t) {
                        return X.call(q, e, t), t
                    }, T = function(e) {
                        return K.call(q, e) || {}
                    }, R = function(e) {
                        return Y.call(q, e)
                    }
                } else {
                    var Q = U("state");
                    F[Q] = !0, N = function(e, t) {
                        return M(e, Q, t), t
                    }, T = function(e) {
                        return g(e, Q) ? e[Q] : {}
                    }, R = function(e) {
                        return g(e, Q)
                    }
                }
                var J = {
                        set: N,
                        get: T,
                        has: R,
                        enforce: function(e) {
                            return R(e) ? T(e) : N(e, {})
                        },
                        getterFor: function(e) {
                            return function(t) {
                                var n;
                                if (!h(t) || (n = T(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                                return n
                            }
                        }
                    },
                    $ = r((function(e) {
                        var t = J.get,
                            n = J.enforce,
                            r = String(String).split("String");
                        (e.exports = function(e, t, o, i) {
                            var c = !!i && !!i.unsafe,
                                u = !!i && !!i.enumerable,
                                l = !!i && !!i.noTargetGet;
                            "function" == typeof o && ("string" != typeof t || g(o, "name") || M(o, "name", t), n(o).source = r.join("string" == typeof t ? t : "")), e !== a ? (c ? !l && e[t] && (u = !0) : delete e[t], u ? e[t] = o : M(e, t, o)) : u ? e[t] = o : E(t, o)
                        })(Function.prototype, "toString", (function() {
                            return "function" == typeof this && t(this).source || D(this)
                        }))
                    })),
                    ee = a,
                    te = function(e) {
                        return "function" == typeof e ? e : void 0
                    },
                    ne = function(e, t) {
                        return arguments.length < 2 ? te(ee[e]) || te(a[e]) : ee[e] && ee[e][t] || a[e] && a[e][t]
                    },
                    re = Math.ceil,
                    oe = Math.floor,
                    ae = function(e) {
                        return isNaN(e = +e) ? 0 : (e > 0 ? oe : re)(e)
                    },
                    ie = Math.min,
                    ce = Math.max,
                    ue = Math.min,
                    le = function(e) {
                        return function(t, n, r) {
                            var o, a, i = v(t),
                                c = (o = i.length) > 0 ? ie(ae(o), 9007199254740991) : 0,
                                u = function(e, t) {
                                    var n = ae(e);
                                    return n < 0 ? ce(n + t, 0) : ue(n, t)
                                }(r, c);
                            if (e && n != n) {
                                for (; c > u;)
                                    if ((a = i[u++]) != a) return !0
                            } else
                                for (; c > u; u++)
                                    if ((e || u in i) && i[u] === n) return e || u || 0;
                            return !e && -1
                        }
                    },
                    se = {
                        includes: le(!0),
                        indexOf: le(!1)
                    },
                    fe = se.indexOf,
                    de = function(e, t) {
                        var n, r = v(e),
                            o = 0,
                            a = [];
                        for (n in r) !g(F, n) && g(r, n) && a.push(n);
                        for (; t.length > o;) g(r, n = t[o++]) && (~fe(a, n) || a.push(n));
                        return a
                    },
                    pe = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                    ye = pe.concat("length", "prototype"),
                    ve = {
                        f: Object.getOwnPropertyNames || function(e) {
                            return de(e, ye)
                        }
                    },
                    he = {
                        f: Object.getOwnPropertySymbols
                    },
                    be = ne("Reflect", "ownKeys") || function(e) {
                        var t = ve.f(L(e)),
                            n = he.f;
                        return n ? t.concat(n(e)) : t
                    },
                    me = function(e, t) {
                        for (var n = be(t), r = S.f, o = P.f, a = 0; a < n.length; a++) {
                            var i = n[a];
                            g(e, i) || r(e, i, o(t, i))
                        }
                    },
                    ge = /#|\.prototype\./,
                    Oe = function(e, t) {
                        var n = je[_e(e)];
                        return n == we || n != Ce && ("function" == typeof t ? i(t) : !!t)
                    },
                    _e = Oe.normalize = function(e) {
                        return String(e).replace(ge, ".").toLowerCase()
                    },
                    je = Oe.data = {},
                    Ce = Oe.NATIVE = "N",
                    we = Oe.POLYFILL = "P",
                    Pe = Oe,
                    Le = P.f,
                    ke = function(e, t) {
                        var n, r, o, i, c, u = e.target,
                            l = e.global,
                            s = e.stat;
                        if (n = l ? a : s ? a[u] || E(u, {}) : (a[u] || {}).prototype)
                            for (r in t) {
                                if (i = t[r], o = e.noTargetGet ? (c = Le(n, r)) && c.value : n[r], !Pe(l ? r : u + (s ? "." : "#") + r, e.forced) && void 0 !== o) {
                                    if (typeof i === typeof o) continue;
                                    me(i, o)
                                }(e.sham || o && o.sham) && M(i, "sham", !0), $(n, r, i, e)
                            }
                    },
                    Se = Object.keys || function(e) {
                        return de(e, pe)
                    },
                    Me = s.f,
                    Ee = function(e) {
                        return function(t) {
                            for (var n, r = v(t), o = Se(r), a = o.length, i = 0, u = []; a > i;) n = o[i++], c && !Me.call(r, n) || u.push(e ? [n, r[n]] : r[n]);
                            return u
                        }
                    },
                    xe = {
                        entries: Ee(!0),
                        values: Ee(!1)
                    }.values;
                ke({
                    target: "Object",
                    stat: !0
                }, {
                    values: function(e) {
                        return xe(e)
                    }
                });
                ee.Object.values;
                var Ie, Ne = !!Object.getOwnPropertySymbols && !i((function() {
                        return !String(Symbol())
                    })),
                    Te = Ne && !Symbol.sham && "symbol" == typeof Symbol.iterator,
                    Re = V("wks"),
                    De = a.Symbol,
                    Ae = Te ? De : De && De.withoutSetter || W,
                    Be = c ? Object.defineProperties : function(e, t) {
                        L(e);
                        for (var n, r = Se(t), o = r.length, a = 0; o > a;) S.f(e, n = r[a++], t[n]);
                        return e
                    },
                    Ve = ne("document", "documentElement"),
                    He = U("IE_PROTO"),
                    Ze = function() {},
                    We = function(e) {
                        return "<script>" + e + "<\/script>"
                    },
                    Ge = function() {
                        try {
                            Ie = document.domain && new ActiveXObject("htmlfile")
                        } catch (t) {}
                        Ge = Ie ? function(e) {
                            e.write(We("")), e.close();
                            var t = e.parentWindow.Object;
                            return e = null, t
                        }(Ie) : function() {
                            var e, t = j("iframe");
                            return t.style.display = "none", Ve.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(We("document.F=Object")), e.close(), e.F
                        }();
                        for (var e = pe.length; e--;) delete Ge.prototype[pe[e]];
                        return Ge()
                    };
                F[He] = !0;
                var Ue, Fe = Object.create || function(e, t) {
                        var n;
                        return null !== e ? (Ze.prototype = L(e), n = new Ze, Ze.prototype = null, n[He] = e) : n = Ge(), void 0 === t ? n : Be(n, t)
                    },
                    ze = (g(Re, Ue = "unscopables") || (Ne && g(De, Ue) ? Re[Ue] = De[Ue] : Re[Ue] = Ae("Symbol." + Ue)), Re[Ue]),
                    qe = Array.prototype;
                void 0 == qe[ze] && S.f(qe, ze, {
                    configurable: !0,
                    value: Fe(null)
                });
                var Ke, Ye = Object.defineProperty,
                    Xe = {},
                    Qe = function(e) {
                        throw e
                    },
                    Je = se.includes;
                ke({
                    target: "Array",
                    proto: !0,
                    forced: ! function(e, t) {
                        if (g(Xe, e)) return Xe[e];
                        t || (t = {});
                        var n = [][e],
                            r = !!g(t, "ACCESSORS") && t.ACCESSORS,
                            o = g(t, 0) ? t[0] : Qe,
                            a = g(t, 1) ? t[1] : void 0;
                        return Xe[e] = !!n && !i((function() {
                            if (r && !c) return !0;
                            var e = {
                                length: -1
                            };
                            r ? Ye(e, 1, {
                                enumerable: !0,
                                get: Qe
                            }) : e[1] = 1, n.call(e, o, a)
                        }))
                    }("indexOf", {
                        ACCESSORS: !0,
                        1: 0
                    })
                }, {
                    includes: function(e) {
                        return Je(this, e, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), Ke = "includes", qe[ze][Ke] = !0;
                var $e, et, tt, nt = function(e, t, n) {
                        if (function(e) {
                                if ("function" != typeof e) throw TypeError(String(e) + " is not a function")
                            }(e), void 0 === t) return e;
                        switch (n) {
                            case 0:
                                return function() {
                                    return e.call(t)
                                };
                            case 1:
                                return function(n) {
                                    return e.call(t, n)
                                };
                            case 2:
                                return function(n, r) {
                                    return e.call(t, n, r)
                                };
                            case 3:
                                return function(n, r, o) {
                                    return e.call(t, n, r, o)
                                }
                        }
                        return function() {
                            return e.apply(t, arguments)
                        }
                    },
                    rt = Function.call;
                $e = "includes", nt(rt, a["Array"].prototype[$e], et);
                ! function(e) {
                    e.DOCUMENT = "document", e.PARAGRAPH = "paragraph", e.HEADING_1 = "heading-1", e.HEADING_2 = "heading-2", e.HEADING_3 = "heading-3", e.HEADING_4 = "heading-4", e.HEADING_5 = "heading-5", e.HEADING_6 = "heading-6", e.OL_LIST = "ordered-list", e.UL_LIST = "unordered-list", e.LIST_ITEM = "list-item", e.HR = "hr", e.QUOTE = "blockquote", e.EMBEDDED_ENTRY = "embedded-entry-block", e.EMBEDDED_ASSET = "embedded-asset-block"
                }(tt || (tt = {}));
                var ot, at = tt;
                ! function(e) {
                    e.HYPERLINK = "hyperlink", e.ENTRY_HYPERLINK = "entry-hyperlink", e.ASSET_HYPERLINK = "asset-hyperlink", e.EMBEDDED_ENTRY = "embedded-entry-inline"
                }(ot || (ot = {}));
                var it, ct = ot,
                    ut = [at.PARAGRAPH, at.HEADING_1, at.HEADING_2, at.HEADING_3, at.HEADING_4, at.HEADING_5, at.HEADING_6, at.OL_LIST, at.UL_LIST, at.HR, at.QUOTE, at.EMBEDDED_ENTRY, at.EMBEDDED_ASSET],
                    lt = [at.HR, at.EMBEDDED_ENTRY, at.EMBEDDED_ASSET],
                    st = ((it = {})[at.OL_LIST] = [at.LIST_ITEM], it[at.UL_LIST] = [at.LIST_ITEM], it[at.LIST_ITEM] = ut.slice(), it[at.QUOTE] = [at.PARAGRAPH], it),
                    ft = {
                        nodeType: at.DOCUMENT,
                        data: {},
                        content: [{
                            nodeType: at.PARAGRAPH,
                            data: {},
                            content: [{
                                nodeType: "text",
                                value: "",
                                marks: [],
                                data: {}
                            }]
                        }]
                    };
                var dt = Object.freeze({
                    isInline: function(e) {
                        return Object.values(ct).includes(e.nodeType)
                    },
                    isBlock: function(e) {
                        return Object.values(at).includes(e.nodeType)
                    },
                    isText: function(e) {
                        return "text" === e.nodeType
                    }
                });
                t.BLOCKS = at, t.CONTAINERS = st, t.EMPTY_DOCUMENT = ft, t.INLINES = ct, t.MARKS = {
                    BOLD: "bold",
                    ITALIC: "italic",
                    UNDERLINE: "underline",
                    CODE: "code"
                }, t.TOP_LEVEL_BLOCKS = ut, t.VOID_BLOCKS = lt, t.helpers = dt
            }).call(this, n("yLpj"))
        },
        wHTj: function(e, t, n) {
            e.exports = {
                blurContainer: "BlockBlur_blurContainer__26SCi",
                dark: "BlockBlur_dark__3rZq_",
                isPortrait: "BlockBlur_isPortrait__2W7x2",
                bigImageContainer: "BlockBlur_bigImageContainer__3d6J5",
                stickyContainer: "BlockBlur_stickyContainer__H7xWT",
                imagesContainer: "BlockBlur_imagesContainer__2ifNG",
                imageWrapper: "BlockBlur_imageWrapper__1efnN",
                image: "BlockBlur_image__DJbU5",
                overlay: "BlockBlur_overlay__3aNvo",
                inView: "BlockBlur_inView__lXd-S",
                titleOuter: "BlockBlur_titleOuter__1-cvB",
                titleInner: "BlockBlur_titleInner__2JhEX",
                title: "BlockBlur_title__4uUbl",
                logo: "BlockBlur_logo__15sri",
                highlight: "BlockBlur_highlight__ok-nC",
                alignToBaikal: "BlockBlur_alignToBaikal__3YHrX",
                highlightTextOut: "BlockBlur_highlightTextOut__1qiao",
                textContainer: "BlockBlur_textContainer__DBMkt",
                right: "BlockBlur_right__1Uybt",
                text: "BlockBlur_text__1_yqU",
                languagesList: "BlockBlur_languagesList__ZpjTw",
                languageItem: "BlockBlur_languageItem__3vSC2",
                languageName: "BlockBlur_languageName__1aRZr",
                selectedLang: "BlockBlur_selectedLang___fvTF"
            }
        },
        wa2x: function(e, t, n) {
            e.exports = {
                container: "BlockThreeColumnImage_container__2wE58",
                inView: "BlockThreeColumnImage_inView__W8Z1k",
                mediaContainer: "BlockThreeColumnImage_mediaContainer__1DrOc",
                aside: "BlockThreeColumnImage_aside__1gxl4",
                asideMediaWrapper: "BlockThreeColumnImage_asideMediaWrapper__3GX6z",
                mainImageWrapper: "BlockThreeColumnImage_mainImageWrapper__1E9pu",
                caption: "BlockThreeColumnImage_caption__1DsQX"
            }
        },
        wix9: function(e, t, n) {
            "use strict";
            var r = n("wx14"),
                o = n("Ff2n"),
                a = n("q1tI"),
                i = n.n(a),
                c = n("wNob"),
                u = n("h0Lr"),
                l = n.n(u),
                s = i.a.createElement;
            t.a = function(e) {
                var t = e.className,
                    n = Object(o.a)(e, ["className"]);
                return s("svg", Object(r.a)({
                    viewBox: "6 2 12 13.5",
                    className: Object(c.a)(l.a.container, t)
                }, n), s("path", {
                    d: "M16.25 8.625L7.10317 2.52183V14.7282L16.25 8.625Z"
                }))
            }
        },
        wpIr: function(e, t, n) {
            "use strict";
            var r = n("wx14"),
                o = n("ODXe"),
                a = n("Ff2n"),
                i = n("q1tI"),
                c = n.n(i),
                u = n("ob4f"),
                l = n("wNob"),
                s = n("TpTL"),
                f = n("eCXG"),
                d = n.n(f),
                p = c.a.createElement,
                y = function(e) {
                    var t = e.className,
                        n = Object(a.a)(e, ["className"]);
                    return p("svg", Object(r.a)({
                        viewBox: "0 0 15 15",
                        className: Object(l.a)(d.a.container, t)
                    }, n), p("path", {
                        d: "M7.25 8.875L7.25 15L8.75 15L8.75 8.875L7.25 8.875ZM7.25 7.125L8.75 7.125L8.75 1L7.25 1L7.25 7.125Z"
                    }), p("path", {
                        d: "M8.875 7.25L8.875 8.75L15 8.75L15 7.25L8.875 7.25ZM7.125 7.25L1 7.25L1 8.75L7.125 8.75L7.125 7.25Z"
                    }))
                },
                v = n("/MKj"),
                h = n("ZpDd"),
                b = function(e) {
                    return {
                        getInfoOverlay: function() {
                            return e.appReducer.infoOverlay
                        }
                    }
                },
                m = {
                    setInfoOverlay: h.e
                },
                g = function(e) {
                    return Object(v.b)(b, m)(e)
                },
                O = n("NYZm"),
                _ = n.n(O),
                j = c.a.createElement;
            t.a = g((function(e) {
                e.getInfoOverlay, e.setInfoOverlay;
                var t, n, f, d = e.className,
                    p = e.imageClassName,
                    v = e.handleOnFocus,
                    h = e.onMouseDown,
                    b = e.onMouseUp,
                    m = e.product,
                    g = e.leftSide,
                    O = void 0 !== g && g,
                    C = e.type,
                    w = void 0 === C ? "tooltip" : C,
                    P = e.delayedInView,
                    L = void 0 !== P && P,
                    k = e.hidden,
                    S = void 0 !== k && k,
                    M = e.dot,
                    E = void 0 !== M && M,
                    x = e.horizontal,
                    I = void 0 !== x && x,
                    N = e.onLinkClick,
                    T = void 0 === N ? null : N,
                    R = (e.activeGender, e.focusable),
                    D = Object(a.a)(e, ["getInfoOverlay", "setInfoOverlay", "className", "imageClassName", "handleOnFocus", "onMouseDown", "onMouseUp", "product", "leftSide", "type", "delayedInView", "hidden", "dot", "horizontal", "onLinkClick", "activeGender", "focusable"]),
                    A = null === m || void 0 === m || null === (t = m.fields) || void 0 === t ? void 0 : t.url,
                    B = null === m || void 0 === m || null === (n = m.fields) || void 0 === n ? void 0 : n.image,
                    V = null === m || void 0 === m || null === (f = m.fields) || void 0 === f ? void 0 : f.name,
                    H = Object(u.a)({
                        triggerOnce: !0
                    }),
                    Z = Object(o.a)(H, 2),
                    W = Z[0],
                    G = Z[1],
                    U = !S && G && !E,
                    F = "card" === w,
                    z = Object(i.useCallback)((function() {
                        return j(c.a.Fragment, null, j("div", {
                            className: Object(l.a)(_.a.imageContainer, p)
                        }, B && j(s.a, {
                            className: _.a.image,
                            asset: B,
                            containImg: !0,
                            ratio: "100",
                            preventZoom: !0
                        })), j("div", {
                            className: Object(l.a)(_.a.info, I && _.a.horizontal)
                        }, j("div", {
                            className: _.a.title
                        }, "tooltip" === w ? function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 11;
                            return "string" !== typeof e || e.length <= t ? e : e.slice(0, t) + "..."
                        }(V, 15) : V)))
                    }), [I, B, p, V, w]);
                return j(c.a.Fragment, null, "tooltip" === w && j("div", Object(r.a)({
                    className: Object(l.a)(_.a.dot, E && _.a.visible, d)
                }, D), j(y, {
                    className: _.a.dotIcon
                })), j("div", Object(r.a)({
                    className: Object(l.a)(_.a.container, d, F && _.a.card, L && _.a.delayedInView, O && _.a.leftSide, U && _.a.loaded)
                }, D, {
                    ref: W
                }), "tooltip" === w && j("div", {
                    className: _.a.mask
                }, j("div", {
                    className: Object(l.a)(_.a.inner, _.a.toolTip)
                }, z())), "card" === w && j("a", {
                    className: Object(l.a)(_.a.inner, _.a.card),
                    href: A,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    onClick: T,
                    onMouseDown: h,
                    onMouseUp: b,
                    onFocus: v,
                    tabIndex: R ? 0 : -1
                }, z())))
            }))
        },
        xAw8: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n("2D6l");
            t.a = function() {
                var e = Object(r.useRef)(!1);
                return Object(r.useCallback)((function(t, n) {
                    var r = e.current,
                        a = function(e, t) {
                            var n = t + (e - t) * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .15);
                            return Object(o.b)(e, n) < .5 ? e : Object(o.f)(n, 100)
                        }(t, r || t, n);
                    return e.current = a, [a, r]
                }))
            }
        },
        xL8b: function(e, t, n) {
            e.exports = {
                introContainer: "BlockIntro_introContainer__3iv3I",
                logoWrapper: "BlockIntro_logoWrapper__3Xc8i",
                logo: "BlockIntro_logo__1wzvf",
                titleWrapper: "BlockIntro_titleWrapper__1GHnv",
                title: "BlockIntro_title__3dVOJ",
                fontLoaded: "BlockIntro_fontLoaded__2B3YF",
                imagesContainer: "BlockIntro_imagesContainer__19Hnt",
                imageWrapper: "BlockIntro_imageWrapper__M73j6",
                show: "BlockIntro_show__1Mn60",
                imageWrapper0: "BlockIntro_imageWrapper0__Q6H9m",
                imageWrapper1: "BlockIntro_imageWrapper1__Jl6Ys",
                imageWrapper2: "BlockIntro_imageWrapper2__3Z7EF",
                imageWrapper3: "BlockIntro_imageWrapper3__39QgZ",
                imageWrapper4: "BlockIntro_imageWrapper4__NJQHs"
            }
        },
        xkkJ: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== c(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = n("tbWI"),
                a = n("mzdp");

            function i() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function c(e) {
                return (c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        b(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var o = h(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }

            function y(e, t) {
                return !t || "object" !== c(t) && "function" !== typeof t ? v(e) : t
            }

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(c, e);
                var t, n, a, i = p(c);

                function c() {
                    var e;
                    s(this, c);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return b(v(e = i.call.apply(i, [this].concat(n))), "callPlayer", o.callPlayer), b(v(e), "duration", null), b(v(e), "currentTime", null), b(v(e), "fractionLoaded", null), b(v(e), "mute", (function() {
                        e.setVolume(0)
                    })), b(v(e), "unmute", (function() {
                        null !== e.props.volume && e.setVolume(e.props.volume)
                    })), b(v(e), "ref", (function(t) {
                        e.iframe = t
                    })), e
                }
                return t = c, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.onMount && this.props.onMount(this)
                    }
                }, {
                    key: "load",
                    value: function(e, t) {
                        var n = this;
                        (0, o.getSDK)("https://w.soundcloud.com/player/api.js", "SC").then((function(r) {
                            if (n.iframe) {
                                var o = r.Widget.Events,
                                    a = o.PLAY,
                                    i = o.PLAY_PROGRESS,
                                    c = o.PAUSE,
                                    u = o.FINISH,
                                    s = o.ERROR;
                                t || (n.player = r.Widget(n.iframe), n.player.bind(a, n.props.onPlay), n.player.bind(c, (function() {
                                    n.duration - n.currentTime < .05 || n.props.onPause()
                                })), n.player.bind(i, (function(e) {
                                    n.currentTime = e.currentPosition / 1e3, n.fractionLoaded = e.loadedProgress
                                })), n.player.bind(u, (function() {
                                    return n.props.onEnded()
                                })), n.player.bind(s, (function(e) {
                                    return n.props.onError(e)
                                }))), n.player.load(e, l(l({}, n.props.config.options), {}, {
                                    callback: function() {
                                        n.player.getDuration((function(e) {
                                            n.duration = e / 1e3, n.props.onReady()
                                        }))
                                    }
                                }))
                            }
                        }))
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.callPlayer("play")
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.callPlayer("pause")
                    }
                }, {
                    key: "stop",
                    value: function() {}
                }, {
                    key: "seekTo",
                    value: function(e) {
                        this.callPlayer("seekTo", 1e3 * e)
                    }
                }, {
                    key: "setVolume",
                    value: function(e) {
                        this.callPlayer("setVolume", 100 * e)
                    }
                }, {
                    key: "getDuration",
                    value: function() {
                        return this.duration
                    }
                }, {
                    key: "getCurrentTime",
                    value: function() {
                        return this.currentTime
                    }
                }, {
                    key: "getSecondsLoaded",
                    value: function() {
                        return this.fractionLoaded * this.duration
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                            width: "100%",
                            height: "100%",
                            display: this.props.display
                        };
                        return r.default.createElement("iframe", {
                            ref: this.ref,
                            src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
                            style: e,
                            frameBorder: 0,
                            allow: "autoplay"
                        })
                    }
                }]) && f(t.prototype, n), a && f(t, a), c
            }(r.Component);
            t.default = m, b(m, "displayName", "SoundCloud"), b(m, "canPlay", a.canPlay.soundcloud), b(m, "loopOnEnded", !0)
        },
        xp16: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return o
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "a", (function() {
                return c
            }));
            n("KQm4");
            var r = n("8pX6"),
                o = function(e, t) {
                    if (!e) return null;
                    var n = e.getBoundingClientRect(),
                        r = n.x,
                        o = n.y,
                        a = e.offsetWidth,
                        i = a * t - a,
                        c = e.offsetHeight;
                    return {
                        x: r + i / 2,
                        y: o + (c * t - c) / 2,
                        width: a,
                        height: c
                    }
                },
                a = function(e) {
                    return (e = e.toString()).length < 2 && (e = "0".concat(e)), e
                },
                i = function(e) {
                    var t = a(~~((e = ~~e) / 60)),
                        n = a(e % 60);
                    return "".concat(t, ":").concat(n)
                };
            var c = function(e) {
                var t = (null === e || void 0 === e ? void 0 : e.fields) || {},
                    n = t.title,
                    o = t.popupFullscreen,
                    a = t.description,
                    i = t.color,
                    c = t.linkedItems,
                    u = void 0 === c ? [] : c,
                    l = Object(r.b)(i);
                return {
                    image: e,
                    imageType: "cf",
                    title: n,
                    text: a,
                    fullscreenMode: o,
                    color: l.backgroundColor,
                    textColor: l.color,
                    products: u.filter((function(e) {
                        var t, n, r = e.item;
                        return "productSet" === ((null === r || void 0 === r || null === (t = r.sys) || void 0 === t || null === (n = t.contentType) || void 0 === n ? void 0 : n.sys) || {}).id
                    }))
                }
            }
        },
        y4v0: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return te
            }));
            var r = n("q1tI"),
                o = n.n(r);

            function a(e, t) {
                return e.map((function(e, n) {
                    return e + t[n]
                }))
            }

            function i(e, t) {
                return e.map((function(e, n) {
                    return e - t[n]
                }))
            }

            function c(e, t, n) {
                return n = n || Math.hypot.apply(Math, e), t ? n / t : 0
            }

            function u(e, t) {
                return t ? e.map((function(e) {
                    return e / t
                })) : Array(e.length).fill(0)
            }

            function l(e) {
                return Math.hypot.apply(Math, e)
            }

            function s(e, t) {
                return t = t || Math.hypot.apply(Math, e) || 1, e.map((function(e) {
                    return e / t
                }))
            }

            function f(e, t, n) {
                var r = Math.hypot.apply(Math, t);
                return {
                    velocities: u(t, n),
                    velocity: c(t, n, r),
                    distance: l(e),
                    direction: s(t, r)
                }
            }

            function d(e) {
                return Math.sign ? Math.sign(e) : Number(e > 0) - Number(e < 0) || +e
            }

            function p(e, t) {
                return Math.abs(e) >= t && d(e) * t
            }

            function y(e, t, n) {
                return 0 === t || Math.abs(t) === 1 / 0 ? function(e, t) {
                    return Math.pow(e, 5 * t)
                }(e, n) : e * t * n / (t + n * e)
            }

            function v(e, t, n, r) {
                return void 0 === r && (r = .15), 0 === r ? function(e, t, n) {
                    return Math.max(t, Math.min(e, n))
                }(e, t, n) : e < t ? -y(t - e, n - t, r) + t : e > n ? y(e - n, n - t, r) + n : e
            }

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function b() {
                return (b = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function m(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
            }

            function g(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e) {
                var t = 0;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (e = function(e, t) {
                            if (e) {
                                if ("string" === typeof e) return O(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? O(e, t) : void 0
                            }
                        }(e))) return function() {
                        return t >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[t++]
                        }
                    };
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                return (t = e[Symbol.iterator]()).next.bind(t)
            }

            function j() {}
            var C = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return t.forEach((function(e) {
                            return e.apply(void 0, n)
                        }))
                    }
                },
                w = function(e) {
                    return Array.isArray(e) ? e : [e, e]
                },
                P = function(e, t) {
                    return void 0 !== e ? e : t
                };

            function L(e, t) {
                var n = {};
                return Object.entries(e).forEach((function(e) {
                    var r = e[0],
                        o = e[1];
                    return (void 0 !== o || r in t) && (n[r] = o)
                })), n
            }

            function k(e) {
                return "function" === typeof e ? e() : e
            }

            function S() {
                var e = {
                        _active: !1,
                        _blocked: !1,
                        _intentional: [!1, !1],
                        _movement: [0, 0],
                        _initial: [0, 0],
                        _lastEventType: void 0,
                        event: void 0,
                        values: [0, 0],
                        velocities: [0, 0],
                        delta: [0, 0],
                        movement: [0, 0],
                        offset: [0, 0],
                        lastOffset: [0, 0],
                        direction: [0, 0],
                        initial: [0, 0],
                        previous: [0, 0],
                        first: !1,
                        last: !1,
                        active: !1,
                        timeStamp: 0,
                        startTime: 0,
                        elapsedTime: 0,
                        cancel: j,
                        canceled: !1,
                        memo: void 0,
                        args: void 0
                    },
                    t = {
                        axis: void 0,
                        xy: [0, 0],
                        vxvy: [0, 0],
                        velocity: 0,
                        distance: 0
                    },
                    n = {
                        da: [0, 0],
                        vdva: [0, 0],
                        origin: void 0,
                        turns: 0
                    };
                return {
                    shared: {
                        hovering: !1,
                        scrolling: !1,
                        wheeling: !1,
                        dragging: !1,
                        moving: !1,
                        pinching: !1,
                        touches: 0,
                        buttons: 0,
                        down: !1,
                        shiftKey: !1,
                        altKey: !1,
                        metaKey: !1,
                        ctrlKey: !1
                    },
                    drag: b(b(b({}, e), t), {}, {
                        _isTap: !0,
                        _delayedEvent: !1,
                        tap: !1,
                        swipe: [0, 0]
                    }),
                    pinch: b(b({}, e), n),
                    wheel: b(b({}, e), t),
                    move: b(b({}, e), t),
                    scroll: b(b({}, e), t)
                }
            }
            var M = function(e) {
                return function(t, n, r) {
                    var o = e ? "addEventListener" : "removeEventListener";
                    n.forEach((function(e) {
                        var n = e[0],
                            a = e[1];
                        return t[o](n, a, r)
                    }))
                }
            };
            var E = M(!0),
                x = M(!1);

            function I(e) {
                if ("touches" in e) {
                    var t = e.touches,
                        n = e.changedTouches;
                    return t.length > 0 ? t : n
                }
                return null
            }

            function N(e) {
                var t = "buttons" in e ? e.buttons : 0,
                    n = I(e),
                    r = n && n.length || 0;
                return b({
                    touches: r,
                    down: r > 0 || t > 0,
                    buttons: t
                }, function(e) {
                    return {
                        shiftKey: e.shiftKey,
                        altKey: e.altKey,
                        metaKey: e.metaKey,
                        ctrlKey: e.ctrlKey
                    }
                }(e))
            }

            function T(e) {
                var t = e.currentTarget,
                    n = t.scrollX,
                    r = t.scrollY,
                    o = t.scrollLeft,
                    a = t.scrollTop;
                return {
                    values: [n || o || 0, r || a || 0]
                }
            }

            function R(e) {
                return {
                    values: [e.deltaX, e.deltaY]
                }
            }

            function D(e) {
                var t = I(e),
                    n = t ? t[0] : e;
                return {
                    values: [n.clientX, n.clientY]
                }
            }

            function A(e) {
                return {
                    values: [260 * e.scale, e.rotation]
                }
            }

            function B(e) {
                var t = e.touches,
                    n = t[1].clientX - t[0].clientX,
                    r = t[1].clientY - t[0].clientY;
                return {
                    values: [Math.hypot(n, r), -180 * Math.atan2(n, r) / Math.PI],
                    origin: [(t[1].clientX + t[0].clientX) / 2, (t[1].clientY + t[0].clientY) / 2]
                }
            }
            var V = function() {
                var e = this;
                this.state = S(), this.timeouts = {}, this.domListeners = [], this.windowListeners = {}, this.bindings = {}, this.clean = function() {
                    e.resetBindings(), Object.values(e.timeouts).forEach(clearTimeout), Object.keys(e.windowListeners).forEach((function(t) {
                        return e.removeWindowListeners(t)
                    }))
                }, this.resetBindings = function() {
                    e.bindings = {};
                    var t = e.getDomTarget();
                    t && (x(t, e.domListeners, e.config.eventOptions), e.domListeners = [])
                }, this.getDomTarget = function() {
                    var t = e.config.domTarget;
                    return t && "current" in t ? t.current : t
                }, this.addWindowListeners = function(t, n) {
                    e.config.window && (e.windowListeners[t] = n, E(e.config.window, n, e.config.eventOptions))
                }, this.removeWindowListeners = function(t) {
                    if (e.config.window) {
                        var n = e.windowListeners[t];
                        n && (x(e.config.window, n, e.config.eventOptions), delete e.windowListeners[t])
                    }
                }, this.addDomTargetListeners = function(t) {
                    Object.entries(e.bindings).forEach((function(t) {
                        var n = t[0],
                            r = t[1];
                        e.domListeners.push([n.substr(2).toLowerCase(), C.apply(void 0, r)])
                    })), E(t, e.domListeners, e.config.eventOptions)
                }, this.addBindings = function(t, n) {
                    (Array.isArray(t) ? t : [t]).forEach((function(t) {
                        e.bindings[t] ? e.bindings[t].push(n) : e.bindings[t] = [n]
                    }))
                }, this.getBindings = function() {
                    var t = {},
                        n = e.config.captureString;
                    return Object.entries(e.bindings).forEach((function(e) {
                        var r = e[0],
                            o = e[1],
                            a = Array.isArray(o) ? o : [o];
                        t[r + n] = C.apply(void 0, a)
                    })), t
                }, this.getBind = function() {
                    if (e.config.domTarget) {
                        var t = e.getDomTarget();
                        return t && e.addDomTargetListeners(t), e.clean
                    }
                    return e.getBindings()
                }
            };

            function H(e, t, n, r) {
                var a = o.a.useMemo((function() {
                    var e = new V;
                    return {
                        nativeRefs: r,
                        current: e,
                        bind: function() {
                            e.resetBindings();
                            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                            for (var i, c = _(t); !(i = c()).done;) {
                                var u = i.value;
                                new u(e, r).addBindings()
                            }
                            if (a.nativeRefs)
                                for (var l in a.nativeRefs) e.addBindings(l, a.nativeRefs[l]);
                            return e.getBind()
                        }
                    }
                }), []);
                return a.current.config = n, a.current.handlers = e, a.nativeRefs = r, o.a.useEffect((function() {
                    return a.current.clean
                }), []), a.bind
            }
            var Z = function() {
                    function e(e, t, n) {
                        var r = this;
                        void 0 === n && (n = []), this.stateKey = e, this.controller = t, this.args = n, this.debounced = !0, this.setTimeout = function(e, t) {
                            var n;
                            void 0 === t && (t = 140);
                            for (var o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++) a[i - 2] = arguments[i];
                            r.controller.timeouts[r.stateKey] = (n = window).setTimeout.apply(n, [e, t].concat(a))
                        }, this.clearTimeout = function() {
                            clearTimeout(r.controller.timeouts[r.stateKey])
                        }, this.addWindowListeners = function(e) {
                            r.controller.addWindowListeners(r.stateKey, e)
                        }, this.removeWindowListeners = function() {
                            r.controller.removeWindowListeners(r.stateKey)
                        }, this.getStartGestureState = function(e, t) {
                            return b(b({}, S()[r.stateKey]), {}, {
                                _active: !0,
                                values: e,
                                initial: e,
                                offset: r.state.offset,
                                lastOffset: r.state.offset,
                                startTime: t.timeStamp
                            })
                        }, this.rubberband = function(e, t) {
                            var n = r.config.bounds;
                            return e.map((function(e, r) {
                                return v(e, n[r][0], n[r][1], t[r])
                            }))
                        }, this.fireGestureHandler = function(e) {
                            if (r.state._blocked) return r.debounced || (r.state._active = !1, r.clean()), null;
                            var t = r.state._intentional,
                                n = t[0],
                                o = t[1];
                            if (!e && !1 === n && !1 === o) return null;
                            var a = r.state,
                                i = a._active,
                                c = a.active;
                            r.state.active = i, r.state.first = i && !c, r.state.last = c && !i, r.controller.state.shared[r.ingKey] = i;
                            var u = b(b(b({}, r.controller.state.shared), r.state), r.mapStateValues(r.state)),
                                l = r.handler(u);
                            return r.state.memo = void 0 !== l ? l : r.state.memo, i || r.clean(), u
                        }
                    }
                    var t, n, r, o = e.prototype;
                    return o.updateSharedState = function(e) {
                        Object.assign(this.controller.state.shared, e)
                    }, o.updateGestureState = function(e) {
                        Object.assign(this.state, e)
                    }, o.getGenericPayload = function(e, t) {
                        var n = e.timeStamp,
                            r = e.type,
                            o = this.state,
                            a = o.values,
                            i = o.startTime;
                        return {
                            _lastEventType: r,
                            event: e,
                            timeStamp: n,
                            elapsedTime: t ? 0 : n - i,
                            args: this.args,
                            previous: a
                        }
                    }, o.checkIntentionality = function(e, t, n) {
                        return {
                            _intentional: e,
                            _blocked: !1
                        }
                    }, o.getMovement = function(e, t) {
                        void 0 === t && (t = this.state);
                        var n = this.config,
                            r = n.initial,
                            o = n.threshold,
                            c = n.rubberband,
                            u = o[0],
                            l = o[1],
                            s = t,
                            f = s._initial,
                            d = s._active,
                            y = s._intentional,
                            v = s.lastOffset,
                            h = s.movement,
                            m = y[0],
                            g = y[1],
                            O = this.getInternalMovement(e, t),
                            _ = O[0],
                            j = O[1];
                        !1 === m && (m = p(_, u)), !1 === g && (g = p(j, l));
                        var C = this.checkIntentionality([m, g], [_, j], t),
                            w = C._intentional,
                            P = C._blocked,
                            L = w[0],
                            S = w[1],
                            M = [_, j];
                        if (!1 !== L && !1 === y[0] && (f[0] = k(r)[0]), !1 !== S && !1 === y[1] && (f[1] = k(r)[1]), P) return b(b({}, C), {}, {
                            _movement: M,
                            delta: [0, 0]
                        });
                        var E = [!1 !== L ? _ - L : k(r)[0], !1 !== S ? j - S : k(r)[1]],
                            x = a(E, v),
                            I = d ? c : [0, 0];
                        return E = this.rubberband(a(E, f), I), b(b({}, C), {}, {
                            _initial: f,
                            _movement: M,
                            movement: E,
                            offset: this.rubberband(x, I),
                            delta: i(E, h)
                        })
                    }, o.clean = function() {
                        this.clearTimeout(), this.removeWindowListeners()
                    }, t = e, (n = [{
                        key: "config",
                        get: function() {
                            return this.controller.config[this.stateKey]
                        }
                    }, {
                        key: "enabled",
                        get: function() {
                            return this.controller.config.enabled && this.config.enabled
                        }
                    }, {
                        key: "state",
                        get: function() {
                            return this.controller.state[this.stateKey]
                        }
                    }, {
                        key: "handler",
                        get: function() {
                            return this.controller.handlers[this.stateKey]
                        }
                    }]) && h(t.prototype, n), r && h(t, r), e
                }(),
                W = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    m(t, e);
                    var n = t.prototype;
                    return n.getInternalMovement = function(e, t) {
                        return i(e, t.initial)
                    }, n.checkIntentionality = function(e, t, n) {
                        var r = e,
                            o = r[0],
                            a = r[1],
                            i = !1 !== o || !1 !== a,
                            c = n.axis,
                            u = !1;
                        if (i) {
                            var l = t.map(Math.abs),
                                s = l[0],
                                f = l[1],
                                d = this.config,
                                p = d.axis,
                                y = d.lockDirection;
                            if (c = c || (s > f ? "x" : s < f ? "y" : void 0), p || y)
                                if (c)
                                    if (p && c !== p) u = !0;
                                    else e["x" === c ? 1 : 0] = !1;
                            else e = [!1, !1]
                        }
                        return {
                            _intentional: e,
                            _blocked: u,
                            axis: c
                        }
                    }, n.getKinematics = function(e, t) {
                        var n = this.state.timeStamp,
                            r = this.getMovement(e, this.state),
                            o = r._blocked,
                            a = r.delta,
                            i = r.movement;
                        if (o) return r;
                        var c = f(i, a, t.timeStamp - n);
                        return b(b({
                            values: e,
                            delta: a
                        }, r), c)
                    }, n.mapStateValues = function(e) {
                        return {
                            xy: e.values,
                            vxvy: e.velocities
                        }
                    }, t
                }(Z),
                G = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, "drag", t, n) || this).ingKey = "dragging", r.wasTouch = !1, r.isEventTypeTouch = function(e) {
                            return !!e && 0 === e.indexOf("touch")
                        }, r.dragShouldStart = function(e) {
                            var t = N(e).touches,
                                n = r.state._lastEventType;
                            if (!r.controller.config.pointer && r.isEventTypeTouch(n) && !r.isEventTypeTouch(e.type) && Math.abs(e.timeStamp - r.state.startTime) < 200) return !1;
                            return r.enabled && t < 2
                        }, r.setPointers = function(e) {
                            var t = e.currentTarget,
                                n = e.pointerId;
                            t && t.setPointerCapture(n), r.updateGestureState({
                                currentTarget: t,
                                pointerId: n
                            })
                        }, r.removePointers = function() {
                            var e = r.state,
                                t = e.currentTarget,
                                n = e.pointerId;
                            t && n && t.releasePointerCapture(n)
                        }, r.setListeners = function(e) {
                            r.removeWindowListeners();
                            var t = e ? [
                                ["touchmove", r.onDragChange],
                                ["touchend", r.onDragEnd],
                                ["touchcancel", r.onDragEnd]
                            ] : [
                                ["mousemove", r.onDragChange],
                                ["mouseup", r.onDragEnd]
                            ];
                            r.addWindowListeners(t)
                        }, r.onDragStart = function(e) {
                            r.dragShouldStart(e) && (r.controller.config.pointer ? r.setPointers(e) : r.setListeners(r.isEventTypeTouch(e.type)), r.config.delay > 0 ? (r.state._delayedEvent = !0, "function" === typeof e.persist && e.persist(), r.setTimeout((function() {
                                return r.startDrag(e)
                            }), r.config.delay)) : r.startDrag(e))
                        }, r.onDragChange = function(e) {
                            if (!r.state.canceled)
                                if (r.state._active) {
                                    var t = N(e);
                                    if (t.down) {
                                        r.updateSharedState(t);
                                        var n = D(e).values,
                                            o = r.getKinematics(n, e),
                                            a = r.state._isTap;
                                        a && l(o._movement) >= 3 && (a = !1), r.updateGestureState(b(b(b({}, r.getGenericPayload(e)), o), {}, {
                                            _isTap: a,
                                            cancel: function() {
                                                return r.onCancel()
                                            }
                                        })), r.fireGestureHandler()
                                    } else r.onDragEnd(e)
                                } else r.state._delayedEvent && (r.clearTimeout(), r.startDrag(e))
                        }, r.onDragEnd = function(e) {
                            r.state._active = !1, r.updateSharedState({
                                down: !1,
                                buttons: 0,
                                touches: 0
                            });
                            var t = r.state,
                                n = t._isTap,
                                o = t.values,
                                a = t.velocities,
                                i = a[0],
                                c = a[1],
                                u = t.movement,
                                l = u[0],
                                s = u[1],
                                f = t._intentional,
                                p = f[0],
                                y = f[1],
                                v = b(b({}, r.getGenericPayload(e)), r.getMovement(o)),
                                h = v.elapsedTime,
                                m = r.config,
                                g = m.swipeVelocity,
                                O = g[0],
                                _ = g[1],
                                j = m.swipeDistance,
                                C = j[0],
                                w = j[1],
                                P = [0, 0];
                            h < 220 && (!1 !== p && Math.abs(i) > O && Math.abs(l) > C && (P[0] = d(i)), !1 !== y && Math.abs(c) > _ && Math.abs(s) > w && (P[1] = d(c))), r.updateGestureState(b(b({
                                event: e
                            }, v), {}, {
                                tap: n,
                                swipe: P
                            })), r.fireGestureHandler(r.config.filterTaps && r.state._isTap)
                        }, r.clean = function() {
                            e.prototype.clean.call(function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(r)), r.state._delayedEvent = !1, r.controller.config.pointer && r.removePointers()
                        }, r.onCancel = function() {
                            r.updateGestureState({
                                canceled: !0,
                                cancel: j
                            }), r.state._active = !1, r.updateSharedState({
                                down: !1,
                                buttons: 0,
                                touches: 0
                            }), requestAnimationFrame((function() {
                                return r.fireGestureHandler()
                            }))
                        }, r
                    }
                    m(t, e);
                    var n = t.prototype;
                    return n.startDrag = function(e) {
                        var t = this,
                            n = D(e).values;
                        this.updateSharedState(N(e));
                        var r = b(b({}, this.getStartGestureState(n, e)), this.getGenericPayload(e, !0));
                        this.updateGestureState(b(b(b({}, r), this.getMovement(n, r)), {}, {
                            cancel: function() {
                                return t.onCancel()
                            }
                        })), this.fireGestureHandler()
                    }, n.addBindings = function() {
                        this.controller.config.pointer ? (this.controller.addBindings("onPointerDown", this.onDragStart), this.controller.addBindings("onPointerMove", this.onDragChange), this.controller.addBindings(["onPointerUp", "onPointerCancel"], this.onDragEnd)) : this.controller.addBindings(["onTouchStart", "onMouseDown"], this.onDragStart)
                    }, t
                }(W),
                U = "undefined" !== typeof window ? window : void 0,
                F = {
                    lockDirection: !1,
                    axis: void 0,
                    bounds: void 0
                };

            function z(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.eventOptions,
                    r = (n = void 0 === n ? {} : n).passive,
                    o = void 0 === r || r,
                    a = n.capture,
                    i = void 0 !== a && a,
                    c = n.pointer,
                    u = void 0 !== c && c,
                    l = t.window,
                    s = void 0 === l ? U : l,
                    f = t.domTarget,
                    d = void 0 === f ? void 0 : f,
                    p = t.enabled,
                    y = void 0 === p || p;
                return b(b({}, g(t, ["eventOptions", "window", "domTarget", "enabled"])), {}, {
                    enabled: y,
                    domTarget: d,
                    window: s,
                    eventOptions: {
                        passive: !d || !!o,
                        capture: !!i
                    },
                    captureString: i ? "Capture" : "",
                    pointer: !!u
                })
            }

            function q(e) {
                var t = e.threshold,
                    n = void 0 === t ? void 0 : t,
                    r = e.rubberband,
                    o = void 0 === r ? 0 : r,
                    a = e.enabled,
                    i = void 0 === a || a,
                    c = e.initial;
                return "boolean" === typeof o && (o = o ? .15 : 0), void 0 === n && (n = 0), {
                    enabled: i,
                    initial: void 0 === c ? [0, 0] : c,
                    threshold: w(n),
                    rubberband: w(o)
                }
            }

            function K(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.axis,
                    r = t.lockDirection,
                    o = t.bounds,
                    a = void 0 === o ? {} : o,
                    i = g(t, ["axis", "lockDirection", "bounds"]),
                    c = [
                        [P(a.left, -1 / 0), P(a.right, 1 / 0)],
                        [P(a.top, -1 / 0), P(a.bottom, 1 / 0)]
                    ];
                return b(b(b(b({}, q(i)), F), L({
                    axis: n,
                    lockDirection: r
                }, e)), {}, {
                    bounds: c
                })
            }

            function Y(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.distanceBounds,
                    r = void 0 === n ? {} : n,
                    o = t.angleBounds,
                    a = void 0 === o ? {} : o,
                    i = g(t, ["distanceBounds", "angleBounds"]),
                    c = [
                        [P(r.min, -1 / 0), P(r.max, 1 / 0)],
                        [P(a.min, -1 / 0), P(a.max, 1 / 0)]
                    ];
                return b(b({}, q(i)), {}, {
                    bounds: c
                })
            }

            function X(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.enabled,
                    r = t.threshold,
                    o = t.bounds,
                    a = t.rubberband,
                    i = t.initial,
                    c = g(t, ["enabled", "threshold", "bounds", "rubberband", "initial"]),
                    u = c.swipeVelocity,
                    l = void 0 === u ? .5 : u,
                    s = c.swipeDistance,
                    f = void 0 === s ? 60 : s,
                    d = c.delay,
                    p = void 0 !== d && d,
                    y = c.filterTaps,
                    v = void 0 !== y && y,
                    h = c.axis,
                    m = c.lockDirection;
                void 0 === r ? r = Math.max(0, v ? 3 : 0, m || h ? 1 : 0) : v = !0;
                var O = K(L({
                    enabled: n,
                    threshold: r,
                    bounds: o,
                    rubberband: a,
                    axis: h,
                    lockDirection: m,
                    initial: i
                }, e));
                return b(b({}, O), {}, {
                    filterTaps: v || O.threshold[0] + O.threshold[1] > 0,
                    swipeVelocity: w(l),
                    swipeDistance: w(f),
                    delay: "number" === typeof p ? p : p ? 180 : 0
                })
            }
            var Q = function(e) {
                function t(t, n) {
                    var r;
                    return (r = e.call(this, "pinch", t, n) || this).ingKey = "pinching", r.pinchShouldStart = function(e) {
                        var t = N(e).touches;
                        return r.enabled && 2 === t
                    }, r.onPinchStart = function(e) {
                        if (r.pinchShouldStart(e)) {
                            var t = B(e),
                                n = t.values,
                                o = t.origin;
                            r.updateSharedState(N(e));
                            var a = b(b({}, r.getStartGestureState(n, e)), r.getGenericPayload(e, !0));
                            r.updateGestureState(b(b(b({}, a), r.getMovement(n, a)), {}, {
                                origin: o,
                                cancel: function() {
                                    return r.onCancel()
                                }
                            })), r.fireGestureHandler()
                        }
                    }, r.onPinchChange = function(e) {
                        var t = r.state,
                            n = t.canceled,
                            o = t.timeStamp,
                            a = t._active;
                        if (!n && a) {
                            var i = N(e);
                            if (2 === i.touches && e.timeStamp !== o) {
                                r.updateSharedState(i);
                                var c = B(e),
                                    u = c.values,
                                    l = c.origin,
                                    s = r.getKinematics(u, e);
                                r.updateGestureState(b(b(b({}, r.getGenericPayload(e)), s), {}, {
                                    origin: l,
                                    cancel: function() {
                                        return r.onCancel()
                                    }
                                })), r.fireGestureHandler()
                            }
                        }
                    }, r.onPinchEnd = function(e) {
                        r.state.active && (r.state._active = !1, r.updateSharedState({
                            down: !1,
                            touches: 0
                        }), r.updateGestureState(b(b({
                            event: e
                        }, r.getGenericPayload(e)), r.getMovement(r.state.values))), r.fireGestureHandler())
                    }, r.onCancel = function() {
                        r.state._active = !1, r.updateGestureState({
                            canceled: !0,
                            cancel: j
                        }), r.updateSharedState({
                            down: !1,
                            touches: 0
                        }), requestAnimationFrame((function() {
                            return r.fireGestureHandler()
                        }))
                    }, r.onGestureStart = function(e) {
                        if (r.enabled) {
                            e.preventDefault();
                            var t = A(e).values;
                            r.updateSharedState(N(e));
                            var n = b(b({}, r.getStartGestureState(t, e)), r.getGenericPayload(e, !0));
                            r.updateGestureState(b(b(b({}, n), r.getMovement(t, n)), {}, {
                                cancel: function() {
                                    return r.onCancel()
                                }
                            })), r.fireGestureHandler()
                        }
                    }, r.onGestureChange = function(e) {
                        var t = r.state,
                            n = t.canceled,
                            o = t._active;
                        if (!n && o) {
                            e.preventDefault();
                            var a = N(e);
                            r.updateSharedState(a);
                            var i = A(e).values,
                                c = r.getKinematics(i, e);
                            r.updateGestureState(b(b(b({}, r.getGenericPayload(e)), c), {}, {
                                cancel: function() {
                                    return r.onCancel()
                                }
                            })), r.fireGestureHandler()
                        }
                    }, r.onGestureEnd = function(e) {
                        e.preventDefault(), r.state.active && (r.state._active = !1, r.updateSharedState({
                            down: !1,
                            touches: 0
                        }), r.updateGestureState(b(b({
                            event: e
                        }, r.getGenericPayload(e)), r.getMovement(r.state.values))), r.fireGestureHandler())
                    }, r.updateTouchData = function(e) {
                        if (r.enabled && 2 === e.touches.length && r.state._active) {
                            var t = B(e).origin;
                            r.state.origin = t
                        }
                    }, r.wheelShouldRun = function(e) {
                        return r.enabled && e.ctrlKey
                    }, r.getWheelValuesFromEvent = function(e) {
                        var t = R(e).values[1],
                            n = r.state.values,
                            o = n[0],
                            a = n[1];
                        return {
                            values: [o - t, void 0 !== a ? a : 0],
                            origin: [e.clientX, e.clientY],
                            delta: [0, t]
                        }
                    }, r.onWheel = function(e) {
                        r.wheelShouldRun(e) && (r.clearTimeout(), r.setTimeout(r.onWheelEnd), r.state._active ? r.onWheelChange(e) : r.onWheelStart(e))
                    }, r.onWheelStart = function(e) {
                        var t = r.getWheelValuesFromEvent(e),
                            n = t.values,
                            o = t.delta,
                            a = t.origin;
                        r.controller.config.eventOptions.passive || e.preventDefault(), r.updateSharedState(N(e));
                        var i = b(b(b({}, r.getStartGestureState(n, e)), r.getGenericPayload(e, !0)), {}, {
                            initial: r.state.values
                        });
                        r.updateGestureState(b(b(b({}, i), r.getMovement(n, i)), {}, {
                            offset: n,
                            delta: o,
                            origin: a
                        })), r.fireGestureHandler()
                    }, r.onWheelChange = function(e) {
                        var t = N(e);
                        r.updateSharedState(t);
                        var n = r.getWheelValuesFromEvent(e),
                            o = n.values,
                            a = n.origin,
                            i = n.delta,
                            c = r.getKinematics(o, e);
                        r.updateGestureState(b(b(b({}, r.getGenericPayload(e)), c), {}, {
                            origin: a,
                            delta: i
                        })), r.fireGestureHandler()
                    }, r.onWheelEnd = function() {
                        r.state._active = !1, r.updateGestureState(r.getMovement(r.state.values)), r.fireGestureHandler()
                    }, r
                }
                return m(t, e), t.prototype.addBindings = function() {
                    this.controller.config.domTarget && function() {
                        try {
                            return "constructor" in GestureEvent
                        } catch (e) {
                            return !1
                        }
                    }() ? (this.controller.addBindings("onGestureStart", this.onGestureStart), this.controller.addBindings("onGestureChange", this.onGestureChange), this.controller.addBindings(["onGestureEnd", "onTouchCancel"], this.onGestureEnd), this.controller.addBindings(["onTouchStart", "onTouchMove"], this.updateTouchData)) : (this.controller.addBindings("onTouchStart", this.onPinchStart), this.controller.addBindings("onTouchMove", this.onPinchChange), this.controller.addBindings(["onTouchEnd", "onTouchCancel"], this.onPinchEnd), this.controller.addBindings("onWheel", this.onWheel))
                }, t
            }(function(e) {
                function t() {
                    return e.apply(this, arguments) || this
                }
                m(t, e);
                var n = t.prototype;
                return n.getInternalMovement = function(e, t) {
                    var n = e[0],
                        r = e[1],
                        o = t.values,
                        a = t.turns,
                        i = t.initial,
                        c = (r = void 0 !== r ? r : o[1]) - o[1],
                        u = Math.abs(c) > 270 ? a + d(c) : a;
                    return [n - i[0], r - 360 * u - i[1]]
                }, n.getKinematics = function(e, t) {
                    var n = this.state,
                        r = n.timeStamp,
                        o = n.initial,
                        a = this.getMovement(e, this.state),
                        i = a.delta,
                        c = a.movement,
                        u = (e[1] - c[1] - o[1]) / 360,
                        l = f(c, i, t.timeStamp - r);
                    return b(b({
                        values: e,
                        delta: i,
                        turns: u
                    }, a), l)
                }, n.mapStateValues = function(e) {
                    return {
                        da: e.values,
                        vdva: e.velocities
                    }
                }, t
            }(Z));
            var J = function(e) {
                function t(t, n) {
                    var r;
                    return (r = e.call(this, "wheel", t, n) || this).ingKey = "wheeling", r.debounced = !0, r.wheelShouldRun = function(e) {
                        return (!e.ctrlKey || !("pinch" in r.controller.handlers)) && r.enabled
                    }, r.getValuesFromEvent = function(e) {
                        var t = r.state.values;
                        return {
                            values: a(R(e).values, t)
                        }
                    }, r.onWheel = function(e) {
                        r.wheelShouldRun(e) && (r.clearTimeout(), r.setTimeout(r.onWheelEnd), r.state._active ? r.onWheelChange(e) : r.onWheelStart(e))
                    }, r.onWheelStart = function(e) {
                        var t = r.getValuesFromEvent(e).values;
                        r.updateSharedState(N(e));
                        var n = b(b(b({}, r.getStartGestureState(t, e)), r.getGenericPayload(e, !0)), {}, {
                                initial: r.state.values
                            }),
                            o = r.getMovement(t, n),
                            a = o.delta;
                        r.updateGestureState(b(b(b({}, n), o), {}, {
                            distance: l(a),
                            direction: s(a)
                        })), r.fireGestureHandler()
                    }, r.onWheelChange = function(e) {
                        var t = N(e);
                        r.updateSharedState(t);
                        var n = r.getValuesFromEvent(e).values,
                            o = r.getKinematics(n, e);
                        r.updateGestureState(b(b({}, r.getGenericPayload(e)), o)), r.fireGestureHandler()
                    }, r.onWheelEnd = function() {
                        r.state._active = !1, r.updateGestureState(b(b({}, r.getMovement(r.state.values)), {}, {
                            velocities: [0, 0],
                            velocity: 0
                        })), r.fireGestureHandler()
                    }, r
                }
                return m(t, e), t.prototype.addBindings = function() {
                    this.controller.addBindings("onWheel", this.onWheel)
                }, t
            }(W);
            var $ = function(e) {
                function t(t, n) {
                    var r;
                    return (r = e.call(this, "move", t, n) || this).ingKey = "moving", r.debounced = !0, r.moveShouldRun = function() {
                        return r.enabled
                    }, r.onMove = function(e) {
                        r.moveShouldRun() && (r.clearTimeout(), r.setTimeout(r.onMoveEnd), r.state._active ? r.onMoveChange(e) : r.onMoveStart(e))
                    }, r.onMoveStart = function(e) {
                        var t = D(e).values;
                        r.updateSharedState(N(e));
                        var n = b(b({}, r.getStartGestureState(t, e)), r.getGenericPayload(e, !0));
                        r.updateGestureState(b(b({}, n), r.getMovement(t, n))), r.fireGestureHandler()
                    }, r.onMoveChange = function(e) {
                        var t = N(e);
                        r.updateSharedState(t);
                        var n = D(e).values,
                            o = r.getKinematics(n, e);
                        r.updateGestureState(b(b({}, r.getGenericPayload(e)), o)), r.fireGestureHandler()
                    }, r.onMoveEnd = function() {
                        r.state._active = !1, r.updateGestureState(b(b({}, r.getMovement(r.state.values)), {}, {
                            velocities: [0, 0],
                            velocity: 0
                        })), r.fireGestureHandler()
                    }, r.onPointerEnter = function(e) {
                        if (r.controller.state.shared.hovering = !0, r.controller.config.enabled) {
                            if (r.controller.config.hover.enabled) {
                                var t = D(e).values,
                                    n = b(b(b(b({}, r.controller.state.shared), r.state), r.getGenericPayload(e, !0)), {}, {
                                        values: t,
                                        active: !0,
                                        hovering: !0
                                    });
                                r.controller.handlers.hover(b(b({}, n), r.mapStateValues(n)))
                            }
                            "move" in r.controller.handlers && r.onMoveStart(e)
                        }
                    }, r.onPointerLeave = function(e) {
                        if (r.controller.state.shared.hovering = !1, "move" in r.controller.handlers && r.onMoveEnd(), r.controller.config.hover.enabled) {
                            var t = D(e).values,
                                n = b(b(b(b({}, r.controller.state.shared), r.state), r.getGenericPayload(e)), {}, {
                                    values: t,
                                    active: !1
                                });
                            r.controller.handlers.hover(b(b({}, n), r.mapStateValues(n)))
                        }
                    }, r
                }
                return m(t, e), t.prototype.addBindings = function() {
                    this.controller.config.pointer ? ("move" in this.controller.handlers && this.controller.addBindings("onPointerMove", this.onMove), "hover" in this.controller.handlers && (this.controller.addBindings("onPointerEnter", this.onPointerEnter), this.controller.addBindings("onPointerLeave", this.onPointerLeave))) : ("move" in this.controller.handlers && this.controller.addBindings("onMouseMove", this.onMove), "hover" in this.controller.handlers && (this.controller.addBindings("onMouseEnter", this.onPointerEnter), this.controller.addBindings("onMouseLeave", this.onPointerLeave)))
                }, t
            }(W);
            var ee = function(e) {
                function t(t, n) {
                    var r;
                    return (r = e.call(this, "scroll", t, n) || this).ingKey = "scrolling", r.debounced = !0, r.scrollShouldRun = function() {
                        return r.enabled
                    }, r.onScroll = function(e) {
                        r.scrollShouldRun() && (r.clearTimeout(), r.setTimeout(r.onScrollEnd), r.state._active ? r.onScrollChange(e) : r.onScrollStart(e))
                    }, r.onScrollStart = function(e) {
                        var t = T(e).values;
                        r.updateSharedState(N(e));
                        var n = b(b(b({}, r.getStartGestureState(t, e)), r.getGenericPayload(e, !0)), {}, {
                                initial: r.state.values
                            }),
                            o = r.getMovement(t, n),
                            a = o.delta;
                        r.updateGestureState(b(b(b({}, n), o), {}, {
                            distance: l(a),
                            direction: s(a)
                        })), r.fireGestureHandler()
                    }, r.onScrollChange = function(e) {
                        var t = N(e);
                        r.updateSharedState(t);
                        var n = T(e).values,
                            o = r.getKinematics(n, e);
                        r.updateGestureState(b(b({}, r.getGenericPayload(e)), o)), r.fireGestureHandler()
                    }, r.onScrollEnd = function() {
                        r.state._active = !1, r.updateGestureState(b(b({}, r.getMovement(r.state.values)), {}, {
                            velocities: [0, 0],
                            velocity: 0
                        })), r.fireGestureHandler()
                    }, r
                }
                return m(t, e), t.prototype.addBindings = function() {
                    this.controller.addBindings("onScroll", this.onScroll)
                }, t
            }(W);

            function te(e, t) {
                void 0 === t && (t = {});
                var n = o.a.useState((function() {
                        return new Set(Object.keys(e).map((function(e) {
                            return e.replace(/End|Start/, "")
                        })))
                    }))[0],
                    r = t,
                    a = r.drag,
                    i = r.wheel,
                    c = r.move,
                    u = r.scroll,
                    l = r.pinch,
                    s = r.hover,
                    f = z(g(r, ["drag", "wheel", "move", "scroll", "pinch", "hover"])),
                    d = [],
                    p = {},
                    y = b({}, e);
                return n.has("onDrag") && (d.push(G), p.drag = ne(e, "onDrag", y), f.drag = X(a)), n.has("onWheel") && (d.push(J), p.wheel = ne(e, "onWheel", y), f.wheel = K(i)), n.has("onScroll") && (d.push(ee), p.scroll = ne(e, "onScroll", y), f.scroll = K(u)), n.has("onMove") && (d.push($), p.move = ne(e, "onMove", y), f.move = K(c)), n.has("onPinch") && (d.push(Q), p.pinch = ne(e, "onPinch", y), f.pinch = Y(l)), n.has("onHover") && (n.has("onMove") || d.push($), p.hover = e.onHover, f.hover = b({
                    enabled: !0
                }, s), delete y.onHover), H(p, d, f, y)
            }

            function ne(e, t, n) {
                var r = t + "Start",
                    o = t + "End";
                delete n[t], delete n[r], delete n[o];
                return function(n) {
                    var a = void 0;
                    return n.first && r in e && e[r](n), t in e && (a = e[t](n)), n.last && o in e && e[o](n), a
                }
            }
        },
        zAPv: function(e, t, n) {
            e.exports = {
                word: "TypeWriter_word__3x9h7",
                letter: "TypeWriter_letter__n_4Uz",
                isActive: "TypeWriter_isActive__2O0qU"
            }
        },
        zLfV: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n("vO2Z"),
                a = n("bbAf");
            t.a = function() {
                var e = Object(r.useState)(!1),
                    t = e[0],
                    n = e[1];
                return Object(a.a)((function() {
                    var e = window.innerWidth <= o.a.small;
                    n(e)
                }), []), t
            }
        },
        zuFh: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n("q1tI"),
                o = n("tbWI"),
                a = n("mzdp");

            function i(e) {
                return (i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function c() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function u(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== i(e) && "function" !== typeof e) return {
                    default: e
                };
                var t = c();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                    }
                return n.default = e, t && t.set(e, n), n
            }
            var l = [{
                key: "youtube",
                name: "YouTube",
                canPlay: a.canPlay.youtube,
                lazyPlayer: (0, r.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return u(n("/6c9"))
                    }))
                }))
            }, {
                key: "soundcloud",
                name: "SoundCloud",
                canPlay: a.canPlay.soundcloud,
                lazyPlayer: (0, r.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return u(n("xkkJ"))
                    }))
                }))
            }, {
                key: "vimeo",
                name: "Vimeo",
                canPlay: a.canPlay.vimeo,
                lazyPlayer: (0, r.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return u(n("LLoX"))
                    }))
                }))
            }, {
                key: "facebook",
                name: "Facebook",
                canPlay: a.canPlay.facebook,
                lazyPlayer: (0, r.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return u(n("f77o"))
                    }))
                }))
            }, {
                key: "streamable",
                name: "Streamable",
                canPlay: a.canPlay.streamable,
                lazyPlayer: (0, r.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return u(n("GdC5"))
                    }))
                }))
            }, {
                key: "wistia",
                name: "Wistia",
                canPlay: a.canPlay.wistia,
                lazyPlayer: (0, r.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return u(n("W4/P"))
                    }))
                }))
            }, {
                key: "twitch",
                name: "Twitch",
                canPlay: a.canPlay.twitch,
                lazyPlayer: (0, r.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return u(n("bA2t"))
                    }))
                }))
            }, {
                key: "dailymotion",
                name: "DailyMotion",
                canPlay: a.canPlay.dailymotion,
                lazyPlayer: (0, r.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return u(n("Rom6"))
                    }))
                }))
            }, {
                key: "mixcloud",
                name: "Mixcloud",
                canPlay: a.canPlay.mixcloud,
                lazyPlayer: (0, r.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return u(n("5Cgt"))
                    }))
                }))
            }, {
                key: "vidyard",
                name: "Vidyard",
                canPlay: a.canPlay.vidyard,
                lazyPlayer: (0, r.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return u(n("fPw2"))
                    }))
                }))
            }, {
                key: "file",
                name: "FilePlayer",
                canPlay: a.canPlay.file,
                canEnablePIP: function(e) {
                    return a.canPlay.file(e) && (document.pictureInPictureEnabled || (0, o.supportsWebKitPresentationMode)()) && !a.AUDIO_EXTENSIONS.test(e)
                },
                lazyPlayer: (0, r.lazy)((function() {
                    return Promise.resolve().then((function() {
                        return u(n("bq/u"))
                    }))
                }))
            }];
            t.default = l
        }
    }
]);