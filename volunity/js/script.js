/* ===================================================
   CONTACT FORM
=================================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const messageInput = document.getElementById("messageInput");
  const sendButton = document.getElementById("sendButton");
  const statusMessage = document.getElementById("statusMessage");

  function checkInputs() {
    sendButton.disabled = !(
      nameInput.value.trim() !== "" &&
      emailInput.value.trim() !== "" &&
      messageInput.value.trim() !== ""
    );
  }

  nameInput.addEventListener("input", checkInputs);
  emailInput.addEventListener("input", checkInputs);
  messageInput.addEventListener("input", checkInputs);

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    statusMessage.innerHTML = "<strong>Message sent successfully! ✅</strong>";
    statusMessage.classList.add("success-message");

    contactForm.reset();
    sendButton.disabled = true;
  });
}




/* ===================================================
   SEARCH + OPPORTUNITY CARDS
=================================================== */

const searchInput = document.getElementById("searchInput");
const resetButton = document.getElementById("resetButton");
const opportunityCards = document.querySelectorAll(".opportunity-card");

if (searchInput && resetButton && opportunityCards.length > 0) {

  searchInput.addEventListener("input", function () {
    const term = searchInput.value.toLowerCase();

    opportunityCards.forEach(card => {
      const name = card.dataset.name.toLowerCase();
      card.style.display = name.includes(term) ? "block" : "none";
    });
  });

  function highlightTopScore() {
    let maxScore = -Infinity;
    let topCard = null;

    opportunityCards.forEach(card => {
      const score = parseInt(card.dataset.score, 10);
      card.classList.remove("top-score");

      if (score > maxScore) {
        maxScore = score;
        topCard = card;
      }
    });

    if (topCard) {
      topCard.classList.add("top-score");
    }
  }

  highlightTopScore();

  resetButton.addEventListener("click", function () {
    searchInput.value = "";
    opportunityCards.forEach(card => {
      card.style.display = "block";
    });
  });
//ارجعي افهمني هاي الجزئية

const cards = document.querySelectorAll(".opportunity-card");
cards[0].style.backgroundColor = "#3a5a40";
}
/* ===================================================
   LOGIN FORM (WAIT FOR DOM)
=================================================== */

document.addEventListener("DOMContentLoaded", function () {

  const loginForm = document.querySelector("#login");
  if (!loginForm) return;

  const name2 = document.querySelector("#name");
  const ageField = document.querySelector("#age");
  const phoneField = document.querySelector("#phone");
  const email2 = document.querySelector("#email");
  const passwordField = document.querySelector("#password");
  const submitlogin = document.querySelector("#submitbtn");
  const messageBox = document.querySelector("#message");

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPassword(password) {
    return password.length >= 10 && /\d/.test(password);
  }

  function isValidAge(age) {
    return age !== "" && Number(age) > 15;
  }

  function validateForm() {
    const valid =
      name2.value.trim() !== "" &&
      phoneField.value.trim() !== "" &&
      isValidEmail(email2.value.trim()) &&
      isValidPassword(passwordField.value) &&
      isValidAge(ageField.value);

    submitlogin.disabled = !valid;
  }

  [name2, ageField, phoneField, email2, passwordField].forEach(field => {
    if (field) {
      field.addEventListener("input", validateForm);
    }
  });

  validateForm();

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (submitlogin.disabled) {
      messageBox.textContent = "Please check your inputs ❌";
      messageBox.classList.add("error");
      return;
    }

    messageBox.textContent = "Login successful ✅";
    messageBox.classList.remove("error");
    messageBox.classList.add("success");

    loginForm.reset();
    submitlogin.disabled = true;
  });

});


/* ===================================================
   LOAD OPPORTUNITY CARDS (ASYNC / AWAIT)
=================================================== */

function getCardsData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Community Engagement",
          image: "./images/engagement.jpg",
          description:
            "Participate in local projects to improve your neighborhood and support community initiatives."
        },
        {
          name: "Environmental Projects",
          image: "./images/enviromental.jpg",
          description:
            "Help protect nature and promote sustainability through hands-on environmental projects."
        },
        {
          name: "Education & Mentorship",
          image: "./images/education.jpg",
          description:
            "Mentor and guide youth or peers, sharing your skills and knowledge to empower others."
        },
        {
          name: "Health & Wellbeing",
          image: "./images/health.jpg",
          description:
            "Support health initiatives and wellbeing programs to make a real difference in people’s lives."
        }
      ]);
    }, 2000); 
  });
}
async function loadCards() {
  const container = document.getElementById("opportunitiescontainer");
  if (!container) return;
  container.innerHTML = "<p>Loading opportunities...</p>";

  try {
    const cards = await getCardsData();

    container.innerHTML = "";

    cards.forEach((cardData) => {
      const card = document.createElement("div");
      card.className = "opportunity-card";
      card.dataset.name = cardData.name;

      card.innerHTML = `
        <img src="${cardData.image}" alt="${cardData.name}">
        <h3>${cardData.name}</h3>
        <p>${cardData.description}</p>
        <a href="#signup" class="btn join-btn">Join Now</a>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    container.innerHTML = "<p>Failed to load opportunities </p>";
  }
}


document.addEventListener("DOMContentLoaded", loadCards);
