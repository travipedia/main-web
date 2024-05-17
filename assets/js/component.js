class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="header sticky-bar">
            <div class="top-bar">
                <div class="container-fluid">
                    <div class="text-header">
                        <div class="text-unlock text-sm-bold">Unlock the Magic of Travel with TraviPedia - Your Gateway to Extraordinary Experiences</div>
                        <a class="link-secondary-2" href="/contact">
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
                                        <li><a href='/'>Home</a></li>
                                        <li class="mega-li has-children">
                                            <a class='active' href='#'>Services</a>
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
                                                                                <h6 class="text-md-bold">Customized Itineary Packages</h6>
                                                                            </a>
                                                                            <p class="text-xs-medium neutral-500">Customise your Itineary Package in a few minutes </p>
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
                                                                            <p class="text-xs-medium neutral-500">Book your Accomodations, transport & Activites with us </p>
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
                            <!--<div class="burger-icon-2 burger-icon-white"><img src="assets/imgs/template/icons/menu.svg" alt="TraviPedia"></div>-->
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
        <!-- <div class="sidebar-canvas-wrapper perfect-scrollbar button-bg-2">
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
                                                <h6 class="text-md-bold">Customized Itineary Packages</h6>
                                            </a>
                                            <p class="text-xs-medium neutral-500">Customise your Itineary Package in a few minutes </p>
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
                                            <p class="text-xs-medium neutral-500">Book your Accomodations, transport & Activites with us </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-contactus">
                        <h6 class="title-contactus neutral-1000">Contact Us</h6>
                        <div class="contact-info">
                            <p class="address-2 text-md-medium neutral-1000">Delhi, India</p>
                            <p class="hour-work-2 text-md-medium neutral-1000">Hours: 8:00 - 17:00, Mon - Sat</p>
                            <p class="email-2 text-md-medium neutral-1000">travipedia2024@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
        `
  }
}

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
                                <p class="text-md text-white icon-address">Delhi, India</p>
                                <p class="text-md text-white icon-worktime">Hours: 8:00 - 17:00, Mon - Sat</p>
                                <p class="text-md text-white icon-email">travipedia2024@gmail.com</p>
                            </div>
                        </div>
                        <div class="box-need-help"> 
                          <p class="need-help text-md-medium mb-5 text-white">Need help? Call us</p><br><a class="heading-6 phone-support" href="tel:+91 74286 28173">+91 74286 28173</a>
                        </div>
                    </div>
                    <div class="col-md-3 col-xs-6 footer-2">
                        <h6 class="text-linear-3">Quick Links</h6>
                        <ul class="menu-footer">
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/faq">Faq's</a></li>
                            <li><a href="/how-it-works">How it Works</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="#">Why us</a></li>
                            <li><a href="#">Testimonails</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-xs-6 footer-3">
                        <h6 class="text-linear-3">Social Media</h6>
                        <ul class="menu-footer">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="https://www.youtube.com/channel/UCxpUXxspNr6xnt815IoO-KA" target="_blank">Youtube</a></li>
                            <li><a href="https://instagram.com/travipedia_official/" traget=_blank>Instagram</a></li>
                            <li><a href="https://x.com/Travi_pedia" target="_blank">Twitter</a></li>
                            <li><a href="https://www.threads.net/@travipedia_official" traget=_blank>Threads</a></li>
                            <li><a href="https://t.me/travipedia" traget=_blank> Telegram Ann </a></li>
                            <li><a href="#">Linkedin</a></li>
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
                        <h5 class="text-white mb-20">Coming Soon...</h5>
                        <div class="d-flex align-items-center">
                            <img alt="TraviPedia" src="assets/imgs/appstore.png" style="height: 40px;">
                            <img alt="TraviPedia" class="ml-10" src="assets/imgs/playstore.png" style="height: 40px;">
                        </div>
                    </div>
                </div>
                <div class="footer-bottom mt-50">
                    <div class="row align-items-center">
                        <div class="col-md-6 text-md-start text-center mb-20">
                            <p class="text-sm color-white">Copyright © 2024 <a href="/">TraviPedia</a> | Powered by <a href="https://www.hiqbyte.com/" target="_blank">Hiqbyte</a></p>
                        </div>
                        <div class="col-md-6 text-md-end text-center mb-20">
                            <div class="d-flex align-items-center justify-content-end">
                                <p class="text-lg-bold text-white d-inline-block mr-10">Follow us</p>
                                <div class="box-socials-footer d-inline-block">
                                    <a class="icon-socials icon-instagram" href="https://instagram.com/travipedia_official/" target=_blank>
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.4915 1.6665H6.50817C3.47484 1.6665 1.6665 3.47484 1.6665 6.50817V13.4832C1.6665 16.5248 3.47484 18.3332 6.50817 18.3332H13.4832C16.5165 18.3332 18.3248 16.5248 18.3248 13.4915V6.50817C18.3332 3.47484 16.5248 1.6665 13.4915 1.6665ZM9.99984 13.2332C8.2165 13.2332 6.7665 11.7832 6.7665 9.99984C6.7665 8.2165 8.2165 6.7665 9.99984 6.7665C11.7832 6.7665 13.2332 8.2165 13.2332 9.99984C13.2332 11.7832 11.7832 13.2332 9.99984 13.2332ZM14.9332 5.73317C14.8915 5.83317 14.8332 5.92484 14.7582 6.00817C14.6748 6.08317 14.5832 6.1415 14.4832 6.18317C14.3832 6.22484 14.2748 6.24984 14.1665 6.24984C13.9415 6.24984 13.7332 6.1665 13.5748 6.00817C13.4998 5.92484 13.4415 5.83317 13.3998 5.73317C13.3582 5.63317 13.3332 5.52484 13.3332 5.4165C13.3332 5.30817 13.3582 5.19984 13.3998 5.09984C13.4415 4.9915 13.4998 4.90817 13.5748 4.82484C13.7665 4.63317 14.0582 4.5415 14.3248 4.59984C14.3832 4.60817 14.4332 4.62484 14.4832 4.64984C14.5332 4.6665 14.5832 4.6915 14.6332 4.72484C14.6748 4.74984 14.7165 4.7915 14.7582 4.82484C14.8332 4.90817 14.8915 4.9915 14.9332 5.09984C14.9748 5.19984 14.9998 5.30817 14.9998 5.4165C14.9998 5.52484 14.9748 5.63317 14.9332 5.73317Z" fill=""></path>
                                        </svg>
                                    </a>
                                    <a class="icon-socials icon-facebook" href="">
                                        <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.3334 13.4915C18.3334 16.5248 16.5251 18.3332 13.4917 18.3332H12.5001C12.0417 18.3332 11.6667 17.9582 11.6667 17.4998V12.6915C11.6667 12.4665 11.8501 12.2748 12.0751 12.2748L13.5417 12.2498C13.6584 12.2415 13.7584 12.1582 13.7834 12.0415L14.0751 10.4498C14.1001 10.2998 13.9834 10.1582 13.8251 10.1582L12.0501 10.1832C11.8167 10.1832 11.6334 9.99985 11.6251 9.77485L11.5918 7.73317C11.5918 7.59984 11.7001 7.48318 11.8417 7.48318L13.8417 7.44984C13.9834 7.44984 14.0918 7.34152 14.0918 7.19985L14.0584 5.19983C14.0584 5.05816 13.9501 4.94984 13.8084 4.94984L11.5584 4.98318C10.1751 5.00818 9.07509 6.1415 9.10009 7.52484L9.14175 9.8165C9.15008 10.0498 8.96676 10.2332 8.73342 10.2415L7.73341 10.2582C7.59175 10.2582 7.48342 10.3665 7.48342 10.5082L7.50842 12.0915C7.50842 12.2332 7.61675 12.3415 7.75841 12.3415L8.75842 12.3248C8.99176 12.3248 9.17507 12.5082 9.18341 12.7332L9.2584 17.4832C9.26674 17.9498 8.89174 18.3332 8.42507 18.3332H6.50841C3.47508 18.3332 1.66675 16.5248 1.66675 13.4832V6.50817C1.66675 3.47484 3.47508 1.6665 6.50841 1.6665H13.4917C16.5251 1.6665 18.3334 3.47484 18.3334 6.50817V13.4915V13.4915Z" fill=""></path>
                                        </svg>
                                    </a>
                                    <a class="icon-socials icon-twitter" href="https://x.com/Travi_pedia" target="_blank">
                                        <svg width="18" height="16" viewbox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.1924 3.06705L14.8565 5.40299C14.3846 10.8733 9.77132 15.1249 4.25022 15.1249C3.11585 15.1249 2.18069 14.9452 1.47053 14.5905C0.897878 14.3038 0.663503 13.9967 0.604909 13.9092C0.552663 13.8309 0.518798 13.7417 0.505847 13.6485C0.492895 13.5552 0.50119 13.4602 0.530113 13.3706C0.559036 13.2809 0.607839 13.199 0.672875 13.1309C0.737911 13.0628 0.817498 13.0102 0.905691 12.9772C0.926003 12.9694 2.79944 12.2499 3.98928 10.8803C3.32943 10.3378 2.75341 9.70072 2.27991 8.98971C1.31116 7.55143 0.226784 5.05299 0.561159 1.3194C0.571758 1.20076 0.616036 1.08762 0.688779 0.993308C0.761521 0.898992 0.859699 0.827427 0.971752 0.787039C1.0838 0.746651 1.20506 0.739122 1.32125 0.76534C1.43744 0.791557 1.54372 0.850429 1.62757 0.935022C1.65491 0.962365 4.22757 3.52096 7.37288 4.35065V3.87487C7.37168 3.37595 7.47032 2.88185 7.66299 2.42164C7.85566 1.96143 8.13847 1.54443 8.49475 1.19518C8.84077 0.849652 9.25248 0.576929 9.70561 0.393103C10.1587 0.209277 10.6441 0.11807 11.133 0.124865C11.7889 0.131335 12.432 0.307407 12.9997 0.635963C13.5674 0.964519 14.0405 1.43438 14.3729 1.99987H16.7502C16.8739 1.99977 16.9948 2.03637 17.0977 2.10504C17.2006 2.17371 17.2808 2.27136 17.3281 2.38562C17.3755 2.49989 17.3878 2.62563 17.3637 2.74693C17.3395 2.86823 17.2799 2.97964 17.1924 3.06705Z" fill=""></path>
                                        </svg>
                                    </a>
                                    <a class="icon-socials icon-be" href="https://www.youtube.com/channel/UCxpUXxspNr6xnt815IoO-KA" target="_blank">
                                        <svg width="21" height="15" viewbox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.82393 10.736L13.9225 7.78881L8.82393 4.84165V10.736ZM20.1803 3.04389C20.308 3.50561 20.3964 4.12451 20.4554 4.91042C20.5242 5.69633 20.5536 6.37418 20.5536 6.96361L20.6126 7.78881C20.6126 9.94024 20.4554 11.5219 20.1803 12.5337C19.9347 13.4179 19.3649 13.9877 18.4808 14.2333C18.0191 14.361 17.1742 14.4494 15.8775 14.5083C14.6004 14.5771 13.4313 14.6066 12.3507 14.6066L10.7887 14.6655C6.67251 14.6655 4.10848 14.5083 3.09662 14.2333C2.21247 13.9877 1.64269 13.4179 1.39709 12.5337C1.26938 12.072 1.18097 11.4531 1.12203 10.6672C1.05326 9.8813 1.02379 9.20345 1.02379 8.61402L0.964844 7.78881C0.964844 5.63739 1.12203 4.05575 1.39709 3.04389C1.64269 2.15974 2.21247 1.58996 3.09662 1.34436C3.55834 1.21665 4.4032 1.12823 5.69995 1.06929C6.97705 1.00052 8.14609 0.971052 9.22671 0.971052L10.7887 0.912109C14.9049 0.912109 17.4689 1.06929 18.4808 1.34436C19.3649 1.58996 19.9347 2.15974 20.1803 3.04389Z" fill=""></path>
                                        </svg>
                                    </a>
                                    <a class="icon-socials icon-be" href="https://www.threads.net/@travipedia_official" traget=_blank>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12.1835 1.41016L12.1822 1.41016C9.09012 1.43158 6.70036 2.47326 5.09369 4.51569C3.66581 6.33087 2.93472 8.86436 2.91016 12.0068V12.0082C2.93472 15.1508 3.66586 17.6696 5.09369 19.4847C6.70043 21.5271 9.10257 22.5688 12.1946 22.5902H12.1958C14.944 22.5711 16.8929 21.8504 18.4985 20.2463C20.6034 18.1434 20.5408 15.5048 19.8456 13.8832C19.3163 12.6493 18.2709 11.6618 16.8701 11.0477C16.6891 8.06345 15.0097 6.32178 12.2496 6.30415C10.6191 6.29409 9.14792 7.02378 8.24685 8.39104L9.90238 9.5267C10.4353 8.71818 11.2789 8.32815 12.2371 8.33701C13.6244 8.34586 14.5362 9.11128 14.7921 10.4541C14.02 10.3333 13.1902 10.2982 12.3076 10.3488C9.66843 10.5008 7.9399 12.061 8.05516 14.2244C8.17571 16.4862 10.367 17.7186 12.4476 17.605C14.9399 17.4684 16.4209 15.6292 16.7722 13.2836C17.3493 13.6575 17.7751 14.1344 18.0163 14.6969C18.4559 15.7222 18.4838 17.4132 17.1006 18.7952C15.8838 20.0108 14.4211 20.5407 12.1891 20.5572C9.71428 20.5388 7.85698 19.746 6.65154 18.2136C5.51973 16.7748 4.92843 14.6882 4.90627 12.0002C4.92843 9.31211 5.51973 7.22549 6.65154 5.78673C7.85698 4.25433 9.71424 3.46156 12.189 3.44303C14.6819 3.4617 16.5728 4.25837 17.8254 5.79937C18.5162 6.64934 18.949 7.66539 19.2379 8.71407L21.1776 8.19656C20.8148 6.85917 20.2414 5.58371 19.363 4.50305C17.7098 2.46918 15.2816 1.43166 12.1835 1.41016ZM12.4204 12.3782C13.3044 12.3272 14.1239 12.3834 14.8521 12.5345C14.7114 14.1116 14.0589 15.4806 12.3401 15.575C11.2282 15.6376 10.1031 15.1413 10.0484 14.114C10.0077 13.3503 10.5726 12.4847 12.4204 12.3782Z"></path>
                                        </svg>
                                    </a>
                                    <a class="icon-socials icon-be" href="https://t.me/travipedia" target=_blank>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z"></path>
                                        </svg>
                                    </a>
                                    <a class="icon-socials icon-be" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="share-buttons">
            <div class="share-button-main bgcolor-github txt-center ctn-icon-social-media">
                <i class="fa fa-comments-o white share"></i>
            </div>
            
            <div class="share-button bgcolor-twitter txt-center ctn-icon-social-media">
                <a href="tel:+91 74286 28173" class="white" target="_blank">
                    <i class="fa fa-phone"></i>
                </a>
            </div>
            <div class="share-button bgcolor-skype txt-center ctn-icon-social-media">
                <a href="https://t.me/+917428628173?text=Hello! I Would like to know more about TraviPedia" class="white" target="_blank">
                    <i class="fa fa-telegram"></i>
                </a>
            </div>
            <div class="share-button bgcolor-whatsapp txt-center ctn-icon-social-media">
                <a href="https://wa.me/+917428628173?text=Hello! I Would like to know more about TraviPedia" class="white" target="_blank">
                    <i class="fa fa-whatsapp"></i>
                </a>
            </div>
        </div>
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