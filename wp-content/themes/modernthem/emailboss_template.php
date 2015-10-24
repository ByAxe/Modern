<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
<h1>Новый заказ</h1>
<h4>Заказчик:</h4>
<p>- <? echo $client ?></p>
<h4>Контактная информация:</h4>
<p>- <? echo $emailclient ?></p>
<p>- <? echo $phoneclient ?></p>
<h4>Дополнительная информация:</h4>
<p>- <? echo $cinfo ?></p>
<h4>Таблица заказа:</h4>
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
<p>Письмо сгенерировано сервером</p>
<i>order@modernimport.by</i>
