$(document).ready(function(){
			$(".veen .rgstr-btn button").click(function(){
				console.log("working");
				$('.veen .wrapper').addClass('move');
				$('.body').css('background','#890505');
				$(".veen .login-btn button").removeClass('active');
				$(this).addClass('active');

			});
			$(".veen .login-btn button").click(function(){
				$('.veen .wrapper').removeClass('move');
				$('.body').css('background','#240185');
				$(".veen .rgstr-btn button").removeClass('active');
				$(this).addClass('active');
			});
		});
		