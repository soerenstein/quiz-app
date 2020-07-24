// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js.d818e0ef.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;

        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        } // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.


        if (previousRequire) {
          return previousRequire(name, true);
        } // Try the node require function if it exists.


        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};
      var module = cache[name] = new newRequire.Module(name);
      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;

  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]); // CommonJS

    if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
      module.exports = mainExports; // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      }); // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  } // Override the current require with this new one


  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
}({
  "src/js/util.js": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.get = get;
    exports.getAll = getAll;

    function get(selector) {
      return document.querySelector(selector);
    }

    function getAll(selector) {
      return document.querySelectorAll(selector);
    } // function addBookmarkLogic(card) {
    //     const bookmark = card.querySelector('.bookmark')
    //     bookmark.addEventListener('click', (event) => {
    //       event.stopPropagation()
    //       bookmark.classList.toggle('bookmarked')
    //     })
    //   }

  }, {}],
  "src/js/nav.js": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Navigation = Navigation;

    var _util = require("./util");

    function Navigation() {
      var indexPage = (0, _util.get)('#index_page');
      var bookmarkPage = (0, _util.get)('#bookmark_page');
      var createPage = (0, _util.get)('#create_page');
      var profilePage = (0, _util.get)('#profile_page');
      var indexHeader = (0, _util.get)('#header1');
      var bookmarkHeader = (0, _util.get)('#header2');
      var createHeader = (0, _util.get)('#header3');
      var profileHeader = (0, _util.get)('#header4');
      var navHome = (0, _util.get)('#nav_home');
      var navBookmark = (0, _util.get)('#nav_bookmark');
      var navCreate = (0, _util.get)('#nav_create');
      var navProfile = (0, _util.get)('#nav_profile');
      navHome.addEventListener('click', function () {
        // index header
        indexHeader.classList.remove('hidden');
        bookmarkHeader.classList.add('hidden');
        createHeader.classList.add('hidden');
        profileHeader.classList.add('hidden');
      });
      navHome.addEventListener('click', function () {
        // index page 
        indexPage.classList.remove('hidden');
        bookmarkPage.classList.add('hidden');
        createPage.classList.add('hidden');
        profilePage.classList.add('hidden');
      });
      navBookmark.addEventListener('click', function () {
        // bookmark header 
        bookmarkHeader.classList.remove('hidden');
        indexHeader.classList.add('hidden');
        createHeader.classList.add('hidden');
        profileHeader.classList.add('hidden');
      });
      navBookmark.addEventListener('click', function () {
        // bookmark page 
        bookmarkPage.classList.remove('hidden');
        indexPage.classList.add('hidden');
        createPage.classList.add('hidden');
        profilePage.classList.add('hidden');
      });
      navCreate.addEventListener('click', function () {
        // create header 
        createHeader.classList.remove('hidden');
        bookmarkHeader.classList.add('hidden');
        indexHeader.classList.add('hidden');
        profileHeader.classList.add('hidden');
      });
      navCreate.addEventListener('click', function () {
        // create page 
        createPage.classList.remove('hidden');
        bookmarkPage.classList.add('hidden');
        indexPage.classList.add('hidden');
        profilePage.classList.add('hidden');
      });
      navProfile.addEventListener('click', function () {
        // profile header 
        profileHeader.classList.remove('hidden');
        bookmarkHeader.classList.add('hidden');
        createHeader.classList.add('hidden');
        indexHeader.classList.add('hidden');
      });
      navProfile.addEventListener('click', function () {
        // profile page 
        profilePage.classList.remove('hidden');
        bookmarkPage.classList.add('hidden');
        createPage.classList.add('hidden');
        indexPage.classList.add('hidden');
      });
    }
  }, {
    "./util": "src/js/util.js"
  }],
  "src/js/card.js": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.card = card;

    var _util = require("./util");

    function card() {
      var bookmarkButton1 = document.querySelector('#bookmark1');
      bookmarkButton1.addEventListener('click', function () {
        bookmarkButton1.classList.toggle('bookmark__filled');
      });
      var bookmarkButton2 = document.querySelector('#bookmark2');
      bookmarkButton2.addEventListener('click', function () {
        bookmarkButton2.classList.toggle('bookmark__filled');
      });
      var bookmarkButton3 = document.querySelector('#bookmark3');
      bookmarkButton3.addEventListener('click', function () {
        bookmarkButton3.classList.toggle('bookmark__filled');
      });
      var bookmarkButton4 = document.querySelector('#bookmark4');
      bookmarkButton4.addEventListener('click', function () {
        bookmarkButton4.classList.toggle('bookmark__filled');
      });
      var bookmarkButton5 = document.querySelector('#bookmark5');
      bookmarkButton5.addEventListener('click', function () {
        bookmarkButton5.classList.toggle('bookmark__filled');
      });
      var bookmarkButton6 = document.querySelector('#bookmark6');
      bookmarkButton6.addEventListener('click', function () {
        bookmarkButton6.classList.toggle('bookmark__filled');
      });
      var answerQuestion1 = (0, _util.get)('#answer1');
      var answerQuestion2 = (0, _util.get)('#answer2');
      var answerQuestion3 = (0, _util.get)('#answer3');
      var answerQuestion4 = (0, _util.get)('#answer4');
      var answerQuestion5 = (0, _util.get)('#answer5');
      var answerQuestion6 = (0, _util.get)('#answer6');
      var buttonAnswer1 = (0, _util.get)('#button-answer1');
      var buttonAnswer2 = (0, _util.get)('#button-answer2');
      var buttonAnswer3 = (0, _util.get)('#button-answer3');
      var buttonAnswer4 = (0, _util.get)('#button-answer4');
      var buttonAnswer5 = (0, _util.get)('#button-answer5');
      var buttonAnswer6 = (0, _util.get)('#button-answer6');
      buttonAnswer1.addEventListener('click', answerToggle(buttonAnswer1, answerQuestion1));
      buttonAnswer2.addEventListener('click', answerToggle(buttonAnswer2, answerQuestion2));
      buttonAnswer3.addEventListener('click', answerToggle(buttonAnswer3, answerQuestion3));
      buttonAnswer4.addEventListener('click', answerToggle(buttonAnswer4, answerQuestion4));
      buttonAnswer5.addEventListener('click', answerToggle(buttonAnswer5, answerQuestion5));
      buttonAnswer6.addEventListener('click', answerToggle(buttonAnswer6, answerQuestion6));

      function answerToggle(button, answer) {
        return function () {
          answer.classList.toggle('hidden');

          if (button.textContent === 'Show answer') {
            button.textContent = 'Hide answer';
          } else {
            button.textContent = 'Show answer';
          }

          return button, answer;
        };
      }
    } // const cardList = getAll('.answer')
    // cardList.forEach(setupCard)
    // function setupCard(card) {
    //   addToggleLogic(card)
    // }
    // function addToggleLogic (card) {
    //   const button = card.querySelector('answerbutton')
    //   const body = card.querySelector('.answerdiv')
    //   button.addEventListener('click', () => body.classList.toggle('hidden'))
    // }
    // function getAll(selector) {
    //   return document.querySelectorAll(selector)
    // }
    // let answerButton = get('#answerButton1')
    //  answerButton.addEventListener('click', () => {
    //  function 
    // )
    // function showAnswer1() {
    //    let content1 = document.getElementById("answerDiv1");
    //    if (content1.style.display === "none") {
    //      content1.style.display = "block";
    //    } else {
    //      content1.style.display = "none";
    //    }
    //    } 
    //    function showAnswer2() {
    //    let content2 = document.getElementById("answerDiv2");
    //    if (content2.style.display === "none") {
    //      content2.style.display = "block";
    //    } else {
    //      content2.style.display = "none";
    //    }
    // }
    //    function showAnswer3() {
    //    let content3 = document.getElementById("answerDiv3");
    //    if (content3.style.display === "none") {
    //      content3.style.display = "block";
    //    } else {
    //      content3.style.display = "none";
    //    }
    //    } 
    //    function showAnswer4() {
    //    let content4 = document.getElementById("answerDiv4");
    //    if (content4.style.display === "none") {
    //      content4.style.display = "block";
    //    } else {
    //      content4.style.display = "none";
    //    }
    //    } 
    //    function showAnswer5() {
    //    let content5 = document.getElementById("answerDiv5");
    //    if (content5.style.display === "none") {
    //      content5.style.display = "block";
    //    } else {
    //      content5.style.display = "none";
    //    }
    //    } 
    //    function showAnswer6() {
    //    let content6 = document.getElementById("answerDiv6");
    //    if (content6.style.display === "none") {
    //      content6.style.display = "block";
    //    } else {
    //      content6.style.display = "none";
    //    }
    //    }

  }, {
    "./util": "src/js/util.js"
  }],
  "src/js/create.js": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.resetInput = resetInput;

    var _util = require("./util");

    function resetInput() {
      var buttonSubmit = (0, _util.get)('#submit1');
      buttonSubmit.addEventListener('click', function (event) {
        event.preventDefault();
        input1.value = '';
        input2.value = '';
        input3.value = '';
      });
    }
  }, {
    "./util": "src/js/util.js"
  }],
  "src/js/index.js": [function (require, module, exports) {
    "use strict";

    var _util = require("./util");

    var _nav = require("./nav");

    var _card = require("./card");

    var _create = require("./create");

    console.log('Hello World!');
    (0, _util.get)();
    (0, _util.getAll)();
    (0, _nav.Navigation)();
    (0, _card.card)();
    (0, _create.resetInput)();
  }, {
    "./util": "src/js/util.js",
    "./nav": "src/js/nav.js",
    "./card": "src/js/card.js",
    "./create": "src/js/create.js"
  }],
  "node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [function (require, module, exports) {
    var global = arguments[3];
    var OVERLAY_ID = '__parcel__error__overlay__';
    var OldModule = module.bundle.Module;

    function Module(moduleName) {
      OldModule.call(this, moduleName);
      this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
          this._acceptCallbacks.push(fn || function () {});
        },
        dispose: function dispose(fn) {
          this._disposeCallbacks.push(fn);
        }
      };
      module.bundle.hotData = null;
    }

    module.bundle.Module = Module;
    var checkedAssets, assetsToAccept;
    var parent = module.bundle.parent;

    if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
      var hostname = "" || location.hostname;
      var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
      var ws = new WebSocket(protocol + '://' + hostname + ':' + "50550" + '/');

      ws.onmessage = function (event) {
        checkedAssets = {};
        assetsToAccept = [];
        var data = JSON.parse(event.data);

        if (data.type === 'update') {
          var handled = false;
          data.assets.forEach(function (asset) {
            if (!asset.isNew) {
              var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

              if (didAccept) {
                handled = true;
              }
            }
          }); // Enable HMR for CSS by default.

          handled = handled || data.assets.every(function (asset) {
            return asset.type === 'css' && asset.generated.js;
          });

          if (handled) {
            console.clear();
            data.assets.forEach(function (asset) {
              hmrApply(global.parcelRequire, asset);
            });
            assetsToAccept.forEach(function (v) {
              hmrAcceptRun(v[0], v[1]);
            });
          } else if (location.reload) {
            // `location` global exists in a web worker context but lacks `.reload()` function.
            location.reload();
          }
        }

        if (data.type === 'reload') {
          ws.close();

          ws.onclose = function () {
            location.reload();
          };
        }

        if (data.type === 'error-resolved') {
          console.log('[parcel] ✨ Error resolved');
          removeErrorOverlay();
        }

        if (data.type === 'error') {
          console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
          removeErrorOverlay();
          var overlay = createErrorOverlay(data);
          document.body.appendChild(overlay);
        }
      };
    }

    function removeErrorOverlay() {
      var overlay = document.getElementById(OVERLAY_ID);

      if (overlay) {
        overlay.remove();
      }
    }

    function createErrorOverlay(data) {
      var overlay = document.createElement('div');
      overlay.id = OVERLAY_ID; // html encode message and stack trace

      var message = document.createElement('div');
      var stackTrace = document.createElement('pre');
      message.innerText = data.error.message;
      stackTrace.innerText = data.error.stack;
      overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
      return overlay;
    }

    function getParents(bundle, id) {
      var modules = bundle.modules;

      if (!modules) {
        return [];
      }

      var parents = [];
      var k, d, dep;

      for (k in modules) {
        for (d in modules[k][1]) {
          dep = modules[k][1][d];

          if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
            parents.push(k);
          }
        }
      }

      if (bundle.parent) {
        parents = parents.concat(getParents(bundle.parent, id));
      }

      return parents;
    }

    function hmrApply(bundle, asset) {
      var modules = bundle.modules;

      if (!modules) {
        return;
      }

      if (modules[asset.id] || !bundle.parent) {
        var fn = new Function('require', 'module', 'exports', asset.generated.js);
        asset.isNew = !modules[asset.id];
        modules[asset.id] = [fn, asset.deps];
      } else if (bundle.parent) {
        hmrApply(bundle.parent, asset);
      }
    }

    function hmrAcceptCheck(bundle, id) {
      var modules = bundle.modules;

      if (!modules) {
        return;
      }

      if (!modules[id] && bundle.parent) {
        return hmrAcceptCheck(bundle.parent, id);
      }

      if (checkedAssets[id]) {
        return;
      }

      checkedAssets[id] = true;
      var cached = bundle.cache[id];
      assetsToAccept.push([bundle, id]);

      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        return true;
      }

      return getParents(global.parcelRequire, id).some(function (id) {
        return hmrAcceptCheck(global.parcelRequire, id);
      });
    }

    function hmrAcceptRun(bundle, id) {
      var cached = bundle.cache[id];
      bundle.hotData = {};

      if (cached) {
        cached.hot.data = bundle.hotData;
      }

      if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
        cached.hot._disposeCallbacks.forEach(function (cb) {
          cb(bundle.hotData);
        });
      }

      delete bundle.cache[id];
      bundle(id);
      cached = bundle.cache[id];

      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        cached.hot._acceptCallbacks.forEach(function (cb) {
          cb();
        });

        return true;
      }
    }
  }, {}]
}, {}, ["node_modules/parcel-bundler/src/builtins/hmr-runtime.js", "src/js/index.js"], null);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50550" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js.d818e0ef.js"], null)
//# sourceMappingURL=/js.d818e0ef.0bc2b75e.js.map