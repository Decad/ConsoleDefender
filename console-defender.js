(function(){
    Object.defineProperty(window, "console", {
        configurable: false
    });

    Object.defineProperty(console, '_commandLineAPI', { 
        configurable: false
    })
})()