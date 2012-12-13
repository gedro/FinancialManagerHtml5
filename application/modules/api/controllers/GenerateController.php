<?php
class Api_GenerateController extends REST_Controller {
	public function init() {
		$this->model = new Api_Model_Item ();
	}
	
	/*
	 * (non-PHPdoc) @see REST_Controller::indexAction()
	 */
	public function indexAction() {
		$this->model->autoGenerate ( $this->_getParam ( 'count', 100 ) );
		
		$this->_response->ok ();
		$this->_redirect ( '/' );
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