<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Toxic Positivity Game</title>
  <link rel="stylesheet" href="./styles.css">
</head>
<body>
  <!-- Opening transitions -->
  <div id="openingScreen">
    <h1><span class="highlight"><u>Un</u>Mask Cheer</span></h1>
  </div>
  <div id="backgroundWrapper"></div>

  <!-- Onboarding stuff -->
  <div id="onboardingContainer">
    <h1><u>Un</u>Mask Cheer</h1>
    <b>Programmed with ♡ by 3G 2025 BPGHS.</b>
    <p>Flip all cards that you think show toxic positivity traits</p>
    <form id="playerForm">
      <input type="text" id="playerName" placeholder="Enter your name" required><br>
      <input type="text" id="playerClass" placeholder="Enter your class" required><br>
    </form>

    <div id="buttonRow">
      <button id="startBtn">Start Game</button>
      <button id="iconLeaderboardBtn" onclick="window.location.href='./leaderboard/leaderboard.php'" title="View Leaderboard">
        Leaderboard
      </button>
    </div>
  </div>

  <div id="gameContainer">
    <div id="game"></div>
    <button id="finishBtn" style="display:none">Finish</button>
    <div id="result"></div>
  </div>

  <div id="penaltyOverlay">
    <span id="countdown">3</span>
  </div>

  <script src="./script.js"></script>
</body>
</html>
