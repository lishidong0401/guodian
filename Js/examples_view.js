$(function(){
	var examples_feedback={
		config:{
			xin:"",	//评星
			problem:"",	//遇到的问题
			other:"",	//其他建议
			niming:false	//是否匿名
		},
		Inte:function(){
			//评星
			$(".examples_view_feedli").click(function(){
				var i=$(this).index();
				examples_feedback.config.xin=$(this).index()+1;
				$(this).addClass("on");
				$(this).siblings().each(function(){
					var nub=$(this).index();
					if(nub>i){
						$(this).removeClass("on");
					}else{
						$(this).addClass("on");
					}
				})
			});
			//选择问题
			$(".examples_view_checkbox label").click(function(){
				if($(this).find("input").is(":checked")){
					$(this).addClass("on")
				}else{
					$(this).removeClass("on");
				}
			});
			//是否匿名
			$("#niming_send label").click(function(){
				if($(this).find("input").is(":checked")){
					$(this).addClass("on");
				}else{
					$(this).removeClass("on");
				}
			});
			//提交
			$("#feedback_send_btn").click(function(){
				examples_feedback.visienty();
				examples_feedback.assignment();
			})
		},
		//赋值
		assignment:function(){
			examples_feedback.config.problem="";
			$(".examples_view_checkbox label").each(function(){
				if($(this).find("input").is(":checked")){
					var t=$(this).find("input").val()
					examples_feedback.config.problem += t + ",";
				}
			});
			examples_feedback.config.problem=examples_feedback.config.problem.substring(0,examples_feedback.config.problem.length-1)
			examples_feedback.config.other=$("#other_problem").val();
			if($("#niming_send .on").length>0){
				examples_feedback.config.niming=true;
			}else{
				examples_feedback.config.niming=false;
			};
			console.log(examples_feedback.config.xin,examples_feedback.config.problem,examples_feedback.config.other,examples_feedback.config.niming);
		},
		//验证是不为空
		visienty:function(){
			if($(".examples_view_feedxin .on").length == 0){
				alert("请选择内容是否对您有帮助");
				return false;
			};

			if($(".examples_view_checkbox .on").length == 0){
				alert("请选择在文档使用中遇到的问题");
				return false;
			}
		}
	}
	if($("#examples_view_feedback").length>0){
		examples_feedback.Inte();
	}
});