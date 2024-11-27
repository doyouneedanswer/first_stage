(window.webpackJsonprailwayskz = window.webpackJsonprailwayskz || []).push([
    [11], { 536: function(n, e, t) { "use strict";
            t.d(e, "b", (function() { return p })), t.d(e, "f", (function() { return h })), t.d(e, "e", (function() { return g })), t.d(e, "h", (function() { return v })), t.d(e, "a", (function() { return x })), t.d(e, "g", (function() { return w })), t.d(e, "d", (function() { return j })), t.d(e, "c", (function() { return O })), t.d(e, "i", (function() { return k })); var r = t(540),
                a = t.n(r),
                i = t(548),
                c = t(541),
                o = t(550),
                u = t(143),
                l = t(150),
                d = t.n(l),
                f = t(84),
                m = t(60),
                s = t(147),
                b = new u.a,
                p = function(n) { f.a.changeLanguage(n), b.set("i18lang", n, { path: "/", sameSite: "none", secure: !0 }), m.a.dispatch({ type: s.c, payload: n }) };

            function h(n) { var e = f.a.language.charAt(0).toUpperCase() + f.a.language.slice(1); return n && n.concat(e) }

            function g(n, e) { var t = e.charAt(0).toUpperCase() + e.slice(1); return n && n.concat(t) }

            function v(n) { var e = b.get("user"); return "string" === typeof n ? e && e.authorities && e.authorities.includes(n) : "object" === typeof n ? n.some((function(n) { return e && e.authorities && e.authorities.includes(n) })) : void 0 } var x = function(n, e) { return function() { d.a.fire({ title: f.a.t("global:areYouSure"), text: e || "", icon: "warning", showCancelButton: !0, confirmButtonColor: "#3085d6", cancelButtonColor: "#d33", confirmButtonText: f.a.t("global:yes"), cancelButtonText: f.a.t("global:no") }).then((function(e) { e.value && n() })) } },
                w = function(n, e, t) { var r = m.a.getState() && m.a.getState().menu,
                        a = r && r.companies && r.companies.children.find((function(e) { return e.id === parseInt(n) || e.code === n || t && t.parentItem && (e.id === t.parentItem.id || e.code === t.parentItem.code) || t && t.parentItem && t.parentItem.parentItem && (e.id === t.parentItem.parentItem.id || e.code === t.parentItem.parentItem.code) })); try { var i = e ? e.menuItem.parentItem.code || e.menuItem.parentItem.id : t.parentItem.code || t.parentItem.id,
                            c = e ? e.menuItem.code || e.menuItem.id : t.code || t.id; return e ? "/articles/".concat(a && n ? n : i, "/").concat(c, "/").concat(e.code || e.id) : "/articles/".concat(a ? a.code : i, "/").concat(c) } catch (o) {} },
                j = function() { var n = Object(c.a)(a.a.mark((function n(e) { var t, r, c, u, l, d, f, m, s, b; return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                                case 0:
                                    t = [].concat(Object(i.a)(e.current.getElementsByTagName("input")), Object(i.a)(e.current.getElementsByTagName("textarea"))), r = 0, c = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, u = !0, l = !1, n.prev = 5, f = Object(o.a)(t);
                                case 7:
                                    return n.next = 9, f.next();
                                case 9:
                                    return m = n.sent, u = m.done, n.next = 13, m.value;
                                case 13:
                                    if (s = n.sent, u) { n.next = 20; break } b = s; try {! function() { var n = document.querySelector("".concat(b.tagName.toLowerCase(), "[name=").concat(b.name, "]"));
                                            b.required && !b.defaultValue ? (n.parentElement.classList.add("invalid"), n.addEventListener("change", (function() { n.parentElement.classList.remove("invalid") })), r++) : "phone" === b.name && b.defaultValue && (!b.defaultValue.includes("+7") || b.defaultValue.replace(/\s/g, "").length < 12) ? (n.parentElement.classList.add("invalidPhoneNumber"), n.addEventListener("change", (function() { n.parentElement.classList.remove("invalidPhoneNumber") })), r++) : "email" === b.name && b.defaultValue && !b.defaultValue.match(c) ? (n.parentElement.classList.add("invalidEmail"), n.addEventListener("change", (function() { n.parentElement.classList.remove("invalidEmail") })), r++) : (n.removeEventListener("change", (function() { n.parentElement.classList.remove("invalid") })), n.removeEventListener("change", (function() { n.parentElement.classList.remove("invalidPhoneNumber") })), n.removeEventListener("change", (function() { n.parentElement.classList.remove("invalidEmail") }))) }() } catch (a) {}
                                case 17:
                                    u = !0, n.next = 7; break;
                                case 20:
                                    n.next = 26; break;
                                case 22:
                                    n.prev = 22, n.t0 = n.catch(5), l = !0, d = n.t0;
                                case 26:
                                    if (n.prev = 26, n.prev = 27, u || null == f.return) { n.next = 31; break } return n.next = 31, f.return();
                                case 31:
                                    if (n.prev = 31, !l) { n.next = 34; break } throw d;
                                case 34:
                                    return n.finish(31);
                                case 35:
                                    return n.finish(26);
                                case 36:
                                    return n.abrupt("return", 0 === r);
                                case 37:
                                case "end":
                                    return n.stop() } }), n, null, [
                            [5, 22, 26, 36],
                            [27, , 31, 35]
                        ]) }))); return function(e) { return n.apply(this, arguments) } }(),
                O = function(n) { var e = { "\u0430": "a", "\u0431": "b", "\u0432": "v", "\u0433": "g", "\u0434": "d", "\u0435": "e", "\u0451": "e", "\u0436": "j", "\u0437": "z", "\u0438": "i", "\u043a": "k", "\u043b": "l", "\u043c": "m", "\u043d": "n", "\u043e": "o", "\u043f": "p", "\u0440": "r", "\u0441": "s", "\u0442": "t", "\u0443": "u", "\u0444": "f", "\u0445": "h", "\u0446": "c", "\u0447": "ch", "\u0448": "sh", "\u0449": "shch", "\u044b": "y", "\u044d": "e", "\u044e": "u", "\u044f": "ya", "\u0439": "i", "\u04d9": "a", "\u0456": "i", "\u04a3": "n", "\u0493": "g", "\u04af": "u", "\u04b1": "u", "\u049b": "k", "\u04e9": "o", "\u04bb": "h" },
                        t = [];
                    n = n && n.replace(/[\u044a\u044c]+/g, "").replace(/\u0439/g, "i").replace(/ /g, "_").replace(/-/g, "").replace(/'^'/g, "").replace(/[|&z/\\#,+()$~%.'":*?!@<>{}\xab\xbb]/g, "").replace(/__/g, "_"); for (var r = 0; r < n.length; ++r) t.push(e[n[r]] || void 0 === e[n[r].toLowerCase()] && n[r] || e[n[r].toLowerCase()].replace(/^(.)/, (function(n) { return n.toUpperCase() }))); return t.join("").toLowerCase() },
                k = function(n) { return /^\d+$/.test(n) } }, 537: function(n, e, t) { "use strict";
            t.d(e, "b", (function() { return l })), t.d(e, "c", (function() { return d })), t.d(e, "a", (function() { return f })), t.d(e, "d", (function() { return m })); var r = t(106),
                a = t(68);

            function i() { var n = Object(r.a)(["\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin: 0 0 1rem;\n"]); return i = function() { return n }, n }

            function c() { var n = Object(r.a)(["\n  flex-direction: column;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0 0.5rem;\n"]); return c = function() { return n }, n }

            function o() { var n = Object(r.a)(["\n  margin: 0 -0.5rem;\n  overflow: auto;\n"]); return o = function() { return n }, n }

            function u() { var n = Object(r.a)(["\n  display: flex;\n  flex-direction: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  flex-wrap: ", ";\n  width: ", ";\n  margin: ", ";\n  margin-bottom: ", ";\n  margin-top: ", ";\n  > * {\n    margin: ", ";\n  }\n"]); return u = function() { return n }, n } var l = a.b.div(u(), (function(n) { return n.flexDirection || "" }), (function(n) { return n.justifyContent || "" }), (function(n) { return n.alignItems || "" }), (function(n) { return n.flexWrap || "" }), (function(n) { return n.fullWidth ? "100%" : "" }), (function(n) { return n.innerSpace ? "-0.5rem" : "" }), (function(n) { return n.marginBottom || "" }), (function(n) { return n.marginTop || "" }), (function(n) { return n.innerSpace ? "0.5rem !important" : "" })),
                d = Object(a.b)(l)(o()),
                f = Object(a.b)(l)(c()),
                m = a.b.h3(i()) }, 544: function(n, e, t) { "use strict";
            t.d(e, "c", (function() { return f })), t.d(e, "d", (function() { return m })), t.d(e, "e", (function() { return s })), t.d(e, "f", (function() { return b })), t.d(e, "a", (function() { return h })), t.d(e, "b", (function() { return g })); var r = t(540),
                a = t.n(r),
                i = t(541),
                c = t(550),
                o = t(44),
                u = t.n(o),
                l = t(536),
                d = t(84);

            function f(n) { var e = d.a.language.toUpperCase(); return u.a.get("/open-api/files?fileLocale=".concat(e).concat(n ? Object(l.i)(n) ? "&articleId=".concat(n) : "&articleCode=".concat(n) : "")) } var m = function(n) { var e = n.articleId,
                    t = n.page,
                    r = n.size,
                    a = d.a.language.toUpperCase(); return u.a.get("/open-api/files-pageable?fileLocale=".concat(a).concat(e ? Object(l.i)(e) ? "&articleId=".concat(e) : "&articleCode=".concat(e) : "").concat((t || 0 === t) && r ? "&page=".concat(t, "&size=").concat(r) : "")) };

            function s(n) { return u.a.delete("/api/files/".concat(n)) }

            function b(n, e, t) { return function(n, e) { return p.apply(this, arguments) }(n, e).then((function(n) { return u.a.post("/api/files/upload".concat(t ? "?isEmail=true" : ""), n, { headers: { "Content-Type": "multipart/form-data" } }) })) }

            function p() { return (p = Object(i.a)(a.a.mark((function n(e, t) { var r, i, o, u, l, d, f, m; return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                            case 0:
                                return r = new FormData, n.next = 3, r.append("file", e);
                            case 3:
                                return n.next = 5, r.append("name", e.name);
                            case 5:
                                if (!t || !t.length) { n.next = 39; break } i = !0, o = !1, n.prev = 8, l = Object(c.a)(t);
                            case 10:
                                return n.next = 12, l.next();
                            case 12:
                                return d = n.sent, i = d.done, n.next = 16, d.value;
                            case 16:
                                if (f = n.sent, i) { n.next = 23; break }(m = f).name && m.value && r.append(m.name, m.value);
                            case 20:
                                i = !0, n.next = 10; break;
                            case 23:
                                n.next = 29; break;
                            case 25:
                                n.prev = 25, n.t0 = n.catch(8), o = !0, u = n.t0;
                            case 29:
                                if (n.prev = 29, n.prev = 30, i || null == l.return) { n.next = 34; break } return n.next = 34, l.return();
                            case 34:
                                if (n.prev = 34, !o) { n.next = 37; break } throw u;
                            case 37:
                                return n.finish(34);
                            case 38:
                                return n.finish(29);
                            case 39:
                                return n.abrupt("return", r);
                            case 40:
                            case "end":
                                return n.stop() } }), n, null, [
                        [8, 25, 29, 39],
                        [30, , 34, 38]
                    ]) })))).apply(this, arguments) } var h = function(n, e) { return n ? { id: n.id, titleEn: e && e.titleEn ? e.titleEn : null, titleRu: e && e.titleRu ? e.titleRu : null, titleKk: e && e.titleKk ? e.titleKk : null, fileUid: n.fileUid, filePath: n.filePath, originalFileName: n.originalFileName, articleId: e && e.articleId ? e.articleId : null, commentId: e && e.commentId ? e.commentId : null, deleted: !(!e || !e.deleted) && e.deleted } : null },
                g = function(n) { return n && n.filePath ? window.location.origin + n.filePath.substr(n.filePath.indexOf("/html/") + 5) : "" } }, 549: function(n, e, t) { "use strict";
            t.d(e, "e", (function() { return l })), t.d(e, "f", (function() { return d })), t.d(e, "d", (function() { return f })), t.d(e, "k", (function() { return m })), t.d(e, "j", (function() { return s })), t.d(e, "i", (function() { return b })), t.d(e, "g", (function() { return p })), t.d(e, "b", (function() { return h })), t.d(e, "l", (function() { return g })), t.d(e, "c", (function() { return v })), t.d(e, "h", (function() { return x })), t.d(e, "a", (function() { return w })); var r = t(44),
                a = t.n(r),
                i = t(147),
                c = t(148),
                o = t(536),
                u = "/api/menu-items";

            function l() { return function(n) { a.a.get("/open-api/menu-items").then((function(e) { n({ type: i.a, payload: e.data && e.data.children }) })) } }

            function d(n) { return a.a.get("/open-api/menu-items".concat(Object(o.i)(n) ? "?parentItemId=".concat(n) : "?parentItemCode=".concat(n))) }

            function f(n) { return a.a.get("/open-api/menu-item-background".concat(Object(o.i)(n) ? "?menuItemId=".concat(n) : "?menuItemCode=".concat(n))) }

            function m() { return a.a.get("/open-api/menu-items?useful=true") }

            function s() { return a.a.get("/open-api/menu-items?statistic=true") }

            function b() { return function(n) { a.a.get(u).then((function(e) { n({ type: c.a, payload: e.data }) })).catch((function() { return null })) } }

            function p(n) { return a.a.get("".concat(u, "/").concat(n)) }

            function h(n) { return a.a.post(u, n) }

            function g(n, e) { return a.a.put("".concat(u, "/").concat(n), e) }

            function v(n) { return a.a.delete("".concat(u, "/").concat(n)) }

            function x(n) { return a.a.get("".concat(u, "/get-history?menuItemId=").concat(n)) }

            function w(n, e) { return a.a.put("".concat(u, "/move/").concat(n, "/").concat(e, " "), {}) } }, 555: function(n, e, t) { "use strict";
            t.d(e, "c", (function() { return m })), t.d(e, "d", (function() { return s })), t.d(e, "a", (function() { return b })), t.d(e, "b", (function() { return p })); var r = t(106),
                a = t(68),
                i = t(537);

            function c() { var n = Object(r.a)(["\n  margin: -0.25rem;\n  > ", " {\n    margin: 0.25rem;\n  }\n"]); return c = function() { return n }, n }

            function o() { var n = Object(r.a)(["\n  width: auto;\n  height: auto;\n  font-size: 0.75rem;\n  border-radius: 10px;\n  border: 0;\n  padding: 0.25rem 0.5rem;\n  > svg {\n    margin-right: 0.5rem;\n  }\n"]); return o = function() { return n }, n }

            function u() { var n = Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1.5rem;\n  height: 1.5rem;\n  font-weight: normal;\n  line-height: normal;\n  font-size: 0.75rem;\n  text-align: center;\n  color: rgb(255, 255, 255);\n  background: rgb(107, 111, 130);\n  border-radius: 50%;\n  border: 0;\n"]); return u = function() { return n }, n }

            function l() { var n = Object(r.a)(["\n  width: 100%;\n  text-align: center;\n  padding: 0 1.15rem;\n  border: 0;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  font-weight: 500;\n  appearance: none;\n  box-shadow: none;\n  position: relative;\n  overflow: hidden;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transition: background-color .2s linear;\n  -o-transition: background-color .2s linear;\n  transition: background-color .2s linear;\n  animation: ", " 0.5s linear;\n  \n  color: ", ";\n  background-color: ", ";\n  \n  height: ", ";\n  font-size: ", ";\n  &:disabled {\n    color: #fff;\n    background-color: ", ";\n  }\n"]); return l = function() { return n }, n }

            function d() { var n = Object(r.a)(["\n  0% { opacity: 0 }\n  100% { opacity: 1 }\n"]); return d = function() { return n }, n } var f = Object(a.c)(d()),
                m = a.b.button(l(), f, (function(n) { return n.primary ? "#fff" : "" }), (function(n) { return n.primary ? "#b08f00" : "" }), (function(n) { return n.small ? "2em" : n.big ? "4em" : "3em" }), (function(n) { return n.small ? "0.75rem" : n.big ? "1.25rem" : "1rem" }), (function(n) { return n.theme.grey })),
                s = a.b.button(u()),
                b = Object(a.b)(s)(o()),
                p = Object(a.b)(i.b)(c(), s) }, 556: function(n, e, t) { "use strict";
            t.d(e, "e", (function() { return g })), t.d(e, "h", (function() { return v })), t.d(e, "f", (function() { return x })), t.d(e, "g", (function() { return w })), t.d(e, "j", (function() { return j })), t.d(e, "d", (function() { return O })), t.d(e, "i", (function() { return k })), t.d(e, "c", (function() { return y })), t.d(e, "a", (function() { return E })), t.d(e, "b", (function() { return S })); var r = t(106),
                a = t(68),
                i = t(574),
                c = t.n(i);

            function o() { var n = Object(r.a)(["\n  display: block;\n  padding: 0 1rem;\n  width: 100%;\n  font-size: 1.25rem;\n  font-weight: 500;\n  color: ", ";\n  @media(min-width: 481px) {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"]); return o = function() { return n }, n }

            function u() { var n = Object(r.a)(["\n  display: flex;\n  flex-wrap: nowrap;\n  flex: 1;\n  width: 100%;\n  background: ", ";\n  border-top: 2px solid ", ";\n  box-shadow: 0 0.25rem 0.5rem 0 rgba(19,41,104,.05);\n  @media(min-width: 481px) {\n    height: calc(100% - 1.5rem);\n  }\n"]); return u = function() { return n }, n }

            function l() { var n = Object(r.a)(["\n  width: 50%;\n  padding: 1rem;\n  @media(max-width: 768px) {\n    width: 100%;\n  }\n"]); return l = function() { return n }, n }

            function d() { var n = Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% + 2rem);\n  margin: 1rem -1rem -1rem;\n  &:last-child {\n    margin-bottom: 1rem;\n  }\n"]); return d = function() { return n }, n }

            function f() { var n = Object(r.a)(['\n    position: relative;\n    width: 100%;\n    margin: 0 auto;\n    padding: 0 1rem;\n    box-sizing: border-box;\n    &::after {\n      visibility: hidden;\n      display: block;\n      content: "";\n      clear: both;\n      height: 0;\n    }\n    @media (min-width: 1024px) {\n      padding: 0 1rem;\n      max-width: 1168px;\n    }\n    @media (max-width: 1023px) and (min-width: 768px) {\n      padding: 0 2rem;\n      max-width: 768px;\n    }\n']); return f = function() { return n }, n }

            function m() { var n = Object(r.a)(["\n  color: ", ";\n  text-shadow: 2px 0 0 #fff,\n    -2px 0 0 #fff,\n    0 2px 0 #fff,\n    0 -2px 0 #fff,\n    1px 1px #fff,\n    -1px -1px 0 #fff,\n    1px -1px 0 #fff,\n    -1px 1px 0 #fff;\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.25rem;\n  margin: 0;\n  overflow: hidden;\n  @media (max-width: 1023px) {\n    padding-bottom: 46px;\n  }\n  @media (min-width: 1024px) {\n    font-size: 1.25rem;\n    line-height: 3rem;\n    padding-bottom: 5.5rem;\n  }\n"]); return m = function() { return n }, n }

            function s() { var n = Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-end;\n    @media (max-width: 1023px) {\n      height: 160px;\n      width: 100%;\n      min-height: 100%;\n    }\n    @media (min-width: 1024px) {\n      align-items: flex-start;\n      color: #fff;\n      flex-direction: column;\n      margin: 0;\n      max-height: none;\n      min-height: 0;\n      height: 351px;\n    }\n"]); return s = function() { return n }, n }

            function b() { var n = Object(r.a)(["\n    background-color: transparent;\n    bottom: 100px;\n    display: flex;\n    height: 160px;\n    justify-content: center;\n    position: relative;\n    left: 0;\n    top: 0;\n    width: 100%;\n    min-height: 100%;\n    @media (min-width: 1024px) {\n      background-color: transparent;\n      bottom: 100px;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n    }\n"]); return b = function() { return n }, n }

            function p() { var n = Object(r.a)(['\n    min-height: 0;\n    position: relative;\n    z-index: 0;\n    height: 216px;\n    bottom: 56px;\n    background-size: cover;\n    background-position: 10% center;\n    background-image: url("', '");\n    @media (min-width: 1024px) {\n      background-blend-mode: normal;\n      background-color: ', ";\n      background-position: 50%;\n      background-repeat: no-repeat;\n      display: block;\n      max-height: 480px;\n      width: 100%;\n      min-height: 0;\n      position: relative;\n      z-index: 0;\n      bottom: 80px;\n      margin: 9.5rem 0 0.75rem;\n      height: 351px;\n    }\n    @media (max-width: 1023px) {\n      bottom: 74px;\n    }\n"]); return p = function() { return n }, n }

            function h() { var n = Object(r.a)(["\n    background-color: ", ";\n    position: relative;\n    @media (min-width: 1024px) {\n      min-height: 312px;\n      height: 312px;\n      max-height: none;\n    }\n"]); return h = function() { return n }, n } var g = a.b.div(h(), (function(n) { return n.theme.skyGrey })),
                v = a.b.div(p(), (function(n) { return n.otherBanner ? n.otherBanner : c.a }), (function(n) { return n.theme.darkBlue })),
                x = a.b.div(b()),
                w = a.b.div(s()),
                j = a.b.h3(m(), (function(n) { return n.theme.blue })),
                O = a.b.div(f()),
                k = a.b.div(d()),
                y = a.b.div(l()),
                E = a.b.div(u(), (function(n) { return n.theme.skyGrey }), (function(n) { return n.theme.blue })),
                S = a.b.h3(o(), (function(n) { return n.theme.darkBlue })) }, 566: function(n, e, t) { "use strict";
            t.d(e, "e", (function() { return m })), t.d(e, "c", (function() { return s })), t.d(e, "b", (function() { return p })), t.d(e, "d", (function() { return h })), t.d(e, "a", (function() { return g })); var r = t(540),
                a = t.n(r),
                i = t(107),
                c = t(541),
                o = t(550),
                u = t(44),
                l = t.n(u),
                d = t(84),
                f = t(536);

            function m(n) { return l.a.get("/stations?q=".concat(n)) }

            function s(n) { return b.apply(this, arguments) }

            function b() { return (b = Object(c.a)(a.a.mark((function n(e) { var t, r, c, u, l, f, m, s; return a.a.wrap((function(n) { for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = "https://bilet.railways.kz/sale/default/route/search?_locale=".concat(d.a.language, "&"), r = !0, c = !1, n.prev = 3, l = function() { var n = s,
                                        r = Object(i.a)(n, 2),
                                        a = r[0],
                                        c = r[1];
                                    t += "".concat(c.value && "object" === typeof c.value ? "".concat(c.value.map((function(n) { return "route_search_form%5B".concat(c.name, "%5D%5B%5D=").concat(n) })).join("&"), "&") : c.value ? "route_search_form%5B".concat(c.name, "%5D=").concat(c.value).concat(a !== e.length - 1 ? "&" : "") : "") }, f = Object(o.a)(e.entries());
                            case 6:
                                return n.next = 8, f.next();
                            case 8:
                                return m = n.sent, r = m.done, n.next = 12, m.value;
                            case 12:
                                if (s = n.sent, r) { n.next = 18; break } l();
                            case 15:
                                r = !0, n.next = 6; break;
                            case 18:
                                n.next = 24; break;
                            case 20:
                                n.prev = 20, n.t0 = n.catch(3), c = !0, u = n.t0;
                            case 24:
                                if (n.prev = 24, n.prev = 25, r || null == f.return) { n.next = 29; break } return n.next = 29, f.return();
                            case 29:
                                if (n.prev = 29, !c) { n.next = 32; break } throw u;
                            case 32:
                                return n.finish(29);
                            case 33:
                                return n.finish(24);
                            case 34:
                                return n.abrupt("return", t);
                            case 35:
                            case "end":
                                return n.stop() } }), n, null, [
                        [3, 20, 24, 34],
                        [25, , 29, 33]
                    ]) })))).apply(this, arguments) } var p = function(n) { var e = n.parentId,
                        t = n.menuId,
                        r = n.articleId,
                        a = n.page,
                        i = n.size,
                        c = t || e; return l.a.get("/open-api/articles-pageable".concat(Object(f.i)(c) ? "?menuItemId=".concat(c) : "?menuItemCode=".concat(c)).concat(r ? Object(f.i)(r) ? "&id=".concat(r) : "&articleCode=".concat(r) : "").concat((a || 0 === a) && i ? "&page=".concat(a, "&size=").concat(i) : "")) },
                h = function(n) { return l.a.get("/open-api/articles-pageable?isMain=true".concat(Object(f.i)(n) ? "&menuItemId=".concat(n) : "&menuItemCode=".concat(n))) },
                g = function(n) { return l.a.get("/open-api/search?searchString=".concat(n)) } }, 567: function(n, e, t) { "use strict";
            t.d(e, "a", (function() { return f })), t.d(e, "b", (function() { return m })); var r = t(106),
                a = t(68);

            function i() { var n = Object(r.a)(["\n  width: ", ";\n  height: ", ";\n"]); return i = function() { return n }, n }

            function c() { var n = Object(r.a)(["\n  width: 100%;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  padding-top: ", ";\n"]); return c = function() { return n }, n }

            function o() { var n = Object(r.a)(["\n  position: relative;\n  box-shadow: 0 0 10px 0 rgba(0,0,0,0.125);\n  background: #DDDBDD;\n  overflow: hidden;\n  &:not(:last-child) {\n    margin-bottom: 0.5rem;\n  }\n  &::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    transform: translateX(-100%);\n    background-image: linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0) 0,\n      rgba(255, 255, 255, 0.2) 20%,\n      rgba(255, 255, 255, 0.5) 60%,\n      rgba(255, 255, 255, 0)\n    );\n    animation: ", " 3s infinite;\n    content: '';\n  }\n"]); return o = function() { return n }, n }

            function u() { var n = Object(r.a)(["\n  100% {\n    transform: translateX(100%);\n  }\n"]); return u = function() { return n }, n } var l = Object(a.c)(u()),
                d = a.b.div(o(), l),
                f = Object(a.b)(d)(c(), (function(n) { return n.small ? "40%" : n.medium ? "50%" : n.big ? "80%" : "60%" })),
                m = Object(a.b)(d)(i(), (function(n) { return n.width ? "".concat(n.width, "%") : "100%" }), (function(n) { return n.small ? "0.75rem" : n.big ? "1.25rem" : n.biggest ? "2rem" : "1rem" })) }, 573: function(n, e, t) { "use strict";
            t.d(e, "a", (function() { return i })); var r = t(107),
                a = t(0),
                i = function(n, e) { var t = Object(a.useState)(n),
                        i = Object(r.a)(t, 2),
                        c = i[0],
                        o = i[1]; return Object(a.useEffect)((function() { var t = setTimeout((function() { o(n) }), e); return function() { clearTimeout(t) } }), [n, e]), c } }, 574: function(n, e, t) { n.exports = t.p + "static/media/main-page1.21359bb4.jpg" }, 581: function(n, e, t) { "use strict";
            t.d(e, "d", (function() { return i })), t.d(e, "c", (function() { return c })), t.d(e, "a", (function() { return o })), t.d(e, "e", (function() { return u })), t.d(e, "b", (function() { return l })); var r = t(44),
                a = t.n(r),
                i = function(n, e) { return a.a.get("/".concat(n ? "open-api" : "api", "/banners").concat(e ? "?code=".concat(e) : "")) },
                c = function(n) { return a.a.get("/api/banners/".concat(n)) },
                o = function(n) { return a.a.post("/api/banners", n) },
                u = function(n, e) { return a.a.put("/api/banners/".concat(n), e) },
                l = function(n) { return a.a.delete("/api/banners/".concat(n)) } }, 768: function(n, e, t) { n.exports = t.p + "static/media/circle.4e9e4a5d.svg" }, 769: function(n, e, t) { n.exports = t.p + "static/media/pin.27ff2dbd.svg" }, 770: function(n, e, t) { n.exports = t.p + "static/media/calendar.e12179fa.svg" }, 858: function(n, e, t) { "use strict";
            t.r(e); var r = t(0),
                a = t.n(r),
                i = t(145),
                c = t(556),
                o = t(548),
                u = t(106),
                l = t(263),
                d = t(146),
                f = t(68),
                m = t(536),
                s = t(589),
                b = t.n(s),
                p = (t(766), t(767), t(567)),
                h = t(537),
                g = t(544);

            function v() { var n = Object(u.a)(["\n  padding: 1rem;\n  @media (min-width: 1024px) {\n    width: 20%;\n  }\n  @media (max-width: 1023px) and (min-width: 601px) {\n    width: 33.333%;\n  }\n  @media (max-width: 600px) and (min-width: 481px) {\n    width: 50%;\n  }\n  @media (max-width: 480px) {\n    width: 100%;\n  }\n"]); return v = function() { return n }, n }

            function x() { var n = Object(u.a)(["\n  flex-wrap: nowrap;\n  margin: -1rem;\n  overflow: hidden;\n"]); return x = function() { return n }, n }

            function w() { var n = Object(u.a)(['\n  position: relative;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 2rem;\n  box-sizing: border-box;\n  &::after {\n    visibility: hidden;\n    display: block;\n    content: "";\n    clear: both;\n    height: 0;\n  }\n  @media (min-width: 1024px) {\n    max-width: 1168px;\n  }\n  @media (max-width: 1023px) and (min-width: 768px) {\n    max-width: 768px;\n  }\n']); return w = function() { return n }, n }

            function j() { var n = Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: 175px;\n  background: #fff;\n  border-radius: 0.5rem;\n  box-shadow: inset 0 -1px 0 0 rgba(0,0,0,.1), 0 0.25rem 0.5rem 0 rgba(19,41,104,.05);\n  color: #3c89c6;\n  font-size: 0.875rem;\n  font-weight: 500;\n  padding: 1rem;\n  position: relative;\n  text-align: center;\n  transition: all .25s ease-in-out;\n  cursor: pointer;\n  &:hover {\n    transform: translateY(-4px);\n    box-shadow: none;\n  }\n"]); return j = function() { return n }, n }

            function O() { var n = Object(u.a)(['\n  background: url("', '") no-repeat center center / contain;\n  width: 100%;\n  padding-top: 60%;\n  margin-bottom: 1rem;\n  @media(max-width: 1024px) {\n    padding-top: 40%;\n  }\n']); return O = function() { return n }, n }

            function k() { var n = Object(u.a)(["\n  padding: 3.375em 0;\n  background-color: ", ";\n  & a {\n    text-decoration: none;\n  }\n  @media (max-width: 1023px) {\n    padding: 0 0 2rem;  \n  }\n"]); return k = function() { return n }, n } var y = f.b.div(k(), (function(n) { return n.theme.skyGrey })),
                E = f.b.div(O(), (function(n) { return n.src })),
                S = f.b.div(j()),
                I = f.b.div(w()),
                z = Object(f.b)(h.c)(x()),
                C = Object(f.b)(h.a)(v()),
                L = function() { var n = Object(d.c)((function(n) { return n.menu.companies })),
                        e = Object(d.c)((function(n) { return n.menu.companies && n.menu.companies.children })),
                        t = window.matchMedia("(min-width: 1024px)").matches ? 5 : window.matchMedia("(max-width: 1023px) and (min-width: 601px)").matches ? 3 : window.matchMedia("(max-width: 600px) and (min-width: 481px)").matches ? 2 : 1,
                        r = { dots: !0, slidesToShow: e && e.length > 5 ? 6 : e && e.length ? e.length : 1, slidesToScroll: e && e.length > 5 ? 6 : e && e.length ? e.length : 1, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: !0, dots: !0 } }, { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, dots: !1 } }, { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: !1 } }] }; return a.a.createElement(y, null, a.a.createElement(I, null, a.a.createElement(c.b, null, n && n[Object(m.f)("name")]), e && e.length ? a.a.createElement(b.a, r, e.map((function(n, e) { return a.a.createElement(l.a, { key: e, to: { pathname: "/articles/".concat(n.code || n.id), state: { menu: n.children } } }, a.a.createElement(S, null, a.a.createElement(E, { src: Object(g.b)(n.logo) }), a.a.createElement("span", null, n[Object(m.f)("name")]))) }))) : a.a.createElement(z, null, Object(o.a)(Array(t)).map((function(n, e) { return a.a.createElement(C, { key: e }, a.a.createElement(p.a, { big: !0 })) }))))) },
                B = t(107),
                D = t(566);

            function T() { var n = Object(u.a)(["\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: ", ";\n"]); return T = function() { return n }, n }

            function P() { var n = Object(u.a)(["\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: #b2b2b2;\n  margin-bottom: 0.25rem;\n  text-align: left;\n"]); return P = function() { return n }, n }

            function F() { var n = Object(u.a)(["\n  display: block;\n  font-size: 0.875rem;\n  line-height: normal;\n  font-weight: 400;\n  color: ", ";\n  word-break: break-word;\n  text-align: left;\n"]); return F = function() { return n }, n }

            function G() { var n = Object(u.a)(['\n  width: 100%;\n  height: auto;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  margin-bottom: 0.875rem;\n  padding-top: 70%;\n  background: #eee url("', '") no-repeat center center / cover;\n  cursor: pointer;\n  @media(max-width: 480px) {\n    padding-top: 50%;\n  }\n']); return G = function() { return n }, n }

            function _() { var n = Object(u.a)(["\n  display:flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  text-decoration: none;\n  align-items: ", ";\n  ", "\n"]); return _ = function() { return n }, n }

            function A() { var n = Object(u.a)(["\n  width: 50%;\n  &:first-child {\n    position: relative;\n    &:after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      right: 0;\n      height: 100%;\n      width: 1px;\n      background: ", ";\n      opacity: 0.25;\n    }\n  }\n  @media(max-width: 480px) {\n    width: 100%;\n    &:first-child {\n      &:after {\n        top: auto;\n        bottom: 0;\n        right: 0;\n        height: 1px;\n        width: 100%;\n      }\n    }\n  }\n"]); return A = function() { return n }, n }

            function N() { var n = Object(u.a)(["\n  padding: 0.5rem 0;\n  @media(max-width: 480px) {\n    flex-wrap: wrap;\n  }\n"]); return N = function() { return n }, n } var K = Object(f.b)(c.a)(N()),
                M = f.b.div(A(), (function(n) { return n.theme.primary })),
                R = f.b.div(_(), (function(n) { return n.alignStart ? "flex-start" : "" }), (function(n) { return n.withoutHover ? "" : "\n    &:hover {\n      background: rgba(0, 0, 0, 0.05);\n    }" })),
                H = f.b.div(G(), (function(n) { return n.src ? n.src : "" })),
                U = f.b.h3(F(), (function(n) { return n.theme.darkBlue })),
                V = f.b.div(P()),
                W = Object(f.b)(l.a)(T(), (function(n) { return n.theme.darkBlue })),
                q = function() { var n = Object(d.c)((function(n) { return n.menu.ktzh && n.menu.ktzh.children })),
                        e = Object(r.useState)([]),
                        t = Object(B.a)(e, 2),
                        u = t[0],
                        f = t[1],
                        s = Object(r.useState)([]),
                        h = Object(B.a)(s, 2),
                        v = h[0],
                        x = h[1],
                        w = Object(i.b)("home").t; return Object(r.useEffect)((function() { var e = !0,
                            t = n && n.find((function(n) { return "company" === n.code })),
                            r = t && t.children && t.children.find((function(n) { return "news" === n.code })); return r && (Object(D.d)(r.id).then((function(n) { return e ? x(n.data) : null })).catch((function() { return null })), Object(D.b)({ parentId: r.id, page: 0, size: 4 }).then((function(n) { return e ? f(n.data && n.data.articles) : null })).catch((function() { return null }))),
                            function() { return e = !1 } }), [n]), a.a.createElement(a.a.Fragment, null, a.a.createElement(c.b, null, w("news")), a.a.createElement(K, null, a.a.createElement(M, null, a.a.createElement(b.a, Object.assign({ arrows: !1 }, { dots: !0, initialSlide: 0, slidesToShow: 1, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 5e3, responsive: [{ breakpoint: 600, settings: { dots: !1 } }] }), v && v.length ? v.map((function(n, e) { return a.a.createElement(R, { key: e, as: l.a, to: { pathname: Object(m.g)(null, n), state: { article: n } } }, n.preview && n.preview.filePath ? a.a.createElement(H, { src: Object(g.b)(n.preview) }) : null, a.a.createElement(V, null, n.publishDate || n.createdDate), a.a.createElement(U, null, n[Object(m.f)("title")] ? n[Object(m.f)("title")] : n.titleRu)) })) : Object(o.a)(Array(3)).map((function(n, e) { return a.a.createElement(R, { key: e, withoutHover: !0 }, a.a.createElement(p.a, { medium: !0 }), a.a.createElement(p.b, { width: 30 }), a.a.createElement(p.b, { biggest: !0 })) })))), a.a.createElement(M, null, u && u.length ? u.map((function(n, e) { return a.a.createElement(R, { as: l.a, key: e, to: { pathname: Object(m.g)(null, n), state: { article: n } } }, a.a.createElement(V, null, n.publishDate || n.createdDate), a.a.createElement(U, null, n[Object(m.f)("title")] ? n[Object(m.f)("title")] : n.titleRu)) })) : Object(o.a)(Array(4)).map((function(n, e) { return a.a.createElement(R, { key: e, withoutHover: !0 }, a.a.createElement(p.b, { width: 30 }), a.a.createElement(p.b, { biggest: !0 })) })), a.a.createElement(R, { alignStart: !0, withoutHover: !0 }, u && u.length ? a.a.createElement(W, { to: Object(m.g)(null, null, u[0].menuItem) }, w("allNews")) : a.a.createElement(p.b, { width: 40 }))))) },
                Z = t(581);

            function $() { var n = Object(u.a)(["\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: ", ";\n  text-align: center;\n  word-break: break-word;\n"]); return $ = function() { return n }, n }

            function J() { var n = Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  @media(min-width: 1024px) {\n    height: 100%;\n  }\n"]); return J = function() { return n }, n }

            function X() { var n = Object(u.a)(["\n  width: 50%;\n  padding: ", ";\n  @media(max-width: 1023px) {\n    width: 100%;\n  }\n"]); return X = function() { return n }, n }

            function Y() { var n = Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  align-items: center;\n  padding: 1rem 0;\n"]); return Y = function() { return n }, n }

            function Q() { var n = Object(u.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  min-height: 200px;\n  background: ", " center center no-repeat;\n  background-size: contain;\n  box-shadow: 0 0 10px 0 rgba(0,0,0,0.125);\n  padding: 1rem;\n  border-radius: 0.5rem;\n  ", "\n"]); return Q = function() { return n }, n }

            function nn() { var n = Object(u.a)(["\n  padding: 0 2rem;\n"]); return nn = function() { return n }, n } var en = f.b.div(nn()),
                tn = f.b.div(Q(), (function(n) { return "url(".concat(n.src, ")") }), (function(n) { return n.haveLink ? "\n    &::after {\n      content: '\u041f\u0435\u0440\u0435\u0439\u0442\u0438';\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n      position: absolute;\n      border-radius: 0.5rem;\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0;\n      background: rgba(0,0,0,0.25);\n      color: #ffffff;\n      opacity: 0;\n      transition: opacity ease-in-out 0.25s;\n    }\n    &:hover {\n      &::after {\n        opacity: 1;\n        cursor: pointer;\n      }\n    }\n  " : "" })),
                rn = f.b.div(Y()),
                an = f.b.div(X(), (function(n) { return n.withPadding ? "0 1rem" : "" })),
                cn = Object(f.b)(an)(J()),
                on = f.b.div($(), (function(n) { return n.theme.darkBlue })),
                un = function() { var n = Object(i.b)("home").t,
                        e = Object(r.useState)([]),
                        t = Object(B.a)(e, 2),
                        u = t[0],
                        l = t[1],
                        d = Object(r.useState)(),
                        f = Object(B.a)(d, 2),
                        s = f[0],
                        h = f[1],
                        v = s ? s[Object(m.f)("description")] ? s[Object(m.f)("description")] : s.descriptionRu : null,
                        x = { dots: !1, initialSlide: 1, slidesToShow: 1, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 5e3, beforeChange: function(n, e) { u && u.length && h(u[e]) } };
                    Object(r.useEffect)((function() { var n = !0; return Object(Z.d)(!0, "main").then((function(e) { n && (l(e.data), h(e.data[1])) })).catch((function() { return null })),
                            function() { return n = !1 } }), []); return a.a.createElement(a.a.Fragment, null, a.a.createElement(c.b, null, s ? s[Object(m.f)("title")] ? s[Object(m.f)("title")] : s.titleRu ? s.titleRu : n("banners") : a.a.createElement(p.b, { big: !0 })), a.a.createElement(c.a, null, a.a.createElement(rn, null, a.a.createElement(an, null, a.a.createElement(en, null, a.a.createElement(b.a, x, u && u.length ? u.map((function(n, e) { return a.a.createElement(tn, { key: e, src: Object(g.b)(n[Object(m.f)("file")]), haveLink: n.link && "/" !== n.link, onClick: function() { return n.link && "/" !== n.link ? (e = n.link, void window.open(e, "_blank")) : null; var e } }) })) : Object(o.a)(Array(3)).map((function(n, e) { return a.a.createElement(p.a, { key: e, big: !0 }) }))))), a.a.createElement(cn, { withPadding: !0 }, v ? a.a.createElement(on, null, v) : a.a.createElement(a.a.Fragment, null, a.a.createElement(p.b, { width: 90 }), a.a.createElement(p.b, { width: 90 }), a.a.createElement(p.b, { width: 90 })))))) },
                ln = t(661),
                dn = t(768),
                fn = t.n(dn),
                mn = t(769),
                sn = t.n(mn),
                bn = t(770),
                pn = t.n(bn),
                hn = t(844);

            function gn() { var n = Object(u.a)(["\n  position: absolute;\n  top: calc(50% - 0.75rem);\n  left: 0.5rem; \n  width: 1.5rem;\n  height: 1.5rem;\n  color: #A1A9C3;\n  pointer-events: none;\n  z-index: 1;\n  & svg {\n    width: 1.25rem;\n    height: 1.25rem;\n    margin: 2px;\n  }\n"]); return gn = function() { return n }, n } var vn = Object(f.b)(hn.a)(gn()),
                xn = function(n) { return a.a.createElement(vn, { src: "circle" === n.type ? fn.a : "pin" === n.type ? sn.a : "calendar" === n.type ? pn.a : null }) },
                wn = t(636),
                jn = t.n(wn),
                On = (t(773), t(841));

            function kn() { var n = Object(u.a)(["\n  width: 1rem;\n  height: 1.5rem;\n  background: -webkit-gradient(linear,left top,right top,from(hsla(0,0%,100%,0)),to(", "));\n  background: linear-gradient(90deg,hsla(0,0%,100%,0),", ");\n"]); return kn = function() { return n }, n }

            function yn() { var n = Object(u.a)(["\n  position: absolute;\n  top: 0;\n  right: 0.5rem;\n  display: flex;\n  height: 100%;\n  align-items: center;\n"]); return yn = function() { return n }, n }

            function En() { var n = Object(u.a)(["\n  position: relative;\n  & .react-datepicker-wrapper {\n    width: 100%;\n  }\n"]); return En = function() { return n }, n }

            function Sn() { var n = Object(u.a)(["\n  font-weight: 400;\n  font-style: normal;\n  box-sizing: border-box;\n  font-size: 1rem;\n  height: 48px;\n  width: 100%;\n  border: 1px solid ", ";\n  border-radius: 0.5em;\n  text-align: left;\n  appearance: none;\n  background-color: ", ";\n  box-shadow: none;\n  caret-color: #a1a9c3;\n  color: ", ";\n  transition: border .15s ease;\n  padding: 0 0.75em 0 ", ";\n  &:focus, &:hover {\n    border: 1px solid #a1a9c3;\n    outline: 0;\n  }\n  &::placeholder {\n      color: #a1a9c3; \n      font-weight: 300;\n  } \n  &:-ms-input-placeholder { \n      color: #a1a9c3; \n      font-weight: 300;\n  } \n  &::-ms-input-placeholder { \n      color: #a1a9c3; \n      font-weight: 300;\n  } \n"]); return Sn = function() { return n }, n } Object(wn.registerLocale)("ru", On.a); var In = f.b.input(Sn(), (function(n) { return n.theme.skyGrey }), (function(n) { return n.theme.skyGrey }), (function(n) { return n.theme.darkBlue }), (function(n) { return n.iconLeft ? "40px" : "" })),
                zn = f.b.div(En()),
                Cn = f.b.div(yn()),
                Ln = f.b.div(kn(), (function(n) { return n.theme.skyGrey }), (function(n) { return n.theme.skyGrey })),
                Bn = function(n) { return n.icon ? a.a.createElement(zn, null, a.a.createElement(xn, { type: n.icon, position: n.iconPosition }), "date" === n.type ? a.a.createElement(In, Object.assign({ as: jn.a }, n, { iconLeft: !0, locale: "ru", dateFormat: "dd.MM.yy" })) : a.a.createElement(In, Object.assign({}, n, { iconLeft: !0 })), a.a.createElement(Cn, null, a.a.createElement(Ln, null))) : a.a.createElement(In, n) },
                Dn = t(555),
                Tn = t(834),
                Pn = t.n(Tn);
            t(838);

            function Fn() { var n = Object(u.a)(["\n  margin-left: 0.5rem;\n  color: ", ";\n  font-weight: 300;\n  font-size: 0.875rem;\n"]); return Fn = function() { return n }, n }

            function Gn() { var n = Object(u.a)(["\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n    background-color: transparent;\n    border: 0;\n    padding: 0;\n    -webkit-touch-callout: none;\n    user-select: none;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    -webkit-tap-highlight-color: transparent;\n"]); return Gn = function() { return n }, n }

            function _n() { var n = Object(u.a)(["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  & .react-toggle-track {\n    width: ", ";\n    height: ", ";\n    padding: 0;\n    border-radius: 30px;\n    background-color: ", ";\n    transition: all .2s ease;\n  }\n  & .react-toggle {\n    &:hover {\n      & .react-toggle-track {\n        background-color: ", " !important;\n      }\n    }\n    &:active {\n      & .react-toggle-thumb {\n        box-shadow: none !important;\n      }\n    }\n  }\n  & .react-toggle--checked {\n    &:hover {\n      & .react-toggle-track {\n        background-color: ", " !important;\n      }\n    }\n    & .react-toggle-track {\n      background-color: ", " !important;\n    }\n    & .react-toggle-thumb {\n      left: 1rem;\n    }\n  }\n  & .react-toggle-track-check {\n    position: absolute;\n    width: 0.875rem;\n    height: 0.625rem;\n    top: 0;\n    bottom: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    line-height: 0;\n    left: 0.5rem;\n    opacity: 0;\n    transition: opacity .25s ease;\n    & svg {\n      display: none;\n    }\n  }\n  & .react-toggle-track-x {\n    position: absolute;\n    width: 0.625rem;\n    height: 0.625rem;\n    top: 0;\n    bottom: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    line-height: 0;\n    right: 0.625rem;\n    opacity: 1;\n    transition: opacity .25s ease;\n    & svg {\n      display: none;\n    }\n  }\n  & .react-toggle--focus {\n    & .react-toggle-thumb {\n      box-shadow: none;\n    }\n  }\n  & .react-toggle-thumb {\n    transition: all .5s cubic-bezier(.23,1,.32,1) 0ms;\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    background-color: #fafafa;\n    box-sizing: border-box;\n    border: none;\n  }\n"]); return _n = function() { return n }, n } var An = f.b.div(_n(), (function(n) { return n.small ? "2rem" : "40px" }), (function(n) { return n.small ? "1.125rem" : "24px" }), (function(n) { return n.primary ? "#dcdfe9" : "#c8c8c8" }), (function(n) { return n.primary ? "#dcdfe9" : "#c8c8c8" }), (function(n) { return n.primary ? "#5e90cc" : "#65d3ce" }), (function(n) { return n.primary ? "#5e90cc" : "#65d3ce" }), (function(n) { return n.small ? "0.875rem" : "1.25rem" }), (function(n) { return n.small ? "0.875rem" : "1.25rem" })),
                Nn = Object(f.b)(Pn.a)(Gn()),
                Kn = f.b.span(Fn(), (function(n) { return n.theme.darkBlue })),
                Mn = function(n) { return a.a.createElement(An, { primary: !0, small: !0 }, a.a.createElement(Nn, n), a.a.createElement(Kn, { onClick: n.onChange }, n.label)) },
                Rn = t(573),
                Hn = t(542);

            function Un() { var n = Object(u.a)(["\n  position: relative;\n  &:focus, &:active {\n    outline: 0;\n  }\n"]); return Un = function() { return n }, n }

            function Vn() { var n = Object(u.a)(["\n  color: #000;\n  padding: 0.5rem;\n  cursor: pointer;\n  border-radius: 8px;\n  &:hover {\n    background: rgba(0,0,0,0.05);\n  }\n  &:not(:last-of-type) {\n    border-bottom: 1px solid rgba(0,0,0,0.1);\n  }\n"]); return Vn = function() { return n }, n }

            function Wn() { var n = Object(u.a)(["\n  position: absolute;\n  padding: 0.5rem 1rem;\n  height: ", ";\n  max-height: ", ";\n  top: calc(100% + 0.25rem);\n  margin: 0;\n  list-style: none;\n  border-radius: 8px;\n  opacity: ", ";\n  z-index: ", ";\n  width: 100%;\n  background-color: #fff;\n  color: #009cd8;\n  -webkit-box-shadow: inset 0 -1px 0 0 rgba(0,0,0,.1), 0 0 8px 0 rgba(51,51,51,.2);\n  box-shadow: inset 0 -1px 0 0 rgba(0,0,0,.1), 0 0 8px 0 rgba(51,51,51,.2);\n  overflow: hidden auto;\n  white-space: nowrap;\n  -webkit-transition: all .15s ease-in-out;\n  transition: all .15s ease-in-out;\n  &::-webkit-scrollbar {\n    width: 0.25rem;\n  }\n  &::-webkit-scrollbar-track {\n    background: #f1f1f1;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #009cd8;\n    &:hover {\n      background: #006c95;\n    }\n  }\n"]); return Wn = function() { return n }, n } var qn = f.b.ul(Wn(), (function(n) { return n.show ? "auto" : 0 }), (function(n) { return n.show ? "200px" : 0 }), (function(n) { return n.show ? 1 : 0 }), (function(n) { return n.show ? 10 : -1 })),
                Zn = f.b.li(Vn()),
                $n = f.b.div(Un()),
                Jn = function(n) { var e = n.result,
                        t = n.showKey,
                        i = n.setObj,
                        c = Object(Hn.a)(n, ["result", "showKey", "setObj"]),
                        o = Object(r.useState)(!1),
                        u = Object(B.a)(o, 2),
                        l = u[0],
                        d = u[1]; return a.a.createElement($n, { tabIndex: -1, onBlur: function() { return d(!1) }, onFocus: function() { return d(!0) } }, a.a.createElement(Bn, Object.assign({ onFocus: function() { return d(!0) } }, c)), e && "object" === typeof e ? a.a.createElement(qn, { show: l && e && e.length }, e && e.length && e.map((function(n, e) { return a.a.createElement(Zn, { key: e, onClick: function() { i(n), d(!1) } }, n[t]) }))) : null) };

            function Xn() { var n = Object(u.a)(["\n  width: auto;\n  margin: 0.25rem 0.5rem;\n  @media (max-width: 1023px) {\n    margin: 0.25rem 0;\n  }\n"]); return Xn = function() { return n }, n }

            function Yn() { var n = Object(u.a)(["\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n  justify-content: center;\n  flex-direction: row;\n  margin: 0.25rem 0;\n  width: 100%;\n  transition: all .3 ease;\n  & > * {\n    flex: 1;\n    align-items: center;\n  }\n  @media screen and (min-width: 1024px) {\n    margin: 0.5rem 0;\n    flex-grow: ", ";\n    & > * {\n      margin: 0 0.5rem;\n    }\n  }\n  @media screen and (max-width: 1023px) {\n    &:first-of-type, &:last-of-type {\n      margin-top: 0.5rem;\n    }\n  }\n"]); return Yn = function() { return n }, n }

            function Qn() { var n = Object(u.a)(["\n  display: flex;\n  width: 100%;\n  @media (max-width: 1023px) {\n    flex-direction: column;\n  }\n  @media screen and (min-width: 1024px) {\n    flex-wrap: wrap;\n  }\n"]); return Qn = function() { return n }, n }

            function ne() { var n = Object(u.a)(["\n    -webkit-box-shadow: none;\n    box-shadow: none;\n"]); return ne = function() { return n }, n }

            function ee() { var n = Object(u.a)(["\n    background-color: #fff;\n    border-radius: 0.5rem;\n    -webkit-box-shadow: none;\n    position: relative;\n    top: -56px;\n    margin-top: -58px;\n    width: 100%;\n    box-shadow: inset 0 -1px 0 0 rgba(0,0,0,.1), 0 0.5rem 1rem 0 rgba(19,41,104,.2);\n    @media (max-width: 1023px) {\n      padding: 0.75rem;\n    }\n    @media (min-width: 1024px) {\n      padding: 1rem;\n      margin-top: -127px;\n    }\n"]); return ee = function() { return n }, n } var te = f.b.div(ee()),
                re = f.b.div(ne()),
                ae = f.b.div(Qn()),
                ie = f.b.div(Yn(), (function(n) { return n.flexGrow })),
                ce = f.b.div(Xn()),
                oe = function() { var n = Object(i.b)("home").t,
                        e = Object(r.useState)(new Date),
                        t = Object(B.a)(e, 2),
                        c = t[0],
                        o = t[1],
                        u = Object(r.useState)(void 0),
                        l = Object(B.a)(u, 2),
                        d = l[0],
                        f = l[1],
                        m = Object(r.useState)(!0),
                        s = Object(B.a)(m, 2),
                        b = s[0],
                        p = s[1],
                        g = Object(r.useState)(""),
                        v = Object(B.a)(g, 2),
                        x = v[0],
                        w = v[1],
                        j = Object(r.useState)(""),
                        O = Object(B.a)(j, 2),
                        k = O[0],
                        y = O[1],
                        E = Object(r.useState)([]),
                        S = Object(B.a)(E, 2),
                        I = S[0],
                        z = S[1],
                        C = Object(Rn.a)(x, 500),
                        L = Object(Rn.a)(k, 500);
                    Object(r.useEffect)((function() { C && "string" === typeof C ? T(C) : z([]) }), [C]), Object(r.useEffect)((function() { b || f(void 0) }), [b]), Object(r.useEffect)((function() { L && "string" === typeof L ? T(L) : z([]) }), [L]); var T = function(n) { n.length > 2 && Object(D.e)(n).then((function(n) { return z(n.data.results) })).catch((function(n) { return console.log(n.response) })) }; return a.a.createElement(te, null, a.a.createElement(ce, null, a.a.createElement(Mn, { label: n("searchBar.oneWay"), checked: b, onChange: function() { return p(!b) } })), a.a.createElement(re, null, a.a.createElement("form", { onSubmit: function(n) { n && n.preventDefault(); var e = [{ name: "departureStation", value: x && x.value }, { name: "arrivalStation", value: k && k.value }, { name: "forwardDepartureDate", value: c && Object(ln.default)(c, "d-M-yyyy") }, { name: "backwardDepartureDate", value: d && Object(ln.default)(d, "d-M-yyyy") }];
                            Object(D.c)(e).then((function(n) { return window.location.href = n })) } }, a.a.createElement(h.b, { flexWrap: "wrap", flexDirection: "column" }, a.a.createElement(ae, null, a.a.createElement(ie, { flexGrow: b ? 4 : 3 }, a.a.createElement(Jn, { type: "text", placeholder: n("searchBar.fromPlaceholder"), value: "object" === typeof x ? x.name : x, onChange: function(n) { return w(n.target.value) }, result: I, showKey: "name", setObj: function(n) { return w(n) }, icon: "circle", iconPosition: "left", autoComplete: "departureStation" })), a.a.createElement(ie, { flexGrow: b ? 4 : 3 }, a.a.createElement(Jn, { type: "text", placeholder: n("searchBar.toPlaceholder"), value: "object" === typeof k ? k.name : k, onChange: function(n) { return y(n.target.value) }, result: I, showKey: "name", setObj: function(n) { return y(n) }, icon: "pin", autoComplete: "arrivalStation" })), a.a.createElement(ie, { flexGrow: b ? 2 : 4 }, a.a.createElement(Bn, { type: "date", icon: "calendar", selected: c, selectsStart: !0, minDate: new Date, endDate: d, onChange: function(n) { return o(n) } }), b ? null : a.a.createElement(Bn, { type: "date", placeholderText: n("searchBar.backwardDate"), icon: "calendar", selected: d, selectsEnd: !0, startDate: c, endDate: d, minDate: c, onChange: function(n) { return f(n) } })), a.a.createElement(ie, { flexGrow: 2 }, a.a.createElement(Dn.c, { type: "submit", primary: !0 }, n("searchBar.search")))))))) },
                ue = t(633),
                le = t(549);

            function de() { var n = Object(u.a)(['\n  background: url("', '") no-repeat center center / cover;\n  width: 2rem;\n  height: 2rem;\n  min-width: 2rem;\n  min-height: 2rem;\n  margin-right: 1rem;\n  border-radius: 5px;\n']); return de = function() { return n }, n }

            function fe() { var n = Object(u.a)(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  cursor: pointer;\n  text-decoration: none;\n  &:hover {\n    text-decoration: underline;\n  }\n"]); return fe = function() { return n }, n }

            function me() { var n = Object(u.a)(["\n  width: 50%;\n  padding: 1rem;\n  ", ";\n  @media(max-width: 480px) {\n    width: 100%;\n  }\n"]); return me = function() { return n }, n }

            function se() { var n = Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  align-items: flex-start;\n  align-content: flex-start;\n"]); return se = function() { return n }, n } var be = f.b.div(se()),
                pe = f.b.div(me(), (function(n) { return n.withHover ? "\n    &:hover {\n      background: rgba(0, 0, 0, 0.05);\n    }" : "" })),
                he = f.b.a(fe(), (function(n) { return n.theme.darkBlue })),
                ge = f.b.div(de(), (function(n) { return n.src })),
                ve = function() { var n = Object(r.useState)([]),
                        e = Object(B.a)(n, 2),
                        t = e[0],
                        u = e[1],
                        d = Object(i.b)("home").t; return Object(r.useEffect)((function() { var n = !0; return Object(le.k)().then((function(e) { return n ? u(e.data) : null })).catch((function() { return n ? u([]) : null })),
                            function() { return n = !1 } }), []), a.a.createElement(a.a.Fragment, null, a.a.createElement(c.b, null, d("usefulLinks")), a.a.createElement(c.a, null, a.a.createElement(be, null, t && t.length ? t.map((function(n, e) { return a.a.createElement(pe, { key: e, withHover: !0 }, n.externalLink ? a.a.createElement(he, { key: e, href: n.externalLink }, n.logo && a.a.createElement(ge, { src: Object(g.b)(n.logo) }), n[Object(m.f)("name")]) : a.a.createElement(he, { as: l.a, key: e, to: Object(m.g)(null, null, n) }, n.logo && a.a.createElement(ge, { src: Object(g.b)(n.logo) }), n[Object(m.f)("name")])) })) : Object(o.a)(Array(12)).map((function(n, e) { return a.a.createElement(pe, { key: e }, a.a.createElement(p.b, null)) }))))) };

            function xe() { var n = Object(u.a)(["\n  padding-top: 50%;\n  min-height: auto;\n"]); return xe = function() { return n }, n }

            function we() { var n = Object(u.a)(["\n  display: block;\n  color: ", ";\n  cursor: pointer;\n  text-decoration: none;\n  margin: 0.5rem;\n  &:hover {\n    text-decoration: underline;\n  }\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]); return we = function() { return n }, n }

            function je() { var n = Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  align-items: flex-start;\n  padding: 1rem 0;\n"]); return je = function() { return n }, n } var Oe = f.b.div(je()),
                ke = Object(f.b)(l.a)(we(), (function(n) { return n.theme.darkBlue })),
                ye = Object(f.b)(tn)(xe()),
                Ee = function() { var n = Object(i.b)("home").t,
                        e = Object(r.useState)([]),
                        t = Object(B.a)(e, 2),
                        u = t[0],
                        l = t[1],
                        d = Object(r.useState)([]),
                        f = Object(B.a)(d, 2),
                        s = f[0],
                        v = f[1],
                        x = Object(r.useState)([]),
                        w = Object(B.a)(x, 2),
                        j = w[0],
                        O = w[1],
                        k = { dots: !1, initialSlide: 0, slidesToShow: 1, slidesToScroll: 1, autoplay: !0, autoplaySpeed: 5e3 };
                    Object(r.useEffect)((function() { var n = !0; return Object(Z.d)(!0, "statistic,otherStatistic").then((function(e) { if (!n) return null;
                                l(e.data.filter((function(n) { return "statistic" === n.code }))), v(e.data.filter((function(n) { return "otherStatistic" === n.code }))) })).catch((function() { return null })), Object(le.j)().then((function(e) { return n ? O(e.data) : null })).catch((function() { return n ? O([]) : null })),
                            function() { return n = !1 } }), []); var y = function(n) { window.open(n, "_blank") }; return a.a.createElement(a.a.Fragment, null, a.a.createElement(c.b, null, n("ktzhStatistics")), a.a.createElement(c.a, null, a.a.createElement(Oe, null, a.a.createElement(an, null, a.a.createElement(en, null, a.a.createElement(b.a, k, u && u.length ? u.map((function(n, e) { return a.a.createElement(tn, { key: e, src: Object(g.b)(n[Object(m.f)("file")]), haveLink: n.link && "/" !== n.link, onClick: function() { return n.link && "/" !== n.link ? y(n.link) : null } }) })) : Object(o.a)(Array(3)).map((function(n, e) { return a.a.createElement(p.a, { key: e, big: !0 }) }))))), a.a.createElement(an, { withPadding: !0, style: { paddingLeft: 0 } }, a.a.createElement(b.a, Object.assign({ arrows: !1 }, k), s && s.length ? s.map((function(n, e) { return a.a.createElement(ye, { key: e, src: Object(g.b)(n[Object(m.f)("file")]), haveLink: n.link && "/" !== n.link, onClick: function() { return n.link && "/" !== n.link ? y(n.link) : null } }) })) : a.a.createElement(p.a, { medium: !0 })), a.a.createElement(h.b, { flexDirection: "column" }, j && j.length ? j.map((function(n, e) { return a.a.createElement(ke, { key: e, to: Object(m.g)(null, null, n) }, n[Object(m.f)("name")]) })) : a.a.createElement(a.a.Fragment, null, a.a.createElement(p.b, null), a.a.createElement(p.b, null))))))) };
            e.default = function() { var n = Object(i.b)("home").t; return a.a.createElement(a.a.Fragment, null, a.a.createElement(ue.Helmet, null, a.a.createElement("title", null, n("seoTitle"))), a.a.createElement("div", { className: "railwaysKZ__mainGridElement" }, a.a.createElement(c.e, null, a.a.createElement(c.h, null, a.a.createElement(c.f, null, a.a.createElement(c.d, null, a.a.createElement(c.g, null, a.a.createElement(c.j, null, n("subTitle")))))), a.a.createElement(c.d, null, a.a.createElement(oe, null))), a.a.createElement(L, null), a.a.createElement(c.d, null, a.a.createElement(c.i, null, a.a.createElement(c.c, null, a.a.createElement(q, null)), a.a.createElement(c.c, null, a.a.createElement(ve, null))), a.a.createElement(c.i, null, a.a.createElement(c.c, null, a.a.createElement(un, null)), a.a.createElement(c.c, null, a.a.createElement(Ee, null)))))) } } }
]);