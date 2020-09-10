$(document).ready(function () {
    (function ($) {

        const videosId = ['4KmUkArAyfI', 'GVOGEgqwj1A', '4KmUkArAyfI']
        let prevVideo = ''
        let isFirst = true
        let currentVideoTime
        const arrPlayers = []
        let currentVideoPlayer

        renderVideos(videosId)

        function showActiveVideo(i = 0) {
            Array.from(document.querySelectorAll('.video-block-slider__item--active')).forEach(item => {
                item.classList.remove('video-block-slider__item--active')
            })
            addActive(i)
        }

        function createNode(nodeName, classes) {
            const node = document.createElement(nodeName)
            node.classList.add(classes)

            return node
        }

        function renderVideos(arrVideos) {
            const videoContainer = document.querySelector('.video-block-slider')
            const fragment = document.createDocumentFragment()

            for(let i = 0; i < arrVideos.length; i++) {
                let elem = createNode('div', 'video-block-slider__item')
                fragment.appendChild(elem)
            }

            videoContainer.appendChild(fragment)

            const videItems = Array.from(document.querySelectorAll('.video-block-slider__item'))

            videItems.forEach(function (item, i) {
                item.setAttribute('data-video', i)
                const play = onYoutubePlayer(item, videosId[i])
                arrPlayers.push(play)
            })
        }

        function addActive(i = 1) {
            document.querySelector(`[data-video="${i}"]`).classList.add('video-block-slider__item--active')
        }

        function stopAllVideo(arrVideos, elPlay) {
            arrPlayers.forEach(item => {
                item.pauseVideo()
            })

            elPlay.playVideo()
            currentVideoPlayer = elPlay
        }

        const play = onYoutubePlayer(document.querySelector('.video-block-slider-big'), videosId[0])
        const bigVideo = document.querySelector('.video-block-slider-big')
        bigVideo.setAttribute('data-video', true)

        function onYoutubePlayer(whereSelector, videId) {
            let player = new YT.Player(whereSelector, {
                height: '390',
                width: '640',
                videoId: videId,
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onStateChange
                }
            });

            return player
        }

        function conditionPlayVideo(whenSearch, target) {
            if (target[whenSearch].classList.contains('video-block-slider-big') && !isFirst) {
                play.playVideo()

                setTimeout(() => {
                    currentVideoPlayer.pauseVideo()
                    currentVideoPlayer.playVideo()
                }, 2500)
            }

            if (target[whenSearch].classList.contains('video-block-slider-big')) {
                isFirst = false
            }
        }

        function conditionPlayerChange(whenSearch, target, e) {
            if (e.data === 1 && target[whenSearch].dataset.video !== 'true') {
                if (prevVideo === target[whenSearch].src) {
                    play.playVideo()
                    return
                }
                bigVideo.setAttribute('src', target[whenSearch].src)
                showActiveVideo(+target[whenSearch].dataset.video)
                stopAllVideo(arrPlayers, target)
                play.playVideo()
                try {
                    currentVideoTime = (target.playerInfo.currentTime)
                } catch (msg) {}
                prevVideo = target[whenSearch].src
            }

            if (e.data === 2 && target[whenSearch].dataset.video !== 'true') {
                try {
                    play.seekTo(target.playerInfo.currentTime)
                } catch (msg) {}
                play.pauseVideo()
            }
        }

        function onPlayerReady(e) {
            e.target.stopVideo();

            try {
                conditionPlayVideo('l', e.target)
            } catch (name) {
                conditionPlayVideo('a', e.target)
            }
        }

        showActiveVideo()

        function onStateChange(e) {
            try {
                conditionPlayerChange('f', e.target, e)
            } catch (error) {
                conditionPlayerChange('a', e.target, e)
            }
        }
    })(jQuery);
})