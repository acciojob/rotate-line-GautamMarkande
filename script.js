//your JS code here. If required.
const line = documnet.getElementByid("line");
var degree = 0;
function rotateLine(){
    degree+=1;
    line.style.transform="rotate("+degree+"deg)";
    requestAnimationFrame(rotateLine)
}
rotateline();