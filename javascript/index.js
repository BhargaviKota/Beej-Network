//dropdown
var dropdown = document.querySelectorAll(".dropdown");
var arrow = document.querySelectorAll(".downarrow")
var option = document.querySelectorAll(".options , res-options")
// var roption = document.querySelectorAll("")
for(let i=0;i<dropdown.length;i++){
  dropdown[i].addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("hi")
    option[i].classList.toggle("optaction")
    arrow[i].classList.toggle("uparrow")
  })
}

// burger activation

    const burger = document.querySelector(".hamberger");
    const navbar = document.querySelector(".hamb-menu");
    burger.addEventListener('click', ()=>{
        
        navbar.classList.toggle("active");
        burger.classList.toggle("change")
        burger.classList.toggle("border")
    })

// smooth scrolling

let scroll = document.querySelectorAll('a[hreaf^="#"]');

scroll.forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behaviour : "smooth"
        })
    })
})

// navbar shadow after scroll

let nav = document.querySelector(".hero-nav");
window.onscroll = () => {
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  }
   else {
    nav.classList.remove("scrolled");
  }
};


// counter activation for hreo section

let nums = document.querySelectorAll(".hero-bottom-counter-count");
    // let section = document.querySelector(".three");
    let started = false; // Function Started ? No

    window.onload = 
    function () {
    if (window.onload) {
        if (!started) {
        nums.forEach((num) => startCount(num));
        }
        started = true;
    }
    };

    function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      let numm=el.textContent++;
    //   nums.innerHTML=numm+"+";
        if (el.textContent == goal) {
        clearInterval(count);
        }
    }, 1000 / goal);
    }

// form validation

 const nam = document.querySelector("#name");
 const phone = document.querySelector("#phone");
 const email = document.querySelector("#email");
 const form = document.querySelector("#form");
 
 const span = document.querySelectorAll(".span");
 const Valid = document.querySelectorAll(".valid");
 const input = document.querySelectorAll("input");
 const closeMsg = document.querySelector(".close-msg");
 const bookingSuccess = document.querySelector(".booking-success");
 
 
 form.addEventListener("submit", (e) => {
   const nameValue = nam.value.trim();
   const emailValue = email.value.trim();
   const phoneValue = phone.value.trim();
 
   /////----- Name Validation
   if (nameValue == "") {
     e.preventDefault();
     nam.focus();
     nam.style.border = "3px solid red";
     span[0].classList.add("disp");
     return false;
   }
 
   if (nameValue.length < 2) {
     e.preventDefault();
     nam.focus();
     nam.style.border = "3px solid red";
     span[0].classList.add("disp");
     return false;
   }
 
   if (!isNaN(nameValue)) {
     e.preventDefault();
     nam.style.border = "3px solid red";
     span[0].classList.add("disp");
     nam.focus();
     return false;
   } else {
     nam.style.border = "3px solid green";
     span[0].classList.add("disp");
     span[0].innerHTML = "&check;";
     span[0].style.cssText =
       "background-color:green; color:white; font-size:20px; font-weight:900";
   }
   /////----- Phone Validation
   if (phoneValue == "") {
     e.preventDefault();
     phone.focus();
     phone.style.border = "3px solid red";
     span[1].classList.add("disp");
     return false;
   }
 
   if (phoneValue.length < 10 || phoneValue.length > 10) {
     e.preventDefault();
     phone.style.border = "3px solid red";
     span[1].classList.add("disp");
     phone.focus();
     return false;
   }
 
   if (isNaN(phoneValue)) {
     e.preventDefault();
     phone.style.border = "3px solid red";
     span[1].classList.add("disp");
     phone.focus();
     return false;
   } else {
     phone.style.border = "3px solid green";
     span[1].classList.add("disp");
     span[1].innerHTML = "&check;";
     span[1].style.cssText =
       "background-color:green; color:white; font-size:20px; font-weight:1200";
   }
 
   /////----- Email Validation
   if (emailValue == "") {
     e.preventDefault();
     nam.focus();
     email.style.border = "3px solid red";
     span[2].classList.add("disp");
     email.focus();
     return false;
   }
 
   let isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 
   if (emailValue.match(isValid)) {
     e.preventDefault();
     email.style.border = "3px solid green";
     span[2].classList.add("disp");
     span[2].innerHTML = "&check;";
     span[2].style.cssText =
       "background-color:green; color:white; font-size:20px; font-weight:1200";
     // console.log("true")
     // return false;
   } else {
     e.preventDefault();
     nam.focus();
     email.style.border = "3px solid red";
     span[2].classList.add("disp");
     email.focus();
     return false;
   }
 
   nam.value = "";
   phone.value = "";
   email.value = "";
   // alert("Your site visit is Booked now");
 
   form.style.display = "none";
   bookingSuccess.style.display = "flex";
 
   // email.style.border = "none";
   for (let y of input) {
     y.style.border = "none";
   }
   for (let x of span) {
     x.classList.remove("disp");
     x.innerHTML = "!";
     x.style.cssText =
         "color:red; font-size:20px;";
   }

   nam.value = "";
   phone.value = "";
   email.value = "";
   // alert("Your site visit is Booked now");
 
   form.style.display = "none";
   bookingSuccess.style.display = "flex";
 
   // email.style.border = "none";
   for (let y of input) {
     y.style.border = "none";
   }
   for (let x of span) {
     x.classList.remove("disp");
     x.innerHTML = "!";
     x.style.cssText =
         "color:red; font-size:20px;";
   }
 });
 
 closeMsg.addEventListener("click", () => {
   form.style.display = "flex";
   bookingSuccess.style.display = "none";
 });
 

 
const Validation=(e)=>{
  const nameValue = nam.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();

     /////----- Name Validation
     if (nameValue == "") {
      e.preventDefault();
      nam.focus();
      nam.style.border = "3px solid red";
      span[0].classList.add("disp");
      return false;
    }
  
    if (nameValue.length < 2) {
      e.preventDefault();
      // nam.focus();
      // nam.style.border = "3px solid red";
      span[0].classList.add("disp");
      return false;
    }
  
    if (!isNaN(nameValue)) {
      e.preventDefault();
      // nam.style.border = "3px solid red";
      span[0].classList.add("disp");
      // nam.focus();
      return false;
    } else {
      nam.style.border = "3px solid green";
      span[0].classList.add("disp");
      span[0].innerHTML = "&check;";
      span[0].style.cssText =
        "background-color:black; color:white; font-size:20px; font-weight:900";
    }

    /////----- Phone Validation
   if (phoneValue == "") {
    e.preventDefault();
    // phone.focus();
    phone.style.border = "3px solid red";
    span[1].classList.add("disp");
    return false;
  }

  if (phoneValue.length < 10 || phoneValue.length > 10) {
    e.preventDefault();
    phone.style.border = "3px solid red";
    span[1].classList.add("disp");
    // phone.focus();
    return false;
  }

  if (isNaN(phoneValue)) {
    e.preventDefault();
    phone.style.border = "3px solid red";
    span[1].classList.add("disp");
    // phone.focus();
    return false;
  } else {
    phone.style.border = "3px solid green";
    span[1].classList.add("disp");
    span[1].innerHTML = "&check;";
    span[1].style.cssText =
      "background-color:black; color:white; font-size:20px; font-weight:1200";
  }


   /////----- Email Validation
   if (emailValue == "") {
    e.preventDefault();
    // nam.focus();
    email.style.border = "3px solid red";
    span[2].classList.add("disp");
    // email.focus();
    return false;
  }

  let isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailValue.match(isValid)) {
    e.preventDefault();
    email.style.border = "3px solid green";
    span[2].classList.add("disp");
    span[2].innerHTML = "&check;";
    span[2].style.cssText =
      "background-color:black; color:white; font-size:20px; font-weight:1200";
    // console.log("true")
    // return false;
  } else {
    e.preventDefault();
    // nam.focus();
    email.style.border = "3px solid red";
    span[2].classList.add("disp");
    // email.focus();
    return false;
  }






}



// ,jgfjutg
input.forEach(input=>{
  input.addEventListener("input",Validation)
  
})



