let menu = document.querySelector(".bar_menu");
let xMark = document.querySelector(".x_mark");
let links = document.querySelector(".linksPhoneMode");

menu.addEventListener("click", function () {
  if (links.classList.contains("disShow")) {
    links.classList.remove("disShow");
  }
});
xMark.addEventListener("click", function () {
  if (links.classList.contains("disShow") === false) {
    links.classList.add("disShow");
  }
});

//stars efacts

let star = document.querySelectorAll(".fa-star");
console.log(star);

star.forEach((e) => {
  e.addEventListener("click", function () {
    if (e.classList.contains("star_efact")) {
      e.classList.remove("star_efact");
    } else {
      e.classList.add("star_efact");
    }
  });
});


/** Images selcitons */

let proud_images=document.querySelectorAll('.second_img');
let main_img=document.querySelector('.main_img');

proud_images.forEach(function(e){
    e.addEventListener('click',function(){
        main_img.src=e.src;

    })
})

/** blog section : show pages */
let btn1=document.querySelector('.n1');
let btn2=document.querySelector('.n2');
let page1=document.querySelector('.page1');
let page2=document.querySelector('.page2');

btn1.addEventListener('click',function(){
    page1.classList.remove('showPage');
    page2.classList.add('showPage');

})
btn2.addEventListener('click',function(){
    page2.classList.remove('showPage')
    page1.classList.add('showPage');

})