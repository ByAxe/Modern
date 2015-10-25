<?php /* Template Name: Including*/ ?>

<?php
// begin::Включаем функции Wordpress в наш php файл
require($_SERVER['DOCUMENT_ROOT'] . '/wp-load.php');
// end::Включаем функции Wordpress в наш php файл

// begin::Запуск функции, работающей с БД
function get_data()
{
    global $wpdb;
    $table_name = $wpdb->get_blog_prefix() . 'products';

    if (isset($_GET['sex'])) {

        $type = $_GET['type'];
        $sex = $_GET['sex'];

        $newtable = $wpdb->get_results("SELECT text, href, price, src
          FROM $table_name
          WHERE type = '$type' AND sex = '$sex'", ARRAY_A);
    } elseif (isset($_GET['type']) & !isset($_GET['sex'])) {
        $type = $_GET['type'];
        $newtable = $wpdb->get_results("SELECT text, href, price, src
        FROM $table_name
        WHERE type = '$type'", ARRAY_A);
    } else {
        $newtable = $wpdb->get_results("SELECT text, href, price, src
        FROM $table_name", ARRAY_A);
    }

    /* Данные одной строки в БД разделены по "|"
     А данные одного типа(столбца) разделены по "\n" */
    foreach ($newtable as $iter) {
        foreach ($iter as $j) {
            echo $j . "|";
        }
        echo "\n";
    }
}

// end::Запуск функции, работающей с БД

//if(isset($_GET['type'])){
get_data();
//}

?>
