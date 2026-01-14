const loadBtn = document.getElementById("loadOpportunities");
const status = document.getElementById("status");
const container = document.getElementById("opportunitiesContainer");

loadBtn.addEventListener("click", loadOpportunities);

async function loadOpportunities() {
  status.textContent = "Loading opportunities...";
  container.innerHTML = "";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=6"
    );

    if (!response.ok) {
      throw new Error("Failed to load data");
    }

    const opportunities = await response.json();
    status.textContent = "";

    opportunities.forEach(item => {
      const card = document.createElement("div");
      card.className = "opportunity-card";

      const title = document.createElement("h3");
      title.textContent = item.title;

      const desc = document.createElement("p");
      desc.textContent = item.body;

      const org = document.createElement("span");
      org.textContent = `Organization ID: ${item.userId}`;

      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(org);

      container.appendChild(card);
    });

  } catch (error) {
    status.textContent = "Error loading opportunities ❌";
  }
}
