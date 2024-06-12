
// Header code starts here
class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        var currentPage = window.location.pathname;
        document.addEventListener('DOMContentLoaded', function() {
            var navLinks = document.querySelectorAll('header-component ul li a');
                // Iterate over each navigation link
                navLinks.forEach(link => {
                    // Get the href attribute of the link
                    var linkUrl = link.getAttribute('href');
                    var currentPageRelativePath = currentPage.split('/').pop();
                    // Check if the link URL matches the current page URL
                    if (linkUrl === currentPageRelativePath) {
                    // Find the parent <li> element of the link
                    var parentLi = link.parentElement;
                    while (parentLi && parentLi.parentElement && parentLi.parentElement.tagName.toLowerCase() !== 'ul') {
                        parentLi = parentLi.parentElement;
                    }
                    // If parentLi is found, add the active class to it
                    if (parentLi) {
                        parentLi.classList.add('active');
                    }
                    }
                });
        });
       
        // Iterate over each navigation link
       

        this.innerHTML = `
        <div class="fixed_top" data-spy="affix" data-offset-top="25">
        <div class="top-bar">
            <div class="container top_padding">
            <div class="row">
                <div class="col-md-1 col-lg-2"></div>
                <div class="col-xs-12 col-sm-9 col-md-8 col-lg-7">
                <div class="top-bar-lnks"> <span class="top_call">Call : <a href="tel:+15104564500"> +1-510-456-4500</a></span>
                    <ul>
                    <li><a href="https://www.keyusa.com/blog" target="_blank">Blog</a></li>
                    <li><a href="careers.html">Careers</a></li>
                    
                    <li><a href="upcoming-events.html">Upcoming Events</a></li>
                    </ul>
                </div>
                </div>
                <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <div class="search_new">
                    <input name="" type="text" placeholder="Search" class="search" style="padding: 2px 3px 2px 10px;">
                    <button type="button" class="search_button"> 
            <span class="glyphicon glyphicon-search"></span> </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        <header>
            <div class="container top_padding">
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 logo">
                <div class=""><a href="index.html"><img src="images/keyusa.png" alt="keyusa" title="keyusa"></a></div>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-9 col-lg-9">
                <!--  Nav Start  -->
                <div id="cssmenu">
        
                    <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="aboutus.html">About Us</a></li>
                    <li>
                        <a href="products.html">Products <span class="glyphicon glyphicon-triangle-bottom" style="float:right;"></span>
                        </a>
                        <ul class="products_menu" style="font-family: Arial, Helvetica, sans-serif;">
                        <li><a href="research-compliance.html">Research Compliance <span
                                class="glyphicon glyphicon-triangle-right"></span></a>
                            <ul>
                            <li><a href="irb-software.html">Human Subjects (IRB)</a></li>
                            <li><a href="iacuc-software.html">Animal Subjects (IACUC)</a></li>
                            <li><a href="ibc-software.html">Biosafety (IBC)</a></li>
                            <li><a href="stem-cell-research-oversight.html">Stem Cells (SCRO)</a></li>
                            <li><a href="radiation-safety-committee.html">Radiation Safety (RSC)</a></li>
                            <li><a href="chemical-safety-committee.html">Chemical Safety (CSC)</a></li>
                            <li><a href="controlled-substances.html">Controlled Substances</a></li>
                            <li><a href="eprotocol.html">eProtocol</a></li>
                            <li><a href="post-approval-monitoring.html">Post-Approval Monitoring</a></li>
                            </ul>
                        </li>
                        <li><a href="animal-research.html">Animal Research <span
                                class="glyphicon glyphicon-triangle-right"></span></a>
                            <ul>
                            <li><a href="iacuc-software.html">Animal Subjects (IACUC)</a></li>
                            <li><a href="lab-animal-resource-software.html">Lab Animal Resources Software (LARS)</a></li>
                            <li><a href="lab-animal-health-software.html">Lab Animal Health Software (LAHS)</a></li>
                            </ul>
                        </li>
                        <li><a href="research-administration-software.html">Research Administration <span
                                class="glyphicon glyphicon-triangle-right"></span></a>
                            <ul>
                            <li><a href="research-grants-funding-software.html">Grants Management</a></li>
                            <li><a href="coi-software.html">Conflict of Interest (eCOI)</a></li>
                            <li><a href="post-award-grants-management-software.html">Post Award Grants Management
                                Software</a></li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <a href="professional-services.html">Professional Services <span
                        class="glyphicon glyphicon-triangle-bottom"  style="float:right;"></span>
                    </a>
                    <ul class="products_menu" style="font-family: Arial, Helvetica, sans-serif;">
                    <li>
                    <a href="data-infrastructure-services.html">Data Infrastructure Services </a>
                    </li>
                    <li>
                    <a href="data-analytics-services.html">Data Analytics Services </a>
                    </li>
                    <li>
                    <a href="ai-ml-services.html">AI/ML Services</a>
                    </li>
                    <li>
                    <a href="hosting-services.html">Hosting Services</a>
                    </li>
                </ul>
                    </li>
                    </li>
                    <li><a href="resources.html">Resources</a></li>
                    <li><a href="contactus.html">Contact Us</a></li>
                    <li class="demo_btn"><a href="demo.html">REQUEST DEMO</a></li>
                    </ul>
                </div>
                <!--  Nav End  -->
                </div>
            </div>
            </div>
        </header>
        </div>
        `;

    }
  }
  
  customElements.define('header-component', Header);
  
// Footer code starts here
  class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="wrapper footer_links footer_mrgn ">
      <div class="container top_padding">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="footer_top_line"></div>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-2 width_align">
            <ul class="frt_menu">
              <li><a href="index.html">Home</a></li>
              <li><a href="aboutus.html">About Us</a></li>
                     
              <li><a href="contactus.html">Contact Us</a></li>
              <li><a href="demo.html">Request Demo</a></li>
              <li><a href="https://www.keyusa.com/blog" target="_blank">Blog</a></li>
              <li><a href="careers.html">Careers</a></li>
              <li><a href="resources.html">Resources</a></li>
              <li><a href="upcoming-events.html">Upcoming Events</a></li>
              <li><a href="newsletter.html">Sign up for Newsletter</a></li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-2 width_align_3">
            <ul class="frt_menu">
              <li><a href="products.html">Products</a></li>
              <li><a href="research-compliance.html">Research Compliance</a></li>
              <li><a href="irb-software.html" class="research-compliance">Human Subjects (IRB)</a></li>
              <li><a href="iacuc-software.html" class="research-compliance">Animal Subjects (IACUC)</a></li>
              <li><a href="ibc-software.html" class="research-compliance">Biosafety (IBC)</a></li>
              <li><a href="stem-cell-research-oversight.html" class="research-compliance">Stem Cells (SCRO)</a></li>
              <li><a href="radiation-safety-committee.html" class="research-compliance">Radiation Safety (RSC)</a></li>
              <li><a href="chemical-safety-committee.html" class="research-compliance">Chemical Safety (CSC)</a></li>
              <li><a href="controlled-substances.html" class="research-compliance">Controlled Substances</a></li>
              <li><a href="eprotocol.html" class="research-compliance">eProtocol</a></li>
              <li><a href="post-approval-monitoring.html" class="research-compliance">Post-Approval Monitoring</a></li>
    
            </ul>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-2 width_align_3">
            <ul class="frt_menu">
              <li><a href="animal-research.html">Animal Research</a></li>
              <li><a href="iacuc-software.html" class="research-compliance">Animal Subjects (IACUC)</a></li>
              <li><a href="lab-animal-resource-software.html" class="research-compliance">Lab Animal Resources Management Software (LARS)</a></li>
              <li><a href="lab-animal-health-software.html" class="research-compliance">Lab Animal Health Management Software (LAHS)</a></li>
              <li><a href="research-administration-software.html">Research Administration</a></li>
              <li><a href="research-grants-funding-software.html" class="research-compliance">Grants Management</a></li>
              <li><a href="coi-software.html" class="research-compliance">Conflict of Interest (eCOI)</a></li>
              <li><a href="post-award-grants-management-software.html" class="research-compliance">Post Award Grants Management Software</a></li>
            </ul>
            <div class="height_bottom"></div>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-2 width_align_2">
          <ul class="frt_menu">
            <li>
                <a href="professional-services.html">Professional Services</a>
            </li>
            <li >
                <a href="data-infrastructure-services.html" class="research-compliance">Data Infrastructure Services </a>
            </li>
            <li >
                <a href="data-analytics-services.html" class="research-compliance">Data Analytics Services </a>
            </li>

            <li>
                <a href="ai-ml-services.html" class="research-compliance">AI/ML Services</a>
            </li>
            <li>
                <a href="hosting-services.html" class="research-compliance">Hosting Services </a>
            </li>
         </ul>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-2 width_align_3">
            <div>
                <p style="margin:0px !important;"><a href="index.html"><img src="images/footer-keyusa.png" alt="keyusa" title="keyusa" style="max-width:initial !important;"></a></p>
                <p class="info"><span class="addr_text" style="font-size:12px; color:#00024d;">ISO 27001:2022 Certified Company.</span> 
                <br>
                <br>
                <span class="addr_text">Key Solutions, Inc.</span><br>
                <span class="addr_text">2803 Lakeview Court</span>
                <span class="addr_text">Fremont, CA 94538</span></p>
            </div>
            <ul class="frt_menu social_icons">
              <li><a href="https://www.facebook.com/key.solutions.usa/" target="_blank"><span class="social_icon1"></span>Find us on Facebook</a></li>
              <li><a href="https://twitter.com/KeyUsaInc" target="_blank"><span class="social_icon2"></span>Find us on Twitter</a></li>
              <li><a href="https://www.linkedin.com/company/keyusa/   " target="_blank"><span class="social_icon3"></span>Find us on Linkedin</a></li>
              
              <!--<li><a href="https://www.plus.google.com/u/0/b/100968497899651112065/" target="_blank"><span class="social_icon4"></span>Find us on Google Plus</a></li> -->
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--  Copyright Start  -->
    <div class="wrapper footer">
      <div class="container top_padding">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="copyright_small"> <span class="text-left" style="font-family:'Roboto-Regular';">&copy; <em id="copyright-year"></em> Key Solutions, All Rights Reserved</span>
            
       &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   <font color="grey block" style="font-family:'Roboto-Regular';"> <span class="footer-center"><a href="privacypolicy.html">Privacy Policy</a> | <a href="termsandconditions.html">Terms and Conditions</a> | <a href="cookiepolicy.html">Cookie Policy</a> | <a href="#" onclick="window.displayPreferenceModal();return false;" id="termly-consent-preferences">Consent Preferences</a></span></font>
            
            
            <span class="footer-right">Key Solutions, Inc. 2803 Lakeview Court, Fremont, CA 94538</span> </div>
          </div>
        </div>
      </div>
    </div>
    <!--  Copyright End  -->
      `;
    }
  }
  
  customElements.define('footer-component', Footer);


  document.addEventListener("DOMContentLoaded", function () {
    // Create a new noscript element
    var noscriptElement = document.createElement("noscript");

    // Create the iframe element
    var iframeElement = document.createElement("iframe");
    iframeElement.src = "https://www.googletagmanager.com/ns.html?id=GTM-P3WPMJ4J";
    iframeElement.height = "0";
    iframeElement.width = "0";
    iframeElement.style.display = "none";
    iframeElement.style.visibility = "hidden";

    // Append the iframe to the noscript element
    noscriptElement.appendChild(iframeElement);

    // Insert the noscript element right after the opening body tag
    document.body.insertAdjacentElement('afterbegin', noscriptElement);
  });

  // Do Not add any code in this file :
  //as it is using for  header and footer 
  // adding any code with errors may lead to miss the visibility of header and footer




