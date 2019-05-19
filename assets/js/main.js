document.addEventListener("touchstart", function() {},false);
(function ($) {
	"use strict";
	var windw = $(window);

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

	
        /*=====================
			Waypoint star
        ==========================*/
		$(".progressbar").waypoint(function(){
			$(".tab-pane .progressbar .circle.c1").attr("data-percent","40.1");
			$(".tab-pane .progressbar .circle.c2").attr("data-percent","60.3");
			$(".tab-pane .progressbar .circle.c3").attr("data-percent","90");
			$(".tab-pane .progressbar .circle.c4").attr("data-percent","50.5");
		},{
			offset:'5%'
		});
        /*=====================
			Waypoint End
        ==========================*/



/*
|--------------------------------------------------------------------------
	Circle Progress Bar Start
|--------------------------------------------------------------------------
// */
	// windw.on('load', function() {
		function animateElements() {
			$('.progressbar').each(function () {
				var elementPos = $(this).offset().top;
				var topOfWindow = windw.scrollTop();
				var percent = $(this).find('.circle').attr('data-percent');
				var barColor = $(this).find('.circle').attr('data-color');
				var percentage = parseInt(percent, 10) / parseInt(100, 10);
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + windw.height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle').circleProgress({
						startAngle: -Math.PI / 2,
						value: percent / 100,
						size: 120,
						thickness: 14,
						fill: {
							color: barColor
						},
						animation: {
							duration: 3000,
							easing: 'circleProgressEasing'
						}
					}).on('circle-animation-progress', function (event, progress, stepValue) {
						$(this).find('div').text((stepValue*100).toFixed(1) + "%");
					}).stop();
				}
			});
		}
		// Show animated elements
		animateElements();
		windw.scroll(animateElements);
	// });
        



/*
|--------------------------------------------------------------------------
	Circle Progress Bar End
|--------------------------------------------------------------------------
// */


		// ================================
		//  top up button start
		//================================
			var btn=$('.up'); //save button in btn variable

		// // button a click korle
			btn.on('click',function(){ // function(e)
				$('html,body').animate({
					scrollTop:0 // top 0 te jabe
				},500); //500 ms dhore acroll(animate ) hoye top a jabe
			
				// e.preventDefault();
			});

		// 	btn.on('click',function(){
		// 		$('html','body').animate();
		// 	});

		// ...
			$(window).on('scroll',function(){ // when window scroll hobe
				// console.log('scrolled..');
				var a=$(this), //ai windo bujate this ar this mane akhon a
				height=a.height(),
				top=a.scrollTop();
					
				if(top>height){
					if(!btn.is(':visible')){
						btn.show();
					}
				}else{
					btn.hide();
				}

			});

// ================================
//  top up button start End
//================================


        // happy clints slider active
 		$(".slider-happyclints-wrap").owlCarousel({
        	items:1,
        	autoplay:true,
        	loop:true,
        	margin:30,
        	nav:false,
        	dots:true
        
        });

        /*
		/----------------------------------
			mixitup and magnific Popup Start
		/-------------------------------------
        */
		var mixer = mixitup('.mixitup'); // fro mixitup

		$('.a-images').magnificPopup({// Pop up images show
			type:'image',
			gallery:{
				enabled:true
			}

		});
        /*
		/----------------------------------
			mixitup and magnific Popup End
		/-------------------------------------
        */


        /*
		/----------------------------------
			background moveable
		/-------------------------------------
        */

			$('.video-wrap').backgroundMove({
			  movementStrength:'100'
			});

        /*
		/----------------------------------
			background moveable end
		/-------------------------------------
        */



	    /*==========================
	        Intro typer
	    ============================*/
	    var element = $(".type-here");

	        $(function() {
	            element.typed({
	                strings: ["Front End Developer", "React-JS","JavaScript / jQuery", "HTML / CSS / Bootstrap","Git / GitHub / Sass / Gulp"],
	                typeSpeed: 100,
	                loop: true,
	            });
	        });

	        
	    /*==========================
	        Intro typer End
	    ============================*/


	    /*============================
			add active class in navbar
	    ===========================*/
	    	$("ul.navbar-nav li").click(function(){
	    		// all class remove
	    		$("ul.navbar-nav li").removeClass('active');

	    		$(this).addClass('active');// add class only this
	    	});

	    /*======================================
			add active class in navbar End
	    ==========================================*/

        /*
        ========================================
          scroll navabbar animate 
        ========================================
         */
         $(document).on('scroll',function(){
         	if($(this).scrollTop() > 100){
         		$('.header-area').addClass('navFixedBg');
         	}else{
         		$('.header-area').removeClass('navFixedBg');
         	}
         });


        /*=========================================
          scroll navabbar animate  End
        ========================================
         */






/*============================================================
	Counter Up start
================================================================*/

$('.counter-up span').counterUp({
	delay: 100,
    time: 2000
});


/*============================================================
	Counter Up End
================================================================*/





/*============================================================
	Canvas Start
================================================================*/

	var canvas = document.querySelector('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var ctx = canvas.getContext('2d');

	// mouse move
	var mouse = {
		x:undefined,
		y:undefined
	}

	// color
	var colors = [
		'#00585E',
		'#009494',
		'#F5F2DC',
		'#454445',
		'#FF5729'
	]
	var maxRadius = 50;
	var minRadius = 5;
	window.addEventListener('mousemove',function(event){
		mouse.x = event.x;
		mouse.y = event.y;
		// this.console.log(mouseMove);
	});

	// broser resize
	window.addEventListener('resize',function(){
		// cnavas resize autometicaly
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		// faka jaiga cover
		init();
	});

	function Circle(x,y,radius,speedX,speedY){
		
		this.radius = radius;
		this.x = x;
		this.y = y;
		this.speedX = speedX;
		this.speedY = speedY;
		this.minRadius = radius;
		this.color = colors[Math.floor(Math.random() * colors.length)];
		this.draw = function(){
			ctx.beginPath();
			// ctx.strokeStyle = 'red';
			ctx.fillStyle = this.color;
			ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2);
			// ctx.stroke();    
			ctx.fill();
		}

		this.update = function(){
			
			if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
				this.speedX = - this.speedX;
			}
			if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
				this.speedY = - this.speedY;
			}
			
			this.x += this.speedX;
			this.y += this.speedY;
			
			//intrectivity
			if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && 
				mouse.y - this.y < 50 && mouse.y -  this.y > -50){
					if(this.radius < maxRadius){
						this.radius += 1;
					}
				}else if(this.radius > this.minRadius){
					this.radius -= 1;
				}


			this.draw();
		}
	}

	// create multi cicle
	var circleArray = [];

	function init(){    
		circleArray = [];// array empty kore deya (ta chara potekbar toiri hotei thakbe)
		for(var i = 0; i < 800; i++){
			var radius = Math.random() * 4 + 1;
			var x = Math.random() * (innerWidth - radius * 2) +  radius;
			var y = Math.random() * (innerHeight - radius * 2) + radius;
			var speedX = Math.random() - 0.5;
			var speedY = Math.random() - 0.5;

			circleArray.push(new Circle(x,y,radius,speedX,speedY));
		}
	}

	function animation(){
		requestAnimationFrame(animation);
		ctx.clearRect(0,0,innerWidth,innerHeight);
		
		// multi circle
		for(var i = 0; i < circleArray.length; i++){
			circleArray[i].update();
		}
	}

	init();
	animation();


/*============================================================
	Canvas End
================================================================*/






    });






    jQuery(window).load(function(){
    	
		$('.preloader').fadeOut('slow',function(){
			$(this).remove();
		});
        
    });


}(jQuery));	