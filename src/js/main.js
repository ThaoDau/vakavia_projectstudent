 //Suppose you can divs with class name "product-card"
 //STARS

 const product_cards = document.querySelectorAll('.product-card');

 for(product_card of product_cards){
 const allStars = product_card.querySelectorAll('.star_rating .star');
 
 allStars.forEach((star, i) => {
     star.onclick = function () {
         let current_star_level = i + 1;

         // You can send "current_star_level" variable to database  as a rating value.
         allStars.forEach((star, j) => {
             if (current_star_level >= j + 1) {
                 star.innerHTML = '&#9733';
             } else {
                 star.innerHTML = '&#9734';
             }
         })
     }
 })

 }



 const b = document.querySelectorAll('.text-feature');
 const a = document.querySelectorAll('.btn-learnmore');
 for (const key in a) {
     a[key].onclick = () => {
         for (const key1 in b ) {
             b[key1].classList.toggle("hide");
         }
     }
 }

 const btn_mobile = document.querySelector('#btn_mobile');
    function toggleMenu(){
        const nav = document.querySelector('#nav');
        nav.classList.toggle('active');
    }
    btn_mobile.addEventListener('click',toggleMenu);

//validate Form
function validateForm(){
    const name_err = document.forms["myForm"]["fname"].value;
    const email_err = document.forms["myForm"]['femail'].value;
    const subject_err = document.forms["myForm"]['fsubject'].value;  
    const mess_err = document.forms["myForm"]['fmess'].value;                              
    if(name_err == ""){
        alert("Name must be filled out");
        return false;
    }
    if(email_err == ""){
        alert("Email must be filled out");
        return false;
    }
    if(subject_err == ""){
        alert("Subject must be filled out");
        return false;
    }
    if(mess_err == ""){
        alert("Mess must be filled out");
        return false;
    }
}


