//your JS code here. If required.
const line = document.getElementById("line");
line.style.position="absolute";
var degree = 0;
function rotateLine(){
    degree+=1;
    line.style.transform="rotate("+degree+"deg)";
    requestAnimationFrame(rotateLine)
}
rotateLine();