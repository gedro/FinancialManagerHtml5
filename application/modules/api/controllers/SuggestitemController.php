<?php
class Api_SuggestitemController extends REST_Controller {
	public function init() {
		$this->model = new Api_Model_Item ();
	}
	
	/*
	 * (non-PHPdoc) @see REST_Controller::indexAction()
	 */
	public function indexAction() {
		$ret [] = $this->_getParam ( 'q' );
		$ret [] = $this->model->getByItem ( $this->_getParam ( 'q' ) );
		$ret [] = array();
		$ret [] = array();
		
		$this->view->assign ( $ret );
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