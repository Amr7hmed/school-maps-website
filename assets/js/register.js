// .dataset.image;
const RegisterChild = document.querySelectorAll(".register__child");

function ShowChild(src) {
  RegisterChild.forEach((item) => {
    if (item.dataset.form == src.id) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function HideChild() {
  RegisterChild.forEach((item) => {
    item.style.display = "none";
  });
}

document.getElementById("student").addEventListener("change", function () {
  HideChild();
  ShowChild(this);
});

document.getElementById("teacher").addEventListener("change", function () {
    HideChild();
    ShowChild(this);
  });
  
  document.getElementById("pre-universitylevel").addEventListener("change", function () {
    HideChild();
    ShowChild(this);
  });
  
document.getElementById("universitylevel").addEventListener("change", function () {
    HideChild();
    ShowChild(this);
  });

  document.getElementById("pre-universityprofessor").addEventListener("change", function () {
    HideChild();
    ShowChild(this);
  });