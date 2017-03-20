$document.ready(function () {
	$("p.thumb").mouseenter(function(){
        var a = $("img[alt='anh_thumb1']");
        a.animate({height: '300px', opacity: '0.4'}, "slow");
        a.animate({width: '300px', opacity: '0.8'}, "slow");
        a.animate({height: '100px', opacity: '0.4'}, "slow");
        a.animate({width: '100px', opacity: '0.8'}, "slow");
	});
});