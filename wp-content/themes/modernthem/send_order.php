<?php
if (isset($_POST['basket'])) {
    $order = json_decode(stripcslashes($_POST['basket']), true);
    $emailclient = $_POST['email'];
    $phoneclient = $_POST['phone'];
	$emailboss = "modernimport@mail.ru";
	$cinfo = $_POST['info'];
	$client = $_POST['client'];
    try {

        // Проверяем, правильно ли распарсилась строка с заказом
        if (is_null($order))
            throw new Exception('error_order_format');

        // Если введён некорректный адрес E-mail
        if (!preg_match("/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/", $emailclient))
            throw new Exception ('reg_error_email_correct');

        // Компонуем письмо
        $subject = iconv("UTF-8", "CP1251", "Заказ на modernimport.by"); // 3 аргумент - тема
        $header = "Content-type: text/html; charset=windows-1251 \r\n";
        $header .= "From: Modern-import <order@modernimport.by> \r\n"; // Будет отображено в поле "От кого"
        $header .="Subject: ".$subject;

        // Получаем содержимое файла после обработки его PHP интерпретатором
        ob_start();
        include('emailboss_template.php');
        $letterboss = ob_get_contents();
        ob_end_clean();
		
		ob_start();
        include('emailclient_template.php');
        $letterclient = ob_get_contents();
        ob_end_clean();

        // Отправляем письмо
        if (!mail($emailclient, $subject, iconv("UTF-8", "CP1251", $letterclient), $header, '-forder@modernimport.by')) // Последний аргумент - то, куда будет отправлено письмо, если нажать "Ответить". Обязательно должно начинаться с -f
            throw new Exception('error');
		if (!mail($emailboss, $subject, iconv("UTF-8", "CP1251", $letterboss), $header, '-forder@modernimport.by'))
            throw new Exception('error');
		throw new Exception('success');
    } catch (Exception $e) {
        $data['error'] = $e->getMessage();

        echo json_encode($data);
        exit();
    }
} else {
    header("HTTP/1.0 404 Not Found");
}
?>