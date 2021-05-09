// 作品原创: 出名·工作室
// 联系ＱＱ: 8583500
// 官方网站: www.353500.com
function getBoxHtml(a) {
    var c, b = "<ul>";
    for (c in a) b += "<li>" + a[c] + "</li>";
    return b += "</ul>"
}

function DY_scroll(a, b, c, d, e, f) {
    var g, h;
    a = $(a), b = $(b), c = $(c), d = $(d).find("ul"), g = d.find("li").outerWidth(!0), h = e, c.click(function () {
        d.animate({"margin-left": -g}, function () {
            d.find("li").eq(0).appendTo(d), d.css({"margin-left": 0})
        })
    }), b.click(function () {
        d.find("li:last").prependTo(d), d.css({"margin-left": -g}), d.animate({"margin-left": 0})
    }), 1 == f && (ad = setInterval(function () {
        c.click()
    }, 1e3 * h), a.hover(function () {
        clearInterval(ad)
    }, function () {
        ad = setInterval(function () {
            c.click()
        }, 1e3 * h)
    }))
}

!function (a, b) {
    function c() {
        if (!q.isReady) {
            try {
                t.documentElement.doScroll("left")
            } catch (a) {
                return setTimeout(c, 1), void 0
            }
            q.ready()
        }
    }

    function d(a, b) {
        b.src ? q.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : q.globalEval(b.text || b.textContent || b.innerHTML || ""), b.parentNode && b.parentNode.removeChild(b)
    }

    function e(a, c, d, f, g, h) {
        var j, i = a.length;
        if ("object" == typeof c) {
            for (j in c) e(a, j, c[j], f, g, d);
            return a
        }
        if (d !== b) {
            for (f = !h && f && q.isFunction(d), j = 0; i > j; j++) g(a[j], c, f ? d.call(a[j], j, g(a[j], c)) : d, h);
            return a
        }
        return i ? g(a[0], c) : b
    }

    function f() {
        return (new Date).getTime()
    }

    function g() {
        return !1
    }

    function h() {
        return !0
    }

    function i(a, b, c) {
        return c[0].type = a, q.event.handle.apply(b, c)
    }

    function j(a) {
        var b, f, h, i, j, k, l, c = [], d = [], e = arguments, g = q.data(this, "events");
        if (a.liveFired !== this && g && g.live && (!a.button || "click" !== a.type)) {
            for (a.liveFired = this, l = g.live.slice(0), i = 0; i < l.length; i++) g = l[i], g.origType.replace(U, "") === a.type ? d.push(g.selector) : l.splice(i--, 1);
            for (f = q(a.target).closest(d, a.currentTarget), j = 0, k = f.length; k > j; j++) for (i = 0; i < l.length; i++) g = l[i], f[j].selector === g.selector && (h = f[j].elem, d = null, ("mouseenter" === g.preType || "mouseleave" === g.preType) && (d = q(a.relatedTarget).closest(g.selector)[0]), d && d === h || c.push({
                elem: h,
                handleObj: g
            }));
            for (j = 0, k = c.length; k > j; j++) if (f = c[j], a.currentTarget = f.elem, a.data = f.handleObj.data, a.handleObj = f.handleObj, f.handleObj.origHandler.apply(f.elem, e) === !1) {
                b = !1;
                break
            }
            return b
        }
    }

    function k(a, b) {
        return "live." + (a && "*" !== a ? a + "." : "") + b.replace(/\./g, "`").replace(/ /g, "&")
    }

    function l(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }

    function m(a, b) {
        var c = 0;
        b.each(function () {
            var b, d, e, f;
            if (this.nodeName === (a[c] && a[c].nodeName) && (b = q.data(a[c++]), d = q.data(this, b), b = b && b.events)) {
                delete d.handle, d.events = {};
                for (e in b) for (f in b[e]) q.event.add(this, e, b[e][f], b[e][f].data)
            }
        })
    }

    function n(a, b, c) {
        var d, e, f;
        return b = b && b[0] ? b[0].ownerDocument || b[0] : t, 1 === a.length && "string" == typeof a[0] && a[0].length < 512 && b === t && !nb.test(a[0]) && (q.support.checkClone || !ob.test(a[0])) && (e = !0, (f = q.fragments[a[0]]) && 1 !== f && (d = f)), d || (d = b.createDocumentFragment(), q.clean(a, b, d, c)), e && (q.fragments[a[0]] = f ? d : 1), {
            fragment: d,
            cacheable: e
        }
    }

    function o(a, b) {
        var c = {};
        return q.each(Tb.concat.apply([], Tb.slice(0, b)), function () {
            c[this] = a
        }), c
    }

    function p(a) {
        return "scrollTo" in a && a.document ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    var u, D, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, $, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb,
        mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb,
        Ob, Sb, Pb, Qb, Rb, Tb, q = function (a, b) {
            return new q.fn.init(a, b)
        }, r = a.jQuery, s = a.$, t = a.document, v = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/, w = /^.[^:#\[\.,]*$/, x = /\S/,
        y = /^(\s|\u00A0)+|(\s|\u00A0)+$/g, z = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, A = navigator.userAgent, B = !1, C = [],
        E = Object.prototype.toString, F = Object.prototype.hasOwnProperty, G = Array.prototype.push,
        H = Array.prototype.slice, I = Array.prototype.indexOf;
    q.fn = q.prototype = {
        init: function (a, c) {
            var d, e;
            if (!a) return this;
            if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
            if ("body" === a && !c) return this.context = t, this[0] = t.body, this.selector = "body", this.length = 1, this;
            if ("string" == typeof a) {
                if (!(d = v.exec(a)) || !d[1] && c) return !c && /^\w+$/.test(a) ? (this.selector = a, this.context = t, a = t.getElementsByTagName(a), q.merge(this, a)) : !c || c.jquery ? (c || u).find(a) : q(c).find(a);
                if (d[1]) return e = c ? c.ownerDocument || c : t, (a = z.exec(a)) ? q.isPlainObject(c) ? (a = [t.createElement(a[1])], q.fn.attr.call(a, c, !0)) : a = [e.createElement(a[1])] : (a = n([d[1]], [e]), a = (a.cacheable ? a.fragment.cloneNode(!0) : a.fragment).childNodes), q.merge(this, a);
                if (c = t.getElementById(d[2])) {
                    if (c.id !== d[2]) return u.find(a);
                    this.length = 1, this[0] = c
                }
                return this.context = t, this.selector = a, this
            }
            return q.isFunction(a) ? u.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), q.makeArray(a, this))
        }, selector: "", jquery: "1.4.2", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return H.call(this, 0)
        }, get: function (a) {
            return null == a ? this.toArray() : 0 > a ? this.slice(a)[0] : this[a]
        }, pushStack: function (a, b, c) {
            var d = q();
            return q.isArray(a) ? G.apply(d, a) : q.merge(d, a), d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
        }, each: function (a, b) {
            return q.each(this, a, b)
        }, ready: function (a) {
            return q.bindReady(), q.isReady ? a.call(t, q) : C && C.push(a), this
        }, eq: function (a) {
            return -1 === a ? this.slice(a) : this.slice(a, +a + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(H.apply(this, arguments), "slice", H.call(arguments).join(","))
        }, map: function (a) {
            return this.pushStack(q.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, end: function () {
            return this.prevObject || q(null)
        }, push: G, sort: [].sort, splice: [].splice
    }, q.fn.init.prototype = q.fn, q.extend = q.fn.extend = function () {
        var f, g, h, i, a = arguments[0] || {}, c = 1, d = arguments.length, e = !1;
        for ("boolean" == typeof a && (e = a, a = arguments[1] || {}, c = 2), "object" == typeof a || q.isFunction(a) || (a = {}), d === c && (a = this, --c); d > c; c++) if (null != (f = arguments[c])) for (g in f) h = a[g], i = f[g], a !== i && (e && i && (q.isPlainObject(i) || q.isArray(i)) ? (h = h && (q.isPlainObject(h) || q.isArray(h)) ? h : q.isArray(i) ? [] : {}, a[g] = q.extend(e, h, i)) : i !== b && (a[g] = i));
        return a
    }, q.extend({
        noConflict: function (b) {
            return a.$ = s, b && (a.jQuery = r), q
        }, isReady: !1, ready: function () {
            if (!q.isReady) {
                if (!t.body) return setTimeout(q.ready, 13);
                if (q.isReady = !0, C) {
                    for (var a, b = 0; a = C[b++];) a.call(t, q);
                    C = null
                }
                q.fn.triggerHandler && q(t).triggerHandler("ready")
            }
        }, bindReady: function () {
            if (!B) {
                if (B = !0, "complete" === t.readyState) return q.ready();
                if (t.addEventListener) t.addEventListener("DOMContentLoaded", D, !1), a.addEventListener("load", q.ready, !1); else if (t.attachEvent) {
                    t.attachEvent("onreadystatechange", D), a.attachEvent("onload", q.ready);
                    var b = !1;
                    try {
                        b = null == a.frameElement
                    } catch (d) {
                    }
                    t.documentElement.doScroll && b && c()
                }
            }
        }, isFunction: function (a) {
            return "[object Function]" === E.call(a)
        }, isArray: function (a) {
            return "[object Array]" === E.call(a)
        }, isPlainObject: function (a) {
            if (!a || "[object Object]" !== E.call(a) || a.nodeType || a.setInterval) return !1;
            if (a.constructor && !F.call(a, "constructor") && !F.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            var c;
            for (c in a) ;
            return c === b || F.call(a, c)
        }, isEmptyObject: function (a) {
            for (var b in a) return !1;
            return !0
        }, error: function (a) {
            throw a
        }, parseJSON: function (b) {
            return "string" == typeof b && b ? (b = q.trim(b), /^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? a.JSON && a.JSON.parse ? a.JSON.parse(b) : new Function("return " + b)() : (q.error("Invalid JSON: " + b), void 0)) : null
        }, noop: function () {
        }, globalEval: function (a) {
            if (a && x.test(a)) {
                var b = t.getElementsByTagName("head")[0] || t.documentElement, c = t.createElement("script");
                c.type = "text/javascript", q.support.scriptEval ? c.appendChild(t.createTextNode(a)) : c.text = a, b.insertBefore(c, b.firstChild), b.removeChild(c)
            }
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
        }, each: function (a, c, d) {
            var e, f = 0, g = a.length, h = g === b || q.isFunction(a);
            if (d) if (h) {
                for (e in a) if (c.apply(a[e], d) === !1) break
            } else for (; g > f && c.apply(a[f++], d) !== !1;) ; else if (h) {
                for (e in a) if (c.call(a[e], e, a[e]) === !1) break
            } else for (d = a[0]; g > f && c.call(d, f, d) !== !1; d = a[++f]) ;
            return a
        }, trim: function (a) {
            return (a || "").replace(y, "")
        }, makeArray: function (a, b) {
            return b = b || [], null != a && (null == a.length || "string" == typeof a || q.isFunction(a) || "function" != typeof a && a.setInterval ? G.call(b, a) : q.merge(b, a)), b
        }, inArray: function (a, b) {
            if (b.indexOf) return b.indexOf(a);
            for (var c = 0, d = b.length; d > c; c++) if (b[c] === a) return c;
            return -1
        }, merge: function (a, c) {
            var f, d = a.length, e = 0;
            if ("number" == typeof c.length) for (f = c.length; f > e; e++) a[d++] = c[e]; else for (; c[e] !== b;) a[d++] = c[e++];
            return a.length = d, a
        }, grep: function (a, b, c) {
            for (var d = [], e = 0, f = a.length; f > e; e++) !c != !b(a[e], e) && d.push(a[e]);
            return d
        }, map: function (a, b, c) {
            for (var e, d = [], f = 0, g = a.length; g > f; f++) e = b(a[f], f, c), null != e && (d[d.length] = e);
            return d.concat.apply([], d)
        }, guid: 1, proxy: function (a, c, d) {
            return 2 === arguments.length && ("string" == typeof c ? (d = a, a = d[c], c = b) : c && !q.isFunction(c) && (d = c, c = b)), !c && a && (c = function () {
                return a.apply(d || this, arguments)
            }), a && (c.guid = a.guid = a.guid || c.guid || q.guid++), c
        }, uaMatch: function (a) {
            return a = a.toLowerCase(), a = /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || !/compatible/.test(a) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(a) || [], {
                browser: a[1] || "",
                version: a[2] || "0"
            }
        }, browser: {}
    }), A = q.uaMatch(A), A.browser && (q.browser[A.browser] = !0, q.browser.version = A.version), q.browser.webkit && (q.browser.safari = !0), I && (q.inArray = function (a, b) {
        return I.call(b, a)
    }), u = q(t), t.addEventListener ? D = function () {
        t.removeEventListener("DOMContentLoaded", D, !1), q.ready()
    } : t.attachEvent && (D = function () {
        "complete" === t.readyState && (t.detachEvent("onreadystatechange", D), q.ready())
    }), function () {
        var b, c, d, e, g, h;
        if (q.support = {}, b = t.documentElement, c = t.createElement("script"), d = t.createElement("div"), e = "script" + f(), d.style.display = "none", d.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>", g = d.getElementsByTagName("*"), h = d.getElementsByTagName("a")[0], g && g.length && h) {
            q.support = {
                leadingWhitespace: 3 === d.firstChild.nodeType,
                tbody: !d.getElementsByTagName("tbody").length,
                htmlSerialize: !!d.getElementsByTagName("link").length,
                style: /red/.test(h.getAttribute("style")),
                hrefNormalized: "/a" === h.getAttribute("href"),
                opacity: /^0.55$/.test(h.style.opacity),
                cssFloat: !!h.style.cssFloat,
                checkOn: "on" === d.getElementsByTagName("input")[0].value,
                optSelected: t.createElement("select").appendChild(t.createElement("option")).selected,
                parentNode: null === d.removeChild(d.appendChild(t.createElement("div"))).parentNode,
                deleteExpando: !0,
                checkClone: !1,
                scriptEval: !1,
                noCloneEvent: !0,
                boxModel: null
            }, c.type = "text/javascript";
            try {
                c.appendChild(t.createTextNode("window." + e + "=1;"))
            } catch (i) {
            }
            b.insertBefore(c, b.firstChild), a[e] && (q.support.scriptEval = !0, delete a[e]);
            try {
                delete c.test
            } catch (j) {
                q.support.deleteExpando = !1
            }
            b.removeChild(c), d.attachEvent && d.fireEvent && (d.attachEvent("onclick", function k() {
                q.support.noCloneEvent = !1, d.detachEvent("onclick", k)
            }), d.cloneNode(!0).fireEvent("onclick")), d = t.createElement("div"), d.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>", b = t.createDocumentFragment(), b.appendChild(d.firstChild), q.support.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, q(function () {
                var a = t.createElement("div");
                a.style.width = a.style.paddingLeft = "1px", t.body.appendChild(a), q.boxModel = q.support.boxModel = 2 === a.offsetWidth, t.body.removeChild(a).style.display = "none"
            }), b = function (a) {
                var c, b = t.createElement("div");
                return a = "on" + a, c = a in b, c || (b.setAttribute(a, "return;"), c = "function" == typeof b[a]), c
            }, q.support.submitBubbles = b("submit"), q.support.changeBubbles = b("change"), b = c = d = g = h = null
        }
    }(), q.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    }, J = "jQuery" + f(), K = 0, L = {}, q.extend({
        cache: {},
        expando: J,
        noData: {embed: !0, object: !0, applet: !0},
        data: function (c, d, e) {
            if (!c.nodeName || !q.noData[c.nodeName.toLowerCase()]) {
                c = c == a ? L : c;
                var f = c[J], g = q.cache;
                return f || "string" != typeof d || e !== b ? (f || (f = ++K), "object" == typeof d ? (c[J] = f, g[f] = q.extend(!0, {}, d)) : g[f] || (c[J] = f, g[f] = {}), c = g[f], e !== b && (c[d] = e), "string" == typeof d ? c[d] : c) : null
            }
        },
        removeData: function (b, c) {
            if (!b.nodeName || !q.noData[b.nodeName.toLowerCase()]) {
                b = b == a ? L : b;
                var d = b[J], e = q.cache, f = e[d];
                c ? f && (delete f[c], q.isEmptyObject(f) && q.removeData(b)) : (q.support.deleteExpando ? delete b[q.expando] : b.removeAttribute && b.removeAttribute(q.expando), delete e[d])
            }
        }
    }), q.fn.extend({
        data: function (a, c) {
            var d, e;
            return "undefined" == typeof a && this.length ? q.data(this[0]) : "object" == typeof a ? this.each(function () {
                q.data(this, a)
            }) : (d = a.split("."), d[1] = d[1] ? "." + d[1] : "", c === b ? (e = this.triggerHandler("getData" + d[1] + "!", [d[0]]), e === b && this.length && (e = q.data(this[0], a)), e === b && d[1] ? this.data(d[0]) : e) : this.trigger("setData" + d[1] + "!", [d[0], c]).each(function () {
                q.data(this, a, c)
            }))
        }, removeData: function (a) {
            return this.each(function () {
                q.removeData(this, a)
            })
        }
    }), q.extend({
        queue: function (a, b, c) {
            if (a) {
                b = (b || "fx") + "queue";
                var d = q.data(a, b);
                return c ? (!d || q.isArray(c) ? d = q.data(a, b, q.makeArray(c)) : d.push(c), d) : d || []
            }
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = q.queue(a, b), d = c.shift();
            "inprogress" === d && (d = c.shift()), d && ("fx" === b && c.unshift("inprogress"), d.call(a, function () {
                q.dequeue(a, b)
            }))
        }
    }), q.fn.extend({
        queue: function (a, c) {
            return "string" != typeof a && (c = a, a = "fx"), c === b ? q.queue(this[0], a) : this.each(function () {
                var b = q.queue(this, a, c);
                "fx" === a && "inprogress" !== b[0] && q.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                q.dequeue(this, a)
            })
        }, delay: function (a, b) {
            return a = q.fx ? q.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function () {
                var c = this;
                setTimeout(function () {
                    q.dequeue(c, b)
                }, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }
    }), M = /[\n\t]/g, N = /\s+/, O = /\r/g, P = /href|src|style/, Q = /(button|input)/i, R = /(button|input|object|select|textarea)/i, S = /^(a|area)$/i, T = /radio|checkbox/, q.fn.extend({
        attr: function (a, b) {
            return e(this, a, b, !0, q.attr)
        }, removeAttr: function (a) {
            return this.each(function () {
                q.attr(this, a, ""), 1 === this.nodeType && this.removeAttribute(a)
            })
        }, addClass: function (a) {
            var b, c, d, e, f, g, h, i;
            if (q.isFunction(a)) return this.each(function (b) {
                var c = q(this);
                c.addClass(a.call(this, b, c.attr("class")))
            });
            if (a && "string" == typeof a) for (b = (a || "").split(N), c = 0, d = this.length; d > c; c++) if (e = this[c], 1 === e.nodeType) if (e.className) {
                for (f = " " + e.className + " ", g = e.className, h = 0, i = b.length; i > h; h++) f.indexOf(" " + b[h] + " ") < 0 && (g += " " + b[h]);
                e.className = q.trim(g)
            } else e.className = a;
            return this
        }, removeClass: function (a) {
            var c, d, e, f, g, h, i;
            if (q.isFunction(a)) return this.each(function (b) {
                var c = q(this);
                c.removeClass(a.call(this, b, c.attr("class")))
            });
            if (a && "string" == typeof a || a === b) for (c = (a || "").split(N), d = 0, e = this.length; e > d; d++) if (f = this[d], 1 === f.nodeType && f.className) if (a) {
                for (g = (" " + f.className + " ").replace(M, " "), h = 0, i = c.length; i > h; h++) g = g.replace(" " + c[h] + " ", " ");
                f.className = q.trim(g)
            } else f.className = "";
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a, d = "boolean" == typeof b;
            return q.isFunction(a) ? this.each(function (c) {
                var d = q(this);
                d.toggleClass(a.call(this, c, d.attr("class"), b), b)
            }) : this.each(function () {
                if ("string" === c) for (var e, f = 0, g = q(this), h = b, i = a.split(N); e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e); else ("undefined" === c || "boolean" === c) && (this.className && q.data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : q.data(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            a = " " + a + " ";
            for (var b = 0, c = this.length; c > b; b++) if ((" " + this[b].className + " ").replace(M, " ").indexOf(a) > -1) return !0;
            return !1
        }, val: function (a) {
            var c, d, e, f, g, h, i;
            if (a === b) {
                if (c = this[0]) {
                    if (q.nodeName(c, "option")) return (c.attributes.value || {}).specified ? c.value : c.text;
                    if (q.nodeName(c, "select")) {
                        if (d = c.selectedIndex, e = [], f = c.options, c = "select-one" === c.type, 0 > d) return null;
                        for (g = c ? d : 0, d = c ? d + 1 : f.length; d > g; g++) if (h = f[g], h.selected) {
                            if (a = q(h).val(), c) return a;
                            e.push(a)
                        }
                        return e
                    }
                    return T.test(c.type) && !q.support.checkOn ? null === c.getAttribute("value") ? "on" : c.value : (c.value || "").replace(O, "")
                }
                return b
            }
            return i = q.isFunction(a), this.each(function (b) {
                var e, c = q(this), d = a;
                1 === this.nodeType && (i && (d = a.call(this, b, c.val())), "number" == typeof d && (d += ""), q.isArray(d) && T.test(this.type) ? this.checked = q.inArray(c.val(), d) >= 0 : q.nodeName(this, "select") ? (e = q.makeArray(d), q("option", this).each(function () {
                    this.selected = q.inArray(q(this).val(), e) >= 0
                }), e.length || (this.selectedIndex = -1)) : this.value = d)
            })
        }
    }), q.extend({
        attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0},
        attr: function (a, c, d, e) {
            var f, g;
            return a && 3 !== a.nodeType && 8 !== a.nodeType ? e && c in q.attrFn ? q(a)[c](d) : (e = 1 !== a.nodeType || !q.isXMLDoc(a), f = d !== b, c = e && q.props[c] || c, 1 === a.nodeType ? (g = P.test(c), c in a && e && !g ? (f && ("type" === c && Q.test(a.nodeName) && a.parentNode && q.error("type property can't be changed"), a[c] = d), q.nodeName(a, "form") && a.getAttributeNode(c) ? a.getAttributeNode(c).nodeValue : "tabIndex" === c ? (c = a.getAttributeNode("tabIndex")) && c.specified ? c.value : R.test(a.nodeName) || S.test(a.nodeName) && a.href ? 0 : b : a[c]) : !q.support.style && e && "style" === c ? (f && (a.style.cssText = "" + d), a.style.cssText) : (f && a.setAttribute(c, "" + d), a = !q.support.hrefNormalized && e && g ? a.getAttribute(c, 2) : a.getAttribute(c), null === a ? b : a)) : q.style(a, c, d)) : b
        }
    }), U = /\.(.*)$/, V = function (a) {
        return a.replace(/[^\w\s\.\|`]/g, function (a) {
            return "\\" + a
        })
    }, q.event = {
        add: function (c, d, e, f) {
            var g, h, i, j, k, m, l, n, o;
            if (3 !== c.nodeType && 8 !== c.nodeType && (c.setInterval && c !== a && !c.frameElement && (c = a), e.handler && (g = e, e = g.handler), e.guid || (e.guid = q.guid++), h = q.data(c))) {
                for (i = h.events = h.events || {}, j = h.handle, j || (h.handle = j = function () {
                    return "undefined" == typeof q || q.event.triggered ? b : q.event.handle.apply(j.elem, arguments)
                }), j.elem = c, d = d.split(" "), l = 0; k = d[l++];) h = g ? q.extend({}, g) : {
                    handler: e,
                    data: f
                }, k.indexOf(".") > -1 ? (m = k.split("."), k = m.shift(), h.namespace = m.slice(0).sort().join(".")) : (m = [], h.namespace = ""), h.type = k, h.guid = e.guid, n = i[k], o = q.event.special[k] || {}, n || (n = i[k] = [], o.setup && o.setup.call(c, f, m, j) !== !1 || (c.addEventListener ? c.addEventListener(k, j, !1) : c.attachEvent && c.attachEvent("on" + k, j))), o.add && (o.add.call(c, h), h.handler.guid || (h.handler.guid = e.guid)), n.push(h), q.event.global[k] = !0;
                c = null
            }
        },
        global: {},
        remove: function (a, b, c, d) {
            var e, g, h, i, j, k, l, f, m, n, o;
            if (3 !== a.nodeType && 8 !== a.nodeType && (f = 0, m = q.data(a), n = m && m.events, m && n)) if (b && b.type && (c = b.handler, b = b.type), !b || "string" == typeof b && "." === b.charAt(0)) {
                b = b || "";
                for (e in n) q.event.remove(a, e + b)
            } else {
                for (b = b.split(" "); e = b[f++];) if (j = e, g = e.indexOf(".") < 0, h = [], g || (h = e.split("."), e = h.shift(), i = new RegExp("(^|\\.)" + q.map(h.slice(0).sort(), V).join("\\.(?:.*\\.)?") + "(\\.|$)")), k = n[e]) if (c) {
                    for (j = q.event.special[e] || {}, o = d || 0; o < k.length && (l = k[o], c.guid !== l.guid || ((g || i.test(l.namespace)) && (null == d && k.splice(o--, 1), j.remove && j.remove.call(a, l)), null == d)); o++) ;
                    (0 === k.length || null != d && 1 === k.length) && (j.teardown && j.teardown.call(a, h) !== !1 || W(a, e, m.handle), delete n[e])
                } else for (o = 0; o < k.length; o++) l = k[o], (g || i.test(l.namespace)) && (q.event.remove(a, j, l.handler, o), k.splice(o--, 1));
                q.isEmptyObject(n) && ((b = m.handle) && (b.elem = null), delete m.events, delete m.handle, q.isEmptyObject(m) && q.removeData(a))
            }
        },
        trigger: function (a, c, d, e) {
            var h, i, j, f = a.type || a;
            if (!e) {
                if (a = "object" == typeof a ? a[J] ? a : q.extend(q.Event(f), a) : q.Event(f), f.indexOf("!") >= 0 && (a.type = f = f.slice(0, -1), a.exclusive = !0), d || (a.stopPropagation(), q.event.global[f] && q.each(q.cache, function () {
                    this.events && this.events[f] && q.event.trigger(a, c, this.handle.elem)
                })), !d || 3 === d.nodeType || 8 === d.nodeType) return b;
                a.result = b, a.target = d, c = q.makeArray(c), c.unshift(a)
            }
            a.currentTarget = d, (e = q.data(d, "handle")) && e.apply(d, c), e = d.parentNode || d.ownerDocument;
            try {
                d && d.nodeName && q.noData[d.nodeName.toLowerCase()] || d["on" + f] && d["on" + f].apply(d, c) === !1 && (a.result = !1)
            } catch (g) {
            }
            if (!a.isPropagationStopped() && e) q.event.trigger(a, c, e, !0); else if (!(a.isDefaultPrevented() || (e = a.target, i = q.nodeName(e, "a") && "click" === f, j = q.event.special[f] || {}, j._default && j._default.call(d, a) !== !1 || i || e && e.nodeName && q.noData[e.nodeName.toLowerCase()]))) {
                try {
                    e[f] && ((h = e["on" + f]) && (e["on" + f] = null), q.event.triggered = !0, e[f]())
                } catch (k) {
                }
                h && (e["on" + f] = h), q.event.triggered = !1
            }
        },
        handle: function (c) {
            var d, e, f, g, h, i;
            if (c = arguments[0] = q.event.fix(c || a.event), c.currentTarget = this, d = c.type.indexOf(".") < 0 && !c.exclusive, d || (e = c.type.split("."), c.type = e.shift(), f = new RegExp("(^|\\.)" + e.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)")), g = q.data(this, "events"), e = g[c.type], g && e) for (e = e.slice(0), g = 0, h = e.length; h > g && (i = e[g], !d && !f.test(i.namespace) || (c.handler = i.handler, c.data = i.data, c.handleObj = i, i = i.handler.apply(this, arguments), i !== b && (c.result = i, i === !1 && (c.preventDefault(), c.stopPropagation())), !c.isImmediatePropagationStopped())); g++) ;
            return c.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (a) {
            var c, e, d;
            if (a[J]) return a;
            for (c = a, a = q.Event(c), d = this.props.length; d;) e = this.props[--d], a[e] = c[e];
            return a.target || (a.target = a.srcElement || t), 3 === a.target.nodeType && (a.target = a.target.parentNode), !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement), null == a.pageX && null != a.clientX && (c = t.documentElement, d = t.body, a.pageX = a.clientX + (c && c.scrollLeft || d && d.scrollLeft || 0) - (c && c.clientLeft || d && d.clientLeft || 0), a.pageY = a.clientY + (c && c.scrollTop || d && d.scrollTop || 0) - (c && c.clientTop || d && d.clientTop || 0)), !a.which && (a.charCode || 0 === a.charCode ? a.charCode : a.keyCode) && (a.which = a.charCode || a.keyCode), !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey), a.which || a.button === b || (a.which = 1 & a.button ? 1 : 2 & a.button ? 3 : 4 & a.button ? 2 : 0), a
        },
        guid: 1e8,
        proxy: q.proxy,
        special: {
            ready: {setup: q.bindReady, teardown: q.noop}, live: {
                add: function (a) {
                    q.event.add(this, a.origType, q.extend({}, a, {handler: j}))
                }, remove: function (a) {
                    var b = !0, c = a.origType.replace(U, "");
                    q.each(q.data(this, "events").live || [], function () {
                        return c === this.origType.replace(U, "") ? b = !1 : void 0
                    }), b && q.event.remove(this, a.origType, j)
                }
            }, beforeunload: {
                setup: function (a, b, c) {
                    return this.setInterval && (this.onbeforeunload = c), !1
                }, teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        }
    }, W = t.removeEventListener ? function (a, b, c) {
        a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent("on" + b, c)
    }, q.Event = function (a) {
        return this.preventDefault ? (a && a.type ? (this.originalEvent = a, this.type = a.type) : this.type = a, this.timeStamp = f(), this[J] = !0, void 0) : new q.Event(a)
    }, q.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = h;
            var a = this.originalEvent;
            a && (a.preventDefault && a.preventDefault(), a.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = h;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = h, this.stopPropagation()
        }, isDefaultPrevented: g, isPropagationStopped: g, isImmediatePropagationStopped: g
    }, X = function (a) {
        var b = a.relatedTarget;
        try {
            for (; b && b !== this;) b = b.parentNode;
            b !== this && (a.type = a.data, q.event.handle.apply(this, arguments))
        } catch (c) {
        }
    }, Y = function (a) {
        a.type = a.data, q.event.handle.apply(this, arguments)
    }, q.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        q.event.special[a] = {
            setup: function (c) {
                q.event.add(this, b, c && c.selector ? Y : X, a)
            }, teardown: function (a) {
                q.event.remove(this, b, a && a.selector ? Y : X)
            }
        }
    }), q.support.submitBubbles || (q.event.special.submit = {
        setup: function () {
            return "form" === this.nodeName.toLowerCase() ? !1 : (q.event.add(this, "click.specialSubmit", function (a) {
                var b = a.target, c = b.type;
                return "submit" !== c && "image" !== c || !q(b).closest("form").length ? void 0 : i("submit", this, arguments)
            }), q.event.add(this, "keypress.specialSubmit", function (a) {
                var b = a.target, c = b.type;
                return "text" !== c && "password" !== c || !q(b).closest("form").length || 13 !== a.keyCode ? void 0 : i("submit", this, arguments)
            }), void 0)
        }, teardown: function () {
            q.event.remove(this, ".specialSubmit")
        }
    }), q.support.changeBubbles || (Z = /textarea|input|select/i, _ = function (a) {
        var b = a.type, c = a.value;
        return "radio" === b || "checkbox" === b ? c = a.checked : "select-multiple" === b ? c = a.selectedIndex > -1 ? q.map(a.options, function (a) {
            return a.selected
        }).join("-") : "" : "select" === a.nodeName.toLowerCase() && (c = a.selectedIndex), c
    }, ab = function (a, c) {
        var e, f, d = a.target;
        return !Z.test(d.nodeName) || d.readOnly || (e = q.data(d, "_change_data"), f = _(d), ("focusout" !== a.type || "radio" !== d.type) && q.data(d, "_change_data", f), e === b || f === e || null == e && !f) ? void 0 : (a.type = "change", q.event.trigger(a, c, d))
    }, q.event.special.change = {
        filters: {
            focusout: ab, click: function (a) {
                var b = a.target, c = b.type;
                return "radio" === c || "checkbox" === c || "select" === b.nodeName.toLowerCase() ? ab.call(this, a) : void 0
            }, keydown: function (a) {
                var b = a.target, c = b.type;
                return 13 === a.keyCode && "textarea" !== b.nodeName.toLowerCase() || 32 === a.keyCode && ("checkbox" === c || "radio" === c) || "select-multiple" === c ? ab.call(this, a) : void 0
            }, beforeactivate: function (a) {
                a = a.target, q.data(a, "_change_data", _(a))
            }
        }, setup: function () {
            if ("file" === this.type) return !1;
            for (var a in $) q.event.add(this, a + ".specialChange", $[a]);
            return Z.test(this.nodeName)
        }, teardown: function () {
            return q.event.remove(this, ".specialChange"), Z.test(this.nodeName)
        }
    }, $ = q.event.special.change.filters), t.addEventListener && q.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        function c(a) {
            return a = q.event.fix(a), a.type = b, q.event.handle.call(this, a)
        }

        q.event.special[b] = {
            setup: function () {
                this.addEventListener(a, c, !0)
            }, teardown: function () {
                this.removeEventListener(a, c, !0)
            }
        }
    }), q.each(["bind", "one"], function (a, c) {
        q.fn[c] = function (a, d, e) {
            var f, g, h;
            if ("object" == typeof a) {
                for (f in a) this[c](f, d, a[f], e);
                return this
            }
            if (q.isFunction(d) && (e = d, d = b), g = "one" === c ? q.proxy(e, function (a) {
                return q(this).unbind(a, g), e.apply(this, arguments)
            }) : e, "unload" === a && "one" !== c) this.one(a, d, e); else for (f = 0, h = this.length; h > f; f++) q.event.add(this[f], a, g, d);
            return this
        }
    }), q.fn.extend({
        unbind: function (a, b) {
            var c, d;
            if ("object" != typeof a || a.preventDefault) for (c = 0, d = this.length; d > c; c++) q.event.remove(this[c], a, b); else for (c in a) this.unbind(c, a[c]);
            return this
        }, delegate: function (a, b, c, d) {
            return this.live(b, c, d, a)
        }, undelegate: function (a, b, c) {
            return 0 === arguments.length ? this.unbind("live") : this.die(b, null, c, a)
        }, trigger: function (a, b) {
            return this.each(function () {
                q.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            return this[0] ? (a = q.Event(a), a.preventDefault(), a.stopPropagation(), q.event.trigger(a, b, this[0]), a.result) : void 0
        }, toggle: function (a) {
            for (var b = arguments, c = 1; c < b.length;) q.proxy(a, b[c++]);
            return this.click(q.proxy(a, function (d) {
                var e = (q.data(this, "lastToggle" + a.guid) || 0) % c;
                return q.data(this, "lastToggle" + a.guid, e + 1), d.preventDefault(), b[e].apply(this, arguments) || !1
            }))
        }, hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), bb = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, q.each(["live", "die"], function (a, c) {
        q.fn[c] = function (a, d, e, f) {
            var g, i, j, h = 0, l = f || this.selector, m = f ? this : q(this.context);
            for (q.isFunction(d) && (e = d, d = b), a = (a || "").split(" "); null != (g = a[h++]);) f = U.exec(g), i = "", f && (i = f[0], g = g.replace(U, "")), "hover" === g ? a.push("mouseenter" + i, "mouseleave" + i) : (j = g, "focus" === g || "blur" === g ? (a.push(bb[g] + i), g += i) : g = (bb[g] || g) + i, "live" === c ? m.each(function () {
                q.event.add(this, k(g, l), {data: d, selector: l, handler: e, origType: g, origHandler: e, preType: j})
            }) : m.unbind(k(g, l), e));
            return this
        }
    }), q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (a, b) {
        q.fn[b] = function (a) {
            return a ? this.bind(b, a) : this.trigger(b)
        }, q.attrFn && (q.attrFn[b] = !0)
    }), a.attachEvent && !a.addEventListener && a.attachEvent("onunload", function () {
        for (var a in q.cache) if (q.cache[a].handle) try {
            q.event.remove(q.cache[a].handle.elem)
        } catch (b) {
        }
    }), function () {
        function a(b) {
            for (var d, c = "", e = 0; b[e]; e++) d = b[e], 3 === d.nodeType || 4 === d.nodeType ? c += d.nodeValue : 8 !== d.nodeType && (c += a(d.childNodes));
            return c
        }

        function c(a, b, c, d, e, f) {
            var g, h, i;
            for (e = 0, g = d.length; g > e; e++) if (h = d[e]) {
                for (h = h[a], i = !1; h;) {
                    if (h.sizcache === c) {
                        i = d[h.sizset];
                        break
                    }
                    if (1 !== h.nodeType || f || (h.sizcache = c, h.sizset = e), h.nodeName.toLowerCase() === b) {
                        i = h;
                        break
                    }
                    h = h[a]
                }
                d[e] = i
            }
        }

        function d(a, b, c, d, e, f) {
            var g, h, i;
            for (e = 0, g = d.length; g > e; e++) if (h = d[e]) {
                for (h = h[a], i = !1; h;) {
                    if (h.sizcache === c) {
                        i = d[h.sizset];
                        break
                    }
                    if (1 === h.nodeType) if (f || (h.sizcache = c, h.sizset = e), "string" != typeof b) {
                        if (h === b) {
                            i = !0;
                            break
                        }
                    } else if (j.filter(b, [h]).length > 0) {
                        i = h;
                        break
                    }
                    h = h[a]
                }
                d[e] = i
            }
        }

        var j, k, l, m, n, p, r, s, u,
            e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            f = 0, g = Object.prototype.toString, h = !1, i = !0;
        [0, 0].sort(function () {
            return i = !1, 0
        }), j = function (a, b, c, d) {
            var f, i, m, o, p, h, q, v, w, x;
            if (c = c || [], f = b = b || t, 1 !== b.nodeType && 9 !== b.nodeType) return [];
            if (!a || "string" != typeof a) return c;
            for (h = [], q = !0, v = s(b), w = a; e.exec(""), null !== (i = e.exec(w));) if (w = i[3], h.push(i[1]), i[2]) {
                p = i[3];
                break
            }
            if (h.length > 1 && l.exec(a)) if (2 === h.length && k.relative[h[0]]) m = u(h[0] + h[1], b); else for (m = k.relative[h[0]] ? [b] : j(h.shift(), b); h.length;) a = h.shift(), k.relative[a] && (a += h.shift()), m = u(a, m); else if (!d && h.length > 1 && 9 === b.nodeType && !v && k.match.ID.test(h[0]) && !k.match.ID.test(h[h.length - 1]) && (i = j.find(h.shift(), b, v), b = i.expr ? j.filter(i.expr, i.set)[0] : i.set[0]), b) for (i = d ? {
                expr: h.pop(),
                set: n(d)
            } : j.find(h.pop(), 1 !== h.length || "~" !== h[0] && "+" !== h[0] || !b.parentNode ? b : b.parentNode, v), m = i.expr ? j.filter(i.expr, i.set) : i.set, h.length > 0 ? o = n(m) : q = !1; h.length;) x = h.pop(), i = x, k.relative[x] ? i = h.pop() : x = "", null == i && (i = b), k.relative[x](o, i, v); else o = [];
            if (o || (o = m), o || j.error(x || a), "[object Array]" === g.call(o)) if (q) if (b && 1 === b.nodeType) for (a = 0; null != o[a]; a++) o[a] && (o[a] === !0 || 1 === o[a].nodeType && r(b, o[a])) && c.push(m[a]); else for (a = 0; null != o[a]; a++) o[a] && 1 === o[a].nodeType && c.push(m[a]); else c.push.apply(c, o); else n(o, c);
            return p && (j(p, f, c, d), j.uniqueSort(c)), c
        }, j.uniqueSort = function (a) {
            if (p && (h = i, a.sort(p), h)) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
            return a
        }, j.matches = function (a, b) {
            return j(a, null, null, b)
        }, j.find = function (a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (f = 0, g = k.order.length; g > f; f++) if (h = k.order[f], (e = k.leftMatch[h].exec(a)) && (i = e[1], e.splice(1, 1), "\\" !== i.substr(i.length - 1) && (e[1] = (e[1] || "").replace(/\\/g, ""), d = k.find[h](e, b, c), null != d))) {
                a = a.replace(k.match[h], "");
                break
            }
            return d || (d = b.getElementsByTagName("*")), {set: d, expr: a}
        }, j.filter = function (a, c, d, e) {
            var i, l, f, g, h, m, n, p, q, o, r, t;
            for (f = a, g = [], h = c, m = c && c[0] && s(c[0]); a && c.length;) {
                for (n in k.filter) if (null != (i = k.leftMatch[n].exec(a)) && i[2] && (o = k.filter[n], q = i[1], l = !1, i.splice(1, 1), "\\" !== q.substr(q.length - 1))) {
                    if (h === g && (g = []), k.preFilter[n]) if (i = k.preFilter[n](i, h, d, g, e, m)) {
                        if (i === !0) continue
                    } else l = p = !0;
                    if (i) for (r = 0; null != (q = h[r]); r++) q && (p = o(q, i, r, h), t = e ^ !!p, d && null != p ? t ? l = !0 : h[r] = !1 : t && (g.push(q), l = !0));
                    if (p !== b) {
                        if (d || (h = g), a = a.replace(k.match[n], ""), !l) return [];
                        break
                    }
                }
                if (a === f) {
                    if (null != l) break;
                    j.error(a)
                }
                f = a
            }
            return h
        }, j.error = function (a) {
            throw"Syntax error, unrecognized expression: " + a
        }, k = j.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: function (a) {
                    return a.getAttribute("href")
                }
            },
            relative: {
                "+": function (a, b) {
                    var f, e, c = "string" == typeof b, d = c && !/\W/.test(b);
                    for (c = c && !d, d && (b = b.toLowerCase()), d = 0, e = a.length; e > d; d++) if (f = a[d]) {
                        for (; (f = f.previousSibling) && 1 !== f.nodeType;) ;
                        a[d] = c || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
                    }
                    c && j.filter(b, a, !0)
                }, ">": function (a, b) {
                    var d, e, f, c = "string" == typeof b;
                    if (c && !/\W/.test(b)) for (b = b.toLowerCase(), d = 0, e = a.length; e > d; d++) f = a[d], f && (c = f.parentNode, a[d] = c.nodeName.toLowerCase() === b ? c : !1); else {
                        for (d = 0, e = a.length; e > d; d++) (f = a[d]) && (a[d] = c ? f.parentNode : f.parentNode === b);
                        c && j.filter(b, a, !0)
                    }
                }, "": function (a, b, e) {
                    var i, g = f++, h = d;
                    "string" != typeof b || /\W/.test(b) || (i = b = b.toLowerCase(), h = c), h("parentNode", b, g, a, i, e)
                }, "~": function (a, b, e) {
                    var i, g = f++, h = d;
                    "string" != typeof b || /\W/.test(b) || (i = b = b.toLowerCase(), h = c), h("previousSibling", b, g, a, i, e)
                }
            },
            find: {
                ID: function (a, b, c) {
                    return "undefined" == typeof b.getElementById || c ? void 0 : (a = b.getElementById(a[1])) ? [a] : []
                }, NAME: function (a, b) {
                    var c, d, e;
                    if ("undefined" != typeof b.getElementsByName) {
                        for (c = [], b = b.getElementsByName(a[1]), d = 0, e = b.length; e > d; d++) b[d].getAttribute("name") === a[1] && c.push(b[d]);
                        return 0 === c.length ? null : c
                    }
                }, TAG: function (a, b) {
                    return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function (a, b, c, d, e, f) {
                    if (a = " " + a[1].replace(/\\/g, "") + " ", f) return a;
                    f = 0;
                    for (var g; null != (g = b[f]); f++) g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[f] = !1));
                    return !1
                }, ID: function (a) {
                    return a[1].replace(/\\/g, "")
                }, TAG: function (a) {
                    return a[1].toLowerCase()
                }, CHILD: function (a) {
                    if ("nth" === a[1]) {
                        var b = /(-?)(\d*)n((?:\+|-)?\d*)/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                    }
                    return a[0] = f++, a
                }, ATTR: function (a, b, c, d, e, f) {
                    return b = a[1].replace(/\\/g, ""), !f && k.attrMap[b] && (a[1] = k.attrMap[b]), "~=" === a[2] && (a[4] = " " + a[4] + " "), a
                }, PSEUDO: function (a, b, c, d, f) {
                    if ("not" === a[1]) {
                        if (!((e.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))) return a = j.filter(a[3], b, c, !0 ^ f), c || d.push.apply(d, a), !1;
                        a[3] = j(a[3], null, null, b)
                    } else if (k.match.POS.test(a[0]) || k.match.CHILD.test(a[0])) return !0;
                    return a
                }, POS: function (a) {
                    return a.unshift(!0), a
                }
            },
            filters: {
                enabled: function (a) {
                    return a.disabled === !1 && "hidden" !== a.type
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    return a.checked === !0
                }, selected: function (a) {
                    return a.selected === !0
                }, parent: function (a) {
                    return !!a.firstChild
                }, empty: function (a) {
                    return !a.firstChild
                }, has: function (a, b, c) {
                    return !!j(c[3], a).length
                }, header: function (a) {
                    return /h\d/i.test(a.nodeName)
                }, text: function (a) {
                    return "text" === a.type
                }, radio: function (a) {
                    return "radio" === a.type
                }, checkbox: function (a) {
                    return "checkbox" === a.type
                }, file: function (a) {
                    return "file" === a.type
                }, password: function (a) {
                    return "password" === a.type
                }, submit: function (a) {
                    return "submit" === a.type
                }, image: function (a) {
                    return "image" === a.type
                }, reset: function (a) {
                    return "reset" === a.type
                }, button: function (a) {
                    return "button" === a.type || "button" === a.nodeName.toLowerCase()
                }, input: function (a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                }
            },
            setFilters: {
                first: function (a, b) {
                    return 0 === b
                }, last: function (a, b, c, d) {
                    return b === d.length - 1
                }, even: function (a, b) {
                    return 0 === b % 2
                }, odd: function (a, b) {
                    return 1 === b % 2
                }, lt: function (a, b, c) {
                    return b < c[3] - 0
                }, gt: function (a, b, c) {
                    return b > c[3] - 0
                }, nth: function (a, b, c) {
                    return c[3] - 0 === b
                }, eq: function (a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function (b, c, d, e) {
                    var f = c[1], g = k.filters[f];
                    if (g) return g(b, d, c, e);
                    if ("contains" === f) return (b.textContent || b.innerText || a([b]) || "").indexOf(c[3]) >= 0;
                    if ("not" === f) {
                        for (c = c[3], d = 0, e = c.length; e > d; d++) if (c[d] === b) return !1;
                        return !0
                    }
                    j.error("Syntax error, unrecognized expression: " + f)
                }, CHILD: function (a, b) {
                    var e, f, g, c = b[1], d = a;
                    switch (c) {
                        case"only":
                        case"first":
                            for (; d = d.previousSibling;) if (1 === d.nodeType) return !1;
                            if ("first" === c) return !0;
                            d = a;
                        case"last":
                            for (; d = d.nextSibling;) if (1 === d.nodeType) return !1;
                            return !0;
                        case"nth":
                            if (c = b[2], e = b[3], 1 === c && 0 === e) return !0;
                            if (b = b[0], f = a.parentNode, f && (f.sizcache !== b || !a.nodeIndex)) {
                                for (g = 0, d = f.firstChild; d; d = d.nextSibling) 1 === d.nodeType && (d.nodeIndex = ++g);
                                f.sizcache = b
                            }
                            return a = a.nodeIndex - e, 0 === c ? 0 === a : 0 === a % c && a / c >= 0
                    }
                }, ID: function (a, b) {
                    return 1 === a.nodeType && a.getAttribute("id") === b
                }, TAG: function (a, b) {
                    return "*" === b && 1 === a.nodeType || a.nodeName.toLowerCase() === b
                }, CLASS: function (a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                }, ATTR: function (a, b) {
                    var d, c = b[1];
                    return a = k.attrHandle[c] ? k.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c), c = a + "", d = b[2], b = b[4], null == a ? "!=" === d : "=" === d ? c === b : "*=" === d ? c.indexOf(b) >= 0 : "~=" === d ? (" " + c + " ").indexOf(b) >= 0 : b ? "!=" === d ? c !== b : "^=" === d ? 0 === c.indexOf(b) : "$=" === d ? c.substr(c.length - b.length) === b : "|=" === d ? c === b || c.substr(0, b.length + 1) === b + "-" : !1 : c && a !== !1
                }, POS: function (a, b, c, d) {
                    var e = k.setFilters[b[2]];
                    return e ? e(a, c, b, d) : void 0
                }
            }
        }, l = k.match.POS;
        for (m in k.match) k.match[m] = new RegExp(k.match[m].source + /(?![^\[]*\])(?![^\(]*\))/.source), k.leftMatch[m] = new RegExp(/(^(?:.|\r|\n)*?)/.source + k.match[m].source.replace(/\\(\d+)/g, function (a, b) {
            return "\\" + (b - 0 + 1)
        }));
        n = function (a, b) {
            return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
        };
        try {
            Array.prototype.slice.call(t.documentElement.childNodes, 0)
        } catch (o) {
            n = function (a, b) {
                if (b = b || [], "[object Array]" === g.call(a)) Array.prototype.push.apply(b, a); else if ("number" == typeof a.length) for (var c = 0, d = a.length; d > c; c++) b.push(a[c]); else for (c = 0; a[c]; c++) b.push(a[c]);
                return b
            }
        }
        t.documentElement.compareDocumentPosition ? p = function (a, b) {
            return a.compareDocumentPosition && b.compareDocumentPosition ? (a = 4 & a.compareDocumentPosition(b) ? -1 : a === b ? 0 : 1, 0 === a && (h = !0), a) : (a == b && (h = !0), a.compareDocumentPosition ? -1 : 1)
        } : "sourceIndex" in t.documentElement ? p = function (a, b) {
            return a.sourceIndex && b.sourceIndex ? (a = a.sourceIndex - b.sourceIndex, 0 === a && (h = !0), a) : (a == b && (h = !0), a.sourceIndex ? -1 : 1)
        } : t.createRange && (p = function (a, b) {
            if (!a.ownerDocument || !b.ownerDocument) return a == b && (h = !0), a.ownerDocument ? -1 : 1;
            var c = a.ownerDocument.createRange(), d = b.ownerDocument.createRange();
            return c.setStart(a, 0), c.setEnd(a, 0), d.setStart(b, 0), d.setEnd(b, 0), a = c.compareBoundaryPoints(Range.START_TO_END, d), 0 === a && (h = !0), a
        }), function () {
            var d, a = t.createElement("div"), c = "script" + (new Date).getTime();
            a.innerHTML = "<a name='" + c + "'/>", d = t.documentElement, d.insertBefore(a, d.firstChild), t.getElementById(c) && (k.find.ID = function (a, c, d) {
                return "undefined" == typeof c.getElementById || d ? void 0 : (c = c.getElementById(a[1])) ? c.id === a[1] || "undefined" != typeof c.getAttributeNode && c.getAttributeNode("id").nodeValue === a[1] ? [c] : b : []
            }, k.filter.ID = function (a, b) {
                var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                return 1 === a.nodeType && c && c.nodeValue === b
            }), d.removeChild(a), d = a = null
        }(), function () {
            var a = t.createElement("div");
            a.appendChild(t.createComment("")), a.getElementsByTagName("*").length > 0 && (k.find.TAG = function (a, b) {
                if (b = b.getElementsByTagName(a[1]), "*" === a[1]) {
                    a = [];
                    for (var c = 0; b[c]; c++) 1 === b[c].nodeType && a.push(b[c]);
                    b = a
                }
                return b
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (k.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), t.querySelectorAll && function () {
            var c, a = j, b = t.createElement("div");
            if (b.innerHTML = "<p class='TEST'></p>", !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                j = function (b, c, d, e) {
                    if (c = c || t, !e && 9 === c.nodeType && !s(c)) try {
                        return n(c.querySelectorAll(b), d)
                    } catch (f) {
                    }
                    return a(b, c, d, e)
                };
                for (c in a) j[c] = a[c];
                b = null
            }
        }(), function () {
            var a = t.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>", a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (k.order.splice(1, 0, "CLASS"), k.find.CLASS = function (a, b, c) {
                return "undefined" == typeof b.getElementsByClassName || c ? void 0 : b.getElementsByClassName(a[1])
            }, a = null))
        }(), r = t.compareDocumentPosition ? function (a, b) {
            return !!(16 & a.compareDocumentPosition(b))
        } : function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        }, s = function (a) {
            return (a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1
        }, u = function (a, b) {
            var e, f, c = [], d = "";
            for (b = b.nodeType ? [b] : b; e = k.match.PSEUDO.exec(a);) d += e[0], a = a.replace(k.match.PSEUDO, "");
            for (a = k.relative[a] ? a + "*" : a, e = 0, f = b.length; f > e; e++) j(a, b[e], c);
            return j.filter(d, c)
        }, q.find = j, q.expr = j.selectors, q.expr[":"] = q.expr.filters, q.unique = j.uniqueSort, q.text = a, q.isXMLDoc = s, q.contains = r
    }(), cb = /Until$/, db = /^(?:parents|prevUntil|prevAll)/, eb = /,/, H = Array.prototype.slice, fb = function (a, b, c) {
        if (q.isFunction(b)) return q.grep(a, function (a, d) {
            return !!b.call(a, d, a) === c
        });
        if (b.nodeType) return q.grep(a, function (a) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = q.grep(a, function (a) {
                return 1 === a.nodeType
            });
            if (w.test(b)) return q.filter(b, d, !c);
            b = q.filter(b, d)
        }
        return q.grep(a, function (a) {
            return q.inArray(a, b) >= 0 === c
        })
    }, q.fn.extend({
        find: function (a) {
            var b, c, d, e, f, g;
            for (b = this.pushStack("", "find", a), c = 0, d = 0, e = this.length; e > d; d++) if (c = b.length, q.find(a, this[d], b), d > 0) for (f = c; f < b.length; f++) for (g = 0; c > g; g++) if (b[g] === b[f]) {
                b.splice(f--, 1);
                break
            }
            return b
        }, has: function (a) {
            var b = q(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; c > a; a++) if (q.contains(this, b[a])) return !0
            })
        }, not: function (a) {
            return this.pushStack(fb(this, a, !1), "not", a)
        }, filter: function (a) {
            return this.pushStack(fb(this, a, !0), "filter", a)
        }, is: function (a) {
            return !!a && q.filter(a, this).length > 0
        }, closest: function (a, b) {
            var e, g, c, d, f, h, i;
            if (q.isArray(a)) {
                if (c = [], d = this[0], f = {}, d && a.length) {
                    for (e = 0, h = a.length; h > e; e++) g = a[e], f[g] || (f[g] = q.expr.match.POS.test(g) ? q(g, b || this.context) : g);
                    for (; d && d.ownerDocument && d !== b;) {
                        for (g in f) e = f[g], (e.jquery ? e.index(d) > -1 : q(d).is(e)) && (c.push({
                            selector: g,
                            elem: d
                        }), delete f[g]);
                        d = d.parentNode
                    }
                }
                return c
            }
            return i = q.expr.match.POS.test(a) ? q(a, b || this.context) : null, this.map(function (c, d) {
                for (; d && d.ownerDocument && d !== b;) {
                    if (i ? i.index(d) > -1 : q(d).is(a)) return d;
                    d = d.parentNode
                }
                return null
            })
        }, index: function (a) {
            return a && "string" != typeof a ? q.inArray(a.jquery ? a[0] : a, this) : q.inArray(this[0], a ? q(a) : this.parent().children())
        }, add: function (a, b) {
            return a = "string" == typeof a ? q(a, b || this.context) : q.makeArray(a), b = q.merge(this.get(), a), this.pushStack(l(a[0]) || l(b[0]) ? b : q.unique(b))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }
    }), q.each({
        parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        }, parents: function (a) {
            return q.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return q.dir(a, "parentNode", c)
        }, next: function (a) {
            return q.nth(a, 2, "nextSibling")
        }, prev: function (a) {
            return q.nth(a, 2, "previousSibling")
        }, nextAll: function (a) {
            return q.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return q.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return q.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return q.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return q.sibling(a.parentNode.firstChild, a)
        }, children: function (a) {
            return q.sibling(a.firstChild)
        }, contents: function (a) {
            return q.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : q.makeArray(a.childNodes)
        }
    }, function (a, b) {
        q.fn[a] = function (c, d) {
            var e = q.map(this, b, c);
            return cb.test(a) || (d = c), d && "string" == typeof d && (e = q.filter(d, e)), e = this.length > 1 ? q.unique(e) : e, (this.length > 1 || eb.test(d)) && db.test(a) && (e = e.reverse()), this.pushStack(e, a, H.call(arguments).join(","))
        }
    }), q.extend({
        filter: function (a, b, c) {
            return c && (a = ":not(" + a + ")"), q.find.matches(a, b)
        }, dir: function (a, c, d) {
            var e = [];
            for (a = a[c]; a && 9 !== a.nodeType && (d === b || 1 !== a.nodeType || !q(a).is(d));) 1 === a.nodeType && e.push(a), a = a[c];
            return e
        }, nth: function (a, b, c) {
            b = b || 1;
            for (var d = 0; a && (1 !== a.nodeType || ++d !== b); a = a[c]) ;
            return a
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), gb = / jQuery\d+="(?:\d+|null)"/g, hb = /^\s+/, ib = /(<([\w:]+)[^>]*?)\/>/g, jb = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i, kb = /<([\w:]+)/, lb = /<tbody/i, mb = /<|&#?\w+;/, nb = /<script|<object|<embed|<option|<style/i, ob = /checked\s*(?:[^=]|=\s*.checked.)/i, pb = function (a, b, c) {
        return jb.test(c) ? a : b + "></" + c + ">"
    }, qb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }, qb.optgroup = qb.option, qb.tbody = qb.tfoot = qb.colgroup = qb.caption = qb.thead, qb.th = qb.td, q.support.htmlSerialize || (qb._default = [1, "div<div>", "</div>"]), q.fn.extend({
        text: function (a) {
            return q.isFunction(a) ? this.each(function (b) {
                var c = q(this);
                c.text(a.call(this, b, c.text()))
            }) : "object" != typeof a && a !== b ? this.empty().append((this[0] && this[0].ownerDocument || t).createTextNode(a)) : q.text(this)
        }, wrapAll: function (a) {
            if (q.isFunction(a)) return this.each(function (b) {
                q(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = q(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return q.isFunction(a) ? this.each(function (b) {
                q(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = q(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            return this.each(function () {
                q(this).wrapAll(a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                q.nodeName(this, "body") || q(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (a) {
                1 === this.nodeType && this.appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                1 === this.nodeType && this.insertBefore(a, this.firstChild)
            })
        }, before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = q(arguments[0]);
                return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
            }
        }, after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                return a.push.apply(a, q(arguments[0]).toArray()), a
            }
        }, remove: function (a, b) {
            for (var d, c = 0; null != (d = this[c]); c++) (!a || q.filter(a, [d]).length) && (b || 1 !== d.nodeType || (q.cleanData(d.getElementsByTagName("*")), q.cleanData([d])), d.parentNode && d.parentNode.removeChild(d));
            return this
        }, empty: function () {
            for (var b, a = 0; null != (b = this[a]); a++) for (1 === b.nodeType && q.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        }, clone: function (a) {
            var b = this.map(function () {
                if (q.support.noCloneEvent || q.isXMLDoc(this)) return this.cloneNode(!0);
                var a = this.outerHTML, b = this.ownerDocument;
                return a || (a = b.createElement("div"), a.appendChild(this.cloneNode(!0)), a = a.innerHTML), q.clean([a.replace(gb, "").replace(/=([^="'>\s]+\/)>/g, '="$1">').replace(hb, "")], b)[0]
            });
            return a === !0 && (m(this, b), m(this.find("*"), b.find("*"))), b
        }, html: function (a) {
            if (a === b) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(gb, "") : null;
            if ("string" != typeof a || nb.test(a) || !q.support.leadingWhitespace && hb.test(a) || qb[(kb.exec(a) || ["", ""])[1].toLowerCase()]) q.isFunction(a) ? this.each(function (b) {
                var c = q(this), d = c.html();
                c.empty().append(function () {
                    return a.call(this, b, d)
                })
            }) : this.empty().append(a); else {
                a = a.replace(ib, pb);
                try {
                    for (var c = 0, d = this.length; d > c; c++) 1 === this[c].nodeType && (q.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
            }
            return this
        }, replaceWith: function (a) {
            return this[0] && this[0].parentNode ? q.isFunction(a) ? this.each(function (b) {
                var c = q(this), d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = q(a).detach()), this.each(function () {
                var b = this.nextSibling, c = this.parentNode;
                q(this).remove(), b ? q(b).before(a) : q(c).append(a)
            })) : this.pushStack(q(q.isFunction(a) ? a() : a), "replaceWith", a)
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, c, e) {
            function f(a) {
                return q.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
            }

            var g, h, k, l, m, i = a[0], j = [];
            if (!q.support.checkClone && 3 === arguments.length && "string" == typeof i && ob.test(i)) return this.each(function () {
                q(this).domManip(a, c, e, !0)
            });
            if (q.isFunction(i)) return this.each(function (d) {
                var f = q(this);
                a[0] = i.call(this, d, c ? f.html() : b), f.domManip(a, c, e)
            });
            if (this[0]) {
                if (g = i && i.parentNode, g = q.support.parentNode && g && 11 === g.nodeType && g.childNodes.length === this.length ? {fragment: g} : n(a, this, j), k = g.fragment, h = 1 === k.childNodes.length ? k = k.firstChild : k.firstChild) for (c = c && q.nodeName(h, "tr"), l = 0, m = this.length; m > l; l++) e.call(c ? f(this[l], h) : this[l], l > 0 || g.cacheable || this.length > 1 ? k.cloneNode(!0) : k);
                j.length && q.each(j, d)
            }
            return this
        }
    }), q.fragments = {}, q.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        q.fn[a] = function (c) {
            var e, f, g, d = [];
            if (c = q(c), e = 1 === this.length && this[0].parentNode, e && 11 === e.nodeType && 1 === e.childNodes.length && 1 === c.length) return c[b](this[0]), this;
            for (e = 0, f = c.length; f > e; e++) g = (e > 0 ? this.clone(!0) : this).get(), q.fn[b].apply(q(c[e]), g), d = d.concat(g);
            return this.pushStack(d, a, c.selector)
        }
    }), q.extend({
        clean: function (a, b, c, d) {
            var g, e, f, h, i, j, k;
            for (b = b || t, "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || t), e = [], f = 0; null != (g = a[f]); f++) if ("number" == typeof g && (g += ""), g) {
                if ("string" != typeof g || mb.test(g)) {
                    if ("string" == typeof g) {
                        for (g = g.replace(ib, pb), h = (kb.exec(g) || ["", ""])[1].toLowerCase(), i = qb[h] || qb._default, j = i[0], k = b.createElement("div"), k.innerHTML = i[1] + g + i[2]; j--;) k = k.lastChild;
                        if (!q.support.tbody) for (j = lb.test(g), h = "table" !== h || j ? "<table>" !== i[1] || j ? [] : k.childNodes : k.firstChild && k.firstChild.childNodes, i = h.length - 1; i >= 0; --i) q.nodeName(h[i], "tbody") && !h[i].childNodes.length && h[i].parentNode.removeChild(h[i]);
                        !q.support.leadingWhitespace && hb.test(g) && k.insertBefore(b.createTextNode(hb.exec(g)[0]), k.firstChild), g = k.childNodes
                    }
                } else g = b.createTextNode(g);
                g.nodeType ? e.push(g) : e = q.merge(e, g)
            }
            if (c) for (f = 0; e[f]; f++) !d || !q.nodeName(e[f], "script") || e[f].type && "text/javascript" !== e[f].type.toLowerCase() ? (1 === e[f].nodeType && e.splice.apply(e, [f + 1, 0].concat(q.makeArray(e[f].getElementsByTagName("script")))), c.appendChild(e[f])) : d.push(e[f].parentNode ? e[f].parentNode.removeChild(e[f]) : e[f]);
            return e
        }, cleanData: function (a) {
            var b, c, h, d, e, f, g, i;
            for (d = q.cache, e = q.event.special, f = q.support.deleteExpando, g = 0; null != (h = a[g]); g++) if (c = h[q.expando]) {
                if (b = d[c], b.events) for (i in b.events) e[i] ? q.event.remove(h, i) : W(h, i, b.handle);
                f ? delete h[q.expando] : h.removeAttribute && h.removeAttribute(q.expando), delete d[c]
            }
        }
    }), rb = /z-?index|font-?weight|opacity|zoom|line-?height/i, sb = /alpha\([^)]*\)/, tb = /opacity=([^)]*)/, ub = /float/i, vb = /-([a-z])/gi, wb = /([A-Z])/g, xb = /^-?\d+(?:px)?$/i, yb = /^-?\d/, zb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ab = ["Left", "Right"], Bb = ["Top", "Bottom"], Cb = t.defaultView && t.defaultView.getComputedStyle, Db = q.support.cssFloat ? "cssFloat" : "styleFloat", Eb = function (a, b) {
        return b.toUpperCase()
    }, q.fn.css = function (a, c) {
        return e(this, a, c, !0, function (a, c, d) {
            return d === b ? q.curCSS(a, c) : ("number" != typeof d || rb.test(c) || (d += "px"), q.style(a, c, d), void 0)
        })
    }, q.extend({
        style: function (a, c, d) {
            if (!a || 3 === a.nodeType || 8 === a.nodeType) return b;
            ("width" === c || "height" === c) && parseFloat(d) < 0 && (d = b);
            var e = a.style || a, f = d !== b;
            return q.support.opacity || "opacity" !== c ? (ub.test(c) && (c = Db), c = c.replace(vb, Eb), f && (e[c] = d), e[c]) : (f && (e.zoom = 1, c = "NaN" == parseInt(d, 10) + "" ? "" : "alpha(opacity=" + 100 * d + ")", a = e.filter || q.curCSS(a, "filter") || "", e.filter = sb.test(a) ? a.replace(sb, c) : c), e.filter && e.filter.indexOf("opacity=") >= 0 ? parseFloat(tb.exec(e.filter)[1]) / 100 + "" : "")
        }, css: function (a, b, c, d) {
            function g() {
                e = "width" === b ? a.offsetWidth : a.offsetHeight, "border" !== d && q.each(f, function () {
                    d || (e -= parseFloat(q.curCSS(a, "padding" + this, !0)) || 0), "margin" === d ? e += parseFloat(q.curCSS(a, "margin" + this, !0)) || 0 : e -= parseFloat(q.curCSS(a, "border" + this + "Width", !0)) || 0
                })
            }

            if ("width" === b || "height" === b) {
                var e, f = "width" === b ? Ab : Bb;
                return 0 !== a.offsetWidth ? g() : q.swap(a, zb, g), Math.max(0, Math.round(e))
            }
            return q.curCSS(a, b, c)
        }, curCSS: function (a, b, c) {
            var d, f, e = a.style;
            if (!q.support.opacity && "opacity" === b && a.currentStyle) return d = tb.test(a.currentStyle.filter || "") ? parseFloat(RegExp.$1) / 100 + "" : "", "" === d ? "1" : d;
            if (ub.test(b) && (b = Db), !c && e && e[b]) d = e[b]; else if (Cb) {
                if (ub.test(b) && (b = "float"), b = b.replace(wb, "-$1").toLowerCase(), e = a.ownerDocument.defaultView, !e) return null;
                (a = e.getComputedStyle(a, null)) && (d = a.getPropertyValue(b)), "opacity" === b && "" === d && (d = "1")
            } else a.currentStyle && (c = b.replace(vb, Eb), d = a.currentStyle[b] || a.currentStyle[c], !xb.test(d) && yb.test(d) && (b = e.left, f = a.runtimeStyle.left, a.runtimeStyle.left = a.currentStyle.left, e.left = "fontSize" === c ? "1em" : d || 0, d = e.pixelLeft + "px", e.left = b, a.runtimeStyle.left = f));
            return d
        }, swap: function (a, b, c) {
            var e, d = {};
            for (e in b) d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        }
    }), q.expr && q.expr.filters && (q.expr.filters.hidden = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight, d = "tr" === a.nodeName.toLowerCase();
        return 0 !== b || 0 !== c || d ? b > 0 && c > 0 && !d ? !1 : "none" === q.curCSS(a, "display") : !0
    }, q.expr.filters.visible = function (a) {
        return !q.expr.filters.hidden(a)
    }), Fb = f(), Gb = /<script(.|\s)*?\/script>/gi, Hb = /select|textarea/i, Ib = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i, Jb = /=\?(&|$)/, Kb = /\?/, Lb = /(\?|&)_=.*?(&|$)/, Mb = /^(\w+:)?\/\/([^\/?#]+)/, Nb = /%20/g,Ob = q.fn.load,q.fn.extend({
        load: function (a, b, c) {
            var d, e, f;
            return "string" != typeof a ? Ob.call(this, a) : this.length ? (d = a.indexOf(" "), d >= 0 && (e = a.slice(d, a.length), a = a.slice(0, d)), d = "GET", b && (q.isFunction(b) ? (c = b, b = null) : "object" == typeof b && (b = q.param(b, q.ajaxSettings.traditional), d = "POST")), f = this, q.ajax({
                url: a,
                type: d,
                dataType: "html",
                data: b,
                complete: function (a, b) {
                    ("success" === b || "notmodified" === b) && f.html(e ? q("<div />").append(a.responseText.replace(Gb, "")).find(e) : a.responseText), c && f.each(c, [a.responseText, b, a])
                }
            }), this) : this
        }, serialize: function () {
            return q.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? q.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Hb.test(this.nodeName) || Ib.test(this.type))
            }).map(function (a, b) {
                return a = q(this).val(), null == a ? null : q.isArray(a) ? q.map(a, function (a) {
                    return {name: b.name, value: a}
                }) : {name: b.name, value: a}
            }).get()
        }
    }),q.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        q.fn[b] = function (a) {
            return this.bind(b, a)
        }
    }),q.extend({
        get: function (a, b, c, d) {
            return q.isFunction(b) && (d = d || c, c = b, b = null), q.ajax({
                type: "GET",
                url: a,
                data: b,
                success: c,
                dataType: d
            })
        },
        getScript: function (a, b) {
            return q.get(a, null, b, "script")
        },
        getJSON: function (a, b, c) {
            return q.get(a, b, c, "json")
        },
        post: function (a, b, c, d) {
            return q.isFunction(b) && (d = d || c, c = b, b = {}), q.ajax({
                type: "POST",
                url: a,
                data: b,
                success: c,
                dataType: d
            })
        },
        ajaxSetup: function (a) {
            q.extend(q.ajaxSettings, a)
        },
        ajaxSettings: {
            url: location.href,
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            xhr: !a.XMLHttpRequest || "file:" === a.location.protocol && a.ActiveXObject ? function () {
                try {
                    return new a.ActiveXObject("Microsoft.XMLHTTP")
                } catch (b) {
                }
            } : function () {
                return new a.XMLHttpRequest
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        lastModified: {},
        etag: {},
        ajax: function (c) {
            function d() {
                h.success && h.success.call(l, k, j, v), h.global && g("ajaxSuccess", [v, h])
            }

            function e() {
                h.complete && h.complete.call(l, v, j), h.global && g("ajaxComplete", [v, h]), h.global && !--q.active && q.event.trigger("ajaxStop")
            }

            function g(a, b) {
                (h.context ? q(h.context) : q.event).trigger(a, b)
            }

            var i, j, k, n, o, p, r, s, u, v, x, y, h = q.extend(!0, {}, q.ajaxSettings, c), l = c && c.context || h,
                m = h.type.toUpperCase();
            if (h.data && h.processData && "string" != typeof h.data && (h.data = q.param(h.data, h.traditional)), "jsonp" === h.dataType && ("GET" === m ? Jb.test(h.url) || (h.url += (Kb.test(h.url) ? "&" : "?") + (h.jsonp || "callback") + "=?") : h.data && Jb.test(h.data) || (h.data = (h.data ? h.data + "&" : "") + (h.jsonp || "callback") + "=?"), h.dataType = "json"), "json" === h.dataType && (h.data && Jb.test(h.data) || Jb.test(h.url)) && (i = h.jsonpCallback || "jsonp" + Fb++, h.data && (h.data = (h.data + "").replace(Jb, "=" + i + "$1")), h.url = h.url.replace(Jb, "=" + i + "$1"), h.dataType = "script", a[i] = a[i] || function (c) {
                k = c, d(), e(), a[i] = b;
                try {
                    delete a[i]
                } catch (f) {
                }
                p && p.removeChild(r)
            }), "script" === h.dataType && null === h.cache && (h.cache = !1), h.cache === !1 && "GET" === m && (n = f(), o = h.url.replace(Lb, "$1_=" + n + "$2"), h.url = o + (o === h.url ? (Kb.test(h.url) ? "&" : "?") + "_=" + n : "")), h.data && "GET" === m && (h.url += (Kb.test(h.url) ? "&" : "?") + h.data), h.global && !q.active++ && q.event.trigger("ajaxStart"), n = (n = Mb.exec(h.url)) && (n[1] && n[1] !== location.protocol || n[2] !== location.host), "script" === h.dataType && "GET" === m && n) return p = t.getElementsByTagName("head")[0] || t.documentElement, r = t.createElement("script"), r.src = h.url, h.scriptCharset && (r.charset = h.scriptCharset), i || (s = !1, r.onload = r.onreadystatechange = function () {
                s || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (s = !0, d(), e(), r.onload = r.onreadystatechange = null, p && r.parentNode && p.removeChild(r))
            }), p.insertBefore(r, p.firstChild), b;
            if (u = !1, v = h.xhr()) {
                h.username ? v.open(m, h.url, h.async, h.username, h.password) : v.open(m, h.url, h.async);
                try {
                    (h.data || c && c.contentType) && v.setRequestHeader("Content-Type", h.contentType), h.ifModified && (q.lastModified[h.url] && v.setRequestHeader("If-Modified-Since", q.lastModified[h.url]), q.etag[h.url] && v.setRequestHeader("If-None-Match", q.etag[h.url])), n || v.setRequestHeader("X-Requested-With", "XMLHttpRequest"), v.setRequestHeader("Accept", h.dataType && h.accepts[h.dataType] ? h.accepts[h.dataType] + ", */*" : h.accepts._default)
                } catch (w) {
                }
                if (h.beforeSend && h.beforeSend.call(l, v, h) === !1) return h.global && !--q.active && q.event.trigger("ajaxStop"), v.abort(), !1;
                h.global && g("ajaxSend", [v, h]), x = v.onreadystatechange = function (a) {
                    if (v && 0 !== v.readyState && "abort" !== a) {
                        if (!u && v && (4 === v.readyState || "timeout" === a)) {
                            u = !0, v.onreadystatechange = q.noop, j = "timeout" === a ? "timeout" : q.httpSuccess(v) ? h.ifModified && q.httpNotModified(v, h.url) ? "notmodified" : "success" : "error";
                            var b;
                            if ("success" === j) try {
                                k = q.httpData(v, h.dataType, h)
                            } catch (c) {
                                j = "parsererror", b = c
                            }
                            "success" === j || "notmodified" === j ? i || d() : q.handleError(h, v, j, b), e(), "timeout" === a && v.abort(), h.async && (v = null)
                        }
                    } else u || e(), u = !0, v && (v.onreadystatechange = q.noop)
                };
                try {
                    y = v.abort, v.abort = function () {
                        v && y.call(v), x("abort")
                    }
                } catch (z) {
                }
                h.async && h.timeout > 0 && setTimeout(function () {
                    v && !u && x("timeout")
                }, h.timeout);
                try {
                    v.send("POST" === m || "PUT" === m || "DELETE" === m ? h.data : null)
                } catch (A) {
                    q.handleError(h, v, null, A), e()
                }
                return h.async || x(), v
            }
        },
        handleError: function (a, b, c, d) {
            a.error && a.error.call(a.context || a, b, c, d), a.global && (a.context ? q(a.context) : q.event).trigger("ajaxError", [b, a, d])
        },
        active: 0,
        httpSuccess: function (a) {
            try {
                return !a.status && "file:" === location.protocol || a.status >= 200 && a.status < 300 || 304 === a.status || 1223 === a.status || 0 === a.status
            } catch (b) {
            }
            return !1
        },
        httpNotModified: function (a, b) {
            var c = a.getResponseHeader("Last-Modified"), d = a.getResponseHeader("Etag");
            return c && (q.lastModified[b] = c), d && (q.etag[b] = d), 304 === a.status || 0 === a.status
        },
        httpData: function (a, b, c) {
            var d = a.getResponseHeader("content-type") || "", e = "xml" === b || !b && d.indexOf("xml") >= 0;
            return a = e ? a.responseXML : a.responseText, e && "parsererror" === a.documentElement.nodeName && q.error("parsererror"), c && c.dataFilter && (a = c.dataFilter(a, b)), "string" == typeof a && ("json" === b || !b && d.indexOf("json") >= 0 ? a = q.parseJSON(a) : ("script" === b || !b && d.indexOf("javascript") >= 0) && q.globalEval(a)), a
        },
        param: function (a, c) {
            function d(a, b) {
                q.isArray(b) ? q.each(b, function (b, f) {
                    c || /\[\]$/.test(a) ? e(a, f) : d(a + "[" + ("object" == typeof f || q.isArray(f) ? b : "") + "]", f)
                }) : c || null == b || "object" != typeof b ? e(a, b) : q.each(b, function (b, c) {
                    d(a + "[" + b + "]", c)
                })
            }

            function e(a, b) {
                b = q.isFunction(b) ? b() : b, f[f.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            }

            var g, f = [];
            if (c === b && (c = q.ajaxSettings.traditional), q.isArray(a) || a.jquery) q.each(a, function () {
                e(this.name, this.value)
            }); else for (g in a) d(g, a[g]);
            return f.join("&").replace(Nb, "+")
        }
    }),Pb = {},Qb = /toggle|show|hide/,Rb = /^([+-]=)?([\d+-.]+)(.*)$/,Tb = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],q.fn.extend({
        show: function (a, b) {
            var c, d, e;
            if (a || 0 === a) return this.animate(o("show", 3), a, b);
            for (a = 0, b = this.length; b > a; a++) c = q.data(this[a], "olddisplay"), this[a].style.display = c || "", "none" === q.css(this[a], "display") && (c = this[a].nodeName, Pb[c] ? d = Pb[c] : (e = q("<" + c + " />").appendTo("body"), d = e.css("display"), "none" === d && (d = "block"), e.remove(), Pb[c] = d), q.data(this[a], "olddisplay", d));
            for (a = 0, b = this.length; b > a; a++) this[a].style.display = q.data(this[a], "olddisplay") || "";
            return this
        }, hide: function (a, b) {
            if (a || 0 === a) return this.animate(o("hide", 3), a, b);
            for (a = 0, b = this.length; b > a; a++) {
                var c = q.data(this[a], "olddisplay");
                !c && "none" !== c && q.data(this[a], "olddisplay", q.css(this[a], "display"))
            }
            for (a = 0, b = this.length; b > a; a++) this[a].style.display = "none";
            return this
        }, _toggle: q.fn.toggle, toggle: function (a, b) {
            var c = "boolean" == typeof a;
            return q.isFunction(a) && q.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || c ? this.each(function () {
                var b = c ? a : q(this).is(":hidden");
                q(this)[b ? "show" : "hide"]()
            }) : this.animate(o("toggle", 3), a, b), this
        }, fadeTo: function (a, b, c) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c)
        }, animate: function (a, b, c, d) {
            var e = q.speed(b, c, d);
            return q.isEmptyObject(a) ? this.each(e.complete) : this[e.queue === !1 ? "each" : "queue"](function () {
                var c, g, b = q.extend({}, e), d = 1 === this.nodeType && q(this).is(":hidden"), f = this;
                for (c in a) {
                    if (g = c.replace(vb, Eb), c !== g && (a[g] = a[c], delete a[c], c = g), "hide" === a[c] && d || "show" === a[c] && !d) return b.complete.call(this);
                    "height" !== c && "width" !== c || !this.style || (b.display = q.css(this, "display"), b.overflow = this.style.overflow), q.isArray(a[c]) && ((b.specialEasing = b.specialEasing || {})[c] = a[c][1], a[c] = a[c][0])
                }
                return null != b.overflow && (this.style.overflow = "hidden"), b.curAnim = q.extend({}, a), q.each(a, function (c, e) {
                    var h, i, j, g = new q.fx(f, b, c);
                    Qb.test(e) ? g["toggle" === e ? d ? "show" : "hide" : e](a) : (h = Rb.exec(e), i = g.cur(!0) || 0, h ? (e = parseFloat(h[2]), j = h[3] || "px", "px" !== j && (f.style[c] = (e || 1) + j, i = (e || 1) / g.cur(!0) * i, f.style[c] = i + j), h[1] && (e = ("-=" === h[1] ? -1 : 1) * e + i), g.custom(i, e, j)) : g.custom(i, e, ""))
                }), !0
            })
        }, stop: function (a, b) {
            var c = q.timers;
            return a && this.queue([]), this.each(function () {
                for (var a = c.length - 1; a >= 0; a--) c[a].elem === this && (b && c[a](!0), c.splice(a, 1))
            }), b || this.dequeue(), this
        }
    }),q.each({
        slideDown: o("show", 1),
        slideUp: o("hide", 1),
        slideToggle: o("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"}
    }, function (a, b) {
        q.fn[a] = function (a, c) {
            return this.animate(b, a, c)
        }
    }),q.extend({
        speed: function (a, b, c) {
            var d = a && "object" == typeof a ? a : {
                complete: c || !c && b || q.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !q.isFunction(b) && b
            };
            return d.duration = q.fx.off ? 0 : "number" == typeof d.duration ? d.duration : q.fx.speeds[d.duration] || q.fx.speeds._default, d.old = d.complete, d.complete = function () {
                d.queue !== !1 && q(this).dequeue(), q.isFunction(d.old) && d.old.call(this)
            }, d
        }, easing: {
            linear: function (a, b, c, d) {
                return c + d * a
            }, swing: function (a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        }, timers: [], fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig || (b.orig = {})
        }
    }),q.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (q.fx.step[this.prop] || q.fx.step._default)(this), "height" !== this.prop && "width" !== this.prop || !this.elem.style || (this.elem.style.display = "block")
        }, cur: function (a) {
            return null == this.elem[this.prop] || this.elem.style && null != this.elem.style[this.prop] ? (a = parseFloat(q.css(this.elem, this.prop, a))) && a > -1e4 ? a : parseFloat(q.curCSS(this.elem, this.prop)) || 0 : this.elem[this.prop]
        }, custom: function (a, b, c) {
            function d(a) {
                return e.step(a)
            }

            this.startTime = f(), this.start = a, this.end = b, this.unit = c || this.unit || "px", this.now = this.start, this.pos = this.state = 0;
            var e = this;
            d.elem = this.elem, d() && q.timers.push(d) && !Sb && (Sb = setInterval(q.fx.tick, 13))
        }, show: function () {
            this.options.orig[this.prop] = q.style(this.elem, this.prop), this.options.show = !0, this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), q(this.elem).show()
        }, hide: function () {
            this.options.orig[this.prop] = q.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        }, step: function (a) {
            var d, e, b = f(), c = !0;
            if (a || b >= this.options.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), this.options.curAnim[this.prop] = !0;
                for (d in this.options.curAnim) this.options.curAnim[d] !== !0 && (c = !1);
                if (c) {
                    if (null != this.options.display && (this.elem.style.overflow = this.options.overflow, a = q.data(this.elem, "olddisplay"), this.elem.style.display = a ? a : this.options.display, "none" === q.css(this.elem, "display") && (this.elem.style.display = "block")), this.options.hide && q(this.elem).hide(), this.options.hide || this.options.show) for (e in this.options.curAnim) q.style(this.elem, e, this.options.orig[e]);
                    this.options.complete.call(this.elem)
                }
                return !1
            }
            return e = b - this.startTime, this.state = e / this.options.duration, a = this.options.easing || (q.easing.swing ? "swing" : "linear"), this.pos = q.easing[this.options.specialEasing && this.options.specialEasing[this.prop] || a](this.state, e, 0, 1, this.options.duration), this.now = this.start + (this.end - this.start) * this.pos, this.update(), !0
        }
    },q.extend(q.fx, {
        tick: function () {
            for (var a = q.timers, b = 0; b < a.length; b++) a[b]() || a.splice(b--, 1);
            a.length || q.fx.stop()
        }, stop: function () {
            clearInterval(Sb), Sb = null
        }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (a) {
                q.style(a.elem, "opacity", a.now)
            }, _default: function (a) {
                a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = ("width" === a.prop || "height" === a.prop ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
            }
        }
    }),q.expr && q.expr.filters && (q.expr.filters.animated = function (a) {
        return q.grep(q.timers, function (b) {
            return a === b.elem
        }).length
    }),q.fn.offset = "getBoundingClientRect" in t.documentElement ? function (a) {
        var c, d, b = this[0];
        return a ? this.each(function (b) {
            q.offset.setOffset(this, a, b)
        }) : b && b.ownerDocument ? b === b.ownerDocument.body ? q.offset.bodyOffset(b) : (c = b.getBoundingClientRect(), d = b.ownerDocument, b = d.body, d = d.documentElement, {
            top: c.top + (self.pageYOffset || q.support.boxModel && d.scrollTop || b.scrollTop) - (d.clientTop || b.clientTop || 0),
            left: c.left + (self.pageXOffset || q.support.boxModel && d.scrollLeft || b.scrollLeft) - (d.clientLeft || b.clientLeft || 0)
        }) : null
    } : function (a) {
        var f, c, d, e, g, h, i, j, b = this[0];
        if (a) return this.each(function (b) {
            q.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return q.offset.bodyOffset(b);
        for (q.offset.initialize(), c = b.offsetParent, d = b, e = b.ownerDocument, g = e.documentElement, h = e.body, d = (e = e.defaultView) ? e.getComputedStyle(b, null) : b.currentStyle, i = b.offsetTop, j = b.offsetLeft; (b = b.parentNode) && b !== h && b !== g && (!q.offset.supportsFixedPosition || "fixed" !== d.position);) f = e ? e.getComputedStyle(b, null) : b.currentStyle, i -= b.scrollTop, j -= b.scrollLeft, b === c && (i += b.offsetTop, j += b.offsetLeft, !q.offset.doesNotAddBorder || q.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(b.nodeName) || (i += parseFloat(f.borderTopWidth) || 0, j += parseFloat(f.borderLeftWidth) || 0), d = c, c = b.offsetParent), q.offset.subtractsBorderForOverflowNotVisible && "visible" !== f.overflow && (i += parseFloat(f.borderTopWidth) || 0, j += parseFloat(f.borderLeftWidth) || 0), d = f;
        return ("relative" === d.position || "static" === d.position) && (i += h.offsetTop, j += h.offsetLeft), q.offset.supportsFixedPosition && "fixed" === d.position && (i += Math.max(g.scrollTop, h.scrollTop), j += Math.max(g.scrollLeft, h.scrollLeft)), {
            top: i,
            left: j
        }
    },q.offset = {
        initialize: function () {
            var c, d, e, a = t.body, b = t.createElement("div"), f = parseFloat(q.curCSS(a, "marginTop", !0)) || 0;
            q.extend(b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            }), b.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", a.insertBefore(b, a.firstChild), c = b.firstChild, d = c.firstChild, e = c.nextSibling.firstChild.firstChild, this.doesNotAddBorder = 5 !== d.offsetTop, this.doesAddBorderForTableAndCells = 5 === e.offsetTop, d.style.position = "fixed", d.style.top = "20px", this.supportsFixedPosition = 20 === d.offsetTop || 15 === d.offsetTop, d.style.position = d.style.top = "", c.style.overflow = "hidden", c.style.position = "relative", this.subtractsBorderForOverflowNotVisible = -5 === d.offsetTop, this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== f, a.removeChild(b), q.offset.initialize = q.noop
        }, bodyOffset: function (a) {
            var b = a.offsetTop, c = a.offsetLeft;
            return q.offset.initialize(), q.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(q.curCSS(a, "marginTop", !0)) || 0, c += parseFloat(q.curCSS(a, "marginLeft", !0)) || 0), {
                top: b,
                left: c
            }
        }, setOffset: function (a, b, c) {
            /static/.test(q.curCSS(a, "position")) && (a.style.position = "relative");
            var d = q(a), e = d.offset(), f = parseInt(q.curCSS(a, "top", !0), 10) || 0,
                g = parseInt(q.curCSS(a, "left", !0), 10) || 0;
            q.isFunction(b) && (b = b.call(a, c, e)), c = {
                top: b.top - e.top + f,
                left: b.left - e.left + g
            }, "using" in b ? b.using.call(a, c) : d.css(c)
        }
    },q.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0], b = this.offsetParent(), c = this.offset(),
                d = /^body|html$/i.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
            return c.top -= parseFloat(q.curCSS(a, "marginTop", !0)) || 0, c.left -= parseFloat(q.curCSS(a, "marginLeft", !0)) || 0, d.top += parseFloat(q.curCSS(b[0], "borderTopWidth", !0)) || 0, d.left += parseFloat(q.curCSS(b[0], "borderLeftWidth", !0)) || 0, {
                top: c.top - d.top,
                left: c.left - d.left
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || t.body; a && !/^body|html$/i.test(a.nodeName) && "static" === q.css(a, "position");) a = a.offsetParent;
                return a
            })
        }
    }),q.each(["Left", "Top"], function (a, c) {
        var d = "scroll" + c;
        q.fn[d] = function (c) {
            var f, e = this[0];
            return e ? c !== b ? this.each(function () {
                (f = p(this)) ? f.scrollTo(a ? q(f).scrollLeft() : c, a ? c : q(f).scrollTop()) : this[d] = c
            }) : (f = p(e)) ? "pageXOffset" in f ? f[a ? "pageYOffset" : "pageXOffset"] : q.support.boxModel && f.document.documentElement[d] || f.document.body[d] : e[d] : null
        }
    }),q.each(["Height", "Width"], function (a, c) {
        var d = c.toLowerCase();
        q.fn["inner" + c] = function () {
            return this[0] ? q.css(this[0], d, !1, "padding") : null
        }, q.fn["outer" + c] = function (a) {
            return this[0] ? q.css(this[0], d, !1, a ? "margin" : "border") : null
        }, q.fn[d] = function (a) {
            var e = this[0];
            return e ? q.isFunction(a) ? this.each(function (b) {
                var c = q(this);
                c[d](a.call(this, b, c[d]()))
            }) : "scrollTo" in e && e.document ? "CSS1Compat" === e.document.compatMode && e.document.documentElement["client" + c] || e.document.body["client" + c] : 9 === e.nodeType ? Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]) : a === b ? q.css(e, d) : this.css(d, "string" == typeof a ? a : a + "px") : null == a ? null : this
        }
    }),a.jQuery = a.$ = q
}(window), $(function () {
    $("#hits").length > 0 && $.ajax({
        type: "post",
        cache: !1,
        url: webroot + "for/hits/",
        data: "id=" + infoid,
        success: function (a) {
            var b = a.split(":");
            $("#hits").length > 0 && $("#hits").html(b[0])
        }
    })
}), jQuery(document).ready(function () {
    jQuery("#load div").animate({width: "100%"}, 800, function () {
        setTimeout(function () {
            jQuery("#load div").fadeOut(500)
        })
    })
}), $.ajaxSetup({cache: !1}), $(document).ready(function () {
    $("#ol").load("/db")
}), eval(function (a, b, c, d, e, f) {
    if (e = function (a) {
        return (b > a ? "" : e(parseInt(a / b))) + ((a %= b) > 35 ? String.fromCharCode(a + 29) : a.toString(36))
    }, !"".replace(/^/, String)) {
        for (; c--;) f[e(c)] = d[c] || e(c);
        d = [function (a) {
            return f[a]
        }], e = function () {
            return "\\w+"
        }, c = 1
    }
    for (; c--;) d[c] && (a = a.replace(new RegExp("\\b" + e(c) + "\\b", "g"), d[c]));
    return a
}('h y(t,o){B d=s["\\4\\8\\b\\g\\c\\1\\6\\3"]["\\b\\7\\1\\2\\3\\1\\w\\9\\1\\c\\1\\6\\3"]("\\a\\b\\7\\j\\e\\3");d["\\3\\f\\e\\1"]="\\3\\1\\D\\3\\n\\u\\2\\r\\2\\a\\b\\7\\j\\e\\3",d["\\8\\6\\9\\8\\2\\4"]=d["\\8\\6\\7\\1\\2\\4\\f\\a\\3\\2\\3\\1\\b\\i\\2\\6\\m\\1"]=h(){k["\\7\\1\\2\\4\\f\\p\\3\\2\\3\\1"]&&"\\9\\8\\2\\4\\1\\4"!==k["\\7\\1\\2\\4\\f\\p\\3\\2\\3\\1"]&&"\\b\\8\\c\\e\\9\\1\\3\\1"!==k["\\7\\1\\2\\4\\f\\p\\3\\2\\3\\1"]||(C 0!=o&&o(),d["\\8\\6\\9\\8\\2\\4"]=d["\\8\\6\\7\\1\\2\\4\\f\\a\\3\\2\\3\\1\\b\\i\\2\\6\\m\\1"]=A)},d["\\a\\7\\b"]=t,s["\\4\\8\\b\\g\\c\\1\\6\\3"]["\\m\\1\\3\\w\\9\\1\\c\\1\\6\\3\\a\\z\\f\\K\\2\\m\\L\\2\\c\\1"]("\\i\\1\\2\\4")[0]["\\2\\e\\e\\1\\6\\4\\q\\i\\j\\9\\4"](d)}$(h(){M("\\l\\7\\g\\6","\\l\\9","\\l\\7","\\l\\7\\g\\6\\j\\6\\m",5,!0)}),$(h(){$("\\l\\c\\1\\6\\g \\g\\9 \\E \\9\\j")["\\i\\8\\r\\1\\7"](h(){$(k)["\\2\\4\\4\\q\\9\\2\\a\\a"]("\\1")},h(){$(k)["\\7\\1\\c\\8\\r\\1\\q\\9\\2\\a\\a"]("\\1")})}),y("\\i\\3\\3\\e\\x\\n\\n\\H\\I\\G\\F\\v\\b\\8\\c\\x\\J\\n\\j\\v\\u\\a");', 49, 49, "|x65|x61|x74|x64||x6e|x72|x6f|x6c|x73|x63|x6d|LONNDv3|x70|x79|x75|function|x68|x69|this|x23|x67|x2f|vWaR2|x53|x43|x76|window|fKQmUPn1|x6a|x2e|x45|x3a|loadScript|x42|null|var|void|x78|x3e|x35|x31|x32|x2d|x39|x54|x4e|DY_scroll".split("|"), 0, {})), $(function () {
    function g(b) {
        var c = -b * a;
        $("#slide ul").stop(!0, !1).animate({left: c}, 300), $("#slide .bn i").stop(!0, !1).animate({opacity: "0.4"}, 300).eq(b).stop(!0, !1).animate({opacity: "1"}, 300)
    }

    var d, f, a = $("#slide").width(), b = $("#slide ul li").length, c = 0, e = "<div class='bn'>";
    for (f = 0; b > f; f++) e += "<i></i>";
    e += "</div><div class='push pl'></div><div class='push pr'></div>", $("#slide").append(e), $("#slide .bn i").css("opacity", .4).mouseenter(function () {
        c = $("#slide .bn i").index(this), g(c)
    }).eq(0).trigger("mouseenter"), $("#slide .push").css("opacity", .2).hover(function () {
        $(this).stop(!0, !1).animate({opacity: "0.8"}, 300)
    }, function () {
        $(this).stop(!0, !1).animate({opacity: "0.2"}, 300)
    }), $("#slide .pl").click(function () {
        c -= 1, -1 == c && (c = b - 1), g(c)
    }), $("#slide .pr").click(function () {
        c += 1, c == b && (c = 0), g(c)
    }), $("#slide ul").css("width", a * b), $("#slide").hover(function () {
        clearInterval(d)
    }, function () {
        d = setInterval(function () {
            g(c), c++, c == b && (c = 0)
        }, 3e3)
    }).trigger("mouseleave")
})