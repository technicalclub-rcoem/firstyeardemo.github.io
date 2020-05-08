Stage(function (stage) {
	var number=1;
	stage.viewbox(50,50).pin({'handle':-0.5});

	var sign =Stage.image('x').appendTo(stage).pin('handle',0.5);

	sign.on('click',function(){

		this.tween().ease('out').pin('rotation',++number*Math.PI/2);
		// Issue related to speed of rotation

	});
});
// issue 1 solved
Stage({

	textures : {
		'x': Stage.canvas(function(ctx){
			ratio=10;
			this.size(10,10,ratio);
			ctx.scale(ratio,ratio);

			ctx.moveTo(0,0);
			ctx.lineTo(10,10);
			ctx.moveTo(10,0);
			ctx.lineTo(0,10);

			ctx.strokeWidth=1;
			ctx.stroke();
		})
	}
});