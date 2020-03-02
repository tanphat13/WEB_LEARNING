<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title> Exercise2 </title>
        <link type="text/css" href="style.css" rel="stylesheet">
    </head>
    <body>
        <div class="Content5">
            <?php 
                $money = "";
                if (isset($_POST["money"])) $money = $_POST["money"];
            ?>
            <div class="info">
                <img src="image/atm.jpg" height= "150px" width= "150px"/>
                <h1>Mô phỏng máy ATM</h1>
                <form action="#" method="POST">
                    <p> Vui lòng nhập số tiền mà quý khách muốn thực hiện giao dịch</p>
                    <input type="text" name="money" value="<?php echo $money; ?>">
                    <input type="submit" value="Rút tiền">
                </form>
            </div>
            <div class="clr"></div>
            <div class="result">
                <div class="normal">
                    <p class="col1">Mệnh giá</p>
                    <p class="col2">Số lượng</p>
                    <p class="col3">Thành tiền</p>
                </div>
                <div class="clr"></div>
                <?php 
                    define("ONE", 1000);
                    define("TWO", 2000);
                    define("FIVE", 5000);
                    define("ONE_0", 10000);
                    define("TWO_0", 20000);
                    define("FIVE_0", 50000);
                    define("ONE_00", 100000);
                    define("TWO_00", 200000);
                    define("FIVE_00", 500000);
                    
                ?>
                <div class="normal">
                    <p class="col1">500.000</p>
                    <p class="col2">6</p>
                    <p class="col3">3.000.000</p>
                </div>
                <div class="clr"></div>
                <div class="normal">
                    <p class="col1">200.000</p>
                    <p class="col2">2</p>
                    <p class="col3">400.000</p>
                </div>
                <div class="clr"></div>
                <div class="normal">
                    <p class="col1">50.000</p>
                    <p class="col2">1</p>
                    <p class="col3">50.000</p>
                </div>
                <div class="clr"></div>

                <p class="total">Tổng tiền: 3.450.000</p>
            </div>
        </div>
    </body>
</html>