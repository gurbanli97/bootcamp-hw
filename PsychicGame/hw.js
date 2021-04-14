! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var i = [],
        n = e.document,
        r = Object.getPrototypeOf,
        a = i.slice,
        s = i.concat,
        o = i.push,
        l = i.indexOf,
        d = {},
        u = d.toString,
        c = d.hasOwnProperty,
        p = c.toString,
        h = p.call(Object),
        f = {},
        v = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        m = function (e) {
            return null != e && e === e.window
        },
        g = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function y(e, t, i) {
        var r, a = (t = t || n).createElement("script");
        if (a.text = e, i)
            for (r in g) i[r] && (a[r] = i[r]);
        t.head.appendChild(a).parentNode.removeChild(a)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[u.call(e)] || "object" : typeof e
    }
    var x = function (e, t) {
            return new x.fn.init(e, t)
        },
        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function T(e) {
        var t = !!e && "length" in e && e.length,
            i = b(e);
        return !v(e) && !m(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    x.fn = x.prototype = {
        jquery: "3.3.1",
        constructor: x,
        length: 0,
        toArray: function () {
            return a.call(this)
        },
        get: function (e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return x.each(this, e)
        },
        map: function (e) {
            return this.pushStack(x.map(this, function (t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function () {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: o,
        sort: i.sort,
        splice: i.splice
    }, x.extend = x.fn.extend = function () {
        var e, t, i, n, r, a, s = arguments[0] || {},
            o = 1,
            l = arguments.length,
            d = !1;
        for ("boolean" == typeof s && (d = s, s = arguments[o] || {}, o++), "object" == typeof s || v(s) || (s = {}), o === l && (s = this, o--); o < l; o++)
            if (null != (e = arguments[o]))
                for (t in e) i = s[t], s !== (n = e[t]) && (d && n && (x.isPlainObject(n) || (r = Array.isArray(n))) ? (a = r ? (r = !1, i && Array.isArray(i) ? i : []) : i && x.isPlainObject(i) ? i : {}, s[t] = x.extend(d, a, n)) : void 0 !== n && (s[t] = n));
        return s
    }, x.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, i;
            return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && ("function" != typeof (i = c.call(t, "constructor") && t.constructor) || p.call(i) !== h))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e) {
            y(e)
        },
        each: function (e, t) {
            var i, n = 0;
            if (T(e))
                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(w, "")
        },
        makeArray: function (e, t) {
            var i = t || [];
            return null != e && (T(Object(e)) ? x.merge(i, "string" == typeof e ? [e] : e) : o.call(i, e)), i
        },
        inArray: function (e, t, i) {
            return null == t ? -1 : l.call(t, e, i)
        },
        merge: function (e, t) {
            for (var i = +t.length, n = 0, r = e.length; n < i; n++) e[r++] = t[n];
            return e.length = r, e
        },
        grep: function (e, t, i) {
            for (var n = [], r = 0, a = e.length, s = !i; r < a; r++) !t(e[r], r) !== s && n.push(e[r]);
            return n
        },
        map: function (e, t, i) {
            var n, r, a = 0,
                o = [];
            if (T(e))
                for (n = e.length; a < n; a++) null != (r = t(e[a], a, i)) && o.push(r);
            else
                for (a in e) null != (r = t(e[a], a, i)) && o.push(r);
            return s.apply([], o)
        },
        guid: 1,
        support: f
    }), "function" == typeof Symbol && (x.fn[Symbol.iterator] = i[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        d["[object " + t + "]"] = t.toLowerCase()
    });
    var E = function (e) {
        var t, i, n, r, a, s, o, l, d, u, c, p, h, f, v, m, g, y, b, x = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            E = 0,
            C = se(),
            S = se(),
            k = se(),
            M = function (e, t) {
                return e === t && (c = !0), 0
            },
            P = {}.hasOwnProperty,
            D = [],
            L = D.pop,
            $ = D.push,
            z = D.push,
            A = D.slice,
            I = function (e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            },
            N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            O = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            j = "\\[" + O + "*(" + H + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + O + "*\\]",
            q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
            B = new RegExp(O + "+", "g"),
            R = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
            X = new RegExp("^" + O + "*," + O + "*"),
            F = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
            G = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]", "g"),
            V = new RegExp(q),
            W = new RegExp("^" + H + "$"),
            Y = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + j),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + N + ")$", "i"),
                needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", "i")
            },
            _ = /^(?:input|select|textarea|button)$/i,
            U = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)", "ig"),
            ee = function (e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            ne = function () {
                p()
            },
            re = ye(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            z.apply(D = A.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
        } catch (e) {
            z = {
                apply: D.length ? function (e, t) {
                    $.apply(e, A.call(t))
                } : function (e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }

        function ae(e, t, n, r) {
            var a, o, d, u, c, f, g, y = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return n;
            if (!r && ((t ? t.ownerDocument || t : w) !== h && p(t), t = t || h, v)) {
                if (11 !== T && (c = Q.exec(e)))
                    if (a = c[1]) {
                        if (9 === T) {
                            if (!(d = t.getElementById(a))) return n;
                            if (d.id === a) return n.push(d), n
                        } else if (y && (d = y.getElementById(a)) && b(t, d) && d.id === a) return n.push(d), n
                    } else {
                        if (c[2]) return z.apply(n, t.getElementsByTagName(e)), n;
                        if ((a = c[3]) && i.getElementsByClassName && t.getElementsByClassName) return z.apply(n, t.getElementsByClassName(a)), n
                    } if (i.qsa && !k[e + " "] && (!m || !m.test(e))) {
                    if (1 !== T) y = t, g = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(te, ie) : t.setAttribute("id", u = x), o = (f = s(e)).length; o--;) f[o] = "#" + u + " " + ge(f[o]);
                        g = f.join(","), y = J.test(e) && ve(t.parentNode) || t
                    }
                    if (g) try {
                        return z.apply(n, y.querySelectorAll(g)), n
                    } catch (e) {} finally {
                        u === x && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(R, "$1"), t, n, r)
        }

        function se() {
            var e = [];
            return function t(i, r) {
                return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = r
            }
        }

        function oe(e) {
            return e[x] = !0, e
        }

        function le(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var i = e.split("|"), r = i.length; r--;) n.attrHandle[i[r]] = t
        }

        function ue(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function ce(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function he(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function fe(e) {
            return oe(function (t) {
                return t = +t, oe(function (i, n) {
                    for (var r, a = e([], i.length, t), s = a.length; s--;) i[r = a[s]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in i = ae.support = {}, a = ae.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, p = ae.setDocument = function (e) {
                var t, r, s = e ? e.ownerDocument || e : w;
                return s !== h && 9 === s.nodeType && s.documentElement && (f = (h = s).documentElement, v = !a(h), w !== h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ne, !1) : r.attachEvent && r.attachEvent("onunload", ne)), i.attributes = le(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), i.getElementsByTagName = le(function (e) {
                    return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                }), i.getElementsByClassName = K.test(h.getElementsByClassName), i.getById = le(function (e) {
                    return f.appendChild(e).id = x, !h.getElementsByName || !h.getElementsByName(x).length
                }), i.getById ? (n.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, n.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && v) {
                        var i = t.getElementById(e);
                        return i ? [i] : []
                    }
                }) : (n.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                        var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }, n.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && v) {
                        var i, n, r, a = t.getElementById(e);
                        if (a) {
                            if ((i = a.getAttributeNode("id")) && i.value === e) return [a];
                            for (r = t.getElementsByName(e), n = 0; a = r[n++];)
                                if ((i = a.getAttributeNode("id")) && i.value === e) return [a]
                        }
                        return []
                    }
                }), n.find.TAG = i.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var i, n = [],
                        r = 0,
                        a = t.getElementsByTagName(e);
                    if ("*" !== e) return a;
                    for (; i = a[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }, n.find.CLASS = i.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && v) return t.getElementsByClassName(e)
                }, g = [], m = [], (i.qsa = K.test(h.querySelectorAll)) && (le(function (e) {
                    f.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + O + "*(?:value|" + N + ")"), e.querySelectorAll("[id~=" + x + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || m.push(".#.+[+~]")
                }), le(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = h.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + O + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (i.matchesSelector = K.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && le(function (e) {
                    i.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), g.push("!=", q)
                }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = K.test(f.compareDocumentPosition), b = t || K.test(f.contains) ? function (e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, M = t ? function (e, t) {
                    if (e === t) return c = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === h || e.ownerDocument === w && b(w, e) ? -1 : t === h || t.ownerDocument === w && b(w, t) ? 1 : u ? I(u, e) - I(u, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return c = !0, 0;
                    var i, n = 0,
                        r = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        o = [t];
                    if (!r || !a) return e === h ? -1 : t === h ? 1 : r ? -1 : a ? 1 : u ? I(u, e) - I(u, t) : 0;
                    if (r === a) return ue(e, t);
                    for (i = e; i = i.parentNode;) s.unshift(i);
                    for (i = t; i = i.parentNode;) o.unshift(i);
                    for (; s[n] === o[n];) n++;
                    return n ? ue(s[n], o[n]) : s[n] === w ? -1 : o[n] === w ? 1 : 0
                }), h
            }, ae.matches = function (e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== h && p(e), t = t.replace(G, "='$1']"), i.matchesSelector && v && !k[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t))) try {
                    var n = y.call(e, t);
                    if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < ae(t, h, null, [e]).length
            }, ae.contains = function (e, t) {
                return (e.ownerDocument || e) !== h && p(e), b(e, t)
            }, ae.attr = function (e, t) {
                (e.ownerDocument || e) !== h && p(e);
                var r = n.attrHandle[t.toLowerCase()],
                    a = r && P.call(n.attrHandle, t.toLowerCase()) ? r(e, t, !v) : void 0;
                return void 0 !== a ? a : i.attributes || !v ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
            }, ae.escape = function (e) {
                return (e + "").replace(te, ie)
            }, ae.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function (e) {
                var t, n = [],
                    r = 0,
                    a = 0;
                if (c = !i.detectDuplicates, u = !i.sortStable && e.slice(0), e.sort(M), c) {
                    for (; t = e[a++];) t === e[a] && (r = n.push(a));
                    for (; r--;) e.splice(n[r], 1)
                }
                return u = null, e
            }, r = ae.getText = function (e) {
                var t, i = "",
                    n = 0,
                    a = e.nodeType;
                if (a) {
                    if (1 === a || 9 === a || 11 === a) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += r(e)
                    } else if (3 === a || 4 === a) return e.nodeValue
                } else
                    for (; t = e[n++];) i += r(t);
                return i
            }, (n = ae.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, i = !e[6] && e[2];
                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && V.test(i) && (t = s(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = C[e + " "];
                        return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && C(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, t, i) {
                        return function (n) {
                            var r = ae.attr(n, e);
                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === i : "!=" === t ? r !== i : "^=" === t ? i && 0 === r.indexOf(i) : "*=" === t ? i && -1 < r.indexOf(i) : "$=" === t ? i && r.slice(-i.length) === i : "~=" === t ? -1 < (" " + r.replace(B, " ") + " ").indexOf(i) : "|=" === t && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (e, t, i, n, r) {
                        var a = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            o = "of-type" === t;
                        return 1 === n && 0 === r ? function (e) {
                            return !!e.parentNode
                        } : function (t, i, l) {
                            var d, u, c, p, h, f, v = a !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                g = o && t.nodeName.toLowerCase(),
                                y = !l && !o,
                                b = !1;
                            if (m) {
                                if (a) {
                                    for (; v;) {
                                        for (p = t; p = p[v];)
                                            if (o ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                                        f = v = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (b = (h = (d = (u = (c = (p = m)[x] || (p[x] = {}))[p.uniqueID] || (c[p.uniqueID] = {}))[e] || [])[0] === T && d[1]) && d[2], p = h && m.childNodes[h]; p = ++h && p && p[v] || (b = h = 0) || f.pop();)
                                        if (1 === p.nodeType && ++b && p === t) {
                                            u[e] = [T, h, b];
                                            break
                                        }
                                } else if (y && (b = h = (d = (u = (c = (p = t)[x] || (p[x] = {}))[p.uniqueID] || (c[p.uniqueID] = {}))[e] || [])[0] === T && d[1]), !1 === b)
                                    for (;
                                        (p = ++h && p && p[v] || (b = h = 0) || f.pop()) && ((o ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && ((u = (c = p[x] || (p[x] = {}))[p.uniqueID] || (c[p.uniqueID] = {}))[e] = [T, b]), p !== t)););
                                return (b -= r) === n || b % n == 0 && 0 <= b / n
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var i, r = n.pseudos[e] || n.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return r[x] ? r(t) : 1 < r.length ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function (e, i) {
                            for (var n, a = r(e, t), s = a.length; s--;) e[n = I(e, a[s])] = !(i[n] = a[s])
                        }) : function (e) {
                            return r(e, 0, i)
                        }) : r
                    }
                },
                pseudos: {
                    not: oe(function (e) {
                        var t = [],
                            i = [],
                            n = o(e.replace(R, "$1"));
                        return n[x] ? oe(function (e, t, i, r) {
                            for (var a, s = n(e, null, r, []), o = e.length; o--;)(a = s[o]) && (e[o] = !(t[o] = a))
                        }) : function (e, r, a) {
                            return t[0] = e, n(t, null, a, i), t[0] = null, !i.pop()
                        }
                    }),
                    has: oe(function (e) {
                        return function (t) {
                            return 0 < ae(e, t).length
                        }
                    }),
                    contains: oe(function (e) {
                        return e = e.replace(Z, ee),
                            function (t) {
                                return -1 < (t.textContent || t.innerText || r(t)).indexOf(e)
                            }
                    }),
                    lang: oe(function (e) {
                        return W.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                            function (t) {
                                var i;
                                do {
                                    if (i = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === f
                    },
                    focus: function (e) {
                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: he(!1),
                    disabled: he(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !n.pseudos.empty(e)
                    },
                    header: function (e) {
                        return U.test(e.nodeName)
                    },
                    input: function (e) {
                        return _.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: fe(function () {
                        return [0]
                    }),
                    last: fe(function (e, t) {
                        return [t - 1]
                    }),
                    eq: fe(function (e, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: fe(function (e, t) {
                        for (var i = 0; i < t; i += 2) e.push(i);
                        return e
                    }),
                    odd: fe(function (e, t) {
                        for (var i = 1; i < t; i += 2) e.push(i);
                        return e
                    }),
                    lt: fe(function (e, t, i) {
                        for (var n = i < 0 ? i + t : i; 0 <= --n;) e.push(n);
                        return e
                    }),
                    gt: fe(function (e, t, i) {
                        for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                        return e
                    })
                }
            }).pseudos.nth = n.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) n.pseudos[t] = ce(t);
        for (t in {
                submit: !0,
                reset: !0
            }) n.pseudos[t] = pe(t);

        function me() {}

        function ge(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function ye(e, t, i) {
            var n = t.dir,
                r = t.next,
                a = r || n,
                s = i && "parentNode" === a,
                o = E++;
            return t.first ? function (t, i, r) {
                for (; t = t[n];)
                    if (1 === t.nodeType || s) return e(t, i, r);
                return !1
            } : function (t, i, l) {
                var d, u, c, p = [T, o];
                if (l) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || s) && e(t, i, l)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || s)
                            if (u = (c = t[x] || (t[x] = {}))[t.uniqueID] || (c[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[n] || t;
                            else {
                                if ((d = u[a]) && d[0] === T && d[1] === o) return p[2] = d[2];
                                if ((u[a] = p)[2] = e(t, i, l)) return !0
                            } return !1
            }
        }

        function be(e) {
            return 1 < e.length ? function (t, i, n) {
                for (var r = e.length; r--;)
                    if (!e[r](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function xe(e, t, i, n, r) {
            for (var a, s = [], o = 0, l = e.length, d = null != t; o < l; o++)(a = e[o]) && (i && !i(a, n, r) || (s.push(a), d && t.push(o)));
            return s
        }

        function we(e, t, i, n, r, a) {
            return n && !n[x] && (n = we(n)), r && !r[x] && (r = we(r, a)), oe(function (a, s, o, l) {
                var d, u, c, p = [],
                    h = [],
                    f = s.length,
                    v = a || function (e, t, i) {
                        for (var n = 0, r = t.length; n < r; n++) ae(e, t[n], i);
                        return i
                    }(t || "*", o.nodeType ? [o] : o, []),
                    m = !e || !a && t ? v : xe(v, p, e, o, l),
                    g = i ? r || (a ? e : f || n) ? [] : s : m;
                if (i && i(m, g, o, l), n)
                    for (d = xe(g, h), n(d, [], o, l), u = d.length; u--;)(c = d[u]) && (g[h[u]] = !(m[h[u]] = c));
                if (a) {
                    if (r || e) {
                        if (r) {
                            for (d = [], u = g.length; u--;)(c = g[u]) && d.push(m[u] = c);
                            r(null, g = [], d, l)
                        }
                        for (u = g.length; u--;)(c = g[u]) && -1 < (d = r ? I(a, c) : p[u]) && (a[d] = !(s[d] = c))
                    }
                } else g = xe(g === s ? g.splice(f, g.length) : g), r ? r(null, s, g, l) : z.apply(s, g)
            })
        }

        function Te(e) {
            for (var t, i, r, a = e.length, s = n.relative[e[0].type], o = s || n.relative[" "], l = s ? 1 : 0, u = ye(function (e) {
                    return e === t
                }, o, !0), c = ye(function (e) {
                    return -1 < I(t, e)
                }, o, !0), p = [function (e, i, n) {
                    var r = !s && (n || i !== d) || ((t = i).nodeType ? u(e, i, n) : c(e, i, n));
                    return t = null, r
                }]; l < a; l++)
                if (i = n.relative[e[l].type]) p = [ye(be(p), i)];
                else {
                    if ((i = n.filter[e[l].type].apply(null, e[l].matches))[x]) {
                        for (r = ++l; r < a && !n.relative[e[r].type]; r++);
                        return we(1 < l && be(p), 1 < l && ge(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(R, "$1"), i, l < r && Te(e.slice(l, r)), r < a && Te(e = e.slice(r)), r < a && ge(e))
                    }
                    p.push(i)
                } return be(p)
        }
        return me.prototype = n.filters = n.pseudos, n.setFilters = new me, s = ae.tokenize = function (e, t) {
            var i, r, a, s, o, l, d, u = S[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (o = e, l = [], d = n.preFilter; o;) {
                for (s in i && !(r = X.exec(o)) || (r && (o = o.slice(r[0].length) || o), l.push(a = [])), i = !1, (r = F.exec(o)) && (i = r.shift(), a.push({
                        value: i,
                        type: r[0].replace(R, " ")
                    }), o = o.slice(i.length)), n.filter) !(r = Y[s].exec(o)) || d[s] && !(r = d[s](r)) || (i = r.shift(), a.push({
                    value: i,
                    type: s,
                    matches: r
                }), o = o.slice(i.length));
                if (!i) break
            }
            return t ? o.length : o ? ae.error(e) : S(e, l).slice(0)
        }, o = ae.compile = function (e, t) {
            var i, r, a, o, l, u, c = [],
                f = [],
                m = k[e + " "];
            if (!m) {
                for (t || (t = s(e)), i = t.length; i--;)(m = Te(t[i]))[x] ? c.push(m) : f.push(m);
                (m = k(e, (r = f, a = c, o = 0 < a.length, l = 0 < r.length, u = function (e, t, i, s, u) {
                    var c, f, m, g = 0,
                        y = "0",
                        b = e && [],
                        x = [],
                        w = d,
                        E = e || l && n.find.TAG("*", u),
                        C = T += null == w ? 1 : Math.random() || .1,
                        S = E.length;
                    for (u && (d = t === h || t || u); y !== S && null != (c = E[y]); y++) {
                        if (l && c) {
                            for (f = 0, t || c.ownerDocument === h || (p(c), i = !v); m = r[f++];)
                                if (m(c, t || h, i)) {
                                    s.push(c);
                                    break
                                } u && (T = C)
                        }
                        o && ((c = !m && c) && g--, e && b.push(c))
                    }
                    if (g += y, o && y !== g) {
                        for (f = 0; m = a[f++];) m(b, x, t, i);
                        if (e) {
                            if (0 < g)
                                for (; y--;) b[y] || x[y] || (x[y] = L.call(s));
                            x = xe(x)
                        }
                        z.apply(s, x), u && !e && 0 < x.length && 1 < g + a.length && ae.uniqueSort(s)
                    }
                    return u && (T = C, d = w), b
                }, o ? oe(u) : u))).selector = e
            }
            return m
        }, l = ae.select = function (e, t, i, r) {
            var a, l, d, u, c, p = "function" == typeof e && e,
                h = !r && s(e = p.selector || e);
            if (i = i || [], 1 === h.length) {
                if (2 < (l = h[0] = h[0].slice(0)).length && "ID" === (d = l[0]).type && 9 === t.nodeType && v && n.relative[l[1].type]) {
                    if (!(t = (n.find.ID(d.matches[0].replace(Z, ee), t) || [])[0])) return i;
                    p && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (a = Y.needsContext.test(e) ? 0 : l.length; a-- && (d = l[a], !n.relative[u = d.type]);)
                    if ((c = n.find[u]) && (r = c(d.matches[0].replace(Z, ee), J.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(a, 1), !(e = r.length && ge(l))) return z.apply(i, r), i;
                        break
                    }
            }
            return (p || o(e, h))(r, t, !v, i, !t || J.test(e) && ve(t.parentNode) || t), i
        }, i.sortStable = x.split("").sort(M).join("") === x, i.detectDuplicates = !!c, p(), i.sortDetached = le(function (e) {
            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
        }), le(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function (e, t, i) {
            if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), i.attributes && le(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || de("value", function (e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function (e) {
            return null == e.getAttribute("disabled")
        }) || de(N, function (e, t, i) {
            var n;
            if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), ae
    }(e);
    x.find = E, x.expr = E.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = E.uniqueSort, x.text = E.getText, x.isXMLDoc = E.isXML, x.contains = E.contains, x.escapeSelector = E.escape;
    var C = function (e, t, i) {
            for (var n = [], r = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && x(e).is(i)) break;
                    n.push(e)
                } return n
        },
        S = function (e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        k = x.expr.match.needsContext;

    function M(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, t, i) {
        return v(t) ? x.grep(e, function (e, n) {
            return !!t.call(e, n, e) !== i
        }) : t.nodeType ? x.grep(e, function (e) {
            return e === t !== i
        }) : "string" != typeof t ? x.grep(e, function (e) {
            return -1 < l.call(t, e) !== i
        }) : x.filter(t, e, i)
    }
    x.filter = function (e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? x.find.matchesSelector(n, e) ? [n] : [] : x.find.matches(e, x.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, x.fn.extend({
        find: function (e) {
            var t, i, n = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function () {
                for (t = 0; t < n; t++)
                    if (x.contains(r[t], this)) return !0
            }));
            for (i = this.pushStack([]), t = 0; t < n; t++) x.find(e, r[t], i);
            return 1 < n ? x.uniqueSort(i) : i
        },
        filter: function (e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function (e) {
            return !!D(this, "string" == typeof e && k.test(e) ? x(e) : e || [], !1).length
        }
    });
    var L, $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (x.fn.init = function (e, t, i) {
        var r, a;
        if (!e) return this;
        if (i = i || L, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== i.ready ? i.ready(e) : e(x) : x.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : $.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : n, !0)), P.test(r[1]) && x.isPlainObject(t))
                for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (a = n.getElementById(r[2])) && (this[0] = a, this.length = 1), this
    }).prototype = x.fn, L = x(n);
    var z = /^(?:parents|prev(?:Until|All))/,
        A = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function I(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    x.fn.extend({
        has: function (e) {
            var t = x(e, this),
                i = t.length;
            return this.filter(function () {
                for (var e = 0; e < i; e++)
                    if (x.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var i, n = 0,
                r = this.length,
                a = [],
                s = "string" != typeof e && x(e);
            if (!k.test(e))
                for (; n < r; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && x.find.matchesSelector(i, e))) {
                            a.push(i);
                            break
                        } return this.pushStack(1 < a.length ? x.uniqueSort(a) : a)
        },
        index: function (e) {
            return e ? "string" == typeof e ? l.call(x(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), x.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return C(e, "parentNode")
        },
        parentsUntil: function (e, t, i) {
            return C(e, "parentNode", i)
        },
        next: function (e) {
            return I(e, "nextSibling")
        },
        prev: function (e) {
            return I(e, "previousSibling")
        },
        nextAll: function (e) {
            return C(e, "nextSibling")
        },
        prevAll: function (e) {
            return C(e, "previousSibling")
        },
        nextUntil: function (e, t, i) {
            return C(e, "nextSibling", i)
        },
        prevUntil: function (e, t, i) {
            return C(e, "previousSibling", i)
        },
        siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return S(e.firstChild)
        },
        contents: function (e) {
            return M(e, "iframe") ? e.contentDocument : (M(e, "template") && (e = e.content || e), x.merge([], e.childNodes))
        }
    }, function (e, t) {
        x.fn[e] = function (i, n) {
            var r = x.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = x.filter(n, r)), 1 < this.length && (A[e] || x.uniqueSort(r), z.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var N = /[^\x20\t\r\n\f]+/g;

    function O(e) {
        return e
    }

    function H(e) {
        throw e
    }

    function j(e, t, i, n) {
        var r;
        try {
            e && v(r = e.promise) ? r.call(e).done(t).fail(i) : e && v(r = e.then) ? r.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    x.Callbacks = function (e) {
        var t, i;
        e = "string" == typeof e ? (t = e, i = {}, x.each(t.match(N) || [], function (e, t) {
            i[t] = !0
        }), i) : x.extend({}, e);
        var n, r, a, s, o = [],
            l = [],
            d = -1,
            u = function () {
                for (s = s || e.once, a = n = !0; l.length; d = -1)
                    for (r = l.shift(); ++d < o.length;) !1 === o[d].apply(r[0], r[1]) && e.stopOnFalse && (d = o.length, r = !1);
                e.memory || (r = !1), n = !1, s && (o = r ? [] : "")
            },
            c = {
                add: function () {
                    return o && (r && !n && (d = o.length - 1, l.push(r)), function t(i) {
                        x.each(i, function (i, n) {
                            v(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== b(n) && t(n)
                        })
                    }(arguments), r && !n && u()), this
                },
                remove: function () {
                    return x.each(arguments, function (e, t) {
                        for (var i; - 1 < (i = x.inArray(t, o, i));) o.splice(i, 1), i <= d && d--
                    }), this
                },
                has: function (e) {
                    return e ? -1 < x.inArray(e, o) : 0 < o.length
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return s = l = [], o = r = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return s = l = [], r || n || (o = r = ""), this
                },
                locked: function () {
                    return !!s
                },
                fireWith: function (e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), n || u()), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!a
                }
            };
        return c
    }, x.extend({
        Deferred: function (t) {
            var i = [
                    ["notify", "progress", x.Callbacks("memory"), x.Callbacks("memory"), 2],
                    ["resolve", "done", x.Callbacks("once memory"), x.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), x.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return r.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return x.Deferred(function (t) {
                            x.each(i, function (i, n) {
                                var r = v(e[n[4]]) && e[n[4]];
                                a[n[1]](function () {
                                    var e = r && r.apply(this, arguments);
                                    e && v(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, n, r) {
                        var a = 0;

                        function s(t, i, n, r) {
                            return function () {
                                var o = this,
                                    l = arguments,
                                    d = function () {
                                        var e, d;
                                        if (!(t < a)) {
                                            if ((e = n.apply(o, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            d = e && ("object" == typeof e || "function" == typeof e) && e.then, v(d) ? r ? d.call(e, s(a, i, O, r), s(a, i, H, r)) : (a++, d.call(e, s(a, i, O, r), s(a, i, H, r), s(a, i, O, i.notifyWith))) : (n !== O && (o = void 0, l = [e]), (r || i.resolveWith)(o, l))
                                        }
                                    },
                                    u = r ? d : function () {
                                        try {
                                            d()
                                        } catch (e) {
                                            x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, u.stackTrace), a <= t + 1 && (n !== H && (o = void 0, l = [e]), i.rejectWith(o, l))
                                        }
                                    };
                                t ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return x.Deferred(function (e) {
                            i[0][3].add(s(0, e, v(r) ? r : O, e.notifyWith)), i[1][3].add(s(0, e, v(t) ? t : O)), i[2][3].add(s(0, e, v(n) ? n : H))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? x.extend(e, r) : r
                    }
                },
                a = {};
            return x.each(i, function (e, t) {
                var s = t[2],
                    o = t[5];
                r[t[1]] = s.add, o && s.add(function () {
                    n = o
                }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), s.add(t[3].fire), a[t[0]] = function () {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = s.fireWith
            }), r.promise(a), t && t.call(a, a), a
        },
        when: function (e) {
            var t = arguments.length,
                i = t,
                n = Array(i),
                r = a.call(arguments),
                s = x.Deferred(),
                o = function (e) {
                    return function (i) {
                        n[e] = this, r[e] = 1 < arguments.length ? a.call(arguments) : i, --t || s.resolveWith(n, r)
                    }
                };
            if (t <= 1 && (j(e, s.done(o(i)).resolve, s.reject, !t), "pending" === s.state() || v(r[i] && r[i].then))) return s.then();
            for (; i--;) j(r[i], o(i), s.reject);
            return s.promise()
        }
    });
    var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    x.Deferred.exceptionHook = function (t, i) {
        e.console && e.console.warn && t && q.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }, x.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var B = x.Deferred();

    function R() {
        n.removeEventListener("DOMContentLoaded", R), e.removeEventListener("load", R), x.ready()
    }
    x.fn.ready = function (e) {
        return B.then(e).catch(function (e) {
            x.readyException(e)
        }), this
    }, x.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --x.readyWait : x.isReady) || (x.isReady = !0) !== e && 0 < --x.readyWait || B.resolveWith(n, [x])
        }
    }), x.ready.then = B.then, "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? e.setTimeout(x.ready) : (n.addEventListener("DOMContentLoaded", R), e.addEventListener("load", R));
    var X = function (e, t, i, n, r, a, s) {
            var o = 0,
                l = e.length,
                d = null == i;
            if ("object" === b(i))
                for (o in r = !0, i) X(e, t, o, i[o], !0, a, s);
            else if (void 0 !== n && (r = !0, v(n) || (s = !0), d && (t = s ? (t.call(e, n), null) : (d = t, function (e, t, i) {
                    return d.call(x(e), i)
                })), t))
                for (; o < l; o++) t(e[o], i, s ? n : n.call(e[o], o, t(e[o], i)));
            return r ? e : d ? t.call(e) : l ? t(e[0], i) : a
        },
        F = /^-ms-/,
        G = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function W(e) {
        return e.replace(F, "ms-").replace(G, V)
    }
    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function _() {
        this.expando = x.expando + _.uid++
    }
    _.uid = 1, _.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, i) {
            var n, r = this.cache(e);
            if ("string" == typeof t) r[W(t)] = i;
            else
                for (n in t) r[W(n)] = t[n];
            return r
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][W(t)]
        },
        access: function (e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function (e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    i = (t = Array.isArray(t) ? t.map(W) : (t = W(t)) in n ? [t] : t.match(N) || []).length;
                    for (; i--;) delete n[t[i]]
                }(void 0 === t || x.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !x.isEmptyObject(t)
        }
    };
    var U = new _,
        K = new _,
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, i) {
        var n, r;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (i = e.getAttribute(n))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Q.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                K.set(e, t, i)
            } else i = void 0;
        return i
    }
    x.extend({
        hasData: function (e) {
            return K.hasData(e) || U.hasData(e)
        },
        data: function (e, t, i) {
            return K.access(e, t, i)
        },
        removeData: function (e, t) {
            K.remove(e, t)
        },
        _data: function (e, t, i) {
            return U.access(e, t, i)
        },
        _removeData: function (e, t) {
            U.remove(e, t)
        }
    }), x.fn.extend({
        data: function (e, t) {
            var i, n, r, a = this[0],
                s = a && a.attributes;
            if (void 0 !== e) return "object" == typeof e ? this.each(function () {
                K.set(this, e)
            }) : X(this, function (t) {
                var i;
                if (a && void 0 === t) {
                    if (void 0 !== (i = K.get(a, e))) return i;
                    if (void 0 !== (i = Z(a, e))) return i
                } else this.each(function () {
                    K.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0);
            if (this.length && (r = K.get(a), 1 === a.nodeType && !U.get(a, "hasDataAttrs"))) {
                for (i = s.length; i--;) s[i] && 0 === (n = s[i].name).indexOf("data-") && (n = W(n.slice(5)), Z(a, n, r[n]));
                U.set(a, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function (e) {
            return this.each(function () {
                K.remove(this, e)
            })
        }
    }), x.extend({
        queue: function (e, t, i) {
            var n;
            if (e) return t = (t || "fx") + "queue", n = U.get(e, t), i && (!n || Array.isArray(i) ? n = U.access(e, t, x.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var i = x.queue(e, t),
                n = i.length,
                r = i.shift(),
                a = x._queueHooks(e, t);
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete a.stop, r.call(e, function () {
                x.dequeue(e, t)
            }, a)), !n && a && a.empty.fire()
        },
        _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return U.get(e, i) || U.access(e, i, {
                empty: x.Callbacks("once memory").add(function () {
                    U.remove(e, [t + "queue", i])
                })
            })
        }
    }), x.fn.extend({
        queue: function (e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? x.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var i = x.queue(this, e, t);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && x.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                x.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var i, n = 1,
                r = x.Deferred(),
                a = this,
                s = this.length,
                o = function () {
                    --n || r.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(i = U.get(a[s], e + "queueHooks")) && i.empty && (n++, i.empty.add(o));
            return o(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        ne = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && x.contains(e.ownerDocument, e) && "none" === x.css(e, "display")
        },
        re = function (e, t, i, n) {
            var r, a, s = {};
            for (a in t) s[a] = e.style[a], e.style[a] = t[a];
            for (a in r = i.apply(e, n || []), t) e.style[a] = s[a];
            return r
        };

    function ae(e, t, i, n) {
        var r, a, s = 20,
            o = n ? function () {
                return n.cur()
            } : function () {
                return x.css(e, t, "")
            },
            l = o(),
            d = i && i[3] || (x.cssNumber[t] ? "" : "px"),
            u = (x.cssNumber[t] || "px" !== d && +l) && te.exec(x.css(e, t));
        if (u && u[3] !== d) {
            for (l /= 2, d = d || u[3], u = +l || 1; s--;) x.style(e, t, u + d), (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (s = 0), u /= a;
            u *= 2, x.style(e, t, u + d), i = i || []
        }
        return i && (u = +u || +l || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = d, n.start = u, n.end = r)), r
    }
    var se = {};

    function oe(e, t) {
        for (var i, n, r = [], a = 0, s = e.length; a < s; a++)(n = e[a]).style && (i = n.style.display, t ? ("none" === i && (r[a] = U.get(n, "display") || null, r[a] || (n.style.display = "")), "" === n.style.display && ne(n) && (r[a] = (c = d = l = void 0, d = (o = n).ownerDocument, u = o.nodeName, (c = se[u]) || (l = d.body.appendChild(d.createElement(u)), c = x.css(l, "display"), l.parentNode.removeChild(l), "none" === c && (c = "block"), se[u] = c)))) : "none" !== i && (r[a] = "none", U.set(n, "display", i)));
        var o, l, d, u, c;
        for (a = 0; a < s; a++) null != r[a] && (e[a].style.display = r[a]);
        return e
    }
    x.fn.extend({
        show: function () {
            return oe(this, !0)
        },
        hide: function () {
            return oe(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ne(this) ? x(this).show() : x(this).hide()
            })
        }
    });
    var le = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ue = /^$|^module$|\/(?:java|ecma)script/i,
        ce = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function pe(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && M(e, t) ? x.merge([e], i) : i
    }

    function he(e, t) {
        for (var i = 0, n = e.length; i < n; i++) U.set(e[i], "globalEval", !t || U.get(t[i], "globalEval"))
    }
    ce.optgroup = ce.option, ce.tbody = ce.tfoot = ce.colgroup = ce.caption = ce.thead, ce.th = ce.td;
    var fe, ve, me = /<|&#?\w+;/;

    function ge(e, t, i, n, r) {
        for (var a, s, o, l, d, u, c = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++)
            if ((a = e[h]) || 0 === a)
                if ("object" === b(a)) x.merge(p, a.nodeType ? [a] : a);
                else if (me.test(a)) {
            for (s = s || c.appendChild(t.createElement("div")), o = (de.exec(a) || ["", ""])[1].toLowerCase(), l = ce[o] || ce._default, s.innerHTML = l[1] + x.htmlPrefilter(a) + l[2], u = l[0]; u--;) s = s.lastChild;
            x.merge(p, s.childNodes), (s = c.firstChild).textContent = ""
        } else p.push(t.createTextNode(a));
        for (c.textContent = "", h = 0; a = p[h++];)
            if (n && -1 < x.inArray(a, n)) r && r.push(a);
            else if (d = x.contains(a.ownerDocument, a), s = pe(c.appendChild(a), "script"), d && he(s), i)
            for (u = 0; a = s[u++];) ue.test(a.type || "") && i.push(a);
        return c
    }
    fe = n.createDocumentFragment().appendChild(n.createElement("div")), (ve = n.createElement("input")).setAttribute("type", "radio"), ve.setAttribute("checked", "checked"), ve.setAttribute("name", "t"), fe.appendChild(ve), f.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue;
    var ye = n.documentElement,
        be = /^key/,
        xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        we = /^([^.]*)(?:\.(.+)|)/;

    function Te() {
        return !0
    }

    function Ee() {
        return !1
    }

    function Ce() {
        try {
            return n.activeElement
        } catch (e) {}
    }

    function Se(e, t, i, n, r, a) {
        var s, o;
        if ("object" == typeof t) {
            for (o in "string" != typeof i && (n = n || i, i = void 0), t) Se(e, o, i, n, t[o], a);
            return e
        }
        if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = Ee;
        else if (!r) return e;
        return 1 === a && (s = r, (r = function (e) {
            return x().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = x.guid++)), e.each(function () {
            x.event.add(this, t, r, n, i)
        })
    }
    x.event = {
        global: {},
        add: function (e, t, i, n, r) {
            var a, s, o, l, d, u, c, p, h, f, v, m = U.get(e);
            if (m)
                for (i.handler && (i = (a = i).handler, r = a.selector), r && x.find.matchesSelector(ye, r), i.guid || (i.guid = x.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                        return void 0 !== x && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0
                    }), d = (t = (t || "").match(N) || [""]).length; d--;) h = v = (o = we.exec(t[d]) || [])[1], f = (o[2] || "").split(".").sort(), h && (c = x.event.special[h] || {}, h = (r ? c.delegateType : c.bindType) || h, c = x.event.special[h] || {}, u = x.extend({
                    type: h,
                    origType: v,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && x.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, a), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, n, f, s) || e.addEventListener && e.addEventListener(h, s)), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), x.event.global[h] = !0)
        },
        remove: function (e, t, i, n, r) {
            var a, s, o, l, d, u, c, p, h, f, v, m = U.hasData(e) && U.get(e);
            if (m && (l = m.events)) {
                for (d = (t = (t || "").match(N) || [""]).length; d--;)
                    if (h = v = (o = we.exec(t[d]) || [])[1], f = (o[2] || "").split(".").sort(), h) {
                        for (c = x.event.special[h] || {}, p = l[h = (n ? c.delegateType : c.bindType) || h] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = p.length; a--;) u = p[a], !r && v !== u.origType || i && i.guid !== u.guid || o && !o.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (p.splice(a, 1), u.selector && p.delegateCount--, c.remove && c.remove.call(e, u));
                        s && !p.length && (c.teardown && !1 !== c.teardown.call(e, f, m.handle) || x.removeEvent(e, h, m.handle), delete l[h])
                    } else
                        for (h in l) x.event.remove(e, h + t[d], i, n, !0);
                x.isEmptyObject(l) && U.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, i, n, r, a, s, o = x.event.fix(e),
                l = new Array(arguments.length),
                d = (U.get(this, "events") || {})[o.type] || [],
                u = x.event.special[o.type] || {};
            for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (o.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, o)) {
                for (s = x.event.handlers.call(this, o, d), t = 0;
                    (r = s[t++]) && !o.isPropagationStopped();)
                    for (o.currentTarget = r.elem, i = 0;
                        (a = r.handlers[i++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (n = ((x.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (o.result = n) && (o.preventDefault(), o.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, o), o.result
            }
        },
        handlers: function (e, t) {
            var i, n, r, a, s, o = [],
                l = t.delegateCount,
                d = e.target;
            if (l && d.nodeType && !("click" === e.type && 1 <= e.button))
                for (; d !== this; d = d.parentNode || this)
                    if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                        for (a = [], s = {}, i = 0; i < l; i++) void 0 === s[r = (n = t[i]).selector + " "] && (s[r] = n.needsContext ? -1 < x(r, this).index(d) : x.find(r, this, null, [d]).length), s[r] && a.push(n);
                        a.length && o.push({
                            elem: d,
                            handlers: a
                        })
                    } return d = this, l < t.length && o.push({
                elem: d,
                handlers: t.slice(l)
            }), o
        },
        addProp: function (e, t) {
            Object.defineProperty(x.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[x.expando] ? e : new x.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== Ce() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === Ce() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && M(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return M(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, x.removeEvent = function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, x.Event = function (e, t) {
        if (!(this instanceof x.Event)) return new x.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0
    }, x.Event.prototype = {
        constructor: x.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, x.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, x.event.addProp), x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var i, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || x.contains(this, n)) || (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), x.fn.extend({
        on: function (e, t, i, n) {
            return Se(this, e, t, i, n)
        },
        one: function (e, t, i, n) {
            return Se(this, e, t, i, n, 1)
        },
        off: function (e, t, i) {
            var n, r;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, x(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = Ee), this.each(function () {
                x.event.remove(this, e, i, t)
            });
            for (r in e) this.off(r, t, e[r]);
            return this
        }
    });
    var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Me = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return M(e, "table") && M(11 !== t.nodeType ? t : t.firstChild, "tr") && x(e).children("tbody")[0] || e
    }

    function $e(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ze(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Ae(e, t) {
        var i, n, r, a, s, o, l, d;
        if (1 === t.nodeType) {
            if (U.hasData(e) && (a = U.access(e), s = U.set(t, a), d = a.events))
                for (r in delete s.handle, s.events = {}, d)
                    for (i = 0, n = d[r].length; i < n; i++) x.event.add(t, r, d[r][i]);
            K.hasData(e) && (o = K.access(e), l = x.extend({}, o), K.set(t, l))
        }
    }

    function Ie(e, t, i, n) {
        t = s.apply([], t);
        var r, a, o, l, d, u, c = 0,
            p = e.length,
            h = p - 1,
            m = t[0],
            g = v(m);
        if (g || 1 < p && "string" == typeof m && !f.checkClone && Pe.test(m)) return e.each(function (r) {
            var a = e.eq(r);
            g && (t[0] = m.call(this, r, a.html())), Ie(a, t, i, n)
        });
        if (p && (a = (r = ge(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === r.childNodes.length && (r = a), a || n)) {
            for (l = (o = x.map(pe(r, "script"), $e)).length; c < p; c++) d = r, c !== h && (d = x.clone(d, !0, !0), l && x.merge(o, pe(d, "script"))), i.call(e[c], d, c);
            if (l)
                for (u = o[o.length - 1].ownerDocument, x.map(o, ze), c = 0; c < l; c++) d = o[c], ue.test(d.type || "") && !U.access(d, "globalEval") && x.contains(u, d) && (d.src && "module" !== (d.type || "").toLowerCase() ? x._evalUrl && x._evalUrl(d.src) : y(d.textContent.replace(De, ""), u, d))
        }
        return e
    }

    function Ne(e, t, i) {
        for (var n, r = t ? x.filter(t, e) : e, a = 0; null != (n = r[a]); a++) i || 1 !== n.nodeType || x.cleanData(pe(n)), n.parentNode && (i && x.contains(n.ownerDocument, n) && he(pe(n, "script")), n.parentNode.removeChild(n));
        return e
    }
    x.extend({
        htmlPrefilter: function (e) {
            return e.replace(ke, "<$1></$2>")
        },
        clone: function (e, t, i) {
            var n, r, a, s, o, l, d, u = e.cloneNode(!0),
                c = x.contains(e.ownerDocument, e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (s = pe(u), n = 0, r = (a = pe(e)).length; n < r; n++) o = a[n], "input" === (d = (l = s[n]).nodeName.toLowerCase()) && le.test(o.type) ? l.checked = o.checked : "input" !== d && "textarea" !== d || (l.defaultValue = o.defaultValue);
            if (t)
                if (i)
                    for (a = a || pe(e), s = s || pe(u), n = 0, r = a.length; n < r; n++) Ae(a[n], s[n]);
                else Ae(e, u);
            return 0 < (s = pe(u, "script")).length && he(s, !c && pe(e, "script")), u
        },
        cleanData: function (e) {
            for (var t, i, n, r = x.event.special, a = 0; void 0 !== (i = e[a]); a++)
                if (Y(i)) {
                    if (t = i[U.expando]) {
                        if (t.events)
                            for (n in t.events) r[n] ? x.event.remove(i, n) : x.removeEvent(i, n, t.handle);
                        i[U.expando] = void 0
                    }
                    i[K.expando] && (i[K.expando] = void 0)
                }
        }
    }), x.fn.extend({
        detach: function (e) {
            return Ne(this, e, !0)
        },
        remove: function (e) {
            return Ne(this, e)
        },
        text: function (e) {
            return X(this, function (e) {
                return void 0 === e ? x.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return Ie(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return Ie(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return Ie(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return Ie(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(pe(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return x.clone(this, e, t)
            })
        },
        html: function (e) {
            return X(this, function (e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Me.test(e) && !ce[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = x.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (x.cleanData(pe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return Ie(this, arguments, function (t) {
                var i = this.parentNode;
                x.inArray(this, e) < 0 && (x.cleanData(pe(this)), i && i.replaceChild(t, this))
            }, e)
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        x.fn[e] = function (e) {
            for (var i, n = [], r = x(e), a = r.length - 1, s = 0; s <= a; s++) i = s === a ? this : this.clone(!0), x(r[s])[t](i), o.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Oe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        He = function (t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = e), i.getComputedStyle(t)
        },
        je = new RegExp(ie.join("|"), "i");

    function qe(e, t, i) {
        var n, r, a, s, o = e.style;
        return (i = i || He(e)) && ("" !== (s = i.getPropertyValue(t) || i[t]) || x.contains(e.ownerDocument, e) || (s = x.style(e, t)), !f.pixelBoxStyles() && Oe.test(s) && je.test(t) && (n = o.width, r = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = i.width, o.width = n, o.minWidth = r, o.maxWidth = a)), void 0 !== s ? s + "" : s
    }

    function Be(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function t() {
            if (u) {
                d.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(d).appendChild(u);
                var t = e.getComputedStyle(u);
                r = "1%" !== t.top, l = 12 === i(t.marginLeft), u.style.right = "60%", o = 36 === i(t.right), a = 36 === i(t.width), u.style.position = "absolute", s = 36 === u.offsetWidth || "absolute", ye.removeChild(d), u = null
            }
        }

        function i(e) {
            return Math.round(parseFloat(e))
        }
        var r, a, s, o, l, d = n.createElement("div"),
            u = n.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === u.style.backgroundClip, x.extend(f, {
            boxSizingReliable: function () {
                return t(), a
            },
            pixelBoxStyles: function () {
                return t(), o
            },
            pixelPosition: function () {
                return t(), r
            },
            reliableMarginLeft: function () {
                return t(), l
            },
            scrollboxSize: function () {
                return t(), s
            }
        }))
    }();
    var Re = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Fe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ve = ["Webkit", "Moz", "ms"],
        We = n.createElement("div").style;

    function Ye(e) {
        var t = x.cssProps[e];
        return t || (t = x.cssProps[e] = function (e) {
            if (e in We) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), i = Ve.length; i--;)
                if ((e = Ve[i] + t) in We) return e
        }(e) || e), t
    }

    function _e(e, t, i) {
        var n = te.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function Ue(e, t, i, n, r, a) {
        var s = "width" === t ? 1 : 0,
            o = 0,
            l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === i && (l += x.css(e, i + ie[s], !0, r)), n ? ("content" === i && (l -= x.css(e, "padding" + ie[s], !0, r)), "margin" !== i && (l -= x.css(e, "border" + ie[s] + "Width", !0, r))) : (l += x.css(e, "padding" + ie[s], !0, r), "padding" !== i ? l += x.css(e, "border" + ie[s] + "Width", !0, r) : o += x.css(e, "border" + ie[s] + "Width", !0, r));
        return !n && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5))), l
    }

    function Ke(e, t, i) {
        var n = He(e),
            r = qe(e, t, n),
            a = "border-box" === x.css(e, "boxSizing", !1, n),
            s = a;
        if (Oe.test(r)) {
            if (!i) return r;
            r = "auto"
        }
        return s = s && (f.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === x.css(e, "display", !1, n)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + Ue(e, t, i || (a ? "border" : "content"), s, n, r) + "px"
    }

    function Qe(e, t, i, n, r) {
        return new Qe.prototype.init(e, t, i, n, r)
    }
    x.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = qe(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, s, o = W(t),
                    l = Xe.test(t),
                    d = e.style;
                if (l || (t = Ye(o)), s = x.cssHooks[t] || x.cssHooks[o], void 0 === i) return s && "get" in s && void 0 !== (r = s.get(e, !1, n)) ? r : d[t];
                "string" == (a = typeof i) && (r = te.exec(i)) && r[1] && (i = ae(e, t, r), a = "number"), null != i && i == i && ("number" === a && (i += r && r[3] || (x.cssNumber[o] ? "" : "px")), f.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (d[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l ? d.setProperty(t, i) : d[t] = i))
            }
        },
        css: function (e, t, i, n) {
            var r, a, s, o = W(t);
            return Xe.test(t) || (t = Ye(o)), (s = x.cssHooks[t] || x.cssHooks[o]) && "get" in s && (r = s.get(e, !0, i)), void 0 === r && (r = qe(e, t, n)), "normal" === r && t in Ge && (r = Ge[t]), "" === i || i ? (a = parseFloat(r), !0 === i || isFinite(a) ? a || 0 : r) : r
        }
    }), x.each(["height", "width"], function (e, t) {
        x.cssHooks[t] = {
            get: function (e, i, n) {
                if (i) return !Re.test(x.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ke(e, t, n) : re(e, Fe, function () {
                    return Ke(e, t, n)
                })
            },
            set: function (e, i, n) {
                var r, a = He(e),
                    s = "border-box" === x.css(e, "boxSizing", !1, a),
                    o = n && Ue(e, t, n, s, a);
                return s && f.scrollboxSize() === a.position && (o -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - Ue(e, t, "border", !1, a) - .5)), o && (r = te.exec(i)) && "px" !== (r[3] || "px") && (e.style[t] = i, i = x.css(e, t)), _e(0, i, o)
            }
        }
    }), x.cssHooks.marginLeft = Be(f.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(qe(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        x.cssHooks[e + t] = {
            expand: function (i) {
                for (var n = 0, r = {}, a = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) r[e + ie[n] + t] = a[n] || a[n - 2] || a[0];
                return r
            }
        }, "margin" !== e && (x.cssHooks[e + t].set = _e)
    }), x.fn.extend({
        css: function (e, t) {
            return X(this, function (e, t, i) {
                var n, r, a = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (n = He(e), r = t.length; s < r; s++) a[t[s]] = x.css(e, t[s], !1, n);
                    return a
                }
                return void 0 !== i ? x.style(e, t, i) : x.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((x.Tween = Qe).prototype = {
        constructor: Qe,
        init: function (e, t, i, n, r, a) {
            this.elem = e, this.prop = i, this.easing = r || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = a || (x.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var e = Qe.propHooks[this.prop];
            return e && e.get ? e.get(this) : Qe.propHooks._default.get(this)
        },
        run: function (e) {
            var t, i = Qe.propHooks[this.prop];
            return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Qe.propHooks._default.set(this), this
        }
    }).init.prototype = Qe.prototype, (Qe.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[x.cssProps[e.prop]] && !x.cssHooks[e.prop] ? e.elem[e.prop] = e.now : x.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Qe.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, x.fx = Qe.prototype.init, x.fx.step = {};
    var Je, Ze, et, tt, it = /^(?:toggle|show|hide)$/,
        nt = /queueHooks$/;

    function rt() {
        Ze && (!1 === n.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(rt) : e.setTimeout(rt, x.fx.interval), x.fx.tick())
    }

    function at() {
        return e.setTimeout(function () {
            Je = void 0
        }), Je = Date.now()
    }

    function st(e, t) {
        var i, n = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) r["margin" + (i = ie[n])] = r["padding" + i] = e;
        return t && (r.opacity = r.width = e), r
    }

    function ot(e, t, i) {
        for (var n, r = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), a = 0, s = r.length; a < s; a++)
            if (n = r[a].call(i, t, e)) return n
    }

    function lt(e, t, i) {
        var n, r, a = 0,
            s = lt.prefilters.length,
            o = x.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var t = Je || at(), i = Math.max(0, d.startTime + d.duration - t), n = 1 - (i / d.duration || 0), a = 0, s = d.tweens.length; a < s; a++) d.tweens[a].run(n);
                return o.notifyWith(e, [d, n, i]), n < 1 && s ? i : (s || o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d]), !1)
            },
            d = o.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {},
                    easing: x.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: Je || at(),
                duration: i.duration,
                tweens: [],
                createTween: function (t, i) {
                    var n = x.Tween(e, d.opts, t, i, d.opts.specialEasing[t] || d.opts.easing);
                    return d.tweens.push(n), n
                },
                stop: function (t) {
                    var i = 0,
                        n = t ? d.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i < n; i++) d.tweens[i].run(1);
                    return t ? (o.notifyWith(e, [d, 1, 0]), o.resolveWith(e, [d, t])) : o.rejectWith(e, [d, t]), this
                }
            }),
            u = d.props;
        for (function (e, t) {
                var i, n, r, a, s;
                for (i in e)
                    if (r = t[n = W(i)], a = e[i], Array.isArray(a) && (r = a[1], a = e[i] = a[0]), i !== n && (e[n] = a, delete e[i]), (s = x.cssHooks[n]) && "expand" in s)
                        for (i in a = s.expand(a), delete e[n], a) i in e || (e[i] = a[i], t[i] = r);
                    else t[n] = r
            }(u, d.opts.specialEasing); a < s; a++)
            if (n = lt.prefilters[a].call(d, e, u, d.opts)) return v(n.stop) && (x._queueHooks(d.elem, d.opts.queue).stop = n.stop.bind(n)), n;
        return x.map(u, ot, d), v(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), x.fx.timer(x.extend(l, {
            elem: e,
            anim: d,
            queue: d.opts.queue
        })), d
    }
    x.Animation = x.extend(lt, {
        tweeners: {
            "*": [function (e, t) {
                var i = this.createTween(e, t);
                return ae(i.elem, e, te.exec(t), i), i
            }]
        },
        tweener: function (e, t) {
            for (var i, n = 0, r = (e = v(e) ? (t = e, ["*"]) : e.match(N)).length; n < r; n++) i = e[n], lt.tweeners[i] = lt.tweeners[i] || [], lt.tweeners[i].unshift(t)
        },
        prefilters: [function (e, t, i) {
            var n, r, a, s, o, l, d, u, c = "width" in t || "height" in t,
                p = this,
                h = {},
                f = e.style,
                v = e.nodeType && ne(e),
                m = U.get(e, "fxshow");
            for (n in i.queue || (null == (s = x._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || o()
                }), s.unqueued++, p.always(function () {
                    p.always(function () {
                        s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (r = t[n], it.test(r)) {
                    if (delete t[n], a = a || "toggle" === r, r === (v ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[n]) continue;
                        v = !0
                    }
                    h[n] = m && m[n] || x.style(e, n)
                } if ((l = !x.isEmptyObject(t)) || !x.isEmptyObject(h))
                for (n in c && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (d = m && m.display) && (d = U.get(e, "display")), "none" === (u = x.css(e, "display")) && (d ? u = d : (oe([e], !0), d = e.style.display || d, u = x.css(e, "display"), oe([e]))), ("inline" === u || "inline-block" === u && null != d) && "none" === x.css(e, "float") && (l || (p.done(function () {
                        f.display = d
                    }), null == d && (u = f.display, d = "none" === u ? "" : u)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", p.always(function () {
                        f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                    })), l = !1, h) l || (m ? "hidden" in m && (v = m.hidden) : m = U.access(e, "fxshow", {
                    display: d
                }), a && (m.hidden = !v), v && oe([e], !0), p.done(function () {
                    for (n in v || oe([e]), U.remove(e, "fxshow"), h) x.style(e, n, h[n])
                })), l = ot(v ? m[n] : 0, n, p), n in m || (m[n] = l.start, v && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }), x.speed = function (e, t, i) {
        var n = e && "object" == typeof e ? x.extend({}, e) : {
            complete: i || !i && t || v(e) && e,
            duration: e,
            easing: i && t || t && !v(t) && t
        };
        return x.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in x.fx.speeds ? n.duration = x.fx.speeds[n.duration] : n.duration = x.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            v(n.old) && n.old.call(this), n.queue && x.dequeue(this, n.queue)
        }, n
    }, x.fn.extend({
        fadeTo: function (e, t, i, n) {
            return this.filter(ne).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function (e, t, i, n) {
            var r = x.isEmptyObject(e),
                a = x.speed(t, i, n),
                s = function () {
                    var t = lt(this, x.extend({}, e), a);
                    (r || U.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
        },
        stop: function (e, t, i) {
            var n = function (e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    r = null != e && e + "queueHooks",
                    a = x.timers,
                    s = U.get(this);
                if (r) s[r] && s[r].stop && n(s[r]);
                else
                    for (r in s) s[r] && s[r].stop && nt.test(r) && n(s[r]);
                for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(i), t = !1, a.splice(r, 1));
                !t && i || x.dequeue(this, e)
            })
        },
        finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, i = U.get(this),
                    n = i[e + "queue"],
                    r = i[e + "queueHooks"],
                    a = x.timers,
                    s = n ? n.length : 0;
                for (i.finish = !0, x.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; t < s; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }), x.each(["toggle", "show", "hide"], function (e, t) {
        var i = x.fn[t];
        x.fn[t] = function (e, n, r) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(t, !0), e, n, r)
        }
    }), x.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        x.fn[e] = function (e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), x.timers = [], x.fx.tick = function () {
        var e, t = 0,
            i = x.timers;
        for (Je = Date.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || x.fx.stop(), Je = void 0
    }, x.fx.timer = function (e) {
        x.timers.push(e), x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function () {
        Ze || (Ze = !0, rt())
    }, x.fx.stop = function () {
        Ze = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fn.delay = function (t, i) {
        return t = x.fx && x.fx.speeds[t] || t, i = i || "fx", this.queue(i, function (i, n) {
            var r = e.setTimeout(i, t);
            n.stop = function () {
                e.clearTimeout(r)
            }
        })
    }, et = n.createElement("input"), tt = n.createElement("select").appendChild(n.createElement("option")), et.type = "checkbox", f.checkOn = "" !== et.value, f.optSelected = tt.selected, (et = n.createElement("input")).value = "t", et.type = "radio", f.radioValue = "t" === et.value;
    var dt, ut = x.expr.attrHandle;
    x.fn.extend({
        attr: function (e, t) {
            return X(this, x.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                x.removeAttr(this, e)
            })
        }
    }), x.extend({
        attr: function (e, t, i) {
            var n, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? x.prop(e, t, i) : (1 === a && x.isXMLDoc(e) || (r = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? dt : void 0)), void 0 !== i ? null === i ? void x.removeAttr(e, t) : r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : r && "get" in r && null !== (n = r.get(e, t)) ? n : null == (n = x.find.attr(e, t)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!f.radioValue && "radio" === t && M(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var i, n = 0,
                r = t && t.match(N);
            if (r && 1 === e.nodeType)
                for (; i = r[n++];) e.removeAttribute(i)
        }
    }), dt = {
        set: function (e, t, i) {
            return !1 === t ? x.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var i = ut[t] || x.find.attr;
        ut[t] = function (e, t, n) {
            var r, a, s = t.toLowerCase();
            return n || (a = ut[s], ut[s] = r, r = null != i(e, t, n) ? s : null, ut[s] = a), r
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i,
        pt = /^(?:a|area)$/i;

    function ht(e) {
        return (e.match(N) || []).join(" ")
    }

    function ft(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(N) || []
    }
    x.fn.extend({
        prop: function (e, t) {
            return X(this, x.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[x.propFix[e] || e]
            })
        }
    }), x.extend({
        prop: function (e, t, i) {
            var n, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && x.isXMLDoc(e) || (t = x.propFix[t] || t, r = x.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (x.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        x.propFix[this.toLowerCase()] = this
    }), x.fn.extend({
        addClass: function (e) {
            var t, i, n, r, a, s, o, l = 0;
            if (v(e)) return this.each(function (t) {
                x(this).addClass(e.call(this, t, ft(this)))
            });
            if ((t = vt(e)).length)
                for (; i = this[l++];)
                    if (r = ft(i), n = 1 === i.nodeType && " " + ht(r) + " ") {
                        for (s = 0; a = t[s++];) n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                        r !== (o = ht(n)) && i.setAttribute("class", o)
                    } return this
        },
        removeClass: function (e) {
            var t, i, n, r, a, s, o, l = 0;
            if (v(e)) return this.each(function (t) {
                x(this).removeClass(e.call(this, t, ft(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = vt(e)).length)
                for (; i = this[l++];)
                    if (r = ft(i), n = 1 === i.nodeType && " " + ht(r) + " ") {
                        for (s = 0; a = t[s++];)
                            for (; - 1 < n.indexOf(" " + a + " ");) n = n.replace(" " + a + " ", " ");
                        r !== (o = ht(n)) && i.setAttribute("class", o)
                    } return this
        },
        toggleClass: function (e, t) {
            var i = typeof e,
                n = "string" === i || Array.isArray(e);
            return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each(function (i) {
                x(this).toggleClass(e.call(this, i, ft(this), t), t)
            }) : this.each(function () {
                var t, r, a, s;
                if (n)
                    for (r = 0, a = x(this), s = vt(e); t = s[r++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                else void 0 !== e && "boolean" !== i || ((t = ft(this)) && U.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : U.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && -1 < (" " + ht(ft(i)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var mt = /\r/g;
    x.fn.extend({
        val: function (e) {
            var t, i, n, r = this[0];
            return arguments.length ? (n = v(e), this.each(function (i) {
                var r;
                1 === this.nodeType && (null == (r = n ? e.call(this, i, x(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = x.map(r, function (e) {
                    return null == e ? "" : e + ""
                })), (t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = x.valHooks[r.type] || x.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(r, "value")) ? i : "string" == typeof (i = r.value) ? i.replace(mt, "") : null == i ? "" : i : void 0
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : ht(x.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, i, n, r = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        o = s ? null : [],
                        l = s ? a + 1 : r.length;
                    for (n = a < 0 ? l : s ? a : 0; n < l; n++)
                        if (((i = r[n]).selected || n === a) && !i.disabled && (!i.parentNode.disabled || !M(i.parentNode, "optgroup"))) {
                            if (t = x(i).val(), s) return t;
                            o.push(t)
                        } return o
                },
                set: function (e, t) {
                    for (var i, n, r = e.options, a = x.makeArray(t), s = r.length; s--;)((n = r[s]).selected = -1 < x.inArray(x.valHooks.option.get(n), a)) && (i = !0);
                    return i || (e.selectedIndex = -1), a
                }
            }
        }
    }), x.each(["radio", "checkbox"], function () {
        x.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < x.inArray(x(e).val(), t)
            }
        }, f.checkOn || (x.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), f.focusin = "onfocusin" in e;
    var gt = /^(?:focusinfocus|focusoutblur)$/,
        yt = function (e) {
            e.stopPropagation()
        };
    x.extend(x.event, {
        trigger: function (t, i, r, a) {
            var s, o, l, d, u, p, h, f, g = [r || n],
                y = c.call(t, "type") ? t.type : t,
                b = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = f = l = r = r || n, 3 !== r.nodeType && 8 !== r.nodeType && !gt.test(y + x.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[x.expando] ? t : new x.Event(y, "object" == typeof t && t)).isTrigger = a ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), i = null == i ? [t] : x.makeArray(i, [t]), h = x.event.special[y] || {}, a || !h.trigger || !1 !== h.trigger.apply(r, i))) {
                if (!a && !h.noBubble && !m(r)) {
                    for (d = h.delegateType || y, gt.test(d + y) || (o = o.parentNode); o; o = o.parentNode) g.push(o), l = o;
                    l === (r.ownerDocument || n) && g.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0;
                    (o = g[s++]) && !t.isPropagationStopped();) f = o, t.type = 1 < s ? d : h.bindType || y, (p = (U.get(o, "events") || {})[t.type] && U.get(o, "handle")) && p.apply(o, i), (p = u && o[u]) && p.apply && Y(o) && (t.result = p.apply(o, i), !1 === t.result && t.preventDefault());
                return t.type = y, a || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(g.pop(), i) || !Y(r) || u && v(r[y]) && !m(r) && ((l = r[u]) && (r[u] = null), x.event.triggered = y, t.isPropagationStopped() && f.addEventListener(y, yt), r[y](), t.isPropagationStopped() && f.removeEventListener(y, yt), x.event.triggered = void 0, l && (r[u] = l)), t.result
            }
        },
        simulate: function (e, t, i) {
            var n = x.extend(new x.Event, i, {
                type: e,
                isSimulated: !0
            });
            x.event.trigger(n, null, t)
        }
    }), x.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var i = this[0];
            if (i) return x.event.trigger(e, t, i, !0)
        }
    }), f.focusin || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var i = function (e) {
            x.event.simulate(t, e.target, x.event.fix(e))
        };
        x.event.special[t] = {
            setup: function () {
                var n = this.ownerDocument || this,
                    r = U.access(n, t);
                r || n.addEventListener(e, i, !0), U.access(n, t, (r || 0) + 1)
            },
            teardown: function () {
                var n = this.ownerDocument || this,
                    r = U.access(n, t) - 1;
                r ? U.access(n, t, r) : (n.removeEventListener(e, i, !0), U.remove(n, t))
            }
        }
    });
    var bt = e.location,
        xt = Date.now(),
        wt = /\?/;
    x.parseXML = function (t) {
        var i;
        if (!t || "string" != typeof t) return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + t), i
    };
    var Tt = /\[\]$/,
        Et = /\r?\n/g,
        Ct = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;

    function kt(e, t, i, n) {
        var r;
        if (Array.isArray(t)) x.each(t, function (t, r) {
            i || Tt.test(e) ? n(e, r) : kt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, i, n)
        });
        else if (i || "object" !== b(t)) n(e, t);
        else
            for (r in t) kt(e + "[" + r + "]", t[r], i, n)
    }
    x.param = function (e, t) {
        var i, n = [],
            r = function (e, t) {
                var i = v(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
            r(this.name, this.value)
        });
        else
            for (i in e) kt(i, e[i], t, r);
        return n.join("&")
    }, x.fn.extend({
        serialize: function () {
            return x.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && St.test(this.nodeName) && !Ct.test(e) && (this.checked || !le.test(e))
            }).map(function (e, t) {
                var i = x(this).val();
                return null == i ? null : Array.isArray(i) ? x.map(i, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Et, "\r\n")
                }
            }).get()
        }
    });
    var Mt = /%20/g,
        Pt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        $t = /^(?:GET|HEAD)$/,
        zt = /^\/\//,
        At = {},
        It = {},
        Nt = "*/".concat("*"),
        Ot = n.createElement("a");

    function Ht(e) {
        return function (t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, r = 0,
                a = t.toLowerCase().match(N) || [];
            if (v(i))
                for (; n = a[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function jt(e, t, i, n) {
        var r = {},
            a = e === It;

        function s(o) {
            var l;
            return r[o] = !0, x.each(e[o] || [], function (e, o) {
                var d = o(t, i, n);
                return "string" != typeof d || a || r[d] ? a ? !(l = d) : void 0 : (t.dataTypes.unshift(d), s(d), !1)
            }), l
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function qt(e, t) {
        var i, n, r = x.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && x.extend(!0, e, n), e
    }
    Ot.href = bt.href, x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Nt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? qt(qt(e, x.ajaxSettings), t) : qt(x.ajaxSettings, e)
        },
        ajaxPrefilter: Ht(At),
        ajaxTransport: Ht(It),
        ajax: function (t, i) {
            "object" == typeof t && (i = t, t = void 0), i = i || {};
            var r, a, s, o, l, d, u, c, p, h, f = x.ajaxSetup({}, i),
                v = f.context || f,
                m = f.context && (v.nodeType || v.jquery) ? x(v) : x.event,
                g = x.Deferred(),
                y = x.Callbacks("once memory"),
                b = f.statusCode || {},
                w = {},
                T = {},
                E = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (u) {
                            if (!o)
                                for (o = {}; t = Lt.exec(s);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return u ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == u && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == u && (f.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (u) C.always(e[C.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || E;
                        return r && r.abort(t), S(0, t), this
                    }
                };
            if (g.promise(C), f.url = ((t || f.url || bt.href) + "").replace(zt, bt.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(N) || [""], null == f.crossDomain) {
                d = n.createElement("a");
                try {
                    d.href = f.url, d.href = d.href, f.crossDomain = Ot.protocol + "//" + Ot.host != d.protocol + "//" + d.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = x.param(f.data, f.traditional)), jt(At, f, i, C), u) return C;
            for (p in (c = x.event && f.global) && 0 == x.active++ && x.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !$t.test(f.type), a = f.url.replace(Pt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Mt, "+")) : (h = f.url.slice(a.length), f.data && (f.processData || "string" == typeof f.data) && (a += (wt.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (a = a.replace(Dt, "$1"), h = (wt.test(a) ? "&" : "?") + "_=" + xt++ + h), f.url = a + h), f.ifModified && (x.lastModified[a] && C.setRequestHeader("If-Modified-Since", x.lastModified[a]), x.etag[a] && C.setRequestHeader("If-None-Match", x.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Nt + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(p, f.headers[p]);
            if (f.beforeSend && (!1 === f.beforeSend.call(v, C, f) || u)) return C.abort();
            if (E = "abort", y.add(f.complete), C.done(f.success), C.fail(f.error), r = jt(It, f, i, C)) {
                if (C.readyState = 1, c && m.trigger("ajaxSend", [C, f]), u) return C;
                f.async && 0 < f.timeout && (l = e.setTimeout(function () {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    u = !1, r.send(w, S)
                } catch (t) {
                    if (u) throw t;
                    S(-1, t)
                }
            } else S(-1, "No Transport");

            function S(t, i, n, o) {
                var d, p, h, w, T, E = i;
                u || (u = !0, l && e.clearTimeout(l), r = void 0, s = o || "", C.readyState = 0 < t ? 4 : 0, d = 200 <= t && t < 300 || 304 === t, n && (w = function (e, t, i) {
                    for (var n, r, a, s, o = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (r in o)
                            if (o[r] && o[r].test(n)) {
                                l.unshift(r);
                                break
                            } if (l[0] in i) a = l[0];
                    else {
                        for (r in i) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                a = r;
                                break
                            }
                            s || (s = r)
                        }
                        a = a || s
                    }
                    if (a) return a !== l[0] && l.unshift(a), i[a]
                }(f, C, n)), w = function (e, t, i, n) {
                    var r, a, s, o, l, d = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
                    for (a = u.shift(); a;)
                        if (e.responseFields[a] && (i[e.responseFields[a]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
                            if ("*" === a) a = l;
                            else if ("*" !== l && l !== a) {
                        if (!(s = d[l + " " + a] || d["* " + a]))
                            for (r in d)
                                if ((o = r.split(" "))[1] === a && (s = d[l + " " + o[0]] || d["* " + o[0]])) {
                                    !0 === s ? s = d[r] : !0 !== d[r] && (a = o[0], u.unshift(o[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + a
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, w, C, d), d ? (f.ifModified && ((T = C.getResponseHeader("Last-Modified")) && (x.lastModified[a] = T), (T = C.getResponseHeader("etag")) && (x.etag[a] = T)), 204 === t || "HEAD" === f.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = w.state, p = w.data, d = !(h = w.error))) : (h = E, !t && E || (E = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (i || E) + "", d ? g.resolveWith(v, [p, E, C]) : g.rejectWith(v, [C, E, h]), C.statusCode(b), b = void 0, c && m.trigger(d ? "ajaxSuccess" : "ajaxError", [C, f, d ? p : h]), y.fireWith(v, [C, E]), c && (m.trigger("ajaxComplete", [C, f]), --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function (e, t, i) {
            return x.get(e, t, i, "json")
        },
        getScript: function (e, t) {
            return x.get(e, void 0, t, "script")
        }
    }), x.each(["get", "post"], function (e, t) {
        x[t] = function (e, i, n, r) {
            return v(i) && (r = r || n, n = i, i = void 0), x.ajax(x.extend({
                url: e,
                type: t,
                dataType: r,
                data: i,
                success: n
            }, x.isPlainObject(e) && e))
        }
    }), x._evalUrl = function (e) {
        return x.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, x.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (v(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return v(e) ? this.each(function (t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = x(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = v(e);
            return this.each(function (i) {
                x(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                x(this).replaceWith(this.childNodes)
            }), this
        }
    }), x.expr.pseudos.hidden = function (e) {
        return !x.expr.pseudos.visible(e)
    }, x.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, x.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        Rt = x.ajaxSettings.xhr();
    f.cors = !!Rt && "withCredentials" in Rt, f.ajax = Rt = !!Rt, x.ajaxTransport(function (t) {
        var i, n;
        if (f.cors || Rt && !t.crossDomain) return {
            send: function (r, a) {
                var s, o = t.xhr();
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) o[s] = t.xhrFields[s];
                for (s in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) o.setRequestHeader(s, r[s]);
                i = function (e) {
                    return function () {
                        i && (i = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? a(0, "error") : a(o.status, o.statusText) : a(Bt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                            binary: o.response
                        } : {
                            text: o.responseText
                        }, o.getAllResponseHeaders()))
                    }
                }, o.onload = i(), n = o.onerror = o.ontimeout = i("error"), void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function () {
                    4 === o.readyState && e.setTimeout(function () {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (r) {
                    if (i) throw r
                }
            },
            abort: function () {
                i && i()
            }
        }
    }), x.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), x.ajaxTransport("script", function (e) {
        var t, i;
        if (e.crossDomain) return {
            send: function (r, a) {
                t = x("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", i = function (e) {
                    t.remove(), i = null, e && a("error" === e.type ? 404 : 200, e.type)
                }), n.head.appendChild(t[0])
            },
            abort: function () {
                i && i()
            }
        }
    });
    var Xt, Ft = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Ft.pop() || x.expando + "_" + xt++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function (t, i, n) {
        var r, a, s, o = !1 !== t.jsonp && (Gt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Gt, "$1" + r) : !1 !== t.jsonp && (t.url += (wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return s || x.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", a = e[r], e[r] = function () {
            s = arguments
        }, n.always(function () {
            void 0 === a ? x(e).removeProp(r) : e[r] = a, t[r] && (t.jsonpCallback = i.jsonpCallback, Ft.push(r)), s && v(a) && a(s[0]), s = a = void 0
        }), "script"
    }), f.createHTMLDocument = ((Xt = n.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xt.childNodes.length), x.parseHTML = function (e, t, i) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (f.createHTMLDocument ? ((r = (t = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href, t.head.appendChild(r)) : t = n), s = !i && [], (a = P.exec(e)) ? [t.createElement(a[1])] : (a = ge([e], t, s), s && s.length && x(s).remove(), x.merge([], a.childNodes)));
        var r, a, s
    }, x.fn.load = function (e, t, i) {
        var n, r, a, s = this,
            o = e.indexOf(" ");
        return -1 < o && (n = ht(e.slice(o)), e = e.slice(0, o)), v(t) ? (i = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && x.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            a = arguments, s.html(n ? x("<div>").append(x.parseHTML(e)).find(n) : e)
        }).always(i && function (e, t) {
            s.each(function () {
                i.apply(this, a || [e.responseText, t, e])
            })
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        x.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), x.expr.pseudos.animated = function (e) {
        return x.grep(x.timers, function (t) {
            return e === t.elem
        }).length
    }, x.offset = {
        setOffset: function (e, t, i) {
            var n, r, a, s, o, l, d = x.css(e, "position"),
                u = x(e),
                c = {};
            "static" === d && (e.style.position = "relative"), o = u.offset(), a = x.css(e, "top"), l = x.css(e, "left"), r = ("absolute" === d || "fixed" === d) && -1 < (a + l).indexOf("auto") ? (s = (n = u.position()).top, n.left) : (s = parseFloat(a) || 0, parseFloat(l) || 0), v(t) && (t = t.call(e, i, x.extend({}, o))), null != t.top && (c.top = t.top - o.top + s), null != t.left && (c.left = t.left - o.left + r), "using" in t ? t.using.call(e, c) : u.css(c)
        }
    }, x.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                x.offset.setOffset(this, e, t)
            });
            var t, i, n = this[0];
            return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                top: t.top + i.pageYOffset,
                left: t.left + i.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, i, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === x.css(n, "position")) t = n.getBoundingClientRect();
                else {
                    for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === x.css(e, "position");) e = e.parentNode;
                    e && e !== n && 1 === e.nodeType && ((r = x(e).offset()).top += x.css(e, "borderTopWidth", !0), r.left += x.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - x.css(n, "marginTop", !0),
                    left: t.left - r.left - x.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === x.css(e, "position");) e = e.offsetParent;
                return e || ye
            })
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var i = "pageYOffset" === t;
        x.fn[e] = function (n) {
            return X(this, function (e, n, r) {
                var a;
                if (m(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === r) return a ? a[t] : e[n];
                a ? a.scrollTo(i ? a.pageXOffset : r, i ? r : a.pageYOffset) : e[n] = r
            }, e, n, arguments.length)
        }
    }), x.each(["top", "left"], function (e, t) {
        x.cssHooks[t] = Be(f.pixelPosition, function (e, i) {
            if (i) return i = qe(e, t), Oe.test(i) ? x(e).position()[t] + "px" : i
        })
    }), x.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        x.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (i, n) {
            x.fn[n] = function (r, a) {
                var s = arguments.length && (i || "boolean" != typeof r),
                    o = i || (!0 === r || !0 === a ? "margin" : "border");
                return X(this, function (t, i, r) {
                    var a;
                    return m(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? x.css(t, i, o) : x.style(t, i, r, o)
                }, t, s ? r : void 0, s)
            }
        })
    }), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        x.fn[t] = function (e, i) {
            return 0 < arguments.length ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), x.fn.extend({
        bind: function (e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), x.proxy = function (e, t) {
        var i, n, r;
        if ("string" == typeof t && (i = e[t], t = e, e = i), v(e)) return n = a.call(arguments, 2), (r = function () {
            return e.apply(t || this, n.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || x.guid++, r
    }, x.holdReady = function (e) {
        e ? x.readyWait++ : x.ready(!0)
    }, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = M, x.isFunction = v, x.isWindow = m, x.camelCase = W, x.type = b, x.now = Date.now, x.isNumeric = function (e) {
        var t = x.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return x
    });
    var Vt = e.jQuery,
        Wt = e.$;
    return x.noConflict = function (t) {
        return e.$ === x && (e.$ = Wt), t && e.jQuery === x && (e.jQuery = Vt), x
    }, t || (e.jQuery = e.$ = x), x
}),
function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, function () {
    "use strict";
    var e = "undefined" == typeof document ? {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: {
                blur: function () {},
                nodeName: ""
            },
            querySelector: function () {
                return null
            },
            querySelectorAll: function () {
                return []
            },
            getElementById: function () {
                return null
            },
            createEvent: function () {
                return {
                    initEvent: function () {}
                }
            },
            createElement: function () {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function () {},
                    getElementsByTagName: function () {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        t = "undefined" == typeof window ? {
            document: e,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function () {
                return this
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
                return {
                    getPropertyValue: function () {
                        return ""
                    }
                }
            },
            Image: function () {},
            Date: function () {},
            screen: {},
            setTimeout: function () {},
            clearTimeout: function () {}
        } : window,
        i = function (e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };

    function n(n, r) {
        var a = [],
            s = 0;
        if (n && !r && n instanceof i) return n;
        if (n)
            if ("string" == typeof n) {
                var o, l, d = n.trim();
                if (0 <= d.indexOf("<") && 0 <= d.indexOf(">")) {
                    var u = "div";
                    for (0 === d.indexOf("<li") && (u = "ul"), 0 === d.indexOf("<tr") && (u = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (u = "tr"), 0 === d.indexOf("<tbody") && (u = "table"), 0 === d.indexOf("<option") && (u = "select"), (l = e.createElement(u)).innerHTML = d, s = 0; s < l.childNodes.length; s += 1) a.push(l.childNodes[s])
                } else
                    for (o = r || "#" !== n[0] || n.match(/[ .<>:~]/) ? (r || e).querySelectorAll(n.trim()) : [e.getElementById(n.trim().split("#")[1])], s = 0; s < o.length; s += 1) o[s] && a.push(o[s])
            } else if (n.nodeType || n === t || n === e) a.push(n);
        else if (0 < n.length && n[0].nodeType)
            for (s = 0; s < n.length; s += 1) a.push(n[s]);
        return new i(a)
    }

    function r(e) {
        for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    n.fn = i.prototype, n.Class = i, n.Dom7 = i;
    var a = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(t[i]);
            return this
        },
        removeClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(t[i]);
            return this
        },
        hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
            return this
        },
        attr: function (e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var n = 0; n < this.length; n += 1)
                if (2 === i.length) this[n].setAttribute(e, t);
                else
                    for (var r in e) this[n][r] = e[r], this[n].setAttribute(r, e[r]);
            return this
        },
        removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function (e, t) {
            var i;
            if (void 0 !== t) {
                for (var n = 0; n < this.length; n += 1)(i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) return i.dom7ElementDataStorage && e in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[e] : i.getAttribute("data-" + e) || void 0
        },
        transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        },
        transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        },
        on: function () {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var r = t[0],
                a = t[1],
                s = t[2],
                o = t[3];

            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), n(t).is(a)) s.apply(t, i);
                    else
                        for (var r = n(t).parents(), o = 0; o < r.length; o += 1) n(r[o]).is(a) && s.apply(r[o], i)
                }
            }

            function d(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t)
            }
            "function" == typeof t[1] && (r = (e = t)[0], s = e[1], o = e[2], a = void 0), o || (o = !1);
            for (var u, c = r.split(" "), p = 0; p < this.length; p += 1) {
                var h = this[p];
                if (a)
                    for (u = 0; u < c.length; u += 1) {
                        var f = c[u];
                        h.dom7LiveListeners || (h.dom7LiveListeners = {}), h.dom7LiveListeners[f] || (h.dom7LiveListeners[f] = []), h.dom7LiveListeners[f].push({
                            listener: s,
                            proxyListener: l
                        }), h.addEventListener(f, l, o)
                    } else
                        for (u = 0; u < c.length; u += 1) {
                            var v = c[u];
                            h.dom7Listeners || (h.dom7Listeners = {}), h.dom7Listeners[v] || (h.dom7Listeners[v] = []), h.dom7Listeners[v].push({
                                listener: s,
                                proxyListener: d
                            }), h.addEventListener(v, d, o)
                        }
            }
            return this
        },
        off: function () {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var n = t[0],
                r = t[1],
                a = t[2],
                s = t[3];
            "function" == typeof t[1] && (n = (e = t)[0], a = e[1], s = e[2], r = void 0), s || (s = !1);
            for (var o = n.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], u = 0; u < this.length; u += 1) {
                    var c = this[u],
                        p = void 0;
                    if (!r && c.dom7Listeners ? p = c.dom7Listeners[d] : r && c.dom7LiveListeners && (p = c.dom7LiveListeners[d]), p && p.length)
                        for (var h = p.length - 1; 0 <= h; h -= 1) {
                            var f = p[h];
                            a && f.listener === a ? (c.removeEventListener(d, f.proxyListener, s), p.splice(h, 1)) : a && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === a ? (c.removeEventListener(d, f.proxyListener, s), p.splice(h, 1)) : a || (c.removeEventListener(d, f.proxyListener, s), p.splice(h, 1))
                        }
                }
            return this
        },
        trigger: function () {
            for (var i = [], n = arguments.length; n--;) i[n] = arguments[n];
            for (var r = i[0].split(" "), a = i[1], s = 0; s < r.length; s += 1)
                for (var o = r[s], l = 0; l < this.length; l += 1) {
                    var d = this[l],
                        u = void 0;
                    try {
                        u = new t.CustomEvent(o, {
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (i) {
                        (u = e.createEvent("Event")).initEvent(o, !0, !0), u.detail = a
                    }
                    d.dom7EventData = i.filter(function (e, t) {
                        return 0 < t
                    }), d.dispatchEvent(u), d.dom7EventData = [], delete d.dom7EventData
                }
            return this
        },
        transitionEnd: function (e) {
            var t, i = ["webkitTransitionEnd", "transitionend"],
                n = this;

            function r(a) {
                if (a.target === this)
                    for (e.call(this, a), t = 0; t < i.length; t += 1) n.off(i[t], r)
            }
            if (e)
                for (t = 0; t < i.length; t += 1) n.on(i[t], r);
            return this
        },
        outerWidth: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function () {
            if (0 < this.length) {
                var i = this[0],
                    n = i.getBoundingClientRect(),
                    r = e.body,
                    a = i.clientTop || r.clientTop || 0,
                    s = i.clientLeft || r.clientLeft || 0,
                    o = i === t ? t.scrollY : i.scrollTop,
                    l = i === t ? t.scrollX : i.scrollLeft;
                return {
                    top: n.top + o - a,
                    left: n.left + l - s
                }
            }
            return null
        },
        css: function (e, i) {
            var n;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (n = 0; n < this.length; n += 1)
                        for (var r in e) this[n].style[r] = e[r];
                    return this
                }
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 !== arguments.length || "string" != typeof e) return this;
            for (n = 0; n < this.length; n += 1) this[n].style[e] = i;
            return this
        },
        each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function (r) {
            var a, s, o = this[0];
            if (!o || void 0 === r) return !1;
            if ("string" == typeof r) {
                if (o.matches) return o.matches(r);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(r);
                if (o.msMatchesSelector) return o.msMatchesSelector(r);
                for (a = n(r), s = 0; s < a.length; s += 1)
                    if (a[s] === o) return !0;
                return !1
            }
            if (r === e) return o === e;
            if (r === t) return o === t;
            if (r.nodeType || r instanceof i) {
                for (a = r.nodeType ? [r] : r, s = 0; s < a.length; s += 1)
                    if (a[s] === o) return !0;
                return !1
            }
            return !1
        },
        index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function (e) {
            if (void 0 === e) return this;
            var t, n = this.length;
            return new i(n - 1 < e ? [] : e < 0 ? (t = n + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function () {
            for (var t, n = [], r = arguments.length; r--;) n[r] = arguments[r];
            for (var a = 0; a < n.length; a += 1) {
                t = n[a];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof t) {
                        var o = e.createElement("div");
                        for (o.innerHTML = t; o.firstChild;) this[s].appendChild(o.firstChild)
                    } else if (t instanceof i)
                    for (var l = 0; l < t.length; l += 1) this[s].appendChild(t[l]);
                else this[s].appendChild(t)
            }
            return this
        },
        prepend: function (t) {
            var n, r;
            for (n = 0; n < this.length; n += 1)
                if ("string" == typeof t) {
                    var a = e.createElement("div");
                    for (a.innerHTML = t, r = a.childNodes.length - 1; 0 <= r; r -= 1) this[n].insertBefore(a.childNodes[r], this[n].childNodes[0])
                } else if (t instanceof i)
                for (r = 0; r < t.length; r += 1) this[n].insertBefore(t[r], this[n].childNodes[0]);
            else this[n].insertBefore(t, this[n].childNodes[0]);
            return this
        },
        next: function (e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
        },
        nextAll: function (e) {
            var t = [],
                r = this[0];
            if (!r) return new i([]);
            for (; r.nextElementSibling;) {
                var a = r.nextElementSibling;
                e ? n(a).is(e) && t.push(a) : t.push(a), r = a
            }
            return new i(t)
        },
        prev: function (e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && n(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
            }
            return new i([])
        },
        prevAll: function (e) {
            var t = [],
                r = this[0];
            if (!r) return new i([]);
            for (; r.previousElementSibling;) {
                var a = r.previousElementSibling;
                e ? n(a).is(e) && t.push(a) : t.push(a), r = a
            }
            return new i(t)
        },
        parent: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? n(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return n(r(t))
        },
        parents: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var a = this[i].parentNode; a;) e ? n(a).is(e) && t.push(a) : t.push(a), a = a.parentNode;
            return n(r(t))
        },
        closest: function (e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var r = this[n].querySelectorAll(e), a = 0; a < r.length; a += 1) t.push(r[a]);
            return new i(t)
        },
        children: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var s = this[a].childNodes, o = 0; o < s.length; o += 1) e ? 1 === s[o].nodeType && n(s[o]).is(e) && t.push(s[o]) : 1 === s[o].nodeType && t.push(s[o]);
            return new i(r(t))
        },
        remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, r;
            for (i = 0; i < e.length; i += 1) {
                var a = n(e[i]);
                for (r = 0; r < a.length; r += 1) this[this.length] = a[r], this.length += 1
            }
            return this
        },
        styles: function () {
            return this[0] ? t.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(a).forEach(function (e) {
        n.fn[e] = a[e]
    });
    var s, o, l, d, u = {
            deleteProps: function (e) {
                var t = e;
                Object.keys(t).forEach(function (e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: function (e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function () {
                return Date.now()
            },
            getTranslate: function (e, i) {
                var n, r, a;
                void 0 === i && (i = "x");
                var s = t.getComputedStyle(e, null);
                return t.WebKitCSSMatrix ? (6 < (r = s.transform || s.webkitTransform).split(",").length && (r = r.split(", ").map(function (e) {
                    return e.replace(",", ".")
                }).join(", ")), a = new t.WebKitCSSMatrix("none" === r ? "" : r)) : n = (a = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (r = t.WebKitCSSMatrix ? a.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === i && (r = t.WebKitCSSMatrix ? a.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), r || 0
            },
            parseUrlQuery: function (e) {
                var i, n, r, a, s = {},
                    o = e || t.location.href;
                if ("string" == typeof o && o.length)
                    for (a = (n = (o = -1 < o.indexOf("?") ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                            return "" !== e
                        })).length, i = 0; i < a; i += 1) r = n[i].replace(/#\S+/g, "").split("="), s[decodeURIComponent(r[0])] = void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || "";
                return s
            },
            isObject: function (e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function () {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
                    var r = e[n];
                    if (null != r)
                        for (var a = Object.keys(Object(r)), s = 0, o = a.length; s < o; s += 1) {
                            var l = a[s],
                                d = Object.getOwnPropertyDescriptor(r, l);
                            void 0 !== d && d.enumerable && (u.isObject(i[l]) && u.isObject(r[l]) ? u.extend(i[l], r[l]) : !u.isObject(i[l]) && u.isObject(r[l]) ? (i[l] = {}, u.extend(i[l], r[l])) : i[l] = r[l])
                        }
                }
                return i
            }
        },
        c = (l = e.createElement("div"), {
            touch: t.Modernizr && !0 === t.Modernizr.touch || !!(0 < t.navigator.maxTouchPoints || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
            pointerEvents: !!(t.navigator.pointerEnabled || t.PointerEvent || "maxTouchPoints" in t.navigator && 0 < t.navigator.maxTouchPoints),
            prefixedPointerEvents: !!t.navigator.msPointerEnabled,
            transition: (o = l.style, "transition" in o || "webkitTransition" in o || "MozTransition" in o),
            transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (s = l.style, "webkitPerspective" in s || "MozPerspective" in s || "OPerspective" in s || "MsPerspective" in s || "perspective" in s),
            flexbox: function () {
                for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
                    if (t[i] in e) return !0;
                return !1
            }(),
            observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
            passiveListener: function () {
                var e = !1;
                try {
                    var i = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    t.addEventListener("testPassiveListener", null, i)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in t
        }),
        p = {
            isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari: (d = t.navigator.userAgent.toLowerCase(), 0 <= d.indexOf("safari") && d.indexOf("chrome") < 0 && d.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        },
        h = function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
                t.on(e, t.params.on[e])
            })
        },
        f = {
            components: {
                configurable: !0
            }
        };
    h.prototype.on = function (e, t, i) {
        var n = this;
        if ("function" != typeof t) return n;
        var r = i ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
            n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][r](t)
        }), n
    }, h.prototype.once = function (e, t, i) {
        var n = this;
        if ("function" != typeof t) return n;

        function r() {
            for (var i = [], a = arguments.length; a--;) i[a] = arguments[a];
            t.apply(n, i), n.off(e, r), r.f7proxy && delete r.f7proxy
        }
        return r.f7proxy = t, n.on(e, r, i)
    }, h.prototype.off = function (e, t) {
        var i = this;
        return i.eventsListeners && e.split(" ").forEach(function (e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(function (n, r) {
                (n === t || n.f7proxy && n.f7proxy === t) && i.eventsListeners[e].splice(r, 1)
            })
        }), i
    }, h.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, n, r, a = this;
        return a.eventsListeners && (r = "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], n = e.slice(1, e.length), a) : (i = e[0].events, n = e[0].data, e[0].context || a), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
            if (a.eventsListeners && a.eventsListeners[e]) {
                var t = [];
                a.eventsListeners[e].forEach(function (e) {
                    t.push(e)
                }), t.forEach(function (e) {
                    e.apply(r, n)
                })
            }
        })), a
    }, h.prototype.useModulesParams = function (e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
            var n = t.modules[i];
            n.params && u.extend(e, n.params)
        })
    }, h.prototype.useModules = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
            var n = t.modules[i],
                r = e[i] || {};
            n.instance && Object.keys(n.instance).forEach(function (e) {
                var i = n.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            }), n.on && t.on && Object.keys(n.on).forEach(function (e) {
                t.on(e, n.on[e])
            }), n.create && n.create.bind(t)(r)
        })
    }, f.components.set = function (e) {
        this.use && this.use(e)
    }, h.installModule = function (e) {
        for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
        var n = this;
        n.prototype.modules || (n.prototype.modules = {});
        var r = e.name || Object.keys(n.prototype.modules).length + "_" + u.now();
        return (n.prototype.modules[r] = e).proto && Object.keys(e.proto).forEach(function (t) {
            n.prototype[t] = e.proto[t]
        }), e.static && Object.keys(e.static).forEach(function (t) {
            n[t] = e.static[t]
        }), e.install && e.install.apply(n, t), n
    }, h.use = function (e) {
        for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
        var n = this;
        return Array.isArray(e) ? (e.forEach(function (e) {
            return n.installModule(e)
        }), n) : n.installModule.apply(n, [e].concat(t))
    }, Object.defineProperties(h, f);
    var v = {
            updateSize: function () {
                var e, t, i = this,
                    n = i.$el;
                e = void 0 !== i.params.width ? i.params.width : n[0].clientWidth, t = void 0 !== i.params.height ? i.params.height : n[0].clientHeight, 0 === e && i.isHorizontal() || 0 === t && i.isVertical() || (e = e - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10), t = t - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10), u.extend(i, {
                    width: e,
                    height: t,
                    size: i.isHorizontal() ? e : t
                }))
            },
            updateSlides: function () {
                var e = this,
                    i = e.params,
                    n = e.$wrapperEl,
                    r = e.size,
                    a = e.rtlTranslate,
                    s = e.wrongRTL,
                    o = e.virtual && i.virtual.enabled,
                    l = o ? e.virtual.slides.length : e.slides.length,
                    d = n.children("." + e.params.slideClass),
                    p = o ? e.virtual.slides.length : d.length,
                    h = [],
                    f = [],
                    v = [],
                    m = i.slidesOffsetBefore;
                "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
                var g = i.slidesOffsetAfter;
                "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
                var y = e.snapGrid.length,
                    b = e.snapGrid.length,
                    x = i.spaceBetween,
                    w = -m,
                    T = 0,
                    E = 0;
                if (void 0 !== r) {
                    var C, S;
                    "string" == typeof x && 0 <= x.indexOf("%") && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, a ? d.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : d.css({
                        marginRight: "",
                        marginBottom: ""
                    }), 1 < i.slidesPerColumn && (C = Math.floor(p / i.slidesPerColumn) === p / e.params.slidesPerColumn ? p : Math.ceil(p / i.slidesPerColumn) * i.slidesPerColumn, "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (C = Math.max(C, i.slidesPerView * i.slidesPerColumn)));
                    for (var k, M = i.slidesPerColumn, P = C / M, D = Math.floor(p / i.slidesPerColumn), L = 0; L < p; L += 1) {
                        S = 0;
                        var $ = d.eq(L);
                        if (1 < i.slidesPerColumn) {
                            var z = void 0,
                                A = void 0,
                                I = void 0;
                            "column" === i.slidesPerColumnFill ? (I = L - (A = Math.floor(L / M)) * M, (D < A || A === D && I === M - 1) && M <= (I += 1) && (I = 0, A += 1), z = A + I * C / M, $.css({
                                "-webkit-box-ordinal-group": z,
                                "-moz-box-ordinal-group": z,
                                "-ms-flex-order": z,
                                "-webkit-order": z,
                                order: z
                            })) : A = L - (I = Math.floor(L / P)) * P, $.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== I && i.spaceBetween && i.spaceBetween + "px").attr("data-swiper-column", A).attr("data-swiper-row", I)
                        }
                        if ("none" !== $.css("display")) {
                            if ("auto" === i.slidesPerView) {
                                var N = t.getComputedStyle($[0], null),
                                    O = $[0].style.transform,
                                    H = $[0].style.webkitTransform;
                                if (O && ($[0].style.transform = "none"), H && ($[0].style.webkitTransform = "none"), i.roundLengths) S = e.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
                                else if (e.isHorizontal()) {
                                    var j = parseFloat(N.getPropertyValue("width")),
                                        q = parseFloat(N.getPropertyValue("padding-left")),
                                        B = parseFloat(N.getPropertyValue("padding-right")),
                                        R = parseFloat(N.getPropertyValue("margin-left")),
                                        X = parseFloat(N.getPropertyValue("margin-right")),
                                        F = N.getPropertyValue("box-sizing");
                                    S = F && "border-box" === F ? j + R + X : j + q + B + R + X
                                } else {
                                    var G = parseFloat(N.getPropertyValue("height")),
                                        V = parseFloat(N.getPropertyValue("padding-top")),
                                        W = parseFloat(N.getPropertyValue("padding-bottom")),
                                        Y = parseFloat(N.getPropertyValue("margin-top")),
                                        _ = parseFloat(N.getPropertyValue("margin-bottom")),
                                        U = N.getPropertyValue("box-sizing");
                                    S = U && "border-box" === U ? G + Y + _ : G + V + W + Y + _
                                }
                                O && ($[0].style.transform = O), H && ($[0].style.webkitTransform = H), i.roundLengths && (S = Math.floor(S))
                            } else S = (r - (i.slidesPerView - 1) * x) / i.slidesPerView, i.roundLengths && (S = Math.floor(S)), d[L] && (e.isHorizontal() ? d[L].style.width = S + "px" : d[L].style.height = S + "px");
                            d[L] && (d[L].swiperSlideSize = S), v.push(S), i.centeredSlides ? (w = w + S / 2 + T / 2 + x, 0 === T && 0 !== L && (w = w - r / 2 - x), 0 === L && (w = w - r / 2 - x), Math.abs(w) < .001 && (w = 0), i.roundLengths && (w = Math.floor(w)), E % i.slidesPerGroup == 0 && h.push(w), f.push(w)) : (i.roundLengths && (w = Math.floor(w)), E % i.slidesPerGroup == 0 && h.push(w), f.push(w), w = w + S + x), e.virtualSize += S + x, T = S, E += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, r) + g, a && s && ("slide" === i.effect || "coverflow" === i.effect) && n.css({
                            width: e.virtualSize + i.spaceBetween + "px"
                        }), c.flexbox && !i.setWrapperSize || (e.isHorizontal() ? n.css({
                            width: e.virtualSize + i.spaceBetween + "px"
                        }) : n.css({
                            height: e.virtualSize + i.spaceBetween + "px"
                        })), 1 < i.slidesPerColumn && (e.virtualSize = (S + i.spaceBetween) * C, e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween, e.isHorizontal() ? n.css({
                            width: e.virtualSize + i.spaceBetween + "px"
                        }) : n.css({
                            height: e.virtualSize + i.spaceBetween + "px"
                        }), i.centeredSlides)) {
                        k = [];
                        for (var K = 0; K < h.length; K += 1) {
                            var Q = h[K];
                            i.roundLengths && (Q = Math.floor(Q)), h[K] < e.virtualSize + h[0] && k.push(Q)
                        }
                        h = k
                    }
                    if (!i.centeredSlides) {
                        k = [];
                        for (var J = 0; J < h.length; J += 1) {
                            var Z = h[J];
                            i.roundLengths && (Z = Math.floor(Z)), h[J] <= e.virtualSize - r && k.push(Z)
                        }
                        h = k, 1 < Math.floor(e.virtualSize - r) - Math.floor(h[h.length - 1]) && h.push(e.virtualSize - r)
                    }
                    if (0 === h.length && (h = [0]), 0 !== i.spaceBetween && (e.isHorizontal() ? a ? d.css({
                            marginLeft: x + "px"
                        }) : d.css({
                            marginRight: x + "px"
                        }) : d.css({
                            marginBottom: x + "px"
                        })), i.centerInsufficientSlides) {
                        var ee = 0;
                        if (v.forEach(function (e) {
                                ee += e + (i.spaceBetween ? i.spaceBetween : 0)
                            }), (ee -= i.spaceBetween) < r) {
                            var te = (r - ee) / 2;
                            h.forEach(function (e, t) {
                                h[t] = e - te
                            }), f.forEach(function (e, t) {
                                f[t] = e + te
                            })
                        }
                    }
                    u.extend(e, {
                        slides: d,
                        snapGrid: h,
                        slidesGrid: f,
                        slidesSizesGrid: v
                    }), p !== l && e.emit("slidesLengthChange"), h.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== b && e.emit("slidesGridLengthChange"), (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset()
                }
            },
            updateAutoHeight: function (e) {
                var t, i = this,
                    n = [],
                    r = 0;
                if ("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                        var a = i.activeIndex + t;
                        if (a > i.slides.length) break;
                        n.push(i.slides.eq(a)[0])
                    } else n.push(i.slides.eq(i.activeIndex)[0]);
                for (t = 0; t < n.length; t += 1)
                    if (void 0 !== n[t]) {
                        var s = n[t].offsetHeight;
                        r = r < s ? s : r
                    } r && i.$wrapperEl.css("height", r + "px")
            },
            updateSlidesOffset: function () {
                for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            },
            updateSlidesProgress: function (e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this,
                    i = t.params,
                    r = t.slides,
                    a = t.rtlTranslate;
                if (0 !== r.length) {
                    void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
                    var s = -e;
                    a && (s = e), r.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (var o = 0; o < r.length; o += 1) {
                        var l = r[o],
                            d = (s + (i.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + i.spaceBetween);
                        if (i.watchSlidesVisibility) {
                            var u = -(s - l.swiperSlideOffset),
                                c = u + t.slidesSizesGrid[o];
                            (0 <= u && u < t.size || 0 < c && c <= t.size || u <= 0 && c >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(o), r.eq(o).addClass(i.slideVisibleClass))
                        }
                        l.progress = a ? -d : d
                    }
                    t.visibleSlides = n(t.visibleSlides)
                }
            },
            updateProgress: function (e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this,
                    i = t.params,
                    n = t.maxTranslate() - t.minTranslate(),
                    r = t.progress,
                    a = t.isBeginning,
                    s = t.isEnd,
                    o = a,
                    l = s;
                s = 0 === n ? a = !(r = 0) : (a = (r = (e - t.minTranslate()) / n) <= 0, 1 <= r), u.extend(t, {
                    progress: r,
                    isBeginning: a,
                    isEnd: s
                }), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), s && !l && t.emit("reachEnd toEdge"), (o && !a || l && !s) && t.emit("fromEdge"), t.emit("progress", r)
            },
            updateSlidesClasses: function () {
                var e, t = this,
                    i = t.slides,
                    n = t.params,
                    r = t.$wrapperEl,
                    a = t.activeIndex,
                    s = t.realIndex,
                    o = t.virtual && n.virtual.enabled;
                i.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + a + '"]') : i.eq(a)).addClass(n.slideActiveClass), n.loop && (e.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(n.slideDuplicateActiveClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(n.slideDuplicateActiveClass));
                var l = e.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
                n.loop && 0 === l.length && (l = i.eq(0)).addClass(n.slideNextClass);
                var d = e.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
                n.loop && 0 === d.length && (d = i.eq(-1)).addClass(n.slidePrevClass), n.loop && (l.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), d.hasClass(n.slideDuplicateClass) ? r.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : r.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
            },
            updateActiveIndex: function (e) {
                var t, i = this,
                    n = i.rtlTranslate ? i.translate : -i.translate,
                    r = i.slidesGrid,
                    a = i.snapGrid,
                    s = i.params,
                    o = i.activeIndex,
                    l = i.realIndex,
                    d = i.snapIndex,
                    c = e;
                if (void 0 === c) {
                    for (var p = 0; p < r.length; p += 1) void 0 !== r[p + 1] ? n >= r[p] && n < r[p + 1] - (r[p + 1] - r[p]) / 2 ? c = p : n >= r[p] && n < r[p + 1] && (c = p + 1) : n >= r[p] && (c = p);
                    s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                }
                if ((t = 0 <= a.indexOf(n) ? a.indexOf(n) : Math.floor(c / s.slidesPerGroup)) >= a.length && (t = a.length - 1), c !== o) {
                    var h = parseInt(i.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    u.extend(i, {
                        snapIndex: t,
                        realIndex: h,
                        previousIndex: o,
                        activeIndex: c
                    }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), l !== h && i.emit("realIndexChange"), i.emit("slideChange")
                } else t !== d && (i.snapIndex = t, i.emit("snapIndexChange"))
            },
            updateClickedSlide: function (e) {
                var t = this,
                    i = t.params,
                    r = n(e.target).closest("." + i.slideClass)[0],
                    a = !1;
                if (r)
                    for (var s = 0; s < t.slides.length; s += 1) t.slides[s] === r && (a = !0);
                if (!r || !a) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(n(r).attr("data-swiper-slide-index"), 10) : t.clickedIndex = n(r).index(), i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        },
        m = {
            getTranslate: function (e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this.params,
                    i = this.rtlTranslate,
                    n = this.translate,
                    r = this.$wrapperEl;
                if (t.virtualTranslate) return i ? -n : n;
                var a = u.getTranslate(r[0], e);
                return i && (a = -a), a || 0
            },
            setTranslate: function (e, t) {
                var i = this,
                    n = i.rtlTranslate,
                    r = i.params,
                    a = i.$wrapperEl,
                    s = i.progress,
                    o = 0,
                    l = 0;
                i.isHorizontal() ? o = n ? -e : e : l = e, r.roundLengths && (o = Math.floor(o), l = Math.floor(l)), r.virtualTranslate || (c.transforms3d ? a.transform("translate3d(" + o + "px, " + l + "px, 0px)") : a.transform("translate(" + o + "px, " + l + "px)")), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? o : l;
                var d = i.maxTranslate() - i.minTranslate();
                (0 === d ? 0 : (e - i.minTranslate()) / d) !== s && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
            },
            minTranslate: function () {
                return -this.snapGrid[0]
            },
            maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1]
            }
        },
        g = {
            slideTo: function (e, t, i, n) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                var r = this,
                    a = e;
                a < 0 && (a = 0);
                var s = r.params,
                    o = r.snapGrid,
                    l = r.slidesGrid,
                    d = r.previousIndex,
                    u = r.activeIndex,
                    p = r.rtlTranslate;
                if (r.animating && s.preventInteractionOnTransition) return !1;
                var h = Math.floor(a / s.slidesPerGroup);
                h >= o.length && (h = o.length - 1), (u || s.initialSlide || 0) === (d || 0) && i && r.emit("beforeSlideChangeStart");
                var f, v = -o[h];
                if (r.updateProgress(v), s.normalizeSlideIndex)
                    for (var m = 0; m < l.length; m += 1) - Math.floor(100 * v) >= Math.floor(100 * l[m]) && (a = m);
                if (r.initialized && a !== u) {
                    if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                    if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (u || 0) !== a) return !1
                }
                return f = u < a ? "next" : a < u ? "prev" : "reset", p && -v === r.translate || !p && v === r.translate ? (r.updateActiveIndex(a), s.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== s.effect && r.setTranslate(v), "reset" !== f && (r.transitionStart(i, f), r.transitionEnd(i, f)), !1) : (0 !== t && c.transition ? (r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i, f), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, f))
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))) : (r.setTransition(0), r.setTranslate(v), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i, f), r.transitionEnd(i, f)), !0)
            },
            slideToLoop: function (e, t, i, n) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                var r = e;
                return this.params.loop && (r += this.loopedSlides), this.slideTo(r, t, i, n)
            },
            slideNext: function (e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var n = this,
                    r = n.params,
                    a = n.animating;
                return r.loop ? !a && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, n.slideTo(n.activeIndex + r.slidesPerGroup, e, t, i)) : n.slideTo(n.activeIndex + r.slidesPerGroup, e, t, i)
            },
            slidePrev: function (e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var n = this,
                    r = n.params,
                    a = n.animating,
                    s = n.snapGrid,
                    o = n.slidesGrid,
                    l = n.rtlTranslate;
                if (r.loop) {
                    if (a) return !1;
                    n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                }

                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                var u, c = d(l ? n.translate : -n.translate),
                    p = s.map(function (e) {
                        return d(e)
                    }),
                    h = (o.map(function (e) {
                        return d(e)
                    }), s[p.indexOf(c)], s[p.indexOf(c) - 1]);
                return void 0 !== h && (u = o.indexOf(h)) < 0 && (u = n.activeIndex - 1), n.slideTo(u, e, t, i)
            },
            slideReset: function (e, t, i) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
            },
            slideToClosest: function (e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var n = this,
                    r = n.activeIndex,
                    a = Math.floor(r / n.params.slidesPerGroup);
                if (a < n.snapGrid.length - 1) {
                    var s = n.rtlTranslate ? n.translate : -n.translate,
                        o = n.snapGrid[a];
                    (n.snapGrid[a + 1] - o) / 2 < s - o && (r = n.params.slidesPerGroup)
                }
                return n.slideTo(r, e, t, i)
            },
            slideToClickedSlide: function () {
                var e, t = this,
                    i = t.params,
                    r = t.$wrapperEl,
                    a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                    s = t.clickedIndex;
                if (i.loop) {
                    if (t.animating) return;
                    e = parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? s < t.loopedSlides - a / 2 || s > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), s = r.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), u.nextTick(function () {
                        t.slideTo(s)
                    })) : t.slideTo(s) : s > t.slides.length - a ? (t.loopFix(), s = r.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), u.nextTick(function () {
                        t.slideTo(s)
                    })) : t.slideTo(s)
                } else t.slideTo(s)
            }
        },
        y = {
            loopCreate: function () {
                var t = this,
                    i = t.params,
                    r = t.$wrapperEl;
                r.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                var a = r.children("." + i.slideClass);
                if (i.loopFillGroupWithBlank) {
                    var s = i.slidesPerGroup - a.length % i.slidesPerGroup;
                    if (s !== i.slidesPerGroup) {
                        for (var o = 0; o < s; o += 1) {
                            var l = n(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                            r.append(l)
                        }
                        a = r.children("." + i.slideClass)
                    }
                }
                "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > a.length && (t.loopedSlides = a.length);
                var d = [],
                    u = [];
                a.each(function (e, i) {
                    var r = n(i);
                    e < t.loopedSlides && u.push(i), e < a.length && e >= a.length - t.loopedSlides && d.push(i), r.attr("data-swiper-slide-index", e)
                });
                for (var c = 0; c < u.length; c += 1) r.append(n(u[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
                for (var p = d.length - 1; 0 <= p; p -= 1) r.prepend(n(d[p].cloneNode(!0)).addClass(i.slideDuplicateClass))
            },
            loopFix: function () {
                var e, t = this,
                    i = t.params,
                    n = t.activeIndex,
                    r = t.slides,
                    a = t.loopedSlides,
                    s = t.allowSlidePrev,
                    o = t.allowSlideNext,
                    l = t.snapGrid,
                    d = t.rtlTranslate;
                t.allowSlidePrev = !0, t.allowSlideNext = !0;
                var u = -l[n] - t.getTranslate();
                n < a ? (e = r.length - 3 * a + n, e += a, t.slideTo(e, 0, !1, !0) && 0 !== u && t.setTranslate((d ? -t.translate : t.translate) - u)) : ("auto" === i.slidesPerView && 2 * a <= n || n >= r.length - a) && (e = -r.length + n + a, e += a, t.slideTo(e, 0, !1, !0) && 0 !== u && t.setTranslate((d ? -t.translate : t.translate) - u)), t.allowSlidePrev = s, t.allowSlideNext = o
            },
            loopDestroy: function () {
                var e = this.$wrapperEl,
                    t = this.params,
                    i = this.slides;
                e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
            }
        },
        b = {
            setGrabCursor: function (e) {
                if (!(c.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                    var t = this.el;
                    t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function () {
                c.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
            }
        },
        x = {
            appendSlide: function (e) {
                var t = this,
                    i = t.$wrapperEl,
                    n = t.params;
                if (n.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var r = 0; r < e.length; r += 1) e[r] && i.append(e[r]);
                else i.append(e);
                n.loop && t.loopCreate(), n.observer && c.observer || t.update()
            },
            prependSlide: function (e) {
                var t = this,
                    i = t.params,
                    n = t.$wrapperEl,
                    r = t.activeIndex;
                i.loop && t.loopDestroy();
                var a = r + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var s = 0; s < e.length; s += 1) e[s] && n.prepend(e[s]);
                    a = r + e.length
                } else n.prepend(e);
                i.loop && t.loopCreate(), i.observer && c.observer || t.update(), t.slideTo(a, 0, !1)
            },
            addSlide: function (e, t) {
                var i = this,
                    n = i.$wrapperEl,
                    r = i.params,
                    a = i.activeIndex;
                r.loop && (a -= i.loopedSlides, i.loopDestroy(), i.slides = n.children("." + r.slideClass));
                var s = i.slides.length;
                if (e <= 0) i.prependSlide(t);
                else if (s <= e) i.appendSlide(t);
                else {
                    for (var o = e < a ? a + 1 : a, l = [], d = s - 1; e <= d; d -= 1) {
                        var u = i.slides.eq(d);
                        u.remove(), l.unshift(u)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var p = 0; p < t.length; p += 1) t[p] && n.append(t[p]);
                        o = e < a ? a + t.length : a
                    } else n.append(t);
                    for (var h = 0; h < l.length; h += 1) n.append(l[h]);
                    r.loop && i.loopCreate(), r.observer && c.observer || i.update(), r.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1)
                }
            },
            removeSlide: function (e) {
                var t = this,
                    i = t.params,
                    n = t.$wrapperEl,
                    r = t.activeIndex;
                i.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = n.children("." + i.slideClass));
                var a, s = r;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) a = e[o], t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1);
                    s = Math.max(s, 0)
                } else a = e, t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1), s = Math.max(s, 0);
                i.loop && t.loopCreate(), i.observer && c.observer || t.update(), i.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1)
            },
            removeAllSlides: function () {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        w = function () {
            var i = t.navigator.userAgent,
                n = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: t.cordova || t.phonegap,
                    phonegap: t.cordova || t.phonegap
                },
                r = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                a = i.match(/(Android);?[\s\/]+([\d.]+)?/),
                s = i.match(/(iPad).*OS\s([\d_]+)/),
                o = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                l = !s && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (r && (n.os = "windows", n.osVersion = r[2], n.windows = !0), a && !r && (n.os = "android", n.osVersion = a[2], n.android = !0, n.androidChrome = 0 <= i.toLowerCase().indexOf("chrome")), (s || l || o) && (n.os = "ios", n.ios = !0), l && !o && (n.osVersion = l[2].replace(/_/g, "."), n.iphone = !0), s && (n.osVersion = s[2].replace(/_/g, "."), n.ipad = !0), o && (n.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, n.iphone = !0), n.ios && n.osVersion && 0 <= i.indexOf("Version/") && "10" === n.osVersion.split(".")[0] && (n.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), n.desktop = !(n.os || n.android || n.webView), n.webView = (l || s || o) && i.match(/.*AppleWebKit(?!.*Safari)/i), n.os && "ios" === n.os) {
                var d = n.osVersion.split("."),
                    u = e.querySelector('meta[name="viewport"]');
                n.minimalUi = !n.webView && (o || l) && (1 * d[0] == 7 ? 1 <= 1 * d[1] : 7 < 1 * d[0]) && u && 0 <= u.getAttribute("content").indexOf("minimal-ui")
            }
            return n.pixelRatio = t.devicePixelRatio || 1, n
        }();

    function T() {
        var e = this,
            t = e.params,
            i = e.el;
        if (!i || 0 !== i.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var n = e.allowSlideNext,
                r = e.allowSlidePrev,
                a = e.snapGrid;
            if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                var s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
            } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = r, e.allowSlideNext = n, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
        }
    }
    var E = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        C = {
            update: v,
            translate: m,
            transition: {
                setTransition: function (e, t) {
                    this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                },
                transitionStart: function (e, t) {
                    void 0 === e && (e = !0);
                    var i = this,
                        n = i.activeIndex,
                        r = i.params,
                        a = i.previousIndex;
                    r.autoHeight && i.updateAutoHeight();
                    var s = t;
                    if (s || (s = a < n ? "next" : n < a ? "prev" : "reset"), i.emit("transitionStart"), e && n !== a) {
                        if ("reset" === s) return void i.emit("slideResetTransitionStart");
                        i.emit("slideChangeTransitionStart"), "next" === s ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
                    }
                },
                transitionEnd: function (e, t) {
                    void 0 === e && (e = !0);
                    var i = this,
                        n = i.activeIndex,
                        r = i.previousIndex;
                    i.animating = !1, i.setTransition(0);
                    var a = t;
                    if (a || (a = r < n ? "next" : n < r ? "prev" : "reset"), i.emit("transitionEnd"), e && n !== r) {
                        if ("reset" === a) return void i.emit("slideResetTransitionEnd");
                        i.emit("slideChangeTransitionEnd"), "next" === a ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
                    }
                }
            },
            slide: g,
            loop: y,
            grabCursor: b,
            manipulation: x,
            events: {
                attachEvents: function () {
                    var i = this,
                        r = i.params,
                        a = i.touchEvents,
                        s = i.el,
                        o = i.wrapperEl;
                    i.onTouchStart = function (i) {
                        var r = this,
                            a = r.touchEventsData,
                            s = r.params,
                            o = r.touches;
                        if (!r.animating || !s.preventInteractionOnTransition) {
                            var l = i;
                            if (l.originalEvent && (l = l.originalEvent), a.isTouchEvent = "touchstart" === l.type, (a.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!a.isTouchEvent && "button" in l && 0 < l.button || a.isTouched && a.isMoved))
                                if (s.noSwiping && n(l.target).closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) r.allowClick = !0;
                                else if (!s.swipeHandler || n(l).closest(s.swipeHandler)[0]) {
                                o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                                var d = o.currentX,
                                    c = o.currentY,
                                    p = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                                    h = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                                if (!p || !(d <= h || d >= t.screen.width - h)) {
                                    if (u.extend(a, {
                                            isTouched: !0,
                                            isMoved: !1,
                                            allowTouchCallbacks: !0,
                                            isScrolling: void 0,
                                            startMoving: void 0
                                        }), o.startX = d, o.startY = c, a.touchStartTime = u.now(), r.allowClick = !0, r.updateSize(), r.swipeDirection = void 0, 0 < s.threshold && (a.allowThresholdMove = !1), "touchstart" !== l.type) {
                                        var f = !0;
                                        n(l.target).is(a.formElements) && (f = !1), e.activeElement && n(e.activeElement).is(a.formElements) && e.activeElement !== l.target && e.activeElement.blur();
                                        var v = f && r.allowTouchMove && s.touchStartPreventDefault;
                                        (s.touchStartForcePreventDefault || v) && l.preventDefault()
                                    }
                                    r.emit("touchStart", l)
                                }
                            }
                        }
                    }.bind(i), i.onTouchMove = function (t) {
                        var i = this,
                            r = i.touchEventsData,
                            a = i.params,
                            s = i.touches,
                            o = i.rtlTranslate,
                            l = t;
                        if (l.originalEvent && (l = l.originalEvent), r.isTouched) {
                            if (!r.isTouchEvent || "mousemove" !== l.type) {
                                var d = "touchmove" === l.type ? l.targetTouches[0].pageX : l.pageX,
                                    c = "touchmove" === l.type ? l.targetTouches[0].pageY : l.pageY;
                                if (l.preventedByNestedSwiper) return s.startX = d, void(s.startY = c);
                                if (!i.allowTouchMove) return i.allowClick = !1, void(r.isTouched && (u.extend(s, {
                                    startX: d,
                                    startY: c,
                                    currentX: d,
                                    currentY: c
                                }), r.touchStartTime = u.now()));
                                if (r.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                                    if (i.isVertical()) {
                                        if (c < s.startY && i.translate <= i.maxTranslate() || c > s.startY && i.translate >= i.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1)
                                    } else if (d < s.startX && i.translate <= i.maxTranslate() || d > s.startX && i.translate >= i.minTranslate()) return;
                                if (r.isTouchEvent && e.activeElement && l.target === e.activeElement && n(l.target).is(r.formElements)) return r.isMoved = !0, void(i.allowClick = !1);
                                if (r.allowTouchCallbacks && i.emit("touchMove", l), !(l.targetTouches && 1 < l.targetTouches.length)) {
                                    s.currentX = d, s.currentY = c;
                                    var p, h = s.currentX - s.startX,
                                        f = s.currentY - s.startY;
                                    if (!(i.params.threshold && Math.sqrt(Math.pow(h, 2) + Math.pow(f, 2)) < i.params.threshold))
                                        if (void 0 === r.isScrolling && (i.isHorizontal() && s.currentY === s.startY || i.isVertical() && s.currentX === s.startX ? r.isScrolling = !1 : 25 <= h * h + f * f && (p = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, r.isScrolling = i.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)), r.isScrolling && i.emit("touchMoveOpposite", l), void 0 === r.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (r.startMoving = !0)), r.isScrolling) r.isTouched = !1;
                                        else if (r.startMoving) {
                                        i.allowClick = !1, l.preventDefault(), a.touchMoveStopPropagation && !a.nested && l.stopPropagation(), r.isMoved || (a.loop && i.loopFix(), r.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !a.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", l)), i.emit("sliderMove", l), r.isMoved = !0;
                                        var v = i.isHorizontal() ? h : f;
                                        s.diff = v, v *= a.touchRatio, o && (v = -v), i.swipeDirection = 0 < v ? "prev" : "next", r.currentTranslate = v + r.startTranslate;
                                        var m = !0,
                                            g = a.resistanceRatio;
                                        if (a.touchReleaseOnEdges && (g = 0), 0 < v && r.currentTranslate > i.minTranslate() ? (m = !1, a.resistance && (r.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + r.startTranslate + v, g))) : v < 0 && r.currentTranslate < i.maxTranslate() && (m = !1, a.resistance && (r.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - r.startTranslate - v, g))), m && (l.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), 0 < a.threshold) {
                                            if (!(Math.abs(v) > a.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate);
                                            if (!r.allowThresholdMove) return r.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, r.currentTranslate = r.startTranslate, void(s.diff = i.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                        }
                                        a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), a.freeMode && (0 === r.velocities.length && r.velocities.push({
                                            position: s[i.isHorizontal() ? "startX" : "startY"],
                                            time: r.touchStartTime
                                        }), r.velocities.push({
                                            position: s[i.isHorizontal() ? "currentX" : "currentY"],
                                            time: u.now()
                                        })), i.updateProgress(r.currentTranslate), i.setTranslate(r.currentTranslate))
                                    }
                                }
                            }
                        } else r.startMoving && r.isScrolling && i.emit("touchMoveOpposite", l)
                    }.bind(i), i.onTouchEnd = function (e) {
                        var t = this,
                            i = t.touchEventsData,
                            n = t.params,
                            r = t.touches,
                            a = t.rtlTranslate,
                            s = t.$wrapperEl,
                            o = t.slidesGrid,
                            l = t.snapGrid,
                            d = e;
                        if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                        n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                        var c, p = u.now(),
                            h = p - i.touchStartTime;
                        if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), h < 300 && 300 < p - i.lastClickTime && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = u.nextTick(function () {
                                t && !t.destroyed && t.emit("click", d)
                            }, 300)), h < 300 && p - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", d))), i.lastClickTime = u.now(), u.nextTick(function () {
                                t.destroyed || (t.allowClick = !0)
                            }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, c = n.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, n.freeMode) {
                            if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                            if (c > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                            if (n.freeModeMomentum) {
                                if (1 < i.velocities.length) {
                                    var f = i.velocities.pop(),
                                        v = i.velocities.pop(),
                                        m = f.position - v.position,
                                        g = f.time - v.time;
                                    t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (150 < g || 300 < u.now() - f.time) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                                var y = 1e3 * n.freeModeMomentumRatio,
                                    b = t.velocity * y,
                                    x = t.translate + b;
                                a && (x = -x);
                                var w, T, E = !1,
                                    C = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                                if (x < t.maxTranslate()) n.freeModeMomentumBounce ? (x + t.maxTranslate() < -C && (x = t.maxTranslate() - C), w = t.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : x = t.maxTranslate(), n.loop && n.centeredSlides && (T = !0);
                                else if (x > t.minTranslate()) n.freeModeMomentumBounce ? (x - t.minTranslate() > C && (x = t.minTranslate() + C), w = t.minTranslate(), E = !0, i.allowMomentumBounce = !0) : x = t.minTranslate(), n.loop && n.centeredSlides && (T = !0);
                                else if (n.freeModeSticky) {
                                    for (var S, k = 0; k < l.length; k += 1)
                                        if (l[k] > -x) {
                                            S = k;
                                            break
                                        } x = -(x = Math.abs(l[S] - x) < Math.abs(l[S - 1] - x) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                                }
                                if (T && t.once("transitionEnd", function () {
                                        t.loopFix()
                                    }), 0 !== t.velocity) y = a ? Math.abs((-x - t.translate) / t.velocity) : Math.abs((x - t.translate) / t.velocity);
                                else if (n.freeModeSticky) return void t.slideToClosest();
                                n.freeModeMomentumBounce && E ? (t.updateProgress(w), t.setTransition(y), t.setTranslate(x), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd(function () {
                                    t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(w), s.transitionEnd(function () {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                })) : t.velocity ? (t.updateProgress(x), t.setTransition(y), t.setTranslate(x), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd(function () {
                                    t && !t.destroyed && t.transitionEnd()
                                }))) : t.updateProgress(x), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else if (n.freeModeSticky) return void t.slideToClosest();
                            (!n.freeModeMomentum || h >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        } else {
                            for (var M = 0, P = t.slidesSizesGrid[0], D = 0; D < o.length; D += n.slidesPerGroup) void 0 !== o[D + n.slidesPerGroup] ? c >= o[D] && c < o[D + n.slidesPerGroup] && (P = o[(M = D) + n.slidesPerGroup] - o[D]) : c >= o[D] && (M = D, P = o[o.length - 1] - o[o.length - 2]);
                            var L = (c - o[M]) / P;
                            if (h > n.longSwipesMs) {
                                if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && (L >= n.longSwipesRatio ? t.slideTo(M + n.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (L > 1 - n.longSwipesRatio ? t.slideTo(M + n.slidesPerGroup) : t.slideTo(M))
                            } else {
                                if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                                "next" === t.swipeDirection && t.slideTo(M + n.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
                            }
                        }
                    }.bind(i), i.onClick = function (e) {
                        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                    }.bind(i);
                    var l = "container" === r.touchEventsTarget ? s : o,
                        d = !!r.nested;
                    if (c.touch || !c.pointerEvents && !c.prefixedPointerEvents) {
                        if (c.touch) {
                            var p = !("touchstart" !== a.start || !c.passiveListener || !r.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            l.addEventListener(a.start, i.onTouchStart, p), l.addEventListener(a.move, i.onTouchMove, c.passiveListener ? {
                                passive: !1,
                                capture: d
                            } : d), l.addEventListener(a.end, i.onTouchEnd, p)
                        }(r.simulateTouch && !w.ios && !w.android || r.simulateTouch && !c.touch && w.ios) && (l.addEventListener("mousedown", i.onTouchStart, !1), e.addEventListener("mousemove", i.onTouchMove, d), e.addEventListener("mouseup", i.onTouchEnd, !1))
                    } else l.addEventListener(a.start, i.onTouchStart, !1), e.addEventListener(a.move, i.onTouchMove, d), e.addEventListener(a.end, i.onTouchEnd, !1);
                    (r.preventClicks || r.preventClicksPropagation) && l.addEventListener("click", i.onClick, !0), i.on(w.ios || w.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", T, !0)
                },
                detachEvents: function () {
                    var t = this,
                        i = t.params,
                        n = t.touchEvents,
                        r = t.el,
                        a = t.wrapperEl,
                        s = "container" === i.touchEventsTarget ? r : a,
                        o = !!i.nested;
                    if (c.touch || !c.pointerEvents && !c.prefixedPointerEvents) {
                        if (c.touch) {
                            var l = !("onTouchStart" !== n.start || !c.passiveListener || !i.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s.removeEventListener(n.start, t.onTouchStart, l), s.removeEventListener(n.move, t.onTouchMove, o), s.removeEventListener(n.end, t.onTouchEnd, l)
                        }(i.simulateTouch && !w.ios && !w.android || i.simulateTouch && !c.touch && w.ios) && (s.removeEventListener("mousedown", t.onTouchStart, !1), e.removeEventListener("mousemove", t.onTouchMove, o), e.removeEventListener("mouseup", t.onTouchEnd, !1))
                    } else s.removeEventListener(n.start, t.onTouchStart, !1), e.removeEventListener(n.move, t.onTouchMove, o), e.removeEventListener(n.end, t.onTouchEnd, !1);
                    (i.preventClicks || i.preventClicksPropagation) && s.removeEventListener("click", t.onClick, !0), t.off(w.ios || w.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", T)
                }
            },
            breakpoints: {
                setBreakpoint: function () {
                    var e = this,
                        t = e.activeIndex,
                        i = e.initialized,
                        n = e.loopedSlides;
                    void 0 === n && (n = 0);
                    var r = e.params,
                        a = r.breakpoints;
                    if (a && (!a || 0 !== Object.keys(a).length)) {
                        var s = e.getBreakpoint(a);
                        if (s && e.currentBreakpoint !== s) {
                            var o = s in a ? a[s] : void 0;
                            o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
                                var t = o[e];
                                void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                            });
                            var l = o || e.originalParams,
                                d = l.direction && l.direction !== r.direction,
                                c = r.loop && (l.slidesPerView !== r.slidesPerView || d);
                            d && i && e.changeDirection(), u.extend(e.params, l), u.extend(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), e.currentBreakpoint = s, c && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                        }
                    }
                },
                getBreakpoint: function (e) {
                    if (e) {
                        var i = !1,
                            n = [];
                        Object.keys(e).forEach(function (e) {
                            n.push(e)
                        }), n.sort(function (e, t) {
                            return parseInt(e, 10) - parseInt(t, 10)
                        });
                        for (var r = 0; r < n.length; r += 1) {
                            var a = n[r];
                            this.params.breakpointsInverse ? a <= t.innerWidth && (i = a) : a >= t.innerWidth && !i && (i = a)
                        }
                        return i || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function () {
                    var e = this,
                        t = e.isLocked;
                    e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                }
            },
            classes: {
                addClasses: function () {
                    var e = this.classNames,
                        t = this.params,
                        i = this.rtl,
                        n = this.$el,
                        r = [];
                    r.push("initialized"), r.push(t.direction), t.freeMode && r.push("free-mode"), c.flexbox || r.push("no-flexbox"), t.autoHeight && r.push("autoheight"), i && r.push("rtl"), 1 < t.slidesPerColumn && r.push("multirow"), w.android && r.push("android"), w.ios && r.push("ios"), (p.isIE || p.isEdge) && (c.pointerEvents || c.prefixedPointerEvents) && r.push("wp8-" + t.direction), r.forEach(function (i) {
                        e.push(t.containerModifierClass + i)
                    }), n.addClass(e.join(" "))
                },
                removeClasses: function () {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function (e, i, n, r, a, s) {
                    var o;

                    function l() {
                        s && s()
                    }
                    e.complete && a ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, r && (o.sizes = r), n && (o.srcset = n), i && (o.src = i)) : l()
                },
                preloadImages: function () {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var n = e.imagesToLoad[i];
                        e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        S = {},
        k = function (e) {
            function t() {
                for (var i, r, a, s = [], o = arguments.length; o--;) s[o] = arguments[o];
                (a = 1 === s.length && s[0].constructor && s[0].constructor === Object ? s[0] : (r = (i = s)[0], i[1])) || (a = {}), a = u.extend({}, a), r && !a.el && (a.el = r), e.call(this, a), Object.keys(C).forEach(function (e) {
                    Object.keys(C[e]).forEach(function (i) {
                        t.prototype[i] || (t.prototype[i] = C[e][i])
                    })
                });
                var l = this;
                void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) {
                    var t = l.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0],
                            n = t.params[i];
                        if ("object" != typeof n || null === n) return;
                        if (!(i in a && "enabled" in n)) return;
                        !0 === a[i] && (a[i] = {
                            enabled: !0
                        }), "object" != typeof a[i] || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
                            enabled: !1
                        })
                    }
                });
                var d = u.extend({}, E);
                l.useModulesParams(d), l.params = u.extend({}, d, S, a), l.originalParams = u.extend({}, l.params), l.passedParams = u.extend({}, a);
                var p = (l.$ = n)(l.params.el);
                if (r = p[0]) {
                    if (1 < p.length) {
                        var h = [];
                        return p.each(function (e, i) {
                            var n = u.extend({}, a, {
                                el: i
                            });
                            h.push(new t(n))
                        }), h
                    }
                    r.swiper = l, p.data("swiper", l);
                    var f, v, m = p.children("." + l.params.wrapperClass);
                    return u.extend(l, {
                        $el: p,
                        el: r,
                        $wrapperEl: m,
                        wrapperEl: m[0],
                        classNames: [],
                        slides: n(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === l.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === l.params.direction
                        },
                        rtl: "rtl" === r.dir.toLowerCase() || "rtl" === p.css("direction"),
                        rtlTranslate: "horizontal" === l.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === p.css("direction")),
                        wrongRTL: "-webkit-box" === m.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEvents: (f = ["touchstart", "touchmove", "touchend"], v = ["mousedown", "mousemove", "mouseup"], c.pointerEvents ? v = ["pointerdown", "pointermove", "pointerup"] : c.prefixedPointerEvents && (v = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
                            start: f[0],
                            move: f[1],
                            end: f[2]
                        }, l.touchEventsDesktop = {
                            start: v[0],
                            move: v[1],
                            end: v[2]
                        }, c.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: u.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), l.useModules(), l.params.init && l.init(), l
                }
            }
            e && (t.__proto__ = e);
            var i = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return ((t.prototype = Object.create(e && e.prototype)).constructor = t).prototype.slidesPerViewDynamic = function () {
                var e = this,
                    t = e.params,
                    i = e.slides,
                    n = e.slidesGrid,
                    r = e.size,
                    a = e.activeIndex,
                    s = 1;
                if (t.centeredSlides) {
                    for (var o, l = i[a].swiperSlideSize, d = a + 1; d < i.length; d += 1) i[d] && !o && (s += 1, r < (l += i[d].swiperSlideSize) && (o = !0));
                    for (var u = a - 1; 0 <= u; u -= 1) i[u] && !o && (s += 1, r < (l += i[u].swiperSlideSize) && (o = !0))
                } else
                    for (var c = a + 1; c < i.length; c += 1) n[c] - n[a] < r && (s += 1);
                return s
            }, t.prototype.update = function () {
                var e = this;
                if (e && !e.destroyed) {
                    var t = e.snapGrid,
                        i = e.params;
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || 1 < e.params.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }

                function n() {
                    var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
            }, t.prototype.changeDirection = function (e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    n = i.params.direction;
                return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || ("vertical" === n && (i.$el.removeClass(i.params.containerModifierClass + "vertical wp8-vertical").addClass("" + i.params.containerModifierClass + e), (p.isIE || p.isEdge) && (c.pointerEvents || c.prefixedPointerEvents) && i.$el.addClass(i.params.containerModifierClass + "wp8-" + e)), "horizontal" === n && (i.$el.removeClass(i.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + i.params.containerModifierClass + e), (p.isIE || p.isEdge) && (c.pointerEvents || c.prefixedPointerEvents) && i.$el.addClass(i.params.containerModifierClass + "wp8-" + e)), i.params.direction = e, i.slides.each(function (t, i) {
                    "vertical" === e ? i.style.width = "" : i.style.height = ""
                }), i.emit("changeDirection"), t && i.update()), i
            }, t.prototype.init = function () {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, t.prototype.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this,
                    n = i.params,
                    r = i.$el,
                    a = i.$wrapperEl,
                    s = i.slides;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), s && s.length && s.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
                    i.off(e)
                }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), u.deleteProps(i)), i.destroyed = !0), null
            }, t.extendDefaults = function (e) {
                u.extend(S, e)
            }, i.extendedDefaults.get = function () {
                return S
            }, i.defaults.get = function () {
                return E
            }, i.Class.get = function () {
                return e
            }, i.$.get = function () {
                return n
            }, Object.defineProperties(t, i), t
        }(h),
        M = {
            name: "device",
            proto: {
                device: w
            },
            static: {
                device: w
            }
        },
        P = {
            name: "support",
            proto: {
                support: c
            },
            static: {
                support: c
            }
        },
        D = {
            name: "browser",
            proto: {
                browser: p
            },
            static: {
                browser: p
            }
        },
        L = {
            name: "resize",
            create: function () {
                var e = this;
                u.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function () {
                    t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function () {
                    t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        $ = {
            func: t.MutationObserver || t.WebkitMutationObserver,
            attach: function (e, i) {
                void 0 === i && (i = {});
                var n = this,
                    r = new $.func(function (e) {
                        if (1 !== e.length) {
                            var i = function () {
                                n.emit("observerUpdate", e[0])
                            };
                            t.requestAnimationFrame ? t.requestAnimationFrame(i) : t.setTimeout(i, 0)
                        } else n.emit("observerUpdate", e[0])
                    });
                r.observe(e, {
                    attributes: void 0 === i.attributes || i.attributes,
                    childList: void 0 === i.childList || i.childList,
                    characterData: void 0 === i.characterData || i.characterData
                }), n.observer.observers.push(r)
            },
            init: function () {
                var e = this;
                if (c.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
                    e.observer.attach(e.$el[0], {
                        childList: e.params.observeSlideChildren
                    }), e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        z = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function () {
                u.extend(this, {
                    observer: {
                        init: $.init.bind(this),
                        attach: $.attach.bind(this),
                        destroy: $.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function () {
                    this.observer.init()
                },
                destroy: function () {
                    this.observer.destroy()
                }
            }
        },
        A = {
            update: function (e) {
                var t = this,
                    i = t.params,
                    n = i.slidesPerView,
                    r = i.slidesPerGroup,
                    a = i.centeredSlides,
                    s = t.params.virtual,
                    o = s.addSlidesBefore,
                    l = s.addSlidesAfter,
                    d = t.virtual,
                    c = d.from,
                    p = d.to,
                    h = d.slides,
                    f = d.slidesGrid,
                    v = d.renderSlide,
                    m = d.offset;
                t.updateActiveIndex();
                var g, y, b, x = t.activeIndex || 0;
                g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", b = a ? (y = Math.floor(n / 2) + r + o, Math.floor(n / 2) + r + l) : (y = n + (r - 1) + o, r + l);
                var w = Math.max((x || 0) - b, 0),
                    T = Math.min((x || 0) + y, h.length - 1),
                    E = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);

                function C() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (u.extend(t.virtual, {
                        from: w,
                        to: T,
                        offset: E,
                        slidesGrid: t.slidesGrid
                    }), c === w && p === T && !e) return t.slidesGrid !== f && E !== m && t.slides.css(g, E + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: E,
                    from: w,
                    to: T,
                    slides: function () {
                        for (var e = [], t = w; t <= T; t += 1) e.push(h[t]);
                        return e
                    }()
                }), void C();
                var S = [],
                    k = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var M = c; M <= p; M += 1)(M < w || T < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
                for (var P = 0; P < h.length; P += 1) w <= P && P <= T && (void 0 === p || e ? k.push(P) : (p < P && k.push(P), P < c && S.push(P)));
                k.forEach(function (e) {
                    t.$wrapperEl.append(v(h[e], e))
                }), S.sort(function (e, t) {
                    return t - e
                }).forEach(function (e) {
                    t.$wrapperEl.prepend(v(h[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(g, E + "px"), C()
            },
            renderSlide: function (e, t) {
                var i = this,
                    r = i.params.virtual;
                if (r.cache && i.virtual.cache[t]) return i.virtual.cache[t];
                var a = r.renderSlide ? n(r.renderSlide.call(i, e, t)) : n('<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), r.cache && (i.virtual.cache[t] = a), a
            },
            appendSlide: function (e) {
                if ("object" == typeof e && "length" in e)
                    for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                else this.virtual.slides.push(e);
                this.virtual.update(!0)
            },
            prependSlide: function (e) {
                var t = this,
                    i = t.activeIndex,
                    n = i + 1,
                    r = 1;
                if (Array.isArray(e)) {
                    for (var a = 0; a < e.length; a += 1) e[a] && t.virtual.slides.unshift(e[a]);
                    n = i + e.length, r = e.length
                } else t.virtual.slides.unshift(e);
                if (t.params.virtual.cache) {
                    var s = t.virtual.cache,
                        o = {};
                    Object.keys(s).forEach(function (e) {
                        o[parseInt(e, 10) + r] = s[e]
                    }), t.virtual.cache = o
                }
                t.virtual.update(!0), t.slideTo(n, 0)
            },
            removeSlide: function (e) {
                var t = this;
                if (null != e) {
                    var i = t.activeIndex;
                    if (Array.isArray(e))
                        for (var n = e.length - 1; 0 <= n; n -= 1) t.virtual.slides.splice(e[n], 1), t.params.virtual.cache && delete t.virtual.cache[e[n]], e[n] < i && (i -= 1), i = Math.max(i, 0);
                    else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < i && (i -= 1), i = Math.max(i, 0);
                    t.virtual.update(!0), t.slideTo(i, 0)
                }
            },
            removeAllSlides: function () {
                var e = this;
                e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
            }
        },
        I = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function () {
                var e = this;
                u.extend(e, {
                    virtual: {
                        update: A.update.bind(e),
                        appendSlide: A.appendSlide.bind(e),
                        prependSlide: A.prependSlide.bind(e),
                        removeSlide: A.removeSlide.bind(e),
                        removeAllSlides: A.removeAllSlides.bind(e),
                        renderSlide: A.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {
                            watchSlidesProgress: !0
                        };
                        u.extend(e.params, t), u.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                    }
                },
                setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        N = {
            handle: function (i) {
                var n = this,
                    r = n.rtlTranslate,
                    a = i;
                a.originalEvent && (a = a.originalEvent);
                var s = a.keyCode || a.charCode;
                if (!n.allowSlideNext && (n.isHorizontal() && 39 === s || n.isVertical() && 40 === s)) return !1;
                if (!n.allowSlidePrev && (n.isHorizontal() && 37 === s || n.isVertical() && 38 === s)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                    if (n.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
                        var o = !1;
                        if (0 < n.$el.parents("." + n.params.slideClass).length && 0 === n.$el.parents("." + n.params.slideActiveClass).length) return;
                        var l = t.innerWidth,
                            d = t.innerHeight,
                            u = n.$el.offset();
                        r && (u.left -= n.$el[0].scrollLeft);
                        for (var c = [
                                [u.left, u.top],
                                [u.left + n.width, u.top],
                                [u.left, u.top + n.height],
                                [u.left + n.width, u.top + n.height]
                            ], p = 0; p < c.length; p += 1) {
                            var h = c[p];
                            0 <= h[0] && h[0] <= l && 0 <= h[1] && h[1] <= d && (o = !0)
                        }
                        if (!o) return
                    }
                    n.isHorizontal() ? (37 !== s && 39 !== s || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === s && !r || 37 === s && r) && n.slideNext(), (37 === s && !r || 39 === s && r) && n.slidePrev()) : (38 !== s && 40 !== s || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === s && n.slideNext(), 38 === s && n.slidePrev()), n.emit("keyPress", s)
                }
            },
            enable: function () {
                this.keyboard.enabled || (n(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function () {
                this.keyboard.enabled && (n(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        O = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function () {
                u.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: N.enable.bind(this),
                        disable: N.disable.bind(this),
                        handle: N.handle.bind(this)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        },
        H = {
            lastScrollTime: u.now(),
            event: -1 < t.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
                var t = "onwheel",
                    i = t in e;
                if (!i) {
                    var n = e.createElement("div");
                    n.setAttribute(t, "return;"), i = "function" == typeof n[t]
                }
                return !i && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (i = e.implementation.hasFeature("Events.wheel", "3.0")), i
            }() ? "wheel" : "mousewheel",
            normalize: function (e) {
                var t = 0,
                    i = 0,
                    n = 0,
                    r = 0;
                return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, r = 10 * i, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || r) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, r *= 40) : (n *= 800, r *= 800)), n && !t && (t = n < 1 ? -1 : 1), r && !i && (i = r < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: i,
                    pixelX: n,
                    pixelY: r
                }
            },
            handleMouseEnter: function () {
                this.mouseEntered = !0
            },
            handleMouseLeave: function () {
                this.mouseEntered = !1
            },
            handle: function (e) {
                var i = e,
                    n = this,
                    r = n.params.mousewheel;
                if (!n.mouseEntered && !r.releaseOnEdges) return !0;
                i.originalEvent && (i = i.originalEvent);
                var a = 0,
                    s = n.rtlTranslate ? -1 : 1,
                    o = H.normalize(i);
                if (r.forceToAxis)
                    if (n.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                        a = o.pixelX * s
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                        a = o.pixelY
                    }
                else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * s : -o.pixelY;
                if (0 === a) return !0;
                if (r.invert && (a = -a), n.params.freeMode) {
                    n.params.loop && n.loopFix();
                    var l = n.getTranslate() + a * r.sensitivity,
                        d = n.isBeginning,
                        c = n.isEnd;
                    if (l >= n.minTranslate() && (l = n.minTranslate()), l <= n.maxTranslate() && (l = n.maxTranslate()), n.setTransition(0), n.setTranslate(l), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!d && n.isBeginning || !c && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = u.nextTick(function () {
                            n.slideToClosest()
                        }, 300)), n.emit("scroll", i), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), l === n.minTranslate() || l === n.maxTranslate()) return !0
                } else {
                    if (60 < u.now() - n.mousewheel.lastScrollTime)
                        if (a < 0)
                            if (n.isEnd && !n.params.loop || n.animating) {
                                if (r.releaseOnEdges) return !0
                            } else n.slideNext(), n.emit("scroll", i);
                    else if (n.isBeginning && !n.params.loop || n.animating) {
                        if (r.releaseOnEdges) return !0
                    } else n.slidePrev(), n.emit("scroll", i);
                    n.mousewheel.lastScrollTime = (new t.Date).getTime()
                }
                return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
            },
            enable: function () {
                var e = this;
                if (!H.event) return !1;
                if (e.mousewheel.enabled) return !1;
                var t = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (t = n(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(H.event, e.mousewheel.handle), e.mousewheel.enabled = !0
            },
            disable: function () {
                var e = this;
                if (!H.event) return !1;
                if (!e.mousewheel.enabled) return !1;
                var t = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (t = n(e.params.mousewheel.eventsTarged)), t.off(H.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
            }
        },
        j = {
            update: function () {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var i = e.navigation,
                        n = i.$nextEl,
                        r = i.$prevEl;
                    r && 0 < r.length && (e.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), n && 0 < n.length && (e.isEnd ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                }
            },
            onPrevClick: function (e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function (e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function () {
                var e, t, i = this,
                    r = i.params.navigation;
                (r.nextEl || r.prevEl) && (r.nextEl && (e = n(r.nextEl), i.params.uniqueNavElements && "string" == typeof r.nextEl && 1 < e.length && 1 === i.$el.find(r.nextEl).length && (e = i.$el.find(r.nextEl))), r.prevEl && (t = n(r.prevEl), i.params.uniqueNavElements && "string" == typeof r.prevEl && 1 < t.length && 1 === i.$el.find(r.prevEl).length && (t = i.$el.find(r.prevEl))), e && 0 < e.length && e.on("click", i.navigation.onNextClick), t && 0 < t.length && t.on("click", i.navigation.onPrevClick), u.extend(i.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function () {
                var e = this,
                    t = e.navigation,
                    i = t.$nextEl,
                    n = t.$prevEl;
                i && i.length && (i.off("click", e.navigation.onNextClick), i.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", e.navigation.onPrevClick), n.removeClass(e.params.navigation.disabledClass))
            }
        },
        q = {
            update: function () {
                var e = this,
                    t = e.rtl,
                    i = e.params.pagination;
                if (i.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        s = e.pagination.$el,
                        o = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), o - 1 < r && (r -= o), r < 0 && "bullets" !== e.params.paginationType && (r = o + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                        var l, d, u, c = e.pagination.bullets;
                        if (i.dynamicBullets && (e.pagination.bulletSize = c.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), 1 < i.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), l = r - e.pagination.dynamicBulletIndex, u = ((d = l + (Math.min(c.length, i.dynamicMainBullets) - 1)) + l) / 2), c.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), 1 < s.length) c.each(function (e, t) {
                            var a = n(t),
                                s = a.index();
                            s === r && a.addClass(i.bulletActiveClass), i.dynamicBullets && (l <= s && s <= d && a.addClass(i.bulletActiveClass + "-main"), s === l && a.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), s === d && a.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                        });
                        else if (c.eq(r).addClass(i.bulletActiveClass), i.dynamicBullets) {
                            for (var p = c.eq(l), h = c.eq(d), f = l; f <= d; f += 1) c.eq(f).addClass(i.bulletActiveClass + "-main");
                            p.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), h.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                        }
                        if (i.dynamicBullets) {
                            var v = Math.min(c.length, i.dynamicMainBullets + 4),
                                m = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - u * e.pagination.bulletSize,
                                g = t ? "right" : "left";
                            c.css(e.isHorizontal() ? g : "top", m + "px")
                        }
                    }
                    if ("fraction" === i.type && (s.find("." + i.currentClass).text(i.formatFractionCurrent(r + 1)), s.find("." + i.totalClass).text(i.formatFractionTotal(o))), "progressbar" === i.type) {
                        var y;
                        y = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        var b = (r + 1) / o,
                            x = 1,
                            w = 1;
                        "horizontal" === y ? x = b : w = b, s.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + w + ")").transition(e.params.speed)
                    }
                    "custom" === i.type && i.renderCustom ? (s.html(i.renderCustom(e, r + 1, o)), e.emit("paginationRender", e, s[0])) : e.emit("paginationUpdate", e, s[0]), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](i.lockClass)
                }
            },
            render: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        n = e.pagination.$el,
                        r = "";
                    if ("bullets" === t.type) {
                        for (var a = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, s = 0; s < a; s += 1) t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        n.html(r), e.pagination.bullets = n.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', n.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', n.html(r)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = n(t.el);
                    0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && 1 < i.length && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
                        t.preventDefault();
                        var i = n(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                    }), u.extend(e.pagination, {
                        $el: i,
                        el: i[0]
                    }))
                }
            },
            destroy: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var i = e.pagination.$el;
                    i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", "." + t.bulletClass)
                }
            }
        },
        B = {
            setTranslate: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        i = e.rtlTranslate,
                        n = e.progress,
                        r = t.dragSize,
                        a = t.trackSize,
                        s = t.$dragEl,
                        o = t.$el,
                        l = e.params.scrollbar,
                        d = r,
                        u = (a - r) * n;
                    i ? 0 < (u = -u) ? (d = r - u, u = 0) : a < -u + r && (d = a + u) : u < 0 ? (d = r + u, u = 0) : a < u + r && (d = a - u), e.isHorizontal() ? (c.transforms3d ? s.transform("translate3d(" + u + "px, 0, 0)") : s.transform("translateX(" + u + "px)"), s[0].style.width = d + "px") : (c.transforms3d ? s.transform("translate3d(0px, " + u + "px, 0)") : s.transform("translateY(" + u + "px)"), s[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
                        o[0].style.opacity = 0, o.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function (e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        i = t.$dragEl,
                        n = t.$el;
                    i[0].style.width = "", i[0].style.height = "";
                    var r, a = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
                        s = e.size / e.virtualSize,
                        o = s * (a / e.size);
                    r = "auto" === e.params.scrollbar.dragSize ? a * s : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i[0].style.width = r + "px" : i[0].style.height = r + "px", n[0].style.display = 1 <= s ? "none" : "", e.params.scrollbar.hide && (n[0].style.opacity = 0), u.extend(t, {
                        trackSize: a,
                        divider: s,
                        moveDivider: o,
                        dragSize: r
                    }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                }
            },
            setDragPosition: function (e) {
                var t, i = this,
                    n = i.scrollbar,
                    r = i.rtlTranslate,
                    a = n.$el,
                    s = n.dragSize,
                    o = n.trackSize;
                t = ((i.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[i.isHorizontal() ? "left" : "top"] - s / 2) / (o - s), t = Math.max(Math.min(t, 1), 0), r && (t = 1 - t);
                var l = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * t;
                i.updateProgress(l), i.setTranslate(l), i.updateActiveIndex(), i.updateSlidesClasses()
            },
            onDragStart: function (e) {
                var t = this,
                    i = t.params.scrollbar,
                    n = t.scrollbar,
                    r = t.$wrapperEl,
                    a = n.$el,
                    s = n.$dragEl;
                t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), r.transition(100), s.transition(100), n.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), a.transition(0), i.hide && a.css("opacity", 1), t.emit("scrollbarDragStart", e)
            },
            onDragMove: function (e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    n = t.$el,
                    r = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), n.transition(0), r.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function (e) {
                var t = this,
                    i = t.params.scrollbar,
                    n = t.scrollbar.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, i.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = u.nextTick(function () {
                    n.css("opacity", 0), n.transition(400)
                }, 1e3)), t.emit("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest())
            },
            enableDraggable: function () {
                var t = this;
                if (t.params.scrollbar.el) {
                    var i = t.scrollbar,
                        n = t.touchEventsTouch,
                        r = t.touchEventsDesktop,
                        a = t.params,
                        s = i.$el[0],
                        o = !(!c.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        l = !(!c.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    c.touch ? (s.addEventListener(n.start, t.scrollbar.onDragStart, o), s.addEventListener(n.move, t.scrollbar.onDragMove, o), s.addEventListener(n.end, t.scrollbar.onDragEnd, l)) : (s.addEventListener(r.start, t.scrollbar.onDragStart, o), e.addEventListener(r.move, t.scrollbar.onDragMove, o), e.addEventListener(r.end, t.scrollbar.onDragEnd, l))
                }
            },
            disableDraggable: function () {
                var t = this;
                if (t.params.scrollbar.el) {
                    var i = t.scrollbar,
                        n = t.touchEventsTouch,
                        r = t.touchEventsDesktop,
                        a = t.params,
                        s = i.$el[0],
                        o = !(!c.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        l = !(!c.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    c.touch ? (s.removeEventListener(n.start, t.scrollbar.onDragStart, o), s.removeEventListener(n.move, t.scrollbar.onDragMove, o), s.removeEventListener(n.end, t.scrollbar.onDragEnd, l)) : (s.removeEventListener(r.start, t.scrollbar.onDragStart, o), e.removeEventListener(r.move, t.scrollbar.onDragMove, o), e.removeEventListener(r.end, t.scrollbar.onDragEnd, l))
                }
            },
            init: function () {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        i = e.$el,
                        r = e.params.scrollbar,
                        a = n(r.el);
                    e.params.uniqueNavElements && "string" == typeof r.el && 1 < a.length && 1 === i.find(r.el).length && (a = i.find(r.el));
                    var s = a.find("." + e.params.scrollbar.dragClass);
                    0 === s.length && (s = n('<div class="' + e.params.scrollbar.dragClass + '"></div>'), a.append(s)), u.extend(t, {
                        $el: a,
                        el: a[0],
                        $dragEl: s,
                        dragEl: s[0]
                    }), r.draggable && t.enableDraggable()
                }
            },
            destroy: function () {
                this.scrollbar.disableDraggable()
            }
        },
        R = {
            setTransform: function (e, t) {
                var i = this.rtl,
                    r = n(e),
                    a = i ? -1 : 1,
                    s = r.attr("data-swiper-parallax") || "0",
                    o = r.attr("data-swiper-parallax-x"),
                    l = r.attr("data-swiper-parallax-y"),
                    d = r.attr("data-swiper-parallax-scale"),
                    u = r.attr("data-swiper-parallax-opacity");
                if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = s, l = "0") : (l = s, o = "0"), o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t * a + "%" : o * t * a + "px", l = 0 <= l.indexOf("%") ? parseInt(l, 10) * t + "%" : l * t + "px", null != u) {
                    var c = u - (u - 1) * (1 - Math.abs(t));
                    r[0].style.opacity = c
                }
                if (null == d) r.transform("translate3d(" + o + ", " + l + ", 0px)");
                else {
                    var p = d - (d - 1) * (1 - Math.abs(t));
                    r.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + p + ")")
                }
            },
            setTranslate: function () {
                var e = this,
                    t = e.$el,
                    i = e.slides,
                    r = e.progress,
                    a = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
                    e.parallax.setTransform(i, r)
                }), i.each(function (t, i) {
                    var s = i.progress;
                    1 < e.params.slidesPerGroup && "auto" !== e.params.slidesPerView && (s += Math.ceil(t / 2) - r * (a.length - 1)), s = Math.min(Math.max(s, -1), 1), n(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
                        e.parallax.setTransform(i, s)
                    })
                })
            },
            setTransition: function (e) {
                void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
                    var r = n(i),
                        a = parseInt(r.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (a = 0), r.transition(a)
                })
            }
        },
        X = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    n = e.targetTouches[1].pageX,
                    r = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - i, 2))
            },
            onGestureStart: function (e) {
                var t = this,
                    i = t.params.zoom,
                    r = t.zoom,
                    a = r.gesture;
                if (r.fakeGestureTouched = !1, r.fakeGestureMoved = !1, !c.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    r.fakeGestureTouched = !0, a.scaleStart = X.getDistanceBetweenTouches(e)
                }
                a.$slideEl && a.$slideEl.length || (a.$slideEl = n(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = t.slides.eq(t.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), t.zoom.isScaling = !0) : a.$imageEl = void 0
            },
            onGestureChange: function (e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    n = i.gesture;
                if (!c.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, n.scaleMove = X.getDistanceBetweenTouches(e)
                }
                n.$imageEl && 0 !== n.$imageEl.length && (i.scale = c.gestures ? e.scale * i.currentScale : n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            },
            onGestureEnd: function (e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    n = i.gesture;
                if (!c.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !w.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
            },
            onTouchStart: function (e) {
                var t = this.zoom,
                    i = t.gesture,
                    n = t.image;
                i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (w.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function (e) {
                var t = this,
                    i = t.zoom,
                    n = i.gesture,
                    r = i.image,
                    a = i.velocity;
                if (n.$imageEl && 0 !== n.$imageEl.length && (t.allowClick = !1, r.isTouched && n.$slideEl)) {
                    r.isMoved || (r.width = n.$imageEl[0].offsetWidth, r.height = n.$imageEl[0].offsetHeight, r.startX = u.getTranslate(n.$imageWrapEl[0], "x") || 0, r.startY = u.getTranslate(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), t.rtl && (r.startX = -r.startX, r.startY = -r.startY));
                    var s = r.width * i.scale,
                        o = r.height * i.scale;
                    if (!(s < n.slideWidth && o < n.slideHeight)) {
                        if (r.minX = Math.min(n.slideWidth / 2 - s / 2, 0), r.maxX = -r.minX, r.minY = Math.min(n.slideHeight / 2 - o / 2, 0), r.maxY = -r.minY, r.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !r.isMoved && !i.isScaling) {
                            if (t.isHorizontal() && (Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x || Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x)) return void(r.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y || Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y)) return void(r.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), r.isMoved = !0, r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX, r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY, r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, .8)), r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, .8)), r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, .8)), r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = r.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = r.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (r.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (r.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(r.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(r.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = r.touchesCurrent.x, a.prevPositionY = r.touchesCurrent.y, a.prevTime = Date.now(), n.$imageWrapEl.transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function () {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    n = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var r = 300,
                        a = 300,
                        s = n.x * r,
                        o = i.currentX + s,
                        l = n.y * a,
                        d = i.currentY + l;
                    0 !== n.x && (r = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (a = Math.abs((d - i.currentY) / n.y));
                    var u = Math.max(r, a);
                    i.currentX = o, i.currentY = d;
                    var c = i.width * e.scale,
                        p = i.height * e.scale;
                    i.minX = Math.min(t.slideWidth / 2 - c / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - p / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(u).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTransitionEnd: function () {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            },
            toggle: function (e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function (e) {
                var t, i, r, a, s, o, l, d, u, c, p, h, f, v, m, g, y = this,
                    b = y.zoom,
                    x = y.params.zoom,
                    w = b.gesture,
                    T = b.image;
                w.$slideEl || (w.$slideEl = y.clickedSlide ? n(y.clickedSlide) : y.slides.eq(y.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas"), w.$imageWrapEl = w.$imageEl.parent("." + x.containerClass)), w.$imageEl && 0 !== w.$imageEl.length && (w.$slideEl.addClass("" + x.zoomedSlideClass), i = void 0 === T.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = T.touchesStart.x, T.touchesStart.y), b.scale = w.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, b.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, e ? (m = w.$slideEl[0].offsetWidth, g = w.$slideEl[0].offsetHeight, r = w.$slideEl.offset().left + m / 2 - t, a = w.$slideEl.offset().top + g / 2 - i, l = w.$imageEl[0].offsetWidth, d = w.$imageEl[0].offsetHeight, u = l * b.scale, c = d * b.scale, f = -(p = Math.min(m / 2 - u / 2, 0)), v = -(h = Math.min(g / 2 - c / 2, 0)), (s = r * b.scale) < p && (s = p), f < s && (s = f), (o = a * b.scale) < h && (o = h), v < o && (o = v)) : o = s = 0, w.$imageWrapEl.transition(300).transform("translate3d(" + s + "px, " + o + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
            },
            out: function () {
                var e = this,
                    t = e.zoom,
                    i = e.params.zoom,
                    r = t.gesture;
                r.$slideEl || (r.$slideEl = e.clickedSlide ? n(e.clickedSlide) : e.slides.eq(e.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)), r.$imageEl && 0 !== r.$imageEl.length && (t.scale = 1, t.currentScale = 1, r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), r.$slideEl.removeClass("" + i.zoomedSlideClass), r.$slideEl = void 0)
            },
            enable: function () {
                var e = this,
                    t = e.zoom;
                if (!t.enabled) {
                    t.enabled = !0;
                    var i = !("touchstart" !== e.touchEvents.start || !c.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    c.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            },
            disable: function () {
                var e = this,
                    t = e.zoom;
                if (t.enabled) {
                    e.zoom.enabled = !1;
                    var i = !("touchstart" !== e.touchEvents.start || !c.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    c.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            }
        },
        F = {
            loadInSlide: function (e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    r = i.params.lazy;
                if (void 0 !== e && 0 !== i.slides.length) {
                    var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                        s = a.find("." + r.elementClass + ":not(." + r.loadedClass + "):not(." + r.loadingClass + ")");
                    !a.hasClass(r.elementClass) || a.hasClass(r.loadedClass) || a.hasClass(r.loadingClass) || (s = s.add(a[0])), 0 !== s.length && s.each(function (e, s) {
                        var o = n(s);
                        o.addClass(r.loadingClass);
                        var l = o.attr("data-background"),
                            d = o.attr("data-src"),
                            u = o.attr("data-srcset"),
                            c = o.attr("data-sizes");
                        i.loadImage(o[0], d || l, u, c, !1, function () {
                            if (null != i && i && (!i || i.params) && !i.destroyed) {
                                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (u && (o.attr("srcset", u), o.removeAttr("data-srcset")), c && (o.attr("sizes", c), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(r.loadedClass).removeClass(r.loadingClass), a.find("." + r.preloaderClass).remove(), i.params.loop && t) {
                                    var e = a.attr("data-swiper-slide-index");
                                    if (a.hasClass(i.params.slideDuplicateClass)) {
                                        var n = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                        i.lazy.loadInSlide(n.index(), !1)
                                    } else {
                                        var s = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        i.lazy.loadInSlide(s.index(), !1)
                                    }
                                }
                                i.emit("lazyImageReady", a[0], o[0])
                            }
                        }), i.emit("lazyImageLoad", a[0], o[0])
                    })
                }
            },
            load: function () {
                var e = this,
                    t = e.$wrapperEl,
                    i = e.params,
                    r = e.slides,
                    a = e.activeIndex,
                    s = e.virtual && i.virtual.enabled,
                    o = i.lazy,
                    l = i.slidesPerView;

                function d(e) {
                    if (s) {
                        if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (r[e]) return !0;
                    return !1
                }

                function u(e) {
                    return s ? n(e).attr("data-swiper-slide-index") : n(e).index()
                }
                if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t, i) {
                    var r = s ? n(i).attr("data-swiper-slide-index") : n(i).index();
                    e.lazy.loadInSlide(r)
                });
                else if (1 < l)
                    for (var c = a; c < a + l; c += 1) d(c) && e.lazy.loadInSlide(c);
                else e.lazy.loadInSlide(a);
                if (o.loadPrevNext)
                    if (1 < l || o.loadPrevNextAmount && 1 < o.loadPrevNextAmount) {
                        for (var p = o.loadPrevNextAmount, h = l, f = Math.min(a + h + Math.max(p, h), r.length), v = Math.max(a - Math.max(h, p), 0), m = a + l; m < f; m += 1) d(m) && e.lazy.loadInSlide(m);
                        for (var g = v; g < a; g += 1) d(g) && e.lazy.loadInSlide(g)
                    } else {
                        var y = t.children("." + i.slideNextClass);
                        0 < y.length && e.lazy.loadInSlide(u(y));
                        var b = t.children("." + i.slidePrevClass);
                        0 < b.length && e.lazy.loadInSlide(u(b))
                    }
            }
        },
        G = {
            LinearSpline: function (e, t) {
                var i, n, r, a, s;
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                    return e ? (s = function (e, t) {
                        for (n = -1, i = e.length; 1 < i - n;) e[r = i + n >> 1] <= t ? n = r : i = r;
                        return i
                    }(this.x, e), a = s - 1, (e - this.x[a]) * (this.y[s] - this.y[a]) / (this.x[s] - this.x[a]) + this.y[a]) : 0
                }, this
            },
            getInterpolateFunction: function (e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new G.LinearSpline(t.slidesGrid, e.slidesGrid) : new G.LinearSpline(t.snapGrid, e.snapGrid))
            },
            setTranslate: function (e, t) {
                var i, n, r = this,
                    a = r.controller.control;

                function s(e) {
                    var t = r.rtlTranslate ? -r.translate : r.translate;
                    "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), n = -r.controller.spline.interpolate(-t)), n && "container" !== r.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), n = (t - r.minTranslate()) * i + e.minTranslate()), r.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, r), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(a))
                    for (var o = 0; o < a.length; o += 1) a[o] !== t && a[o] instanceof k && s(a[o]);
                else a instanceof k && t !== a && s(a)
            },
            setTransition: function (e, t) {
                var i, n = this,
                    r = n.controller.control;

                function a(t) {
                    t.setTransition(e, n), 0 !== e && (t.transitionStart(), t.params.autoHeight && u.nextTick(function () {
                        t.updateAutoHeight()
                    }), t.$wrapperEl.transitionEnd(function () {
                        r && (t.params.loop && "slide" === n.params.controller.by && t.loopFix(), t.transitionEnd())
                    }))
                }
                if (Array.isArray(r))
                    for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof k && a(r[i]);
                else r instanceof k && t !== r && a(r)
            }
        },
        V = {
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function (e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function (e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function (e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function (e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function (e) {
                var t = this,
                    i = t.params.a11y;
                if (13 === e.keyCode) {
                    var r = n(e.target);
                    t.navigation && t.navigation.$nextEl && r.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(i.lastSlideMessage) : t.a11y.notify(i.nextSlideMessage)), t.navigation && t.navigation.$prevEl && r.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(i.firstSlideMessage) : t.a11y.notify(i.prevSlideMessage)), t.pagination && r.is("." + t.params.pagination.bulletClass) && r[0].click()
                }
            },
            notify: function (e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function () {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation,
                        i = t.$nextEl,
                        n = t.$prevEl;
                    n && 0 < n.length && (e.isBeginning ? e.a11y.disableEl(n) : e.a11y.enableEl(n)), i && 0 < i.length && (e.isEnd ? e.a11y.disableEl(i) : e.a11y.enableEl(i))
                }
            },
            updatePagination: function () {
                var e = this,
                    t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i, r) {
                    var a = n(r);
                    e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                })
            },
            init: function () {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t, i, n = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, n.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, n.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            },
            destroy: function () {
                var e, t, i = this;
                i.a11y.liveRegion && 0 < i.a11y.liveRegion.length && i.a11y.liveRegion.remove(), i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl), i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl), e && e.off("keydown", i.a11y.onEnterKey), t && t.off("keydown", i.a11y.onEnterKey), i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.off("keydown", "." + i.params.pagination.bulletClass, i.a11y.onEnterKey)
            }
        },
        W = {
            init: function () {
                var e = this;
                if (e.params.history) {
                    if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    var i = e.history;
                    i.initialized = !0, i.paths = W.getPathValues(), (i.paths.key || i.paths.value) && (i.scrollToSlide(0, i.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState))
                }
            },
            destroy: function () {
                this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function () {
                this.history.paths = W.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function () {
                var e = t.location.pathname.slice(1).split("/").filter(function (e) {
                        return "" !== e
                    }),
                    i = e.length;
                return {
                    key: e[i - 2],
                    value: e[i - 1]
                }
            },
            setHistory: function (e, i) {
                if (this.history.initialized && this.params.history.enabled) {
                    var n = this.slides.eq(i),
                        r = W.slugify(n.attr("data-history"));
                    t.location.pathname.includes(e) || (r = e + "/" + r);
                    var a = t.history.state;
                    a && a.value === r || (this.params.history.replaceState ? t.history.replaceState({
                        value: r
                    }, null, r) : t.history.pushState({
                        value: r
                    }, null, r))
                }
            },
            slugify: function (e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function (e, t, i) {
                var n = this;
                if (t)
                    for (var r = 0, a = n.slides.length; r < a; r += 1) {
                        var s = n.slides.eq(r);
                        if (W.slugify(s.attr("data-history")) === t && !s.hasClass(n.params.slideDuplicateClass)) {
                            var o = s.index();
                            n.slideTo(o, e, i)
                        }
                    } else n.slideTo(0, e, i)
            }
        },
        Y = {
            onHashCange: function () {
                var t = this,
                    i = e.location.hash.replace("#", "");
                if (i !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                    var n = t.$wrapperEl.children("." + t.params.slideClass + '[data-hash="' + i + '"]').index();
                    if (void 0 === n) return;
                    t.slideTo(n)
                }
            },
            setHash: function () {
                var i = this;
                if (i.hashNavigation.initialized && i.params.hashNavigation.enabled)
                    if (i.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + i.slides.eq(i.activeIndex).attr("data-hash") || "");
                    else {
                        var n = i.slides.eq(i.activeIndex),
                            r = n.attr("data-hash") || n.attr("data-history");
                        e.location.hash = r || ""
                    }
            },
            init: function () {
                var i = this;
                if (!(!i.params.hashNavigation.enabled || i.params.history && i.params.history.enabled)) {
                    i.hashNavigation.initialized = !0;
                    var r = e.location.hash.replace("#", "");
                    if (r)
                        for (var a = 0, s = i.slides.length; a < s; a += 1) {
                            var o = i.slides.eq(a);
                            if ((o.attr("data-hash") || o.attr("data-history")) === r && !o.hasClass(i.params.slideDuplicateClass)) {
                                var l = o.index();
                                i.slideTo(l, 0, i.params.runCallbacksOnInit, !0)
                            }
                        }
                    i.params.hashNavigation.watchState && n(t).on("hashchange", i.hashNavigation.onHashCange)
                }
            },
            destroy: function () {
                this.params.hashNavigation.watchState && n(t).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        _ = {
            run: function () {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = u.nextTick(function () {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }, i)
            },
            start: function () {
                var e = this;
                return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0)
            },
            stop: function () {
                var e = this;
                return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0)
            },
            pause: function (e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
            }
        },
        U = {
            setTranslate: function () {
                for (var e = this, t = e.slides, i = 0; i < t.length; i += 1) {
                    var n = e.slides.eq(i),
                        r = -n[0].swiperSlideOffset;
                    e.params.virtualTranslate || (r -= e.translate);
                    var a = 0;
                    e.isHorizontal() || (a = r, r = 0);
                    var s = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
                    n.css({
                        opacity: s
                    }).transform("translate3d(" + r + "px, " + a + "px, 0px)")
                }
            },
            setTransition: function (e) {
                var t = this,
                    i = t.slides,
                    n = t.$wrapperEl;
                if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    i.transitionEnd(function () {
                        if (!r && t && !t.destroyed) {
                            r = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) n.trigger(e[i])
                        }
                    })
                }
            }
        },
        K = {
            setTranslate: function () {
                var e, t = this,
                    i = t.$el,
                    r = t.$wrapperEl,
                    a = t.slides,
                    s = t.width,
                    o = t.height,
                    l = t.rtlTranslate,
                    d = t.size,
                    u = t.params.cubeEffect,
                    c = t.isHorizontal(),
                    h = t.virtual && t.params.virtual.enabled,
                    f = 0;
                u.shadow && (c ? (0 === (e = r.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'), r.append(e)), e.css({
                    height: s + "px"
                })) : 0 === (e = i.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'), i.append(e)));
                for (var v = 0; v < a.length; v += 1) {
                    var m = a.eq(v),
                        g = v;
                    h && (g = parseInt(m.attr("data-swiper-slide-index"), 10));
                    var y = 90 * g,
                        b = Math.floor(y / 360);
                    l && (y = -y, b = Math.floor(-y / 360));
                    var x = Math.max(Math.min(m[0].progress, 1), -1),
                        w = 0,
                        T = 0,
                        E = 0;
                    g % 4 == 0 ? (w = 4 * -b * d, E = 0) : (g - 1) % 4 == 0 ? (w = 0, E = 4 * -b * d) : (g - 2) % 4 == 0 ? (w = d + 4 * b * d, E = d) : (g - 3) % 4 == 0 && (w = -d, E = 3 * d + 4 * d * b), l && (w = -w), c || (T = w, w = 0);
                    var C = "rotateX(" + (c ? 0 : -y) + "deg) rotateY(" + (c ? y : 0) + "deg) translate3d(" + w + "px, " + T + "px, " + E + "px)";
                    if (x <= 1 && -1 < x && (f = 90 * g + 90 * x, l && (f = 90 * -g - 90 * x)), m.transform(C), u.slideShadows) {
                        var S = c ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                            k = c ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                        0 === S.length && (S = n('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), m.append(S)), 0 === k.length && (k = n('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), m.append(k)), S.length && (S[0].style.opacity = Math.max(-x, 0)), k.length && (k[0].style.opacity = Math.max(x, 0))
                    }
                }
                if (r.css({
                        "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
                        "transform-origin": "50% 50% -" + d / 2 + "px"
                    }), u.shadow)
                    if (c) e.transform("translate3d(0px, " + (s / 2 + u.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")");
                    else {
                        var M = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                            P = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
                            D = u.shadowScale,
                            L = u.shadowScale / P,
                            $ = u.shadowOffset;
                        e.transform("scale3d(" + D + ", 1, " + L + ") translate3d(0px, " + (o / 2 + $) + "px, " + -o / 2 / L + "px) rotateX(-90deg)")
                    } var z = p.isSafari || p.isUiWebView ? -d / 2 : 0;
                r.transform("translate3d(0px,0," + z + "px) rotateX(" + (t.isHorizontal() ? 0 : f) + "deg) rotateY(" + (t.isHorizontal() ? -f : 0) + "deg)")
            },
            setTransition: function (e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        Q = {
            setTranslate: function () {
                for (var e = this, t = e.slides, i = e.rtlTranslate, r = 0; r < t.length; r += 1) {
                    var a = t.eq(r),
                        s = a[0].progress;
                    e.params.flipEffect.limitRotation && (s = Math.max(Math.min(a[0].progress, 1), -1));
                    var o = -180 * s,
                        l = 0,
                        d = -a[0].swiperSlideOffset,
                        u = 0;
                    if (e.isHorizontal() ? i && (o = -o) : (u = d, l = -o, o = d = 0), a[0].style.zIndex = -Math.abs(Math.round(s)) + t.length, e.params.flipEffect.slideShadows) {
                        var c = e.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                            p = e.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                        0 === c.length && (c = n('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), a.append(c)), 0 === p.length && (p = n('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), c.length && (c[0].style.opacity = Math.max(-s, 0)), p.length && (p[0].style.opacity = Math.max(s, 0))
                    }
                    a.transform("translate3d(" + d + "px, " + u + "px, 0px) rotateX(" + l + "deg) rotateY(" + o + "deg)")
                }
            },
            setTransition: function (e) {
                var t = this,
                    i = t.slides,
                    n = t.activeIndex,
                    r = t.$wrapperEl;
                if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var a = !1;
                    i.eq(n).transitionEnd(function () {
                        if (!a && t && !t.destroyed) {
                            a = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) r.trigger(e[i])
                        }
                    })
                }
            }
        },
        J = {
            setTranslate: function () {
                for (var e = this, t = e.width, i = e.height, r = e.slides, a = e.$wrapperEl, s = e.slidesSizesGrid, o = e.params.coverflowEffect, l = e.isHorizontal(), d = e.translate, u = l ? t / 2 - d : i / 2 - d, p = l ? o.rotate : -o.rotate, h = o.depth, f = 0, v = r.length; f < v; f += 1) {
                    var m = r.eq(f),
                        g = s[f],
                        y = (u - m[0].swiperSlideOffset - g / 2) / g * o.modifier,
                        b = l ? p * y : 0,
                        x = l ? 0 : p * y,
                        w = -h * Math.abs(y),
                        T = l ? 0 : o.stretch * y,
                        E = l ? o.stretch * y : 0;
                    Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(w) < .001 && (w = 0), Math.abs(b) < .001 && (b = 0), Math.abs(x) < .001 && (x = 0);
                    var C = "translate3d(" + E + "px," + T + "px," + w + "px)  rotateX(" + x + "deg) rotateY(" + b + "deg)";
                    if (m.transform(C), m[0].style.zIndex = 1 - Math.abs(Math.round(y)), o.slideShadows) {
                        var S = l ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                            k = l ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                        0 === S.length && (S = n('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), m.append(S)), 0 === k.length && (k = n('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), m.append(k)), S.length && (S[0].style.opacity = 0 < y ? y : 0), k.length && (k[0].style.opacity = 0 < -y ? -y : 0)
                    }
                }(c.pointerEvents || c.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = u + "px 50%")
            },
            setTransition: function (e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        Z = {
            init: function () {
                var e = this,
                    t = e.params.thumbs,
                    i = e.constructor;
                t.swiper instanceof i ? (e.thumbs.swiper = t.swiper, u.extend(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), u.extend(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : u.isObject(t.swiper) && (e.thumbs.swiper = new i(u.extend({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
            },
            onThumbClick: function () {
                var e = this,
                    t = e.thumbs.swiper;
                if (t) {
                    var i = t.clickedIndex,
                        r = t.clickedSlide;
                    if (!(r && n(r).hasClass(e.params.thumbs.slideThumbActiveClass) || null == i)) {
                        var a;
                        if (a = t.params.loop ? parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10) : i, e.params.loop) {
                            var s = e.activeIndex;
                            e.slides.eq(s).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, s = e.activeIndex);
                            var o = e.slides.eq(s).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                                l = e.slides.eq(s).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
                            a = void 0 === o ? l : void 0 === l ? o : l - s < s - o ? l : o
                        }
                        e.slideTo(a)
                    }
                }
            },
            update: function (e) {
                var t = this,
                    i = t.thumbs.swiper;
                if (i) {
                    var n = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
                    if (t.realIndex !== i.realIndex) {
                        var r, a = i.activeIndex;
                        if (i.params.loop) {
                            i.slides.eq(a).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, a = i.activeIndex);
                            var s = i.slides.eq(a).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                                o = i.slides.eq(a).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                            r = void 0 === s ? o : void 0 === o ? s : o - a == a - s ? a : o - a < a - s ? o : s
                        } else r = t.realIndex;
                        i.visibleSlidesIndexes.indexOf(r) < 0 && (i.params.centeredSlides ? r = a < r ? r - Math.floor(n / 2) + 1 : r + Math.floor(n / 2) - 1 : a < r && (r = r - n + 1), i.slideTo(r, e ? 0 : void 0))
                    }
                    var l = 1,
                        d = t.params.thumbs.slideThumbActiveClass;
                    if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), i.slides.removeClass(d), i.params.loop)
                        for (var u = 0; u < l; u += 1) i.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + u) + '"]').addClass(d);
                    else
                        for (var c = 0; c < l; c += 1) i.slides.eq(t.realIndex + c).addClass(d)
                }
            }
        },
        ee = [M, P, D, L, z, I, O, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function () {
                var e = this;
                u.extend(e, {
                    mousewheel: {
                        enabled: !1,
                        enable: H.enable.bind(e),
                        disable: H.disable.bind(e),
                        handle: H.handle.bind(e),
                        handleMouseEnter: H.handleMouseEnter.bind(e),
                        handleMouseLeave: H.handleMouseLeave.bind(e),
                        lastScrollTime: u.now()
                    }
                })
            },
            on: {
                init: function () {
                    this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function () {
                    this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function () {
                var e = this;
                u.extend(e, {
                    navigation: {
                        init: j.init.bind(e),
                        update: j.update.bind(e),
                        destroy: j.destroy.bind(e),
                        onNextClick: j.onNextClick.bind(e),
                        onPrevClick: j.onPrevClick.bind(e)
                    }
                })
            },
            on: {
                init: function () {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function () {
                    this.navigation.update()
                },
                fromEdge: function () {
                    this.navigation.update()
                },
                destroy: function () {
                    this.navigation.destroy()
                },
                click: function (e) {
                    var t, i = this,
                        r = i.navigation,
                        a = r.$nextEl,
                        s = r.$prevEl;
                    !i.params.navigation.hideOnClick || n(e.target).is(s) || n(e.target).is(a) || (a ? t = a.hasClass(i.params.navigation.hiddenClass) : s && (t = s.hasClass(i.params.navigation.hiddenClass)), !0 === t ? i.emit("navigationShow", i) : i.emit("navigationHide", i), a && a.toggleClass(i.params.navigation.hiddenClass), s && s.toggleClass(i.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function (e) {
                        return e
                    },
                    formatFractionTotal: function (e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function () {
                var e = this;
                u.extend(e, {
                    pagination: {
                        init: q.init.bind(e),
                        render: q.render.bind(e),
                        update: q.update.bind(e),
                        destroy: q.destroy.bind(e),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function () {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function () {
                    this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                },
                snapIndexChange: function () {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function () {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function () {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function () {
                    this.pagination.destroy()
                },
                click: function (e) {
                    var t = this;
                    t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !n(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass))
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function () {
                var e = this;
                u.extend(e, {
                    scrollbar: {
                        init: B.init.bind(e),
                        destroy: B.destroy.bind(e),
                        updateSize: B.updateSize.bind(e),
                        setTranslate: B.setTranslate.bind(e),
                        setTransition: B.setTransition.bind(e),
                        enableDraggable: B.enableDraggable.bind(e),
                        disableDraggable: B.disableDraggable.bind(e),
                        setDragPosition: B.setDragPosition.bind(e),
                        onDragStart: B.onDragStart.bind(e),
                        onDragMove: B.onDragMove.bind(e),
                        onDragEnd: B.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function () {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function () {
                    this.scrollbar.updateSize()
                },
                resize: function () {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function () {
                    this.scrollbar.updateSize()
                },
                setTranslate: function () {
                    this.scrollbar.setTranslate()
                },
                setTransition: function (e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function () {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function () {
                u.extend(this, {
                    parallax: {
                        setTransform: R.setTransform.bind(this),
                        setTranslate: R.setTranslate.bind(this),
                        setTransition: R.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                init: function () {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTranslate: function () {
                    this.params.parallax.enabled && this.parallax.setTranslate()
                },
                setTransition: function (e) {
                    this.params.parallax.enabled && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function () {
                var e = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
                    t[i] = X[i].bind(e)
                }), u.extend(e, {
                    zoom: t
                });
                var i = 1;
                Object.defineProperty(e.zoom, "scale", {
                    get: function () {
                        return i
                    },
                    set: function (t) {
                        if (i !== t) {
                            var n = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                                r = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                            e.emit("zoomChange", t, n, r)
                        }
                        i = t
                    }
                })
            },
            on: {
                init: function () {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function () {
                    this.zoom.disable()
                },
                touchStart: function (e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function (e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function (e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function () {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function () {
                u.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: F.load.bind(this),
                        loadInSlide: F.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function () {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function () {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function () {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function () {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function () {
                    var e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd: function () {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function () {
                var e = this;
                u.extend(e, {
                    controller: {
                        control: e.params.controller.control,
                        getInterpolateFunction: G.getInterpolateFunction.bind(e),
                        setTranslate: G.setTranslate.bind(e),
                        setTransition: G.setTransition.bind(e)
                    }
                })
            },
            on: {
                update: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function (e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function (e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function () {
                var e = this;
                u.extend(e, {
                    a11y: {
                        liveRegion: n('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(V).forEach(function (t) {
                    e.a11y[t] = V[t].bind(e)
                })
            },
            on: {
                init: function () {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function () {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function () {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function () {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function () {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function () {
                var e = this;
                u.extend(e, {
                    history: {
                        init: W.init.bind(e),
                        setHistory: W.setHistory.bind(e),
                        setHistoryPopState: W.setHistoryPopState.bind(e),
                        scrollToSlide: W.scrollToSlide.bind(e),
                        destroy: W.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function () {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function () {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function () {
                var e = this;
                u.extend(e, {
                    hashNavigation: {
                        initialized: !1,
                        init: Y.init.bind(e),
                        destroy: Y.destroy.bind(e),
                        setHash: Y.setHash.bind(e),
                        onHashCange: Y.onHashCange.bind(e)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function () {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function () {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function () {
                var e = this;
                u.extend(e, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: _.run.bind(e),
                        start: _.start.bind(e),
                        stop: _.stop.bind(e),
                        pause: _.pause.bind(e),
                        onTransitionEnd: function (t) {
                            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function () {
                    this.params.autoplay.enabled && this.autoplay.start()
                },
                beforeTransitionStart: function (e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function () {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                destroy: function () {
                    this.autoplay.running && this.autoplay.stop()
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function () {
                u.extend(this, {
                    fadeEffect: {
                        setTranslate: U.setTranslate.bind(this),
                        setTransition: U.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        u.extend(e.params, t), u.extend(e.originalParams, t)
                    }
                },
                setTranslate: function () {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function (e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function () {
                u.extend(this, {
                    cubeEffect: {
                        setTranslate: K.setTranslate.bind(this),
                        setTransition: K.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        u.extend(e.params, t), u.extend(e.originalParams, t)
                    }
                },
                setTranslate: function () {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function (e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function () {
                u.extend(this, {
                    flipEffect: {
                        setTranslate: Q.setTranslate.bind(this),
                        setTransition: Q.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        u.extend(e.params, t), u.extend(e.originalParams, t)
                    }
                },
                setTranslate: function () {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function (e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function () {
                u.extend(this, {
                    coverflowEffect: {
                        setTranslate: J.setTranslate.bind(this),
                        setTransition: J.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function () {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function (e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function () {
                u.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: Z.init.bind(this),
                        update: Z.update.bind(this),
                        onThumbClick: Z.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    var e = this.params.thumbs;
                    e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function () {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update: function () {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize: function () {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function () {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function (e) {
                    var t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy: function () {
                    var e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
    return void 0 === k.use && (k.use = k.Class.use, k.installModule = k.Class.installModule), k.use(ee), k
}), $(document).ready(function () {
    var e = $(window).width(),
        t = $(window).height(),
        i = $(".mobile_overlay"),
        n = $(".mobile_menu"),
        r = $(".mobile_burger");
    r.on("click", function () {
        r.toggleClass("close-menu"), n.toggleClass("fade-in"), i.toggleClass("scale-in"), $("body").toggleClass("overflow-y-hide")
    }), $(".toggle-proscons").on("click", function (e) {
        e.preventDefault(), $(this).toggleClass("toggled").parents(".partner").find(".pc_proscons").slideToggle(400)
    }), $(".toogle-question").on("click", function () {
        var e = $(this).parent(".faq_question");
        e.siblings().removeClass("toggled").find(".paragraphs").slideUp(400), e.toggleClass("toggled").find(".paragraphs").slideToggle(400)
    }), $(".toggle-content").on("click", function (e) {
        e.preventDefault();
        var t = $(".content .paragraphs").toggleClass("truncated");
        t.animate({
            height: t.hasClass("truncated") ? "330px" : t.children("div").height() + "px"
        }, 200), $(this).find("span").slideToggle(0)
    }), $(".toggle-disclosure").on("click", function (e) {
        e.preventDefault(), $(".disclosure span").slideToggle(0)
    }), $(".partner .hint").each(function () {
        var e = $(this);
        setTimeout(function () {
            e.addClass("active")
        }, 2e3)
    }), $(".site-info .hint").on("mouseenter mouseleave", function () {
        $(this).toggleClass("active inactive")
    }), $(".overlay .hint").on("click", function (e) {
        $(e.target).is(".hint") && $(this).toggleClass("active inactive"), $(this).parents(".overlay").on("mouseleave", function () {
            $(this).find(".hint").removeClass("active").addClass("inactive")
        })
    }), $(".contact-form").on("submit", function (e) {
        e.preventDefault(), $(this).slideUp(400).next().slideDown(400)
    }), new Swiper(".aside_partners .swiper-container", {
        effect: "fade",
        fadeEffect: {
            crossFade: !0
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }), new Swiper(".aside_articles .swiper-container", {
        effect: "fade",
        fadeEffect: {
            crossFade: !0
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    }), new Swiper(".mobile_articles .swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: !0,
        loop: !0,
        loopedSlides: $("aside").data("articles-count")
    });
    var a = new Swiper(".how-it-works .swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: !1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            768: {
                slidesPerView: "auto",
                centeredSlides: !0
            }
        }
    });
    $("p").each(function () {
        var e = $(this).html();
        "&nbsp;" != e && "" != e || $(this).remove()
    }), $(window).on("welcome resize", function () {
        e = $(this).width(), t = $(this).height();
        var n = 2 * Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2));
        i.children("span").css({
            height: n + "px",
            width: n + "px",
            top: -n / 2 + "px",
            left: -n / 2 + "px"
        }), a.simulateTouch = e < 768, a.allowTouchMove = e < 768
    }).trigger("welcome")
});