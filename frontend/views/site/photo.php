<?php 
use frontend\assets\AppAsset;
?>
<div class="container-a">
   <div class="box">
     <img src="imgs/back.jpg">
     <img class="buddy" src="imgs/head.jpg">
     <div class="inner">
        <h3>慕课网</h3>
        <span>慕课网，只学有用的</span>
        <div class="btn-a">查看课程</div>
     </div>
   </div>
   <div class="pop-a">
      <div class="close">&times;</div>
      <h3>慕课网</h3>
      <span>慕课网，只学有用的</span>
       <img src="imgs/pic1.jpg">
       <img src="imgs/pic2.jpg">
       <img src="imgs/pic3.jpg">
       <img src="imgs/pic4.jpg">
   </div>   
</div>
 <script>
<?php 
AppAsset::addScript($this,'js/velocity.min.js');
AppAsset::addScript($this,'js/velocity.ui.min.js');
AppAsset::addScript($this,'js/photo.js');
?>   
// public $js = [
//               'js/velocity.min.js',
//               'js/velocity.ui.min.js',
//               'js/photo.js',
//               ];
//只在该视图中使用非全局的jui    
</script>
<script type="text/javascript">
(function(){
var p = {
url:location.href, /*获取URL，可加上来自分享到QQ标识，方便统计*/
desc:'pretty', /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
title:'pretty', /*分享标题(可选)*/
summary:'pretty', /*分享摘要(可选)*/
pics:'', /*分享图片(可选)*/
flash: '', /*视频地址(可选)*/
site:'', /*分享来源(可选) 如：QQ分享*/
style:'201',
width:32,
height:32
};
var s = [];
for(var i in p){
s.push(i + '=' + encodeURIComponent(p[i]||''));
}
document.write(['<a class="qcShareQQDiv" href="http://connect.qq.com/widget/shareqq/index.html?',s.join('&'),'" target="_blank">分享到QQ</a>'].join(''));
})();
</script>
<script src="http://connect.qq.com/widget/loader/loader.js" widget="shareqq" charset="utf-8"></script>
