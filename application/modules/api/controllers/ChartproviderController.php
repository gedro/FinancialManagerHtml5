<?php

class Api_ChartproviderController extends REST_Controller {
	public function init() {
		$this->model = new Api_Model_Item ();
	}
	
	public function indexAction() {
		$this->view->incomes = $this->genarateDummy();
		$this->view->costs = $this->genarateDummy();
		$this->_response->ok ();
	}
	
	public function genarateDummy() {
		$ret = array();
		$max = rand(6, 10);
		for($i = 3; $i < $max; $i++) {
			$ret[] = rand(1, 99) / 100;
		}
	
		return $ret;
	}
	
	/*
	 * (non-PHPdoc) @see REST_Controller::getAction()
	 */
	public function getAction() {
		// TODO Auto-generated method stub
	}
	
	/*
	 * (non-PHPdoc) @see REST_Controller::postAction()
	 */
	public function postAction() {
		// TODO Auto-generated method stub
	}
	
	/*
	 * (non-PHPdoc) @see REST_Controller::putAction()
	 */
	public function putAction() {
		// TODO Auto-generated method stub
	}
	
	/*
	 * (non-PHPdoc) @see REST_Controller::deleteAction()
	 */
	public function deleteAction() {
		// TODO Auto-generated method stub
	}
	
}
?>