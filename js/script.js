
$(window).on('load', function(){
   

  $('.autoplay').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      arrows:false,
      autoplaySpeed: 2000,
      centerPadding: '3px',
      responsive: [
        {
          breakpoint:1280,
          settings:{
            slidesToShow:3,
          }
        },
        {
          breakpoint:640,
          settings:{
            slidesToShow:1,
          }
        },
      ]
  })
  $('.autoplay2').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: '<button type="button" class="slick-arrow prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-arrow next"><i class="fas fa-angle-right"></i></button>',
      arrows:true,
      appendArrows:".arrow",
      autoplaySpeed: 2000,
      centerPadding: '3px',
      responsive: [
        {
          breakpoint:1280,
          settings:{
            slidesToShow:3,
          }
        },
        {
          breakpoint:640,
          settings:{
            slidesToShow:1,
          }
        },
        
      ]
  })


//equalheight
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}


equalheight('.autoplay .slideItem, .autoplay2 .slideItem'); 


$(window).resize(function(){
  equalheight('.autoplay .slideItem, .autoplay2 .slideItem');
});

//languages
$('.languages a').click(function(e){
  $('.languages .active').removeClass('active')
  $(this).addClass('active')
})


//searchBlock
$('.searchButton').on('click', function(){
  let searchBlock = $('.searchBlock');
  let i = $('.searchButton i');
  if((searchBlock.css('display')!='block' && innerWidth<960) ? i.replaceWith('<i class="fas fa-times"></i>') : i.replaceWith('<i style="transform:rotate(90deg)" class="fas fa-search"></i>')) {
  
  $('.searchBlock').toggle();
}
})

$(".CloseSearch").on('click', function(){
  $('.searchBlock')[0].style.display='none'
});

//menuBlock
$('.menuButton').on('click', function(){
  $('.menuLinks').toggle();
})
$('header').mouseup(function (e) {
   if (!$('.menuLinks').is(e.target) && $(".menuLinks").has(e.target).length === 0){
     $(".menuLinks").hide();
  }
});
//close
$('.CloseMenu').on('click', function(){
  $('.menuLinks').toggle()
});

//registrationBlock
$('.registrationButton').on('click', function(){
  $('.signIn')[0].style.display= 'none';
  $('.registration').toggle();
})

$('header').mouseup(function (e) {
   if (!$(".registration").is(e.target) && $(".registration").has(e.target).length === 0){
     $(".registration").hide();
  }
});

//signInBlock
$('.signInButton').on('click', function(){
  $('.registration').toggle();
  $('.signIn').toggle();
})

$('header').mouseup(function (e) {
   if (!$('.signIn').is(e.target) && $('.signIn').has(e.target).length === 0){
     $('.signIn').hide();
  }
});

//phoneBlock
//open
$('.phone').on('click', function(){
  $('.phoneNumber')[0].style.display = 'flex';
})
//close
$('header').mouseup(function (e) {
   if (!$(".phoneNumber").is(e.target) 
   && $(".phoneNumber").has(e.target).length === 0)
   {
     $(".phoneNumber").hide();
  }
});

$('.tabs__tab__back').on('click', function(){
  $('.tabsBlock').hide()
  $('.tabs__tab__back').hide()
  $('.categories').show()
})

$(window).on('resize', function(){
      var win = $(this);
      if (win.width() <= 960 && $('.tabs__tab__back').css("display")=="none") {$('.categories').show(); $('.tabsBlock').hide(); $('.tabs__tab__back').hide() } 
        if (win.width() >= 960) { 
          $('.tabsBlock').show(); 
          $('.tabs__tab__back').hide();
          $('.categories').hide();
         }
});

$('.categories').on('click', function(){
  $('.tabsBlock').show()
  $('.tabs__tab__back').show()
  $('.categories').hide()
})

//cartMenu

$('.cartButton').on('click', function(){
  $('.cart').toggle()
  
})
//close
$('header').mouseup(function (e) {
   if (!$(".cart").is(e.target) 
   && $(".cart").has(e.target).length === 0)
   {
     $(".cart").hide();
  }
}); 

})

// scrollDown
$(".scroll").click(function(){
  if(innerWidth<960){
      $('html, body').animate({
      
      scrollTop: $('#carousel_first').position().top-100+'px'
            }, 800)
    } else {
    $('html, body').animate({
      scrollTop: $('#carousel_first').position().top-130+'px'
            }, 800)
    
    }             
});

//--tabs--
var slideIndex=1;
showSlide(slideIndex);

function plus(n){
  showSlide(slideIndex += n);
}

function current(n){
  showSlide(slideIndex = n);
}
function showSlide(n){
  var i;
  var slides=document.getElementsByClassName("slide");

  if(n>slides.length){
    slideIndex = 1
  }

  if(n<1){
    slideIndex=slides.length
  }

  for(i=0; i<slides.length; i++){
    slides[i].style.display="none";
  }

  slides[slideIndex-1].style.display="block";

}


let $result = $('.result')
let sum = 0;

Plus = () =>{
	let $prices = $('.current')
		$prices.each(function() {
			sum += parseInt($(this).data('val'));   
		});
    Result()
  console.log(parseInt($prices.text()), sum)   
}


Minus = () =>{
  let $prices = $('.current[data-val]')
  if(sum>=27 && parseInt($prices.text())>=0){
    $prices.each(function() {
      sum -= parseInt($(this).data('val'));
    });
  }
  Result()
  console.log(parseInt($prices.text()) + "minus" ) 
}

Result = () =>{
    $result.text(sum);
    console.log(sum+" ---result") 
}

$('.plus').click(function(){
	let $input=$(this).parent().find('input')
	let count = parseInt($input.val())+1
		count = count<1 ? 0 : count
		$input.val(count).change()
		$('.priceCart').removeClass('current')
		$(this).parent().parent().find('.priceCart').addClass('current')
		let priceAttr = $('.current').html(count*27 + " грн").attr('data-val', count*27)
    let priceAttrNumber = parseInt(priceAttr.html())
    Plus()
    console.log(priceAttrNumber+" +AttrNumber") 		
})

$('.minus').click(function(){
	let $input=$(this).parent().find('input')
	let count = parseInt($input.val())-1
		  count = count<1 ? 0 : count
		  $input.val(count).change()

		  $('.priceCart').removeClass('current')
		  $(this).parent().parent().find('.priceCart').addClass('current')
	let priceAttr =	$('.current').html(count*27 + " грн").attr('data-val', count*27)
  let priceAttrNumber = parseInt(priceAttr.html())
    if(priceAttrNumber>=0 && count>=0){
      Minus()
      console.log(priceAttrNumber+" -AttrNumber") 
    }else{
      console.log(priceAttrNumber+" -AttrNumber") 
    }
    
   
})


			