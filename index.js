<!DOCTYPE html>
<html>
  <head>
    <script src="./icons.js"></script>
    <script src="./index.js" type="module"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <div
        style="
          display: flex;
          align-items: center;
          padding: 20px;
          padding-top: 40px;
          padding-bottom: 40px;
          background-color: black;
        "
      >
        <img
          style="margin: auto;"
          src="assets/png-jpeg/carmag_logo-new-2-2.png"
          alt="carmag_logo-new-2-2"
          srcset=""
        />
      </div>
    </header>
    <div
      style="
        display: flex;
        justify-content: flex-end;
        padding: 20px;
        border: red 1px solid;
      "
    >
      <div id="searchIcon" style="margin-right: 10px;">
        <div style="width: 25px; height: 25px; background: #000;"></div>
      </div>
      <div>
        <input
          style="padding: 5px;"
          type="text"
          id="userStringLoction"
          name="userStringLoction"
          placeholder="...find your location"
        />
      </div>
    </div>

    <div
      id="regionButtons"
      style="padding: 10px; display: flex; justify-content: center;"
    >
      (... regions buttons loading)
    </div>

    <div style="padding: 30px; border: black 1px solid;">
      <div id="googleMap" style="width: 100%; height: 700px;"></div>
    </div>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8AXwLkIbnzE42gAm_GTgHAvSh9L7398o"></script>
  </body>
</html>
