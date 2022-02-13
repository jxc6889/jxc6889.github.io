// Enable hidden nav bar
{
    const nav = document.querySelector(".nav");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      if (lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden");
      } else {
        nav.classList.remove("nav--hidden");
      }
  
      lastScrollY = window.scrollY;
    });
    const navlinks = document.querySelectorAll('.nav__link');
    const navtoggle = document.querySelector(".nav-toggle");
    navtoggle.addEventListener('click',() =>{
        document.body.classList.toggle('nav-open');
    });
    navlinks.forEach(link => {
        link.addEventListener('click',() => {
            document.body.classList.remove('nav-open');
        })
    })
    const press = document.getElementById("pressed");
    function sent(){
        press.innerHTML = "Thank You!";
  }
}
  