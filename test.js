var init = function () {
   var options = {
      src: 'https://aldotcon.github.io/my-first-repo/stream.mpd',
      type: 'application/dash+xml',
      keySystemOptions: [
          {
             name: 'org.w3.clearkey',
             options: {
                //serverURL: 'api/dashkey',
                clearkeys: {
                   "syb4lbaiTMWk3HCZVygFnA": "YX2KElooTfSOPGsYZjSKPw"
                }
             }
          }
      ]
   };
   var player = videojs('example-video');
   player.src(options);
   player.play();
};
