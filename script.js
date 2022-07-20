//
// Class to manage map functions
class DealershipMap {
  constructor(region_data) {
    this.RegionData = region_data; // array of region data
    this.map = null; // Google map object
    this.RegionMarkers = []; // contains array of region markers
    this.DealershipMarkers = []; // contains array of dealership markers
    this.DealershipInfoWindow = []; // contains array of infoWindows
    //
    // stores user activity on the map
    this.MapState = {
      // user location
      userLocation: null,
      // "region_view" or "dealership_view"
      state: "region_view",
      // clicks in each new state
      num_of_clicks: 0,
      // regions opened during session
      num_of_regions_browsed: 0,
    };
  } // constructor ends

  //
  // Set of functions executed when the document loads
  docReady() {
    // ask user location
    dealershipMap.userLocation();

    // send props data to create new map
    var mapProp = {
      center: new google.maps.LatLng(-28.6743815, 25.9448766),
      zoom: 6,
    };
    // create and load map
    this.loadMap(mapProp);

    // populate Region Map Markers
    this.populateRegionMapMarkers();

    // load the Province buttons
    document.getElementById("regionButtons").innerHTML =
      this.getProvinceButtons();

    // place the zoom-out-to-region button position in its parent
    var button = document.getElementById("zoomOutButton");
  } // docReady ends

  //
  // opens map region
  openMapToRegion(region_Name) {
    this.MapState.num_of_regions_browsed++;
    // array of marker locations - to reset the map window to plotted makers
    var arrMarkerLocations = [];
    // iterate through regions
    this.RegionData.forEach((region) => {
      // find matching region
      if (region.regionName === region_Name) {
        // remove region markers
        this.RegionMarkers.forEach((marker) => {
          marker.setMap(null);
          // Change map state
          this.MapState.state = "dealership_view";
          // reset clicks in view
          this.manageClicks(0); // reset to 0
        });
        // iterate through dealerships
        region.dealerships.forEach((dealership) => {
          // add to array of maker locations
          arrMarkerLocations.push(dealership.location);

          // create dealership marker
          var marker = new google.maps.Marker({
            position: dealership.location,
            map: this.map,
            title: dealership.dealerName,
            // label: dealership.totalCars.toString(),
            animation: google.maps.Animation.DROP,
          });
          // add dealership markers to array
          this.DealershipMarkers.push(marker);

          // create info window
          var infoWindow = new google.maps.InfoWindow();

          // content for the info window
          var infoWindowContent =
          '<div id="dealershipPopup"> <img src="' +
          dealership.logoURL +
          '" alt="Dealership logo" style="width: 40px; height: 40px" /> <div style="margin-left: 10px; width: 200px;"> <div style="padding-bottom: 10px; padding-top: 5px; word-wrap: break-word;"> <a href="' +
          dealership.webURL +
          '" class="visitDealerSite"> ' +
          dealership.dealerName +
          '</a> </div> <div style=" display: flex; justify-content: space-between; padding-bottom: 5px;padding-right: 5px;"> <span style="font-size: 10px; padding: 5px; border-radius: 5px; background-color: rgb(231, 231, 231)">TOTAL CARS: ' +
            dealership.totalCars.toString() +
            '</span> </div> </div> </div>';

          // add to array of infoWindows
          this.DealershipInfoWindow.push(infoWindow);

          // onclick() event
          marker.addListener("click", (event) => {
            // close other infoWindows
            this.DealershipInfoWindow.forEach((window) => {
              window.close();
            });

            // show clicked marker's infoWindow
            infoWindow.setContent(infoWindowContent);
            infoWindow.open(this.map, marker);
          });
        });
      }
    });
    // reset view to markers if markers > 0
    if (arrMarkerLocations.length > 0) {
      this.resetBounds(arrMarkerLocations, 8, 0);
    }
  } // openMapToRegion ends

  //
  // Returns province buttons
  getProvinceButtons() {
    var innerHTML = "";

    // Iterate through list of provinces and create a button for each
    this.RegionData.forEach((region) => {
      innerHTML +=
        '<button style="padding: 7px; margin-left:10px; border: 0px; border-radius: 10px; color: white; background-color: gray" type="button" onclick="openRegion(\'' +
        region.regionName +
        "')\">" +
        region.regionName.trim() +
        "</button>";
    });

    // Returns message if the html-template is empty
    if (innerHTML === "") {
      innerHTML = "...loading province buttons";
    }

    return innerHTML;
  } // getProvinceButtons ends

  //
  // loads map
  loadMap(mapProp) {
    this.map = new google.maps.Map(
      document.getElementById("googleMap"),
      mapProp
    );
  } // loadMap ends

  //
  // adds region marker to map
  populateRegionMapMarkers() {
    // iterate through region-data and add region markers
    this.RegionData.forEach((region) => {
      // create icon object
      var regionIcon = {
        url: "./assets/region_assets/" + region.iconURL.toString(), // url,
        alt: "province: " + region.iconURL.toString(),
        scaledSize: new google.maps.Size(40, 50), // size
      };
      // create marker
      var marker = new google.maps.Marker({
        position: region.regionLocation,
        map: this.map,
        title: region.regionName,
        // label: region.regionName,
        icon: regionIcon,
        animation: google.maps.Animation.DROP,
      });
      // add marker to array of region markers
      this.RegionMarkers.push(marker);
      // onclick event of marker to open region
      marker.addListener("click", (event) => {
        this.openMapToRegion(event.domEvent.target.parentNode.title);
      });
    });
  } // populateRegionMapMarkers ends

  //
  // resets map view to mapped makers
  resetBounds(locations, zoom, panToIndex) {
    // create Google bounds object - used to set view to plotted markers
    var bounds = new google.maps.LatLngBounds();

    // if statement - if we're given more than 1 location (for zoom purpose)
    if (locations.length !== 1) {
      // iterate through locations and add them to bounds
      locations.forEach((location) => {
        bounds.extend(location);
      });
      // move map to region
      this.map.panTo(locations[panToIndex]);
      //  zoom into map
      this.map.setZoom(zoom);
    } else {
      // ...else if we're given more than on location
      bounds.extend(locations[panToIndex]);
      // move map to region
      this.map.panTo(locations[panToIndex]);
      // fit the map to bounds
      this.map.fitBounds(bounds);
      //  zoom into map
      this.map.setZoom(zoom);
    }
  } // resetBounds ends

  //
  // slide "in" or "out" the zoom-out-to-region-button
  showRegionsAnimation(type, parentID) {
    // set the parent and button container
    var parent = document.getElementById(parentID);
    var buttonContainer = document.getElementById("zoomOutButton_container");

    // get parent's width and put child against right side
    const parentMiddleX = parent.clientWidth;

    // get parent's height and calc where to place button container
    const parentMiddleY = parent.clientHeight;

    switch (type) {
      case "in":
        // move button container to parents middle
        buttonContainer.style.left =
          parentMiddleX - buttonContainer.clientWidth + "px";
        buttonContainer.style.top = parentMiddleY / 0.9 + "px";

        // set opacity of button container (for fade in effect)
        buttonContainer.style.display = "block";
        buttonContainer.style.opacity = 1;

        // id of the animation
        var slideIn_id = null;

        // value to animate
        var leftValue = parentMiddleX;

        // clear the animation - safety
        clearInterval(slideIn_id);

        // start the animation
        slideIn_id = setInterval(slideIn, 5);

        // actual animation
        function slideIn() {
          // when to stop animation
          if (leftValue < parentMiddleX * 0.9 - buttonContainer.clientWidth) {
            // stop animation
            clearInterval(slideIn_id);
          } else {
            // move in effect
            leftValue = parseInt(buttonContainer.style.left) - 5;
            buttonContainer.style.left = leftValue + "px";
            buttonContainer.style.opacity =
              parseFloat(buttonContainer.style.opacity) + 0.04;
          }
        }

        break;

      case "out":
        // set opacity of button container (for fade out effect)
        buttonContainer.style.opacity = 1;

        // id of the animation
        var slideOut_id = null;

        // value to animate
        var leftValue = parentMiddleX;

        // clear the animation - safety
        clearInterval(slideOut_id);

        // start the animation
        slideOut_id = setInterval(slideOut, 10);

        // actual animation
        function slideOut() {
          // when to stop animation
          if (leftValue > parentMiddleX) {
            // stop animation
            clearInterval(slideOut_id);
          } else {
            // move in effect
            leftValue = parseInt(buttonContainer.style.left) + 5;
            buttonContainer.style.left = leftValue + "px";
            // fade in effect
            buttonContainer.style.opacity =
              parseFloat(buttonContainer.style.opacity) - 0.04;
          }
        }

        // hide button
        buttonContainer.style.display = "none";
        buttonContainer.style.opacity = 0;

        // remove dealership-region markers
        this.DealershipMarkers.forEach((marker) => {
          marker.setMap(null);
        });

        // // place region markers
        // this.RegionMarkers.forEach((marker) => {
        //   marker.setMap(this.map);
        // });

        // populate Region Map Markers
        this.populateRegionMapMarkers();

        // get lat and lng
        var locations = []; // array of locations to set the map view
        this.RegionData.forEach((region) => {
          locations.push(region.regionLocation);
        });

        // reset map view
        this.resetBounds(locations, 6, 1);

        // Change map state
        this.MapState.state = "region_view";

        // reset clicks in view
        this.manageClicks(0); // reset to 0

        break;

      default:
        break;
    }
  } // showRegionsAnimation

  //
  // reset/increment/decrement user click
  manageClicks(number) {
    // elements
    const regionViewButton = document.getElementById("zoomOutButton_container");

    // (number = 0) resets to 0
    if (number === 0) {
      this.MapState.num_of_clicks = number;
    } else {
      // incr or decr
      this.MapState.num_of_clicks += number;
    }

    // the state and number of clicks determine certain functions
    const clicks = this.MapState.num_of_clicks;
    const state = this.MapState.state;
    const region = this.MapState.num_of_regions_browsed;

    // click and state
    if (
      state === "dealership_view" &&
      regionViewButton.style.display !== "block"
    ) {
      // animates in the button
      dealershipMap.showRegionsAnimation("in", "googleMapContainer");
    }

    // if (
    //   region === 2 &&
    //   state === "dealership_view" &&
    //   regionViewButton.style.display !== "block"
    // ) {
    //   // animates in the button
    //   dealershipMap.showRegionsAnimation("in", "googleMapContainer");
    // }
  } // manageClicks ends

  // userLocation
  userLocation() {
    // info window to display errors
    var infoWindow = new google.maps.InfoWindow();

    // if location was provided
    if (this.MapState.userLocation !== null) {
      // recenter map
      this.map.setCenter(this.MapState.userLocation);

      // closest dealer to user
      this.nearestToUser();

      // else not, ask user location, try HTML5 geolocation.
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          // get user position
          (position) => {
            this.MapState.userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            // place info window
            infoWindow.setPosition(this.MapState.userLocation);

            // create icon object
            var userLocationIcon = {
              url: "./assets/svg/userlocation3.svg", // url,
              alt: "user location icon",
              scaledSize: new google.maps.Size(30, 30), // size
            };

            // create user marker
            const userMarker = new google.maps.Marker({
              position: this.MapState.userLocation,
              map: this.map,
              title: "ME",
              icon: userLocationIcon,
            });

            userMarker.addListener("click", () => {
              // recenter map
              this.map.setCenter(this.MapState.userLocation);
            });

            // closest dealer to user
            this.nearestToUser();
          },
          () => {
            // incase of an error
            handleLocationError(true, infoWindow, this.map.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, this.map.getCenter(), this.map);
      }
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos, map) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? "Error: The Geolocation service failed."
          : "Error: Your browser doesn't support geolocation."
      );
      infoWindow.open(map);
    }
  } // userLocation

  // nearest dealer to the user
  nearestToUser() {
    // if the user location exist
    if (this.MapState.userLocation !== null) {
      // initialize services
      const distService = new google.maps.DistanceMatrixService();

      // generate array of locations and empty distances to user
      // [[Object, Number, Object],...,[Object, Number, Object]]
      // = [[Location, Distance in km, {distance text, time text}]...[,,]]

      const arrDestinationData = [];

      // iterate through regions
      this.RegionData.forEach((region) => {
        // iterate through dealerships
        region.dealerships.forEach((dealership) => {
          // add location to list
          arrDestinationData.push([
            dealership.location,
            0,
            {
              distance_text: "zero",
              time_text: "zero",
            },
          ]);
        });
      });

      // create an array of destination locations to feed the request
      var toDestinations = [];
      arrDestinationData.forEach((dealership) => {
        toDestinations.push(dealership[0]); // get location Object
      });

      // set origins and destinations
      const request = {
        origins: [this.MapState.userLocation],
        destinations: toDestinations,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
      };

      // get distance service response
      distService.getDistanceMatrix(request).then((response) => {
        // extract elements
        const destinations = response.rows[0].elements;

        // safety: make sure request and response data count matches
        if (destinations.length === arrDestinationData.length) {
          // copy information
          destinations.forEach((destination, index) => {
            // copy distance value
            arrDestinationData[index][1] = parseInt(destination.distance.value);
            // copy distance text
            arrDestinationData[index][2].distance_text =
              destination.distance.text;
            // copy time text
            arrDestinationData[index][2].time_text = destination.duration.text;
          });

          // sort dealerships from closest to furthest
          arrDestinationData.sort(function (a, b) {
            return a[1] - b[1];
          });

          // take only the nearest/first five
          if (arrDestinationData.length > 5) {
            while (arrDestinationData.length !== 5) {
              arrDestinationData.pop();
            }
          }
          //
          // show the closest dealerships

          // remove dealership markers
          this.DealershipMarkers.forEach((marker) => {
            marker.setMap(null);
          });
          this.DealershipMarkers = [];

          // remove region markers
          this.RegionMarkers.forEach((marker) => {
            marker.setMap(null);
          });
          this.RegionMarkers = [];

          // locations of the closest dealerships (to reset bounds)
          var arrMarkerLocations = [];

          // iterate nearest dealerships
          for (var i = 0; i < arrDestinationData.length; i++) {
            // iterate through regions
            this.RegionData.forEach((region) => {
              // iterate through dealerships
              region.dealerships.forEach((dealership) => {
                // find matching location : iterate through nearest from distance calculations dealerships

                // check with which dealership it corresponds to
                var bool =
                  arrDestinationData[i][0].lng === dealership.location.lng &&
                  arrDestinationData[i][0].lat === dealership.location.lat;

                if (bool) {
                  // add to array of maker locations
                  arrMarkerLocations.push(dealership.location);

                  // create dealership marker
                  var marker = new google.maps.Marker({
                    position: dealership.location,
                    map: this.map,
                    title: dealership.dealerName,
                    // label: dealership.totalCars.toString(),
                    animation: google.maps.Animation.DROP,
                  });
                  // add dealership markers to array
                  this.DealershipMarkers.push(marker);

                  // create info window
                  var infoWindow = new google.maps.InfoWindow();

                  // content for the info window
                  var infoWindowContent =
                    '<div id="dealershipPopup"> <img src="' +
                    dealership.logoURL +
                    '" alt="Dealership logo" style="width: 40px; height: 40px" /> <div style="margin-left: 10px; width: 200px;"> <div style="padding-bottom: 10px; padding-top: 5px; word-wrap: break-word;"> <a href="' +
                    dealership.webURL +
                    '" class="visitDealerSite"> ' +
                    dealership.dealerName +
                    '</a> </div> <div style=" display: flex; justify-content: space-between; padding-bottom: 5px; padding-right: 5px;"> <span style="font-size: 10px; padding: 5px; border-radius: 5px; background-color: rgb(231, 231, 231)">TOTAL CARS: ' +
                    dealership.totalCars.toString() +
                    '</span> </div> <div style="font-weight: bold; display: flex; justify-content: end; margin-top: 3px; padding-top: 7px;  padding-left: 5px;padding-right: 5px; border-top: 1px solid gray"> <span style="margin-right:10px"> <img src="./assets/svg/distanceIcon.svg" style="width:15px; margin-right: 3px" />' +
                    arrDestinationData[i][2].distance_text +
                    ' </span> <span> <img src="./assets/svg/timeIcon.svg" style="width:10px; margin-right: 3px" />' +
                    arrDestinationData[i][2].time_text +
                    "</span> </div> </div> </div>";

                  // add to array of infoWindows
                  this.DealershipInfoWindow.push(infoWindow);

                  // onclick() event
                  marker.addListener("click", (event) => {
                    // close other infoWindows
                    this.DealershipInfoWindow.forEach((window) => {
                      window.close();
                    });

                    // show clicked marker's infoWindow
                    infoWindow.setContent(infoWindowContent);
                    infoWindow.open(this.map, marker);
                  });
                }
              });
            });
          }
          // reset view to markers if markers > 0
          if (arrMarkerLocations.length > 0) {
            this.resetBounds(arrMarkerLocations, 13, 0);
          }

          // change map state
          this.MapState.state = "dealership_view";
          this.MapState.num_of_clicks = 0;
          this.MapState.num_of_regions_browsed = 0;
        }
      });
    } else {
      console.log("User location not found.");
    }
  } // nearestToUser
} // Class DealershipMap ends

//
//
//
//
// create new Class Object - populated after data is fetched
let dealershipMap = null;

//
//
// function on window.load
window.onload = () => {
  // fetch data
  $.ajax({
    // ajax call properties
    type: "GET",
    async: true,
    dataType: "json",
    url: "https://dealer.carmag.co.za/dealerapi.php",

    // upon call success
    success: function (response) {
      // feed the object with the data
      dealershipMap = new DealershipMap([
        response.eastern_cape,
        response.free_state,
        response.gauteng,
        response.kwazulu_natal,
        response.limpopo,
        response.mpumalanga,
        response.northern_cape,
        response.north_west,
        response.western_cape,
      ]);
      //ready the map
      dealershipMap.docReady();
    },
  });
};

//
//
// on-region-click() events
function openRegion(region) {
  dealershipMap.openMapToRegion(region);
}

//
//
// Zoom out to region view
function ShowRegionMarkers() {
  dealershipMap.showRegionsAnimation("out", "googleMapContainer");
}

//
//
// User click count
function MapContainer() {
  dealershipMap.manageClicks(+1);
}

//
//
// User wants to give location permission
function userWantsLocation() {
  dealershipMap.userLocation();
}

//
//
//
//
