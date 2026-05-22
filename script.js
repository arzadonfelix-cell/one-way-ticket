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

const travelNote = document.getElementById("travelNote");

const tinyPhoto = document.getElementById("tinyPhoto");

const revealQuestionBtn = document.getElementById("revealQuestionBtn");

const finalQuestionBox = document.getElementById("finalQuestionBox");

const pickedFlowers = [];

/* DIALOGUE */

const dialogueLines = [

  "Hi Siena, welcome aboard! I think it's finally time we talk about how all of this happened.",

  "Funny enough, as we've already talked about it, there was definitely attraction the first time we met. We just didn't really see each other enough to realize it yet.",

  "And apparently while I was over here trying to play it cool, you were secretly wondering, 'when is this dumbass finally gonna talk to me?'",

  "Which is honestly funny because the whole time, I was busy losing my mind over you with the occasional crash outs that Amelia heard... a lot.",

  "Although to be fair you also admitted you become awkward when you start liking someone because you don't want to embarrass yourself.",

  "So, somehow the situation became a bit of a stalemate.",

  "And yes, I'm completely aware that I waited until the absolute last minute to make a move on you and I do regret that.",

  "But, I'm still grateful for you. I remember how big the smile was on my face the night I got home from our date. Only you could make my face hurt from smiling too much.",

  "And, complete side note, your sentimental side somehow makes you even more adorable than you already are... which honestly feels a little unfair.",

  "I love hearing you talk about your hobbies and passions because every time you do, I swear I end up smiling like an idiot.",

  "And somewhere along the way, talking to you stopped feeling like something I did during my day and started becoming one of my favorite parts of it.",

"I started looking forward to our calls more than I probably should admit, though half the time I'm probably just bothering you.",

"Whenever work gives me one of those rough days, somehow hearing your voice at night makes everything feel lighter again.",

  "And on days when I start feeling down, I end up looking at your pictures for 'a bit' and somehow my day gets brighter again.",

  "And honestly? I still can't believe a guy like me somehow got lucky enough to find someone like you.",

  "Life has given me a lot of good things, but none as beautiful as the luck of finding you."
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

revealQuestionBtn.addEventListener("click", () => {
  revealQuestionBtn.classList.add("hidden");
  finalQuestionBox.classList.remove("hidden");
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

travelNote.addEventListener("click", () => {
  travelNote.textContent =
    "Sit back and enjoy the ride!";
});

tinyPhoto.addEventListener("click", () => {

  tinyPhoto.classList.toggle("photo-expanded");

});

/* STAMP */

stampBtn.addEventListener("click", () => {

  stamp.classList.add("stamped");

  conductorText.textContent =
    "Conductor says: “Ticket approved. Please proceed to the train.”";

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
  }, 950);
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
element.scrollTop = element.scrollHeight;
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

    if (currentLine === 5) {
      stationAnnouncement.textContent =
        "Now passing: The Station of Calgary, Canada.";
    }

    if (currentLine === 7) {
      stationAnnouncement.textContent =
        "Reminder: Passengers are advised not to panic over getting flustered.";
    }

    if (currentLine === 9) {
      stationAnnouncement.textContent =
        "Now approaching: The Station of Montreal, Canada.";
    }

    if (currentLine === 12) {
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

  setTimeout(() => {
    flowerMeaning.textContent =
      "The bouquet is complete. I'll get you the real one soon, I promise!";
  }, 1800);
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

  "The train ticket was expensive you know",

  "Please reconsider 🧎",

  "The train might get derailed",

  "The bouquet is wilting",

  "Holy D1 ragebaiter",

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