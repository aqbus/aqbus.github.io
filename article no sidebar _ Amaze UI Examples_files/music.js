//兼容大部分的app，微信和浏览器的音乐后台播放。
    document.addEventListener('DOMContentLoaded', function() {
        // 音乐播放
        function autoPlayMusic() {
            var audio = document.getElementById('bg-music');
            audio.play();
            document.addEventListener("WeixinJSBridgeReady", function() {
                audio.play();
            }, false);
            // 自动播放音乐效果，解决浏览器或者APP自动播放问题
            function musicInBrowserHandler() {
                musicPlay(true);
                document.body.removeEventListener('touchstart', musicInBrowserHandler);
            }
            document.body.addEventListener('touchstart', musicInBrowserHandler);

            // 自动播放音乐效果，解决微信自动播放问题
            function musicInWeixinHandler() {
                musicPlay(true);
                document.addEventListener("WeixinJSBridgeReady", function() {
                    musicPlay(true);
                }, false);
                document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
            }
            document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
        }

        function musicPlay(isPlay) {
            var media = document.querySelector('#bg-music');
            if (isPlay && media.paused) {
                media.play();
            }
            if (!isPlay && !media.paused) {
                media.pause();
            }
        }
        autoPlayMusic();
    });