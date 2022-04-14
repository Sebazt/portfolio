/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/* ============== SERVICE MODAL ============== */

const modalViewS = document.querySelectorAll(".services__modal"),
      modalBtns = document.querySelectorAll(".services__button"),
      modalClose = document.querySelectorAll(".services__modal-close")

let modal = function(modalClick){
  modalViewS[modalClick].classList.add("active-modal")
}

modalBtns.forEach((mb, i) =>{
  mb.addEventListener("click", ()=>{
    modal(i)
  })
})

modalClose.forEach((mc)=>{
  mc.addEventListener("click", ()=>{
    modalViewS.forEach((mv) =>{
      mv.classList.remove("active-modal")
    })
  })
})


/* ================= FILTER WORK ============== */

let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: '.work__card'
  },
  animation: {
    duration: 300
  }
});


/* LINK ACTIVE WORK */

const linkWork = document.querySelectorAll(".work__item")

function activeWork(){
  linkWork.forEach(L=> L.classList.remove("active-work"))
  this.classList.add("active-work")
}

linkWork.forEach(L=> L.addEventListener("click", activeWork))