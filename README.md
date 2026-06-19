# Come Rain or Shine

A retail website for "Come Rain or Shine", a store selling colourful, stylish
raincoats, jackets, umbrellas and rainboots. Visitors can browse products,
learn about the business, send an enquiry, and contact the store.

## Live Website


[View the live site]
(https://comfy-conkies-5d3b82.netlify.app)


## Pages

- `index.html` — Home page with a welcome hero and introduction
- `about.html` — About the business, including mission and vision
- `services.html` — Product price list shown as interactive, clickable cards
- `contact.html` — Contact details, business hours and a contact form
- `enquiry.html` — Enquiry form that returns cost/availability responses

## Features

- Fully responsive design (phone, tablet and desktop)
- Interactive product cards with hover effects (lift and image zoom)
- Contact form with JavaScript validation that compiles a message into an email
- Enquiry form with JavaScript validation that returns a cost/availability response
- SEO basics: meta descriptions, alt text, clean URLs and a sitemap

## Technologies Used

- HTML5
- CSS3 (Flexbox, media queries, animations)
- JavaScript (form validation, DOM manipulation)

## Responsive Design Screenshots

The website was tested across multiple screen sizes to confirm a responsive layout.

**Desktop**

![Desktop view of the Come Rain or Shine website]![alt text](<screenshot-desktop.png>)

**Tablet (iPad)**

![Tablet view of the Come Rain or Shine website]![alt text](<screenshot-tablet.png>)

**Mobile (iPhone)**

![Mobile view of the Come Rain or Shine website]![alt text](<screenshot-mobile..png>)



---

## Changelog

### Part 3 — Enhancing Functionality and SEO

**Worked through Part 2 feedback (responsive design):**
- Removed all inline styles from every page so the external CSS and media queries control the layout. This addressed the layout, typography, navigation and image responsiveness issues raised in Part 2.
- Rebuilt every navigation menu as an unordered list (`<ul>`) so it stacks vertically and stays readable on mobile screens.
- Wrapped page content in semantic `<section>` elements so the responsive section styling applies correctly.

**Worked through Part 1 feedback:**
- Added a `sitemap.xml` file listing all five pages so search engines can index the site (Part 1 noted that no sitemap was provided).
- Added comments throughout the HTML, CSS and JavaScript to explain the structure and decisions (Part 1 noted that the code lacked comments).

**JavaScript functionality added (`script.js`):**
- Built a contact form with validation (name, email, message type, message). Invalid input shows on-screen error messages; valid input is compiled into an email addressed to the store.
- Built an enquiry form with validation that, once submitted, displays a response about cost and availability based on the user's selection.
- Added interactive, clickable product cards with hover effects on the services page.

**SEO improvements:**
- Added a unique title and meta description to every page.
- Added descriptive alt text to all images.
- Renamed page files to clean, lowercase, space-free names (`about.html`, `services.html`, `contact.html`) to fix broken links and create SEO-friendly URLs.
- Created `sitemap.xml` and `robots.txt` to support search engine indexing.

**Bug fixes:**
- Fixed broken `<link>` stylesheet tags and moved them into the `<head>`.
- Fixed an invalid `<body>` tag on the home page.
- Removed a duplicate `<h1>` on the contact page.
- Moved `script.js` into the main project folder so it loads correctly on every page.

---

## References

The following resources were used in the development of this website:

- Google Fonts. 2026. *Poppins.* [Online] Available at: https://fonts.google.com/specimen/Poppins [Accessed 18 June 2026].
- Mozilla Developer Network (MDN). 2026. *Client-side form validation.* [Online] Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation [Accessed 18 June 2026].
- W3Schools. 2026. *HTML Forms.* [Online] Available at: https://www.w3schools.com/html/html_forms.asp [Accessed 18 June 2026].
- Sitemaps.org. 2026. *XML Sitemaps Protocol.* [Online] Available at: https://www.sitemaps.org [Accessed 18 June 2026].

## Author

[Bonolo Chepape ST10525773] — Web Development (Introduction) WEDE5020, IIE