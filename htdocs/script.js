window.addEventListener("load", () => {
  const opening = document.getElementById("openingScreen");
  const onboarding = document.getElementById("onboardingContainer");

  setTimeout(() => {
    opening.style.display = "none";
    onboarding.style.display = "block";

    setTimeout(() => {
      onboarding.style.opacity = "1";
    }, 50);

    document.body.style.overflow = "auto"; 
  }, 4000); 
});


const traits = [
    { text: "Just be happy!", toxic: true },
    { text: "It could be worse.", toxic: true },
    { text: "Just work a little harder.", toxic: true },
    { text: "Don't be so negative.", toxic: true },
    { text: "You’re strong enough to handle this", toxic: true },
    { text: "Don’t worry, be happy.", toxic: true },
    { text: "Good vibes only.", toxic: true },
    { text: "Everything happens for a reason.", toxic: true },
    { text: "That must be hard.", toxic: false },
    { text: "I’m here for you.", toxic: false },
    { text: "It’s okay to feel that way.", toxic: false },
    { text: "Take your time to heal.", toxic: false },
    { text: "You're not alone.", toxic: false },
    { text: "Tell me more.", toxic: false },
    { text: "I understand this hurts.", toxic: false },
    { text: "I'm listening.", toxic: false },
    { text: "It's not a big deal.", toxic: true},
    { text: "It'll eventually end.", toxic: true},
    { text: "Take your time.", toxic: false},
    { text: "Look at the bright side.", toxic: true},
    { text: "Take this as a test in life.", toxic: true},
    { text: "Stop crying.", toxic: true},
    { text: "You can learn from this.", toxic: false},
    { text: "Stop thinking about it.", toxic: true},
    { text: "Maybe it was meant to be.", toxic: true},
    { text: "Think about happy times.", toxic: true},
    { text: "I believe in you.", toxic: false},
    { text: "I will always be with you.", toxic: false},
    { text: "You can achieve anything with effort.", toxic: true},
    { text: "There are people who have it worse.", toxic: true},
    { text: "It's ok to be sad.", toxic: false},
    { text: "What doesn't kill make you stronger.", toxic: true},
    { text: "I understand how you're feeling", toxic: false},
    { text: "Be strong!", toxic: true},
    { text: "Be grateful for what you have.", toxic: true},
    { text: "It'll all make sense eventually", toxic: true},
    { text: "Stand strong against adversity!", toxic: true},
    { text: "We will be cheering you on!", toxic: false},
    { text: "Don't show weakness.", toxic: true},
    { text: "It's ok to rely on others.", toxic: false},
    { text: "Don't overthink it.", toxic: true},
    { text: "I hope you succeed", toxic: false},
    { text: "You'll be fine.", toxic: true},
    { text: "Happiness is a choice.", toxic: true},
    { text: "It's ok to think about it.", toxic: false},
    { text: "It must be difficult for you.", toxic: false},
    { text: "Tt is just a phase you are going through.", toxic: true},
    { text: "I'm here if you need me.", toxic: false},
];

let score = 0;
let startTime = 0;
let penaltyActive = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
}

function triggerPenalty() {
    penaltyActive = true;
    const overlay = document.getElementById("penaltyOverlay");
    const countdown = document.getElementById("countdown");
    let secondsLeft = 5;

    overlay.style.display = "flex";
    countdown.textContent = secondsLeft;

    const interval = setInterval(() => {
        secondsLeft--;
        countdown.textContent = secondsLeft;
        if (secondsLeft <= 0) {
        clearInterval(interval);
        overlay.style.display = "none";
        penaltyActive = false;
        }
    }, 1000);
}

function getRandomSample(array, size) {
  const copy = [...array];
  const sample = [];
  while (sample.length < size && copy.length > 0) {
    const idx = Math.floor(Math.random() * copy.length);
    sample.push(copy.splice(idx, 1)[0]);
  }
  return sample;
}

function startGame() {
    const name = document.getElementById("playerName").value.trim();
    const playerClass = document.getElementById("playerClass").value.trim();
    if (!name || !playerClass) {
        alert("Please enter your name and class.");
        return;
    }

    const gameDiv = document.getElementById("game");
    const resultDiv = document.getElementById("result");
    const onboarding = document.getElementById("onboardingContainer");
    const background = document.getElementById("backgroundWrapper");

    gameDiv.innerHTML = "";
    resultDiv.innerHTML = "";
    score = 0

    // Separate toxic and supportive traits
    const toxicTraits = traits.filter(t => t.toxic);
    const supportiveTraits = traits.filter(t => !t.toxic);

    // Pick 8 random from each
    const selectedToxic = getRandomSample(toxicTraits, 8);
    const selectedSupportive = getRandomSample(supportiveTraits, 8);

    // Combine and shuffle
    const selectedCards = [...selectedToxic, ...selectedSupportive];
    shuffle(selectedCards);

    selectedCards.forEach((trait, idx) => {
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = trait.text;
        card.dataset.index = idx;

        card.addEventListener("click", () => {
        if (card.classList.contains("flipped") || penaltyActive) return;

        card.classList.add("flipped");

        if (trait.toxic) {
            card.classList.add("correct");
            score++;
        } else {
            card.classList.add("incorrect");
            triggerPenalty();
            score--;
        }

        });

        gameDiv.appendChild(card);
    });

    gameDiv.style.display = "grid";
    document.getElementById("finishBtn").style.display = "inline-block";
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("playerForm").style.display = "none";
    document.getElementById("iconLeaderboardBtn").style.display = "none";
    onboarding.classList.add("started");
    background.classList.add("tilted");

    startTime = Date.now();
    }

    document.getElementById("startBtn").addEventListener("click", startGame);

    document.getElementById("finishBtn").addEventListener("click", () => {

    const timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);
    const name = document.getElementById("playerName").value.trim();
    const playerClass = document.getElementById("playerClass").value.trim();

    fetch("./helpers/submit_score.php", {
        method: "POST",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `name=${encodeURIComponent(name)}&class=${encodeURIComponent(playerClass)}&score=${score}&time=${timeTaken}`,
    })
    .then(response => response.text())
    .then(() => {
        document.getElementById("result").innerHTML =
        `Score submitted!<br>Score: ${score}<br>Time: ${timeTaken}s<br><button id="leaderboardBtn" onclick="window.location.href='./leaderboard/leaderboard.php'">View Leaderboard</button>`;
        document.getElementById("finishBtn").style.display = "none";
    })
    .catch(err => {
        document.getElementById("result").innerHTML = "Failed to submit score.";
    });
});