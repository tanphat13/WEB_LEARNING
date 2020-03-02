<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title> Insert tittle here</title>
        <link type="text/css" href="style.css" rel="stylesheet" media="screen">
    </head>
    <body>
        <?php 
            $n1 =  "";
            $n2 = "";
            $operand = "";
            if (isset($_POST["number1"]) && isset($_POST["number2"]) && isset($_POST["calculate"])) {
                $n1 = $_POST["number1"];
                $n2 = $_POST["number2"];
                $operand = $_POST["calculate"];

                if (!(is_numeric($n1)) || !(is_numeric($n2))) {
                    $result = "Wrong input";
                    
                }
                else {
                    switch ($operand) {
                        case '+':
                            $result = $n1 + $n2;
                            break;
                        case '-':
                            $result = $n1 - $n2;
                            break;
                        case '*':
                            $result = $n1 * $n2;
                            break;
                        case '/':
                            $result = $n1 / $n2;
                            break;
                        default:
                            $result = "Error";
                            break;
                    }
                }
            }
        ?>
        <div class="Content">
            <h1> Mô phỏng máy tính điện tử</h1>
            <form action="#" method="post" name="main-form">
                <div class="row">
                    <span>Số thứ nhất</span>
                    <input type="text" name="number1" value="<?php echo $n1 ?>"/>
                </div>
                <div class="row">
                    <span>Phép toán</span>
                    <input type="text" name="calculate" value="<?php echo $operand ?>"/>
                </div>
                <div class="row">
                    <span>Số thứ hai</span>
                    <input type="text" name="number2" value="<?php echo $n2 ?>"/>
                </div>
                <div class="row">
                    <input type="submit" value="Xem kết quả" name="submit"/>
                </div>
                <div class="row">
                    <p>Kết quả <?php echo $n1 . " " . $operand . " " . $n2 . " = " . $result?></p>
                </div>
            </form>
        </div>
    </body>
</html>