$(function(){
	$("#product").on("touchstart",".person",function(){
		var dataID = $(this).attr("dataID");
		//console.log(dataID);
		window.location = "html/detail.html?dataID=" + dataID
	})
})

//轮播图
$.ajax({
	type:"get",
	url:"data.json",
	dataType:"json",
	async:true,
	success:function(data){
		//console.log(data);
		//加载购物车
		var swiperWra = $("#swiper-wrapper");
		//console.log(swiperWra);
		var html = template("MB",data);
		swiperWra.append(html);
		setTimeout(function(){
			loadSwiper()
		},500);
		
		//加载图片
		//console.log(data.projects);
		var product = $("#product");
		$.each(data.projects,function(){
			//console.log(this);
			var html = template("itemMB",this);
			product.append(html);
		})
	}
});
function loadSwiper(){
	var swiper = new Swiper("#swiper-container",{
		autoplay:2500,
		loop:true,
		autoplayDisableOnInteraction:false,
		pagination:".swiper-pagination",
		paginationClickable:true
	})
}

