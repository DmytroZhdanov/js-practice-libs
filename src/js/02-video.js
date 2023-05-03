import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);
const playerCurrentTime =
  JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0;

iframePlayer.on('timeupdate', throttle(onTimeupdate, 1000));
iframePlayer.setCurrentTime(playerCurrentTime);

function onTimeupdate(data) {
  const timeToStore = JSON.stringify(data.seconds);
  localStorage.setItem('videoplayer-current-time', timeToStore);
}