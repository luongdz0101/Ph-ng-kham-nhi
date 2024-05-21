"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _index = _interopRequireDefault(require("../models/index"));
var _emailServices = _interopRequireDefault(require("./emailServices"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = require("sequelize"),
  Op = _require.Op;
var createNewQuestion = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!(!data.email || !data.fullName || !data.address || !data.phoneNumber || !data.question)) {
                      _context.next = 4;
                      break;
                    }
                    resolve({
                      errCode: 1,
                      errMessage: 'Missing Parameter'
                    });
                    _context.next = 7;
                    break;
                  case 4:
                    _context.next = 6;
                    return _index["default"].question.create({
                      fullName: data.fullName,
                      email: data.email,
                      address: data.address,
                      phoneNumber: data.phoneNumber,
                      question: data.question,
                      image: data.image
                    });
                  case 6:
                    resolve({
                      errCode: 0,
                      errMessage: 'Post success'
                    });
                  case 7:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x2, _x3) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function createNewQuestion(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getQuestion = function getQuestion() {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _index["default"].question.findAll({
              where: {
                reply: null
              }
            });
          case 3:
            data = _context3.sent;
            if (data && data.length > 0) {
              data.map(function (item) {
                item.image = new Buffer(item.image, 'base64').toString('binary');
                return item;
              });
            }
            if (!data) data = {};
            resolve({
              errMessage: 'ok',
              errCode: 0,
              data: data
            });
            _context3.next = 12;
            break;
          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 9]]);
    }));
    return function (_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var getReply = function getReply() {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _index["default"].question.findAll({
              where: {
                reply: _defineProperty({}, Op.not, null)
              }
            });
          case 3:
            data = _context4.sent;
            if (data && data.length > 0) {
              data.map(function (item) {
                item.image = new Buffer(item.image, 'base64').toString('binary');
                return item;
              });
            }
            if (!data) data = {};
            resolve({
              errMessage: 'ok',
              errCode: 0,
              data: data
            });
            _context4.next = 12;
            break;
          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 12:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 9]]);
    }));
    return function (_x6, _x7) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var search = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(searchTerm) {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
              var data;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    if (searchTerm) {
                      _context5.next = 5;
                      break;
                    }
                    resolve({
                      errCode: 1,
                      errMessage: 'Missing Parameter'
                    });
                    _context5.next = 18;
                    break;
                  case 5:
                    data = [];
                    if (!(searchTerm === 'All')) {
                      _context5.next = 12;
                      break;
                    }
                    _context5.next = 9;
                    return _index["default"].specialty.findAll({
                      attributes: {
                        exclude: ['descriptionHtml', 'descriptionMarkdown']
                      }
                    });
                  case 9:
                    data = _context5.sent;
                    _context5.next = 15;
                    break;
                  case 12:
                    _context5.next = 14;
                    return _index["default"].specialty.findAll({
                      where: _defineProperty({}, Op.or, [{
                        name: _defineProperty({}, Op.like, '%' + searchTerm + '%')
                      }]),
                      attributes: {
                        exclude: ['descriptionHtml', 'descriptionMarkdown']
                      }
                    });
                  case 14:
                    data = _context5.sent;
                  case 15:
                    if (data && data.length > 0) {
                      data.map(function (item) {
                        item.image = new Buffer(item.image, 'base64').toString('binary');
                        return item;
                      });
                    }
                    if (!data) data = {};
                    resolve({
                      errMessage: 'ok',
                      errCode: 0,
                      data: data
                    });
                  case 18:
                    _context5.next = 23;
                    break;
                  case 20:
                    _context5.prev = 20;
                    _context5.t0 = _context5["catch"](0);
                    reject(_context5.t0);
                  case 23:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, null, [[0, 20]]);
            }));
            return function (_x9, _x10) {
              return _ref6.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function search(_x8) {
    return _ref5.apply(this, arguments);
  };
}();
var getQuestionById = function getQuestionById(id) {
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            if (id) {
              _context7.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing Parameter'
            });
            _context7.next = 11;
            break;
          case 5:
            _context7.next = 7;
            return _index["default"].question.findOne({
              where: {
                id: id
              }
            });
          case 7:
            data = _context7.sent;
            if (data && data.image) {
              data.image = new Buffer(data.image, 'base64').toString('binary');
            }
            if (!data) data = {};
            resolve({
              errMessage: 'ok',
              errCode: 0,
              data: data
            });
          case 11:
            _context7.next = 16;
            break;
          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](0);
            reject(_context7.t0);
          case 16:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 13]]);
    }));
    return function (_x11, _x12) {
      return _ref7.apply(this, arguments);
    };
  }());
};
var getDoctorInfo = function getDoctorInfo() {
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _index["default"].User.findAll({
              attributes: {
                exclude: ['id', 'doctorId',, 'image']
              },
              include: [{
                model: _index["default"].Allcode,
                as: 'positionData',
                attributes: ['valueEn', 'valueVi', 'keyMap']
              }, {
                model: _index["default"].Allcode,
                as: 'genderData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].Doctor_info,
                attributes: {
                  exclude: ['id', 'image']
                },
                include: [{
                  model: _index["default"].specialty,
                  as: 'specialtyData',
                  attributes: ['name']
                }]
              }],
              raw: true,
              nest: true
            });
          case 3:
            data = _context8.sent;
            if (!data) data = {};
            resolve({
              errCode: 0,
              data: data
            });
            _context8.next = 11;
            break;
          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 11:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 8]]);
    }));
    return function (_x13, _x14) {
      return _ref8.apply(this, arguments);
    };
  }());
};
var sendQuestion = function sendQuestion(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var sendReply;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            if (data.email) {
              _context9.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "missing "
            });
            _context9.next = 14;
            break;
          case 5:
            _context9.next = 7;
            return _index["default"].question.findOne({
              where: {
                email: data.email,
                fullName: data.fullName
              },
              raw: false
            });
          case 7:
            sendReply = _context9.sent;
            console.log(sendReply);
            if (!sendReply) {
              _context9.next = 14;
              break;
            }
            sendReply.reply = data.reply;
            sendReply.image = data.image;
            _context9.next = 14;
            return sendReply.save();
          case 14:
            _context9.next = 16;
            return _emailServices["default"].sendReply(data);
          case 16:
            resolve({
              errCode: 0,
              errMessage: 'Ok'
            });
            _context9.next = 22;
            break;
          case 19:
            _context9.prev = 19;
            _context9.t0 = _context9["catch"](0);
            reject(_context9.t0);
          case 22:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 19]]);
    }));
    return function (_x15, _x16) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var deleteQuestion = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(questionId) {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          return _context11.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
              var question;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.prev = 0;
                    _context10.next = 3;
                    return _index["default"].question.findOne({
                      where: {
                        id: questionId
                      },
                      raw: false
                    });
                  case 3:
                    question = _context10.sent;
                    if (!question) {
                      _context10.next = 10;
                      break;
                    }
                    _context10.next = 7;
                    return question.destroy();
                  case 7:
                    resolve({
                      errCode: 0,
                      errMessage: 'Deleted info doctor succeed! '
                    });
                    _context10.next = 11;
                    break;
                  case 10:
                    resolve({
                      errCode: 2,
                      errMessage: 'No data! '
                    });
                  case 11:
                    _context10.next = 16;
                    break;
                  case 13:
                    _context10.prev = 13;
                    _context10.t0 = _context10["catch"](0);
                    reject(_context10.t0);
                  case 16:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, null, [[0, 13]]);
            }));
            return function (_x18, _x19) {
              return _ref11.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function deleteQuestion(_x17) {
    return _ref10.apply(this, arguments);
  };
}();
module.exports = {
  createNewQuestion: createNewQuestion,
  getQuestion: getQuestion,
  search: search,
  getQuestionById: getQuestionById,
  getDoctorInfo: getDoctorInfo,
  sendQuestion: sendQuestion,
  getReply: getReply,
  deleteQuestion: deleteQuestion
};