function WX_proxy_shell (option) {
    let opts = option;
    return function (global) {
        new WX_proxy(opts, global)
    }
}

function WX_proxy (opts, global) {
    this.global = global;
    this.data = global.data;
    this.opts = opts;
    this.moisturises = opts.moisturises;
    this.init();
}
WX_proxy.prototype.init = function () {
    this.proxy_load();
    this.opts.injection.forEach(k => {
        let kFn = this.global.k;
    })
}
WX_proxy.prototype.proxy = function (_this) {
    Object.keys(this.data).forEach(k => {
        _this._ES5_DefinePro(k, _this, this.moisturises)
    })
}
WX_proxy.prototype._ES5_DefinePro = function (k, _this, fn) {
    Object.defineProperty(this.data, k, _this.proxy_handler(this.data, k, this.data[k], fn))
}
WX_proxy.prototype.proxy_handler = function (o, k, value, fn) {
    return {
        configurable:true,
        enumerable:true,
        get: function () {
            return value
        },
        set: function (val) {
          //  fn.apply(null, value, val)
            value = val
        }
    }
}
WX_proxy.prototype.proxy_load =function () {
    let _this = this
    let load = this.global.onLoad;
    this.global.onLoad = function () {
        _this.proxy.call(this, _this)
        load.apply(this, arguments)
    }
}

 module.exports = WX_proxy_shell
