var init = function () {
   var options = {
      src: 'video/dash/stream.mpd',
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
