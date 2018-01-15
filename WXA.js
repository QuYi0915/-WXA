(function (window) {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var context = new AudioContext();
    var ua = window.navigator.userAgent.toLowerCase();
    var isWX = ua.indexOf('micromessenger') !== -1;
    window.wxa = function () {
    };
    wxa.prototype.init = function (url, autoplay, loop) {
        var source = context.createBufferSource();
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';
        request.onload = function () {
            if (request.status == 200) {
                var audioData = request.response;
                context.decodeAudioData(audioData, function (buffer) {
                    source.buffer = buffer;
                    source.connect(context.destination);
                    isfun(function () {
                        playconfig(source, autoplay, loop)
                    });
                }, function (e) {
                    console.log('Error decoding audio data:' + e);
                });
            } else {
                console.log('Audio didn\'t load successfully; error code:' + request.statusText);
            }
        };
        request.send();
        return source
    };
    wxa.prototype.start = function (source) {
        var nowsource = context.createBufferSource();
        nowsource.buffer = source.buffer;
        nowsource.connect(context.destination);
        isfun(function () {
            nowsource.start(0, 0)
        })
    };
    var playconfig = function (source, now, loop) {
        now && source.start(0, 0);
        loop && (source.loop = true);
    };
    var isfun = function (fn) {
        if (isWX) {
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                fn();
            });
        } else {
            fn();
        }
    };
    window.$WXA = new wxa();
})(window);