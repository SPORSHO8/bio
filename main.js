/* =====================================================
   Javascript for bottom navigation menu
===================================================== */

// Activate current navigation menu item on page scroll.
window.addEventListener("scroll",() => {
    const scrollY = window.scrollY;
    const pageSections =document.querySelectorAll(".page-section");
    
    pageSections.forEach((pageSections) => {
       let sectionTop = pageSections.offsetTop - 50;
       let sectionHeight = pageSections.offsetHeight;
       let sectionid = pageSections.getAttribute("id");
 
       console.log("Section top value:" + sectionTop);
       console.log("Section height value:" + sectionHeight);
 
       if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector(".bottom-menu .menu .menu-item a[href*=" + sectionid + "]").classList.add("current");
       }
       else{
          document.querySelector(".bottom-menu .menu .menu-item a[href*=" + sectionid + "]").classList.remove("current");
       }
    });
 });
 // Javascript for navigation menu effects on scroll.
 const bottomMenu = document.querySelector(".bottom-menu");
 const menuHideBtn = document.querySelector(".menu-hide-btn");
 const menuShowBtn = document.querySelector(".menu-show-btn");
 var menuTimeout;
 
 window.addEventListener("scroll", () => {
    bottomMenu.classList.remove("hide");
    menuShowBtn.classList.remove("show");
 
    if(window.scrollY < 10){
       menuHideBtn.classList.remove("show");
 
       function scrollStopped(){
          bottomMenu.classList.remove("hide");
          //menuShowBtn.classList.remove("show"); 
       }
 
       clearTimeout(menuTimeout);
       menuTimeout = setTimeout(scrollStopped, 2500);
    }
 
    if(window.scrollY > 10){
       menuHideBtn.classList.add("show");
 
       function scrollStopped(){
          bottomMenu.classList.add("hide");
          menuShowBtn.classList.add("show");
       }
 
       clearTimeout(menuTimeout);
       menuTimeout = setTimeout(scrollStopped, 2500);
    }
 });
 
 // Hide bottom navigation menu on click menu hide button.
 menuHideBtn.addEventListener("click", () => {
    bottomMenu.classList.toggle("hide");
    menuShowBtn.classList.add("show");
 });
 
 // Show bottom navigation menu on click menu show button.
 menuShowBtn.addEventListener("click", () => {
    bottomMenu.classList.toggle("hide");
    menuShowBtn.classList.remove("show");
 });