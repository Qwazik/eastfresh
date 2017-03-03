$(function() {


	/*-------------------------------------------------*/
	/*	start scripts
	/*-------------------------------------------------*/
	equalHeight('.box-inner__list', 'li');
	equalHeight('.page__delandpay .row', '.col-xs-4 .inner');

	/*-------------------------------------------------*/
	/*	resize
	/*-------------------------------------------------*/
	$(window).resize(function(){
		equalHeight('.box-inner__list', 'li');
		equalHeight('.row', '.col-xs-4 .inner');
		
	});

	/*-------------------------------------------------*/
	/*	scroll
	/*-------------------------------------------------*/
	var headerHeight = $('.page__header').outerHeight();
	$(window).scroll(function(){
		if($(window).scrollTop() > headerHeight){
			$('.page').css('padding-top', headerHeight + 'px');
			$('.page__header').addClass('fixed');
		}else{
			$('.page').css('padding-top', 0);
			$('.page__header').removeClass('fixed');
		}
	});

	/*-------------------------------------------------*/
	/*	boxes
	/*-------------------------------------------------*/
	(function(){
		var nav = $('.box-nav .box-nav__item').click(function(){
			var data = $(this).data('type');
			if(data != 'custom'){
				$('.box-nav .box-nav__item').removeClass('active');
				$(this).addClass('active');
				tabSelect(data);
			}
		})

		function tabSelect(data){
			data = '#'+data+'Box';

			$('.box-inner__content').each(function(){
				$(this).removeClass('active');
				if($(this).is(data)){
					$(this).addClass('active');
				}
				equalHeight('.box-inner__list', 'li');
			});

			return false;
		}

		function custonBox(){
			
		}
	}());
    /*-------------------------------------------------*/
    /*	plugins
    /*-------------------------------------------------*/
    $('.fancybox').fancybox({
    	padding: 0,
    });

    /*-------------------------------------------------*/
    /*  constructor
    /*-------------------------------------------------*/
    $('.input--col').each(function(){
    	var btns = $(this).find('.input--col__controls button');
    	var input = $(this).find('input');
    	$(btns).eq(0).click(function(){
    		increase();
    	});
    	$(btns).eq(1).click(function(){
    		decrease();
    	});
    	$(input).keydown(function(e){
    		if(isNaN(parseInt(e.key))){
    			return false;
    		}
    	});

    	function increase(){
    		$(input).val(+$(input).val() + 1);
    	}
    	function decrease(){
    		if($(input).val()>0){
    			$(input).val(+$(input).val() - 1);	
    		}
    	}
    });

    $('.constructor-category__name').click(function(){
    	var body = $(this).closest('.constructor-category').find('.constructor-category__body');
    	$(this).find('button').toggleClass('open');
    	$(body).slideToggle();
    });

    $('.fancybox-custom').fancybox({
    	padding: 0,
    	wrapCSS: 'fancybox-custom-popup',
    	closeBtn: false
    });
    // $('.fancybox-custom').click(function(){
    // 	$($(this).attr('href')).fadeIn();
    // 	constructorHeight();
    // 	return false;
    // });

    $('.close').click(function(){
    	$.fancybox.close();
    });

    // $(document).click(function(e){
    // 	if($('#customBoxPopup').is(':visible')){
    // 		if(!$(e.target).closest('.constructor').length){
    // 			$('#customBoxPopup').fadeOut();
    // 		}
    // 	}
    // });

});

function equalHeight(wrap, element){
    $(wrap).each(function(){
        var maxHeight = [],
            className = element;
        $(this).find(className).each(function(){
            $(this).height('auto');
        });
        $(this).find(className).each(function(){
            maxHeight.push($(this).height());
        });
        maxHeight = Math.max.apply(null, maxHeight);
        $(this).find(className).each(function(){
            $(this).height(maxHeight);
        });
    });
}