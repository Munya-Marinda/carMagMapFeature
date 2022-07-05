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
  },
  {
    regionName: "Free State",
    regionLocation: { lat: -28.6743815, lng: 25.9448766 },
  },
  {
    regionName: "Gauteng",
    regionLocation: { lat: -26.0144053, lng: 27.5669771 },
  },
  {
    regionName: "KwaZulu-Natal",
    regionLocation: { lat: -28.9378436, lng: 29.7612388 },
  },
  {
    regionName: "Limpopo",
    regionLocation: { lat: -23.7675464, lng: 28.0246553 },
  },
  {
    regionName: "Mpumalanga",
    regionLocation: { lat: -25.7369283, lng: 29.0175029 },
  },
  {
    regionName: "Northern Cape",
    regionLocation: { lat: -28.8320522, lng: 18.7577433 },
  },
  {
    regionName: "North West",
    regionLocation: { lat: -26.3681227, lng: 24.342673 },
  },
  {
    regionName: "Western Cape",
    regionLocation: { lat: -32.8847716, lng: 19.7016556 },
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
    this.RegionData.forEach((region) => {
      if (region.regionName === region_Name) {
        // console.log(region.regionLocation);
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
    var locations = [];

    // populate locations
    this.RegionData.forEach((region) => {
      const marker = new google.maps.Marker({
        position: region.regionLocation,
        map: this.map,
        title: region.regionName,
        label: region.regionName,
        animation: google.maps.Animation.DROP,
      });
    });

    // add markers
    locations.map((position, i) => {});
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
