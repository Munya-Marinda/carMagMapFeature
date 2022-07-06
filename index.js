//
//
// Dummy Data
const arrRegions = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "Northern Cape",
  "North West",
  "Western Cape"
];

const RegionData = [
  {
    regionName: "Eastern Cape",
    regionLocation: { lat: -32.0869448, lng: 24.1658452 },
    iconURL: "./assets/regionIcons/ec.png",
    dealerships: [
      {
        dealerName: "Auto Pedigree East London",
        location: { lat: -32.9588026, lng: 27.9326508 },
        totalCars: 14,
        logoURL: "./assets/dealership_assets/circle/auto_pedigree.png"
      },
      {
        dealerName: "Auto Pedigree Eastern Cape",
        location: { lat: -32.7656184, lng: 26.0495569 },
        totalCars: 164,
        logoURL: "./assets/dealership_assets/circle/auto_pedigree.png"
      },
      {
        dealerName: "Izuzu Meyers Motors King Williams Town",
        location: { lat: -32.9186817, lng: 27.5163521 },
        totalCars: 21,
        logoURL: "./assets/dealership_assets/circle/izuzu_meyers_car.png"
      },
      {
        dealerName: "Meyers Car Bazar",
        location: { lat: -33.0138502, lng: 27.9027218 },
        totalCars: 17,
        logoURL: "./assets/dealership_assets/circle/izuzu_meyers_car.png"
      },
      {
        dealerName: "Ronnies Motors",
        location: { lat: -33.0138305, lng: 27.8346931 },
        totalCars: 10,
        logoURL: "./assets/dealership_assets/circle/ronnies_motors.png"
      }
    ]
  },
  {
    regionName: "Free State",
    regionLocation: { lat: -28.6743815, lng: 25.9448766 },
    iconURL: "./assets/regionIcons/fc.png",
    dealerships: [
      {
        dealerName: "Auto Pedigree Bloemfontein Oliver Tambo",
        location: { lat: -29.1247446, lng: 26.2173738 },
        totalCars: 14,
        logoURL: "./assets/dealership_assets/circle/auto_pedigree.png"
      },
      {
        dealerName: "Auto Pedigree Bloemfontein Zastro",
        location: { lat: -29.113348, lng: 26.2181539 },
        totalCars: 15,
        logoURL: "./assets/dealership_assets/circle/auto_pedigree.png"
      },
      {
        dealerName: "Auto Pedigree Qwa-Qwa",
        location: { lat: -28.531306, lng: 28.829376 },
        totalCars: 12,
        logoURL: "./assets/dealership_assets/circle/auto_pedigree.png"
      }
    ]
  },
  {
    regionName: "Gauteng",
    regionLocation: { lat: -26.0144053, lng: 27.5669771 },
    iconURL: "./assets/regionIcons/gp.png",
    dealerships: [
      {
        dealerName: "Autocad Cars",
        location: { lat: -26.0957812, lng: 28.0028578 },
        totalCars: 295,
        logoURL: "./assets/dealership_assets/circle/standard_car_icon.png"
      },
      {
        dealerName: "Auto Investments Centurion",
        location: { lat: -26.6793108, lng: 27.4983813 },
        totalCars: 157,
        logoURL: "./assets/dealership_assets/circle/standard_car_icon.png"
      }
    ]
  },
  {
    regionName: "KwaZulu-Natal",
    regionLocation: { lat: -28.9378436, lng: 29.7612388 },
    iconURL: "./assets/regionIcons/kzn.png",
    dealerships: [
      {
        dealerName: "Halfway Ford Waterfall",
        location: { lat: -29.7509046, lng: 30.8116776 },
        totalCars: 23,
        logoURL: "./assets/dealership_assets/circle/standard_car_icon.png"
      }
    ]
  },
  {
    regionName: "Limpopo",
    regionLocation: { lat: -23.7675464, lng: 28.0246553 },
    iconURL: "./assets/regionIcons/lp.png",
    dealerships: [
      {
        dealerName: "Auto Pedigree Burgersfort",
        location: { lat: -24.684232, lng: 30.334904 },
        totalCars: 10,
        logoURL: "./assets/dealership_assets/circle/standard_car_icon.png"
      },
      {
        dealerName: "Auto Pedigree Groblersdal",
        location: { lat: -25.171794350469916, lng: 29.391719878212463 },
        totalCars: 15,
        logoURL: "./assets/dealership_assets/circle/auto_pedigree.png"
      },
      {
        dealerName: "Auto Pedigree Polokwane South",
        location: { lat: -23.9157526, lng: 29.4423274 },
        totalCars: 15,
        logoURL: "./assets/dealership_assets/circle/auto_pedigree.png"
      }
    ]
  },
  {
    regionName: "Mpumalanga",
    regionLocation: { lat: -25.7369283, lng: 29.0175029 },
    iconURL: "./assets/regionIcons/mp.png",
    dealerships: [
      {
        dealerName: "Auto Italia",
        location: { lat: -25.7720133, lng: 29.4715153 },
        totalCars: 18,
        logoURL: "./assets/dealership_assets/circle/standard_car_icon.png"
      },
      {
        dealerName: "Auto Pedigree Ermelo",
        location: { lat: -26.5373093, lng: 29.9875623 },
        totalCars: 11,
        logoURL: "./assets/dealership_assets/circle/auto_pedigree.png"
      }
    ]
  },
  {
    regionName: "Northern Cape",
    regionLocation: { lat: -29.67818, lng: 21.265989 },
    iconURL: "./assets/regionIcons/nc.png",
    dealerships: [
      {
        dealerName: "Auto Pedigree Kimberley",
        location: { lat: -26.5373093, lng: 29.9875623 },
        totalCars: 12,
        logoURL: "./assets/dealership_assets/circle/auto_pedigree.png"
      }
    ]
  },
  {
    regionName: "North West",
    regionLocation: { lat: -26.3681227, lng: 24.342673 },
    iconURL: "./assets/regionIcons/nw.png",
    dealerships: [
      {
        dealerName: "Auto Pedigree Brits",
        location: { lat: -25.6300674, lng: 27.7787409 },
        totalCars: 19,
        logoURL: "./assets/dealership_assets/circle/auto_pedigree.png"
      }
    ]
  },
  {
    regionName: "Western Cape",
    regionLocation: { lat: -32.8847716, lng: 19.7016556 },
    iconURL: "./assets/regionIcons/wc.png",
    dealerships: [
      {
        dealerName: "Alterior Auto",
        location: { lat: -33.9067444, lng: 18.580001 },
        totalCars: 11,
        logoURL: "./assets/dealership_assets/circle/standard_car_icon.png"
      },
      {
        dealerName: "Auto Pedigree Bellville",
        location: { lat: -33.9023769, lng: 18.6072502 },
        totalCars: 10,
        logoURL: "./assets/dealership_assets/circle/auto_pedigree.png"
      }
    ]
  }
];

//
//
//
// Dummy Data ends
//
//
//
//
//
//
//
//

// Class to manage map functions
class DealershipMap {
  constructor(regions, region_data) {
    this.Regions = regions; // array of region names - to be replaces with region_data
    this.RegionData = region_data; // array of region data
    this.map = null; // Google map object
    this.RegionMarkers = []; // contains array of region markers
    this.DealershipMarkers = []; // contains array of dealership markers
  }

  //
  // Set of functions executed when the document loads
  docReady() {
    // send props data to create new map
    var mapProp = {
      center: new google.maps.LatLng(-28.6743815, 25.9448766),
      zoom: 6
    };
    // create and load map
    this.loadMap(mapProp);

    // populate Region Map Markers
    this.populateRegionMapMarkers();

    // load the Province buttons
    document.getElementById(
      "regionButtons"
    ).innerHTML = this.getProvinceButtons();
  }

  //
  // opens map region
  openMapToRegion(region_Name) {
    // array of marker locations - to reset the map window to plotted makers
    var arrMarkerLocations = [];
    // iterate through regions
    this.RegionData.forEach((region) => {
      // find matching region
      if (region.regionName === region_Name) {
        // remove region markers
        this.RegionMarkers.forEach((marker) => {
          marker.setMap(null);
        });
        // iterate through dealerships
        region.dealerships.forEach((dealership) => {
          // add to array of maker locations
          arrMarkerLocations.push(dealership.location);
          // create and config dealership logo/icon
          var logo = {
            url: dealership.logoURL, // url
            scaledSize: new google.maps.Size(50, 50) // size
          };
          // create dealership marker
          var marker = new google.maps.Marker({
            position: dealership.location,
            map: this.map,
            title: dealership.dealerName,
            label: dealership.totalCars.toString(),
            icon: logo,
            animation: google.maps.Animation.DROP
          });
          // add dealership markers to array
          this.DealershipMarkers.push(marker);
          // onclick() event
          marker.addListener("click", (event) => {
            console.log("Dealership clicked: " + event.domEvent.target.title);
          });
        });
      }
    });
    // reset view to markers if markers > 0
    if (arrMarkerLocations.length > 0) {
      this.resetBounds(arrMarkerLocations);
    }
  }

  //
  // Returns province buttons
  getProvinceButtons() {
    var innerHTML = "";

    // Iterate through list of provinces and create a button for each
    this.Regions.forEach((region) => {
      innerHTML +=
        ' <button style="padding: 7px; margin-left:10px; border: 0px; border-radius: 10px; color: white; background-color: gray" type="button" onclick="open' +
        region.replace(/\s/g, "").replace("-", "") +
        '()">' +
        region +
        "</button>";
    });

    // Returns message if the html-template is empty
    if (innerHTML === "") {
      innerHTML = "...loading province buttons";
    }

    return innerHTML;
  }

  //
  // loads map
  loadMap(mapProp) {
    this.map = new google.maps.Map(
      document.getElementById("googleMap"),
      mapProp
    );
  }

  //
  // adds marker to map
  populateRegionMapMarkers() {
    // iterate through region-data and add region markers
    this.RegionData.forEach((region) => {
      // create icon object
      var regionIcon = {
        url: region.iconURL.toString(), // url,
        alt: "debug_westerncape",
        scaledSize: new google.maps.Size(40, 50) // size
      };
      // create marker
      var marker = new google.maps.Marker({
        position: region.regionLocation,
        map: this.map,
        title: region.regionName,
        // label: region.regionName,
        icon: regionIcon,
        animation: google.maps.Animation.DROP
      });
      // add marker to array of region markers
      this.RegionMarkers.push(marker);
      // onclick event of marker to open region
      marker.addListener("click", (event) => {
        // console.log(event.domEvent.path[1].title);
        this.openMapToRegion(event.domEvent.path[1].title);
      });
    });
  }

  //
  // resets map view to mapped makers
  resetBounds(locations) {
    // create Google bounds object - used to set view to plotted markers
    var bounds = new google.maps.LatLngBounds();

    // if statement - if we're given more than 1 location (for zoom purpose)
    if (locations.length !== 1) {
      // iterate through locations and add them to bounds
      locations.forEach((location) => {
        bounds.extend(location);
      });
      // move map to region
      this.map.panTo(locations[0]);
      //  zoom into map
      this.map.setZoom(8);
    } else {
      // ...else if we're given more than on location
      bounds.extend(locations[0]);
      // move map to region
      this.map.panTo(locations[0]);
      // fit the map to bounds
      this.map.fitBounds(bounds);
      //  zoom into map
      this.map.setZoom(10);
    }
  }
}

//
// new Class Object
const dealershipMap = new DealershipMap(arrRegions, RegionData);

//
//
//
//
// function on window.load
window.onload = () => {
  dealershipMap.docReady();
};

//
//
//
//
//
//
//
//
//
//
// on-region-click() events
//

function openEasternCape() {
  dealershipMap.openMapToRegion("Eastern Cape");
}
function openFreeState() {
  dealershipMap.openMapToRegion("Free State");
}
function openGauteng() {
  dealershipMap.openMapToRegion("Gauteng");
}
function openKwaZuluNatal() {
  dealershipMap.openMapToRegion("KwaZulu-Natal");
}
function openLimpopo() {
  dealershipMap.openMapToRegion("Limpopo");
}
function openMpumalanga() {
  dealershipMap.openMapToRegion("Mpumalanga");
}
function openNorthernCape() {
  dealershipMap.openMapToRegion("Northern Cape");
}
function openNorthWest() {
  dealershipMap.openMapToRegion("North West");
}
function openWesternCape() {
  dealershipMap.openMapToRegion("Western Cape");
}

//
//
//
// Google Map API
//
//
