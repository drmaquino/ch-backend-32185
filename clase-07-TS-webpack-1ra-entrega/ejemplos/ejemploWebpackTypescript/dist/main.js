(() => {
    "use strict";
    var e = {
        130: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function () {
                function e(e, t) {
                    this.fname = e, this.lname = t
                } return e.prototype.getFullName = function () {
                    return "".concat(this.fname, " ").concat(this.lname)
                }, e
            }();
            t.default = n
        }, 607: function (e, t, n) {
            var o = this && this.__importDefault || function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = o(n(860)), u = n(721), a = new (o(n(130)).default)("Coder", "House"), i = (0, r.default)();
            i.get("/", (function (e, t) {
                t.send({
                    time: (0, u.getTime)(), name: a.getFullName()
                })
            })), i.listen(8080, (function () {
                console.log("conectado al puerto: ".concat(8080))
            }))
        }, 721: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getTime = void 0, t.getTime = function () {
                return {
                    fyh: (new Date).toLocaleString(), timestamp: Date.now()
                }
            }
        }, 860: e => {
            e.exports = require("express")
        }
    }, t = {

    };
    !function n(o) {
        var r = t[o];
        if (void 0 !== r) return r.exports;
        var u = t[o] = {
            exports: {

            }
        };
        return e[o].call(u.exports, u, u.exports, n), u.exports
    }(607)
})();
