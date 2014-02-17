(function() {
  var reveal = function() {
    $('#container').fadeIn(250);
  };
  $('body').waitForImages({
    finished: reveal,
    waitForAll: true
  });

  window.Map = {};

  window.Map.init = function(options) {
    var addressUri = options.address.replace(/\s/g, '+');
    function getDirections() {
      window.open('https://www.google.com/maps/dir/Current+Location/' + addressUri, '_blank');
    };

    function DirectionsControl(map) {
      var controlDiv = document.createElement('div')
      // Set CSS styles for the DIV containing the control
      // Setting padding to 5 px will offset the control
      // from the edge of the map.
      controlDiv.style.padding = '5px';

      // Set CSS for the control border.
      var controlUI = document.createElement('div');
      controlUI.style.backgroundColor = 'white';
      controlUI.style.borderStyle = 'solid';
      controlUI.style.borderWidth = '1px';
      controlUI.style.borderColor = '#ccc';
      controlUI.style.cursor = 'pointer';
      controlUI.style.textAlign = 'center';
      controlUI.style.boxShadow = '0px 1px 4px #999';
      controlUI.title = 'Click for Directions';
      controlDiv.appendChild(controlUI);

      // Set CSS for the control interior.
      var controlText = document.createElement('div');
      controlText.style.fontFamily = "'Alegreya Sans', 'Arial', sans-serif";
      controlText.style.fontSize = '12px';
      controlText.style.paddingLeft = '4px';
      controlText.style.paddingRight = '4px';
      controlText.style.paddingTop = '2px';
      controlText.style.paddingBottom = '2px';
      controlText.innerHTML = 'Directions';
      controlUI.appendChild(controlText);

      // Setup the click event listeners: simply set the map to Chicago.
      google.maps.event.addDomListener(controlUI, 'click', getDirections);

      this.div = controlDiv;
      this.div.index = 1;
    };

    google.maps.event.addDomListener(window, 'load', function() {
      var 
        center = new google.maps.LatLng(options.ll[0], options.ll[1]),
        canvas = document.getElementById('map'),
        mapOptions = {
          center: center,
          draggable: false,
          zoom: 14,
          maxZoom: 14,
          minZoom: 14,
          disableDefaultUI: true,
          styles: [
            {
              featureType: 'all',
              stylers: [
                { hue: '#828C96' },
                { saturation: -75 }
              ]
            },
            {
              featureType: 'all', 
              elementType: 'labels',
              stylers: [
                { visibility: 'off' }
              ]
            },
            {
              featureType: 'road', 
              elementType: 'labels',
              stylers: [
                { visibility: 'on' }
              ]
            }
          ]
        },
        map = new google.maps.Map(canvas, mapOptions),
        dirControl = new DirectionsControl(map),
        infoWindow = new google.maps.InfoWindow({
          content: "<div style='float:left;background-image:url(\"" + 
            options.img +
            "\");background-size:100% 100%;width:30px;height:30px;margin-right:5px;'></div>" + 
            "<div style='float:left;line-height:29px;font-size:16px;font-family:Alegreya Sans, Arial, sans-serif;'>" + 
            options.title + "</div>"  
        });
        marker = new google.maps.Marker({
          position: center,
          map: map,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: '#333',
            strokeColor: '#333',
            scale: 2
          },
          title: options.title
        });

      google.maps.event.addDomListener(map, 'click', getDirections);
      setInterval(function() { map.setCenter(center); }, 100);
      map.controls[google.maps.ControlPosition.TOP_RIGHT].push(dirControl.div);
      infoWindow.open(map, marker);
    });
  }
}());

