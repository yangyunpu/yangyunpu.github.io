$(function(){
	var $wrap = $(".wrap");
	$wrap.on("touchstart",function(){
		console.log(0)
		$wrap.removeClass("bottom-border");
		$(this).addClass("bottom-border");
	})
	
	loadOrder();
	
	var $con = $(".order-container");
	$con.on("touchstart",".cancel-btn",function(){
		cancelOrder(this)
	})
})


function loadOrder(){
	if(localStorage.myorder){
		var myorder = JSON.parse(localStorage.myorder);
		//console.log(myorder);
		$.ajax({
			type:"get",
			url:"../data.json",
			async:true,
			success:function(data){
				//console.log(data);
				for(i in myorder){
					var id = myorder[i];
					$.each(data.projects,function(){
						if(id == this.id){
							var html = template("MB",this);
							$(".order-container").append(html)
						}
					})
				}
			}
		});
	};
}


function cancelOrder(that){
	var dataID = $(that).attr("dataID");
	console.log(dataID);
	var myorder = JSON.parse(localStorage.myorder);
	delete myorder[dataID];
	localStorage.setItem("myorder",JSON.stringify(myorder));
	$(that).parent().remove();
}
