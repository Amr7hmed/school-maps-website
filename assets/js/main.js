

/*
zoomin
zoomout
*/


const Imgshow = document.querySelector('.preview-image');
function zoom(event) {
    event.preventDefault();
    if(event.deltaY < 0){
             console.log('Zoom In');
         }else {
             console.log('Zoom Out');
    }
  }
  
Imgshow.onwheel = zoom;


let zoomin = document.getElementById("zoomin"),
    zoomout = document.getElementById("zoomout"),
    scale = 1;

function ZoomIn() {
  if(scale==5){
    zoomin.style.cursor="none";
  }else{
    //Imgshow.style.transformOrigin = event.offsetX + 'px ' + event.offsetY + 'px';  
    Imgshow.style.transform = `scale(${++scale})`;
    zoomin.style.cursor="zoomout";
  }
}

function ZoomOut() {
    if(scale==1){
        zoomout.style.cursor="none";
    }else{
      //Imgshow.style.transformOrigin = event.offsetX + 'px ' + event.offsetY + 'px';  
      Imgshow.style.transform = `scale(${--scale})`;
      zoomin.style.cursor="default";
    }
  }

zoomin.addEventListener('click', ZoomIn);

zoomout.addEventListener('click', ZoomOut);



// ================

function moveReady(e) {
    e.preventDefault();
    Imgshow.style.transformOrigin = event.offsetX + 'px ' + event.offsetY + 'px';  
}

Imgshow.addEventListener("mouseover", () => {
    Imgshow.style.cursor = "grab";
  });


Imgshow.addEventListener("mousedown", moveReady);
