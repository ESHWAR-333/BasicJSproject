function switchOff() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("SwitchStatus").textContent = "Switched Off";
    document.getElementById("switchOffbtn").style.backgroundColor = "#cbd2d9";
    document.getElementById("switchOnbtn").style.backgroundColor = "#22c55e";


}

function switchOn() {
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("SwitchStatus").textContent = "Switched On";
    document.getElementById("switchOffbtn").style.backgroundColor = "#e12d39";
    document.getElementById("switchOnbtn").style.backgroundColor = "#cbd2d9";
}