function PageForeach (opts, injectionFn) { //页面守卫
    return function () {
        let p = Page,
            resetTargetMap = opts.resetTarget,
            resetTargetKeys = Object.keys(resetTargetMap),
            currentFn = {};
        resetTargetKeys.forEach(k => {
            currentFn[k] = resetTargetMap[k]
        });
        Page = function () {
            let argus = Array.prototype.slice.call(arguments,0)[0];
            resetTargetKeys.forEach(k => {
                argus[k] = resetFn(argus[k],currentFn[k])
            })
            injectionFn && injectionFn.call(this, argus)
            p.apply(this,arguments)
        }
    }

}

