<?php
    // Mathametic operator
    $x = 2;
    $y = $x + 2; // (2 + 2 = 4) or $y += $x;
    echo $y;

    echo "<br>";
    $x =9;
    $y = $x % 2; // 9 % 2 = 1
    echo $y;

    echo "<br>";
    $x =9;
    $y = -$x; //  -9
    echo $y;

    echo "<br>";
    $x =9;
    $x++; //  10
    echo $x;

    // Compare operator
    echo "<br>";
    $x = 10;
    $y = 8;
    echo $x > $y;
    
    // Logic operator
    echo "<br>";
    $x = 10;
    $y = 8;
    echo ($x < $y or $x > 0);

    // Conditional operator
    echo "<br>";
    $num = 2;
    $result = ($num > 0) ? "Positive" : (($num < 0) ? "Negative" : "Zero")  ;
    echo $result;
?>
