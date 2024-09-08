let navbare = document.querySelectorAll(".navbare li");
let last_navbare=document.querySelector(".navbare");
let choiceElement = document.querySelectorAll(".choiceElement");
let open_nav=document.getElementById("open_nav");
let close_nav=document.getElementById("close_nav");

const openNavbare = () => {
  navbare.forEach((btn, index) => {
    btn.onclick = (e) => {
      let open_nav_by_img = e.target.closest(".open_nav_by_img");
      if (open_nav_by_img && choiceElement[index]) {
        choiceElement[index].classList.toggle("new_choiceElement");
        console.log("hello");
        if (open_nav_by_img.src.includes("images/icon-arrow-light.svg")) {
          open_nav_by_img.src = "images/icon-arrow-dark.svg";
        } else {
          open_nav_by_img.src = "images/icon-arrow-light.svg";
        }
      }
    };
  });
};

openNavbare();

open_nav.onclick=()=>{
    last_navbare.classList.toggle("new_nav")
}
close_nav.onclick=()=>{
    last_navbare.classList.remove("new_nav")
}