function date() {
  // Array of day names
  var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
  // Array of month Names
  var monthNames = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
  var now = new Date();
  document.write(monthNames[now.getMonth()] + " " + now.getDate());
}
// -->
<!-- // rollover images
if (document.images) {
  img1on = new Image(); img1on.src="images/menu/header1B-on.gif"; img1off = new Image(); img1off.src="images/menu/header1B-off.gif";
  img2on = new Image(); img2on.src="images/menu/header1C-on.gif"; img2off = new Image(); img2off.src="images/menu/header1C-off.gif";
  img3on = new Image(); img3on.src="images/menu/header1D-on.gif"; img3off = new Image(); img3off.src="images/menu/header1D-off.gif";
  img4on = new Image(); img4on.src="images/menu/header1E-on.gif"; img4off = new Image(); img4off.src="images/menu/header1E-off.gif";
}

function imgOn (imgName) {
  if (document.images) {
    document[imgName].src = eval(imgName + "on.src");
  }
}
function imgOff (imgName) {
  if (document.images) {
    document[imgName].src = eval(imgName + "off.src");
  }
}
