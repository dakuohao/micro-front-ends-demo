//声明一个入口文件，用于暴漏相对应的生命周期
//额外创建一个script文件entry用于 export 相对应的 lifecycles

const render = ($) => {
    //页面渲染完了 执行操作 比如使用jQuery
    $('#h5-content').html('Hello, render with jQuery');
    return Promise.resolve();
};

((global) => {
    global['h5-demo'] = {
        bootstrap: () => {
            console.log('生命周期 bootstrap');
            return Promise.resolve();
        },
        mount: () => {
            console.log('生命周期 mount');
            return render($);
        },
        unmount: () => {
            console.log('生命周期 unmount');
            return Promise.resolve();
        },
    };
})(window);