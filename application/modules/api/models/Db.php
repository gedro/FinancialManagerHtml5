<?php

/**
 * This is an abstract class to extend by Model classes
*/
abstract class Api_Model_Db {
	function __construct() {
		$dsn = sprintf(
				'mysql:dbname=%s;host=%s',
				get_cfg_var('zend_developer_cloud.db.name'),
				get_cfg_var('zend_developer_cloud.db.host')
		);
			
		try {	
			$this->db_conn = new PDO(
					$dsn,
					get_cfg_var('zend_developer_cloud.db.username'),
					get_cfg_var('zend_developer_cloud.db.password')
			);
		} catch (PDOException $e) {
			die($e->getMessage());
		}
	}
}

?>