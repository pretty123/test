(function($){
	var container=$(".container-a");
	var box=$(".box");
	var buddy=$(".buddy");
	var pop=$(".pop-a");
	var open=$(".btn-a");
	var close=$(".close");
	var imgs=pop.find('img');
	
	//入场动画
	$.Velocity.RegisterUI('lixin.slideUpIn',{
		defaultDuration:500,
		calls:[
		       [{opacity:[1,0],translateY:[0,100]}]
		       ]
	});
	//出场动画
	$.Velocity.RegisterUI('lixin.slideDownOut',{
		defaultDuration:300,
		calls:[
		       [{opacity:[0,1],translateY:[100,0]}]
		       ]
	});
	//背面卡片弹出式动画
	$.Velocity.RegisterUI('lixin.scaleIn',{
		defaultDuration:300,
		calls:[
		       [{opacity:[1,0],scale:[1,0.3]}]
		       ]
	});
	//关闭按钮
	$.Velocity.RegisterUI('lixin.scaleOut',{
		defaultDuration:300,
		calls:[
		       [{opacity:[0,1],scale:[0.3,1]}]
		       ]
	});
	var seqInit=[{
   	 elements:container,
   	 properties:'lixin.slideUpIn',
   	 options:{delay:300}
	},{
	   	 elements:box,
	   	 properties:'lixin.slideUpIn',
	   	 options:{
	   		 sequenceQueue:false
	   	 }
		},{
		   	 elements:buddy,
		   	 properties:'lixin.slideUpIn',
		   	 options:{
		   		sequenceQueue:false,
		   		 delay:60}
			}];
	
	var seqClick=[{
	   	 elements:container,
	   	 properties:'lixin.slideDownOut'
	   	
		},{
		   	 elements:box,
		   	 properties:'lixin.slideDownOut',
		   	 options:{
		   		 sequenceQueue:false
		   	 }
			},{
			   	 elements:container,
			   	 properties:'lixin.slideUpIn',			   	
				},{
				   	 elements:pop,
				   	 properties:'lixin.slideUpIn',
				   	 options:{
				   		 sequenceQueue:false
				   	 }
					},{
					   	 elements:imgs,
					   	 properties:'lixin.scaleIn',			   	
						}];
	
	var seqClose=[{
	   	 elements:imgs,
	   	 properties:'lixin.scaleOut'
	   },{
			   	 elements:container,
			   	 properties:'lixin.slideDownOut',			   	
				},{
				   	 elements:pop,
				   	 properties:'lixin.slideDownOut',
				   	 options:{
				   		 sequenceQueue:false
				   	 }
					},{
					   	 elements:container,
					   	 properties:'lixin.slideUpIn',			   	
						},{
						   	 elements:box,
						   	 properties:'lixin.slideUpIn',			   	
						   	 options:{
						   		 sequenceQueue:false
						   	 }}];
	
	$.Velocity.RunSequence(seqInit);
	 open.on('click',function(){
		 $.Velocity.RunSequence(seqClick);
	 });
	
	 close.on('click',function(){
		 $.Velocity.RunSequence(seqClose);
	 });
	
	//http://julian.com/research/velocity/
	
//	$("#div1").velocity(
//			{width:'300px'},
//			{duration:1000,complete:function(){
//				$("#div2").velocity({width:'300px'},
//						{duration:1000,complete:function(){
//							$("#div3").velocity({width:'300px'},{
//								duration:1000
//							});
//						}});
//			}}
//			);	
	
//var seq=[
//         {
//        	 elements:$("#div1"),
//        	 properties:{width:'300px'},
//        	 options:{duration:1000}
//         },
//         {
//        	 elements:$("#div2"),
//        	 properties:{width:'300px'},
//        	 options:{duration:1000}
//         },
//         {
//        	 elements:$("#div3"),
//        	 properties:{width:'300px'},
//        	 options:{duration:1000}
//         }
//         ];	
//$.Velocity.RunSequence(seq);
	
//	$("#div1").on('mouseover',function(){
//		$(this).velocity('callout.shake');//预定义动画
//	});
	
	//自定义动画
//	$.Velocity.RegisterEffect('fy.pulse',{//RegisterUI
//		defaultDuration:300,
//		calls:[
//		       [{scaleX:1.1},0.5],
//		       [{scaleX:1.0},0.5]
//		       ]
//	});
//	$("#div2").on('mouseover',function(){
//		$(this).velocity('fy.pulse');//预定义动画
//	});
	
})(jQuery);