const Imgshow = document.querySelector(".preview-image");

// === Zoom In || Zoom Out In Click The Button

let zoomin = document.getElementById("zoomin"),
  zoomout = document.getElementById("zoomout"),
  scale = 1;

function ZoomIn_button() {
  if (scale == 5) {
    zoomin.style.cursor = "none";
    zoomout.style.cursor = "default";
  } else {
    Imgshow.style.transform = `scale(${++scale})`;
    zoomout.style.cursor = "default";
  }
}

function ZoomOut_button() {
  if (scale == 1) {
    zoomout.style.cursor = "none";
    zoomin.style.cursor = "default";
  } else {
    Imgshow.style.transform = `scale(${--scale})`;
    zoomin.style.cursor = "default";
  }
}

zoomin.addEventListener("click", ZoomIn_button);

zoomout.addEventListener("click", ZoomOut_button);

// === Zoom In && Zoom Out In Click The Crtl Button + The Mouse Scroil

function zoom__mouse(event) {
  event.preventDefault();
  const img = event.target;
  if (event.deltaY < 0) {
    if (scale == 5) {
      img.style.transform = `scale(${5})`;
      zoomin.style.cursor = "none";
      zoomout.style.cursor = "default";
    } else {
      img.style.transformOrigin = event.offsetX + "px " + event.offsetY + "px";
      img.style.transform = `scale(${++scale})`;
      zoomout.style.cursor = "default";
    }
  } else {
    if(scale == 1){
      img.style.transform = `scale(${1})`;
      zoomout.style.cursor = "none";
      zoomin.style.cursor = "default";
    }else{
      img.style.transform = `scale(${--scale})`;
      zoomin.style.cursor = "default";
    }
  }
}

Imgshow.onwheel = zoom__mouse;
