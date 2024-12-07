let aud = document.getElementById("laugh");
let i = document.getElementById("onlaugh")

i.addEventListener("click", (e) =>{
    aud.play()
})


 
let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop:true,
  slidesPerView: 1.5,
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: true,
  },
  autoplay:{

    delay:3000,
    disableOnInteraction:false,
  },
  pagination:{
      el:'.swiper-pagination',
  },
  navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev',
  }
});

let stars = document.querySelectorAll(".rate-stars-div i")
let change =document.querySelector(".change")


stars.forEach((star, index1)=>{
    console.log(star)
    star.addEventListener("click",()=>{
    console.log("clicked")
        stars.forEach((star, index2)=>{
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
            
        })
        if((1+index1)== 1){
            change.innerHTML = "Very Bad"
        }
        else if((1+index1)== 2){
            change.innerHTML = "Poor"
        }
        else if((1+index1)== 3){
            change.innerHTML = "Average"
        }
        else if((1+index1)== 4){
            change.innerHTML = "Good"
        }
        else if((1+index1)== 5){
            change.innerHTML = "Excellent"
        }
    })
})

let submit = document.querySelector(".sub-btn")
let sug = document.querySelector(".sug")

submit.addEventListener("click", ()=>{
    change.innerHTML = "Rate Me"
    stars.forEach((star, index1) =>{
        star.classList.remove("active")
    })
    sug.value = ""
})


