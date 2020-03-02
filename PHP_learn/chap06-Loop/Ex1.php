<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title> Exercise1 </title>
    <link type="text/css" href="style.css" rel="stylesheet">
</head>

<body>
    <div class="Content4">
        <h1> Giải câu đố bằng vòng lặp</h1>
        <div class="question">
            <p>Yêu nhau cau sáu bổ ba </p>
            <p>Ghét nhau cau sáu bổ ba làm mười </p>
            <p>Mỗi người một miếng trăm người </p>
            <p>Có mười bảy quả hỏi người ghét yêu </p>
            <p>Hỏi có bao nhiêu người ghét nhau ?</p>
        </div>
        <div class="answer">
            <p>Đáp án</p>
            <ul> <?php
                        // x là số người yêu nhau, y là số người ghét nhau
                        // 3x + 10y = 100 (y <= 9; x <= 30)
                        // x + y = 17;
                        for ($x = 1; $x <= 16; $x++) {
                        for ($y = 1; $y <= 9; $y++) {
                      if (3*$x + 10*$y == 100 && $x + $y == 17) {
                                echo "<li>$x người yêu nhau, $y người ghét nhau </li>";
                                }
                            }
                        }
                    ?>
            </ul>
        </div>
    </div>
</body>

</html>