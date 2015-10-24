<?
$order = json_decode(stripcslashes($_POST['basket']), true);
?>
<?
	if(isset($order) & !empty($order)){
		foreach($order as $cat) {
			foreach($cat as $item) {
?>
				<ul class="bb_point">
					<li class="bbp_name"><? echo $item['name'] ?></li>
					<li class="bbp_color"><? echo $item['color'] ?></li>
					<li class="bbp_count"><? echo $item['count'] ?></li>
					<li class="bbp_size"><? echo $item['size'] ?></li>
				</ul>
<? 			};
		};
	}else echo "Корзина пуста."	
?>