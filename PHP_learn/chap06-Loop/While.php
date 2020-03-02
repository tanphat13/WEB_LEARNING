<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title> Insert tittle here</title>
        <link type="text/css" href="style.css" rel="stylesheet" media="screen">
    </head>
    <body>
        <div class="Content2">
            <h1> Vẽ tam giác</h1>
            <form name="main-form" method="POST">
                <input type="text" name="Choice"/>
            </form>
            <div class="result">
                <?php
                    $choice = (isset($_POST["Choice"]) ? $_POST["Choice"] : 0);
                    $result = "";
                    switch ($choice) {
                        case '1': {
                            $i = 1;
                            while ($i <= 6) {
                                $result .= str_repeat("*",$i) . "<br/>";
                                ++$i;
                            }
                        break;
                        }
                        case '2': {
                            $i = 6;
                            while ($i >= 1) {
                                $result .= str_repeat("*",$i) . "<br/>";
                                --$i;
                            }
                        break;
                        }
                        case '3': {
                            $i = 1;
                            while ($i <= 6) {
                                $space = 6 - $i;
                                $NumOfStar = $i * 2 - 1;
                                $result .= str_repeat("&nbsp;&nbsp;",$space) . str_repeat("*",$NumOfStar) . "<br/>";
                                ++$i;
                            }
                        break;
                        }
                        default:
                            # code...
                            break;
                    }
                    
                    echo $result;
                ?>
            </div>
        </div>
    </body>
</html>