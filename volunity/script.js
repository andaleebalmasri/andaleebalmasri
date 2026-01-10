const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const statusMessage = document.getElementById("statusMessage");
const contactForm = document.getElementById("contactForm");
function checkInputs() {
  if (
    nameInput.value.trim() !== "" &&
    emailInput.value.trim() !== "" &&
    messageInput.value.trim() !== ""
  ) {
    sendButton.disabled = false; 
  } else {
    sendButton.disabled = true;
  }
}

nameInput.addEventListener("input", checkInputs);
emailInput.addEventListener("input", checkInputs);
messageInput.addEventListener("input", checkInputs);

contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  statusMessage.textContent = "Message sent successfully! ✅";
  statusMessage.classList.add("success-message");

  contactForm.reset();
  sendButton.disabled = true;
});
// 


const searchInput = document.getElementById("searchInput");
const resetButton = document.getElementById("resetButton");
const opportunityCards = document.querySelectorAll(".opportunity-card");

searchInput.addEventListener("input", () => {
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
resetButton.addEventListener("click", () => {
  searchInput.value = "";
  opportunityCards.forEach(card => {
    card.style.display = "block";
  });
});
//

const cards = document.querySelectorAll(".opportunity-card");
cards[0].style.backgroundColor = "yellow";


