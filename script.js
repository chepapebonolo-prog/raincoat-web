/* =========================================================================
   PART 3 — script.js
   All JavaScript functionality for your website.

   HOW TO USE:
   1. Save this file as "script.js" in your project folder.
   2. Add this line just before the closing </body> tag on EVERY page:
        <script src="script.js"></script>
   3. Each section below has a comment showing the HTML it needs.
      Copy the matching HTML into your pages and the JS will run it.

   Everything is plain JavaScript (no jQuery needed).
   ========================================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =======================================================================
     1) ACCORDION  (interactive element)
     ---------------------------------------------------------------------
     HTML it needs:

     <div class="accordion">
       <button class="accordion-header">Question 1</button>
       <div class="accordion-panel"><p>Answer 1</p></div>

       <button class="accordion-header">Question 2</button>
       <div class="accordion-panel"><p>Answer 2</p></div>
     </div>

     CSS tip: .accordion-panel { display: none; }  (the JS shows it on click)
  ======================================================================= */
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach(function (header) {
    header.addEventListener("click", function () {
      const panel = this.nextElementSibling;
      const isOpen = panel.style.display === "block";
      // close all panels first
      document.querySelectorAll(".accordion-panel").forEach(function (p) {
        p.style.display = "none";
      });
      // open the clicked one (or leave closed if it was already open)
      panel.style.display = isOpen ? "none" : "block";
    });
  });


  /* =======================================================================
     2) TABS  (interactive element)
     ---------------------------------------------------------------------
     HTML it needs:

     <div class="tabs">
       <button class="tab-link active" data-tab="tab1">Tab 1</button>
       <button class="tab-link" data-tab="tab2">Tab 2</button>
     </div>
     <div id="tab1" class="tab-content active">Content 1</div>
     <div id="tab2" class="tab-content">Content 2</div>

     CSS tip: .tab-content { display: none; } .tab-content.active { display: block; }
  ======================================================================= */
  const tabLinks = document.querySelectorAll(".tab-link");
  tabLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      const target = this.getAttribute("data-tab");
      document.querySelectorAll(".tab-link").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      this.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });


  /* =======================================================================
     3) MODAL / POP-UP  (interactive element)
     ---------------------------------------------------------------------
     HTML it needs:

     <button id="openModal">Open Modal</button>
     <div id="myModal" class="modal">
       <div class="modal-box">
         <span id="closeModal" class="modal-close">&times;</span>
         <h2>Hello!</h2>
         <p>This is a modal pop-up.</p>
       </div>
     </div>

     CSS tip: .modal { display: none; } .modal.show { display: flex; }
  ======================================================================= */
  const modal = document.getElementById("myModal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");
  if (modal && openBtn && closeBtn) {
    openBtn.addEventListener("click", () => modal.classList.add("show"));
    closeBtn.addEventListener("click", () => modal.classList.remove("show"));
    // close when clicking the dark background
    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.classList.remove("show");
    });
  }


  /* =======================================================================
     4) IMAGE GALLERY + LIGHTBOX  (click an image to enlarge it)
     ---------------------------------------------------------------------
     HTML it needs:

     <div class="gallery">
       <img src="img1.jpg" alt="Description 1" class="gallery-img">
       <img src="img2.jpg" alt="Description 2" class="gallery-img">
       <img src="img3.jpg" alt="Description 3" class="gallery-img">
     </div>
     <div id="lightbox" class="lightbox">
       <span id="lightboxClose" class="lightbox-close">&times;</span>
       <img id="lightboxImg" src="" alt="">
     </div>

     CSS tip: .lightbox { display:none; } .lightbox.show { display:flex; }
  ======================================================================= */
  const galleryImgs = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  if (lightbox && lightboxImg) {
    galleryImgs.forEach(function (img) {
      img.addEventListener("click", function () {
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
        lightbox.classList.add("show");
      });
    });
    if (lightboxClose) {
      lightboxClose.addEventListener("click", () => lightbox.classList.remove("show"));
    }
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) lightbox.classList.remove("show");
    });
  }


  /* =======================================================================
     5) DYNAMIC CONTENT + SEARCH / FILTER  (dynamic content section)
     ---------------------------------------------------------------------
     This loads service/product cards from a JS list, then lets the user
     search them. Change the "items" list to your own content.

     HTML it needs:

     <input type="text" id="searchInput" placeholder="Search services...">
     <div id="cardContainer"></div>
  ======================================================================= */
  const cardContainer = document.getElementById("cardContainer");
  const searchInput = document.getElementById("searchInput");

  // 👉 Edit this list with YOUR own services/products
  const items = [
    { title: "Web Design",      text: "Custom websites for your business." },
    { title: "Event Coverage",  text: "Photo and video at local events." },
    { title: "Branding",        text: "Logos and social media kits." },
    { title: "Consultation",    text: "One-on-one strategy sessions." }
  ];

  function renderCards(list) {
    if (!cardContainer) return;
    cardContainer.innerHTML = ""; // clear first
    if (list.length === 0) {
      cardContainer.innerHTML = "<p>No results found.</p>";
      return;
    }
    list.forEach(function (item) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = "<h3>" + item.title + "</h3><p>" + item.text + "</p>";
      cardContainer.appendChild(card);
    });
  }

  renderCards(items); // load on page open

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const term = this.value.toLowerCase();
      const filtered = items.filter(function (item) {
        return item.title.toLowerCase().includes(term) ||
               item.text.toLowerCase().includes(term);
      });
      renderCards(filtered);
    });
  }


  /* =======================================================================
     6) SCROLL ANIMATIONS  (animations / transitions)
     ---------------------------------------------------------------------
     Adds a fade-in when elements scroll into view.

     HTML it needs: add class="reveal" to anything you want to fade in.
       <section class="reveal">...</section>

     CSS it needs:
       .reveal { opacity: 0; transform: translateY(30px);
                 transition: all 0.6s ease; }
       .reveal.visible { opacity: 1; transform: translateY(0); }
  ======================================================================= */
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length > 0) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => observer.observe(el));
  }


  /* =======================================================================
     7) ENQUIRY FORM  (enquiry.html)
     ---------------------------------------------------------------------
     Validates input, then shows a response about COST / AVAILABILITY
     based on what the user selected. (Meets the rubric requirement.)

     HTML it needs (on enquiry.html):

     <form id="enquiryForm" novalidate>
       <label>Name
         <input type="text" id="enqName" required minlength="2">
       </label>
       <span class="error" id="enqNameError"></span>

       <label>Email
         <input type="email" id="enqEmail" required>
       </label>
       <span class="error" id="enqEmailError"></span>

       <label>I'm enquiring about
         <select id="enqType" required>
           <option value="">-- choose --</option>
           <option value="service">A Service</option>
           <option value="product">A Product</option>
           <option value="volunteer">Volunteering</option>
           <option value="sponsor">Sponsoring</option>
         </select>
       </label>
       <span class="error" id="enqTypeError"></span>

       <label>Message
         <textarea id="enqMessage" required minlength="10"></textarea>
       </label>
       <span class="error" id="enqMessageError"></span>

       <button type="submit">Send Enquiry</button>
     </form>
     <div id="enquiryResponse"></div>

     CSS tip: .error { color: red; font-size: 0.85rem; display:block; }
  ======================================================================= */
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    // responses shown based on the dropdown choice
    const responses = {
      service:   "Thanks! Our services start from R500. We currently have availability within 2 weeks.",
      product:   "Thanks! Product pricing varies by item — most are in stock and ship in 3–5 days.",
      volunteer: "Amazing! Volunteer spots are open. We'll email you the next onboarding date.",
      sponsor:   "Thank you! Sponsorship packages start at R2 000. A coordinator will be in touch."
    };

    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault(); // stop the page reloading

      // grab fields
      const name = document.getElementById("enqName");
      const email = document.getElementById("enqEmail");
      const type = document.getElementById("enqType");
      const message = document.getElementById("enqMessage");

      let valid = true;
      clearError("enqNameError"); clearError("enqEmailError");
      clearError("enqTypeError"); clearError("enqMessageError");

      // validation + error handling
      if (name.value.trim().length < 2) {
        showError("enqNameError", "Please enter your name."); valid = false;
      }
      if (!isValidEmail(email.value)) {
        showError("enqEmailError", "Please enter a valid email address."); valid = false;
      }
      if (type.value === "") {
        showError("enqTypeError", "Please choose what you're enquiring about."); valid = false;
      }
      if (message.value.trim().length < 10) {
        showError("enqMessageError", "Message must be at least 10 characters."); valid = false;
      }

      if (!valid) return;

      // success → show a response about cost/availability
      const responseBox = document.getElementById("enquiryResponse");
      responseBox.innerHTML =
        "<p><strong>Hi " + name.value.trim() + "!</strong><br>" +
        responses[type.value] + "</p>";
      responseBox.style.color = "green";
      enquiryForm.reset();
    });
  }


  /* =======================================================================
     8) CONTACT FORM  (contact.html)
     ---------------------------------------------------------------------
     Validates, then sends the message as an email.

     There are TWO ways to "send the email" — both are included:
       OPTION A (mailto): opens the user's email app with everything filled in.
                          Easiest, no setup, works offline. Meets "send email
                          to the recipient stated in the code".
       OPTION B (AJAX):   sends in the background without leaving the page
                          using a free service (Formspree). Meets the
                          "AJAX Form Submission" requirement.

     Choose ONE by setting USE_AJAX below to true or false.

     HTML it needs (on contact.html):

     <form id="contactForm" novalidate>
       <input type="text" id="cName" placeholder="Your name" required>
       <span class="error" id="cNameError"></span>

       <input type="email" id="cEmail" placeholder="Your email" required>
       <span class="error" id="cEmailError"></span>

       <select id="cType" required>
         <option value="">Type of message</option>
         <option value="General">General</option>
         <option value="Support">Support</option>
         <option value="Feedback">Feedback</option>
       </select>
       <span class="error" id="cTypeError"></span>

       <textarea id="cMessage" placeholder="Your message" required></textarea>
       <span class="error" id="cMessageError"></span>

       <button type="submit">Send Message</button>
     </form>
     <div id="contactResponse"></div>
  ======================================================================= */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {

    // ⚙️ SETTINGS — change these two lines:
    const USE_AJAX = false;                       // false = mailto, true = AJAX
    const RECIPIENT = "youremail@example.com";    // who receives the email
    const FORMSPREE_URL = "https://formspree.io/f/yourFormID"; // only if USE_AJAX = true

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("cName");
      const email = document.getElementById("cEmail");
      const type = document.getElementById("cType");
      const message = document.getElementById("cMessage");

      let valid = true;
      clearError("cNameError"); clearError("cEmailError");
      clearError("cTypeError"); clearError("cMessageError");

      if (name.value.trim().length < 2) {
        showError("cNameError", "Please enter your name."); valid = false;
      }
      if (!isValidEmail(email.value)) {
        showError("cEmailError", "Please enter a valid email."); valid = false;
      }
      if (type.value === "") {
        showError("cTypeError", "Please choose a message type."); valid = false;
      }
      if (message.value.trim().length < 10) {
        showError("cMessageError", "Message must be at least 10 characters."); valid = false;
      }

      if (!valid) return;

      const responseBox = document.getElementById("contactResponse");

      // compile the data into an email body
      const subject = "[" + type.value + "] Message from " + name.value.trim();
      const body =
        "Name: " + name.value.trim() + "\n" +
        "Email: " + email.value.trim() + "\n" +
        "Type: " + type.value + "\n\n" +
        "Message:\n" + message.value.trim();

      if (USE_AJAX) {
        // ---- OPTION B: AJAX submission (no page reload) ----
        fetch(FORMSPREE_URL, {
          method: "POST",
          headers: { "Accept": "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.value.trim(),
            email: email.value.trim(),
            type: type.value,
            message: message.value.trim()
          })
        })
        .then(function (res) {
          if (res.ok) {
            responseBox.innerHTML = "<p style='color:green'>Thanks! Your message was sent.</p>";
            contactForm.reset();
          } else {
            responseBox.innerHTML = "<p style='color:red'>Something went wrong. Please try again.</p>";
          }
        })
        .catch(function () {
          responseBox.innerHTML = "<p style='color:red'>Network error. Please try again.</p>";
        });

      } else {
        // ---- OPTION A: mailto (opens email app pre-filled) ----
        const mailtoLink = "mailto:" + RECIPIENT +
          "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(body);
        window.location.href = mailtoLink;
        responseBox.innerHTML = "<p style='color:green'>Opening your email app to send the message…</p>";
        contactForm.reset();
      }
    });
  }


  /* =======================================================================
     HELPER FUNCTIONS (used by both forms)
  ======================================================================= */
  function isValidEmail(value) {
    // simple, reliable email pattern
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }
  function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
  }
  function clearError(id) {
    const el = document.getElementById(id);
    if (el) el.textContent = "";
  }

}); // end DOMContentLoaded