class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="header sticky-bar">
            <div class="top-bar">
                <div class="container-fluid">
                    <div class="text-header">
                        <div class="text-unlock text-sm-bold">Unlock the Magic of Travel with TraviPedia - Your Gateway to Extraordinary Experiences</div>
                        <a class="link-secondary-2" href="#">
                            Contact us Now 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewbox="0 0 16 16" fill="none">
                                <path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="background-body">
                <div class="container">
                    <div class="main-header">
                        <div class="header-left">
                            <div class="header-logo"><a class='d-flex' href='/'><img class="light-mode" style="height: 60px;" alt="TraviPedia" src="assets/imgs/logo.svg"><img class="dark-mode" style="height: 60px;" alt="TraviPedia" src="assets/imgs/logo-white.svg"></a></div>
                            <div class="header-nav">
                                <nav class="nav-main-menu">
                                    <ul class="main-menu">
                                        <li class="mega-li has-children">
                                            <a class='active' href='/'>Home</a>
                                            <div class="mega-menu">
                                                <div class="mega-menu-inner">
                                                    <div class="row align-items-center">
                                                        <div class="col-lg-12">
                                                            <div class="row align-items-center">
                                                                <div class="col-lg-6">
                                                                    <img class="light-mode" alt="TraviPedia" src="assets/imgs/logo.svg" style="height: 60px;"><img class="dark-mode" alt="TraviPedia" src="assets/imgs/logo-white.svg" style="height: 60px;">
                                                                    <p class="text-md-bold mt-20 mb-10 neutral-1000">Start Your Journey</p>
                                                                    <h5 class="mb-45 neutral-1000">Book, Pack, Go! Your Ultimate Travel Companion</h5>
                                                                    <!-- <a class="btn btn-brand-secondary">
                                                                        Contact Now 
                                                                        <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M8 15L15 8L8 1M15 8L1 8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
                                                                        </svg>
                                                                    </a> -->
                                                                    <h6 class="neutral-1000 ml-40 mb-20">Coming Soon...</h6>
                                                                    <div class="d-flex align-items-center">
                                                                        <img alt="TraviPedia" src="assets/imgs/appstore.png" style="height: 40px;">
                                                                        <img alt="TraviPedia" class="ml-10" src="assets/imgs/playstore.png" style="height: 40px;">
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-6">
                                                                    <div class="card-home-link background-body">
                                                                        <a class='card-icon' href='/'> <img src="assets/imgs/template/icons/activity.svg" alt="TraviPedia"></a>
                                                                        <div class="card-info">
                                                                            <a href='/'>
                                                                                <h6 class="text-md-bold">Customized Itinearies</h6>
                                                                            </a>
                                                                            <p class="text-xs-medium neutral-500">Customise your Itinearies in a few minutes </p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-home-link background-body">
                                                                        <a class='card-icon' href='/'> <img src="assets/imgs/template/icons/map.svg" alt="TraviPedia"></a>
                                                                        <div class="card-info">
                                                                            <a href='/'>
                                                                                <h6 class="text-md-bold">Beautiful Treks</h6>
                                                                            </a>
                                                                            <p class="text-xs-medium neutral-500">Coming Soon... </p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card-home-link background-body">
                                                                        <a class='card-icon' href='/'> <img src="assets/imgs/template/icons/deck-chair.svg" alt="TraviPedia"></a>
                                                                        <div class="card-info">
                                                                            <a href='/'>
                                                                                <h6 class="text-md-bold">Easy Booking</h6>
                                                                            </a>
                                                                            <p class="text-xs-medium neutral-500">Book your Accomodations, transport and Activites with us </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- <div class="col-lg-4">
                                                                    <ul class="list-featured">
                                                                        <li><a class='tours' href='/'>Travi Tours</a></li>
                                                                        <li><a class='activities' href='/'>Travi Activities</a></li>
                                                                        <li><a class='destinations' href='/'>Travi Destinations</a></li>
                                                                        <li><a class='hotels' href='/'>Travi Stays</a></li>
                                                                        <li><a class='rental-car' href='/'>Travi Transport</a></li>
                                                                    </ul>
                                                                </div> -->
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href='/about-us'>About Us</a></li>
                                        <li><a href='/how-it-works'>How it Works</a></li>
                                        <li><a href='/contact'>Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="header-right">
                            <div class="d-flex align-middle mr-15"><a class="btn btn-mode change-mode mr-15" href="#" data-bs-theme-value="dark"> <img class="light-mode" src="assets/imgs/template/icons/light.svg" alt="TraviPedia"><img class="dark-mode" src="assets/imgs/template/icons/light-w.svg" alt="TraviPedia"></a><!-- <a class="btn btn-default btn-signin" href="#">Signin</a></div> -->
                            <div class="burger-icon-2 burger-icon-white"><img src="assets/imgs/template/icons/menu.svg" alt="TraviPedia"></div>
                            <div class="burger-icon burger-icon-white"><span class="burger-icon-top"></span><span class="burger-icon-mid"></span><span class="burger-icon-bottom"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2">
            <div class="mobile-header-wrapper-inner">
                <div class="mobile-header-logo">
                    <a class='d-flex' href='/'><img class="light-mode" alt="TraviPedia" src="assets/imgs/logo.svg" style="height: 60px;;"><img class="dark-mode" alt="TraviPedia" src="assets/imgs/logo-white.svg" style="height: 60px;;"></a>
                    <div class="burger-icon burger-icon-white"></div>
                </div>
                <div class="mobile-header-content-area">
                    <div class="perfect-scroll">
                        <div class="mobile-menu-wrap mobile-header-border">
                            <nav>
                                <ul class="mobile-menu font-heading">
                                    <li><a href='/'>Home</a></li>
                                    <li><a href='/about-us'>About Us</a></li>
                                    <li><a href='/how-it-works'>How it Works</a></li>
                                    <li><a href='/contact'>Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar-canvas-wrapper perfect-scrollbar button-bg-2">
            <div class="sidebar-canvas-container">
                <div class="sidebar-canvas-head">
                    <div class="sidebar-canvas-logo"> <a class='d-flex' href='/'><img class="light-mode" alt="TraviPedia" src="assets/imgs/logo.svg" style="height: 60px;"><img class="dark-mode" alt="TraviPedia" src="assets/imgs/logo.svg" style="height: 60px;"></a></div>
                    <div class="sidebar-canvas-lang">
                        <a class="close-canvas" href="#"> <img alt="TraviPedia" src="assets/imgs/template/icons/close.png"></a>
                    </div>
                </div>
                <div class="sidebar-canvas-content">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-12">
                                    <p class="text-md-bold mb-10 neutral-1000">Start Your Journey</p>
                                    <h5 class="mb-45 neutral-1000">Book, Pack, Go! Your Ultimate Travel Companion</h5>
                                    <a class="btn btn-brand-secondary">
                                        Contact Now 
                                        <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 15L15 8L8 1M15 8L1 8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
                                        </svg>
                                    </a><br><br>
                                </div>
                                <div class="col-lg-12">
                                    <div class="card-home-link background-body">
                                        <a class='card-icon' href='/'> <img src="assets/imgs/template/icons/activity.svg" alt="TraviPedia"></a>
                                        <div class="card-info">
                                            <a href='/'>
                                                <h6 class="text-md-bold">Customized Itinearies</h6>
                                            </a>
                                            <p class="text-xs-medium neutral-500">Customise your Itinearies in a few minutes </p>
                                        </div>
                                    </div>
                                    <div class="card-home-link background-body">
                                        <a class='card-icon' href='/'> <img src="assets/imgs/template/icons/map.svg" alt="TraviPedia"></a>
                                        <div class="card-info">
                                            <a href='/'>
                                                <h6 class="text-md-bold">Beautiful Treks</h6>
                                            </a>
                                            <p class="text-xs-medium neutral-500">Coming Soon... </p>
                                        </div>
                                    </div>
                                    <div class="card-home-link background-body">
                                        <a class='card-icon' href='/'> <img src="assets/imgs/template/icons/deck-chair.svg" alt="TraviPedia"></a>
                                        <div class="card-info">
                                            <a href='/'>
                                                <h6 class="text-md-bold">Easy Booking</h6>
                                            </a>
                                            <p class="text-xs-medium neutral-500">Book your Accomodations, transport and Activites with us </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-contactus">
                        <h6 class="title-contactus neutral-1000">Contact Us</h6>
                        <div class="contact-info">
                            <p class="address-2 text-md-medium neutral-1000">Lorem ipsum dolor sit amet</p>
                            <p class="hour-work-2 text-md-medium neutral-1000">Hours: 8:00 - 17:00, Mon - Sat</p>
                            <p class="email-2 text-md-medium neutral-1000">travipedia2024@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
  }
}

//Footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
      `
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-12 footer-1">
                        <div class="mt-20 mb-20">
                            <a class='d-inline-block mb-20' href='/'><img alt="TraviPedia" src="assets/imgs/logo-white.svg" style="height: 60px;;"></a>
                            <div class="box-info-contact mt-0">
                                <p class="text-md text-white icon-address">Lorem Ispum dolor sit amet</p>
                                <p class="text-md text-white icon-worktime">Hours: 8:00 - 17:00, Mon - Sat</p>
                                <p class="text-md text-white icon-email">travipedia2024@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-xs-6 footer-2">
                        <h6 class="text-linear-3">Quick Links</h6>
                        <ul class="menu-footer">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Faq's</a></li>
                            <li><a href="#">How it Works</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Why us</a></li>
                            <li><a href="#">Testimonails</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-xs-6 footer-3">
                        <h6 class="text-linear-3">Social Media</h6>
                        <ul class="menu-footer">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Youtube</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Threads</a></li>
                            <li><a href="#">Telegram</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-xs-6 footer-4">
                        <h6 class="text-linear-3">Legal</h6>
                        <ul class="menu-footer">
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookies Policy</a></li>
                            <li><a href="#">Refund Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom mt-50">
                    <div class="row align-items-center">
                        <div class="col-md-6 text-md-start text-center mb-20">
                            <p class="text-sm color-white">Copyright © 2024 TraviPedia Inc. All rights reserved.</p>
                        </div>
                        <div class="col-md-6 text-md-end text-center mb-20">
                            <div class="d-flex align-items-center justify-content-end">
                                <p class="text-lg-bold neutral-0 d-inline-block mr-10">Follow us</p>
                                <div class="box-socials-footer d-inline-block">
                                    <a class="icon-socials icon-instagram" href="#">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.4915 1.6665H6.50817C3.47484 1.6665 1.6665 3.47484 1.6665 6.50817V13.4832C1.6665 16.5248 3.47484 18.3332 6.50817 18.3332H13.4832C16.5165 18.3332 18.3248 16.5248 18.3248 13.4915V6.50817C18.3332 3.47484 16.5248 1.6665 13.4915 1.6665ZM9.99984 13.2332C8.2165 13.2332 6.7665 11.7832 6.7665 9.99984C6.7665 8.2165 8.2165 6.7665 9.99984 6.7665C11.7832 6.7665 13.2332 8.2165 13.2332 9.99984C13.2332 11.7832 11.7832 13.2332 9.99984 13.2332ZM14.9332 5.73317C14.8915 5.83317 14.8332 5.92484 14.7582 6.00817C14.6748 6.08317 14.5832 6.1415 14.4832 6.18317C14.3832 6.22484 14.2748 6.24984 14.1665 6.24984C13.9415 6.24984 13.7332 6.1665 13.5748 6.00817C13.4998 5.92484 13.4415 5.83317 13.3998 5.73317C13.3582 5.63317 13.3332 5.52484 13.3332 5.4165C13.3332 5.30817 13.3582 5.19984 13.3998 5.09984C13.4415 4.9915 13.4998 4.90817 13.5748 4.82484C13.7665 4.63317 14.0582 4.5415 14.3248 4.59984C14.3832 4.60817 14.4332 4.62484 14.4832 4.64984C14.5332 4.6665 14.5832 4.6915 14.6332 4.72484C14.6748 4.74984 14.7165 4.7915 14.7582 4.82484C14.8332 4.90817 14.8915 4.9915 14.9332 5.09984C14.9748 5.19984 14.9998 5.30817 14.9998 5.4165C14.9998 5.52484 14.9748 5.63317 14.9332 5.73317Z" fill=""></path>
                                        </svg>
                                    </a>
                                    <a class="icon-socials icon-facebook" href="#">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.3334 13.4915C18.3334 16.5248 16.5251 18.3332 13.4917 18.3332H12.5001C12.0417 18.3332 11.6667 17.9582 11.6667 17.4998V12.6915C11.6667 12.4665 11.8501 12.2748 12.0751 12.2748L13.5417 12.2498C13.6584 12.2415 13.7584 12.1582 13.7834 12.0415L14.0751 10.4498C14.1001 10.2998 13.9834 10.1582 13.8251 10.1582L12.0501 10.1832C11.8167 10.1832 11.6334 9.99985 11.6251 9.77485L11.5918 7.73317C11.5918 7.59984 11.7001 7.48318 11.8417 7.48318L13.8417 7.44984C13.9834 7.44984 14.0918 7.34152 14.0918 7.19985L14.0584 5.19983C14.0584 5.05816 13.9501 4.94984 13.8084 4.94984L11.5584 4.98318C10.1751 5.00818 9.07509 6.1415 9.10009 7.52484L9.14175 9.8165C9.15008 10.0498 8.96676 10.2332 8.73342 10.2415L7.73341 10.2582C7.59175 10.2582 7.48342 10.3665 7.48342 10.5082L7.50842 12.0915C7.50842 12.2332 7.61675 12.3415 7.75841 12.3415L8.75842 12.3248C8.99176 12.3248 9.17507 12.5082 9.18341 12.7332L9.2584 17.4832C9.26674 17.9498 8.89174 18.3332 8.42507 18.3332H6.50841C3.47508 18.3332 1.66675 16.5248 1.66675 13.4832V6.50817C1.66675 3.47484 3.47508 1.6665 6.50841 1.6665H13.4917C16.5251 1.6665 18.3334 3.47484 18.3334 6.50817V13.4915V13.4915Z" fill=""></path>
                                        </svg>
                                    </a>
                                    <a class="icon-socials icon-twitter" href="#">
                                        <svg width="18" height="16" viewbox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.1924 3.06705L14.8565 5.40299C14.3846 10.8733 9.77132 15.1249 4.25022 15.1249C3.11585 15.1249 2.18069 14.9452 1.47053 14.5905C0.897878 14.3038 0.663503 13.9967 0.604909 13.9092C0.552663 13.8309 0.518798 13.7417 0.505847 13.6485C0.492895 13.5552 0.50119 13.4602 0.530113 13.3706C0.559036 13.2809 0.607839 13.199 0.672875 13.1309C0.737911 13.0628 0.817498 13.0102 0.905691 12.9772C0.926003 12.9694 2.79944 12.2499 3.98928 10.8803C3.32943 10.3378 2.75341 9.70072 2.27991 8.98971C1.31116 7.55143 0.226784 5.05299 0.561159 1.3194C0.571758 1.20076 0.616036 1.08762 0.688779 0.993308C0.761521 0.898992 0.859699 0.827427 0.971752 0.787039C1.0838 0.746651 1.20506 0.739122 1.32125 0.76534C1.43744 0.791557 1.54372 0.850429 1.62757 0.935022C1.65491 0.962365 4.22757 3.52096 7.37288 4.35065V3.87487C7.37168 3.37595 7.47032 2.88185 7.66299 2.42164C7.85566 1.96143 8.13847 1.54443 8.49475 1.19518C8.84077 0.849652 9.25248 0.576929 9.70561 0.393103C10.1587 0.209277 10.6441 0.11807 11.133 0.124865C11.7889 0.131335 12.432 0.307407 12.9997 0.635963C13.5674 0.964519 14.0405 1.43438 14.3729 1.99987H16.7502C16.8739 1.99977 16.9948 2.03637 17.0977 2.10504C17.2006 2.17371 17.2808 2.27136 17.3281 2.38562C17.3755 2.49989 17.3878 2.62563 17.3637 2.74693C17.3395 2.86823 17.2799 2.97964 17.1924 3.06705Z" fill=""></path>
                                        </svg>
                                    </a>
                                    <a class="icon-socials icon-be" href="#">
                                        <svg width="21" height="15" viewbox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.82393 10.736L13.9225 7.78881L8.82393 4.84165V10.736ZM20.1803 3.04389C20.308 3.50561 20.3964 4.12451 20.4554 4.91042C20.5242 5.69633 20.5536 6.37418 20.5536 6.96361L20.6126 7.78881C20.6126 9.94024 20.4554 11.5219 20.1803 12.5337C19.9347 13.4179 19.3649 13.9877 18.4808 14.2333C18.0191 14.361 17.1742 14.4494 15.8775 14.5083C14.6004 14.5771 13.4313 14.6066 12.3507 14.6066L10.7887 14.6655C6.67251 14.6655 4.10848 14.5083 3.09662 14.2333C2.21247 13.9877 1.64269 13.4179 1.39709 12.5337C1.26938 12.072 1.18097 11.4531 1.12203 10.6672C1.05326 9.8813 1.02379 9.20345 1.02379 8.61402L0.964844 7.78881C0.964844 5.63739 1.12203 4.05575 1.39709 3.04389C1.64269 2.15974 2.21247 1.58996 3.09662 1.34436C3.55834 1.21665 4.4032 1.12823 5.69995 1.06929C6.97705 1.00052 8.14609 0.971052 9.22671 0.971052L10.7887 0.912109C14.9049 0.912109 17.4689 1.06929 18.4808 1.34436C19.3649 1.58996 19.9347 2.15974 20.1803 3.04389Z" fill=""></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="popup-firstload">
            <div class="popup-container">
                <div class="popup-content">
                    <a class="close-popup"></a>
                    <div class="popup-left">
                        <div class="logo-area"> <img class="light-mode" alt="TraviPedia" src="assets/imgs/logo.svg" style="height: 45px;;"><img class="dark-mode" alt="TraviPedia" src="assets/imgs/logo-white.svg" style="height: 45px;;"></div>
                        <h3 class="title-popup">Book, Pack, Go! Your Ultimate Travel Companion</h3>

                        <h5 class="text-white ml-40 mb-20">Coming Soon...</h5>
                        <div class="d-flex align-items-center">
                            <img alt="TraviPedia" src="assets/imgs/appstore.png" style="height: 40px;">
                            <img alt="TraviPedia" class="ml-10" src="assets/imgs/playstore.png" style="height: 40px;">
                        </div>
                    </div>
                    <div class="popup-right">
                        <div class="button-area">
                            <a class="btn btn-next" href="#">
                                <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.99992 10.6668L10.6666 6.00016L5.99992 1.3335M10.6666 6.00016L1.33325 6.00016" stroke="" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `  
  }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);