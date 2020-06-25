var _____WB$wombat$assign$function_____ = function (name)
{
  return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw)
{
  self.__WB_pmw = function (obj)
  {
    this.__WB_source = obj;
    return this;
  }
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  ! function ()
  {
    function e()
    {
      return Date.now() - i.start
    }

    function t(e, t, n)
    {
      e[M](_ + t, n, c)
    }

    function n(e, t, n)
    {
      try
      {
        return e(t, n)
      }
      catch (a)
      {
        r("tryCatch", a)
      }
    }

    function r(e, t)
    {
      j++ < 10 && !g.noer && "tryCatch" !== e && ((new Image).src = I + "/info?source=" + e + "&error=" + d(t.stack) + "&SLT=" + O.SLT + "&CID=" + O.CID + "&BXCID=" + (O.BXInfo && O.BXInfo.clientid) + "&V=" + O.version), O.ERR.push([e, t])
    }
    var a, i = {
        start: (new Date).getTime()
      },
      o = window,
      s = o.document,
      c = !0,
      l = !1,
      u = o.decodeURIComponent,
      d = o.encodeURIComponent,
      f = "?augurConfig=",
      m = s.getElementById("augur.js"),
      h = function ()
      {
        if (m) return u(m.src);
        for (var e, t = s.scripts, n = t.length; n--;)
          if ((e = u(t[n].src)).indexOf(f) > -1) return m = t[n], e
      }(),
      g = {};
    ! function ()
    {
      if (h.indexOf(f) > -1) try
      {
        var e = JSON.parse(h.split(f)[1]);
        for (var t in e) g[t.split("data-")[1]] = e[t]
      }
      catch (n)
      {}
      else
        for (var r, a, i = m.attributes, o = i.length; o--;) r = i[o], (r && r.constructor && "Attr" === r.constructor.name || r.specified === c) && ((a = r.name).indexOf("data-") > -1 && (g[a.slice(5)] = r.value), m.attributes.removeNamedItem(a))
    }();
    var p, b, y = "Augur",
      v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      w = function () {},
      k = (g.wl || "").split(","),
      S = location,
      F = o.navigator,
      x = F.cookieEnabled,
      E = F.userAgent,
      T = function ()
      {
        var e = S.hostname;
        if (!x) return e;
        for (var t = v + "=1", n = e.split("."), r = n.length - 1; r--;)
          if (e = n.slice(r).join("."), s.cookie = t + ";domain=." + e + ";", s.cookie.indexOf(t) > -1) return s.cookie = v + "=;domain=." + e + ";expires=Thu, 01 Jan 1970 00:00:00 UTC", e
      }(),
      D = g.warpspeed,
      C = (g.prot || S.protocol) + (k[0] || "//web.archive.org/web/20180715081755/https://request.augur.io"),
      A = "https:" + (k[1] || "//web.archive.org/web/20180715081755/https://cdn.augur.io"),
      I = "https:" + (k[2] || "//web.archive.org/web/20180715081755/https://info.augur.io"),
      O = function ()
      {
        O = this, O.ERR = [], O.MEM = {}, Function.prototype.bind || (Function.prototype.bind = function (e)
        {
          if ("function" == typeof this)
          {
            var t = Array.prototype.slice.call(arguments, 1),
              n = this,
              r = function () {},
              a = function ()
              {
                return n.apply(this instanceof r ? this : e, t.concat(Array.prototype.slice.call(arguments)))
              };
            return this.prototype && (r.prototype = this.prototype), a.prototype = new r, a
          }
        }), Date.now || (Date.now = function ()
        {
          return (new Date).getTime()
        }), String.prototype.trim || (String.prototype.trim = function ()
        {
          return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }), o.JSON || function ()
        {
          function e(t, r)
          {
            function i(e)
            {
              if (i[e] !== p) return i[e];
              var t;
              if ("bug-string-char-index" == e) t = "a" != "a" [0];
              else if ("json" == e) t = i("json-stringify") && i("json-parse");
              else
              {
                var n;
                if ("json-stringify" == e)
                {
                  t = r.stringify;
                  var a = "function" == typeof t && y;
                  if (a)
                  {
                    (n = function ()
                    {
                      return 1
                    }).toJSON = n;
                    try
                    {
                      a = "0" === t(0) && "0" === t(new o) && '""' == t(new s) && t(b) === p && t(p) === p && t() === p && "1" === t(n) && "[1]" == t([n]) && "[null]" == t([p]) && "null" == t(null) && "[null,null,null]" == t([p, b, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == t(
                      {
                        a: [n, !0, !1, null, "\0\b\n\f\r\t"]
                      }) && "1" === t(null, n) && "[\n 1,\n 2\n]" == t([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == t(new l(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == t(new l(864e13)) && '"-000001-01-01T00:00:00.000Z"' == t(new l(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == t(new l(-1))
                    }
                    catch (c)
                    {
                      a = !1
                    }
                  }
                  t = a
                }
                if ("json-parse" == e)
                {
                  if (t = r.parse, "function" == typeof t) try
                  {
                    if (0 === t("0") && !t(!1))
                    {
                      n = t('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                      var u = 5 == n.a.length && 1 === n.a[0];
                      if (u)
                      {
                        try
                        {
                          u = !t('"\t"')
                        }
                        catch (d)
                        {}
                        if (u) try
                        {
                          u = 1 !== t("01")
                        }
                        catch (f)
                        {}
                        if (u) try
                        {
                          u = 1 !== t("1.")
                        }
                        catch (m)
                        {}
                      }
                    }
                  }
                  catch (h)
                  {
                    u = !1
                  }
                  t = u
                }
              }
              return i[e] = !!t
            }
            t || (t = a.Object()), r || (r = a.Object());
            var o = t.Number || a.Number,
              s = t.String || a.String,
              c = t.Object || a.Object,
              l = t.Date || a.Date,
              u = t.SyntaxError || a.SyntaxError,
              d = t.TypeError || a.TypeError,
              f = t.Math || a.Math,
              m = t.JSON || a.JSON;
            "object" == typeof m && m && (r.stringify = m.stringify, r.parse = m.parse);
            var h, g, p, c = c.prototype,
              b = c.toString,
              y = new l(-0xc782b5b800cec);
            try
            {
              y = -109252 == y.getUTCFullYear() && 0 === y.getUTCMonth() && 1 === y.getUTCDate() && 10 == y.getUTCHours() && 37 == y.getUTCMinutes() && 6 == y.getUTCSeconds() && 708 == y.getUTCMilliseconds()
            }
            catch (v)
            {}
            if (!i("json"))
            {
              var w = i("bug-string-char-index");
              if (!y) var k = f.floor,
                S = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                F = function (e, t)
                {
                  return S[t] + 365 * (e - 1970) + k((e - 1969 + (t = +(1 < t))) / 4) - k((e - 1901 + t) / 100) + k((e - 1601 + t) / 400)
                };
              if ((h = c.hasOwnProperty) || (h = function (e)
                {
                  var t, n = {};
                  return (n.__proto__ = null, n.__proto__ = {
                    toString: 1
                  }, n).toString != b ? h = function (e)
                  {
                    var t = this.__proto__;
                    return e = e in (this.__proto__ = null, this), this.__proto__ = t, e
                  } : (t = n.constructor, h = function (e)
                  {
                    var n = (this.constructor || t).prototype;
                    return e in this && !(e in n && this[e] === n[e])
                  }), n = null, h.call(this, e)
                }), g = function (e, t)
                {
                  var r, a, i, o = 0;
                  (r = function ()
                  {
                    this.valueOf = 0
                  }).prototype.valueOf = 0, a = new r;
                  for (i in a) h.call(a, i) && o++;
                  return r = a = null, o ? g = 2 == o ? function (e, t)
                  {
                    var n, r = {},
                      a = "[object Function]" == b.call(e);
                    for (n in e) a && "prototype" == n || h.call(r, n) || !(r[n] = 1) || !h.call(e, n) || t(n)
                  } : function (e, t)
                  {
                    var n, r, a = "[object Function]" == b.call(e);
                    for (n in e) a && "prototype" == n || !h.call(e, n) || (r = "constructor" === n) || t(n);
                    (r || h.call(e, n = "constructor")) && t(n)
                  } : (a = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), g = function (e, t)
                  {
                    var r, i = "[object Function]" == b.call(e),
                      o = !i && "function" != typeof e.constructor && n[typeof e.hasOwnProperty] && e.hasOwnProperty || h;
                    for (r in e) i && "prototype" == r || !o.call(e, r) || t(r);
                    for (i = a.length; r = a[--i]; o.call(e, r) && t(r));
                  }), g(e, t)
                }, !i("json-stringify"))
              {
                var x = {
                    92: "\\\\",
                    34: '\\"',
                    8: "\\b",
                    12: "\\f",
                    10: "\\n",
                    13: "\\r",
                    9: "\\t"
                  },
                  E = function (e, t)
                  {
                    return ("000000" + (t || 0)).slice(-e)
                  },
                  T = function (e)
                  {
                    for (var t = '"', n = 0, r = e.length, a = !w || 10 < r, i = a && (w ? e.split("") : e); n < r; n++)
                    {
                      var o = e.charCodeAt(n);
                      switch (o)
                      {
                      case 8:
                      case 9:
                      case 10:
                      case 12:
                      case 13:
                      case 34:
                      case 92:
                        t += x[o];
                        break;
                      default:
                        if (32 > o)
                        {
                          t += "\\u00" + E(2, o.toString(16));
                          break
                        }
                        t += a ? i[n] : e.charAt(n)
                      }
                    }
                    return t + '"'
                  },
                  D = function (e, t, n, r, a, i, o)
                  {
                    var s, c, l, u, f, m, y, v, w;
                    try
                    {
                      s = t[e]
                    }
                    catch (S)
                    {}
                    if ("object" == typeof s && s)
                      if (c = b.call(s), "[object Date]" != c || h.call(s, "toJSON")) "function" == typeof s.toJSON && ("[object Number]" != c && "[object String]" != c && "[object Array]" != c || h.call(s, "toJSON")) && (s = s.toJSON(e));
                      else if (s > -1 / 0 && s < 1 / 0)
                    {
                      if (F)
                      {
                        for (u = k(s / 864e5), c = k(u / 365.2425) + 1970 - 1; F(c + 1, 0) <= u; c++);
                        for (l = k((u - F(c, 0)) / 30.42); F(c, l + 1) <= u; l++);
                        u = 1 + u - F(c, l), f = (s % 864e5 + 864e5) % 864e5, m = k(f / 36e5) % 24, y = k(f / 6e4) % 60, v = k(f / 1e3) % 60, f %= 1e3
                      }
                      else c = s.getUTCFullYear(), l = s.getUTCMonth(), u = s.getUTCDate(), m = s.getUTCHours(), y = s.getUTCMinutes(), v = s.getUTCSeconds(), f = s.getUTCMilliseconds();
                      s = (0 >= c || 1e4 <= c ? (0 > c ? "-" : "+") + E(6, 0 > c ? -c : c) : E(4, c)) + "-" + E(2, l + 1) + "-" + E(2, u) + "T" + E(2, m) + ":" + E(2, y) + ":" + E(2, v) + "." + E(3, f) + "Z"
                    }
                    else s = null;
                    if (n && (s = n.call(t, e, s)), null === s) return "null";
                    if (c = b.call(s), "[object Boolean]" == c) return "" + s;
                    if ("[object Number]" == c) return s > -1 / 0 && s < 1 / 0 ? "" + s : "null";
                    if ("[object String]" == c) return T("" + s);
                    if ("object" == typeof s)
                    {
                      for (e = o.length; e--;)
                        if (o[e] === s) throw d();
                      if (o.push(s), w = [], t = i, i += a, "[object Array]" == c)
                      {
                        for (l = 0, e = s.length; l < e; l++) c = D(l, s, n, r, a, i, o), w.push(c === p ? "null" : c);
                        e = w.length ? a ? "[\n" + i + w.join(",\n" + i) + "\n" + t + "]" : "[" + w.join(",") + "]" : "[]"
                      }
                      else g(r || s, function (e)
                      {
                        var t = D(e, s, n, r, a, i, o);
                        t !== p && w.push(T(e) + ":" + (a ? " " : "") + t)
                      }), e = w.length ? a ? "{\n" + i + w.join(",\n" + i) + "\n" + t + "}" : "{" + w.join(",") + "}" : "{}";
                      return o.pop(), e
                    }
                  };
                r.stringify = function (e, t, r)
                {
                  var a, i, o, s;
                  if (n[typeof t] && t)
                    if ("[object Function]" == (s = b.call(t))) i = t;
                    else if ("[object Array]" == s)
                  {
                    o = {};
                    for (var c, l = 0, u = t.length; l < u; c = t[l++], s = b.call(c), ("[object String]" == s || "[object Number]" == s) && (o[c] = 1));
                  }
                  if (r)
                    if ("[object Number]" == (s = b.call(r)))
                    {
                      if (0 < (r -= r % 1))
                        for (a = "", 10 < r && (r = 10); a.length < r; a += " ");
                    }
                  else "[object String]" == s && (a = 10 >= r.length ? r : r.slice(0, 10));
                  return D("", (c = {}, c[""] = e, c), i, o, a, "", [])
                }
              }
              if (!i("json-parse"))
              {
                var C, A, I = s.fromCharCode,
                  O = {
                    92: "\\",
                    34: '"',
                    47: "/",
                    98: "\b",
                    116: "\t",
                    110: "\n",
                    102: "\f",
                    114: "\r"
                  },
                  _ = function ()
                  {
                    throw C = A = null, u()
                  },
                  M = function ()
                  {
                    for (var e, t, n, r, a, i = A, o = i.length; C < o;) switch (a = i.charCodeAt(C))
                    {
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                      C++;
                      break;
                    case 123:
                    case 125:
                    case 91:
                    case 93:
                    case 58:
                    case 44:
                      return e = w ? i.charAt(C) : i[C], C++, e;
                    case 34:
                      for (e = "@", C++; C < o;)
                        if (a = i.charCodeAt(C), 32 > a) _();
                        else if (92 == a) switch (a = i.charCodeAt(++C))
                      {
                      case 92:
                      case 34:
                      case 47:
                      case 98:
                      case 116:
                      case 110:
                      case 102:
                      case 114:
                        e += O[a], C++;
                        break;
                      case 117:
                        for (t = ++C, n = C + 4; C < n; C++) a = i.charCodeAt(C), 48 <= a && 57 >= a || 97 <= a && 102 >= a || 65 <= a && 70 >= a || _();
                        e += I("0x" + i.slice(t, C));
                        break;
                      default:
                        _()
                      }
                      else
                      {
                        if (34 == a) break;
                        for (a = i.charCodeAt(C), t = C; 32 <= a && 92 != a && 34 != a;) a = i.charCodeAt(++C);
                        e += i.slice(t, C)
                      }
                      if (34 == i.charCodeAt(C)) return C++, e;
                      _();
                    default:
                      if (t = C, 45 == a && (r = !0, a = i.charCodeAt(++C)), 48 <= a && 57 >= a)
                      {
                        for (48 == a && (a = i.charCodeAt(C + 1), 48 <= a && 57 >= a) && _(); C < o && (a = i.charCodeAt(C), 48 <= a && 57 >= a); C++);
                        if (46 == i.charCodeAt(C))
                        {
                          for (n = ++C; n < o && (a = i.charCodeAt(n), 48 <= a && 57 >= a); n++);
                          n == C && _(), C = n
                        }
                        if (a = i.charCodeAt(C), 101 == a || 69 == a)
                        {
                          for (a = i.charCodeAt(++C), 43 != a && 45 != a || C++, n = C; n < o && (a = i.charCodeAt(n), 48 <= a && 57 >= a); n++);
                          n == C && _(), C = n
                        }
                        return +i.slice(t, C)
                      }
                      if (r && _(), "true" == i.slice(C, C + 4)) return C += 4, !0;
                      if ("false" == i.slice(C, C + 5)) return C += 5, !1;
                      if ("null" == i.slice(C, C + 4)) return C += 4, null;
                      _()
                    }
                    return "$"
                  },
                  R = function (e)
                  {
                    var t, n;
                    if ("$" == e && _(), "string" == typeof e)
                    {
                      if ("@" == (w ? e.charAt(0) : e[0])) return e.slice(1);
                      if ("[" == e)
                      {
                        for (t = []; e = M(), "]" != e; n || (n = !0)) n && ("," == e ? (e = M(), "]" == e && _()) : _()), "," == e && _(), t.push(R(e));
                        return t
                      }
                      if ("{" == e)
                      {
                        for (t = {}; e = M(), "}" != e; n || (n = !0)) n && ("," == e ? (e = M(), "}" == e && _()) : _()), "," != e && "string" == typeof e && "@" == (w ? e.charAt(0) : e[0]) && ":" == M() || _(), t[e.slice(1)] = R(M());
                        return t
                      }
                      _()
                    }
                    return e
                  },
                  j = function (e, t, n)
                  {
                    n = P(e, t, n), n === p ? delete e[t] : e[t] = n
                  },
                  P = function (e, t, n)
                  {
                    var r, a = e[t];
                    if ("object" == typeof a && a)
                      if ("[object Array]" == b.call(a))
                        for (r = a.length; r--;) j(a, r, n);
                      else g(a, function (e)
                      {
                        j(a, e, n)
                      });
                    return n.call(e, t, a)
                  };
                r.parse = function (e, t)
                {
                  var n, r;
                  return C = 0, A = "" + e, n = R(M()), "$" != M() && _(), C = A = null, t && "[object Function]" == b.call(t) ? P((r = {}, r[""] = n, r), "", t) : n
                }
              }
            }
            return r.runInContext = e, r
          }
          var t = "function" == typeof define && define.amd,
            n = {
              "function": !0,
              object: !0
            },
            r = n[typeof exports] && exports && !exports.nodeType && exports,
            a = n[typeof window] && window || this,
            i = r && n[typeof module] && module && !module.nodeType && "object" == typeof global && global;
          if (!i || i.global !== i && i.window !== i && i.self !== i || (a = i), r && !t) e(a, r);
          else
          {
            var o = a.JSON,
              s = a.JSON3,
              c = !1,
              l = e(a, a.JSON3 = {
                noConflict: function ()
                {
                  return c || (c = !0, a.JSON = o, a.JSON3 = s, o = s = null), l
                }
              });
            a.JSON = {
              parse: l.parse,
              stringify: l.stringify
            }
          }
          t && define(function ()
          {
            return l
          })
        }.call(this), Object.keys || (Object.keys = function ()
        {
          var e = Object.prototype.hasOwnProperty,
            t = !
            {
              toString: null
            }.propertyIsEnumerable("toString"),
            n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            r = n.length;
          return function (a)
          {
            if ("function" != typeof a && ("object" != typeof a || null === a)) throw new TypeError("Object.keys called on non-object");
            var i, o, s = [];
            for (i in a) e.call(a, i) && s.push(i);
            if (t)
              for (o = 0; o < r; o++) e.call(a, n[o]) && s.push(n[o]);
            return s
          }
        }()), window.console = window.console ||
        {
          info: w
        }, window.console.info = window.console.info || w, !![].indexOf || (Array.prototype.indexOf = function (e)
        {
          for (var t = this, n = t.length; n--;)
            if (t[n] === e) return n;
          return -1
        }), O.responseTime = i, g.version = O.version = "3.16.12", O.cake.init(function (e)
        {
          var r = O.cake,
            a = e.SLT,
            i = e.UID;
          return D || /(\.gov\.uk|augur\.(io|ai))/.test(T) ? g.fatboy ? (O.lib.fatBoy(), O.lib.destruct()) : (g.fastcallback && r.getCache(), O.CID = D, O.SLT = a, O.UID = i, O.URL = "//" + S.hostname + S.pathname, void 0 !== g.id && "2^HIykD" === O.CID ? O.BXInfo = n(JSON.parse, g.id) ||
          {} : O.BXInfo = {}, "1" === g.fire && ((new Image).src = "http://web.archive.org/web/20180715081755/https://pixel.cdnwidget.com/forward?deviceid=" + O.BXInfo.deviceid + "&clientid=" + O.BXInfo.clientid + "&visitid=" + O.BXInfo.visitid), O.fingerprint.init(), void(i || g.nopi || ("complete" === s.readyState ? O.anonymous.init() : t(s, "readystatechange", O.anonymous.init)))) : O.lib.destruct()
        })
      },
      _ = o.attachEvent ? "on" : "",
      M = _ ? "attachEvent" : "addEventListener",
      R = {
        UID: "",
        SLT: ""
      },
      j = 0;
    O.prototype = {
      constructor: O,
      anonymous:
      {
        init: function ()
        {
          if ("complete" === s.readyState)
          {
            var e, t = s.getElementsByTagName("iframe"),
              n = t.length,
              r = (O.anonymous ||
              {}).m,
              a = g.link;
            if (O.MEM.at === c || !r) return;
            if (O.MEM.at = c, a && O.lib.extractEmail(a)) return O.anonymous.sendNewDeviceOwner(
            {
              email: a,
              meta: "link"
            });
            for (; n--;) try
            {
              Object.keys(e = t[n]).length > 1 && r(e.contentWindow)
            }
            catch (i)
            {}
            r(o), setTimeout(O.anonymous.S, 5e3, o)
          }
        },
        is: function ()
        {
          for (var e = s.links, n = e.length, r = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i; n--;)
          {
            var a = e[n],
              i = a.href;
            i && r.test(i) && i.indexOf && i.indexOf("#") === -1 && (void 0 === g.wl || a.hostname === location.hostname) && t(e[n], "click", function (e)
            {
              var t = s.createElement("a"),
                n = this.href;
              t.href = n, e.preventDefault(), o.location = A + (g.storage || "/_.htm") + ("#!" + t.href)
            })
          }
        },
        m: function (e)
        {
          try
          {
            var n = O.anonymous,
              r = O.lib.extractEmail,
              a = n.sendNewDeviceOwner;
            e.navigator.cookieEnabled && (n.C(e, r, a), n.L(e, r, a)), n.U(e, r, a), n.F(e), t(e, "message", n.M)
          }
          catch (i)
          {}
        },
        sendNewDeviceOwner: function (e)
        {
          var t = O.cake,
            n = t && t.send;
          O.MEM.sent && n ? n(e) : O.MEM.ndo = e
        },
        C: function (e, t, n)
        {
          try
          {
            for (var a, i = e.document.cookie.split(";"), o = i.length; o--;)
              if (a = t(i[o].split("=")[1])) return n(
              {
                email: a,
                meta: "C"
              })
          }
          catch (s)
          {
            r("anon.C", s)
          }
        },
        F: function (e)
        {
          for (var n, r = [].slice.call(e.document.getElementsByTagName("input")), a = r.length; a--;) n = r[a], "hidden" !== n.type ? t(n, "blur", function ()
          {
            var e, t = r.length,
              n = O.lib && O.lib.extractEmail;
            if (n)
              for (; 0 !== t--;)
                if (e = n(r[t].value)) return O.anonymous.sendNewDeviceOwner(
                {
                  email: e,
                  meta: "form"
                })
          }) : r.splice(a, 1)
        },
        L: function (e, t, n)
        {
          for (var r, a = e.localStorage, i = a.length; i--;)
            if (r = t(a.getItem(a.key(i)))) return n(
            {
              email: r,
              meta: "L"
            })
        },
        M: function (e)
        {
          var t, n = O.lib && O.lib.extractEmail,
            r = O.anonymous && O.anonymous.sendNewDeviceOwner;
          n && r && (t = n(e.data)) && r(
          {
            email: t,
            meta: "M"
          })
        },
        S: function (e)
        {
          e && e.FB && "function" == typeof e.FB.api && e.FB.api("/me", function (e)
          {
            var t = O.anonymous;
            e && (e.username || e.email) && t && t.sendNewDeviceOwner && t.sendNewDeviceOwner(
            {
              email: e.email,
              facebook_handle: e.username,
              meta: "S"
            })
          })
        },
        U: function (e, t, n)
        {
          var a = e.document.URL,
            i = [];
          if (a && a.constructor === String)
            for (var o, s = a.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi) || [], c = s.length; c--;)(o = t(s[c])) && i.indexOf(o) === -1 && i.push(o);
          if (i.length > 0) try
          {
            n(
            {
              email: i[0],
              meta: "url"
            })
          }
          catch (l)
          {
            r("U", l)
          }
        }
      },
      cake:
      {
        init: function (e)
        {
          var n = this;
          n.cache.get(e), t(o, "beforeunload", n.bake)
        },
        bake: function ()
        {
          if (p)
          {
            o.name = p;
            try
            {
              o.localStorage.setItem("Augur", p), R.SLT && this.cache.set("SLT", R.SLT)
            }
            catch (e)
            {}
          }
        },
        crossDomainStorage: function (e, r, i)
        {
          var u = O.MEM.cds;
          if (!u)
          {
            var d = function ()
            {
              var e, t = this;
              t.id = 0, t.iframe = a, t.iframeReady = l, t.origin = (e = A.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)/)) && e[1] + "//" + e[3], t.path = (g.storage || "/_.htm") + (g.rt ? "?rt=" + g.rt : ""), t.queue = [], t.requests = {}
            };
            d.prototype = {
              constructor: d,
              init: function ()
              {
                var e = this,
                  n = e.iframe;
                n || (n = s.createElement("iframe"), n.src = A + e.path, n.onload = e.iframeLoaded.bind(e), n.id = n.name = "exQuadrupedibus", n.style.display = "none", e.iframe = n, m.parentNode.appendChild(n), t(o, "message", e.handleMessage.bind(e)))
              },
              requestValue: function (e, t, n)
              {
                var r = this,
                  a = {
                    callback: n,
                    request:
                    {
                      id: ++r.id,
                      key: e,
                      value: t
                    }
                  };
                r.iframeReady ? r.sendRequest(a) : (r.queue.push(a), r.iframe || r.init())
              },
              sendRequest: function (e)
              {
                var t = this;
                t.iframe.contentWindow.postMessage(JSON.stringify(e.request), t.origin), t.requests[e.request.id] = e
              },
              iframeLoaded: function ()
              {
                var e = this,
                  t = e.queue,
                  n = t.length;
                for (e.iframeReady = c; n--;) e.sendRequest(t.pop())
              },
              handleMessage: function (e)
              {
                var t = this;
                if (e.origin === t.origin)
                {
                  var r = t.requests,
                    a = n(JSON.parse, e.data) ||
                    {},
                    i = a.id,
                    o = r[i];
                  "is" !== i || g.nosr ? o && (o.callback && o.callback(a.value), delete r[i], O.MEM.fn && 0 === Object.keys(r).length && delete O.MEM.cds) : O.anonymous.is()
                }
              }
            }, O.lib.brain("cds"), O.MEM.cds = u = new d
          }
          u.requestValue(e, r, i)
        },
        cache:
        {
          get: function (e)
          {
            function t()
            {
              b || (e(R), b = c, O.lib && O.lib.brain && O.lib.brain("cdsfin")), clearTimeout(s)
            }
            if (b) return e(R);
            var r = this,
              a = r.storage,
              i = r.init(),
              o = O.lib,
              s = setTimeout(t, 200);
            if (o)
            {
              var l = o.b64Decode;
              for (var u in a) n(function ()
              {
                a[u].get(function (e)
                {
                  if (e && e.constructor === String)
                  {
                    var r = n(JSON.parse, "{" === e.charAt(0) ? e : o.coffee.cl(l(e)) || l(e));
                    r && (R.SLT = o.getOlderSLT(R.SLT, r.SLT), R.UID = r.UID || R.UID, t())
                  }
                  "crossDomainStorage" === u && O.lib && O.lib.brain && O.lib.brain("cdsfin"), i-- || t()
                })
              })
            }
          },
          set: function (e, t)
          {
            if (/SLT|UID/.test(e))
            {
              R[e] = t, p = O.lib.b64Encode(O.lib.coffee.glutiam(JSON.stringify(R)));
              var n = this.storage;
              for (var r in n) n[r].set(p)
            }
          },
          clear: function ()
          {
            var e = this.storage;
            for (var t in e) e[t].clear()
          },
          init: function ()
          {
            var e = this.storage,
              t = F.vendor || F.appName;
            return "1" === g.dwn && delete e.name, x || (delete e.cookie, delete e.localStorage, delete e.sessionStorage), /MSIE [1-9]\./.test(E) && (delete e.crossDomainStorage, delete e.indexedDB, O.MEM.cds = O.MEM.cdsfin = O.MEM.pr = O.MEM.ie = c), t && (t.indexOf("Google") === -1 && delete e.fileSystem, t.indexOf("Apple") > -1 && +(/([0-9]+)\.[0-9]+\.[0-9]+ Safari/.exec(E) || [a, 1])[1] < 8 && delete e.indexedDB), Object.keys(e).length
          },
          storage:
          {
            name:
            {
              get: function (e)
              {
                e(o.name)
              },
              set: function (e)
              {
                o.name = e
              },
              clear: function ()
              {
                o.name = ""
              }
            },
            localStorage:
            {
              get: function (e)
              {
                e(o.localStorage[y])
              },
              set: function (e)
              {
                o.localStorage[y] = e
              },
              clear: function ()
              {
                o.localStorage.removeItem(y)
              }
            },
            sessionStorage:
            {
              get: function (e)
              {
                e(o.sessionStorage[y])
              },
              set: function (e)
              {
                o.sessionStorage[y] = e
              },
              clear: function ()
              {
                o.sessionStorage.removeItem(y)
              }
            },
            cookie:
            {
              get: function (e)
              {
                e((s.cookie.match("(^|;)\\s*__context\\s*=\\s*([^;]+)") || [])[2])
              },
              set: function (e)
              {
                s.cookie = "__context=" + e + "; expires=Sun, 26 Jan 2020 01:26:00 UTC; path=/; domain=." + T
              },
              clear: function ()
              {
                s.cookie = "__context=;expires=Thu, 01 Jan 1970 00:00:00 UTC"
              }
            },
            fileSystem:
            {
              get: function (e)
              {
                try
                {
                  (o.requestFileSystem || o.webkitRequestFileSystem)(o.TEMPORARY, 1024, function (t)
                  {
                    t.root.getFile(y,
                    {}, function (t)
                    {
                      t.file(function (t)
                      {
                        var n = new FileReader;
                        n.readAsText(t), n.onloadend = function ()
                        {
                          e(this.result)
                        }
                      })
                    })
                  }, e)
                }
                catch (t)
                {
                  e()
                }
              },
              set: function (e)
              {
                n(function ()
                {
                  (o.requestFileSystem || o.webkitRequestFileSystem)(o.TEMPORARY, 1024, function (t)
                  {
                    t.root.getFile(y,
                    {
                      create: c
                    }, function (t)
                    {
                      t.createWriter(function (t)
                      {
                        t.truncate(0), t.onwriteend = function ()
                        {
                          t.length || t.write(new Blob([e],
                          {
                            type: "text/plain"
                          }))
                        }
                      })
                    })
                  })
                })
              },
              clear: function ()
              {
                n(function ()
                {
                  (o.requestFileSystem || o.webkitRequestFileSystem)(o.TEMPORARY, 1024, function (e)
                  {
                    e.root.getFile(y,
                    {
                      create: c
                    }, function (e)
                    {
                      e.createWriter(function (e)
                      {
                        e.truncate(0)
                      })
                    })
                  })
                })
              }
            },
            indexedDB:
            {
              get: function (e)
              {
                try
                {
                  var t = o.indexedDB.open(y);
                  t.onerror = e, t.onsuccess = function (t)
                  {
                    try
                    {
                      t.target.result.transaction([y], "readonly").objectStore(y).get(y).onsuccess = function (t)
                      {
                        n(function ()
                        {
                          e(t.target.result.value)
                        })
                      }
                    }
                    catch (r)
                    {
                      e()
                    }
                  }
                }
                catch (r)
                {
                  e()
                }
              },
              set: function (e)
              {
                n(function ()
                {
                  var t = o.indexedDB;
                  t.deleteDatabase(y).onsuccess = function ()
                  {
                    t.open(y).onupgradeneeded = function (t)
                    {
                      n(function ()
                      {
                        t.target.result.createObjectStore(y,
                        {
                          keyPath: "key"
                        }).add(
                        {
                          key: y,
                          value: e
                        })
                      })
                    }
                  }
                })
              },
              clear: function ()
              {
                n(function ()
                {
                  o.indexedDB.deleteDatabase(y)
                })
              }
            },
            crossDomainStorage:
            {
              get: function (e)
              {
                O.cake.crossDomainStorage(" ", "", e)
              },
              set: function ()
              {
                O.cake.crossDomainStorage("SLT", R.SLT), O.cake.crossDomainStorage("UID", R.UID)
              },
              clear: function ()
              {
                O.cake.crossDomainStorage()
              }
            }
          }
        },
        getCache: function ()
        {
          n(function ()
          {
            O.client.fastCallback(JSON.parse(o.localStorage.getItem("__augurCache")))
          })
        },
        getSet: function (e, t)
        {
          n(function (n)
          {
            n.cache.set(e, t)
          }, this)
        },
        send: function (t)
        {
          var n = O.MEM,
            a = n.ie !== c || /MSIE 7\./.test(E),
            i = a ? new XMLHttpRequest : new XDomainRequest;
          if (t = t || n.ndo, !(--O.cake.maxSends < 0))
          {
            O.MEM.sent = c, i.open("POST", C + "/beginPersonalization", c), 0 === i.timeout && (i.timeout = 6e3), i.onprogress = i.onerror = w;
            var o = e();
            i.onload = i.onreadystatechange = function ()
            {
              if (4 === i.readyState || !a)
              {
                var e;
                try
                {
                  e = this.responseText
                }
                catch (t)
                {
                  return
                }
                if (!O.MEM.cc && e)
                {
                  var o = this.status,
                    t = {
                      status: o
                    };
                  switch (O.responseTime.roundTrip = Date.now() - O.responseTime.roundTrip, O.MEM.ie || (O.responseTime.server = +(this.getResponseHeader("X-Response-Time") || "").split(" ")[0]), o)
                  {
                  case 0:
                  case 408:
                  case 503:
                    t.status = o || 503, t.message = "Service unreachable";
                    break;
                  case 403:
                    t.message = "JavaScript being blocked";
                    break;
                  case 202:
                    t.message = "Malformed request";
                    break;
                  default:
                    /augur/.test(e) && (o = 200)
                  }
                  200 !== o && O.client.callback(
                  {}, t);
                  try
                  {
                    new Function(e)()
                  }
                  catch (t)
                  {
                    r("responseText", t)
                  }
                }
                i.onreadystatechange = i.onload = w, clearTimeout(n.s)
              }
            }, i.ontimeout = function ()
            {
              var e = O.cake,
                a = e && e.retryAttempts;
              if (a && 0 < O.cake.retryAttempts-- && e.send) e.send(t);
              else
              {
                if (g.callback) try
                {
                  new Function("e", g.cb + "(e)")(
                  {
                    status: 500,
                    message: "Service unreachable"
                  })
                }
                catch (i)
                {
                  r("xhr.ontimeout", i)
                }
                O.lib && O.lib.destruct && O.lib.destruct()
              }
              clearTimeout(n.s)
            }, "undefined" === O.UID && (O.UID = ""), g.limit && O.UID && Math.random() > .4 || (i.send("&analytics=" + d(O.lib.coffee.glutiam("slt=" + R.SLT + "&scrtme=" + o + "&ms=" + O.cake.maxSends + "&uid=" + R.UID + (O.FP.routerFingerprint ? "&ip=" + O.FP.routerFingerprint : "") + "&fp=" + d(JSON.stringify(O.FP)) + "&options=" + d(JSON.stringify(g)) + (t ? "&newDeviceOwner=" + JSON.stringify(t) : "") + "&url=" + O.URL + "&augurOptOut=" + O.optOut))), O.responseTime.roundTrip = Date.now())
          }
        },
        retryAttempts: 5,
        maxSends: 5
      },
      client:
      {
        cleanUp: function (e)
        {
          "v4" === g.schema && e && e.device && n(function ()
          {
            delete e.device.fingerprint, delete e.device.isIncognito
          })
        },
        fastCallback: function (e)
        {
          var t = g.fastcallback;
          e && (this.consoleLogTime(), O.lib.api(e), O.MEM.fcc = c), t && n(o[t], e)
        },
        callback: function (e, t)
        {
          var r, i = (g.sendto || "").split("::"),
            s = g.callback,
            l = g.fastcallback,
            u = g.cb;
          this.cleanUp(e), this.consoleLogTime(e && e.device && e.device.browser && e.device.browser.name), O.lib.api(e), l && !O.MEM.fcc && n(o[l], e), s && n(new Function("j", s + "(j)"), e), u && n(new Function("e,j", u + "(e,j)"), t || null, t ? a : e), g.id && !t && (e.id = g.id), 0 !== Object.keys(e).length && ("GET" === i[0] ? (new Image).src = i[1] + (i[2] === a ? "?json=" + d(JSON.stringify(e)) : e.device.ID) : "POST" === i[0] && (r = new XMLHttpRequest, r.open(i[0], i[1], c), r.withCredentials = "noCredentials" !== i[2], r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r.send("json=" + d(JSON.stringify(e))))), e.consumer && e.consumer.UID && O.cake && O.cake.cache && (O.cake.cache.set("UID", e.consumer.UID), O.UID = e.consumer.UID), x && !t && n(function ()
          {
            o.localStorage.setItem("__augurCache", JSON.stringify(e))
          }), O.lib.brain("cc")
        },
        plugins: function (e, t)
        {
          var n, r, a = O.json,
            i = new Image;
          if (i.onsuccess = i.onerror = w, "snowplow" === e) return void(i.src = "http://web.archive.org/web/20180715081755/http://data.elasticbeanstalk.com/com.snowplowanalytics.iglu/v1?schema=iglu:com.au.mamamia/augur/jsonschema/1-0-0&augurDID=" + a.device.ID + "&augurIsMobile=" + (a.device.mobileFamily || l) + "&augurUID=" + a.consumer.UID + "&augurDeviceType=" + a.device.type + "&augurEventId=" + t);
          switch (e.name)
          {
          case "snowplow":
            r = e.schemaURL + "&augurDID=" + a.device.ID + "&augurIsMobile=" + (a.device.mobileFamily || l) + "&augurUID=" + a.consumer.UID + "&augurDeviceType=" + a.device.type, delete e.name, delete e.schemaURL;
            for (n in e) r += "&" + n + "=" + e[n];
            i.src = r;
            break;
          case "syncCookies":
            var o, c, u = s.createElement("script"),
              f = e.cookieNames.split(","),
              h = s.cookie.split(";"),
              g = h.length;
            for (r = e.sendToURL + (a.consumer.UID ? "?uid=" + a.consumer.UID : "?did=" + a.device.ID) + "&cid=" + D; g--;) f.indexOf(o = (c = h[g].trim()).split("=")[0]) !== -1 && (r += "&cookie|" + o + "=" + c.slice(++o.length));
            u.src = r, u.onload = u.onerror = function ()
            {
              this.parentNode.removeChild(this)
            }, m.parentNode.appendChild(u);
            break;
          case "link":
            if (O.cake && O.cake.send)
            {
              if (e.email && !(e.email = O.lib.extractEmail(e.email))) return;
              delete e.name, e.meta = "link", O.cake.send(e)
            }
            break;
          case "track":
            "?" === e.params[0] && (e.params = e.params.slice(1)), (new Image).src = C + "exdiris?json=" + d(JSON.stringify(O.json)) + "&" + e.params
          }
        },
        consoleLogTime: function (t)
        {
          var n = O.responseTime,
            r = O.MEM,
            a = "Augur <https://Augur.io> personalized this page (" + (e() / 1e3).toFixed(2) + " sec) ";
          g.silent || r.t || ("Internet Explorer" === t ? console.info(a) : console.info("%c " + a, 'background:#08c;color:#fafafa;font-weight:100;font-family:"Inconsolata","Consolas","Deja Vu Sans Mono","Droid Sans Mono","Proggy","Monaco","Courier";'), r.t = c), n.dataAvailableIn || (n.dataAvailableIn = e()), n.thread = e(), n.wireTime = n.roundTrip - n.server
        }
      },
      fingerprint:
      {
        init: function ()
        {
          var e = O.MEM,
            t = O.lib,
            n = this,
            r = o.screen,
            i = s.cookie.indexOf("augurOptOut") > -1,
            c = F.doNotTrack || F.msDoNotTrack || i,
            u = [],
            d = t.sha256,
            f = "v4" !== g.schema;
          if (O.optOut = i, O.FP = {
              browser:
              {
                fingerprint: g.dfp || f ?
                {} :
                {
                  audio: d(this.audio()),
                  canvas: !e.ie && d(n.canvas()),
                  font: d(n.fontDetect()),
                  locale: d(this.locale()),
                  plugin: d(this.plugins()),
                  webGL: !e.ie && d((u = n.webGL(F, t.turnObjToArray))[0])
                },
                is:
                {
                  blockingAds: n.adBlock(),
                  blockingCookies: !x,
                  blockingJava: !F.javaEnabled(),
                  spoofed: n.spoofDetect(F, r),
                  usingDoNotTrack: c && "0" !== c && "unspecified" !== c ? c : l
                },
                userAgent: E
              },
              geoLocation:
              {
                timezone:
                {
                  device: (new Date).getTimezoneOffset() / -60
                },
                is:
                {}
              },
              network:
              {
                address:
                {},
                is:
                {}
              },
              os:
              {
                batteryLevel: F.battery && F.battery.level || a,
                languages: F.languages && F.languages.slice().sort().toString() || F.language || F.browserLanguage || F.systemLanguage || F.userLanguage || a,
                platform: F.platform || a,
                processors: F.hardwareConcurrency || a,
                resolution: r.width + "x" + r.height + "x" + r.colorDepth + "x" + r.availWidth + "x" + r.availHeight,
                screenDensity: (o.devicePixelRatio || "") + (r.deviceXDPI ? r.deviceXDPI + "x" + r.deviceYDPI : "") || a,
                touchScreenSupport: [F.maxTouchPoints || F.msMaxTouchPoints || 0, "TouchEvent" in o, "ontouchstart" in o].toString(),
                videoCardDriver: u[1]
              }
            }, f)
            for (var m in O.FP)
            {
              var h = O.FP[m];
              for (var p in h) O.FP[p] = h[p]
            }
          o.RTCIceGatherer ? n.O() : n.R(), n.mediaDevices(F), F.getBattery && F.getBattery().then(function (e)
          {
            O.FP.batteryLevel = O.FP.os.batteryLevel = e.level
          }), e.pr ? O.FP.browser.is.incognito = O.FP.browserHasIncognitoEnabled = l : n.detectPM(), t.brain("fp")
        },
        audio: function ()
        {
          try
          {
            var e = new(o.AudioContext || o.webkitAudioContext),
              t = e.destination;
            return "" + e.sampleRate + t.maxChannelCount + t.numberOfInputs + t.numberOfOutputs + t.channelCount + t.channelCountMode + t.channelInterpretation
          }
          catch (n)
          {}
        },
        locale: function ()
        {
          var e = new Date,
            t = e.getTimezoneOffset();
          e.setTime(0);
          for (var n, r = 1e9, a = r.toLocaleString ? r.toLocaleString() + e.toLocaleString() : "", i = 0; i < 1769390779860; i += 864e5) e.setTime(i), n = e.getTimezoneOffset(), n !== t && (a += "" + n + Math.round(i / 1e3), t = n);
          return a
        },
        adBlock: function ()
        {
          var e = s.body || s.head,
            t = s.createElement("div");
          return t.innerHTML = "&nbsp;", t.className = "adsbox", t.id = "adboxCheck", e.appendChild(t), setTimeout(function ()
          {
            var n = O.lib && O.lib.brain;
            n && (O.FP.browser.is.blockingAds = 0 === s.getElementById("adboxCheck").offsetHeight, n("ads"), e.removeChild(t))
          }, 0), !1
        },
        canvas: function ()
        {
          var e = s.createElement("canvas");
          e.width = "500", e.height = "75";
          for (var t = e.getContext("2d"), n = ['9.5pt "Arial"', '9.5px "Arial"', '9.5pt "' + v + '"'], r = t.createLinearGradient(10, 0, 500, 0), a = ["violet", 1, "indigo", 5 / 6, "blue", 4 / 6, "green", .5, "yellow", 2 / 6, "orange", 1 / 6, "red", 0], i = a.length; i;) r.addColorStop(a[--i], a[--i]);
          for (t.fillStyle = r, t.fillRect(0, 0, 500, 65), t.textBaseline = "top", t.textBaseline = "alphabetic", t.shadowColor = "#000", t.shadowOffsetX = 5, t.shadowOffsetY = 5, t.shadowBlur = 7, t.fillStyle = "rgba(102,204,0,.7)", i = n.length; i--;) t.font = n[i], t.fillText(v + "��", 5, 18 * (1 + i));
          return e.toDataURL()
        },
        detectPM: function ()
        {
          var e, t, n = function (e, t)
            {
              var n = 0,
                r = 100,
                a = 1,
                i = o.setInterval(function ()
                {
                  e() && (o.clearInterval(i), t(l)), n++ > r && (o.clearInterval(i), t(c))
                }, a)
            },
            r = x ? o.localStorage : a,
            i = x ? o.indexedDB : a,
            s = x ? o.requestFileSystem || o.webkitRequestFileSystem : a;
          try
          {
            if (s !== a) s(o.TEMPORARY, 1, function ()
            {
              e = l
            }, function ()
            {
              e = c
            });
            else if (i !== a && /Firefox/.test(E))
            {
              try
              {
                t = i.open("test")
              }
              catch (u)
              {
                e = c
              }
              e === a && n(function ()
              {
                return "done" === t.readyState ? c : l
              }, function (n)
              {
                n === l && (e = t.result ? l : c)
              })
            }
            else if (r !== a && /Safari/.test(E)) try
            {
              r.setItem("test", 1), r.removeItem("test"), e = l
            }
            catch (u)
            {
              e = c
            }
            else if (/(MSIE 10\.)|(Windows.*(rv:11|Edge\/))/.test(E))
            {
              e = l;
              try
              {
                i === a && (e = c)
              }
              catch (u)
              {
                e = c
              }
            }
          }
          catch (u)
          {}
          n(function ()
          {
            return e !== a
          }, function ()
          {
            O.FP.browser.is.incognito = O.FP.browserHasIncognitoEnabled = e, O.lib.brain("pr")
          })
        },
        fontDetect: function ()
        {
          var e, t, n = ["monospace", "serif", "sans-serif"],
            r = n.length,
            a = s.body,
            i = s.createElement("span"),
            o = [],
            l = {},
            u = "8514oem,abadi mt condensed light,academy engraved let,acaderef,adobe arabic,adobe caslon pro,adobe caslon pro bold,adobe devanagari,adobe fan heiti std b,adobe fangsong std,adobe fangsong std r,adobe garamond,adobe garamond pro,adobe garamond pro bold,adobe gothic std b,adobe hebrew,adobe heiti std r,adobe kaiti std r,adobe ming std,adobe ming std l,adobe myungjo std m,adobe naskh medium,adobe song std l,agency fb,aharoni,aigdt,albertus extra bold,albertus medium,alexandra script,algerian,amadeus,amazone bt,amdtsymbols,american typewriter,american typewriter condensed,amertype md bt,amgdt,anastasiascript,andale mono,andalus,angsana new,angsanaupc,annabelle,antique olive,aparajita,apple chancery,apple color emoji,apple sd gothic neo,arab,arabic transparent,arabic typesetting,archer,arial,arial baltic,arial black,arial ce,arial cyr,arial greek,arial hebrew,arial mt,arial narrow,arial rounded mt bold,arial tur,arial unicode ms,ariston,arno pro,arno pro caption,arno pro display,arno pro light display,arno pro smbd,arno pro smbd caption,arno pro smbd display,arno pro smbd smtext,arno pro smbd subhead,arno pro smtext,arno pro subhead,arrus bt,aurora cn bt,avantgarde bk bt,avantgarde md bt,avenir,ayuthaya,balker,bandy,bangla sangam mn,bank gothic,bankgothic lt bt,bankgothic md bt,baskerville,baskerville old face,batang,batangche,bauer bodoni,bauhaus 93,bazooka,bell gothic std black,bell gothic std light,bell mt,bembo,benguiat bk bt,berlin sans fb,berlin sans fb demi,bernard mt condensed,bernhardfashion bt,bernhardmod bt,bickham script one,bickham script pro regular,bickham script pro semibold,bickham script two,big caslon,binnerd,birch std,bitstream charter,bitstream vera sans mono,bitstream vera serif,blackadder itc,blackoak std,blairmditc tt,bodoni 72,bodoni 72 oldstyle,bodoni 72 smallcaps,bodoni mt,bodoni mt black,bodoni mt condensed,bodoni mt poster compressed,book antiqua,bookman old style,bookshelf symbol 7,boulder,bradley hand,bradley hand itc,braggadocio,brandon grotesque,bremen bd bt,britannic bold,broadway,browallia new,browalliaupc,brush script mt,brush script std,calibri,calibri light,californian fb,calisto mt,calligraph,calligrapher,cambria,cambria math,candara,carolina,caslonopnface bt,castellar,casual,centaur,century,century gothic,century schoolbook,century schoolbook l,ceremonious two,cezanne,cg omega,cg times,chalkboard,chalkboard se,chalkduster,chandas,chaparral pro,chaparral pro light,charcoal,charlemagne std,charlesworth,charter bd bt,charter bt,chaucer,chelthmitc bk bt,chicago,chiller,cityblueprint,clarendon,clarendon blk bt,clarendon bt,clarendon condensed,clarendon lt bt,cloisterblack bt,cochin,colonna mt,comic sans,comic sans ms,commercialpi bt,commercialscript bt,complex,consolas,constantia,contax pro,cooper black,cooper std black,copperplate,copperplate gothic,copperplate gothic bold,copperplate gothic light,copperplgoth bd bt,copyist,corbel,cordia new,cordiaupc,cornerstone,coronet,countryblueprint,courier,courier new,courier new baltic,courier new ce,courier new cyr,courier new greek,courier new tur,cuckoo,curlz mt,cursive,daunpenh,dauphin,david,db lcd temp,decor,default,deja vu sans mono,dejavu lgc sans mono,dejavu sans,dejavu sans condensed,dejavu sans light,dejavu sans mono,dejavu serif,dejavu serif condensed,delicious,denmark,desdemona,dfkai-sb,didot,dilleniaupc,din,dokchampa,dom casual,domestic manners,dotum,dotumche,droid sans,droid sans mono,droid serif,dutch801 rm bt,dutch801 xbd bt,ebrima,eccentric std,edwardian script itc,elephant,english 111 vivace bt,engravers mt,engraversgothic bt,eras bold itc,eras demi itc,eras light itc,eras medium itc,estrangelo edessa,eucrosiaupc,euphemia,euphemia ucas,euroroman,eurostile,exotc350 bd bt,expressway,fangsong,fantasy,felix titling,fixed,fixedsys,fontin,footlight mt light,forte,franklin gothic book,franklin gothic demi,franklin gothic demi cond,franklin gothic fs,franklin gothic heavy,franklin gothic medium,franklin gothic medium cond,frankruehl,fransiscan,freefrm721 blk bt,freehand521 bt,freesiaupc,freestyle script,french script mt,frnkgothitc bk bt,fruitger,frutiger,function pro,futura,futura bk bt,futura lt bt,futura md bt,futura zblk bt,futurablack bt,gabriola,gadugi,galliard bt,garamond,garamond premr pro,garamond premr pro smbd,gautami,gdt,geeza pro,geneva,geniso,gentium,gentium basic,gentium book basic,geometr231 bt,geometr231 hv bt,geometr231 lt bt,georgia,geoslab 703 lt bt,geoslab 703 xbd bt,giddyup std,gigi,gill sans,gill sans mt,gill sans mt condensed,gill sans mt ext condensed bold,gill sans ultra bold,gill sans ultra bold condensed,gisha,gloucester mt extra condensed,gotham,gotham bold,gothice,gothicg,gothici,goudy old style,goudy stout,goudyhandtooled bt,goudyolst bt,grecs du roi,greekc,greeks,gujarati sangam mn,gulim,gulimche,gungseo,gungsuh,gungsuhche,gurmukhi mn,haettenschweiler,hanacaraka,harlow solid italic,harrington,heather,heather script one,hei s,heisei kaku gothic,heit,heiti sc,heiti tc,helv,helvetica,helvetica neue,herald,herculanum,high tower text,hiragino kaku gothic pron,hiragino mincho pron,hiragino sans gb,hobo std,hoefler text,humanst 521 cn bt,humanst521 bt,humanst521 lt bt,impact,imprint mt shadow,incised901 bd bt,incised901 bt,incised901 lt bt,inconsolata,informal roman,informal011 bt,innovage,interstate,interval sans pro,irisupc,iskoola pota,isocp,isocp2,isocp3,isocpeur,isoct,isoct2,isoct3,isocteur,italic,italicc,italict,japanese gothic,jasmineupc,jazz let,jenson,jester,jokerman,jomolhari,juice itc,kabel bk bt,kabel ult bt,kacstone,kailasa,kaiti,kalinga,kannada sangam mn,kartika,kaufmann bd bt,kaufmann bt,khmer ui,king,kino mt,kodchiangupc,kokila,korinna bt,kozuka gothic pr6n,kozuka gothic pr6n b,kozuka gothic pr6n el,kozuka gothic pr6n h,kozuka gothic pr6n l,kozuka gothic pr6n m,kozuka gothic pr6n r,kozuka gothic pro b,kozuka gothic pro el,kozuka gothic pro h,kozuka gothic pro l,kozuka gothic pro m,kozuka gothic pro r,kozuka mincho pr6n b,kozuka mincho pr6n el,kozuka mincho pr6n h,kozuka mincho pr6n l,kozuka mincho pr6n m,kozuka mincho pr6n r,kozuka mincho pro b,kozuka mincho pro el,kozuka mincho pro h,kozuka mincho pro l,kozuka mincho pro m,kozuka mincho pro r,kristen itc,krungthep,kunstler script,lalit,lao ui,latha,leelawadee,letter gothic,letter gothic std,levenim mt,liberation sans narrow,lilyupc,lithograph,lithograph light,lithos pro regular,lobster,lohit gujarati,loma,long island,lucida bright,lucida calligraphy,lucida console,lucida fax,lucida grande,lucida handwriting,lucida sans,lucida sans typewriter,lucida sans unicode,lydian bt,magneto,maiandra gd,malayalam sangam mn,malgun gothic,mangal,marigold,marion,marker felt,market,marlett,matisse itc,matura mt script capitals,meiryo,meiryo ui,menlo,mesquite std,microsoft himalaya,microsoft jhenghei,microsoft jhenghei ui,microsoft new tai lue,microsoft phagspa,microsoft sans serif,microsoft tai le,microsoft uighur,microsoft yahei,microsoft yahei ui,microsoft yi baiti,mingliu,mingliu-extb,mingliu_hkscs,mingliu_hkscs-extb,minion,minion pro,minion pro cond,minion pro med,minion pro smbd,miriam,miriam fixed,mistral,modena,modern,modern no. 20,molengo,mona lisa solid itc tt,monaco,mongolian baiti,mono,monofur,monospac821 bt,monotxt,monotype corsiva,moolboran,mrs eaves,ms gothic,ms linedraw,ms mincho,ms outlook,ms pgothic,ms pmincho,ms reference sans serif,ms reference specialty,ms sans serif,ms serif,ms ui gothic,mt extra,museo,mv boli,myriad,myriad arabic,myriad hebrew,myriad pro,myriad pro cond,myriad pro light,myriad web pro,nadeem,narkisim,neutraface,nevis,news gothic,news gothic mt,news gothicmt,newsgoth bt,niagara engraved,niagara solid,nimbus mono l,nimbus sans l,nirmala ui,nobile,noteworthy,nsimsun,nueva std,nueva std cond,nyala,ocr a extended,ocr a std,ocr-a bt,ocr-b 10 bt,ofl sorts mill goudy tt,old century,old english text mt,onyx,onyx bt,open sans,opensymbol,optima,orator std,oriya sangam mn,osaka,ouverture script,ozhandicraft bt,palace script mt,palatino,palatino linotype,pandtos,panroman,papyrus,parchment,party let,pegasus,perpetua,perpetua titling mt,petitabold,pickwick,plantagenet cherokee,playbill,pmingliu,pmingliu-extb,poor richard,poplar std,poster,posterbodoni bt,prelude bold,prelude condensed bold,prelude condensed medium,prelude medium,preludecompressedwgl black,preludecompressedwgl bold,preludecompressedwgl light,preludecompressedwgl medium,preludecondensedwgl black,preludecondensedwgl bold,preludecondensedwgl light,preludecondensedwgl medium,preludewgl black,preludewgl bold,preludewgl light,preludewgl medium,prestige elite std,princetown let,pristina,profont,proggy,proxima nova,proxy 1,proxy 2,proxy 3,proxy 4,proxy 5,proxy 6,proxy 7,proxy 8,proxy 9,pt sans,ptbarnum bt,pythagoras,raavi,rachana,rage italic,ravie,reenie beanie,ribbon131 bd bt,rockwell,rockwell condensed,rockwell extra bold,rod,roman,romanc,romand,romans,romant,romantic,rosewood std regular,rotundus,sakkal majalla,san francisco,sansserif,santa fe let,savoye let,sawasdee,sceptre,script,script mt bold,scriptc,scriptina,scripts,segoe print,segoe script,segoe ui,segoe ui light,segoe ui semibold,segoe ui semilight,segoe ui symbol,serifa,serifa bt,serifa th bt,shelleyvolante bt,sherwood,shonar bangla,showcard gothic,shruti,signboard,silkscreen,simhei,simplex,simplified arabic,simplified arabic fixed,simsun,simsun-extb,sinhala sangam mn,sketch rockwell,skia,small fonts,snap itc,snell roundhand,socket,source sans pro,souvenir lt bt,square721 bt,staccato222 bt,steamer,stencil,stencil std,storybook,styllo,stylus bt,subway,superfrench,swift,swis721 bdcnoul bt,swis721 bdoul bt,swis721 blk bt,swis721 blkcn bt,swis721 blkex bt,swis721 blkoul bt,swis721 bt,swis721 cn bt,swis721 ex bt,swis721 hv bt,swis721 lt bt,swis721 ltcn bt,swis721 ltex bt,swiss911 xcm bt,syastro,sylfaen,symap,symath,symbol,symeteo,symusic,synchro let,system,tahoma,tamil sangam mn,teamviewer8,technic,technical,technicbold,techniclite,tekton pro,tekton pro cond,tekton pro ext,teletype,telugu sangam mn,tempus sans itc,terminal,tex,thonburi,tibetan machine uni,times,times new roman,times new roman baltic,times new roman ce,times new roman cyr,times new roman greek,times new roman ps,times new roman tur,tlwgmono,traditional arabic,trajan,trajan pro,trebuchet ms,tristan,tubular,tunga,tw cen mt,tw cen mt condensed,tw cen mt condensed extra bold,txt,typoupright bt,ubuntu,ubuntu mono,umpush,unicorn,univers,univers ce 55 medium,univers condensed,universalmath1 bt,urw bookman l,urw chancery l,urw gothic l,urw roman no9 l,utopia,utsaah,vagabond,vani,verdana,verona,vijaya,viner hand itc,vineta bt,visualui,vivaldi,vladimir script,vrinda,webdings,westminster,whitney,wide latin,wingdings,wingdings 2,wingdings 3,wp arabic sihafa,wp arabicscript sihafa,wp cyrillica,wp cyrillicb,wp greek century,wp greek courier,wp greek helve,wp hebrew david,wp multinationala courier,wp multinationala helve,wp multinationala roman,wp multinationalb courier,wp multinationalb helve,wp multinationalb roman,wst_czec,wst_engl,wst_fren,wst_germ,wst_ital,wst_span,wst_swed,yanone kaffeesatz,zapfellipt bt,zapfhumnst bt,zapfhumnst dm bt,zapfino,zurich blkex bt,zurich ex bt,zwadobef".split(",");
          for (i.style.position = "absolute", i.style.lineHeight = "normal", i.style.left = "-999em", i.style.fontSize = "100px", i.innerHTML = v, a.appendChild(i); r--;) i.style.fontFamily = n[r], t = i.offsetWidth + "" + i.offsetHeight, l[n[r]] = t, l[t] = c;
          for (r = u.length; r--;)
            for (e = n.length; e--;)
              if (i.style.fontFamily = '"' + u[r] + '",' + n[e], t = i.offsetWidth + "" + i.offsetHeight, l[n[e]] !== t)
              {
                o[o.length] = u[r] + (l[t] ? ":default" : "");
                break
              } return a.removeChild(i), o.sort().toString()
        },
        mediaDevices: function (e)
        {
          e.mediaDevices && e.mediaDevices.enumerateDevices && e.mediaDevices.enumerateDevices().then(function (e)
          {
            for (var t, n = O.FP.os, r = e.length, a = {
                audiooutput: "speakersInstalled",
                audioinput: "microphonesInstalled",
                videoinput: "webcamsInstalled"
              }; r--;) t = a[e[r].kind], n[t] = (n[t] || 0) + 1
          })
        },
        plugins: function ()
        {
          for (var e, t, n, r, a, i = F.plugins, o = i.length, s = []; o--;)
          {
            for (t = i[o], n = [t.name + t.version + t.filename + t.description, []], r = n[1], e = t.length; e--;) a = t[e], r.push([a.type + a.suffixes + a.description]);
            r.sort(), s.push(n)
          }
          return s.sort().toString()
        },
        spoofDetect: function (e, t)
        {
          var r = E.toLowerCase(),
            a = function (e, t)
            {
              return e.indexOf(t) !== -1
            },
            i = function ()
            {
              var t, n = e.productSub;
              if (t = a(r, "firefox") ? "Firefox" : a(r, "opera") || a(r, "opr") ? "Opera" : a(r, "chrome") ? "Chrome" : a(r, "safari") ? "Safari" : a(r, "trident") ? "Internet Explorer" : "Other", ("Chrome" === t || "Safari" === t || "Opera" === t) && "20030107" !== n) return c;
              var i = eval.toString().length;
              if (37 === i && "Safari" !== t && "Firefox" !== t && "Other" !== t) return c;
              if (39 === i && "Internet Explorer" !== t && "Other" !== t) return c;
              if (33 === i && "Chrome" !== t && "Opera" !== t && "Other" !== t) return c;
              var o;
              try
              {
                throw "a"
              }
              catch (s)
              {
                try
                {
                  s.toSource(), o = c
                }
                catch (s)
                {
                  o = l
                }
              }
              return o && "Firefox" !== t && "Other" !== t ? c : l
            },
            u = function ()
            {
              var t, i = e.oscpu && e.oscpu.toLowerCase(),
                u = e.platform.toLowerCase();
              if (t = a(r, "windows phone") ? "Windows Phone" : a(r, "win") ? "Windows" : a(r, "android") ? "Android" : a(r, "linux") ? "Linux" : a(r, "iphone") || a(r, "ipad") ? "iOS" : a(r, "mac") ? "Mac" : "Other", i)
              {
                if (a(i, "win") && "Windows" !== t && "Windows Phone" !== t) return c;
                if (a(i, "linux") && "Linux" !== t && "Android" !== t) return c;
                if (a(i, "mac") && "Mac" !== t && "iOS" !== t) return c;
                if (a(i, "win") && a(i, "linux") && a(i, "mac") && "other" !== t) return c
              }
              return a(u, "win") && "Windows" !== t && "Windows Phone" !== t ? c : (a(u, "linux") || a(u, "android") || a(u, "pike")) && "Linux" !== t && "Android" !== t ? c : (a(u, "mac") || a(u, "ipad") || a(u, "ipod") || a(u, "iphone")) && "Mac" !== t && "iOS" !== t ? c : a(u, "win") && a(u, "linux") && a(u, "mac") && "other" !== t ? c : (e.plugins || "Windows" === t || "Windows Phone" === t) && ("Android" !== t && "iOS" !== t && "Windows Phone" !== t || e.maxTouchPoints || e.msMaxTouchPoints || n(function ()
              {
                return !!s.createEvent("TouchEvent")
              }) || "ontouchstart" in o) ? l : c
            };
          return i() || u() || e.language && e.languages && e.languages[0] && e.languages[0].substr && e.languages[0].substr(0, 2) !== e.language.substr(0, 2) || t.width < t.availWidth || t.height < t.availHeight
        },
        O: function ()
        {
          function e()
          {
            t = setTimeout(s, 1e3, a)
          }
          var t, n = new o.RTCIceGatherer(
            {
              gatherPolicy: "all",
              iceServers: []
            }),
            a = [],
            i = this,
            s = i.ORComplete;
          n.onerror = function (e)
          {
            r("O", e), O.lib.brain("rd")
          }, n.onlocalcandidate = function (n)
          {
            var r = n.candidate.ip;
            clearTimeout(t), r ? a.indexOf(r) === -1 && (a.push(i.compactIPv6(r)), e()) : s(a)
          }, e()
        },
        compactIPv6: function (e)
        {
          return e.replace(/:0:/g, "::")
        },
        ORComplete: function (e)
        {
          O.FP && (O.FP.routerFingerprint = e.sort().toString()), O.lib && O.lib.brain && O.lib.brain("rc")
        },
        R: function ()
        {
          function e(e)
          {
            "0.0.0.0" !== e && u.indexOf(e) === -1 && u.push(d.compactIPv6(e)), clearTimeout(i), i = setTimeout(f, 1e3, u)
          }

          function t(t)
          {
            t.split("\r\n").forEach(function (t)
            {
              if (~t.indexOf("a=candidate"))
              {
                var n = t.split(" ");
                "host" === n[7] && e(n[4])
              }
              else ~t.indexOf("c=") && e(t.split(" ")[2])
            })
          }
          var a, i, s, u = [],
            d = O.fingerprint,
            f = d.ORComplete,
            m = o.webkitRTCPeerConnection || o.RTCPeerConnection;
          return m ? void n(function ()
          {
            a = new m(
            {
              iceServers: []
            }), a.createDataChannel("",
            {
              reliable: l
            }), a.onerror = function (e)
            {
              r("R", e), O.lib.brain("rd")
            }, a.onicecandidate = function (e)
            {
              var n = e.candidate;
              n ? t("a=" + n.candidate) : "complete" === a.iceGatheringState && (0 !== u.length || s || O.MEM.rc ? (f(u), clearTimeout(i)) : (d.R(), s = c))
            }, a.createOffer(function (e)
            {
              t(e.sdp), a.setLocalDescription(e)
            }, w)
          }) : O.lib.brain("rd")
        },
        webGL: function (e, t)
        {
          function n(e)
          {
            return "[" + e[0] + ", " + e[1] + "]"
          }

          function i(e)
          {
            var t, n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
            return n ? (t = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT), t || (t = 2), t) : null
          }

          function c(e, t)
          {
            return t ? "" + Math.pow(2, e) : "2^" + e
          }

          function l(e, t)
          {
            return "[-" + c(e.rangeMin, t) + ", " + c(e.rangeMax, t) + "] (" + e.precision + (t ? " bit mantissa" : "") + ")"
          }

          function u(e, t)
          {
            var n = t.getShaderPrecisionFormat(e, t.HIGH_FLOAT),
              r = t.getShaderPrecisionFormat(e, t.MEDIUM_FLOAT);
            return {
              High: l(n, 1),
              Medium: l(r, 1),
              Low: l(t.getShaderPrecisionFormat(e, t.LOW_FLOAT), 1),
              Best: l(n.precision ? n : r, 0)
            }
          }

          function d(e)
          {
            var t = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT);
            return (t.precision ? "highp/" : "mediump/") + (t = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT) && t.rangeMax ? "highp" : "lowp")
          }

          function f(e)
          {
            return e && 0 === (e & e - 1)
          }

          function m(t)
          {
            var r = n(t.getParameter(t.ALIASED_LINE_WIDTH_RANGE)),
              a = "Win32" === e.platform && "Internet Explorer" !== t.getParameter(t.RENDERER) && r === n([1, 1]);
            return a ? f(t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)) && f(t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)) ? 2 : 1 : 0
          }
          if (o.WebGLRenderingContext)
          {
            for (var h, g, p = 4, b = s.createElement("canvas"), y = ["webkit-3d", "moz-webgl", "experimental-webgl", "webgl"]; p--;) try
            {
              if ((h = b.getContext(g = y[p])) && "function" == typeof h.getParameter) return [t(
              {
                contextName: g,
                glVersion: h.getParameter(h.VERSION),
                shadingLanguageVersion: h.getParameter(h.SHADING_LANGUAGE_VERSION),
                vendor: h.getParameter(h.VENDOR),
                renderer: h.getParameter(h.RENDERER),
                antialias: h.getContextAttributes().antialias ? "Available" : "Not available",
                angle: m(h),
                redBits: h.getParameter(h.RED_BITS),
                greenBits: h.getParameter(h.GREEN_BITS),
                blueBits: h.getParameter(h.BLUE_BITS),
                alphaBits: h.getParameter(h.ALPHA_BITS),
                depthBits: h.getParameter(h.DEPTH_BITS),
                stencilBits: h.getParameter(h.STENCIL_BITS),
                maxRenderBufferSize: h.getParameter(h.MAX_RENDERBUFFER_SIZE),
                maxCombinedTextureImageUnits: h.getParameter(h.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                maxCubeMapTextureSize: h.getParameter(h.MAX_CUBE_MAP_TEXTURE_SIZE),
                maxFragmentUniformVectors: h.getParameter(h.MAX_FRAGMENT_UNIFORM_VECTORS),
                maxTextureImageUnits: h.getParameter(h.MAX_TEXTURE_IMAGE_UNITS),
                maxTextureSize: h.getParameter(h.MAX_TEXTURE_SIZE),
                maxVaryingVectors: h.getParameter(h.MAX_VARYING_VECTORS),
                maxVertexAttributes: h.getParameter(h.MAX_VERTEX_ATTRIBS),
                maxVertexTextureImageUnits: h.getParameter(h.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                maxVertexUniformVectors: h.getParameter(h.MAX_VERTEX_UNIFORM_VECTORS),
                aliasedLineWidthRange: n(h.getParameter(h.ALIASED_LINE_WIDTH_RANGE)),
                aliasedPointSizeRange: n(h.getParameter(h.ALIASED_POINT_SIZE_RANGE)),
                maxViewportDimensions: n(h.getParameter(h.MAX_VIEWPORT_DIMS)),
                maxAnisotropy: i(h),
                extensions: h.getSupportedExtensions().sort().toString(),
                vertexShaderBestPrecision: t(u(h.VERTEX_SHADER, h)),
                fragmentShaderBestPrecision: t(u(h.FRAGMENT_SHADER, h)),
                fragmentShaderFloatIntPrecision: d(h)
              }), h.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") !== -1 ? h.getParameter(h.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL) + " " + h.getParameter(h.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL) : a]
            }
            catch (v)
            {
              r("webGL", v)
            }
            return "Supported. Disabled"
          }
          return "WebGL not supported"
        }
      },
      lib:
      {
        api: function (e)
        {
          O.json = e, O.device = e.device, O.consumer = e.consumer, O.webTraffic = e.webTraffic
        },
        b64Encode: function (e)
        {
          for (var t, n, r, a = v, i = 0, o = [], s = e.length; i < s;)
          {
            switch (r = i % 3, t = e.charCodeAt(i++), r)
            {
            case 0:
              o.push(a.charAt(t >> 2));
              break;
            case 1:
              o.push(a.charAt((3 & n) << 4 | t >> 4));
              break;
            case 2:
              o.push(a.charAt((15 & n) << 2 | t >> 6)), o.push(a.charAt(63 & t))
            }
            n = t
          }
          return 0 === r ? (o.push(a.charAt((3 & n) << 4)), o.push("==")) : 1 === r && (o.push(a.charAt((15 & n) << 2)), o.push("=")), o.join("")
        },
        b64Decode: function (e)
        {
          for (var t, n, r = v, a = 0, i = [], o = (e = e.replace(/(\s|=)/g, "")).length; a < o;)
          {
            switch (t = r.indexOf(e.charAt(a)), a++ % 4)
            {
            case 1:
              i.push(String.fromCharCode(n << 2 | t >> 4));
              break;
            case 2:
              i.push(String.fromCharCode((15 & n) << 4 | t >> 2));
              break;
            case 3:
              i.push(String.fromCharCode((3 & n) << 6 | t))
            }
            n = t
          }
          return i.join("")
        },
        brain: function (e, t)
        {
          var n = O.MEM;
          if (n[e] = !t, !n.fn && (n.rc || n.rd) && n.pr && n.ads && n.fp && n.cds && n.cdsfin)
            if (n.s) n.cc && O.lib.destruct();
            else
            {
              var r = O.cake.send;
              r(), n.s = setTimeout(r, 1e4)
            }
        },
        coffee:
        {
          auspicium: function (e)
          {
            for (var t = 9, n = [99, 111, 114, 98, 111, 109, 105, 116, 101]; t--;) e[t] = String.fromCharCode(n[t]);
            return e.join("")
          },
          arrayToString: function (e, t)
          {
            var n = e.length,
              r = n - 1 << 2,
              a = 0;
            if (t)
            {
              var i = e[n - 1];
              if (i < r - 3 || i > r) return null;
              r = i
            }
            for (; a < n; ++a) e[a] = String.fromCharCode(255 & e[a], e[a] >>> 8 & 255, e[a] >>> 16 & 255, e[a] >>> 24 & 255);
            return t ? e.join("").slice(0, r) : e.join("")
          },
          stringToArray: function (e, t)
          {
            for (var n = e.length, r = [], a = 0; a < n; a += 4) r[a >> 2] = e.charCodeAt(a) | e.charCodeAt(a + 1) << 8 | e.charCodeAt(a + 2) << 16 | e.charCodeAt(a + 3) << 24;
            return t && (r[r.length] = n), r
          },
          glutiam: function (e)
          {
            if (!e) return e;
            var t, n, r, a = this,
              i = a.stringToArray(e, 1),
              o = [1651666787, 1953066351, 101],
              s = i.length - 1,
              c = i[s],
              l = i[0],
              u = Math.floor(6 + 52 / (s + 1)),
              d = 0;
            for (o.length = 4; 0 <= --u;)
            {
              for (d = d + 2654435769 & 4294967295, n = d >>> 2 & 3, r = 0; r < s; ++r) l = i[r + 1], t = (c >>> 5 ^ l << 2) + (l >>> 3 ^ c << 4) ^ (d ^ l) + (o[3 & r ^ n] ^ c), c = i[r] = i[r] + t & 4294967295;
              l = i[0], t = (c >>> 5 ^ l << 2) + (l >>> 3 ^ c << 4) ^ (d ^ l) + (o[3 & r ^ n] ^ c), c = i[s] = i[s] + t & 4294967295
            }
            return a.arrayToString(i, 0)
          },
          cl: function (e)
          {
            if (e)
            {
              for (var t, n, r, i = this.stringToArray(e), o = [1651666787, 1953066351, 101, a], s = i.length - 1, c = i[s - 1], l = i[0], u = -1640531527, d = 4294967295, f = Math.floor(6 + 52 / (s + 1)) * u; f;)
              {
                for (n = f >>> 2 & 3, r = s; r; --r) c = i[r - 1], t = (c >>> 5 ^ l << 2) + (l >>> 3 ^ c << 4) ^ (f ^ l) + (o[3 & r ^ n] ^ c), l = i[r] = i[r] - t & d;
                c = i[s], t = (c >>> 5 ^ l << 2) + (l >>> 3 ^ c << 4) ^ (f ^ l) + (o[3 & r ^ n] ^ c), l = i[0] = i[0] - t & d, f -= u
              }
              return this.arrayToString(i, 1)
            }
          }
        },
        destruct: function ()
        {
          if (o.augur = {
              CID: O.CID,
              ERR: O.ERR,
              FP: O.FP,
              MEM: O.MEM,
              SLT: O.SLT,
              UID: O.UID,
              URL: O.URL,
              client:
              {
                plugins: O.client.plugins
              },
              consumer: O.consumer,
              device: O.device,
              json: O.json,
              responseTime: i,
              version: O.version
            }, !O.UID)
          {
            o.augur.anonymous = O.anonymous, o.augur.cake = {
              send: O.cake.send,
              maxSends: 3,
              sendAttempts: 3
            };
            var e = O.lib;
            o.augur.lib = {
              coffee: e.coffee,
              getOlderSLT: e.getOlderSLT,
              isValidSLT: e.isValidSLT,
              extractEmail: e.extractEmail
            }
          }
          O = o.augur, O.MEM.fn = c
        },
        fatBoy: function ()
        {
          p = a, R = {
            SLT: "",
            UID: ""
          }, O.cake.cache.clear()
        },
        getOlderSLT: function (e, t)
        {
          var n = this.isValidSLT,
            r = n(e),
            a = n(t);
          return r ? a ? +e.slice(0, 13) < +t.slice(0, 13) ? e : t : e : a ? t : ""
        },
        sha256: function ()
        {
          function e(t)
          {
            if (this.data = "", this.a = 0, "string" == typeof t) this.data = t;
            else if (i.D(t) || i.L(t))
            {
              t = new Uint8Array(t);
              try
              {
                this.data = String.fromCharCode.apply(null, t)
              }
              catch (n)
              {
                for (var r = 0; r < t.length; ++r) this.M(t[r])
              }
            }
            else(t instanceof e || "object" == typeof t && "string" == typeof t.data && "number" == typeof t.a) && (this.data = t.data, this.a = t.a);
            this.v = 0
          }

          function t(e, t, n)
          {
            for (var r, a, i, o, s, c, u, d, f, m, h, g, p, b = n.length(); 64 <= b;)
            {
              for (s = 0; 16 > s; ++s) t[s] = n.getInt32();
              for (; 64 > s; ++s) r = t[s - 2], r = (r >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10, a = t[s - 15], a = (a >>> 7 | a << 25) ^ (a >>> 18 | a << 14) ^ a >>> 3, t[s] = r + t[s - 7] + a + t[s - 16] | 0;
              for (c = e.g, u = e.h, d = e.i, f = e.j, m = e.l, h = e.m, g = e.o, p = e.s, s = 0; 64 > s; ++s) r = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7), i = g ^ m & (h ^ g), a = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10), o = c & u | d & (c ^ u), r = p + r + i + l[s] + t[s], a += o, p = g, g = h, h = m, m = f + r | 0, f = d, d = u, u = c, c = r + a | 0;
              e.g = e.g + c | 0, e.h = e.h + u | 0, e.i = e.i + d | 0, e.j = e.j + f | 0, e.l = e.l + m | 0, e.m = e.m + h | 0, e.o = e.o + g | 0, e.s = e.s + p | 0, b -= 64
            }
          }
          var n, r, a, i = n = n ||
          {};
          i.D = function (e)
          {
            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
          }, i.L = function (e)
          {
            return e && i.D(e.buffer) && void 0 !== e.byteLength
          }, i.G = e, i.b = e, i.b.prototype.H = function (e)
          {
            this.v += e, 4096 < this.v && (this.v = 0)
          }, i.b.prototype.length = function ()
          {
            return this.data.length - this.a
          }, i.b.prototype.M = function (e)
          {
            this.u(String.fromCharCode(e))
          }, i.b.prototype.u = function (e)
          {
            this.data += e, this.H(e.length)
          }, i.b.prototype.c = function (e)
          {
            this.u(String.fromCharCode(e >> 24 & 255) + String.fromCharCode(e >> 16 & 255) + String.fromCharCode(e >> 8 & 255) + String.fromCharCode(255 & e))
          }, i.b.prototype.getInt16 = function ()
          {
            var e = this.data.charCodeAt(this.a) << 8 ^ this.data.charCodeAt(this.a + 1);
            return this.a += 2, e
          }, i.b.prototype.getInt32 = function ()
          {
            var e = this.data.charCodeAt(this.a) << 24 ^ this.data.charCodeAt(this.a + 1) << 16 ^ this.data.charCodeAt(this.a + 2) << 8 ^ this.data.charCodeAt(this.a + 3);
            return this.a += 4, e
          }, i.b.prototype.B = function ()
          {
            return this.data.slice(this.a)
          }, i.b.prototype.compact = function ()
          {
            return 0 < this.a && (this.data = this.data.slice(this.a), this.a = 0), this
          }, i.b.prototype.clear = function ()
          {
            return this.data = "", this.a = 0, this
          }, i.b.prototype.truncate = function (e)
          {
            return e = Math.max(0, this.length() - e), this.data = this.data.substr(this.a, e), this.a = 0, this
          }, i.b.prototype.N = function ()
          {
            for (var e = "", t = this.a; t < this.data.length; ++t)
            {
              var n = this.data.charCodeAt(t);
              16 > n && (e += "0"), e += n.toString(16)
            }
            return e
          }, i.b.prototype.toString = function ()
          {
            return i.I(this.B())
          }, i.createBuffer = function (e, t)
          {
            return void 0 !== e && "utf8" === (t || "raw") && (e = i.C(e)), new i.G(e)
          }, i.J = function ()
          {
            for (var e = String.fromCharCode(0), t = 64, n = ""; 0 < t;) 1 & t && (n += e), t >>>= 1, 0 < t && (e += e);
            return n
          }, i.C = function (e)
          {
            return unescape(d(e))
          }, i.I = function (e)
          {
            return u(escape(e))
          }, i.K = function (e)
          {
            e = e || [];
            for (var t = 0; t < e.length; t++)
              if (e.charCodeAt(t) >>> 8) return !0;
            return !1
          };
          var o = r = r ||
          {};
          a = a ||
          {}, a.A = a.A ||
          {}, a.F = a.A.F = o, o.create = function ()
          {
            c || (s = String.fromCharCode(128), s += n.J(), l = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], c = !0);
            var e = null,
              r = n.createBuffer(),
              a = Array(64),
              i = {
                algorithm: "sha256",
                O: 64,
                P: 32,
                w: 0,
                f: [0, 0],
                start: function ()
                {
                  return i.w = 0, i.f = [0, 0], r = n.createBuffer(), e = {
                    g: 1779033703,
                    h: 3144134277,
                    i: 1013904242,
                    j: 2773480762,
                    l: 1359893119,
                    m: 2600822924,
                    o: 528734635,
                    s: 1541459225
                  }, i
                }
              };
            return i.start(), i.update = function (o, s)
            {
              return o = o || [], "utf8" === s && (o = n.C(o)), i.w += o.length, i.f[0] += o.length / 4294967296 >>> 0, i.f[1] += o.length >>> 0, r.u(o), t(e, a, r), (2048 < r.a || 0 === r.length()) && r.compact(), i
            }, i.digest = function ()
            {
              var o = n.createBuffer();
              o.u(r.B()), o.u(s.substr(0, 64 - (i.f[1] + 8 & 63))), o.c(i.f[0] << 3 | i.f[0] >>> 28), o.c(i.f[1] << 3);
              var c = {
                g: e.g,
                h: e.h,
                i: e.i,
                j: e.j,
                l: e.l,
                m: e.m,
                o: e.o,
                s: e.s
              };
              return t(c, a, o), o = n.createBuffer(), o.c(c.g), o.c(c.h), o.c(c.i), o.c(c.j), o.c(c.l), o.c(c.m), o.c(c.o), o.c(c.s), o
            }, i
          };
          var s = null,
            c = !1,
            l = null;
          return function (e)
          {
            var t = a.F.create();
            return t.update(e, i.K(e) ? "utf8" : void 0), t.digest().N()
          }
        }(),
        turnObjToArray: function (e)
        {
          var t = [];
          for (var n in e) t.push([n, e[n]]);
          return t.sort().toString()
        },
        extractEmail: function (e)
        {
          for (var t = 5; t--;) e = u(e);
          return (/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.exec(e) || [""])[0].toLowerCase()
        },
        isValidSLT: function (e)
        {
          return e && "1" === e.charAt(0) && 32 < e.length && e.length < 48
        }
      }
    }, !o.augur && m && (t(o, "error", function (e)
    {
      n(function ()
      {
        u(e.filename).indexOf(h) > -1 && (r("surpress", e.error), e.preventDefault(), _ || (e.stopPropagation(), e.stopImmediatePropagation()))
      })
    }), o.augur = new O)
  }();

}
/*
     FILE ARCHIVED ON 08:17:55 Jul 15, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:44:56 Jun 25, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  CDXLines.iter: 22.885 (3)
  esindex: 0.02
  exclusion.robots.policy: 117.52
  PetaboxLoader3.resolve: 119.455 (2)
  xauthn.chkprivs: 0.102
  exclusion.robots: 117.543
  LoadShardBlock: 226.01 (3)
  load_resource: 126.252
  xauthn.identify: 116.966
  captures_list: 372.135
  RedisCDXSource: 0.901
  PetaboxLoader3.datanode: 215.546 (4)
*/