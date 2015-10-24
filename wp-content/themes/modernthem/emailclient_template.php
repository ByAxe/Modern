<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
<h1>Заказ на Modernimport.by</h1>
<p>Ваш заказ успешно принят. Ниже в таблице представлена информация о заказаном товаре.</p>
<p>Узнать телефоны, адреса и информацию о Модерн импорт вы можете на официальном <a href="http://modernimport.by/kontakty/">сайте</a> дилера.</p>
<h3>Таблица заказа:</h3>
<table width="100%" border="1">
    <thead>
        <tr>
            <th>Наименование</th>
            <th width="10%">Количество</th>
            <th width="15%">Цвет</th>
			<th width="10%">Размер</th>
        </tr>
    </thead>
    <tbody>
        <? foreach ($order as $key => $item) {
				foreach ($item as $num => $row) { ?>
					<tr>
						<td><? echo $row['name'] ?></td>
						<td>
							<? if ($row['count'] == 1){
								echo $row['count']; 
								echo "-на штука";
							}else if ($row['count'] > 1 & $row['count'] < 5){
								echo $row['count']; 
								echo " штуки";
							}else{ 
								echo $row['count']; 
								echo " штук";
							}
							?>
						</td>
						<td><? echo $row['color'] ?></td>
						<td><? echo $row['size'] ?></td>
					</tr>
			<?	}

        } ?>
    </tbody>
</table>
<p>Если вы получили это письмо по ошибке, и ничего не заказывали на Modernimport.by, то просто его проигнорируйте.</p>
<p>Не пишите ответ, так как письмо сгенерировано сервером</p>
<i>order@modernimport.by</i>