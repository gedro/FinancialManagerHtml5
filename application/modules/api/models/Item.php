<?php

class Api_Model_Item extends Api_Model_Db {
	
	private $aColumns = array( 'id', 'shop', 'item', 'count', 'price' );
	
	function getCount() {
		$stmt = $this -> db_conn -> prepare('SELECT COUNT(*) sum FROM item');
		$stmt -> execute();
		$result = $stmt -> fetch(PDO::FETCH_ASSOC);
		return intval($result['sum']);
	}

	function getItem($id) {
		$stmt = $this -> db_conn -> prepare('SELECT * FROM item WHERE id = :id');
		$stmt -> execute(array("id" => $id));
		return $stmt -> fetch(PDO::FETCH_ASSOC);
	}
	
	function getFilteredCount($getVars = null) {
		$sql = $this -> wrapSqlWithFilter (
			'SELECT COUNT(*) sum 
		 	   FROM item'
 	    , $getVars);
		
		$stmt = $this -> db_conn -> prepare($sql);
		$stmt -> execute();
		$result = $stmt -> fetch(PDO::FETCH_ASSOC);
		
		return intval($result['sum']);
	}

	function getItems($getVars = null) {
		$sql = $this -> wrapSqlWithFilter (
			'SELECT * 
		 	   FROM item'
 	    , $getVars);
		
		$orderby = $this -> getOrderBy($getVars);
		if($orderby !== null) {
			$sql .= $orderby;
		} else {
			$sql .= ' ORDER BY shop, item';
		}
		
		$limit = $this -> getLimit($getVars);
		if($limit !== null) {
			$sql .= $limit;
		}
		
		$stmt = $this -> db_conn -> prepare($sql);
		$stmt -> execute();
		return $stmt -> fetchAll(PDO::FETCH_NUM);
	}
	
	function getByShop($query) {
		return $this->fetchAllColumns(
			'SELECT DISTINCT shop
			   FROM item
			  WHERE shop LIKE :param
		   ORDER BY shop'
		, array('param' => $query . '%'));
	}
	
	function getByItem($query) {
		return $this->fetchAllColumns(
			'SELECT DISTINCT item
			   FROM item
			  WHERE item LIKE :param
		   ORDER BY item'
		, array('param' => $query . '%'));
	}
	
	function autoGenerate($count) {
		$stmt = $this -> db_conn -> prepare(
			'INSERT INTO item (shop, item, count, price)
							  VALUES (:shop, :item, :count, :price)'
		);
		
		for ($i = 0; $i  < $count; ++$i) {
			$stmt -> execute(
				array(
					'shop' => $this->genRandShop(),
					'item' => $this->genRandItem(),
					'count' => rand(1, 15),
					'price' => rand(-9999, 9999)
				)
			);
		}
	}
	
	private function genRandShop() {
		$SHOPS = array('Lidl', 'K-CityMarket', 'Prisma');
		
		return $SHOPS[rand(0, count($SHOPS) - 1)];
	}
	
	private function genRandItem() {
		$ITEMS = array('Pizza', 'Täysmaito', 'Hedelmämysli', 'Snickers suklaapatukka',
					   'LeipäAitta', 'Purukumi', 'Nuudeli', 'Maito');
		
		return $ITEMS[rand(0, count($ITEMS) - 1)];
	}
	
	private function wrapSqlWithFilter ($sql, $getVars) {
		$where = $this -> getFilter($getVars);
		if($where !== null) {
			$sql .= $where;
		}
		
		return $sql;
	}
	
	private function fetchAllColumns ($sql, $param = null) {
		$stmt = $this -> db_conn -> prepare($sql);
		$stmt -> execute($param);
		return $stmt -> fetchAll(PDO::FETCH_COLUMN);
	}

	private function getLimit ($getVars) {
		$sLimit = null;
		if ( isset( $getVars['iDisplayStart'] ) && is_numeric($getVars['iDisplayStart']) &&
				    $getVars['iDisplayStart'] !== "" && $getVars['iDisplayLength'] != '-1' ) {
			$sLimit = " LIMIT " . $getVars['iDisplayStart'] .
					  ", " . $getVars['iDisplayLength'];
		}
		
		return $sLimit;
	}
	
	private function getOrderBy ($getVars) {
		$sOrder = null;
		if ( isset( $getVars['iSortCol_0'] ) ) {
			$sOrder = " ORDER BY ";
			for ( $i = 0 ; $i < intval( $getVars['iSortingCols'] ) ; $i++ ) {
				if ( $getVars[ 'bSortable_' . intval( $getVars['iSortCol_' . $i] ) ] == "true" ) {
					$sOrder .=   "`" . $this -> aColumns[ intval( $getVars['iSortCol_' . $i] ) ]
							   . "` " . $getVars['sSortDir_' . $i] . ", ";
				}
			}
			
			$sOrder = substr_replace( $sOrder, "", -2 );
			if ( $sOrder == " ORDER BY " ) {
				$sOrder = null;
			}
		}
		
		return $sOrder;
	}

	private function getFilter ($getVars) {
		$sWhere = null;
		
		/* Individual column filtering */
		for ( $i = 0 ; $i < count($this -> aColumns) ; $i++ ) {
			if ( !empty($getVars['sSearch_' . $i]) ) {

				if ( empty($sWhere) ) {
					$sWhere = " WHERE ";
				} else {
					$sWhere .= " AND ";
				}
				
				$sWhere .= "`" . $this -> aColumns[$i] . "` LIKE '%" .
				           $getVars['sSearch_' . $i] . "%' ";

			}
		}
		
		return $sWhere;
	}

}

?>