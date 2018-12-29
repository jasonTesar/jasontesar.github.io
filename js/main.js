const body = document.querySelector('body');
const overlay = document.querySelector('#overlay');
const projectDetails = document.querySelector('#project-details');
const buttons = document.querySelectorAll('button');
const projectsInfo = [
  { name: 'development portfolio',
    id: 'DevelopmentPortfolio',
    image: 'img/DevelopmentPortfolioFull.png',
    description: 'The site you\'re currently viewing employs a simple, clean design to showcase the variety of projects I\'ve built as part of the Treehouse Front-End Web Development Techdegree program. While the individual projects themselves highlight the tools and techniques I\'ve learned along the way, I\'ve resisted the urge to cram every technique into this one site. Instead, I chose only the overlay technique (described in the Employee Directory\'s "More Info" section), because it\'s appropriate for the functionality of a portfolio, as well as some layout & navigation utilities from the Bootstrap framework.',
    skills: 'HTML, CSS, JavaScript, Bootstrap, Responsive Design'
  },
  { name: 'employee directory',
    id: 'EmployeeDirectory',
    image: 'img/EmployeeDirectoryFull.png',
    description: 'This single-page app uses the Fetch API to pull randomly-generated employee info from a third-party website (randomuser.me). The results are parsed into a JavaScript array and iterated over to build the initial gallery of employee cards. When the user clicks on a card, an event listener triggers an overlay screen and several functions which filter and format the employee details matching the card that was clicked. The overlay card is then populated with the filtered results along with an "x" for the user to close out of the overlay window.',
    skills: 'HTML, CSS, JavaScript, Fetch API, Responsive Design'
  },
  { name: 'web app dashboard',
    id: 'WebAppDashboard',
    image: 'img/WebAppDashboardFull.png',
    description: 'This interactive dashboard app uses SVG icons and integrates graphics from Chart.js to display tables, charts, and other interface components. The XML for the icons had to be modified to alter their appearance in order to demonstrate understanding of how SVG graphics are constructed. Alert messages are also featured heavily in this project&mdash;try clicking the bell icon at the top, or entering a user name and message and clicking "Send" at the bottom.',
    skills: 'HTML, CSS, JavaScript, Interactive SVG Graphics, Chart.js, Responsive Design'
  },
  { name: 'game show app',
    id: 'GameShowApp',
    image: 'img/GameshowAppFull.png',
    description: 'This browser-based game app uses JavaScript to select a random phrase from a string array and parse each letter into a list item. It then displays the hidden letter divs, a keyboard, and a life meter at the start of the game. Players select letters from the keyboard, and if they guess correctly, those hidden letters are revealed in the phrase. Incorrect guesses result in a life (indicated by hearts at the bottom) being removed from the board. This game relies on the DOM (Document Object Model), JavaScript functions, and arrays to build and reset the gameboard for continuous play.',
    skills: 'HTML, CSS, JavaScript, DOM'
  },
  { name: 'interactive photo gallery',
    id: 'InteractivePhotoGallery',
    image: 'img/PhotoGalleryFull.png',
    description: 'This single-page app uses a combination of vanilla JavaScript and jQuery to loop through an array of objects to build an initial gallery of thumbnail photos. It then accepts user search criteria to iterate through the array and rebuild the gallery based on matching the search string to words in the photo descriptions. In addition, it employs a "Lightbox" plugin that displays the full resolution image, title, and description, and allows the user to cycle through hi-res photos in this mode.',
    skills: 'HTML, CSS, JavaScript, jQuery, Lightbox Plugin, Responsive Design'
  },
  { name: 'web style guide',
    id: 'WebStyleGuide',
    image: 'img/WebStyleGuideFull.png',
    description: 'This responsive web page uses Sass to manage a network of separate CSS files for normalizing browser differences, base styling, components (buttons, form fields, layout grids, images, navigation, and typography), and utilities (inheritance, functions, mixins, placeholders, and variables). Although these features may be managed individually on complex projects, the result is a single, compliled CSS file &hellip; and a single web page to display the styles for the user.',
    skills: 'HTML, CSS, Sass, Responsive Design'
  },
  { name: 'online registration form',
    id: 'OnlineRegistrationForm',
    image: 'img/RegistrationFormFull.png',
    description: 'This registration form was built with a variety of HTML form elements, laid out responsively with Flexbox, and styled with CSS selectors.',
    skills: 'HTML Forms, CSS, Flexbox'
  },
  { name: 'responsive layout',
    id: 'ResponsiveLayout',
    image: 'img/ResponsiveLayoutFull.png',
    description: 'This web page was built with responsive images and media queries to handle everything from layout and positioning of elements to their visibility and font-size. The result is a flexible design that works for mobile, tablet, and desktop screen widths.',
    skills: 'HTML, CSS, Mobile-First Design, Responsive Images, Media Queries, Chrome DevTools'
  },
  { name: 'my author site',
    id: 'MyAuthorSite',
    image: 'img/MyWebsiteFull.png',
    description: 'What started as a blog for promoting my fiction writing (on the Blogger platform), morphed over a period of years into a 72-page WordPress site that is the hub of my online author presence. Although the design is accomplished through an installed theme, it\'s a theme intended for developers, requiring extensive customization. In addition to the large amount of content, the site integrates amazon book previews, MailMunch pop-ups for capturing reader email addresses, PayPal donation and purchase functionality, MailChimp email distribution, and a blog. Of course &hellip; now that I have web developer skills, you can bet I\'ll be rebuilding the site from scratch without a theme.',
    skills: 'WordPress Themes, Shortcodes, MailMunch Pop-ups, PayPal Buttons, Website Management'
  }
];

// Adds listener to each "More info" button (to avoid slow response from event bubbling
// if added to card instead), captures id of button, shows the overlay,
// calls showDetails() and passes it the info for that card id to build the
// overlay details, and disables scrolling in the background
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', (event) => {
    let clickId = event.target.id;
    let project = projectsInfo.filter(object => object.id == clickId)[0];
    overlay.style.display = 'flex';
    body.style.overflow = 'hidden';
    showDetails(project);
  });
}

// Adds the details of the clicked project to the overlay
function showDetails(project) {
  let name = project.name;
  let image = project.image;
  let description = project.description;
  let skills = project.skills;
  let html = `
    <button class="x">&times;</button>
    <div class="p-image-and-info">
      <img class="project-full" alt="project picture" src="${image}">
      <div class="p-info">
        <h5>${name}</h5>
        <p>${description}</p>
        <p class="skills"><strong>Skills</strong>: ${skills}</p>
      </div>
    </div>
  `;
  projectDetails.innerHTML = html;

  // Hides the overlay when the x is clicked
  // and re-enables scrolling of the main page
  let x = document.querySelector('.x');
  x.addEventListener('click', () => {
    overlay.style.display = 'none';
    body.style.overflow = '';
  });
}
