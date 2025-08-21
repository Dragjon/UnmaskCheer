 <?php
    $host = "127.0.0.1";
    $db = "leaderboard_db";
    $user = "root";
    $pass = "";

    $conn = new mysqli($host, $user, $pass, $db);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $name = $_POST['name'];
    $class = $_POST['class'];
    $score = intval($_POST['score']);
    $time = floatval($_POST['time']);

    $stmt = $conn->prepare("INSERT INTO leaderboard (name, class, score, time) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssid", $name, $class, $score, $time);
    $stmt->execute();
    $stmt->close();
    $conn->close();
    ?>