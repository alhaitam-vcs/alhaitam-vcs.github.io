/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // tampilkan data youtube
  const dataYtUrl =
    "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC9kp6Tn3ILacmfsvWTQUKTw&key=AIzaSyB0n0r_lb08IBmWh0BGOzwK4Rs_h7Cki18";
  function dataYt() {
    fetch(`${dataYtUrl}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document.querySelector("#video").innerHTML =
          '<i class="fa-brands fa-youtube"></i> ' +
          data.items[0].statistics.videoCount +
          " video";
        document.querySelector("#subscriber").innerHTML =
          '<i class="fa-solid fa-users"></i> ' +
          data.items[0].statistics.subscriberCount +
          " subscriber";
        document.querySelector("#view").innerHTML =
          '<i class="fa-solid fa-eye"></i> ' +
          data.items[0].statistics.viewCount +
          " view";
      });
  }
  dataYt();

});
