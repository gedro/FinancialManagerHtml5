<?php
class Api_AutocompleteController extends REST_Controller {
	public function init() {
		$this->model = new Api_Model_Item ();
	}
	
	/*
	 * (non-PHPdoc) @see REST_Controller::indexAction()
	 */
	public function indexAction() {
		$allRecords = array ();
		
		switch ($this->_getParam ( 'search_id', 'nothing' )) {
			case 'search_shop' :
				$allRecords = $this->model->getByShop ( $this->_getParam ( 'query' ) );
				break;
			
			case 'search_item' :
				$allRecords = $this->model->getByItem ( $this->_getParam ( 'query' ) );
				break;
		}
		
		$this->view->options = $allRecords;
		$this->_response->ok ();
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