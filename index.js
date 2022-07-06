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
  "Western Cape",
];

const RegionData = [
  {
    regionName: "Eastern Cape",
    regionLocation: { lat: -32.0869448, lng: 24.1658452 },
    dealerships: [
      {
        dealerName: "Auto Pedigree East London",
        location: { lat: -32.9588026, lng: 27.9326508 },
        totalCars: 14,
      },
      {
        dealerName: "Auto Pedigree Eastern Cape",
        location: { lat: -32.7656184, lng: 26.0495569 },
        totalCars: 164,
      },
      {
        dealerName: "Izuzu Meyers Motors King Williams Town",
        location: { lat: -32.9186817, lng: 27.5163521 },
        totalCars: 21,
      },
      {
        dealerName: "Meyers Car Bazar",
        location: { lat: -33.0138502, lng: 27.9027218 },
        totalCars: 17,
      },
      {
        dealerName: "Ronnies Motors",
        location: { lat: -33.0138305, lng: 27.8346931 },
        totalCars: 10,
      },
    ],
  },
  {
    regionName: "Free State",
    regionLocation: { lat: -28.6743815, lng: 25.9448766 },
    dealerships: [
      {
        dealerName: "Auto Pedigree Bloemfontein Oliver Tambo",
        location: { lat: -29.1247446, lng: 26.2173738 },
        totalCars: 14,
      },
      {
        dealerName: "Auto Pedigree Bloemfontein Zastro",
        location: { lat: -29.113348, lng: 26.2181539 },
        totalCars: 15,
      },
      {
        dealerName: "Auto Pedigree Qwa-Qwa",
        location: { lat: -28.531306, lng: 28.829376 },
        totalCars: 12,
      },
    ],
  },
  {
    regionName: "Gauteng",
    regionLocation: { lat: -26.0144053, lng: 27.5669771 },
    dealerships: [
      {
        dealerName: "Autocad Cars",
        location: { lat: -26.0957812, lng: 28.0028578 },
        totalCars: 295,
      },
      {
        dealerName: "Auto Investments Centurion",
        location: { lat: -26.6793108, lng: 27.4983813 },
        totalCars: 157,
      },
    ],
  },
  {
    regionName: "KwaZulu-Natal",
    regionLocation: { lat: -28.9378436, lng: 29.7612388 },
    dealerships: [
      {
        dealerName: "Halfway Ford Waterfall",
        location: { lat: -29.7509046, lng: 30.8116776 },
        totalCars: 23,
      },
    ],
  },
  {
    regionName: "Limpopo",
    regionLocation: { lat: -23.7675464, lng: 28.0246553 },
    dealerships: [
      {
        dealerName: "Auto Pedigree Burgersfort",
        location: { lat: -24.684232, lng: 30.334904 },
        totalCars: 10,
      },
      {
        dealerName: "Auto Pedigree Groblersdal",
        location: { lat: -25.171794350469916, lng: 29.391719878212463 },
        totalCars: 15,
      },
      {
        dealerName: "Auto Pedigree Polokwane South",
        location: { lat: -23.9157526, lng: 29.4423274 },
        totalCars: 15,
      },
    ],
  },
  {
    regionName: "Mpumalanga",
    regionLocation: { lat: -25.7369283, lng: 29.0175029 },
    dealerships: [
      {
        dealerName: "Auto Italia",
        location: { lat: -25.7720133, lng: 29.4715153 },
        totalCars: 18,
      },
      {
        dealerName: "Auto Pedigree Ermelo",
        location: { lat: -26.5373093, lng: 29.9875623 },
        totalCars: 11,
      },
    ],
  },
  {
    regionName: "Northern Cape",
    regionLocation: { lat: -29.67818, lng: 21.265989 },
    dealerships: [
      {
        dealerName: "Auto Pedigree Kimberley",
        location: { lat: -26.5373093, lng: 29.9875623 },
        totalCars: 12,
      },
    ],
  },
  {
    regionName: "North West",
    regionLocation: { lat: -26.3681227, lng: 24.342673 },
    dealerships: [
      {
        dealerName: "Auto Pedigree Brits",
        location: { lat: -25.6300674, lng: 27.7787409 },
        totalCars: 19,
      },
    ],
  },
  {
    regionName: "Western Cape",
    regionLocation: { lat: -32.8847716, lng: 19.7016556 },
    dealerships: [
      {
        dealerName: "Alterior Auto",
        location: { lat: -33.9067444, lng: 18.580001 },
        totalCars: 11,
      },
      {
        dealerName: "Auto Pedigree Bellville",
        location: { lat: -33.9023769, lng: 18.6072502 },
        totalCars: 10,
      },
    ],
  },
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
    this.Regions = regions;
    this.RegionData = region_data;
    this.map = null;
    this.RegionMarkers = []; // contains array of region markers
  }

  //
  // Set of functions executed when the document loads
  docReady() {
    //load map - send props data
    var mapProp = {
      center: new google.maps.LatLng(-28.6743815, 25.9448766),
      zoom: 6,
    };
    this.loadMap(mapProp);

    // populate Region Map Markers
    this.populateRegionMapMarkers();

    // load the Province buttons
    document.getElementById("regionButtons").innerHTML =
      this.getProvinceButtons();
  }

  //
  // opens map region
  openMapToRegion(region_Name) {
    // create bounds in memory
    // var bounds = new google.maps.LatLngBounds();
    // iterate through regions
    this.RegionData.forEach((region) => {
      // find matching region
      if (region.regionName === region_Name) {
        // move map to region
        this.map.panTo(region.regionLocation);
        this.map.setZoom(8);
        // remove region markers
        this.RegionMarkers.forEach((marker) => {
          marker.setMap(null);
        });
        // Populate dealership Markers
        region.dealerships.forEach((dealership) => {
          // Debug
          console.log(dealership.location);
          // create marker
          const marker = new google.maps.Marker({
            position: dealership.location,
            map: this.map,
            title: dealership.dealerName,
            label: region.totalCars,
            animation: google.maps.Animation.DROP,
          });
          // extend bounds by adding marker
          // bounds.extend(marker);
          // onclick() event
          marker.addListener("click", (event) => {
            console.log("Dealership: " + event.domEvent.target.title);
          });
        });
        //fit window to view
        // this.map.fitBounds(bounds);
      }
    });
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
    innerHTML === "" ? "...loading province buttons" : innerHTML;

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
    // populate locations
    this.RegionData.forEach((region) => {
      var marker = new google.maps.Marker({
        position: region.regionLocation,
        map: this.map,
        title: region.regionName,
        label: region.regionName,
        animation: google.maps.Animation.DROP,
      });
      this.RegionMarkers.push(marker);
      marker.addListener("click", (event) => {
        this.openMapToRegion(event.domEvent.target.title);
      });
    });
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
// events
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
