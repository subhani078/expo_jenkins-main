
// var oip = document.getElementById("oip");

// oip.onclick = function () {
//     document.body.classList.toggle("dark");
//     if(document.body.classList.contains("dark"))
//     {
//         log.src="./img/sun.webp";
//     }
//     else{
//         log.src="./img/OIP.jpg";
//     }
    
// }

// // var log = document.getElementById("log");

// // log.onclick = function () {
// //     document.body.classList.toggle("dark1");
// //     if(document.body.classList.contains("dark1"))
// //     {
// //         log.src="./img/shafi.png";
// //     }
// //     else{
// //          log.src="./img/logo.png.jpg";
// //     }
    
// // }



// window.addEventListener('DOMContentLoaded', event => {

//     // Navbar shrink function
//     var navbarShrink = function () {
//         const navbarCollapsible = document.body.querySelector('#navigation');
//         if (!navbarCollapsible) {
//             return;
//         }
//         if (window.scrollY === 0) {
//             navbarCollapsible.classList.remove('navbar-shrink')
//         } else {
//             navbarCollapsible.classList.add('navbar-shrink')
//         }

//     };

//     // Shrink the navbar 
//     navbarShrink();

//     // Shrink the navbar when page is scrolled
//     document.addEventListener('scroll', navbarShrink);

//     // Activate Bootstrap scrollspy on the main nav element
//     const navigation = document.body.querySelector('#navigation');
//     if (navigation) {
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#navigation',
//             offset: 74,
//         });
//     };

//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarNavAltMarkup .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });

// });










//       function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "shafi7995583817@gmail.com",
//         Password : "Shafi@123",
//         To : 'shafs786s@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "New Contact Form Enquiry",
//         Body :"Name:"           + document.getElementById("name").value
//              + "<br> Email:"    + document.getElementById("email").value
//              + "<br> Phone no:" + document.getElementById("phone").value
//              + "<br> Message:"  + document.getElementById("message").value

//     }).then(
//       message => alert("Mail sent sucessfully")
//     );
// }



