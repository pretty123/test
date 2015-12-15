<?php
namespace frontend\controllers;
use yii\web\Controller;
class PlugController extends Controller{
	public function actionEditor(){
		return $this->render("index");
	}
}