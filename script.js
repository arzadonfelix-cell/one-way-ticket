const beginBtn = document.getElementById("beginBtn");

const openingScene = document.getElementById("openingScene");

const ticketScene = document.getElementById("ticketScene");

const trainScene = document.getElementById("trainScene");

const stampBtn = document.getElementById("stampBtn");

const boardBtn = document.getElementById("boardBtn");

const stamp = document.getElementById("stamp");

const conductorText =
  document.getElementById("conductorText");

const trainDialogue =
  document.getElementById("trainDialogue");

const nextDialogueBtn =
  document.getElementById("nextDialogueBtn");

const flowerScene = document.getElementById("flowerScene");

const flowerButtons = document.querySelectorAll(".flower-btn");

const bouquet = document.getElementById("bouquet");

const flowerMeaning = document.getElementById("flowerMeaning");

const finishBouquetBtn = document.getElementById("finishBouquetBtn");

const confessionScene = document.getElementById("confessionScene");

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const endingScene = document.getElementById("endingScene");

const pianoMusic = document.getElementById("pianoMusic");

const trainAmbience = document.getElementById("trainAmbience");

const weatherToggle = document.getElementById("weatherToggle");

const snowLayer = document.getElementById("snowLayer");

const rainLayer = document.getElementById("rainLayer");

const stationAnnouncement = document.getElementById("stationAnnouncement");

const ticketCard = document.querySelector(".ticket-card");

const bouquetParticles = document.getElementById("bouquetParticles");

const pickedFlowers = [];

/* DIALOGUE */

const dialogueLines = [

  "You somehow became part of my routine.",

  "And I think my days got a little softer after meeting you.",

  "Since the day we started talking, there hasn't been a night where I didn't fall asleep thinking about you.",

  "Your sentimental side somehow adds to your charm... making you even cuter than you already are.",

  "And whenever you talk about your hobbies and passions like sports, all I can do is stare into your eyes and fall even more for you.",

  "Btw... I want to learn more about the things no one has cared enough to know about you.",

  "Because the thing is... I usually like being by myself. That's how I knew you were special, because for the first time in a while, I wanted someone else's company more than my own.",

  "I still remember how big the smile was on my face the night I got home after our first date. Only you could make my face hurt from smiling too much.",

  "I love the dirty jokes we make despite how much Mariana has corrupted you lol... and by the way, we're definitely gonna need a Lactaid sponsorship soon with the amount of dairy we've been consuming.",

  "One day you're teaching me how to make pandesal using the cloth your lolo gave you and that is non-negotiable.",

  "I hope you know there's no one else out there that gets my attention the way you do.",

  "Life has given me many good things... but none as beautiful as the luck of finding you."
];

let currentLine = 0;


/* BEGIN */

beginBtn.addEventListener("click", () => {

  pianoMusic.volume = 0.28;

  pianoMusic.play().catch(() => {
    console.log("Piano music could not play.");
  });

  openingScene.classList.add("hidden-scene");

  setTimeout(() => {
    ticketScene.classList.add("active");
  }, 700);
});


let weatherMode = "snow";

weatherToggle.addEventListener("click", () => {
  if (weatherMode === "snow") {
    weatherMode = "rain";

    snowLayer.classList.remove("active-weather");
    rainLayer.classList.add("active-weather");

    weatherToggle.textContent = "☔ Rainfall";
  } else {
    weatherMode = "snow";

    rainLayer.classList.remove("active-weather");
    snowLayer.classList.add("active-weather");

    weatherToggle.textContent = "❄ Snowfall";
  }
});

/* STAMP */

stampBtn.addEventListener("click", () => {

  stamp.classList.add("stamped");

  conductorText.textContent =
    "Conductor says: “Ticket approved. Side effects may include smiling at your device.”";

  stampBtn.classList.add("hidden");

  boardBtn.classList.remove("hidden");
});


/* BOARD TRAIN */

boardBtn.addEventListener("click", () => {
  trainAmbience.volume = 0.05;

  trainAmbience.play().catch(() => {
    console.log("Train ambience could not play.");
  });

  ticketCard.classList.add("ticket-tear");

  setTimeout(() => {
    ticketScene.classList.remove("active");
    trainScene.classList.add("active");

    typeText(trainDialogue, dialogueLines[0], 28);
  }, 850);
});


/* DIALOGUE */

let typingInterval;
let isTyping = false;

function typeText(element, text, speed = 32) {

  clearInterval(typingInterval);

  element.textContent = "";

  let i = 0;

  isTyping = true;

  nextDialogueBtn.disabled = true;

  nextDialogueBtn.style.opacity = "0.5";
  nextDialogueBtn.style.cursor = "not-allowed";

  typingInterval = setInterval(() => {

    element.textContent += text.charAt(i);

    i++;

    if (i >= text.length) {

      clearInterval(typingInterval);

      isTyping = false;

      nextDialogueBtn.disabled = false;

      nextDialogueBtn.style.opacity = "1";
      nextDialogueBtn.style.cursor = "pointer";
    }

  }, speed);
}

nextDialogueBtn.addEventListener("click", () => {
    if (isTyping) return;
  currentLine++;

  if (currentLine < dialogueLines.length) {
    trainDialogue.style.opacity = 0;

    setTimeout(() => {
      trainDialogue.style.opacity = 1;
      typeText(trainDialogue, dialogueLines[currentLine], 28);
    }, 250);

    if (currentLine === 3) {
      stationAnnouncement.textContent =
        "Now passing: The Station of Calgary.";
    }

    if (currentLine === 5) {
      stationAnnouncement.textContent =
        "Reminder: Passengers are advised not to panic over getting flustered.";
    }

    if (currentLine === 8) {
      stationAnnouncement.textContent =
        "Now approaching: The Station of Montreal.";
    }

    if (currentLine === 10) {
      stationAnnouncement.textContent =
        "Final scenic route before the Flower Cart.";
    }

  } else {
    trainScene.classList.remove("active");
    flowerScene.classList.add("active");
  }
});

flowerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const flower = button.dataset.flower;
    const meaning = button.dataset.meaning;

    pickedFlowers.push(flower);

    button.classList.add("picked");

    bouquet.innerHTML = pickedFlowers
      .map((item) => {
        if (item === "Lavender") return "🪻";
        if (item === "Sunflower") return "🌻";
        if (item === "Tulip") return "🌷";
        if (item === "Rose") return "🌹";
        if (item === "Lily") return "🌺";
      })
      .join(" ");

    flowerMeaning.textContent = meaning;

    if (pickedFlowers.length === 5) {
      finishBouquetBtn.classList.remove("hidden");
      flowerMeaning.textContent =
        "The bouquet is complete. I'll get you the real one soon, I promise.";
    }
  });
});

finishBouquetBtn.addEventListener("click", () => {
  flowerScene.classList.remove("active");
  confessionScene.classList.add("active");
});

function createBouquetParticles() {
  const flowers = ["🪻", "🌻", "🌷", "🌹", "🌺"];

  for (let i = 0; i < 26; i++) {
    const particle = document.createElement("span");

    particle.classList.add("flower-particle");

    particle.textContent = flowers[i % flowers.length];

    particle.style.setProperty("--x", `${Math.random() * 520 - 260}px`);
    particle.style.setProperty("--y", `${Math.random() * 360 - 220}px`);
    particle.style.setProperty("--r", `${Math.random() * 360}deg`);

    bouquetParticles.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 3000);
  }
}

yesBtn.addEventListener("click", () => {
  confessionScene.classList.remove("active");
  endingScene.classList.add("active");

  createBouquetParticles();
});

const noMessages = [

  "Wait what 😭",

"Wrong choice",

  "Be serious",

  "The conductor is judging you",

  "This train was expensive you know",

  "Please reconsider 🧎",

  "You're breaking the railway lore",

  "The bouquet is crying",

  "At least take the Lactaid sponsorship first",

  "Emergency meeting with the conductor required",

  "Okay but like... respectfully... rude"
];

let noIndex = 0;

noBtn.addEventListener("mouseover", () => {

  noIndex++;

  if (noIndex >= noMessages.length) {
    noIndex = 0;
  }

  noBtn.textContent = noMessages[noIndex];

  const randomX = Math.random() * 80 - 40;
  const randomY = Math.random() * 40 - 20;

  noBtn.style.transform =
    `translate(${randomX}px, ${randomY}px)`;
});


noBtn.addEventListener("mouseleave", () => {

  noBtn.style.transform = "translate(0px, 0px)";
});