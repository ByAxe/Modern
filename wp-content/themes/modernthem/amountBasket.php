<?  $order = json_decode(stripcslashes($_POST['basket']), true);
	$colvo = 0;
		if(isset($order)){
			foreach($order as $cat) {
				foreach($cat as $item) {
					$colvo = $colvo + 1;
				};
			};
?>			
			<b><? echo $colvo; ?></b>
<?
		}else{
?>		
			<b>0</b>
<?
		};
?>