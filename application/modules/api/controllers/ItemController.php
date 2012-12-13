<?php
class Api_ItemController extends REST_Controller {
	public function init() {
		$this->model = new Api_Model_Item ();
	}
	
	/*
	 * (non-PHPdoc) @see REST_Controller::indexAction()
	 */
	public function indexAction() {
		$this->view->iTotalRecords = $this->model->getCount ();
		$this->view->iTotalDisplayRecords = $this->model->getFilteredCount ( $this->_getAllParams () );
		$this->view->aaData = $this->model->getItems ( $this->_getAllParams () );
		
		if ($this->_hasParam ( 'sEcho' )) {
			$this->view->sEcho = intval ( $this->_getParam ( 'sEcho' ) );
		}
		
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