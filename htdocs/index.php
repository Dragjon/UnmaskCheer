 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Toxic Positivity Game</title>
  <link rel="stylesheet" href="./styles.css">
</head>
<body>
  <div id="backgroundWrapper"></div>

  <div id="onboardingContainer">
    <h1><u>Un</u>Mask Cheer</h1>
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

  <div id="game"></div>
    <button id="finishBtn" style="display:none">Finish</button>
  <div id="result"></div>

  <div id="penaltyOverlay">
    <span id="countdown">3</span>
  </div>


  <script src="./script.js"></script>
</body>
</html>