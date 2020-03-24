const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const select = s => document.querySelector(s),
      selectAll = s => document.querySelectorAll(s);

const bottomh = selectAll('.bottom-content .text-content h4'), 
      bottomc = selectAll('.bottom-content .text-content p'),
      ctah = select('.cta-text h1'),
      ctab = select('.cta-text button'),
      ctai = select('#cta-img'),
      contacth = select('.contact h4'),
      contactp = selectAll('.contact p'),
      footer = select('footer p');
      logoimg = select('#logo-img'),
      middleimg = select('#middle-img'),
      nav = select('header nav'),
      navlink = selectAll('header nav a'),
      toph = selectAll('.top-content .text-content h4'),
      topc = selectAll('.top-content .text-content p');

// nav
const blog = document.createElement('a'),
      hdesk = document.createElement('a');

blog.innerText = 'Blog';
hdesk.innerText = 'Helpdesk';

nav.prepend(blog);
nav.appendChild(hdesk);

navlink.forEach((e, i) => {
  e.innerText = siteContent['nav'][`nav-item-${i + 1}`];
});

navlink = selectAll('header nav a');

navlink.forEach(e => e.style.color = 'green');

// logo
logoimg.setAttribute('src', siteContent['nav']['img-src']);

// cta
ctah.innerText = siteContent['cta']['h1'];
ctab.innerText = siteContent['cta']['button'];
ctai.setAttribute('src', siteContent['cta']['img-src']);

// features
toph[0].innerText = siteContent['main-content']['features-h4'];
topc[0].innerText = siteContent['main-content']['features-content'];

// about
toph[1].innerText = siteContent['main-content']['about-h4'];
topc[1].innerText = siteContent['main-content']['about-content'];

// middle image
middleimg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// services
bottomh[0].innerText = siteContent['main-content']['services-h4'];
bottomc[0].innerText = siteContent['main-content']['services-content'];

// product
bottomh[1].innerText = siteContent['main-content']['product-h4'];
bottomc[1].innerText = siteContent['main-content']['product-content'];

// vision
bottomh[2].innerText = siteContent['main-content']['vision-h4'];
bottomc[2].innerText = siteContent['main-content']['vision-content'];

// contact
contacth.innerText = siteContent['contact']['contact-h4'];
contactp[0].innerText = siteContent['contact']['address'];
contactp[1].innerText = siteContent['contact']['phone'];
contactp[2].innerText = siteContent['contact']['email'];

// footer
footer.innerText = siteContent['footer']['copyright'];