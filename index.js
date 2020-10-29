//movments

const card = document.querySelector(".card");
const container = document.querySelector(".container");
//items

const computer = document.querySelector(".computer img");
const title = document.querySelector(".title");
const purchase = document.querySelector('.purchase button');
const detail = document.querySelector('.details');

//animation

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = ` rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  
  title.style.transform = "translateZ(150px)";

  computer.style.transform = "translateZ(100px)";

  purchase.style.transform = "translateZ(100px)";

  detail.style.transform = "translateZ(100px)";
});

// animate out

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //          --------- title -----------
  title.style.transition = "all 0.5s ease";
  title.style.transform = "translateZ(0px)";
  //          --------- computer --------
  computer.style.transition = "all 0.5s ease";
  computer.style.transform = "translateZ(0px)";
  //         ---------- button ----------
  purchase.style.transition = "all 0.5s ease";
  purchase.style.transform = "translateZ(0px)";
  //         ---------- info ----------
  detail.style.transition = "all 0.5s ease";
  detail.style.transform = "translateZ(0px)";
  

});

