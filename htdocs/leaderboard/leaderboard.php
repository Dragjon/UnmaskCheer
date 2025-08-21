 <?php
$host = "127.0.0.1";
$db = "leaderboard_db";
$user = "root";
$pass = "";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query("SELECT name, class, score, time FROM leaderboard ORDER BY score DESC, time ASC");
$rows = [];
$classes = [];

while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
    $classes[] = $row['class'];
}

$classes = array_unique($classes);
sort($classes);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Leaderboard</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>

<h1>Unmask Cheer Leaderboard</h1>

<div class="controls">
    <input type="text" id="searchInput" placeholder="Search by Name">
    <select id="classFilter">
        <option value="">All Classes</option>
        <?php foreach ($classes as $class): ?>
            <option value="<?= htmlspecialchars($class) ?>"><?= htmlspecialchars($class) ?></option>
        <?php endforeach; ?>
    </select>
</div>

<table id="leaderboardTable">
    <thead>
        <tr>
            <th>Place</th>
            <th>Name</th>
            <th>Class</th>
            <th>Score</th>
            <th>Time (s)</th>
        </tr>
    </thead>
    <tbody>
        <?php $place = 1; ?>
        <?php foreach ($rows as $row): ?>
            <tr>
                <td><?= $place++ ?></td>
                <td><?= htmlspecialchars($row['name']) ?></td>
                <td><?= htmlspecialchars($row['class']) ?></td>
                <td><?= $row['score'] ?></td>
                <td><?= $row['time'] ?></td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>

<a class="back-btn" href="../index.php">Back to Game</a>

<script src="./script.js"></script>


</body>
</html>

<?php $conn->close(); ?>
