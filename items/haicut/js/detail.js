$(function(){
	loadSwiper();
	loadDetail();
	
	$("#yuyue").on('touchstart',function(){
		var id = getID("dataID");
		var myorder;
		if(localStorage.myorder){
			myorder = JSON.parse(localStorage.myorder);
		}else{
			myorder = {};
		}
		myorder[id] = id;
		localStorage.setItem('myorder',JSON.stringify(myorder));
		console.log(myorder)
	})
	
})

function loadSwiper(){
	var swiper = new　Swiper(".swiper-container",{
		autoplay:2500,
		loop:true,
		autoplayDisableOnInteraction:false,
		pagination:'.swiper-pagination'
	})
}

function loadDetail(){
	var id = getID("dataID");
	$.ajax({
		type:"get",
		url:"../data.json",
		async:true,
		success:function(data){
			$.each(data.projects,function(){
				//console.log(this)
				if(this.id == id){
					$("#teacherName").text(this.nickname);
					$(".first-slide img").attr("src","../" + this.img)
					//console.log($(".first-slide img"))
				}
			})
		}
	});
}

function getID(id){
	var reg = new RegExp("(^|&)"+id+"=([^&]*)(&|$)")
	//console.log(reg)
    var r = window.location.search.substr(1).match(reg);
    return r[2];
}

