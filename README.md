# Unmask The Cheer (Project Description)
UNmaskCheer is a project by class 3G 2025 of BPGHs to promote mental wellbeing through the teaching of a phenomenon known as "toxic positivity", where overly-positive feedback/advice/mindset in the wrong context could lead to one feeling much worse. These types of mindsets are known as toxic-positive mindsets, and they neglect one's true feelings. Toxic positivity in daily life usually arises from several common factors like peer pressure, pressure to meet expectations, or fear of judgement. We, as a class, feel strongly to advocate against such a mentality on life and have come up with a game to teach our fellow students to spot symptoms and signs of toxic positivity. We hope this short and simple online game can help foster a more comforting and accepting school environment.
# How to use
Before doing this, make sure the github clone is updated
1) Download vs17 x64 php from https://www.php.net/downloads.php non-thread-safe version
2) Extract zip and add the folder to PATH
3) Download and run the XAMPP installer https://sourceforge.net/projects/xampp/
4) Choose all default options in installer (installing should be ~5-10min)
5) Run XAMPP and start mysql in XAMPP
6) Copy the UnmaskCheer folder into the htdocs at C:\xampp\htdocs
7) Test out whether it works http://localhost/UnmaskCheer/htdocs/index.php
8) In the phpMyAdmin, create a database named "leaderboard_db" at http://localhost/phpmyadmin/index.php?route=/server/databases
9) Run the sql query in http://localhost/phpmyadmin/index.php?route=/database/sql&db=leaderboard_db
    ```
    CREATE TABLE leaderboard (
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        class VARCHAR(100) NOT NULL,
        score INT(11) NOT NULL,
        time FLOAT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    ```
10) Replace all instances of password/username for db in code (submit_score.php & leaderboard.php) with (it should already be done in the updated github)
    ```
    $host = "127.0.0.1";
    $db = "leaderboard_db";
    $user = "root";
    $pass = "";
    ````
11) Check it out and test it at http://localhost/UnmaskCheer/htdocs/index.php
