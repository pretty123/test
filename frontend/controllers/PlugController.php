<?php
namespace frontend\controllers;
use yii\web\Controller;
class PlugController extends Controller{
	public function actionEditor(){
		return $this->render("index");
	}
	public function actionChristmas(){
		//return $this->render("christmas");
		return $this->render("audio");
	}
}