//movments

const card = document.querySelector(".card");
const container = document.querySelector(".container");
//items

const computer = document.querySelector('.computer');


//animation

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  card.style.transform = ` rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


// animate in 
container.addEventListener( 'mouseenter' , (e) => {
    card.style.transition = 'none';
});


// animate out

container.addEventListener( 'mouseleave' , (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// computer
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    computer.style.transform = ` rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
  
  
  // animate in 
  container.addEventListener( 'mouseenter' , (e) => {
      computer.style.transition = 'none';
    
    
    });
  
  
  // animate out
  
  container.addEventListener( 'mouseleave' , (e) => {
      computer.style.transition = "all 0.5s ease";
      computer.style.transform = `rotateY(0deg) rotateX(0deg)`;
      
  });
