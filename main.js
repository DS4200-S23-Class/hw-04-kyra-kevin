// functions for point functionality

// adds a border to the point that was clicked and passes coordinates to be
// displayed as the last point clicked
function addBorder(id) {
  // toggle border
  let point = document.getElementById(id);
  point.classList.toggle("border");

  // alter text
  let p = document.getElementById("coord-id");
  p.innerHTML = "Last point clicked: " + "("
    + id.toString().charAt(0) + "," + id.toString().charAt(1) +")";
}

// adds a point with the given coordinates from the dropdown
function addPoint() {
    // get the coords
    let x = document.getElementById("x-coord").value;
    let y = document.getElementById("y-coord").value;
    let id = x.toString() + y.toString();

    let point = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    // set attributes
    point.setAttribute("cx", x * 40);
    point.setAttribute("cy", 400 - (y * 40));
    point.setAttribute("r", 10);
    point.setAttribute("class", "point");
    point.setAttribute("id", id); // id is in the format of "xy"
    point.setAttribute("onclick", "addBorder(" + id +")"); // functionality

    // add point
    document.getElementById("frame").appendChild(point);
}

// adds event listener to submit button
document.getElementById("submit").addEventListener("click", addPoint);

// adds event listeners to all points
let points = document.getElementsByClassName("point");
for (let i = 0; i < points.length; i++) {
     points[i].addEventListener("click", () => {
        addBorder(points[i].id);
     })
    };
