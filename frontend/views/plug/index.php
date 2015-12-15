<?php 
use yii\helpers\Html;
use frontend\assets\AppAsset;  
use frontend\widgets\Alert; 
AppAsset::register($this);
?>
    <!-- 加载编辑器的容器 -->
    <script id="container" name="content" type="text/plain">
        这里写你的初始化内容
    </script>
    <!-- 配置文件 -->
    <script type="text/javascript" src="/js/editor/ueditor.config.js"></script>
    <!-- 编辑器源码文件 -->
    <script type="text/javascript" src="/js/editor/ueditor.all.js"></script>
    <!-- 实例化编辑器 -->
    <script type="text/javascript">
  
        var ue = UE.getEditor('container', {
            autoHeight: false});
        ue.ready(function() {
            //设置编辑器的内容
            ue.setContent('hello');
            //获取html内容，返回: <p>hello</p>
            var html = ue.getContent();
            //获取纯文本内容，返回: hello
           // var txt = ue.getContentTxt();
            
        });       
    </script>
    <button class="btn btn-primary" id="save">保存</button>
 <script>
<?php AppAsset::addScript($this,'js/run.js');?>   
//只在该视图中使用非全局的jui    
</script>


