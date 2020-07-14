! function(e) {
  function t(t) {
    for (var n, i, s = t[0], c = t[1], l = t[2], d = 0, m = []; d < s.length; d++) i = s[d], Object.prototype.hasOwnProperty.call(a, i) && a[i] && m.push(a[i][0]), a[i] = 0;
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (u && u(t); m.length;) m.shift()();
    return o.push.apply(o, l || []), r()
  }

  function r() {
    for (var e, t = 0; t < o.length; t++) {
      for (var r = o[t], n = !0, s = 1; s < r.length; s++) {
        var c = r[s];
        0 !== a[c] && (n = !1)
      }
      n && (o.splice(t--, 1), e = i(i.s = r[0]))
    }
    return e
  }
  var n = {},
    a = {
      8: 0
    },
    o = [];

  function i(t) {
    if (n[t]) return n[t].exports;
    var r = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
  }
  i.m = e, i.c = n, i.d = function(e, t, r) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    })
  }, i.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, i.t = function(e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (i.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var n in e) i.d(r, n, function(t) {
        return e[t]
      }.bind(null, n));
    return r
  }, i.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return i.d(t, "a", t), t
  }, i.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, i.p = "";
  var s = window.webpackJsonp = window.webpackJsonp || [],
    c = s.push.bind(s);
  s.push = t, s = s.slice();
  for (var l = 0; l < s.length; l++) t(s[l]);
  var u = c;
  o.push([1026, 1, 0]), r()
}({
  1e3: function(e, t, r) {
    (e.exports = r(122)(void 0)).push([e.i, ".select-input{position:relative}.select-input input{padding-right:24px}.select-input .arrow-icon{position:absolute;top:50%;right:8px;-webkit-transform:scale(.75) rotate(0deg);transform:scale(.75) rotate(0deg);color:rgba(0,0,0,.43);-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease;pointer-events:none;cursor:pointer}.select-input.opened .arrow-icon{-webkit-transform:scale(.75) rotate(180deg);transform:scale(.75) rotate(180deg)}.drop-down .option-list{position:absolute;z-index:1000;border-radius:4px;font-size:12px;background:#fff;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.2);box-shadow:0 1px 6px rgba(0,0,0,.2)}.drop-down .option-list .plain-text-option{padding:7px 8px;cursor:pointer}.drop-down .option-list .plain-text-option.selected{background-color:#f7f7f7;font-weight:600}.drop-down .option-list .plain-text-option:hover{background-color:#ecf6fd}", ""])
  },
  1002: function(e, t, r) {
    var n = r(1003);
    "string" == typeof n && (n = [
      [e.i, n, ""]
    ]);
    var a = {
      transform: void 0
    };
    r(123)(n, a);
    n.locals && (e.exports = n.locals)
  },
  1003: function(e, t, r) {
    (e.exports = r(122)(void 0)).push([e.i, "body{margin:0;padding:0;font-size:16px}*{-webkit-box-sizing:border-box;box-sizing:border-box}.app{position:absolute;top:0;bottom:0;left:0;right:0;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.app,.app .app-inner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.app .app-inner{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}.app.with-alert .backup-alert{display:block}.app .backup-alert{display:none;padding:5px 0;text-align:center;font-size:14px;background:#fdfdc2}.app .backup-alert .backup-actions{margin-left:20px}.app .backup-alert .backup-actions button{margin-right:10px}.app .content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:3;-ms-flex:3;flex:3;min-width:520px;background:#fff;overflow-y:auto}.app .hidden-during-replay{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;padding-top:15px;font-size:14px;color:#999}.app .hidden-during-replay,.app .list-not-loaded{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.app .list-not-loaded{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.app .list-not-loaded button{margin-top:20px}", ""])
  },
  101: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(145),
      a = r(13);
    ! function(e) {
      e.Normal = "NORMAL", e.Success = "SUCCESS", e.Error = "ERROR", e.ErrorInSub = "ERROR_IN_SUB"
    }(t.MacroResultStatus || (t.MacroResultStatus = {}));
    class o extends n.KeyValueData {
      getAll() {
        return super.get("")
      }
      getMainKeyAndSubKeys(e) {
        const [t, r] = super.getMainKeyAndSubKeys(e);
        return [o.STORAGE_KEY, [t].concat(r).filter(e => e && e.length)]
      }
    }
    t.MacroExtraKeyValueData = o, o.STORAGE_KEY = "macro_extra", t.getMacroExtraKeyValueData = a.singletonGetter(() => new o)
  },
  102: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(372)),
      o = r(106),
      i = r(4),
      s = r(13);

    function c(e) {
      return e.response && "string" == typeof e.response.body ? new Error(e.response.body) : e
    }

    function l(e) {
      throw console.error(e), c(e)
    }

    function u(e) {
      return d(e.body), e.body
    }

    function d(e) {
      switch (e.OCRExitCode) {
        case o.OCRExitCode.AllParsed:
          return;
        case o.OCRExitCode.PartiallyParsed:
          throw new Error(["Parsed Partially (Only few pages out of all the pages parsed successfully)", e.ErrorMessage || "", e.ErrorDetails || ""].filter(e => e.length > 0).join("; "));
        case o.OCRExitCode.Failed:
          throw new Error(["OCR engine fails to parse an image", e.ErrorMessage || "", e.ErrorDetails || ""].filter(e => e.length > 0).join("; "));
        case o.OCRExitCode.Fatal:
          throw new Error(["Fatal error occurs during parsing", e.ErrorMessage || "", e.ErrorDetails || ""].filter(e => e.length > 0).join("; "))
      }
    }

    function m(e) {
      let t = 0,
        r = 0,
        n = 0;
      return {
        next: () => {
          const a = e[t],
            o = a ? a.TextOverlay.Lines : [],
            i = a ? a.TextOverlay.Lines[r] : null,
            s = i ? i.Words : [],
            c = i ? i.Words[n] : null;
          if (!c) return {
            done: !0,
            value: null
          };
          const l = {
            word: c,
            position: {
              pageIndex: t,
              lineIndex: r,
              wordIndex: n
            }
          };
          return [t, r, n] = (() => {
            let a = n + 1,
              i = r,
              c = t;
            return a >= s.length && (a = 0, i += 1), i >= o.length && (i = 0, c += 1), c >= e.length ? [-1, -1, -1] : [c, i, a]
          })(), {
            value: l,
            done: !1
          }
        }
      }
    }

    function p(e, t) {
      const r = m(e);
      for (;;) {
        const {
          done: e,
          value: n
        } = r.next();
        if (e) break;
        if (!t(n)) break
      }
    }
    var h;

    function f(e, t, r) {
      if (!e || !t) return !1;
      const n = e.trim().toLowerCase(),
        a = t.trim().toLowerCase();
      switch (r) {
        case h.Full:
          return n === a;
        case h.Prefix:
          return 0 === a.indexOf(n);
        case h.Postfix: {
          const e = a.indexOf(n);
          return -1 !== e && e === a.length - n.length
        }
        case h.AnyPart:
          return -1 !== a.indexOf(n)
      }
    }

    function g(e, t) {
      return e.pageIndex === t.pageIndex && e.lineIndex === t.lineIndex && e.wordIndex === t.wordIndex
    }

    function v(e) {
      const t = e.words.reduce((e, t) => {
        const r = `${t.position.pageIndex}_${t.position.lineIndex}`;
        return e[r] ? e[r] = Object.assign(Object.assign({}, e[r]), {
          width: Math.max(e[r].width, t.word.Left + t.word.Width - e[r].x),
          height: Math.max(e[r].height, t.word.Top + t.word.Height - e[r].y)
        }) : e[r] = {
          x: t.word.Left,
          y: t.word.Top,
          width: t.word.Width,
          height: t.word.Height
        }, e
      }, {});
      return Object.keys(t).reduce((e, r) => e.width < t[r].width ? t[r] : e, {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      })
    }

    function y(e, t) {
      return Object.assign(Object.assign({}, e), {
        Width: t * e.Width,
        Height: t * e.Height,
        Left: t * e.Left,
        Top: t * e.Top
      })
    }
    t.runOCR = function(e) {
        const t = (e.scale + "").toLowerCase(),
          r = -1 !== ["true", "false"].indexOf(t) ? t : "true",
          n = -1 !== [1, 2].indexOf(e.engine || 0) ? e.engine : 1,
          o = s.retry(() => e.getApiUrlAndApiKey().then(t => {
            const {
              url: o,
              key: s
            } = t, d = new FormData;
            d.append("apikey", s), d.append("language", e.language), d.append("scale", r), d.append("OCREngine", "" + n), d.append("isOverlayRequired", "" + e.isOverlayRequired), "string" == typeof e.image ? d.append("file", i.dataURItoBlob(e.image), "unknown.png") : d.append("file", e.image.blob, e.image.name);
            const m = (new Date).getTime();
            return e.willSendRequest && e.willSendRequest({
              server: t,
              startTime: m
            }), i.withTimeout(e.singleApiTimeout, () => a.default.post(o).send(d)).then(r => e.didGetResponse ? e.didGetResponse({
              server: t,
              startTime: m,
              endTime: (new Date).getTime(),
              response: r.body,
              error: null
            }).then(() => r, () => r) : r, r => {
              const n = c(r);
              if (e.didGetResponse) return e.didGetResponse({
                server: t,
                startTime: m,
                endTime: (new Date).getTime(),
                response: null,
                error: n
              }).then(() => {
                throw n
              }, () => {
                throw n
              });
              throw r
            }).then(u, l).catch(t => {
              throw /timeout/i.test(t.message) ? new Error(`OCR request timeout ${(e.singleApiTimeout/1e3).toFixed(1)}s`) : t
            })
          }), {
            timeout: 10 * e.singleApiTimeout,
            retryInterval: 0,
            shouldRetry: e.shouldRetry || (() => !1)
          });
        return i.withTimeout(e.totalTimeout, o).catch(e => {
          throw /timeout/i.test(e.message) ? new Error("OCR timeout") : e
        })
      }, t.guardOCRResponse = d, t.wordIteratorFromParseResults = m, t.iterateThroughParseResults = p, t.searchTextInOCRResponse = function(e) {
        const {
          text: t,
          index: r,
          parsedResults: n,
          exhaust: a
        } = e, o = /^\[.*\]$/.test(t), i = (o ? t.slice(1, -1) : t).split(/\s+/g).map(e => e.trim()).filter(e => e.length > 0);
        if (r < 0 || Math.round(r) !== r) throw new Error("index must be positive integer");
        let s = [],
          c = 0,
          l = 0;
        p(n, e => {
          const t = o ? h.Full : 1 === i.length ? h.AnyPart : 0 === c ? h.Postfix : c === i.length - 1 ? h.Prefix : h.Full;
          if (!f(i[c], e.word.WordText, t)) return s[l] = [], c = 0, !0;
          if (s[l] = s[l] || [], s[l].push(e), c += 1, c >= i.length) {
            return l += 1, c = 0, a || l <= r
          }
          return !0
        });
        const u = s.filter(e => e.length === i.length).map(e => ({
          words: e,
          similarity: 1
        }));
        return {
          hit: u[r] || null,
          all: u,
          exhaust: a
        }
      }, t.isWordEqual = function(e, t) {
        return !(!e || !t) && e.trim().toLowerCase() === t.trim().toLowerCase()
      },
      function(e) {
        e[e.Full = 0] = "Full", e[e.Prefix = 1] = "Prefix", e[e.Postfix = 2] = "Postfix", e[e.AnyPart = 3] = "AnyPart"
      }(h = t.WordMatchType || (t.WordMatchType = {})), t.hasWordMatch = f, t.isWordPositionEqual = g, t.allWordsWithPosition = function(e, t) {
        const r = [];
        return p(e, e => ((e => t.reduce((t, r) => !!t || g(r, e.position), !1))(e) || r.push(e), !0)), r
      }, t.ocrMatchRect = v, t.ocrMatchCenter = function(e) {
        const t = v(e);
        return {
          x: t.x + t.width / 2,
          y: t.y + t.height / 2
        }
      }, t.scaleOcrParseResultWord = y, t.scaleOcrResponseCoordinates = function(e, t) {
        return s.safeUpdateIn(["ParsedResults", "[]", "TextOverlay", "Lines", "[]", "Words", "[]"], e => y(e, t), e)
      }, t.scaleOcrTextSearchMatch = function(e, t) {
        return s.safeUpdateIn(["words", "[]", "word"], e => y(e, t), e)
      }
  },
  1026: function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(15),
      a = r.n(n),
      o = r(583),
      i = r.n(o),
      s = r(0),
      c = r.n(s),
      l = r(17),
      u = r.n(l),
      d = r(350),
      m = r(374),
      p = r.n(m),
      h = r(614),
      f = r(524),
      g = r(589),
      v = r.n(g),
      y = r(125),
      b = r.n(y),
      w = r(26),
      E = r.n(w),
      x = r(69),
      S = r.n(x),
      C = r(20),
      T = r.n(C),
      _ = r(56),
      O = r.n(_),
      k = r(82),
      P = r(74),
      I = r(16),
      M = r(21),
      A = r(49),
      R = r.n(A),
      D = r(150),
      N = r.n(D),
      j = r(25),
      L = r.n(j),
      F = r(35),
      V = r.n(F),
      U = r(33),
      B = r.n(U),
      X = r(37),
      K = r.n(X),
      $ = r(34),
      Y = r.n($),
      G = r(41),
      W = r.n(G),
      H = r(30),
      z = r.n(H),
      q = r(601),
      J = r.n(q),
      Z = r(390),
      Q = r.n(Z),
      ee = (r(961), r(29)),
      te = r(24),
      re = r(126),
      ne = r(40),
      ae = r(18),
      oe = r(4),
      ie = r(31),
      se = r(86),
      ce = r(71),
      le = (r(91), r(12)),
      ue = r(10),
      de = r.n(ue),
      me = r(318),
      pe = r(174),
      he = r(13),
      fe = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
          var r = [],
            n = !0,
            a = !1,
            o = void 0;
          try {
            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
          } catch (e) {
            a = !0, o = e
          } finally {
            try {
              !n && s.return && s.return()
            } finally {
              if (a) throw o
            }
          }
          return r
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      },
      ge = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      };

    function ve(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
      return Array.from(e)
    }
    var ye = [].concat(["KEY_LEFT", "KEY_UP", "KEY_RIGHT", "KEY_DOWN", "KEY_PGUP", "KEY_PAGE_UP", "KEY_PGDN", "KEY_PAGE_DOWN", "KEY_BKSP", "KEY_BACKSPACE", "KEY_DEL", "KEY_DELETE", "KEY_ENTER", "KEY_TAB", "KEY_ESC"], ["KEY_CTRL", "KEY_ALT", "KEY_SHIFT", "KEY_WIN", "KEY_CMD", "KEY_META"], ["KEY_F1", "KEY_F2", "KEY_F3", "KEY_F4", "KEY_F5", "KEY_F6", "KEY_F7", "KEY_F8", "KEY_F9", "KEY_F10", "KEY_F11", "KEY_F12", "KEY_F13", "KEY_F14", "KEY_F15"], ["KEY_0", "KEY_1", "KEY_2", "KEY_3", "KEY_4", "KEY_5", "KEY_6", "KEY_7", "KEY_8", "KEY_9"], ["KEY_Num0", "KEY_Num1", "KEY_Num2", "KEY_Num3", "KEY_Num4", "KEY_Num5", "KEY_Num6", "KEY_Num7", "KEY_Num8", "KEY_Num9"], ["KEY_A", "KEY_B", "KEY_C", "KEY_D", "KEY_E", "KEY_F", "KEY_G", "KEY_H", "KEY_I", "KEY_J", "KEY_K", "KEY_L", "KEY_M", "KEY_N", "KEY_O", "KEY_P", "KEY_Q", "KEY_R", "KEY_S", "KEY_T", "KEY_U", "KEY_V", "KEY_W", "KEY_X", "KEY_Y", "KEY_Z"]).map((function(e) {
        return e.toUpperCase()
      })),
      be = function(e) {
        var t = e && e.toUpperCase();
        if (-1 !== ye.indexOf(t)) return !0;
        if (/^KEY_\w+(\+KEY_\w+)*$/.test(t)) {
          var r = t.split("+");
          return oe.and.apply(void 0, ve(r.map((function(e) {
            return -1 !== ye.indexOf(e)
          }))))
        }
        return !1
      },
      we = {},
      Ee = function(e) {
        "!" === e.charAt(0) && (e = e.substr(1));
        try {
          Object(oe.validateStandardName)(e)
        } catch (t) {
          throw new Error("Invalid variable name '" + e + "'. A variable name " + t.message)
        }
        return !0
      },
      xe = /\$\{((!?\w+)((\.\w+|\[(\d+|\$\{!?\w+\})\])*))\}/gi,
      Se = /storedVars\[('|")((!?\w+)((\.\w+|\[(\d+|\$\{!?\w+\})\])*))\1\]/gi;

    function Ce(e) {
      var t = /\.(\w+)|\[(\d+|\$\{!?\w+\})\]/gi,
        r = e && e.trim();
      if (!r || 0 === r.length) return [];
      for (var n = [], a = -1, o = void 0; o = t.exec(e);) {
        if (!o || o.index !== a + 1) throw new Error("Invalid variable expression");
        n.push(o[1] || o[2]), a += o[0].length
      }
      if (a !== r.length - 1) throw new Error("Invalid variable expression ending");
      return n
    }

    function Te(e) {
      return e.map((function(e) {
        return /^\d+$/.test(e) ? "[" + e + "]" : "." + e
      })).join("")
    }
    var _e = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "main";
        return we[e]
      },
      Oe = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
          var r = [],
            n = !0,
            a = !1,
            o = void 0;
          try {
            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
          } catch (e) {
            a = !0, o = e
          } finally {
            try {
              !n && s.return && s.return()
            } finally {
              if (a) throw o
            }
          }
          return r
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      },
      ke = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      Pe = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }();

    function Ie(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var Me = function(e) {
        return e.toUpperCase()
      },
      Ae = function() {
        function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          Ie(this, e), this.state = Object(he.clone)(e.DefaultState), t.pre && (this.__customPre = t.pre), t.run && (this.__customRun = t.run), t.post && (this.__customPost = t.post)
        }
        return Pe(e, [{
          key: "reset",
          value: function() {
            this.__setState({
              labels: {},
              tags: [],
              commands: []
            })
          }
        }, {
          key: "preprocess",
          value: function(e) {
            var t = this,
              r = {
                commands: e,
                tags: []
              },
              n = [],
              a = function(e, t) {
                var r = new Error(t);
                return r.errorIndex = e, r
              };
            if (e.forEach((function(e, o) {
                if (!t.__customPre || !t.__customPre(e, o)) {
                  var i, s, c, l = n[n.length - 1];
                  switch (e.cmd) {
                    case "if_v2":
                    case "if":
                    case "times":
                    case "forEach":
                    case "while_v2":
                    case "while":
                    case "do":
                      n.push({
                        type: e.cmd,
                        start: {
                          index: o,
                          command: e
                        }
                      });
                      break;
                    case "repeatIf":
                      if (!l || !/^do$/.test(l.type)) throw a(o, "No matching do for this repeatIf (at command #" + (o + 1) + ")");
                      r.tags.push(ke({}, l, {
                        end: {
                          index: o,
                          command: e
                        }
                      })), n.pop();
                      break;
                    case "elseif":
                    case "else":
                      if (!l || !/^if/.test(l.type)) throw a(o, "No matching if for this " + e.cmd + " (at command #" + (o + 1) + ")");
                      l.forks = l.forks || [];
                      var u = l.forks.findIndex((function(e) {
                        return e.command && "else" === e.command.cmd
                      }));
                      if (-1 !== u) {
                        var d = l.forks[u];
                        throw new Error("'" + e.cmd + "' (at command #" + (o + 1) + ") could not be used after '" + d.command.cmd + "' (at command #" + (d.index + 1) + ")")
                      }
                      l.forks.push({
                        index: o,
                        command: e
                      });
                      break;
                    case "end":
                    case "endWhile":
                    case "endif":
                      var m = function() {
                          switch (e.cmd) {
                            case "end":
                              return [/^(if|while|times|forEach)/, "if/while/times/forEach"];
                            case "endWhile":
                              return [/^while/, "while"];
                            case "endif":
                              return [/^if/, "if"]
                          }
                        }(),
                        p = Oe(m, 2),
                        h = p[0],
                        f = p[1];
                      if (!l || !h.test(l.type)) throw a(o, "No matching " + f + " for this end (at command #" + (o + 1) + ")");
                      r.tags.push(ke({}, l, {
                        end: {
                          index: o,
                          command: e
                        }
                      })), n.pop();
                      break;
                    case "label":
                      if (!e.target || !e.target.length) throw new Error("invalid target for label command");
                      t.__setState({
                        labels: ke({}, t.state.labels, (i = {}, s = Me(e.target), c = {
                          index: o
                        }, s in i ? Object.defineProperty(i, s, {
                          value: c,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                        }) : i[s] = c, i))
                      })
                  }
                }
              })), n.length > 0) {
              var o = n[n.length - 1];
              throw a(o.start.index, "Unclosed '" + o.type + "' (at command #" + (o.start.index + 1) + ")")
            }
            this.__setState(r)
          }
        }, {
          key: "run",
          value: function(e, t) {
            var r = this,
              n = e.cmd,
              a = e.target;
            e.value;
            return function() {
              switch (n) {
                case "onError":
                  var o = e.value && e.value.trim(),
                    i = e.target && e.target.trim();
                  if (!(i && (/^#restart$/i.test(i) || /^#goto$/i.test(i)))) throw new Error("invalid target for onError command");
                  if (/^#goto$/i.test(i)) {
                    var s = Me(o);
                    if (!r.state.labels[s]) throw new Error("label " + o + " doesn't exist")
                  }
                  return Promise.resolve({
                    isFlowLogic: !0
                  });
                case "gotoLabel":
                  if (!a || !a.length) throw new Error("invalid target for gotoLabel command");
                  var c = Me(a);
                  if (!r.state.labels[c]) throw new Error("label " + a + " doesn't exist");
                  return Promise.resolve({
                    isFlowLogic: !0,
                    nextIndex: r.state.labels[c].index
                  });
                case "elseif":
                  var l = r.state.tags.find((function(e) {
                    return /^if/.test(e.type) && e.forks && e.forks.find((function(e) {
                      return e.index === t && e.command.cmd === n
                    }))
                  }));
                  if (!l) throw new Error("tag not found for this else (at command #" + (t + 1) + ")");
                  return l.alreadyRun ? Promise.resolve({
                    isFlowLogic: !0,
                    nextIndex: l.end.index + 1
                  }) : Promise.resolve({
                    isFlowLogic: !1
                  });
                case "else":
                  var u = r.state.tags.find((function(e) {
                    return /^if/.test(e.type) && e.forks && e.forks.find((function(e) {
                      return e.index === t && e.command.cmd === n
                    }))
                  }));
                  if (!u) throw new Error("tag not found for this else (at command #" + (t + 1) + ")");
                  return Promise.resolve({
                    isFlowLogic: !0,
                    nextIndex: u.end.index + 1
                  });
                case "endif":
                  return Promise.resolve({
                    isFlowLogic: !0
                  });
                case "endWhile":
                  var d = r.state.tags.find((function(e) {
                    return /^while/.test(e.type) && e.end.index === t
                  }));
                  if (!d) throw new Error("tag not found for this endWhile (at command #" + (t + 1) + ")");
                  return Promise.resolve({
                    isFlowLogic: !0,
                    nextIndex: d.start.index
                  });
                case "end":
                  var m = r.state.tags.find((function(e) {
                    return /^(if|while|times|forEach)/.test(e.type) && e.end.index === t
                  }));
                  if (!m) throw new Error("tag not found for this end (at command #" + (t + 1) + ")");
                  return /^if/.test(m.type) ? Promise.resolve({
                    isFlowLogic: !0
                  }) : Promise.resolve({
                    isFlowLogic: !0,
                    nextIndex: m.start.index
                  });
                case "comment":
                case "label":
                case "do":
                  return Promise.resolve({
                    isFlowLogic: !0
                  });
                case "gotoIf":
                case "if":
                case "while":
                case "gotoIf_v2":
                case "if_v2":
                case "while_v2":
                case "repeatIf":
                default:
                  return Promise.resolve({
                    isFlowLogic: !1
                  })
              }
            }().then((function(n) {
              if (n.isFlowLogic) return n;
              if (r.__customRun) {
                var a = r.__customRun(e, t);
                if (a) return Promise.resolve(a)
              }
              return n
            }))
          }
        }, {
          key: "postRun",
          value: function(e, t, r) {
            var n = this,
              a = e.cmd,
              o = (e.target, e.value);
            if (this.__customPost) {
              var i = this.__customPost(e, t, r);
              if (i) return Promise.resolve(i)
            }
            switch (a) {
              case "gotoIf_v2":
              case "gotoIf":
                if (!r.condition) return Promise.resolve();
                if (!o || !o.length) throw new Error("invalid value for value command");
                var s = Me(o);
                if (!this.state.labels[s]) throw new Error("label " + o + " doesn't exist");
                return Promise.resolve({
                  nextIndex: this.state.labels[s].index
                });
              case "elseif":
              case "if_v2":
              case "if":
                var c = r.condition,
                  l = "elseif" === a ? n.state.tags.find((function(e) {
                    return /^if/.test(e.type) && e.forks.find((function(e) {
                      return e.index === t && "elseif" === e.command.cmd
                    }))
                  })) : n.state.tags.find((function(e) {
                    return /^if/.test(e.type) && e.start.index === t
                  }));
                if (!l) throw new Error("'if' tag not found for this " + a + " (at command #" + (t + 1) + ")");
                l.alreadyRun = !!c;
                var u = function() {
                  if ("elseif" !== a) return 0;
                  var e = (l.forks || []).findIndex((function(e) {
                    return e.index === t && "elseif" === e.command.cmd
                  }));
                  return -1 === e ? -1 : e + 1
                }();
                if (-1 === u) throw new Error("Can't find fork for this elseif (at command #" + (t + 1) + ")");
                var d = function() {
                    var e = l.forks && l.forks[u];
                    if (!e) return null;
                    var t = e && "else" === e.command.cmd ? 1 : 0;
                    return e.index + t
                  }(),
                  m = l.end && l.end.index + 1;
                return Promise.resolve({
                  nextIndex: c ? t + 1 : d || m
                });
              case "times":
              case "forEach":
              case "while_v2":
              case "while":
                var p = r.condition,
                  h = this.state.tags.find((function(e) {
                    return /^while|times|forEach/.test(e.type) && e.start.index === t
                  }));
                if (!h) throw new Error("tag not found for this " + a + " (at command #" + (t + 1) + ")");
                if (!h.end || void 0 === h.end.index || null === h.end.index) throw new Error("tag doesn't have a valid end index");
                return Promise.resolve(p ? {} : {
                  nextIndex: h.end.index + 1
                });
              case "repeatIf":
                var f = r.condition,
                  g = this.state.tags.find((function(e) {
                    return /^do$/.test(e.type) && e.end.index === t
                  }));
                if (!g) throw new Error("tag not found for this repeatIf (at command #" + (t + 1) + ")");
                if (!g.end || void 0 === g.start.index || null === g.start.index) throw new Error("tag doesn't have a valid start index");
                return Promise.resolve(f ? {
                  nextIndex: g.start.index + 1
                } : {});
              default:
                return Promise.resolve()
            }
          }
        }, {
          key: "commandIndexByLabel",
          value: function(e) {
            var t = this.state.labels[Me(e)];
            if (!t) throw new Error("label '" + e + "' doesn't exist");
            return t.index
          }
        }, {
          key: "backupState",
          value: function() {
            return Object(he.clone)(this.state)
          }
        }, {
          key: "restoreState",
          value: function(e) {
            this.__setState(e)
          }
        }, {
          key: "getExtraByKey",
          value: function(e) {
            return this.state.extra[e]
          }
        }, {
          key: "setExtraByKey",
          value: function(e, t) {
            this.state.extra[e] = t
          }
        }, {
          key: "updateExtraByKey",
          value: function(e, t) {
            this.setExtraByKey(e, t(this.getExtraByKey[e]))
          }
        }, {
          key: "removeExtraByKey",
          value: function(e) {
            delete this.state.extra[e]
          }
        }, {
          key: "__setState",
          value: function(e) {
            this.state = ke({}, this.state, e)
          }
        }]), e
      }();
    Ae.DefaultState = {
      labels: {},
      tags: [],
      commands: [],
      extra: {}
    };
    var Re = Ae,
      De = r(505),
      Ne = r.n(De);

    function je(e) {
      return new Promise((function(t, r) {
        Ne.a.parse(e, (function(e, n) {
          return e ? r(e) : t(n)
        }))
      }))
    }

    function Le(e) {
      return new Promise((function(t, r) {
        Ne.a.stringify(e, (function(e, n) {
          return e ? r(e) : t(n)
        }))
      }))
    }
    var Fe = r(11),
      Ve = r.n(Fe),
      Ue = r(153),
      Be = r(95),
      Xe = r(61),
      Ke = r(94),
      $e = r(102),
      Ye = r(73),
      Ge = r(106),
      We = r(391),
      He = r(319),
      ze = r(321),
      qe = r(177),
      Je = r(87),
      Ze = r(109),
      Qe = r(181),
      et = r(389),
      tt = r(89),
      rt = r(88),
      nt = r(43),
      at = r(58),
      ot = r(138),
      it = r(149),
      st = r(101),
      ct = r(22),
      lt = r(28),
      ut = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      dt = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
          var r = [],
            n = !0,
            a = !1,
            o = void 0;
          try {
            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
          } catch (e) {
            a = !0, o = e
          } finally {
            try {
              !n && s.return && s.return()
            } finally {
              if (a) throw o
            }
          }
          return r
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      },
      mt = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }();

    function pt(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
      return Array.from(e)
    }

    function ht(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }
    var ft = function() {
        function e() {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.reset()
        }
        return mt(e, [{
          key: "reset",
          value: function() {
            this.startTime = new Date
          }
        }, {
          key: "elapsed",
          value: function() {
            return new Date - this.startTime
          }
        }, {
          key: "elapsedInSeconds",
          value: function() {
            return (this.elapsed() / 1e3).toFixed(2) + "s"
          }
        }]), e
      }(),
      gt = function(e) {
        return M.default.ask("PANEL_SET_PROXY", {
          proxy: e
        })
      },
      vt = function(e) {
        var t = e.searchArea,
          r = e.storedImageRect,
          n = e.ocrApiTimeout,
          a = e.store,
          o = e.lang,
          i = e.engine,
          s = e.scale,
          c = e.isDesktop,
          l = s;
        return new Promise((function(e, s) {
          var u = Object(He.getOcrCommandCounter)();
          return (c ? Promise.resolve() : M.default.ask("PANEL_CLEAR_OCR_MATCHES_ON_PLAYING_PAGE")).then((function() {
            return Object(oe.delay)((function() {}), 1e3)
          })).then((function() {
            return M.default.ask("PANEL_CAPTURE_IMAGE", {
              isDesktop: c,
              storedImageRect: r,
              searchArea: /\.png/i.test(t) ? "rect" : t,
              scaleDpi: !0
            })
          })).then((function(e) {
            var t = e.dataUrl,
              r = e.offset,
              s = e.viewportOffset,
              c = e.scale,
              d = void 0 === c ? 1 : c,
              m = Object(oe.dataURItoBlob)(t),
              p = Object(Ye.readableSize)(m.size),
              h = (new Date, function(e, t) {
                return ((t - e) / 1e3).toFixed(1) + "s"
              }),
              f = Object(he.countDown)({
                interval: 1e3,
                timeout: n,
                onTick: function(e) {
                  var t = e.past,
                    r = e.total;
                  a.dispatch(I.setTimeoutStatus({
                    past: t,
                    total: r,
                    type: "OCR in progress"
                  }))
                }
              });
            return u.check(), a.dispatch(I.addLog("info", "OCR (" + o + ") started (" + p + ")")), Object($e.runOCR)({
              engine: i,
              scale: l,
              image: t,
              language: o,
              totalTimeout: n,
              singleApiTimeout: E.a.ocr.singleApiTimeout,
              isOverlayRequired: !0,
              getApiUrlAndApiKey: function() {
                return function() {
                  var e = a.getState().config,
                    t = e.ocrMode,
                    r = e.ocrOfflineURL,
                    n = e.ocrOfflineAPIKey;
                  switch (t) {
                    case "enabled":
                      return Object(ze.getOcrEndpointPicker)().bestPick();
                    case "offline_enabled":
                      if (!/^https?:\/\//.test(r)) throw new Error("Please set local OCR API first");
                      if (!n || !n.length) throw new Error("Please set local OCR API key first");
                      return Promise.resolve({
                        url: r,
                        key: n
                      });
                    default:
                      throw new Error("Please enable OCR first")
                  }
                }().then((function(e) {
                  return e
                }))
              },
              shouldRetry: function() {
                return Object(ze.getOcrEndpointPicker)().isAllDown().then((function(e) {
                  return !e
                }))
              },
              didGetResponse: function(e) {
                var t = e.server,
                  r = e.startTime,
                  n = e.endTime,
                  o = e.response,
                  i = e.error,
                  s = t.id;
                return o ? a.dispatch(I.addLog("info", "OCR result received (" + h(r, n) + ")")) : i && a.dispatch(I.addLog("warning", "OCR error received (" + h(r, n) + ") - " + i.message)), s && o && Object(ze.getOcrEndpointPicker)().use(s), s && window.navigator.onLine ? Object(ze.getOcrEndpointPicker)().report(s, {
                  lastError: i,
                  lastOcrExitCode: o ? o.OCRExitCode : void 0,
                  lastRequestTimestamp: r,
                  lastResponseTimestamp: n,
                  lastTotalMilliseconds: n - r
                }).then((function() {})) : Promise.resolve()
              }
            }).then((function(e) {
              return f(), u.inc(), {
                offset: r,
                viewportOffset: s,
                response: Object($e.scaleOcrResponseCoordinates)(e, d)
              }
            }), (function(e) {
              throw f(), /All OCR servers are down/i.test(e.message) && Object(ze.getOcrEndpointPicker)().reset(), e
            }))
          })).then(e, s)
        }))
      },
      yt = function(e) {
        var t = e.store,
          r = e.vars,
          n = e.getTcPlayer,
          a = e.getInterpreter,
          o = [wt({
            store: t,
            vars: r,
            getTcPlayer: n,
            getInterpreter: a
          }), bt({
            store: t,
            vars: r,
            getTcPlayer: n,
            getInterpreter: a
          })];
        return function(e, t) {
          return o.reduce((function(r, n) {
            return void 0 !== r ? r : n(e, t)
          }), void 0)
        }
      },
      bt = function(e) {
        var t = e.store,
          r = e.vars,
          n = e.getTcPlayer,
          a = e.getInterpreter;
        return function e(o, i) {
          var s = Object(le.getStorageManager)().getCSVStorage(),
            c = Object(le.getStorageManager)().getScreenshotStorage(),
            l = Object(le.getStorageManager)().getMacroStorage().getPathLib(),
            u = o.cmd,
            d = o.target,
            m = o.value,
            p = o.extra,
            h = {
              isFlowLogic: !0
            },
            f = function() {
              if ("disabled" === t.getState().config.ocrMode) throw new Error("OCR feature disabled.")
            };
          Ve()("interpretCsFreeCommands", o);
          var g, v, y = n().getState(),
            b = Object(le.getStorageManager)().getMacroStorage().relativePath(y.extra.macroId),
            w = l.dirname(b);
          switch (u) {
            case "repeatIf":
            case "elseif":
            case "if_v2":
            case "while_v2":
            case "gotoIf_v2":
              Ve()("Executing " + u + ": " + d);
              try {
                return {
                  condition: window.eval(d),
                  byPass: !0
                }
              } catch (e) {
                throw new Error("Error in condition of " + u + ": " + e.message)
              }
              case "times":
                var x = a(),
                  C = "times_" + i,
                  T = 1 + (x.getExtraByKey(C) || 0),
                  _ = parseInt(d, 10);
                if (isNaN(_)) throw new Error("target must be a positive number");
                if (_ < 1) return {
                  condition: !1,
                  byPass: !0
                };
                var O = T <= _;
                return r.set({
                  "!TIMES": T
                }, !0), O ? x.setExtraByKey(C, T) : x.removeExtraByKey(C), {
                  condition: O,
                  byPass: !0
                };
              case "forEach":
                var k = a(),
                  P = "forEach_" + i,
                  A = k.getExtraByKey(P),
                  R = 1 + (void 0 === A ? -1 : A),
                  D = r.get(d);
                if (!Array.isArray(D)) throw new Error("target must be an array");
                var N = R < D.length,
                  j = N ? ht({}, m, D[R]) : null;
                return r.set({
                  "!FOREACH": R
                }, !0), N ? k.setExtraByKey(P, R) : k.removeExtraByKey(P), {
                  vars: j,
                  condition: N,
                  byPass: !0
                };
              case "executeScript_Sandbox":
                try {
                  var L = ";(function () { " + d + " })();",
                    F = window.eval(L);
                  return m && m.length ? {
                    byPass: !0,
                    vars: ht({}, m, F)
                  } : {
                    byPass: !0
                  }
                } catch (e) {
                  throw new Error("Error in executeScript_Sandbox code: " + e.message)
                }
                case "executeAsyncScript_Sandbox":
                  try {
                    var V = "Promise.resolve((function () { " + d + " })());";
                    return window.eval(V).then((function(e) {
                      return m && m.length ? {
                        byPass: !0,
                        vars: ht({}, m, e)
                      } : {
                        byPass: !0
                      }
                    }))
                  } catch (e) {
                    throw new Error("Error in executeScriptAsync_Sandbox code: " + e.message)
                  }
                  case "setProxy":
                    return function() {
                      if (/direct/i.test(d && d.trim())) return gt(null).then((function() {
                        return t.dispatch(I.addLog("info", "Proxy reset to none"))
                      }));
                      var e = /default/i.test(d && d.trim()) ? [t.getState().config.defaultProxy, t.getState().config.defaultProxyAuth] : [d, m],
                        n = dt(e, 2),
                        a = n[0],
                        o = n[1],
                        i = Object(ot.parseProxyUrl)(a, o),
                        s = i.type === it.ProxyScheme.Socks4 || i.type === it.ProxyScheme.Socks5,
                        c = !!i.username;
                      return s && c && !Object(ct.isFirefox)() && t.dispatch(I.addLog("warning", "Browser doesn't support authentication on socks proxy")), gt(i).then((function() {
                        r.set({
                          "!PROXY_EXEC_COUNT": 1 + (r.get("!PROXY_EXEC_COUNT") || 0)
                        }, !0), t.dispatch(I.addLog("info", "Proxy set to " + a))
                      }))
                    }().then((function() {
                      return {
                        byPass: !0
                      }
                    }));
                  case "run":
                    var U = t.getState(),
                      B = 0 === (v = (v = d).replace(/\\/g, "/")).indexOf("/") ? l.normalize(v).replace(/^(\/|\\)/, "") : l.join(w, v),
                      X = Object(te.findMacroNodeWithCaseInsensitiveRelativePath)(U, B);
                    return Object(le.getStorageManager)().getMacroStorage().read(X && X.fullPath || B, "Text").then((function(e) {
                      var r = e.data.commands.find((function(e) {
                          return "open" === e.cmd.toLowerCase()
                        })),
                        n = I.commonPlayerState(t.getState(), {
                          extra: {
                            id: e.id
                          },
                          mode: Object(ee.b)().C.MODE.STRAIGHT,
                          startIndex: 0,
                          startUrl: r ? r.target : null,
                          resources: e.data.commands,
                          postDelay: 1e3 * U.config.playCommandInterval,
                          isStep: Object(ee.b)().getState().isStep,
                          loopsCursor: 1,
                          loopsStart: 1,
                          loopsEnd: 1
                        }, e.id, e.name);
                      return Object(oe.delay)((function() {}), 500).then((function() {
                        return Object(Ze.getMacroCallStack)().call(e, {
                          playerState: n,
                          status: Qe.MacroStatus.Running,
                          nextIndex: 0,
                          commandResults: []
                        })
                      })).then((function() {
                        return t.dispatch(I.updateMacroPlayStatus(e.id, st.MacroResultStatus.Success)), {
                          byPass: !0
                        }
                      }))
                    }));
                  case "store":
                    return {
                      byPass: !0, vars: ht({}, m, d)
                    };
                  case "echo":
                    return {
                      byPass: !0, log: ut({
                        info: d
                      }, "#shownotification" === m ? {
                        options: {
                          notification: !0
                        }
                      } : m ? {
                        options: {
                          color: m
                        }
                      } : {})
                    };
                  case "prompt":
                    var K = d.match(/^([^@]+)(?:@(.+))?$/),
                      $ = dt(K, 3),
                      Y = ($[0], $[1]),
                      G = $[2];
                    return M.default.ask("PANEL_BRING_PANEL_TO_FOREGROUND").then((function() {
                      return Object(qe.prompt)({
                        message: Y,
                        value: G || ""
                      })
                    })).then((function(e) {
                      return {
                        byPass: !0,
                        vars: ht({}, m, e)
                      }
                    }));
                  case "throwError":
                    throw new Error(d);
                  case "pause":
                    var W = parseInt(d);
                    if (!d || !d.length || 0 === W) return {
                      byPass: !0,
                      control: {
                        type: "pause"
                      }
                    };
                    if (isNaN(W) || W < 0) throw new Error("target of pause command must be a positive integer");
                    var H = n().getPlayUID();
                    return Object(oe.withCountDown)({
                      timeout: W,
                      interval: 1e3,
                      onTick: function(e) {
                        var r = e.total,
                          a = e.past,
                          o = e.cancel;
                        return t.getState().player.status !== ae.PLAYER_STATUS.PLAYING ? o() : n().checkPlayUID(H) ? void t.dispatch(I.setTimeoutStatus({
                          past: a,
                          total: r,
                          type: "pause"
                        })) : o()
                      }
                    }).then((function() {
                      return {
                        byPass: !0
                      }
                    }));
                  case "localStorageExport":
                    var z = /\s*#DeleteAfterExport\s*/i.test(m);
                    if (/^\s*log\s*$/i.test(d)) {
                      var q = t.getState().logs.map(Ue.renderLog).join("\n");
                      return S.a.saveAs(new Blob([q]), "uivision_log.txt"), z && t.dispatch(I.clearLogs()), h
                    }
                    if (/\.csv$/i.test(d)) return s.exists(d).then((function(e) {
                      if (!e) throw new Error(d + " doesn't exist");
                      return s.read(d, "Text").then((function(e) {
                        return S.a.saveAs(new Blob([e]), d), z && s.remove(d).then((function() {
                          return t.dispatch(I.listCSV())
                        })), h
                      }))
                    }));
                    if (/\.png$/i.test(d)) return c.exists(d).then((function(e) {
                      if (!e) throw new Error(d + " doesn't exist");
                      return c.read(d, "ArrayBuffer").then((function(e) {
                        return S.a.saveAs(new Blob([new Uint8Array(e)]), d), z && c.remove(d).then((function() {
                          return t.dispatch(I.listScreenshots())
                        })), h
                      }))
                    }));
                    throw new Error(d + " doesn't exist");
                  case "OCRSearch":
                    if (f(), !m || !m.length) throw new Error("value is required");
                    var J = r.get("!ocrLanguage").toLowerCase(),
                      Z = r.get("!ocrEngine"),
                      Q = r.get("!ocrScale"),
                      re = r.get("!visualSearchArea"),
                      ne = r.get("!storedImageRect"),
                      ce = E.a.ocr.apiTimeout,
                      ue = (g = d.match(/^(.+)@POS=(\d+)$/i)) ? [g[1], parseInt(g[2]) - 1, !0] : [d, 0, !1],
                      de = dt(ue, 3),
                      me = de[0],
                      pe = de[1],
                      fe = de[2];
                    return vt({
                      store: t,
                      lang: J,
                      scale: Q,
                      engine: Z,
                      searchArea: re,
                      storedImageRect: ne,
                      ocrApiTimeout: ce,
                      isDesktop: "desktop" === r.get("!CVSCOPE")
                    }).then((function(e) {
                      var t = e.response,
                        n = e.offset,
                        a = e.viewportOffset,
                        o = Object(he.safeUpdateIn)(["[]", "TextOverlay", "Lines", "[]", "Words", "[]"], (function(e) {
                          return ut({}, e, {
                            Top: e.Top + a.y,
                            Left: e.Left + a.x
                          })
                        }), t.ParsedResults),
                        i = Object(he.safeUpdateIn)(["[]", "TextOverlay", "Lines", "[]", "Words", "[]"], (function(e) {
                          return ut({}, e, {
                            Top: e.Top + n.y,
                            Left: e.Left + n.x
                          })
                        }), t.ParsedResults),
                        s = Object($e.searchTextInOCRResponse)({
                          text: me,
                          index: pe,
                          exhaust: !0,
                          parsedResults: o
                        }),
                        c = s.hit,
                        l = s.all,
                        u = function() {
                          if (c) {
                            var e, t = Object($e.ocrMatchCenter)(c);
                            return ht(e = {}, m, fe ? 1 : l.length), ht(e, "!ocrx", t.x), ht(e, "!ocry", t.y), e
                          }
                          var r;
                          return ht(r = {}, m, 0), ht(r, "!ocrx", 0), ht(r, "!ocry", 0), r
                        }(),
                        d = [{
                          similarity: 1,
                          highlight: Ge.OcrHighlightType.Identified,
                          words: Object($e.allWordsWithPosition)(i, Object(he.flatten)(l.map((function(e) {
                            return e.words.map((function(e) {
                              return e.position
                            }))
                          }))))
                        }].concat(pt(Object(he.compose)(l[pe] ? Object(oe.setIn)([pe, "highlight"], Ge.OcrHighlightType.TopMatched) : function(e) {
                          return e
                        }, Object(oe.setIn)(["[]", "highlight"], Ge.OcrHighlightType.Matched), Object(oe.updateIn)(["[]", "words", "[]", "word"], (function(e) {
                          return ut({}, e, {
                            Top: e.Top + n.y - a.y,
                            Left: e.Left + n.x + a.x
                          })
                        })))(l)));
                      return p && p.debugVisual && M.default.ask("PANEL_HIGHLIGHT_OCR_MATCHES", {
                        ocrMatches: d,
                        isDesktop: "desktop" === r.get("!CVSCOPE")
                      }), ("desktop" !== r.get("!CVSCOPE") ? Promise.resolve(1) : Object(Xe.getNativeXYAPI)().getScalingFactor()).then((function(e) {
                        return Object(he.compose)(void 0 === u["!ocrx"] ? he.id : Object(he.safeUpdateIn)(["vars", "!ocrx"], (function(t) {
                          return t * e
                        })), void 0 === u["!ocry"] ? he.id : Object(he.safeUpdateIn)(["vars", "!ocry"], (function(t) {
                          return t * e
                        })), Object(he.safeUpdateIn)(["best"], (function(t) {
                          return t && t.similarity ? Object($e.scaleOcrTextSearchMatch)(t, e) : null
                        })))({
                          vars: u,
                          byPass: !0,
                          best: c
                        })
                      }))
                    }));
                  case "OCRExtract":
                  case "OCRExtractRelative":
                    if (f(), !m || !m.length) throw new Error("value is required");
                    var ge = r.get("!ocrLanguage").toLowerCase(),
                      ve = r.get("!ocrEngine"),
                      ye = r.get("!ocrScale"),
                      be = E.a.ocr.apiTimeout,
                      we = /relative/i.test(u);
                    return M.default.ask("PANEL_CLEAR_OCR_MATCHES_ON_PLAYING_PAGE").catch((function() {})).then((function() {
                      return Object(oe.delay)((function() {}), 1e3)
                    })).then((function() {
                      return Promise.all([e(ut({}, o, {
                        cmd: "visualAssert",
                        target: d,
                        value: "",
                        extra: ut({}, o.extra || {}, {
                          relativeVisual: we,
                          debugVisual: !1
                        })
                      })), "desktop" !== r.get("!CVSCOPE") ? Promise.resolve(1) : Object(Xe.getNativeXYAPI)().getScalingFactor()])
                    })).then((function(e) {
                      var n, a, o = dt(e, 2),
                        i = o[0],
                        s = o[1],
                        c = i.best;
                      if (!c) throw new Error("no matched vision found for '" + d + "'");
                      return n = function() {
                        return vt({
                          store: t,
                          lang: ge,
                          scale: ye,
                          engine: ve,
                          ocrApiTimeout: be,
                          searchArea: "rect",
                          storedImageRect: {
                            x: c.offsetLeft / s,
                            y: c.offsetTop / s,
                            width: c.width / s,
                            height: c.height / s
                          },
                          isDesktop: "desktop" === r.get("!CVSCOPE")
                        }).then((function(e) {
                          var t = e.response,
                            n = e.offset,
                            a = (e.viewportOffset, Object(he.safeUpdateIn)(["[]", "TextOverlay", "Lines", "[]", "Words", "[]"], (function(e) {
                              return ut({}, e, {
                                Top: e.Top + n.y,
                                Left: e.Left + n.x
                              })
                            }), t.ParsedResults)),
                            o = [{
                              similarity: 1,
                              highlight: Ge.OcrHighlightType.Matched,
                              words: Object($e.allWordsWithPosition)(a, [])
                            }];
                          return p && p.debugVisual && M.default.ask("PANEL_HIGHLIGHT_OCR_MATCHES", {
                            ocrMatches: o,
                            isDesktop: "desktop" === r.get("!CVSCOPE")
                          }), {
                            byPass: !0,
                            vars: ht({}, m, t.ParsedResults && t.ParsedResults[0] ? t.ParsedResults[0].ParsedText : "")
                          }
                        }))
                      }, a = function() {
                        return M.default.ask("PANEL_SHOW_VISION_HIGHLIGHT").catch((function() {}))
                      }, M.default.ask("PANEL_HIDE_VISION_HIGHLIGHT").catch((function() {})).then((function() {
                        return n()
                      })).then((function(e) {
                        return a(), e
                      }), (function(e) {
                        throw a(), e
                      }))
                    }));
                  case "visualVerify":
                  case "visualAssert":
                  case "visualSearch":
                  case "visionFind":
                    if (!("visualSearch" !== u || m && m.length)) throw new Error(u + ": Must specify a variable to save the result");
                    var Ee = Object(nt.parseImageTarget)(d);
                    if (!d) throw new Error("Target should be like 'abc.png@0.8#1'");
                    var xe = Ee.imageUrl,
                      Se = Ee.fileName,
                      Ce = Ee.confidence,
                      Te = void 0 === Ce ? t.getState().config.defaultVisionSearchConfidence : Ce,
                      _e = Ee.index,
                      Oe = "number" != typeof _e || isNaN(_e) ? 0 : _e,
                      ke = -1 === ["visualVerify", "visualAssert"].indexOf(u),
                      Pe = r.get("!visualSearchArea"),
                      Ie = 1e3 * r.get("!TIMEOUT_WAIT"),
                      Me = r.get("!CVSCOPE"),
                      Ae = function() {
                        if (!xe || !xe.length) return Promise.resolve();
                        return (0 === xe.indexOf("data:") ? Promise.resolve(Object(oe.dataURItoBlob)(xe)) : Object(oe.loadImage)(xe)).then((function(e) {
                          return Object(le.getStorageManager)().getVisionStorage().write(Se, e)
                        })).then((function() {
                          t.dispatch(I.listVisions())
                        }))
                      };
                    return Object(oe.retry)((function() {
                      return ("desktop" === Me ? Promise.resolve() : M.default.ask("PANEL_CLEAR_VISION_RECTS_ON_PLAYING_PAGE")).then(Ae).then((function() {
                        return function(e, t) {
                          return Object(le.getStorageManager)().getVisionStorage().exists(e).then((function(r) {
                            if (!r) throw new Error(t + ": No input image found for file name '" + e + "'")
                          }))
                        }(Se, u)
                      })).then((function() {
                        return M.default.ask("PANEL_SEARCH_VISION_ON_PLAYING_PAGE", {
                          visionFileName: Se,
                          minSimilarity: Te,
                          searchArea: Pe,
                          cvScope: Me,
                          command: o,
                          storedImageRect: r.get("!storedImageRect")
                        })
                      })).then((function(e) {
                        var n = e.regions,
                          a = e.imageInfo;
                        Ve()("regions", n, a);
                        var o = 0 === n.length,
                          i = n.length <= Oe;
                        if (o || i) {
                          if (r.set({
                              "!imageX": 0,
                              "!imageY": 0,
                              "!imageWidth": 0,
                              "!imageHeight": 0
                            }, !0), o) throw new Error("Image '" + Se + "' (conf. = " + Te + ") not found");
                          if (i) throw new Error("Found " + n.length + " " + (n.length > 1 ? "matches" : "match") + ", but you are looking for #" + (Oe + 1))
                        }
                        Oe === _e ? n.sort((function(e, t) {
                          var r = Math.sign(e.matched.offsetTop - t.matched.offsetTop),
                            n = Math.sign(e.matched.offsetLeft - t.matched.offsetLeft);
                          return r || n
                        })) : n.sort((function(e, t) {
                          var r = Math.sign(t.matched.score - e.matched.score),
                            n = Math.sign(e.matched.offsetTop - t.matched.offsetTop),
                            a = Math.sign(e.matched.offsetLeft - t.matched.offsetLeft);
                          return r || n || a
                        }));
                        var s = n[Oe].matched;
                        if ("browser" === Me)(t.getState().config.playHighlightElements || p && p.debugVisual) && M.default.ask("PANEL_HIGHLIGHT_RECTS", {
                          selectedIndex: Oe,
                          scoredRects: n.map((function(e) {
                            return e.matched
                          }))
                        });
                        else if (p && p.debugVisual) {
                          var c = function(e, t, r) {
                            return e ? {
                              type: r,
                              index: t,
                              x: e.left,
                              y: e.top,
                              width: e.width,
                              height: e.height,
                              score: e.score
                            } : null
                          };
                          M.default.ask("PANEL_HIGHLIGHT_DESKTOP_RECTS", {
                            imageInfo: a,
                            selectedIndex: Oe,
                            scoredRects: Object(he.flatten)(n.map((function(e, t) {
                              return [c(e.reference, t, t === Oe ? Je.DesktopScreenshot.RectType.ReferenceOfBestMatch : Je.DesktopScreenshot.RectType.Reference), c(e.matched, t, t === Oe ? Je.DesktopScreenshot.RectType.BestMatch : Je.DesktopScreenshot.RectType.Match)].filter((function(e) {
                                return e
                              }))
                            })))
                          })
                        }
                        return ("desktop" !== Me ? Promise.resolve(1) : Object(Xe.getNativeXYAPI)().getScalingFactor()).then((function(e) {
                          return {
                            byPass: !0,
                            vars: ut({
                              "!imageX": e * (s.offsetLeft + s.width / 2),
                              "!imageY": e * (s.offsetTop + s.height / 2),
                              "!imageWidth": e * s.width,
                              "!imageHeight": e * s.height
                            }, ke && m && m.length ? ht({}, m, n.length) : {}),
                            best: Object(oe.objMap)((function(t) {
                              return t * e
                            }), s)
                          }
                        })).then((function(e) {
                          return Object(oe.delay)((function() {
                            return e
                          }), 100)
                        }))
                      }))
                    }), {
                      timeout: Ie,
                      shouldRetry: function(e) {
                        return t.getState().status === ae.APP_STATUS.PLAYER && /Image.*\(conf\. =.*\) not found/.test(e.message)
                      },
                      retryInterval: function(e, t) {
                        return .5 + .25 * e
                      },
                      onFirstFail: function() {
                        M.default.ask("PANEL_TIMEOUT_STATUS", {
                          timeout: Ie,
                          type: "Vision waiting"
                        })
                      },
                      onFinal: function() {
                        M.default.ask("PANEL_CLEAR_TIMEOUT_STATUS")
                      }
                    })().catch((function(e) {
                      if ("visualAssert" === u || p && p.throwError) throw e;
                      return ut({
                        byPass: !0
                      }, ke && m && m.length ? {
                        vars: ht({}, m, 0)
                      } : {}, "visualVerify" === u ? {
                        log: {
                          error: e.message
                        }
                      } : {})
                    }));
                  case "visionLimitSearchArea":
                  case "visionLimitSearchAreaRelative":
                    var Re = /relative/i.test(u),
                      De = d.trim(),
                      Ne = Promise.resolve({
                        byPass: !0
                      }),
                      je = function(e) {
                        var t = e.rect,
                          n = e.isDesktop,
                          a = e.searchArea;
                        return r.set({
                          "!storedImageRect": t
                        }, !0), M.default.ask("PANEL_CAPTURE_IMAGE", {
                          isDesktop: n,
                          storedImageRect: t,
                          searchArea: /\.png/i.test(a) ? "rect" : a,
                          scaleDpi: !0
                        })
                      },
                      Le = function(e) {
                        switch (r.get("!CVSCOPE")) {
                          case "browser":
                            return Promise.resolve(e);
                          case "desktop":
                            return Object(Xe.getNativeXYAPI)().getScalingFactor().then((function(t) {
                              return {
                                x: e.x / t,
                                y: e.y / t,
                                width: e.width / t,
                                height: e.height / t
                              }
                            }))
                        }
                      };
                    if (Re && !/\.png/i.test(De)) throw new Error(u + " only accepts a vision image as target");
                    if (/^viewport$/.test(De)) return r.set({
                      "!visualSearchArea": "viewport"
                    }, !0), Ne;
                    if (/^full$/.test(De)) return r.set({
                      "!visualSearchArea": "full"
                    }, !0), Ne;
                    if (/^area=/i.test(De)) {
                      var Fe = De.replace(/^area=/i, "").split(/\s*,\s*/g).map((function(e) {
                        return parseFloat(e.trim())
                      }));
                      if (!(4 === Fe.length && oe.and.apply(void 0, pt(Fe.map((function(e) {
                          return "number" == typeof e && !isNaN(e)
                        })))))) throw new Error('area should be in format of "area=x1,y1,x2,y2"');
                      var Ye = {
                        x: Fe[0],
                        y: Fe[1],
                        width: Fe[2] - Fe[0],
                        height: Fe[3] - Fe[1]
                      };
                      return r.set({
                        "!visualSearchArea": "rect"
                      }, !0), Le(Ye).then((function(e) {
                        return je({
                          isDesktop: "desktop" === r.get("!CVSCOPE"),
                          searchArea: "rect",
                          rect: e
                        }).then((function() {
                          return {
                            byPass: !0
                          }
                        }))
                      }))
                    }
                    if (/\.png/.test(De)) return e(ut({}, o, {
                      cmd: "visualAssert",
                      target: De,
                      value: "",
                      extra: ut({}, o.extra || {}, {
                        relativeVisual: Re
                      })
                    })).then((function(e) {
                      var t = e.best;
                      if (!t) throw new Error("No match found for " + De + " in screenshot");
                      return r.set({
                        "!visualSearchArea": De
                      }, !0), Le({
                        x: t.offsetLeft,
                        y: t.offsetTop,
                        width: t.width,
                        height: t.height
                      }).then((function(e) {
                        return je({
                          rect: e,
                          searchArea: De,
                          isDesktop: "desktop" === r.get("!CVSCOPE")
                        })
                      })).then((function() {
                        return {
                          byPass: !0
                        }
                      }))
                    }));
                    switch (r.get("!CVSCOPE")) {
                      case "browser":
                        if (/^element:/.test(De)) return r.set({
                          "!visualSearchArea": De
                        }, !0), Promise.resolve({
                          byPass: !1
                        });
                        throw new Error("Target of visionLimitSearchArea could only be either 'viewport', 'full' or 'element:...'");
                      case "desktop":
                        throw new Error("In desktop mode, target of visionLimitSearchArea could only be a vision image name or area")
                    }
                    break;
                  case "XRun":
                  case "XRunAndWait":
                    var We = d,
                      He = m,
                      ze = /AndWait/.test(u);
                    return Object(ie.getXFile)().sanityCheck().then((function() {
                      return Object(at.getNativeFileSystemAPI)().runProcess({
                        fileName: We,
                        waitForExit: ze,
                        arguments: He
                      })
                    })).then((function(e) {
                      return "XRunAndWait" === u && (r.set({
                        "!XRUN_EXITCODE": e.exitCode
                      }, !0), t.dispatch(I.addLog("info", "App close detected, Exit code=" + e.exitCode))), {
                        byPass: !0
                      }
                    }));
                  case "XDesktopAutomation":
                    var et = Object(he.parseBoolLike)(d, !1);
                    return t.dispatch(I.updateUI({
                      shouldEnableDesktopAutomation: et
                    })), r.set({
                      "!CVSCOPE": et ? "desktop" : "browser"
                    }, !0), Promise.resolve({
                      byPass: !0
                    });
                  case "bringBrowserToForeground":
                    return M.default.ask("PANEL_BRING_PLAYING_WINDOW_TO_FOREGROUND").then((function() {
                      return {
                        byPass: !0
                      }
                    }));
                  case "setWindowSize":
                  case "resize":
                    var tt = function() {
                        if ("resize" === u) {
                          if (!/\s*\d+@\d+\s*/.test(d)) throw new Error("Syntax for target of resize command is x@y, e.g. 800@600");
                          return d.split("@")
                        }
                        if (!/\s*\d+x\d+\s*/i.test(d)) throw new Error("Syntax for target of setWindowSize command is WidthxHeight, e.g. 800x600");
                        return d.split(/x/i)
                      }(),
                      rt = dt(tt, 2),
                      lt = rt[0],
                      mt = rt[1],
                      ft = parseInt(lt, 10),
                      yt = parseInt(mt, 10);
                    return Ve()("resize", ft, yt), M.default.ask("PANEL_RESIZE_PLAY_TAB", {
                      width: ft,
                      height: yt
                    }).then((function(e) {
                      var t = e.actual,
                        r = e.desired;
                      return 0 === e.diff.length ? {
                        byPass: !0
                      } : {
                        byPass: !0,
                        log: {
                          warning: "Only able to resize it to " + t.width + "@" + t.height + ", given " + r.width + "@" + r.height
                        }
                      }
                    }));
                  case "XType":
                    return Object(se.getXUserIO)().sanityCheck().then((function() {
                      return Object(oe.delay)((function() {}), 300)
                    })).then((function() {
                      return Object(Xe.getNativeXYAPI)().sendText({
                        text: d
                      }).then((function(e) {
                        if (!e) throw new Error("Failed to XType '" + d + "'");
                        return {
                          byPass: !0
                        }
                      }))
                    }));
                  case "XMove":
                  case "XMoveRelative":
                  case "XClickRelative":
                  case "XClick":
                    var bt = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                          t = e.trim().toLowerCase();
                        switch (t) {
                          case "":
                            return "#left";
                          case "#left":
                          case "#middle":
                          case "#right":
                          case "#doubleclick":
                          case "#shiftclick":
                          case "#ctrlclick":
                            return t;
                          default:
                            throw new Error("XClick: invalid value, '" + e + "'")
                        }
                      },
                      wt = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                          t = e.trim().toLowerCase();
                        switch (t) {
                          case "":
                            return "#move";
                          case "#move":
                          case "#up":
                          case "#down":
                            return t;
                          default:
                            throw new Error("XMove: invalid value, '" + e + "'")
                        }
                      },
                      Et = {
                        XClick: bt,
                        XClickRelative: bt,
                        XMove: wt,
                        XMoveRelative: wt
                      } [u],
                      St = /relative/i.test(u);
                    return Object(se.getXUserIO)().sanityCheck().then((function() {
                      var a = function() {
                          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = e.trim(),
                            n = "desktop" === r.get("!CVSCOPE");
                          if (/^ocr=/i.test(t)) return f(), {
                            type: "ocr",
                            value: {
                              query: t.substr(4)
                            }
                          };
                          if (Object(Be.c)(t)) {
                            if (n) throw new Error("Locator is not support in desktop mode");
                            return {
                              type: "locator",
                              value: {
                                locator: t
                              }
                            }
                          }
                          if (/^[dD](\d+(\.\d+)?)\s*,\s*(\d+(\.\d+)?)$/.test(t)) return {
                            type: "desktop_coordinates",
                            value: {
                              coordinates: t.substr(1).split(/\s*,\s*/)
                            }
                          };
                          if (/^(\d+(\.\d+)?)\s*,\s*(\d+(\.\d+)?)$/.test(t)) return {
                            type: n ? "desktop_coordinates" : "viewport_coordinates",
                            value: {
                              coordinates: t.split(/\s*,\s*/)
                            }
                          };
                          if (/^.*\.png(@\d\.\d+)?(#\d+)?(\[[^\]]+\])?$/.test(t)) return {
                            type: "visual_search",
                            value: {
                              query: t
                            }
                          };
                          throw new Error("XClick: invalid target, '" + e + "'")
                        }(d),
                        i = Et(m);
                      return function() {
                        if (St && "visual_search" !== a.type) throw new Error(u + " only accepts a vision image as target");
                        switch (a.type) {
                          case "locator":
                            return function(e) {
                              return xt({
                                vars: r,
                                store: t,
                                command: e,
                                state: n().getState(),
                                preRun: function(e, t, r) {
                                  return r(e)
                                }
                              })
                            }(ut({}, o, {
                              cmd: "locate",
                              target: a.value.locator,
                              value: ""
                            })).then((function(e) {
                              var t = e.rect;
                              if (!t) throw new Error("no rect data returned");
                              var r = t.x + t.width / 2,
                                n = t.y + t.height / 2;
                              if (isNaN(r)) throw new Error("empty x");
                              if (isNaN(n)) throw new Error("empty y");
                              return {
                                type: "viewport",
                                offset: {
                                  x: r,
                                  y: n
                                }
                              }
                            }));
                          case "visual_search":
                            return e(ut({}, o, {
                              cmd: "visualAssert",
                              target: a.value.query,
                              value: "",
                              extra: ut({}, o.extra || {}, {
                                relativeVisual: St
                              })
                            })).then((function(e) {
                              var t = e.best;
                              if (!t) throw new Error("no best found from result of verifyAssert triggered by XClick");
                              var n = t.offsetLeft + t.width / 2,
                                a = t.offsetTop + t.height / 2;
                              if (isNaN(n)) throw new Error("empty x");
                              if (isNaN(a)) throw new Error("empty y");
                              switch (r.get("!CVSCOPE")) {
                                case "desktop":
                                  return {
                                    type: "desktop", offset: {
                                      x: n,
                                      y: a
                                    }, originalResult: e
                                  };
                                case "browser":
                                  return {
                                    type: "viewport", offset: {
                                      x: n,
                                      y: a
                                    }, originalResult: e
                                  };
                                default:
                                  throw new Error("Unknown CVSCOPE value: '" + r.get("!CVSCOPE") + "'")
                              }
                            }));
                          case "ocr":
                            return e(ut({}, o, {
                              cmd: "OCRSearch",
                              target: a.value.query,
                              value: "__ocrResult__"
                            })).then((function(e) {
                              var t = e.best;
                              if (!t) throw new Error("no match found for '" + d + "'");
                              return {
                                type: "desktop" === r.get("!CVSCOPE") ? "desktop" : "viewport",
                                offset: Object($e.ocrMatchCenter)(t),
                                originalResult: e
                              }
                            }));
                          case "desktop_coordinates":
                            var i = a.value.coordinates;
                            return Promise.resolve({
                              type: "desktop",
                              offset: {
                                x: parseFloat(i[0]),
                                y: parseFloat(i[1])
                              }
                            });
                          case "viewport_coordinates":
                            var s = a.value.coordinates;
                            return Promise.resolve({
                              type: "viewport",
                              offset: {
                                x: parseFloat(s[0]),
                                y: parseFloat(s[1])
                              }
                            })
                        }
                      }().then((function(t) {
                        var n = t.type,
                          a = t.offset,
                          o = t.originalResult,
                          s = void 0 === o ? {} : o;
                        return ("desktop" === r.get("!CVSCOPE") ? Promise.resolve() : e({
                          cmd: "bringBrowserToForeground"
                        })).then((function() {
                          return Object(oe.delay)((function() {}), 300)
                        })).then((function() {
                          var e = Object(Xe.getNativeXYAPI)(),
                            t = function() {
                              switch (i) {
                                case "#left":
                                  return [Xe.MouseButton.Left, Xe.MouseEventType.Click];
                                case "#middle":
                                  return [Xe.MouseButton.Middle, Xe.MouseEventType.Click];
                                case "#right":
                                  return [Xe.MouseButton.Right, Xe.MouseEventType.Click];
                                case "#doubleclick":
                                  return [Xe.MouseButton.Left, Xe.MouseEventType.DoubleClick];
                                case "#shiftclick":
                                  return [Xe.MouseButton.Left, Xe.MouseEventType.ShiftClick];
                                case "#ctrlclick":
                                  return [Xe.MouseButton.Left, Xe.MouseEventType.CtrlClick];
                                case "#move":
                                  return [Xe.MouseButton.Left, Xe.MouseEventType.Move];
                                case "#up":
                                  return [Xe.MouseButton.Left, Xe.MouseEventType.Up];
                                case "#down":
                                  return [Xe.MouseButton.Left, Xe.MouseEventType.Down];
                                default:
                                  throw new Error("Unsupported realValue: " + i)
                              }
                            }(),
                            r = dt(t, 2),
                            o = r[0],
                            c = r[1],
                            l = {
                              button: o,
                              x: a.x,
                              y: a.y,
                              type: c
                            };
                          return console.log(u + " - event", n, l), ("desktop" === n ? e.sendMouseEvent(l) : e.sendViewportMouseEvent(l, {
                            markPage: function() {
                              return M.default.ask("PANEL_TOGGLE_HIGHLIGHT_VIEWPORT", {
                                on: !0
                              }).then((function() {
                                return Object(oe.delay)((function() {}), 200)
                              }))
                            },
                            unmarkPage: function() {
                              return M.default.ask("PANEL_TOGGLE_HIGHLIGHT_VIEWPORT", {
                                on: !1
                              }).then((function() {
                                return Object(oe.delay)((function() {}), 200)
                              }))
                            },
                            needCalibration: function() {
                              return M.default.ask("PANEL_XCLICK_NEED_CALIBRATION", {}).catch((function(e) {
                                return !0
                              }))
                            },
                            withDownloadBarHidden: function(e) {
                              var t = function() {
                                return M.default.ask("PANEL_ENABLE_DOWNLOAD_BAR", {}).catch((function(e) {
                                  return !0
                                }))
                              };
                              return M.default.ask("PANEL_DISABLE_DOWNLOAD_BAR", {}).catch((function(e) {
                                return !0
                              })).then((function() {
                                return e()
                              })).then((function(e) {
                                return t().then((function() {
                                  return e
                                }))
                              }), (function(e) {
                                return t().then((function() {
                                  throw e
                                }))
                              }))
                            }
                          })).then((function(e) {
                            if (!e) throw new Error("Failed to " + u + " " + n + " coordiates at [" + a.x + ", " + a.y + "]");
                            return ut({}, s, {
                              byPass: !0
                            })
                          }))
                        }))
                      }))
                    }));
                  case "captureDesktopScreenshot":
                    var Ct = Object(Ke.getNativeCVAPI)(),
                      Tt = d && d.trim(),
                      _t = Tt && Tt.length > 0 ? Tt : void 0,
                      Ot = _t && function(e) {
                        return !/[\\/]/.test(e)
                      }(_t) ? function(e) {
                        return Ct.readFileAsBlob(e).then((function(e) {
                          return Object(le.getStorageManager)().getScreenshotStorage().overwrite(Tt, e).then((function() {
                            t.dispatch(I.listScreenshots()), t.dispatch(I.addLog("info", "desktop screenshot saved to screenshot storage with file name '" + Tt + "'"))
                          }))
                        }))
                      } : function(e) {
                        t.dispatch(I.addLog("info", "desktop screenshot saved to hard drive at '" + e + "'"))
                      };
                    return Ct.captureDesktop({
                      path: _t
                    }).then(Ot).then((function() {
                      return {
                        byPass: !0
                      }
                    }));
                  default:
                    return
          }
        }
      },
      wt = function(e) {
        var t = e.store,
          r = e.vars;
        return function(e, n) {
          var a = Object(le.getStorageManager)().getCSVStorage(),
            o = e.cmd,
            i = e.target,
            s = e.value,
            c = function(e) {
              return a.exists(e).then((function(t) {
                if (!t) {
                  r.set({
                    "!CsvReadStatus": "FILE_NOT_FOUND"
                  }, !0);
                  var n = "csv file '" + e + "' does not exist";
                  throw Object(le.getStorageManager)().isBrowserMode() && (lt.posix.isAbsolute(e) || lt.win32.isAbsolute(e)) && (n += ". Full path works only in hard-drive mode."), new Error(n)
                }
              }))
            };
          switch (o) {
            case "csvRead":
              return s && s.length > 0 && t.dispatch(I.addLog("warning", "csvRead: Value field should be empty (not used)")), c(i).then((function() {
                return a.read(i, "Text").then(je).then((function(e) {
                  var t = r.get("!CsvReadLineNumber") - 1,
                    n = e[t];
                  if (t >= e.length) throw r.set({
                    "!CsvReadStatus": "END_OF_FILE"
                  }, !0), new Error("end of csv file reached");
                  return r.set({
                    "!CsvReadStatus": "OK",
                    "!CsvReadMaxRow": e.length
                  }, !0), r.clear(/^!COL\d+$/i), n.forEach((function(e, t) {
                    r.set(ht({}, "!COL" + (t + 1), e))
                  })), {
                    isFlowLogic: !0
                  }
                }))
              }));
            case "csvSave":
              var l = r.get("!CSVLINE");
              if (!l || !l.length) throw new Error("No data to save to csv");
              return Le([l]).then((function(e) {
                var t = /\.csv$/i.test(i) ? i : i + ".csv";
                return a.exists(t).then((function(r) {
                  return r ? a.read(t, "Text").then((function(r) {
                    var n = (r + "\n" + e).replace(/\n+/g, "\n");
                    return a.overwrite(t, new Blob([n]))
                  })) : a.write(t, new Blob([e]))
                }))
              })).then((function() {
                r.clear(/^!CSVLINE$/), t.dispatch(I.listCSV())
              })).then((function() {
                return {
                  isFlowLogic: !0
                }
              }));
            case "csvReadArray":
              if (!s || !s.length) throw new Error("Please provide variable name as value");
              return c(i).then((function() {
                return a.read(i, "Text").then(je).then((function(e) {
                  return r.set({
                    "!CsvReadStatus": !0,
                    "!CsvReadMaxRow": e.length
                  }, !0), {
                    byPass: !0,
                    vars: ht({}, s, e)
                  }
                }), (function(e) {
                  return r.set({
                    "!CsvReadStatus": !1
                  }, !0), Promise.reject(e)
                }))
              }));
            case "csvSaveArray":
              if (!s || !s.length) throw new Error("Please provide csv file name as value");
              if (!i || !i.length) throw new Error("Please provide array variable name as target");
              var u = r.get(i);
              if (!u) throw new Error("No variable found with name '" + i + "'");
              if (!(Array.isArray(u) && Array.from(u).every((function(e) {
                  return Array.isArray(e)
                })))) throw new Error("Array must be two dimensional array");
              return Le(u).then((function(e) {
                var t = /\.csv$/i.test(s) ? s : s + ".csv";
                return a.overwrite(t, new Blob([e]))
              })).then((function() {
                t.dispatch(I.listCSV())
              })).then((function() {
                return {
                  isFlowLogic: !0
                }
              }));
            default:
              return
          }
        }
      },
      Et = function(e) {
        var t = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "main",
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              n = function(e) {
                return -1 !== ["TRUE", "FALSE"].indexOf((e + "").toUpperCase())
              },
              a = ge({
                isInvalidInternalVar: function(e) {
                  return 0 === e.indexOf("!") && "!TIMEOUT_PAGELOAD" !== e && "!TIMEOUT_WAIT" !== e && "!TIMEOUT_MACRO" !== e && "!TIMEOUT_DOWNLOAD" !== e && "!REPLAYSPEED" !== e && "!LOOP" !== e && "!TESTSUITE_LOOP" !== e && "!URL" !== e && "!MACRONAME" !== e && "!RUNTIME" !== e && "!CSVLINE" !== e && "!CSVLINE" !== e && "!LASTCOMMANDOK" !== e && "!ERRORIGNORE" !== e && "!CSVREADLINENUMBER" !== e && "!CSVREADSTATUS" !== e && "!CSVREADMAXROW" !== e && "!CLIPBOARD" !== e && "!STATUSOK" !== e && "!WAITFORVISIBLE" !== e && "!IMAGEX" !== e && "!IMAGEY" !== e && "!IMAGEWIDTH" !== e && "!IMAGEHEIGHT" !== e && "!VISUALSEARCHAREA" !== e && "!STOREDIMAGERECT" !== e && "!STRINGESCAPE" !== e && "!CMD_VAR1" !== e && "!CMD_VAR2" !== e && "!CMD_VAR3" !== e && "!OCRLANGUAGE" !== e && "!OCRENGINE" !== e && "!OCRSCALE" !== e && "!OCRX" !== e && "!OCRY" !== e && "!BROWSER" !== e && "!OS" !== e && "!TIMES" !== e && "!FOREACH" !== e && "!CVSCOPE" !== e && "!XRUN_EXITCODE" !== e && "!PROXY_EXEC_COUNT" !== e && "!GLOBAL_TESTSUITE_STOP_ON_ERROR" !== e && "!LAST_DOWNLOADED_FILE_NAME" !== e && !/^!COL\d+$/i.test(e)
                },
                readonly: ["!LOOP", "TESTSUITE_LOOP", "!URL", "!MACRONAME", "!RUNTIME", "!LASTCOMMANDOK", "!CSVREADSTATUS", "!CSVREADMAXROW", "!VISUALSEARCHAREA", "!BROWSER", "!OS", "!CVSCOPE", "!XRUN_EXITCODE", "!PROXY_EXEC_COUNT", "!TIMES", "!FOREACH", "!LAST_DOWNLOADED_FILE_NAME"].concat(ve(ye)),
                typeCheck: {
                  "!REPLAYSPEED": function(e) {
                    return -1 !== ["SLOW", "MEDIUM", "FAST"].indexOf((e || "").toUpperCase())
                  },
                  "!TIMEOUT_PAGELOAD": function(e) {
                    return parseInt(e, 10) >= 0
                  },
                  "!TIMEOUT_WAIT": function(e) {
                    return parseInt(e, 10) >= 0
                  },
                  "!TIMEOUT_MACRO": function(e) {
                    return parseInt(e, 10) >= 0
                  },
                  "!TIMEOUT_DOWNLOAD": function(e) {
                    return parseInt(e, 10) >= 0
                  },
                  "!CSVREADLINENUMBER": function(e) {
                    return parseInt(e, 10) >= 0
                  },
                  "!OCRLANGUAGE": function(e) {
                    return Object(me.isValidOCRLanguage)(e)
                  },
                  "!OCRENGINE": function(e) {
                    return -1 !== [1, 2].indexOf(parseInt(e, 10))
                  },
                  "!OCRSCALE": n,
                  "!OCRX": function(e) {
                    return parseInt(e, 10) >= 0
                  },
                  "!OCRY": function(e) {
                    return parseInt(e, 10) >= 0
                  },
                  "!ERRORIGNORE": n,
                  "!STATUSOK": n,
                  "!WAITFORVISIBLE": n,
                  "!STRINGESCAPE": n,
                  "!GLOBAL_TESTSUITE_STOP_ON_ERROR": n,
                  "!CVSCOPE": function(e) {
                    return -1 !== ["desktop", "browser"].indexOf(e)
                  }
                },
                normalize: function(e, t) {
                  switch (e.toUpperCase()) {
                    case "!ERRORIGNORE":
                    case "!STATUSOK":
                    case "!WAITFORVISIBLE":
                    case "!STRINGESCAPE":
                    case "!GLOBAL_TESTSUITE_STOP_ON_ERROR":
                    case "!OCRSCALE":
                      return function(e) {
                        return "true" === e || "false" !== e && e
                      }(t);
                    case "!TIMEOUT_PAGELOAD":
                    case "!TIMEOUT_WAIT":
                    case "!TIMEOUT_MACRO":
                    case "!TIMEOUT_DOWNLOAD":
                    case "!OCRENGINE":
                      return parseFloat(t);
                    default:
                      return t
                  }
                }
              }, t),
              o = r,
              i = new pe.Registry({
                process: function(e, t, r) {
                  return e(t)
                }
              }),
              s = function() {
                return i.fire("change", {
                  vars: ge({}, o)
                })
              },
              c = {
                reset: function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  if (e.keepGlobal) {
                    var t = Object.keys(o).reduce((function(e, t) {
                      return (/^!?global/i.test(t) || /^!TESTSUITE_LOOP$/i.test(t)) && (e[t] = o[t]), e
                    }), {});
                    o = t
                  } else o = {};
                  s()
                },
                render: function(e, t) {
                  var r = t && t.withHashNotation ? [Se, 3, 4] : [xe, 2, 3],
                    n = fe(r, 3),
                    a = n[0],
                    o = n[1],
                    i = n[2],
                    s = t && t.shouldStringify ? function(e) {
                      return JSON.stringify(e)
                    } : he.id;
                  return c.replaceAllVars({
                    str: e,
                    reg: a,
                    decorate: s,
                    getVarName: function(e) {
                      return e[o]
                    },
                    getSubstring: function(e) {
                      return e[i]
                    }
                  })
                },
                replaceAllVars: function(e) {
                  var t = e.str,
                    r = e.reg,
                    n = e.getVarName,
                    a = void 0 === n ? function(e) {
                      return e[1]
                    } : n,
                    o = e.getSubstring,
                    i = void 0 === o ? function(e) {
                      return e[2]
                    } : o,
                    s = e.decorate,
                    l = void 0 === s ? function(e) {
                      return e
                    } : s;
                  return t.replace(r, (function() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = (a(t) || "").toUpperCase(),
                      o = Ce(i(t)).map((function(e) {
                        return c.render(e)
                      }));
                    if (be(n)) return t[0];
                    var s = c.getVarForRender(n),
                      u = o.reduce((function(e, t, r) {
                        if (null == e) throw new Error("" + n + Te(o.slice(0, r)) + " is " + e);
                        return e[t]
                      }), s);
                    return l(u, t)
                  }))
                },
                getVarForRender: function(e) {
                  var t = (e || "").toUpperCase();
                  if (t in o) return o[t];
                  if (/^!cmd_var(1|2|3)$/i.test(t)) return "NOT_SET";
                  throw /^!/.test(t) ? new Error('Internal variable "' + t + '" not supported') : new Error('variable "' + t + '" is not defined')
                },
                get: function(e) {
                  return o[e.toUpperCase()]
                },
                set: function(e, t) {
                  Object.keys(e).forEach((function(r) {
                    var n = r.trim();
                    if (0 !== n.length) {
                      Ee(n);
                      var i = n.toUpperCase();
                      if (0 !== i.length) {
                        if (/^!CSVLINE$/i.test(i)) {
                          var s = c.get("!CSVLINE");
                          return void 0 === s ? s = [] : Array.isArray(s) || (s = [s]), s.push(e[r]), void(o["!CSVLINE"] = s)
                        }
                        if (!t && -1 !== a.readonly.indexOf(i)) throw new Error("Cannot write to readony variable '" + r + "'");
                        if (a.isInvalidInternalVar(i)) throw new Error("Not allowed to write to '" + r + "'");
                        if (a.typeCheck[i] && !a.typeCheck[i](e[r])) throw new Error("Value '" + e[r] + "' is not supported for variable \"" + i + '"');
                        o[i] = a.normalize(r, e[r])
                      }
                    }
                  })), s()
                },
                clear: function(e) {
                  Object.keys(o).forEach((function(t) {
                    e.test(t) && delete o[t]
                  })), s()
                },
                isReadOnly: function(e) {
                  var t = e && e.toUpperCase ? e.toUpperCase() : "";
                  return -1 !== a.readonly.indexOf(t)
                },
                dump: function() {
                  return ge({}, o)
                },
                onChange: function(e) {
                  return i.add("change", e),
                    function() {
                      return i.remove("change", e)
                    }
                }
              };
            return we[e] = c, c
          }("main", {}, {
            "!TESTSUITE_LOOP": 1
          }),
          r = Object(Ze.createMacroCallStack)({
            getCurrentMacroRunningStatus: function() {
              var t = s.getState(),
                r = e.getState();
              return {
                playerState: t,
                commandResults: Object(Qe.getCommandResults)({
                  count: t.resources.length,
                  doneIndices: Object(te.getDoneCommandIndices)(r),
                  errorIndices: Object(te.getErrorCommandIndices)(r)
                }),
                status: Qe.MacroStatus.Running,
                nextIndex: t.nextIndex,
                interpreterState: n.backupState()
              }
            },
            updateSelectedMacro: function(t, r) {
              return e.dispatch(I.editTestCase(t.id))
            },
            restorePlayerState: function(t, r) {
              var a = r.playerState,
                o = r.interpreterState,
                i = void 0 === o ? Object(he.clone)(Re.DefaultState) : o;
              s.setState(a), e.dispatch(I.setPlayerState({
                nextCommandIndex: a.nextIndex
              })), n.restoreState(i)
            },
            playMacro: function(e, t, r) {
              var n = r.isBottom,
                a = r.isResume,
                o = r.frameId,
                i = ut({}, t.playerState);
              if (i.noEndEvent = !n, i.extra = ut({}, i.extra || {}, {
                  frameId: o,
                  macroId: e.id,
                  isBottomFrame: n,
                  isBackFromCalling: a
                }), a) return s.setState(i), s.__setNext(t.nextIndex), s.play(s.getState());
              var c = oe.and.apply(void 0, pt(i.resources.map((function(e) {
                  return Object(nt.isExtensionResourceOnlyCommand)(e.cmd)
                })))),
                l = ut({}, i, {
                  needDelayAfterLoop: c
                });
              return s.play(l)
            }
          }),
          n = new Re({
            run: yt({
              vars: t,
              store: e,
              getTcPlayer: function() {
                return s
              },
              getInterpreter: function() {
                return n
              }
            })
          }),
          a = Object(He.getOcrCommandCounter)({
            initial: 0,
            getMax: function() {
              var t = e.getState().config.xmodulesStatus,
                r = void 0 === t ? "unregistered" : t;
              switch (r) {
                case "unregistered":
                  return E.a.xmodulesLimit.unregistered.ocrCommandCount;
                case "free":
                  return E.a.xmodulesLimit.free.ocrCommandCount;
                case "pro":
                  return E.a.xmodulesLimit.pro.ocrCommandCount;
                default:
                  throw new Error("Unsupported xmodulesStatus '" + r + "'")
              }
            },
            onMax: function(e, t, r) {
              throw new Error("OCR conversion limit reached")
            }
          }),
          o = new We.Counter({
            initial: 0,
            getMax: function() {
              var t = e.getState().config.xmodulesStatus,
                r = void 0 === t ? "unregistered" : t;
              switch (r) {
                case "unregistered":
                  return E.a.xmodulesLimit.unregistered.xCommandCount;
                case "free":
                  return E.a.xmodulesLimit.free.xCommandCount;
                case "pro":
                  return E.a.xmodulesLimit.pro.xCommandCount;
                default:
                  throw new Error("Unsupported xmodulesStatus '" + r + "'")
              }
            },
            onMax: function(e, t, r) {
              throw new Error("XClick/XMove/XType " + t + " commands limit reached")
            }
          }),
          i = new We.Counter({
            initial: 0,
            getMax: function() {
              var t = e.getState().config.xmodulesStatus,
                r = void 0 === t ? "unregistered" : t;
              switch (r) {
                case "unregistered":
                  return E.a.xmodulesLimit.unregistered.proxyExecCount;
                case "free":
                  return E.a.xmodulesLimit.free.proxyExecCount;
                case "pro":
                  return E.a.xmodulesLimit.pro.proxyExecCount;
                default:
                  throw new Error("Unsupported xmodulesStatus '" + r + "'")
              }
            },
            onMax: function(e, t, r) {
              throw new Error("PROXY " + t + " commands limit reached")
            }
          }),
          s = Ct({
            store: e,
            vars: t,
            interpreter: n,
            xCmdCounter: o,
            ocrCmdCounter: a,
            proxyCounter: i
          });
        Tt({
          store: e,
          vars: t,
          tcPlayer: s,
          xCmdCounter: o,
          ocrCmdCounter: a,
          proxyCounter: i
        });
        ! function(e) {
          e.store;
          var t = e.vars;
          Object(tt.getMacroMonitor)((function(e, r, n, a) {
            switch (e) {
              case tt.MacroParamsProviderType.Constructor:
                switch (r) {
                  case rt.MacroInspector.Countdown:
                    return [function() {
                      Object(ee.b)().stopWithError(new Error("macro '" + Object(Ze.getMacroCallStack)().peek().resource.name + "' timeout " + t.get("!TIMEOUT_MACRO") + "s (change the value in the settings if needed)"))
                    }];
                  case rt.MacroInspector.Timer:
                  case rt.MacroInspector.LoopTimer:
                  default:
                    return []
                }
                case tt.MacroParamsProviderType.Restart:
                  switch (r) {
                    case rt.MacroInspector.Countdown:
                      return [1e3 * t.get("!TIMEOUT_MACRO"), !0];
                    case rt.MacroInspector.Timer:
                    case rt.MacroInspector.LoopTimer:
                    default:
                      return []
                  }
            }
          }))
        }({
          vars: t,
          store: e
        }), r.on(et.CallStackEvent.BeforeRun, (function(t) {
          var r = t[t.length - 1].name,
            n = t.slice(0, -1).map((function(e) {
              return "'" + e.name + "'"
            }));
          n.length > 0 && e.dispatch(I.addLog("status", "Running '" + r + "', called by " + n.join(" > ")))
        })), r.on(et.CallStackEvent.AfterReturn, (function(t) {
          var r = t[t.length - 1],
            n = r.name,
            a = r.frameId,
            o = t.slice(0, -1).map((function(e) {
              return "'" + e.name + "'"
            }));
          Object(tt.getMacroMonitor)().removeTarget(a), o.length > 0 && e.dispatch(I.addLog("status", "Finished running '" + n + "', returning to " + o.join(" > ")))
        })), M.default.onAsk((function(e, r) {
          switch (e) {
            case "DOWNLOAD_COMPLETE":
              var n = r ? lt.default.basename(r.filename) : null;
              return !!n && (t.set({
                "!LAST_DOWNLOADED_FILE_NAME": n
              }, !0), !0)
          }
        }))
      },
      xt = function(e) {
        var t = e.command,
          r = e.state,
          n = e.store,
          a = e.vars,
          o = e.preRun,
          i = /!clipboard/i.test(t.target + ";" + t.value) ? M.default.ask("GET_CLIPBOARD").then((function(e) {
            return {
              useClipboard: !0,
              clipboard: e
            }
          })) : Promise.resolve({
            useClipboard: !1
          });
        if (de.a.isFirefox()) switch (t.cmd) {
          case "onDownload":
            n.dispatch(I.addLog("warning", "onDownload - changing file names not supported by Firefox extension api yet"))
        }
        switch (t.cmd) {
          case "XType":
            if (t.value && t.value.length > 0) throw new Error('XType currently doesn\'t use the "Value" field')
        }
        return i.then((function(e) {
          var n = e.useClipboard,
            i = e.clipboard,
            s = void 0 === i ? "" : i;
          n && a.set({
            "!CLIPBOARD": s
          }), r.extra.isBottomFrame && a.set({
            "!LOOP": r.loopsCursor
          }, !0), a.set({
            "!RUNTIME": Object(he.milliSecondsToStringInSecond)(Object(tt.getMacroMonitor)().getDataFromInspector(Object(Ze.getMacroCallStack)().bottom().id, rt.MacroInspector.LoopTimer))
          }, !0), "open" === t.cmd && (t = ut({}, t, {
            href: r.startUrl
          })), t.target && /^#efp$/i.test(t.target.trim()) && (t.target = "#elementfrompoint (${!imageX}, ${!imageY})");
          var c = -1 !== ["executeScript", "executeScript_Sandbox", "executeAsyncScript", "executeAsyncScript_Sandbox", "if_v2", "while_v2", "gotoIf_v2", "elseif", "repeatIf"].indexOf(t.cmd);
          return "comment" !== t.cmd && ["target", "value"].forEach((function(e) {
            if (void 0 !== t[e]) {
              var r = "storeEval" === t.cmd && "target" === e || "gotoIf" === t.cmd && "target" === e || "if" === t.cmd && "target" === e || "while" === t.cmd && "target" === e,
                n = r ? {
                  withHashNotation: !0
                } : {};
              n.shouldStringify = r || c, t = ut({}, t, ht({}, e, a.render(function(e, t, r) {
                var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                return n ? -1 !== ["gotoIf", "if", "while", "gotoIf_v2", "if_v2", "while_v2", "XType", "elseif", "repeatIf", "executeScript", "executeScript_Sandbox", "executeAsyncScript", "executeAsyncScript_Sandbox"].indexOf(t.cmd) && "target" === r || -1 !== ["XRun", "XRunAndWait"].indexOf(t.cmd) ? e : [
                  [/\\n/g, "\n"],
                  [/\\t/g, "\t"],
                  [/\\b/g, "\b"],
                  [/\\f/g, "\f"],
                  [/\\t/g, "\t"],
                  [/\\v/g, "\v"]
                ].reduce((function(e, t) {
                  var r = dt(t, 2),
                    n = r[0],
                    a = r[1];
                  return e.replace(n, a)
                }), e) : e
              }("type" === t.cmd ? t[e] : t[e].trim(), t, e, a.get("!StringEscape")), n)))
            }
          })), t = Object(oe.updateIn)(["extra"], (function(e) {
            return ut({}, e || {}, {
              timeoutPageLoad: a.get("!TIMEOUT_PAGELOAD"),
              timeoutElement: a.get("!TIMEOUT_WAIT"),
              timeoutDownload: a.get("!TIMEOUT_DOWNLOAD"),
              lastCommandOk: a.get("!LASTCOMMANDOK"),
              errorIgnore: !!a.get("!ERRORIGNORE"),
              waitForVisible: !!a.get("!WAITFORVISIBLE")
            })
          }), t), o(t, r, (function(e) {
            var t = "pause" === e.cmd ? -1 : null;
            return function(e, t) {
              var r = "open" === t.cmd,
                n = /^\s*tab=open\s*$/i.test(t.target),
                a = r || n;
              return Object(oe.retry)((function() {
                var t = function() {
                  (new Date).getTime();
                  var e = !1,
                    t = null,
                    r = function r() {
                      return a ? new Promise((function() {})) : (Ve()("start to send heart beat to background"), e ? Promise.resolve() : M.default.ask("PANEL_HEART_BEAT", {}, 300).then((function(e) {
                        if (-1 === e) return new Promise((function() {}));
                        if (e === t) throw new Error("lost background heart beat when running command");
                        return t = e, Object(oe.delay)((function() {}), 3e3).then(r)
                      }), (function(e) {
                        throw Ve.a.error("lost background heart beart!!", e.stack), new Error("lost background heart beat when running command")
                      })))
                    };
                  return r.stop = function() {
                    Ve()("stopping background heart beat"), e = !0
                  }, r
                }();
                return Promise.race([e().then((function(e) {
                  return t.stop(), e
                })).catch((function(e) {
                  throw t.stop(), e
                })), t()])
              }), {
                timeout: 999999,
                shouldRetry: function(e, t) {
                  return e && e.message && -1 !== e.message.indexOf("lost background heart beat when running command") && t < 10
                },
                retryInterval: function(e, t) {
                  return Math.max(5e3, Math.min(2e4, 1.2 * t))
                }
              })()
            }((function() {
              return M.default.ask("PANEL_RUN_COMMAND", {
                command: e,
                playUID: r.playUID
              }, t)
            }), e)
          }))
        }))
      };

    function St(e) {
      return /player: paused or stopped/.test(e)
    }
    var Ct = function(e) {
        var t = e.store,
          r = e.vars,
          n = e.interpreter,
          o = e.xCmdCounter,
          i = (e.ocrCmdCounter, e.proxyCounter),
          s = null,
          c = Object(ee.b)({
            prepare: function(e) {
              var t;
              return e.extra.isBottomFrame && !e.extra.isBackFromCalling && (r.reset({
                keepGlobal: !0
              }), r.set(e.public.scope || {}, !0), r.set({
                "!StatusOK": !0,
                "!WaitForVisible": !1,
                "!StringEscape": !0,
                "!IMAGEX": 0,
                "!IMAGEY": 0,
                "!OCRX": 0,
                "!OCRY": 0,
                "!BROWSER": de.a.isFirefox() ? "firefox" : "chrome",
                "!OS": (t = window.navigator.userAgent, /windows/i.test(t) ? "windows" : /mac/i.test(t) ? "mac" : "linux")
              }, !0)), e.extra.isBackFromCalling || (n.reset(), n.preprocess(e.resources)), M.default.ask("PANEL_START_PLAYING", {
                url: e.startUrl,
                shouldNotActivateTab: !0
              })
            },
            run: function(e, a) {
              return xt({
                command: e,
                state: a,
                store: t,
                vars: r,
                preRun: function(e, t, r) {
                  return new Promise((function(a, c) {
                    /^(XType|XClick|XMove|XClickRelative|XMoveRelative)$/i.test(e.cmd) && o.inc(), "setProxy" === e.cmd && i.inc(), n.run(e, t.nextIndex).then((function(t) {
                      var n = t.byPass,
                        a = t.isFlowLogic,
                        o = t.nextIndex;
                      t.resetVars;
                      return "onError" === e.cmd && (s = e), n ? Promise.resolve(t) : a ? Promise.resolve({
                        nextIndex: o
                      }) : r(e)
                    })).then(a, c)
                  }))
                }
              }).catch((function(e) {
                if (r.get("!ERRORIGNORE")) return {
                  log: {
                    error: e.message
                  }
                };
                if (s) {
                  var o = s.value && s.value.trim(),
                    i = s.target && s.target.trim();
                  if (/^#restart$/i.test(i)) throw t.dispatch(I.addLog("status", "onError - about to restart")), e.restart = !0, e;
                  if (/^#goto$/i.test(i)) return t.dispatch(I.addLog("status", "onError - about to goto label '" + o + "'")), Promise.resolve({
                    log: {
                      error: e.message
                    },
                    nextIndex: n.commandIndexByLabel(o)
                  })
                }
                var c = St(e.message);
                if (a.mode === ee.a.C.MODE.LOOP && a.loopsCursor < a.loopsEnd && "continue_next_loop" === t.getState().config.onErrorInLoop) return c ? {
                  nextIndex: a.resources.length
                } : {
                  log: {
                    error: e.message
                  },
                  nextIndex: a.resources.length
                };
                throw r.set({
                  "!LastCommandOK": !1,
                  "!StatusOK": !1
                }, !0), e
              }))
            },
            handleResult: function(e, a, o) {
              var i = [];
              if (e && e.pageUrl && r.set({
                  "!URL": e.pageUrl
                }, !0), e && e.vars) {
                var s = Object(oe.objMap)((function(e) {
                  if (!e || !e.__undefined__) return e
                }), e.vars);
                Ve()("set vars", s);
                try {
                  r.set(s);
                  var l = Object.keys(e.vars).find((function(e) {
                    return /!clipboard/i.test(e)
                  }));
                  if (l && i.push(M.default.ask("SET_CLIPBOARD", {
                      value: e.vars[l]
                    })), Object.keys(e.vars).find((function(e) {
                      return /!timeout_macro/i.test(e)
                    }))) {
                    var u = Object(Ze.getMacroCallStack)().peek().id;
                    Object(tt.getMacroMonitor)().restartInspector(u, rt.MacroInspector.Countdown)
                  }
                } catch (e) {
                  return Promise.reject(e)
                }
              }
              var d = !1;
              if (e && e.log && (e.log.info && (t.dispatch(I.addLog("echo", e.log.info, e.log.options)), e.log.options && e.log.options.notification && M.default.ask("PANEL_NOTIFY_ECHO", {
                  text: e.log.info
                })), e.log.warning && t.dispatch(I.addLog("warning", e.log.warning, e.log.options)), e.log.error && !St(e.log.error) && (t.dispatch(I.addPlayerErrorCommandIndex(o.nextIndex)), t.dispatch(I.addLog("error", e.log.error, {
                  ignored: !0
                })), d = !0)), "echo" !== a.cmd && r.set({
                  "!LastCommandOK": !d
                }, !0), d && r.set({
                  "!StatusOK": !1
                }, !0), e && e.screenshot && (t.dispatch(I.addLog("info", "a new screenshot captured")), Object(le.getStorageManager)().getScreenshotStorage().getLink(e.screenshot.name).then((function(t) {
                  return ut({}, e.screenshot, {
                    url: t
                  })
                })).then((function(e) {
                  t.dispatch(I.listScreenshots())
                })).catch((function(e) {
                  Ve.a.error("screenshot obj error 1", e), Ve.a.error("screenshot obj error stack", e.stack)
                }))), e && e.control) switch (e.control.type) {
                case "pause":
                  return M.default.ask("PANEL_NOTIFY_AUTO_PAUSE", {}), Object(ee.b)({
                    name: "testCase"
                  }).pause();
                default:
                  throw new Error("Control type '" + e.control.type + "' not supported yet")
              }
              if (/^(fast|medium|slow)$/i.test(r.get("!REPLAYSPEED"))) {
                var m = r.get("!REPLAYSPEED").toUpperCase();
                c.setPostDelay({
                  FAST: 1,
                  MEDIUM: 300,
                  SLOW: 2e3
                } [m])
              }
              return e && void 0 !== e.nextIndex ? Promise.all(i).then((function() {
                return e.nextIndex
              })) : Promise.all(i).then((function() {
                return n.postRun(a, o.nextIndex, e)
              })).then((function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e.nextIndex
              }))
            }
          }, {
            preDelay: 0
          });
        return c.on("BREAKPOINT", (function() {
          M.default.ask("PANEL_NOTIFY_BREAKPOINT", {})
        })), c.on("LOOP_START", (function(e) {
          var t = e.loopsCursor,
            n = e.extra;
          n.isBottomFrame && r.set({
            "!CsvReadLineNumber": t,
            "!visualSearchArea": "viewport",
            "!StatusOK": !0
          }, !0);
          var a = n.frameId;
          Object(tt.getMacroMonitor)().restartInspector(a, rt.MacroInspector.LoopTimer), Object(tt.getMacroMonitor)().restartInspector(a, rt.MacroInspector.Countdown), n.isBottomFrame && (s = null)
        })), c.on("LOOP_RESTART", (function(e) {
          var r = e.currentLoop;
          e.loopsCursor;
          M.default.ask("PANEL_STOP_PLAYING", {}), M.default.ask("PANEL_START_PLAYING", {
            shouldNotActivateTab: !0
          }), t.dispatch(I.addLog("status", "Current loop: " + r))
        })), c.on("START", (function(e) {
          var r = e.title,
            n = e.extra;
          e.loopsCursor;
          Ve()("START"), t.getState().player.mode === ae.PLAYER_MODE.TEST_CASE && n.isBottomFrame && !n.isBackFromCalling && (o.reset(), i.reset()), t.dispatch(I.startPlaying()), t.dispatch(I.setPlayerState({
            status: ae.PLAYER_STATUS.PLAYING,
            nextCommandIndex: null
          })), n.isBackFromCalling || t.dispatch(I.updateMacroExtra(Object(te.getCurrentMacroId)(t.getState()), {
            doneCommandIndices: [],
            errorCommandIndices: []
          })), t.dispatch(I.addLog("status", "Playing macro " + r))
        })), c.on("PREPARED", (function(e) {
          var t = e.extra;
          if (!t.isBackFromCalling) {
            var r = t.frameId;
            Object(tt.getMacroMonitor)().addTarget(r)
          }
        })), c.on("PAUSED", (function() {
          Ve()("PAUSED"), t.dispatch(I.setPlayerState({
            status: ae.PLAYER_STATUS.PAUSED
          })), t.dispatch(I.addLog("status", "Macro paused")), Object(tt.getMacroMonitor)().pause()
        })), c.on("RESUMED", (function() {
          Ve()("RESUMED"), t.dispatch(I.setPlayerState({
            status: ae.PLAYER_STATUS.PLAYING
          })), t.dispatch(I.addLog("status", "Macro resumed")), Object(tt.getMacroMonitor)().resume()
        })), c.on("END", (function(e) {
          var n;
          Ve()("END", e), M.default.ask("PANEL_STOP_PLAYING", {}), t.dispatch(I.stopPlaying());
          var o = t.getState(),
            i = null !== o.player.nextCommandIndex ? {
              lastNextCommandIndex: o.player.nextCommandIndex
            } : {};
          t.dispatch(I.setPlayerState(ut({
            status: ae.PLAYER_STATUS.STOPPED,
            stopReason: e.reason,
            nextCommandIndex: null,
            timeoutStatus: null
          }, i))), r.get("!PROXY_EXEC_COUNT") > 0 && t.getState().config.turnOffProxyAfterReplay && (gt(null), t.dispatch(I.addLog("info", "Proxy reset to none")));
          var s = e.extra && e.extra.id;
          switch (e.reason) {
            case c.C.END_REASON.COMPLETE:
              s && t.dispatch(I.updateMacroPlayStatus(s, st.MacroResultStatus.Success)), a.a.success("Macro completed running", 1.5);
              break;
            case c.C.END_REASON.ERROR:
              var l = Object(Ze.getMacroCallStack)().toArray(),
                u = l.length;
              l.forEach((function(e, r) {
                var n = r === u - 1 ? st.MacroResultStatus.Error : st.MacroResultStatus.ErrorInSub;
                t.dispatch(I.updateMacroPlayStatus(e.resource.id, n))
              })), a.a.error("Macro encountered some error", 1.5)
          }
          var d = (ht(n = {}, c.C.END_REASON.COMPLETE, "Macro completed"), ht(n, c.C.END_REASON.ERROR, "Macro failed"), ht(n, c.C.END_REASON.MANUAL, "Macro was stopped manually"), n),
            m = e.extra.frameId,
            p = Object(tt.getMacroMonitor)().getDataFromInspector(m, rt.MacroInspector.Timer);
          t.dispatch(I.addLog("info", d[e.reason] + " (Runtime " + Object(he.milliSecondsToStringInSecond)(p) + ")")), Object(tt.getMacroMonitor)().stopInspector(m, rt.MacroInspector.Timer), Object(tt.getMacroMonitor)().stopInspector(m, rt.MacroInspector.LoopTimer), Object(tt.getMacroMonitor)().stopInspector(m, rt.MacroInspector.Countdown), e.reason !== c.C.END_REASON.COMPLETE && e.reason !== c.C.END_REASON.ERROR || M.default.ask("PANEL_UPDATE_BADGE", ut({
            type: "play",
            blink: 5e3,
            text: e.reason === c.C.END_REASON.COMPLETE ? "done" : "err"
          }, e.reason === c.C.END_REASON.COMPLETE ? {} : {
            color: "orange"
          })), t.getState().player.mode !== ae.PLAYER_MODE.TEST_SUITE && t.dispatch(I.updateUI({
            shouldEnableDesktopAutomation: void 0
          }))
        })), c.on("TO_PLAY", (function(e) {
          var r = e.index,
            n = e.currentLoop,
            a = e.loops,
            o = e.resource,
            i = e.extra;
          Ve()("TO_PLAY", r, o, "currentLoop", n), t.dispatch(I.setPlayerState(ut({
            timeoutStatus: null,
            nextCommandIndex: r
          }, i.isBottomFrame ? {
            currentLoop: n,
            loops: a
          } : {})));
          var s = [o.cmd, o.target, o.value],
            c = [""].concat(s, [""]).join(" | ");
          t.dispatch(I.addLog("reflect", "Executing: " + c)), M.default.ask("PANEL_UPDATE_BADGE", {
            type: "play",
            text: "" + (r + 1)
          })
        })), c.on("PLAYED_LIST", (function(e) {
          var r = e.indices;
          Ve()("PLAYED_LIST", r), t.dispatch(I.updateMacroDoneCommandsIndices(Object(te.getCurrentMacroId)(t.getState()), r))
        })), c.on("ERROR", (function(e) {
          var r = e.errorIndex,
            n = e.msg,
            a = e.restart;
          Ve.a.error("command index: " + r + ", Error: " + n), t.dispatch(I.addPlayerErrorCommandIndex(r)), t.dispatch(I.addLog("error", n)), a && t.getState().player.mode === ae.PLAYER_MODE.TEST_CASE && setTimeout((function() {
            return c.replayLastConfig()
          }), 50)
        })), c.on("DELAY", (function(e) {
          var r = e.total,
            n = e.past;
          t.dispatch(I.setPlayerState({
            timeoutStatus: {
              type: "delay",
              total: r,
              past: n
            }
          }))
        })), c
      },
      Tt = function(e) {
        var t = e.store,
          r = e.vars,
          n = e.tcPlayer,
          a = e.xCmdCounter,
          o = (e.ocrCmdCounter, e.proxyCounter),
          i = new ft,
          s = new ft,
          l = {
            isPlaying: !1,
            tsId: null,
            lastErrMsg: "",
            testCasePromiseHandlers: null,
            reports: [],
            stopReason: null
          },
          u = function(e) {
            l = ut({}, l, e)
          },
          d = Object(ee.b)({
            name: "testSuite",
            prepare: function() {
              u({
                isPlaying: !0,
                reports: []
              }), r.set({
                "!TESTSUITE_LOOP": 1,
                "!GLOBAL_TESTSUITE_STOP_ON_ERROR": !1
              }, !0)
            },
            run: function(e, r) {
              var n = e.id,
                a = e.loops > 1 ? parseInt(e.loops, 10) : 1,
                o = t.getState();
              return Object(le.getStorageManager)().getMacroStorage().read(n, "Text").then((function(e) {
                var n = e && e.data.commands.find((function(e) {
                  return "open" === e.cmd.toLowerCase()
                }));
                if (!e) throw new Error("macro does not exist");
                return t.dispatch(I.editTestCase(e.id)), t.dispatch(I.playerPlay({
                  macroId: e.id,
                  title: e.name,
                  extra: {
                    id: e.id,
                    name: e.name,
                    shouldNotActivateTab: !0
                  },
                  mode: 1 === a ? ee.a.C.MODE.STRAIGHT : ee.a.C.MODE.LOOP,
                  loopsStart: 1,
                  loopsEnd: a,
                  startIndex: 0,
                  startUrl: n ? n.target : null,
                  resources: e.data.commands,
                  postDelay: 1e3 * o.config.playCommandInterval,
                  overrideScope: 0 !== r.nextIndex ? {} : r.public.scope
                })), new Promise((function(e, t) {
                  u({
                    testCasePromiseHandlers: {
                      resolve: e,
                      reject: t
                    }
                  })
                }))
              }))
            },
            handleResult: function(e, t, r) {
              return Promise.resolve(void 0)
            }
          }, {
            preDelay: 0
          });
        return d.on("START", (function(e) {
          var r = e.title,
            n = e.extra;
          Ve()("START SUITE"), i.reset(), a.reset(), o.reset(), u({
            tsId: n.id,
            isPlaying: !0,
            stopReason: null
          }), t.dispatch(I.addLog("status", "Playing test suite " + r)), t.dispatch(I.setPlayerMode(ae.PLAYER_MODE.TEST_SUITE)), t.dispatch(ne.Actions.updateTestSuite(n.id, (function(e) {
            return ut({}, e, {
              playStatus: {
                isPlaying: !0,
                currentIndex: -1,
                errorIndices: [],
                doneIndices: []
              }
            })
          })))
        })), d.on("LOOP_START", (function(e) {
          var t = e.loopsCursor;
          r.set({
            "!TESTSUITE_LOOP": t
          }, !0)
        })), d.on("LOOP_RESTART", (function(e) {
          var r = e.currentLoop;
          t.dispatch(I.addLog("status", "Current test suite loop: " + r))
        })), d.on("PAUSED", (function(e) {
          e.extra;
          Ve()("PAUSED SUITE"), t.dispatch(I.addLog("status", "Test suite paused")), n.pause()
        })), d.on("RESUMED", (function(e) {
          e.extra;
          Ve()("RESUMED SUIITE"), t.dispatch(I.addLog("status", "Test suite resumed")), n.resume()
        })), d.on("TO_PLAY", (function(e) {
          var r = e.index,
            n = e.extra;
          s.reset(), u({
            lastErrMsg: "",
            tcIndex: r
          }), t.dispatch(ne.Actions.updateTestSuite(n.id, (function(e) {
            return ut({}, e, {
              playStatus: ut({}, e.playStatus, {
                currentIndex: r
              })
            })
          })))
        })), d.on("PLAYED_LIST", (function(e) {
          var r = e.indices,
            n = e.extra;
          t.dispatch(ne.Actions.updateTestSuite(n.id, (function(e) {
            return ut({}, e, {
              playStatus: ut({}, e.playStatus, {
                doneIndices: r
              })
            })
          })))
        })), d.on("END", (function(e) {
          var a = e.reason,
            o = e.extra,
            s = e.opts;
          l.isPlaying && (r.set({
            "!TESTSUITE_LOOP": 1
          }, !0), u({
            isPlaying: !1
          }), t.dispatch(I.setPlayerMode(ae.PLAYER_MODE.TEST_CASE)), t.dispatch(ne.Actions.updateTestSuite(o.id, (function(e) {
            return ut({}, e, {
              playStatus: ut({}, e.playStatus, {
                isPlaying: !1,
                currentIndex: -1
              })
            })
          }))), t.dispatch(I.updateUI({
            shouldEnableDesktopAutomation: void 0
          })), a !== ee.a.C.END_REASON.MANUAL || s && s.tcPlayerStopped || n.stop(), setTimeout((function() {
            var e, r = l.reports.length,
              n = l.reports.filter((function(e) {
                return e.stopReason === ee.a.C.END_REASON.ERROR
              })).length,
              s = r - n,
              u = (ht(e = {}, ee.a.C.END_REASON.MANUAL, "Manually stopped"), ht(e, ee.a.C.END_REASON.COMPLETE, "OK"), ht(e, ee.a.C.END_REASON.ERROR, "Error"), e),
              d = u[l.stopReason || a],
              m = ["Test Suite name: " + o.name, "Start Time: " + i.startTime.toString(), "Overall status: " + d + ", Runtime: " + i.elapsedInSeconds(), "Macro run: " + r, "Success: " + s, "Failure: " + n, "Macro executed:"];
            t.dispatch(I.addLog("report", (function(e) {
              var t = e.renderText;
              return [c.a.createElement("span", null, m.join("\n"))].concat(pt(l.reports.map((function(e, r) {
                return c.a.createElement("div", null, e.name, "  (", u[e.stopReason], e.stopReason === ee.a.C.END_REASON.ERROR ? ": " : "", e.stopReason === ee.a.C.END_REASON.ERROR ? t({
                  type: "error",
                  text: e.errMsg,
                  stack: e.stack
                }) : null, ", Runtime: ", e.usedTime, ")")
              }))))
            })))
          }), 200))
        })), n.on("END", (function(e) {
          var n = e.reason;
          e.extra;
          if (t.getState().player.mode === ae.PLAYER_MODE.TEST_SUITE) {
            var a, o = Object(Ze.getMacroCallStack)().bottom(),
              i = Object(Ze.getMacroCallStack)().toArray(),
              c = t.getState().player.lastNextCommandIndex;
            switch (a = {
              id: o.resource.id,
              name: o.resource.name,
              errMsg: l.lastErrMsg,
              stopReason: n,
              usedTime: s.elapsedInSeconds(),
              stack: i.map((function(e, t) {
                return {
                  macroId: e.resource.id,
                  macroName: e.resource.name,
                  commandIndex: t === i.length - 1 ? c : e.runningStatus.nextIndex,
                  isSubroutine: 0 !== t
                }
              }))
            }, u({
              reports: l.reports.concat(a)
            }), n) {
              case ee.a.C.END_REASON.MANUAL:
                break;
              case ee.a.C.END_REASON.COMPLETE:
                setTimeout((function() {
                  l.testCasePromiseHandlers.resolve(!0)
                }), 10);
                break;
              case ee.a.C.END_REASON.ERROR:
                if (t.dispatch(ne.Actions.updateTestSuite(l.tsId, (function(e) {
                    return ut({}, e, {
                      playStatus: ut({}, e.playStatus, {
                        errorIndices: e.playStatus.errorIndices.concat([d.state.nextIndex])
                      })
                    })
                  }))), u({
                    stopReason: ee.a.C.END_REASON.ERROR
                  }), r.get("!GLOBAL_TESTSUITE_STOP_ON_ERROR")) {
                  l.testCasePromiseHandlers.reject(new Error), d.stop({
                    tcPlayerStopped: !0
                  });
                  break
                }
                l.testCasePromiseHandlers.resolve(!0)
            }
          }
        })), n.on("ERROR", (function(e) {
          var r = e.msg,
            n = e.restart;
          u({
            lastErrMsg: r
          }), n && t.getState().player.mode === ae.PLAYER_MODE.TEST_SUITE && setTimeout((function() {
            return d.replayLastConfig()
          }), 50)
        })), d
      },
      _t = r(53),
      Ot = r(602),
      kt = r(603),
      Pt = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      It = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }();

    function Mt(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }

    function At(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function Rt(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var Dt, Nt, jt = ((Dt = Object.keys(me.languages).map((function(e) {
        return {
          text: me.languages[e].name,
          value: me.languages[e].lang
        }
      }))).sort((function(e, t) {
        return e.text < t.text ? -1 : e.text > t.text ? 1 : 0
      })), Dt),
      Lt = function(e) {
        function t() {
          var e, r, n;
          At(this, t);
          for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
          return r = n = Rt(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n.state = {
            showPlayLoops: !1,
            loopsStart: 1,
            loopsEnd: 3,
            xModules: [Object(ie.getXFile)(), Object(se.getXUserIO)(), Object(ce.getXDesktop)()],
            xModuleData: {},
            xFileRootDirChanged: !1,
            registerKey: "",
            websiteWhiteListText: ""
          }, n.getPlayer = function(e) {
            if (e) return Object(ee.b)({
              name: e
            });
            switch (n.props.player.mode) {
              case ae.PLAYER_MODE.TEST_CASE:
                return Object(ee.b)({
                  name: "testCase"
                });
              case ae.PLAYER_MODE.TEST_SUITE:
                return Object(ee.b)({
                  name: "testSuite"
                })
            }
          }, n.getTestCaseName = function() {
            var e = n.props.editing.meta.src;
            return e && e.name && e.name.length ? e.name : "Untitled"
          }, n.togglePlayLoopsModal = function(e) {
            n.setState({
              showPlayLoops: e
            })
          }, n.onToggleRecord = function() {
            if ("desktop" === n.props.config.cvScope) {
              var e = "Recording is only available for browser automation. Desktop automation macros are created by adding XClick and other visual commands step by step.";
              return n.props.addLog("warning", e), a.a.warn(e, 2.5)
            }
            n.props.status === ae.APP_STATUS.RECORDER ? (n.props.stopRecording(), n.props.normalizeCommands()) : n.props.startRecording(), n.setState({
              lastOperation: "record"
            })
          }, n.onClickPlayLoops = function() {
            var e = n.state,
              t = e.loopsStart,
              r = e.loopsEnd;
            if (t < 0) return a.a.error("Start value must be no less than zero", 1.5);
            if (r < t) return a.a.error("Max value must be greater than start value", 1.5);
            var o = n.getPlayer(),
              i = n.props.editing.commands,
              s = n.props.editing.meta.src,
              c = i.find((function(e) {
                return "open" === e.cmd.toLowerCase()
              }));
            n.props.playerPlay({
              macroId: s && s.id,
              loopsEnd: r,
              loopsStart: t,
              title: n.getTestCaseName(),
              extra: {
                id: s && s.id
              },
              mode: o.C.MODE.LOOP,
              startIndex: 0,
              startUrl: c ? c.target : null,
              resources: n.props.editing.commands,
              postDelay: 1e3 * n.props.config.playCommandInterval
            }), n.setState({
              lastOperation: "play"
            }), n.togglePlayLoopsModal(!1)
          }, n.onCancelPlayLoops = function() {
            n.togglePlayLoopsModal(!1), n.setState({
              loopsToPlay: 2
            })
          }, n.onChangePlayLoops = function(e, t) {
            n.setState(Mt({}, e, parseInt(t, 10)))
          }, n.onClickSave = function() {
            return Object(re.default)().save()
          }, n.playCurrentMacro = function(e) {
            var t = n.props.editing.commands,
              r = n.props.editing.meta.src,
              a = t.find((function(e) {
                return "open" === e.cmd.toLowerCase()
              }));
            n.setState({
              lastOperation: "play"
            }), n.props.playerPlay({
              macroId: r && r.id,
              title: n.getTestCaseName(),
              extra: {
                id: r && r.id
              },
              mode: Object(ee.b)().C.MODE.STRAIGHT,
              startIndex: 0,
              startUrl: a ? a.target : null,
              resources: t,
              postDelay: 1e3 * n.props.config.playCommandInterval,
              isStep: e
            })
          }, n.playCurrentLine = function() {
            var e = n.props.editing.commands,
              t = n.props.editing.meta,
              r = t.src,
              a = t.selectedIndex,
              o = -1 === a ? 0 : a || 0;
            return n.props.playerPlay({
              macroId: r && r.id,
              title: n.getTestCaseName(),
              extra: {
                id: r && r.id
              },
              mode: ee.a.C.MODE.SINGLE,
              startIndex: o,
              startUrl: null,
              resources: e,
              postDelay: 1e3 * n.props.config.playCommandInterval,
              callback: function(t, r) {
                t || o + 1 < e.length && n.props.selectCommand(o + 1, !0)
              }
            })
          }, n.checkRegisterKey = function() {
            var e, t = n.state.registerKey;
            return 15 === (e = t).length && "P" === e.charAt(2) && "8" === e.charAt(3) ? (n.props.updateConfig({
              xmodulesStatus: "pro"
            }), a.a.success("XModules Pro Plan verified"), Object(le.getStorageManager)().emit(le.StorageManagerEvent.RootDirChanged), void n.resetRegisterKey()) : function(e) {
              return 15 === e.length && ("F" === e.charAt(2) && "8" === e.charAt(3))
            }(t) ? (n.props.updateConfig({
              xmodulesStatus: "free"
            }), a.a.success("XModules Personal Plan verified"), Object(le.getStorageManager)().emit(le.StorageManagerEvent.RootDirChanged), void n.resetRegisterKey()) : function(e) {
              return "freeman" === e
            }(t) ? (n.props.updateConfig({
              xmodulesStatus: "unregistered"
            }), a.a.success("Unregistered"), Object(le.getStorageManager)().emit(le.StorageManagerEvent.RootDirChanged), void n.resetRegisterKey()) : void a.a.error("Invalid license key")
          }, Rt(n, r)
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), It(t, [{
          key: "componentDidMount",
          value: function() {
            var e = this,
              t = this.props.history;
            this.props.setRoute(t.location.pathname), this.props.history.listen((function(r, n) {
              e.props.setRoute(t.location.pathname)
            }))
          }
        }, {
          key: "componentWillReceiveProps",
          value: function(e) {
            e.ui.showSettings && !this.props.ui.showSettings && this.onShowSettings(), e.ui.showWebsiteWhiteList && !this.props.ui.showWebsiteWhiteList && this.setState({
              websiteWhiteListText: (this.props.config.websiteWhiteList || []).join("\n")
            })
          }
        }, {
          key: "initXModules",
          value: function() {
            var e = this,
              t = this.state.xModules;
            Promise.all(t.map((function(e) {
              return e.initConfig().catch((function(e) {})).then((function() {
                return e.getVersion()
              })).then((function(t) {
                return t.installed ? e.sanityCheck().then((function() {
                  return {
                    error: null
                  }
                }), (function(e) {
                  return {
                    error: e.message
                  }
                })).then((function(e) {
                  return {
                    versionInfo: t,
                    checkResult: e
                  }
                })) : {
                  versionInfo: t,
                  checkResult: null
                }
              }))
            }))).then((function(r) {
              var n = r.reduce((function(e, r, n) {
                return e[t[n].getName()] = Pt({}, r.versionInfo, {
                  checkResult: r.checkResult,
                  config: t[n].getCachedConfig()
                }), e
              }), {});
              e.setState({
                xModuleData: n,
                xFileRootDirChanged: !1
              })
            }))
          }
        }, {
          key: "isEitherXModuleInstalled",
          value: function() {
            var e = this.state.xModuleData[Object(ie.getXFile)().getName()],
              t = this.state.xModuleData[Object(se.getXUserIO)().getName()];
            return e && e.installed || t && t.installed
          }
        }, {
          key: "resetRegisterKey",
          value: function() {
            this.setState({
              registerKey: ""
            })
          }
        }, {
          key: "onShowSettings",
          value: function() {
            this.initXModules(), this.resetRegisterKey()
          }
        }, {
          key: "showSettingsModal",
          value: function() {
            this.props.updateUI({
              showSettings: !0
            })
          }
        }, {
          key: "renderPublicWebsiteWhiteList",
          value: function() {
            var e = this;
            return c.a.createElement(O.a, {
              title: "Embedded Macros Website Whitelist",
              className: "whitelist-modal",
              width: 450,
              okText: "Save",
              visible: this.props.ui.showWebsiteWhiteList,
              onCancel: function() {
                return e.props.updateUI({
                  showWebsiteWhiteList: !1
                })
              },
              onOk: function(t) {
                var r = e.state.websiteWhiteListText.split(/\n/g).map((function(e) {
                  return e.trim()
                })).filter((function(e) {
                  return e.length > 0
                }));
                return e.props.updateConfig({
                  websiteWhiteList: r
                }), e.props.updateUI({
                  showWebsiteWhiteList: !1
                }), a.a.success("Saved"), Promise.resolve(!0)
              }
            }, c.a.createElement("p", {
              style: {
                marginBottom: "10px"
              }
            }, "Allow embedded macros to run ", c.a.createElement("em", null, "without warning dialog"), ", if started from the following sites:"), c.a.createElement(B.a.TextArea, {
              placeholder: "One url per line, e. g. https://ui.vision/rpa",
              autosize: {
                minRows: 6,
                maxRows: 12
              },
              value: this.state.websiteWhiteListText,
              style: {
                resize: "vertical"
              },
              onChange: function(t) {
                return e.setState({
                  websiteWhiteListText: t.target.value
                })
              }
            }), c.a.createElement("p", {
              style: {
                color: "green",
                marginTop: "20px"
              }
            }, c.a.createElement("a", {
              style: {
                float: "right",
                marginLeft: "20px"
              },
              href: "https://ui.vision/x/idehelp?help=website_whitelist",
              target: "_blank"
            }, "More info"), "Only run embedded macros from websites you trust"))
          }
        }, {
          key: "renderPlayLoopModal",
          value: function() {
            var e = this;
            return c.a.createElement(O.a, {
              title: "How many loops to play?",
              okText: "Play",
              cancelText: "Cancel",
              className: "play-loop-modal",
              visible: this.state.showPlayLoops,
              onOk: this.onClickPlayLoops,
              onCancel: this.onCancelPlayLoops
            }, c.a.createElement(J.a, null, c.a.createElement(Q.a, {
              span: 10
            }, c.a.createElement(z.a.Item, {
              label: "Start value"
            }, c.a.createElement(B.a, {
              type: "number",
              min: "0",
              value: this.state.loopsStart,
              onKeyDown: function(t) {
                13 === t.keyCode && e.onClickPlayLoops()
              },
              onChange: function(t) {
                return e.onChangePlayLoops("loopsStart", t.target.value)
              }
            }))), c.a.createElement(Q.a, {
              span: 10,
              offset: 2
            }, c.a.createElement(z.a.Item, {
              label: "Max"
            }, c.a.createElement(B.a, {
              type: "number",
              min: "0",
              value: this.state.loopsEnd,
              onKeyDown: function(t) {
                13 === t.keyCode && e.onClickPlayLoops()
              },
              onChange: function(t) {
                return e.onChangePlayLoops("loopsEnd", t.target.value)
              }
            })))), c.a.createElement("p", null, "The value of the loop counter is available in $", "{", "!LOOP", "}", " variable"))
          }
        }, {
          key: "renderSettingModal",
          value: function() {
            var e = this,
              t = function(t, r) {
                e.props.updateConfig(Mt({}, t, r))
              },
              r = {
                labelCol: {
                  span: 8
                },
                wrapperCol: {
                  span: 16
                }
              };
            return c.a.createElement(O.a, {
              title: "Settings",
              className: "settings-modal",
              width: 650,
              footer: null,
              visible: this.props.ui.showSettings,
              onCancel: function() {
                return e.props.updateUI({
                  showSettings: !1
                })
              }
            }, c.a.createElement(V.a, {
              activeKey: this.props.ui.settingsTab || "replay",
              onChange: function(t) {
                return e.props.updateUI({
                  settingsTab: t
                })
              }
            }, c.a.createElement(V.a.TabPane, {
              tab: "Replay",
              key: "replay"
            }, c.a.createElement(z.a, null, c.a.createElement(z.a.Item, Pt({
              label: "Replay Helper"
            }, r), c.a.createElement(W.a, {
              onChange: function(e) {
                return t("playScrollElementsIntoView", e.target.checked)
              },
              checked: this.props.config.playScrollElementsIntoView
            }, "Scroll elements into view during replay"), c.a.createElement(W.a, {
              onChange: function(e) {
                return t("playHighlightElements", e.target.checked)
              },
              checked: this.props.config.playHighlightElements
            }, "Highlight elements during replay")), c.a.createElement(z.a.Item, Pt({
              label: c.a.createElement("a", {
                target: "_blank",
                href: "https://ui.vision/x/idehelp?help=command_interval"
              }, "Command Interval")
            }, r), c.a.createElement(K.a, {
              style: {
                width: "200px"
              },
              placeholder: "interval",
              value: "" + this.props.config.playCommandInterval,
              onChange: function(e) {
                return t("playCommandInterval", e)
              }
            }, c.a.createElement(K.a.Option, {
              value: "0"
            }, "Fast (no delay)"), c.a.createElement(K.a.Option, {
              value: "0.3"
            }, "Medium (0.3s delay)"), c.a.createElement(K.a.Option, {
              value: "2"
            }, "Slow (2s delay)"))), c.a.createElement(z.a.Item, Pt({
              label: c.a.createElement("a", {
                target: "_blank",
                href: "https://ui.vision/x/idehelp?help=timeout_pageload"
              }, "!TIMEOUT_PAGELOAD")
            }, r), c.a.createElement(B.a, {
              type: "number",
              min: "0",
              style: {
                width: "70px"
              },
              value: this.props.config.timeoutPageLoad,
              onChange: function(e) {
                return t("timeoutPageLoad", e.target.value)
              },
              placeholder: "in seconds"
            }), c.a.createElement("span", {
              className: "tip"
            }, "Max. time for new page load")), c.a.createElement(z.a.Item, Pt({
              label: c.a.createElement("a", {
                target: "_blank",
                href: "https://ui.vision/x/idehelp?help=timeout_wait"
              }, "!TIMEOUT_WAIT")
            }, r), c.a.createElement(B.a, {
              type: "number",
              min: "0",
              style: {
                width: "70px"
              },
              value: this.props.config.timeoutElement,
              onChange: function(e) {
                return t("timeoutElement", e.target.value)
              },
              placeholder: "in seconds"
            }), c.a.createElement("span", {
              className: "tip"
            }, "Max. time per step")), c.a.createElement(z.a.Item, Pt({
              label: c.a.createElement("a", {
                target: "_blank",
                href: "https://ui.vision/x/idehelp?help=timeout_macro"
              }, "!TIMEOUT_MACRO")
            }, r), c.a.createElement(B.a, {
              type: "number",
              min: "0",
              style: {
                width: "70px"
              },
              value: this.props.config.timeoutMacro,
              onChange: function(e) {
                return t("timeoutMacro", e.target.value)
              },
              placeholder: "in seconds"
            }), c.a.createElement("span", {
              className: "tip"
            }, "Max. overall macro runtime")), c.a.createElement(z.a.Item, Pt({
              label: c.a.createElement("a", {
                target: "_blank",
                href: "https://ui.vision/x/idehelp?help=timeout_download"
              }, "!TIMEOUT_DOWNLOAD")
            }, r), c.a.createElement(B.a, {
              type: "number",
              min: "0",
              style: {
                width: "70px"
              },
              value: this.props.config.timeoutDownload,
              onChange: function(e) {
                return t("timeoutDownload", e.target.value)
              },
              placeholder: "in seconds"
            }), c.a.createElement("span", {
              className: "tip"
            }, "Max. allowed time for file")), c.a.createElement(z.a.Item, Pt({
              label: "If error happens in loop"
            }, r), c.a.createElement(Y.a.Group, {
              onChange: function(e) {
                return t("onErrorInLoop", e.target.value)
              },
              value: this.props.config.onErrorInLoop
            }, c.a.createElement(Y.a, {
              value: "continue_next_loop"
            }, "Continue next loop"), c.a.createElement(Y.a, {
              value: "stop"
            }, "Stop"))))), c.a.createElement(V.a.TabPane, {
              tab: "API",
              key: "api",
              className: "api-pane"
            }, c.a.createElement("p", null, "The RPA command line API allows you to run macros and test suites from the command line and to control UI.Vision RPA from any scripting or programming language (", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=cmdline",
              target: "_blank"
            }, "more info"), ")."), c.a.createElement("p", null, c.a.createElement(T.a, {
              type: "primary",
              onClick: function() {
                var e = Object(_t.generateEmptyHtml)(),
                  t = new Blob([e], {
                    type: "text/plain;charset=utf-8"
                  });
                S.a.saveAs(t, "ui.vision.html", !0)
              }
            }, "Generate Autostart HTML Page")), c.a.createElement(z.a, null, c.a.createElement(z.a.Item, Pt({
              label: c.a.createElement("a", {
                target: "_blank",
                href: "https://ui.vision/x/idehelp?help=cmdline"
              }, "Allow Command Line")
            }, r, {
              labelCol: {
                span: 6
              }
            }), c.a.createElement(W.a, {
              onChange: function(e) {
                return t("allowRunFromBookmark", e.target.checked)
              },
              checked: this.props.config.allowRunFromBookmark
            }, "Run macro and test suite shortcuts from Javascript Bookmarklets"), c.a.createElement(W.a, {
              onChange: function(e) {
                return t("allowRunFromFileSchema", e.target.checked)
              },
              checked: this.props.config.allowRunFromFileSchema
            }, "Run embedded macros from local files"), c.a.createElement(W.a, {
              onChange: function(e) {
                return t("allowRunFromHttpSchema", e.target.checked)
              },
              checked: this.props.config.allowRunFromHttpSchema
            }, "Run embedded macros from public websites", c.a.createElement("a", {
              href: "#",
              style: {
                position: "relative",
                marginLeft: "10px",
                padding: "15px 0"
              },
              onClick: function(t) {
                t.stopPropagation(), t.preventDefault(), e.props.updateUI({
                  showWebsiteWhiteList: !0
                })
              }
            }, "Edit Whitelist"))))), c.a.createElement(V.a.TabPane, {
              tab: "Selenium",
              key: "selenium",
              className: "selenium-pane"
            }, c.a.createElement("h4", null, "Import Selenium IDE Projects"), c.a.createElement("p", null, "Import web tests created in the classic Selenium IDE. Unknown commands (if any) are imported as comments. If you want us to add a certain not yet supported command, or find any other import issues, please let us know in the ", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=forum",
              target: "_blank"
            }, "user forum"), "."), c.a.createElement("div", {
              className: "import-row"
            }, c.a.createElement("input", {
              type: "file",
              accept: ".side",
              id: "select_side_file",
              ref: function(t) {
                e.sideFileInput = t
              },
              style: {
                display: "none"
              },
              onChange: function(t) {
                setTimeout((function() {
                  e.sideFileInput.value = null
                }), 500);
                var r = t.target.files[0];
                Object(he.readFileAsText)(r).then((function(t) {
                  var r = JSON.parse(t);
                  Object(Ot.importSideProject)(r).then((function(t) {
                    var r = ['Project "' + t.projectName + '" import into folder: "' + t.folderName + '"', "- " + t.macros.successCount + " " + (1 === t.macros.successCount ? "macro" : "macros") + " (imported)", "- " + t.suites.ignoreCount + " " + (1 === t.suites.ignoreCount ? "test suite" : "test suites") + " (test suites are not imported yet)"];
                    e.props.addLog("info", r.join("\n")), a.a.success('Project "' + t.projectName + '" import into folder: "' + t.folderName + '"')
                  })).catch((function(e) {
                    a.a.error(e.message)
                  }))
                }))
              }
            }), c.a.createElement(T.a, {
              type: "primary",
              onClick: function() {
                var e = document.querySelector("#select_side_file");
                e && e.click()
              }
            }, "Import .SIDE projects"), c.a.createElement("span", null, "Imports projects from Selenium IDE V3.x (", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=import_side",
              target: "_blank"
            }, "more info"), ")")), c.a.createElement("div", {
              className: "import-row"
            }, c.a.createElement("input", {
              multiple: !0,
              type: "file",
              accept: ".html",
              id: "select_html_files_for_macros",
              ref: function(t) {
                e.jsonFileInput = t
              },
              style: {
                display: "none"
              },
              onChange: function(t) {
                return setTimeout((function() {
                  e.jsonFileInput.value = null
                }), 500), e.props.readFilesAndImportTestCases({
                  files: t.target.files,
                  type: "text",
                  process: function(e, t) {
                    return {
                      macros: [Object(_t.fromHtml)(e, t)],
                      csvs: [],
                      images: []
                    }
                  }
                })
              }
            }), c.a.createElement(T.a, {
              type: "primary",
              onClick: function() {
                var e = document.querySelector("#select_html_files_for_macros");
                e && e.click()
              }
            }, "Import .HTML projects"), c.a.createElement("span", null, "Import projects from Selenium IDE V2.x (", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=import_html",
              target: "_blank"
            }, "more info"), ")")), c.a.createElement("h4", null, "Web Recording Options"), c.a.createElement(z.a, null, c.a.createElement(z.a.Item, Pt({
              label: "Notification"
            }, r), c.a.createElement(W.a, {
              onChange: function(e) {
                return t("recordNotification", e.target.checked)
              },
              checked: this.props.config.recordNotification
            }, "Show notifications when recording")), c.a.createElement(z.a.Item, Pt({
              label: "Locators"
            }, r), c.a.createElement(W.a, {
              onChange: function(e) {
                return t("saveAlternativeLocators", e.target.checked)
              },
              checked: this.props.config.saveAlternativeLocators
            }, "Store alternative locators in macro (", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=alternative_locators",
              target: "_blank"
            }, "more info"), ")")), c.a.createElement(z.a.Item, Pt({
              label: "click / clickAt"
            }, r), c.a.createElement(Y.a.Group, {
              onChange: function(e) {
                return t("recordClickType", e.target.value)
              },
              value: this.props.config.recordClickType
            }, c.a.createElement(Y.a, {
              value: "click"
            }, "Record click"), c.a.createElement(Y.a, {
              value: "clickAt"
            }, "Record clickAt")))), c.a.createElement("h4", null, "Proxy Options"), c.a.createElement(z.a, null, c.a.createElement(z.a.Item, Pt({
              label: "Default Proxy (IP:Port)"
            }, r), c.a.createElement(B.a, {
              type: "text",
              style: {
                width: "300px"
              },
              value: this.props.config.defaultProxy,
              onChange: function(e) {
                return t("defaultProxy", e.target.value)
              },
              placeholder: "eg. http://0.0.0.0:1234"
            })), c.a.createElement(z.a.Item, Pt({
              label: "User name, Password"
            }, r), c.a.createElement(B.a, {
              type: "text",
              style: {
                width: "300px"
              },
              value: this.props.config.defaultProxyAuth,
              onChange: function(e) {
                return t("defaultProxyAuth", e.target.value)
              },
              placeholder: "eg. admin, mypassword"
            })), c.a.createElement(z.a.Item, Pt({
              label: "Status"
            }, r), c.a.createElement(Y.a.Group, {
              value: this.props.proxy ? "on" : "off",
              onChange: function(t) {
                switch (t.target.value) {
                  case "off":
                    return M.default.ask("PANEL_SET_PROXY", {
                      proxy: null
                    });
                  case "on":
                    var r = void 0;
                    try {
                      r = Object(ot.parseProxyUrl)(e.props.config.defaultProxy, e.props.config.defaultProxyAuth)
                    } catch (t) {
                      return a.a.error(t.message)
                    }
                    return M.default.ask("PANEL_SET_PROXY", {
                      proxy: r
                    })
                }
              }
            }, c.a.createElement(Y.a, {
              value: "on"
            }, "Proxy ON"), c.a.createElement(Y.a, {
              value: "off"
            }, "Proxy OFF")), c.a.createElement(W.a, {
              onChange: function(e) {
                return t("turnOffProxyAfterReplay", e.target.checked)
              },
              checked: this.props.config.turnOffProxyAfterReplay
            }, "Turn off at end of replay (Proxy controlled by ", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?cmd=setproxy",
              target: "_blank"
            }, "setProxy command"), ")"))), c.a.createElement("h4", null, "Old-Style Test Cases"), c.a.createElement(z.a, null, c.a.createElement(z.a.Item, Pt({
              label: "Sidebar"
            }, r), c.a.createElement(W.a, {
              onChange: function(e) {
                return t("showTestCaseTab", e.target.checked)
              },
              checked: this.props.config.showTestCaseTab
            }, "Show test case tab (", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=old_style_test_cases",
              target: "_blank"
            }, "more info"), ")")))), c.a.createElement(V.a.TabPane, {
              tab: "Backup",
              key: "backup",
              className: "backup-pane"
            }, c.a.createElement("h4", null, "Automatic Backup"), c.a.createElement("p", null, "The automatic backup reminder helps to you to regularly export macros and other data as ZIP archive. As browser extension UI.Vision RPA must store its data ", c.a.createElement("em", null, "inside the browser extension"), ". This means that when you uninstall the extension, the data is removed, too. Therefore it is good to have backups! Note that if the hard drive storage mode of the File Access XModule is active, then the backup archive contains these files."), c.a.createElement("div", {
              className: "row"
            }, c.a.createElement(W.a, {
              onChange: function(e) {
                return t("enableAutoBackup", e.target.checked)
              },
              checked: this.props.config.enableAutoBackup
            }), c.a.createElement("span", null, "Show backup reminder every"), c.a.createElement(B.a, {
              type: "number",
              min: 1,
              disabled: !this.props.config.enableAutoBackup,
              value: this.props.config.autoBackupInterval,
              onChange: function(e) {
                return t("autoBackupInterval", e.target.value)
              },
              style: {
                width: "40px"
              }
            }), c.a.createElement("span", null, " days")), c.a.createElement("div", {
              className: "row"
            }, c.a.createElement("p", null, "Backup includes"), c.a.createElement("ul", null, c.a.createElement("li", null, c.a.createElement(W.a, {
              onChange: function(e) {
                return t("autoBackupTestCases", e.target.checked)
              },
              checked: this.props.config.autoBackupTestCases
            }), c.a.createElement("span", null, "Macros and Folders (includes Folders as Test Suites)")), c.a.createElement("li", null, c.a.createElement(W.a, {
              onChange: function(e) {
                return t("autoBackupTestSuites", e.target.checked)
              },
              checked: this.props.config.autoBackupTestSuites
            }), c.a.createElement("span", null, "Old-style Test Suites")), c.a.createElement("li", null, c.a.createElement(W.a, {
              onChange: function(e) {
                return t("autoBackupScreenshots", e.target.checked)
              },
              checked: this.props.config.autoBackupScreenshots
            }), c.a.createElement("span", null, "Screenshots")), c.a.createElement("li", null, c.a.createElement(W.a, {
              onChange: function(e) {
                return t("autoBackupCSVFiles", e.target.checked)
              },
              checked: this.props.config.autoBackupCSVFiles
            }), c.a.createElement("span", null, "CSV Files")), c.a.createElement("li", null, c.a.createElement(W.a, {
              onChange: function(e) {
                return t("autoBackupVisionImages", e.target.checked)
              },
              checked: this.props.config.autoBackupVisionImages
            }), c.a.createElement("span", null, "Visual UI Test images")))), c.a.createElement("div", {
              className: "row"
            }, c.a.createElement(T.a, {
              type: "primary",
              onClick: function() {
                return e.props.runBackup()
              }
            }, "Run Backup Now"), c.a.createElement("span", null, " Create a backup ZIP file now.")), c.a.createElement("div", {
              style: {
                paddingTop: "30px"
              },
              className: "row"
            }, c.a.createElement(T.a, {
              type: "primary",
              onClick: function() {
                var e = document.getElementById("select_zip_file");
                e && e.click()
              }
            }, "Restore Data from Backup"), c.a.createElement("span", null, " Select a backup ZIP file to import it (", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=bkup_import",
              target: "_blank"
            }, "more info"), "). "), c.a.createElement("input", {
              type: "file",
              accept: ".zip",
              id: "select_zip_file",
              ref: function(t) {
                e.zipFileInput = t
              },
              style: {
                display: "none"
              },
              onChange: function(t) {
                setTimeout((function() {
                  e.zipFileInput.value = null
                }), 500);
                var r = t.target.files[0];
                Object(kt.restoreBackup)({
                  file: r,
                  storage: Object(le.getStorageManager)().getCurrentStrategyType()
                }).then((function(t) {
                  Object(le.getStorageManager)().emit(le.StorageManagerEvent.ForceReload), a.a.success("Backup restored"), e.props.addLog("info", ["Backup restored:", t.count.macro + " macros", t.count.testSuite + " test suites", t.count.csv + " csvs", t.count.screenshot + " screenshots", t.count.vision + " vision images"].join("\n"))
                }), (function(e) {
                  a.a.error("Failed to restore: " + e.message), console.error(e)
                }))
              }
            }))), c.a.createElement(V.a.TabPane, {
              tab: "Security",
              key: "security",
              className: "security-pane"
            }, c.a.createElement("h4", null, "Master password for Password Encryption"), c.a.createElement("p", null, "A master password is used to encrypt and decrypt all stored website passwords. The websites passwords are encrypted using strong encryption.  ", c.a.createElement("a", {
              target: "_blank",
              href: "https://ui.vision/x/idehelp?help=encryption"
            }, "More info >>")), c.a.createElement("div", null, c.a.createElement(Y.a.Group, {
              onChange: function(e) {
                return t("shouldEncryptPassword", e.target.value)
              },
              value: this.props.config.shouldEncryptPassword
            }, c.a.createElement(Y.a, {
              value: "no"
            }, "Do not encrypt passwords"), c.a.createElement(Y.a, {
              value: "master_password"
            }, "Enter master password here to store it")), "master_password" === this.props.config.shouldEncryptPassword ? c.a.createElement("div", null, c.a.createElement("label", null, "Master password:"), c.a.createElement(B.a, {
              type: "password",
              style: {
                width: "200px"
              },
              value: this.props.config.masterPassword,
              onChange: function(e) {
                return t("masterPassword", e.target.value)
              }
            })) : null)), c.a.createElement(V.a.TabPane, {
              tab: "OCR",
              key: "ocr",
              className: Object(oe.cn)("ocr-pane", {
                "ocr-disabled": "disabled" === this.props.config.ocrMode,
                "ocr-enabled": "enabled" === this.props.config.ocrMode,
                "ocr-offline": "offline_enabled" === this.props.config.ocrMode
              })
            }, c.a.createElement("p", null, "This tab manages the ", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=ocr",
              target: "_blank"
            }, "OCR commands"), ". Please note that the Online OCR option sends screenshots to our Cloud OCR API. All screenshots are deleted after processing. But since this means that data leaves your machine, you must explicitly allow it. By default (after installation) Online OCR is disabled."), c.a.createElement("div", {
              className: "row"
            }, c.a.createElement(Y.a.Group, {
              className: "radio-block",
              onChange: function(e) {
                return t("ocrMode", e.target.value)
              },
              value: this.props.config.ocrMode
            }, c.a.createElement(Y.a, {
              value: "disabled"
            }, "OCR feature disabled"), c.a.createElement(Y.a, {
              value: "enabled"
            }, "Online OCR enabled (", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=ocronline",
              target: "_blank"
            }, "more info"), ")", c.a.createElement("br", null), "Conversion counter: You used ", Object(He.getOcrCommandCounter)().get(), " from ", Object(He.getOcrCommandCounter)().getMaximum(), " conversions/day (", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=ocradd",
              target: "_blank"
            }, "add more"), ")"), c.a.createElement(Y.a, {
              value: "offline_enabled",
              disabled: "pro" !== this.props.config.xmodulesStatus,
              class: Object(oe.cn)({
                "need-pro": "pro" !== this.props.config.xmodulesStatus
              })
            }, "Offline OCR - use ", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=ocroffline",
              target: "_blank"
            }, "local OCR engine"), " (Requires XModules Enterprise Edition)", c.a.createElement("br", null), c.a.createElement("span", {
              className: "offline-label"
            }, "Local OCR"), c.a.createElement(B.a, {
              type: "text",
              style: {
                width: "200px"
              },
              disabled: "offline_enabled" !== this.props.config.ocrMode,
              value: this.props.config.ocrOfflineURL,
              onChange: function(e) {
                return t("ocrOfflineURL", e.target.value)
              }
            }), c.a.createElement("br", null), c.a.createElement("span", {
              className: "offline-label"
            }, "Local API key"), c.a.createElement(B.a, {
              type: "password",
              style: {
                width: "200px"
              },
              disabled: "offline_enabled" !== this.props.config.ocrMode,
              value: this.props.config.ocrOfflineAPIKey,
              onChange: function(e) {
                return t("ocrOfflineAPIKey", e.target.value)
              }
            })))), c.a.createElement("div", {
              className: "row"
            }, c.a.createElement("p", null, c.a.createElement("span", {
              className: "label-text"
            }, "Default OCR Engine"), c.a.createElement(Y.a.Group, {
              onChange: function(e) {
                return t("ocrEngine", parseInt(e.target.value, 10))
              },
              value: "" + this.props.config.ocrEngine
            }, c.a.createElement(Y.a, {
              value: "1"
            }, "Engine 1"), c.a.createElement(Y.a, {
              value: "2"
            }, "Engine 2")))), c.a.createElement("div", {
              className: "row"
            }, c.a.createElement("p", null, c.a.createElement("span", {
              className: "label-text"
            }, "Default OCR language"), c.a.createElement(K.a, {
              style: {
                width: "150px"
              },
              placeholder: "OCR Language",
              value: this.props.config.ocrLanguage,
              disabled: "disabled" === this.props.config.ocrMode || 2 === this.props.config.ocrEngine,
              onChange: function(e) {
                return t("ocrLanguage", e)
              }
            }, jt.map((function(e) {
              return c.a.createElement(K.a.Option, {
                value: e.value,
                key: e.value
              }, e.text)
            })))), c.a.createElement("div", null, "You can overwrite the default OCR settings in the macro with ", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=ocrlanguage",
              target: "_blank"
            }, "!OCRLanguage"), " and ", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=ocrengine",
              target: "_blank"
            }, "!OCREngine"), ".")), c.a.createElement("div", {
              className: "row"
            }, c.a.createElement("p", null, c.a.createElement(T.a, {
              type: "primary",
              loading: this.state.testingOcrAPI,
              disabled: "disabled" === this.props.config.ocrMode,
              onClick: function() {
                var t, r, n, o;
                e.setState({
                  testingOcrAPI: !0
                }), (t = {
                  store: window.store,
                  isDesktop: "desktop" === e.props.config.cvScope
                }, r = t.store, n = t.isDesktop, o = function() {
                  return M.default.ask("PANEL_UPDATE_BADGE", {
                    type: "play",
                    clear: !0
                  })
                }, vt({
                  store: r,
                  isDesktop: n,
                  lang: r.getState().config.ocrLanguage,
                  engine: r.getState().config.ocrEngine,
                  scale: "true",
                  searchArea: "viewport",
                  storedImageRect: null,
                  ocrApiTimeout: E.a.ocr.apiTimeout
                }).then((function(e) {
                  var t = e.response,
                    r = e.offset,
                    a = (e.viewportOffset, Object(he.safeUpdateIn)(["[]", "TextOverlay", "Lines", "[]", "Words", "[]"], (function(e) {
                      return ut({}, e, {
                        Top: e.Top + r.y,
                        Left: e.Left + r.x
                      })
                    }), t.ParsedResults)),
                    o = [{
                      similarity: 1,
                      highlight: Ge.OcrHighlightType.Matched,
                      words: Object($e.allWordsWithPosition)(a, [])
                    }];
                  return M.default.ask("PANEL_HIGHLIGHT_OCR_MATCHES", {
                    ocrMatches: o,
                    isDesktop: n
                  })
                })).then((function() {
                  o()
                }), (function(e) {
                  throw o(), e
                }))).catch((function(e) {
                  a.a.error(e.message)
                })).then((function() {
                  e.setState({
                    testingOcrAPI: !1
                  })
                }))
              }
            }, "Show OCR Overlay")), c.a.createElement("p", null, "The test runs OCR on the currently active browser tab and displays the result as overlay."))), c.a.createElement(V.a.TabPane, {
              tab: "Vision",
              key: "vision",
              className: "vision-pane"
            }, c.a.createElement("p", null, "UI.Vision RPA's eyes can look inside the web browser or search the complete desktop."), c.a.createElement("div", {
              className: "row"
            }, c.a.createElement(Y.a.Group, {
              onChange: function(e) {
                return t("cvScope", e.target.value)
              },
              value: this.props.config.cvScope
            }, c.a.createElement(Y.a, {
              value: "browser"
            }, "Browser Automation (Look inside browser)"), c.a.createElement(Y.a, {
              value: "desktop",
              disabled: !(this.state.xModuleData[Object(ce.getXDesktop)().getName()] && this.state.xModuleData[Object(ce.getXDesktop)().getName()].installed)
            }, c.a.createElement("span", null, "Desktop Automation (Search complete desktop)"), this.state.xModuleData[Object(ce.getXDesktop)().getName()] && this.state.xModuleData[Object(ce.getXDesktop)().getName()].installed ? null : c.a.createElement("a", {
              target: "_blank",
              href: Object(ce.getXDesktop)().downloadLink(),
              style: {
                marginLeft: "15px"
              }
            }, "Please install the DesktopAutomation XModule first.")))), c.a.createElement("p", null, "Inside a macro the computer vision scope can be changed with the ", c.a.createElement("a", {
              href: Object(ce.getXDesktop)().infoLink(),
              target: "_blank"
            }, "XDesktopAutomation"), " command. In addition, you can restrict the image search  area with the ", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=limitsearcharea",
              target: "_blank"
            }, "visionLimitSearchArea"), " command."), c.a.createElement("div", {
              className: "row",
              style: {
                marginTop: "30px"
              }
            }, c.a.createElement("p", null, "Default Vision Search Confidence"), c.a.createElement(K.a, {
              style: {
                width: "200px"
              },
              placeholder: "interval",
              value: "" + this.props.config.defaultVisionSearchConfidence,
              onChange: function(e) {
                return t("defaultVisionSearchConfidence", parseFloat(e))
              }
            }, Object(oe.range)(1, 11, 1).map((function(e) {
              return c.a.createElement(K.a.Option, {
                key: e,
                value: "" + (.1 * e).toFixed(1)
              }, (.1 * e).toFixed(1))
            }))))), c.a.createElement(V.a.TabPane, {
              tab: "XModules",
              key: "xmodules",
              className: "xmodules-pane"
            }, c.a.createElement("div", {
              className: "xmodule-item"
            }, c.a.createElement("div", {
              className: "xmodule-title"
            }, c.a.createElement("span", null, c.a.createElement("b", null, "FileAccess XModule"), " - Read and write to your hard drive"), c.a.createElement("a", {
              href: Object(ie.getXFile)().infoLink(),
              target: "_blank"
            }, "More Info"), c.a.createElement(T.a, {
              type: "primary",
              onClick: function() {
                Object(ie.getXFile)().getVersion().then((function(t) {
                  var r = t.installed,
                    n = t.version,
                    o = r ? "Installed (v" + n + ")" : "Not Installed";
                  a.a.info("status updated: " + o), (r ? Object(ie.getXFile)().initConfig() : Promise.resolve()).catch((function(e) {})).then((function() {
                    e.setState(Object(oe.updateIn)(["xModuleData", Object(ie.getXFile)().getName()], (function(e) {
                      return Pt({}, e, t, {
                        config: Object(ie.getXFile)().getCachedConfig()
                      })
                    }), e.state))
                  }))
                }))
              }
            }, "Test it")), c.a.createElement("div", {
              className: "xmodule-status"
            }, c.a.createElement("label", null, "Status:"), this.state.xModuleData[Object(ie.getXFile)().getName()] && this.state.xModuleData[Object(ie.getXFile)().getName()].installed ? c.a.createElement("div", {
              className: "status-box"
            }, c.a.createElement("span", null, "Installed (v", this.state.xModuleData[Object(ie.getXFile)().getName()].version, ")"), c.a.createElement("a", {
              target: "_blank",
              href: Object(ie.getXFile)().checkUpdateLink(this.state.xModuleData[Object(ie.getXFile)().getName()] && this.state.xModuleData[Object(ie.getXFile)().getName()].version, de.a.runtime.getManifest().version)
            }, "Check for update")) : c.a.createElement("div", {
              className: "status-box"
            }, c.a.createElement("span", null, "Not Installed"), c.a.createElement("a", {
              href: Object(ie.getXFile)().downloadLink(),
              target: "_blank"
            }, "Download it"))), c.a.createElement("div", {
              className: "xmodule-settings"
            }, c.a.createElement("h3", null, "Settings"), c.a.createElement("div", {
              className: "xmodule-settings-item"
            }, c.a.createElement("div", {
              className: "settings-detail"
            }, c.a.createElement("label", null, "Home Folder"), c.a.createElement("div", {
              className: "settings-detail-content"
            }, c.a.createElement(B.a, {
              type: "text",
              value: Object(ie.getXFile)().getCachedConfig().rootDir,
              disabled: !(this.state.xModuleData[Object(ie.getXFile)().getName()] && this.state.xModuleData[Object(ie.getXFile)().getName()].installed),
              onChange: function(t) {
                var r = t.target.value;
                e.setState(Object(oe.compose)(Object(oe.setIn)(["xModuleData", Object(ie.getXFile)().getName(), "config", "rootDir"], r), Object(oe.setIn)(["xFileRootDirChanged"], !0))(e.state)), Object(ie.getXFile)().setConfig({
                  rootDir: r
                })
              },
              onBlur: function() {
                e.state.xFileRootDirChanged && (e.setState({
                  xFileRootDirChanged: !1
                }), Object(ie.getXFile)().sanityCheck().then((function() {
                  e.setState(Object(oe.setIn)(["xModuleData", Object(ie.getXFile)().getName(), "checkResult"], {
                    error: null
                  }, e.state)), Object(le.getStorageManager)().emit(le.StorageManagerEvent.RootDirChanged)
                }), (function(t) {
                  e.setState(Object(oe.setIn)(["xModuleData", Object(ie.getXFile)().getName(), "checkResult"], {
                    error: t.message
                  }, e.state)), e.props.updateUI({
                    showSettings: !0,
                    settingsTab: "xmodules"
                  })
                })))
              }
            }), this.state.xModuleData[Object(ie.getXFile)().getName()] && this.state.xModuleData[Object(ie.getXFile)().getName()].checkResult && this.state.xModuleData[Object(ie.getXFile)().getName()].checkResult.error ? c.a.createElement("div", {
              className: "check-result"
            }, this.state.xModuleData[Object(ie.getXFile)().getName()].checkResult.error) : null)), c.a.createElement("div", {
              className: "settings-desc"
            }, "In this folder, UI.Vision RPA creates /macros, /images, /testsuites, /datasources")))), c.a.createElement("div", {
              className: "xmodule-item"
            }, c.a.createElement("div", {
              className: "xmodule-title"
            }, c.a.createElement("span", null, c.a.createElement("b", null, "RealUser XModule"), " - Click / Type / Drag with OS native events"), c.a.createElement("a", {
              href: Object(se.getXUserIO)().infoLink(),
              target: "_blank"
            }, "More Info"), c.a.createElement(T.a, {
              type: "primary",
              onClick: function() {
                Object(se.getXUserIO)().getVersion().then((function(t) {
                  var r = t.installed,
                    n = t.version,
                    o = r ? "Installed (v" + n + ")" : "Not Installed";
                  a.a.info("status updated: " + o), e.setState(Object(oe.updateIn)(["xModuleData", Object(se.getXUserIO)().getName()], (function(e) {
                    return Pt({}, e, t, {
                      config: Object(se.getXUserIO)().getCachedConfig()
                    })
                  }), e.state))
                }))
              }
            }, "Test it")), c.a.createElement("div", {
              className: "xmodule-status"
            }, c.a.createElement("label", null, "Status:"), this.state.xModuleData[Object(se.getXUserIO)().getName()] && this.state.xModuleData[Object(se.getXUserIO)().getName()].installed ? c.a.createElement("div", {
              className: "status-box"
            }, c.a.createElement("span", null, "Installed (v", this.state.xModuleData[Object(se.getXUserIO)().getName()].version, ")"), c.a.createElement("a", {
              target: "_blank",
              href: Object(se.getXUserIO)().checkUpdateLink(this.state.xModuleData[Object(se.getXUserIO)().getName()] && this.state.xModuleData[Object(se.getXUserIO)().getName()].version, de.a.runtime.getManifest().version)
            }, "Check for update")) : c.a.createElement("div", {
              className: "status-box"
            }, c.a.createElement("span", null, "Not Installed"), c.a.createElement("a", {
              href: Object(se.getXUserIO)().downloadLink(),
              target: "_blank"
            }, "Download it")))), c.a.createElement("div", {
              className: "xmodule-item"
            }, c.a.createElement("div", {
              className: "xmodule-title"
            }, c.a.createElement("span", null, c.a.createElement("b", null, "DesktopAutomation XModule"), " - Visual Desktop Automation"), c.a.createElement("a", {
              href: Object(ce.getXDesktop)().infoLink(),
              target: "_blank"
            }, "More Info"), c.a.createElement(T.a, {
              type: "primary",
              onClick: function() {
                Object(ce.getXDesktop)().getVersion().then((function(t) {
                  var r = t.installed,
                    n = t.version,
                    o = r ? "Installed (v" + n + ")" : "Not Installed";
                  a.a.info("status updated: " + o), e.setState(Object(oe.updateIn)(["xModuleData", Object(ce.getXDesktop)().getName()], (function(e) {
                    return Pt({}, e, t, {
                      config: Object(ce.getXDesktop)().getCachedConfig()
                    })
                  }), e.state))
                }))
              }
            }, "Test it")), c.a.createElement("div", {
              className: "xmodule-status"
            }, c.a.createElement("label", null, "Status:"), this.state.xModuleData[Object(ce.getXDesktop)().getName()] && this.state.xModuleData[Object(ce.getXDesktop)().getName()].installed ? c.a.createElement("div", {
              className: "status-box"
            }, c.a.createElement("span", null, "Installed (v", this.state.xModuleData[Object(ce.getXDesktop)().getName()].version, ")"), c.a.createElement("a", {
              target: "_blank",
              href: Object(ce.getXDesktop)().checkUpdateLink(this.state.xModuleData[Object(ce.getXDesktop)().getName()] && this.state.xModuleData[Object(ce.getXDesktop)().getName()].version, de.a.runtime.getManifest().version)
            }, "Check for update")) : c.a.createElement("div", {
              className: "status-box"
            }, c.a.createElement("span", null, "Not Installed"), c.a.createElement("a", {
              href: Object(ce.getXDesktop)().downloadLink(),
              target: "_blank"
            }, "Download it"))))), c.a.createElement(V.a.TabPane, {
              tab: "XModules PRO",
              key: "register",
              className: "register-pane"
            }, c.a.createElement("div", {
              className: Object(oe.cn)("register-note", {
                inactive: "unregistered" !== this.props.config.xmodulesStatus
              })
            }, c.a.createElement("p", null, "Thank you for using the UI.Vision RPA Community Edition. For unlimited real user commands (XClick, XMove and XType), unlimited direct file access and priority support, please upgrade to our PRO and Enterprise Editions. If you have already purchased a license key, you can enter it here:"), c.a.createElement("div", {
              className: "actions"
            }, c.a.createElement("a", {
              href: E.a.xmodulesLimit.unregistered.upgradeUrl,
              target: "_blank"
            }, "Click here to upgrade."))), c.a.createElement("div", {
              className: "register-form"
            }, c.a.createElement("label", null, "Enter license key:"), c.a.createElement("div", {
              className: "register-row"
            }, c.a.createElement(B.a, {
              value: this.state.registerKey,
              type: "text",
              onChange: function(t) {
                e.setState({
                  registerKey: t.target.value
                })
              }
            }), c.a.createElement(T.a, {
              type: "primary",
              onClick: this.checkRegisterKey
            }, "Check Key"))), c.a.createElement("div", {
              className: "register-status"
            }, "unregistered" === this.props.config.xmodulesStatus ? c.a.createElement("div", null, c.a.createElement("span", null, "XModules status: "), c.a.createElement("b", null, this.isEitherXModuleInstalled() ? "Free Edition active" : "Not installed"), ".", c.a.createElement("a", {
              href: E.a.xmodulesLimit.unregistered.upgradeUrl,
              target: "_blank"
            }, "Upgrade to XModules Personal, PRO or Enterprise")) : null, "free" === this.props.config.xmodulesStatus ? c.a.createElement("div", null, "XModules status: ", c.a.createElement("b", null, "Personal Edition active"), ".", c.a.createElement("a", {
              href: E.a.xmodulesLimit.free.upgradeUrl,
              target: "_blank"
            }, "Upgrade to PRO or Enterprise")) : null, "pro" === this.props.config.xmodulesStatus ? c.a.createElement("div", null, "XModules status: ", c.a.createElement("b", null, "PRO Edition active"), ".", c.a.createElement("a", {
              href: E.a.xmodulesLimit.pro.upgradeUrl,
              target: "_blank"
            }, "Contact Support")) : null))))
          }
        }, {
          key: "renderMainMenu",
          value: function() {
            var e = this,
              t = this.state,
              r = (t.htmlUri, t.jsonUri, this.props),
              n = (r.status, r.editing),
              a = (n.commands, n.meta.src),
              o = this.props.player.status === ae.PLAYER_STATUS.STOPPED;
            a && a.name;
            return c.a.createElement(L.a, {
              onClick: function(t) {
                switch (t.key) {
                  case "play_settings":
                    e.showSettingsModal()
                }
              },
              selectable: !1
            }, c.a.createElement(L.a.Item, {
              key: "play_settings",
              disabled: !o
            }, "Replay settings.."))
          }
        }, {
          key: "renderStatus",
          value: function() {
            var e = this.props,
              t = e.status,
              r = e.player;
            return c.a.createElement("div", {
              className: "status"
            }, function() {
              switch (t) {
                case ae.APP_STATUS.RECORDER:
                  return "Recording";
                case ae.APP_STATUS.PLAYER:
                  switch (r.status) {
                    case ae.PLAYER_STATUS.PLAYING:
                      var e = r.nextCommandIndex,
                        n = r.loops,
                        a = r.currentLoop,
                        o = r.timeoutStatus;
                      if (null === e || null === n || 0 === a) return "";
                      var i = ["Line " + (e + 1), "Round " + a + "/" + n];
                      if (o && o.type && o.total) {
                        var s = o.type,
                          c = o.total,
                          l = o.past;
                        i.unshift(s + " " + l / 1e3 + "s (" + c / 1e3 + ")")
                      }
                      return i.join(" | ");
                    case ae.PLAYER_STATUS.PAUSED:
                      return "Player paused";
                    default:
                      return ""
                  }
                  default:
                    return ""
              }
            }())
          }
        }, {
          key: "renderActions",
          value: function() {
            var e = this,
              t = this.props,
              r = t.player,
              n = t.status,
              a = c.a.createElement(L.a, {
                onClick: function(t) {
                  switch (t.key) {
                    case "play_loop":
                      e.togglePlayLoopsModal(!0)
                  }
                },
                selectable: !1
              }, c.a.createElement(L.a.Item, {
                key: "play_loop",
                disabled: !1
              }, "Play loop.."));
            if (n === ae.APP_STATUS.RECORDER) return c.a.createElement("div", {
              className: "actions"
            }, c.a.createElement(T.a, {
              onClick: this.onToggleRecord,
              style: {
                color: "#ff0000"
              }
            }, c.a.createElement("span", null, "Stop Record")));
            switch (r.status) {
              case ae.PLAYER_STATUS.PLAYING:
                return c.a.createElement("div", {
                  className: "actions"
                }, c.a.createElement(T.a.Group, null, c.a.createElement(T.a, {
                  onClick: function() {
                    return e.getPlayer().stop()
                  }
                }, c.a.createElement("span", null, "Stop")), c.a.createElement(T.a, {
                  onClick: function() {
                    return e.getPlayer("testCase").pause()
                  }
                }, c.a.createElement("span", null, "Pause"))));
              case ae.PLAYER_STATUS.PAUSED:
                return c.a.createElement("div", {
                  className: "actions"
                }, c.a.createElement(T.a.Group, null, this.props.player.mode === ae.PLAYER_MODE.TEST_CASE ? c.a.createElement(T.a, {
                  onClick: function() {
                    return e.getPlayer("testCase").resume(!0)
                  }
                }, "Step") : null, c.a.createElement(T.a, {
                  onClick: function() {
                    return e.getPlayer().stop()
                  }
                }, "Stop"), c.a.createElement(T.a, {
                  onClick: function() {
                    return e.getPlayer("testCase").resume()
                  }
                }, "Resume")));
              case ae.PLAYER_STATUS.STOPPED:
                return c.a.createElement("div", {
                  className: "actions"
                }, c.a.createElement(T.a, {
                  onClick: this.onToggleRecord
                }, c.a.createElement("span", null, "Record")), c.a.createElement(T.a.Group, {
                  className: "play-actions"
                }, c.a.createElement(T.a, {
                  onClick: function() {
                    return e.playCurrentMacro(!0)
                  }
                }, "Step"), c.a.createElement(N.a.Button, {
                  onClick: function() {
                    return e.playCurrentMacro(!1)
                  },
                  overlay: a
                }, c.a.createElement("span", null, "Play Macro"))), c.a.createElement(T.a, {
                  shape: "circle",
                  onClick: function() {
                    return e.showSettingsModal()
                  }
                }, c.a.createElement(R.a, {
                  type: "setting"
                })))
            }
          }
        }, {
          key: "renderMacro",
          value: function() {
            var e = this.props,
              t = e.editing,
              r = e.player,
              n = e.hasUnsaved,
              a = t.meta.src,
              o = r.status === ae.PLAYER_STATUS.STOPPED,
              i = n ? "unsaved" : "",
              s = {
                text: a ? "Save" : "Save..",
                disabled: !n
              };
            return c.a.createElement("div", {
              className: "select-case"
            }, c.a.createElement("span", {
              className: "test-case-name " + i
            }, a ? a.name : "Untitled"), o ? c.a.createElement(T.a, {
              disabled: s.disabled,
              onClick: this.onClickSave
            }, c.a.createElement("span", null, s.text)) : null)
          }
        }, {
          key: "render",
          value: function() {
            this.props.player.status, ae.PLAYER_STATUS.STOPPED;
            return c.a.createElement("div", {
              className: "header " + this.props.status.toLowerCase()
            }, this.renderMacro(), this.renderStatus(), this.renderActions(), this.renderPlayLoopModal(), this.renderSettingModal(), this.renderPublicWebsiteWhiteList())
          }
        }]), t
      }(c.a.Component),
      Ft = Object(k.b)((function(e) {
        return {
          hasUnsaved: Object(te.hasUnsavedMacro)(e),
          route: e.route,
          editing: e.editor.editing,
          player: e.player,
          status: e.status,
          config: e.config,
          ui: e.ui,
          proxy: e.proxy
        }
      }), (function(e) {
        return Object(P.b)(Pt({}, I, ne.Actions), e)
      }))(Object(d.b)(Lt)),
      Vt = r(348),
      Ut = r.n(Vt),
      Bt = (r(973), r(392)),
      Xt = r.n(Bt),
      Kt = r(134),
      $t = r.n(Kt),
      Yt = r(64),
      Gt = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      Wt = (Nt = de.a.isFirefox() ? 1 : 0, de.a.bookmarks.getTree().then((function(e) {
        return e[0].children[Nt].id
      }))),
      Ht = function(e) {
        return Wt.then((function(t) {
          return de.a.bookmarks.create(Gt({}, e, {
            parentId: t
          }))
        }))
      },
      zt = r(1),
      qt = r.n(zt),
      Jt = r(316),
      Zt = (r(173), r(478), r(479), r(480), r(481), function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }());

    function Qt(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function er(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var tr = function(e) {
      function t() {
        var e, r, n;
        Qt(this, t);
        for (var a = arguments.length, o = Array(a), i = 0; i < a; i++) o[i] = arguments[i];
        return r = n = er(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), n.state = {
          value: "",
          valueModified: null,
          errMsg: null
        }, n.onSave = function() {
          var e = null;
          try {
            n.props.validate(n.state.valueModified), n.props.onChange(n.state.valueModified)
          } catch (t) {
            e = t.message
          } finally {
            n.setState({
              errMsg: e
            })
          }
        }, er(n, r)
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e), Zt(t, [{
        key: "componentDidMount",
        value: function() {
          this.setState({
            value: this.props.value,
            valueModified: this.props.value
          })
        }
      }, {
        key: "componentWillReceiveProps",
        value: function(e) {
          e.value !== this.props.value && this.setState({
            value: e.value,
            valueModified: e.value
          })
        }
      }, {
        key: "render",
        value: function() {
          var e = this;
          return c.a.createElement(O.a, {
            visible: this.props.visible,
            okText: "Save",
            onOk: this.onSave,
            onCancel: this.props.onClose,
            width: "80%"
          }, c.a.createElement("pre", {
            style: {
              color: "red",
              lineHeight: "18px",
              marginBottom: "10px"
            }
          }, this.state.errMsg), c.a.createElement(Jt.UnControlled, {
            className: this.state.sourceErrMsg ? "has-error" : "no-error",
            value: this.state.value,
            onChange: function(t, r, n) {
              return e.setState({
                valueModified: n
              })
            },
            options: {
              mode: {
                name: "javascript",
                json: !0
              },
              lineNumbers: !0,
              matchBrackets: !0,
              autoCloseBrackets: !0
            }
          }))
        }
      }]), t
    }(c.a.Component);
    tr.propTypes = {
      value: qt.a.string.isRequired,
      onClose: qt.a.func.isRequired,
      visible: qt.a.bool,
      validate: qt.a.func,
      onChange: qt.a.func
    }, tr.defaultProps = {
      visible: !1,
      validate: function() {
        return !0
      },
      onChange: function() {}
    };
    var rr = tr,
      nr = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      ar = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }();

    function or(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function ir(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var sr = function(e) {
      function t() {
        var e, r, n;
        or(this, t);
        for (var a = arguments.length, o = Array(a), i = 0; i < a; i++) o[i] = arguments[i];
        return r = n = ir(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), n.state = {
          isEditing: !1
        }, n.onChange = function(e) {
          n.setState({
            value: e.target.value
          })
        }, n.onKeyDown = function(e) {
          13 === e.keyCode ? n.submit() : 27 === e.keyCode && n.setState({
            value: n.props.value
          }, n.submit)
        }, n.onBlur = function(e) {
          n.submit()
        }, n.onClickText = function() {
          n.props.clickToEdit && n.setState({
            isEditing: !0
          })
        }, n.submit = function() {
          n.setState({
            isEditing: !1
          }), n.props.onChange && n.props.onChange(n.state.value).catch((function() {
            return !1
          })).then((function(e) {
            e || n.setState({
              value: n.props.value
            })
          }))
        }, ir(n, r)
      }
      return function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(t, e), ar(t, [{
        key: "componentDidMount",
        value: function() {
          this.setState({
            isEditing: this.props.isEditing,
            value: this.props.value
          }), this.props.isEditing && this.focusOnInput()
        }
      }, {
        key: "componentWillReceiveProps",
        value: function(e) {
          var t = {};
          this.props.isEditing !== e.isEditing && (t.isEditing = e.isEditing, t.isEditing && this.focusOnInput()), this.props.value !== e.value && (t.value = e.value), this.setState(t)
        }
      }, {
        key: "focusOnInput",
        value: function() {
          var e = this;
          setTimeout((function() {
            var t = e.input.refs.input;
            t && (t.focus(), t.selectionStart = 0, t.selectionEnd = t.value.length)
          }), 200)
        }
      }, {
        key: "render",
        value: function() {
          var e = this,
            t = this.state,
            r = t.isEditing,
            n = t.value;
          return c.a.createElement("div", {
            className: this.props.className
          }, r ? c.a.createElement(B.a, nr({
            value: n,
            onChange: this.onChange,
            onBlur: this.onBlur,
            onKeyDown: this.onKeyDown,
            ref: function(t) {
              e.input = t
            }
          }, this.props.inputProps || {})) : c.a.createElement("span", {
            onClick: this.onClickText
          }, c.a.createElement("span", null, n), this.props.clickToEdit ? c.a.createElement(R.a, {
            type: "edit",
            style: {
              marginLeft: "10px"
            }
          }) : null))
        }
      }]), t
    }(c.a.Component);
    sr.propTypes = {
      value: qt.a.string,
      isEditing: qt.a.bool,
      onChange: qt.a.func,
      inputProps: qt.a.object,
      textProps: qt.a.object,
      className: qt.a.any,
      clickToEdit: qt.a.bool
    };
    var cr = sr,
      lr = r(65),
      ur = r(184),
      dr = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      mr = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }();

    function pr(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function hr(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var fr = function(e, t) {
        var r = Object(Yt.stringifyTestSuite)({
            name: e.name,
            cases: e.cases
          }),
          n = new Blob([r], {
            type: "text/plain;charset=utf-8"
          });
        S.a.saveAs(n, "suite_" + e.name + ".json", !0)
      },
      gr = function(e) {
        var t = Object(Yt.toHtml)({
            name: e.name
          }),
          r = new Blob([t], {
            type: "text/plain;charset=utf-8"
          });
        S.a.saveAs(r, e.name + ".html", !0)
      },
      vr = function(e) {
        function t() {
          var e, r, n;
          pr(this, t);
          for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
          return r = n = hr(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n.state = {
            tsContextMenu: {
              x: null,
              y: null,
              isShown: !1
            },
            tscContextMenu: {
              x: null,
              y: null,
              isShown: !1
            },
            tsEditingNameIndex: -1,
            editTestSuiteSource: {
              ts: null,
              visible: !1
            }
          }, n.addTestSuite = function() {
            return Object(he.uniqueName)("__Untitled__", {
              check: function(e) {
                return !n.props.testSuites.find((function(t) {
                  return t.name === e
                }))
              }
            }).then((function(e) {
              return n.props.addTestSuite({
                name: e,
                cases: []
              })
            })).catch((function(e) {
              a.a.error(e.message, 1.5)
            }))
          }, n.addTestCaseToTestSuite = function(e) {
            n.props.updateTestSuite(e.id, {
              cases: e.cases.concat({
                testCaseId: n.props.macros[0] && n.props.macros[0].relativePath,
                loops: 1
              })
            })
          }, n.removeTestCaseFromTestSuite = function(e, t) {
            var r, a, o, i, s, c;
            e.cases.splice(t, 1), n.props.updateTestSuite(e.id, {
              cases: e.cases,
              playStatus: (r = e.playStatus, a = void 0 === r ? {} : r, o = a.doneIndices, i = void 0 === o ? [] : o, s = a.errorIndices, c = function(e) {
                return void 0 === e || e === t ? -1 : e > t ? e - 1 : e
              }, {
                errorIndices: (void 0 === s ? [] : s).map(c).filter((function(e) {
                  return -1 !== e
                })),
                doneIndices: i.map(c).filter((function(e) {
                  return -1 !== e
                }))
              })
            })
          }, n.toggleTestSuiteFold = function(e) {
            n.props.updateTestSuite(e.id, {
              fold: !e.fold
            })
          }, n.foldAllTestSuites = function() {
            n.props.testSuites.forEach((function(e) {
              n.props.updateTestSuite(e.id, {
                fold: !0
              })
            }))
          }, n.onClickTestSuiteMore = function(e, t, r) {
            e.stopPropagation(), e.preventDefault();
            var a = {
              tsContextMenu: {
                x: e.clientX,
                y: e.clientY,
                isShown: !0,
                ts: t,
                tsIndex: r
              }
            };
            setTimeout((function() {
              return n.setState(a)
            }), 20)
          }, n.onClickTsTestCaseMore = function(e, t, r, a, o) {
            e.stopPropagation(), e.preventDefault();
            var i = {
              tscContextMenu: {
                x: e.clientX,
                y: e.clientY,
                isShown: !0,
                tc: t,
                ts: a,
                tcIndex: r,
                tsIndex: o
              }
            };
            setTimeout((function() {
              return n.setState(i)
            }), 20)
          }, n.hideTsContextMenu = function() {
            n.setState({
              tsContextMenu: dr({}, n.state.tsContextMenu, {
                isShown: !1
              })
            })
          }, n.hideTscContextMenu = function() {
            n.setState({
              tscContextMenu: dr({}, n.state.tscContextMenu, {
                isShown: !1
              })
            })
          }, n.onTsMenuClick = function(e, t, r) {
            var o = e.key;
            switch (n.hideTsContextMenu(), o) {
              case "play":
                Object(ee.b)({
                  name: "testSuite"
                }).play({
                  title: t.name,
                  extra: {
                    id: t.id,
                    name: t.name
                  },
                  mode: Object(ee.b)().C.MODE.STRAIGHT,
                  startIndex: 0,
                  resources: t.cases.map((function(e) {
                    return {
                      id: e.testCaseId,
                      loops: e.loops
                    }
                  }))
                });
                break;
              case "edit_source":
                n.setState({
                  editTestSuiteSource: {
                    ts: t,
                    visible: !0
                  }
                });
                break;
              case "rename":
                n.setState({
                  tsEditingNameIndex: r
                });
                break;
              case "export":
                fr(t, n.props.macros);
                break;
              case "create_bookmark":
                var i = prompt("Title for this bookmark", "#" + t.name + ".rpa");
                if (null === i) return;
                return Ht(Object(Yt.toBookmarkData)({
                  bookmarkTitle: i,
                  name: t.name
                })).then((function() {
                  a.a.success("successfully created bookmark!", 1.5)
                }));
              case "export_html":
                return de.a.isFirefox() || de.a.extension.isAllowedFileSchemeAccess().then((function(e) {
                  if (!e) {
                    var t = 'To run test suite from html file, you need to enable "Allow access to file URLs" in extension details page';
                    a.a.warn(t), n.props.addLog("warning", t)
                  }
                })), gr(t);
              case "delete":
                O.a.confirm({
                  title: "Are your sure to delete this test suite?",
                  okText: "Confirm",
                  onOk: function() {
                    return n.props.removeTestSuite(t.id)
                  }
                })
            }
          }, n.onTscMenuClick = function(e, t, r, a, o) {
            var i = e.key;
            switch (n.hideTscContextMenu(), i) {
              case "play_from_here":
                Object(ee.b)({
                  name: "testSuite"
                }).play({
                  title: a.name,
                  extra: {
                    id: a.id,
                    name: a.name
                  },
                  mode: Object(ee.b)().C.MODE.STRAIGHT,
                  startIndex: r,
                  resources: a.cases.map((function(e) {
                    return {
                      id: e.testCaseId,
                      loops: e.loops
                    }
                  }))
                })
            }
          }, n.onChangeTsName = function(e, t, r) {
            return n.setState({
              tsEditingNameIndex: -1
            }), n.props.updateTestSuite(t.id, {
              name: e
            }).then((function() {
              return !0
            }), (function(e) {
              return a.a.error(e.message, 1.5), !1
            }))
          }, n.onChangeTsCase = function(e, t, r, a, o) {
            n.props.updateTestSuite(a.id, {
              cases: Object(oe.setIn)([r, e], t, a.cases)
            })
          }, n.getTsTestCaseClass = function(e, t) {
            if (!t) return "";
            var r = t.doneIndices,
              n = void 0 === r ? [] : r,
              a = t.errorIndices,
              o = void 0 === a ? [] : a;
            return e === t.currentIndex ? "current-tc" : -1 !== o.indexOf(e) ? "error-tc" : -1 !== n.indexOf(e) ? "done-tc" : ""
          }, n.onJSONFileChange = function(e) {
            return setTimeout((function() {
              n.jsonFileInput.value = null
            }), 500), n.onReadFile((function(e) {
              return Object(Yt.parseTestSuite)(e)
            }))(e)
          }, n.onReadFile = function(e) {
            return function(t) {
              var r = [].slice.call(t.target.files);
              if (r && r.length) {
                Promise.all(r.map((function(t) {
                  return new Promise((function(r, n) {
                    var a = new FileReader;
                    a.onload = function(n) {
                      try {
                        var a = n.target.result,
                          o = e(a, t.name);
                        r({
                          data: o
                        })
                      } catch (e) {
                        r({
                          err: e,
                          fileName: t.name
                        })
                      }
                    }, a.readAsText(t)
                  }))
                }))).then((function(e) {
                  var t = e.filter((function(e) {
                      return e.data
                    })),
                    r = e.filter((function(e) {
                      return e.err
                    }));
                  n.props.addTestSuites(t.map((function(e) {
                    return e.data
                  }))).then((function(e) {
                    var t = e.passCount,
                      o = e.failCount,
                      i = e.failTcs;
                    a.a.info([t + " test suite" + (t > 1 ? "s" : "") + " imported!", r.length + o + " test suite" + (r.length + o > 1 ? "s" : "") + " failed!"].join(", "), 3), r.forEach((function(e) {
                      n.props.addLog("error", "in parsing " + e.fileName + ": " + e.err.message)
                    })), i.forEach((function(e) {
                      n.props.addLog("error", "duplicated test suite name: " + e.name)
                    }))
                  }))
                }))
              }
            }
          }, hr(n, r)
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), mr(t, [{
          key: "getPortalContainer",
          value: function() {
            var e = "__context_menu_container__",
              t = document.getElementById(e);
            if (t) return t;
            var r = document.createElement("div");
            return r.id = e, document.body.appendChild(r), r
          }
        }, {
          key: "renderTestSuiteContextMenu",
          value: function() {
            var e = this,
              t = this.state.tsContextMenu,
              r = t.x + window.scrollX;
            r - 230 > 0 && (r -= 230);
            var n = {
                position: "absolute",
                top: t.y + window.scrollY,
                left: r,
                display: t.isShown ? "block" : "none"
              },
              a = {
                width: "230px"
              },
              o = c.a.createElement("div", {
                style: n,
                className: "context-menu"
              }, c.a.createElement(Ut.a, {
                onClickOutside: this.hideTsContextMenu
              }, c.a.createElement(L.a, {
                onClick: function(r) {
                  return e.onTsMenuClick(r, t.ts, t.tsIndex)
                },
                style: a,
                mode: "vertical",
                selectable: !1
              }, c.a.createElement(L.a.Item, {
                key: "play"
              }, "Play"), c.a.createElement(L.a.Item, {
                key: "edit_source"
              }, "Edit source.."), c.a.createElement(L.a.Item, {
                key: "rename"
              }, "Rename.."), c.a.createElement(L.a.Item, {
                key: "export"
              }, "Export"), c.a.createElement(L.a.Item, {
                key: "create_bookmark"
              }, "Add to Bookmarks"), c.a.createElement(L.a.Divider, null), c.a.createElement(L.a.Item, {
                key: "delete"
              }, "Delete"))));
            return u.a.createPortal(o, this.getPortalContainer())
          }
        }, {
          key: "renderTestSuiteCaseContextMenu",
          value: function() {
            var e = this,
              t = this.state.tscContextMenu,
              r = t.x + window.scrollX;
            r - 150 > 0 && (r -= 150);
            var n = {
                position: "absolute",
                top: t.y + window.scrollY,
                left: r,
                display: t.isShown ? "block" : "none"
              },
              a = {
                width: "150px"
              },
              o = c.a.createElement("div", {
                style: n,
                className: "context-menu"
              }, c.a.createElement(Ut.a, {
                onClickOutside: this.hideTscContextMenu
              }, c.a.createElement(L.a, {
                onClick: function(r) {
                  return e.onTscMenuClick(r, t.tc, t.tcIndex, t.ts, t.tsIndex)
                },
                style: a,
                mode: "vertical",
                selectable: !1
              }, c.a.createElement(L.a.Item, {
                key: "play_from_here"
              }, "Replay from here"))));
            return u.a.createPortal(o, this.getPortalContainer())
          }
        }, {
          key: "renderTestSuiteMenu",
          value: function() {
            var e = this;
            return c.a.createElement(L.a, {
              onClick: function(t) {
                switch (t.key) {
                  case "export_all":
                    var r = new $t.a;
                    if (0 === e.props.testSuites.length) return a.a.error("No saved test suites to export", 1.5);
                    var n = Object(oe.nameFactory)();
                    e.props.testSuites.forEach((function(e) {
                      var t = n(e.name);
                      r.file(t + ".json", Object(Yt.stringifyTestSuite)(e))
                    })), r.generateAsync({
                      type: "blob"
                    }).then((function(e) {
                      S.a.saveAs(e, "all_suites.zip")
                    }))
                }
              },
              selectable: !1
            }, c.a.createElement(L.a.Item, {
              key: "export_all"
            }, "Export all (JSON)"), c.a.createElement(L.a.Item, {
              key: "4"
            }, c.a.createElement("label", {
              htmlFor: "select_json_files_for_ts"
            }, "Import JSON"), c.a.createElement("input", {
              multiple: !0,
              type: "file",
              accept: ".json",
              id: "select_json_files_for_ts",
              onChange: this.onJSONFileChange,
              style: {
                display: "none"
              },
              ref: function(t) {
                e.jsonFileInput = t
              }
            })))
          }
        }, {
          key: "renderEditTestSuiteSource",
          value: function() {
            var e = this;
            if (!this.state.editTestSuiteSource.visible) return null;
            var t = this.state.editTestSuiteSource.ts,
              r = Object(Yt.stringifyTestSuite)(t);
            return c.a.createElement(rr, {
              visible: !0,
              value: r,
              validate: function(t) {
                return Object(Yt.validateTestSuiteText)(t, e.props.macros)
              },
              onClose: function() {
                return e.setState({
                  editTestSuiteSource: {
                    visible: !1
                  }
                })
              },
              onChange: function(r) {
                var n = Object(Yt.parseTestSuite)(r);
                e.props.updateTestSuite(t.id, n), e.setState({
                  editTestSuiteSource: {
                    visible: !1
                  }
                })
              }
            })
          }
        }, {
          key: "renderTestSuites",
          value: function() {
            var e = this;
            return c.a.createElement("div", null, c.a.createElement("div", {
              className: "test-suite-actions"
            }, c.a.createElement(T.a, {
              type: "primary",
              onClick: this.addTestSuite
            }, "+ Test Suite"), c.a.createElement(T.a, {
              type: "default",
              onClick: this.foldAllTestSuites
            }, "Fold"), c.a.createElement(N.a, {
              overlay: this.renderTestSuiteMenu(),
              trigger: ["click"]
            }, c.a.createElement(T.a, {
              shape: "circle"
            }, c.a.createElement(R.a, {
              type: "setting"
            })))), !this.props.config.hidePlayTestSuiteTip && this.props.testSuites.length > 0 ? c.a.createElement(Xt.a, {
              type: "info",
              message: "Right click to play test suite",
              onClose: function() {
                e.props.updateConfig({
                  hidePlayTestSuiteTip: !0
                })
              },
              closable: !0,
              showIcon: !0,
              style: {
                margin: "10px",
                paddingRight: "30px"
              }
            }) : null, this.props.config.hideFolderAsTestSuiteTip ? null : c.a.createElement(Xt.a, {
              type: "info",
              message: c.a.createElement("span", null, "New: ", c.a.createElement("a", {
                href: "https://ui.vision/x/idehelp?help=folder_as_testsuites",
                target: "_blank"
              }, "Use folders as test suites")),
              onClose: function() {
                e.props.updateConfig({
                  hideFolderAsTestSuiteTip: !0
                })
              },
              closable: !0,
              showIcon: !0,
              style: {
                margin: "10px",
                paddingRight: "30px"
              }
            }), 0 === this.props.testSuites.length ? c.a.createElement("div", {
              className: "no-data"
            }, "No test suite") : null, c.a.createElement("ul", {
              className: "sidebar-test-suites"
            }, this.props.testSuites.map((function(t, r) {
              return c.a.createElement("li", {
                key: t.id,
                className: Object(oe.cn)("test-suite-item ", {
                  fold: t.fold,
                  playing: t.playStatus && t.playStatus.isPlaying
                })
              }, c.a.createElement("div", {
                className: "test-suite-row",
                onClick: function() {
                  return e.toggleTestSuiteFold(t)
                },
                onContextMenu: function(n) {
                  return e.onClickTestSuiteMore(n, t, r)
                }
              }, c.a.createElement(R.a, {
                type: t.fold ? "folder" : "folder-open"
              }), c.a.createElement(cr, {
                className: "test-suite-title",
                value: t.name,
                onChange: function(n) {
                  return e.onChangeTsName(n, t, r)
                },
                isEditing: r === e.state.tsEditingNameIndex,
                inputProps: {
                  onClick: function(e) {
                    return e.stopPropagation()
                  },
                  onContextMenu: function(e) {
                    return e.stopPropagation()
                  }
                }
              }), r === e.state.tsEditingNameIndex ? null : c.a.createElement(R.a, {
                type: "bars",
                className: "more-button",
                onClick: function(n) {
                  return e.onClickTestSuiteMore(n, t, r)
                }
              })), t.cases.length > 0 ? c.a.createElement("ul", {
                className: "test-suite-cases"
              }, t.cases.map((function(n, a) {
                return c.a.createElement("li", {
                  key: a,
                  className: e.getTsTestCaseClass(a, t.playStatus),
                  onContextMenu: function(o) {
                    return e.onClickTsTestCaseMore(o, n, a, t, r)
                  }
                }, c.a.createElement(R.a, {
                  type: "file",
                  style: {
                    marginRight: "10px",
                    cursor: "pointer"
                  },
                  onClick: function() {
                    e.props.editing.meta.src;
                    return Object(re.default)().saveOrNot().then((function() {
                      return e.props.editTestCase(n.testCaseId), Promise.resolve()
                    }))
                  }
                }), c.a.createElement(K.a, {
                  showSearch: !0,
                  optionFilterProp: "children",
                  value: n.testCaseId,
                  onChange: function(n) {
                    return e.onChangeTsCase("testCaseId", n, a, t, r)
                  },
                  filterOption: function(e, t) {
                    return -1 !== t.props.children.toLowerCase().indexOf(e.toLowerCase())
                  },
                  style: {
                    flex: 1,
                    marginRight: "10px",
                    maxWidth: "50%"
                  },
                  dropdownClassName: "macros-dropdown"
                }, e.props.macros.map((function(e) {
                  return c.a.createElement(K.a.Option, {
                    value: e.relativePath,
                    key: e.relativePath
                  }, e.relativePath.replace(/\.json$/, ""))
                }))), c.a.createElement(B.a, {
                  type: "number",
                  min: 1,
                  value: n.loops,
                  onChange: function(n) {
                    return e.onChangeTsCase("loops", 0 === n.target.value.trim().length ? "1" : n.target.value, a, t, r)
                  },
                  style: {
                    width: "45px",
                    marginRight: "10px"
                  }
                }), c.a.createElement(R.a, {
                  type: "close",
                  style: {
                    cursor: "pointer"
                  },
                  onClick: function() {
                    return e.removeTestCaseFromTestSuite(t, a)
                  }
                }))
              }))) : null, c.a.createElement("div", {
                className: "test-suite-more-actions"
              }, c.a.createElement(T.a, {
                type: "default",
                onClick: function() {
                  return e.addTestCaseToTestSuite(t)
                }
              }, "+ Macro")))
            }))))
          }
        }, {
          key: "render",
          value: function() {
            var e = this;
            return this.props.shouldLoadResources ? c.a.createElement("div", null, this.renderTestSuites(), this.renderTestSuiteContextMenu(), this.renderTestSuiteCaseContextMenu(), this.renderEditTestSuiteSource()) : c.a.createElement(ur.ResourceNotLoaded, {
              name: "Test suite list",
              from: this.props.from,
              showList: function() {
                e.props.setFrom(lr.RunBy.Manual)
              }
            })
          }
        }]), t
      }(c.a.Component),
      yr = Object(k.b)((function(e) {
        return {
          status: e.status,
          from: e.from,
          shouldLoadResources: Object(te.getShouldLoadResources)(e),
          macros: Object(te.getMacroFileNodeList)(e),
          testSuites: Object(te.getTestSuitesWithAllInfo)(e),
          editing: e.editor.editing,
          player: e.player,
          config: e.config
        }
      }), (function(e) {
        return Object(P.b)(dr({}, I, ne.Actions), e)
      }))(vr),
      br = r(393),
      wr = r.n(br),
      Er = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      xr = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }();

    function Sr(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function Cr(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var Tr, _r, Or = function(e) {
        function t() {
          return Sr(this, t), Cr(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), xr(t, [{
          key: "render",
          value: function() {
            var e = this,
              t = (this.props.inputProps || {}).value,
              r = void 0 !== t && t.length > 0;
            return c.a.createElement("span", {
              className: this.props.className,
              style: Er({}, this.props.style || {}, {
                position: "relative"
              })
            }, c.a.createElement(B.a, this.props.inputProps || {}), c.a.createElement(R.a, {
              type: r ? "close" : "search",
              onClick: function(t) {
                r && e.props.inputProps && e.props.inputProps.onChange && e.props.inputProps.onChange({
                  target: {
                    value: ""
                  }
                })
              },
              style: {
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: r ? "pointer" : "auto"
              }
            }))
          }
        }]), t
      }(B.a),
      kr = r(127),
      Pr = r(66),
      Ir = r(151),
      Mr = r.n(Ir),
      Ar = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      Rr = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }(),
      Dr = (Tr = [""], _r = [""], Object.freeze(Object.defineProperties(Tr, {
        raw: {
          value: Object.freeze(_r)
        }
      })));

    function Nr(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function jr(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var Lr = function(e) {
        function t() {
          var e, r, n;
          Nr(this, t);
          for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
          return r = n = jr(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n.state = {
            showRename: !1,
            rename: "",
            folderToImport: "/"
          }, n.unbindKeydown = function() {}, n.onClickRename = function() {
            n.props.renameTestCase(n.state.rename, n.state.renameTcId).then((function() {
              a.a.success("successfully renamed!", 1.5), n.toggleRenameModal(!1)
            })).catch((function(e) {
              a.a.error(e.message, 1.5)
            }))
          }, n.onCancelRename = function() {
            n.toggleRenameModal(!1), n.setState({
              rename: null
            })
          }, n.onChangeRename = function(e) {
            n.setState({
              rename: e.target.value
            })
          }, n.toggleRenameModal = function(e, t) {
            n.setState({
              showRename: e,
              renameTcId: t && t.fullPath
            }), e && setTimeout((function() {
              var e = n.inputRenameTestCase.refs.input;
              e.focus(), e.selectionStart = e.selectionEnd = e.value.length
            }), 100)
          }, n.changeTestCase = function(e) {
            return new Promise((function(t) {
              if (n.props.status !== ae.APP_STATUS.NORMAL) return t(!1);
              if (n.props.editing.meta.src && n.props.editing.meta.src.id === e) return t(!0);
              var r = function() {
                n.props.editTestCase(e), t(!0)
              };
              return 0 !== n.props.editing.commands.length || n.props.editing.meta.src ? Object(re.default)().saveOrNot().then(r) : r()
            }))
          }, n.playTestCase = function(e) {
            n.props.status === ae.APP_STATUS.NORMAL && n.changeTestCase(e).then((function(e) {
              e && setTimeout((function() {
                var e = n.props.editing.commands,
                  t = e.find((function(e) {
                    return "open" === e.cmd.toLowerCase()
                  })),
                  r = n.props.editing.meta.src,
                  a = function() {
                    return r ? r.id : ae.UNTITLED_ID
                  };
                n.props.playerPlay({
                  macroId: a(),
                  title: r && r.name && r.name.length ? r.name : "Untitled",
                  extra: {
                    id: a()
                  },
                  mode: Object(ee.b)().C.MODE.STRAIGHT,
                  startIndex: 0,
                  startUrl: t ? t.target : null,
                  resources: e,
                  postDelay: 1e3 * n.props.player.playInterval
                })
              }), 500)
            }))
          }, n.onJsonOrZipFileChange = function(e) {
            return setTimeout((function() {
              n.jsonFileInput.value = null
            }), 500), n.props.importMacroJsonOrZipFiles(e.target.files, n.state.folderToImport)
          }, n.addTestCase = function() {
            n.props.macroCreateFile({
              dir: "/"
            })
          }, n.onClickMacroNode = function(e, t, r) {
            e.type === kr.FileNodeType.File && n.changeTestCase(e.id)
          }, n.onContextMenuNode = function(e, t, r) {
            return n.showContextMenuForEntry(e, r)
          }, n.onToggleNode = function(e, t) {
            return n.props.updateMacroExtra(e.id, {
              folded: !e.folded
            })
          }, n.onMoveNode = function(e, t, r) {
            n.props.macroMoveEntry({
              entryId: e,
              dirId: t,
              isSourceDirectory: r
            })
          }, n.onDoubleClickNode = function(e, t, r) {
            e.type === kr.FileNodeType.File && n.playTestCase(e.id)
          }, jr(n, r)
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), Rr(t, [{
          key: "componentDidMount",
          value: function() {
            this.bindKeydown()
          }
        }, {
          key: "bindKeydown",
          value: function() {
            var e = this,
              t = function(t) {
                if (e.props.canUseKeyboardShortcuts && !(t.ctrlKey || t.altKey || t.metaKey || t.shiftKey)) switch (wr()(t)) {
                  case "up":
                    return t.preventDefault(), e.props.editMacroByOffset(-1);
                  case "down":
                    return t.preventDefault(), e.props.editMacroByOffset(1)
                }
              };
            document.addEventListener("keydown", t, !0), this.unbindKeydown = function() {
              return document.removeEventListener("keydown", t, !0)
            }
          }
        }, {
          key: "renderMacros",
          value: function() {
            var e = this.props.filteredMacroFileNodeData;
            return this.props.isLoadingMacros && this.props.isMacroFolderNodeListEmpty ? c.a.createElement("div", {
              className: "no-data"
            }, "Loading macros...") : c.a.createElement("div", {
              className: "sidebar-macros"
            }, 0 === e.length ? c.a.createElement("div", {
              className: "no-data"
            }, "No macro found") : null, c.a.createElement(kr.FileTree, {
              nodes: e,
              rootPath: Object(le.getStorageManager)().getMacroStorage().dirPath(""),
              onClick: this.onClickMacroNode,
              onContextMenu: this.onContextMenuNode,
              onToggle: this.onToggleNode,
              onMove: this.onMoveNode,
              onDoubleClick: this.onDoubleClickNode
            }))
          }
        }, {
          key: "showContextMenuForEntry",
          value: function(e, t) {
            switch (e.type) {
              case kr.FileNodeType.File:
                return this.showContextMenuForMacro(e, t);
              case kr.FileNodeType.Folder:
                return this.showContextMenuForFolder(e, t)
            }
          }
        }, {
          key: "showContextMenuForFolder",
          value: function(e, t) {
            var r = this;
            return t.stopPropagation(), t.preventDefault(), Object(Pr.showContextMenu)({
              x: t.clientX,
              y: t.clientY,
              onHide: function() {},
              menuItems: [{
                type: Pr.MenuItemType.Button,
                data: {
                  content: "New macro",
                  onClick: function() {
                    r.props.macroCreateFile({
                      dir: e.entryPath
                    })
                  }
                }
              }, {
                type: Pr.MenuItemType.Button,
                data: {
                  content: "New folder",
                  onClick: function() {
                    r.props.macroCreateFolder({
                      name: "untitled",
                      dir: e.entryPath
                    })
                  }
                }
              }, {
                type: Pr.MenuItemType.Button,
                data: {
                  content: "Rename",
                  onClick: function() {
                    r.props.macroRenameFolder({
                      dir: e.entryPath
                    })
                  }
                }
              }, {
                type: Pr.MenuItemType.Button,
                data: {
                  content: "Delete",
                  onClick: function() {
                    r.props.macroDeleteFolder({
                      dir: e.entryPath
                    })
                  }
                }
              }, {
                type: Pr.MenuItemType.Divider,
                data: {}
              }, {
                type: Pr.MenuItemType.Button,
                data: {
                  content: "Testsuite: Play all in folder",
                  onClick: function() {
                    var t = e.name,
                      r = e.children.filter((function(e) {
                        return e.type === kr.FileNodeType.File
                      }));
                    Object(ee.b)({
                      name: "testSuite"
                    }).play({
                      title: t,
                      mode: Object(ee.b)().C.MODE.STRAIGHT,
                      startIndex: 0,
                      resources: r.map((function(e) {
                        return {
                          id: e.id,
                          loops: 1
                        }
                      })),
                      extra: {
                        id: e.id,
                        name: t
                      }
                    })
                  }
                }
              }, {
                type: Pr.MenuItemType.Button,
                data: {
                  content: "Testsuite: Play in loop",
                  onClick: function() {
                    var t = function(t) {
                      var r = parseInt(t);
                      if (isNaN(r) || r < 1) throw new Error("Invalid loops: " + t);
                      var n = e.name,
                        a = e.children.filter((function(e) {
                          return e.type === kr.FileNodeType.File
                        }));
                      Object(ee.b)({
                        name: "testSuite"
                      }).play({
                        title: n,
                        mode: 1 === r ? Object(ee.b)().C.MODE.STRAIGHT : Object(ee.b)().C.MODE.LOOP,
                        loopsStart: 1,
                        loopsEnd: r,
                        startIndex: 0,
                        resources: a.map((function(e) {
                          return {
                            id: e.id,
                            loops: 1
                          }
                        })),
                        extra: {
                          id: e.id,
                          name: n
                        }
                      })
                    };
                    return function e() {
                      return Object(qe.prompt)({
                        width: 400,
                        title: "How many loops?",
                        message: "",
                        value: "2",
                        placeholder: "Loops",
                        inputType: "number",
                        selectionStart: 0,
                        selectionEnd: 1,
                        okText: "Play",
                        cancelText: "Cancel",
                        onCancel: function() {
                          return Promise.resolve(!0)
                        },
                        onOk: t
                      }).catch((function(t) {
                        a.a.error(t.message), setTimeout(e, 0)
                      }))
                    }()
                  }
                }
              }, {
                type: Pr.MenuItemType.Divider,
                data: {}
              }, {
                type: Pr.MenuItemType.Button,
                data: {
                  content: "Import JSON or ZIP",
                  onClick: function() {
                    var t = document.getElementById("select_json_files_for_macros");
                    t && (r.setState({
                      folderToImport: e.entryPath
                    }), t.click())
                  }
                }
              }]
            })
          }
        }, {
          key: "showContextMenuForMacro",
          value: function(e, t) {
            var r = this,
              n = this.props.macros.find((function(t) {
                return t.fullPath === e.id
              }));
            if (n) {
              t.stopPropagation(), t.preventDefault();
              var o = {
                clientX: t.clientX,
                clientY: t.clientY,
                stopPropagation: function() {},
                preventDefault: function() {}
              };
              return Object(Pr.showContextMenu)({
                x: o.clientX,
                y: o.clientY,
                onHide: function() {},
                menuItems: [{
                  type: Pr.MenuItemType.Button,
                  data: {
                    content: "Play",
                    onClick: function() {
                      r.playTestCase(n.fullPath)
                    }
                  }
                }, {
                  type: Pr.MenuItemType.Button,
                  data: {
                    content: "Testsuite: Play from here",
                    onClick: function() {
                      var t = Object(le.getStorageManager)().getMacroStorage(),
                        r = t.getPathLib(),
                        n = r.dirname(e.entryPath);
                      return t.list(n).then((function(t) {
                        var a = t.filter((function(e) {
                            return e.isFile
                          })),
                          o = a.findIndex((function(t) {
                            return t.fullPath === e.entryPath
                          }));
                        if (-1 !== o) {
                          var i = r.basename(n);
                          Object(ee.b)({
                            name: "testSuite"
                          }).play({
                            title: i,
                            mode: Object(ee.b)().C.MODE.STRAIGHT,
                            startIndex: o,
                            resources: a.map((function(e) {
                              return {
                                id: e.fullPath,
                                loops: 1
                              }
                            })),
                            extra: {
                              id: n,
                              name: i
                            }
                          })
                        }
                      }))
                    }
                  }
                }, {
                  type: Pr.MenuItemType.Button,
                  data: {
                    content: "Rename..",
                    onClick: function() {
                      r.setState({
                        rename: n.name
                      }), r.toggleRenameModal(!0, n)
                    }
                  }
                }, {
                  type: Pr.MenuItemType.Button,
                  data: {
                    content: "Duplicate..",
                    onClick: function() {
                      r.props.duplicateTestCase(n)
                    }
                  }
                }, {
                  type: Pr.MenuItemType.Button,
                  data: {
                    content: "Export as JSON",
                    onClick: function() {
                      r.props.downloadMacroAsJson(n.fullPath)
                    }
                  }
                }, {
                  type: Pr.MenuItemType.Button,
                  data: {
                    content: "Export as ZIP (json, img & csv)",
                    onClick: function() {
                      r.props.downloadMacroAsZip(n.fullPath)
                    }
                  }
                }, {
                  type: Pr.MenuItemType.Button,
                  data: {
                    content: "Export as HTML (plus autorun)",
                    onClick: function() {
                      de.a.isFirefox() || de.a.extension.isAllowedFileSchemeAccess().then((function(e) {
                        if (!e) {
                          var t = 'To run macro from html file, you need to enable "Allow access to file URLs" in extension details page';
                          a.a.warn(t), r.props.addLog("warning", t)
                        }
                      })), r.props.downloadMacroAsHTML(n.fullPath)
                    }
                  }
                }, {
                  type: Pr.MenuItemType.Button,
                  data: {
                    content: "Add shortcut to bookmarks bar",
                    onClick: function() {
                      var e = window.prompt("Title for this bookmark", "#" + n.name + ".rpa");
                      null !== e && Ht(Object(_t.toBookmarkData)({
                        bookmarkTitle: e,
                        path: n.relativePath
                      })).then((function() {
                        a.a.success("successfully created bookmark!", 1.5)
                      }))
                    }
                  }
                }, Object(le.getStorageManager)().isXFileMode() ? {
                  type: Pr.MenuItemType.Button,
                  data: {
                    content: "Copy to Local Storage",
                    onClick: function() {
                      Object(le.getStorageManager)().isStrategyTypeAvailable(le.StorageStrategyType.Browser).then((function() {
                        var e = Object(le.getStorageManager)().getStorageForTarget(le.StorageTarget.Macro, le.StorageStrategyType.Browser);
                        return Object(le.getStorageManager)().getStorageForTarget(le.StorageTarget.Macro, le.StorageStrategyType.XFile).read(n.fullPath, "Text").then((function(t) {
                          var r = Ar({}, t, {
                            id: Object(oe.uid)()
                          });
                          return delete r.status, e.write(r.name, r).then((function() {
                            return a.a.success("copied")
                          }))
                        }))
                      })).catch((function(e) {
                        a.a.warn(e.message)
                      }))
                    }
                  }
                } : null, Object(le.getStorageManager)().isBrowserMode() ? {
                  type: Pr.MenuItemType.Button,
                  data: {
                    content: "Copy to Macro Folder",
                    onClick: function() {
                      Object(le.getStorageManager)().isStrategyTypeAvailable(le.StorageStrategyType.XFile).then((function() {
                        var e = Object(le.getStorageManager)().getStorageForTarget(le.StorageTarget.Macro, le.StorageStrategyType.XFile);
                        return Object(le.getStorageManager)().getStorageForTarget(le.StorageTarget.Macro, le.StorageStrategyType.Browser).read(n.fullPath, "Text").then((function(t) {
                          var r = Ar({}, t, {
                            id: Object(oe.uid)()
                          });
                          return delete r.status, e.write(r.name, r).then((function() {
                            return a.a.success("copied")
                          }))
                        }))
                      })).catch((function(e) {
                        Ve.a.error(e), r.props.updateUI({
                          showXFileNotInstalledDialog: 1
                        })
                      }))
                    }
                  }
                } : null, {
                  type: Pr.MenuItemType.Divider,
                  data: {}
                }, {
                  type: Pr.MenuItemType.Button,
                  data: {
                    content: "Delete",
                    onClick: function() {
                      O.a.confirm({
                        title: "Sure to delete?",
                        content: 'Do you really want to delete "' + n.name + '"?',
                        okText: "Delete",
                        cancelText: "Cancel",
                        onOk: function() {
                          return r.props.removeTestCase(n.fullPath).then((function() {
                            a.a.success("successfully deleted!", 1.5)
                          })).catch((function(e) {
                            O.a.warning({
                              title: "Failed to delete",
                              content: e.message
                            })
                          }))
                        },
                        onCancel: function() {}
                      })
                    }
                  }
                }].filter((function(e) {
                  return e
                }))
              })
            }
          }
        }, {
          key: "renderTestCaseMenu",
          value: function() {
            var e = this;
            return c.a.createElement(L.a, {
              onClick: function(t) {
                switch (t.key) {
                  case "new_macro_folder":
                    e.props.macroCreateFolder({
                      name: "untitled",
                      dir: "/"
                    });
                    break;
                  case "export_all_json":
                    var r = Object(le.getStorageManager)().getMacroStorage().getPathLib(),
                      n = new $t.a;
                    return 0 === e.props.macros.length ? a.a.error("No saved macros to export", 1.5)(Dr) : Promise.all(e.props.macros.map((function(t) {
                      var a, o = r.dirname(t.relativePath),
                        i = r.basename(t.relativePath),
                        s = (a = n, o.split(/\/|\\/g).reduce((function(e, t) {
                          return e.folder(t)
                        }), a));
                      return Object(le.getStorageManager)().getMacroStorage().read(t.fullPath, "Text").then((function(t) {
                        s.file(i, Object(_t.toJSONString)({
                          name: t.name,
                          commands: t.data.commands
                        }, {
                          ignoreTargetOptions: e.props.ignoreTargetOptions
                        }))
                      }))
                    }))).then((function() {
                      return n.generateAsync({
                        type: "blob"
                      }).then((function(e) {
                        S.a.saveAs(e, "all_test_cases.zip")
                      }))
                    }));
                  case "import_json":
                    var o = document.getElementById("select_json_files_for_macros");
                    o && (e.setState({
                      folderToImport: "/"
                    }), o.click())
                }
              },
              selectable: !1
            }, c.a.createElement(L.a.Item, {
              key: "new_macro_folder"
            }, "New Folder"), c.a.createElement(L.a.Divider, null), c.a.createElement(L.a.Item, {
              key: "import_json"
            }, "Import JSON or ZIP"))
          }
        }, {
          key: "renderRenameModal",
          value: function() {
            var e = this;
            return c.a.createElement(O.a, {
              title: "Rename the macro as..",
              okText: "Save",
              cancelText: "Cancel",
              visible: this.state.showRename,
              onOk: this.onClickRename,
              onCancel: this.onCancelRename,
              className: "rename-modal"
            }, c.a.createElement(B.a, {
              style: {
                width: "100%"
              },
              value: this.state.rename,
              onKeyDown: function(t) {
                13 === t.keyCode && e.onClickRename()
              },
              onChange: this.onChangeRename,
              placeholder: "macro name",
              ref: function(t) {
                e.inputRenameTestCase = t
              }
            }))
          }
        }, {
          key: "renderShowListAction",
          value: function() {
            var e = this;
            return c.a.createElement(ur.ResourceNotLoaded, {
              name: "Macro list",
              from: this.props.from,
              showList: function() {
                e.props.setFrom(lr.RunBy.Manual)
              }
            })
          }
        }, {
          key: "render",
          value: function() {
            var e = this;
            return this.props.shouldLoadResources ? this.props.isPlaying && this.props.macros.length > E.a.performanceLimit.fileCount ? c.a.createElement("div", {
              className: "hidden-during-replay"
            }, Mr.a.contentHidden) : c.a.createElement("div", null, c.a.createElement("input", {
              multiple: !0,
              type: "file",
              accept: ".json, .zip",
              id: "select_json_files_for_macros",
              onChange: this.onJsonOrZipFileChange,
              ref: function(t) {
                e.jsonFileInput = t
              },
              style: {
                display: "none"
              }
            }), c.a.createElement("div", {
              className: "test-case-actions"
            }, c.a.createElement(T.a, {
              type: "primary",
              onClick: this.addTestCase
            }, "+ Macro"), c.a.createElement(N.a, {
              overlay: this.renderTestCaseMenu(),
              trigger: ["click"]
            }, c.a.createElement(T.a, {
              shape: "circle"
            }, c.a.createElement(R.a, {
              type: "folder-add"
            }))), c.a.createElement(Or, {
              style: {
                flex: 1
              },
              inputProps: {
                placeholder: "search macro",
                value: this.props.searchText,
                onChange: function(t) {
                  return e.props.setMacroQuery(t.target.value)
                }
              }
            })), this.renderMacros(), this.renderRenameModal()) : this.renderShowListAction()
          }
        }]), t
      }(c.a.Component),
      Fr = Object(k.b)((function(e) {
        return {
          status: e.status,
          from: e.from,
          shouldLoadResources: Object(te.getShouldLoadResources)(e),
          isLoadingMacros: e.isLoadingMacros,
          isMacroFolderNodeListEmpty: Object(te.isMacroFolderNodeListEmpty)(e),
          macroFileNodeData: Object(te.getMacroFileNodeData)(e),
          macros: Object(te.getMacroFileNodeList)(e),
          isPlaying: Object(te.isPlaying)(e),
          testSuites: e.editor.testSuites,
          editing: e.editor.editing,
          player: e.player,
          config: e.config,
          ignoreTargetOptions: Object(te.getShouldSaveAlternativeLocators)(e),
          searchText: e.macroQuery,
          filteredMacroFileNodeData: Object(te.getFilteredMacroFileNodeData)(e),
          canUseKeyboardShortcuts: Object(te.isFocusOnSidebar)(e) && "test_suites" !== e.ui.sidebarTab
        }
      }), (function(e) {
        return Object(P.b)(Ar({}, I, ne.Actions), e)
      }))(Lr),
      Vr = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      Ur = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
          var r = [],
            n = !0,
            a = !1,
            o = void 0;
          try {
            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
          } catch (e) {
            a = !0, o = e
          } finally {
            try {
              !n && s.return && s.return()
            } finally {
              if (a) throw o
            }
          }
          return r
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      },
      Br = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }();

    function Xr(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function Kr(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var $r = function(e) {
        function t() {
          var e, r, n;
          Xr(this, t);
          for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
          return r = n = Kr(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n.state = {
            drag: {
              isDragging: !1,
              startX: 0,
              movingX: 0,
              lastWidth: 260,
              currentMinWidth: 260
            }
          }, n.getSideBarMinWidth = function() {
            var e = n.state.drag,
              t = e.isDragging,
              r = e.lastWidth,
              a = e.currentMinWidth;
            return (t ? a : r) + "px"
          }, n.onResizeDragStart = function(e) {
            e.dataTransfer.setData("text", "");
            var t = window.getComputedStyle(n.$dom),
              r = parseInt(t.width);
            n.setState(Object(oe.setIn)(["drag"], {
              isDragging: !0,
              startX: e.screenX,
              lastWidth: r,
              currentWidth: r
            }, n.state))
          }, n.onResizeDragEnd = function(e) {
            var t = e.screenX - n.state.drag.startX + n.state.drag.lastWidth;
            n.setState(Object(oe.setIn)(["drag"], {
              isDragging: !1,
              startX: 0,
              lastWidth: t,
              currentMinWidth: t
            }))
          }, n.onTryToChangeStorageMode = function(e) {
            var t = Object(le.getStorageManager)();
            t.isStrategyTypeAvailable(e).then((function(r) {
              if (r) return n.props.updateConfig({
                storageMode: e
              }), t.setCurrentStrategyType(e);
              throw new Error("It should be impossible to get isOk as false")
            })).catch((function(e) {
              a.a.warn(e.message), e.message && /xFile is not installed yet/.test(e.message) ? n.props.updateUI({
                showXFileNotInstalledDialog: !0
              }) : n.props.updateUI({
                showSettings: !0,
                settingsTab: "xmodules"
              })
            }))
          }, n.openRegisterSettings = function(e) {
            e && e.preventDefault && e.preventDefault(), n.props.updateUI({
              showSettings: !0,
              settingsTab: "register"
            })
          }, n.onClickSidebar = function() {
            n.props.updateUI({
              focusArea: lr.FocusArea.Sidebar
            })
          }, Kr(n, r)
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), Br(t, [{
          key: "componentDidMount",
          value: function() {
            var e = Object(le.getStorageManager)().getCurrentStrategyType();
            this.setState({
              storageMode: e
            })
          }
        }, {
          key: "prefixHardDisk",
          value: function(e) {
            return Object(le.getStorageManager)().isXFileMode() ? c.a.createElement("div", {
              style: {
                display: "inline-block"
              }
            }, c.a.createElement("img", {
              src: "./img/hard-drive.svg",
              style: {
                position: "relative",
                top: "3px",
                marginRight: "5px",
                height: "15px"
              }
            }), c.a.createElement("span", null, e)) : e
          }
        }, {
          key: "renderXFileNotInstalledModal",
          value: function() {
            var e = this;
            return c.a.createElement(O.a, {
              title: "",
              className: Object(oe.cn)("xfile-not-installed-modal", {
                "left-bottom": !0 === this.props.ui.showXFileNotInstalledDialog
              }),
              width: 350,
              footer: null,
              visible: this.props.ui.showXFileNotInstalledDialog,
              onCancel: function() {
                e.props.updateUI({
                  showXFileNotInstalledDialog: !1
                })
              }
            }, c.a.createElement("p", null, "XFileAccess Module not installed."), c.a.createElement("div", null, c.a.createElement(T.a, {
              type: "primary",
              onClick: function() {
                e.props.updateUI({
                  showXFileNotInstalledDialog: !1,
                  showSettings: !0,
                  settingsTab: "xmodules"
                })
              }
            }, "Open Settings")))
          }
        }, {
          key: "shouldRenderMacroNote",
          value: function() {
            var e = this.props.config,
              t = e.xmodulesStatus;
            if (e.storageMode !== le.StorageStrategyType.XFile) return !1;
            if ("pro" === t) return !1;
            var r = Object(le.getStorageManager)().getMacroStorage();
            return r.getDisplayCount() < r.getTotalCount()
          }
        }, {
          key: "renderMacroNote",
          value: function() {
            if (!this.shouldRenderMacroNote()) return null;
            var e = this.props.config,
              t = e.xmodulesStatus,
              r = (e.storageMode, function() {
                switch (t) {
                  case "unregistered":
                    return [E.a.xmodulesLimit.unregistered.xFileMacroCount, E.a.xmodulesLimit.unregistered.upgradeUrl];
                  case "free":
                    return [E.a.xmodulesLimit.free.xFileMacroCount, E.a.xmodulesLimit.free.upgradeUrl];
                  default:
                    throw new Error("Unsupported xmodulesStatus: '" + t + "'")
                }
              }()),
              n = Ur(r, 2),
              a = n[0],
              o = n[1];
            return c.a.createElement("div", {
              className: "note-for-macros"
            }, "unregistered" === t ? c.a.createElement("div", null, "XModules Free Edition:", c.a.createElement("br", null), "Only the first ", a, " files/folders are displayed.", c.a.createElement("br", null), c.a.createElement("a", {
              href: o,
              onClick: this.openRegisterSettings
            }, "Upgrade to PRO"), " to add more.") : null, "free" === t ? c.a.createElement("div", null, "XModules PRO1 Edition:", c.a.createElement("br", null), "Only the first ", a, " files/folders displayed.", c.a.createElement("br", null), c.a.createElement("a", {
              href: o,
              onClick: this.openRegisterSettings
            }, "Upgrade to PRO2 or Enterprise"), " for unlimited files") : null)
          }
        }, {
          key: "render",
          value: function() {
            var e = this;
            return c.a.createElement("div", {
              className: Object(oe.cn)("sidebar", {
                "with-xmodules-note": this.shouldRenderMacroNote()
              }),
              ref: function(t) {
                e.$dom = t
              },
              style: {
                minWidth: this.getSideBarMinWidth()
              },
              onClickCapture: this.onClickSidebar
            }, c.a.createElement("div", {
              className: Object(oe.cn)("sidebar-inner", {
                "no-tab": !this.props.config.showTestCaseTab
              })
            }, this.props.config.showTestCaseTab ? c.a.createElement(V.a, {
              defaultActiveKey: "macros",
              activeKey: this.props.ui.sidebarTab || "macros",
              onChange: function(t) {
                return e.props.updateUI({
                  sidebarTab: t
                })
              }
            }, c.a.createElement(V.a.TabPane, {
              tab: this.prefixHardDisk("Macros"),
              key: "macros"
            }, c.a.createElement(Fr, null)), c.a.createElement(V.a.TabPane, {
              tab: this.prefixHardDisk("Test Suites"),
              key: "test_suites"
            }, c.a.createElement(yr, null))) : c.a.createElement(Fr, null)), c.a.createElement("div", {
              className: "sidebar-storage-mode"
            }, this.renderMacroNote(), c.a.createElement("div", {
              className: "storage-mode-header"
            }, c.a.createElement("h3", null, "Storage Mode"), Object(le.getStorageManager)().isXFileMode() ? c.a.createElement("img", {
              src: "./img/reload.svg",
              title: "Reload all resources on hard drive",
              style: {
                height: "15px",
                cursor: "pointer"
              },
              onClick: function() {
                Object(le.getStorageManager)().emit(le.StorageManagerEvent.ForceReload), a.a.info("reloaded from hard drive")
              }
            }) : null, c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=storage_mode",
              target: "_blank"
            }, "More Info")), c.a.createElement(K.a, {
              style: {
                width: "100%"
              },
              placeholder: "Storage Mode",
              value: this.props.config.storageMode,
              onChange: this.onTryToChangeStorageMode
            }, c.a.createElement(K.a.Option, {
              value: le.StorageStrategyType.Browser
            }, "Local Storage (in browser)"), c.a.createElement(K.a.Option, {
              value: le.StorageStrategyType.XFile
            }, "File system (on hard drive)"))), c.a.createElement("div", {
              className: Object(oe.cn)("resize-handler", {
                focused: this.state.drag.isDragging
              }),
              draggable: "true",
              onDragStart: this.onResizeDragStart,
              onDragEnd: this.onResizeDragEnd,
              onMouseDown: function() {
                return e.setState(Object(oe.setIn)(["drag", "isDragging"], !0, e.state))
              }
            }), this.renderXFileNotInstalledModal())
          }
        }]), t
      }(c.a.Component),
      Yr = Object(k.b)((function(e) {
        return {
          status: e.status,
          testSuites: e.editor.testSuites,
          editing: e.editor.editing,
          player: e.player,
          config: e.config,
          ui: e.ui
        }
      }), (function(e) {
        return Object(P.b)(Vr({}, I), e)
      }))($r),
      Gr = (r(976), r(394)),
      Wr = r.n(Gr),
      Hr = r(604),
      zr = r.n(Hr),
      qr = r(605),
      Jr = r(606),
      Zr = r(47),
      Qr = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      en = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }();

    function tn(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }

    function rn(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function nn(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var an = {
        cmd: "",
        target: "",
        value: ""
      },
      on = [an],
      sn = E.a.ui.commandItemHeight,
      cn = function(e) {
        function t() {
          var e, r, n, o, i, s;
          rn(this, t);
          for (var l = arguments.length, u = Array(l), d = 0; d < l; d++) u[d] = arguments[d];
          return r = n = nn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), n.state = {
            cursor: null,
            contextMenu: {
              x: null,
              y: null,
              isShown: !1
            },
            visionFindPreview: {
              visible: !1,
              url: null,
              timer: null,
              left: -9999,
              top: -9999
            }
          }, n.resetSourceCodeCursor = function(e) {
            return Qr({}, e ? {
              cursor: {
                line: 0,
                ch: 0
              }
            } : {})
          }, n.onDetailChange = function(e, t) {
            n.props.updateSelectedCommand(tn({}, e, t))
          }, n.onChangeCommandsView = function(e) {
            switch (e) {
              case "table_view":
              case "source_view":
                var t = n.props.sourceErrMsg ? "source_view" : e;
                n.props.setEditorActiveTab(t), "source_view" === e && n.codeMirror && n.state.cursor && setTimeout((function() {
                  n.codeMirror.setCursor(n.state.cursor, !0, !0)
                }), 200)
            }
          }, n.onSourceBlur = function() {
            var e = n.props,
              t = e.sourceTextModified;
            e.sourceText;
            n.props.saveSourceCodeToEditing(t)
          }, n.onChangeEditSource = function(e, t, r) {
            n.props.setSourceCurrent(r)
          }, n.onClickFind = function() {
            var e = n.state.lastOperation,
              t = n.props.selectedCommand;
            new Promise((function(r, o) {
              switch (t.cmd) {
                case "visionFind":
                case "visualSearch":
                case "visualAssert":
                case "visualVerify":
                case "visionLimitSearchArea":
                case "visionLimitSearchAreaRelative":
                case "XClick":
                case "XClickRelative":
                case "XMove":
                case "XMoveRelative":
                case "OCRExtract":
                case "OCRExtractRelative":
                case "OCRSearch":
                  var i = n.props.editing.meta.selectedIndex;
                  return ("desktop" === n.props.config.cvScope ? (a.a.info("About to take desktop screenshot in 3 seconds"), Object(he.delay)((function() {}), 3e3)) : Promise.resolve()).then((function() {
                    return n.playLine(i, {
                      overrideScope: {
                        "!TIMEOUT_WAIT": 0
                      },
                      commandExtra: {
                        throwError: !0,
                        debugVisual: !0
                      }
                    }), r(!0)
                  }));
                default:
                  M.default.ask("PANEL_HIGHLIGHT_DOM", {
                    lastOperation: e,
                    locator: t.target
                  }).then(r, o)
              }
            })).catch((function(e) {
              a.a.error(e.message, 1.5)
            }))
          }, n.onToggleSelect = function() {
            var e = n.props,
              t = e.selectedCommand,
              r = e.config;
            new Promise((function(e, o) {
              var i = function() {
                  n.props.status === ae.APP_STATUS.INSPECTOR ? n.props.stopInspecting() : n.props.startInspecting(), e(!0)
                },
                s = function() {
                  return ("desktop" === r.cvScope ? (a.a.info("About to take desktop screenshot in 3 seconds"), Object(he.delay)((function() {
                    return M.default.ask("PANEL_SELECT_AREA_ON_DESKTOP")
                  }), 3e3)) : M.default.ask("PANEL_SELECT_AREA_ON_CURRENT_PAGE")).then((function(e) {
                    return n.props.renameVisionImage(e.fileName)
                  })).then(e, o)
                };
              switch (t.cmd) {
                case "visionFind":
                case "visualSearch":
                case "visualAssert":
                case "visualVerify":
                case "OCRExtract":
                case "OCRExtractRelative":
                case "visionLimitSearchAreaRelative":
                case "XClickRelative":
                case "XMoveRelative":
                case "XMove":
                  return s();
                case "OCRSearch":
                  throw new Error("No select possible in OCR mode, just enter the text");
                case "XClick":
                  if (/^ocr=/i.test(t.target)) throw new Error("No select possible in OCR mode, just enter the text");
                  return s();
                case "visionLimitSearchArea":
                  return "desktop" === r.cvScope ? s() : i();
                default:
                  return i()
              }
            })).catch((function(e) {
              a.a.error(e.message)
            }))
          }, n.onKeyDown = function(e) {
            if (n.props.canUseKeyboardShortcuts && -1 === ["INPUT", "TEXTAREA"].indexOf(e.target.tagName)) {
              var t = wr()(e.keyCode),
                r = Object(he.isMac)() ? e.metaKey : e.ctrlKey,
                a = !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey);
              if (r) switch (t) {
                case "c":
                  return n.props.copyCurrentCommand();
                case "x":
                  return n.props.cutCurrentCommand();
                case "v":
                  return n.props.pasteAtCurrentCommand()
              }
              if (a) switch (t) {
                case "delete":
                case "backspace":
                  var o = n.props.editing.meta.selectedIndex;
                  if (-1 === o) return;
                  return n.props.removeCommand(o);
                case "up":
                  if (null !== n.props.selectedCommandIndex) {
                    var i = Math.max(0, n.props.selectedCommandIndex - 1);
                    n.selectCommandAndScroll(i)
                  }
                  break;
                case "down":
                  if (null !== n.props.selectedCommandIndex) {
                    var s = Math.min(n.props.commandCount - 1, n.props.selectedCommandIndex + 1);
                    n.selectCommandAndScroll(s)
                  }
              }
            }
          }, n.onDoubleClick = (o = void 0, i = void 0, s = void 0, function(e) {
            var t = 1 * new Date;
            o === e.screenX && i === e.screenY && t - s < 300 && "BUTTON" !== e.target.tagName && function() {
              var t = Zr.a.parentWithClass("real-command", e.target);
              if (t) {
                var r = parseInt(t.getAttribute("data-index"));
                isNaN(r) || n.playLine(r)
              }
            }(), o = e.screenX, i = e.screenY, s = t
          }), n.onMoveCommand = function(e, t) {
            n.props.moveCommands(e, t)
          }, n.onStartDraggingCommand = function() {
            n.props.setIsDraggingCommand(!0)
          }, n.onEndDraggingCommand = function() {
            n.props.setIsDraggingCommand(!1)
          }, n.scheduleHideVisionFindPreview = function() {
            Ve()("scheduleHideVisionFindPreview");
            var e = n.state.visionFindPreview.timer;
            return clearTimeout(e), setTimeout((function() {
              n.state.visionFindPreview.visible && (Ve()("to hide preview"), n.setState({
                visionFindPreview: {
                  visible: !1
                }
              }))
            }), 3e3)
          }, n.onMouseEnterTarget = function(e, t) {
            if (Ve()("onMouseOverTarget"), n.commandHasVisionImage(t) && !n.state.visionFindPreview.visible) {
              clearTimeout(n.state.visionFindPreview.timer);
              var r = Object(le.getStorageManager)().getVisionStorage(),
                a = e.target.getBoundingClientRect(),
                o = t.target.trim().split("@")[0],
                i = {
                  visible: !0,
                  left: a.left,
                  top: a.top + a.height
                };
              r.exists(o).then((function(e) {
                return e ? r.getLink(o).then((function(e) {
                  return n.setState({
                    visionFindPreview: Qr({}, i, {
                      url: e,
                      timer: n.scheduleHideVisionFindPreview()
                    })
                  })
                })) : n.setState({
                  visionFindPreview: Qr({}, i, {
                    url: "./img/not_found.png",
                    timer: n.scheduleHideVisionFindPreview()
                  })
                })
              }))
            }
          }, n.onMouseLeaveTarget = function(e, t) {
            Ve()("onMouseOutTarget"), n.commandHasVisionImage(t) && n.state.visionFindPreview.visible && (clearTimeout(n.state.visionFindPreview.timer), n.setState({
              visionFindPreview: {
                visible: !1
              }
            }))
          }, n.jumpToSourceCode = function(e) {
            n.props.setEditorActiveTab("source_view"), setTimeout((function() {
              for (var t = n.props.editing.commands, r = n.state.cmEdtiorInstance, a = document.querySelector(".source-view"), o = parseInt(window.getComputedStyle(a).height, 10), i = (o - 60) / 2, s = function(e) {
                  return 5 + (e.targetOptions ? e.targetOptions.length + 2 : 0)
                }, c = 4, l = 0; l < e; l++) c += s(t[l]);
              var u = c + s(t[e]);
              Ve()("margin", i, o), r.scrollIntoView({
                ch: 0,
                line: c
              }, i), r.setSelection({
                ch: 0,
                line: c
              }, {
                ch: 0,
                line: u
              }, {
                scroll: !1
              })
            }), 100)
          }, n.commandClassName = function(e, t) {
            var r = n.props,
              a = r.editing,
              o = r.player,
              i = r.breakpointIndices,
              s = r.doneCommandIndices,
              c = r.errorCommandIndices,
              l = o.nextCommandIndex,
              u = (a.commands, []);
            return -1 !== i.indexOf(t) && u.push("breakpoint-command"), "comment" === e.cmd && u.push("comment-command"), n.props.canUseKeyboardShortcuts || u.push("blur"), t === l ? u.push("running-command") : -1 !== c.indexOf(t) ? u.push("error-command") : -1 !== s.indexOf(t) && u.push("done-command"), t === a.meta.selectedIndex && u.push("selected-command"), u.join(" ")
          }, n.needVirtualList = function() {
            var e = n.props.editing.commands;
            return (void 0 === e ? [] : e).length >= 0
          }, n.virtualCommmandList = function(e) {
            var t = e.virtual,
              r = e.itemHeight,
              a = n.props.editing.commands,
              o = n.isPlayerStopped();
            return c.a.createElement("div", {
              style: t.style
            }, t.items.map((function(e, t) {
              return e.header ? c.a.createElement("div", {
                className: "command-row header-row",
                key: "header"
              }, c.a.createElement("div", {
                className: "row-col index-col"
              }), c.a.createElement("div", {
                className: "row-col command-col"
              }, "Command"), c.a.createElement("div", {
                className: "row-col target-col"
              }, "Target"), c.a.createElement("div", {
                className: "row-col value-col"
              }, "Value"), c.a.createElement("div", {
                className: "row-col op-col"
              }, "Ops")) : e.footer ? c.a.createElement("div", {
                className: "command-row footer-row",
                key: "footer",
                onClick: function() {
                  n.props.updateUI({
                    focusArea: lr.FocusArea.CommandTable
                  }), n.props.insertCommand(an, a.length)
                }
              }, "Add") : c.a.createElement(Jr.CommandItem, {
                key: e.key,
                index: e.realIndex + 1,
                command: e,
                style: {
                  height: r + "px"
                },
                className: "command-row real-command " + n.commandClassName(e, e.realIndex),
                attributes: {
                  "data-index": "" + e.realIndex
                },
                editable: o,
                onClick: function(e, t) {
                  return n.onClickCommand(e, t)
                },
                onContextMenu: function(e, t) {
                  return n.onContextMenu(e, t.realIndex)
                },
                onToggleComment: function(e, t) {
                  n.props.toggleComment(t.realIndex), e.stopPropagation()
                },
                onDuplicate: function(e, t) {
                  n.props.duplicateCommand(t.realIndex), e.stopPropagation()
                },
                onMouseEnterTarget: n.onMouseEnterTarget,
                onMouseLeaveTarget: n.onMouseLeaveTarget,
                onMoveCommand: n.onMoveCommand,
                onDragStart: n.onStartDraggingCommand,
                onDragEnd: n.onEndDraggingCommand
              })
            })))
          }, n.onContextMenu = function(e, t) {
            Ve()("onContextMenu"), n.setState({
              contextMenu: {
                x: e.clientX,
                y: e.clientY,
                isShown: !0,
                commandIndex: t
              }
            }), n.props.selectCommand(t, !0), e.preventDefault(), e.stopPropagation()
          }, n.onHideMenu = function(e) {
            0 === e.button && n.setState({
              contextMenu: Qr({}, n.state.contextMenu, {
                isShown: !1
              })
            })
          }, n.onClickCommand = function(e, t) {
            n.props.updateUI({
              focusArea: lr.FocusArea.CommandTable
            }), n.props.selectCommand(t.realIndex, !0)
          }, n.getTestCaseName = function() {
            var e = n.props.editing.meta.src;
            return e && e.name && e.name.length ? e.name : "Untitled"
          }, n.playLine = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              r = n.props.editing.commands,
              a = n.props.editing.meta.src;
            return n.setState({
              lastOperation: "play"
            }), n.props.playerPlay(Qr({
              macroId: a && a.id,
              title: n.getTestCaseName(),
              extra: {
                id: a && a.id
              },
              mode: ee.a.C.MODE.SINGLE,
              startIndex: e,
              startUrl: null,
              resources: r,
              postDelay: 1e3 * n.props.config.playCommandInterval
            }, t))
          }, nn(n, r)
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), en(t, [{
          key: "componentDidMount",
          value: function() {
            document.addEventListener("click", this.onHideMenu), document.addEventListener("click", this.onDoubleClick), document.addEventListener("keydown", this.onKeyDown)
          }
        }, {
          key: "componentWillReceiveProps",
          value: function(e) {
            if (e.editing.meta.src !== this.props.editing.meta.src || e.editing.commands !== this.props.editing.commands) {
              var t = e.editing.meta.src !== this.props.editing.meta.src;
              this.setState(this.resetSourceCodeCursor(t))
            }
            if (e.status === ae.APP_STATUS.PLAYER && e.player.nextCommandIndex !== this.props.player.nextCommandIndex) {
              var r = document.querySelector(".table-wrapper"),
                n = sn;
              if (!r) return;
              r.scrollTop = n * e.player.nextCommandIndex
            }
            if (e.status === ae.APP_STATUS.RECORDER && e.editing.commands.length > this.props.editing.commands.length) {
              var a = document.querySelector(".table-wrapper"),
                o = sn;
              if (!a) return;
              setTimeout((function() {
                a.scrollTop = o * e.editing.commands.length * 2
              }), 100)
            }
          }
        }, {
          key: "isPlayerStopped",
          value: function() {
            return this.props.player.status === ae.PLAYER_STATUS.STOPPED
          }
        }, {
          key: "isSelectedCommandVisualSearch",
          value: function(e) {
            var t = this.props,
              r = t.editing,
              n = t.config,
              a = r.commands,
              o = r.meta.selectedIndex,
              i = a && a.length ? a : on,
              s = e || i[o];
            return !!s && ("desktop" === n.cvScope && "visionLimitSearchArea" === s.cmd || -1 !== ["visionFind", "visualSearch", "visualAssert", "visualVerify", "XClick", "XMove", "XClickRelative", "XMoveRelative", "OCRExtract", "OCRExtractRelative", "visionLimitSearchAreaRelative"].indexOf(s.cmd))
          }
        }, {
          key: "commandHasVisionImage",
          value: function(e) {
            if (!this.isSelectedCommandVisualSearch(e)) return !1;
            return !(-1 !== ["XClick", "XClickRelative", "XMove", "XMoveRelative", "OCRExtract", "OCRExtractRelative", "visionLimitSearchArea", "visionLimitSearchAreaRelative"].indexOf(e.cmd) && !/\.png/i.test(e.target))
          }
        }, {
          key: "selectCommandAndScroll",
          value: function(e) {
            this.props.selectCommand(e, !0), this.props.scrollToCommandAtIndex(e)
          }
        }, {
          key: "renderVisionFindPreview",
          value: function() {
            var e = this.state.visionFindPreview,
              t = e.visible,
              r = e.url,
              n = e.left,
              a = e.top;
            return t ? c.a.createElement("div", {
              style: {
                position: "absolute",
                width: "100px",
                height: "100px",
                border: "1px solid #ccc",
                left: n + "px",
                top: a + "px",
                backgroundColor: "#eee",
                backgroundImage: "url(" + r + ")",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }
            }) : null
          }
        }, {
          key: "renderContextMenu",
          value: function() {
            var e = this,
              t = this.props,
              r = t.clipboard,
              n = t.status,
              a = this.state.contextMenu,
              o = n === ae.APP_STATUS.NORMAL,
              i = document.documentElement.clientWidth,
              s = (document.documentElement.clientHeight, a.x + window.scrollX),
              l = a.y + window.scrollY;
            if (!o) return null;
            s + 240 > i && (s -= 240);
            var u = {
                position: "absolute",
                top: l,
                left: s,
                display: a.isShown ? "block" : "none"
              },
              d = {
                width: "240px"
              },
              m = a.commandIndex,
              p = -1 !== this.props.breakpointIndices.indexOf(m),
              h = Object(he.isMac)() ? "⌘" : "CTRL-";
            return c.a.createElement("div", {
              style: u,
              id: "context_menu"
            }, c.a.createElement(L.a, {
              onClick: function(t) {
                switch (t.key) {
                  case "cut":
                    return e.props.cutCommand(m);
                  case "copy":
                    return e.props.copyCommand(m);
                  case "paste":
                    return e.props.pasteCommand(m);
                  case "insert":
                    return e.props.insertCommand(an, m + 1);
                  case "delete":
                    return e.props.removeCommand(m);
                  case "run_line":
                    return e.playLine(m);
                  case "play_from_here":
                    var r = e.props.editing.commands;
                    return e.setState({
                      lastOperation: "play"
                    }), e.props.playerPlay({
                      macroId: e.props.macroId,
                      title: e.getTestCaseName(),
                      extra: {
                        id: e.props.macroId
                      },
                      mode: ee.a.C.MODE.STRAIGHT,
                      startIndex: m,
                      startUrl: null,
                      resources: r,
                      postDelay: 1e3 * e.props.config.playCommandInterval
                    });
                  case "play_to_here":
                    var n = e.props.editing.commands;
                    return e.setState({
                      lastOperation: "play"
                    }), e.props.playerPlay({
                      macroId: e.props.macroId,
                      title: e.getTestCaseName(),
                      extra: {
                        id: e.props.macroId
                      },
                      mode: ee.a.C.MODE.STRAIGHT,
                      startIndex: 0,
                      startUrl: null,
                      resources: n,
                      postDelay: 1e3 * e.props.config.playCommandInterval,
                      breakpoints: [m]
                    });
                  case "add_breakpoint":
                    return e.props.addBreakpoint(e.props.macroId, m);
                  case "remove_breakpoint":
                    return e.props.removeBreakpoint(e.props.macroId, m);
                  case "jump_to_source_code":
                    return e.jumpToSourceCode(m);
                  case "record_from_here":
                    return e.props.setIndexToInsertRecorded(m + 1), e.props.toggleRecorderSkipOpen(!0), e.props.startRecording()
                }
              },
              style: d,
              mode: "vertical",
              selectable: !1
            }, c.a.createElement(L.a.Item, {
              key: "cut"
            }, c.a.createElement("span", null, "Cut"), c.a.createElement("span", {
              className: "shortcut"
            }, h, "X")), c.a.createElement(L.a.Item, {
              key: "copy"
            }, c.a.createElement("span", null, "Copy"), c.a.createElement("span", {
              className: "shortcut"
            }, h, "C")), c.a.createElement(L.a.Item, {
              key: "paste",
              disabled: 0 === r.commands.length
            }, c.a.createElement("span", null, "Paste"), c.a.createElement("span", {
              className: "shortcut"
            }, h, "P")), c.a.createElement(L.a.Item, {
              key: "delete"
            }, c.a.createElement("span", null, "Delete")), c.a.createElement(L.a.Divider, null), c.a.createElement(L.a.Item, {
              key: "insert"
            }, "Insert new line"), c.a.createElement(L.a.Divider, null), c.a.createElement(L.a.Item, {
              key: "jump_to_source_code"
            }, "Jump to source code"), c.a.createElement(L.a.Item, {
              key: p ? "remove_breakpoint" : "add_breakpoint"
            }, p ? "Remove breakpoint" : "Add breakpoint"), c.a.createElement(L.a.Divider, null), c.a.createElement(L.a.Item, {
              key: "run_line"
            }, "Execute this command"), c.a.createElement(L.a.Item, {
              key: "play_from_here"
            }, "Play from here"), c.a.createElement(L.a.Item, {
              key: "play_to_here"
            }, "Play to this point"), c.a.createElement(L.a.Item, {
              key: "record_from_here"
            }, "Record from here")))
          }
        }, {
          key: "renderTable",
          value: function() {
            var e = this.props,
              t = e.editing,
              r = (e.player, t.commands),
              n = (r && r.length ? r : on).reduce((function(e, t, r) {
                var n = e.dataSource,
                  a = e.indent,
                  o = Object(nt.indentCreatedByCommand)(t.cmd),
                  i = o.selfIndent,
                  s = o.nextIndent;
                return n.push(Qr({}, t, {
                  key: Math.random(),
                  indent: a + i,
                  realIndex: r
                })), {
                  dataSource: n,
                  indent: Math.max(0, a + i + s)
                }
              }), {
                dataSource: [],
                indent: 0
              }).dataSource;
            return this.needVirtualList() ? this.renderVirtualTable(n) : this.renderNormalTable(n)
          }
        }, {
          key: "renderVirtualTable",
          value: function(e) {
            var t = zr()({
                container: this.listContainer
              })(this.virtualCommmandList),
              r = [{
                header: !0
              }].concat(function(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                  return r
                }
                return Array.from(e)
              }(e), [{
                footer: !0
              }]);
            return c.a.createElement("div", {
              className: "t-body"
            }, this.listContainer ? c.a.createElement(t, {
              itemHeight: sn,
              items: r
            }) : null)
          }
        }, {
          key: "renderNormalTable",
          value: function(e) {
            var t = this,
              r = this.props,
              n = r.editing,
              a = r.player,
              o = (r.doneCommandIndices, r.errorCommandIndices, a.nextCommandIndex, n.commands),
              i = this.isPlayerStopped(),
              s = {
                dataSource: e,
                columns: [{
                  title: "Command",
                  dataIndex: "cmd",
                  key: "cmd",
                  width: 130
                }, {
                  title: "Target",
                  dataIndex: "target",
                  key: "target",
                  width: 190
                }, {
                  title: "Value",
                  dataIndex: "value",
                  key: "value"
                }, {
                  title: "Ops",
                  key: "ops",
                  width: 80,
                  render: function(e, r, n) {
                    return c.a.createElement("div", null, c.a.createElement(T.a, {
                      disabled: !i,
                      shape: "circle",
                      onClick: function(e) {
                        t.props.removeCommand(n), e.stopPropagation()
                      }
                    }, c.a.createElement(R.a, {
                      type: "minus"
                    })), c.a.createElement(T.a, {
                      disabled: !i,
                      shape: "circle",
                      onClick: function(e) {
                        t.props.duplicateCommand(n), e.stopPropagation()
                      }
                    }, c.a.createElement(R.a, {
                      type: "plus"
                    })))
                  }
                }],
                pagination: !1,
                footer: function() {
                  return c.a.createElement("div", {
                    className: "table-footer",
                    onClick: function(e) {
                      t.props.insertCommand(an, o.length)
                    }
                  }, "Add")
                },
                onRowClick: function(e, r, n) {
                  t.props.selectCommand(r)
                },
                rowClassName: this.commandClassName
              };
            return c.a.createElement(Wr.a, s)
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              r = t.status,
              n = t.editing,
              a = t.config,
              o = t.ui,
              i = n.commands,
              s = n.meta.selectedIndex,
              l = this.isPlayerStopped(),
              u = (i && i.length ? i : on)[s],
              d = l && !!u,
              m = r === ae.APP_STATUS.INSPECTOR,
              p = this.isSelectedCommandVisualSearch();
            return c.a.createElement("div", {
              className: "editor-wrapper"
            }, c.a.createElement("div", {
              className: "tabs-wrapper"
            }, c.a.createElement(V.a, {
              type: "card",
              className: "commands-view",
              activeKey: this.props.editor.activeTab,
              onChange: this.onChangeCommandsView
            }, c.a.createElement(V.a.TabPane, {
              tab: "Table View",
              key: "table_view"
            }, c.a.createElement("div", {
              className: "form-group table-wrapper",
              style: {
                marginBottom: 0
              },
              ref: function(t) {
                e.listContainer = t
              }
            }, this.renderTable()), c.a.createElement("div", {
              className: "form-group fields-wrapper",
              style: {
                marginBottom: 0
              }
            }, c.a.createElement(z.a, null, c.a.createElement(z.a.Item, {
              label: "Command",
              labelCol: {
                span: 4
              },
              wrapperCol: {
                span: 20
              }
            }, c.a.createElement("div", {
              className: "flex-row"
            }, c.a.createElement(K.a, {
              showSearch: !0,
              optionFilterProp: "children",
              placeholder: "command",
              disabled: !d,
              value: u && u.cmd,
              onChange: function(t) {
                return e.onDetailChange("cmd", t)
              },
              filterOption: function(e, t) {
                return 0 === t.key.toLowerCase().indexOf(e.toLowerCase())
              },
              style: {
                flex: 1,
                maxWidth: "60%",
                marginRight: "10px"
              },
              size: "default"
            }, nt.availableCommands.map((function(e) {
              return c.a.createElement(K.a.Option, {
                value: e,
                key: e
              }, Object(nt.commandText)(e))
            }))), c.a.createElement("div", {
              style: {
                flex: .6,
                display: "flex",
                justifyContent: "space-between"
              }
            }, u && u.cmd ? c.a.createElement("a", {
              style: {
                marginRight: "10px",
                whiteSpace: "nowrap"
              },
              href: "https://ui.vision/x/idehelp?cmd=" + u.cmd.toLowerCase(),
              target: "_blank"
            }, "Info for this command") : c.a.createElement("span", null), c.a.createElement(T.a, {
              style: {
                padding: "0 10px"
              },
              title: "Toggle comment",
              disabled: !d,
              onClick: function() {
                e.props.toggleCommentOnSelectedCommand()
              }
            }, "//")))), c.a.createElement(z.a.Item, {
              label: "Target",
              className: "target-row",
              labelCol: {
                span: 4
              },
              wrapperCol: {
                span: 20
              }
            }, c.a.createElement("div", {
              className: "flex-row"
            }, u && u.targetOptions && u.targetOptions.length && Object(nt.doesCommandSupportTargetOptions)(u.cmd) ? c.a.createElement(qr.SelectInput, {
              disabled: !d,
              getId: function(e) {
                return e
              },
              stringifyOption: function(e) {
                return e
              },
              value: u.target,
              options: u.targetOptions,
              onChange: function(t) {
                return e.onDetailChange("target", t)
              }
            }) : c.a.createElement(B.a.TextArea, {
  style: {
    height: "28px",
    resize: "none",
    flex: 1,
    maxWidth: "60%",
    marginRight: "10px"
  },
  placeholder: "target",
  disabled: !d,
  value: u && u.target,
  onChange: function(t) {
    return e.onDetailChange("target", t.target.value)
  },
  size: "default"
}), c.a.createElement(T.a, {
              disabled: !d,
              onClick: this.onToggleSelect
            }, m ? c.a.createElement("span", null, (p ? "👁" : "") + "Cancel") : c.a.createElement("span", null, (p ? "👁" : "") + "Select")), c.a.createElement(T.a, {
              disabled: !d,
              onClick: this.onClickFind
            }, (p ? "👁" : "") + "Find"))), c.a.createElement(z.a.Item, {
              label: "Value",
              labelCol: {
                span: 4
              },
              wrapperCol: {
                span: 20
              },
              style: {
                marginBottom: 0
              }
            }, c.a.createElement(B.a, {
              disabled: !d,
              value: u && u.value,
              onChange: function(t) {
                return e.onDetailChange("value", t.target.value)
              },
              style: {
                width: "100%"
              },
              placeholder: "value",
              size: "default"
            }))))), c.a.createElement(V.a.TabPane, {
              tab: "Source View (JSON)",
              key: "source_view",
              className: "source-view"
            }, c.a.createElement("pre", {
              className: "source-error"
            }, this.props.sourceErrMsg), c.a.createElement(Jt.UnControlled, {
              ref: function(t) {
                e.codeMirror = t
              },
              className: this.props.sourceErrMsg ? "has-error" : "no-error",
              value: this.props.sourceText,
              onChange: this.onChangeEditSource,
              onBlur: this.onSourceBlur,
              onCursor: function(t, r) {
                e.setState({
                  cmEdtiorInstance: t
                }), r.sticky && e.setState({
                  cursor: {
                    line: r.line,
                    ch: r.ch
                  }
                })
              },
              options: {
                mode: {
                  name: "javascript",
                  json: !0
                },
                lineNumbers: !0,
                matchBrackets: !0,
                autoCloseBrackets: !0
              }
            }))), "desktop" === a.cvScope && !1 !== o.shouldEnableDesktopAutomation || !0 === o.shouldEnableDesktopAutomation ? c.a.createElement("div", {
              className: "vision-type",
              onClick: function() {
                e.props.updateUI({
                  showSettings: !0,
                  settingsTab: "vision"
                })
              }
            }, c.a.createElement("img", {
              src: "./img/computer.svg"
            }), c.a.createElement("span", null, "Desktop mode active")) : null), this.renderContextMenu(), this.renderVisionFindPreview())
          }
        }]), t
      }(c.a.Component),
      ln = Object(k.b)((function(e) {
        return {
          status: e.status,
          editor: e.editor,
          editing: e.editor.editing,
          clipboard: e.editor.clipboard,
          player: e.player,
          config: e.config,
          ui: e.ui,
          sourceErrMsg: e.editor.editingSource.error,
          sourceText: e.editor.editingSource.pure,
          sourceTextModified: e.editor.editingSource.current,
          selectedCommand: Object(te.editorSelectedCommand)(e),
          selectedCommandIndex: Object(te.editorSelectedCommandIndex)(e),
          commandCount: Object(te.editorCommandCount)(e),
          breakpointIndices: Object(te.getBreakpoints)(e),
          doneCommandIndices: Object(te.getDoneCommandIndices)(e),
          errorCommandIndices: Object(te.getErrorCommandIndices)(e),
          macroId: Object(te.getCurrentMacroId)(e),
          canUseKeyboardShortcuts: Object(te.isFocusOnCommandTable)(e)
        }
      }), (function(e) {
        return Object(P.b)(Qr({}, I, ne.Actions), e)
      }))(cn),
      un = (r(582), r(110), r(482), r(607)),
      dn = r(608),
      mn = r(609),
      pn = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      hn = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }();

    function fn(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function gn(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var vn = function(e) {
        function t() {
          var e, r, n;
          fn(this, t);
          for (var o = arguments.length, i = Array(o), s = 0; s < o; s++) i[s] = arguments[s];
          return r = n = gn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), n.state = {
            activeTabForLogScreenshot: "Logs",
            showCSVModal: !1,
            csvText: "",
            csvFile: "",
            drag: {
              isDragging: !1,
              startY: 0,
              lastHeight: 220,
              currentMinHeight: 220
            },
            searchImageText: ""
          }, n.getBottomMinHeight = function() {
            var e = n.state.drag,
              t = e.isDragging,
              r = e.lastHeight,
              a = e.currentMinHeight;
            return (t ? a : r) + "px"
          }, n.onResizeDragStart = function(e) {
            e.dataTransfer.setData("text", "");
            var t = window.getComputedStyle(n.$dom),
              r = parseInt(t.height);
            n.setState(Object(oe.setIn)(["drag"], {
              isDragging: !0,
              startY: e.screenY,
              lastHeight: r,
              currentHeight: r
            }, n.state))
          }, n.onResizeDragEnd = function(e) {
            var t = e.screenY - n.state.drag.startY,
              r = n.state.drag.lastHeight - t;
            n.setState(Object(oe.setIn)(["drag"], {
              isDragging: !1,
              startY: 0,
              lastHeight: r,
              currentMinHeight: r
            }))
          }, n.onFileChange = function(e) {
            var t = Object(le.getStorageManager)().getCSVStorage(),
              r = [].slice.call(e.target.files);
            if (r && r.length) {
              Promise.all(r.map((function(e) {
                return new Promise((function(t, r) {
                  var n = new FileReader;
                  n.onload = function(r) {
                    var n = r.target.result;
                    t({
                      text: n,
                      fileName: e.name
                    })
                  }, n.readAsText(e)
                }))
              }))).then((function(e) {
                var r = e.map((function(e) {
                    return e.fileName
                  })),
                  o = e.map((function(e) {
                    return t.write(Object(oe.sanitizeFileName)(e.fileName), new Blob([e.text]))
                  }));
                return Promise.all(o).then((function() {
                  return n.props.listCSV()
                })).then((function() {
                  a.a.info(e.length + " csv files imported"), n.props.addLog("info", e.length + " csv files imported: " + r.join(", "))
                }))
              })).catch((function(e) {
                n.props.addLog("error", e.message)
              }))
            }
          }, n.removeCSV = function(e) {
            Object(le.getStorageManager)().getCSVStorage().remove(e.name).then((function() {
              return n.props.listCSV()
            })).then((function() {
              a.a.success("successfully deleted"), n.props.addLog("info", e.name + " deleted")
            }))
          }, n.viewCSV = function(e) {
            window.open("./csv_editor.html?csv=" + e.name, "", "width=600,height=500,scrollbars=true")
          }, n.downloadCSV = function(e) {
            Object(le.getStorageManager)().getCSVStorage().read(e.fullPath, "Text").then((function(t) {
              var r = new Blob([t]);
              S.a.saveAs(r, e.name)
            }))
          }, n.onImageFileChange = function(e) {
            var t = [].slice.call(e.target.files);
            if (t && t.length) {
              var r = function(e) {
                var t = e.dataUrl,
                  r = e.name;
                return Object(oe.uniqueName)(r, {
                  check: function(e) {
                    return Object(le.getStorageManager)().getVisionStorage().exists(e).then((function(e) {
                      return !e
                    }))
                  }
                }).then((function(e) {
                  return Object(le.getStorageManager)().getVisionStorage().write(Object(oe.sanitizeFileName)(e), Object(oe.dataURItoBlob)(t)).then((function() {
                    return e
                  }))
                })).catch((function(e) {
                  Ve.a.error(e.stack)
                }))
              };
              Promise.all(t.map((function(e) {
                return new Promise((function(t, n) {
                  var a = new FileReader;
                  a.onload = function(n) {
                    try {
                      var a = n.target.result,
                        o = r({
                          dataUrl: a,
                          name: e.name
                        });
                      t(o)
                    } catch (r) {
                      t({
                        err: r,
                        fileName: e.name
                      })
                    }
                  }, a.readAsDataURL(e)
                }))
              }))).then((function(e) {
                a.a.success(e.length + " image files imported into Vision tab"), n.props.addLog("info", e.length + " image files imported: " + e.join(", ")), n.props.listVisions()
              })).catch((function(e) {
                Ve.a.error(e.stack), n.props.addLog("error", e.message)
              }))
            }
          }, n.viewVision = function(e) {
            window.open("./vision_editor.html?vision=" + e, "", "width=600,height=500,scrollbars=true")
          }, n.renameVision = function(e, t) {
            return Object(le.getStorageManager)().getVisionStorage().rename(e, Object(oe.ensureExtName)(".png", t)).then((function() {
              a.a.success("Successfully renamed"), n.props.listVisions()
            })).catch((function(e) {
              throw a.a.error(e.message), e
            }))
          }, n.isVisionNameValid = function(e) {
            return Promise.resolve(Object(oe.withFileExtension)(e, (function(e) {
              try {
                Object(oe.validateStandardName)(e, !0)
              } catch (e) {
                throw a.a.error(e.message), e
              }
              return e
            }))).then((function() {
              return Object(le.getStorageManager)().getVisionStorage().exists(e).then((function(t) {
                return t && a.a.error("'" + e + "' already exists"), !t
              }))
            }), (function() {
              return !1
            }))
          }, n.duplicateVision = function(e) {
            return Object(le.getStorageManager)().getVisionStorage().copy(e).then((function() {
              a.a.success("Successfully copied"), n.props.listVisions()
            })).catch((function(e) {
              Ve.a.error(e)
            }))
          }, n.deleteVision = function(e) {
            return O.a.confirm({
              title: "Sure to delete?",
              okText: "Delete",
              onOk: function() {
                return Object(le.getStorageManager)().getVisionStorage().remove(e).then((function() {
                  a.a.success("Successfully deleted"), n.props.listVisions()
                })).catch((function(e) {
                  Ve.a.error(e)
                }))
              },
              onCancel: function() {
                return Promise.resolve(!0)
              }
            })
          }, n.addVisionNameToTargetBox = function(e) {
            var t = n.props,
              r = t.config,
              o = t.selectedCommand;
            if (!(!!o && ("desktop" === r.cvScope && "visionLimitSearchArea" === o.cmd || -1 !== ["visionFind", "visualSearch", "visualAssert", "visualVerify", "XClick", "XMove", "XClickRelative", "XMoveRelative", "OCRExtract", "OCRExtractRelative", "visionLimitSearchAreaRelative"].indexOf(o.cmd)))) return a.a.error("Image names can only be added to the target box if a vision related command is selected");
            n.props.updateSelectedCommand({
              target: e
            })
          }, n.exportAllVisions = function() {
            var e = new $t.a,
              t = Object(le.getStorageManager)().getVisionStorage();
            t.list().then((function(r) {
              if (0 === r.length) return a.a.error("No vision to export");
              var n = r.map((function(r) {
                return t.read(r.fullPath, "ArrayBuffer").then((function(t) {
                  e.file(r.name, t, {
                    binary: !0
                  })
                }))
              }));
              return Promise.all(n).then((function() {
                e.generateAsync({
                  type: "blob"
                }).then((function(e) {
                  S.a.saveAs(e, "vision-images-export.zip")
                }))
              }))
            }))
          }, n.downloadScreenshot = function(e, t) {
            return Object(le.getStorageManager)().getScreenshotStorage().read(t, "ArrayBuffer").then((function(t) {
              S.a.saveAs(new Blob([new Uint8Array(t)]), e)
            }))
          }, gn(n, r)
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), hn(t, [{
          key: "componentDidMount",
          value: function() {
            var e = this;
            Object(le.getStorageManager)().on(le.StorageManagerEvent.StrategyTypeChanged, (function(t) {
              e.forceUpdate()
            }))
          }
        }, {
          key: "componentWillReceiveProps",
          value: function(e) {
            var t = this;
            if (e.logs.length !== this.props.logs.length) {
              var r = document.querySelector(".log-content");
              if (!r) return;
              setTimeout((function() {
                var e = r.children[r.children.length - 1];
                e && e.scrollIntoView()
              }), 100)
            }
            if (e.visions.length > this.props.visions.length) {
              var n = e.visions.filter((function(e) {
                return !t.props.visions.find((function(t) {
                  return t.name === e.name
                }))
              }));
              n.length > 1 && n.sort((function(e, t) {
                return e.createTime > t.createTime
              }));
              var a = n[0];
              setTimeout((function() {
                var e = document.getElementById(a.name);
                e && e.scrollIntoView({
                  block: "center",
                  behavior: "smooth"
                })
              }), 100)
            }
          }
        }, {
          key: "logStyle",
          value: function(e) {
            return e.options && e.options.color ? {
              color: e.options.color
            } : e.options && e.options.ignored ? {
              color: "orange"
            } : void 0
          }
        }, {
          key: "prefixHardDisk",
          value: function(e) {
            return Object(le.getStorageManager)().isXFileMode() ? c.a.createElement("div", {
              style: {
                display: "inline-block"
              }
            }, c.a.createElement("img", {
              src: "./img/hard-drive.svg",
              style: {
                position: "relative",
                top: "3px",
                marginRight: "5px",
                height: "15px"
              }
            }), c.a.createElement("span", null, e)) : e
          }
        }, {
          key: "shouldUseFileSaverForDownloadingScreenshot",
          value: function() {
            return !!de.a.isFirefox() || Object(le.getStorageManager)().isXFileMode()
          }
        }, {
          key: "shouldRenderLogStack",
          value: function(e) {
            if (e.stack.length <= 1) return !1;
            switch (e.type) {
              case "error":
              case "warning":
                return !0;
              case "status":
                return /^Running/.test(e.text);
              default:
                return !1
            }
          }
        }, {
          key: "renderCSVModal",
          value: function() {
            var e = this;
            return c.a.createElement(O.a, {
              title: "Preview - " + this.state.csvFile,
              visible: this.state.showCSVModal,
              onCancel: function() {
                return e.setState({
                  showCSVModal: !1,
                  csvText: "",
                  csvFile: ""
                })
              },
              className: "csv-preview-modal",
              footer: null
            }, c.a.createElement(B.a.TextArea, {
              style: {
                width: "100%"
              },
              value: this.state.csvText,
              readOnly: !0,
              rows: 10
            }))
          }
        }, {
          key: "renderCSVTable",
          value: function() {
            var e = this;
            return this.props.shouldLoadResources ? "CSV" !== this.state.activeTabForLogScreenshot ? null : this.props.isPlaying && this.props.csvs.length > E.a.performanceLimit.fileCount ? c.a.createElement("div", {
              className: "hidden-during-replay"
            }, Mr.a.contentHidden) : c.a.createElement(un.CsvList, {
              list: this.props.csvs,
              viewCSV: this.viewCSV,
              removeCSV: this.removeCSV,
              downloadCSV: this.downloadCSV
            }) : c.a.createElement(ur.ResourceNotLoaded, {
              name: "CSV list",
              from: this.props.from,
              showList: function() {
                e.props.setFrom(lr.RunBy.Manual)
              }
            })
          }
        }, {
          key: "renderVisionSection",
          value: function() {
            var e = this;
            return this.props.shouldLoadResources ? c.a.createElement("div", {
              className: "vision-content"
            }, c.a.createElement("div", {
              className: "vision-top-actions"
            }, c.a.createElement("div", {
              className: "main-actions"
            }, c.a.createElement("div", {
              className: "main-actions-left"
            }, c.a.createElement("span", {
              className: "load-image-button ant-btn ant-btn-primary"
            }, c.a.createElement("label", {
              htmlFor: "select_image_files"
            }, "Load Image"), c.a.createElement("input", {
              multiple: !0,
              type: "file",
              accept: "image/*",
              id: "select_image_files",
              onChange: this.onImageFileChange,
              ref: function(t) {
                e.imageFileInput = t
              },
              style: {
                display: "none"
              }
            })), c.a.createElement(T.a, {
              onClick: this.exportAllVisions
            }, "Export All")), c.a.createElement(Or, {
              style: {
                flex: .8
              },
              inputProps: {
                placeholder: "search image",
                value: this.state.searchImageText,
                onChange: function(t) {
                  return e.setState({
                    searchImageText: t.target.value
                  })
                }
              }
            })), c.a.createElement("a", {
              className: "more-info",
              target: "_blank",
              href: "https://ui.vision/x/idehelp?help=visual"
            }, "More Info")), this.renderVisionTable()) : c.a.createElement("div", {
              className: "vision-content"
            }, c.a.createElement(ur.ResourceNotLoaded, {
              name: "Image list",
              from: this.props.from,
              showList: function() {
                e.props.setFrom(lr.RunBy.Manual)
              }
            }))
          }
        }, {
          key: "renderVisionTable",
          value: function() {
            return "Vision" !== this.state.activeTabForLogScreenshot ? null : this.props.isPlaying && this.props.visions.length > E.a.performanceLimit.fileCount ? c.a.createElement("div", {
              className: "hidden-during-replay"
            }, Mr.a.contentHidden) : this.$dom ? c.a.createElement(dn.VisionList, {
              visions: this.props.visions,
              intersectRoot: this.$dom,
              query: this.state.searchImageText,
              isNameValid: this.isVisionNameValid,
              renameVision: this.renameVision,
              viewVision: this.viewVision,
              duplicateVision: this.duplicateVision,
              deleteVision: this.deleteVision,
              copyNameToTarget: this.addVisionNameToTargetBox
            }) : null
          }
        }, {
          key: "renderScreenshots",
          value: function() {
            return "Screenshots" !== this.state.activeTabForLogScreenshot ? null : this.$dom ? c.a.createElement(mn.ScreenshotList, {
              screenshots: this.props.screenshots,
              intersectRoot: this.$dom,
              downloadScreenshot: this.downloadScreenshot
            }) : null
          }
        }, {
          key: "renderVariableTable",
          value: function() {
            if ("Variables" !== this.state.activeTabForLogScreenshot) return null;
            var e = [{
                title: "Name",
                dataIndex: "key",
                key: "key",
                width: "40%"
              }, {
                title: "Value",
                dataIndex: "value",
                key: "value",
                render: function(e) {
                  return JSON.stringify(e) || "undefined"
                }
              }],
              t = this.props.config,
              r = function(e) {
                var t, r = e.withUserDefined,
                  n = void 0 === r || r,
                  a = e.withCommonInternal,
                  o = e.withAdvancedInternal,
                  i = function(e) {
                    return -1 !== ["!url", "!clipboard", "!runtime", "!statusok", "!errorignore"].map((function(e) {
                      return e.toUpperCase()
                    })).indexOf(e.toUpperCase())
                  },
                  s = [n ? function(e) {
                    return !/^!/.test(e)
                  } : null, a ? i : null, o ? function(e) {
                    return /^!/.test(e) && !i(e)
                  } : null].filter((function(e) {
                    return !!e
                  }));
                return t = s,
                  function() {
                    for (var e = 0, r = t.length; e < r; e++)
                      if (t[e].apply(t, arguments)) return !0;
                    return !1
                  }
              }({
                withCommonInternal: t.showCommonInternalVariables,
                withAdvancedInternal: t.showAdvancedInternalVariables
              }),
              n = {
                columns: e,
                dataSource: this.props.variables.filter((function(e) {
                  return r(e.key)
                })),
                pagination: !1,
                bordered: !0,
                size: "middle",
                rowKey: "key",
                onRowClick: function(e, t, r) {},
                rowClassName: function(e, t) {
                  var r = _e();
                  return r && r.isReadOnly(e.key) ? "read-only" : ""
                }
              };
            return c.a.createElement(Wr.a, n)
          }
        }, {
          key: "renderLogStack",
          value: function(e) {
            var t = this,
              r = e.stack.slice(0, -1).reverse();
            return 0 === r.length ? null : c.a.createElement("div", {
              style: {
                marginLeft: "80px"
              }
            }, r.map((function(e, r) {
              return c.a.createElement("div", {
                key: r
              }, "At ", c.a.createElement("a", {
                href: "#",
                onClick: function(r) {
                  r.preventDefault(), "number" == typeof e.commandIndex && e.macroId && t.props.gotoLineInMacro(e.macroId, e.commandIndex)
                }
              }, "Line ", e.commandIndex + 1, " in ", e.macroName))
            })))
          }
        }, {
          key: "renderLogText",
          value: function(e) {
            var t = this;
            if ("function" == typeof e.text) return e.text({
              renderText: this.renderLogText.bind(this)
            });
            if (-1 === ["error", "warning"].indexOf(e.type)) return e.text;
            var r = function() {
                if (/XClick\/XMove\/XType \d+ commands limit reached/.test(e.text) || /OCR conversion limit reached/.test(e.text) || /PROXY \d+ commands? limit reached/.test(e.text)) {
                  var r = t.props.config.xmodulesStatus,
                    n = function() {
                      switch (r) {
                        case "unregistered":
                          return "PRO";
                        case "free":
                          return "PRO2 or Enterprise";
                        default:
                          return null
                      }
                    }();
                  return n ? c.a.createElement("span", null, c.a.createElement("span", null, e.text), c.a.createElement("a", {
                    href: "#",
                    style: {
                      marginLeft: "10px"
                    },
                    onClick: function(e) {
                      e.preventDefault(), t.props.updateUI({
                        showSettings: !0,
                        settingsTab: "register"
                      })
                    }
                  }, "Get a ", n, " license key to remove this limit")) : e.text
                }
                return /(XModule|xFile) is not installed yet/.test(e.text) ? c.a.createElement("span", null, c.a.createElement("span", null, e.text), c.a.createElement("a", {
                  href: "#",
                  style: {
                    marginLeft: "10px"
                  },
                  onClick: function(e) {
                    e.preventDefault(), t.props.updateUI({
                      showSettings: !0,
                      settingsTab: "xmodules"
                    })
                  }
                }, "Install now")) : /OCR feature disabled/.test(e.text) ? c.a.createElement("span", null, c.a.createElement("span", null, "OCR feature disabled. Please enable it in the "), c.a.createElement("a", {
                  href: "#",
                  onClick: function(e) {
                    e.preventDefault(), t.props.updateUI({
                      showSettings: !0,
                      settingsTab: "ocr"
                    })
                  }
                }, "OCR Settings")) : e.text
              }(),
              n = e.stack || [],
              a = n[n.length - 1];
            return a ? c.a.createElement("span", null, c.a.createElement("a", {
              href: "#",
              onClick: function(e) {
                e.preventDefault(), "number" == typeof a.commandIndex && a.macroId && t.props.gotoLineInMacro(a.macroId, a.commandIndex)
              }
            }, c.a.createElement("span", null, "Line ", a.commandIndex + 1), a.isSubroutine ? c.a.createElement("span", null, " (Sub: ", a.macroName, ")") : null), c.a.createElement("span", null, ": "), r) : r
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.state.activeTabForLogScreenshot,
              r = this.props.config.logFilter || "All",
              n = this.props.logs.filter({
                All: function() {
                  return !0
                },
                Echo: function(e) {
                  return "echo" === e.type || "error" === e.type || "warning" === e.type || "status" === e.type
                },
                Error: function(e) {
                  return "error" === e.type || "report" === e.type
                },
                None: function() {
                  return !1
                }
              } [r] || function() {
                return !0
              });
            return c.a.createElement("div", {
              className: "logs-screenshots",
              ref: function(t) {
                e.$dom = t
              },
              style: {
                height: this.getBottomMinHeight()
              }
            }, this.renderCSVModal(), c.a.createElement("div", {
              className: Object(oe.cn)("resize-handler", {
                focused: this.state.drag.isDragging
              }),
              draggable: "true",
              onDragStart: this.onResizeDragStart,
              onDragEnd: this.onResizeDragEnd,
              onMouseDown: function() {
                return e.setState(Object(oe.setIn)(["drag", "isDragging"], !0, e.state))
              }
            }), c.a.createElement(V.a, {
              type: "card",
              onChange: function(t) {
                e.setState({
                  activeTabForLogScreenshot: t
                }), "Screenshots" === t && e.props.listScreenshots()
              }
            },
c.a.createElement(V.a.TabPane, {
  tab: "Target",
  key: "Target"
}, c.a.createElement(Jt.UnControlled, {
  ref: function(t) {
    e.codeMirror = t
  },
  className: this.props.sourceErrMsg ? "has-error" : "no-error",
  value: "",
  onFocus: function(t) {
    let input = document.querySelector('textarea[placeholder="target"]');
    t.setValue(input.value);
    return;
  },
  onChange: function(t) {
    let input = document.querySelector('textarea[placeholder="target"]'); 
    let lastValue = input.value;
    input.value = t.getValue();
    let event = new Event('input', { bubbles: true });
    event.simulated = true;
    let tracker = input._valueTracker;
    if (tracker) {
      tracker.setValue(lastValue);
    }
    input.dispatchEvent(event);
    return;
  },
  onCursor: function(t, r) {
    e.setState({
      cmEdtiorInstance: t
    }), r.sticky && e.setState({
      cursor: {
        line: r.line,
        ch: r.ch
      }
    })
  },
  options: {
    mode: {
      name: "javascript",
      json: 0
    },
    lineNumbers: !0,
    matchBrackets: !0,
    autoCloseBrackets: !0
  }
})),
            c.a.createElement(V.a.TabPane, {
              tab: "Logs",
              key: "Logs"
            }, c.a.createElement("ul", {
              className: "log-content"
            }, n.map((function(t, r) {
              return c.a.createElement("li", {
                className: t.type,
                key: t.id,
                style: e.logStyle(t)
              }, c.a.createElement("span", {
                className: "log-type"
              }, Object(Ue.renderLogType)(t)), c.a.createElement("pre", {
                className: "log-detail"
              }, e.renderLogText(t)), e.shouldRenderLogStack(t) ? e.renderLogStack(t) : null)
            })))), c.a.createElement(V.a.TabPane, {
              tab: "Variables",
              key: "Variables"
            }, c.a.createElement("div", {
              className: "variable-content"
            }, c.a.createElement("div", {
              className: "variable-options"
            }, c.a.createElement(W.a, {
              onChange: function(t) {
                return e.props.updateConfig({
                  showCommonInternalVariables: t.target.checked
                })
              },
              checked: this.props.config.showCommonInternalVariables
            }, "Show most common ", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=internalvars",
              target: "_blank"
            }, "internal variables")), c.a.createElement(W.a, {
              onChange: function(t) {
                return e.props.updateConfig({
                  showAdvancedInternalVariables: t.target.checked
                })
              },
              checked: this.props.config.showAdvancedInternalVariables
            }, "Show advanced ", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=internalvars",
              target: "_blank"
            }, "internal variables"))), this.renderVariableTable())), c.a.createElement(V.a.TabPane, {
              tab: this.prefixHardDisk("Screenshots"),
              key: "Screenshots"
            }, this.renderScreenshots()), c.a.createElement(V.a.TabPane, {
              tab: this.prefixHardDisk("CSV"),
              key: "CSV"
            }, c.a.createElement("div", {
              className: "csv-content"
            }, this.renderCSVTable())), c.a.createElement(V.a.TabPane, {
              tab: this.prefixHardDisk("👁Visual"),
              key: "Vision"
            }, this.renderVisionSection())), c.a.createElement("div", {
              className: "ls-toolbox"
            }, "Logs" === t ? c.a.createElement("div", null, c.a.createElement(K.a, {
              value: this.props.config.logFilter,
              onChange: function(t) {
                e.props.updateConfig({
                  logFilter: t
                })
              },
              style: {
                width: "70px",
                marginRight: "10px"
              },
              dropdownMatchSelectWidth: !1,
              size: "small"
            }, c.a.createElement(K.a.Option, {
              value: "All"
            }, "All"), c.a.createElement(K.a.Option, {
              value: "Echo"
            }, "Echo"), c.a.createElement(K.a.Option, {
              value: "Error"
            }, "Error & Reports"), c.a.createElement(K.a.Option, {
              value: "None"
            }, "No log")), c.a.createElement(T.a, {
              size: "small",
              onClick: this.props.clearLogs
            }, "Clear")) : null, "Screenshots" === t ? c.a.createElement(T.a, {
              size: "small",
              onClick: this.props.clearScreenshots
            }, "Clear") : null, "CSV" === t && this.props.shouldLoadResources ? c.a.createElement(T.a, {
              size: "small",
              onClick: function() {
                return e.fileInput.click()
              }
            }, "Import CSV", c.a.createElement("input", {
              multiple: !0,
              type: "file",
              accept: ".csv",
              onChange: this.onFileChange,
              style: {
                display: "none"
              },
              ref: function(t) {
                e.fileInput = t
              }
            })) : null))
          }
        }]), t
      }(c.a.Component),
      yn = Object(k.b)((function(e) {
        return {
          hasSelectedCommand: e.editor.editing && e.editor.editing.meta && -1 !== e.editor.editing.meta.selectedIndex,
          selectedCommand: Object(te.editorSelectedCommand)(e),
          shouldLoadResources: Object(te.getShouldLoadResources)(e),
          isPlaying: Object(te.isPlaying)(e),
          status: e.status,
          from: e.from,
          logs: e.logs,
          screenshots: e.screenshots,
          variables: e.variables,
          csvs: e.csvs,
          visions: e.visions,
          config: e.config
        }
      }), (function(e) {
        return Object(P.b)(pn({}, I, ne.Actions), e)
      }))(vn),
      bn = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      wn = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }();

    function En(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function xn(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var Sn = function(e) {
        function t() {
          return En(this, t), xn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), wn(t, [{
          key: "render",
          value: function() {
            var e = /windows/i.test(window.navigator.userAgent);
            return c.a.createElement("div", {
              className: "dashboard"
            }, c.a.createElement(ln, null), c.a.createElement(yn, null), c.a.createElement("div", {
              className: "online-help"
            }, c.a.createElement("div", {
              style: {
                visibility: e ? "visible" : "hidden"
              }
            }, c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=visual",
              target: "_blank"
            })), c.a.createElement("div", null, "UI.Vision RPA:", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=forum",
              target: "_blank"
            }, " User Forum"), " -", c.a.createElement("a", {
              href: "https://ui.vision/x/idehelp?help=docs",
              target: "_blank"
            }, " Online Help"))))
          }
        }]), t
      }(c.a.Component),
      Cn = Object(k.b)((function(e) {
        return {}
      }), (function(e) {
        return Object(P.b)(bn({}, I), e)
      }))(Sn),
      Tn = (r(373), r(1002), Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      }),
      _n = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }();

    function On(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function kn(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var Pn = function(e) {
        function t() {
          var e, r, n;
          On(this, t);
          for (var a = arguments.length, o = Array(a), i = 0; i < a; i++) o[i] = arguments[i];
          return r = n = kn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), n.hideBackupAlert = function() {
            n.props.updateConfig({
              lastBackupActionTime: 1 * new Date
            }), n.$app.classList.remove("with-alert")
          }, n.onClickBackup = function() {
            n.props.runBackup(), n.hideBackupAlert()
          }, n.onClickNoBackup = function() {
            n.hideBackupAlert()
          }, n.onClickMainArea = function() {
            n.props.updateUI({
              focusArea: lr.FocusArea.Unknown
            })
          }, kn(n, r)
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), _n(t, [{
          key: "componentDidMount",
          value: function() {
            var e = this,
              t = function() {
                M.default.ask("PANEL_TIME_FOR_BACKUP", {}).then((function(t) {
                  t && e.$app.classList.add("with-alert")
                }))
              };
            this.timer = setInterval(t, 3e5), t()
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            clearInterval(this.timer)
          }
        }, {
          key: "renderPreinstallModal",
          value: function() {
            var e = this;
            return this.props.ui.newPreinstallVersion ? c.a.createElement(O.a, {
              className: "preinstall-modal",
              visible: !0,
              title: "New demo macros available",
              okText: "Yes, overwrite",
              cancelText: "Skip",
              onOk: function() {
                return e.props.updateUI({
                  newPreinstallVersion: !1
                }), e.props.preinstall(!0).then((function() {
                  a.a.success("demo macros updated")
                })).catch((function(e) {
                  a.a.error(e.message)
                }))
              },
              onCancel: function() {
                e.props.updateUI({
                  newPreinstallVersion: !1
                }), e.props.preinstall(!1)
              }
            }, c.a.createElement("p", {
              style: {
                fontSize: "14px"
              }
            }, "Do you want to overwrite the demo macros with their latest versions?")) : null
          }
        }, {
          key: "render",
          value: function() {
            var e = this;
            return c.a.createElement("div", {
              className: "app with-sidebar",
              ref: function(t) {
                e.$app = t
              }
            }, c.a.createElement("div", {
              className: "backup-alert"
            }, c.a.createElement("span", null, "Do you want to run the automated backup?"), c.a.createElement("span", {
              className: "backup-actions"
            }, c.a.createElement(T.a, {
              type: "primary",
              onClick: this.onClickBackup
            }, "Yes"), c.a.createElement(T.a, {
              onClick: this.onClickNoBackup
            }, "No"))), c.a.createElement("div", {
              className: "app-inner"
            }, c.a.createElement(Yr, null), c.a.createElement("section", {
              className: "content",
              onClickCapture: this.onClickMainArea
            }, c.a.createElement(Ft, null), c.a.createElement(Cn, null))), this.renderPreinstallModal())
          }
        }]), t
      }(s.Component),
      In = Object(k.b)((function(e) {
        return {
          ui: e.ui
        }
      }), (function(e) {
        return Object(P.b)(Tn({}, I), e)
      }))(Pn),
      Mn = r(610),
      An = r.n(Mn),
      Rn = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      Dn = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
          var r = [],
            n = !0,
            a = !1,
            o = void 0;
          try {
            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
          } catch (e) {
            a = !0, o = e
          } finally {
            try {
              !n && s.return && s.return()
            } finally {
              if (a) throw o
            }
          }
          return r
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      };
    r(100);
    var Nn = r(611),
      jn = r.n(Nn),
      Ln = r(19),
      Fn = r(108),
      Vn = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      };

    function Un(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }

    function Bn(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
      return Array.from(e)
    }
    var Xn = function(e) {
        var t = e.editor.editing,
          r = t.meta,
          n = function(e, t) {
            var r = {};
            for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
            return r
          }(t, ["meta"]),
          a = r.src && r.src.id;
        if (!a) return e;
        if (!Object(te.getMacroFileNodeList)(e).find((function(e) {
            return e.fullPath === a
          }))) return e;
        var o = e.editor.currentMacro,
          i = Object(Fn.c)({
            data: n
          }),
          s = !jn()(o && o.data, i.data);
        return Object(oe.setIn)(["editor", "editing", "meta", "hasUnsaved"], s, e)
      },
      Kn = function(e, t, r) {
        var n = function(e, t, r) {
          switch (t) {
            case "add":
              for (var n = e.slice(), a = 0, o = e.length; a < o; a++) n[a] >= r && (n[a] += 1);
              return n;
            case "delete":
              for (var i = e.slice(), s = e.length - 1; s >= 0; s--) i[s] > r ? i[s] -= 1 : i[s] === r && i.splice(s, 1);
              return i;
            default:
              throw new Error("updateBreakpointIndices: unknown action, '" + t + "'")
          }
        };
        if ("number" == typeof r) return n(e, t, r);
        if (Array.isArray(r)) {
          var a = r.slice();
          return a.sort((function(e, t) {
            return t - e
          })), a.reduce((function(e, r) {
            return n(e, t, r)
          }), e)
        }
        throw new Error("updateBreakpointIndices: actionIndex should be either number or an array of number")
      },
      $n = Object(oe.partial)((function(e, t) {
        Ve()("resetEditingSource", e);
        var r = Object(_t.toJSONString)(e, {
          ignoreTargetOptions: Object(te.getShouldSaveAlternativeLocators)(t)
        });
        return Object(oe.setIn)(["editor", "editingSource"], {
          original: r,
          pure: r,
          current: r,
          error: null
        }, t)
      })),
      Yn = function(e) {
        var t = {
          name: e.editor.editing.meta.src ? e.editor.editing.meta.src.name : "Untitled",
          commands: e.editor.editing.commands
        };
        Ve()("setEditingSourceCurrent", t);
        var r = Object(_t.toJSONString)(t, {
          ignoreTargetOptions: Object(te.getShouldSaveAlternativeLocators)(e)
        });
        return Object(oe.updateIn)(["editor", "editingSource"], (function(e) {
          return Vn({}, e, {
            pure: r,
            current: r
          })
        }), e)
      },
      Gn = function(e) {
        var t = e.editor.editingSource.current;
        return Object(oe.updateIn)(["editor", "editingSource"], (function(e) {
          return Vn({}, e, {
            pure: t,
            original: t
          })
        }), e)
      },
      Wn = function(e, t) {
        var r = Object(_t.toJSONString)(e, {
          ignoreTargetOptions: Object(te.getShouldSaveAlternativeLocators)(t)
        });
        return Object(oe.updateIn)(["editor", "editingSource"], (function(e) {
          return Vn({}, e, {
            pure: r,
            original: r
          })
        }), t)
      };
    var Hn, zn = Object(P.a)(An.a, (function(e) {
        return e.dispatch, e.getState,
          function(e) {
            return function(t) {
              var r = t.promise,
                n = t.types,
                a = function(e, t) {
                  var r = {};
                  for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                  return r
                }(t, ["promise", "types"]);
              if (!r) return e(t);
              var o = Dn(n, 3),
                i = o[0],
                s = o[1],
                c = o[2];
              return e(Rn({}, a, {
                type: i
              })), r().then((function(t) {
                return e(Rn({}, a, {
                  data: t,
                  type: s
                }))
              }), (function(t) {
                return e(Rn({}, a, {
                  err: t,
                  type: c
                }))
              }))
            }
          }
      }), (function(e) {
        var t = e.dispatch,
          r = e.getState;
        return function(e) {
          return function(n) {
            var a = n.post;
            return function(e, t) {
              var r = {};
              for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n])
            }(n, ["post"]), a && "function" == typeof a ? setTimeout((function() {
              a({
                dispatch: t,
                getState: r
              }, n, Hn)
            }), 0) : Array.isArray(a) && a.forEach((function(e) {
              setTimeout((function() {
                e({
                  dispatch: t,
                  getState: r
                }, n, Hn)
              }), 0)
            })), e(n)
          }
        }
      }))(P.c),
      qn = r(377),
      Jn = r(36),
      Zn = r(129),
      Qn = r(376),
      ea = r(313),
      ta = r(349),
      ra = r(175),
      na = r(312),
      aa = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
          var r = [],
            n = !0,
            a = !1,
            o = void 0;
          try {
            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
          } catch (e) {
            a = !0, o = e
          } finally {
            try {
              !n && s.return && s.return()
            } finally {
              if (a) throw o
            }
          }
          return r
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      },
      oa = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      };
    var ia = zn((function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lr.initialState,
        t = arguments[1];
      switch (t.type) {
        case Ln.b.START_RECORDING_SUCCESS:
          return Vn({}, e, {
            status: ae.APP_STATUS.RECORDER,
            recorderStatus: ae.APP_STATUS.PENDING,
            player: Vn({}, e.player, {
              nextCommandIndex: null
            })
          });
        case Ln.b.STOP_RECORDING_SUCCESS:
          return Vn({}, e, {
            status: ae.APP_STATUS.NORMAL,
            recorderStatus: ae.RECORDER_STATUS.STOPPED
          });
        case Ln.b.START_INSPECTING_SUCCESS:
          return Vn({}, e, {
            status: ae.APP_STATUS.INSPECTOR,
            inspectorStatus: ae.INSPECTOR_STATUS.PENDING
          });
        case Ln.b.STOP_INSPECTING_SUCCESS:
        case Ln.b.DONE_INSPECTING:
          return Vn({}, e, {
            status: ae.APP_STATUS.NORMAL,
            recorderStatus: ae.INSPECTOR_STATUS.STOPPED
          });
        case Ln.b.START_PLAYING:
          return Vn({}, e, {
            status: ae.APP_STATUS.PLAYER
          });
        case Ln.b.STOP_PLAYING:
          return Vn({}, e, {
            status: ae.APP_STATUS.NORMAL
          });
        case Ln.b.APPEND_COMMAND:
          return Object(oe.compose)(Yn, Xn, Object(oe.updateIn)(["editor", "editing", "commands"], (function(e) {
            return [].concat(Bn(e), [t.data.command])
          })))(e);
        case Ln.b.DUPLICATE_COMMAND:
          return Object(oe.compose)(Yn, Xn, Object(oe.setIn)(["editor", "editing", "meta", "selectedIndex"], t.data.index + 1), Object(oe.updateIn)(["editor", "editing", "commands"], (function(e) {
            var r = t.data.index,
              n = e.slice();
            return n.splice(r + 1, 0, e[r]), n
          })), Object(he.safeUpdateIn)(["editor", "macrosExtra", Object(te.getCurrentMacroId)(e), "breakpointIndices"], (function(e) {
            return Kn(e || [], "add", t.data.index + 1)
          })))(e);
        case Ln.b.INSERT_COMMAND:
          return Object(oe.compose)(Yn, Xn, Object(oe.setIn)(["editor", "editing", "meta", "selectedIndex"], t.data.index), Object(oe.updateIn)(["editor", "editing", "meta", "indexToInsertRecorded"], (function(e) {
            return null == e || e < 0 ? e : e + (t.data.index <= e ? 1 : 0)
          })), Object(oe.updateIn)(["editor", "editing", "commands"], (function(e) {
            var r = t.data,
              n = r.index,
              a = r.command,
              o = e.slice();
            return o.splice(n, 0, a), o
          })), Object(he.safeUpdateIn)(["editor", "macrosExtra", Object(te.getCurrentMacroId)(e), "breakpointIndices"], (function(e) {
            return Kn(e || [], "add", t.data.index)
          })))(e);
        case Ln.b.UPDATE_COMMAND:
          return Object(oe.compose)(Yn, Xn, Object(oe.updateIn)(["editor", "editing", "commands", t.data.index], (function(e) {
            return Vn({}, e, t.data.command)
          })))(e);
        case Ln.b.REMOVE_COMMAND:
          return Object(oe.compose)(Yn, Xn, (function(e) {
            var r = e.editor.editing,
              n = r.commands,
              a = r.meta;
            if (a.selectedIndex >= 0 && a.selectedIndex < n.length) return e;
            var o = t.data.index < n.length - t.data.index - 1 ? 0 : n.length - 1;
            return Object(oe.setIn)(["editor", "editing", "meta", "selectedIndex"], o, e)
          }), Object(oe.updateIn)(["editor", "editing", "commands"], (function(e) {
            var r = t.data.index,
              n = e.slice();
            return n.splice(r, 1), n
          })), Object(he.safeUpdateIn)(["editor", "macrosExtra", Object(te.getCurrentMacroId)(e), "breakpointIndices"], (function(e) {
            return Kn(e || [], "delete", t.data.index)
          })))(e);
        case Ln.b.SELECT_COMMAND:
          return Object(oe.compose)(Object(oe.setIn)(["editor", "editing", "meta", "selectedIndex"], t.data.forceClick || e.editor.editing.meta.selectedIndex !== t.data.index ? t.data.index : -1), e.status === ae.APP_STATUS.NORMAL ? Object(oe.updateIn)(["editor", "editing", "commands"], (function(e) {
            return e.map(Fn.b)
          })) : function(e) {
            return e
          })(e);
        case Ln.b.CUT_COMMAND:
          var r = t.data.indices.map((function(t) {
            return e.editor.editing.commands[t]
          }));
          return Object(oe.compose)(Yn, Xn, Object(oe.setIn)(["editor", "clipboard", "commands"], r), Object(oe.updateIn)(["editor", "editing", "commands"], (function(e) {
            return e.slice().filter((function(e, r) {
              return -1 === t.data.indices.indexOf(r)
            }))
          })), Object(he.safeUpdateIn)(["editor", "macrosExtra", Object(te.getCurrentMacroId)(e), "breakpointIndices"], (function(e) {
            return Kn(e || [], "delete", t.data.indices)
          })))(e);
        case Ln.b.COPY_COMMAND:
          var n = t.data.indices.map((function(t) {
            return e.editor.editing.commands[t]
          }));
          return Object(oe.setIn)(["editor", "clipboard", "commands"], n, e);
        case Ln.b.PASTE_COMMAND:
          var a = e.editor.clipboard.commands;
          return Object(oe.compose)(Yn, Xn, Object(oe.updateIn)(["editor", "editing", "commands"], (function(e) {
            var r = e.slice();
            return r.splice.apply(r, [t.data.index + 1, 0].concat(Bn(a))), r
          })), Object(he.safeUpdateIn)(["editor", "macrosExtra", Object(te.getCurrentMacroId)(e), "breakpointIndices"], (function(e) {
            return Kn(e || [], "add", a.map((function(e) {
              return t.data.index + 1
            })))
          })))(e);
        case ne.ActionTypes.moveCommands:
          var o = e.editor.editing.commands,
            i = void 0 === o ? [] : o,
            s = t.data,
            c = s.startIndex,
            l = s.endIndex;
          if (c < 0 || c >= i.length) throw new Error("startIndex is out of range");
          if (l < 0 || l >= i.length) throw new Error("endIndex is out of range");
          if (l === c) throw new Error("startIndex and endIndex must be different");
          var u = [].concat(Bn(i));
          return u.splice(c, 1), u.splice(l, 0, i[c]), Object(oe.compose)(Yn, Xn, Object(oe.setIn)(["editor", "editing", "commands"], u), Object(oe.updateIn)(["editor", "editing", "meta", "selectedIndex"], (function(e) {
            switch (e) {
              case c:
                return l;
              case l:
                return c;
              default:
                return e
            }
          })))(e);
        case Ln.b.NORMALIZE_COMMANDS:
          return Object(oe.updateIn)(["editor", "editing", "commands"], (function(e) {
            return e.map(Fn.b)
          }), e);
        case Ln.b.UPDATE_SELECTED_COMMAND:
          return -1 === e.editor.editing.meta.selectedIndex ? e : Object(oe.compose)(Yn, Xn, Object(oe.updateIn)(["editor", "editing", "commands", e.editor.editing.meta.selectedIndex], (function(e) {
            return Object(Fn.b)(Vn({}, e, t.data))
          })))(e);
        case Ln.b.SAVE_EDITING_AS_EXISTED:
          return Object(oe.compose)(Object(oe.setIn)(["editor", "editing", "meta", "hasUnsaved"], !1), Gn)(e);
        case Ln.b.SAVE_EDITING_AS_NEW:
          return Object(oe.compose)(Object(oe.updateIn)(["editor", "editing", "meta"], (function(e) {
            return Vn({}, e, {
              hasUnsaved: !1,
              src: Object(oe.pick)(["id", "name"], t.data)
            })
          })), Gn)(e);
        case Ln.b.SET_TEST_CASES:
          return Object(oe.compose)((function(e) {
            var t = e.editor.editing.meta.src;
            if (!t) return e;
            var r = e.editor.testCases.find((function(e) {
              return e.id === t.id
            }));
            return r ? Wn({
              name: r.name,
              commands: r.data.commands
            }, e) : e
          }), Object(oe.setIn)(["editor", "testCases"], t.data))(e);
        case Ln.b.SET_TEST_SUITES:
          return Object(oe.setIn)(["editor", "testSuites"], t.data, e);
        case ne.ActionTypes.updateTestSuite:
          var d = t.data,
            m = d.id,
            p = d.updated,
            h = e.editor.testSuites.findIndex((function(e) {
              return e.id === m
            }));
          return -1 === h ? e : Object(oe.setIn)(["editor", "testSuites", h], p, e);
        case Ln.b.UPDATE_TEST_SUITE_STATUS:
          var f = t.data,
            g = f.id,
            v = f.extra;
          return g ? Object(oe.updateIn)(["editor", "testSuitesExtra"], (function(e) {
            return Vn({}, e, Un({}, g, v))
          }), e) : e;
        case Ln.b.SET_EDITING:
          return Ve()("REDUCER SET_EDITING", t.data), t.data ? Object(oe.compose)(Yn, Xn, Object(oe.setIn)(["editor", "editing"], t.data))(e) : e;
        case Ln.b.EDIT_TEST_CASE:
          var y = e.editor.editing.meta.src || {},
            b = y.id;
          if (b === t.data.id) return e;
          if (!t.data.macro) return e;
          var w = t.data.macro;
          return Object(oe.compose)(Object(oe.setIn)(["editor", "editing"], Vn({}, w.data, {
            meta: {
              selectedIndex: -1,
              hasUnsaved: !1,
              src: Object(oe.pick)(["id", "name"], w)
            }
          })), Object(oe.updateIn)(["player"], (function(e) {
            return Vn({}, e, {
              status: ae.PLAYER_STATUS.STOPPED,
              stopReason: null,
              nextCommandIndex: null
            })
          })), $n({
            name: w.name,
            commands: w.data.commands
          }))(e);
        case Ln.b.SET_ONE_MACRO_EXTRA:
          var E = t.data,
            x = E.id,
            S = E.extra;
          return x ? Object(he.safeSetIn)(["editor", "macrosExtra", x], S, e) : e;
        case Ln.b.UPDATE_ONE_MACRO_EXTRA:
          var C = t.data,
            T = C.id,
            _ = C.extra;
          return T ? Object(he.safeUpdateIn)(["editor", "macrosExtra", T], (function(e) {
            return Vn({}, e, _)
          }), e) : e;
        case ne.ActionTypes.renameTestCase:
          return Object(oe.setIn)(["editor", "editing", "meta", "src", "name"], t.data, e);
        case Ln.b.REMOVE_TEST_CASE:
          if (!t.data.isCurrent) return e;
          var O = e.editor.editing.meta.src.id,
            k = (e.editor.editing.meta.selectedIndex, e.editor.testCases.filter((function(e) {
              return e.id !== O
            }))),
            P = e.editor.testCases.findIndex((function(e) {
              return e.id === O
            })),
            I = void 0;
          if (0 === k.length) I = Vn({}, lr.newTestCaseEditing);
          else {
            var M = -1 === P ? 0 : P < k.length ? P : P - 1,
              A = k[M];
            I = Vn({}, A.data, {
              meta: {
                src: Object(oe.pick)(["id", "name"], A),
                hasUnsaved: !1,
                selectedIndex: M
              }
            })
          }
          return Object(oe.setIn)(["editor", "editing"], I, e);
        case Ln.b.EDIT_NEW_TEST_CASE:
          return Object(oe.compose)(Object(oe.setIn)(["editor", "editing"], Vn({}, lr.newTestCaseEditing)), Object(oe.updateIn)(["player"], (function(e) {
            return Vn({}, e, {
              nextCommandIndex: null
            })
          })), $n({
            name: "Untitled",
            commands: []
          }))(e);
        case Ln.b.SET_MACROS_EXTRA:
          return Object(oe.setIn)(["editor", "macrosExtra"], t.data, e);
        case Ln.b.SET_TEST_SUITES_EXTRA:
          return Object(oe.setIn)(["editor", "testSuitesExtra"], t.data, e);
        case ne.ActionTypes.setMacroFolderStructure:
          return Object(oe.setIn)(["editor", "macroFolderStructure"], t.data, e);
        case ne.ActionTypes.setTestSuiteFolderStructure:
          return Object(oe.setIn)(["editor", "testSuiteFolderStructure"], t.data, e);
        case Ln.b.SET_PLAYER_STATE:
          return Object(oe.updateIn)(["player"], (function(e) {
            return Vn({}, e, t.data)
          }), e);
        case Ln.b.ADD_LOGS:
          return Vn({}, e, {
            logs: [].concat(Bn(e.logs), Bn(t.data)).slice(-500)
          });
        case Ln.b.CLEAR_LOGS:
          return Vn({}, e, {
            logs: []
          });
        case Ln.b.ADD_SCREENSHOT:
          return Vn({}, e, {
            screenshots: [].concat(Bn(e.screenshots), [t.data])
          });
        case Ln.b.CLEAR_SCREENSHOTS:
          return Vn({}, e, {
            screenshots: []
          });
        case Ln.b.UPDATE_CONFIG:
          return Object(oe.updateIn)(["config"], (function(e) {
            return Vn({}, e, t.data)
          }), e);
        case Ln.b.SET_CSV_LIST:
          return Vn({}, e, {
            csvs: t.data
          });
        case Ln.b.SET_SCREENSHOT_LIST:
          return Vn({}, e, {
            screenshots: t.data
          });
        case Ln.b.SET_VISION_LIST:
          return Vn({}, e, {
            visions: t.data
          });
        case Ln.b.SET_VARIABLE_LIST:
          return Vn({}, e, {
            variables: t.data
          });
        case Ln.b.UPDATE_UI:
          return Object(oe.updateIn)(["ui"], (function(e) {
            return Vn({}, e, t.data)
          }), e);
        case Ln.b.SET_EDITOR_ACTIVE_TAB:
          return Object(oe.setIn)(["editor", "activeTab"], t.data, e);
        case Ln.b.SET_SOURCE_ERROR:
          return Object(oe.setIn)(["editor", "editingSource", "error"], t.data, e);
        case Ln.b.SET_SOURCE_CURRENT:
          return Object(oe.setIn)(["editor", "editingSource", "current"], t.data, e);
        case Ln.b.UPDATE_PROXY:
          return Vn({}, e, {
            proxy: t.data
          });
        case ne.ActionTypes.setIsDraggingCommand:
          return Object(oe.setIn)(["editor", "isDraggingCommand"], t.data, e);
        case ne.ActionTypes.setCurrentMacro:
          return Object(oe.setIn)(["editor", "currentMacro"], t.data, e);
        case ne.ActionTypes.setIsLoadingMacros:
          return Object(oe.setIn)(["isLoadingMacros"], t.data, e);
        case ne.ActionTypes.setFrom:
          return Object(oe.setIn)(["from"], t.data, e);
        case ne.ActionTypes.setMacroQuery:
          return Object(oe.setIn)(["macroQuery"], t.data, e);
        case ne.ActionTypes.setIndexToInsertRecorded:
          return Object(oe.setIn)(["editor", "editing", "meta", "indexToInsertRecorded"], t.data, e);
        case ne.ActionTypes.toggleRecorderSkipOpen:
          return Object(oe.updateIn)(["recorder", "skipOpen"], (function(e) {
            return void 0 !== t.data ? t.data : !e
          }), e);
        default:
          return e
      }
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    window.store = ia;
    var sa = document.getElementById("root"),
      ca = {},
      la = function() {
        return Jn.default.get("config").then((function(e) {
          var t = oa({
            showSidebar: !0,
            playScrollElementsIntoView: !0,
            playHighlightElements: !0,
            playCommandInterval: .3,
            saveAlternativeLocators: !0,
            recordNotification: !0,
            recordClickType: "click",
            showTestCaseTab: !0,
            logFilter: "All",
            onErrorInLoop: "continue_next_loop",
            allowRunFromBookmark: !0,
            allowRunFromFileSchema: !0,
            allowRunFromHttpSchema: !0,
            timeoutPageLoad: 60,
            timeoutElement: 10,
            timeoutMacro: 0,
            timeoutDownload: 60,
            lastBackupActionTime: 1 * new Date,
            enableAutoBackup: !0,
            autoBackupInterval: 7,
            autoBackupTestCases: !0,
            autoBackupTestSuites: !0,
            autoBackupScreenshots: !0,
            autoBackupCSVFiles: !0,
            autoBackupVisionImages: !0,
            shouldEncryptPassword: "no",
            masterPassword: "",
            showCommonInternalVariables: !0,
            showAdvancedInternalVariables: !1,
            storageMode: le.StorageStrategyType.Browser,
            xmodulesStatus: "unregistered",
            ocrEngine: 1,
            ocrMode: "disabled",
            ocrLanguage: "eng",
            ocrOfflineURL: "",
            ocrOfflineAPIKey: "",
            cvScope: "browser",
            defaultVisionSearchConfidence: .8,
            defaultProxy: "",
            defaultProxyAuth: "",
            turnOffProxyAfterReplay: !0
          }, e);
          return ia.dispatch(Object(I.updateConfig)(t)), t
        }))
      },
      ua = function() {
        return Object(te.getShouldLoadResources)(ia.getState()) ? (Object(le.getStorageManager)().getCSVStorage(), ia.dispatch(Object(I.listCSV)())) : Promise.resolve()
      },
      da = function() {
        return Object(le.getStorageManager)().getScreenshotStorage(), ia.dispatch(Object(I.listScreenshots)())
      },
      ma = function() {
        return Object(te.getShouldLoadResources)(ia.getState()) ? (Object(le.getStorageManager)().getVisionStorage(), ia.dispatch(Object(I.listVisions)())) : Promise.resolve()
      },
      pa = function(e) {
        var t = e.options;
        return function(e, r) {
          var n = Object(oe.delay)((function() {}), 1e3);
          if (t.savelog) {
            var a = /\\|\//.test(t.savelog),
              o = ia.getState().logs,
              i = o.find((function(e) {
                return "error" === e.type && !(e.options && e.options.ignored)
              })),
              s = e || i && {
                message: i.text
              },
              c = s ? "Status=Error: " + s.message : "Status=OK",
              l = o.map((function(e) {
                return Object(Ue.renderLog)(e, !1)
              })),
              u = [c, "###"].concat(function(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                  return r
                }
                return Array.from(e)
              }(l)).join("\n");
            n = a && Object(le.getStorageManager)().isXFileMode() ? Object(na.getLogService)().logTo(t.savelog, u) : Object(oe.delay)((function() {}), 500).then((function() {
              return function(e, t) {
                var r = new Blob([e], {
                  type: "text/plain;charset=utf-8"
                });
                S.a.saveAs(r, t)
              }(u, decodeURIComponent(t.savelog)), Object(Zn.a)().prepareDownload(t.savelog)
            }))
          }
          var d = Object(he.parseBoolLike)(t.closeBrowser, !1),
            m = Object(he.parseBoolLike)(void 0 !== t.closeRPA ? t.closeRPA : t.closeKantu, !0);
          d && r !== ee.a.C.END_REASON.MANUAL && n.catch((function(e) {
            Ve.a.warn("Save log error: ", e.message)
          })).then((function() {
            return M.default.ask("PANEL_CLOSE_ALL_WINDOWS", {})
          })), e || r !== ee.a.C.END_REASON.COMPLETE || !m || d || setTimeout((function() {
            window.close()
          }), 1e3)
        }
      },
      ha = function(e) {
        var t = e.options;
        return Object.keys(t || {}).reduce((function(e, r) {
          var n = r.match(/^cmd_var(1|2|3)$/i);
          return n ? (e["!CMD_VAR" + n[1]] = t[r], e) : e
        }), {})
      },
      fa = ["direct", "closeBrowser", "closeKantu", "closeRPA", "continueInLastUsedTab", "folder", "savelog", "storage", "macro", "testsuite", "storageMode", "loadmacrotree", "cmd_var1", "cmd_var2", "cmd_var3", "cmd_var4", "cmd_var5", "cmd_var6", "cmd_var7", "cmd_var8", "cmd_var9", "cmd_var10"],
      ga = new v.a(fa),
      va = function(e) {
        Object(he.parseBoolLike)(e.loadmacrotree) && ia.dispatch(ne.Actions.setFrom(lr.RunBy.Manual))
      },
      ya = function(e, t) {
        var r = Object.keys(e);
        r.forEach((function(t) {
          if (0 !== t.trim().length) {
            if (!fa.find((function(e) {
                return n = t, "string" == typeof(r = e) ? r === n : r.test(n);
                var r, n
              }))) {
              var r = ga.get(t),
                n = r && r[0] && r[0][1] ? ', do you mean "' + r[0][1] + '"?' : "";
              ia.dispatch(Object(I.addLog)("warning", 'Unknown command line parameter: "' + t + '"' + n))
            }
            try {
              ! function(e, t) {
                switch (e) {
                  case "continueInLastUsedTab":
                  case "closeKantu":
                  case "closeRPA":
                  case "closeBrowser":
                  case "direct":
                  case "loadmacrotree":
                    if (/^0|1$/.test(t)) return !0;
                    throw new Error('"' + e + "\" should be either 0 or 1, but now it's " + t);
                  case "storage":
                    if (-1 !== ["browser", "xfile"].indexOf(t)) return !0;
                    throw new Error('"' + e + "\" should be either browser or xfile, but now it's " + t);
                  default:
                    ;
                }
              }(t, e[t])
            } catch (e) {
              ia.dispatch(Object(I.addLog)("warning", "Invalid value for cmd line arg: " + e.message))
            }
          }
        }))
      },
      ba = function(e) {
        if (de.a.isFirefox()) return !0;
        var t = document.title.replace(/ - .*$/, "");
        document.title = t + " - (Tab: " + e.title + ")"
      };

    function wa() {
      var e, t, r, n, a, o, i = (e = Object(le.getStorageManager)().getCurrentStrategyType(), t = Object(le.getStorageManager)().getMacroStorage(), r = Object(le.getStorageManager)().getTestSuiteStorage(), n = function(e) {
        e.filter((function(e) {
          return "__Untitled__" !== e.fileName
        })).forEach((function(e) {
          var t = e.fullFilePath;
          (!ca[t] || 1 * new Date - ca[t] > 2e3) && (ca[t] = 1 * new Date, ia.dispatch(Object(I.addLog)("warning", e.error.message)))
        }))
      }, a = function() {
        ia.dispatch(ne.Actions.setIsLoadingMacros(!0));
        var e = Object(st.getMacroExtraKeyValueData)().getAll().then((function(e) {
            Ve()("restoreMacrosExtra", e), ia.dispatch(Object(I.setMacrosExtra)(e))
          })),
          r = Object(te.getShouldLoadResources)(ia.getState()) ? t.listR().then((function(e) {
            Ve()("restoreMacroFolderStructure", e), ia.dispatch(ne.Actions.setMacroFolderStructure(e))
          })) : Promise.resolve();
        return Promise.all([e, r]).finally((function() {
          return ia.dispatch(ne.Actions.setIsLoadingMacros(!1))
        }))
      }, o = function() {
        return Object(te.getShouldLoadResources)(ia.getState()) ? Object(he.until)("macros", (function() {
          return {
            pass: ia.getState().editor.macroFolderStructure.length >= 0,
            result: !0
          }
        })).then((function() {
          var e = r.readR("/", "Text", n).then((function(e) {
              return e.map((function(e) {
                return Object(qn.normalizeTestSuite)(e.content)
              }))
            })).then((function(e) {
              e.sort((function(e, t) {
                var r = e.name.toLowerCase(),
                  n = t.name.toLowerCase();
                return r < n ? -1 : r > n ? 1 : r === n ? t.updateTime - e.updateTime : void 0
              })), Ve()("restoreTestSuites - suiteStorage - tss", e), ia.dispatch(Object(I.setTestSuites)(e))
            })),
            t = Object(Qn.getTestSuiteExtraKeyValueData)().getAll().then((function(e) {
              Ve()("restoreTestSuitesExtra", e), ia.dispatch(Object(I.setTestSuitesExtra)(e))
            })),
            a = r.listR().then((function(e) {
              Ve()("restoreTestSuiteFolderStructure", e), ia.dispatch(ne.Actions.setTestSuiteFolderStructure(e))
            }));
          return Promise.all([e, t, a])
        })) : Promise.resolve()
      }, [Ye.FlatStorageEvent.ListChanged, Ye.FlatStorageEvent.FilesChanged].forEach((function(r) {
        t.off(r), t.on(r, (function() {
          e === Object(le.getStorageManager)().getCurrentStrategyType() && (Ve()("macroStorage - eventName", r), setTimeout(a, 50))
        }))
      })), [Ye.FlatStorageEvent.ListChanged, Ye.FlatStorageEvent.FilesChanged].forEach((function(t) {
        r.off(t), r.on(t, (function() {
          e === Object(le.getStorageManager)().getCurrentStrategyType() && (Ve()("suiteStorage - eventName", t), setTimeout(o, 50))
        }))
      })), Object(he.flow)(Object(he.guardVoidPromise)(a), Object(he.guardVoidPromise)(o))).then((function() {
        return Object(he.flow)(Object(he.guardVoidPromise)(ua), Object(he.guardVoidPromise)(ma), Object(he.guardVoidPromise)(da), Object(he.guardVoidPromise)((function() {
          return ia.dispatch(Object(I.resetEditingIfNeeded)())
        })))
      }));
      return wa.onLastReloadFinished = function(e) {
        return e ? i.then(e) : i
      }, i
    }

    function Ea() {
      var e = !0;
      Object(le.getStorageManager)().on(le.StorageManagerEvent.StrategyTypeChanged, (function(t) {
        if (e) e = !1;
        else try {
          (t === le.StorageStrategyType.XFile ? Object(ie.getXFile)().getVersion().then((function(e) {
            if (e.version && b.a.lt(e.version, E.a.xfile.minVersionToReadBigFile)) {
              var t = "Can not read/save screenshot on hard-drive. Please upgrade FileAccess XModule to latest version (>= " + E.a.xfile.minVersionToReadBigFile + ").";
              a.a.warn(t), ia.dispatch(Object(I.addLog)("warning", t))
            }
          })) : Promise.resolve()).then(wa).then((function() {
            ia.dispatch(ne.Actions.selectInitialMacro(t))
          }))
        } catch (e) {
          Ve.a.warn(e)
        }
      })), Object(le.getStorageManager)().on(le.StorageManagerEvent.RootDirChanged, (function(e) {
        wa()
      })), Object(le.getStorageManager)().on(le.StorageManagerEvent.ForceReload, (function(e) {
        wa()
      }))
    }

    function xa() {
      var e, t;
      e = Object(oe.parseQuery)(window.location.search), ia.dispatch(ne.Actions.setFrom(e.from || lr.RunBy.Manual)), e.settings && ia.dispatch(Object(I.updateUI)({
        showSettings: !0
      })), t = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = Object.keys(e).reduce((function(t, r) {
            return t[r.toLowerCase()] = e[r], t
          }), {});
        return Object(he.parseBoolLike)(t.continueinlastusedtab, !1) ? M.default.ask("PANEL_CLOSE_CURRENT_TAB_AND_SWITCH_TO_LAST_PLAYED") : Promise.resolve()
      }, M.default.onAsk((function(e, r) {
        switch (Ve()(e, r), e) {
          case "PROXY_UPDATE":
            return ia.dispatch(Object(I.updateProxy)(r.proxy)), !0;
          case "OPEN_SETTINGS":
            return ia.dispatch(Object(I.updateUI)({
              showSettings: !0
            })), !0;
          case "INSPECT_RESULT":
            return ia.dispatch(Object(I.doneInspecting)()), ia.dispatch(Object(I.updateSelectedCommand)({
              target: r.locatorInfo.target,
              targetOptions: r.locatorInfo.targetOptions
            })), !0;
          case "RECORD_ADD_COMMAND":
            Ve()("got add command", e, r);
            var n = ia.getState(),
              o = Object(te.editorCommandCount)(n),
              i = Object(te.getIndexToInsertRecorded)(n),
              s = n.recorder.skipOpen && "open" === r.cmd;
            return ia.dispatch(ne.Actions.toggleRecorderSkipOpen(!1)), !s && (i > 0 && i <= o ? ia.dispatch(Object(I.insertCommand)(r, i, !0)) : ia.dispatch(Object(I.appendCommand)(r, !0)), !0);
          case "TIMEOUT_STATUS":
            return !(ia.getState().status !== ae.APP_STATUS.PLAYER || r.playUID && !Object(ee.b)().checkPlayUID(r.playUID) || (ia.dispatch(Object(I.setTimeoutStatus)(r)), 0));
          case "RUN_TEST_CASE":
            if (ia.getState().status !== ae.APP_STATUS.NORMAL) return a.a.error("can only run macros when it is not recording or playing"), !1;
            var c = r.testCase,
              l = r.options;
            ya(l), va(l);
            var u = Object(le.getStorageManager)(),
              d = c.storageMode || u.getCurrentStrategyType();
            return u.isStrategyTypeAvailable(d).catch((function(e) {
              throw a.a.error(e.message), e
            })).then((function() {
              var e = u.setCurrentStrategyType(d);
              return ia.dispatch(Object(I.updateConfig)({
                storageMode: d
              })), e ? Object(oe.delay)((function() {
                return wa.onLastReloadFinished()
              }), 100) : void 0
            })).then((function() {
              return t(l)
            })).then((function() {
              var e = ia.getState();
              return Object(te.getShouldLoadResources)(e) ? new Promise((function(e) {
                e(wa.onLastReloadFinished ? wa.onLastReloadFinished() : null)
              })).then((function() {
                return Object(he.until)("macros ready", (function() {
                  var e = ia.getState(),
                    t = Object(te.getMacroFileNodeList)(e);
                  return {
                    pass: t && t.length > 0,
                    result: !0
                  }
                }), 1e3, 2e4)
              })) : Promise.resolve(!0)
            })).then((function() {
              var e = ia.getState(),
                t = Object(te.getShouldLoadResources)(e),
                r = c.name;
              if (t) {
                var n = Object(te.findMacroNodeWithCaseInsensitiveRelativePath)(e, c.name);
                if (!n) throw new Error("Can't find macro with name \"" + c.name + '"');
                r = n.fullPath
              }
              var o = "No macro found with path '" + r + "'";
              return u.getMacroStorage().read(r, "Text").then((function(e) {
                if (!e) throw a.a.error(o), new Error(o);
                return e
              }), (function(e) {
                if (/File size cannot be determined.|A requested file or directory could not be found/.test(e.message)) throw new Error(o);
                return Promise.reject(e)
              })).then((function(t) {
                var n = t.data.commands.find((function(e) {
                  return "open" === e.cmd.toLowerCase()
                }));
                ia.dispatch(Object(I.editTestCase)(t.id)), ia.dispatch(Object(I.playerPlay)({
                  macroId: t && t.id,
                  title: r,
                  extra: {
                    id: t && t.id
                  },
                  mode: ee.a.C.MODE.STRAIGHT,
                  startIndex: 0,
                  startUrl: n ? n.target : null,
                  resources: t.data.commands,
                  postDelay: 1e3 * e.player.playInterval,
                  overrideScope: ha({
                    options: l
                  }),
                  callback: pa({
                    options: l
                  })
                })), ia.dispatch(Object(I.updateUI)({
                  sidebarTab: "macros"
                }))
              }))
            })).catch((function(e) {
              ia.dispatch(Object(I.addLog)("error", e.message))
            })), !0;
          case "RUN_TEST_SUITE":
            if (ia.getState().status !== ae.APP_STATUS.NORMAL) return a.a.error("can only run test suites when it is not recording or playing"), !1;
            var m = r.testSuite,
              p = r.options;
            ya(p), va(p);
            var h = m.storageMode || le.StorageStrategyType.Browser,
              f = Object(le.getStorageManager)();
            return f.isStrategyTypeAvailable(h).catch((function(e) {
              throw a.a.error(e.message), e
            })).then((function() {
              return f.setCurrentStrategyType(h) ? Object(oe.delay)((function() {}), 1e3) : void 0
            })).then((function() {
              return t(p)
            })).then((function() {
              var e = ia.getState(),
                t = Object(te.getShouldLoadResources)(e);
              return m.macroFolder && m.macroFolder.length > 0 ? (t ? Object(he.until)("macros ready", (function() {
                var e = ia.getState(),
                  t = Object(te.getMacroFileNodeList)(e);
                return {
                  pass: t && t.length > 0,
                  result: t
                }
              }), 1e3, 2e4).then((function() {
                var e = Object(te.findMacroFolderWithCaseInsensitiveRelativePath)(ia.getState(), m.macroFolder);
                return e && e.children || []
              })) : (console.log("!!!!! reading folder", m.macroFolder), f.getMacroStorage().listR(m.macroFolder).then((function(e) {
                return e.filter((function(e) {
                  return e.isFile
                }))
              })))).then((function(e) {
                var t = f.getMacroStorage(),
                  r = t.dirPath(m.macroFolder.replace(/\\/g, "/")),
                  n = t.getPathLib().basename(r);
                if (0 === e.length) throw new Error("No folder found for " + m.macroFolder + ", or no macro found in it");
                Object(ee.b)({
                  name: "testSuite"
                }).play({
                  title: n,
                  mode: Object(ee.b)().C.MODE.STRAIGHT,
                  startIndex: 0,
                  resources: e.map((function(e) {
                    return {
                      id: e.fullPath,
                      loops: 1
                    }
                  })),
                  extra: {
                    id: r,
                    name: n
                  },
                  public: {
                    scope: ha({
                      options: p
                    })
                  },
                  callback: pa({
                    options: p
                  })
                })
              })) : m.name && m.name.length > 0 ? (t ? Object(he.until)("testSuites ready", (function() {
                var e = ia.getState().editor.testSuites;
                return {
                  pass: e && e.length > 0,
                  result: !0
                }
              })).then((function() {
                var e = ia.getState();
                return Object(I.findSameNameTestSuite)(m.name, e.editor.testSuites)
              })) : f.getTestSuiteStorage().read(m.name, "Text")).then((function(e) {
                return e ? (Object(ee.b)({
                  name: "testSuite"
                }).play({
                  title: e.name,
                  extra: {
                    id: e.id,
                    name: e.name
                  },
                  mode: Object(ee.b)().C.MODE.STRAIGHT,
                  startIndex: 0,
                  resources: e.cases.map((function(e) {
                    return {
                      id: e.testCaseId,
                      loops: e.loops
                    }
                  })),
                  public: {
                    scope: ha({
                      options: p
                    })
                  },
                  callback: pa({
                    options: p
                  })
                }), ia.dispatch(Object(I.updateUI)({
                  sidebarTab: "test_suites"
                }))) : (a.a.error("no macro found with name '" + m.name + "'"), !1)
              })) : void 0
            })).catch((function(e) {
              ia.dispatch(Object(I.addLog)("error", e.message))
            })), !0;
          case "IMPORT_AND_RUN":
            var g = r.options,
              v = void 0;
            if (r.html) try {
              v = Object(_t.fromHtml)(r.html)
            } catch (e) {
              return a.a.error("Failed to parse html", 1.5), !1
            }
            if (r.json) try {
              var y = "string" == typeof r.json ? r.json : JSON.stringify(r.json);
              v = Object(_t.fromJSONString)(y)
            } catch (e) {
              return a.a.error("Failed to parse json", 1.5), !1
            }
            if (!v) return a.a.error("Nothing to import"), !1;
            ya(g);
            var b = r.storageMode || le.StorageStrategyType.Browser,
              w = Object(le.getStorageManager)();
            return w.isStrategyTypeAvailable(b).catch((function(e) {
              throw a.a.error(e.message), e
            })).then((function() {
              return w.setCurrentStrategyType(b) ? Object(oe.delay)((function() {}), 1e3) : void 0
            })).then((function() {
              return t(g)
            })).then((function() {
              var e = ia.getState();
              return Object(te.getShouldLoadResources)(e) ? new Promise((function(e) {
                e(wa.onLastReloadFinished ? wa.onLastReloadFinished() : null)
              })).then((function() {
                return Object(he.until)("macros ready", (function() {
                  var e = ia.getState(),
                    t = Object(te.getMacroFileNodeList)(e);
                  return {
                    pass: t && t.length > 0,
                    result: !0
                  }
                }), 1e3, 2e4)
              })) : Promise.resolve(!0)
            })).then((function() {
              return ia.dispatch(Object(I.upsertTestCase)(v)).then((function() {
                return ia.dispatch(Object(I.editTestCase)(v.name))
              })).then((function(e) {
                var t = ia.getState(),
                  r = e.data.commands.find((function(e) {
                    return "open" === e.cmd.toLowerCase()
                  }));
                return ia.dispatch(Object(I.playerPlay)({
                  macroId: e.id,
                  title: e.name,
                  extra: {
                    id: e.id
                  },
                  mode: ee.a.C.MODE.STRAIGHT,
                  startIndex: 0,
                  startUrl: r ? r.target : null,
                  resources: e.data.commands,
                  postDelay: 1e3 * t.player.playInterval,
                  overrideScope: ha({
                    options: g
                  }),
                  callback: pa({
                    options: g
                  })
                })), !0
              })).catch((function(e) {
                throw Ve.a.error(e.stack), e
              }))
            }));
          case "ADD_VISION_IMAGE":
            var E = r.dataUrl,
              x = r.requireRename,
              S = void 0 !== x && x,
              C = Object(oe.randomName)() + "_dpi_" + Object(oe.getScreenDpi)() + ".png";
            return Object(le.getStorageManager)().getVisionStorage().write(C, Object(oe.dataURItoBlob)(E)).then(ma).then((function() {
              return S ? ia.dispatch(Object(I.renameVisionImage)(C)).then((function(e) {
                return ma(), {
                  fileName: e
                }
              })) : {
                fileName: C
              }
            }));
          case "RESTORE_SCREENSHOTS":
            return da(), !0;
          case "UPDATE_ACTIVE_TAB":
            return ba(r), !0;
          case "ADD_LOG":
            return !!r && (r.info && ia.dispatch(Object(I.addLog)("info", r.info, r.options)), r.warning && ia.dispatch(Object(I.addLog)("warning", r.warning)), r.error && ia.dispatch(Object(I.addLog)("error", r.error)), !0)
        }
      })), window.addEventListener("beforeunload", (function() {
        M.default.ask("PANEL_STOP_RECORDING", {}), M.default.ask("PANEL_STOP_PLAYING", {})
      })), window.addEventListener("resize", (function() {
        var e, t, r, n = {
            width: window.outerWidth,
            height: window.outerHeight
          },
          a = ia.getState();
        ia.dispatch(Object(I.updateConfig)({
          size: oa({}, a.config.size, (e = {}, t = a.config.showSidebar ? "with_sidebar" : "standard", r = n, t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r, e))
        }))
      })), window.addEventListener("message", (function(e) {
        switch (e.data && e.data.type) {
          case "RELOAD_VISIONS":
            return ia.dispatch(Object(I.listVisions)())
        }
      })), setTimeout((function() {
        _e().onChange((function(e) {
          var t = e.vars,
            r = Object.keys(t).map((function(e) {
              return {
                key: e,
                value: t[e]
              }
            }));
          ia.dispatch(Object(I.setVariables)(r))
        }))
      }), 0), Ea(), Et(ia), Jn.default.get("editing").then((function(e) {
        if (e) {
          var t = e;
          e.baseUrl && ((t = oa({}, e)).commands = t.commands.map(Object(Fn.a)(e.baseUrl)), delete t.baseUrl), ia.dispatch(Object(I.setEditing)(t))
        }
      })), la(), Object(re.default)(ia), M.default.ask("PANEL_GET_PROXY").then((function(e) {
        ia.dispatch(Object(I.updateProxy)(e))
      })), Jn.default.get("preinstall_info").then((function(e) {
        switch (function() {
          if (!e) return "fresh";
          var t = e.askedVersions;
          return -1 === (void 0 === t ? [] : t).indexOf(E.a.preinstall.version) ? "new_version_available" : "up_to_date"
        }()) {
          case "fresh":
            return ia.dispatch(Object(I.preinstall)());
          case "new_version_available":
            return ia.dispatch(Object(I.updateUI)({
              newPreinstallVersion: !0
            }));
          case "up_to_date":
          default:
            return !1
        }
      })).catch((function(e) {
        Ve.a.warn("Error in preinstall", e)
      })).then((function() {
        wa()
      })), setTimeout((function() {
        var e;
        e = [], (Object(ea.getMigrateMacroTestSuiteToBrowserFileSystem)().shouldMigrate() && !Object(ta.getKantuMigrationService)().isMigrated(ra.MigrationJobType.MigrateMacroTestSuiteToBrowserFileSystem) || E.a.forceMigrationRemedy) && (alert("Kantu introduced an internal storage migration in this version. It isn't supposed to disturb you, but looks like there is some unexpected error: \n\n=> Solution: After you click OK Kantu is going to download your macros and test suites from the old storage into a ZIP file. You can then manually import the macros back into the new Kantu version.\n\nIf you see this dialog, please also inform us at team@a9t9.com or in the user forum about the issue."), e.push((function() {
          return Object(ea.getMigrateMacroTestSuiteToBrowserFileSystem)().remedy()
        }))), he.flow.apply(void 0, e)
      }), 1e3), M.default.ask("I_AM_PANEL", {}), document.title = document.title + " " + de.a.runtime.getManifest().version, M.default.ask("PANEL_CURRENT_PLAY_TAB_INFO").then(ba), u.a.render(c.a.createElement(f.a, {
        backend: h.a
      }, c.a.createElement(i.a, {
        locale: p.a
      }, c.a.createElement(k.a, {
        store: ia
      }, c.a.createElement(d.a, null, c.a.createElement(In, null))))), sa)
    }
    Promise.all([la(), Object(ie.getXFile)().getConfig()]).then((function(e) {
      var t = aa(e, 2),
        r = t[0];
      t[1];
      Object(le.getStorageManager)(r.storageMode, {
        getConfig: function() {
          return ia.getState().config
        },
        getMacros: function() {
          return Object(te.getMacroFileNodeList)(ia.getState())
        },
        getMaxMacroCount: function(e) {
          var t = function() {
            switch (e) {
              case le.StorageStrategyType.XFile:
                var t = ia.getState().config.xmodulesStatus,
                  r = void 0 === t ? "unregistered" : t;
                switch (r) {
                  case "unregistered":
                    return E.a.xmodulesLimit.unregistered.xFileMacroCount;
                  case "free":
                    return E.a.xmodulesLimit.free.xFileMacroCount;
                  case "pro":
                    return E.a.xmodulesLimit.pro.xFileMacroCount;
                  default:
                    throw new Error("Unknown xmodulesStatus: '" + r + "'")
                }
                case le.StorageStrategyType.Browser:
                default:
                  return 1 / 0
            }
          }();
          return Promise.resolve(t)
        }
      }), xa()
    }), xa)
  },
  103: function(e, t, r) {
    "use strict";
    r.r(t);
    r(162);
    var n = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
          var r = [],
            n = !0,
            a = !1,
            o = void 0;
          try {
            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
          } catch (e) {
            a = !0, o = e
          } finally {
            try {
              !n && s.return && s.return()
            } finally {
              if (a) throw o
            }
          }
          return r
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      },
      a = function() {
        var e = window.requestFileSystem || window.webkitRequestFileSystem;
        if (!e) throw new Error("requestFileSystem not supported");
        var t = function(t) {
            return t = t || 5242880, new Promise((function(r, n) {
              e(window.TEMPORARY, t, r, n)
            }))
          },
          r = function(e, r, n) {
            var a = (Array.isArray(e) ? e : e.split("/")).filter((function(e) {
              return e && e.length
            }));
            return (n ? Promise.resolve(n) : t(1048576)).then((function(e) {
              return function e(t, n) {
                return t && t.length ? new Promise((function(e, a) {
                  n.getDirectory(t[0], {
                    create: !!r
                  }, (function(t) {
                    return e(t)
                  }), (function(e) {
                    return a(e)
                  }))
                })).then((function(r) {
                  return e(t.slice(1), r)
                })) : Promise.resolve(n)
              }(a, e.root)
            }))
          },
          a = function(e, t) {
            var n = e.split("/");
            return r(n.slice(0, -1), !1, t).then((function(e) {
              return {
                directoryEntry: e,
                fileName: n.slice(-1)[0]
              }
            }))
          },
          o = function(e, r) {
            if (-1 === ["ArrayBuffer", "BinaryString", "DataURL", "Text"].indexOf(r)) throw new Error("invalid readFile type, '" + r + "'");
            return t().then((function(t) {
              return a(e, t).then((function(e) {
                var t = e.directoryEntry,
                  n = e.fileName;
                return new Promise((function(e, a) {
                  t.getFile(n, {}, (function(t) {
                    t.file((function(t) {
                      var n = new FileReader;
                      switch (n.onerror = a, n.onloadend = function() {
                        e(this.result)
                      }, r) {
                        case "ArrayBuffer":
                          return n.readAsArrayBuffer(t);
                        case "BinaryString":
                          return n.readAsBinaryString(t);
                        case "DataURL":
                          return n.readAsDataURL(t);
                        case "Text":
                          return n.readAsText(t);
                        default:
                          throw new Error("unsupported data type, '" + r)
                      }
                    }), a)
                  }), a)
                }))
              }))
            })).catch((function(e) {
              throw console.warn("readFile", e.code, e.name, e.message), e
            }))
          },
          i = function(e, r, n) {
            return t(n).then((function(t) {
              return a(e, t).then((function(e) {
                var t = e.directoryEntry,
                  n = e.fileName;
                return new Promise((function(e, a) {
                  t.getFile(n, {
                    create: !0
                  }, (function(t) {
                    t.createWriter((function(n) {
                      n.onwriteend = function() {
                        return e(t.toURL())
                      }, n.onerror = a, n.write(r)
                    }))
                  }), a)
                }))
              }))
            })).catch((function(e) {
              throw console.warn(e.code, e.name, e.message), e
            }))
          },
          s = function(e) {
            return t().then((function(t) {
              return a(e, t).then((function(e) {
                var t = e.directoryEntry,
                  r = e.fileName;
                return new Promise((function(e, n) {
                  t.getFile(r, {
                    create: !0
                  }, (function(t) {
                    t.remove(e, n)
                  }), n)
                }))
              }))
            })).catch((function(e) {
              throw console.warn("removeFile", e.code, e.name, e.message), e
            }))
          },
          c = function(e) {
            return t().then((function(t) {
              return a(e, t).then((function(e) {
                var t = e.directoryEntry,
                  r = e.fileName,
                  a = function(e) {
                    return new Promise((function(n) {
                      t[e](r, {
                        create: !1
                      }, (function(e) {
                        n(!0)
                      }), (function() {
                        return n(!1)
                      }))
                    }))
                  },
                  o = a("getFile"),
                  i = a("getDirectory");
                return Promise.all([o, i]).then((function(e) {
                  var t = n(e, 2);
                  return {
                    isFile: t[0],
                    isDirectory: t[1]
                  }
                }))
              }))
            })).catch((function(e) {
              if (e && 8 === e.code) return {
                isFile: !1,
                isDirectory: !1
              };
              throw console.warn("fs.exists", e.code, e.name, e.message), e
            }))
          };
        return {
          list: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/";
            return t(1048576).then((function(t) {
              return new Promise((function(t, n) {
                r(e).then((function(e) {
                  var r = [],
                    a = e.createReader();
                  ! function e() {
                    a.readEntries((function(n) {
                      0 === n.length ? t(r.sort()) : (r = r.concat(Array.from(n)), e())
                    }), n)
                  }()
                })).catch(n)
              }))
            })).catch((function(e) {
              throw console.warn("list", e.code, e.name, e.message), e
            }))
          },
          readFile: o,
          writeFile: i,
          removeFile: s,
          moveFile: function(e, r) {
            return t().then((function(t) {
              return Promise.all([a(e, t), a(r, t)]).then((function(t) {
                var n = t[0].directoryEntry,
                  a = t[0].fileName,
                  c = t[1].directoryEntry,
                  l = t[1].fileName;
                return new Promise((function(t, u) {
                  n.getFile(a, {}, (function(n) {
                    try {
                      n.moveTo(c, l, t, u)
                    } catch (n) {
                      o(e, "ArrayBuffer").then((function(e) {
                        return i(r, new Blob([new Uint8Array(e)]))
                      })).then((function() {
                        return s(e)
                      })).then(t, u)
                    }
                  }), u)
                }))
              }))
            }))
          },
          copyFile: function(e, r) {
            return t().then((function(t) {
              return Promise.all([a(e, t), a(r, t)]).then((function(t) {
                var n = t[0].directoryEntry,
                  a = t[0].fileName,
                  s = t[1].directoryEntry,
                  c = t[1].fileName;
                return new Promise((function(t, l) {
                  n.getFile(a, {}, (function(n) {
                    try {
                      n.copyTo(s, c, t, l)
                    } catch (n) {
                      o(e, "ArrayBuffer").then((function(e) {
                        return i(r, new Blob([new Uint8Array(e)]))
                      })).then(t, l)
                    }
                  }), l)
                }))
              }))
            })).catch((function(e) {
              throw console.warn("copyFile", e.code, e.name, e.message), e
            }))
          },
          getDirectory: r,
          getMetadata: function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t().then((function(t) {
              return e.getMetadata ? new Promise((function(t, r) {
                return e.getMetadata(t)
              })) : a(e, t).then((function(e) {
                var t = e.directoryEntry,
                  n = e.fileName;
                return new Promise((function(e, a) {
                  var o = [n, {
                    create: !1
                  }, function(t) {
                    t.getMetadata(e)
                  }, a];
                  r ? t.getDirectory.apply(t, o) : t.getFile.apply(t, o)
                }))
              }))
            })).catch((function(e) {
              throw console.warn("getMetadata", e.code, e.name, e.message), e
            }))
          },
          ensureDirectory: function(e, t) {
            return r(e, !0, t)
          },
          exists: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              r = t.type;
            return c(e).then((function(e) {
              switch (r) {
                case "file":
                  return e.isFile;
                case "directory":
                  return e.isDirectory;
                default:
                  return e.isFile || e.isDirectory
              }
            }))
          },
          existsStat: c,
          rmdir: function(e, t) {
            return r(e, !1, t).then((function(e) {
              return new Promise((function(t, r) {
                e.remove(t, r)
              }))
            }))
          },
          rmdirR: function(e, t) {
            return r(e, !1, t).then((function(e) {
              return new Promise((function(t, r) {
                return e.removeRecursively(t, r)
              }))
            }))
          }
        }
      }();
    window.fs = a, t.default = a
  },
  106: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      function(e) {
        e[e.AllParsed = 1] = "AllParsed", e[e.PartiallyParsed = 2] = "PartiallyParsed", e[e.Failed = 3] = "Failed", e[e.Fatal = 4] = "Fatal"
      }(t.OCRExitCode || (t.OCRExitCode = {})),
      function(e) {
        e[e.FileNotFound = 0] = "FileNotFound", e[e.Success = 1] = "Success", e[e.ParseError = -10] = "ParseError", e[e.Timeout = -20] = "Timeout", e[e.ValidationError = -30] = "ValidationError", e[e.UnknownError = -99] = "UnknownError"
      }(t.FileParseExitCode || (t.FileParseExitCode = {})),
      function(e) {
        e[e.Identified = 0] = "Identified", e[e.Matched = 1] = "Matched", e[e.TopMatched = 2] = "TopMatched"
      }(t.OcrHighlightType || (t.OcrHighlightType = {}))
  },
  108: function(e, t, r) {
    "use strict";
    r.d(t, "b", (function() {
      return c
    })), r.d(t, "c", (function() {
      return l
    })), r.d(t, "a", (function() {
      return u
    }));
    var n = r(4),
      a = r(13),
      o = r(85),
      i = r(43),
      s = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      c = (o.default.testCases, function(e) {
        var t = Object(a.pickIfExist)(["cmd", "target", "value", "targetOptions"], e);
        return Object(i.doesCommandSupportTargetOptions)(t.cmd) || delete t.targetOptions, t
      }),
      l = function(e) {
        var t = Object(n.compose)(Object(n.on)("data"), Object(n.on)("commands"), n.map)(c)(e);
        return Object(a.pickIfExist)(["id", "data", "name", "path"], t)
      },
      u = function(e) {
        return function(t) {
          return "open" !== t.cmd ? t : s({}, t, {
            target: (e + "/" + t.target).replace(/\/+/g, "/")
          })
        }
      }
  },
  109: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(389),
      a = r(935),
      o = r(181),
      i = r(13),
      s = r(174);
    class c extends a.Stack {
      constructor(e) {
        super(), this.opts = e, this.registry = s.createListenerRegistry()
      }
      on(e, t) {
        return this.registry.add(e, t), () => this.registry.remove(e, t)
      }
      off() {
        this.registry.destroy()
      }
      call(e, t) {
        return this.isEmpty() || this.updatePeek(e => ({
          id: e.id,
          resource: e.resource,
          runningStatus: Object.assign(Object.assign({}, this.opts.updateRunningStatusForCaller(e.runningStatus, e.resource)), {
            status: o.MacroStatus.Calling
          })
        })), this.push({
          resource: e,
          id: i.uid(),
          runningStatus: t || this.opts.getInitialRunningStatus(e)
        }), this.registry.fire(n.CallStackEvent.BeforeRun, this.callStackSnapshot()), this.runPeek()
      }
      runPeek(e = !1) {
        return this.opts.prepareContext(this.peek(), this.getFrameStatus(this.peek(), e)).then(() => {
          const t = this.peek();
          return this.opts.run(t, this.getFrameStatus(t, e)).then(() => {
            const e = this.callStackSnapshot();
            if (this.opts.getLatestFrameIdFromSnapshot(e) === t.id && (this.registry.fire(n.CallStackEvent.AfterReturn, e), this.pop(), !this.isEmpty())) return this.updatePeekAfterResume(), this.registry.fire(n.CallStackEvent.BeforeResume, this.callStackSnapshot()), this.runPeek(!0)
          })
        })
      }
      updatePeek(e) {
        this.guardNotEmpty();
        const t = this.getCount() - 1;
        this.list[t] = e(this.list[t])
      }
      getFrameStatus(e, t) {
        return {
          isResume: t,
          isBottom: 1 === this.getCount(),
          frameId: e.id
        }
      }
      updatePeekAfterResume() {
        this.updatePeek(e => e)
      }
      callStackSnapshot() {
        return this.list.map(e => e.resource)
      }
    }
    t.CallStack = c;
    class l extends c {
      isAtBottom() {
        return 1 === this.getCount()
      }
      callStackSnapshot() {
        return this.list.map(e => ({
          id: e.resource.id,
          name: e.resource.name,
          frameId: e.id
        }))
      }
      updatePeekAfterResume() {
        this.updatePeek(e => {
          const t = e.runningStatus.nextIndex,
            r = t + 1,
            n = [...e.runningStatus.commandResults];
          return n[t] = o.CommandRunningStatus.Success, {
            id: e.id,
            resource: e.resource,
            runningStatus: {
              nextIndex: r,
              commandResults: n,
              status: o.MacroStatus.Running,
              playerState: Object.assign(Object.assign({}, e.runningStatus.playerState), {
                nextIndex: r,
                doneIndices: [...e.runningStatus.playerState.doneIndices, t]
              }),
              interpreterState: e.runningStatus.interpreterState
            }
          }
        })
      }
    }
    t.MacroCallStack = l, t.getMacroCallStack = i.singletonGetter(e => {
      if (!e) throw new Error("macro call stack options is required");
      return new l(e)
    }), t.createMacroCallStack = function(e) {
      return t.getMacroCallStack({
        getInitialRunningStatus: e => ({
          nextIndex: 0,
          status: o.MacroStatus.Running,
          commandResults: [],
          playerState: {},
          interpreterState: {}
        }),
        getLatestFrameIdFromSnapshot: e => {
          const t = e[e.length - 1];
          return t ? t.frameId : null
        },
        updateRunningStatusForCaller: (t, r) => e.getCurrentMacroRunningStatus(),
        prepareContext: (t, r) => {
          const n = t.resource,
            a = t.runningStatus;
          return i.withPromise(() => e.updateSelectedMacro(n, a, r)).then(() => i.withPromise(() => e.restorePlayerState(n, a, r)))
        },
        run: (t, r) => {
          const n = t.resource,
            a = t.runningStatus;
          return i.withPromise(() => e.playMacro(n, a, r))
        }
      })
    }
  },
  110: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = r(73),
      o = r(58),
      i = n(r(28)),
      s = r(4),
      c = r(13);
    class l extends a.FlatStorage {
      constructor(e) {
        super({
          encode: e.encode,
          decode: e.decode
        }), this.listFilter = e => e, this.displayedCount = 0, this.totalCount = 0;
        const {
          baseDir: t,
          rootDir: r,
          extensions: n,
          shouldKeepExt: a = !1,
          listFilter: i
        } = e;
        if (!t || "/" === t) throw new Error(`Invalid baseDir, ${t}`);
        this.rootDir = r, this.baseDir = t, this.extensions = n, this.shouldKeepExt = a, i && (this.listFilter = i), this.fs = o.getNativeFileSystemAPI()
      }
      getDisplayCount() {
        return this.displayedCount
      }
      getTotalCount() {
        return this.totalCount
      }
      readAll(e = "Text", t) {
        return this.list().then(r => Promise.all(r.map(t => this.read(t.fileName, e).then(e => ({
          content: e,
          fileName: t.fileName
        })).catch(e => ({
          fileName: t.fileName,
          fullFilePath: this.filePath(t.fileName),
          error: new Error(`Error in parsing ${this.filePath(t.fileName)}:\n${e.message}`)
        })))).then(e => {
          const r = e.filter(e => e.error);
          return t && t(r), e.filter(e => e.content)
        }))
      }
      getLink(e) {
        return this.read(e, "DataURL")
      }
      __list() {
        return this.ensureDir().then(() => this.fs.getEntries({
          path: i.default.join(this.rootDir, this.baseDir),
          extensions: this.extensions
        }).then(e => {
          const t = e.entries,
            r = e.errorCode;
          if (0 !== r) throw new u(d(r), r);
          const n = e => this.shouldKeepExt ? e : this.removeExt(e),
            o = t.map(e => ({
              dir: this.baseDir,
              fileName: n(e.name),
              lastModified: new Date(e.lastWriteTime),
              size: a.readableSize(e.length)
            }));
          return Promise.resolve(this.listFilter(o)).then(e => (this.totalCount = o.length, this.displayedCount = e.length, e))
        }))
      }
      exists(e) {
        return this.fs.fileExists({
          path: this.filePath(e)
        })
      }
      read(e, t) {
        const r = r => {
          if (0 !== r.errorCode) throw new u(`${e}: ` + d(r.errorCode), r.errorCode);
          const n = r.content,
            a = (() => {
              switch (t) {
                case "Text":
                case "DataURL":
                  return n;
                case "ArrayBuffer":
                  return s.dataURItoArrayBuffer(n);
                case "BinaryString":
                  return s.arrayBufferToString(s.dataURItoArrayBuffer(n))
              }
            })();
          return this.decode(a, e)
        };
        switch (t) {
          case "Text":
            return this.fs.readAllTextCompat({
              path: this.filePath(e)
            }).then(r);
          default:
            return this.fs.readAllBytesCompat({
              path: this.filePath(e)
            }).then(r)
        }
      }
      __write(e, t) {
        return this.ensureDir().then(() => this.encode(t, e)).then(t => this.fs.writeAllBytes({
          content: t,
          path: this.filePath(e, !0)
        }).then(t => {
          if (!t) throw new Error(`Failed to write to '${e}'`)
        }))
      }
      __overwrite(e, t) {
        return this.remove(e).catch(() => {}).then(() => this.write(e, t))
      }
      __clear() {
        return this.list().then(e => {
          const t = e.map(e => this.remove(e.fileName));
          return Promise.all(t)
        }).then(() => {})
      }
      __remove(e) {
        return this.ensureDir().then(() => this.fs.deleteFile({
          path: this.filePath(e)
        }).then(() => {}))
      }
      __rename(e, t) {
        return this.ensureDir().then(() => this.fs.moveFile({
          sourcePath: this.filePath(e),
          targetPath: this.filePath(t, !0)
        }).then(() => {}))
      }
      __copy(e, t) {
        return this.ensureDir().then(() => this.fs.copyFile({
          sourcePath: this.filePath(e),
          targetPath: this.filePath(t, !0)
        }).then(() => {}))
      }
      filePath(e, t = !1) {
        const r = t ? s.sanitizeFileName(e) : e,
          n = i.default.extname(e),
          a = this.extensions[0],
          o = n && n.substr(1).toLowerCase() === a.toLowerCase() ? r : r + "." + a;
        return i.default.join(this.rootDir, this.baseDir, o)
      }
      removeExt(e) {
        const t = i.default.basename(e),
          r = i.default.extname(e),
          n = t.lastIndexOf(r);
        return t.substring(0, n)
      }
      ensureDir() {
        const e = this.fs,
          t = i.default.join(this.rootDir, this.baseDir);
        return e.directoryExists({
          path: t
        }).then(r => r || e.createDirectory({
          path: t
        })).then(() => {})
      }
    }
    t.NativeFileSystemFlatStorage = l, t.getNativeFileSystemFlatStorage = c.singletonGetterByKey(e => i.default.join(e.rootDir, e.baseDir), e => new l(e));
    class u extends Error {
      constructor(e, t) {
        super(e), this.name = "ErrorWithCode", this.code = t, "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(e).stack
      }
    }

    function d(e) {
      switch (e) {
        case 0:
          return "Success";
        case 1:
          return "Failed to load";
        case 2:
          return "File too large to load";
        default:
          return `Unknown error code: ${e}`
      }
    }
    t.ErrorWithCode = u, t.getErrorMessageForCode = d
  },
  114: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = r(84),
      o = n(r(103)),
      i = r(28),
      s = r(4),
      c = r(22),
      l = n(r(10)),
      u = r(13);
    class d extends a.StandardStorage {
      constructor(e) {
        super({
          encode: e.encode,
          decode: e.decode
        }), this.transformFileName = e => e;
        const {
          extensions: t,
          shouldKeepExt: r,
          transformFileName: n,
          baseDir: a = "share"
        } = e;
        if (!a || "/" === a) throw new Error(`Invalid baseDir, ${a}`);
        n && (this.transformFileName = n), this.baseDir = a, this.extensions = t, this.shouldKeepExt = r, o.default.getDirectory(a, !0)
      }
      getLink(e) {
        if (c.isFirefox()) return this.read(e, "DataURL"); {
          const t = `filesystem:${l.default.extension.getURL("temporary")}/${this.filePath(e)}`;
          return Promise.resolve(t + "?" + (new Date).getTime())
        }
      }
      read(e, t) {
        const r = this.filePath(e),
          n = i.posix.relative(this.dirPath("/"), r);
        return o.default.readFile(r, t).then(e => this.decode(e, n, t), t => {
          if (-1 !== t.message.indexOf("A requested file or directory could not be found")) throw new Error(`File not found: ${e}`);
          return Promise.reject(t)
        })
      }
      stat(e, t) {
        const r = i.posix.basename(e),
          n = i.posix.dirname(e),
          a = t ? this.dirPath(e) : this.filePath(e),
          s = i.posix.relative(this.dirPath("/"), a);
        return o.default.existsStat(a).then(({
          isFile: e,
          isDirectory: t
        }) => e ? o.default.getMetadata(a, t).then(o => ({
          dir: n,
          name: r,
          fullPath: a,
          relativePath: s,
          isFile: e,
          isDirectory: t,
          size: o.size,
          lastModified: o.modificationTime
        })) : {
          dir: n,
          name: r,
          fullPath: a,
          relativePath: s,
          isFile: e,
          isDirectory: t,
          size: 0,
          lastModified: new Date(0)
        })
      }
      __list(e = "/", t = !1) {
        const r = (e, t) => this.shouldKeepExt || t ? e : this.removeExt(e);
        return this.ensureBaseDir().then(() => o.default.list(this.dirPath(e))).then(e => {
          const t = e.map(e => this.stat(e.fullPath, e.isDirectory).then(t => Object.assign(Object.assign({}, t), {
            name: this.transformFileName(r(t.name, e.isDirectory))
          })));
          return Promise.all(t).then(e => (e.sort((e, t) => e.name < t.name ? -1 : e.name > t.name ? 1 : 0), this.totalCount = e.length, this.displayedCount = e.length, e))
        })
      }
      __write(e, t) {
        return this.ensureBaseDir().then(() => this.remove(e)).catch(() => {}).then(() => this.encode(t, e)).then(t => o.default.writeFile(this.filePath(e, !0), t)).then(() => {})
      }
      __overwrite(e, t) {
        return this.__write(e, t)
      }
      __removeFile(e) {
        return o.default.removeFile(this.filePath(e))
      }
      __removeEmptyDirectory(e) {
        return o.default.rmdir(this.dirPath(e))
      }
      __moveFile(e, t) {
        return o.default.moveFile(this.filePath(e), this.filePath(t, !0)).then(() => {})
      }
      __copyFile(e, t) {
        return o.default.copyFile(this.filePath(e), this.filePath(t, !0)).then(() => {})
      }
      __createDirectory(e) {
        return o.default.getDirectory(this.dirPath(e, !0), !0).then(() => {})
      }
      dirPath(e, t = !1) {
        const r = this.getPathLib(),
          n = (() => this.isStartWithBaseDir(e) ? e : r.join("/", this.baseDir, e))(),
          a = r.dirname(n),
          o = r.basename(n),
          i = t ? s.sanitizeFileName(o) : o;
        return r.join(a, i)
      }
      isWin32Path() {
        return !1
      }
      filePath(e, t = !1) {
        const r = i.posix.dirname(e),
          n = i.posix.basename(e),
          a = t ? s.sanitizeFileName(n) : n,
          o = i.posix.extname(n),
          c = this.extensions[0],
          l = o && o.substr(1).toLowerCase() === c.toLowerCase() ? a : a + "." + c;
        return this.isStartWithBaseDir(r) ? i.posix.join(r, this.transformFileName(l)) : i.posix.join("/", this.baseDir, r, this.transformFileName(l))
      }
      isStartWithBaseDir(e) {
        return 0 === e.indexOf("/" + this.baseDir)
      }
      ensureBaseDir() {
        return o.default.ensureDirectory(this.baseDir).then(() => {})
      }
      removeExt(e) {
        const t = i.posix.basename(e),
          r = i.posix.extname(e),
          n = t.lastIndexOf(r);
        return t.substring(0, n)
      }
    }
    t.BrowserFileSystemStandardStorage = d, t.getBrowserFileSystemStandardStorage = u.singletonGetterByKey(e => e && e.baseDir || "share", e => new d(e))
  },
  115: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(13);
    t.EACCES = n.errorClassFactory("EACCES"), t.EEXIST = n.errorClassFactory("EEXIST"), t.EISDIR = n.errorClassFactory("EISDIR"), t.EMFILE = n.errorClassFactory("EMFILE"), t.ENOENT = n.errorClassFactory("ENOENT"), t.ENOTDIR = n.errorClassFactory("ENOTDIR"), t.ENOTEMPTY = n.errorClassFactory("ENOTEMPTY")
  },
  116: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(28)),
      o = r(84),
      i = r(4),
      s = r(58),
      c = r(110),
      l = r(13);
    class u extends o.StandardStorage {
      constructor(e) {
        super({
          encode: e.encode,
          decode: e.decode,
          listFilter: e.listFilter
        });
        const {
          baseDir: t,
          rootDir: r,
          extensions: n,
          shouldKeepExt: a = !1,
          allowAbsoluteFilePath: o = !1
        } = e;
        if (!t || "/" === t) throw new Error(`Invalid baseDir, ${t}`);
        this.rootDir = r, this.baseDir = t, this.extensions = n, this.shouldKeepExt = a, this.allowAbsoluteFilePath = o, this.fs = s.getNativeFileSystemAPI()
      }
      getLink(e) {
        return this.read(e, "DataURL")
      }
      read(e, t) {
        const r = this.filePath(e),
          n = a.default.relative(this.dirPath("/"), r),
          o = r => {
            if (0 !== r.errorCode) throw new c.ErrorWithCode(`${e}: ` + c.getErrorMessageForCode(r.errorCode), r.errorCode);
            const a = r.content,
              o = (() => {
                switch (t) {
                  case "Text":
                  case "DataURL":
                    return a;
                  case "ArrayBuffer":
                    return i.dataURItoArrayBuffer(a);
                  case "BinaryString":
                    return i.arrayBufferToString(i.dataURItoArrayBuffer(a))
                }
              })();
            return this.decode(o, n, t)
          };
        switch (t) {
          case "Text":
            return this.fs.readAllTextCompat({
              path: r
            }).then(o);
          default:
            return this.fs.readAllBytesCompat({
              path: r
            }).then(o)
        }
      }
      stat(e, t) {
        const r = a.default.dirname(e),
          n = a.default.basename(e),
          o = t ? this.dirPath(e) : this.filePath(e),
          i = a.default.relative(this.dirPath("/"), o),
          s = {
            dir: r,
            name: n,
            fullPath: o,
            relativePath: i,
            isFile: !1,
            isDirectory: !1,
            lastModified: new Date(0),
            size: 0
          };
        return (t ? this.fs.directoryExists({
          path: o
        }) : this.fs.fileExists({
          path: o
        })).then(e => e ? this.fs.getFileSystemEntryInfo({
          path: o
        }).then(e => ({
          dir: r,
          name: n,
          fullPath: o,
          relativePath: i,
          isFile: !e.isDirectory,
          isDirectory: e.isDirectory,
          lastModified: new Date(e.lastWriteTime),
          size: e.length
        }), e => s) : s)
      }
      __list(e = "/", t = !1) {
        return this.ensureBaseDir().then(() => this.fs.getEntries({
          brief: t,
          path: this.dirPath(e),
          extensions: this.extensions
        }).then(t => {
          const r = t.entries,
            n = t.errorCode;
          if (0 !== n) throw new c.ErrorWithCode(c.getErrorMessageForCode(n) + `: ${e}`, n);
          const o = (e, t) => this.shouldKeepExt || t ? e : this.removeExt(e);
          return r.map(t => {
            const r = this.dirPath(e),
              n = o(t.name, t.isDirectory),
              i = a.default.join(r, t.name);
            return {
              dir: r,
              name: n,
              fullPath: i,
              relativePath: a.default.relative(this.dirPath("/"), i),
              isFile: !t.isDirectory,
              isDirectory: t.isDirectory,
              lastModified: new Date(t.lastWriteTime),
              size: t.length
            }
          })
        }))
      }
      __write(e, t) {
        return this.ensureBaseDir().then(() => this.encode(t, e)).then(t => this.fs.writeAllBytes({
          content: t,
          path: this.filePath(e, !0)
        }).then(t => {
          if (!t) throw new Error(`Failed to write to '${e}'`)
        }))
      }
      __overwrite(e, t) {
        return this.write(e, t)
      }
      __removeFile(e) {
        return this.ensureBaseDir().then(() => this.fs.deleteFile({
          path: this.filePath(e)
        }).then(() => {}))
      }
      __removeEmptyDirectory(e) {
        return this.ensureBaseDir().then(() => this.fs.removeDirectory({
          path: this.dirPath(e)
        }).then(() => {}))
      }
      __moveFile(e, t) {
        return this.ensureBaseDir().then(() => this.fs.moveFile({
          sourcePath: this.filePath(e),
          targetPath: this.filePath(t, !0)
        }).then(() => {}))
      }
      __copyFile(e, t) {
        return this.ensureBaseDir().then(() => this.fs.copyFile({
          sourcePath: this.filePath(e),
          targetPath: this.filePath(t, !0)
        }).then(() => {}))
      }
      __createDirectory(e) {
        return this.ensureBaseDir().then(() => this.fs.createDirectory({
          path: this.dirPath(e, !0)
        }).then(() => {}))
      }
      dirPath(e, t = !1) {
        const r = this.getPathLib(),
          n = (() => this.isStartWithBaseDir(e) ? r.normalize(e) : r.normalize(r.join(this.rootDir, this.baseDir, e)))(),
          a = r.dirname(n),
          o = r.basename(n),
          s = t ? i.sanitizeFileName(o) : o;
        return r.join(a, s)
      }
      filePath(e, t = !1) {
        const r = a.default.dirname(e),
          n = a.default.basename(e),
          o = t ? i.sanitizeFileName(n) : n,
          s = a.default.extname(n),
          c = this.extensions[0],
          l = s && s.substr(1).toLowerCase() === c.toLowerCase() ? o : o + "." + c;
        return this.isStartWithBaseDir(r) || this.allowAbsoluteFilePath && this.isAbsoluteUrl(e) ? a.default.normalize(a.default.join(r, l)) : a.default.normalize(a.default.join(this.rootDir, this.baseDir, r, l))
      }
      isWin32Path() {
        return /^([A-Z]:\\|\/\/|\\\\)/i.test(this.rootDir)
      }
      isAbsoluteUrl(e) {
        return this.getPathLib().isAbsolute(e)
      }
      isStartWithBaseDir(e) {
        return 0 === e.indexOf(this.rootDir)
      }
      removeExt(e) {
        const t = a.default.basename(e),
          r = a.default.extname(e),
          n = t.lastIndexOf(r);
        return t.substring(0, n)
      }
      ensureBaseDir() {
        const e = this.fs,
          t = a.default.normalize(a.default.join(this.rootDir, this.baseDir));
        return e.directoryExists({
          path: t
        }).then(r => r || e.createDirectory({
          path: t
        })).then(() => {})
      }
    }
    t.NativeFileSystemStandardStorage = u, t.getNativeFileSystemStandardStorage = l.singletonGetterByKey(e => a.default.join(e.rootDir, e.baseDir), e => new u(e))
  },
  117: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.PublicMethodTypes = [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], t.MethodTypeFriendlyNames = ["GetVersion", "GetFileSystemEntries", "GetDirectories", "GetFiles", "GetFileSystemEntryInfo", "GetSpecialFolderPath", "DirectoryExists", "FileExists", "CreateDirectory", "RemoveDirectory", "CopyFile", "MoveFile", "DeleteFile", "ReadAllText", "WriteAllText", "AppendAllText", "ReadAllBytes", "WriteAllBytes", "AppendAllBytes", "GetMaxFileRange", "GetFileSize", "ReadFileRange", "RunProcess"], t.MethodTypeInvocationNames = ["get_version", "get_file_system_entries", "get_directories", "get_files", "get_file_system_entry_info", "get_special_folder_path", "directory_exists", "file_exists", "create_directory", "remove_directory", "copy_file", "move_file", "delete_file", "read_all_text", "write_all_text", "append_all_text", "read_all_bytes", "write_all_bytes", "append_all_bytes", "get_max_file_range", "get_file_size", "read_file_range", "run_process"]
  },
  118: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(90);
    class a extends n.NativeMessagingHost {
      constructor() {
        super(a.HOST_NAME)
      }
    }
    t.KantuFileAccessHost = a, a.HOST_NAME = "com.a9t9.kantu.file_access"
  },
  119: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    class n {
      constructor(e) {
        this.input = e, this.position = 0
      }
      getNextByte() {
        if (this.position >= this.input.length) return n.END;
        const e = 255 & this.input[this.position];
        return ++this.position, e
      }
      getNextContinuationByte() {
        const e = this.getNextByte();
        return 128 == (192 & e) ? 63 & e : n.ERROR
      }
      decodeNext() {
        if (this.position >= this.input.length) return this.position === this.input.length ? n.END : n.ERROR;
        const e = this.getNextByte();
        if (0 == (128 & e)) return e;
        if (192 == (224 & e)) {
          const t = this.getNextContinuationByte();
          if (t >= 0) {
            const r = (31 & e) << 6 | t;
            if (r >= 128) return r
          }
        } else if (224 == (240 & e)) {
          const t = this.getNextContinuationByte(),
            r = this.getNextContinuationByte();
          if ((t | r) >= 0) {
            const n = (15 & e) << 12 | t << 6 | r;
            if (n >= 2048 && (n < 55296 || n > 57343)) return n
          }
        } else if (240 == (248 & e)) {
          const t = this.getNextContinuationByte(),
            r = this.getNextContinuationByte(),
            n = this.getNextContinuationByte();
          if ((t | r | n) >= 0) {
            const a = (7 & e) << 18 | t << 12 | r << 6 | n;
            if (a >= 65536 && a <= 1114111) return a
          }
        }
        return n.ERROR
      }
    }
    n.REPLACEMENT_CHARACTER = "�", n.END = -1, n.ERROR = -2,
      function(e) {
        e.isValid = function(e) {
          const t = new n(e);
          for (;;) {
            switch (t.decodeNext()) {
              case n.END:
                return !0;
              case n.ERROR:
                return !1
            }
          }
        }, e.decode = function(e) {
          const t = new n(e);
          let r = "";
          for (;;) {
            const e = t.decodeNext();
            if (e === n.END) break;
            r += e !== n.ERROR ? String.fromCodePoint(e) : n.REPLACEMENT_CHARACTER
          }
          return r
        }
      }(t.utf8 || (t.utf8 = {}))
  },
  12: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(78)),
      o = r(114),
      i = r(116),
      s = r(13),
      c = r(31),
      l = r(53),
      u = r(64),
      d = r(4),
      m = n(r(28));
    var p, h, f;
    ! function(e) {
      e.Browser = "browser", e.XFile = "xfile", e.Nil = "nil"
    }(p = t.StorageStrategyType || (t.StorageStrategyType = {})),
    function(e) {
      e[e.Macro = 0] = "Macro", e[e.TestSuite = 1] = "TestSuite", e[e.CSV = 2] = "CSV", e[e.Screenshot = 3] = "Screenshot", e[e.Vision = 4] = "Vision"
    }(h = t.StorageTarget || (t.StorageTarget = {})),
    function(e) {
      e.StrategyTypeChanged = "StrategyTypeChanged", e.RootDirChanged = "RootDirChanged", e.ForceReload = "ForceReload"
    }(f = t.StorageManagerEvent || (t.StorageManagerEvent = {}));
    class g extends a.default {
      constructor(e, t) {
        super(), this.strategyType = p.Nil, this.getMacros = () => [], this.getMaxMacroCount = e => Promise.resolve(1 / 0), this.setCurrentStrategyType(e), t && t.getMacros && (this.getMacros = t.getMacros), t && t.getMaxMacroCount && (this.getMaxMacroCount = t.getMaxMacroCount), this.getConfig = null == t ? void 0 : t.getConfig
      }
      isXFileMode() {
        return this.strategyType === p.XFile
      }
      isBrowserMode() {
        return this.strategyType === p.Browser
      }
      getCurrentStrategyType() {
        return this.strategyType
      }
      setCurrentStrategyType(e) {
        const t = e !== this.strategyType;
        return t && (setTimeout(() => {
          this.emit(f.StrategyTypeChanged, e)
        }, 0), this.strategyType = e), t
      }
      isStrategyTypeAvailable(e) {
        switch (e) {
          case p.Browser:
            return Promise.resolve(!0);
          case p.XFile:
            return c.getXFile().sanityCheck();
          default:
            throw new Error(`type '${e}' is not supported`)
        }
      }
      getStorageForTarget(e, t) {
        switch (t || this.strategyType) {
          case p.Browser:
            switch (e) {
              case h.Macro: {
                const e = o.getBrowserFileSystemStandardStorage({
                  baseDir: "macros",
                  extensions: ["json"],
                  shouldKeepExt: !1,
                  decode: (t, r) => {
                    const n = l.fromJSONString(t, m.default.basename(r), {
                      withStatus: !0
                    });
                    return Object.assign(Object.assign({}, n), {
                      id: e.filePath(r),
                      path: e.relativePath(r)
                    })
                  },
                  encode: (e, t) => {
                    var r, n;
                    const a = l.toJSONString(Object.assign(Object.assign({}, e), {
                      commands: e.data.commands
                    }), {
                      withStatus: !0,
                      ignoreTargetOptions: !!(null === (n = null === (r = this.getConfig) || void 0 === r ? void 0 : r.call(this)) || void 0 === n ? void 0 : n.saveAlternativeLocators)
                    });
                    return new Blob([a])
                  }
                });
                return window.newMacroStorage = e, e
              }
              case h.TestSuite: {
                const e = o.getBrowserFileSystemStandardStorage({
                  baseDir: "testsuites",
                  extensions: ["json"],
                  shouldKeepExt: !1,
                  decode: (t, r) => {
                    console.log("test suite raw content", r, t, this.getMacros());
                    const n = u.parseTestSuite(t, {
                      fileName: m.default.basename(r)
                    });
                    return Object.assign(Object.assign({}, n), {
                      id: e.filePath(r),
                      path: e.relativePath(r)
                    })
                  },
                  encode: (e, t) => {
                    const r = u.stringifyTestSuite(e);
                    return new Blob([r])
                  }
                });
                return window.newTestSuiteStorage = e, e
              }
              case h.CSV:
                return o.getBrowserFileSystemStandardStorage({
                  baseDir: "spreadsheets",
                  extensions: ["csv"],
                  shouldKeepExt: !0,
                  transformFileName: e => e.toLowerCase()
                });
              case h.Screenshot:
                return o.getBrowserFileSystemStandardStorage({
                  baseDir: "screenshots",
                  extensions: ["png"],
                  shouldKeepExt: !0,
                  transformFileName: e => e.toLowerCase()
                });
              case h.Vision:
                return o.getBrowserFileSystemStandardStorage({
                  baseDir: "visions",
                  extensions: ["png"],
                  shouldKeepExt: !0,
                  transformFileName: e => e.toLowerCase()
                })
            }
            case p.XFile: {
              const {
                rootDir: t
              } = c.getXFile().getCachedConfig();
              switch (e) {
                case h.Macro: {
                  const e = i.getNativeFileSystemStandardStorage({
                    rootDir: t,
                    baseDir: "macros",
                    extensions: ["json"],
                    shouldKeepExt: !1,
                    listFilter: e => this.getMaxMacroCount(this.strategyType).then(t => s.forestSlice(t, e)),
                    decode: (t, r) => {
                      const n = l.fromJSONString(t, m.default.basename(r), {
                        withStatus: !0
                      });
                      return Object.assign(Object.assign({}, n), {
                        id: e.filePath(r),
                        path: e.relativePath(r)
                      })
                    },
                    encode: (e, t) => {
                      const r = l.toJSONString(Object.assign(Object.assign({}, e), {
                        commands: e.data.commands
                      }), {
                        withStatus: !0
                      });
                      return d.blobToDataURL(new Blob([r]))
                    }
                  });
                  return e
                }
                case h.TestSuite: {
                  const e = i.getNativeFileSystemStandardStorage({
                    rootDir: t,
                    baseDir: "testsuites",
                    extensions: ["json"],
                    shouldKeepExt: !1,
                    decode: (t, r) => {
                      const n = u.parseTestSuite(t, {
                        fileName: m.default.basename(r)
                      });
                      return Object.assign(Object.assign({}, n), {
                        id: e.filePath(r),
                        path: e.relativePath(r)
                      })
                    },
                    encode: (e, t) => {
                      const r = u.stringifyTestSuite(e);
                      return d.blobToDataURL(new Blob([r]))
                    }
                  });
                  return e
                }
                case h.CSV:
                  return i.getNativeFileSystemStandardStorage({
                    rootDir: t,
                    baseDir: "datasources",
                    extensions: ["csv"],
                    shouldKeepExt: !0,
                    allowAbsoluteFilePath: !0,
                    encode: (e, t) => d.blobToDataURL(new Blob([e]))
                  });
                case h.Vision:
                  return i.getNativeFileSystemStandardStorage({
                    rootDir: t,
                    baseDir: "images",
                    extensions: ["png"],
                    shouldKeepExt: !0,
                    decode: v,
                    encode: (e, t) => d.blobToDataURL(e)
                  });
                case h.Screenshot:
                  return i.getNativeFileSystemStandardStorage({
                    rootDir: t,
                    baseDir: "screenshots",
                    extensions: ["png"],
                    shouldKeepExt: !0,
                    decode: v,
                    encode: (e, t) => d.blobToDataURL(e)
                  })
              }
            }
            default:
              throw new Error(`Unsupported strategy type: '${this.strategyType}'`)
        }
      }
      getMacroStorage() {
        return this.getStorageForTarget(h.Macro)
      }
      getTestSuiteStorage() {
        return this.getStorageForTarget(h.TestSuite)
      }
      getCSVStorage() {
        return this.getStorageForTarget(h.CSV)
      }
      getVisionStorage() {
        return this.getStorageForTarget(h.Vision)
      }
      getScreenshotStorage() {
        return this.getStorageForTarget(h.Screenshot)
      }
    }

    function v(e, t, r) {
      return "DataURL" !== r || "data:image" === e.substr(0, 11) ? e : "data:image/png;base64," + e
    }
    t.StorageManager = g, t.getStorageManager = s.singletonGetter((e, t) => new g(e || p.XFile, t))
  },
  120: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      function(e) {
        const t = new Uint8Array([65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47]),
          r = new Uint8Array([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);

        function n(e, t, n) {
          if (n > 4) throw new Error("maxLength should be in range [0, 4].");
          const a = new Uint8Array(4);
          for (let o = 0; o < n; ++o) {
            const n = e.charCodeAt(t + o),
              i = r[n];
            if (255 === i) return;
            a[o] = i
          }
          return (a[0] << 18) + (a[1] << 12) + (a[2] << 6) + (a[3] << 0)
        }

        function a(e, t, r) {
          e[t + 0] = r >> 16 & 255, e[t + 1] = r >> 8 & 255, e[t + 2] = 255 & r
        }
        e.encode = function(e) {
          const r = e.length,
            n = function(e) {
              let t = 4 * Math.trunc(e / 3);
              return t += e % 3 != 0 ? 4 : 0, t
            }(r),
            a = r % 3,
            o = r - a,
            i = new Uint8Array(n);
          let s, c = 0;
          for (s = 0; s < o; s += 3) i[c + 0] = t[(252 & e[s]) >> 2], i[c + 1] = t[(3 & e[s]) << 4 | (240 & e[s + 1]) >> 4], i[c + 2] = t[(15 & e[s + 1]) << 2 | (192 & e[s + 2]) >> 6], i[c + 3] = t[63 & e[s + 2]], c += 4;
          switch (s = o, a) {
            case 2:
              i[c + 0] = t[(252 & e[s]) >> 2], i[c + 1] = t[(3 & e[s]) << 4 | (240 & e[s + 1]) >> 4], i[c + 2] = t[(15 & e[s + 1]) << 2], i[c + 3] = 61, c += 4;
              break;
            case 1:
              i[c + 0] = t[(252 & e[s]) >> 2], i[c + 1] = t[(3 & e[s]) << 4], i[c + 2] = 61, i[c + 3] = 61, c += 4
          }
          return new TextDecoder("ascii").decode(i)
        }, e.decode = function(e) {
          const t = e.length;
          if (t % 4 != 0) return;
          let r = 0;
          t > 0 && 61 == e.charCodeAt(t - 1) && (++r, t > 1 && 61 == e.charCodeAt(t - 2) && ++r);
          const o = -4 & t - r,
            i = new Uint8Array(6 * t / 8 - r);
          let s, c = 0,
            l = 0;
          for (; c < o;) {
            if (s = n(e, c, 4), void 0 === s) return;
            a(i, l, s), c += 4, l += 3
          }
          if (r > 0) {
            if (s = n(e, c, 4 - r), void 0 === s) return;
            switch (r) {
              case 1:
                i[l + 0] = s >> 16 & 255, i[l + 1] = s >> 8 & 255;
                break;
              case 2:
                i[l + 0] = s >> 16 & 255
            }
          }
          return i
        }
      }(t.base64 || (t.base64 = {}))
  },
  126: function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, "default", (function() {
      return S
    }));
    var n = r(56),
      a = r.n(n),
      o = r(15),
      i = r.n(o),
      s = r(33),
      c = r.n(s),
      l = r(0),
      u = r.n(l),
      d = r(17),
      m = r.n(d),
      p = r(16),
      h = r(24),
      f = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      g = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }();

    function v(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function y(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    var b = function(e) {
        function t() {
          var e, r, n;
          v(this, t);
          for (var a = arguments.length, o = Array(a), i = 0; i < a; i++) o[i] = arguments[i];
          return r = n = y(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), n.state = {
            name: null
          }, y(n, r)
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), g(t, [{
          key: "componentDidMount",
          value: function() {
            var e = this;
            this.props.name && this.setState({
              name: this.props.name
            }), setTimeout((function() {
              var t = e.inputSaveTestCase.refs.input;
              t.focus(), t.selectionStart = t.selectionEnd = t.value.length
            }), 100)
          }
        }, {
          key: "render",
          value: function() {
            var e = this;
            return u.a.createElement(a.a, {
              title: "Save macro as..",
              okText: "Save",
              cancelText: "Cancel",
              visible: !0,
              onOk: function() {
                return e.props.onOk(e.state.name)
              },
              onCancel: this.props.onCancel,
              className: "save-modal"
            }, u.a.createElement(c.a, {
              style: {
                width: "100%"
              },
              onKeyDown: function(t) {
                13 === t.keyCode && e.props.onOk(e.state.name)
              },
              onChange: function(t) {
                return e.setState({
                  name: t.target.value
                })
              },
              value: this.state.name || "",
              placeholder: "macro name",
              ref: function(t) {
                e.inputSaveTestCase = t
              }
            }))
          }
        }]), t
      }(u.a.Component),
      w = function(e) {
        var t = e.editor.editing.meta.src;
        return t && t.name && t.name.length ? t.name : "Untitled"
      },
      E = function(e, t) {
        var r = function() {
          var e = "save_test_case_container",
            t = document.getElementById(e);
          if (t) return t;
          var r = document.createElement("div");
          return r.id = e, document.body.appendChild(r), r
        }();
        return !!e.getState().editor.editing.meta.src ? e.dispatch(Object(p.saveEditingAsExisted)()).then((function() {
          return !0
        })) : new Promise((function(n, a) {
          m.a.render(u.a.createElement(b, {
            name: t,
            onOk: function(t) {
              return e.dispatch(Object(p.saveEditingAsNew)(t)).then((function() {
                i.a.success("successfully saved!", 1.5), n(!0)
              }), (function(e) {
                i.a.error(e.message, 1.5), a(e)
              }))
            },
            onCancel: function() {
              return n(!1)
            }
          }), r)
        })).then((function(e) {
          return m.a.unmountComponentAtNode(r), e
        })).catch((function(e) {
          throw console.error(e.message), e
        }))
      },
      x = void 0;

    function S(e) {
      if (x) return x;
      if (!e) throw new Error("must provide store");
      return x = function(e) {
        var t = function(t) {
          return e.dispatch(Object(p.updateUI)({
            isSaving: !0
          })), new Promise((function(e) {
            e(t())
          })).finally((function() {
            e.dispatch(Object(p.updateUI)({
              isSaving: !1
            }))
          }))
        };
        return {
          saveOrNot: function() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = e.getState(),
              o = Object(h.hasUnsavedMacro)(n),
              i = !!n.editor.editing.meta.src,
              s = f({
                getTitle: function(e) {
                  return 'Unsaved changes in macro "' + e.macroName + '"'
                },
                getContent: function(e) {
                  return "Do you want to discard or save these changes?"
                },
                okText: "Save",
                cancelText: "Discard"
              }, r || {});
            return t((function() {
              return o ? i && r.autoSaveExisting ? E(e) : new Promise((function(t, r) {
                var o = w(n);
                a.a.confirm({
                  title: s.getTitle({
                    macroName: o
                  }),
                  content: s.getContent({
                    macroName: o
                  }),
                  okText: s.okText,
                  cancelText: s.cancelText,
                  onOk: function() {
                    return E(e).then(t, r), Promise.resolve(!0)
                  },
                  onCancel: function() {
                    return t(!1), Promise.resolve(!0)
                  }
                })
              })) : Promise.resolve(!0)
            }))
          },
          save: function(r) {
            var n = e.getState(),
              a = Object(h.hasUnsavedMacro)(n);
            return t((function() {
              return a ? E(e, r) : Promise.resolve(!0)
            }))
          }
        }
      }(e)
    }
  },
  127: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(0)),
      o = n(r(1)),
      i = r(487),
      s = r(112),
      c = r(4),
      l = r(931),
      u = r(13),
      d = r(28);
    var m;
    r(932),
      function(e) {
        e.File = "file", e.Folder = "folder"
      }(m = t.FileNodeType || (t.FileNodeType = {}));
    class p extends a.default.Component {
      constructor() {
        super(...arguments), this.onToggle = (e, t) => {
          e.type === m.Folder && this.props.onToggle(e, t)
        }, this.subnodeComponent = (() => {
          const {
            DndFileNode: e,
            DndFolderNode: t
          } = function(e) {
            const t = e => t => i.DragSource(e, {
                beginDrag: e => ({
                  id: e.data.id,
                  isDirectory: e.data.type === m.Folder
                })
              }, (e, t) => ({
                connectDragSource: e.dragSource(),
                isDragging: t.isDragging()
              }))(t),
              r = t(m.File)((function(e) {
                return a.default.createElement(l.TreeNode, Object.assign({}, e, {
                  decorate: u.compose(e.connectDragSource, o)
                }))
              })),
              n = u.compose(t(m.Folder), (s = [m.Folder, m.File], t => i.DropTarget(s, {
                drop(t, r, n) {
                  const a = t.data.id,
                    o = r.getItem();
                  e.move(o.id, a, o.isDirectory)
                },
                canDrop(e, t) {
                  const r = e.data.id,
                    {
                      id: n
                    } = t.getItem();
                  return r !== n && r !== d.posix.dirname(n) && t.isOver({
                    shallow: !0
                  })
                }
              }, (e, t) => ({
                connectDropTarget: e.dropTarget(),
                highlighted: t.isOver({
                  shallow: !0
                }) && t.canDrop()
              }))(t)))((function(e) {
                return a.default.createElement(l.TreeNode, Object.assign({}, e, {
                  decorate: u.compose(e.connectDragSource, e.connectDropTarget, o),
                  data: u.safeUpdateIn(["className"], (t = "") => c.cn(t, {
                    "drag-over": e.highlighted
                  }), e.data)
                }))
              })),
              o = e => e;
            var s;
            return {
              DndFolderNode: n,
              DndFileNode: r
            }
          }({
            move: (e, t, r) => {
              this.props.onMove(e, t, r)
            }
          });
          return (r, n) => {
            switch (r.type) {
              case m.File:
                return e;
              case m.Folder:
                return t
            }
          }
        })(), this.renderFileIcon = e => {
          switch (e.type) {
            case m.File:
              return a.default.createElement("img", {
                src: "./img/code.svg",
                className: "file-node-icon file-icon"
              });
            case m.Folder:
              return e.folded ? a.default.createElement("img", {
                src: "./img/folder.svg",
                className: "file-node-icon folder-icon"
              }) : a.default.createElement("img", {
                src: "./img/folder_expanded.svg",
                className: "file-node-icon folder-icon expanded"
              })
          }
        }, this.renderFileItem = (e, t) => a.default.createElement("div", {
          className: "file-node-title"
        }, a.default.createElement("span", null, e.name)), this.renderFileItemExtra = (e, t) => a.default.createElement(s.Icon, {
          type: "bars",
          className: "more-button",
          onClick: r => this.props.onContextMenu(e, t, r)
        })
      }
      shouldComponentUpdate(e) {
        return !u.isForestEqual((e, t) => e.entryPath === t.entryPath && e.folded === t.folded && e.type === t.type && e.className === t.className, this.props.nodes, e.nodes)
      }
      render() {
        const {
          nodes: e
        } = this.props, {
          connectDropTarget: t,
          highlighted: r
        } = this.props;
        return t(a.default.createElement("div", {
          className: c.cn("file-root", {
            "drag-over": r
          })
        }, e.map((e, t) => {
          const r = this.subnodeComponent(e, [t]);
          return a.default.createElement(r, {
            key: e.id,
            data: e,
            paths: [t],
            commonClass: "file-node",
            renderIcon: this.renderFileIcon,
            renderItem: this.renderFileItem,
            renderItemExtra: this.renderFileItemExtra,
            subnodeComponent: this.subnodeComponent,
            onClick: this.props.onClick,
            onDoubleClick: this.props.onDoubleClick,
            onContextMenu: this.props.onContextMenu,
            onToggle: this.onToggle,
            foldOnClickTitle: !0
          })
        })))
      }
    }
    t.InternalFileTree = p, p.propTypes = {
      nodes: o.default.array.isRequired,
      onMove: o.default.func.isRequired,
      onClick: o.default.func.isRequired,
      onDoubleClick: o.default.func.isRequired,
      onContextMenu: o.default.func.isRequired
    }, t.FileTree = i.DropTarget([m.Folder, m.File], {
      drop(e, t, r) {
        const n = e.rootPath,
          a = t.getItem();
        e.onMove(a.id, n, a.isDirectory)
      },
      canDrop(e, t) {
        const r = e.rootPath,
          {
            id: n
          } = t.getItem();
        return r !== n && (r !== d.posix.dirname(n) && t.isOver({
          shallow: !0
        }))
      }
    }, (e, t) => ({
      connectDropTarget: e.dropTarget(),
      highlighted: t.isOver({
        shallow: !0
      }) && t.canDrop()
    }))(p)
  },
  129: function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
      return p
    }));
    var n = r(10),
      a = r.n(n),
      o = r(11),
      i = r.n(o),
      s = r(4),
      c = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
          var r = [],
            n = !0,
            a = !1,
            o = void 0;
          try {
            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
          } catch (e) {
            a = !0, o = e
          } finally {
            try {
              !n && s.return && s.return()
            } finally {
              if (a) throw o
            }
          }
          return r
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      },
      l = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      u = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }();
    var d, m = function() {
        function e() {
          var t = this;
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.activeDownloads = [], this.eventsBound = !1, this.filterActiveDownloads = function(e) {
            t.activeDownloads = t.activeDownloads.filter(e), 0 === t.activeDownloads.length && t.unbindEvents()
          }, this.createdListener = function(e) {
            if (t.isActive()) {
              i()("download on created", e);
              var r = t.activeDownloads.find((function(e) {
                return !e.id
              }));
              r && l(r, l({
                id: e.id
              }, !r.wait && r.timeout > 0 ? {} : {
                timeoutTimer: setTimeout((function() {
                  r.reject(new Error("download timeout " + r.timeout / 1e3 + "s")), t.filterActiveDownloads((function(e) {
                    return r.uid !== e.uid
                  }))
                }), r.timeout),
                countDownTimer: setInterval((function() {
                  if (t.countDownHandler) {
                    var e = r.past,
                      n = (void 0 === e ? 0 : e) + 1e3;
                    t.countDownHandler({
                      total: r.timeout,
                      past: n
                    }), l(r, {
                      past: n
                    })
                  }
                }), 1e3)
              }))
            }
          }, this.changedListener = function(e) {
            if (t.isActive()) {
              i()("download on changed", e);
              var r = t.findById(e.id);
              if (r && e.state) {
                var n = function() {},
                  o = !1;
                switch (e.state.current) {
                  case "complete":
                    n = function() {
                      return r.resolve(!0)
                    }, o = !0, t.completeHandler && a.a.downloads.search({
                      id: r.id
                    }).then((function(e) {
                      var r = c(e, 1)[0];
                      r && t.completeHandler(r)
                    }));
                    break;
                  case "interrupted":
                    n = function() {
                      return r.reject(new Error("download interrupted"))
                    }, o = !0
                }
                o && (clearTimeout(r.timeoutTimer), clearInterval(r.countDownTimer), t.filterActiveDownloads((function(t) {
                  return t.id !== e.id
                }))), n()
              }
            }
          }, this.determineFileNameListener = function(e, r) {
            if (t.isActive()) {
              i()("download on determine", e);
              var n = t.findById(e.id);
              if (n) {
                var a = n.fileName.trim(),
                  o = "" === a || "*" === a ? null : a;
                return o ? r({
                  filename: o,
                  conflictAction: "uniquify"
                }) : void 0
              }
            }
          }
        }
        return u(e, [{
          key: "isActive",
          value: function() {
            return this.activeDownloads.length > 0
          }
        }, {
          key: "findById",
          value: function(e) {
            return this.activeDownloads.find((function(t) {
              return t.id === e
            }))
          }
        }, {
          key: "bindEvents",
          value: function() {
            this.eventsBound || (a.a.downloads.onCreated.addListener(this.createdListener), a.a.downloads.onChanged.addListener(this.changedListener), a.a.downloads.onDeterminingFilename && a.a.downloads.onDeterminingFilename.addListener(this.determineFileNameListener), this.eventsBound = !0)
          }
        }, {
          key: "unbindEvents",
          value: function() {
            this.eventsBound && (a.a.downloads.onCreated.removeListener && a.a.downloads.onCreated.removeListener(this.createdListener), a.a.downloads.onChanged.removeListener && a.a.downloads.onChanged.removeListener(this.changedListener), a.a.downloads.onDeterminingFilename && a.a.downloads.onDeterminingFilename.removeListener && a.a.downloads.onDeterminingFilename.removeListener(this.determineFileNameListener), this.eventsBound = !1)
          }
        }, {
          key: "reset",
          value: function() {
            this.activeDownloads.forEach((function(e) {
              e.timeoutTimer && clearTimeout(e.timeoutTimer), e.countDownTimer && clearInterval(e.countDownTimer)
            })), this.activeDownloads = [], this.unbindEvents()
          }
        }, {
          key: "prepareDownload",
          value: function(e) {
            var t = this,
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = this.activeDownloads.find((function(e) {
                return !e.id
              }));
            if (n) throw new Error("only one not-created download allowed at a time");
            this.bindEvents();
            var a = l({
                timeoutForStart: 1e4,
                timeout: 6e4,
                wait: !1
              }, r),
              o = new Promise((function(r, n) {
                var i = Math.floor(1e3 * Math.random()) + 1 * new Date;
                setTimeout((function() {
                  t.activeDownloads.push({
                    uid: i,
                    resolve: r,
                    reject: n,
                    fileName: e,
                    promise: o,
                    timeoutForStart: a.timeoutForStart,
                    timeout: a.timeout,
                    wait: a.wait
                  })
                }), 0)
              }));
            return o
          }
        }, {
          key: "waitForDownloadIfAny",
          value: function() {
            var e = this,
              t = this.activeDownloads.find((function(e) {
                return !e.id
              }));
            if (t) return Object(s.until)("download start", (function() {
              return {
                pass: !!t.id,
                result: !0
              }
            }), 50, t.timeoutForStart).then((function() {
              return e.waitForDownloadIfAny()
            }));
            var r = this.activeDownloads.find((function(e) {
              return e.wait && e.id
            }));
            return r ? r.promise.then((function() {
              return e.waitForDownloadIfAny()
            })) : Promise.resolve(!0)
          }
        }, {
          key: "onCountDown",
          value: function(e) {
            this.countDownHandler = e
          }
        }, {
          key: "onDownloadComplete",
          value: function(e) {
            this.completeHandler = e
          }
        }, {
          key: "hasPendingDownload",
          value: function() {
            return !!this.activeDownloads.find((function(e) {
              return !e.id
            }))
          }
        }]), e
      }(),
      p = (d = void 0, function() {
        return d || (d = new m), d
      })
  },
  131: function(e, t, r) {
    "use strict";

    function n(e) {
      return "boolean" == typeof e ? {
        interval: 0,
        count: e ? 1 : 0
      } : e
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.consecutive = n;
    t.withConsecutive = function(e, t) {
      const {
        interval: r,
        count: a
      } = n(e);
      let o = a;
      const i = e => {
        if (!e) throw new Error("failed to run consecutive");
        return o-- <= 0 ? Promise.resolve(!0) : (n = r, new Promise(e => {
          setTimeout(e, n)
        })).then(t).then(i);
        var n
      };
      return t().then(i)
    }
  },
  138: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = r(149),
      o = r(345),
      i = r(475),
      s = r(476),
      c = r(477),
      l = n(r(151)),
      u = [new o.ProxyManagerViaListenerAPI, new s.ProxyManagerViaPacAPI, new i.ProxyManagerViaSettingsAPI],
      d = new c.ProxyHttpAuth({
        getAuth: (e, t) => m().getAuth(e, t)
      });

    function m() {
      for (let e = 0, t = u.length; e < t; e++)
        if (u[e].isSupported()) return u[e];
      throw new Error("Unable to use proxy")
    }
    t.getProxyManager = m, t.setProxy = function(e) {
      return new Promise((t, r) => {
        const n = m();
        n.isControllable(!1).then(t => {
          if (!t) throw new Error(l.default.proxy.notControllable);
          return d.bind(), e ? n.setProxy(e) : n.reset()
        }).then(t, r)
      })
    }, t.parseProxyUrl = function(e, t) {
      const r = new URL(e),
        n = new URL(e.replace(/\s*socks[45]/i, "http")),
        o = n.hostname,
        i = (() => {
          switch (r.protocol) {
            case "http:":
              return a.ProxyScheme.Http;
            case "https:":
              return a.ProxyScheme.Https;
            case "socks4:":
              return a.ProxyScheme.Socks4;
            case "socks5:":
              return a.ProxyScheme.Socks5;
            default:
              throw new Error("Invalid proxy protocol")
          }
        })(),
        s = (() => {
          if (n.port) return n.port;
          switch (i) {
            case a.ProxyScheme.Http:
              return "80";
            case a.ProxyScheme.Https:
              return "443";
            case a.ProxyScheme.Socks4:
            case a.ProxyScheme.Socks5:
              return "1080"
          }
        })();
      if (!o || !o.length) throw new Error("No host found in proxy");
      if (!s || isNaN(parseInt(s, 10))) throw new Error("No valid port found in proxy");
      const {
        username: c,
        password: l
      } = (() => {
        if (!t || !t.length) return {};
        const e = t.indexOf(",");
        return -1 === e ? {
          username: t
        } : {
          username: t.substr(0, e),
          password: t.substr(e + 1)
        }
      })();
      return {
        type: i,
        host: o,
        port: s,
        username: c,
        password: l
      }
    }
  },
  145: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(36)),
      o = r(13);

    function i(e) {
      return e.split("::").filter(e => e.length > 0)
    }
    t.parseKey = i;
    t.KeyValueData = class {
      constructor() {
        this.withOneLock = o.concurrent(1)(e => new Promise((t, r) => {
          try {
            Promise.resolve(e()).then(t, r)
          } catch (e) {
            r(e)
          }
        }))
      }
      get(e) {
        const [t, r] = this.getMainKeyAndSubKeys(e);
        return a.default.get(t).then((e = {}) => o.getIn(r, e))
      }
      set(e, t) {
        return this.withOneLock(() => {
          const [r, n] = this.getMainKeyAndSubKeys(e);
          return a.default.get(r).then((e = {}) => {
            const i = o.safeSetIn(n, t, e);
            return a.default.set(r, i).then(() => o.getIn(n, i))
          })
        })
      }
      update(e, t) {
        return this.withOneLock(() => {
          const [r, n] = this.getMainKeyAndSubKeys(e);
          return a.default.get(r).then((e = {}) => {
            const i = o.safeUpdateIn(n, t, e);
            return a.default.set(r, i).then(() => o.getIn(n, i))
          })
        })
      }
      getMainKeyAndSubKeys(e) {
        const t = i(e);
        return [t[0], t.slice(1)]
      }
    }
  },
  149: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      function(e) {
        e.Http = "http", e.Https = "https", e.Socks4 = "socks4", e.Socks5 = "socks5"
      }(t.ProxyScheme || (t.ProxyScheme = {})),
      function(e) {
        e.Direct = "direct", e.Http = "http", e.Https = "https", e.Socks4 = "socks4", e.Socks5 = "socks"
      }(t.FirefoxProxyType || (t.FirefoxProxyType = {}))
  },
  151: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = {
      proxy: {
        notControllable: "The proxy settings are controlled by other app(s) or extension(s). Please disable or uninstall the apps or extensions in conflict"
      },
      contentHidden: "Content is hidden during replay"
    }
  },
  153: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.renderLogType = e => {
      switch (e.type) {
        case "reflect":
          return "[info]";
        case "error":
          return e.options && e.options.ignored ? "[error][ignored]" : "[error]";
        default:
          return `[${e.type}]`
      }
    }, t.renderLog = (e, r = !1) => (r ? e.createTime.toISOString() + " - " : "") + t.renderLogType(e) + " " + e.text
  },
  16: function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, "findSameNameMacro", (function() {
      return B
    })), r.d(t, "findSamePathMacro", (function() {
      return X
    })), r.d(t, "findMacrosInFolder", (function() {
      return K
    })), r.d(t, "findSameNameTestSuite", (function() {
      return $
    })), r.d(t, "setRoute", (function() {
      return Y
    })), r.d(t, "startRecording", (function() {
      return G
    })), r.d(t, "stopRecording", (function() {
      return W
    })), r.d(t, "startInspecting", (function() {
      return H
    })), r.d(t, "stopInspecting", (function() {
      return z
    })), r.d(t, "startPlaying", (function() {
      return q
    })), r.d(t, "stopPlaying", (function() {
      return J
    })), r.d(t, "doneInspecting", (function() {
      return Z
    })), r.d(t, "increaseRecordedCount", (function() {
      return Q
    })), r.d(t, "appendCommand", (function() {
      return ee
    })), r.d(t, "duplicateCommand", (function() {
      return te
    })), r.d(t, "insertCommand", (function() {
      return re
    })), r.d(t, "updateCommand", (function() {
      return ne
    })), r.d(t, "removeCommand", (function() {
      return ae
    })), r.d(t, "selectCommand", (function() {
      return oe
    })), r.d(t, "cutCommand", (function() {
      return ie
    })), r.d(t, "copyCommand", (function() {
      return se
    })), r.d(t, "pasteCommand", (function() {
      return ce
    })), r.d(t, "normalizeCommands", (function() {
      return le
    })), r.d(t, "updateSelectedCommand", (function() {
      return ue
    })), r.d(t, "toggleComment", (function() {
      return de
    })), r.d(t, "toggleCommentOnSelectedCommand", (function() {
      return me
    })), r.d(t, "setSourceError", (function() {
      return pe
    })), r.d(t, "setSourceCurrent", (function() {
      return he
    })), r.d(t, "saveSourceCodeToEditing", (function() {
      return fe
    })), r.d(t, "saveEditingAsExisted", (function() {
      return ge
    })), r.d(t, "saveEditingAsNew", (function() {
      return ve
    })), r.d(t, "setTestCases", (function() {
      return ye
    })), r.d(t, "resetEditing", (function() {
      return be
    })), r.d(t, "resetEditingIfNeeded", (function() {
      return we
    })), r.d(t, "setEditing", (function() {
      return Ee
    })), r.d(t, "editTestCase", (function() {
      return xe
    })), r.d(t, "editNewTestCase", (function() {
      return Se
    })), r.d(t, "upsertTestCase", (function() {
      return Ce
    })), r.d(t, "addTestCases", (function() {
      return Te
    })), r.d(t, "removeTestCase", (function() {
      return _e
    })), r.d(t, "removeCurrentTestCase", (function() {
      return Oe
    })), r.d(t, "setPlayerState", (function() {
      return ke
    })), r.d(t, "setTimeoutStatus", (function() {
      return Pe
    })), r.d(t, "addPlayerErrorCommandIndex", (function() {
      return Ie
    })), r.d(t, "addLog", (function() {
      return Me
    })), r.d(t, "clearLogs", (function() {
      return Ae
    })), r.d(t, "addScreenshot", (function() {
      return Re
    })), r.d(t, "clearScreenshots", (function() {
      return De
    })), r.d(t, "addVision", (function() {
      return Ne
    })), r.d(t, "clearVisions", (function() {
      return je
    })), r.d(t, "updateConfig", (function() {
      return Le
    })), r.d(t, "setMacrosExtra", (function() {
      return Fe
    })), r.d(t, "setTestSuitesExtra", (function() {
      return Ve
    })), r.d(t, "updateMacroExtra", (function() {
      return Ue
    })), r.d(t, "updateMacroPlayStatus", (function() {
      return Be
    })), r.d(t, "updateMacroBreakpoints", (function() {
      return Xe
    })), r.d(t, "updateMacroDoneCommandsIndices", (function() {
      return Ke
    })), r.d(t, "updateMacroErrorCommandsIndices", (function() {
      return $e
    })), r.d(t, "updateProxy", (function() {
      return Ye
    })), r.d(t, "commonPlayerState", (function() {
      return Ge
    })), r.d(t, "playerPlay", (function() {
      return We
    })), r.d(t, "listCSV", (function() {
      return He
    })), r.d(t, "listScreenshots", (function() {
      return ze
    })), r.d(t, "listVisions", (function() {
      return qe
    })), r.d(t, "renameVisionImage", (function() {
      return Je
    })), r.d(t, "setTestSuites", (function() {
      return Ze
    })), r.d(t, "addTestSuite", (function() {
      return Qe
    })), r.d(t, "addTestSuites", (function() {
      return et
    })), r.d(t, "removeTestSuite", (function() {
      return tt
    })), r.d(t, "setPlayerMode", (function() {
      return rt
    })), r.d(t, "runBackup", (function() {
      return nt
    })), r.d(t, "setVariables", (function() {
      return at
    })), r.d(t, "updateUI", (function() {
      return ot
    })), r.d(t, "addBreakpoint", (function() {
      return it
    })), r.d(t, "removeBreakpoint", (function() {
      return st
    })), r.d(t, "setEditorActiveTab", (function() {
      return ct
    })), r.d(t, "preinstall", (function() {
      return lt
    }));
    var n = r(15),
      a = r.n(n),
      o = r(19),
      i = r(4),
      s = r(21),
      c = r(36),
      l = r(12),
      u = r(108),
      d = (r(29), r(346)),
      m = r(11),
      p = r.n(m),
      h = r(53),
      f = r(64),
      g = r(26),
      v = r.n(g),
      y = {
        "Core/DemoAutofill": {
          CreationDate: "2020-05-28",
          Commands: [{
            Command: "store",
            Target: "fast",
            Value: "!replayspeed"
          }, {
            Command: "store",
            Target: "15",
            Value: "!TIMEOUT_WAIT"
          }, {
            Command: "store",
            Target: "60",
            Value: "!TIMEOUT_PAGELOAD"
          }, {
            Command: "open",
            Target: "https://docs.google.com/forms/d/1cbI5dMRs0-t_IwNzPm6T3lAG_nPgsnJZEA-FEYVARxg/",
            Value: ""
          }, {
            Command: "click",
            Target: '//span[contains(text(),"UI.Vision IDE")]',
            Value: ""
          }, {
            Command: "click",
            Target: "//*[text()[contains(.,'Web Testing')]]",
            Value: ""
          }, {
            Command: "click",
            Target: '//span[contains(text(),"Form Autofilling")]',
            Value: ""
          }, {
            Command: "click",
            Target: '//*[text()[contains(.,"General Web Automation")]]',
            Value: ""
          }, {
            Command: "pause",
            Target: "500",
            Value: ""
          }, {
            Command: "captureScreenshot",
            Target: "AutoFill1stPage${!LOOP}",
            Value: ""
          }, {
            Command: "clickAndWait",
            Target: 'xpath=//*[@id="mG61Hd"]/div/div/div[3]/div/div/div/span/span',
            Value: "",
            Targets: ['xpath=//*[@id="mG61Hd"]/div/div/div[3]/div/div/div/span/span', 'xpath=//*[@id="mG61Hd"]/div[2]/div/div[3]/div/div/div/span/span']
          }, {
            Command: "type",
            Target: "name=entry.1572386418",
            Value: "This is a single line test..."
          }, {
            Command: "type",
            Target: "name=entry.1569542411",
            Value: "...and this a multiline test:\nLine2\nLine3"
          }, {
            Command: "captureScreenshot",
            Target: "AutoFill2ndPage${!LOOP}",
            Value: ""
          }, {
            Command: "pause",
            Target: "1000",
            Value: ""
          }, {
            Command: "clickAndWait",
            Target: 'xpath=//*[@id="mG61Hd"]/div/div/div[3]/div[1]/div[1]/div[2]/span/span',
            Value: ""
          }, {
            Command: "captureScreenshot",
            Target: "AutoFill3rdPage${!LOOP}",
            Value: ""
          }, {
            Command: "echo",
            Target: "DemoAutofill macro completed (shown as notification because of #shownotification in the 3rd column)",
            Value: "#shownotification"
          }, {
            Command: "comment",
            Target: "Open form filling tutorial page",
            Value: ""
          }, {
            Command: "open",
            Target: "https://ui.vision/rpa/docs/selenium-ide/form-filling",
            Value: ""
          }, {
            Command: "assertTitle",
            Target: "*Form Filling*",
            Value: ""
          }]
        },
        "Core/DemoDragDrop": {
          CreationDate: "2017-10-18",
          Commands: [{
            Command: "open",
            Target: "https://ui.vision/demo/webtest/dragdrop/",
            Value: ""
          }, {
            Command: "echo",
            Target: "Reduce replay speed so we can better see what is going on...",
            Value: ""
          }, {
            Command: "store",
            Target: "medium",
            Value: "!replayspeed"
          }, {
            Command: "dragAndDropToObject",
            Target: "id=one",
            Value: "id=bin"
          }, {
            Command: "dragAndDropToObject",
            Target: "id=two",
            Value: "id=bin"
          }, {
            Command: "dragAndDropToObject",
            Target: "id=three",
            Value: "id=bin"
          }, {
            Command: "dragAndDropToObject",
            Target: "id=four",
            Value: "id=bin"
          }, {
            Command: "dragAndDropToObject",
            Target: "id=five",
            Value: "id=bin"
          }]
        },
        "Core/DemoDownload": {
          CreationDate: "2018-11-23",
          Commands: [{
            Command: "store",
            Target: "60",
            Value: "!timeout_download"
          }, {
            Command: "store",
            Target: "10",
            Value: "!timeout_wait"
          }, {
            Command: "executeScript_Sandbox",
            Target: "var d=new Date(); return d.getFullYear() + '-' +((d.getMonth()+1))+'-' +d.getDate();",
            Value: "todaydate"
          }, {
            Command: "echo",
            Target: "Today is ${todaydate}",
            Value: ""
          }, {
            Command: "open",
            Target: "https://ui.vision/demo/filedownload",
            Value: ""
          }, {
            Command: "onDownload",
            Target: "DownloadTest1_${todaydate}.exe",
            Value: "true"
          }, {
            Command: "store",
            Target: "${!runtime}",
            Value: "starttime"
          }, {
            Command: "click",
            Target: "linkText=XModules for Windows",
            Value: ""
          }, {
            Command: "echo",
            Target: "File name on disk is ${!LAST_DOWNLOADED_FILE_NAME}",
            Value: "blue"
          }, {
            Command: "executeScript_Sandbox",
            Target: "return parseFloat(${!runtime})-parseFloat(${starttime})",
            Value: "downloadtime"
          }, {
            Command: "echo",
            Target: "Download1 (Windows version) took ${downloadtime} seconds",
            Value: "blue"
          }, {
            Command: "onDownload",
            Target: "DownloadTest2_${todaydate}.exe",
            Value: "true"
          }, {
            Command: "store",
            Target: "${!runtime}",
            Value: "starttime"
          }, {
            Command: "click",
            Target: "partialLinkText=for macOS",
            Value: ""
          }, {
            Command: "echo",
            Target: "File name on disk is ${!LAST_DOWNLOADED_FILE_NAME}",
            Value: "green"
          }, {
            Command: "executeScript_Sandbox",
            Target: "return parseFloat(${!runtime})-parseFloat(${starttime})",
            Value: "downloadtime"
          }, {
            Command: "echo",
            Target: "Download2 (Mac) took ${downloadtime} seconds",
            Value: "green"
          }, {
            Command: "echo",
            Target: "All done...",
            Value: ""
          }, {
            Command: "clickAndWait",
            Target: "linkText=OnDownload command",
            Value: ""
          }]
        },
        "Core/DemoExtract": {
          CreationDate: "2018-05-28",
          Commands: [{
            Command: "store",
            Target: "fast",
            Value: "!replayspeed"
          }, {
            Command: "open",
            Target: "https://ui.vision/demo/executescript",
            Value: ""
          }, {
            Command: "echo",
            Target: "Current page URL = ${!URL}",
            Value: ""
          }, {
            Command: "echo",
            Target: "Current loop value = ${!LOOP}",
            Value: ""
          }, {
            Command: "echo",
            Target: "This macro shows various methods to extract and save data from a website",
            Value: ""
          }, {
            Command: "storeAttribute",
            Target: "css=img.responsive-img@src",
            Value: "mylink"
          }, {
            Command: "echo",
            Target: "href=${mylink}",
            Value: ""
          }, {
            Command: "storeAttribute",
            Target: "css=img.responsive-img@alt",
            Value: "myalttext"
          }, {
            Command: "echo",
            Target: "alt text = ${myalttext}",
            Value: ""
          }, {
            Command: "storeAttribute",
            Target: "//input[@id='sometext']@size",
            Value: "boxsize"
          }, {
            Command: "echo",
            Target: "input box size =${boxsize}",
            Value: ""
          }, {
            Command: "type",
            Target: "id=sometext",
            Value: "This box is ${boxsize} chars wide"
          }, {
            Command: "executeScript",
            Target: "document.title = ${boxsize};",
            Value: ""
          }, {
            Command: "assertTitle",
            Target: "70",
            Value: ""
          }, {
            Command: "click",
            Target: '//*[@id="content"]/div[2]/div/h2[3]',
            Value: ""
          }, {
            Command: "storeText",
            Target: '//*[@id="content"]/div[2]/div/h2[3]',
            Value: "myheader"
          }, {
            Command: "echo",
            Target: "header = ${myheader}",
            Value: ""
          }, {
            Command: "storeTitle",
            Target: "",
            Value: "mytitle"
          }, {
            Command: "echo",
            Target: "page title = ${mytitle}",
            Value: ""
          }, {
            Command: "echo",
            Target: "page title = ${mytitle}",
            Value: ""
          }, {
            Command: "echo",
            Target: "page title = ${mytitle}",
            Value: ""
          }, {
            Command: "echo",
            Target: "page title = ${mytitle}",
            Value: ""
          }, {
            Command: "echo",
            Target: "Now test some extraction with storeValue",
            Value: ""
          }, {
            Command: "storeValue",
            Target: "id=sometext",
            Value: "mytext"
          }, {
            Command: "select",
            Target: "id=tesla",
            Value: "label=Model Y"
          }, {
            Command: "storeValue",
            Target: "id=tesla",
            Value: "mytesla"
          }, {
            Command: "echo",
            Target: "The text box contains [${mytext}] and the select box has the value [${mytesla}] selected",
            Value: ""
          }, {
            Command: "verifyValue",
            Target: "id=tesla",
            Value: "y"
          }, {
            Command: "storeChecked",
            Target: "name=vehicle",
            Value: "hasbike"
          }, {
            Command: "storeChecked",
            Target: "xpath=(//input[@name='vehicle'])[2]",
            Value: "hascar"
          }, {
            Command: "storeChecked",
            Target: "xpath=(//input[@name='vehicle'])[3]",
            Value: "hasboat"
          }, {
            Command: "echo",
            Target: "User has bike:${hasbike}, car:${hascar}, boat:${hasboat}",
            Value: "green"
          }, {
            Command: "comment",
            Target: "Search and extract directly from the page SOURCE",
            Value: "y"
          }, {
            Command: "sourceExtract",
            Target: "regex=[\\$\\£\\€](\\d+(?:\\.\\d{1,2})?)",
            Value: "match1"
          }, {
            Command: "sourceExtract",
            Target: "regex=[\\$\\£\\€](\\d+(?:\\.\\d{1,2})?)@2",
            Value: "match2"
          }, {
            Command: "comment",
            Target: "You can also extract without regex with the * symbol",
            Value: "match2b"
          }, {
            Command: "sourceExtract",
            Target: "$*<",
            Value: "match2b"
          }, {
            Command: "echo",
            Target: "Coffee costs ${match1} and tea ${match2}",
            Value: "blue"
          }, {
            Command: "sourceExtract",
            Target: "regex=_width: (\\d+)",
            Value: "match1"
          }, {
            Command: "sourceExtract",
            Target: "regex=_width: (\\d+)@1,1",
            Value: "match1group1"
          }, {
            Command: "sourceExtract",
            Target: "regex=_width: (\\d+)@2",
            Value: "match2"
          }, {
            Command: "sourceExtract",
            Target: "regex=_width: (\\d+)@2,1",
            Value: "match2group1"
          }, {
            Command: "echo",
            Target: "match1 = [${MATCH1}] (group1 = [${match1group1}]) match2 =  [${MATCH2}]  (group1 = [${MATCH2GROUP1}])",
            Value: "blue"
          }, {
            Command: "comment",
            Target: "Extract Google Analytics ID",
            Value: ""
          }, {
            Command: "sourceExtract",
            Target: "UA-*,",
            Value: "ga_option1"
          }, {
            Command: "sourceExtract",
            Target: "regex=UA-[0-9]+-[0-9]+",
            Value: "ga_option2"
          }, {
            Command: "echo",
            Target: "Google Analytics ID = ${ga_option2}",
            Value: "pink"
          }, {
            Command: "comment",
            Target: "Some assertion test for QA",
            Value: ""
          }, {
            Command: "if_v2",
            Target: "${match2group1} != 22",
            Value: ""
          }, {
            Command: "throwError",
            Target: "Regex Extraction failed for Match2(1):  ${match2group1}",
            Value: ""
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }, {
            Command: "echo",
            Target: "Last but not least, taking a screenshot is another way to extract data",
            Value: ""
          }, {
            Command: "captureScreenshot",
            Target: "myscreenshot_${mytitle}",
            Value: ""
          }, {
            Command: "storeImage",
            Target: '//*[@id="page-header"]/div/div/h1',
            Value: "pagetitle.png"
          }, {
            Command: "comment",
            Target: "Export images to download folder",
            Value: ""
          }, {
            Command: "localStorageExport",
            Target: "myscreenshot_${mytitle}.png",
            Value: ""
          }, {
            Command: "localStorageExport",
            Target: "pagetitle.png",
            Value: ""
          }]
        },
        "Core/DemoFrames": {
          CreationDate: "2020-05-27",
          Commands: [{
            Command: "open",
            Target: "https://ui.vision/demo/webtest/frames/",
            Value: ""
          }, {
            Command: "echo",
            Target: "Reduce replay speed so we can better see what is going on...",
            Value: ""
          }, {
            Command: "store",
            Target: "medium",
            Value: "!replayspeed"
          }, {
            Command: "selectFrame",
            Target: "index=0",
            Value: ""
          }, {
            Command: "click",
            Target: "name=mytext1",
            Value: ""
          }, {
            Command: "type",
            Target: "name=mytext1",
            Value: "Frame1 (index=0)"
          }, {
            Command: "selectFrame",
            Target: "relative=top",
            Value: ""
          }, {
            Command: "selectFrame",
            Target: "index=1",
            Value: ""
          }, {
            Command: "click",
            Target: "name=mytext2",
            Value: ""
          }, {
            Command: "type",
            Target: "name=mytext2",
            Value: "Frame2 (index=1)"
          }, {
            Command: "selectFrame",
            Target: "relative=top",
            Value: ""
          }, {
            Command: "selectFrame",
            Target: "index=2",
            Value: ""
          }, {
            Command: "click",
            Target: "name=mytext3",
            Value: ""
          }, {
            Command: "type",
            Target: "name=mytext3",
            Value: "Frame3 (index=2)"
          }, {
            Command: "selectFrame",
            Target: "relative=top",
            Value: ""
          }, {
            Command: "selectFrame",
            Target: "index=3",
            Value: ""
          }, {
            Command: "click",
            Target: "name=mytext4",
            Value: ""
          }, {
            Command: "type",
            Target: "name=mytext4",
            Value: "Frame4 (index=3)"
          }, {
            Command: "selectFrame",
            Target: "relative=top",
            Value: ""
          }, {
            Command: "selectFrame",
            Target: "index=4",
            Value: ""
          }, {
            Command: "click",
            Target: "name=mytext5",
            Value: ""
          }, {
            Command: "type",
            Target: "name=mytext5",
            Value: "Frame5 (index=4)"
          }, {
            Command: "selectFrame",
            Target: "relative=top",
            Value: ""
          }, {
            Command: "selectFrame",
            Target: "index=2",
            Value: ""
          }, {
            Command: "type",
            Target: "name=mytext3",
            Value: "now testing iframe inside this frame"
          }, {
            Command: "selectFrame",
            Target: "index=0",
            Value: ""
          }, {
            Command: "click",
            Target: '//span[contains(text(),"UI.Vision IDE")]',
            Value: ""
          }, {
            Command: "click",
            Target: "css=input.quantumWizTextinputSimpleinputInput.exportInput",
            Value: ""
          }, {
            Command: "type",
            Target: "css=input.quantumWizTextinputSimpleinputInput.exportInput",
            Value: "iframe in frame: works!"
          }, {
            Command: "clickAndWait",
            Target: "xpath=//div[3]/div/div/div/span",
            Value: "",
            Targets: ['xpath=//*[@id="mG61Hd"]/div[2]/div/div[3]/div/div/div/span', "xpath=//div[3]/div/div/div/span"]
          }, {
            Command: "type",
            Target: "name=entry.1572386418",
            Value: "Form Filling Test Done!"
          }, {
            Command: "click",
            Target: 'xpath=//*[@id="mG61Hd"]/div/div/div[3]/div[1]/div[1]/div[2]/span/span',
            Value: ""
          }, {
            Command: "selectFrame",
            Target: "relative=top",
            Value: ""
          }, {
            Command: "selectFrame",
            Target: "index=2",
            Value: ""
          }, {
            Command: "type",
            Target: "name=mytext3",
            Value: "Test completed!"
          }]
        },
        "Core/DemoTakeScreenshots": {
          CreationDate: "2018-1-25",
          Commands: [{
            Command: "open",
            Target: "https://ui.vision/blog/",
            Value: ""
          }, {
            Command: "captureEntirePageScreenshot",
            Target: "rpablog",
            Value: ""
          }, {
            Command: "clickAndWait",
            Target: "linkText=read more@POS=1",
            Value: ""
          }, {
            Command: "captureEntirePageScreenshot",
            Target: "article1",
            Value: ""
          }, {
            Command: "open",
            Target: "https://ui.vision/blog/",
            Value: ""
          }, {
            Command: "clickAndWait",
            Target: "linkText=read more@POS=2",
            Value: ""
          }, {
            Command: "captureEntirePageScreenshot",
            Target: "article2",
            Value: ""
          }, {
            Command: "captureScreenshot",
            Target: "article2_just_viewport",
            Value: ""
          }, {
            Command: "comment",
            Target: "take screenshot of an _element_ with storeImage",
            Value: ""
          }, {
            Command: "storeImage",
            Target: "partialLinkText=Blog",
            Value: "blogtitle"
          }]
        },
        "Core/DemoIfElse": {
          CreationDate: "2018-4-28",
          Commands: [{
            Command: "store",
            Target: "fast",
            Value: "!replayspeed"
          }, {
            Command: "open",
            Target: "https://ui.vision/demo/executeScript",
            Value: ""
          }, {
            Command: "echo",
            Target: "How to use gotoIf and label(s) for flow control. For a while/endWhile demo, see the DemoSaveCSV macro.",
            Value: ""
          }, {
            Command: "executeScript",
            Target: "return (new Date().getHours())",
            Value: "mytime"
          }, {
            Command: "echo",
            Target: "mytime = ${mytime}",
            Value: ""
          }, {
            Command: "if_v2",
            Target: "${mytime}  > 16",
            Value: ""
          }, {
            Command: "echo",
            Target: "Good afternoon!",
            Value: ""
          }, {
            Command: "else",
            Target: "",
            Value: ""
          }, {
            Command: "echo",
            Target: "Good morning!",
            Value: ""
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }, {
            Command: "storeAttribute",
            Target: "//input[@id='sometext-WRONG-ID-TEST']@size",
            Value: "boxsize"
          }, {
            Command: "if_v2",
            Target: '${boxsize} == "#LNF"',
            Value: ""
          }, {
            Command: "echo",
            Target: "The xpath was not found. In this case the variable gets filled with #LNF (Locator Not Found).",
            Value: "blue"
          }, {
            Command: "storeAttribute",
            Target: "//input[@id='sometext']@size",
            Value: "boxsize"
          }, {
            Command: "echo",
            Target: "With correct Xpath ID we get: Boxsize = ${boxsize}",
            Value: "green"
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }, {
            Command: "gotoIf_v2",
            Target: "${boxsize} > 70",
            Value: "BOX-TOO-BIG"
          }, {
            Command: "type",
            Target: "id=sometext",
            Value: "This box is ${boxsize} chars wide"
          }, {
            Command: "executeScript",
            Target: "document.title = ${boxsize};",
            Value: ""
          }, {
            Command: "gotoLabel",
            Target: "END",
            Value: ""
          }, {
            Command: "label",
            Target: "BOX-TOO-BIG",
            Value: ""
          }, {
            Command: "echo",
            Target: "Input box too big. This is just a test of gotoIf",
            Value: ""
          }, {
            Command: "executeScript",
            Target: 'document.title = "Just a gotoIf test. This line should not be reached unless you edit the macro"',
            Value: ""
          }, {
            Command: "label",
            Target: "END",
            Value: ""
          }, {
            Command: "echo",
            Target: "test case completed",
            Value: ""
          }, {
            Command: "comment",
            Target: "",
            Value: ""
          }, {
            Command: "onError",
            Target: "#goto",
            Value: "fixerror"
          }, {
            Command: "type",
            Target: "id=sometext",
            Value: "this line works"
          }, {
            Command: "type",
            Target: "id=sometextXXXXX",
            Value: "this line has the wrong ID..."
          }, {
            Command: "echo",
            Target: "this line is never reached, because of the error above",
            Value: "blue"
          }, {
            Command: "gotoLabel",
            Target: "end-part2",
            Value: ""
          }, {
            Command: "label",
            Target: "fixerror",
            Value: ""
          }, {
            Command: "echo",
            Target: "here we can have code that handles the error..",
            Value: "green"
          }, {
            Command: "type",
            Target: "id=sometext",
            Value: "Fix Error Section: This command works."
          }, {
            Command: "label",
            Target: "end-part2",
            Value: ""
          }]
        },
        "Core/DemoIframe": {
          CreationDate: "2019-1-28",
          Commands: [{
            Command: "open",
            Target: "https://ui.vision/demo/iframes",
            Value: ""
          }, {
            Command: "click",
            Target: '//*[@id="content"]/div[2]/div/p[1]',
            Value: ""
          }, {
            Command: "click",
            Target: '//*[@id="content"]/div[2]/div/h2[1]',
            Value: ""
          }, {
            Command: "comment",
            Target: "First iframe: Embedded Google Doc",
            Value: ""
          }, {
            Command: "selectFrame",
            Target: "index=0",
            Value: ""
          }, {
            Command: "click",
            Target: '//span[contains(text(),"UI.Vision IDE")]',
            Value: ""
          }, {
            Command: "click",
            Target: '//span[contains(text(),"Web Testing")]',
            Value: ""
          }, {
            Command: "click",
            Target: '//span[contains(text(),"Form Autofilling")]',
            Value: ""
          }, {
            Command: "click",
            Target: '//span[contains(text(),"General Web Automation")]',
            Value: ""
          }, {
            Command: "clickAndWait",
            Target: "css=span.quantumWizButtonPaperbuttonLabel.exportLabel",
            Value: ""
          }, {
            Command: "type",
            Target: "name=entry.1572386418",
            Value: "This is the iframe web automation test."
          }, {
            Command: "click",
            Target: 'xpath=//*[@id="mG61Hd"]/div/div/div[3]/div[1]/div[1]/div[2]/span/span',
            Value: ""
          }, {
            Command: "comment",
            Target: "Back to main page (top frame)",
            Value: ""
          }, {
            Command: "selectFrame",
            Target: "relative=top",
            Value: ""
          }]
        },
        "Core/DemoImplicitWaiting": {
          CreationDate: "2019-8-5",
          Commands: [{
            Command: "comment",
            Target: "waitForElementVisible is not part of implicit waiting",
            Value: ""
          }, {
            Command: "open",
            Target: "https://ui.vision/demo/waitforelementvisible",
            Value: ""
          }, {
            Command: "waitForElementVisible",
            Target: "css=#div1 > h1",
            Value: ""
          }, {
            Command: "click",
            Target: "css=#div1 > h1",
            Value: ""
          }, {
            Command: "store",
            Target: "20",
            Value: "!timeout_wait"
          }, {
            Command: "waitForElementVisible",
            Target: "css=#div2 > h1",
            Value: ""
          }, {
            Command: "click",
            Target: "css=#div2 > h1",
            Value: ""
          }, {
            Command: "comment",
            Target: "Implicit waiting: Wait for elements to be loaded  or <timeout_wait> is reached",
            Value: ""
          }, {
            Command: "open",
            Target: "https://ui.vision/demo/webtest/implicitwaiting/",
            Value: ""
          }, {
            Command: "store",
            Target: "15",
            Value: "!TIMEOUT_WAIT"
          }, {
            Command: "assertText",
            Target: "/html/body/header/center/p[2]",
            Value: "Use the select box to start the timer..."
          }, {
            Command: "select",
            Target: "id=minutesSelect",
            Value: "label=5 Seconds"
          }, {
            Command: "echo",
            Target: "The next element (target) is not available yet... UI.Vision RPA waits for it up to ${!TIMEOUT_WAIT} seconds to appear.",
            Value: "blue"
          }, {
            Command: "click",
            Target: "/html/body/header/center/img",
            Value: ""
          }]
        },
        "Core/DemoCsvReadWithLoop": {
          CreationDate: "2019-03-23",
          Commands: [{
            Command: "store",
            Target: "fast",
            Value: "!replayspeed"
          }, {
            Command: "comment",
            Target: "The file ReadCSVTestData.csv is pre-installed with UI.Vision RPA.",
            Value: ""
          }, {
            Command: "csvRead",
            Target: "ReadCSVTestData.csv",
            Value: ""
          }, {
            Command: "comment",
            Target: "Call subroutine for the actual form filling",
            Value: ""
          }, {
            Command: "run",
            Target: "sub/Sub_DemoCsvRead_FillForm",
            Value: ""
          }]
        },
        "Core/DemoCsvReadWithWhile": {
          CreationDate: "2018-1-25",
          Commands: [{
            Command: "store",
            Target: "180",
            Value: "!timeout_macro"
          }, {
            Command: "store",
            Target: "fast",
            Value: "!replayspeed"
          }, {
            Command: "comment",
            Target: "The file ReadCSVTestData.csv is pre-installed with UI.Vision RPA.",
            Value: ""
          }, {
            Command: "csvRead",
            Target: "ReadCSVTestData.csv",
            Value: ""
          }, {
            Command: "echo",
            Target: "Status = ${!csvReadStatus}, line = ${!csvReadLineNumber}",
            Value: ""
          }, {
            Command: "while_v2",
            Target: '${!csvReadStatus} == "OK"',
            Value: ""
          }, {
            Command: "echo",
            Target: "status = ${!csvReadStatus}, line = ${!csvReadLineNumber}",
            Value: ""
          }, {
            Command: "comment",
            Target: "Call subroutine for the actual form filling",
            Value: ""
          }, {
            Command: "run",
            Target: "sub/Sub_DemoCsvRead_FillForm",
            Value: ""
          }, {
            Command: "executeScript_Sandbox",
            Target: "return Number(${!csvReadLineNumber})+1",
            Value: "!csvReadLineNumber"
          }, {
            Command: "store",
            Target: "true",
            Value: "!errorIgnore"
          }, {
            Command: "echo",
            Target: "Reading CSV line No.  ${!csvReadLineNumber} ",
            Value: "!errorIgnore"
          }, {
            Command: "csvRead",
            Target: "ReadCSVTestData.csv",
            Value: ""
          }, {
            Command: "store",
            Target: "false",
            Value: "!errorIgnore"
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }]
        },
        "Core/DemoCsvReadArray": {
          CreationDate: "2020-03-23",
          Commands: [{
            Command: "store",
            Target: "fast",
            Value: "!replayspeed"
          }, {
            Command: "comment",
            Target: "Create an array and save the content to a CSV file",
            Value: ""
          }, {
            Command: "executeScript_Sandbox",
            Target: "var arr = []; for(var x = 0; x < 5; x++){arr[x] = []; for(var y = 0; y < 3; y++){arr[x][y] = (x+1)*(y+1);}}; return arr",
            Value: "array1"
          }, {
            Command: "comment",
            Target: "Manually set two array values ",
            Value: ""
          }, {
            Command: "executeScript_Sandbox",
            Target: "var newArr = ${array1}; newArr[0][2] = 'Hello World'; return newArr",
            Value: "array1"
          }, {
            Command: "executeScript_Sandbox",
            Target: "var newArr = ${array1}; newArr[2][1] = 'This is how you set an array value'; return newArr",
            Value: "array1"
          }, {
            Command: "csvSaveArray",
            Target: "array1",
            Value: "data_from_array.csv"
          }, {
            Command: "comment",
            Target: "Read the array again from csv file",
            Value: ""
          }, {
            Command: "csvReadArray",
            Target: "data_from_array.csv",
            Value: "myCSV"
          }, {
            Command: "echo",
            Target: "Number of rows = ${!CsvReadMaxRow}",
            Value: "green"
          }, {
            Command: "executeScript_Sandbox",
            Target: "return ${mycsv[0]}.length;",
            Value: "col"
          }, {
            Command: "echo",
            Target: "Number of columns = ${col}",
            Value: "pink"
          }, {
            Command: "comment",
            Target: "loop over all CSV values",
            Value: ""
          }, {
            Command: "forEach",
            Target: "myCSV",
            Value: "row"
          }, {
            Command: "echo",
            Target: "col1=${row[0]}, col2=${row[1]}, col3=${row[2]}",
            Value: "brown"
          }, {
            Command: "forEach",
            Target: "row",
            Value: "elem"
          }, {
            Command: "echo",
            Target: "Element=${elem}",
            Value: "blue"
          }, {
            Command: "end",
            Target: "row",
            Value: "elem"
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }, {
            Command: "comment",
            Target: "Another way to loop over the array content",
            Value: ""
          }, {
            Command: "times",
            Target: "${!CsvReadMaxRow}",
            Value: ""
          }, {
            Command: "comment",
            Target: "Substract 1 from !times, as the array index starts with 0",
            Value: ""
          }, {
            Command: "executeScript_Sandbox",
            Target: "return ${!times} - 1;",
            Value: "i"
          }, {
            Command: "echo",
            Target: "Row ${i}, 3rd Element => ${myCSV[${i}][2]}",
            Value: "blue"
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }]
        },
        "Core/DemoCsvSave": {
          CreationDate: "2018-06-01",
          Commands: [{
            Command: "store",
            Target: "fast",
            Value: "!replayspeed"
          }, {
            Command: "open",
            Target: "https://ui.vision/demo/csvsave",
            Value: ""
          }, {
            Command: "executeScript_Sandbox",
            Target: 'var d = new Date(); m = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+ d.getDate()+" "+ d.getHours()+":" + d.getMinutes() + ":" + d.getSeconds(); return m',
            Value: "timestamp"
          }, {
            Command: "store",
            Target: "${timestamp}",
            Value: "!csvLine"
          }, {
            Command: "echo",
            Target: "First column in the CSV is time (${timestamp})",
            Value: ""
          }, {
            Command: "echo",
            Target: "Set i = 1 as we start the extraction with the 2nd table cell.",
            Value: ""
          }, {
            Command: "store",
            Target: "1",
            Value: "i"
          }, {
            Command: "while_v2",
            Target: "(${i} < 8)",
            Value: ""
          }, {
            Command: "executeScript",
            Target: "return Number (${i}) + 1",
            Value: "i"
          }, {
            Command: "echo",
            Target: "Current value of i = ${i}",
            Value: "i"
          }, {
            Command: "storeText",
            Target: '//*[@id="gcw_mainFNGP5XSu6"]/div[2]/table/tbody/tr[2]/td[${i}]/a',
            Value: "c2"
          }, {
            Command: "store",
            Target: "${c2}",
            Value: "!csvLine"
          }, {
            Command: "echo",
            Target: "Extracted Value for i=${i} is exchange rate = ${c2}",
            Value: ""
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }, {
            Command: "echo",
            Target: "${!csvLine}",
            Value: ""
          }, {
            Command: "comment",
            Target: "Append content of !csvLine to CSV file (or create file if none exists)",
            Value: ""
          }, {
            Command: "csvSave",
            Target: "CurrencyConverterData",
            Value: ""
          }, {
            Command: "comment",
            Target: "If needed, you can download (save) the CSV data from the CSV tab to the the download folder",
            Value: ""
          }, {
            Command: "localStorageExport",
            Target: "currencyconverterdata.csv",
            Value: ""
          }]
        },
        "XModules/DemoPDFTest_with_OCR": {
          CreationDate: "2019-01-18",
          Commands: [{
            Command: "store",
            Target: "fast",
            Value: "!replayspeed"
          }, {
            Command: "if_v2",
            Target: '${!browser} =="firefox"',
            Value: ""
          }, {
            Command: "throwError",
            Target: "This macro works only in Chrome and Edge - Firefox does not support automating PDF documents yet.",
            Value: ""
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }, {
            Command: "open",
            Target: "http://download.ui.vision/demo/pdf-test.pdf",
            Value: ""
          }, {
            Command: "setWindowSize",
            Target: "800x700",
            Value: ""
          }, {
            Command: "comment",
            Target: "Check that PDF is loaded OK",
            Value: ""
          }, {
            Command: "comment",
            Target: "Option 1: Check with image search",
            Value: ""
          }, {
            Command: "visualAssert",
            Target: "pdftest_salesquote.png@0.35",
            Value: ""
          }, {
            Command: "comment",
            Target: "Option 2: Check with text search  search",
            Value: ""
          }, {
            Command: "store",
            Target: "ENG",
            Value: "!ocrlanguage"
          }, {
            Command: "OCRSearch",
            Target: "sales quote",
            Value: "matches"
          }, {
            Command: "echo",
            Target: "Number of matches: ${matches}",
            Value: "green"
          }, {
            Command: "if_v2",
            Target: '${matches} == "0"',
            Value: ""
          }, {
            Command: "throwError",
            Target: "Something wrong, I can not find the text <sales quote>",
            Value: ""
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }, {
            Command: "comment",
            Target: "Now extract the quote number and check that it is the correct one",
            Value: ""
          }, {
            Command: "OCRExtractRelative",
            Target: "getquotenumber_dpi_96_relative.png@0.30",
            Value: "q"
          }, {
            Command: "echo",
            Target: "Extracted text in pink area: >${q}<",
            Value: "blue"
          }, {
            Command: "executeScript",
            Target: 'return ${q}.replace(/( |\\n|\\r)/gm, "")',
            Value: "q"
          }, {
            Command: "echo",
            Target: "Remove space(s) and line break(s): Quote Number: >${q}<",
            Value: "green"
          }, {
            Command: "executeScript_Sandbox",
            Target: 'var string = ${q}, substring = "135";  b= string.includes(substring); return b;',
            Value: "textfound"
          }, {
            Command: "if_v2",
            Target: "${textfound} == true",
            Value: ""
          }, {
            Command: "echo",
            Target: "Quote number OK",
            Value: "green"
          }, {
            Command: "else",
            Target: "",
            Value: ""
          }, {
            Command: "throwError",
            Target: "Wrong quote number",
            Value: ""
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }, {
            Command: "comment",
            Target: "The X... commands require the RealUser XModule to be installed",
            Value: ""
          }, {
            Command: "pause",
            Target: "500",
            Value: ""
          }, {
            Command: "comment",
            Target: 'Click on the document to give it the focus. For this, we click on the word "SALES QUOTE".',
            Value: ""
          }, {
            Command: "XClick",
            Target: "ocr=sales quote",
            Value: ""
          }, {
            Command: "comment",
            Target: "Scroll down to next page",
            Value: ""
          }, {
            Command: "if_v2",
            Target: '${!os}=="mac"',
            Value: ""
          }, {
            Command: "comment",
            Target: "Page scroll in macOS is CMD key + Down",
            Value: ""
          }, {
            Command: "XType",
            Target: "${KEY_CMD+KEY_DOWN}",
            Value: ""
          }, {
            Command: "else",
            Target: "",
            Value: ""
          }, {
            Command: "comment",
            Target: "Page scroll in Windows and Linux is PAGE DOWN key",
            Value: ""
          }, {
            Command: "XType",
            Target: "${KEY_PAGE_DOWN}${KEY_PAGE_DOWN}",
            Value: ""
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }, {
            Command: "comment",
            Target: "Find link image and click it",
            Value: ""
          }, {
            Command: "comment",
            Target: "Wait 0.5 seconds for the PDF to complete scrolling. Otherwise if the Xclick image is found while the PDF still scrolls, the click goes to the wrong location.",
            Value: ""
          }, {
            Command: "pause",
            Target: "500",
            Value: ""
          }, {
            Command: "XClick",
            Target: "ocr=website",
            Value: ""
          }, {
            Command: "comment",
            Target: "Check the right page is loaded (here: check logo is there)",
            Value: ""
          }, {
            Command: "assertElementPresent",
            Target: '//*[@id="logo"]/img',
            Value: ""
          }]
        },
        "Core/DemoExecuteScript": {
          CreationDate: "2018-4-28",
          Commands: [{
            Command: "store",
            Target: "fast",
            Value: "!replayspeed"
          }, {
            Command: "open",
            Target: "https://ui.vision/demo/executescript",
            Value: ""
          }, {
            Command: "assertText",
            Target: '//*[@id="content"]/div[2]/div/h2[1]',
            Value: "Input box to display some results"
          }, {
            Command: "verifyText",
            Target: '//*[@id="content"]/div[2]/div/h2[1]',
            Value: "Input box to display some results"
          }, {
            Command: "verifyTitle",
            Target: "Selenium IDE executeScript Demo Page",
            Value: ""
          }, {
            Command: "assertTitle",
            Target: "Selenium IDE executeScript Demo Page",
            Value: ""
          }, {
            Command: "echo",
            Target: "executeScript can run Javascript... and store the result in a variable (optional)",
            Value: ""
          }, {
            Command: "executeScript",
            Target: 'document.title = "123";',
            Value: ""
          }, {
            Command: "assertTitle",
            Target: "123",
            Value: ""
          }, {
            Command: "comment",
            Target: "Use sourceSearch to assert we have the right Google Analytics Code",
            Value: ""
          }, {
            Command: "sourceSearch",
            Target: "UA-86195842-1",
            Value: "matches"
          }, {
            Command: "if_v2",
            Target: "${matches} == 0",
            Value: ""
          }, {
            Command: "throwError",
            Target: "Google Analytics ID is wrong!",
            Value: ""
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }, {
            Command: "echo",
            Target: "First some basic calculations with STORE",
            Value: ""
          }, {
            Command: "store",
            Target: "15",
            Value: "AAA"
          }, {
            Command: "store",
            Target: "10",
            Value: "BBB"
          }, {
            Command: "executeScript_Sandbox",
            Target: "return (Number (${AAA}) - Number (${BBB}) )",
            Value: "CCC"
          }, {
            Command: "echo",
            Target: "${CCC}",
            Value: ""
          }, {
            Command: "executeScript",
            Target: "document.title = ${CCC};",
            Value: ""
          }, {
            Command: "assertTitle",
            Target: "5",
            Value: ""
          }, {
            Command: "store",
            Target: "SELenium IDe",
            Value: "AAA"
          }, {
            Command: "executeScript_Sandbox",
            Target: "return ${AAA}.toUpperCase()",
            Value: "CCC"
          }, {
            Command: "echo",
            Target: "${CCC}",
            Value: ""
          }, {
            Command: "type",
            Target: "id=sometext",
            Value: "${CCC}"
          }, {
            Command: "echo",
            Target: "Generate TODAYs date in in YYYY-MM-DD format ",
            Value: ""
          }, {
            Command: "comment",
            Target: "Create today's date in the YYYY-MM-DD format",
            Value: ""
          }, {
            Command: "executeScript_Sandbox",
            Target: "var d= new Date(); var m=((d.getMonth()+1)<10)?'0'+(d.getMonth()+1):(d.getMonth()+1); var d2= (d.getDate() <10)?'0'+d.getDate():d.getDate();  var date_today = d.getFullYear()+\"-\"+m+\"-\"+d2; return date_today",
            Value: "mydate"
          }, {
            Command: "echo",
            Target: "Today is ${mydate}",
            Value: ""
          }, {
            Command: "echo",
            Target: "Pick a random item from a list, useful for data-driven testing",
            Value: ""
          }, {
            Command: "executeScript_Sandbox",
            Target: "return new Array ('cat','dog','fish','dog','deer','frog','whale','dog','seal','horse','elephant')",
            Value: "names"
          }, {
            Command: "executeScript_Sandbox",
            Target: "return ${names}.length",
            Value: "len"
          }, {
            Command: "echo",
            Target: "array length = ${len}",
            Value: ""
          }, {
            Command: "executeScript_Sandbox",
            Target: "return Math.floor(Math.random()*${len})",
            Value: "num"
          }, {
            Command: "echo",
            Target: "num=${num}",
            Value: ""
          }, {
            Command: "echo",
            Target: "The next command picks the random item",
            Value: ""
          }, {
            Command: "executeScript_Sandbox",
            Target: "return ${names}[${num}]",
            Value: "myrandomname"
          }, {
            Command: "store",
            Target: "Today is ${mydate}, and we draw a ${myrandomname}",
            Value: "output"
          }, {
            Command: "echo",
            Target: "To is ${mydate}, and we draw a ${myrandomname}",
            Value: ""
          }, {
            Command: "type",
            Target: "id=sometext",
            Value: "${output}"
          }, {
            Command: "if_v2",
            Target: "parseFloat(${!runtime}) > 20",
            Value: ""
          }, {
            Command: "throwError",
            Target: "Runtime too slow (${!runtime} seconds), test failed",
            Value: ""
          }, {
            Command: "else",
            Target: "",
            Value: ""
          }, {
            Command: "echo",
            Target: "Runtime Ok, test passed!",
            Value: "green"
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }, {
            Command: "comment",
            Target: "With @POS you click on the (in this case) 3rd link with the same name. Great for looping over a list of links with the same name.",
            Value: "green"
          }, {
            Command: "clickAndWait",
            Target: "linkText=This link@POS=3",
            Value: ""
          }, {
            Command: "comment",
            Target: "Demo: Create array and then loop over it with forEach",
            Value: ""
          }, {
            Command: "executeScript_Sandbox",
            Target: 'var arr = ["Hello","World", "2020"]; return arr;',
            Value: "myarray"
          }, {
            Command: "forEach",
            Target: "myarray",
            Value: "elem"
          }, {
            Command: "echo",
            Target: "${elem}",
            Value: "blue"
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }]
        },
        "Core/DemoTabs": {
          CreationDate: "2017-10-15",
          Commands: [{
            Command: "open",
            Target: "https://ui.vision/demo/tabs",
            Value: ""
          }, {
            Command: "click",
            Target: "linkText=Open new web page in new browser tab",
            Value: ""
          }, {
            Command: "selectWindow",
            Target: "tab=1",
            Value: ""
          }, {
            Command: "assertTitle",
            Target: "*1* TAB1",
            Value: ""
          }, {
            Command: "type",
            Target: "id=sometext1",
            Value: "this is tab 1"
          }, {
            Command: "click",
            Target: "linkText=Open yet another web page in a new browser tab",
            Value: ""
          }, {
            Command: "selectWindow",
            Target: "tab=2",
            Value: ""
          }, {
            Command: "assertTitle",
            Target: "*2* TAB2",
            Value: ""
          }, {
            Command: "type",
            Target: "id=sometext2",
            Value: "And this is tab 2!"
          }, {
            Command: "selectWindow",
            Target: "tab=1",
            Value: ""
          }, {
            Command: "assertTitle",
            Target: "*1* TAB1",
            Value: ""
          }, {
            Command: "type",
            Target: "id=sometext1",
            Value: "Now back in tab 1 - test done!"
          }, {
            Command: "comment",
            Target: "We can also open new tabs",
            Value: ""
          }, {
            Command: "selectWindow",
            Target: "tab=open",
            Value: "https://ui.vision"
          }, {
            Command: "selectWindow",
            Target: "tab=open",
            Value: "https://ocr.space"
          }, {
            Command: "type",
            Target: "id=imageUrl",
            Value: "UI.Vision RPA Tab Test done"
          }]
        },
        "Core/DemoVisualUITest": {
          CreationDate: "2018-6-26",
          Commands: [{
            Command: "open",
            Target: "https://ui.vision/",
            Value: ""
          }, {
            Command: "setWindowSize",
            Target: "1024x768",
            Value: ""
          }, {
            Command: "visualVerify",
            Target: "uitest_logo_wide_dpi_96.png@0.70",
            Value: ""
          }, {
            Command: "visualAssert",
            Target: "uitest_download_dpi_96.png@0.70",
            Value: ""
          }, {
            Command: "visualVerify",
            Target: "uitest_share_dpi_96.png@0.70",
            Value: ""
          }, {
            Command: "comment",
            Target: "Resize to iPhone6 screen size",
            Value: ""
          }, {
            Command: "setWindowSize",
            Target: "375x768",
            Value: ""
          }, {
            Command: "visualVerify",
            Target: "uitest_logo_mobile_dpi_96.png",
            Value: ""
          }, {
            Command: "comment",
            Target: "Missing menu is critical, so we use ASSERT (instead of just VERIFY)",
            Value: ""
          }, {
            Command: "visualAssert",
            Target: "uitest_hamburger_dpi_96.png",
            Value: ""
          }, {
            Command: "comment",
            Target: "Check that Share buttons do not show",
            Value: ""
          }, {
            Command: "comment",
            Target: "At this point, page is surely loaded => reduce wait for (normally missing) image",
            Value: ""
          }, {
            Command: "store",
            Target: "2",
            Value: "!timeout_wait"
          }, {
            Command: "visualSearch",
            Target: "uitest_share_dpi_96.png@0.70",
            Value: "count"
          }, {
            Command: "if_v2",
            Target: "${count} > 0",
            Value: ""
          }, {
            Command: "throwError",
            Target: "Share buttons should NOT show on mobile phones",
            Value: ""
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }, {
            Command: "comment",
            Target: "Restore default wait (not really needed here, since macro stops now anyway)",
            Value: ""
          }, {
            Command: "store",
            Target: "10",
            Value: "!timeout_wait"
          }, {
            Command: "comment",
            Target: "Done, enlarge browser again",
            Value: ""
          }, {
            Command: "setWindowSize",
            Target: "1024x768",
            Value: ""
          }]
        },
        "XModules/DemoXType": {
          CreationDate: "2019-01-28",
          Commands: [{
            Command: "store",
            Target: "medium",
            Value: "!replayspeed"
          }, {
            Command: "comment",
            Target: "Make sure the browser is in the foreground, so it receives the XTYPE keystrokes",
            Value: ""
          }, {
            Command: "bringBrowserToForeground",
            Target: "",
            Value: ""
          }, {
            Command: "open",
            Target: "https://ui.vision/demo/xtype",
            Value: ""
          }, {
            Command: "comment",
            Target: "To save the page, open the browser save dialog with a shortcut",
            Value: ""
          }, {
            Command: "if_v2",
            Target: '${!os}=="mac"',
            Value: ""
          }, {
            Command: "comment",
            Target: "Save web page in macOS is CMD+S",
            Value: ""
          }, {
            Command: "XType",
            Target: "${KEY_CMD+KEY_S}",
            Value: ""
          }, {
            Command: "else",
            Target: "",
            Value: ""
          }, {
            Command: "comment",
            Target: "Save web page in Windows and Linux is CTRL+S",
            Value: ""
          }, {
            Command: "XType",
            Target: "${KEY_CTRL+KEY_S}",
            Value: ""
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }, {
            Command: "comment",
            Target: "Generate today's date and time ",
            Value: ""
          }, {
            Command: "executeScript_Sandbox",
            Target: 'var d= new Date(); var m=((d.getMonth()+1)<10)?\'0\'+(d.getMonth()+1):(d.getMonth()+1); m = d.getFullYear()+"-"+m+"-"+d.getDate(); return m',
            Value: "mydate"
          }, {
            Command: "executeScript_Sandbox",
            Target: 'return new Date().getHours()+"-" + new Date().getMinutes() + "-" + new Date().getSeconds()',
            Value: "mytime"
          }, {
            Command: "echo",
            Target: "Today is ${mydate}, and the time is ${mytime}",
            Value: "blue"
          }, {
            Command: "comment",
            Target: "Wait for the dialog to appear before sending the next keystrokes",
            Value: ""
          }, {
            Command: "pause",
            Target: "2000",
            Value: ""
          }, {
            Command: "comment",
            Target: "Send the new file name to the dialog and press ENTER",
            Value: "blue"
          }, {
            Command: "XType",
            Target: "Page_saved_by_UiVision_${mydate}_${mytime}",
            Value: ""
          }, {
            Command: "XType",
            Target: "${KEY_ENTER}",
            Value: ""
          }]
        },
        "XModules/DemoXRun": {
          CreationDate: "2019-09-16",
          Commands: [{
            Command: "echo",
            Target: "This demo macro uses hard-coded paths for the default calculator app. But the correct path depends on your operating system version and language. So the default path in this macro might be wrong and needs to be adjusted.",
            Value: "blue"
          }, {
            Command: "if_v2",
            Target: '${!os}=="mac"',
            Value: ""
          }, {
            Command: "XRun",
            Target: "/Applications/Calculator.app/Contents/MacOS/Calculator",
            Value: ""
          }, {
            Command: "elseif",
            Target: '${!os}=="linux"',
            Value: ""
          }, {
            Command: "XRun",
            Target: "/snap/bin/gnome-calculator",
            Value: ""
          }, {
            Command: "elseif",
            Target: '${!os}=="windows"',
            Value: ""
          }, {
            Command: "XRun",
            Target: "C:\\Windows\\System32\\calc.exe",
            Value: ""
          }, {
            Command: "comment",
            Target: 'You find the example PowerShell script for this demo in the UI.Vision docs for "XRunAndWait"',
            Value: "-executionpolicy bypass -File  c:\\test\\test1.ps1  c:\\test\\test.txt Hello"
          }, {
            Command: "comment",
            Target: "XRunAndWait // Powershell.exe ",
            Value: "-executionpolicy bypass -File  c:\\test\\test1.ps1  c:\\test\\test.txt Hello"
          }, {
            Command: "comment",
            Target: "echo // Exitcode = ${!xrun_exitcode}  (Note: The exit code is only captured if you use XRunAndWait)",
            Value: ""
          }, {
            Command: "else",
            Target: "",
            Value: ""
          }, {
            Command: "echo",
            Target: "This should never happen",
            Value: ""
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }, {
            Command: "echo",
            Target: "Calculator app launched ",
            Value: ""
          }]
        },
        "XModules/DemoXClick": {
          CreationDate: "2018-10-24",
          Commands: [{
            Command: "store",
            Target: "fast",
            Value: "!replayspeed"
          }, {
            Command: "open",
            Target: "https://ui.vision/demo/draw",
            Value: ""
          }, {
            Command: "clickAndWait",
            Target: "linkText=will click this link",
            Value: ""
          }, {
            Command: "echo",
            Target: "UI.Vision RPA controls the mouse cursor now",
            Value: "#shownotification"
          }, {
            Command: "comment",
            Target: "Use image search to find the drawing applet",
            Value: ""
          }, {
            Command: "XClick",
            Target: "draw_box_dpi_96.png",
            Value: ""
          }, {
            Command: "echo",
            Target: "x=${!imagex} y=${!imagey}",
            Value: "green"
          }, {
            Command: "XClick",
            Target: "${!imagex},${!imagey}",
            Value: ""
          }, {
            Command: "store",
            Target: "${!imagex}",
            Value: "x"
          }, {
            Command: "store",
            Target: "${!imagey}",
            Value: "y"
          }, {
            Command: "comment",
            Target: "Draw top line ---\x3e",
            Value: ""
          }, {
            Command: "XMove",
            Target: "${x},${y}",
            Value: "#down"
          }, {
            Command: "executeScript_Sandbox",
            Target: "return Number (${x}) +50",
            Value: "x"
          }, {
            Command: "XMove",
            Target: "${x},${y}",
            Value: "#move"
          }, {
            Command: "XMove",
            Target: "${x},${y}",
            Value: "#up"
          }, {
            Command: "comment",
            Target: "Draw right line down",
            Value: ""
          }, {
            Command: "XMove",
            Target: "${x},${y}",
            Value: "#down"
          }, {
            Command: "executeScript_Sandbox",
            Target: "return Number (${y}) +50",
            Value: "y"
          }, {
            Command: "XMove",
            Target: "${x},${y}",
            Value: "#move"
          }, {
            Command: "XMove",
            Target: "${x},${y}",
            Value: "#up"
          }, {
            Command: "comment",
            Target: "Draw bottom line <---",
            Value: ""
          }, {
            Command: "XMove",
            Target: "${x},${y}",
            Value: "#down"
          }, {
            Command: "executeScript_Sandbox",
            Target: "return Number (${x}) - 50",
            Value: "x"
          }, {
            Command: "XMove",
            Target: "${x},${y}",
            Value: "#move"
          }, {
            Command: "XMove",
            Target: "${x},${y}",
            Value: "#up"
          }, {
            Command: "comment",
            Target: "Draw left line up",
            Value: ""
          }, {
            Command: "XMove",
            Target: "${x},${y}",
            Value: "#down"
          }, {
            Command: "executeScript_Sandbox",
            Target: "return Number (${y}) - 50",
            Value: "y"
          }, {
            Command: "XMove",
            Target: "${x},${y}",
            Value: "#move"
          }, {
            Command: "XMove",
            Target: "${x},${y}",
            Value: "#up"
          }, {
            Command: "comment",
            Target: "Check that the square was drawn ok",
            Value: ""
          }, {
            Command: "visualVerify",
            Target: "draw_square_dpi_96.png",
            Value: ""
          }, {
            Command: "comment",
            Target: "Now type some text. First click the TEXT icon",
            Value: ""
          }, {
            Command: "XClickRelative",
            Target: "draw_aa_dpi_96_relative.png",
            Value: ""
          }, {
            Command: "comment",
            Target: "Now click the place where the text should start (80px below the square)",
            Value: ""
          }, {
            Command: "executeScript_Sandbox",
            Target: "return Number (${y}) +80",
            Value: "y"
          }, {
            Command: "echo",
            Target: "x=${x}, y=${y}",
            Value: "blue"
          }, {
            Command: "XClick",
            Target: "${x},${y}",
            Value: ""
          }, {
            Command: "comment",
            Target: "Send keystrokes, and demo the use of the BACKSPACE special key.",
            Value: ""
          }, {
            Command: "XType",
            Target: "UI.Vision RPAAA${KEY_BACKSPACE}${KEY_BACKSPACE} Demo",
            Value: ""
          }, {
            Command: "echo",
            Target: "DemoXClick completed",
            Value: "#shownotification"
          }]
        },
        "XModules_Desktop/DemoXDesktopAutomation": {
          CreationDate: "2019-02-13",
          Commands: [{
            Command: "store",
            Target: "fast",
            Value: "!replayspeed"
          }, {
            Command: "echo",
            Target: "Running DESKTOP image search now",
            Value: "#shownotification"
          }, {
            Command: "XDesktopAutomation",
            Target: "true",
            Value: ""
          }, {
            Command: "comment",
            Target: "Limit the search area for better performance",
            Value: ""
          }, {
            Command: "run",
            Target: "sub/Sub_XDesktopAutomation_Area",
            Value: ""
          }, {
            Command: "comment",
            Target: "Log button can be greyed out - try both options",
            Value: ""
          }, {
            Command: "store",
            Target: "true",
            Value: "!errorignore"
          }, {
            Command: "comment",
            Target: "Log button can have white or grey background",
            Value: ""
          }, {
            Command: "XClick",
            Target: "desktop_logstab_white_dpi_96.png@0.5",
            Value: ""
          }, {
            Command: "store",
            Target: "false",
            Value: "!errorignore"
          }, {
            Command: "if_v2",
            Target: "${!statusOK} == false",
            Value: ""
          }, {
            Command: "XClick",
            Target: "desktop_logstab_grey_dpi_96.png@0.5",
            Value: ""
          }, {
            Command: "store",
            Target: "true",
            Value: "!statusOK"
          }, {
            Command: "end",
            Target: "",
            Value: ""
          }, {
            Command: "comment",
            Target: "Press Clear button",
            Value: ""
          }, {
            Command: "XClick",
            Target: "desktop_clearbutton_dpi_96.png@0.5",
            Value: ""
          }, {
            Command: "echo",
            Target: "Log cleared by macro (clear button pressed)",
            Value: "blue"
          }, {
            Command: "comment",
            Target: "Now search and open other tabs",
            Value: ""
          }, {
            Command: "XClick",
            Target: "desktop_vartab_dpi_96.png@0.5",
            Value: ""
          }, {
            Command: "XClick",
            Target: "desktop_scrtab_dpi_96.png@0.4",
            Value: ""
          }, {
            Command: "XClick",
            Target: "desktop_vitab_dpi_96.png@0.4",
            Value: ""
          }, {
            Command: "comment",
            Target: "Check that the correct tab is selected",
            Value: ""
          }, {
            Command: "visualAssert",
            Target: "desktop_checktab_dpi_96.png@0.55",
            Value: ""
          }]
        },
        "XModules_Desktop/DemoXDesktopAutomation_OCR": {
          CreationDate: "2020-05-15",
          Commands: [{
            Command: "store",
            Target: "fast",
            Value: "!replayspeed"
          }, {
            Command: "comment",
            Target: "For more information please see https://ui.vision/x/desktop-automation#ocr",
            Value: ""
          }, {
            Command: "echo",
            Target: "Running DESKTOP image search now",
            Value: "#shownotification"
          }, {
            Command: "XDesktopAutomation",
            Target: "true",
            Value: ""
          }, {
            Command: "comment",
            Target: "Limit the search area for better performance",
            Value: ""
          }, {
            Command: "run",
            Target: "sub/Sub_XDesktopAutomation_Area",
            Value: ""
          }, {
            Command: "store",
            Target: "eng",
            Value: "!OCRlanguage"
          }, {
            Command: "store",
            Target: "1",
            Value: "!OCRengine"
          }, {
            Command: "comment",
            Target: 'Instead of the word "Logs" we look only for (L)"ogs". There is no need for this. It is done to demo and test the substring search.',
            Value: ""
          }, {
            Command: "XClick",
            Target: "ocr=ogs@pos=1",
            Value: ""
          }, {
            Command: "XClick",
            Target: "ocr=Clear@pos=1",
            Value: ""
          }, {
            Command: "echo",
            Target: '"Clear" button pressed by macro. The button was found at ${!OCRX}, ${!OCRY})',
            Value: "blue"
          }, {
            Command: "XClick",
            Target: "ocr=Screenshots@pos=1",
            Value: ""
          }, {
            Command: "comment",
            Target: "Now we use the second OCR Engine. Both work fine here. So this switch is just for test and demo purposes.",
            Value: ""
          }, {
            Command: "store",
            Target: "2",
            Value: "!OCREngine"
          }, {
            Command: "XClick",
            Target: "ocr=Visual@pos=1",
            Value: ""
          }, {
            Command: "comment",
            Target: "Check the right tab is selected",
            Value: ""
          }, {
            Command: "visualAssert",
            Target: "desktop_checktab_dpi_96.png@0.55",
            Value: ""
          }]
        },
        "XModules_Desktop/Sub/Sub_XDesktopAutomation_Area": {
          CreationDate: "2020-03-25",
          Commands: [{
            Command: "comment",
            Target: "SUBROUTINE used by DemoXDesktopAutomation and DemoXDesktopAutomation_OCR",
            Value: ""
          }, {
            Command: "comment",
            Target: "It uses two anchor images to define the new search area",
            Value: ""
          }, {
            Command: "visualAssert",
            Target: "desktop_area_topleft_dpi_96.png@0.6",
            Value: ""
          }, {
            Command: "comment",
            Target: "New limited area top left corner = bottom left corner of first anchor image. We use image x/y and image width/height to calculate this value. For X we use /1.5 instead of /2 in the formular below to make the area a bit wider.",
            Value: ""
          }, {
            Command: "executeScript_Sandbox",
            Target: "return ${!imagex}-${!imagewidth}/1.5",
            Value: "x1"
          }, {
            Command: "executeScript_Sandbox",
            Target: "return ${!imagey}+${!imageheight}/2",
            Value: "y1"
          }, {
            Command: "visualAssert",
            Target: "desktop_area_bottomright_dpi_96.png@0.4",
            Value: ""
          }, {
            Command: "comment",
            Target: "Area bottom right corner = top right corner of found image ",
            Value: ""
          }, {
            Command: "executeScript_Sandbox",
            Target: "return ${!imagex}+${!imagewidth}/2",
            Value: "x2"
          }, {
            Command: "executeScript_Sandbox",
            Target: "return ${!imagey}-${!imageheight}/2",
            Value: "y2"
          }, {
            Command: "echo",
            Target: "x1=${x1}, y1=${y1}, x2=${x2}, y2=${y2}",
            Value: "blue"
          }, {
            Command: "visionLimitSearchArea",
            Target: "area=${x1},${y1},${x2},${y2}",
            Value: ""
          }]
        },
        "Core/Sub/Sub_DemoCsvRead_FillForm": {
          CreationDate: "2019-03-29",
          Commands: [{
            Command: "comment",
            Target: "Subroutine used by DemoCsvReadWithLoop and DemoCsvReadWithWhile",
            Value: ""
          }, {
            Command: "echo",
            Target: "Inside subroutine: Status = ${!csvReadStatus}, Line = ${!csvReadLineNumber}",
            Value: "green"
          }, {
            Command: "open",
            Target: "https://docs.google.com/forms/d/e/1FAIpQLScGWVjexH2FNzJqPACzuzBLlTWMJHgLUHjxehtU-2cJxtu6VQ/viewform",
            Value: ""
          }, {
            Command: "type",
            Target: "name=entry.933434489",
            Value: "${!COL1}_${!csvReadLineNumber}"
          }, {
            Command: "type",
            Target: "name=entry.2004105717",
            Value: "${!COL2}"
          }, {
            Command: "type",
            Target: "name=entry.1382578664",
            Value: "${!COL3}"
          }, {
            Command: "clickAndWait",
            Target: 'xpath=//*[@id="mG61Hd"]/div/div/div[3]/div[1]/div/div/span/span',
            Value: ""
          }]
        }
      },
      b = [{
        creationDate: "2019-05-21",
        name: "Old_Style_Testsuites_(Deprecated)",
        fold: !0,
        macros: [{
          macro: "Demo/Core/DemoAutofill.json",
          loops: 1
        }, {
          macro: "Demo/Core/DemoFrames.json",
          loops: 1
        }]
      }],
      w = r(101),
      E = (r(376), r(377), r(24)),
      x = r(177),
      S = r(43),
      C = r(109),
      T = r(181),
      _ = r(126),
      O = r(28),
      k = r(13),
      P = r(153),
      I = (r(312), r(353)),
      M = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
          var r = [],
            n = !0,
            a = !1,
            o = void 0;
          try {
            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
          } catch (e) {
            a = !0, o = e
          } finally {
            try {
              !n && s.return && s.return()
            } finally {
              if (a) throw o
            }
          }
          return r
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      },
      A = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      };

    function R(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
      }
      return Array.from(e)
    }
    var D, N = 0,
      j = function(e) {
        e.dispatch;
        var t = (0, e.getState)().editor,
          r = t.editing;
        t.isDraggingCommand || c.default.set("editing", r)
      },
      L = function(e) {
        return function(t) {
          t.dispatch;
          var r = (0, t.getState)();
          if (!r.editor.isDraggingCommand) {
            var n = e || Object(E.getCurrentMacroId)(r),
              a = r.editor.macrosExtra[n] || {};
            return Object(w.getMacroExtraKeyValueData)().update(n, (function(e) {
              return A({}, e, a)
            }))
          }
        }
      },
      F = function(e) {
        e.dispatch;
        var t = (0, e.getState)(),
          r = Object(E.getMacrosExtra)(t);
        return Object(w.getMacroExtraKeyValueData)().set("", r)
      },
      V = (D = {}, function(e) {
        e.dispatch;
        var t = (0, e.getState)().config,
          r = ((t = t || {}).size ? t.size[t.showSidebar ? "with_sidebar" : "standard"] : null) || (t.showSidebar ? {
            width: 850,
            height: 775
          } : {
            width: 520,
            height: 775
          });
        r.width === D.width && r.height === D.height || c.default.get("config").then((function(e) {
          (e && e.showSidebar) !== t.showSidebar && (r.width === window.outerWidth && r.height === window.outerHeight || s.default.ask("PANEL_RESIZE_WINDOW", {
            size: r
          }))
        })), c.default.set("config", t), D = r
      }),
      U = function(e) {
        return (e || "").toLowerCase()
      };

    function B(e, t) {
      return t.find((function(t) {
        return U(t.name) === U(e)
      }))
    }

    function X(e, t) {
      var r = function(e) {
        return U(e).replace(/.json$/, "")
      };
      return t.find((function(t) {
        return r(t.relativePath) === r(e)
      }))
    }

    function K(e, t) {
      var r = U(e);
      return t.filter((function(e) {
        var t = U(e.fullPath);
        if (0 !== t.indexOf(r)) return !1;
        var n = t.substr(r.length).split(/\/|\\/g);
        return 2 === n.length && "" === n[0]
      }))
    }

    function $(e, t) {
      return t.find((function(t) {
        return U(t.name) === U(e)
      }))
    }

    function Y(e) {
      return {
        type: o.b.SET_ROUTE,
        data: e
      }
    }

    function G() {
      return N = 0, {
        types: Object(o.a)("START_RECORDING"),
        promise: function() {
          return setTimeout((function() {
            s.default.ask("PANEL_TRY_TO_RECORD_OPEN_COMMAND")
          })), s.default.ask("PANEL_START_RECORDING", {})
        }
      }
    }

    function W() {
      return {
        types: Object(o.a)("STOP_RECORDING"),
        promise: function() {
          return s.default.ask("PANEL_STOP_RECORDING", {})
        }
      }
    }

    function H() {
      return {
        types: Object(o.a)("START_INSPECTING"),
        promise: function() {
          return s.default.ask("PANEL_START_INSPECTING", {})
        }
      }
    }

    function z() {
      return {
        types: Object(o.a)("STOP_INSPECTING"),
        promise: function() {
          return s.default.ask("PANEL_STOP_INSPECTING", {})
        }
      }
    }

    function q() {
      return {
        type: o.b.START_PLAYING,
        data: null
      }
    }

    function J() {
      return {
        type: o.b.STOP_PLAYING,
        data: null
      }
    }

    function Z() {
      return {
        type: o.b.DONE_INSPECTING,
        data: {}
      }
    }

    function Q() {
      N += 1, s.default.ask("PANEL_UPDATE_BADGE", {
        type: "record",
        text: "" + N
      })
    }

    function ee(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return t && Q(), {
        type: o.b.APPEND_COMMAND,
        data: {
          command: Object(u.b)(e)
        },
        post: [j, L()]
      }
    }

    function te(e) {
      return {
        type: o.b.DUPLICATE_COMMAND,
        data: {
          index: e
        },
        post: [j, L()]
      }
    }

    function re(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return r && Q(), {
        type: o.b.INSERT_COMMAND,
        data: {
          index: t,
          command: Object(u.b)(e)
        },
        post: [j, L()]
      }
    }

    function ne(e, t) {
      return {
        type: o.b.UPDATE_COMMAND,
        data: {
          command: Object(u.b)(e),
          index: t
        },
        post: j
      }
    }

    function ae(e) {
      return {
        type: o.b.REMOVE_COMMAND,
        data: {
          index: e
        },
        post: [j, L()]
      }
    }

    function oe(e, t) {
      return {
        type: o.b.SELECT_COMMAND,
        data: {
          index: e,
          forceClick: t
        },
        post: j
      }
    }

    function ie(e) {
      return {
        type: o.b.CUT_COMMAND,
        data: {
          indices: [e]
        },
        post: [j, L()]
      }
    }

    function se(e) {
      return {
        type: o.b.COPY_COMMAND,
        data: {
          indices: [e]
        }
      }
    }

    function ce(e) {
      return {
        type: o.b.PASTE_COMMAND,
        data: {
          index: e
        },
        post: [j, L()]
      }
    }

    function le() {
      return {
        type: o.b.NORMALIZE_COMMANDS,
        data: {},
        post: j
      }
    }

    function ue(e) {
      return {
        type: o.b.UPDATE_SELECTED_COMMAND,
        data: e,
        post: j
      }
    }

    function de(e) {
      return function(t, r) {
        var n = r().editor.editing.commands[e];
        if (n) {
          if ("comment" === n.cmd) {
            var a = n.target.indexOf(" // ");
            if (-1 === a) return;
            var o = n.target.substr(0, a);
            if (!Object(S.isValidCmd)(o)) return;
            var i = n.target.substr(a + " // ".length);
            return t(ne(A({}, n, {
              cmd: o,
              target: i
            }), e))
          }
          return t(ne(A({}, n, {
            cmd: "comment",
            target: n.cmd + " // " + (n.target || "")
          }), e))
        }
      }
    }

    function me() {
      return function(e, t) {
        e(de(t().editor.editing.meta.selectedIndex))
      }
    }

    function pe(e) {
      return {
        type: o.b.SET_SOURCE_ERROR,
        data: e
      }
    }

    function he(e) {
      return {
        type: o.b.SET_SOURCE_CURRENT,
        data: e
      }
    }

    function fe(e) {
      return function(t, r) {
        var n = r().editor,
          o = n.editing;
        if (n.editingSource.pure !== o.current) {
          p()("ACTION, saveSourceCodeToEditing", e);
          try {
            var i = Object(h.fromJSONString)(e, "untitled");
            t(Ee(A({}, i.data, {
              meta: o.meta
            }))), t(pe(null))
          } catch (e) {
            a.a.error("There are errors in the source"), t(pe(e.message))
          }
        }
      }
    }

    function ge() {
      return function(e, t) {
        var r = t(),
          n = r.editor.editing.meta.src.id,
          a = Object(i.pick)(["commands"], r.editor.editing),
          s = Object(l.getStorageManager)().getMacroStorage();
        if (!n) throw new Error("Can't find macro with path '" + n + "'");
        return a.commands = a.commands.map(u.b), Object(E.hasUnsavedMacro)(r) && e(Be(n, null)), s.read(n, "Text").then((function(t) {
          var r = A({}, t, {
            data: a
          });
          return e({
            type: "setCurrentMacro",
            data: r
          }), s.write(n, r)
        })).then((function() {
          e({
            type: o.b.SAVE_EDITING_AS_EXISTED,
            data: null,
            post: j
          })
        }))
      }
    }

    function ve(e) {
      return function(t, r) {
        var n = r(),
          a = Object(i.pick)(["commands"], n.editor.editing);
        if (B(e, n.editor.testCases)) return Promise.reject(new Error("The macro name already exists!"));
        var s = Object(i.uid)(),
          c = "/" + e + ".json",
          u = {
            id: s,
            name: e,
            data: a
          };
        return Object(l.getStorageManager)().getMacroStorage().write(c, u).then((function() {
          return t({
            type: "setCurrentMacro",
            data: u
          }), t({
            type: o.b.SAVE_EDITING_AS_NEW,
            data: {
              id: s,
              name: e
            },
            post: j
          })
        }))
      }
    }

    function ye(e) {
      var t = e.slice();
      return t.sort((function(e, t) {
        var r = e.name.toLowerCase(),
          n = t.name.toLowerCase();
        return r < n ? -1 : r === n ? 0 : 1
      })), {
        type: o.b.SET_TEST_CASES,
        data: t,
        post: function(e) {
          var t = e.dispatch,
            r = (0, e.getState)(),
            n = Object(E.getMacroFileNodeList)(r);
          n.length > 0 && !r.editor.editing.meta.src && 0 === r.editor.editing.commands.length && t(xe(n[0].fullPath))
        }
      }
    }

    function be() {
      return function(e, t) {
        var r = t(),
          n = r.editor.editing,
          a = Object(E.getMacroFileNodeList)(r);
        n.meta && !n.meta.src || (0 === a.length ? e(Se()) : e(xe(a[0].fullPath)))
      }
    }

    function we() {
      return function(e, t) {
        var r = t().editor.editing,
          n = r.meta.src && r.meta.src.id;
        if (!n) return be()(e, t);
        e(xe(n))
      }
    }

    function Ee(e) {
      return {
        type: o.b.SET_EDITING,
        data: e
      }
    }

    function xe(e) {
      return function(t, r) {
        return Object(l.getStorageManager)().getMacroStorage().read(e, "Text").then((function(r) {
          var n = Object(u.c)(r);
          t({
            type: o.b.EDIT_TEST_CASE,
            data: {
              id: e,
              macro: n
            },
            post: j
          }), t({
            type: "setCurrentMacro",
            data: n
          });
          var a = Object(l.getStorageManager)().getCurrentStrategyType(),
            i = function() {
              switch (a) {
                case l.StorageStrategyType.Browser:
                  return I.MiscKey.BrowserModeLastMacroId;
                case l.StorageStrategyType.XFile:
                  return I.MiscKey.XFileModeLastMacroId;
                default:
                  throw new Error("Invalid mode: " + a)
              }
            }();
          return Object(I.getMiscData)().set(i, e), n
        }))
      }
    }

    function Se() {
      return {
        type: o.b.EDIT_NEW_TEST_CASE,
        data: null,
        post: j
      }
    }

    function Ce(e) {
      return function(t, r) {
        return Object(l.getStorageManager)().getMacroStorage().write(e.name, A({
          id: Object(i.uid)()
        }, e))
      }
    }

    function Te(e) {
      var t = e.macros,
        r = e.folder,
        n = void 0 === r ? "/" : r,
        a = e.overwrite,
        o = void 0 !== a && a,
        s = e.storageStrategyType,
        c = void 0 === s ? null : s;
      return function(e, r) {
        var a = Object(l.getStorageManager)().getStorageForTarget(l.StorageTarget.Macro, c || Object(l.getStorageManager)().getCurrentStrategyType()),
          s = r(),
          u = "/" === n ? "" : a.relativePath(n, !0),
          d = Object(E.getMacroFileNodeList)(s).filter((function(e) {
            var t = a.getPathLib().dirname(e.fullPath),
              r = a.relativePath(t, !0);
            return u === r
          })),
          m = [],
          p = [];
        t.forEach((function(e) {
          o || !d.find((function(t) {
            return t.name === e.name
          })) ? p.push(e) : m.push(e)
        }));
        var h = p.length,
          f = t.length - h;
        if (0 === h) return Promise.resolve({
          passCount: h,
          failCount: f,
          failTcs: m
        });
        var g = p.map((function(e) {
          return {
            filePath: O.posix.join(n, e.name + ".json"),
            content: A({}, e, {
              id: Object(i.uid)(),
              udpateTime: 1 * new Date
            })
          }
        }));
        return a.ensureDirectory(n).then((function() {
          return a.bulkWrite(g)
        })).then((function() {
          return {
            passCount: h,
            failCount: f,
            failTcs: m
          }
        }))
      }
    }

    function _e(e) {
      return function(t, r) {
        var n = r(),
          a = n.editor.editing.meta.src.id,
          i = n.editor.testSuites.filter((function(t) {
            return t.cases.find((function(t) {
              return t.testCaseId === e
            }))
          }));
        return i.length > 0 ? Promise.reject(new Error("Can't delete this macro for now, it's currently used in following test suites: " + i.map((function(e) {
          return e.name
        })))) : (t(Be(e, null)), Object(l.getStorageManager)().getMacroStorage().remove(e).then((function() {
          t({
            type: o.b.REMOVE_TEST_CASE,
            data: {
              isCurrent: a === e
            },
            post: j
          })
        })).catch((function(e) {
          return p.a.error(e.stack)
        })))
      }
    }

    function Oe() {
      return function(e, t) {
        return _e(t().editor.editing.meta.src.id)(e, t)
      }
    }

    function ke(e) {
      return {
        type: o.b.SET_PLAYER_STATE,
        data: e
      }
    }

    function Pe(e) {
      return function(t) {
        t(ke({
          timeoutStatus: e
        })), s.default.ask("PANEL_UPDATE_BADGE", {
          type: "play",
          text: (e.total - e.past) / 1e3 + "s"
        })
      }
    }

    function Ie(e) {
      return function(t, r) {
        var n = r(),
          a = Object(E.getCurrentMacroId)(n),
          o = Object(E.getErrorCommandIndices)(n);
        t(Ue(a, {
          errorCommandIndices: -1 === o.indexOf(e) ? [].concat(R(o), [e]) : o
        }))
      }
    }

    function Me(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return function(n, a) {
        var c = a(),
          l = r.noStack ? [] : Object(C.getMacroCallStack)().toArray(),
          u = {
            type: e,
            text: t,
            options: r,
            id: Object(i.uid)(),
            createTime: new Date,
            stack: l.map((function(e, t) {
              return {
                macroId: e.resource.id,
                macroName: e.resource.name,
                commandIndex: t === l.length - 1 ? c.player.nextCommandIndex : e.runningStatus.nextIndex,
                isSubroutine: 0 !== t
              }
            }))
          };
        return "None" !== c.config.logFilter && setTimeout((function() {
          s.default.ask("PANEL_LOG", {
            log: Object(P.renderLog)(u, !0)
          })
        }), 0), n({
          type: o.b.ADD_LOGS,
          data: [u]
        })
      }
    }

    function Ae() {
      return {
        type: o.b.CLEAR_LOGS,
        data: null
      }
    }

    function Re(e) {
      return {
        type: o.b.ADD_SCREENSHOT,
        data: A({}, e, {
          createTime: new Date
        })
      }
    }

    function De() {
      return {
        type: o.b.CLEAR_SCREENSHOTS,
        data: null,
        post: function() {
          return Object(l.getStorageManager)().getScreenshotStorage().clear()
        }
      }
    }

    function Ne(e) {
      return {
        type: o.b.ADD_VISION,
        data: A({}, e, {
          createTime: new Date
        })
      }
    }

    function je() {
      return {
        type: o.b.CLEAR_VISIONS,
        data: null,
        post: function() {
          return Object(l.getStorageManager)().getVisionStorage().clear()
        }
      }
    }

    function Le(e) {
      return {
        type: o.b.UPDATE_CONFIG,
        data: e,
        post: V
      }
    }

    function Fe(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = A({
          shouldPersist: !1
        }, t);
      return {
        type: o.b.SET_MACROS_EXTRA,
        data: e || {},
        post: r.shouldPersist ? F : function() {}
      }
    }

    function Ve(e) {
      return {
        type: o.b.SET_TEST_SUITES_EXTRA,
        data: e || {}
      }
    }

    function Ue(e, t) {
      return {
        type: o.b.UPDATE_ONE_MACRO_EXTRA,
        data: {
          id: e,
          extra: t
        },
        post: L(e)
      }
    }

    function Be(e, t) {
      return function(r, n) {
        r(Ue(e, {
          status: t
        }))
      }
    }

    function Xe(e, t) {
      return function(r, n) {
        r(Ue(e, {
          breakpointIndices: t
        }))
      }
    }

    function Ke(e, t) {
      return function(r, n) {
        r(Ue(e, {
          doneCommandIndices: t
        }))
      }
    }

    function $e(e, t) {
      return function(r, n) {
        r(Ue(e, {
          errorCommandIndices: t
        }))
      }
    }

    function Ye(e) {
      return {
        type: o.b.UPDATE_PROXY,
        data: e
      }
    }

    function Ge(e, t, r, n) {
      var a = e.config,
        o = Object(i.pick)(["playHighlightElements", "playScrollElementsIntoView"], a),
        s = function() {
          if (n) return n;
          if (!r) return e.editor.editing.meta.src ? e.editor.editing.meta.src.name : "Untitled";
          var t = Object(E.getMacroFileNodeList)(e).find((function(e) {
            return e.fullPath === r
          }));
          if (!t) throw new Error("can't find macro with id '" + r + "'");
          return t.name
        }(),
        c = A({
          "!MACRONAME": s,
          "!TIMEOUT_PAGELOAD": parseFloat(a.timeoutPageLoad),
          "!TIMEOUT_WAIT": parseFloat(a.timeoutElement),
          "!TIMEOUT_MACRO": parseFloat(a.timeoutMacro),
          "!TIMEOUT_DOWNLOAD": parseFloat(a.timeoutDownload),
          "!OCRLANGUAGE": a.ocrLanguage,
          "!CVSCOPE": a.cvScope,
          "!REPLAYSPEED": {
            0: "FAST",
            .3: "MEDIUM",
            2: "SLOW"
          } [t.postDelay / 1e3] || "MEDIUM"
        }, t.overrideScope || {}),
        l = r ? Object(E.getBreakpointsByMacroId)(e, r) : Object(E.getBreakpoints)(e),
        u = Object(i.compose)(Object(i.on)("resources"), i.map, Object(i.on)("extra"))((function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return A({}, e, o, t.commandExtra || {})
        }))(t);
      return A({
        title: s
      }, u, {
        public: A({}, u.public || {}, {
          scope: c
        }),
        breakpoints: [].concat(R(l), R(t.breakpoints || []))
      })
    }

    function We(e) {
      var t = A({}, e, {
        resources: (e.resources || []).filter((function(e) {
          return e.cmd && e.cmd.length > 0
        }))
      });
      return function(e, r) {
        return Object(_.default)().saveOrNot({
          getContent: function(e) {
            return "You must save macro before replay"
          },
          okText: "Save",
          cancelText: "Cancel",
          autoSaveExisting: !0
        }).then((function(e) {
          if (e) {
            var n = Ge(r(), t, t.macroId, t.title);
            return Object(C.getMacroCallStack)().clear(), Object(C.getMacroCallStack)().call({
              id: t.macroId,
              name: n.title,
              commands: t.resources
            }, {
              playerState: n,
              status: T.MacroStatus.Running,
              nextIndex: t.startIndex,
              commandResults: []
            })
          }
        }))
      }
    }

    function He() {
      return function(e, t) {
        Object(l.getStorageManager)().getCSVStorage().list().then((function(e) {
          return Promise.all(e.map((function(e) {
            return {
              name: e.name,
              size: e.size,
              fullPath: e.fullPath,
              createTime: new Date(e.lastModified)
            }
          })))
        })).then((function(t) {
          e({
            type: o.b.SET_CSV_LIST,
            data: t
          })
        })).catch((function(e) {
          return p.a.error("listCSV error", e), Promise.reject(e)
        }))
      }
    }

    function ze() {
      return function(e, t) {
        return Object(l.getStorageManager)().getScreenshotStorage().list().then((function(e) {
          return p()("listScreenshots", e), e.map((function(e) {
            return {
              name: e.name,
              fullPath: e.fullPath,
              createTime: new Date(e.lastModified)
            }
          }))
        })).then((function(t) {
          e({
            type: o.b.SET_SCREENSHOT_LIST,
            data: t
          })
        })).catch((function(e) {
          return p.a.error("listScreenshots error", e), Promise.reject(e)
        }))
      }
    }

    function qe() {
      return function(e, t) {
        return Object(l.getStorageManager)().getVisionStorage().list().then((function(e) {
          return p()("listVisions", e), e.map((function(e) {
            return {
              name: e.name,
              fullPath: e.fullPath,
              createTime: new Date(e.lastModified)
            }
          }))
        })).then((function(t) {
          e({
            type: o.b.SET_VISION_LIST,
            data: t
          })
        })).catch((function(e) {
          return p.a.error("listVisions error", e), Promise.reject(e)
        }))
      }
    }

    function Je(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return function(r, n) {
        return Object(i.withFileExtension)(e, (function(t, n) {
          return Object(x.prompt)({
            title: "Image Name",
            message: "Note: Please keep the '_dpi_xx' postfix",
            value: t,
            selectionEnd: function() {
              var e = t.match(/_dpi_\d+/i);
              if (e) return e.index
            }(),
            onOk: function(r) {
              var o = Object(i.delay)((function() {
                return !0
              }), 100);
              if (r === t) return o;
              try {
                Object(i.validateStandardName)(r, !0)
              } catch (e) {
                throw a.a.error(e.message), e
              }
              return Object(l.getStorageManager)().getVisionStorage().exists(n(r)).then((function(t) {
                if (t) {
                  var i = "'" + n(r) + "' already exists";
                  throw a.a.error(i), new Error(i)
                }
                return Object(l.getStorageManager)().getVisionStorage().rename(e, n(r)).then((function() {
                  return o
                })).catch((function(e) {
                  throw a.a.error(e.message), e
                }))
              }))
            }
          }).then((function(e) {
            return e || Object(l.getStorageManager)().getVisionStorage().remove(n(t)).then((function() {
              return r(qe())
            })).then((function() {
              return "__kantu_deleted__"
            }))
          }))
        })).then((function(e) {
          if (!/__kantu_deleted__/.test(e)) return t && r(ue({
            target: e
          })), r(qe()), a.a.success("Saved vision as " + e), e
        }))
      }
    }

    function Ze(e) {
      return {
        type: o.b.SET_TEST_SUITES,
        data: e
      }
    }

    function Qe(e) {
      return function(t, r) {
        var n = r();
        return !!Object(E.getTestSuitesWithAllInfo)(n).find((function(t) {
          return e.name === t.name
        })) ? Promise.reject(new Error("The test suite name '" + e.name + "' already exists!")) : Object(l.getStorageManager)().getTestSuiteStorage().write(e.name, A({}, e, {
          id: Object(i.uid)(),
          updateTime: 1 * new Date
        }))
      }
    }

    function et(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return function(r, n) {
        var a = n(),
          o = Object(E.getTestSuitesWithAllInfo)(a),
          s = e.filter((function(e) {
            return !o.find((function(t) {
              return t.name === e.name
            }))
          })),
          c = s.length,
          u = e.length - c;
        if (0 === c) return Promise.resolve({
          passCount: c,
          failCount: u,
          failTss: []
        });
        var d = Object(l.getStorageManager)().getStorageForTarget(l.StorageTarget.TestSuite, t || Object(l.getStorageManager)().getCurrentStrategyType()),
          m = s.map((function(e) {
            return {
              filePath: e.name,
              content: A({}, e, {
                id: Object(i.uid)(),
                updateTime: 1 * new Date
              })
            }
          }));
        return d.ensureDir().then((function() {
          return d.bulkWrite(m)
        })).then((function() {
          return {
            passCount: c,
            failCount: u,
            failTss: []
          }
        }))
      }
    }

    function tt(e) {
      return function(t, r) {
        var n = r().editor.testSuites.find((function(t) {
          return t.id === e
        }));
        if (!n) throw new Error("can't find test suite with id '" + e + "'");
        return t({
          type: o.b.UPDATE_TEST_SUITE_STATUS,
          data: {
            id: e,
            extra: {
              fold: !1,
              playStatus: {}
            }
          }
        }), Object(l.getStorageManager)().getTestSuiteStorage().remove(n.name)
      }
    }

    function rt(e) {
      return {
        type: o.b.SET_PLAYER_STATE,
        data: {
          mode: e
        }
      }
    }

    function nt() {
      return function(e, t) {
        var r = t(),
          n = r.config,
          a = r.editor,
          o = n.autoBackupTestCases,
          i = n.autoBackupTestSuites,
          s = n.autoBackupScreenshots,
          c = n.autoBackupCSVFiles,
          u = n.autoBackupVisionImages,
          m = Object(l.getStorageManager)();
        return Promise.all([m.getCSVStorage().list(), m.getScreenshotStorage().list(), m.getVisionStorage().list()]).then((function(e) {
          var t = M(e, 3),
            n = t[0],
            l = t[1],
            m = t[2];
          return Object(d.backup)({
            csvs: n,
            screenshots: l,
            visions: m,
            macroNodes: Object(E.getMacroFileNodeList)(r),
            testSuites: a.testSuites,
            backup: {
              testCase: o,
              testSuite: i,
              screenshot: s,
              csv: c,
              vision: u
            }
          })
        })).catch((function(e) {
          p.a.error(e.stack)
        }))
      }
    }

    function at(e) {
      return e.sort((function(e, t) {
        return e.key < t.key ? -1 : e.key > t.key ? 1 : 0
      })), {
        type: o.b.SET_VARIABLE_LIST,
        data: e
      }
    }

    function ot(e) {
      return {
        type: o.b.UPDATE_UI,
        data: e
      }
    }

    function it(e, t) {
      return function(r, n) {
        var a = (n().editor.macrosExtra[e] || {}).breakpointIndices || [],
          o = -1 === a.indexOf(t) ? [].concat(R(a), [t]) : a;
        r(Xe(e, o))
      }
    }

    function st(e, t) {
      return function(r, n) {
        var a = ((n().editor.macrosExtra[e] || {}).breakpointIndices || []).filter((function(e) {
          return e !== t
        }));
        r(Xe(e, a))
      }
    }

    function ct(e) {
      return {
        type: o.b.SET_EDITOR_ACTIVE_TAB,
        data: e
      }
    }

    function lt() {
      var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return function(t, r) {
        var n = function() {
          return c.default.get("preinstall_info").then((function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = e.askedVersions || [],
              r = v.a.preinstall.version,
              n = -1 !== t.indexOf(r);
            return !!n || c.default.set("preinstall_info", A({}, e, {
              askedVersions: [].concat(R(t), [r])
            }))
          }))
        };
        if (!e) return n();
        p()("PREINSTALL_CSV_LIST", ["preinstall/csv/readcsvtestdata.csv"]), p()("PREINSTALL_VISION_LIST", ["preinstall/vision/canvas_3dots_verify_dpi_96.png", "preinstall/vision/canvas_hydepark_dpi_96.png", "preinstall/vision/canvas_hydepark_extract_dpi_96_relative.png", "preinstall/vision/canvas_hydepark_verify_dpi_96.png", "preinstall/vision/canvas_wyoming_dpi_96.png", "preinstall/vision/canvas_wyoming_verify_dpi_96.png", "preinstall/vision/democv_checkoverlay.png", "preinstall/vision/democv_ocrdone.png", "preinstall/vision/democv_share.png", "preinstall/vision/democv_startocr.png", "preinstall/vision/desktop_area_bottomright_dpi_96.png", "preinstall/vision/desktop_area_topleft_dpi_96.png", "preinstall/vision/desktop_checktab_dpi_96.png", "preinstall/vision/desktop_clearbutton_dpi_96.png", "preinstall/vision/desktop_logstab_grey_dpi_96.png", "preinstall/vision/desktop_logstab_white_dpi_96.png", "preinstall/vision/desktop_scrtab_dpi_96.png", "preinstall/vision/desktop_searcharea_dpi_96_relative.png", "preinstall/vision/desktop_vartab_dpi_96.png", "preinstall/vision/desktop_vitab_dpi_96.png", "preinstall/vision/draw_aa_dpi_96_relative.png", "preinstall/vision/draw_box_dpi_96.png", "preinstall/vision/draw_square_dpi_96.png", "preinstall/vision/getquotenumber_dpi_96_relative.png", "preinstall/vision/pdftest_salesquote.png", "preinstall/vision/uitest_download_dpi_96.png", "preinstall/vision/uitest_hamburger_dpi_96.png", "preinstall/vision/uitest_logo_mobile_dpi_96.png", "preinstall/vision/uitest_logo_wide_dpi_96.png", "preinstall/vision/uitest_share_dpi_96.png", "preinstall/vision/youtube_play_button.png", "preinstall/vision/youtube_video_content_verify.png"]);
        return Promise.all([function() {
          if (!y || !Object.keys(y).length) return Promise.resolve();
          return Object(k.flow)((function() {
            var e = Object(l.getStorageManager)().getMacroStorage(),
              t = e.getPathLib(),
              r = Object.keys(y).map((function(e) {
                return t.join(v.a.preinstall.macroFolder, t.dirname(e))
              })),
              n = k.uniqueStrings.apply(void 0, R(r));
            return k.flow.apply(void 0, R(n.map((function(t) {
              return function() {
                return e.ensureDirectory(t)
              }
            })))).then((function() {
              return Promise.all(Object.keys(y).map((function(r) {
                var n = t.basename(r),
                  a = e.filePath(t.join(v.a.preinstall.macroFolder, r)),
                  o = JSON.stringify(y[r]),
                  i = Object(h.fromJSONString)(o, n);
                return e.write(a, i)
              })))
            }))
          }), (function() {
            var e = b.map((function(e) {
              return Object(f.parseTestSuite)(JSON.stringify(e))
            }));
            t(et(e, l.StorageStrategyType.Browser))
          }))
        }(), function() {
          var e = ["preinstall/csv/readcsvtestdata.csv"];
          if (0 === e.length) return Promise.resolve();
          var r = Object(l.getStorageManager)().getStorageForTarget(l.StorageTarget.CSV, l.StorageStrategyType.Browser);
          return r.ensureDir().then((function() {
            var n = e.map((function(e) {
              var t = e.split("/"),
                n = t[t.length - 1];
              return Object(i.loadCsv)(e).then((function(e) {
                return r.write(n, new Blob([e]))
              }))
            }));
            return Promise.resolve(n).then((function() {
              return Object(i.delay)((function() {}), 3e3)
            })).then((function() {
              t(He())
            }))
          }))
        }(), function() {
          var e = ["preinstall/vision/canvas_3dots_verify_dpi_96.png", "preinstall/vision/canvas_hydepark_dpi_96.png", "preinstall/vision/canvas_hydepark_extract_dpi_96_relative.png", "preinstall/vision/canvas_hydepark_verify_dpi_96.png", "preinstall/vision/canvas_wyoming_dpi_96.png", "preinstall/vision/canvas_wyoming_verify_dpi_96.png", "preinstall/vision/democv_checkoverlay.png", "preinstall/vision/democv_ocrdone.png", "preinstall/vision/democv_share.png", "preinstall/vision/democv_startocr.png", "preinstall/vision/desktop_area_bottomright_dpi_96.png", "preinstall/vision/desktop_area_topleft_dpi_96.png", "preinstall/vision/desktop_checktab_dpi_96.png", "preinstall/vision/desktop_clearbutton_dpi_96.png", "preinstall/vision/desktop_logstab_grey_dpi_96.png", "preinstall/vision/desktop_logstab_white_dpi_96.png", "preinstall/vision/desktop_scrtab_dpi_96.png", "preinstall/vision/desktop_searcharea_dpi_96_relative.png", "preinstall/vision/desktop_vartab_dpi_96.png", "preinstall/vision/desktop_vitab_dpi_96.png", "preinstall/vision/draw_aa_dpi_96_relative.png", "preinstall/vision/draw_box_dpi_96.png", "preinstall/vision/draw_square_dpi_96.png", "preinstall/vision/getquotenumber_dpi_96_relative.png", "preinstall/vision/pdftest_salesquote.png", "preinstall/vision/uitest_download_dpi_96.png", "preinstall/vision/uitest_hamburger_dpi_96.png", "preinstall/vision/uitest_logo_mobile_dpi_96.png", "preinstall/vision/uitest_logo_wide_dpi_96.png", "preinstall/vision/uitest_share_dpi_96.png", "preinstall/vision/youtube_play_button.png", "preinstall/vision/youtube_video_content_verify.png"];
          if (0 === e.length) return Promise.resolve();
          var r = Object(l.getStorageManager)().getStorageForTarget(l.StorageTarget.Vision, l.StorageStrategyType.Browser);
          return r.ensureDir().then((function() {
            var n = e.map((function(e) {
              var t = e.split("/"),
                n = t[t.length - 1];
              return Object(i.loadImage)(e).then((function(e) {
                return r.write(n, e)
              }))
            }));
            return Promise.resolve(n).then((function() {
              return Object(i.delay)((function() {}), 3e3)
            })).then((function() {
              t(qe())
            }))
          }))
        }()]).then(n)
      }
    }
  },
  171: function(e, t) {
    var r = function() {
      this.dataByFormat = {}, this.dropEffect = "none", this.effectAllowed = "all", this.files = [], this.types = []
    };
    r.prototype.clearData = function(e) {
      var t, r, n;
      e ? (delete this.dataByFormat[e], t = this.types, r = e, (n = t.indexOf(r)) >= 0 && t.splice(n, 1)) : (this.dataByFormat = {}, this.types = [])
    }, r.prototype.getData = function(e) {
      return this.dataByFormat[e]
    }, r.prototype.setData = function(e, t) {
      return this.dataByFormat[e] = t, this.types.indexOf(e) < 0 && this.types.push(e), !0
    }, r.prototype.setDragImage = function() {}, e.exports = function() {
      if (window.DataTransfer) try {
        new window.DataTransfer;
        return window.DataTransfer
      } catch (e) {}
      return r
    }()
  },
  172: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(174);
    t.BaseProxyManager = class {
      constructor() {
        this.proxy = null, this.registry = n.createListenerRegistry()
      }
      getProxy() {
        return Promise.resolve(this.proxy)
      }
      getAuth(e, t) {
        return this.proxy && this.proxy.username && this.proxy.host === e && this.proxy.port === "" + t ? {
          username: this.proxy.username,
          password: this.proxy.password
        } : null
      }
      onChange(e) {
        return this.registry.add("change", e), () => {
          this.registry.remove("change", e)
        }
      }
    }
  },
  174: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    class n {
      constructor({
        process: e,
        onZero: t,
        onOne: r
      }) {
        this.cache = {}, this.process = e, this.onZero = t || (() => {}), this.onOne = r || (() => {})
      }
      add(e, t) {
        if (this.cache[e] = this.cache[e] || [], this.cache[e].push(t), 1 === this.cache[e].length) try {
          this.onOne(e)
        } catch (e) {
          console.error("in onOne, " + e.message)
        }
        return !0
      }
      remove(e, t) {
        if (!this.cache[e]) return !1;
        if (this.cache[e] = this.cache[e].filter(e => e !== t), 0 === this.cache[e].length) try {
          this.onZero(e)
        } catch (e) {
          console.error("in onZero, " + e.message)
        }
        return !0
      }
      removeAllWithData(e) {
        Object.keys(this.cache).forEach(t => {
          for (let r = this.cache[t].length - 1; r >= 0; r--) this.cache[t][r] === e && this.remove(t, this.cache[t][r])
        })
      }
      fire(e, t) {
        return !!this.cache[e] && (this.cache[e].forEach(r => {
          try {
            this.process(r, t, e)
          } catch (e) {
            console.error("in process, " + e.message)
          }
        }), !0)
      }
      has(e) {
        return this.cache[e] && this.cache[e].length > 0
      }
      keys() {
        return Object.keys(this.cache).filter(e => this.cache[e] && this.cache[e].length > 0)
      }
      destroy() {
        Object.keys(this.cache).forEach(e => {
          try {
            this.onZero(e)
          } catch (e) {
            console.error("in onZero, " + e.message)
          }
        }), this.cache = {}
      }
    }
    t.Registry = n, t.createListenerRegistry = function() {
      return new n({
        process: (e, t, r) => {
          e(t)
        }
      })
    }
  },
  175: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      function(e) {
        e.MigrateMacroTestSuiteToBrowserFileSystem = "20190401_macro_test_suite_to_browser_fs"
      }(t.MigrationJobType || (t.MigrationJobType = {})),
      function(e) {
        e[e.AlreadyMigrated = 0] = "AlreadyMigrated", e[e.NotQualified = 1] = "NotQualified", e[e.Success = 2] = "Success", e[e.Error = 3] = "Error", e[e.JobUnknown = 4] = "JobUnknown"
      }(t.MigrationResult || (t.MigrationResult = {}))
  },
  177: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(0)),
      o = n(r(17)),
      i = n(r(1)),
      s = r(112);
    class c extends a.default.Component {
      constructor() {
        super(...arguments), this.state = {
          value: "",
          visible: !0
        }, this.onOk = () => this.props.onOk(this.state.value).then(() => this.hide()), this.onCancel = () => this.props.onCancel().then(() => this.hide())
      }
      componentDidMount() {
        this.setState({
          value: this.props.value
        }), setTimeout(() => this.focus(), 100)
      }
      componentWillReceiveProps(e) {
        e.value !== this.props.value && (this.setState({
          value: e.value
        }), setTimeout(() => this.focus(), 100))
      }
      focus() {
        const e = this.input;
        if (e && e.refs && e.refs.input) {
          const t = e.refs.input;
          t.focus(), "text" === this.props.inputType && (t.selectionStart = void 0 !== this.props.selectionStart ? this.props.selectionStart : 0, t.selectionEnd = void 0 !== this.props.selectionEnd ? this.props.selectionEnd : t.value.length)
        }
      }
      hide() {
        this.setState({
          visible: !1
        })
      }
      render() {
        return a.default.createElement(s.Modal, {
          ref: e => {
            this.modal = e
          },
          visible: this.state.visible,
          align: "left",
          title: this.props.title,
          width: this.props.width,
          closable: this.props.closable,
          maskClosable: this.props.closable,
          okText: this.props.okText,
          cancelText: this.props.cancelText,
          onOk: this.onOk,
          onCancel: this.onCancel
        }, this.props.message && this.props.message.length ? a.default.createElement("pre", {
          style: {
            fontFamily: "inherit",
            marginBottom: "10px",
            whiteSpace: "pre-wrap"
          }
        }, this.props.message) : null, this.props.noInput ? null : a.default.createElement(s.Input, {
          defaultValue: "",
          ref: e => this.input = e,
          type: this.props.inputType,
          autosize: !1,
          placeholder: this.props.placeholder,
          value: this.state.value,
          onChange: e => this.setState({
            value: e.target.value
          }),
          onKeyDown: e => {
            13 === e.keyCode && this.onOk()
          }
        }))
      }
    }
    t.Prompt = c, c.propTypes = {
      onOk: i.default.func.isRequired,
      onCancel: i.default.func.isRequired,
      title: i.default.string,
      width: i.default.number,
      message: i.default.string,
      value: i.default.string,
      noInput: i.default.bool,
      inputType: i.default.string,
      selectionStart: i.default.number,
      selectionEnd: i.default.number,
      placeholder: i.default.string,
      okText: i.default.string,
      cancelText: i.default.string
    }, c.defaultProps = {
      width: 350,
      title: "Please input",
      message: "",
      value: "",
      placeholder: "",
      selectionStart: 0,
      selectionEnd: 0,
      noInput: !1,
      closable: !0,
      inputType: "text",
      okText: "Confirm",
      cancelText: "Cancel"
    }, t.prompt = function(e) {
      return new Promise((t, r) => {
        const n = Object.assign(Object.assign({}, e), {
            onOk: n => new Promise(t => {
              t(!e.onOk || e.onOk(n))
            }).then(() => (t(n), l(), Promise.resolve(!0)), e => (r(e), !0)),
            onCancel: () => new Promise(t => {
              t(!e.onCancel || e.onCancel())
            }).then(() => (t(null), l(), Promise.resolve(!0)), e => (r(e), !0))
          }),
          i = document.createElement("div"),
          s = document.createElement("div"),
          l = () => setTimeout(() => {
            i.remove()
          }, 1e3);
        document.body.appendChild(i), i.appendChild(s), o.default.render(a.default.createElement(c, Object.assign({}, n)), s)
      })
    }
  },
  178: function(e, t, r) {
    "use strict";
    r.d(t, "b", (function() {
      return p
    })), r.d(t, "a", (function() {
      return h
    }));
    var n = r(183),
      a = r.n(n),
      o = r(96),
      i = r.n(o),
      s = (r(10), r(36)),
      c = new RegExp("^@_KANTU_@"),
      l = new RegExp("^__KANTU_ENCRYPTED__"),
      u = function() {
        return s.default.get("config").then((function(e) {
          return {
            shouldEncrypt: "master_password" === e.shouldEncryptPassword,
            masterPassword: e.masterPassword
          }
        }))
      },
      d = function(e) {
        return u().then((function(t) {
          var r = t.shouldEncrypt,
            n = t.masterPassword;
          return r ? "__KANTU_ENCRYPTED__" + function(e, t) {
            var r = a.a.pbkdf2Sync(t, "salt", 1, 32, "sha512"),
              n = new i.a.ModeOfOperation.ctr(r);
            return i.a.utils.hex.fromBytes(n.encrypt(i.a.utils.utf8.toBytes(e)))
          }("@_KANTU_@" + e, n) : e
        }))
      },
      m = function(e) {
        return u().then((function(t) {
          var r = t.shouldEncrypt,
            n = t.masterPassword;
          if (!r) return e;
          var o = function(e, t) {
            var r = a.a.pbkdf2Sync(t, "salt", 1, 32, "sha512"),
              n = new i.a.ModeOfOperation.ctr(r);
            return i.a.utils.utf8.fromBytes(n.decrypt(i.a.utils.hex.toBytes(e)))
          }(e.replace(l, ""), n);
          if (0 !== o.indexOf("@_KANTU_@")) throw new Error("Wrong master password");
          return o.replace(c, "")
        })).catch((function(e) {
          throw new Error("password string invalid")
        }))
      },
      p = function(e, t) {
        return t && "INPUT" === t.tagName.toUpperCase() && "password" === t.type ? d(e) : Promise.resolve(e)
      },
      h = function(e, t) {
        return 0 === e.indexOf("__KANTU_ENCRYPTED__") && t && "INPUT" === t.tagName.toUpperCase() && "password" === t.type ? m(e) : Promise.resolve(e)
      }
  },
  18: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = e => e.reduce((e, t) => (e[t] = t, e), {});
    t.APP_STATUS = n(["NORMAL", "INSPECTOR", "RECORDER", "PLAYER"]), t.INSPECTOR_STATUS = n(["PENDING", "INSPECTING", "STOPPED"]), t.RECORDER_STATUS = n(["PENDING", "RECORDING", "STOPPED"]), t.PLAYER_STATUS = n(["PLAYING", "PAUSED", "STOPPED"]), t.PLAYER_MODE = n(["TEST_CASE", "TEST_SUITE"]), t.CONTENT_SCRIPT_STATUS = n(["NORMAL", "RECORDING", "INSPECTING", "PLAYING"]), t.TEST_CASE_STATUS = n(["NORMAL", "SUCCESS", "ERROR", "ERROR_IN_SUB"]), t.LAST_SCREENSHOT_FILE_NAME = "__lastscreenshot", t.LAST_DESKTOP_SCREENSHOT_FILE_NAME = "__last_desktop_screenshot", t.UNTITLED_ID = "__untitled__"
  },
  181: function(e, t, r) {
    "use strict";
    var n;
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      function(e) {
        e[e.Pending = 0] = "Pending", e[e.Success = 1] = "Success", e[e.Failure = 2] = "Failure"
      }(n = t.CommandRunningStatus || (t.CommandRunningStatus = {})),
      function(e) {
        e[e.Idle = 0] = "Idle", e[e.Running = 1] = "Running", e[e.Calling = 2] = "Calling", e[e.Finished = 3] = "Finished", e[e.Error = 4] = "Error"
      }(t.MacroStatus || (t.MacroStatus = {})), t.getCommandResults = function(e) {
        const {
          doneIndices: t,
          errorIndices: r,
          count: a
        } = e, o = [];
        for (let e = 0; e < a; e++) - 1 !== t.indexOf(e) ? o.push(n.Success) : -1 !== r.indexOf(e) ? o.push(n.Failure) : o.push(n.Pending);
        return o
      }, t.getDoneErrorIndices = function(e) {
        const t = [],
          r = [];
        return e.forEach((e, a) => {
          switch (e) {
            case n.Failure:
              return r.push(a);
            case n.Success:
              return t.push(a)
          }
        }), {
          doneIndices: t,
          errorIndices: r,
          count: e.length
        }
      }
  },
  184: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(0)),
      o = r(112),
      i = r(65);
    t.ResourceNotLoaded = function(e) {
      return a.default.createElement("div", {
        className: "list-not-loaded"
      }, a.default.createElement("p", null, "Started by ", i.stringForRunBy(e.from), "."), a.default.createElement("p", null, e.name, " not loaded."), a.default.createElement(o.Button, {
        type: "primary",
        onClick: e.showList
      }, "Load now"))
    }
  },
  19: function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
      return o
    })), r.d(t, "b", (function() {
      return s
    }));
    var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      a = function(e) {
        return [e + "_REQUEST", e + "_SUCCESS", e + "_FAIL"]
      },
      o = function(e) {
        return a(e).map((function(e) {
          return s[e]
        }))
      },
      i = ["START_RECORDING", "STOP_RECORDING", "START_INSPECTING", "STOP_INSPECTING"].reduce((function(e, t) {
        return a(t).forEach((function(t) {
          e[t] = t
        })), e
      }), {}),
      s = n({}, ["SET_ROUTE", "SET_EDITOR_ACTIVE_TAB", "DONE_INSPECTING", "UPDATE_BASE_URL", "APPEND_COMMAND", "DUPLICATE_COMMAND", "INSERT_COMMAND", "UPDATE_COMMAND", "REMOVE_COMMAND", "SELECT_COMMAND", "CUT_COMMAND", "COPY_COMMAND", "PASTE_COMMAND", "NORMALIZE_COMMANDS", "UPDATE_SELECTED_COMMAND", "SAVE_EDITING_AS_EXISTED", "SAVE_EDITING_AS_NEW", "SET_TEST_CASES", "SET_EDITING", "EDIT_TEST_CASE", "EDIT_NEW_TEST_CASE", "ADD_TEST_CASES", "RENAME_TEST_CASE", "REMOVE_TEST_CASE", "UPDATE_TEST_SUITE_STATUS", "UPDATE_ONE_MACRO_EXTRA", "SET_ONE_MACRO_EXTRA", "SET_MACROS_EXTRA", "SET_TEST_SUITES_EXTRA", "SET_PLAYER_STATE", "SET_PLAYER_MODE", "SET_TEST_SUITES", "UPDATE_TEST_SUITE", "ADD_LOGS", "CLEAR_LOGS", "ADD_SCREENSHOT", "CLEAR_SCREENSHOTS", "ADD_VISION", "CLEAR_VISIONS", "START_PLAYING", "STOP_PLAYING", "SET_CSV_LIST", "SET_SCREENSHOT_LIST", "SET_VISION_LIST", "SET_VARIABLE_LIST", "SET_SOURCE_ERROR", "SET_SOURCE_CURRENT", "UPDATE_CONFIG", "UPDATE_UI", "UPDATE_PROXY"].reduce((function(e, t) {
        return e[t] = t, e
      }), {}), i)
  },
  21: function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(93),
      a = function() {
        throw new Error("You are not a top window, not allowed to initialize/use csIpc")
      },
      o = window.top === window ? Object(n.csInit)() : {
        ask: a,
        send: a,
        onAsk: a,
        destroy: a
      };
    t.default = o
  },
  22: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(4);

    function a(e) {
      return new Promise((t, r) => {
        const n = new Image;
        n.onload = () => {
          t({
            $img: n,
            width: n.width,
            height: n.height
          })
        }, n.onerror = e => {
          r(e)
        }, n.src = e
      })
    }

    function o(e) {
      return "data:image/svg+xml;base64," + window.btoa(e)
    }

    function i(e) {
      return new Promise((t, r) => {
        const n = document.createElement("canvas"),
          a = n.getContext("2d"),
          i = document.createElement("img"),
          s = o(e),
          c = e.match(/<svg[\s\S]*?width="(.*?)"/m),
          l = e.match(/<svg[\s\S]*?height="(.*?)"/m),
          u = parseInt(c[1], 10),
          d = parseInt(l[1], 10);
        i.src = s, i.onload = function() {
          n.width = u, n.height = d, a.drawImage(i, 0, 0, u, d), t(n)
        }, i.onerror = function(e) {
          r(e)
        }
      })
    }
    t.getStyle = function(e) {
      if (!e) throw new Error("getStyle: dom does not exist");
      return getComputedStyle(e)
    }, t.setStyle = function(e, t) {
      if (!e) throw new Error("setStyle: dom does not exist");
      for (var r = 0, n = Object.keys(t), a = n.length; r < a; r++) e.style[n[r]] = t[n[r]];
      return e
    }, t.pixel = function(e) {
      return -1 !== (e + "").indexOf("px") ? e : (e || 0) + "px"
    }, t.bindDrag = e => {
      const {
        onDragStart: t,
        onDragEnd: r,
        onDrag: n,
        $el: a,
        preventGlobalClick: o = !0,
        doc: i = document
      } = e;
      let s = !1,
        c = {
          x: 0,
          y: 0
        };
      const l = e => {
          s = !0, c = {
            x: e.screenX,
            y: e.screenY
          }, t(e)
        },
        u = e => {
          if (!s) return;
          s = !1;
          const t = e.screenX - c.x,
            n = e.screenY - c.y;
          r(e, {
            dx: t,
            dy: n
          })
        },
        d = e => {
          if (!s) return;
          const t = e.screenX - c.x,
            r = e.screenY - c.y;
          n(e, {
            dx: t,
            dy: r
          }), e.preventDefault(), e.stopPropagation()
        },
        m = e => {
          e.preventDefault(), e.stopPropagation()
        };
      return o && i.addEventListener("click", m, !0), i.addEventListener("mousemove", d, !0), i.addEventListener("mouseup", u, !0), a.addEventListener("mousedown", l, !0), () => {
        i.removeEventListener("click", m, !0), i.removeEventListener("mousemove", d, !0), i.removeEventListener("mouseup", u, !0), a.removeEventListener("mousedown", l, !0)
      }
    }, t.bindContentEditableChange = e => {
      const {
        onChange: t,
        doc: r = document
      } = e;
      let n = null,
        a = null;
      const o = e => {
          e.target && "true" === e.target.contentEditable && (n = e.target, a = n.innerHTML)
        },
        i = e => {
          e.target !== n || n && n.innerHTML !== a && t(e), n = null, a = null
        };
      return r.addEventListener("focus", o, !0), r.addEventListener("blur", i, !0), () => {
        r.removeEventListener("focus", o, !0), r.removeEventListener("blur", i, !0)
      }
    }, t.scrollLeft = function(e) {
      return e.documentElement.scrollLeft
    }, t.scrollTop = function(e) {
      return e.documentElement.scrollTop
    }, t.domText = e => {
      const t = e.innerText && e.innerText.trim(),
        r = e.textContent,
        n = r.toUpperCase().indexOf(t.toUpperCase());
      return -1 === n ? t : r.substr(n, t.length)
    }, t.isVisible = function(e) {
      if (e === window.document) return !0;
      if (!e) return !0;
      const r = window.getComputedStyle(e);
      return "none" !== r.display && "0" !== r.opacity && "hidden" !== r.visibility && t.isVisible(e.parentNode)
    }, t.cssSelector = function(e) {
      if (!e) return "";
      if (1 !== e.nodeType) return "";
      if ("BODY" === e.tagName) return "body";
      if (e.id) return "#" + e.id;
      var r = e.className.split(/\s+/g).filter((function(e) {
          return e && e.length
        })),
        a = Array.from(e.parentNode ? e.parentNode.childNodes : []).filter((function(e) {
          return 1 === e.nodeType
        })),
        o = a.filter((function(t) {
          return t.tagName === e.tagName
        })),
        i = a.filter((function(e) {
          var t = e.className.split(/\s+/g);
          return n.and(...r.map((function(e) {
            return -1 !== t.indexOf(e)
          })))
        })),
        s = "";
      s = 1 === o.length ? "" : r.length && 1 === i.length ? "." + r.join(".") : ":nth-child(" + (1 + a.findIndex((function(t) {
        return t === e
      }))) + ")";
      var c = e.tagName.toLowerCase() + s;
      return t.cssSelector(e.parentNode) + " > " + c
    }, t.isPositionFixed = e => !(!e || e === document.documentElement || e === document.body) && ("fixed" === getComputedStyle(e).position || t.isPositionFixed(e.parentNode)), t.offset = function(e) {
      if (!e) return {
        left: 0,
        top: 0
      };
      var t = e.getBoundingClientRect();
      return {
        left: t.left + window.scrollX,
        top: t.top + window.scrollY
      }
    }, t.accurateOffset = function e(t) {
      if (!t) return {
        left: 0,
        top: 0
      };
      const r = t.ownerDocument;
      if (!r || t === r.documentElement) return {
        left: 0,
        top: 0
      };
      const n = e(t.offsetParent);
      return {
        left: n.left + t.offsetLeft,
        top: n.top + t.offsetTop
      }
    }, t.preloadImage = a, t.isFirefox = function() {
      return /Firefox/.test(window.navigator.userAgent)
    }, t.svgNodetoString = function(e) {
      return e.outerHTML
    }, t.svgToBase64 = o, t.canvasFromSVG = i, t.imageBlobFromSVG = function(e, t = "image/png", r) {
      return i(e).then(e => new Promise((n, a) => {
        try {
          e.toBlob(n, t, r)
        } catch (e) {
          a(e)
        }
      }))
    }, t.imageDataFromUrl = function(e) {
      return a(e).then(({
        $img: e,
        width: t,
        height: r
      }) => {
        const n = document.createElement("canvas");
        n.width = t, n.height = r;
        const a = n.getContext("2d");
        return a.drawImage(e, 0, 0, t, r), a.getImageData(0, 0, t, r)
      })
    }, t.subImage = function(e, t) {
      return new Promise((r, n) => {
        const a = new Image;
        a.onload = () => {
          const e = document.createElement("canvas");
          e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(a, 0, 0, a.width, a.height, -1 * t.x, -1 * t.y, a.width, a.height), r(e.toDataURL())
        }, a.src = e
      })
    }, t.scaleRect = function(e, t) {
      return {
        x: t * e.x,
        y: t * e.y,
        width: t * e.width,
        height: t * e.height
      }
    }, t.isEditable = function(e) {
      if ("true" === e.contentEditable) return !0;
      const t = (e.tagName || "").toLowerCase();
      if (-1 === ["input", "textarea"].indexOf(t)) return !1;
      const r = e.disabled,
        n = e.readOnly;
      return !r && !n
    }
  },
  24: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(690),
      a = r(18),
      o = r(101),
      i = r(127),
      s = r(13),
      c = r(65);

    function l(e, r, n, a = !1) {
      const o = a ? t.getMacroFolderNodeList(e) : t.getMacroFileNodeList(e),
        i = e => e.toLowerCase().replace(/\\/g, "/").replace(/\.json$/i, ""),
        s = i(n);
      return o.find(e => a === e.isDirectory && (i(e.fullPath) === s || i(e[r]) === s))
    }

    function u(e, t, r) {
      return s.treeMap((e, n) => ({
        id: e.fullPath,
        type: e.isFile ? i.FileNodeType.File : i.FileNodeType.Folder,
        level: n.length,
        selected: !1,
        name: e.name,
        entryPath: e.fullPath,
        folded: r(e),
        className: t(e)
      }), e)
    }
    t.getTestSuitesWithAllInfo = n.createSelector([e => e.editor.testSuites, e => e.editor.testSuitesExtra], (e, t) => e.map(e => {
      const r = (e => e.id)(e),
        n = t[r || ""];
      return Object.assign(Object.assign({}, e), n || {})
    })), t.getCurrentMacroId = n.createSelector([e => e.editor.editing.meta.src], e => e ? e.id : a.UNTITLED_ID), t.getBreakpoints = n.createSelector([e => e.editor.macrosExtra, t.getCurrentMacroId], (e, t) => (e[t] || {}).breakpointIndices || []), t.getBreakpointsByMacroId = function(e, t) {
      return (e.editor.macrosExtra[t] || {}).breakpointIndices || []
    }, t.getDoneCommandIndices = n.createSelector([e => e.editor.macrosExtra, t.getCurrentMacroId], (e, t) => (e[t] || {}).doneCommandIndices || []), t.getErrorCommandIndices = n.createSelector([e => e.editor.macrosExtra, t.getCurrentMacroId], (e, t) => (e[t] || {}).errorCommandIndices || []), t.isFocusOnCommandTable = n.createSelector([e => e], e => e.ui.focusArea === c.FocusArea.CommandTable), t.isFocusOnSidebar = n.createSelector([e => e], e => e.ui.focusArea === c.FocusArea.Sidebar), t.getConfig = n.createSelector([e => e.config], s.id), t.getShouldSaveAlternativeLocators = n.createSelector([t.getConfig], e => !!e.saveAlternativeLocators), t.hasUnsavedMacro = function(e) {
      const {
        editor: t
      } = e, {
        editing: r,
        editingSource: n,
        activeTab: a
      } = t;
      if (!r.meta.src) return !0;
      switch (a) {
        case "table_view": {
          const {
            hasUnsaved: e
          } = r.meta || {};
          return e
        }
        case "source_view":
          return n.original !== n.current;
        default:
          throw new Error("Unknown activeTab")
      }
    }, t.findMacroNodeWithCaseInsensitiveField = l, t.findMacroNodeWithCaseInsensitiveFullPath = function(e, t) {
      return l(e, "fullPath", t)
    }, t.findMacroNodeWithCaseInsensitiveRelativePath = function(e, t) {
      return l(e, "relativePath", t)
    }, t.findMacroFolderWithCaseInsensitiveRelativePath = function(e, t) {
      return l(e, "relativePath", t, !0)
    }, t.editorSelectedCommand = function(e) {
      const {
        meta: t,
        commands: r
      } = e.editor.editing;
      return t && -1 !== t.selectedIndex && r[t.selectedIndex] || null
    }, t.editorSelectedCommandIndex = function(e) {
      const {
        meta: t
      } = e.editor.editing;
      return t ? t.selectedIndex : null
    }, t.editorCommandCount = function(e) {
      const {
        commands: t
      } = e.editor.editing;
      return t.length
    }, t.entryNodeToFileNodeData = u, t.getEditor = e => e.editor, t.getMacroFolderStructure = n.createSelector([t.getEditor], e => e.macroFolderStructure), t.getMacrosExtra = n.createSelector([t.getEditor], e => e.macrosExtra), t.getMacroFileNodeData = n.createSelector([t.getMacroFolderStructure, t.getMacrosExtra, t.getCurrentMacroId, t.isFocusOnSidebar], (e, t, r, n) => {
      const a = e => {
          const a = [],
            i = e.fullPath,
            s = t[i] && t[i].status;
          return a.push((() => {
            switch (s) {
              case o.MacroResultStatus.Success:
                return "success";
              case o.MacroResultStatus.Error:
                return "error";
              case o.MacroResultStatus.ErrorInSub:
                return "error-in-sub";
              default:
                return "normal"
            }
          })()), r === i && a.push("selected"), n || a.push("blur"), a.join(" ")
        },
        i = e => {
          const r = e.fullPath;
          return t[r] && t[r].folded || !1
        };
      return e.map(e => u(e, a, i))
    }), t.getFilteredMacroFileNodeData = n.createSelector([t.getMacroFileNodeData, e => e.macroQuery], (e, t) => {
      const r = t.trim().toLowerCase();
      return 0 === r.length ? e : e.map(e => {
        const t = s.treeFilter(e => -1 !== e.name.toLowerCase().indexOf(r), e);
        return t ? s.treeMap(e => Object.assign(Object.assign({}, e), {
          folded: !1
        }), t) : null
      }).filter(e => e)
    }), t.getMacroFileNodeList = n.createSelector([t.getMacroFolderStructure], e => s.flatten(e.map(e => {
      const t = [];
      return s.traverseTree(e => (e.isFile && t.push(e), s.TraverseTreeResult.Normal), e), t
    }))), t.getMacroFolderNodeList = n.createSelector([t.getMacroFolderStructure], e => s.flatten(e.map(e => {
      const t = [];
      return s.traverseTree(e => (e.isDirectory && t.push(e), s.TraverseTreeResult.Normal), e), t
    }))), t.isMacroFolderNodeListEmpty = n.createSelector([t.getMacroFolderNodeList], e => 0 === e.length), t.getIndexToInsertRecorded = n.createSelector([e => e.editor.editing.meta.indexToInsertRecorded], s.id), t.getStatus = n.createSelector([e => e.status], s.id), t.getShouldLoadResources = n.createSelector([e => e.from], e => e === c.RunBy.Manual), t.isPlaying = n.createSelector([t.getStatus, s.id], (e, t) => e === a.APP_STATUS.PLAYER && t.player.status === a.PLAYER_STATUS.PLAYING)
  },
  26: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    n(r(10)).default.isFirefox();
    t.default = {
      preinstall: {
        version: "5.5.4",
        macroFolder: "/Demo"
      },
      urlAfterUpgrade: "https://ui.vision/x/idehelp?help=k_update",
      urlAfterInstall: "https://ui.vision/x/idehelp?help=k_welcome",
      urlAfterUninstall: "https://ui.vision/x/idehelp?help=k_why",
      performanceLimit: {
        fileCount: 1 / 0
      },
      xmodulesLimit: {
        unregistered: {
          ocrCommandCount: 100,
          xCommandCount: 25,
          xFileMacroCount: 10,
          proxyExecCount: 5,
          upgradeUrl: "https://ui.vision/x/idehelp?help=k_xupgrade"
        },
        free: {
          ocrCommandCount: 250,
          xCommandCount: 1 / 0,
          xFileMacroCount: 20,
          proxyExecCount: 10,
          upgradeUrl: "https://ui.vision/x/idehelp?help=k_xupgradepro"
        },
        pro: {
          ocrCommandCount: 500,
          xCommandCount: 1 / 0,
          xFileMacroCount: 1 / 0,
          proxyExecCount: 1 / 0,
          upgradeUrl: "https://ui.vision/x/idehelp?help=k_xupgrade_contactsupport"
        }
      },
      xfile: {
        minVersionToReadBigFile: "1.0.10"
      },
      ocr: {
        apiList: [{
          id: "1",
          key: "kantu_only_53b8",
          url: "https://apipro1.ocr.space/parse/image"
        }, {
          id: "2",
          key: "kantu_only_53b8",
          url: "https://apipro2.ocr.space/parse/image"
        }, {
          id: "3",
          key: "kantu_only_53b8",
          url: "https://apipro3.ocr.space/parse/image"
        }],
        apiTimeout: 6e4,
        singleApiTimeout: 3e4,
        apiHealthyResponseTime: 2e4,
        resetTime: 864e5
      },
      icons: {
        normal: "logo38.png",
        inverted: "inverted_logo_38.png"
      },
      forceMigrationRemedy: !1,
      iframePostMessageTimeout: 500,
      ui: {
        commandItemHeight: 35
      },
      commandRunner: {
        sendKeysMaxCharCount: 1e3
      }
    }
  },
  28: function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(54);
    r.d(t, "win32", (function() {
      return n.win32
    })), r.d(t, "posix", (function() {
      return n.posix
    }));
    var a = /windows/i.test(window.navigator.userAgent) ? n.win32 : n.posix;
    t.default = a
  },
  29: function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
      return p
    })), r.d(t, "b", (function() {
      return f
    }));
    var n = r(592),
      a = r.n(n),
      o = r(4),
      i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      s = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }();
    var c = {
        STRAIGHT: "STRAIGHT",
        SINGLE: "SINGLE",
        LOOP: "LOOP"
      },
      l = {
        PLAYING: "PLAYING",
        PAUSED: "PAUSED",
        STOPPED: "STOPPED",
        ERROR: "ERROR"
      },
      u = {
        COMPLETE: "COMPLETE",
        ERROR: "ERROR",
        MANUAL: "MANUAL"
      },
      d = function(e) {
        return null == e
      },
      m = {
        startUrl: null,
        startIndex: null,
        endIndex: null,
        nextIndex: null,
        errorIndex: null,
        doneIndices: [],
        mode: c.STRAIGHT,
        resources: [],
        status: l.STOPPED
      },
      p = function() {
        function e(t, r) {
          if (function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.state = i({}, m), this.toResumePromises = {}, !t) throw new Error("Player - constructor: must provide opts as 1st argument");
          if ("function" != typeof t.run) throw new Error("Player - constructor: must provide a run function");
          if ("function" != typeof t.prepare) throw new Error("Player - constructor: must provide a prepare function");
          if ("function" != typeof t.handleResult) throw new Error("Player - constructor: must provide a handleResult function");
          this.__run = t.run, this.__prepare = t.prepare, this.__handle = t.handleResult, this.__setState(r || {})
        }
        return s(e, [{
          key: "play",
          value: function(e) {
            var t = this;
            if (!e) throw new Error("Player - play: config should not be empty");
            if (!e.mode || -1 === Object.keys(c).indexOf(e.mode)) throw new Error("Player - play: must provide a valid mode, now it is " + e.mode);
            if (e.mode === c.LOOP && (!e.loopsStart || e.loopsStart < 0 || Math.floor(e.loopsStart) !== e.loopsStart || !e.loopsEnd || e.loopsEnd < e.loopsStart || Math.floor(e.loopsEnd) !== e.loopsEnd)) throw new Error('Player - play: must provide a valid tuple of "loopsStart" and "loopsEnd" in loop mode, now it is ' + e.loopsStart + ", " + e.loopsEnd);
            if (0 !== e.resources.length && (d(e.startIndex) || e.startIndex < 0 || e.startIndex >= e.resources.length)) throw new Error("Player - play: startIndex out of range, now it is " + e.startIndex + ", len: " + e.resources.length);
            if (!d(e.endIndex) && (e.endIndex < 0 || e.endIndex >= e.resources.length)) throw new Error("Player - play: endIndex out of range, now it is " + e.endIndex + ", len: " + e.resources.length);
            var r = e.nextIndex,
              n = e.startIndex,
              a = e.startUrl,
              o = e.resources,
              s = e.title,
              u = e.extra,
              m = e.doneIndices,
              p = e.noEndEvent,
              h = e.token,
              f = e.isStep,
              g = e.loopsCursor,
              v = e.loopsStart,
              y = e.loopsEnd,
              b = e.isBackFromCalling,
              w = e.needDelayAfterLoop,
              E = e.endIndex || o.length - 1,
              x = {
                token: h,
                title: s,
                extra: u,
                needDelayAfterLoop: w,
                isBackFromCalling: b,
                startUrl: a,
                startIndex: n,
                endIndex: E,
                nextIndex: void 0 !== r ? r : n,
                errorIndex: null,
                doneIndices: m || [],
                mode: e.mode,
                loopsCursor: 1,
                loopsStart: 1,
                loopsEnd: 1,
                isStep: f || !1,
                noEndEvent: p || !1,
                resources: e.resources,
                breakpoints: e.breakpoints || [],
                status: l.PLAYING,
                public: e.public || {},
                callback: e.callback || function() {},
                lastPlayConfig: e,
                playUID: Math.random()
              };
            switch (["preDelay", "postDelay"].forEach((function(t) {
              d(e[t]) || (x[t] = e[t])
            })), e.mode) {
              case c.STRAIGHT:
                this.__setState(i({}, x));
                break;
              case c.SINGLE:
                this.__setState(i({}, x, {
                  endIndex: n
                }));
                break;
              case c.LOOP:
                this.__setState(i({}, x, {
                  loopsStart: v,
                  loopsEnd: y,
                  loopsCursor: void 0 !== g ? g : v
                }))
            }
            return this.emit("START", {
              title: s,
              loopsCursor: this.state.loopsCursor,
              doneIndices: this.state.doneIndices,
              extra: this.state.extra,
              isBackFromCalling: this.state.isBackFromCalling
            }), Promise.resolve().then((function() {
              return t.__prepare(t.state)
            })).then((function() {
              t.emit("PREPARED", {
                title: s,
                loopsCursor: t.state.loopsCursor,
                doneIndices: t.state.doneIndices,
                extra: t.state.extra,
                isBackFromCalling: t.state.isBackFromCalling
              })
            })).then((function() {
              return t.__go(t.state.token || null)
            }), (function(e) {
              return t.__errLog(e, e.errorIndex)
            }))
          }
        }, {
          key: "pause",
          value: function() {
            var e = this;
            return this.__setState({
              status: l.PAUSED
            }), setTimeout((function() {
              e.emit("PAUSED", {
                extra: e.state.extra
              })
            }), 0), this.__createPromiseWaitForResume(this.state.token)
          }
        }, {
          key: "resume",
          value: function(e) {
            this.__setState({
              status: l.PLAYING,
              isStep: !!e
            }), this.emit("RESUMED", {
              extra: this.state.extra
            });
            var t = this.toResumePromises[this.state.token];
            t && t.resolve && t.resolve()
          }
        }, {
          key: "stop",
          value: function(e) {
            this.__end(u.MANUAL, e)
          }
        }, {
          key: "stopWithError",
          value: function(e) {
            this.__errLog(e)
          }
        }, {
          key: "jumpTo",
          value: function(e) {
            var t = this.state.resources;
            if (e < 0 || e >= t.length) throw new Error("jumpTo: nextIndex out of range");
            this.__setState({
              nextIndex: e
            })
          }
        }, {
          key: "setPostDelay",
          value: function(e) {
            this.__setState({
              postDelay: e
            })
          }
        }, {
          key: "getStatus",
          value: function() {
            return this.state.status
          }
        }, {
          key: "getState",
          value: function() {
            return i({}, this.state)
          }
        }, {
          key: "setState",
          value: function(e) {
            return this.__setState(e)
          }
        }, {
          key: "replayLastConfig",
          value: function() {
            var e = this.state.lastPlayConfig;
            if (!e) throw new Error("No last play config available");
            return this.play(i({}, e, {
              nextIndex: e.startIndex
            }))
          }
        }, {
          key: "getPlayUID",
          value: function() {
            return this.state.playUID
          }
        }, {
          key: "checkPlayUID",
          value: function(e) {
            return this.state.playUID === e
          }
        }, {
          key: "__go",
          value: function(e) {
            var t = this;
            if (null == e) this.state.token = e = Math.random();
            else if (e !== this.state.token) return;
            var r = function(r) {
                return function() {
                  if (e !== t.state.token) throw new Error("token expired");
                  return r.apply(void 0, arguments)
                }
              },
              n = this.state,
              a = (n.resources, n.nextIndex, n.preDelay);
            return (a > 0 ? this.__delay((function() {}), a) : Promise.resolve()).then((function() {
              return t.__shouldContinue()
            })).then((function(n) {
              var a = n.paused,
                o = n.complete;
              if (a) throw new Error("player: paused or stopped");
              if (!o) {
                var i = t.state,
                  s = i.resources,
                  c = i.nextIndex,
                  l = i.startIndex,
                  u = i.loopsCursor,
                  d = i.loopsStart,
                  m = i.loopsEnd;
                if (c === l) {
                  var p = {
                    loopsCursor: u,
                    index: c,
                    currentLoop: u - d + 1,
                    loops: m - d + 1,
                    resource: s[c],
                    extra: t.state.extra
                  };
                  t.emit("LOOP_START", p), u !== d && t.emit("LOOP_RESTART", p)
                }
                return t.emit("TO_PLAY", {
                  index: c,
                  currentLoop: u - d + 1,
                  loops: m - d + 1,
                  resource: s[c],
                  extra: t.state.extra
                }), (void 0 === t.state.lastBreakpoint && -1 !== t.state.breakpoints.indexOf(c) ? (t.__setState({
                  lastBreakpoint: c
                }), t.emit("BREAKPOINT", {
                  index: c,
                  currentLoop: u - d + 1,
                  loops: m - d + 1,
                  resource: s[c],
                  extra: t.state.extra
                }), t.pause()) : (t.__setState({
                  lastBreakpoint: void 0
                }), Promise.resolve())).then((function() {
                  return t.__run(s[c], t.state)
                })).then(r((function(n) {
                  return t.__handle(n, s[c], t.state).then(r((function(e) {
                    var r = t.state.loopsCursor;
                    return t.__setNext(e), t.emit("PLAYED_LIST", {
                      indices: t.state.doneIndices,
                      extra: t.state.extra
                    }), r !== t.state.loopsCursor
                  }))).then((function(e) {
                    var r = t.state,
                      n = r.postDelay,
                      a = r.needDelayAfterLoop,
                      o = Math.max(n, e && a ? 10 : 0);
                    return o > 0 ? t.__delay((function() {}), o) : Promise.resolve()
                  })).then((function() {
                    return t.state.isStep ? t.pause().then((function() {
                      return t.__go(e)
                    })) : t.__go(e)
                  }))
                }))).catch(r((function(e) {
                  return t.__errLog(e)
                })))
              }
            }))
          }
        }, {
          key: "__shouldContinue",
          value: function() {
            var e = this.state,
              t = e.status,
              r = (e.mode, e.nextIndex),
              n = e.startIndex,
              a = e.endIndex;
            e.token;
            if (t === l.PAUSED || t === l.STOPPED) {
              var o = this.toResumePromises[this.state.token];
              return o ? o.promise.then((function() {
                return {}
              })) : {
                paused: !0
              }
            }
            return t === l.PLAYING && r >= n && r <= a ? Promise.resolve({
              paused: !1,
              complete: !1
            }) : (this.__end(u.COMPLETE), Promise.resolve({
              complete: !0
            }))
          }
        }, {
          key: "__createPromiseWaitForResume",
          value: function(e) {
            var t = this,
              r = new Promise((function(n, a) {
                setTimeout((function() {
                  t.toResumePromises[e] = {
                    resolve: n,
                    reject: a,
                    promise: r
                  }
                }), 10)
              }));
            return r
          }
        }, {
          key: "__createPromiseForStop",
          value: function(e, t) {
            var r = this,
              n = new Promise((function(a, o) {
                setTimeout((function() {
                  r.toResumePromises[e] = {
                    resolve: a,
                    reject: o,
                    promise: n
                  }, o(new Error("Stop reason: " + t))
                }), 10)
              }));
            return n
          }
        }, {
          key: "__end",
          value: function(e, t) {
            if (this.state.status !== l.STOPPED) {
              if (-1 === Object.keys(u).indexOf(e)) throw new Error("Player - __end: invalid reason, " + e);
              var r = t && t.silent;
              this.state.noEndEvent && e === u.COMPLETE || r || (this.emit("END", {
                opts: t,
                reason: e,
                extra: this.state.extra
              }), e !== u.ERROR && this.state.callback(null, e)), e !== u.COMPLETE && this.__createPromiseForStop(this.state.token, e), this.__setState({
                status: l.STOPPED
              })
            }
          }
        }, {
          key: "__errLog",
          value: function(e, t) {
            if (this.state.status === l.STOPPED) throw new Error(e);
            throw this.emit("ERROR", {
              errorIndex: void 0 !== t ? t : this.state.nextIndex,
              msg: e && e.message,
              extra: this.state.extra,
              restart: !!e.restart
            }), this.state.callback(e, null), this.__end(u.ERROR), new Error(e)
          }
        }, {
          key: "__setNext",
          value: function(e) {
            if (void 0 !== e && (e < 0 || e > this.state.resources.length)) throw new Error("invalid nextIndexPassed " + e);
            var t = this.state,
              r = t.mode,
              n = t.doneIndices,
              a = t.nextIndex,
              o = t.endIndex,
              i = t.startIndex,
              s = t.loopsCursor,
              l = t.loopsEnd,
              u = void 0 !== e ? e : a + 1,
              d = -1 === n.indexOf(a) ? [].concat(function(e) {
                if (Array.isArray(e)) {
                  for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                  return r
                }
                return Array.from(e)
              }(n), [a]) : n,
              m = s,
              p = null;
            r === c.LOOP ? u <= o || s >= l ? p = u : (m += 1, p = i, d = []) : p = u, this.__setState({
              loopsCursor: m,
              nextIndex: p,
              doneIndices: d
            })
          }
        }, {
          key: "__setState",
          value: function(e) {
            this.state = i({}, this.state, e)
          }
        }, {
          key: "__delay",
          value: function(e, t) {
            var r = this,
              n = 0,
              a = setInterval((function() {
                n += 1e3, r.emit("DELAY", {
                  extra: r.state.extra,
                  total: t,
                  past: n
                })
              }), 1e3);
            return Object(o.delay)(e, t).then((function(e) {
              return a && clearInterval(a), e
            }))
          }
        }]), e
      }();
    a()(p.prototype), p.C = p.prototype.C = {
      MODE: c,
      STATUS: l,
      END_REASON: u
    };
    var h = {},
      f = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments[1],
          r = e.name || "testCase";
        if (delete e.name, Object.keys(e).length > 0 && (h[r] = new p(e, t)), !h[r]) throw new Error("player not initialized");
        return h[r]
      }
  },
  31: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = r(91),
      o = r(58),
      i = r(13),
      s = n(r(28));
    class c extends a.XModule {
      getName() {
        return a.XModuleTypes.XFile
      }
      getAPI() {
        return o.getNativeFileSystemAPI()
      }
      initConfig() {
        return this.getConfig().then(e => {
          if (!e.rootDir) {
            const e = o.getNativeFileSystemAPI();
            return e.getSpecialFolderPath({
              folder: o.SpecialFolder.UserDesktop
            }).then(t => {
              const r = s.default.join(t, "uivision");
              return e.ensureDir({
                path: r
              }).then(e => {
                this.setConfig({
                  rootDir: e ? r : t
                })
              })
            }).catch(e => {
              if (!/Specified native messaging host not found/.test(e)) throw e
            })
          }
        })
      }
      sanityCheck(e) {
        return Promise.all([this.getConfig(), this.getAPI().getVersion().then(() => this.getAPI(), () => this.getAPI().reconnect()).catch(e => {
          throw new Error("xFile is not installed yet")
        })]).then(([t, r]) => {
          if (e) return !0;
          if (!t.rootDir) throw new Error("rootDir is not set");
          return r.directoryExists({
            path: t.rootDir
          }).then(e => {
            if (!e) throw new Error(`Directory '${t.rootDir}' doesn't exist`);
            return !0
          }).then(() => {
            const e = s.default.join(t.rootDir, "__kantu__" + Math.round(100 * Math.random()));
            return r.createDirectory({
              path: e
            }).then(t => {
              if (!t) throw new Error;
              return r.removeDirectory({
                path: e
              })
            }).then(e => {
              if (!e) throw new Error;
              return !0
            }).catch(e => {
              throw new Error(`Directory '${t.rootDir}' is not writable`)
            })
          })
        })
      }
      checkUpdate() {
        return Promise.reject(new Error("checkUpdate is not implemented yet"))
      }
      checkUpdateLink(e, t) {
        return `https://ui.vision/x/idehelp?help=xfileaccess_updatecheck&xversion=${e}&kantuversion=${t}`
      }
      downloadLink() {
        return "https://ui.vision/x/idehelp?help=xfileaccess_download"
      }
      infoLink() {
        return "https://ui.vision/x/idehelp?help=xfileaccess"
      }
    }
    t.XFile = c, t.getXFile = i.singletonGetter(() => new c)
  },
  312: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = r(58),
      o = r(31),
      i = n(r(28)),
      s = n(r(11)),
      c = r(13),
      l = r(12);
    class u {
      constructor(e = {}) {
        this.pDirReady = Promise.resolve(!1), this.logsDir = "", this.fileName = "log.txt", this.waitForStorageManager = () => Promise.resolve(l.getStorageManager()), this.check(), this.updateLogFileName(), e.waitForStorageManager && (this.waitForStorageManager = e.waitForStorageManager)
      }
      updateLogFileName() {
        const e = new Date,
          t = `${e.getFullYear()}${c.pad2digits(e.getMonth()+1)}${c.pad2digits(e.getDate())}`,
          r = [e.getHours(), e.getMinutes(), e.getSeconds()].map(e => c.pad2digits(e)).join("");
        this.fileName = `log-${t}-${r}.txt`
      }
      check() {
        return this.pDirReady = o.getXFile().sanityCheck(!0).then(e => {
          if (!e) return !1;
          const {
            rootDir: t
          } = o.getXFile().getCachedConfig();
          return !!t && (this.logsDir = i.default.join(t, "logs"), a.getNativeFileSystemAPI().ensureDir({
            path: this.logsDir
          }))
        }), this.pDirReady
      }
      log(e) {
        return this.waitForStorageManager().then(t => !!t.isXFileMode() && o.getXFile().sanityCheck(!0).then(() => this.pDirReady).then(t => !!t && a.getNativeFileSystemAPI().appendAllText({
          path: i.default.join(this.logsDir, this.fileName),
          content: d(e)
        }), e => (s.default.warn("Failed to log: ", e.message), !1)))
      }
      logWithTime(e) {
        return this.log(`${(new Date).toISOString()} - ${e}`)
      }
      logTo(e, t) {
        return this.waitForStorageManager().then(r => !!r.isXFileMode() && o.getXFile().sanityCheck(!0).then(r => {
          if (!r) return !1;
          const n = i.default.dirname(e);
          return a.getNativeFileSystemAPI().ensureDir({
            path: n
          }).then(r => !!r && a.getNativeFileSystemAPI().appendAllText({
            path: e,
            content: d(t)
          }))
        }, e => (s.default.warn("Failed to log: ", e.message), !1)))
      }
    }

    function d(e) {
      return 0 === e.length ? e : "\n" !== e.charAt(e.length - 1) ? e + "\n" : e
    }
    t.LogService = u, t.getLogService = c.singletonGetter(() => new u)
  },
  313: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = r(175),
      o = r(483),
      i = r(12),
      s = r(101),
      c = n(r(103)),
      l = r(346),
      u = r(13);
    class d {
      constructor() {
        this.oldMacros = []
      }
      getMeta() {
        return {
          createdAt: new Date("2019-04-01").getTime(),
          goal: ["Migrate macros and test suites from indexedDB storage to Browser File System storage", "In order to prepare for an easy support for deep folder structure", "Note: the old indexedDB storage WILL NOT be cleared, just in case any user loses his data during migration", "The real clean up could be done in future releases, in the form of another migration job"].join(". ")
        }
      }
      getType() {
        return a.MigrationJobType.MigrateMacroTestSuiteToBrowserFileSystem
      }
      previousVersionRange() {
        return "<=4.0.1"
      }
      shouldMigrate() {
        const e = this.getOldMacroStorage(),
          t = this.getOldTestSuiteStorage();
        return Promise.all([e.list().then(e => e.length), t.list().then(e => e.length)]).then(([e, t]) => e > 0 || t > 0)
      }
      migrate() {
        const e = () => this.getOldTestSuiteStorage().readAll().then(e => (console.log("this.getOldTestSuiteStorage().readAll()", e), c.default.ensureDirectory("/testsuites").then(() => this.getNewTestSuiteStorage().bulkWrite(e)))).then(() => !0),
          t = () => s.getMacroExtraKeyValueData().getAll().then(e => (this.oldMacros.forEach(t => {
            const r = this.getNewMacroStorage().filePath(t.name),
              n = t.id;
            e[n] && (e[r] = e[n])
          }), s.getMacroExtraKeyValueData().set("", e)));
        return (() => this.getOldMacroStorage().readAll().then(e => (console.log("this.getOldMacroStorage().readAll()", e), this.oldMacros = e.map(e => e.content), c.default.ensureDirectory("/macros").then(() => this.getNewMacroStorage().bulkWrite(e)))).then(() => !0))().then(() => e()).then(() => t()).then(() => !0)
      }
      remedy() {
        const e = () => this.getOldTestSuiteStorage().readAll().then(e => e.map(e => e.content));
        return (() => this.getOldMacroStorage().readAll().then(e => (this.oldMacros = e.map(e => e.content), this.oldMacros)))().then(t => e().then(e => l.backup({
          backup: {
            testCase: !0,
            testSuite: !0
          },
          macroNodes: t,
          testSuites: e
        })))
      }
      getOldMacroStorage() {
        return o.getIndexeddbFlatStorage({
          table: "testCases"
        })
      }
      getOldTestSuiteStorage() {
        return o.getIndexeddbFlatStorage({
          table: "testSuites"
        })
      }
      getNewMacroStorage() {
        return this.getStorageManager().getStorageForTarget(i.StorageTarget.Macro, i.StorageStrategyType.Browser)
      }
      getNewTestSuiteStorage() {
        return this.getStorageManager().getStorageForTarget(i.StorageTarget.TestSuite, i.StorageStrategyType.Browser)
      }
      getStorageManager() {
        return new i.StorageManager(i.StorageStrategyType.Browser, {
          getMacros: () => this.oldMacros,
          getMaxMacroCount: () => Promise.resolve(1 / 0)
        })
      }
    }
    t.MigrateMacroTestSuiteToBrowserFileSystem = d, t.getMigrateMacroTestSuiteToBrowserFileSystem = u.singletonGetter(() => new d)
  },
  318: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = {
      ara: {
        lang: "ara",
        name: "Arabic",
        short: "AR"
      },
      chs: {
        lang: "chs",
        name: "ChineseSimplified",
        short: "简"
      },
      cht: {
        lang: "cht",
        name: "ChineseTraditional",
        short: "繁"
      },
      ce: {
        lang: "ce",
        name: "Czech",
        short: "CS"
      },
      dan: {
        lang: "dan",
        name: "Danish",
        short: "DA"
      },
      dut: {
        lang: "dut",
        name: "Dutch",
        short: "NL"
      },
      eng: {
        lang: "eng",
        name: "English",
        short: "EN"
      },
      fin: {
        lang: "fin",
        name: "Finnish",
        short: "FI"
      },
      fre: {
        lang: "fre",
        name: "French",
        short: "FR"
      },
      ger: {
        lang: "ger",
        name: "German",
        short: "DE"
      },
      gre: {
        lang: "gre",
        name: "Greek",
        short: "EL"
      },
      hun: {
        lang: "hun",
        name: "Hungarian",
        short: "HU"
      },
      ita: {
        lang: "ita",
        name: "Italian",
        short: "IT"
      },
      jpn: {
        lang: "jpn",
        name: "Japanese",
        short: "JP"
      },
      kor: {
        lang: "kor",
        name: "Korean",
        short: "KO"
      },
      nor: {
        lang: "nor",
        name: "Norwegian",
        short: "NN"
      },
      pol: {
        lang: "pol",
        name: "Polish",
        short: "PL"
      },
      por: {
        lang: "por",
        name: "Portuguese",
        short: "PT"
      },
      rus: {
        lang: "rus",
        name: "Russian",
        short: "RU"
      },
      spa: {
        lang: "spa",
        name: "Spanish",
        short: "ES"
      },
      swe: {
        lang: "swe",
        name: "Swedish",
        short: "SV"
      },
      tur: {
        lang: "tur",
        name: "Turkish",
        short: "TR"
      }
    };
    t.languages = n, t.isValidOCRLanguage = function(e) {
      return "string" == typeof e && !!n[e.toLowerCase()]
    }
  },
  319: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(36)),
      o = r(969),
      i = r(13),
      s = n(r(11)),
      c = () => {
        const e = new Date;
        return {
          year: e.getFullYear(),
          month: e.getMonth() + 1,
          date: e.getDate()
        }
      };
    t.getOcrCommandCounter = i.singletonGetter(e => new o.PersistentCounter(Object.assign(Object.assign({}, e), {
      read: () => (s.default("getOcrCommandCounter - read"), a.default.get("OCR_CONVERSIONS_PER_DAY").then(t => {
        return t ? (r = c(), n = t.day, r.year !== n.year || r.month !== n.month || r.date !== n.date ? e.initial : t.count) : e.initial;
        var r, n
      })),
      write: e => (s.default("getOcrCommandCounter - write", e), a.default.set("OCR_CONVERSIONS_PER_DAY", {
        day: c(),
        count: e
      }).then(() => {}))
    })))
  },
  321: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = r(145),
      o = r(13),
      i = n(r(26));
    class s extends a.KeyValueData {
      getAll() {
        return super.get("").then(e => e || {})
      }
      getMainKeyAndSubKeys(e) {
        const [t, r] = super.getMainKeyAndSubKeys(e);
        return [s.STORAGE_KEY, [t].concat(r).filter(e => e && e.length)]
      }
    }
    t.OcrServerKeyValueData = s, s.STORAGE_KEY = "ocr_server_data", t.getOcrServerKeyValueData = o.singletonGetter(() => new s);
    class c {
      constructor(e) {
        this.servers = e.servers, this.resetTime = e.resetTime, this.lastId = null
      }
      all() {
        return Promise.resolve(this.servers)
      }
      isAllDown() {
        return this.validServers().then(({
          servers: e
        }) => 0 === e.length)
      }
      randomPick() {
        return this.validServers().then(({
          servers: e,
          serverInfos: t
        }) => e[l(e.length)])
      }
      bestPick() {
        return this.validServers().then(({
          servers: e,
          serverInfos: t
        }) => {
          const r = e => t[e.id] ? t[e.id].lastTotalMilliseconds : 0;
          return e.reduce((e, t) => {
            if (!e) return t;
            const n = r(e),
              a = r(t);
            switch (Math.sign(n - a)) {
              case 0:
                return Math.random() > .5 ? e : t;
              case 1:
                return t;
              case -1:
              default:
                return e
            }
          })
        })
      }
      reset() {
        return o.flow(...this.servers.map(e => () => t.getOcrServerKeyValueData().set(e.id, null))).then(() => {})
      }
      use(e) {
        if (!this.servers.find(t => t.id === e)) throw new Error(`No server found with id '${e}'`);
        this.lastId = e
      }
      report(e, r) {
        return t.getOcrServerKeyValueData().set(e, r).then(() => !0)
      }
      validServers() {
        return t.getOcrServerKeyValueData().getAll().then(e => {
          const t = (new Date).getTime(),
            r = this.servers.filter(r => {
              const n = e[r.id];
              return !n || (t - n.lastResponseTimestamp > this.resetTime || !n.lastError && n.lastTotalMilliseconds <= i.default.ocr.apiHealthyResponseTime)
            });
          if (0 === r.length) throw new Error("All OCR servers are down");
          return {
            servers: r,
            serverInfos: e
          }
        })
      }
    }

    function l(e) {
      return Math.round(Math.random() * e)
    }
    t.OcrEndpointPicker = c, t.randomIndex = l, t.getOcrEndpointPicker = o.singletonGetter(() => new c({
      servers: i.default.ocr.apiList,
      resetTime: i.default.ocr.resetTime
    }))
  },
  332: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.MethodTypeInvocationNames = ["get_version", "get_desktop_dpi", "get_image_info", "capture_desktop", "search_image", "search_desktop", "get_max_file_range", "get_file_size", "read_file_range"]
  },
  333: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(90);
    class a extends n.NativeMessagingHost {
      constructor() {
        super(a.HOST_NAME)
      }
    }
    t.KantuCVHost = a, a.HOST_NAME = "com.a9t9.kantu.cv"
  },
  334: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      function(e) {
        const t = new Uint8Array([65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47]),
          r = new Uint8Array([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);

        function n(e, t, n) {
          if (n > 4) throw new Error("maxLength should be in range [0, 4].");
          const a = new Uint8Array(4);
          for (let o = 0; o < n; ++o) {
            const n = e.charCodeAt(t + o),
              i = r[n];
            if (255 === i) return;
            a[o] = i
          }
          return (a[0] << 18) + (a[1] << 12) + (a[2] << 6) + (a[3] << 0)
        }

        function a(e, t, r) {
          e[t + 0] = r >> 16 & 255, e[t + 1] = r >> 8 & 255, e[t + 2] = 255 & r
        }
        e.encode = function(e) {
          const r = e.length,
            n = function(e) {
              let t = e / 3 * 4;
              return t += e % 3 != 0 ? 4 : 0, t
            }(r),
            a = r % 3,
            o = r - a,
            i = new Uint8Array(n);
          let s, c = 0;
          for (s = 0; s < o; s += 3) i[c + 0] = t[(252 & e[s]) >> 2], i[c + 1] = t[(3 & e[s]) << 4 | (240 & e[s + 1]) >> 4], i[c + 2] = t[(15 & e[s + 1]) << 2 | (192 & e[s + 2]) >> 6], i[c + 3] = t[63 & e[s + 2]], c += 4;
          switch (s = o, a) {
            case 2:
              i[c + 0] = t[(252 & e[s]) >> 2], i[c + 1] = t[(3 & e[s]) << 4 | (240 & e[s + 1]) >> 4], i[c + 2] = t[(15 & e[s + 1]) << 2], i[c + 3] = 61, c += 4;
              break;
            case 1:
              i[c + 0] = t[(252 & e[s]) >> 2], i[c + 1] = t[(3 & e[s]) << 4], i[c + 2] = 61, i[c + 3] = 61, c += 4
          }
          return new TextDecoder("ascii").decode(i)
        }, e.decode = function(e) {
          const t = e.length;
          if (t % 4 != 0) return;
          let r = 0;
          t > 0 && 61 == e.charCodeAt(t - 1) && (++r, t > 1 && 61 == e.charCodeAt(t - 2) && ++r);
          const o = -4 & t - r,
            i = new Uint8Array(6 * t / 8 - r);
          let s, c = 0,
            l = 0;
          for (; c < o;) {
            if (s = n(e, c, 4), void 0 === s) return;
            a(i, l, s), c += 4, l += 3
          }
          if (r > 0) {
            if (s = n(e, c, 4 - r), void 0 === s) return;
            switch (r) {
              case 1:
                i[l + 0] = s >> 16 & 255, i[l + 1] = s >> 8 & 255;
                break;
              case 2:
                i[l + 0] = s >> 16 & 255
            }
          }
          return i
        }
      }(t.base64 || (t.base64 = {}))
  },
  337: function(e, t, r) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      a = r(338),
      o = r(171);

    function i() {}

    function s(e, t, r) {
      if ("function" == typeof t && (r = t, t = null), !e || "object" !== (void 0 === e ? "undefined" : n(e))) throw new Error("Expected first parameter to be a targetElement. Instead got: " + e);
      return {
        targetElement: e,
        eventProperties: t || {},
        configCallback: r || i
      }
    }

    function c(e, t, r, n, o, i) {
      t.forEach((function(t) {
        var s = a.createEvent(t, o, n);
        ! function(e, t, r) {
          t && (t.length < 2 ? r && t(e) : t(e, e.type))
        }(s, i, t === r), e.dispatchEvent(s)
      }))
    }
    var l = function() {
      this.lastDragSource = null, this.lastDataTransfer = null, this.pendingActionsQueue = []
    };
    l.prototype._queue = function(e) {
      this.pendingActionsQueue.push(e), 1 === this.pendingActionsQueue.length && this._queueExecuteNext()
    }, l.prototype._queueExecuteNext = function() {
      if (0 !== this.pendingActionsQueue.length) {
        var e = this,
          t = this.pendingActionsQueue[0],
          r = function() {
            e.pendingActionsQueue.shift(), e._queueExecuteNext()
          };
        0 === t.length ? (t.call(this), r()) : t.call(this, r)
      }
    }, l.prototype.dragStart = function(e, t, r) {
      var n = s(e, t, r),
        a = ["mousedown", "dragstart", "drag"],
        i = new o;
      return this._queue((function() {
        c(n.targetElement, a, "drag", i, n.eventProperties, n.configCallback), this.lastDragSource = e, this.lastDataTransfer = i
      })), this
    }, l.prototype.dragEnter = function(e, t, r) {
      var n = s(e, t, r),
        a = ["mousemove", "mouseover", "dragenter"];
      return this._queue((function() {
        c(n.targetElement, a, "dragenter", this.lastDataTransfer, n.eventProperties, n.configCallback)
      })), this
    }, l.prototype.dragOver = function(e, t, r) {
      var n = s(e, t, r),
        a = ["mousemove", "mouseover", "dragover"];
      return this._queue((function() {
        c(n.targetElement, a, "drag", this.lastDataTransfer, n.eventProperties, n.configCallback)
      })), this
    }, l.prototype.dragLeave = function(e, t, r) {
      var n = s(e, t, r),
        a = ["mousemove", "mouseover", "dragleave"];
      return this._queue((function() {
        c(n.targetElement, a, "dragleave", this.lastDataTransfer, n.eventProperties, n.configCallback)
      })), this
    }, l.prototype.drop = function(e, t, r) {
      var n = s(e, t, r),
        a = ["mousemove", "mouseup", "drop"],
        o = ["dragend"];
      return this._queue((function() {
        c(n.targetElement, a, "drop", this.lastDataTransfer, n.eventProperties, n.configCallback), this.lastDragSource && c(this.lastDragSource, o, "drop", this.lastDataTransfer, n.eventProperties, n.configCallback)
      })), this
    }, l.prototype.then = function(e) {
      return this._queue((function() {
        e.call(this)
      })), this
    }, l.prototype.delay = function(e) {
      return this._queue((function(t) {
        window.setTimeout(t, e)
      })), this
    }, e.exports = l
  },
  338: function(e, t, r) {
    var n = r(171),
      a = ["drag", "dragstart", "dragenter", "dragover", "dragend", "drop", "dragleave"];

    function o(e, t) {
      for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
      return e
    }

    function i(e, t, r) {
      var n;
      switch (t) {
        case "MouseEvent":
          (n = document.createEvent("MouseEvent")).initEvent(e, !0, !0);
          break;
        default:
          (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, 0)
      }
      return r && o(n, r), n
    }

    function s(e, t, r) {
      if (/Firefox/.test(window.navigator.userAgent)) return i(e, t, r);
      try {
        return function(e, t, r) {
          var n = window[t],
            a = {
              view: window,
              bubbles: !0,
              cancelable: !0
            };
          o(a, r);
          var i = new n(e, a);
          return o(i, r), i
        }(e, t, r)
      } catch (n) {
        return i(e, t, r)
      }
    }
    var c = {
      createEvent: function(e, t, r) {
        var o = "CustomEvent";
        return e.match(/^mouse/) ? o = "MouseEvent" : e.match(/^(drag|drop)/) && (o = "DragEvent"), a.indexOf(e) > -1 && (t.dataTransfer = r || new n), s(e, o, t)
      }
    };
    e.exports = c
  },
  345: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(149),
      a = r(172);

    function o(e) {
      return Object.assign(Object.assign({}, e), {
        type: e.type === n.ProxyScheme.Socks5 ? n.FirefoxProxyType.Socks5 : e.type
      })
    }
    t.convertToFirefoxProxyInfo = o;
    class i extends a.BaseProxyManager {
      constructor() {
        super(), this.unbind = () => {}, this.isBound = !1
      }
      isSupported() {
        return "undefined" != typeof browser && browser.proxy && browser.proxy.onRequest
      }
      isControllable(e) {
        return Promise.resolve(!0)
      }
      setProxy(e) {
        return this.bind(), this.proxy = e, this.notifyProxyChange(), Promise.resolve()
      }
      reset() {
        return this.proxy = null, this.notifyProxyChange(), Promise.resolve()
      }
      notifyProxyChange() {
        setTimeout(() => {
          this.registry.fire("change", this.proxy)
        }, 10)
      }
      bind() {
        if (this.isBound) return;
        this.isBound = !0;
        const e = this.onProxyRequest.bind(this);
        browser.proxy.onRequest.addListener(e, {
          urls: ["<all_urls>"]
        }), this.unbind = () => browser.proxy.onRequest.removeListener(e)
      }
      onProxyRequest(e) {
        return this.proxy ? o(this.proxy) : {
          type: n.FirefoxProxyType.Direct
        }
      }
    }
    t.ProxyManagerViaListenerAPI = i
  },
  346: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(69)),
      o = n(r(134)),
      i = r(4),
      s = r(53),
      c = r(64),
      l = r(12),
      u = r(28),
      d = r(361);
    t.backup = function(e) {
      const {
        backup: t,
        macroNodes: r,
        testSuites: n,
        screenshots: m,
        csvs: p,
        visions: h
      } = e, f = new o.default, g = [];
      if (t.testCase && r && r.length) {
        const t = f.folder(d.ZipFolders.Macros);
        r.forEach(r => {
          const n = u.posix.dirname(r.relativePath),
            a = u.posix.basename(r.relativePath),
            o = ((e, t) => {
              if ("." === e) return t;
              return e.split(u.posix.sep).reduce((e, t) => e.folder(t), t)
            })(n, t);
          g.push(l.getStorageManager().getMacroStorage().read(r.fullPath, "Text").then(t => {
            const r = t;
            o.file(a, s.toJSONString({
              name: r.name,
              commands: r.data.commands
            }, {
              ignoreTargetOptions: !!e.ignoreMacroTargetOptions
            }))
          }))
        })
      }
      if (t.testSuite && n && n.length) {
        const e = f.folder(d.ZipFolders.TestSuites),
          t = i.nameFactory();
        n.forEach(r => {
          const n = t(r.name);
          e.file(`${n}.json`, c.stringifyTestSuite(r))
        })
      }
      if (t.screenshot && m && m.length) {
        const e = f.folder(d.ZipFolders.Screenshots),
          t = l.getStorageManager().getScreenshotStorage();
        m.forEach(r => {
          g.push(t.read(r.fullPath, "ArrayBuffer").then(t => {
            e.file(r.name, t, {
              binary: !0
            })
          }))
        })
      }
      if (t.vision && h && h.length) {
        const e = f.folder(d.ZipFolders.Visions),
          t = l.getStorageManager().getVisionStorage();
        h.forEach(r => {
          g.push(t.read(r.fullPath, "ArrayBuffer").then(t => {
            e.file(r.name, t, {
              binary: !0
            })
          }))
        })
      }
      if (t.csv && p && p.length) {
        const e = f.folder(d.ZipFolders.Csvs),
          t = l.getStorageManager().getCSVStorage();
        p.forEach(r => {
          g.push(t.read(r.fullPath, "Text").then(t => e.file(r.name, t)))
        })
      }
      return Promise.all(g).then(() => {
        f.generateAsync({
          type: "blob"
        }).then((function(e) {
          a.default.saveAs(e, "uivision_backup.zip")
        }))
      })
    }
  },
  347: function(e, t, r) {
    var n = r(337);

    function a(e, t, r) {
      return e[t].apply(e, r)
    }
    var o = {
      dragStart: function(e, t, r) {
        return a(new n, "dragStart", arguments)
      },
      dragEnter: function(e, t, r) {
        return a(new n, "dragEnter", arguments)
      },
      dragOver: function(e, t, r) {
        return a(new n, "dragOver", arguments)
      },
      dragLeave: function(e, t, r) {
        return a(new n, "dragLeave", arguments)
      },
      drop: function(e, t, r) {
        return a(new n, "drop", arguments)
      },
      delay: function(e, t, r) {
        return a(new n, "delay", arguments)
      },
      triggerDragEvent: function(e, t) {
        var r = function e(t) {
            if (null == t) return "null";
            if (null == t.parentElement) return "/" + t.tagName;
            for (var r = t.parentElement.children, n = 0, a = 0, o = !1, i = 0; i < r.length; i++) r[i].tagName != t.tagName || o ? r[i].tagName == t.tagName && a++ : (n++, a++), r[i] == t && (o = !0);
            return a > 1 ? e(t.parentElement) + "/" + t.tagName + "[" + n + "]" : e(t.parentElement) + "/" + t.tagName
          },
          n = "                                                    function simulateDragDrop(sourceNode, destinationNode){      function createCustomEvent(type) {                               var event = new CustomEvent('CustomEvent');                  event.initCustomEvent(type, true, true, null);               event.dataTransfer = {                                           data: {                                                      },                                                           setData: function(type, val) {                                   this.data[type] = val;                                   },                                                           getData: function(type) {                                        return this.data[type];                                  }                                                        };                                                           return event;                                            }                                                            function dispatchEvent(node, type, event) {                      if (node.dispatchEvent) {                                        return node.dispatchEvent(event);                        }                                                            if (node.fireEvent) {                                            return node.fireEvent('on' + type, event);               }                                                        }                                                            var event = createCustomEvent('dragstart');                  dispatchEvent(sourceNode, 'dragstart', event);                                                                            var dropEvent = createCustomEvent('drop');                   dropEvent.dataTransfer = event.dataTransfer;                 dispatchEvent(destinationNode, 'drop', dropEvent);                                                                        var dragEndEvent = createCustomEvent('dragend');             dragEndEvent.dataTransfer = event.dataTransfer;              dispatchEvent(sourceNode, 'dragend', dragEndEvent);      }                                                            simulateDragDrop(document.evaluate('" + r(e) + "', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue, document.evaluate('" + r(t) + "', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue);  ",
          a = window.document,
          o = a.createElement("script");
        o.type = "text/javascript", o.text = n, a.body.appendChild(o)
      },
      DataTransfer: r(171),
      DragDropAction: r(337),
      eventFactory: r(338)
    };
    e.exports = o
  },
  349: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(484),
      a = r(485),
      o = r(313),
      i = r(13);
    class s extends n.MigrationService {
      constructor() {
        super({
          storage: {
            get: e => a.getMigrationKeyValueData().get(e),
            set: (e, t) => a.getMigrationKeyValueData().set(e, t).then(() => !0),
            getAll: () => a.getMigrationKeyValueData().getAll().then(e => Object.keys(e).map(t => e[t]))
          },
          jobs: [o.getMigrateMacroTestSuiteToBrowserFileSystem()]
        })
      }
    }
    t.KantuMigrationService = s, t.getKantuMigrationService = i.singletonGetter(() => new s)
  },
  353: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(145),
      a = r(13);
    ! function(e) {
      e.BrowserModeLastMacroId = "browser_mode_last_macro_id", e.XFileModeLastMacroId = "xfile_mode_last_macro_id"
    }(t.MiscKey || (t.MiscKey = {}));
    class o extends n.KeyValueData {
      getMainKeyAndSubKeys(e) {
        const [t, r] = super.getMainKeyAndSubKeys(e);
        return [o.STORAGE_KEY, [t].concat(r).filter(e => e && e.length)]
      }
    }
    t.MiscData = o, o.STORAGE_KEY = "misc_data", t.getMiscData = a.singletonGetter(() => new o)
  },
  36: function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(10),
      a = r.n(n),
      o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      };
    var i = a.a.storage.local,
      s = {
        get: function(e) {
          return i.get(e).then((function(t) {
            return t[e]
          }))
        },
        set: function(e, t) {
          return i.set(function(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r, e
          }({}, e, t)).then((function() {
            return !0
          }))
        },
        remove: function(e) {
          return i.remove(e).then((function() {
            return !0
          }))
        },
        clear: function() {
          return i.clear().then((function() {
            return !0
          }))
        },
        addListener: function(e) {
          a.a.storage.onChanged.addListener((function(t, r) {
            var n = Object.keys(t).map((function(e) {
              return o({}, t[e], {
                key: e
              })
            }));
            e(n)
          }))
        }
      };
    t.default = s
  },
  361: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      function(e) {
        e.Macros = "macros", e.TestSuites = "testsuites", e.Screenshots = "screenshots", e.Csvs = "datasources", e.Visions = "images"
      }(t.ZipFolders || (t.ZipFolders = {}))
  },
  376: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(145),
      a = r(13);
    class o extends n.KeyValueData {
      getAll() {
        return super.get("")
      }
      getMainKeyAndSubKeys(e) {
        const [t, r] = super.getMainKeyAndSubKeys(e);
        return [o.STORAGE_KEY, [t].concat(r).filter(e => e && e.length)]
      }
    }
    t.TestSuiteExtraKeyValueData = o, o.STORAGE_KEY = "test_suite_extra", t.getTestSuiteExtraKeyValueData = a.singletonGetter(() => new o)
  },
  377: function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, "normalizeTestSuite", (function() {
      return s
    }));
    var n = r(4),
      a = r(13),
      o = r(85),
      i = {
        table: o.default.testSuites,
        list: function() {
          return o.default.testSuites.toArray()
        },
        insert: function(e) {
          if (!e.name) throw new Error("Model TestSuite - insert: missing name");
          if (!Array.isArray(e.cases)) throw new Error("Model TestSuite - insert: cases should an array");
          return e.updateTime = 1 * new Date, e.id = Object(n.uid)(), o.default.testSuites.add(e)
        },
        bulkInsert: function(e) {
          var t = e.map((function(e) {
            if (!e.name) throw new Error("Model TestSuite - insert: missing name");
            if (!Array.isArray(e.cases)) throw new Error("Model TestSuite - insert: cases should an array");
            return e.updateTime = 1 * new Date, e.id = Object(n.uid)(), e
          }));
          return o.default.testSuites.bulkAdd(t)
        },
        update: function(e, t) {
          return o.default.testSuites.update(e, t)
        },
        remove: function(e) {
          return o.default.testSuites.delete(e)
        }
      };

    function s(e) {
      return Object(a.pickIfExist)(["id", "name", "cases"], e)
    }
    t.default = i
  },
  380: function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, "resizeWindow", (function() {
      return l
    })), r.d(t, "resizeViewport", (function() {
      return u
    })), r.d(t, "resizeViewportOfTab", (function() {
      return d
    })), r.d(t, "getWindowSize", (function() {
      return m
    })), r.d(t, "getFocusedWindowSize", (function() {
      return p
    }));
    var n = r(10),
      a = r.n(n),
      o = r(4),
      i = r(11),
      s = r.n(i),
      c = function(e, t, r, n, a) {
        var o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          i = o || r < e - r - n;
        if (s()("calcOffset", e, r, n, a, o), i) return r;
        if (!i) {
          return n + r - a
        }
      };

    function l(e, t) {
      var r = screen.availWidth,
        n = screen.availHeight,
        o = screen.availLeft,
        i = screen.availTop;
      return a.a.windows.get(e).then((function(s) {
        var l = s.left,
          u = s.top,
          d = s.width,
          m = s.height;
        return a.a.windows.update(e, t).then((function(s) {
          var p = c(r, o, l, d, s.width),
            h = c(n, i, u, m, s.height, !0);
          a.a.windows.update(e, {
            left: p,
            top: h
          });
          var f = {
            width: s.width,
            height: s.height
          };
          return {
            actual: f,
            desired: t,
            diff: ["width", "height"].filter((function(e) {
              return f[e] !== t[e]
            }))
          }
        }))
      }))
    }

    function u(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        n = 2;
      return s()("resizeViewport, ROUND", r), m(e).then((function(a) {
        s()("currentSize!!!!"), h(a);
        var i = a.window.width - a.viewport.width,
          c = a.window.height - a.viewport.height,
          d = {
            width: i + t.width,
            height: c + t.height
          };
        return s()("size set to", d), l(e, d).then((function() {
          return m(e)
        })).then((function(a) {
          s()("newSize!!!!"), h(a);
          var i = {
            actual: a.viewport,
            desired: t,
            diff: ["width", "height"].filter((function(e) {
              return a.viewport[e] !== t[e]
            }))
          };
          return 0 === i.diff.length || r >= n ? i : Object(o.delay)((function() {}), 0).then((function() {
            return u(e, t, r + 1)
          }))
        }))
      }))
    }

    function d(e, t) {
      return a.a.tabs.get(e).then((function(e) {
        return u(e.windowId, t)
      }))
    }

    function m(e) {
      return a.a.windows.get(e, {
        populate: !0
      }).then((function(e) {
        var t = e.tabs.find((function(e) {
          return e.active
        }));
        return {
          window: {
            width: e.width,
            height: e.height,
            left: e.left,
            top: e.top
          },
          viewport: {
            width: t.width,
            height: t.height
          }
        }
      }))
    }

    function p() {
      return a.a.windows.getLastFocused().then((function(e) {
        return m(e.id)
      }))
    }

    function h(e) {
      s()(e.window, e.viewport), s()("dx = ", e.window.width - e.viewport.width), s()("dy = ", e.window.height - e.viewport.height)
    }
  },
  389: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      function(e) {
        e.BeforeRun = "before_run", e.BeforeResume = "before_resume", e.AfterReturn = "after_return"
      }(t.CallStackEvent || (t.CallStackEvent = {}))
  },
  39: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(13),
      a = r(131);
    var o;
    ! function(e) {
      e[e.Off = 0] = "Off", e[e.On = 1] = "On"
    }(o || (o = {}));
    class i {
      constructor() {
        this.cache = {}
      }
      has(e, t) {
        const r = this.cache[e];
        return !(!r || t && r.cuid != t)
      }
      get(e, t = 2e3, r = 1 / 0) {
        return n.until("ipc by tab id", () => {
          const t = this.cache[e],
            n = t && 1 === t.status,
            a = t && t.ipc;
          return {
            pass: n && !!a && (r === 1 / 0 || r > t.timestamp),
            result: a
          }
        }, 100, t)
      }
      domReadyGet(e, t = 6e4, r = !0) {
        return n.retry(() => this.get(e).then(e => a.withConsecutive(r, () => e.ask("DOM_READY", {}, 1e3).then(() => !0, () => !1)).then(() => e)), {
          timeout: t,
          retryInterval: 1e3,
          shouldRetry: e => !0
        })()
      }
      set(e, t, r) {
        this.cache[e] = {
          ipc: t,
          cuid: r,
          status: 1,
          timestamp: (new Date).getTime()
        }
      }
      setStatus(e, t, r = !1) {
        const n = this.cache[e];
        return !!n && (n.status = t, r && (n.timestamp = (new Date).getTime()), !0)
      }
      enable(e) {
        return this.setStatus(e, 1, !0)
      }
      disable(e) {
        return this.setStatus(e, 0)
      }
      getCuid(e) {
        const t = this.cache[e];
        return t ? t.cuid : null
      }
      del(e) {
        delete this.cache[e]
      }
    }
    t.IpcCache = i, t.getIpcCache = n.singletonGetter(() => new i)
  },
  391: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.Counter = class {
      constructor(e = {}) {
        this.n = 0;
        const {
          initial: t,
          getMax: r,
          onMax: n
        } = e;
        if ("function" != typeof r) throw new Error("'getMax' function is required");
        if ("function" != typeof n) throw new Error("onMax callback is required");
        this.initial = t || 0, this.getMax = r, this.onMax = n, this.reset()
      }
      reset() {
        this.n = this.initial
      }
      get() {
        return this.n
      }
      getMaximum() {
        return this.getMax()
      }
      check() {
        const e = this.getMax();
        return !(this.n + 1 > e) || (this.onMax(this.n, e, this.initial), !1)
      }
      inc() {
        const e = this.getMax();
        return this.n < e ? (this.n += 1, !0) : (this.onMax(this.n, e, this.initial), !1)
      }
    }
  },
  40: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(0)),
      o = r(112),
      i = n(r(1028)),
      s = r(13),
      c = r(12),
      l = r(13),
      u = r(177),
      d = n(r(11)),
      m = r(16),
      p = r(24),
      h = r(127),
      f = r(376),
      g = r(377),
      v = r(4),
      y = n(r(26)),
      b = r(53),
      w = r(65),
      E = r(353),
      x = r(18),
      S = n(r(126)),
      C = n(r(69)),
      T = r(43),
      _ = n(r(134)),
      O = n(r(26));

    function k(e) {
      const {
        entryPath: t,
        isDirectory: r,
        getNewFilePath: n
      } = e, a = c.getStorageManager().getMacroStorage(), o = a.entryPath(t, r);
      return r ? a.listR(o).then(e => {
        const t = e.map(e => s.flatternTree(e));
        return s.flatten(t).map(e => e.fullPath).reduce((e, t) => (e[t] = n(t), e), {})
      }) : Promise.resolve({
        [o]: n(o)
      })
    }

    function P(e) {
      return k(e).then(r => Promise.resolve(e.run()).then(() => s.delay(() => {}, 1e3)).then(() => {
        e.dispatch(t.Actions.updateMacroIdsInTestSuites(r))
      }))
    }

    function I(e) {
      const {
        dispatch: r,
        getState: n,
        fullPath: a,
        message: o,
        switchToIt: i = !0
      } = e;
      return s.until("node shows up", () => {
        const e = n(),
          {
            macroFolderStructure: t
          } = n().editor,
          r = p.getMacroFileNodeList(e),
          o = s.flatten(t.map(s.flatternTree)).find(e => e.fullPath === a),
          i = r.find(e => e.fullPath === a);
        return {
          pass: !!o && !!i,
          result: o
        }
      }, 100, 1e4).then(() => {
        i && r(m.editTestCase(a)), r(t.Actions.ensureTreeNodeUnfoldedForCurrentMacroNode())
      }, e => {
        d.default.error(e), M({
          dispatch: r,
          getState: n,
          message: o
        })
      })
    }

    function M(e) {
      const {
        dispatch: t,
        getState: r,
        message: n
      } = e, {
        config: a
      } = r(), {
        storageMode: i,
        xmodulesStatus: s = "unregistered"
      } = a;
      if (i !== c.StorageStrategyType.XFile) return;
      if ("pro" === s) return;
      const l = (() => {
        switch (s) {
          case "unregistered":
            return `${y.default.xmodulesLimit.unregistered.xFileMacroCount} macro/folder limit in free version`;
          case "free":
            return `${y.default.xmodulesLimit.free.xFileMacroCount} macro/folder limit in PRO1 version`;
          default:
            throw new Error("Unknown xmodule status: " + s)
        }
      })();
      o.Modal.warn({
        title: "Please upgrade your XModule plan",
        content: `${n}, but not displayed due to ${l}`,
        okText: "OK",
        onOk: () => {
          t(m.updateUI({
            showSettings: !0,
            settingsTab: "register"
          }))
        }
      })
    }

    function A(e, t) {
      return {
        type: e,
        data: t
      }
    }

    function R(e) {
      return e
    }
    t.getMacroIdChanges = k, t.withMacroIdChanges = P, t.checkNodeShowUp = I, t.fileFolderNotShown = M, t.ActionFactories = {
      setFrom: e => t => (r, n) => {
        const {
          from: a
        } = n();
        t === w.RunBy.Manual && a !== w.RunBy.Manual && c.getStorageManager().emit(c.StorageManagerEvent.ForceReload), r(A(e, t))
      },
      setIsLoadingMacros: e => t => A(e, t),
      setCurrentMacro: e => t => A(e, t),
      copyCurrentCommand: e => () => (e, t) => {
        const {
          selectedIndex: r
        } = t().editor.editing.meta; - 1 !== r && e(m.copyCommand(r))
      },
      cutCurrentCommand: e => () => (e, t) => {
        const {
          selectedIndex: r
        } = t().editor.editing.meta; - 1 !== r && e(m.cutCommand(r))
      },
      pasteAtCurrentCommand: e => () => (e, t) => {
        const {
          selectedIndex: r
        } = t().editor.editing.meta; - 1 !== r && e(m.pasteCommand(r))
      },
      selectNextCommand: e => () => (e, t) => {
        const {
          meta: r,
          commands: n
        } = t().editor.editing, {
          selectedIndex: a
        } = r;
        a < n.length - 1 && e(m.selectCommand(a + 1, !0))
      },
      selectPrevCommand: e => () => (e, t) => {
        const {
          meta: r,
          commands: n
        } = t().editor.editing, {
          selectedIndex: a
        } = r;
        a > 0 && e(m.selectCommand(a - 1, !0))
      },
      moveCommands: e => (t, r) => A(e, {
        startIndex: t,
        endIndex: r
      }),
      setIsDraggingCommand: e => t => A(e, t),
      setMacroFolderStructure: e => t => A(e, t),
      setTestSuiteFolderStructure: e => t => A(e, t),
      macroCreateFolder: e => e => (t, r) => {
        const n = c.getStorageManager().getMacroStorage(),
          a = n.getPathLib(),
          i = n.dirPath(e.dir);
        return u.prompt({
          width: 400,
          title: "Create folder as..",
          message: "",
          value: "",
          placeholder: "Folder name",
          selectionStart: 0,
          selectionEnd: 0,
          okText: "Create",
          cancelText: "Cancel",
          onCancel: () => Promise.resolve(!0),
          onOk: e => {
            const s = a.join(i, v.sanitizeFileName(e));
            return n.directoryExists(s).then(n => {
              if (n) {
                const t = `'${e}' already exists`;
                throw o.message.error(t), new Error(t)
              }
              return c.getStorageManager().getMacroStorage().createDirectory(s).then(() => (o.message.success(`Created folder '${e}'`), I({
                getState: r,
                dispatch: t,
                fullPath: s,
                switchToIt: !1,
                message: "Folder created"
              }), !0), e => {
                d.default.error(e);
                const t = "Failed to create folder: " + e.message;
                throw o.message.error(t), new Error(t)
              })
            })
          }
        })
      },
      macroDeleteFolder: e => e => (t, r) => {
        const {
          dir: n
        } = e, i = c.getStorageManager().getMacroStorage();
        if (confirm(`Sure to delete ${n} and all its content?`)) return k({
          entryPath: i.dirPath(n),
          isDirectory: !0,
          getNewFilePath: e => e
        }).then(e => {
          const t = r(),
            n = p.getTestSuitesWithAllInfo(t),
            a = Object.keys(e),
            o = [];
          if (a.forEach(e => {
              n.forEach(t => {
                t.cases.find(t => t.testCaseId === e) && o.push({
                  macroPath: i.relativePath(e),
                  testSuiteName: t.name
                })
              })
            }), o.length > 0) {
            const e = 3,
              t = o.slice(0, e).map(e => `"${e.macroPath}" is still used in test suite "${e.testSuiteName}"`).join("\n"),
              r = o.length <= e ? "" : `\n...\n(And ${o.length-1} more macro references)`;
            throw new Error(t + r)
          }
        }).then(() => i.remove(n, !0)).catch(e => {
          o.Modal.warn({
            title: "Failed to delete folder",
            content: e.message.split("\n").map(e => a.default.createElement("li", null, e)),
            okText: "OK"
          })
        })
      },
      macroMoveEntry: e => e => (t, r) => {
        const n = c.getStorageManager().getMacroStorage(),
          a = n.getPathLib();
        return P({
          dispatch: t,
          getNewFilePath: t => {
            const r = a.basename(e.entryId),
              o = n.dirPath(e.entryId),
              i = a.relative(t, o);
            return a.join(e.dirId, r, i)
          },
          run: () => n.move(e.entryId, e.dirId, e.isSourceDirectory, !0),
          entryPath: e.entryId,
          isDirectory: e.isSourceDirectory
        }).catch(e => {
          o.message.error(e.message)
        })
      },
      macroRenameFolder: e => e => (t, r) => {
        const {
          dir: n
        } = e, a = c.getStorageManager().getMacroStorage(), i = a.getPathLib(), s = a.dirPath(n), l = i.basename(s), m = i.dirname(s);
        return u.prompt({
          width: 400,
          title: "Rename the folder as..",
          message: "",
          value: l,
          placeholder: "Folder name",
          selectionStart: 0,
          selectionEnd: l.length,
          okText: "Rename",
          cancelText: "Cancel",
          onCancel: () => Promise.resolve(!0),
          onOk: e => {
            const n = i.join(m, v.sanitizeFileName(e));
            return a.directoryExists(n).then(c => {
              if (c) {
                const t = `'${e}' already exists`;
                throw o.message.error(t), new Error(t)
              }
              return P({
                dispatch: t,
                isDirectory: !0,
                entryPath: s,
                getNewFilePath: e => {
                  const t = i.relative(e, s);
                  return i.join(n, t)
                },
                run: () => a.moveDirectory(s, n).then(() => {
                  o.message.success(`Renamed to '${e}'`), I({
                    getState: r,
                    dispatch: t,
                    fullPath: n,
                    switchToIt: !1,
                    message: "Folder renamed"
                  })
                }, e => {
                  d.default.error(e);
                  const t = "Failed to rename: " + e.message;
                  throw o.message.error(t), new Error(t)
                })
              }).then(() => !0)
            })
          }
        })
      },
      macroCreateFile: e => e => (t, r) => {
        const {
          dir: n
        } = e, a = c.getStorageManager().getMacroStorage(), i = a.getPathLib();
        return u.prompt({
          width: 400,
          title: "Create new macro as..",
          message: "",
          value: "",
          placeholder: "Macro name",
          selectionStart: 0,
          selectionEnd: 0,
          okText: "Confirm",
          cancelText: "Cancel",
          onCancel: () => Promise.resolve(!0),
          onOk: e => {
            const s = i.join(n, `${v.sanitizeFileName(e)}.json`),
              c = a.filePath(s);
            return a.fileExists(c).then(n => {
              if (n) {
                const t = `'${e}' already exists`;
                throw o.message.error(t), new Error(t)
              }
              return a.write(s, {
                name: e,
                data: {
                  commands: []
                }
              }).then(() => (o.message.success(`Created macro '${e}'`), I({
                getState: r,
                dispatch: t,
                fullPath: c,
                message: "New macro created"
              }), !0), e => {
                d.default.error(e);
                const t = "Failed to create macro: " + e.message;
                throw o.message.error(t), new Error(t)
              })
            })
          }
        })
      },
      ensureTreeNodeUnfoldedForCurrentMacroNode: e => e => {
        const t = Object.assign({
          scrollIntoView: !0
        }, e || {});
        return (e, r) => {
          const n = r(),
            a = p.getCurrentMacroId(n),
            o = p.getMacrosExtra(n),
            c = p.getMacroFileNodeData(n),
            u = s.ancestorsInNodesList(e => e.id === a, c),
            d = () => {
              t.scrollIntoView && setTimeout(() => {
                const e = s.normalizeHtmlId(a),
                  t = document.getElementById(e);
                t && i.default(t, {
                  behavior: "smooth",
                  block: "nearest"
                })
              }, 100)
            };
          if (!u || !u.length) return d();
          const h = u.map(e => s.safeUpdateIn([e.id], e => Object.assign(Object.assign({}, e || {}), {
              folded: !1
            }))),
            f = l.compose(...h)(o);
          e(m.setMacrosExtra(f, {
            shouldPersist: !0
          })), d()
        }
      },
      updateMacroIdsInTestSuites: e => e => (r, n) => {
        const a = n(),
          o = p.getTestSuitesWithAllInfo(a);
        Object.keys(e).forEach(n => {
          const a = e[n];
          o.forEach(e => {
            const o = e.cases.reduce((e, t, r) => (t.testCaseId === n && e.push(r), e), []);
            if (0 === o.length) return;
            const i = l.compose(...o.map(e => s.setIn([e, "testCaseId"], a)))(e.cases);
            r(t.Actions.updateTestSuite(e.id, {
              cases: i
            }))
          })
        })
      },
      updateTestSuite: e => (t, r) => (n, a) => {
        const o = a(),
          i = p.getTestSuitesWithAllInfo(o),
          s = i.find(e => e.id === t);
        if (!s) return;
        const l = "function" == typeof r ? r(s) : r,
          u = l.name && s.name !== l.name;
        if (u) {
          if (!!i.find(e => e.id !== t && e.name === l.name)) return Promise.reject(new Error(`The test suite name '${l.name}' already exists!`))
        }
        const d = Object.assign(Object.assign({}, s), l),
          m = c.getStorageManager().getTestSuiteStorage(),
          h = u ? l.name : s.name,
          v = u ? m.rename(s.name, l.name) : Promise.resolve(),
          y = u && c.getStorageManager().isXFileMode() ? f.getTestSuiteExtraKeyValueData().set(t, {
            fold: !1,
            playStatus: {}
          }) : f.getTestSuiteExtraKeyValueData().set(t, {
            fold: d.fold,
            playStatus: d.playStatus || {}
          });
        return n({
          type: e,
          data: {
            id: t,
            updated: g.normalizeTestSuite(d)
          }
        }), u && c.getStorageManager().isXFileMode() ? n({
          type: "UPDATE_TEST_SUITE_STATUS",
          data: {
            id: t,
            extra: {
              fold: !1,
              playStatus: {}
            }
          }
        }) : n({
          type: "UPDATE_TEST_SUITE_STATUS",
          data: {
            id: t,
            extra: {
              fold: d.fold,
              playStatus: d.playStatus || {}
            }
          }
        }), Promise.all([v, y]).then(() => m.write(h, d))
      },
      renameTestCase: e => (t, r) => (n, a) => {
        const o = c.getStorageManager().getMacroStorage(),
          i = o.getPathLib(),
          s = a().editor.editing.meta.src.id,
          l = o.filePath(i.join(i.dirname(r), v.sanitizeFileName(t)));
        return o.fileExists(r).then(e => {
          if (!e) throw new Error(`No macro found with id '${r}'!`);
          return o.fileExists(l).then(e => {
            if (e) throw new Error("The macro name already exists!")
          })
        }).then(() => (c.getStorageManager().isXFileMode() && n(m.updateMacroPlayStatus(r, null)), P({
          dispatch: n,
          entryPath: r,
          isDirectory: !1,
          getNewFilePath: e => l,
          run: () => c.getStorageManager().getMacroStorage().rename(r, l).then(() => {
            s === r && n({
              type: e,
              data: t,
              post: m.saveEditing
            })
          })
        }).then(() => {
          s === r && n(m.editTestCase(l)), I({
            getState: a,
            dispatch: n,
            fullPath: l,
            switchToIt: !1,
            message: "Macro renamed"
          })
        })))
      },
      duplicateTestCase: e => e => (t, r) => {
        const n = c.getStorageManager().getMacroStorage(),
          a = n.getPathLib(),
          i = a.dirname(e.fullPath),
          s = e => a.join(i, `${e}.json`);
        return v.uniqueName(e.name, {
          generate: (e, t = 1) => {
            const r = /-(\d+)$/;
            return e.match(r) ? e.replace(r, (e, r) => `-${parseInt(r,10)+t}`) : `${e}-${t}`
          },
          check: e => n.fileExists(s(e)).then(e => !e)
        }).then(a => u.prompt({
          width: 400,
          title: "Duplicate macro as..",
          message: "",
          value: a,
          placeholder: "Macro name",
          selectionStart: 0,
          selectionEnd: a.length,
          okText: "Duplicate",
          cancelText: "Cancel",
          onCancel: () => Promise.resolve(!0),
          onOk: a => {
            const i = n.filePath(s(v.sanitizeFileName(a)));
            return n.fileExists(i).then(s => {
              if (s) {
                const e = `'${a}' already exists`;
                throw o.message.error(e), new Error(e)
              }
              return n.copy(e.fullPath, i, !1, !1).then(() => (o.message.success(`Successfully duplicated as '${a}'`), I({
                getState: r,
                dispatch: t,
                fullPath: i,
                message: "Macro duplicated"
              }), !0), e => {
                d.default.error(e);
                const t = "Failed to duplicate macro: " + e.message;
                throw o.message.error(t), new Error(t)
              })
            })
          }
        }))
      },
      selectInitialMacro: e => e => (t, r) => {
        const n = (() => {
          switch (e) {
            case c.StorageStrategyType.Browser:
              return E.MiscKey.BrowserModeLastMacroId;
            case c.StorageStrategyType.XFile:
              return E.MiscKey.XFileModeLastMacroId;
            default:
              throw new Error(`Invalid mode: ${e}`)
          }
        })();
        return E.getMiscData().get(n).then(e => {
          const t = r(),
            a = e ? p.findMacroNodeWithCaseInsensitiveFullPath(t, e) : null;
          if (d.default("selectInitialMacro", n, e, a, t), a) return e;
          const o = p.getMacroFolderNodeList(t),
            i = s.findNodeInForest(e => e.isFile, o);
          return i ? i.fullPath : null
        }).then(e => {
          t(e ? m.editTestCase(e) : m.editNewTestCase())
        })
      },
      editMacroByOffset: e => e => (r, n) => {
        const a = n();
        if (a.ui.isSaving) return;
        const o = p.getFilteredMacroFileNodeData(a),
          i = p.getCurrentMacroId(a);
        if (i === x.UNTITLED_ID) return;
        const c = s.nodeByOffset({
          offset: e,
          tree: o,
          isTargetQualified: e => e.id === i,
          isCandidateQualified: e => e.type === h.FileNodeType.File
        });
        return c ? r(m.editTestCase(c.id)).then(() => {
          r(t.Actions.ensureTreeNodeUnfoldedForCurrentMacroNode({
            scrollIntoView: !0
          }))
        }) : void 0
      },
      setMacroQuery: e => t => A(e, t),
      setIndexToInsertRecorded: e => t => A(e, t),
      toggleRecorderSkipOpen: e => t => A(e, t),
      scrollToCommandAtIndex: e => e => () => {
        const t = document.querySelector(".table-wrapper"),
          r = O.default.ui.commandItemHeight;
        if (!t) return;
        const n = t.clientHeight,
          a = t.scrollTop,
          o = r * (e + 3) > a + n;
        r * e < a ? t.scrollTop = r * e : o && (t.scrollTop = r * (e + 3) - n)
      },
      gotoLineInMacro: e => (e, r) => (n, a) => {
        const o = a(),
          i = p.getCurrentMacroId(o);
        (e === i ? () => Promise.resolve(!0) : () => S.default({
          dispatch: n,
          getState: a
        }).saveOrNot({
          cancelText: "Cancel"
        }))().then(a => {
          if (a) return Promise.resolve(n(m.editTestCase(e))).then(() => {
            n(m.selectCommand(r, !0)), n(t.Actions.scrollToCommandAtIndex(r))
          })
        }).catch(e => {
          d.default.warn(e)
        })
      },
      downloadMacroAsJson: e => e => (r, n) => c.getStorageManager().getMacroStorage().read(e, "Text").then(a => {
        const o = a,
          i = () => {
            const e = b.toJSONString({
                name: o.name,
                commands: o.data.commands
              }, {
                ignoreTargetOptions: p.getShouldSaveAlternativeLocators(n())
              }),
              t = new Blob([e], {
                type: "text/plain;charset=utf-8"
              });
            C.default.saveAs(t, `${o.name}.json`, !0)
          };
        return (() => {
          const e = o.data.commands.filter(e => {
              var t;
              return !!T.canCommandReadImage(e.cmd) && (null === (t = T.parseImageTarget(e.target)) || void 0 === t ? void 0 : t.fileName)
            }),
            t = o.data.commands.filter(e => T.canCommandReadCsv(e.cmd)),
            r = o.data.commands.filter(e => T.canCommandRunMacro(e.cmd));
          return 0 !== e.length || 0 !== t.length || 0 !== r.length
        })() ? u.prompt({
          width: 400,
          title: "Export as zip instead?",
          message: "This macro contains images/csv.\nDo you want to use the ZIP export option instead?",
          noInput: !0,
          closable: !1,
          okText: "ZIP",
          cancelText: "JSON",
          onCancel: () => (i(), Promise.resolve(!0)),
          onOk: () => (r(t.Actions.downloadMacroAsZip(e)), Promise.resolve(!0))
        }).then(() => {}) : i()
      }),
      downloadMacroAsHTML: e => e => (t, r) => c.getStorageManager().getMacroStorage().read(e, "Text").then(e => {
        const t = e,
          r = b.toHtml({
            name: t.name,
            commands: t.data.commands
          }),
          n = new Blob([r], {
            type: "text/plain;charset=utf-8"
          });
        C.default.saveAs(n, `${t.name}.html`, !0)
      }),
      downloadMacroAsZip: e => e => (t, r) => {
        const n = new _.default,
          a = e => t(m.addLog("warning", e)),
          o = {},
          i = {},
          l = {},
          u = (e, t) => {
            const d = c.getStorageManager().getMacroStorage(),
              m = d.getPathLib();
            return d.read(e, "Text").then(h => {
              const f = h,
                g = s.clone(f),
                v = f.data.commands.filter(e => T.canCommandReadImage(e.cmd)),
                y = f.data.commands.filter(e => T.canCommandReadCsv(e.cmd)),
                w = [];
              f.data.commands.forEach((e, t) => {
                T.canCommandRunMacro(e.cmd) && (w.push(e), g.data.commands[t].target = m.basename(e.target))
              }), Promise.all([...v.map(e => {
                var t;
                const r = null === (t = T.parseImageTarget(e.target)) || void 0 === t ? void 0 : t.fileName;
                return !r || o[r] ? Promise.resolve() : (o[r] = !0, c.getStorageManager().getVisionStorage().read(r, "ArrayBuffer").then(e => {
                  n.file(r, e, {
                    binary: !0
                  })
                }).catch(e => {
                  a(`Failed to add ${r} into zip: ${e.message}`)
                }))
              }), ...y.map(e => {
                const t = e.target;
                return !t || i[t] ? Promise.resolve() : (i[t] = !0, c.getStorageManager().getCSVStorage().read(t, "Text").then(e => {
                  n.file(t, e)
                }).catch(e => {
                  a(`Failed to add ${t} into zip: ${e.message}`)
                }))
              }), ...w.map(t => {
                const n = s.resolvePath(d.getPathLib(), d.relativePath(e), t.target),
                  a = p.findMacroNodeWithCaseInsensitiveRelativePath(r(), n),
                  o = a ? a.fullPath : n;
                return l[o] ? Promise.resolve() : u(o, !0)
              })]).then(() => {
                if (n.file(g.name + ".json", b.toJSONString({
                    name: g.name,
                    commands: g.data.commands
                  })), !t) return n.generateAsync({
                  type: "blob"
                }).then(e => C.default.saveAs(e, `${g.name}.zip`))
              })
            })
          };
        return u(e).catch(e => {
          a(`Failed to save zip file: ${e.message}`)
        })
      },
      readFilesAndImportTestCases: e => e => {
        const {
          type: t,
          process: r,
          folder: n,
          files: a
        } = e;
        return (e, i) => {
          const l = Array.from(a);
          if (!l || !l.length) return;
          const u = (e, t, r, n) => {
            const a = "text" === r ? new Blob([n]) : n;
            return e.fileExists(t).then(r => r ? {
              error: `${t} already exists`
            } : e.write(t, a).then(() => ({
              fileName: t
            })).catch(e => ({
              error: `Failed to save ${t}: ${e.message}`
            })))
          };
          Promise.all(l.map(e => new Promise((n, a) => {
            const o = new FileReader;
            switch (o.onload = t => {
              var a;
              const o = null === (a = t.target) || void 0 === a ? void 0 : a.result;
              new Promise(t => t(r(o, e.name, e))).then(t => {
                if (!t || !t.macros.length) return n({
                  err: new Error("Failed to parse macro"),
                  fileName: e.name
                });
                const {
                  macros: r,
                  images: a = [],
                  csvs: o = []
                } = t;
                n({
                  data: {
                    macros: r,
                    images: a,
                    csvs: o
                  }
                })
              }).catch(t => {
                n({
                  err: t,
                  fileName: e.name
                })
              })
            }, t) {
              case "text":
                return o.readAsText(e);
              case "data_url":
                return o.readAsDataURL(e);
              case "binary_string":
                return o.readAsBinaryString(e);
              case "array_buffer":
                return o.readAsArrayBuffer(e)
            }
          }))).then(t => {
            const r = t.filter(e => e.data),
              a = t.filter(e => e.err);
            return Promise.all(r.map(e => (e => Promise.all([Promise.all(e.csvs.map(e => u(c.getStorageManager().getCSVStorage(), e.fileName, "text", e.content))), Promise.all(e.images.map(e => u(c.getStorageManager().getVisionStorage(), e.fileName, "blob", e.content)))]).then(t => {
              const [r, n] = t;
              return Promise.resolve({
                macros: e.macros,
                csvImported: r.filter(e => e.fileName).map(e => e.fileName),
                pngImported: n.filter(e => e.fileName).map(e => e.fileName),
                errors: [...r.filter(e => e.error).map(e => e.error), ...n.filter(e => e.error).map(e => e.error)]
              })
            }))(e.data))).then(t => e(m.addTestCases({
              folder: n,
              macros: s.flatten(r.map(e => e.data.macros))
            })).then(({
              passCount: r,
              failCount: n,
              failTcs: i
            }) => {
              o.message.info([`${r} macro${r>1?"s":""} imported!`, `${a.length+n} macro${a.length+n>1?"s":""} failed!`].join(", "), 3), a.forEach(t => {
                e(m.addLog("error", `in parsing ${t.fileName}: ${t.err.message}`))
              }), i.forEach(t => {
                e(m.addLog("error", `duplicated macro name: ${t.name}`, {
                  noStack: !0
                }))
              });
              const c = s.flatten(t.map(e => e.csvImported)),
                l = s.flatten(t.map(e => e.pngImported)),
                u = s.flatten(t.map(e => e.errors)),
                d = s.flatten(t.map(e => e.macros)).filter(e => !i.find(t => t.name == e.name)).map(e => e.name);
              d.length > 0 && e(m.addLog("info", `${d.length} ${d.length>1?"macros":"macro"} imported:\n${d.join("\n")}`)), c.length > 0 && (e(m.addLog("info", `${c.length} CSV imported:\n${c.join("\n")}`)), e(m.listCSV())), l.length > 0 && (e(m.addLog("info", `${l.length} PNG imported:\n${l.join("\n")}`)), e(m.listVisions())), u.length > 0 && e(m.addLog("error", `${u.length} ${u.length>1?"errors":"error"} in importing csv/png:\n${u.join("\n")}`))
            })).catch(t => {
              e(m.addLog("error", t.message, {
                noStack: !0
              }))
            })
          })
        }
      },
      importMacroHtml: e => (e, r) => (n, a) => {
        n(t.Actions.readFilesAndImportTestCases({
          folder: r,
          files: e,
          process: (e, t) => ({
            macros: [b.fromHtml(e)],
            csvs: [],
            images: []
          }),
          type: "text"
        }))
      },
      importMacroJsonOrZipFiles: e => (e, r) => (n, a) => {
        n(t.Actions.readFilesAndImportTestCases({
          files: e,
          folder: r,
          process: (e, t, r) => {
            if (/.json$/i.test(t)) {
              const r = v.arrayBufferToString(e);
              return Promise.resolve({
                macros: [b.fromJSONString(r, t)],
                csvs: [],
                images: []
              })
            }
            return _.default.loadAsync(e).then(e => {
              const t = [],
                r = [],
                n = [];
              if (e.forEach((e, a) => {
                  switch (s.getExtName(e).toLowerCase()) {
                    case ".csv":
                      r.push(a.async("text").then(t => ({
                        content: t,
                        fileName: e
                      })));
                      break;
                    case ".png":
                      n.push(a.async("blob").then(t => ({
                        content: t,
                        fileName: e
                      })));
                      break;
                    case ".json":
                      t.push(a.async("text").then(t => ({
                        content: t,
                        fileName: e
                      })))
                  }
                }), 0 === t.length) throw new Error("No json file found in zip");
              return Promise.all([Promise.all(t), Promise.all(r), Promise.all(n)]).then(e => ({
                macros: e[0].map(e => b.fromJSONString(e.content, e.fileName)),
                csvs: e[1],
                images: e[2]
              }))
            })
          },
          type: "array_buffer"
        }))
      }
    }, t.ActionTypes = s.objMap((e, t) => t, t.ActionFactories), t.Actions = s.objMap((e, r, n) => e(t.ActionTypes[r]), t.ActionFactories), t.createAction = A, t.createThunkAction = R
  },
  417: function(e, t, r) {
    var n = {
      "./af": 190,
      "./af.js": 190,
      "./ar": 191,
      "./ar-dz": 192,
      "./ar-dz.js": 192,
      "./ar-kw": 193,
      "./ar-kw.js": 193,
      "./ar-ly": 194,
      "./ar-ly.js": 194,
      "./ar-ma": 195,
      "./ar-ma.js": 195,
      "./ar-sa": 196,
      "./ar-sa.js": 196,
      "./ar-tn": 197,
      "./ar-tn.js": 197,
      "./ar.js": 191,
      "./az": 198,
      "./az.js": 198,
      "./be": 199,
      "./be.js": 199,
      "./bg": 200,
      "./bg.js": 200,
      "./bm": 201,
      "./bm.js": 201,
      "./bn": 202,
      "./bn.js": 202,
      "./bo": 203,
      "./bo.js": 203,
      "./br": 204,
      "./br.js": 204,
      "./bs": 205,
      "./bs.js": 205,
      "./ca": 206,
      "./ca.js": 206,
      "./cs": 207,
      "./cs.js": 207,
      "./cv": 208,
      "./cv.js": 208,
      "./cy": 209,
      "./cy.js": 209,
      "./da": 210,
      "./da.js": 210,
      "./de": 211,
      "./de-at": 212,
      "./de-at.js": 212,
      "./de-ch": 213,
      "./de-ch.js": 213,
      "./de.js": 211,
      "./dv": 214,
      "./dv.js": 214,
      "./el": 215,
      "./el.js": 215,
      "./en-au": 216,
      "./en-au.js": 216,
      "./en-ca": 217,
      "./en-ca.js": 217,
      "./en-gb": 218,
      "./en-gb.js": 218,
      "./en-ie": 219,
      "./en-ie.js": 219,
      "./en-nz": 220,
      "./en-nz.js": 220,
      "./eo": 221,
      "./eo.js": 221,
      "./es": 222,
      "./es-do": 223,
      "./es-do.js": 223,
      "./es-us": 224,
      "./es-us.js": 224,
      "./es.js": 222,
      "./et": 225,
      "./et.js": 225,
      "./eu": 226,
      "./eu.js": 226,
      "./fa": 227,
      "./fa.js": 227,
      "./fi": 228,
      "./fi.js": 228,
      "./fo": 229,
      "./fo.js": 229,
      "./fr": 230,
      "./fr-ca": 231,
      "./fr-ca.js": 231,
      "./fr-ch": 232,
      "./fr-ch.js": 232,
      "./fr.js": 230,
      "./fy": 233,
      "./fy.js": 233,
      "./gd": 234,
      "./gd.js": 234,
      "./gl": 235,
      "./gl.js": 235,
      "./gom-latn": 236,
      "./gom-latn.js": 236,
      "./gu": 237,
      "./gu.js": 237,
      "./he": 238,
      "./he.js": 238,
      "./hi": 239,
      "./hi.js": 239,
      "./hr": 240,
      "./hr.js": 240,
      "./hu": 241,
      "./hu.js": 241,
      "./hy-am": 242,
      "./hy-am.js": 242,
      "./id": 243,
      "./id.js": 243,
      "./is": 244,
      "./is.js": 244,
      "./it": 245,
      "./it.js": 245,
      "./ja": 246,
      "./ja.js": 246,
      "./jv": 247,
      "./jv.js": 247,
      "./ka": 248,
      "./ka.js": 248,
      "./kk": 249,
      "./kk.js": 249,
      "./km": 250,
      "./km.js": 250,
      "./kn": 251,
      "./kn.js": 251,
      "./ko": 252,
      "./ko.js": 252,
      "./ky": 253,
      "./ky.js": 253,
      "./lb": 254,
      "./lb.js": 254,
      "./lo": 255,
      "./lo.js": 255,
      "./lt": 256,
      "./lt.js": 256,
      "./lv": 257,
      "./lv.js": 257,
      "./me": 258,
      "./me.js": 258,
      "./mi": 259,
      "./mi.js": 259,
      "./mk": 260,
      "./mk.js": 260,
      "./ml": 261,
      "./ml.js": 261,
      "./mr": 262,
      "./mr.js": 262,
      "./ms": 263,
      "./ms-my": 264,
      "./ms-my.js": 264,
      "./ms.js": 263,
      "./mt": 265,
      "./mt.js": 265,
      "./my": 266,
      "./my.js": 266,
      "./nb": 267,
      "./nb.js": 267,
      "./ne": 268,
      "./ne.js": 268,
      "./nl": 269,
      "./nl-be": 270,
      "./nl-be.js": 270,
      "./nl.js": 269,
      "./nn": 271,
      "./nn.js": 271,
      "./pa-in": 272,
      "./pa-in.js": 272,
      "./pl": 273,
      "./pl.js": 273,
      "./pt": 274,
      "./pt-br": 275,
      "./pt-br.js": 275,
      "./pt.js": 274,
      "./ro": 276,
      "./ro.js": 276,
      "./ru": 277,
      "./ru.js": 277,
      "./sd": 278,
      "./sd.js": 278,
      "./se": 279,
      "./se.js": 279,
      "./si": 280,
      "./si.js": 280,
      "./sk": 281,
      "./sk.js": 281,
      "./sl": 282,
      "./sl.js": 282,
      "./sq": 283,
      "./sq.js": 283,
      "./sr": 284,
      "./sr-cyrl": 285,
      "./sr-cyrl.js": 285,
      "./sr.js": 284,
      "./ss": 286,
      "./ss.js": 286,
      "./sv": 287,
      "./sv.js": 287,
      "./sw": 288,
      "./sw.js": 288,
      "./ta": 289,
      "./ta.js": 289,
      "./te": 290,
      "./te.js": 290,
      "./tet": 291,
      "./tet.js": 291,
      "./th": 292,
      "./th.js": 292,
      "./tl-ph": 293,
      "./tl-ph.js": 293,
      "./tlh": 294,
      "./tlh.js": 294,
      "./tr": 295,
      "./tr.js": 295,
      "./tzl": 296,
      "./tzl.js": 296,
      "./tzm": 297,
      "./tzm-latn": 298,
      "./tzm-latn.js": 298,
      "./tzm.js": 297,
      "./uk": 299,
      "./uk.js": 299,
      "./ur": 300,
      "./ur.js": 300,
      "./uz": 301,
      "./uz-latn": 302,
      "./uz-latn.js": 302,
      "./uz.js": 301,
      "./vi": 303,
      "./vi.js": 303,
      "./x-pseudo": 304,
      "./x-pseudo.js": 304,
      "./yo": 305,
      "./yo.js": 305,
      "./zh-cn": 161,
      "./zh-cn.js": 161,
      "./zh-hk": 306,
      "./zh-hk.js": 306,
      "./zh-tw": 307,
      "./zh-tw.js": 307
    };

    function a(e) {
      var t = o(e);
      return r(t)
    }

    function o(e) {
      if (!r.o(n, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t
      }
      return n[e]
    }
    a.keys = function() {
      return Object.keys(n)
    }, a.resolve = o, e.exports = a, a.id = 417
  },
  43: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.availableCommands = (() => {
      const e = ["open", "click", "clickAndWait", "select", "selectAndWait", "addSelection", "removeSelection", "type", "pause", "waitForPageToLoad", "selectFrame", "assertAlert", "assertConfirmation", "assertPrompt", "answerOnNextPrompt", "store", "storeText", "storeTitle", "storeAttribute", "storeXpathCount", "assertText", "assertTitle", "clickAt", "echo", "mouseOver", "verifyText", "verifyTitle", "sendKeys", "dragAndDropToObject", "selectWindow", "captureScreenshot", "captureDesktopScreenshot", "refresh", "assertElementPresent", "assertElementNotPresent", "assertEditable", "assertNotEditable", "verifyElementPresent", "verifyElementNotPresent", "verifyEditable", "verifyNotEditable", "deleteAllCookies", "label", "gotoLabel", "csvRead", "csvReadArray", "csvSave", "csvSaveArray", "storeValue", "assertValue", "verifyValue", "storeChecked", "captureEntirePageScreenshot", "onDownload", "throwError", "comment", "waitForElementVisible", "waitForElementNotVisible", "waitForElementPresent", "waitForElementNotPresent", "onError", "sourceSearch", "sourceExtract", "storeImage", "localStorageExport", "visionLimitSearchArea", "visionLimitSearchAreaRelative", "visualSearch", "visualVerify", "visualAssert", "editContent", "bringBrowserToForeground", "setWindowSize", "prompt", "XRun", "XRunAndWait", "XClick", "XClickRelative", "XType", "XMove", "XMoveRelative", "XDesktopAutomation", "OCRSearch", "OCRExtract", "OCRExtractRelative", "setProxy", "run", "executeScript", "executeScript_Sandbox", "check", "uncheck", "assertChecked", "assertNotChecked", "verifyChecked", "verifyNotChecked", "do", "repeatIf", "else", "elseif", "end", "if_v2", "while_v2", "gotoIf_v2", "times", "forEach"];
      return e.sort((e, t) => e.toLowerCase() < t.toLowerCase() ? -1 : 1), e
    })(), t.normalizeCommandName = function(e) {
      const r = e.toLowerCase(),
        n = t.availableCommands.map(e => e.toLowerCase()).findIndex(e => e === r);
      return -1 === n ? e : t.availableCommands[n]
    }, t.commandText = function(e) {
      switch (e) {
        case "if":
        case "while":
        case "gotoIf":
          return e + "_v1_deprecated";
        case "storeEval":
        case "endif":
        case "endwhile":
        case "resize":
          return e + "_deprecated";
        default:
          return e
      }
    }, t.isValidCmd = function(e) {
      return -1 !== t.availableCommands.indexOf(e)
    }, t.isExtensionResourceOnlyCommand = function(e) {
      switch (e) {
        case "if":
        case "while":
        case "gotoIf":
        case "if_v2":
        case "while_v2":
        case "gotoIf_v2":
        case "executeScript_Sandbox":
        case "run":
        case "store":
        case "echo":
        case "prompt":
        case "throwError":
        case "pause":
        case "localStorageExport":
          return !0;
        default:
          return !1
      }
    }, t.canCommandReadImage = function(e) {
      switch (e) {
        case "visualSearch":
        case "visualVerify":
        case "visualAssert":
        case "XClick":
        case "XClickRelative":
        case "XMove":
        case "XMoveRelative":
          return !0;
        default:
          return !1
      }
    }, t.canCommandReadCsv = function(e) {
      switch (e) {
        case "csvRead":
        case "csvReadArray":
          return !0;
        default:
          return !1
      }
    }, t.canCommandRunMacro = function(e) {
      switch (e) {
        case "run":
          return !0;
        default:
          return !1
      }
    }, t.doesCommandSupportTargetOptions = function(e) {
      switch (e) {
        case "click":
        case "clickAndWait":
        case "select":
        case "selectAndWait":
        case "type":
        case "mouseOver":
        case "verifyText":
        case "sendKeys":
        case "dragAndDropToObject":
        case "assertElementPresent":
        case "assertEditable":
        case "assertNotEditable":
        case "verifyElementPresent":
        case "verifyEditable":
        case "verifyNotEditable":
        case "storeValue":
        case "assertValue":
        case "verifyValue":
        case "storeChecked":
        case "waitForElementVisible":
        case "waitForElementPresent":
        case "XClick":
        case "XClickRelative":
        case "XMove":
        case "XMoveRelative":
        case "check":
        case "uncheck":
        case "assertChecked":
        case "assertNotChecked":
        case "verifyChecked":
        case "verifyNotChecked":
          return !0;
        default:
          return !1
      }
    }, t.indentCreatedByCommand = function(e) {
      switch (e) {
        case "if":
        case "if_v2":
        case "while":
        case "while_v2":
        case "do":
        case "times":
        case "forEach":
          return {
            selfIndent: 0, nextIndent: 1
          };
        case "else":
        case "elseif":
          return {
            selfIndent: -1, nextIndent: 1
          };
        case "end":
        case "endif":
        case "endwhile":
        case "repeatIf":
          return {
            selfIndent: -1, nextIndent: 0
          };
        default:
          return {
            selfIndent: 0, nextIndent: 0
          }
      }
    }, t.parseImageTarget = function(e) {
      if (!e || !e.length) return null;
      const t = e.match(/^([^@#]+?\.png)(?:@([\d.]+))?(?:#(\d+))?(?:\[([^\]]+)\])?$/);
      return t ? {
        fileName: t[1],
        confidence: t[2] ? parseFloat(t[2]) : void 0,
        index: t[3] ? parseInt(t[3]) - 1 : void 0,
        imageUrl: t[4]
      } : null
    }
  },
  453: function(e, t) {},
  47: function(e, t, r) {
    "use strict";
    r(11);
    var n = r(95),
      a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      o = function() {
        var e = Array.from(arguments),
          t = e.length;
        if (t <= 0) return {};
        if (1 === t) return e[0];
        var r = e[0],
          n = e.slice(1);
        return n.reduce((function(e, t) {
          for (var r = 0, n = Object.keys(t), a = n.length; r < a; r++) e[n[r]] = t[n[r]];
          return e
        }), r)
      },
      i = (Array.isArray, function(e) {
        return e
      }),
      s = function(e) {
        return (e || []).reduce((function(e, t) {
          return e && t
        }), !0)
      },
      c = function(e) {
        return -1 !== (e + "").indexOf("px") ? e : (e || 0) + "px"
      },
      l = function(e, t) {
        if (!e) throw new Error("getStyle: dom does not exist");
        return getComputedStyle(e)[t]
      },
      u = function(e, t) {
        if (!e) throw new Error("setStyle: dom does not exist");
        for (var r = 0, n = Object.keys(t), a = n.length; r < a; r++) e.style[n[r]] = t[n[r]];
        return e
      },
      d = function(e, t) {
        var r = "inline" === l(e, "display");
        return t.reduce((function(t, n) {
          var a = r && -1 !== ["width", "height"].indexOf(n) ? e.getClientRects()[0][n] : l(e, n);
          return t + parseInt(a || "0", 10)
        }), 0)
      },
      m = function(e, t) {
        if (!e) return {
          left: 0,
          top: 0
        };
        var r = e.getBoundingClientRect(),
          n = t ? i : c;
        return {
          left: n(r.left + window.scrollX),
          top: n(r.top + window.scrollY)
        }
      },
      p = function e(t, r) {
        return !!r && (t === r || e(t, r.parentNode))
      },
      h = function e(t) {
        if (1 !== t.nodeType) return "";
        if ("BODY" === t.tagName) return "body";
        if (t.id) return "#" + t.id;
        var r = (t.getAttribute("class") || "").split(/\s+/g).filter((function(e) {
            return e && e.length
          })),
          n = Array.from(t.parentNode.childNodes).filter((function(e) {
            return 1 === e.nodeType
          })),
          a = n.filter((function(e) {
            return e.tagName === t.tagName
          })),
          o = n.filter((function(e) {
            var t = (e.getAttribute("class") || "").split(/\s+/g);
            return s(r.map((function(e) {
              return -1 !== t.indexOf(e)
            })))
          })),
          i = "";
        i = 1 === a.length ? "" : r.length && 1 === o.length ? "." + r.join(".") : ":nth-child(" + (1 + n.findIndex((function(e) {
          return e === t
        }))) + ")";
        var c = t.tagName.toLowerCase() + i;
        return e(t.parentNode) + " > " + c
      },
      f = function(e) {
        if (!e) return null;
        if (3 === e.nodeType) return "@text";
        var t = function(e) {
            return Array.from(e.parentNode.childNodes).filter((function(t) {
              return t.nodeType === e.nodeType && t.tagName === e.tagName
            })).reduce((function(t, r, n) {
              return null !== t ? t : r === e ? n + 1 : t
            }), null)
          }(e),
          r = (Array.from(e.parentNode.childNodes).filter((function(t) {
            return t.nodeType === e.nodeType && t.tagName === e.tagName
          })).length, e.tagName.toLowerCase());
        return t > 1 ? r + "[" + t + "]" : r
      },
      g = function(e, t, r) {
        var n = function e(t, r, n) {
          return t ? r ? r.parentNode ? "BODY" === r.tagName ? ["html", "body"].concat(n) : r.id ? ['*[@id="' + r.id + '"]'].concat(n) : e(t, r.parentNode, [f(r)].concat(n)) : ["html"].concat(n) : 3 === t.nodeType ? e(t.parentNode) : e(t, t, []) : null
        }(e, t, r);
        return ("html" === n[0] ? "/" : "//") + n.join("/")
      },
      v = function(e) {
        if (e.indexOf("'") < 0) return "'" + e + "'";
        if (e.indexOf('"') < 0) return '"' + e + '"';
        for (var t = "concat(", r = "", n = !1; !n;) {
          var a = e.indexOf("'"),
            o = e.indexOf('"');
          if (a < 0) {
            t += "'" + e + "'", n = !0;
            break
          }
          if (o < 0) {
            t += '"' + e + '"', n = !0;
            break
          }
          o < a ? (t += "'" + (r = e.substring(0, a)) + "'", e = e.substring(r.length)) : (t += '"' + (r = e.substring(0, o)) + '"', e = e.substring(r.length)), t += ","
        }
        return t += ")"
      },
      y = function(e) {
        var t = e.innerText && e.innerText.trim(),
          r = e.textContent,
          n = r.toUpperCase().indexOf(t.toUpperCase());
        return r.substr(n, t.length)
      },
      b = function(e, t) {
        var r = e.getAttribute("id"),
          o = e.getAttribute("name"),
          i = "a" === e.tagName.toLowerCase(),
          s = function() {
            try {
              return y(e)
            } catch (e) {
              return null
            }
          }(),
          c = (Array.from(e.classList), []);
        if (i && s && s.length) {
          var l = [].slice.call(document.getElementsByTagName("a")).filter((function(e) {
            return y(e) === s
          })).findIndex((function(t) {
            return t === e
          })); - 1 !== l && c.push(0 === l ? "linkText=" + s : "linkText=" + s + "@POS=" + (l + 1))
        }
        r && r.length && c.push("id=" + r), o && o.length && c.push("name=" + o), c.push("xpath=" + g(e));
        var u = function(e) {
          function t(e, t, r) {
            for (var n = "//" + e + "[", a = 0; a < t.length; a++) {
              a > 0 && (n += " and ");
              var o = t[a];
              n += "@" + o + "=" + v(r[o])
            }
            return n += "]"
          }
          try {
            var r = ["id", "name", "value", "type", "action", "onclick"],
              a = 0;
            if (e.attributes) {
              var o = e.attributes,
                i = {};
              for (a = 0; a < o.length; a++) {
                var s = o[a];
                i[s.name] = s.value
              }
              var c = [];
              for (a = 0; a < r.length; a++) {
                var l = r[a];
                if (null != i[l]) {
                  c.push(l);
                  var u = t(e.nodeName.toLowerCase(), c, i);
                  if (e === Object(n.b)(u)) return u
                }
              }
            }
          } catch (e) {}
          return null
        }(e);
        u && c.push("xpath=" + u);
        var d = function(e) {
          var t = "",
            r = e;
          try {
            for (; null !== r;) {
              var a = "/" + (t = (null != r.parentNode ? "/" + f(r) : "BODY" === r.tagName ? "html/body" : "/" + r.nodeName.toLowerCase()) + t);
              if (e === Object(n.b)(a)) return a;
              r = r.parentNode
            }
          } catch (e) {}
          return null
        }(e);
        d && c.push("xpath=" + d), c.push("css=" + h(e));
        var m = function(e, t) {
          for (var r = function(r, a) {
              var o = function() {
                try {
                  return Object(n.a)(e[r])
                } catch (e) {
                  return null
                }
              }();
              if (t === o) return {
                v: e[r]
              }
            }, o = 0, i = e.length; o < i; o++) {
            var s = r(o);
            if ("object" === (void 0 === s ? "undefined" : a(s))) return s.v
          }
          return null
        }(c, e);
        return t ? {
          target: m,
          targetOptions: c
        } : m
      };
    t.a = {
      offset: m,
      setStyle: u,
      selector: h,
      xpath: g,
      atXPath: function(e, t) {
        var r = function(e) {
            return e && e.toLowerCase()
          },
          n = /^([a-zA-Z0-9]+)(\[(\d+)\])?$/;
        return e.reduce((function(e, t) {
          if (!e) return e;
          if (!e.childNodes || !e.childNodes.length) return null;
          var a = t.match(n),
            o = a[1],
            i = a[3] ? parseInt(a[3], 10) : 1;
          return Array.from(e.childNodes).filter((function(e) {
            return 1 === e.nodeType && r(e.tagName) === r(o)
          }))[i - 1]
        }), t)
      },
      domText: y,
      getLocator: b,
      getFrameLocator: function(e, t) {
        if (function(e) {
            var t = 1 * new Date + "" + Math.random();
            try {
              return e[t] = "asd", "asd" === e[t]
            } catch (e) {
              return !1
            }
          }(e)) {
          var r = e.frameElement,
            n = b(r);
          if (/^id=/.test(n) || /^name=/.test(n)) return n
        }
        for (var a = 0, o = t.frames.length; a < o; a++)
          if (t.frames[a] === e) return "index=" + a;
        throw new Error("Frame locator not found")
      },
      maskFactory: function() {
        var e = [],
          t = "__mask__" + 1 * new Date + Math.round(1e3 * Math.random()) + "__",
          r = 1,
          n = {
            position: "absolute",
            zIndex: "999",
            display: "none",
            boxSizing: "border-box",
            backgroundColor: "red",
            opacity: .5,
            pointerEvents: "none"
          };
        return {
          gen: function(a, s) {
            var d = document.createElement("div");
            return a = s ? o({}, n, a || {}, function(e, t) {
              var r = m(e, t),
                n = "inline" === l(e, "display"),
                a = n ? e.getClientRects()[0].width : l(e, "width"),
                s = n ? e.getClientRects()[0].height : l(e, "height"),
                u = t ? i : c;
              return o({
                width: u(a),
                height: u(s)
              }, r)
            }(s)) : o({}, n, a || {}), u(d, a), d.id = t + r++, e.push(d), d
          },
          clear: function() {
            for (var t = 0, r = e.length; t < r; t++) {
              var n = e[t];
              n && n.parentNode && n.parentNode.removeChild(n)
            }
          }
        }
      },
      showMaskOver: function(e, t) {
        var r = m(t),
          n = d(t, ["width", "paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"]),
          a = d(t, ["height", "paddingTop", "paddingBottom", "borderTopWidth", " borderBottomWidth"]);
        u(e, o(r, {
          width: c(n),
          height: c(a),
          display: "block"
        }))
      },
      inDom: p,
      isVisible: function e(t) {
        if (t === window.document) return !0;
        if (!t) return !0;
        var r = window.getComputedStyle(t);
        return "none" !== r.display && "0" !== r.opacity && "hidden" !== r.visibility && e(t.parentNode)
      },
      parentWithTag: function(e, t) {
        for (var r = e.toLowerCase(), n = t; n;) {
          if (n.tagName.toLowerCase() === r) return n;
          n = n.parentNode
        }
        return null
      },
      parentWithClass: function(e, t) {
        for (var r = t; r;) {
          if (void 0 !== r.classList && r.classList.contains(e)) return r;
          r = r.parentNode
        }
        return null
      }
    }
  },
  475: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(172);
    class a extends n.BaseProxyManager {
      constructor() {
        super(), this.isBound = !1
      }
      isSupported() {
        return "undefined" != typeof chrome && chrome.proxy && chrome.proxy.settings && chrome.proxy.settings.onChange
      }
      isControllable(e) {
        return new Promise((t, r) => {
          chrome.proxy.settings.get({
            incognito: !!e
          }, e => {
            if (chrome.runtime.lastError) return r(chrome.runtime.lastError);
            const {
              levelOfControl: n
            } = e, a = -1 !== ["controllable_by_this_extension", "controlled_by_this_extension"].indexOf(n);
            t(a)
          })
        })
      }
      setProxy(e) {
        return this.bindProxyChange(), this.proxy = e, new Promise((t, r) => {
          chrome.proxy.settings.set({
            value: {
              mode: "fixed_servers",
              rules: {
                singleProxy: {
                  scheme: e.type,
                  host: e.host,
                  port: parseInt(e.port, 10)
                }
              }
            }
          }, () => {
            if (chrome.runtime.lastError) return r(chrome.runtime.lastError);
            t()
          })
        })
      }
      reset() {
        return new Promise((e, t) => {
          chrome.proxy.settings.set({
            value: {
              mode: "direct"
            }
          }, () => {
            if (chrome.runtime.lastError) return t(chrome.runtime.lastError);
            e()
          })
        })
      }
      bindProxyChange() {
        this.isBound || (this.isBound = !0, chrome.proxy.settings.onChange.addListener(e => {
          const t = this.fromChromeDetails(e);
          this.setLocalProxyIfIsNew(t), this.registry.fire("change", t)
        }))
      }
      fetchProxyFromSettings() {
        return new Promise((e, t) => {
          chrome.proxy.settings.get({
            incognito: !1
          }, r => {
            if (chrome.runtime.lastError) return t(chrome.runtime.lastError);
            const n = this.fromChromeDetails(r);
            this.setLocalProxyIfIsNew(n), this.registry.fire("change", n), e()
          })
        })
      }
      fromChromeDetails(e) {
        if ("fixed_servers" !== e.value.mode || !e.value.rules || !e.value.rules.singleProxy) return null;
        const t = e.value.rules.singleProxy;
        return {
          host: t.host,
          port: "" + t.port,
          type: t.scheme
        }
      }
      setLocalProxyIfIsNew(e) {
        var t, r;
        (null == e ? void 0 : e.host) === (null === (t = this.proxy) || void 0 === t ? void 0 : t.host) && (null == e ? void 0 : e.port) === (null === (r = this.proxy) || void 0 === r ? void 0 : r.port) || (this.proxy = e)
      }
    }
    t.ProxyManagerViaSettingsAPI = a
  },
  476: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = r(172),
      o = r(345),
      i = n(r(21)),
      s = n(r(11)),
      c = r(13);
    class l extends a.BaseProxyManager {
      constructor() {
        super(), this.unbind = () => {}, this.isBound = !1
      }
      isSupported() {
        return "undefined" != typeof browser && browser.proxy && browser.proxy.register
      }
      isControllable() {
        return Promise.resolve(!0)
      }
      setProxy(e) {
        return this.bind(), this.proxy = e, this.notifyProxyChange(), browser.runtime.sendMessage({
          cmd: "SET_PROXY",
          data: e ? o.convertToFirefoxProxyInfo(e) : null
        }, {
          toProxyScript: !0
        }).then(() => c.delay(() => {}, 1e3))
      }
      reset() {
        return this.proxy = null, this.notifyProxyChange(), i.default.ask("PANEL_SET_PROXY_FOR_PAC", {
          proxy: null
        }).then(() => c.delay(() => {}, 1e3))
      }
      getAuth(e, t) {
        return this.proxy && this.proxy.username && this.proxy.host === e && this.proxy.port === t ? {
          username: this.proxy.username,
          password: this.proxy.password
        } : null
      }
      notifyProxyChange() {
        setTimeout(() => {
          this.registry.fire("change", this.proxy)
        }, 10)
      }
      bind() {
        if (this.isBound) return;
        this.isBound = !0;
        const e = e => {
          "PROXY_LOG" === e.type && s.default("PROXY_LOG", e)
        };
        browser.proxy.register("firefox_pac.js"), browser.runtime.onMessage.addListener(e), this.unbind = () => {
          browser.proxy.unregister(), browser.runtime.onMessage.removeListener(e)
        }
      }
    }
    t.ProxyManagerViaPacAPI = l
  },
  477: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(10));
    t.ProxyHttpAuth = class {
      constructor(e) {
        this.unbindListener = () => {}, this.bound = !1, this.getAuth = e.getAuth
      }
      bind() {
        if (this.bound) return;
        this.bound = !0;
        const e = this.onAuthRequired.bind(this);
        a.default.webRequest.onAuthRequired.addListener(e, {
          urls: ["<all_urls>"]
        }, ["blocking"]), this.unbindListener = () => a.default.webRequest.onAuthRequired.removeListener(e)
      }
      unbind() {
        this.bound && (this.unbindListener(), this.bound = !1)
      }
      onAuthRequired(e) {
        if (!e.isProxy) return {};
        const t = this.getAuth(e.challenger.host, "" + e.challenger.port);
        return t ? {
          authCredentials: t
        } : {}
      }
    }
  },
  482: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(0)),
      o = r(13),
      i = n(r(11));
    class s {
      constructor(e) {
        this.targets = [], i.default("Create observer", e), this.observer = new IntersectionObserver(this.handleObserve.bind(this), e)
      }
      observe(e, t) {
        this.targets.push({
          el: e,
          run: t,
          done: !1
        }), this.observer.observe(e)
      }
      remove(e) {
        const t = this.targets.findIndex(t => t.el === e); - 1 !== t && this.targets.splice(t, 1)
      }
      handleObserve(e) {
        e.forEach(e => {
          if (e.intersectionRatio <= 0) return;
          const t = e.target,
            r = this.targets.findIndex(e => e.el === t); - 1 === r || this.targets[r].done || (this.targets[r].run(), this.targets[r].done = !0)
        })
      }
    }
    t.IntersectionObserverManager = s, t.getIntersectionObserverManager = o.singletonGetterByKey(e => e, (e, t) => new s(t));
    class c extends a.default.Component {
      constructor() {
        super(...arguments), this.el = null, this.manager = null, this.state = {
          url: "",
          isLoading: !1
        }
      }
      componentWillMount() {
        this.manager = t.getIntersectionObserverManager(this.props.type, {
          root: this.props.root,
          rootMargin: "20px",
          threshold: .01
        })
      }
      componentWillUnmount() {
        this.el && this.manager && this.manager.remove(this.el)
      }
      startObserve(e) {
        this.manager && this.manager.observe(e, () => {
          this.getUrl()
        })
      }
      getSizeString(e) {
        return "number" == typeof e ? e + "px" : e
      }
      getImageStyle() {
        return Object.assign(Object.assign(Object.assign({}, this.props.width ? {
          width: this.getSizeString(this.props.width)
        } : {}), this.props.height ? {
          height: this.getSizeString(this.props.height)
        } : {}), {
          backgroundImage: `url(${this.state.url})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center"
        })
      }
      getUrl() {
        return this.setState({
          isLoading: !0
        }), this.props.getUrl().then(e => {
          this.setState({
            url: e,
            isLoading: !1
          })
        })
      }
      render() {
        return a.default.createElement("div", {
          className: "lazy-image",
          style: this.getImageStyle(),
          ref: e => {
            this.el = e, e && this.startObserve(e)
          }
        })
      }
    }
    t.LazyImage = c
  },
  483: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = r(73),
      o = n(r(85)),
      i = r(4),
      s = r(13);
    class c extends a.FlatStorage {
      constructor(e) {
        super(), this.displayedCount = 0, this.totalCount = 0;
        const t = e.table;
        if (!o.default.tables.find(e => e.name === t)) throw new Error(`Unknown indexeddb table name '${t}'`);
        this.table = o.default.table(e.table)
      }
      getDisplayCount() {
        return this.displayedCount
      }
      getTotalCount() {
        return this.totalCount
      }
      __list() {
        return Promise.resolve(this.table.toArray()).then(e => (this.totalCount = e.length, this.displayedCount = e.length, e.map(e => ({
          dir: "",
          fileName: e.name,
          lastModified: new Date,
          size: "unknown"
        }))))
      }
      exists(e) {
        return Promise.resolve(this.table.where("name").equals(e).toArray()).then(e => e.length > 0)
      }
      read(e, t) {
        if ("Text" !== t) throw new Error(`ReadFileType '${t}' is not supported in indexeddb storage`);
        return this.findByName(e)
      }
      readAll(e = "Text", t) {
        return Promise.resolve(this.table.toArray()).then(e => e.map(e => ({
          fileName: e.name,
          content: e
        })))
      }
      __write(e, t) {
        return this.findByName(e).catch(() => null).then(e => {
          if (e) {
            const r = this.normalize(Object.assign(Object.assign({}, e), t));
            return delete r.id, this.table.update(e.id, r)
          } {
            const e = this.normalize(Object.assign({
              id: i.uid()
            }, t));
            return this.table.add(e)
          }
        }).then(() => {})
      }
      __overwrite(e, t) {
        return this.write(e, t)
      }
      __clear() {
        return Promise.resolve(this.table.clear())
      }
      __remove(e) {
        return this.findByName(e).then(e => this.table.delete(e.id))
      }
      __rename(e, t) {
        return this.findByName(e).then(e => this.table.update(e.id, {
          name: t
        })).then(() => {})
      }
      __copy(e, t) {
        return this.findByName(e).then(e => (delete e.id, e.name = t, this.__write(t, e)))
      }
      ensureDir() {
        return Promise.resolve()
      }
      findByName(e) {
        return Promise.resolve(this.table.where("name").equals(e).first()).then(t => {
          if (!t) throw new Error(`indexeddb storage: Item with name '${e}' is not found`);
          return t
        })
      }
      normalize(e) {
        return e
      }
      dataToString(e) {
        return JSON.stringify(e)
      }
    }
    t.IndexeddbFlatStorage = c, t.getIndexeddbFlatStorage = s.singletonGetterByKey(e => e.table, e => new c(e))
  },
  484: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(125)),
      o = r(175),
      i = r(13);
    t.MigrationService = class {
      constructor(e) {
        this.storage = e.storage, this.jobs = e.jobs
      }
      isMigrated(e) {
        return this.storage.get(e).then(e => !!e)
      }
      getRecords() {
        return this.storage.getAll()
      }
      runType(e) {
        return this.isMigrated(e).then(t => {
          if (t) return o.MigrationResult.AlreadyMigrated;
          const r = this.findJob(e);
          return r ? r.shouldMigrate().then(e => e ? r.migrate().then(() => o.MigrationResult.Success) : o.MigrationResult.NotQualified) : o.MigrationResult.JobUnknown
        }).catch(e => (console.error(e), o.MigrationResult.Error)).then(t => t !== o.MigrationResult.Success ? Promise.resolve(t) : this.storage.set(e, {
          result: t,
          id: i.uid(),
          runAt: (new Date).getTime(),
          jobType: e
        }).then(() => t))
      }
      runAll(e, t) {
        const r = this.jobs.filter(t => a.default.satisfies(e, t.previousVersionRange()));
        return i.flow(...r.map(e => {
          const t = e.getType();
          return () => this.runType(t).then(e => ({
            type: t,
            result: e
          }))
        })).then(e => e.reduce((e, t) => (e[t.type] = t.result, e), {}))
      }
      findJob(e) {
        return this.jobs.find(t => t.getType() === e)
      }
    }
  },
  485: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(145),
      a = r(13);
    class o extends n.KeyValueData {
      getAll() {
        return super.get("")
      }
      getMainKeyAndSubKeys(e) {
        const [t, r] = super.getMainKeyAndSubKeys(e);
        return [o.STORAGE_KEY, [t].concat(r).filter(e => e && e.length)]
      }
    }
    t.MigrationKeyValueData = o, o.STORAGE_KEY = "migration_records", t.getMigrationKeyValueData = a.singletonGetter(() => new o)
  },
  53: function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, "toHtml", (function() {
      return p
    })), r.d(t, "generateEmptyHtml", (function() {
      return h
    })), r.d(t, "toHtmlDataUri", (function() {
      return f
    })), r.d(t, "fromHtml", (function() {
      return g
    })), r.d(t, "fromJSONString", (function() {
      return v
    })), r.d(t, "toJSONString", (function() {
      return y
    })), r.d(t, "toJSONDataUri", (function() {
      return b
    })), r.d(t, "toBookmarkData", (function() {
      return w
    }));
    var n = r(81),
      a = r.n(n),
      o = r(62),
      i = r.n(o),
      s = r(100),
      c = r.n(s),
      l = r(43),
      u = r(12),
      d = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      };

    function m(e) {
      var t = e.name,
        r = e.baseUrl,
        n = e.commandTrs,
        a = e.noImport;
      return '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">\n<head profile="http://selenium-ide.openqa.org/profiles/test-case">\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n' + (a ? "" : '<link rel="selenium.base" href="' + r + '" />') + "\n<title>" + t + "</title>\n</head>\n<body>\n" + (a ? "<h3>Starting Browser and UI.Vision...</h3>" : '\n    <table cellpadding="1" cellspacing="1" border="1">\n    <thead>\n    <tr><td rowspan="1" colspan="3">' + t + "</td></tr>\n    </thead><tbody>\n    " + n.join("\n") + "\n    </tbody></table>\n  ") + "\n<script>\n(function() {\n  var isExtensionLoaded = function () {\n    const $root = document.documentElement\n    return !!$root && !!$root.getAttribute('data-kantu')\n  }\n  var increaseCountInUrl = function (max) {\n    var url   = new URL(window.location.href)\n    var count = 1 + (parseInt(url.searchParams.get('reload') || 0))\n\n    url.searchParams.set('reload', count)\n    var nextUrl = url.toString()\n\n    var shouldStop = count > max\n    return [shouldStop, !shouldStop ? nextUrl : null]\n  }\n  var run = function () {\n    try {\n      var evt = new CustomEvent('kantuSaveAndRunMacro', {\n        detail: {\n          html: document.documentElement.outerHTML,\n          noImport: " + (a || "false") + ",\n          storageMode: '" + Object(u.getStorageManager)().getCurrentStrategyType() + "'\n        }\n      })\n\n      window.dispatchEvent(evt)\n      setInterval(() => window.dispatchEvent(evt), 1000);\n\n      if (window.location.protocol === 'file:') {\n        var onInvokeSuccess = function () {\n          clearTimeout(timer)\n          clearTimeout(reloadTimer)\n          window.removeEventListener('kantuInvokeSuccess', onInvokeSuccess)\n        }\n        var timer = setTimeout(function () {\n          alert('Error #203: It seems you need to turn on *Allow access to file URLs* for Kantu in your browser extension settings.')\n        }, 8000)\n\n        window.addEventListener('kantuInvokeSuccess', onInvokeSuccess)\n      }\n    } catch (e) {\n      alert('Kantu Bookmarklet error: ' + e.toString());\n    }\n  }\n  var reloadTimer = null\n  var main = function () {\n    if (isExtensionLoaded())  return run()\n\n    var MAX_TRY   = 3\n    var INTERVAL  = 1000\n    var tuple     = increaseCountInUrl(MAX_TRY)\n\n    if (tuple[0]) {\n      return alert('Error #204: It seems UI.Vision RPA is not installed yet - or you need to turn on *Allow access to file URLs* for UI.Vision RPA in your browser extension settings.')\n    } else {\n      reloadTimer = setTimeout(function () {\n        window.location.href = tuple[1]\n      }, INTERVAL)\n    }\n  }\n\n  setTimeout(main, 500)\n})();\n<\/script>\n</body>\n</html>\n  "
    }

    function p(e) {
      var t = e.name,
        r = e.commands.map((function(e) {
          return d({}, e)
        })),
        n = r.find((function(e) {
          return "open" === e.cmd
        }));
      return n && (n.target = n.target), m({
        name: t,
        commandTrs: r.map((function(e) {
          return "open" === e.cmd && (e.target = e.target), "\n      <tr>\n        <td>" + (e.cmd || "") + "</td>\n        <td>" + (e.target || "") + "</td>\n        <td>" + (e.value || "") + "</td>\n      </tr>\n    "
        })),
        baseUrl: ""
      })
    }

    function h() {
      return m({
        name: "UI.Vision Autostart Page",
        commandTrs: [],
        baseUrl: "",
        noImport: !0
      })
    }

    function f(e) {
      return t = p(e), "data:text/html;base64," + window.btoa(unescape(encodeURIComponent(t)));
      var t
    }

    function g(e) {
      var t = a()("<div>" + e + "</div>"),
        r = t.find("link"),
        n = t.find("title"),
        o = t.find("tbody > tr"),
        i = r && r.attr("href"),
        s = n.text();
      if (!s || !s.length) throw new Error("fromHtml: missing title");
      return {
        name: s,
        data: {
          commands: [].slice.call(o).map((function(e) {
            var t = a()(e),
              r = t[0].outerHtml;
            t.find("datalist").remove();
            var n, o, s = t.children(),
              u = s.eq(0),
              d = s.eq(1),
              m = s.eq(2),
              p = Object(l.normalizeCommandName)(u && u.text()),
              h = m && m.text(),
              f = d && d.text();
            if (!p || !p.length) throw new Error("missing cmd in " + r);
            return "open" === p && (f = i && i.length && !/:\/\//.test(f) ? (n = i, o = f, new c.a(o, n).toString()) : f), {
              cmd: p,
              target: f,
              value: h
            }
          }))
        }
      }
    }

    function v(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = i()(e.replace(/^\s*/, "")),
        a = t ? t.replace(/\.json$/i, "") : n.Name || "__imported__";
      if (n.macros) throw new Error("This is a test suite, not a macro");
      if (!Array.isArray(n.Commands)) throw new Error("'Commands' field must be an array");
      var o = n.Commands.map((function(e) {
        var t = {
          cmd: Object(l.normalizeCommandName)(e.Command),
          target: e.Target,
          value: e.Value
        };
        return Array.isArray(e.Targets) && (t.targetOptions = e.Targets), t
      }));
      return d({
        name: a,
        data: {
          commands: o
        }
      }, r.withStatus && n.status ? {
        status: n.status
      } : {}, r.withId && n.id ? {
        id: n.id
      } : {})
    }

    function y(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = function() {
          var e = new Date;
          return [e.getFullYear(), e.getMonth() + 1, e.getDate()].join("-")
        },
        n = d({
          Name: e.name,
          CreationDate: r(),
          Commands: e.commands.map((function(e) {
            return {
              Command: e.cmd,
              Target: e.target || "",
              Value: e.value || "",
              Targets: t.ignoreTargetOptions ? e.targetOptions : void 0
            }
          }))
        }, t.withStatus && e.status ? {
          status: e.status
        } : {}, t.withId && e.id ? {
          id: e.id
        } : {});
      return JSON.stringify(n, null, 2)
    }

    function b(e) {
      return t = y(e), "data:text/json;base64," + window.btoa(unescape(encodeURIComponent(t)));
      var t
    }

    function w(e) {
      var t = e.path,
        r = e.bookmarkTitle;
      if (!t) throw new Error("path is required to generate bookmark for macro");
      if (!r) throw new Error("bookmarkTitle is required to generate bookmark for macro");
      return {
        title: r,
        url: ("javascript:\n      (function() {\n        try {\n          var evt = new CustomEvent('kantuRunMacro', {\n            detail: {\n              name: " + JSON.stringify(t.replace(/\.json$/i, "")) + ",\n              from: 'bookmark',\n              storageMode: '" + Object(u.getStorageManager)().getCurrentStrategyType() + "',\n              closeRPA: 1\n            }\n          });\n          window.dispatchEvent(evt);\n        } catch (e) {\n          alert('UI.Vision RPA Bookmarklet error: ' + e.toString());\n        }\n      })();\n    ").replace(/\n\s*/g, "")
      }
    }
  },
  58: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = r(117),
      o = r(118),
      i = r(13),
      s = n(r(11)),
      c = n(r(28)),
      l = r(119),
      u = r(120),
      d = r(4),
      m = n(r(125)),
      p = n(r(26));
    ! function(e) {
      e[e.UserProfile = 0] = "UserProfile", e[e.UserDesktop = 1] = "UserDesktop"
    }(t.SpecialFolder || (t.SpecialFolder = {})), t.getNativeFileSystemAPI = i.singletonGetter(() => {
      const e = new o.KantuFileAccessHost;
      let t = e.connectAsync().catch(e => {
          throw s.default.warn("pReady - error", e), e
        }),
        r = 0;
      const n = a.MethodTypeInvocationNames.reduce((a, o) => {
        const s = i.snakeToCamel(o);
        return a[s] || (a[s] = a => t.then(() => (r += 1, e.invokeAsync(o, a))).then(e => (r -= 1, e), e => {
          throw r -= 1, n.reconnect().catch(() => {}), e
        })), a
      }, {
        reconnect: () => i.until("pendingRequestCount === 0", () => ({
          pass: 0 === r,
          result: !0
        })).then(() => (s.default("FileSystem - reconnect", (new Error).stack), e.disconnect(), t = e.connectAsync(), t.then(() => n))),
        getEntries: e => {
          const t = n;
          return t.getFileSystemEntries(e).then(r => {
            const {
              errorCode: n,
              entries: a
            } = r;
            return e.brief ? Promise.resolve({
              errorCode: n,
              entries: a.map(e => ({
                name: e,
                length: 0,
                isDirectory: !1,
                lastWriteTime: 0
              }))
            }) : Promise.all(a.map(r => {
              const n = c.default.join(e.path, r);
              return t.getFileSystemEntryInfo({
                path: n
              }).then(e => ({
                name: r,
                length: e.length,
                isDirectory: e.isDirectory,
                lastWriteTime: e.lastWriteTime
              }))
            })).then(e => ({
              errorCode: n,
              entries: e
            }))
          })
        },
        ensureDir: e => {
          const t = n;
          return t.directoryExists({
            path: e.path
          }).then(r => !!r || t.ensureDir({
            path: c.default.dirname(e.path)
          }).then(r => !!r && t.createDirectory({
            path: e.path
          }))).catch(e => !1)
        },
        readBigFile: e => {
          const t = n;
          return t.getFileSize(e).then(r => {
            if (0 === r) return new Uint8Array(0);
            const n = [],
              a = o => t.readFileRange({
                path: e.path,
                rangeStart: o
              }).then(e => {
                const t = u.base64.decode(e.buffer);
                if (t)
                  for (let e = 0; e < t.length; e++) n.push(t[e]);
                return e.rangeEnd <= o || e.rangeEnd >= r ? new Uint8Array(n) : a(e.rangeEnd)
              });
            return a(0)
          })
        },
        isReadBigFileSupported: () => n.getVersion().then(e => !m.default.lt(e, p.default.xfile.minVersionToReadBigFile)),
        readAllTextCompat: e => {
          const t = n;
          return t.isReadBigFileSupported().then(r => r ? t.readBigFile(e).then(e => ({
            errorCode: 0,
            content: l.utf8.decode(e)
          })) : t.readAllText(e))
        },
        readAllBytesCompat: e => {
          const t = n;
          return t.isReadBigFileSupported().then(r => r ? t.readBigFile(e).then(e => d.blobToDataURL(new Blob([e])).then(e => ({
            errorCode: 0,
            content: e
          }))) : t.readAllBytes(e))
        }
      });
      return n
    })
  },
  582: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(0)),
      o = r(112),
      i = n(r(1));
    class s extends a.default.Component {
      constructor() {
        super(...arguments), this.state = {
          isEditing: !1,
          value: ""
        }, this.edit = () => {
          this.setState({
            isEditing: !0
          }), setTimeout(() => {
            const e = this.$input && this.$input.refs && this.$input.refs.input;
            if (e) {
              e.focus();
              const t = this.props.getSelection(this.state.value, e);
              e.selectionStart = t ? t.start : 0, e.selectionEnd = t ? t.end : e.value.length
            }
          }, 100)
        }, this.submit = () => {
          this.props.checkValue(this.state.value).then(e => {
            e && (this.setState({
              isEditing: !1
            }), this.props.onChange(this.state.value).catch(e => this.setState({
              value: this.props.value
            })))
          })
        }, this.reset = () => {
          this.setState({
            isEditing: !1,
            value: this.props.value
          })
        }
      }
      componentDidMount() {
        this.setState({
          value: this.props.value
        })
      }
      componentWillReceiveProps(e) {
        e.value !== this.props.value && this.setState({
          value: e.value
        })
      }
      render() {
        return this.state.isEditing ? a.default.createElement(o.Input, {
          defaultValue: "",
          autosize: !0,
          ref: e => {
            this.$input = e
          },
          value: this.state.value,
          onChange: e => this.setState({
            value: e.target.value
          }),
          onBlur: this.reset,
          onKeyDown: e => 13 === e.keyCode ? this.submit() : 27 === e.keyCode ? this.reset() : void 0
        }) : a.default.createElement("span", null, this.props.value, a.default.createElement(o.Icon, {
          type: "edit",
          style: {
            marginLeft: "10px",
            cursor: "pointer"
          },
          onClick: this.edit
        }))
      }
    }
    t.default = s, s.propTypes = {
      value: i.default.string.isRequired,
      onChange: i.default.func.isRequired,
      checkValue: i.default.func.isRequired,
      getSelection: i.default.func
    }, s.defaultProps = {
      getSelection: () => null
    }
  },
  60: function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, "postMessage", (function() {
      return o
    })), r.d(t, "onMessage", (function() {
      return i
    }));
    var n = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      a = "SELENIUM_IDE_CS_MSG",
      o = function(e, t, r) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "*",
          o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 6e4;
        return new Promise((function(i, s) {
          if (!e || !e.postMessage) throw new Error("csPostMessage: targetWin is not a window", e);
          if (!t || !t.addEventListener || !t.removeEventListener) throw new Error("csPostMessage: myWin is not a window", t);
          var c = Math.random();
          t.addEventListener("message", (function e(r) {
            if (r.data && r.data.type === a && !r.data.isRequest && r.data.secret === c) {
              t.removeEventListener("message", e);
              var n = r.data,
                o = n.payload,
                l = n.error;
              if (l) return s(new Error(l));
              if (void 0 !== o) return i(o);
              s(new Error("csPostMessage: No payload nor error found"))
            }
          })), e.postMessage({
            type: "SELENIUM_IDE_CS_MSG",
            secret: c,
            payload: r,
            isRequest: !0
          }, n), setTimeout((function() {
            s(new Error("csPostMessage: timeout " + o + " ms"))
          }), o)
        }))
      },
      i = function(e, t) {
        if (!e || !e.addEventListener || !e.removeEventListener) throw new Error("csOnMessage: not a window", e);
        var r = function(e) {
          if (e && e.data && e.data.type === a && e.data.isRequest && e.data.secret) {
            var r = {
              type: a,
              secret: e.data.secret
            };
            new Promise((function(r, n) {
              var a = void 0;
              try {
                a = t(e.data.payload, {
                  source: e.source
                })
              } catch (e) {
                n(e)
              }
              void 0 !== a && r(a)
            })).then((function(t) {
              e.source.postMessage(n({}, r, {
                payload: t
              }), "*")
            }), (function(t) {
              e.source.postMessage(n({}, r, {
                error: t.message
              }), "*")
            }))
          }
        };
        return e.addEventListener("message", r),
          function() {
            return e.removeEventListener("message", r)
          }
      }
  },
  602: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = r(13),
      o = r(12),
      i = n(r(11)),
      s = r(4);

    function c(e, t) {
      return {
        name: e.name,
        commands: a.flatten(e.commands.map(e => l(e, t)))
      }
    }

    function l(e, t) {
      if ("open" === e.command) return [{
        cmd: "open",
        target: u(t, e.target),
        value: ""
      }];
      if (function(e) {
          switch (e) {
            case "open":
            case "select":
            case "type":
            case "pause":
            case "addSelection":
            case "answerOnNextPrompt":
            case "assertAlert":
            case "assertChecked":
            case "assertConfirmation":
            case "assertEditable":
            case "assertElementPresent":
            case "assertElementNotPresent":
            case "assertNotEditable":
            case "assertNotChecked":
            case "assertPrompt":
            case "assertTitle":
            case "assertText":
            case "assertValue":
            case "check":
            case "click":
            case "clickAt":
            case "do":
            case "dragAndDropToObject":
            case "echo":
            case "editContent":
            case "else":
            case "elseIf":
            case "end":
            case "executeAsyncScript":
            case "executeScript":
            case "forEach":
            case "mouseOver":
            case "repeatIf":
            case "removeSelection":
            case "run":
            case "select":
            case "selectFrame":
            case "sendKeys":
            case "setWindowSize":
            case "store":
            case "storeAttribute":
            case "storeText":
            case "storeTitle":
            case "storeValue":
            case "storeXpathCount":
            case "times":
            case "uncheck":
            case "verifyChecked":
            case "verifyText":
            case "verifyTitle":
            case "verifyValue":
            case "verifyEditable":
            case "verifyElementPresent":
            case "verifyElementNotPresent":
            case "verifyNotChecked":
            case "verifyNotEditable":
            case "waitForElementVisible":
            case "waitForElementNotVisible":
            case "waitForElementPresent":
            case "waitForElementNotPresent":
              return !0;
            default:
              return !1
          }
        }(e.command)) return [Object.assign({
        cmd: e.command,
        target: e.target,
        value: e.value
      }, e.targets ? {
        targetOptions: e.targets.map(e => e[0])
      } : {})];
      const r = function(e) {
        switch (e.command) {
          case "runScript":
            return [{
              cmd: "executeScript",
              target: e.target,
              value: ""
            }];
          case "if":
            return [{
              cmd: "if_v2",
              target: e.target,
              value: e.value
            }];
          case "while":
            return [{
              cmd: "while_v2",
              target: e.target,
              value: e.value
            }];
          default:
            return []
        }
      }(e);
      return r.length > 0 ? r : [{
        cmd: "comment",
        target: `${e.command} // ${e.target}`,
        value: e.value
      }]
    }

    function u(e, t) {
      if (/^https?:\/\//.test(t)) return t;
      if ("/" === t.charAt(0)) {
        return new URL(e).origin + t
      }
      return e + t
    }
    t.importSideProject = function(e) {
      const t = s.sanitizeFileName(e.name),
        r = o.getStorageManager().getMacroStorage(),
        n = r.getPathLib();
      return a.uniqueName(t, {
        check: e => r.directoryExists(e).then(e => !e)
      }).then(t => r.createDirectory(t).then(() => Promise.all(e.tests.map(a => {
        a.name = s.sanitizeFileName(a.name);
        const o = n.join(t, a.name + ".json"),
          l = c(a, e.url);
        return r.write(o, {
          name: l.name,
          data: {
            commands: l.commands
          }
        }).then(() => !0, e => (i.default(e), e.message))
      })).then(e => ({
        successCount: e.filter(e => e && "boolean" == typeof e).length,
        errorCount: e.filter(e => "string" == typeof e).length,
        errors: e.filter(e => "string" == typeof e),
        ignoreCount: 0
      }))).then(r => ({
        projectName: e.name,
        folderName: t,
        macros: r,
        suites: {
          successCount: 0,
          ignoreCount: e.suites.length,
          errorCount: 0,
          errors: []
        }
      })))
    }, t.convertSideMacro = c, t.convertSideCommand = l
  },
  603: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(134)),
      o = r(12),
      i = r(13),
      s = r(53),
      c = r(361);

    function l(e) {
      e.sort((e, t) => e.name < t.name ? -1 : e.name > t.name ? 1 : 0)
    }

    function u(e) {
      const t = e.path.split("/").filter(e => "." !== e),
        r = t.slice(1).join("/"),
        n = "" === t[t.length - 1],
        [a, i] = (() => {
          switch (t[0]) {
            case c.ZipFolders.Macros:
              return [e.manager.getMacroStorage(), o.StorageTarget.Macro];
            case c.ZipFolders.TestSuites:
              return [e.manager.getTestSuiteStorage(), o.StorageTarget.TestSuite];
            case c.ZipFolders.Csvs:
              return [e.manager.getCSVStorage(), o.StorageTarget.CSV];
            case c.ZipFolders.Screenshots:
              return [e.manager.getScreenshotStorage(), o.StorageTarget.Screenshot];
            case c.ZipFolders.Visions:
              return [e.manager.getVisionStorage(), o.StorageTarget.Vision];
            default:
              return [null, null]
          }
        })();
      return a ? {
        storage: a,
        target: i,
        dir: n,
        relativePath: r
      } : null
    }
    t.restoreBackup = function(e) {
      const t = o.getStorageManager(e.storage);
      return a.default.loadAsync(e.file).then(e => {
        const r = [],
          n = [];
        e.forEach((e, t) => {
          t.dir ? n.push(t) : r.push(t)
        }), l(r), l(n);
        return i.flow(...n.map(e => {
          const r = u({
            manager: t,
            path: e.name
          });
          return r && "." !== r.relativePath && "" !== r.relativePath ? () => r.storage.directoryExists(r.relativePath).then(e => {
            if (!e) return r.storage.createDirectory(r.relativePath).then(() => {})
          }) : () => Promise.resolve()
        })).then(() => i.flow(...r.map(e => {
          const r = u({
            manager: t,
            path: e.name
          });
          if (!r) return () => Promise.resolve();
          switch (r.target) {
            case o.StorageTarget.Macro:
              return () => e.async("text").then(e => r.storage.write(r.relativePath, s.fromJSONString(e))).then(() => r.target);
            case o.StorageTarget.Screenshot:
            case o.StorageTarget.Vision:
            case o.StorageTarget.CSV:
              return () => e.async("blob").then(e => r.storage.write(r.relativePath, e)).then(() => r.target);
            default:
              return () => Promise.resolve()
          }
        })).then(e => ({
          count: {
            macro: e.filter(e => e === o.StorageTarget.Macro).length,
            testSuite: e.filter(e => e === o.StorageTarget.TestSuite).length,
            screenshot: e.filter(e => e === o.StorageTarget.Screenshot).length,
            vision: e.filter(e => e === o.StorageTarget.Vision).length,
            csv: e.filter(e => e === o.StorageTarget.CSV).length
          }
        })))
      })
    }, t.sortZipObjectsInline = l, t.sortZipObjects = function(e) {
      const t = [...e];
      return l(t), t
    }, t.getStorageAndPath = u
  },
  605: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(0)),
      o = n(r(17)),
      i = r(112),
      s = r(1027),
      c = r(13);
    r(999);
    const l = r(4);
    class u extends a.default.Component {
      constructor(e) {
        super(e), this.state = {
          text: "",
          shouldShowOptions: !1
        }, this.getDropDownElementId = c.singletonGetter(() => "dropdown_" + s.v1()), this.onFocus = () => {
          this.props.disabled || this.setState({
            shouldShowOptions: !0
          })
        }, this.onBlur = () => {
          setTimeout(() => {
            this.setState({
              shouldShowOptions: !1
            })
          }, 100)
        }, this.onToggle = () => {
          this.props.disabled || (this.state.shouldShowOptions ? this.onBlur() : (this.onFocus(), this.focusOnTextInput()))
        }, this.onKeyDown = e => {
          switch (e.keyCode) {
            case 13:
            case 27:
              this.setState({
                shouldShowOptions: !1
              })
          }
        }, this.onTextChange = e => {
          const t = e.target.value;
          this.setState({
            text: t,
            shouldShowOptions: !0
          }), this.props.onChange(t)
        }, this.onItemClick = (e, t, r) => {
          var n;
          const a = null !== (n = this.props.stringifyOption(t)) && void 0 !== n ? n : this.props.getId(t, r);
          this.setState({
            text: a,
            shouldShowOptions: !1
          }), this.focusOnTextInput(), this.props.onChange(a)
        }, this.container = a.default.createRef(), this.input = a.default.createRef()
      }
      componentDidMount() {
        this.props.value && this.setState({
          text: this.props.value
        })
      }
      componentDidUpdate(e) {
        var t;
        this.props.value !== e.value && this.setState({
          text: null !== (t = this.props.value) && void 0 !== t ? t : ""
        })
      }
      focusOnTextInput() {
        if (!this.input.current) return;
        this.input.current.refs.input.focus()
      }
      getDropDownContainer() {
        const e = "drop_down_container",
          t = document.getElementById(e);
        if (t) return t;
        const r = document.createElement("div");
        return r.id = e, document.body.appendChild(r), r
      }
      getDropDownMountPoint() {
        const e = this.getDropDownElementId(),
          t = document.getElementById(e);
        if (t) return t;
        const r = document.createElement("div");
        return r.id = e, r.className = "drop-down", this.getDropDownContainer().appendChild(r), r
      }
      renderOneOption(e, t, r) {
        var n;
        const {
          getId: o,
          stringifyOption: i
        } = this.props, s = this.props.OptionItem, c = o(e, t);
        if (s) return a.default.createElement(s, {
          value: e,
          key: c
        });
        const l = null !== (n = null == i ? void 0 : i(e)) && void 0 !== n ? n : c;
        return a.default.createElement(d, {
          key: c,
          item: e,
          index: t,
          text: l,
          selected: r,
          onItemClick: this.onItemClick
        })
      }
      renderOptions() {
        if (!this.state.shouldShowOptions) return null;
        const e = this.container.current;
        if (!e) return null;
        const t = e.getBoundingClientRect(),
          r = {
            position: "absolute",
            left: t.left,
            top: t.top + t.height + 3
          };
        this.props.dropdownAutoWidth || (r.width = t.width);
        const n = a.default.createElement("div", {
          className: "option-list",
          style: r
        }, this.props.options.map((e, t) => this.renderOneOption(e, t, this.state.text === this.props.stringifyOption(e))));
        return o.default.createPortal(n, this.getDropDownMountPoint())
      }
      render() {
        return a.default.createElement("div", {
          className: l.cn("select-input", {
            opened: this.state.shouldShowOptions
          }),
          ref: this.container
        }, a.default.createElement(i.Input, {
          ref: this.input,
          disabled: this.props.disabled,
          placeholder: this.props.placeholder,
          value: this.state.text,
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onClick: this.onFocus,
          onChange: this.onTextChange,
          onKeyDown: this.onKeyDown
        }), a.default.createElement("span", {
          className: "arrow-icon ant-select-arrow",
          onClick: this.onToggle
        }), this.renderOptions())
      }
    }
    t.SelectInput = u, u.defaultProps = {
      disabled: !1,
      dropdownAutoWidth: !1
    };
    class d extends a.default.Component {
      constructor() {
        super(...arguments), this.onClick = e => {
          this.props.onItemClick(e, this.props.item, this.props.index)
        }
      }
      render() {
        return a.default.createElement("div", {
          className: l.cn("plain-text-option", {
            selected: this.props.selected
          }),
          onMouseDown: this.onClick
        }, this.props.text)
      }
    }
  },
  606: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(0)),
      o = n(r(1)),
      i = r(17),
      s = r(112),
      c = r(13),
      l = r(487),
      u = r(43),
      d = r(4);
    var m;
    ! function(e) {
      e.Command = "command"
    }(m || (m = {}));
    class p extends a.default.Component {
      constructor() {
        super(...arguments), this.onClick = e => {
          this.props.onClick(e, this.props.command)
        }, this.onContextMenu = e => {
          this.props.onContextMenu(e, this.props.command)
        }
      }
      render() {
        const {
          index: e,
          command: t,
          editable: r,
          isDragging: n,
          connectDropTarget: o,
          connectDragSource: i
        } = this.props;
        return c.compose(i, o)(a.default.createElement("div", Object.assign({}, this.props.attributes, {
          style: this.props.style,
          className: d.cn(this.props.className || "", {
            dragging: n
          }),
          onClick: this.onClick,
          onContextMenu: this.onContextMenu
        }), a.default.createElement("div", {
          className: "row-col index-col"
        }, e), a.default.createElement("div", {
          className: "row-col command-col",
          title: u.commandText(t.cmd)
        }, c.repeatStr(2 * t.indent, " "), u.commandText(t.cmd)), a.default.createElement("div", {
          className: "row-col target-col",
          title: t.target,
          onMouseEnter: e => this.props.onMouseEnterTarget(e, t),
          onMouseLeave: e => this.props.onMouseLeaveTarget(e, t)
        }, t.target), a.default.createElement("div", {
          className: "row-col value-col",
          title: t.value
        }, t.value), a.default.createElement("div", {
          className: "row-col op-col"
        }, a.default.createElement(s.Button, {
          disabled: !r,
          shape: "circle",
          size: "small",
          onClick: e => {
            this.props.onToggleComment(e, t), e.stopPropagation()
          }
        }, "//"), a.default.createElement(s.Button, {
          disabled: !r,
          shape: "circle",
          size: "small",
          onClick: e => {
            this.props.onDuplicate(e, t), e.stopPropagation()
          }
        }, a.default.createElement(s.Icon, {
          type: "plus"
        })))))
      }
    }
    p.propTypes = {
      style: o.default.object,
      className: o.default.string,
      attributes: o.default.object,
      command: o.default.object.isRequired,
      editable: o.default.bool.isRequired,
      onClick: o.default.func.isRequired,
      onContextMenu: o.default.func.isRequired,
      onMouseEnterTarget: o.default.func.isRequired,
      onMouseLeaveTarget: o.default.func.isRequired,
      onToggleComment: o.default.func.isRequired,
      onDuplicate: o.default.func.isRequired,
      onMoveCommand: o.default.func.isRequired,
      onDragStart: o.default.func.isRequired,
      onDragEnd: o.default.func.isRequired
    }, p.defaultProps = {
      style: {},
      attributes: {},
      className: ""
    }, t.CommandItem = c.compose(l.DragSource(m.Command, {
      beginDrag: e => ({
        index: e.command.realIndex
      }),
      isDragging: (e, t) => t.getItem().index === e.command.realIndex
    }, (e, t) => ({
      connectDragSource: e.dragSource(),
      isDragging: t.isDragging()
    })), l.DropTarget(m.Command, {
      hover: (e, t, r) => {
        if (!r) return;
        const n = t.getItem().index,
          a = e.command.realIndex;
        if (n === a) return;
        const o = i.findDOMNode(r).getBoundingClientRect(),
          s = o.height / 2,
          c = t.getClientOffset();
        if (!c) return;
        const l = c.y - o.top;
        n < a && l < s || n > a && l > s || (e.onMoveCommand(n, a), t.getItem().index = a)
      }
    }, e => ({
      connectDropTarget: e.dropTarget()
    })))(p)
  },
  607: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(0)),
      o = r(112),
      i = r(73);
    class s extends a.default.PureComponent {
      render() {
        const e = {
          columns: [{
            title: "Name",
            dataIndex: "name",
            key: "name"
          }, {
            title: "Size",
            dataIndex: "size",
            key: "size",
            render: e => i.readableSize(e)
          }, {
            title: "Last Modified",
            dataIndex: "createTime",
            key: "createTime",
            render: e => {
              const t = e => e >= 10 ? "" + e : "0" + e;
              return `${e.getFullYear()}/${t(e.getMonth()+1)}/${t(e.getDate())} ${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`
            }
          }, {
            title: "Action",
            key: "ops",
            width: 100,
            render: (e, t, r) => a.default.createElement("div", null, a.default.createElement(o.Button, {
              size: "small",
              shape: "circle",
              onClick: e => {
                this.props.viewCSV(t)
              }
            }, a.default.createElement(o.Icon, {
              type: "eye-o"
            })), a.default.createElement(o.Button, {
              size: "small",
              type: "primary",
              shape: "circle",
              onClick: () => {
                this.props.downloadCSV(t)
              }
            }, a.default.createElement(o.Icon, {
              type: "download"
            })), a.default.createElement(o.Popconfirm, {
              title: "Sure to delete?",
              okText: "Delete",
              onConfirm: () => {
                this.props.removeCSV(t)
              }
            }, a.default.createElement(o.Button, {
              size: "small",
              type: "danger",
              shape: "circle"
            }, a.default.createElement(o.Icon, {
              type: "close"
            }))))
          }],
          dataSource: this.props.list,
          pagination: !1,
          bordered: !0,
          size: "middle",
          rowKey: "fullPath",
          onRowClick: () => {},
          rowClassName: () => ""
        };
        return a.default.createElement(o.Table, Object.assign({}, e))
      }
    }
    t.CsvList = s
  },
  608: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(0)),
      o = r(112),
      i = r(482),
      s = n(r(582)),
      c = r(12);
    class l extends a.default.PureComponent {
      render() {
        if (!this.props.intersectRoot) return null;
        const e = [{
            title: "Image",
            dataIndex: "fullPath",
            key: "fullPath",
            width: 116,
            render: e => a.default.createElement(i.LazyImage, {
              type: "vision",
              root: this.props.intersectRoot,
              width: 100,
              height: 100,
              defaultUrl: "",
              getUrl: () => c.getStorageManager().getVisionStorage().getLink(e)
            })
          }, {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (e, t) => a.default.createElement("div", {
              className: "vision-name-1",
              id: e
            }, a.default.createElement(s.default, {
              value: t.name,
              onChange: e => Promise.resolve(this.props.renameVision(t.name, e)),
              checkValue: e => this.props.isNameValid(e),
              getSelection: (e, t) => {
                const r = /(?:_dpi_\d+)?\.png$/i.exec(e);
                return r ? {
                  start: 0,
                  end: r.index
                } : null
              }
            }))
          }, {
            title: "Action",
            key: "ops",
            width: 100,
            render: (e, t, r) => a.default.createElement("div", {
              className: "vision-actions"
            }, a.default.createElement(o.Button, {
              size: "small",
              shape: "circle",
              onClick: e => {
                this.props.viewVision(t.name)
              }
            }, a.default.createElement(o.Icon, {
              type: "eye-o"
            })), a.default.createElement(o.Dropdown, {
              overlay: a.default.createElement(o.Menu, {
                onClick: ({
                  key: e
                }) => {
                  switch (e) {
                    case "duplicate":
                      return this.props.duplicateVision(t.name);
                    case "name_to_target":
                      return this.props.copyNameToTarget(t.name);
                    case "delete":
                      return this.props.deleteVision(t.name)
                  }
                }
              }, a.default.createElement(o.Menu.Item, {
                key: "duplicate"
              }, "Duplicate"), a.default.createElement(o.Menu.Item, {
                key: "name_to_target"
              }, "Add name to target box"), a.default.createElement(o.Menu.Divider, null), a.default.createElement(o.Menu.Item, {
                key: "delete"
              }, "Delete"))
            }, a.default.createElement(o.Button, {
              size: "small",
              shape: "circle"
            }, a.default.createElement(o.Icon, {
              type: "bars"
            }))))
          }],
          t = (this.props.query || "").toLowerCase().trim(),
          r = {
            columns: e,
            dataSource: this.props.visions.filter(e => 0 === t.length || -1 !== e.name.toLowerCase().indexOf(t)),
            pagination: !1,
            bordered: !0,
            size: "middle",
            rowKey: "fullPath",
            onRowClick: () => {},
            rowClassName: () => ""
          };
        return a.default.createElement(o.Table, Object.assign({}, r))
      }
    }
    t.VisionList = l
  },
  609: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(0)),
      o = r(482),
      i = r(12);
    class s extends a.default.PureComponent {
      render() {
        return a.default.createElement("ul", {
          className: "screenshot-content"
        }, this.props.screenshots.map((e, t) => a.default.createElement("li", {
          key: e.createTime + "_" + e.createTime
        }, a.default.createElement("span", {
          className: "timestamp"
        }, e.createTime && e.createTime.toLocaleString(), " - ", a.default.createElement("span", {
          className: "filename"
        }, decodeURIComponent(e.name))), a.default.createElement("a", {
          href: "#",
          onClick: t => {
            t.preventDefault(), this.props.downloadScreenshot(e.fullPath)
          }
        }, a.default.createElement(o.LazyImage, {
          type: "screenshot",
          root: this.props.intersectRoot,
          width: 200,
          height: 200,
          defaultUrl: "",
          getUrl: () => i.getStorageManager().getScreenshotStorage().getLink(e.fullPath)
        })))))
      }
    }
    t.ScreenshotList = s
  },
  61: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = r(963),
      o = r(13),
      i = r(964),
      s = r(380),
      c = n(r(11));
    ! function(e) {
      e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.Middle = 2] = "Middle"
    }(t.MouseButton || (t.MouseButton = {})),
    function(e) {
      e[e.Move = 0] = "Move", e[e.Down = 1] = "Down", e[e.Up = 2] = "Up", e[e.Click = 3] = "Click", e[e.DoubleClick = 4] = "DoubleClick", e[e.CtrlClick = 5] = "CtrlClick", e[e.ShiftClick = 6] = "ShiftClick"
    }(t.MouseEventType || (t.MouseEventType = {})), t.getNativeXYAPI = o.singletonGetter(() => {
      const e = new i.KantuXYHost;
      let t = e.connectAsync().catch(e => {
        throw c.default.warn("pReady - error", e), e
      });
      const r = a.MethodTypeInvocationNames.reduce((n, a) => (n[o.snakeToCamel(a)] = n => t.then(() => e.invokeAsync(a, n).catch(e => {
        throw r.reconnect().catch(() => {}), e
      })), n), {
        reconnect: () => (e.disconnect(), t = e.connectAsync(), t.then(() => r)),
        getScalingFactor: () => r.getScreenBackingScaleFactor().then(e => window.devicePixelRatio / e),
        sendViewportMouseEvent: (e, t) => {
          const a = r,
            o = null !== n,
            i = t.needCalibration().then(e => e || !o);
          return i.then(r => {
            const {
              markPage: o,
              unmarkPage: i,
              findViewportRectInWindow: c
            } = r ? {
              markPage: t.markPage,
              unmarkPage: t.unmarkPage,
              findViewportRectInWindow: e => a.findRectangle(e)
            } : {
              markPage: () => Promise.resolve(),
              unmarkPage: () => Promise.resolve(),
              findViewportRectInWindow: e => Promise.resolve(n)
            };
            return o().then(() => Promise.all([c({
              color: "#00ff00"
            }), t.withDownloadBarHidden(s.getFocusedWindowSize), a.getScalingFactor()])).then(t => {
              const r = t[0],
                o = t[1],
                s = t[2];
              n = r;
              const c = o.window.left + Math.min(r.x, o.window.width - o.viewport.width),
                l = o.window.top + Math.min(r.y, o.window.height - o.viewport.height);
              return i().then(() => a.sendMouseEvent({
                type: e.type,
                button: e.button,
                x: e.x * s + c * s,
                y: e.y * s + l * s
              }))
            })
          }).catch(e => (console.error(e), !1))
        }
      });
      let n = null;
      return r
    })
  },
  64: function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, "stringifyTestSuite", (function() {
      return c
    })), r.d(t, "parseTestSuite", (function() {
      return l
    })), r.d(t, "validateTestSuiteText", (function() {
      return u
    })), r.d(t, "toBookmarkData", (function() {
      return d
    })), r.d(t, "toHtml", (function() {
      return m
    }));
    var n = r(62),
      a = r.n(n),
      o = r(4),
      i = r(12),
      s = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      },
      c = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = s({
            creationDate: Object(o.formatDate)(new Date),
            name: e.name,
            macros: e.cases.map((function(e) {
              var t = parseInt(e.loops, 10);
              return {
                macro: e.testCaseId,
                loops: t
              }
            }))
          }, t.withFold ? {
            fold: !!e.fold
          } : {}, t.withId && e.id ? {
            id: e.id
          } : {}, t.withPlayStatus && e.playStatus ? {
            playStatus: e.playStatus
          } : {});
        return JSON.stringify(r, null, 2)
      },
      l = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = a()(e.replace(/^\s*/, ""));
        if ("string" != typeof r.name || 0 === r.name.length) throw new Error("name must be a string");
        if (!Array.isArray(r.macros)) throw new Error("macros must be an array");
        var n = r.macros.map((function(e) {
            return ("number" != typeof e.loops || e.loops < 1) && (e.loops = 1), {
              testCaseId: e.macro,
              loops: e.loops
            }
          })),
          o = s({
            cases: n,
            name: t.fileName ? t.fileName.replace(/\.json$/i, "") : r.name
          }, t.withFold ? {
            fold: void 0 === r.fold || r.fold
          } : {}, t.withId && r.id ? {
            id: r.id
          } : {}, t.withPlayStatus && r.playStatus ? {
            playStatus: r.playStatus
          } : {});
        return o
      },
      u = l,
      d = function(e) {
        var t = e.name,
          r = e.bookmarkTitle;
        if (!t) throw new Error("name is required to generate bookmark for test suite");
        if (!r) throw new Error("bookmarkTitle is required to generate bookmark for test suite");
        return {
          title: r,
          url: ("javascript:\n      (function() {\n        try {\n          var evt = new CustomEvent('kantuRunTestSuite', {\n            detail: {\n              name: '" + t + "',\n              from: 'bookmark',\n              storageMode: '" + Object(i.getStorageManager)().getCurrentStrategyType() + "',\n              closeRPA: 1\n            }\n          });\n          window.dispatchEvent(evt);\n        } catch (e) {\n          alert('UI.Vision RPA Bookmarklet error: ' + e.toString());\n        }\n      })();\n    ").replace(/\n\s*/g, "")
        }
      },
      m = function(e) {
        var t = e.name;
        return '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n<title>' + t + "</title>\n</head>\n<body>\n<h1>" + t + "</h1>\n<script>\n(function() {\n  var isExtensionLoaded = function () {\n    const $root = document.documentElement\n    return !!$root && !!$root.getAttribute('data-kantu')\n  }\n  var increaseCountInUrl = function (max) {\n    var url   = new URL(window.location.href)\n    var count = 1 + (url.searchParams.get('reload') || 0)\n\n    url.searchParams.set('reload', count)\n    var nextUrl = url.toString()\n\n    var shouldStop = count > max\n    return [shouldStop, !shouldStop ? nextUrl : null]\n  }\n  var run = function () {\n    try {\n      var evt = new CustomEvent('kantuRunTestSuite', { detail: { name: '" + t + "', from: 'html', storageMode: '" + Object(i.getStorageManager)().getCurrentStrategyType() + "' } })\n\n      window.dispatchEvent(evt)\n      setInterval(() => window.dispatchEvent(evt), 1000);\n\n      if (window.location.protocol === 'file:') {\n        var onInvokeSuccess = function () {\n          clearTimeout(timer)\n          clearTimeout(reloadTimer)\n          window.removeEventListener('kantuInvokeSuccess', onInvokeSuccess)\n        }\n        var timer = setTimeout(function () {\n          alert('Error #201: It seems you need to turn on *Allow access to file URLs* for Kantu in your browser extension settings.')\n        }, 8000)\n\n        window.addEventListener('kantuInvokeSuccess', onInvokeSuccess)\n      }\n    } catch (e) {\n      alert('UI.Vision RPA Bookmarklet error: ' + e.toString());\n    }\n  }\n  var main = function () {\n    if (isExtensionLoaded())  return run()\n\n    var MAX_TRY   = 3\n    var INTERVAL  = 1000\n    var tuple     = increaseCountInUrl(MAX_TRY)\n\n    if (tuple[0]) {\n      return alert('Error #202: It seems UI.Vision RPA is not installed yet, *or* you need to turn on *Allow access to file URLs* for UI.Vision RPA.')\n    } else {\n      setTimeout(function () {\n        window.location.href = tuple[1]\n      }, INTERVAL)\n    }\n  }\n\n  main()\n})();\n<\/script>\n</body>\n</html>\n  "
      }
  },
  65: function(e, t, r) {
    "use strict";
    var n = this && this.__importStar || function(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return t.default = e, t
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(18));
    var o, i;
    ! function(e) {
      e.Html = "html", e.Bookmark = "bookmark", e.Manual = "manual"
    }(o = t.RunBy || (t.RunBy = {})), t.stringForRunBy = function(e) {
        switch (e) {
          case o.Bookmark:
            return "bookmark";
          case o.Html:
            return "command line";
          case o.Manual:
            return "manual"
        }
      },
      function(e) {
        e.Unknown = "unknown", e.Sidebar = "sidebar", e.CommandTable = "command_table"
      }(i = t.FocusArea || (t.FocusArea = {})), t.newTestCaseEditing = {
        commands: [],
        meta: {
          src: null,
          hasUnsaved: !0,
          selectedIndex: -1
        }
      }, t.initialState = {
        status: a.APP_STATUS.NORMAL,
        recorderStatus: a.RECORDER_STATUS.STOPPED,
        inspectorStatus: a.INSPECTOR_STATUS.STOPPED,
        isLoadingMacros: !1,
        from: o.Manual,
        editor: {
          testSuites: [],
          testCases: [],
          currentMacro: null,
          macrosExtra: {},
          macroFolderStructure: [],
          testSuitesExtra: {},
          testSuitesFolderStructure: [],
          editing: Object.assign({}, t.newTestCaseEditing),
          editingSource: {
            original: null,
            pure: null,
            current: null,
            error: null
          },
          clipboard: {
            commands: []
          },
          activeTab: "table_view",
          isDraggingCommand: !1
        },
        player: {
          mode: a.PLAYER_MODE.TEST_CASE,
          status: a.PLAYER_STATUS.STOPPED,
          stopReason: null,
          currentLoop: 0,
          loops: 0,
          nextCommandIndex: null,
          playInterval: 0,
          timeoutStatus: {
            type: null,
            total: null,
            past: null
          }
        },
        recorder: {
          skipOpen: !1
        },
        variables: [],
        logs: [],
        screenshots: [],
        csvs: [],
        visions: [],
        config: {},
        proxy: null,
        ui: {
          focusArea: i.Unknown
        },
        macroQuery: ""
      }
  },
  66: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(0)),
      o = n(r(17)),
      i = n(r(1)),
      s = r(112),
      c = n(r(348)),
      l = r(13);
    var u, d;
    ! function(e) {
      e.Divider = "divider", e.Button = "button"
    }(u = t.MenuItemType || (t.MenuItemType = {})),
    function(e) {
      e[e.Hidden = 0] = "Hidden", e[e.Transparent = 1] = "Transparent", e[e.Visible = 2] = "Visible"
    }(d = t.ContextMenuDisplayStatus || (t.ContextMenuDisplayStatus = {}));
    class m extends a.default.Component {
      constructor() {
        super(...arguments), this.$container = null, this.state = {
          isCollectingSize: !1,
          status: d.Transparent,
          size: {
            width: 0,
            height: 0
          }
        }, this.hide = () => {
          this.props.onHide()
        }, this.onClick = e => {
          const t = this.findMenuItem(e.key);
          if (t) switch (t.type) {
            case u.Button: {
              const {
                context: r,
                onClick: n
              } = t.data;
              try {
                n(e.domEvent, r)
              } catch (e) {
                console.warn(e)
              } finally {
                this.hide()
              }
              break
            }
            case u.Divider:
          }
        }
      }
      findMenuItem(e) {
        return this.props.menuItems.find((t, r) => this.getId(t, r) === e)
      }
      getId(e, t) {
        return e.id + "_" + t
      }
      getContextMenuStyle() {
        const {
          status: e
        } = this.state, t = (() => {
          switch (e) {
            case d.Hidden:
              return {
                display: "none"
              };
            case d.Transparent:
              return {
                top: 0, left: 0, visibility: "hidden"
              };
            case d.Visible: {
              const e = l.pointToFitRect({
                bound: {
                  x: 0,
                  y: 0,
                  width: window.innerWidth,
                  height: window.innerHeight
                },
                size: this.state.size,
                point: {
                  x: this.props.x,
                  y: this.props.y
                }
              });
              return {
                top: e.y + "px",
                left: e.x + "px"
              }
            }
          }
        })();
        return Object.assign(Object.assign({}, {
          position: "fixed"
        }), t)
      }
      collectSize() {
        this.setState({
          isCollectingSize: !0
        }), setTimeout(() => {
          this.$container && this.setState({
            isCollectingSize: !1,
            status: d.Visible,
            size: {
              width: this.$container.offsetWidth,
              height: this.$container.offsetHeight
            }
          })
        }, 100)
      }
      componentDidMount() {
        this.state.isCollectingSize || this.state.status !== d.Transparent || this.collectSize()
      }
      render() {
        return a.default.createElement("div", {
          ref: e => {
            this.$container = e
          },
          style: this.getContextMenuStyle(),
          className: "context-menu"
        }, a.default.createElement(c.default, {
          onClickOutside: this.hide
        }, a.default.createElement(s.Menu, {
          onClick: this.onClick,
          style: {
            width: this.props.width + "px"
          },
          mode: "vertical",
          selectable: !1
        }, this.props.menuItems.map((e, t) => {
          switch (e.type) {
            case u.Divider:
              return a.default.createElement(s.Menu.Divider, {
                key: this.getId(e, t)
              });
            case u.Button:
              return a.default.createElement(s.Menu.Item, {
                key: this.getId(e, t)
              }, e.data.content);
            default:
              return null
          }
        }))))
      }
    }
    t.ContextMenu = m, m.propTypes = {
      menuItems: i.default.array.isRequired,
      onHide: i.default.func.isRequired,
      width: i.default.number
    }, m.defaultProps = {
      width: 230
    }, t.showContextMenu = function(e) {
      const t = document.createElement("div");
      (function() {
        const e = "__kantu_context_menus__",
          t = document.getElementById(e);
        if (t) return t;
        const r = document.createElement("div");
        return r.id = e, document.body.appendChild(r), r
      })().appendChild(t), setTimeout(() => {
        o.default.render(a.default.createElement(m, Object.assign({}, e, {
          onHide: () => {
            setTimeout(() => {
              t.remove()
            }), e.onHide()
          }
        })), t)
      }, 20)
    }
  },
  69: function(e, t, r) {
    var n, a = a || function(e) {
      "use strict";
      if (!(void 0 === e || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
        var t = e.document,
          r = function() {
            return e.URL || e.webkitURL || e
          },
          n = "moz-extension:" === window.location.protocol ? function() {
            var e = t.createElementNS("http://www.w3.org/1999/xhtml", "iframe");
            e.id = "downloadFrame", e.style.visibility = "hidden", e.style.position = "absolute", e.style.left = "-999px", t.body.appendChild(e);
            var r = e.contentDocument.createElement("a");
            return setTimeout((function() {
              e.contentDocument.body.appendChild(r)
            })), r
          }() : t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
          a = "download" in n,
          o = /constructor/i.test(e.HTMLElement) || e.safari,
          i = /CriOS\/[\d]+/.test(navigator.userAgent),
          s = function(t) {
            (e.setImmediate || e.setTimeout)((function() {
              throw t
            }), 0)
          },
          c = function(e) {
            setTimeout((function() {
              "string" == typeof e ? r().revokeObjectURL(e) : e.remove()
            }), 4e4)
          },
          l = function(e) {
            return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], {
              type: e.type
            }) : e
          },
          u = function(t, u, d) {
            d || (t = l(t));
            var m, p = this,
              h = "application/octet-stream" === t.type,
              f = function() {
                ! function(e, t, r) {
                  for (var n = (t = [].concat(t)).length; n--;) {
                    var a = e["on" + t[n]];
                    if ("function" == typeof a) try {
                      a.call(e, r || e)
                    } catch (e) {
                      s(e)
                    }
                  }
                }(p, "writestart progress write writeend".split(" "))
              };
            if (p.readyState = p.INIT, a) return m = r().createObjectURL(t), void setTimeout((function() {
              var e, t;
              n.href = m, n.download = u, e = n, t = new MouseEvent("click"), e.dispatchEvent(t), f(), c(m), p.readyState = p.DONE
            }));
            ! function() {
              if ((i || h && o) && e.FileReader) {
                var n = new FileReader;
                return n.onloadend = function() {
                  var t = i ? n.result : n.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                  e.open(t, "_blank") || (e.location.href = t), t = void 0, p.readyState = p.DONE, f()
                }, n.readAsDataURL(t), void(p.readyState = p.INIT)
              }(m || (m = r().createObjectURL(t)), h) ? e.location.href = m: e.open(m, "_blank") || (e.location.href = m);
              p.readyState = p.DONE, f(), c(m)
            }()
          },
          d = u.prototype;
        return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, r) {
          return t = t || e.name || "download", r || (e = l(e)), navigator.msSaveOrOpenBlob(e, t)
        } : (d.abort = function() {}, d.readyState = d.INIT = 0, d.WRITING = 1, d.DONE = 2, d.error = d.onwritestart = d.onprogress = d.onwrite = d.onabort = d.onerror = d.onwriteend = null, function(e, t, r) {
          return new u(e, t || e.name || "download", r)
        })
      }
    }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
    /*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
    e.exports ? e.exports.saveAs = a : null !== r(522) && null !== r(418) && (void 0 === (n = function() {
      return a
    }.call(t, r, t, e)) || (e.exports = n))
  },
  71: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(91),
      a = r(94),
      o = r(13);
    class i extends n.XModule {
      getName() {
        return n.XModuleTypes.XDesktop
      }
      getAPI() {
        return a.getNativeCVAPI()
      }
      initConfig() {
        return this.getConfig()
      }
      sanityCheck() {
        return Promise.all([this.getConfig(), this.getAPI().getVersion().then(() => this.getAPI(), () => this.getAPI().reconnect()).catch(e => {
          throw new Error("Error #301: Visual Desktop Automation XModule is not installed yet")
        })]).then(() => !0)
      }
      checkUpdate() {
        return Promise.reject(new Error("checkUpdate is not implemented yet"))
      }
      checkUpdateLink(e, t) {
        return `https://ui.vision/x/idehelp?help=xdesktop_updatecheck&xversion=${e}&kantuversion=${t}`
      }
      downloadLink() {
        return "https://ui.vision/x/idehelp?help=xdesktop_download"
      }
      infoLink() {
        return "https://ui.vision/x/idehelp?help=xdesktop"
      }
    }
    t.XDesktop = i, t.getXDesktop = o.singletonGetter(() => new i)
  },
  73: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(78)),
      o = r(76),
      i = r(4),
      s = r(13);
    var c;
    ! function(e) {
      e.ListChanged = "list_changed", e.FilesChanged = "files_changed"
    }(c = t.FlatStorageEvent || (t.FlatStorageEvent = {}));
    class l extends a.default {
      constructor(e = {}) {
        super(), this.encode = (e, t) => e, this.decode = (e, t) => e, this.emitListChanged = o(() => {
          this.list().then(e => {
            this.emit(c.ListChanged, e)
          })
        }, 100), this.changedFileNames = [], this.__emitFilesChanged = o(() => {
          const e = this.changedFileNames;
          return this.changedFileNames = [], Promise.all(e.map(e => this.read(e, "Text").catch(() => null))).then(t => {
            if (0 === t.length) return;
            const r = t.map((t, r) => ({
              content: t,
              fileName: e[r]
            })).filter(e => !!e.content);
            this.emit(c.FilesChanged, r)
          })
        }, 100), e.decode && (this.decode = e.decode), e.encode && (this.encode = e.encode)
      }
      list() {
        return this.__list().then(e => (e.sort((e, t) => {
          const r = e.fileName.toLowerCase(),
            n = t.fileName.toLowerCase();
          return r < n ? -1 : r > n ? 1 : 0
        }), e))
      }
      readAll(e = "Text", t) {
        return this.list().then(t => Promise.all(t.map(t => this.read(t.fileName, e).then(e => ({
          content: e,
          fileName: t.fileName
        })))))
      }
      bulkWrite(e) {
        return Promise.all(e.map(e => this.write(e.fileName, e.content))).then(() => {})
      }
      write(e, t) {
        return this.exists(e).then(r => this.__write(e, t).then(() => {
          r || this.emitListChanged(), this.emitFilesChanged([e])
        }))
      }
      overwrite(e, t) {
        return this.__overwrite(e, t).then(() => {
          this.emitFilesChanged([e])
        })
      }
      clear() {
        return this.__clear().then(() => {
          this.emitListChanged()
        })
      }
      remove(e) {
        return this.__remove(e).then(() => {
          this.emitListChanged()
        })
      }
      rename(e, t) {
        return this.__rename(e, t).then(() => {
          this.emitListChanged(), this.emitFilesChanged([t])
        })
      }
      copy(e, t) {
        return (t && t.length ? Promise.resolve(t) : s.uniqueName(e, {
          generate: (e, t = 1) => {
            const r = /-(\d+)$/;
            return e.match(r) ? e.replace(r, (e, r) => `-${parseInt(r,10)+t}`) : `${e}-${t}`
          },
          check: e => this.exists(e).then(e => !e),
          postfixReg: /(_relative)?\.\w+$/
        })).then(t => this.__copy(e, t).then(() => {
          this.emitListChanged(), this.emitFilesChanged([t])
        }))
      }
      emitFilesChanged(e) {
        this.changedFileNames = e.reduce((e, t) => (-1 === e.indexOf(t) && e.push(t), e), this.changedFileNames), this.__emitFilesChanged()
      }
    }
    t.FlatStorage = l, t.readableSize = e => e < 1024 ? e + " byte" : e < 1048576 ? (e / 1024).toFixed(1) + " KB" : (e / 1048576).toFixed(1) + " MB", t.checkFileName = function(e) {
      i.withFileExtension(e, t => {
        try {
          i.validateStandardName(t, !0)
        } catch (t) {
          throw new Error(`Invalid file name '${e}'. File name ` + t.message)
        }
        return t
      })
    }
  },
  80: function(e, t, r) {
    var n = r(4).retry,
      a = function(e) {
        return e instanceof Error ? {
          isError: !0,
          name: e.name,
          message: e.message,
          stack: e.stack
        } : e
      };

    function o(e) {
      var t = e.ask,
        r = e.answer,
        o = e.timeout,
        i = e.onAnswer,
        s = e.onAsk,
        c = e.destroy,
        l = e.checkReady || function() {
          return Promise.resolve(!0)
        },
        u = 0,
        d = {},
        m = [],
        p = function(e, t, r) {
          m.push({
            uid: e,
            cmd: t,
            args: r
          })
        },
        h = p,
        f = function(e, t, r, n, a) {
          for (var o = 0, i = e.length; o < i; o++) {
            var s;
            try {
              s = e[o](t, r)
            } catch (e) {
              return a(e)
            }
            if (void 0 !== s) return n(s)
          }
        };
      o = o || -1, i((function(e, t, r) {
        if (e && !1 === d[e]) delete d[e];
        else if (e && d[e]) {
          var n = d[e][0],
            o = d[e][1];
          delete d[e], t ? o(a(t)) : n(r)
        }
      })), s((function(e, t, n) {
        if (o > 0 && setTimeout((function() {
            m && m.find((function(t) {
              return t.uid === e
            })) && r(e, new Error("ipcPromise: answer timeout " + o + ' for cmd "' + t + '", args "' + n + '"'))
          }), o), h !== p) return new Promise((function(e, r) {
          f(h, t, n, e, r)
        })).then((function(a) {
          if (void 0 === a) return p(e, t, n);
          r(e, null, a)
        }), (function(t) {
          r(e, a(t), null)
        }));
        p(e, t, n)
      }));
      return {
        ask: function(e, t) {
          return function() {
            for (var r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
            var i = n(e, {
              shouldRetry: function() {
                return !0
              },
              retryInterval: 100,
              timeout: 5e3
            });
            return i().then((function() {
              return t.apply(void 0, a)
            }))
          }
        }(l, (function(e, r, n) {
          var a, i = "ipcp_" + 1 * new Date + "_" + (u = (u + 1) % 1e5),
            s = n || o;
          return s > 0 && (a = setTimeout((function() {
            var t;
            d && d[i] && (t = d[i][1], d[i] = !1, t(new Error("ipcPromise: onAsk timeout " + s + ' for cmd "' + e + '", args "' + r + '"')))
          }), s)), new Promise((function(n, a) {
            d[i] = [n, a], Promise.resolve(t(i, e, r || [])).catch((function(e) {
              a(e)
            }))
          })).then((function(e) {
            return a && clearTimeout(a), e
          }), (function(e) {
            throw a && clearTimeout(a), e
          }))
        })),
        onAsk: function(e) {
          Array.isArray(h) ? h.push(e) : h = [e];
          var t = m.map((function(e) {
            return new Promise((function(t, r) {
              f(h, e.cmd, e.args, t, r)
            })).then((function(t) {
              if (void 0 !== t) return r(e.uid, null, t), e.uid
            }), (function(t) {
              return r(e.uid, t, null), e.uid
            }))
          }));
          Promise.all(t).then((function(e) {
            var t = !0,
              r = !1,
              n = void 0;
            try {
              for (var a, o = e[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
                var i = a.value;
                if (void 0 !== i) {
                  var s = m.findIndex((function(e) {
                    return e.uid === i
                  }));
                  m.splice(s, 1)
                }
              }
            } catch (e) {
              r = !0, n = e
            } finally {
              try {
                !t && o.return && o.return()
              } finally {
                if (r) throw n
              }
            }
          }))
        },
        destroy: function(e) {
          c && c(), t = null, r = null, i = null, s = null, m = null, e || Object.keys(d).forEach((function(e) {
            var t = d[e][1];
            t && t(new Error("IPC Promise has been Destroyed.")), delete d[e]
          }))
        }
      }
    }
    o.serialize = function(e) {
      return {
        ask: function(t, r, n) {
          return e.ask(t, JSON.stringify(r), n)
        },
        onAsk: function(t) {
          return e.onAsk((function(e, r) {
            return t(e, JSON.parse(r))
          }))
        },
        destroy: e.destroy
      }
    }, e.exports = o
  },
  84: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(78)),
      o = r(76),
      i = r(13),
      s = r(28),
      c = r(115);
    var l, u;
    ! function(e) {
      e.ListChanged = "list_changed", e.FilesChanged = "files_changed"
    }(l = t.StorageEvent || (t.StorageEvent = {})),
    function(e) {
      e[e.Unknown = 0] = "Unknown", e[e.NonExistent = 1] = "NonExistent", e[e.File = 2] = "File", e[e.Directory = 3] = "Directory"
    }(u = t.EntryStatus || (t.EntryStatus = {}));
    class d extends a.default {
      constructor(e = {}) {
        super(), this.encode = (e, t) => e, this.decode = (e, t) => e, this.displayedCount = 0, this.totalCount = 0, this.listFilter = e => e, this.emitListChanged = o(() => {
          this.list("/").then(e => {
            this.emit(l.ListChanged, e)
          })
        }, 100), this.changedFileNames = [], this.__emitFilesChanged = o(() => {
          const e = this.changedFileNames;
          return this.changedFileNames = [], Promise.all(e.map(e => this.read(e, "Text").catch(() => null))).then(t => {
            if (0 === t.length) return;
            const r = t.map((t, r) => ({
              content: t,
              fileName: e[r]
            })).filter(e => !!e.content);
            this.emit(l.FilesChanged, r)
          })
        }, 100), e.decode && (this.decode = e.decode), e.encode && (this.encode = e.encode), e.listFilter && (this.listFilter = e.listFilter)
      }
      getPathLib() {
        return this.isWin32Path() ? s.win32 : s.posix
      }
      relativePath(e, t) {
        const r = t ? this.dirPath(e) : this.filePath(e),
          n = this.dirPath("/");
        return this.getPathLib().relative(n, r)
      }
      entryPath(e, t) {
        return t ? this.dirPath(e) : this.filePath(e)
      }
      list(e = "/", t = !1) {
        return this.__list(e, t).then(e => this.sortEntries(e))
      }
      listR(e = "/") {
        const t = e => this.list(e, !1).then(e => Promise.all(e.map(e => e.isDirectory ? t(e.fullPath) : Promise.resolve(null))).then(t => this.sortEntries(e.map((e, r) => Object.assign(Object.assign({}, e), {
          children: t[r] || []
        })))));
        return t(e).then(t => "/" !== e ? t : Promise.resolve(this.listFilter(t)).then(e => (this.totalCount = i.sum(...t.map(i.nodeCount)), this.displayedCount = i.sum(...e.map(i.nodeCount)), e)))
      }
      getDisplayCount() {
        return this.displayedCount
      }
      getTotalCount() {
        return this.totalCount
      }
      exists(e) {
        return this.stat(e).then(({
          isFile: e,
          isDirectory: t
        }) => e || t, () => !1)
      }
      fileExists(e) {
        return this.stat(e).then(e => e.isFile, () => !1)
      }
      directoryExists(e) {
        return this.stat(e, !0).then(e => e.isDirectory, () => !1)
      }
      readR(e, t = "Text", r) {
        return this.listR(e).then(e => Promise.all(e.map(e => {
          if (e.isFile) return this.read(e.fullPath, t).then(t => [{
            content: t,
            filePath: e.fullPath
          }]);
          if (e.isDirectory) return this.readR(e.fullPath, t);
          throw new Error("Not file or directory")
        })).then(e => i.flatten(e)))
      }
      write(e, t) {
        return this.exists(e).then(r => this.__write(e, t).then(() => {
          r || this.emitListChanged(), this.emitFilesChanged([e])
        }))
      }
      overwrite(e, t) {
        return this.__overwrite(e, t).then(() => {
          this.emitFilesChanged([e])
        })
      }
      bulkWrite(e) {
        return Promise.all(e.map(e => this.write(e.filePath, e.content))).then(() => {})
      }
      removeFile(e) {
        return this.__removeFile(e).then(() => {
          this.emitListChanged()
        })
      }
      removeEmptyDirectory(e) {
        return this.__removeEmptyDirectory(e).then(() => {
          this.emitListChanged()
        })
      }
      removeDirectory(e) {
        return this.remove(e, !0)
      }
      remove(e, t) {
        return this.stat(e, t).then(e => {
          if (e.isFile) return this.removeFile(e.fullPath);
          if (e.isDirectory) return this.list(e.fullPath).then(t => Promise.all(t.map(e => this.remove(e.fullPath, e.isDirectory))).then(() => this.removeEmptyDirectory(e.fullPath)));
          throw new Error("Not file or directory")
        })
      }
      clear() {
        return this.list("/").then(e => Promise.all(e.map(e => this.remove(e.fullPath))).then(() => {}))
      }
      moveFile(e, t) {
        return this.__moveFile(e, t).then(() => {
          this.emitListChanged()
        })
      }
      copyFile(e, t) {
        return this.__copyFile(e, t).then(() => {
          this.emitListChanged()
        })
      }
      moveDirectory(e, t) {
        return this.move(e, t, !0, !0)
      }
      copyDirectory(e, t) {
        return this.copy(e, t, !0, !0)
      }
      move(e, t, r, n) {
        const a = this.entryPath(e, r),
          o = this.entryPath(t, n);
        if (a === o) throw new Error("move: src should not be the same as dst");
        if (this.getPathLib().dirname(a) === o) throw new Error("move: cannot move to original dir");
        if (r && n && this.isTargetInSourceDirectory(t, e)) throw new Error("Cannot move a directory into its sub directory");
        return this.copy(e, t, r, n).then(() => this.remove(e, r))
      }
      copy(e, t, r, n) {
        const a = this.getPathLib().dirname(e) === this.getPathLib().dirname(t);
        if (e === t) throw new Error("copy: dst should not be the same as src");
        return Promise.all([this.getEntryStatus(e, r), this.getEntryStatus(t, n), a ? Promise.resolve(u.Directory) : this.getEntryStatus(this.getPathLib().dirname(t), !0)]).then(r => {
          const [n, a, o] = r;
          if (o !== u.Directory) throw new c.ENOTDIR(this.getPathLib().dirname(t));
          switch (n) {
            case u.NonExistent:
              throw new c.ENOENT(e);
            case u.Unknown:
              throw new Error(`source (${e}) exists but is neither a file nor a directory`);
            case u.File:
              switch (a) {
                case u.File:
                  throw new c.EEXIST(t);
                case u.Unknown:
                  throw new Error(`dst '${t}' is neither a file nor directory`);
                case u.Directory: {
                  const r = this.getPathLib().resolve(t, this.getPathLib().basename(e));
                  return this.copyFile(e, r)
                }
                case u.NonExistent:
                  return this.copyFile(e, t)
              }
              case u.Directory:
                switch (a) {
                  case u.File:
                    throw new Error(`dst '${t}' is an existing file, but src '${e}' is a directory`);
                  case u.Unknown:
                    throw new Error(`dst '${t}' is neither a file nor directory`);
                  case u.Directory: {
                    if (this.isTargetInSourceDirectory(t, e)) throw new Error("Cannot copy a directory into its sub directory");
                    const r = this.getPathLib().resolve(t, this.getPathLib().basename(e));
                    return this.ensureDirectory(r).then(() => this.copyAllInDirectory(e, r))
                  }
                  case u.NonExistent:
                    return this.ensureDirectory(t).then(() => this.copyAllInDirectory(e, t))
                }
          }
        })
      }
      createDirectory(e) {
        return this.mkdir(e, !1)
      }
      ensureDirectory(e) {
        return this.getEntryStatus(e, !0).then(t => {
          switch (t) {
            case u.File:
            case u.Unknown:
              throw new c.EEXIST;
            case u.Directory:
              return;
            case u.NonExistent:
              return this.mkdir(e, !0)
          }
        })
      }
      ensureDir() {
        return this.ensureDirectory("/")
      }
      rename(e, t) {
        return this.move(e, t)
      }
      readAll(e = "Text", t) {
        return this.list("/").then(r => Promise.all(r.filter(e => e.isFile).map(t => this.read(t.fullPath, e).then(e => ({
          content: e,
          fileName: t.name
        })).catch(e => ({
          fileName: t.name,
          fullFilePath: t.fullPath,
          error: new Error(`Error in parsing ${t.fullPath}:\n${e.message}`)
        })))).then(e => {
          const r = e.filter(e => e.error);
          return t && t(r), e.filter(e => e.content)
        }))
      }
      isTargetInSourceDirectory(e, t) {
        const r = this.dirPath(e),
          n = this.dirPath(t),
          a = this.getPathLib().sep;
        return -1 === this.getPathLib().relative(n, r).split(a).indexOf("..")
      }
      sortEntries(e) {
        const t = [...e];
        return t.sort((e, t) => {
          if (e.isDirectory && t.isFile) return -1;
          if (e.isFile && t.isDirectory) return 1;
          const r = e.name.toLowerCase(),
            n = t.name.toLowerCase();
          return r < n ? -1 : r > n ? 1 : 0
        }), t
      }
      copyAllInDirectory(e, t) {
        return this.list(e).then(e => Promise.all(e.map(e => {
          if (e.isFile) return this.copyFile(e.fullPath, this.getPathLib().resolve(t, e.name));
          if (e.isDirectory) {
            const r = this.getPathLib().resolve(t, e.name);
            return this.ensureDirectory(r).then(() => this.copyAllInDirectory(e.fullPath, r))
          }
          return Promise.resolve()
        })).then(() => {}))
      }
      mkdir(e, t = !1) {
        return (() => t ? Promise.resolve() : this.getEntryStatus(e, !0).then(t => {
          if (t !== u.NonExistent) throw new c.EEXIST(e)
        }))().then(() => {
          const t = this.getPathLib().dirname(e);
          return "/" === t ? this.__createDirectory(e) : this.getEntryStatus(t, !0).then(r => {
            switch (r) {
              case u.File:
              case u.Unknown:
                throw new c.EEXIST(t);
              case u.Directory:
                return this.__createDirectory(e);
              case u.NonExistent:
                return this.mkdir(t, !0).then(() => this.__createDirectory(e))
            }
          })
        }).then(() => {
          this.emitListChanged()
        })
      }
      getEntryStatus(e, t) {
        return this.stat(e, t).then(e => e.isFile ? u.File : e.isDirectory ? u.Directory : u.NonExistent, e => u.NonExistent)
      }
      emitFilesChanged(e) {
        this.changedFileNames = e.reduce((e, t) => (-1 === e.indexOf(t) && e.push(t), e), this.changedFileNames), this.__emitFilesChanged()
      }
    }
    t.StandardStorage = d
  },
  85: function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(382),
      a = new(r.n(n).a)("selenium-ide");
    a.version(1).stores({
      testCases: "id,name,updateTime"
    }), a.version(2).stores({
      testCases: "id,name,updateTime",
      testSuites: "id,name,updateTime"
    }), a.open(), t.default = a
  },
  86: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(91),
      a = r(61),
      o = r(13);
    class i extends n.XModule {
      getName() {
        return n.XModuleTypes.XUserIO
      }
      getAPI() {
        return a.getNativeXYAPI()
      }
      initConfig() {
        return this.getConfig()
      }
      sanityCheck() {
        return Promise.all([this.getConfig(), this.getAPI().getVersion().then(() => this.getAPI(), () => this.getAPI().reconnect()).catch(e => {
          throw new Error("Error #301: RealUser Simulation XModule is not installed yet")
        })]).then(() => !0)
      }
      checkUpdate() {
        return Promise.reject(new Error("checkUpdate is not implemented yet"))
      }
      checkUpdateLink(e, t) {
        return `https://ui.vision/x/idehelp?help=xclick_updatecheck&xversion=${e}&kantuversion=${t}`
      }
      downloadLink() {
        return "https://ui.vision/x/idehelp?help=xclick_download"
      }
      infoLink() {
        return "https://ui.vision/x/idehelp?help=xclick"
      }
    }
    t.XUserIO = i, t.getXUserIO = o.singletonGetter(() => new i)
  },
  87: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      function(e) {
        let t, r, n;
        ! function(e) {
          e.DisplayVisualResult = "display_visual_result", e.DisplayOcrResult = "display_ocr_result", e.Capture = "capture"
        }(t = e.RequestType || (e.RequestType = {})),
        function(e) {
          e[e.Storage = 0] = "Storage", e[e.HardDrive = 1] = "HardDrive", e[e.CV = 2] = "CV", e[e.DataUrl = 3] = "DataUrl"
        }(r = e.ImageSource || (e.ImageSource = {})),
        function(e) {
          e[e.Match = 0] = "Match", e[e.Reference = 1] = "Reference", e[e.BestMatch = 2] = "BestMatch", e[e.ReferenceOfBestMatch = 3] = "ReferenceOfBestMatch"
        }(n = e.RectType || (e.RectType = {}))
      }(t.DesktopScreenshot || (t.DesktopScreenshot = {}))
  },
  88: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
      }),
      function(e) {
        e.Timer = "timer", e.LoopTimer = "loop_timer", e.Countdown = "countdown"
      }(t.MacroInspector || (t.MacroInspector = {}))
  },
  89: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(88),
      a = r(970),
      o = r(971),
      i = r(972),
      s = r(13);
    var c;
    ! function(e) {
      e[e.Constructor = 0] = "Constructor", e[e.Restart = 1] = "Restart"
    }(c = t.MacroParamsProviderType || (t.MacroParamsProviderType = {}));
    class l extends a.Monitor {
      constructor(e) {
        super({
          [n.MacroInspector.Timer]: e => new o.Timer,
          [n.MacroInspector.LoopTimer]: e => new o.Timer,
          [n.MacroInspector.Countdown]: t => {
            const r = e(c.Constructor, n.MacroInspector.Countdown, t, !1)[0];
            return new i.Countdown(r)
          }
        }, (t, r, n) => e(c.Restart, t, r, n))
      }
    }
    t.MacroMonitor = l, t.getMacroMonitor = s.singletonGetter(e => new l(e))
  },
  90: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    class n {
      constructor(e, t, r, n) {
        this.requestObject = {
          id: e,
          method: t,
          params: r
        }, this.callback = n
      }
      get request() {
        return this.requestObject
      }
    }
    t.NativeMessagingHost = class {
      constructor(e) {
        this.internalHostName = e, this.nextInvocationId = 1, this.queue = new Array, this.handleMessage = this.handleMessage.bind(this), this.handleDisconnect = this.handleDisconnect.bind(this)
      }
      processResponse(e, t, r) {
        let n = void 0;
        for (let t = 0; t < this.queue.length; ++t) {
          const r = this.queue[t];
          if (r.request.id === e) {
            n = r.callback, this.queue.splice(t, 1);
            break
          }
        }
        n && n(t, r)
      }
      handleMessage(e) {
        const t = e;
        "number" == typeof t.id && this.processResponse(t.id, t.result, t.error)
      }
      handleDisconnect() {
        this.disconnect()
      }
      get hostName() {
        return this.internalHostName
      }
      connectAsync() {
        return this.port || (this.port = chrome.runtime.connectNative(this.hostName), this.port.onMessage.addListener(this.handleMessage), this.port.onDisconnect.addListener(this.handleDisconnect)), this.invokeAsync("get_version", void 0)
      }
      disconnect() {
        const e = chrome.runtime.lastError && chrome.runtime.lastError.message || "Disconnected";
        this.port && (this.port.disconnect(), this.port = void 0);
        const t = this.queue.map(e => e.request.id);
        for (const r of t) this.processResponse(r, void 0, {
          message: e
        });
        this.queue = new Array
      }
      invoke(e, t, r) {
        if (!this.port) return void r(void 0, {
          message: "Disconnected"
        });
        const a = this.nextInvocationId++,
          o = new n(a, e, t, r);
        this.queue.push(o), this.port.postMessage(o.request)
      }
      invokeAsync(e, t) {
        return new Promise((r, n) => {
          this.invoke(e, t, (e, t) => {
            chrome.runtime.lastError && (t = new Error(chrome.runtime.lastError.message)), t ? n(t) : r(e)
          })
        })
      }
    }
  },
  91: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(36));
    ! function(e) {
      e.XFile = "xFile", e.XUserIO = "xClick", e.XDesktop = "xDesktop"
    }(t.XModuleTypes || (t.XModuleTypes = {}));
    t.XModule = class {
      constructor() {
        this.cachedConfig = {}, this.initConfig()
      }
      getVersion() {
        return this.getAPI().reconnect().catch(e => {
          throw new Error(`${this.getName()} is not installed yet`)
        }).then(e => e.getVersion().then(e => ({
          version: e,
          installed: !0
        }))).catch(e => ({
          installed: !1
        }))
      }
      setConfig(e) {
        return this.cachedConfig = Object.assign(Object.assign({}, this.cachedConfig), e), this.getConfig().then(t => {
          const r = Object.assign(Object.assign({}, t), e);
          return a.default.set(this.getStoreKey(), r).then(e => (e && (this.cachedConfig = r), e))
        })
      }
      getConfig() {
        return a.default.get(this.getStoreKey()).then(e => (this.cachedConfig = e || {}, this.cachedConfig))
      }
      getCachedConfig() {
        return this.cachedConfig
      }
      getStoreKey() {
        return this.getName().toLowerCase()
      }
    }
  },
  93: function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, "openBgWithCs", (function() {
      return m
    })), r.d(t, "csInit", (function() {
      return p
    })), r.d(t, "bgInit", (function() {
      return h
    }));
    var n = r(80),
      a = r.n(n),
      o = r(39),
      i = r(10),
      s = r.n(i),
      c = r(11),
      l = r.n(c),
      u = r(4),
      d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      m = function(e) {
        var t = function(t) {
          return t + "_" + e
        };
        return {
          ipcCs: function(e) {
            var r = [];
            return s.a.runtime.onMessage.addListener((function(e, n, a) {
              return e.type !== t("BG_ANSWER_CS") && e.type !== t("BG_ASK_CS") || a(!0), r.forEach((function(t) {
                return t(e, n)
              })), !0
            })), a()({
              timeout: -1,
              checkReady: e,
              ask: function(e, r, n) {
                return s.a.runtime.sendMessage({
                  type: t("CS_ASK_BG"),
                  uid: e,
                  cmd: r,
                  args: n
                })
              },
              onAnswer: function(e) {
                r.push((function(r, n) {
                  r.type === t("BG_ANSWER_CS") && e(r.uid, r.err, r.data)
                }))
              },
              onAsk: function(e) {
                r.push((function(r, n) {
                  r.type === t("BG_ASK_CS") && e(r.uid, r.cmd, r.args)
                }))
              },
              answer: function(e, r, n) {
                return s.a.runtime.sendMessage({
                  type: t("CS_ANSWER_BG"),
                  uid: e,
                  err: r,
                  data: n
                })
              },
              destroy: function() {
                r = []
              }
            })
          },
          ipcBg: function(e) {
            var r = [],
              n = function(e, t) {
                return e && "object" === (void 0 === e ? "undefined" : d(e)) ? (e.sender = t, e) : e
              };
            return s.a.runtime.onMessage.addListener((function(e, n, a) {
              return e.type !== t("CS_ANSWER_BG") && e.type !== t("CS_ASK_BG") || a(!0), r.forEach((function(t) {
                return t(e, n)
              })), !0
            })), a()({
              timeout: -1,
              ask: function(r, n, a) {
                return s.a.tabs.sendMessage(e, {
                  type: t("BG_ASK_CS"),
                  uid: r,
                  cmd: n,
                  args: a
                })
              },
              onAnswer: function(e) {
                r.push((function(r, a) {
                  r.type === t("CS_ANSWER_BG") && e(r.uid, r.err, n(r.data, a))
                }))
              },
              onAsk: function(e) {
                r.push((function(r, a) {
                  r.type === t("CS_ASK_BG") && e(r.uid, r.cmd, n(r.args, a))
                }))
              },
              answer: function(r, n, a) {
                return s.a.tabs.sendMessage(e, {
                  type: t("BG_ANSWER_CS"),
                  uid: r,
                  err: n,
                  data: a
                })
              },
              destroy: function() {
                r = []
              }
            })
          }
        }
      },
      p = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = "" + Math.floor(1e4 * Math.random());
        if (e) return s.a.runtime.sendMessage({
          type: "CONNECT",
          cuid: t
        }), m(t).ipcCs();
        if (l()("sending Connect..."), s.a.extension.getURL) try {
          var r = function() {
              return Object(u.withTimeout)(500, (function() {
                return s.a.runtime.sendMessage({
                  type: "RECONNECT"
                }).then((function(e) {
                  if (l()("got existing cuid", e), e) return m(e).ipcCs();
                  throw new Error("failed to reconnect")
                }))
              }))
            },
            n = function() {
              return Object(u.withTimeout)(1e3, (function() {
                return s.a.runtime.sendMessage({
                  type: "CONNECT",
                  cuid: t
                }).then((function(e) {
                  if (e) return m(t).ipcCs();
                  throw new Error("not done")
                }))
              }))
            },
            a = Object(u.retry)(n, {
              shouldRetry: function() {
                return !0
              },
              retryInterval: 0,
              timeout: 5e3
            });
          return Object(u.mockAPIWith)((function() {
            return r().catch((function() {
              return a()
            })).catch((function(e) {
              throw l.a.error("Failed to create cs ipc"), e
            }))
          }), {
            ask: function() {
              return Promise.reject(new Error("mock ask"))
            },
            onAsk: function() {
              for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
              l.a.apply(void 0, ["mock onAsk"].concat(t))
            },
            destroy: function() {},
            secret: t
          }, ["ask"])
        } catch (e) {
          l.a.error(e.stack)
        }
      },
      h = function(e) {
        s.a.runtime.onMessage.addListener((function(t, r, n) {
          switch (t.type) {
            case "CONNECT":
              t.cuid && (e(r.tab.id, t.cuid, m(t.cuid).ipcBg(r.tab.id)), n(!0));
              break;
            case "RECONNECT":
              var a = Object(o.getIpcCache)().getCuid(r.tab.id);
              a && Object(o.getIpcCache)().enable(r.tab.id), n(a || null)
          }
          return !0
        }))
      }
  },
  931: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = n(r(0)),
      o = n(r(1)),
      i = r(4),
      s = r(13),
      c = r(127);
    class l extends a.default.Component {
      constructor() {
        super(...arguments), this.state = {}, this.onClick = e => {
          const {
            data: t,
            onClick: r,
            paths: n,
            foldOnClickTitle: a
          } = this.props;
          r && r(t, n, e), a && t.type === c.FileNodeType.Folder && this.onToggle(e)
        }, this.onDoubleClick = e => {
          const {
            data: t,
            onDoubleClick: r,
            paths: n
          } = this.props;
          r && r(t, n, e)
        }, this.onContextMenu = e => {
          const {
            data: t,
            onContextMenu: r,
            paths: n
          } = this.props;
          r && r(t, n, e)
        }, this.onToggle = e => {
          e.stopPropagation();
          const {
            data: t,
            onToggle: r,
            paths: n
          } = this.props;
          r && r(t, n, e)
        }
      }
      render() {
        const {
          decorate: e = (e => e)
        } = this.props;
        return e(a.default.createElement("div", {
          id: s.normalizeHtmlId(this.props.data.id),
          className: i.cn("tree-node", this.props.commonClass, this.props.data.className)
        }, a.default.createElement("div", {
          className: "tree-node-content",
          onClick: this.onClick,
          onDoubleClick: this.onDoubleClick,
          onContextMenu: this.onContextMenu
        }, a.default.createElement("div", {
          className: "tree-node-icon-wrapper",
          onClick: this.onToggle
        }, this.renderIcon()), a.default.createElement("div", {
          className: "tree-node-item-wrapper"
        }, this.renderItem()), this.renderItemExtra()), a.default.createElement("div", {
          className: "tree-node-children"
        }, this.renderSubnodes())))
      }
      renderIcon() {
        const {
          renderIcon: e,
          data: t,
          paths: r
        } = this.props;
        return "function" == typeof e ? e(t, r) : this.defaultRenderIcon(t)
      }
      renderItem() {
        const {
          renderItem: e,
          data: t,
          paths: r
        } = this.props;
        return "function" == typeof e ? e(t, r) : this.defaultRenderItem(t)
      }
      renderItemExtra() {
        const {
          renderItemExtra: e,
          data: t,
          paths: r
        } = this.props;
        return "function" == typeof e ? e(t, r) : null
      }
      defaultRenderIcon(e) {
        return a.default.createElement("div", {
          className: i.cn("node-icon")
        }, e.folded ? "C" : "O")
      }
      defaultRenderItem(e) {
        return e.text || `node at level ${e.level}`
      }
      renderSubnodes() {
        const {
          data: e,
          paths: t,
          subnodeComponent: r = (() => l)
        } = this.props, n = s.without(["data", "paths"], this.props);
        return e.type !== c.FileNodeType.Folder || e.folded ? null : (e.children || []).map((e, o) => {
          const i = r(e, [...t, o]);
          return a.default.createElement(i, Object.assign({
            key: o
          }, n, {
            data: e,
            paths: [...t, o]
          }))
        })
      }
    }
    t.TreeNode = l, l.propTypes = {
      data: o.default.object.isRequired,
      renderItem: o.default.func.isRequired,
      renderIcon: o.default.func.isRequired,
      renderItemExtra: o.default.func,
      decorate: o.default.func,
      onClick: o.default.func.isRequired,
      onDoubleClick: o.default.func.isRequired,
      onContextMenu: o.default.func.isRequired,
      onToggle: o.default.func.isRequired,
      className: o.default.string
    }
  },
  932: function(e, t, r) {
    var n = r(933);
    "string" == typeof n && (n = [
      [e.i, n, ""]
    ]);
    var a = {
      transform: void 0
    };
    r(123)(n, a);
    n.locals && (e.exports = n.locals)
  },
  933: function(e, t, r) {
    (e.exports = r(122)(void 0)).push([e.i, '.file-root{padding-top:10px;font-size:14px;line-height:18px}.file-root.drag-over{background:#d5d6f9}.file-root .tree-node-content{position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5px 10px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.file-root .tree-node-content,.file-root .tree-node-content .tree-node-icon-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.file-root .tree-node-content .tree-node-icon-wrapper{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:5px;width:20px}.file-root .tree-node-content .more-button{display:none;position:absolute;top:50%;right:10px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.file-root .tree-node-content:hover .more-button{display:block}.file-root .file-node.drag-over{background:#d5d6f9}.file-root .file-node.success>.tree-node-content{background:#d1ffd8}.file-root .file-node.success.blur>.tree-node-content{background:rgba(209,255,216,.6)}.file-root .file-node.error>.tree-node-content{background:#f7c1c1}.file-root .file-node.error.blur>.tree-node-content{background:hsla(0,77%,86%,.6)}.file-root .file-node.error-in-sub>.tree-node-content{background:#f8cf9d}.file-root .file-node.error-in-sub.blur>.tree-node-content{background:hsla(33,87%,79%,.6)}.file-root .file-node.selected>.tree-node-content{background:#fdffd1}.file-root .file-node.selected.blur>.tree-node-content{background:rgba(253,255,209,.6)}.file-root .file-node.selected.error-in-sub>.tree-node-content,.file-root .file-node.selected.error>.tree-node-content,.file-root .file-node.selected.success>.tree-node-content{position:relative}.file-root .file-node.selected.error-in-sub>.tree-node-content:after,.file-root .file-node.selected.error>.tree-node-content:after,.file-root .file-node.selected.success>.tree-node-content:after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none}.file-root .file-node.selected.error>.tree-node-content:after{border:4px solid #f7c1c1}.file-root .file-node.selected.error.blur>.tree-node-content:after{border-color:hsla(0,77%,86%,.6)}.file-root .file-node.selected.error-in-sub>.tree-node-content:after{border:4px solid #f8cf9d}.file-root .file-node.selected.error-in-sub.blur>.tree-node-content:after{border-color:hsla(33,87%,79%,.6)}.file-root .file-node.selected.success>.tree-node-content:after{border:4px solid #d1ffd8}.file-root .file-node.selected.success.blur>.tree-node-content:after{border-color:rgba(209,255,216,.6)}.file-root .file-node .file-icon,.file-root .file-node .folder-icon{height:16px}.file-root .tree-node .tree-node .tree-node-content{padding-left:25px}.file-root .tree-node .tree-node .tree-node .tree-node-content{padding-left:40px}.file-root .tree-node .tree-node .tree-node .tree-node .tree-node-content{padding-left:55px}.file-root .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node-content{padding-left:70px}.file-root .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node-content{padding-left:85px}.file-root .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node-content{padding-left:100px}.file-root .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node-content{padding-left:115px}.file-root .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node-content{padding-left:130px}.file-root .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node-content{padding-left:145px}.file-root .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node .tree-node-content{padding-left:160px}', ""])
  },
  935: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    class n extends Error {}
    t.StackError = n;
    t.Stack = class {
      constructor(e) {
        this.list = [], e && e.length && (this.list = e)
      }
      clear() {
        this.list = []
      }
      toArray() {
        return [...this.list]
      }
      getCount() {
        return this.list.length
      }
      isEmpty() {
        return 0 === this.getCount()
      }
      contains(e) {
        return !!this.list.find(t => t === e)
      }
      push(e) {
        this.list.push(e)
      }
      peek() {
        return this.guardNotEmpty(), this.list[this.getCount() - 1]
      }
      bottom() {
        return this.guardNotEmpty(), this.list[0]
      }
      pop() {
        return this.guardNotEmpty(), this.list.pop()
      }
      guardNotEmpty() {
        if (this.isEmpty()) throw new n("empty stack")
      }
    }
  },
  94: function(e, t, r) {
    "use strict";
    var n = this && this.__importDefault || function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    };
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const a = r(332),
      o = r(13),
      i = r(333),
      s = r(334),
      c = r(4),
      l = r(22),
      u = n(r(11)),
      d = n(r(28));

    function m(e) {
      switch (e.errorCode) {
        case 0:
          return e;
        case 2:
          throw new Error("Cannot find green and/or pink boxes");
        case 3:
          throw new Error("Pattern image contains green box but does not contain pink box");
        case 4:
          throw new Error("Pattern image contains more than one green box");
        case 5:
          throw new Error("Pattern image contains more than one pink box");
        case 1:
          throw new Error("Unspecified error has occured");
        default:
          throw new Error(`Unknown error code ${e.errorCode}`)
      }
    }

    function p(e, t, r) {
      const n = e.width,
        a = e.height,
        o = e.data,
        i = new Uint8Array(n * a * 3);
      for (let e = 0; e < a; ++e)
        for (let t = 0; t < n; ++t) {
          const r = e * n + t,
            a = 3 * r,
            s = 4 * r;
          i[a + 0] = o[s + 0], i[a + 1] = o[s + 1], i[a + 2] = o[s + 2]
        }
      return {
        width: n,
        height: a,
        dpiX: t,
        dpiY: r,
        data: s.base64.encode(i)
      }
    }

    function h(e, t, r) {
      return l.imageDataFromUrl(e).then(e => p(e, t, r))
    }
    t.getNativeCVAPI = o.singletonGetter(() => {
      const e = new i.KantuCVHost;
      let t = e.connectAsync().catch(e => {
        throw u.default.warn("pReady - error", e), e
      });
      const r = a.MethodTypeInvocationNames.reduce((n, a) => {
        const i = o.snakeToCamel(a);
        return n[i] = n => t.then(() => e.invokeAsync(a, n).catch(e => {
          if (r.reconnect().catch(() => {}), "captureDesktop" === i) {
            const e = n.path;
            if (e && /[\\/]/.test(e)) throw new Error(`Failed to captureDesktop, please confirm directory exists at '${d.default.dirname(e)}'`)
          }
          throw e
        })), n
      }, {
        reconnect: () => (e.disconnect(), t = e.connectAsync(), t.then(() => r)),
        searchDesktopWithGuard: e => r.searchDesktop(e).then(m),
        getImageFromDataUrl: (e, t) => r.getImageInfo({
          content: (e => {
            const t = e.indexOf("base64,");
            return -1 === t ? e : e.substr(t + "base64,".length)
          })(e)
        }).then(r => {
          const n = r.dpiX || t || 96,
            a = r.dpiY || t || 96;
          return h(e, n, a)
        }),
        readFileAsArrayBuffer: e => {
          const t = r,
            n = (e, r = 1 / 0, a = 0, o = []) => t.readFileRange({
              rangeStart: a,
              path: e
            }).then(t => {
              const a = t.rangeEnd > t.rangeStart ? o.concat([t.buffer]) : o;
              return t.rangeEnd >= r || t.rangeEnd <= t.rangeStart ? a : n(e, r, t.rangeEnd, a)
            });
          return t.getFileSize({
            path: e
          }).then(t => n(e, t, 0, [])).then(e => o.concatUint8Array(...e.map(e => new Uint8Array(c.dataURItoArrayBuffer(e)))).buffer)
        },
        readFileAsBlob: e => r.readFileAsArrayBuffer(e).then(e => new Blob([e])),
        readFileAsDataURL: (e, t = !0) => r.readFileAsBlob(e).then(e => c.blobToDataURL(e, t)),
        readFileAsText: e => r.readFileAsBlob(e).then(e => c.blobToText(e)),
        readFileAsBinaryString: e => r.readFileAsArrayBuffer(e).then(e => c.arrayBufferToString(e))
      });
      return r
    }), t.guardSearchResult = m, t.convertImageSearchResult = function(e, t = 1) {
      const {
        errorCode: r,
        containsGreenPinkBoxes: n,
        regions: a
      } = e;
      return a.map(e => {
        return (r = e).relativeRect ? {
          matched: {
            left: t * r.relativeRect.x,
            top: t * r.relativeRect.y,
            width: t * r.relativeRect.width,
            height: t * r.relativeRect.height,
            offsetLeft: t * r.relativeRect.x,
            offsetTop: t * r.relativeRect.y,
            score: r.score
          },
          reference: {
            left: t * r.matchedRect.x,
            top: t * r.matchedRect.y,
            width: t * r.matchedRect.width,
            height: t * r.matchedRect.height,
            offsetLeft: t * r.matchedRect.x,
            offsetTop: t * r.matchedRect.y,
            score: r.score
          }
        } : {
          matched: {
            left: t * r.matchedRect.x,
            top: t * r.matchedRect.y,
            width: t * r.matchedRect.width,
            height: t * r.matchedRect.height,
            offsetLeft: t * r.matchedRect.x,
            offsetTop: t * r.matchedRect.y,
            score: r.score
          },
          reference: null
        };
        var r
      })
    }, t.serializeImageData = p, t.serializeDataUrl = h
  },
  95: function(e, t, r) {
    "use strict";
    r.d(t, "b", (function() {
      return L
    })), r.d(t, "c", (function() {
      return $
    })), r.d(t, "a", (function() {
      return Y
    })), r.d(t, "d", (function() {
      return W
    }));
    var n = r(141),
      a = r(182),
      o = r.n(a),
      i = r(4),
      s = r(22),
      c = r(13),
      l = r(60),
      u = r(10),
      d = r.n(u),
      m = r(11),
      p = r.n(m),
      h = r(347),
      f = r.n(h),
      g = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
          }
        }
        return function(t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t
        }
      }();

    function v(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var y = {
      DOWN: 1,
      PRESS: 2,
      UP: 4,
      INPUT: 8
    };
    y.ALL = y.DOWN | y.PRESS | y.UP | y.INPUT;
    var b = function e(t, r) {
      v(this, e), this.modifiers = t, this.ctrlKey = !!(1 & t), this.metaKey = !!(2 & t), this.altKey = !!(4 & t), this.shiftKey = !!(8 & t), this.keyCode = r
    };
    b.CTRL = 1, b.META = 2, b.ALT = 4, b.SHIFT = 8;
    var w = function() {
        function e(t, r) {
          v(this, e), this._charCodeKeyCodeMap = t, this._actionKeyCodeMap = r
        }
        return g(e, [{
          key: "charCodeForKeystroke",
          value: function(e) {
            var t = this._charCodeKeyCodeMap;
            for (var r in t)
              if (Object.prototype.hasOwnProperty.call(t, r)) {
                var n = t[r];
                if (e.keyCode === n.keyCode && e.modifiers === n.modifiers) return parseInt(r, 10)
              } return null
          }
        }, {
          key: "createEventFromKeystroke",
          value: function(e, t, r) {
            var n = r.ownerDocument,
              a = n.defaultView.Event,
              o = void 0;
            try {
              o = new a(e)
            } catch (e) {
              o = n.createEvent("UIEvents")
            }
            switch (o.initEvent(e, !0, !0), e) {
              case "textInput":
                o.data = String.fromCharCode(this.charCodeForKeystroke(t));
                break;
              case "keydown":
              case "keypress":
              case "keyup":
                o.shiftKey = t.shiftKey, o.altKey = t.altKey, o.metaKey = t.metaKey, o.ctrlKey = t.ctrlKey, o.keyCode = "keypress" === e ? this.charCodeForKeystroke(t) : t.keyCode, o.charCode = "keypress" === e ? o.keyCode : 0, o.which = o.keyCode
            }
            return o
          }
        }, {
          key: "dispatchEventsForAction",
          value: function(e, t) {
            var r = this.keystrokeForAction(e);
            this.dispatchEventsForKeystroke(r, t)
          }
        }, {
          key: "dispatchEventsForInput",
          value: function(e, t) {
            for (var r = 0, n = 0, a = e.length; n < a; n++) {
              var o = this.keystrokeForCharCode(e.charCodeAt(n));
              o && (this.dispatchModifierStateTransition(t, r, o.modifiers), this.dispatchEventsForKeystroke(o, t, !1), r = o.modifiers)
            }
            this.dispatchModifierStateTransition(t, r, 0)
          }
        }, {
          key: "dispatchEventsForKeystroke",
          value: function(e, t) {
            var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : y.ALL;
            if (e) {
              r && this.dispatchModifierStateTransition(t, 0, e.modifiers, n);
              var a = void 0;
              if (n & y.DOWN && (a = this.createEventFromKeystroke("keydown", e, t)), a && t.dispatchEvent(a) && this.targetCanReceiveTextInput(t)) {
                var o = void 0;
                if (n & y.PRESS && (o = this.createEventFromKeystroke("keypress", e, t)), o && o.charCode && t.dispatchEvent(o) && n & y.INPUT) {
                  var i = this.createEventFromKeystroke("textInput", e, t);
                  t.dispatchEvent(i);
                  var s = this.createEventFromKeystroke("input", e, t);
                  t.dispatchEvent(s)
                }
              }
              if (n & y.UP) {
                var c = this.createEventFromKeystroke("keyup", e, t);
                t.dispatchEvent(c)
              }
              r && this.dispatchModifierStateTransition(t, e.modifiers, 0)
            }
          }
        }, {
          key: "dispatchModifierStateTransition",
          value: function(e, t, r) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : y.ALL,
              a = t,
              o = 2 == (2 & t),
              i = 2 == (2 & r),
              s = 1 == (1 & t),
              c = 1 == (1 & r),
              l = 8 == (8 & t),
              u = 8 == (8 & r),
              d = 4 == (4 & t),
              m = 4 == (4 & r),
              p = n & y.UP,
              h = n & y.DOWN;
            if (p && !0 === o && !1 === i && (a &= -3, e.dispatchEvent(this.createEventFromKeystroke("keyup", new b(a, this._actionKeyCodeMap.META), e))), p && !0 === s && !1 === c && (a &= -2, e.dispatchEvent(this.createEventFromKeystroke("keyup", new b(a, this._actionKeyCodeMap.CTRL), e))), p && !0 === l && !1 === u && (a &= -9, e.dispatchEvent(this.createEventFromKeystroke("keyup", new b(a, this._actionKeyCodeMap.SHIFT), e))), p && !0 === d && !1 === m && (a &= -5, e.dispatchEvent(this.createEventFromKeystroke("keyup", new b(a, this._actionKeyCodeMap.ALT), e))), h && !1 === o && !0 === i && (a |= 2, e.dispatchEvent(this.createEventFromKeystroke("keydown", new b(a, this._actionKeyCodeMap.META), e))), h && !1 === s && !0 === c && (a |= 1, e.dispatchEvent(this.createEventFromKeystroke("keydown", new b(a, this._actionKeyCodeMap.CTRL), e))), h && !1 === l && !0 === u && (a |= 8, e.dispatchEvent(this.createEventFromKeystroke("keydown", new b(a, this._actionKeyCodeMap.SHIFT), e))), h && !1 === d && !0 === m && (a |= 4, e.dispatchEvent(this.createEventFromKeystroke("keydown", new b(a, this._actionKeyCodeMap.ALT), e))), a !== r) throw new Error("internal error, expected modifier state: " + r + ", got: " + a)
          }
        }, {
          key: "keystrokeForAction",
          value: function(e) {
            var t = null,
              r = 0,
              n = 1 === e.length ? [e] : e.split("+"),
              a = n.pop();
            if (n.forEach((function(t) {
                switch (t.toUpperCase()) {
                  case "CTRL":
                    r |= 1;
                    break;
                  case "META":
                    r |= 2;
                    break;
                  case "ALT":
                    r |= 4;
                    break;
                  case "SHIFT":
                    r |= 8;
                    break;
                  default:
                    throw console.error("parts", n), new Error('in "' + e + '", invalid modifier: ' + t)
                }
              })), a.toUpperCase() in this._actionKeyCodeMap) t = this._actionKeyCodeMap[a.toUpperCase()];
            else {
              if (1 !== a.length) throw new Error('in "' + e + '", invalid action: ' + a);
              var o = this.keystrokeForCharCode(a.charCodeAt(0));
              if (!o) return null;
              r |= o.modifiers, t = o.keyCode
            }
            return new b(r, t)
          }
        }, {
          key: "keystrokeForCharCode",
          value: function(e) {
            return this._charCodeKeyCodeMap[e] || null
          }
        }, {
          key: "targetCanReceiveTextInput",
          value: function(e) {
            return !!e && Object(n.a)(e)
          }
        }]), e
      }(),
      E = {
        32: new b(0, 32),
        33: new b(8, 49),
        34: new b(8, 222),
        35: new b(8, 51),
        36: new b(8, 52),
        37: new b(8, 53),
        38: new b(8, 55),
        39: new b(0, 222),
        40: new b(8, 57),
        41: new b(8, 48),
        42: new b(8, 56),
        43: new b(8, 187),
        44: new b(0, 188),
        45: new b(0, 189),
        46: new b(0, 190),
        47: new b(0, 191),
        48: new b(0, 48),
        49: new b(0, 49),
        50: new b(0, 50),
        51: new b(0, 51),
        52: new b(0, 52),
        53: new b(0, 53),
        54: new b(0, 54),
        55: new b(0, 55),
        56: new b(0, 56),
        57: new b(0, 57),
        58: new b(8, 186),
        59: new b(0, 186),
        60: new b(8, 188),
        61: new b(0, 187),
        62: new b(8, 190),
        63: new b(8, 191),
        64: new b(8, 50),
        65: new b(8, 65),
        66: new b(8, 66),
        67: new b(8, 67),
        68: new b(8, 68),
        69: new b(8, 69),
        70: new b(8, 70),
        71: new b(8, 71),
        72: new b(8, 72),
        73: new b(8, 73),
        74: new b(8, 74),
        75: new b(8, 75),
        76: new b(8, 76),
        77: new b(8, 77),
        78: new b(8, 78),
        79: new b(8, 79),
        80: new b(8, 80),
        81: new b(8, 81),
        82: new b(8, 82),
        83: new b(8, 83),
        84: new b(8, 84),
        85: new b(8, 85),
        86: new b(8, 86),
        87: new b(8, 87),
        88: new b(8, 88),
        89: new b(8, 89),
        90: new b(8, 90),
        91: new b(0, 219),
        92: new b(0, 220),
        93: new b(0, 221),
        94: new b(8, 54),
        95: new b(8, 189),
        96: new b(0, 192),
        97: new b(0, 65),
        98: new b(0, 66),
        99: new b(0, 67),
        100: new b(0, 68),
        101: new b(0, 69),
        102: new b(0, 70),
        103: new b(0, 71),
        104: new b(0, 72),
        105: new b(0, 73),
        106: new b(0, 74),
        107: new b(0, 75),
        108: new b(0, 76),
        109: new b(0, 77),
        110: new b(0, 78),
        111: new b(0, 79),
        112: new b(0, 80),
        113: new b(0, 81),
        114: new b(0, 82),
        115: new b(0, 83),
        116: new b(0, 84),
        117: new b(0, 85),
        118: new b(0, 86),
        119: new b(0, 87),
        120: new b(0, 88),
        121: new b(0, 89),
        122: new b(0, 90),
        123: new b(8, 219),
        124: new b(8, 220),
        125: new b(8, 221),
        126: new b(8, 192)
      };
    w.US_ENGLISH = new w(E, {
      BACKSPACE: 8,
      TAB: 9,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      PAUSE: 19,
      CAPSLOCK: 20,
      ESCAPE: 27,
      PAGEUP: 33,
      PAGEDOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      INSERT: 45,
      DELETE: 46,
      META: 91,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123
    });
    var x, S = w.US_ENGLISH,
      C = function(e) {
        if (null !== e.getAttribute("readonly")) return !1;
        var t = e.tagName.toUpperCase(),
          r = (e.type || "").toLowerCase();
        return "TEXTAREA" === t || "INPUT" === t && -1 !== ["text", "search", "tel", "url", "email", "password", "number"].indexOf(r)
      },
      T = function(e) {
        return null == e
      },
      _ = function(e, t, r) {
        T(e.selectionStart) || (e.selectionStart = t), T(e.selectionEnd) || (e.selectionEnd = void 0 !== r ? r : t)
      },
      O = (x = {
        0: null,
        8: "BACKSPACE",
        9: "TAB",
        10: "ENTER",
        11: null,
        12: null,
        13: null
      }, function(e) {
        return e.length > 1 ? e : x[e.charCodeAt(0)] || e
      });

    function k(e, t, r) {
      var n = (r ? t.split("") : function(e) {
        var t = new RegExp("\\$\\{(" + ["KEY_LEFT", "KEY_UP", "KEY_RIGHT", "KEY_DOWN", "KEY_PGUP", "KEY_PAGE_UP", "KEY_PGDN", "KEY_PAGE_DOWN", "KEY_BKSP", "KEY_BACKSPACE", "KEY_DEL", "KEY_DELETE", "KEY_ENTER", "KEY_TAB"].join("|") + ")\\}");
        return Object(i.splitKeep)(t, e).reduce((function(e, r) {
          return t.test(r) ? e.push(r) : e = e.concat(r.split("")), e
        }), [])
      }(t)).map(O).filter((function(e) {
        return e && e.length
      }));
      e.focus(), e.value && _(e, e.value.length), n.forEach((function(t) {
        var n = function(e) {
          var t;
          if (t = e.match(/^\$\{([^}]+)\}$/)) switch (t[1]) {
            case "KEY_LEFT":
              return "LEFT";
            case "KEY_UP":
              return "UP";
            case "KEY_RIGHT":
              return "RIGHT";
            case "KEY_DOWN":
              return "DOWN";
            case "KEY_PGUP":
            case "KEY_PAGE_UP":
              return "PAGEUP";
            case "KEY_PGDN":
            case "KEY_PAGE_DOWN":
              return "PAGEDOWN";
            case "KEY_BKSP":
            case "KEY_BACKSPACE":
              return "BACKSPACE";
            case "KEY_DEL":
            case "KEY_DELETE":
              return "DELETE";
            case "KEY_ENTER":
              return "ENTER";
            case "KEY_TAB":
              return "TAB"
          }
          return e
        }(t);
        ! function(e, t) {
          if (C(e))
            if (1 === t.length)
              if (T(e.selectionStart)) e.value = e.value + t;
              else {
                var r = e.selectionStart;
                e.value = e.value.substring(0, e.selectionStart) + t + e.value.substring(e.selectionEnd), _(e, r + 1)
              }
          else switch (t) {
            case "ENTER":
              e.value = e.value + "\n", _(e, e.value.length);
              break;
            case "TAB":
              e.value = e.value + "\t", _(e, e.value.length);
              break;
            case "LEFT":
              _(e, e.selectionStart - 1);
              break;
            case "RIGHT":
              _(e, e.selectionEnd + 1);
              break;
            case "BACKSPACE":
              var n = e.selectionStart;
              e.value = e.value.substring(0, e.selectionStart - 1) + e.value.substring(e.selectionEnd), _(e, n - 1);
              break;
            case "DELETE":
              var a = e.selectionEnd;
              e.value = e.value.substring(0, e.selectionStart) + e.value.substring(e.selectionEnd + 1), _(e, a)
          }
        }(e, n), S.dispatchEventsForAction(n, e), r || function(e, t) {
          if ("ENTER" === t && C(e)) {
            var r = function(e, t) {
              for (var r = e; r = r.parentNode;)
                if (r.tagName === t.toUpperCase()) return r;
              return null
            }(e, "FORM");
            r && r.submit()
          }
        }(e, n)
      }))
    }
    var P = r(178),
      I = r(18),
      M = r(26),
      A = r.n(M),
      R = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return function(e, t) {
          var r = [],
            n = !0,
            a = !1,
            o = void 0;
          try {
            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
          } catch (e) {
            a = !0, o = e
          } finally {
            try {
              !n && s.return && s.return()
            } finally {
              if (a) throw o
            }
          }
          return r
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      };

    function D(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e
    }
    var N = function(e, t, r) {
        return o()(e, r || {}).test(t)
      },
      j = function(e) {
        for (var t = document.evaluate(e, document.body, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null), r = [], n = 0, a = t.snapshotLength; n < a; n++) r.push(t.snapshotItem(n));
        return r
      },
      L = function(e) {
        return j(e)[0]
      },
      F = function(e) {
        var t = e.getBoundingClientRect();
        return {
          top: t.top,
          left: t.left
        }
      },
      V = function() {
        return window === window.top ? Promise.resolve({
          x: 0,
          y: 0
        }) : Object(l.postMessage)(window.parent, window, {
          action: "SOURCE_VIEWPORT_OFFSET",
          data: {}
        })
      },
      U = function() {
        var e = {
          eval: function(e) {
            return p()("sending INJECT_RUN_EVAL"), Object(l.postMessage)(window, window, {
              cmd: "INJECT_RUN_EVAL",
              args: {
                code: e
              }
            }, "*", 5e3).then((function(e) {
              return p()("eval result", e), e.result
            }))
          }
        };
        return document.body.getAttribute("data-injected") ? Promise.resolve(e) : (Object(i.insertScript)(d.a.extension.getURL("inject.js")), Object(i.retry)((function() {
          return p()("sending INJECT_READY"), Object(l.postMessage)(window, window, {
            cmd: "INJECT_READY"
          }, "*", 500)
        }), {
          shouldRetry: function() {
            return !0
          },
          timeout: 5e3,
          retryInterval: 0
        })().then((function() {
          return e
        })).catch((function(e) {
          throw p()(e.stack), new Error("fail to inject")
        })))
      },
      B = function(e) {
        return /^#elementfrompoint/i.test(e.trim())
      },
      X = function(e) {
        var t = e.trim().match(/^#elementfrompoint\s*\((\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\)/i);
        if (!t) throw new Error("Invalid '#elementfrompoint' expression");
        var r = parseFloat(t[1]),
          n = parseFloat(t[2]);
        if (r <= 0 || n <= 0) throw new Error("'#elementfrompoint' only accepts positive numbers");
        return [r, n]
      },
      K = function(e) {
        Object(n.a)(e) && "function" == typeof e.focus && e.focus()
      },
      $ = function(e) {
        try {
          return function(e) {
            var t = e.indexOf("=");
            if (/^\//.test(e)) return !0;
            if (/^#elementfrompoint/i.test(e)) return !0;
            if (-1 === t) throw new Error("invalid locator, " + e);
            var r = e.substr(0, t),
              n = e.substr(t + 1);
            if (!n || !n.length) throw new Error("invalid locator, " + e);
            switch (r && r.toLowerCase()) {
              case "id":
              case "name":
              case "identifier":
              case "link":
              case "linktext":
              case "partiallinktext":
              case "css":
              case "xpath":
                return !0;
              default:
                throw new Error("invalid locator, " + e)
            }
          }(e), !0
        } catch (e) {
          return !1
        }
      },
      Y = function(e, t) {
        var r = e.indexOf("="),
          n = void 0;
        if (/^\//.test(e)) n = L(e);
        else if (/^#elementfrompoint/i.test(e.trim())) n = function(e) {
          var t = X(e),
            r = R(t, 2),
            n = r[0],
            a = r[1];
          return document.elementFromPoint(n, a)
        }(e), p()("elementfrompoint", n);
        else {
          if (-1 === r) throw new Error("getElementByLocator: invalid locator, " + e);
          var a = e.substr(0, r),
            o = e.substr(r + 1),
            i = a && a.toLowerCase();
          switch (i) {
            case "id":
              n = document.getElementById(o);
              break;
            case "name":
              n = document.getElementsByName(o)[0];
              break;
            case "identifier":
              n = document.getElementById(o) || document.getElementsByName(o)[0];
              break;
            case "link-notused":
              var c = [].slice.call(document.getElementsByTagName("a")),
                l = o.replace(/^exact:/, ""),
                u = l.match(/^(.+)@POS=(\d+)$/i),
                d = 0;
              u && (l = u[1], d = parseInt(u[2]) - 1), n = c.filter((function(e) {
                return N(l, Object(s.domText)(e))
              }))[d];
              break;
            case "link":
            case "linktext":
            case "partiallinktext":
              var m = [].slice.call(document.getElementsByTagName("a")),
                h = o.match(/^(.+)@POS=(\d+)$/i),
                f = o,
                g = 0;
              h && (f = h[1], g = parseInt(h[2]) - 1);
              var v = "partiallinktext" === i ? "*" + f + "*" : f;
              n = m.filter((function(e) {
                return N(v, Object(s.domText)(e), {
                  flags: "im"
                })
              }))[g];
              break;
            case "css":
              n = document.querySelector(o);
              break;
            case "xpath":
              n = L(o);
              break;
            default:
              throw new Error("getElementByLocator: unsupported locator method, " + a)
          }
        }
        if (!n) throw new Error("getElementByLocator: fail to find element based on the locator, " + e);
        if (t && !Object(s.isVisible)(n)) throw new Error("getElementByLocator: element is found but not visible yet");
        return n
      },
      G = function(e, t) {
        var r = e.indexOf("=");
        if (-1 !== r) {
          var n = e.substr(0, r),
            a = e.substr(r + 1);
          switch (n) {
            case "index":
              var o = parseInt(a, 10),
                i = window.frames,
                s = i[o];
              if (!s) throw new Error("Frame index out of range (index " + a + " in " + i.length + " frames");
              return {
                frame: s
              };
            case "relative":
              if ("top" === a) return {
                frame: window.top
              };
              if ("parent" === a) return {
                frame: window.parent
              };
              throw new Error("Unsupported relative type, " + a)
          }
        } - 1 !== r || /^\/.*/.test(e) || (e = "name=" + e);
        var c = Y(e);
        if (!c || !c.contentWindow) throw new Error("The element found based on " + e + " is NOT a frame/iframe");
        if (!c.getAttribute("src")) {
          var l = d.a.extension.getURL("content_script.js"),
            u = c.contentDocument,
            m = u.constructor.prototype.createElement.call(u, "script");
          m.setAttribute("type", "text/javascript"), m.setAttribute("src", l), u.documentElement.appendChild(m), m.parentNode.removeChild(m), t.hackAlertConfirmPrompt(u)
        }
        return {
          frame: c.contentWindow
        }
      },
      W = function(e, t, r) {
        var n, a, u, m = e.cmd,
          h = e.target,
          g = e.value,
          v = e.extra,
          y = function(e, t) {
            return function() {
              for (var r = arguments.length, n = Array(r), a = 0; a < r; a++) n[a] = arguments[a];
              var o = t.apply(void 0, n);
              return new Promise((function(t, r) {
                try {
                  t(e.apply(void 0, n))
                } catch (e) {
                  r(new Error(o.errorMsg(e.message)))
                }
              }))
            }
          },
          b = y(G, (function(e) {
            return {
              errorMsg: function(t) {
                return "timeout reached when looking for frame '" + e + "'"
              }
            }
          })),
          w = y((function(e, t, n, a) {
            var o = function(e, t, r, n) {
              var a = r || {},
                o = a.extra,
                i = a.targetOptions;
              if (o && o.retryInfo && o.retryInfo.final && i && i.length)
                for (var s = 0, c = i.length; s < c; s++) {
                  var l = i[s];
                  try {
                    var u = Y(l, t);
                    return n.ask("CS_ADD_LOG", {
                      warning: 'Element found with secondary locator "' + l + '". To use it by default, update the target field to use it as primary locator.'
                    }), u
                  } catch (e) {
                    if (s === c - 1) throw e
                  }
                }
              return Y(e, t)
            }(e, t, n, a);
            if (B(e)) {
              var i = "unkown";
              try {
                i = r.xpath(o)
              } catch (e) {}
              var s = e + ' => xpath "' + i + '"';
              a.ask("CS_ADD_LOG", {
                info: s
              })
            }
            return o
          }), (function(e) {
            return {
              errorMsg: function(t) {
                return /element is found but not visible yet/.test(t) ? "element is found but not visible yet for '" + e + "' (use !WaitForVisible = false to disable waiting for visible)" : "timeout reached when looking for element '" + e + "'"
              }
            }
          })),
          E = function(e, t) {
            return w(e, t).then((function() {
              throw t ? new Error("timeout reached when waiting for element '" + e + "' to be not present") : new Error("timeout reached when waiting for element '" + e + "' to be not visible")
            }), (function() {
              return !0
            }))
          };
        switch (m) {
          case "open":
            return !!window.noCommandsYet || Object(i.until)("document.body", (function() {
              return {
                pass: !!document.body,
                result: document.body
              }
            })).then((function(t) {
              return window.location.href = e.target, !0
            }));
          case "refresh":
            return setTimeout((function() {
              return window.location.reload()
            }), 0), !0;
          case "mouseOver":
            return w(h, !1, e, t).then((function(e) {
              try {
                v.playScrollElementsIntoView && e.scrollIntoView({
                  block: "center"
                }), v.playHighlightElements && r.highlightDom(e, 500)
              } catch (e) {
                p.a.error("error in scroll and highlight", e.message)
              }
              return e.dispatchEvent(new MouseEvent("mouseover", {
                bubbles: !0
              })), !0
            }));
          case "locate":
            return w(h, !1, e, t).then((function(e) {
              try {
                v.playScrollElementsIntoView && e.scrollIntoView({
                  block: "center"
                }), v.playHighlightElements && r.highlightDom(e, 500)
              } catch (e) {
                p.a.error("error in scroll and highlight", e.message)
              }
              var t = F(e);
              return V().then((function(r) {
                return {
                  rect: {
                    x: t.left + r.x,
                    y: t.top + r.y,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                  }
                }
              }))
            }));
          case "dragAndDropToObject":
            return Promise.all([w(h, !1, e, t), w(g)]).then((function(e) {
              var t = R(e, 2),
                r = t[0],
                n = t[1];
              return f.a.triggerDragEvent(r, n), !0
            }));
          case "waitForElementVisible":
          case "waitForVisible":
            return w(h, !0, e, t).then((function() {
              return !0
            }));
          case "waitForElementNotVisible":
            return E(h, !0).then((function() {
              return !0
            }));
          case "waitForElementPresent":
            return w(h, !1, e, t).then((function() {
              return !0
            }));
          case "waitForElementNotPresent":
            return E(h, !1).then((function() {
              return !0
            }));
          case "clickAt":
            var x = B(h);
            return (x ? V().then((function(e) {
              p()("iframeOffset", e);
              var t = X(h),
                r = R(t, 2),
                n = r[0],
                a = r[1];
              return "#elementfrompoint (" + (n - e.x) + ", " + (a - e.y) + ")"
            })) : Promise.resolve(h)).then((function(n) {
              return w(n, v.waitForVisible, e, t).then((function(e) {
                if (!/^\d+\s*,\s*\d+$/.test(g) && !B(n)) throw new Error("invalid offset for clickAt: " + g);
                var t = function() {
                    try {
                      v.playScrollElementsIntoView && e.scrollIntoView({
                        block: "center"
                      }), v.playHighlightElements && r.highlightDom(e, 500)
                    } catch (e) {
                      p.a.error("error in scroll and highlight")
                    }
                  },
                  a = function() {
                    if (x) return X(n);
                    var t = g.split(",").map((function(e) {
                        return parseInt(e.trim(), 10)
                      })),
                      r = R(t, 2),
                      a = r[0],
                      o = r[1],
                      i = F(e),
                      s = i.top;
                    return [i.left + a, s + o]
                  }(),
                  o = R(a, 2),
                  i = o[0],
                  s = o[1],
                  c = window.scrollX,
                  l = window.scrollY;
                x || t();
                var u = i + (c - window.scrollX),
                  d = s + (l - window.scrollY);
                return p()("clickAt clientX/clientY", u, d), ["mousedown", "mouseup", "click"].forEach((function(t) {
                  e.dispatchEvent(new MouseEvent(t, {
                    view: window,
                    bubbles: !0,
                    cancelable: !0,
                    clientX: u,
                    clientY: d
                  }))
                })), x && t(), K(e), !0
              }))
            }));
          case "click":
          case "clickAndWait":
            return w(h, v.waitForVisible, e, t).then((function(e) {
              try {
                v.playScrollElementsIntoView && e.scrollIntoView({
                  block: "center"
                }), v.playHighlightElements && r.highlightDom(e, 500)
              } catch (e) {
                p.a.error("error in scroll and highlight")
              }
              return "function" == typeof e.click ? e.click() : e.dispatchEvent(new MouseEvent("click", {
                bubbles: !0
              })), K(e), !0
            }));
          case "check":
          case "uncheck":
            return w(h, v.waitForVisible, e, t).then((function(e) {
              return e.checked = "check" === m, e.dispatchEvent(new Event("change")), !0
            }));
          case "addSelection":
          case "removeSelection":
          case "select":
          case "selectAndWait":
            return w(h, v.waitForVisible, e, t).then((function(e) {
              var t = [].slice.call(e.getElementsByTagName("option")),
                n = g.indexOf("="),
                a = g.substring(0, n),
                o = g.substring(n + 1),
                i = function() {
                  switch (a) {
                    case "label":
                      return t.find((function(e) {
                        return N(o, Object(s.domText)(e).trim())
                      }));
                    case "index":
                      return t.find((function(e, t) {
                        return t === parseInt(o)
                      }));
                    case "id":
                      return t.find((function(e, t) {
                        return e.id === o
                      }));
                    case "value":
                      return t.find((function(e) {
                        return e.value === o
                      }));
                    default:
                      throw new Error('Option type "' + a + '" not supported')
                  }
                }();
              if (!i) throw new Error("cannot find option with '" + g + "'");
              switch (v.playScrollElementsIntoView && e.scrollIntoView({
                block: "center"
              }), v.playHighlightElements && r.highlightDom(e, 500), m) {
                case "addSelection":
                  i.selected = !0;
                  break;
                case "removeSelection":
                  i.selected = !1;
                  break;
                default:
                  e.value = i.value
              }
              return e.dispatchEvent(new Event("change")), !0
            }));
          case "type":
            return w(h, v.waitForVisible, e, t).then((function(e) {
              var n = e.tagName.toLowerCase();
              if ("input" !== n && "textarea" !== n) throw new Error("run command: element found is neither input nor textarea");
              if (v.playScrollElementsIntoView && e.scrollIntoView({
                  block: "center"
                }), v.playHighlightElements && r.highlightDom(e, 500), e.type && "file" === e.type.toLowerCase()) {
                if (d.a.isFirefox()) throw new Error("Setting file path fo file inputs is not supported by Firefox extension api yet");
                return t.ask("CS_SET_FILE_INPUT_FILES", {
                  files: g.split(";"),
                  selector: Object(s.cssSelector)(e)
                })
              }
              return K(e), Object(P.a)(g, e).then((function(t) {
                return e.value = "", t.length <= A.a.commandRunner.sendKeysMaxCharCount && k(e, t, !0), e.value = t, e.dispatchEvent(new Event("change")), !0
              }))
            })).catch((function(e) {
              if (/This input element accepts a filename/i.test(e.message)) throw new Error("Sorry, upload can not be automated Chrome (API limitation).");
              throw e
            }));
          case "editContent":
            return w(h, v.waitForVisible, e, t).then((function(e) {
              if ("true" !== e.contentEditable) throw new Error("Target is not contenteditable");
              return v.playScrollElementsIntoView && e.scrollIntoView({
                block: "center"
              }), v.playHighlightElements && r.highlightDom(e, 500), e.innerHTML = g, !0
            }));
          case "selectFrame":
            return b(h, r).then((function(e) {
              if (!e) throw new Error("Invalid frame/iframe");
              return e
            }));
          case "verifyText":
            return w(h, !1, e, t).then((function(e) {
              var t = Object(s.domText)(e);
              return !!N(g, t) || {
                log: {
                  error: 'text not matched, \n\texpected: "' + g + '", \n\tactual: "' + t + '"'
                }
              }
            }));
          case "verifyTitle":
            return !!N(h, document.title) || {
              log: {
                error: 'title not matched, \n\texpected: "' + h + '", \n\tactual: "' + document.title + '"'
              }
            };
          case "verifyElementPresent":
            var S = v || {},
              C = S.timeoutElement,
              T = S.retryInfo;
            return w(h, !1, e, t).then((function() {
              return !0
            }), (function(e) {
              if (1e3 * C / T.retryInterval - T.retryCount <= 1) return {
                log: {
                  error: "'" + h + "' element not present"
                }
              };
              throw e
            }));
          case "verifyElementNotPresent":
            var _ = v || {},
              O = _.timeoutElement,
              M = _.retryInfo;
            return E(h).then((function() {
              return !0
            }), (function(e) {
              if (1e3 * O / M.retryInterval - M.retryCount <= 1) return {
                log: {
                  error: "'" + h + "' element is still present"
                }
              };
              throw e
            }));
          case "verifyEditable":
            return w(h, !1, e, t).then((function(e) {
              return !!Object(s.isEditable)(e) || {
                log: {
                  error: "'" + h + "' is not editable"
                }
              }
            }));
          case "verifyNotEditable":
            return w(h, !1, e, t).then((function(e) {
              return !Object(s.isEditable)(e) || {
                log: {
                  error: "'" + h + "' is editable"
                }
              }
            }));
          case "verifyChecked":
            return w(h, !1, e, t).then((function(e) {
              return !!e.checked || {
                log: {
                  error: "'" + h + "' is not checked"
                }
              }
            }));
          case "verifyNotChecked":
            return w(h, !1, e, t).then((function(e) {
              return !!!e.checked || {
                log: {
                  error: "'" + h + "' is checked"
                }
              }
            }));
          case "verifyAttribute":
            var L = h.lastIndexOf("@");
            if (-1 === L) throw new Error("invalid target for verifyAttribute - " + h);
            var $ = h.substr(0, L),
              W = h.substr(L + 1);
            return w($, !1, e, t).then((function(e) {
              var t = e.getAttribute(W);
              return !!N(g, t) || {
                log: {
                  error: 'attribute not matched, \n\texpected: "' + g + '", \n\tactual: "' + t + '"'
                }
              }
            }));
          case "verifyError":
            return !v.lastCommandOk || {
              log: {
                error: h
              }
            };
          case "assertText":
            return w(h, !1, e, t).then((function(e) {
              var t = Object(s.domText)(e);
              if (!N(g, t)) throw new Error('text not matched, \n\texpected: "' + g + '", \n\tactual: "' + t + '"');
              return !0
            }));
          case "assertTitle":
            if (!N(h, document.title)) throw new Error('title not matched, \n\texpected: "' + h + '", \n\tactual: "' + document.title + '"');
            return !0;
          case "assertElementPresent":
            return w(h, !1, e, t).then((function() {
              return !0
            }));
          case "assertElementNotPresent":
            return E(h);
          case "assertChecked":
            return w(h, !1, e, t).then((function(e) {
              if (!!!e.checked) throw new Error("'" + h + "' is not checked");
              return !0
            }));
          case "assertNotChecked":
            return w(h, !1, e, t).then((function(e) {
              if (!!e.checked) throw new Error("'" + h + "' is checked");
              return !0
            }));
          case "assertEditable":
            return w(h, !1, e, t).then((function(e) {
              if (!Object(s.isEditable)(e)) throw new Error("'" + h + "' is not editable");
              return !0
            }));
          case "assertNotEditable":
            return w(h, !1, e, t).then((function(e) {
              if (Object(s.isEditable)(e)) throw new Error("'" + h + "' is editable");
              return !0
            }));
          case "assertAttribute":
            var H = h.lastIndexOf("@");
            if (-1 === H) throw new Error("invalid target for assertAttribute - " + h);
            var z = h.substr(0, H),
              q = h.substr(H + 1);
            return w(z, !1, e, t).then((function(e) {
              var t = e.getAttribute(q);
              if (!N(g, t)) throw new Error('attribute not matched, \n\texpected: "' + g + '", \n\tactual: "' + t + '"');
              return !0
            }));
          case "assertError":
            if (v.lastCommandOk) throw new Error(h);
            return !0;
          case "assertAlert":
            var J = document.body.getAttribute("data-alert");
            if (!J) throw new Error("no alert found!");
            if (!N(h, J)) throw new Error('unmatched alert msg, \n\texpected: "' + h + '", \n\tactual: "' + J + '"');
            return document.body.setAttribute("data-alert", ""), !0;
          case "assertConfirmation":
            var Z = document.body.getAttribute("data-confirm");
            if (!Z) throw new Error("no confirm found!");
            if (!N(h, Z)) throw new Error('unmatched confirm msg, \n\texpected: "' + h + '", \n\tactual: "' + Z + '"');
            return document.body.setAttribute("data-confirm", ""), !0;
          case "assertPrompt":
            var Q = document.body.getAttribute("data-prompt");
            if (!Q) throw new Error("no prompt found!");
            if (!N(h, Q)) throw new Error('unmatched prompt msg, \n\texpected: "' + h + '", \n\tactual: "' + Q + '"');
            return document.body.setAttribute("data-prompt", ""), !0;
          case "answerOnNextPrompt":
            return document.body.setAttribute("data-prompt-answer", h), !0;
          case "waitForPageToLoad":
            return !0;
          case "storeXpathCount":
            var ee = h.indexOf("="),
              te = h.substr(0, ee),
              re = h.substr(ee + 1);
            if ("xpath" !== (te && te.toLowerCase())) throw new Error('storeXpathCount: target should start with "xpath="');
            return {
              vars: D({}, g, j(re).length)
            };
          case "storeTitle":
            return {
              vars: D({}, g, document.title)
            };
          case "storeText":
            return w(h, !1, e, t).then((function(e) {
              return {
                vars: D({}, g, Object(s.domText)(e))
              }
            }));
          case "storeAttribute":
            var ne = h.lastIndexOf("@");
            if (-1 === ne) throw new Error("invalid target for storeAttribute - " + h);
            var ae = h.substr(0, ne),
              oe = h.substr(ne + 1);
            return w(ae, !1, e, t).then((function(e) {
              var t = e.getAttribute(oe);
              if (!t) throw new Error("missing attribute '" + oe + "'");
              return {
                vars: D({}, g, t)
              }
            }));
          case "storeEval":
            return U().then((function(e) {
              return e.eval(h).then((function(e) {
                return {
                  vars: D({}, g, e)
                }
              })).catch((function(e) {
                throw new Error("Error in runEval code: " + e.message)
              }))
            }));
          case "storeValue":
            return w(h, !1, e, t).then((function(e) {
              var t = e.value || "";
              return {
                vars: D({}, g, t)
              }
            }));
          case "storeChecked":
            return w(h, !1, e, t).then((function(e) {
              var t = !!e.checked;
              return {
                vars: D({}, g, t)
              }
            }));
          case "verifyValue":
            return w(h, !1, e, t).then((function(e) {
              var t = e.value;
              return !!N(g, t) || {
                log: {
                  error: 'value not matched, \n\texpected: "' + g + '", \n\tactual: "' + t + '"'
                }
              }
            }));
          case "assertValue":
            return w(h, !1, e, t).then((function(e) {
              var t = e.value;
              if (!N(g, t)) throw new Error('value not matched, \n\texpected: "' + g + '", \n\tactual: "' + t + '"');
              return !0
            }));
          case "executeScript":
          case "executeAsyncScript":
            return U().then((function(e) {
              var t = "Promise.resolve((function () { " + h + " })());";
              return e.eval(t).then((function(e) {
                return !g || !g.length || {
                  vars: D({}, g, e)
                }
              })).catch((function(e) {
                throw new Error("Error in " + m + " code: " + e.message)
              }))
            }));
          case "sendKeys":
            return w(h, !1, e, t).then((function(e) {
              return K(e), k(e, g), !0
            }));
          case "selectWindow":
            return function() {
              switch (h && h.toUpperCase()) {
                case "TAB=CLOSEALLOTHER":
                  return t.ask("CS_CLOSE_OTHER_TABS", {});
                case "TAB=CLOSE":
                  return t.ask("CS_CLOSE_CURRENT_TAB", {});
                default:
                  return t.ask("CS_SELECT_WINDOW", {
                    target: h,
                    value: g
                  })
              }
            }().then((function() {
              return !0
            }));
          case "sourceSearch":
          case "sourceExtract":
            if (!h) throw new Error("Must provide text / regular expression to search for");
            if (!g) throw new Error("Must specify a variable to save the result");
            var ie = (a = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return void 0 === e ? 0 : Math.max(0, parseInt(e, 10) + t)
              }, (u = /@\s*(\d+)(?:\s*,\s*(\d+))?\s*$/.exec(n = h)) ? {
                rest: n.substring(0, u.index),
                matchIndex: a(u[1], -1),
                captureIndex: a(u[2])
              } : {
                rest: n,
                matchIndex: 0,
                captureIndex: 0
              }),
              se = ie.rest,
              ce = ie.matchIndex,
              le = ie.captureIndex;
            if ("sourceSearch" === m && se !== h) throw new Error("The @ parameter is only supported in sourceExtract");
            var ue = function() {
                if (!/^regex(=|:)/i.test(se)) return null;
                var e = se.replace(/^regex(=|:)/i, ""),
                  t = /^\/(.*)\/([gimsuy]+)?$/;
                if (!t.test(e)) return Object(i.toRegExp)(e.replace(/^\/|\/g?$/g, ""), {
                  needEncode: !1,
                  flag: "g"
                });
                var r = e.match(t);
                if (!r || !r.length) return null;
                var n = R(r, 3),
                  a = (n[0], n[1]),
                  o = n[2],
                  s = c.uniqueStrings.apply(void 0, ["g"].concat(function(e) {
                    if (Array.isArray(e)) {
                      for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                      return r
                    }
                    return Array.from(e)
                  }(o.split("")))).join("");
                return Object(i.toRegExp)(a, {
                  needEncode: !1,
                  flag: s
                })
              }(),
              de = function() {
                if (ue) return null;
                var e = se.replace(/^text(=|:)/i, "");
                if ("sourceExtract" === m && !/\*/.test(e)) throw new Error("Missing * or REGEX in sourceExtract. Extracting a plain text doesn't make much sense");
                var t = RegExp.prototype.hasOwnProperty("dotAll") ? "gs" : "g";
                return o()(e, {
                  flags: t,
                  capture: !0
                })
              }(),
              me = function() {
                for (var e = document.documentElement.outerHTML, t = ue || de, r = [], n = void 0;
                  (n = t.exec(e)) && (r.push(n), !("sourceExtract" === m && r.length >= ce + 1)););
                return r
              }();
            if (p()("matches", me, ue, de), "sourceSearch" === m) return {
              vars: D({}, g, me.length)
            };
            if ("sourceExtract" === m) {
              return {
                vars: D({}, g, function(e) {
                  return void 0 !== e ? e : "#nomatchfound"
                }((me[ce] || [])[le]))
              }
            }
            throw new Error("Impossible to reach here");
          case "visionLimitSearchArea":
          case "storeImage":
            var pe = void 0,
              he = void 0;
            return "storeImage" === m ? (pe = h, he = g) : "visionLimitSearchArea" === m && (pe = h.trim().replace(/^element:/i, "").trim(), he = I.LAST_SCREENSHOT_FILE_NAME),
              function(e, r) {
                return w(e).then((function(e) {
                  if (!r || !r.length) throw new Error("storeImage: 'value' is required as image name");
                  var n = e.getBoundingClientRect();
                  return (window.top === window ? Promise.resolve({
                    x: 0,
                    y: 0
                  }) : (e.scrollIntoView(), Object(l.postMessage)(window.parent, window, {
                    action: "SOURCE_PAGE_OFFSET",
                    data: {}
                  }))).then((function(e) {
                    var a = {
                      x: e.x + n.x + Object(s.scrollLeft)(document),
                      y: e.y + n.y + Object(s.scrollTop)(document),
                      width: n.width,
                      height: n.height
                    };
                    return t.ask("CS_STORE_SCREENSHOT_IN_SELECTION", {
                      rect: a,
                      fileName: Object(i.ensureExtName)(".png", r),
                      devicePixelRatio: window.devicePixelRatio
                    }).then((function() {
                      return {
                        vars: {
                          "!storedImageRect": a
                        }
                      }
                    }))
                  }))
                }))
              }(pe, he);
          case "captureScreenshot":
            if (!h || !h.length) throw new Error("captureScreenshot: 'target' is required as file name");
            return t.ask("CS_CAPTURE_SCREENSHOT", {
              fileName: Object(i.ensureExtName)(".png", h)
            }).then((function(e) {
              var t = e.fileName;
              return {
                screenshot: {
                  url: e.url,
                  name: t
                }
              }
            }));
          case "captureEntirePageScreenshot":
            if (!h || !h.length) throw new Error("captureEntirePageScreenshot: 'target' is required as file name");
            return t.ask("CS_CAPTURE_FULL_SCREENSHOT", {
              fileName: Object(i.ensureExtName)(".png", h)
            }).then((function(e) {
              var t = e.fileName;
              return {
                screenshot: {
                  url: e.url,
                  name: t
                }
              }
            }));
          case "onDownload":
            return t.ask("CS_ON_DOWNLOAD", {
              fileName: h,
              wait: "true" === (g || "").trim(),
              timeout: 1e3 * v.timeoutDownload,
              timeoutForStart: 1e3 * Math.max(10, v.timeoutElement)
            });
          case "deleteAllCookies":
            return t.ask("CS_DELETE_ALL_COOKIES", {
              url: window.location.origin
            }).then((function() {
              return !0
            }));
          case "if":
          case "while":
          case "gotoIf":
            try {
              return {
                condition: window.eval(h)
              }
            } catch (e) {
              throw new Error("Error in runEval condition of " + m + ": " + e.message)
            }
            default:
              throw new Error("Command " + m + " not supported yet")
        }
      }
  },
  961: function(e, t, r) {
    var n = r(962);
    "string" == typeof n && (n = [
      [e.i, n, ""]
    ]);
    var a = {
      transform: void 0
    };
    r(123)(n, a);
    n.locals && (e.exports = n.locals)
  },
  962: function(e, t, r) {
    (e.exports = r(122)(void 0)).push([e.i, '.header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;padding:0 20px;width:100%;height:44px;border-bottom:2px solid #ccc;background-color:#f9f9f9}.header .status{float:right;line-height:42px;font-size:14px}.header .status h1{margin:0;font-size:20px;line-height:44px}.header .select-case{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:44px;font-size:13px}.header .select-case .test-case-name{margin-right:15px;line-height:35px;max-width:100px;overflow:hidden;display:inline-block;white-space:nowrap;text-overflow:ellipsis}.header .select-case .test-case-name.unsaved{color:orange}.header .select-case .test-case-name.unsaved:after{content:"*";margin-left:3px}.header .actions{margin-top:6px}.header .actions .ant-btn-group>.ant-btn-group{float:none}.header .actions .play-actions{margin:0 10px}.ant-dropdown-menu{max-height:300px;overflow-y:auto}.ant-dropdown-menu .editing{color:blue!important}.settings-modal .ant-tabs-nav .ant-tabs-tab{margin-right:12px;padding:8px 6px}.settings-modal .ant-checkbox-wrapper+.ant-checkbox-wrapper{margin-left:0}.settings-modal .tip{margin-left:15px;color:#aaa}.settings-modal .backup-pane{padding:0 20px}.settings-modal .backup-pane h4{font-size:16px;margin-bottom:10px}.settings-modal .backup-pane .row{margin-bottom:10px}.settings-modal .backup-pane p,.settings-modal .backup-pane ul li{margin-bottom:5px}.settings-modal .api-pane{padding:0 20px 20px}.settings-modal .api-pane p{margin:20px 0}.settings-modal .selenium-pane{padding:0 20px 20px}.settings-modal .selenium-pane h4{font-size:16px;margin-bottom:10px}.settings-modal .selenium-pane .import-row{margin-top:20px;margin-bottom:20px}.settings-modal .selenium-pane .import-row button{margin-right:20px}.settings-modal .security-pane{padding:0 20px 20px}.settings-modal .security-pane h4{font-size:16px;margin-bottom:10px}.settings-modal .security-pane p{margin-bottom:10px}.settings-modal .security-pane label{margin-right:10px}.settings-modal .security-pane .ant-radio-wrapper{display:block;height:30px;line-height:30px}.settings-modal .ocr-pane{padding:0 20px 20px}.settings-modal .ocr-pane p{margin-bottom:10px}.settings-modal .ocr-pane .row{margin-bottom:20px}.settings-modal .ocr-pane .radio-block .ant-radio-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;line-height:30px}.settings-modal .ocr-pane .radio-block .ant-radio-wrapper.need-pro{color:gray}.settings-modal .ocr-pane .radio-block .ant-radio-wrapper .ant-radio{margin-top:8px}.settings-modal .ocr-pane .radio-block .ant-radio-wrapper .offline-label{display:inline-block;width:80px}.settings-modal .ocr-pane .label-text{margin-right:15px}.settings-modal .vision-pane{padding:0 20px 20px}.settings-modal .vision-pane .row,.settings-modal .vision-pane p{margin-bottom:10px}.settings-modal .vision-pane .ant-radio-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;line-height:30px}.settings-modal .vision-pane .ant-radio-wrapper .ant-radio{margin-top:8px}.settings-modal .vision-pane .ant-form-item label{width:280px;color:rgba(0,0,0,.65)}.settings-modal .xmodules-pane{padding:0 0 20px}.settings-modal .xmodules-pane .xmodule-item{margin-bottom:25px;padding:15px;border:2px solid #333;font-size:14px;-webkit-box-shadow:rgba(0,0,0,.5) 0 2px 5px 0;box-shadow:0 2px 5px 0 rgba(0,0,0,.5)}.settings-modal .xmodules-pane .xmodule-item label{margin-right:15px;width:100px;font-size:14px}.settings-modal .xmodules-pane .xmodule-item .xmodule-title{margin-bottom:10px;font-size:14px}.settings-modal .xmodules-pane .xmodule-item .xmodule-title>*{margin-right:20px}.settings-modal .xmodules-pane .xmodule-item .xmodule-title>:last-child{margin-right:0}.settings-modal .xmodules-pane .xmodule-item .xmodule-status{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:20px}.settings-modal .xmodules-pane .xmodule-item .xmodule-status .status-box>*{margin-right:15px}.settings-modal .xmodules-pane .xmodule-item .xmodule-status .status-box>:last-child{margin-right:0}.settings-modal .xmodules-pane .xmodule-item .xmodule-settings h3{margin-bottom:10px;font-size:14px;font-weight:700}.settings-modal .xmodules-pane .xmodule-item .xmodule-settings .xmodule-settings-item .settings-detail{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;margin-bottom:10px}.settings-modal .xmodules-pane .xmodule-item .xmodule-settings .xmodule-settings-item .settings-detail .settings-detail-content{-webkit-box-flex:1;-ms-flex:1;flex:1}.settings-modal .xmodules-pane .xmodule-item .xmodule-settings .check-result{margin-top:5px;color:red;font-size:13px}.settings-modal .register-pane .register-note{width:80%}.settings-modal .register-pane .register-note .actions{margin-top:15px}.settings-modal .register-pane .register-note.inactive,.settings-modal .register-pane .register-note.inactive a{color:#aaa}.settings-modal .register-pane .register-form{margin-top:25px}.settings-modal .register-pane .register-form label{display:block;margin-bottom:10px;font-weight:700}.settings-modal .register-pane .register-form .register-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.settings-modal .register-pane .register-form .register-row input{margin-right:15px;width:40%}.settings-modal .register-pane .register-status{margin-top:25px}.settings-modal .register-pane .register-status a{margin-left:15px}', ""])
  },
  963: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.MethodTypeFriendlyNames = ["GetVersion", "SendMouseEvent", "SendText", "GetActiveBrowserOuterRect", "FindRectangle", "GetScreenBackingScaleFactor"], t.MethodTypeInvocationNames = ["get_version", "send_mouse_event", "send_text", "get_active_browser_outer_rect", "find_rectangle", "get_screen_backing_scale_factor"]
  },
  964: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(90);
    class a extends n.NativeMessagingHost {
      constructor() {
        super(a.HOST_NAME)
      }
    }
    t.KantuXYHost = a, a.HOST_NAME = "com.a9t9.kantu.xy"
  },
  969: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(391);
    class a extends n.Counter {
      constructor(e) {
        super(e), this.ready = !1, this.read = e.read, this.write = e.write
      }
      reset() {
        super.reset(), this.ready = !1, setTimeout(() => {
          this.read().then(e => {
            this.ready = !0, this.n = e
          })
        }, 0)
      }
      inc() {
        if (!this.ready) throw new Error("counter not ready yet");
        const e = super.inc();
        return this.write(this.n), e
      }
    }
    t.PersistentCounter = a
  },
  970: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    const n = r(13);
    t.Monitor = class {
      constructor(e, t) {
        this.inspectorConstructors = {}, this.targets = {}, this.paramsProvider = t, this.inspectorConstructors = e
      }
      addTarget(e, t = !0) {
        this.targets[e] = n.objMap((r, n) => {
          const a = r(e);
          return t && a.restart(...this.paramsProvider(n)), a
        }, this.inspectorConstructors)
      }
      removeTarget(e) {
        this.targets[e] && (n.objMap(e => {
          e.stop()
        }, this.targets[e]), delete this.targets[e])
      }
      clear() {
        Object.keys(this.targets).map(e => {
          this.removeTarget(e)
        })
      }
      restart() {
        this.traverseAllInspectors((e, t, r) => {
          e.restart(...this.paramsProvider(t, r))
        })
      }
      pause() {
        this.traverseAllInspectors(e => {
          e.pause()
        })
      }
      resume() {
        this.traverseAllInspectors(e => {
          e.resume()
        })
      }
      stop() {
        this.traverseAllInspectors(e => {
          e.stop()
        })
      }
      restartInspector(e, t) {
        this.getInspector(e, t).restart(...this.paramsProvider(t, e, !0))
      }
      pauseInspector(e, t) {
        this.getInspector(e, t).pause()
      }
      resumeInspector(e, t) {
        this.getInspector(e, t).resume()
      }
      stopInspector(e, t) {
        this.getInspector(e, t).stop()
      }
      getDataFromInspector(e, t) {
        return this.getInspector(e, t).output()
      }
      traverseAllInspectors(e) {
        n.objMap((t, r) => {
          n.objMap((t, n) => {
            try {
              e(t, n, r)
            } catch (e) {
              console.error(e)
            }
          }, t)
        }, this.targets)
      }
      getInspector(e, t) {
        const r = this.targets[e];
        if (!r) throw new Error(`Can't find monitor target with id '${e}'`);
        const n = r[t];
        if (!n) throw new Error(`Can't find inspector with name '${t}' for target id '${e}'`);
        return n
      }
    }
  },
  971: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.Timer = class {
      constructor() {
        this.startTime = new Date, this.acc = 0
      }
      restart() {
        this.startTime = new Date, this.acc = 0
      }
      pause() {
        const e = new Date;
        this.acc += e.getTime() - this.startTime.getTime()
      }
      resume() {
        this.startTime = new Date
      }
      stop() {}
      output() {
        return this.elapsed()
      }
      elapsed() {
        return this.acc + ((new Date).getTime() - this.startTime.getTime())
      }
      elapsedInSeconds() {
        return (this.elapsed() / 1e3).toFixed(2) + "s"
      }
    }
  },
  972: function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.Countdown = class {
      constructor(e) {
        this.startTime = null, this.timeout = null, this.timer = null, this.callback = e
      }
      restart(e, t = !1) {
        if (clearTimeout(this.timer), t || null === this.timeout || !this.startTime) this.timeout = e, this.startTime = new Date, 0 !== e && (this.timer = setTimeout(() => this.runCallback(), this.timeout));
        else {
          const t = e - ((new Date).getTime() - this.startTime.getTime());
          if (this.timeout = e, 0 !== e) {
            if (t < 0) return this.callback();
            this.timer = setTimeout(() => this.runCallback(), t)
          }
        }
      }
      pause() {
        if (clearTimeout(this.timer), !this.startTime || !this.timeout) return;
        const e = (new Date).getTime() - this.startTime.getTime(),
          t = this.timeout - e;
        this.timeout = t
      }
      resume() {
        this.timeout && (this.startTime = new Date, this.timer = setTimeout(() => this.runCallback(), this.timeout))
      }
      stop() {
        clearTimeout(this.timer), this.clearState()
      }
      output() {}
      clearState() {
        this.timer = null, this.timeout = null, this.startTime = null
      }
      runCallback() {
        try {
          this.callback()
        } catch (e) {
          console.error(e)
        } finally {
          this.clearState()
        }
      }
    }
  },
  973: function(e, t, r) {
    var n = r(974);
    "string" == typeof n && (n = [
      [e.i, n, ""]
    ]);
    var a = {
      transform: void 0
    };
    r(123)(n, a);
    n.locals && (e.exports = n.locals)
  },
  974: function(e, t, r) {
    (e.exports = r(122)(void 0)).push([e.i, '.sidebar{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:260px;height:100%;border-right:2px solid #ccc}.sidebar .sidebar-inner{position:absolute;top:0;bottom:80px;right:0;left:0;overflow-y:auto}.sidebar .sidebar-inner.no-tab{padding-top:8px;overflow-x:hidden}.sidebar .no-data{margin-top:20px;text-align:center;font-size:14px;color:#aaa}.sidebar .sidebar-macros .untitled{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5px 10px;font-size:14px}.sidebar .sidebar-macros .untitled.selected{background:#fdffd1}.sidebar .sidebar-macros .untitled .icon-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:5px;width:20px}.sidebar .sidebar-macros .untitled .icon-wrapper .file-icon{display:block;height:16px}.sidebar .test-case-actions,.sidebar .test-suite-actions{padding:0 10px 10px}.sidebar .test-case-actions button,.sidebar .test-suite-actions button{margin-right:10px}.sidebar .test-case-actions{display:-webkit-box;display:-ms-flexbox;display:flex;padding-bottom:0}.sidebar .sidebar-test-suites .test-suite-item{padding:0 0 10px;margin-bottom:5px}.sidebar .sidebar-test-suites .test-suite-item.playing{background:#fdffd1}.sidebar .sidebar-test-suites .test-suite-item.fold{margin-bottom:0;padding-bottom:0}.sidebar .sidebar-test-suites .test-suite-item.fold .test-suite-cases,.sidebar .sidebar-test-suites .test-suite-item.fold .test-suite-more-actions{display:none}.sidebar .sidebar-test-suites .test-suite-item .test-suite-row{padding:5px 10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.sidebar .sidebar-test-suites .test-suite-item .test-suite-row .test-suite-title{-webkit-box-flex:1;-ms-flex:1;flex:1;margin-left:10px}.sidebar .sidebar-test-suites .test-suite-item .test-suite-row .more-button{display:none}.sidebar .sidebar-test-suites .test-suite-item .test-suite-row:hover .more-button{display:block}.sidebar .sidebar-test-suites .test-suite-item .test-suite-cases{padding:3px 5px}.sidebar .sidebar-test-suites .test-suite-item .test-suite-cases li{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:3px 5px 3px 20px;margin-bottom:5px}.sidebar .sidebar-test-suites .test-suite-item .test-suite-cases li.done-tc{background-color:#d1ffd8}.sidebar .sidebar-test-suites .test-suite-item .test-suite-cases li.done-tc.blur{background-color:rgba(209,255,216,.6)}.sidebar .sidebar-test-suites .test-suite-item .test-suite-cases li.error-tc{background-color:#f7c1c1}.sidebar .sidebar-test-suites .test-suite-item .test-suite-cases li.error-tc.blur{background-color:hsla(0,77%,86%,.6)}.sidebar .sidebar-test-suites .test-suite-item .test-suite-cases li.current-tc{background-color:#d5d6f9}.sidebar .sidebar-test-suites .test-suite-item .test-suite-cases li.current-tc.blur{background-color:rgba(213,214,249,.6)}.sidebar .sidebar-test-suites .test-suite-item .test-suite-more-actions{padding-left:27px}.sidebar .sidebar-storage-mode{position:absolute;bottom:0;left:0;right:0;height:80px;padding:0 10px 15px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.sidebar .sidebar-storage-mode .storage-mode-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:5px;font-size:12px}.sidebar .sidebar-storage-mode .storage-mode-header h3{font-size:14px}.sidebar .ant-tabs{min-height:100%}.sidebar .ant-tabs-bar{border-bottom:2px solid #ccc}.sidebar .ant-tabs-nav-container-scrolling{padding-left:0;padding-right:0}.sidebar .ant-tabs-tab-next.ant-tabs-tab-arrow-show,.sidebar .ant-tabs-tab-prev.ant-tabs-tab-arrow-show{display:none}.sidebar .ant-tabs-nav{height:44px}.sidebar .ant-tabs-nav .ant-tabs-tab{margin-right:0;line-height:27px}.sidebar .ant-tabs-nav-scroll{text-align:center}.sidebar .resize-handler{position:absolute;right:-2px;top:0;bottom:0;width:2px;background:#ccc;cursor:col-resize}.sidebar .resize-handler.focused,.sidebar .resize-handler:hover{right:-4px;width:6px;background:#aaa}.sidebar.with-xmodules-note .sidebar-inner{bottom:160px}.sidebar.with-xmodules-note .sidebar-storage-mode{height:160px}.sidebar.with-xmodules-note .note-for-macros{margin-bottom:20px;padding:10px 10px 0;border-top:1px solid #333;font-size:12px}.with-sidebar .sidebar{display:block}.context-menu{z-index:10}.context-menu .ant-menu{border:"1px solid #ccc";border-radius:4px;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.2);box-shadow:0 1px 6px rgba(0,0,0,.2)}.context-menu .ant-menu .ant-menu-item{height:36px;line-height:36px}.context-menu .ant-menu .ant-menu-item:hover{background:#ecf6fd}.xfile-not-installed-modal.left-bottom{position:absolute;top:auto!important;bottom:100px;left:100px}.xfile-not-installed-modal p{margin-bottom:20px;font-size:16px;font-weight:700}.macros-dropdown{width:auto!important}', ""])
  },
  976: function(e, t, r) {
    var n = r(977);
    "string" == typeof n && (n = [
      [e.i, n, ""]
    ]);
    var a = {
      transform: void 0
    };
    r(123)(n, a);
    n.locals && (e.exports = n.locals)
  },
  977: function(e, t, r) {
    (e.exports = r(122)(void 0)).push([e.i, '.dashboard{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1;margin:15px 15px 0}.dashboard,.dashboard .flex-row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.dashboard .flex-row{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}.dashboard .form-group{margin-bottom:15px}.dashboard .toolbox{display:-webkit-box;display:-ms-flexbox;display:flex}.dashboard .toolbox .record-ops{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right}.dashboard .toolbox .play-ops{margin-left:15px}.dashboard .ant-table-pagination{display:none}.dashboard .ant-table-header{overflow:hidden!important;margin-bottom:0!important;padding-bottom:0!important}.dashboard .ant-table-header .ant-table-thead>tr>th{padding:13px 8px}.dashboard .ant-table-body .ant-table-thead>tr>th{padding:10px 8px}.dashboard .ant-table-tbody>tr>td{padding:8px}.dashboard tr.selected-command>td{background-color:#fdffd1!important}.dashboard tr.error-command>td{background-color:#f7c1c1!important}.dashboard tr.running-command>td{background-color:#d5d6f9!important}.dashboard tr.done-command>td{background-color:#d1ffd8!important}.dashboard .ant-btn-group>.ant-btn-group{float:none}.dashboard .ant-form-item{margin-bottom:8px}.dashboard .editor-wrapper{-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:2;-ms-flex:2;flex:2}.dashboard .editor-wrapper,.dashboard .editor-wrapper .tabs-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal}.dashboard .editor-wrapper .tabs-wrapper{position:relative;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1}.dashboard .editor-wrapper .tabs-wrapper .vision-type{position:absolute;right:0;top:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.dashboard .editor-wrapper .tabs-wrapper .vision-type img{display:block;margin-right:10px;width:20px;height:20px}.dashboard .editor-wrapper .tabs-wrapper .vision-type span{text-decoration:underline;color:#108ee9;font-size:16px}.dashboard .commands-view{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:2;-ms-flex:2;flex:2}.dashboard .commands-view .ant-tabs-bar{margin-bottom:0}.dashboard .commands-view .ant-tabs-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1;padding:10px;border:1px solid #d9d9d9;border-width:0 1px 1px}.dashboard .commands-view .ant-tabs-content .ant-tabs-tabpane{-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-negative:unset!important;flex-shrink:unset!important;position:relative}.dashboard .commands-view .ant-tabs-content .table-wrapper{position:absolute;top:0;bottom:120px;left:0;right:0;overflow-y:auto}.dashboard .commands-view .ant-tabs-content .fields-wrapper{position:absolute;left:0;right:0;bottom:0;height:110px}.dashboard .commands-view .ant-tabs-content .fields-wrapper .target-row .flex-row{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.dashboard .commands-view .ant-tabs-content .fields-wrapper .target-row .select-input{-webkit-box-flex:1;-ms-flex:1;flex:1}.dashboard .commands-view .ant-tabs-content .fields-wrapper .target-row .select-input input{width:100%}.dashboard .commands-view .ant-tabs-content .fields-wrapper .target-row button{margin-left:10px}.dashboard .commands-view .ant-tabs-content .react-codemirror2{position:relative}.dashboard .commands-view .ant-tabs-content .react-codemirror2.has-error{height:calc(100% - 70px)}.dashboard .commands-view .ant-tabs-content .react-codemirror2.no-error{height:calc(100% - 0px)}.dashboard .commands-view .ant-tabs-content .react-codemirror2 .CodeMirror{position:absolute;top:0;bottom:0;left:0;right:0;height:auto;font-size:13px}.dashboard .commands-view .ant-tabs-content .ant-spin-container,.dashboard .commands-view .ant-tabs-content .ant-spin-nested-loading,.dashboard .commands-view .ant-tabs-content .ant-table,.dashboard .commands-view .ant-tabs-content .ant-table-content,.dashboard .commands-view .ant-tabs-content .ant-table-scroll,.dashboard .commands-view .ant-tabs-content .ant-table-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1}.dashboard .commands-view .ant-tabs-content .ant-table-scroll{overflow-y:auto}.dashboard .commands-view .command-row{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding-left:5px;border-bottom:1px solid #e9e9e9;line-height:35px;font-size:13px}.dashboard .commands-view .command-row:hover{background:#ecf6fd}.dashboard .commands-view .command-row.dragging{opacity:0}.dashboard .commands-view .command-row.footer-row,.dashboard .commands-view .command-row.header-row{background-color:#f7f7f7;font-weight:700}.dashboard .commands-view .command-row.footer-row{display:block;text-align:center;cursor:pointer}.dashboard .commands-view .command-row.breakpoint-command:before{content:"";position:absolute;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:0;height:0;border:8px solid transparent;border-left-color:green}.dashboard .commands-view .command-row.error-command{background-color:#f7c1c1;color:red}.dashboard .commands-view .command-row.error-command.blur{background-color:hsla(0,77%,86%,.6)}.dashboard .commands-view .command-row.running-command{background-color:#d5d6f9}.dashboard .commands-view .command-row.running-command.blur{background-color:rgba(213,214,249,.6)}.dashboard .commands-view .command-row.done-command{background-color:#d1ffd8}.dashboard .commands-view .command-row.done-command.blur{background-color:rgba(209,255,216,.6)}.dashboard .commands-view .command-row.selected-command{background-color:#fdffd1}.dashboard .commands-view .command-row.selected-command.blur{background-color:rgba(253,255,209,.6)}.dashboard .commands-view .command-row.comment-command{background-color:transparent;color:#ccc;font-style:italic}.dashboard .commands-view .command-row.comment-command.selected-command{background-color:#fdffd1}.dashboard .commands-view .command-row.comment-command.selected-command.blur{background-color:rgba(253,255,209,.6)}.dashboard .commands-view .command-row .row-col{padding:0 8px}.dashboard .commands-view .command-row .row-col.index-col{padding:0;width:25px;text-align:center}.dashboard .commands-view .command-row .row-col.command-col{min-width:130px}.dashboard .commands-view .command-row .row-col.command-col,.dashboard .commands-view .command-row .row-col.target-col,.dashboard .commands-view .command-row .row-col.value-col{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.dashboard .commands-view .command-row .row-col.op-col{width:80px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.dashboard .table-footer{position:absolute;left:0;right:0;top:0;bottom:0;line-height:32px;text-align:center;font-weight:700;background:#f7f7f7;cursor:pointer}.dashboard .table-footer:hover{background:#e0e0e0}.dashboard .logs-screenshots{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;margin-top:15px}.dashboard .logs-screenshots .resize-handler{position:absolute;top:-10px;left:0;width:100%;height:6px;background:transparent;cursor:row-resize}.dashboard .logs-screenshots .resize-handler.focused,.dashboard .logs-screenshots .resize-handler:hover{height:6px;background:#ccc}.dashboard .logs-screenshots .ant-tabs.ant-tabs-card>.ant-tabs-bar .ant-tabs-tab{padding:5px 12px 4px}.dashboard .logs-screenshots .ant-tabs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1;flex:1}.dashboard .logs-screenshots .ant-tabs-bar{margin-bottom:0}.dashboard .logs-screenshots .ant-tabs-content{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow-y:auto;min-height:70px;border:1px solid #d9d9d9;border-width:0 1px 1px}.dashboard .logs-screenshots .ls-toolbox{position:absolute;right:0;top:0}.dashboard .logs-screenshots .log-content,.dashboard .logs-screenshots .screenshot-content{padding:10px 0}.dashboard .logs-screenshots .screenshot-content li{padding:0 20px 20px}.dashboard .logs-screenshots .screenshot-content li .timestamp{display:block;margin-bottom:10px;font-size:14px}.dashboard .logs-screenshots .screenshot-content li .filename{font-weight:700}.dashboard .logs-screenshots .log-content{list-style:none;margin:0;padding:0 10px;height:calc(100% - 38px);overflow-y:auto}.dashboard .logs-screenshots .log-content li{padding:5px 0;font-size:12px;border-bottom:1px solid #f3f3f3}.dashboard .logs-screenshots .log-content li:after{content:"";display:table;clear:both}.dashboard .logs-screenshots .log-content li.error{color:red;font-weight:700}.dashboard .logs-screenshots .log-content li.error a{color:red;text-decoration:underline}.dashboard .logs-screenshots .log-content li.warning{color:orange}.dashboard .logs-screenshots .log-content li .log-type{float:left;margin-right:10px}.dashboard .logs-screenshots .log-content li .log-detail{white-space:pre-wrap}.dashboard .logs-screenshots .csv-content{padding:10px}.dashboard .logs-screenshots .csv-content button{margin-right:5px}.dashboard .logs-screenshots .variable-content{padding:10px}.dashboard .logs-screenshots .variable-content .variable-options{margin-bottom:10px}.dashboard .logs-screenshots .variable-content .ant-checkbox-wrapper{margin-left:0!important;margin-right:10px}.dashboard .logs-screenshots .variable-content .read-only{color:#ccc}.dashboard .logs-screenshots .vision-content{padding:10px}.dashboard .logs-screenshots .vision-content .vision-top-actions{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:15px}.dashboard .logs-screenshots .vision-content .vision-top-actions .main-actions{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-right:15px}.dashboard .logs-screenshots .vision-content .vision-top-actions .main-actions .main-actions-left{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.dashboard .logs-screenshots .vision-content .vision-top-actions .main-actions .main-actions-left>*{margin-right:15px}.dashboard .logs-screenshots .vision-content .vision-top-actions .main-actions .main-actions-left>:last-child{margin-right:0}.dashboard .logs-screenshots .vision-content .vision-top-actions .main-actions .load-image-button{padding:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.dashboard .logs-screenshots .vision-content .vision-top-actions .main-actions .load-image-button label{padding:0 15px;cursor:pointer}.dashboard .logs-screenshots .vision-content .vision-top-actions .more-info{font-size:14px}.dashboard .logs-screenshots .vision-content .vision-image{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;overflow:hidden;width:100px;height:100px;border:1px solid #ccc}.dashboard .logs-screenshots .vision-content .vision-image img{max-height:100px}.dashboard .logs-screenshots .vision-content .vision-name{font-size:14px;word-break:break-all}.dashboard .logs-screenshots .vision-content .vision-actions{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.dashboard .logs-screenshots .vision-content .vision-actions button{margin-right:5px}.dashboard .logs-screenshots .vision-content .vision-actions button:last-child{margin-right:0}.dashboard .online-help{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:15px;padding:0 10px;height:25px;line-height:25px;font-size:14px;text-align:right}.dashboard #context_menu{z-index:10}.dashboard #context_menu .ant-menu{border:"1px solid #ccc";border-radius:4px;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.2);box-shadow:0 1px 6px rgba(0,0,0,.2)}.dashboard #context_menu .ant-menu .ant-menu-item{height:36px;line-height:36px}.dashboard #context_menu .ant-menu .ant-menu-item:hover{background:#ecf6fd}.dashboard #context_menu .ant-menu .ant-menu-item .shortcut{float:right;color:#999}.source-error{color:red;white-space:pre-wrap;font-size:12px}.ant-dropdown .ant-dropdown-menu{max-height:none}@media (max-width:768px){.duplicate-modal,.play-loop-modal,.rename-modal,.save-modal{width:400px!important;margin:0 auto}}', ""])
  },
  999: function(e, t, r) {
    var n = r(1e3);
    "string" == typeof n && (n = [
      [e.i, n, ""]
    ]);
    var a = {
      transform: void 0
    };
    r(123)(n, a);
    n.locals && (e.exports = n.locals)
  }
});
