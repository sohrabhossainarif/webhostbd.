$(window).scroll(function(){
    var scrolling =$(this).scrollTop();
      if(scrolling > 30){
        $(".backtop i").fadeIn(500)
      }else{
        $(".backtop i").fadeOut(500)
      }
     
      if(scrolling >30){
        $(".menu_bar").addClass("bg")
      }else{
        $(".menu_bar").removeClass("bg")(1000)
      }
    
  })

$(".backtop i").click(function(){
    $("html, body").animate({
      scrollTop:0
    },1000)
  })
// ====== tab
$('.tabs-1').jQueryTab({
    initialTab:2,
    tabInTransition: 'fadeIn',
    tabOutTransition: 'scaleUpOut',
    cookieName: 'active-tab-1',
    tabPosition : 'bottom'
});
$('.tabs-2').jQueryTab({
    initialTab: 3,
    openOnhover: true,
    tabInTransition: 'flipIn',
    tabOutTransition: 'flipOut',
    cookieName: 'active-tab-2'
    
});
$('.tabs-3').jQueryTab({
    responsive:false,
    useCookie: false,
    initialTab: 1,
    tabInTransition: 'rotateIn',
    tabOutTransition: 'rotateOut',
    before: function(){ console.log('Hello from before!'); },		
    after: function(){ console.log('Hello from after!') }	
    
});
$('.tabs-4').jQueryTab({
    openOnhover: true,
    collapsible:false,
    initialTab: 4,
    tabInTransition: 'slideUpIn',
    tabOutTransition: 'slideUpOut',
    cookieName: 'active-tab-4'
    
});
$('.tabs-5').jQueryTab({
    initialTab: 3,
    tabInTransition: 'slideRightIn',
	tabOutTransition: 'slideRightOut',
    cookieName: 'active-tab-5'
    
});
$('.tabs-6').jQueryTab({
    initialTab: 4,
    tabInTransition: 'scaleDownIn',
    tabOutTransition: 'scaleDownOut',
    cookieName: 'active-tab-6'
    
});
$('.tabs-7').jQueryTab({
    initialTab: 2,
    tabInTransition: 'fadeIn',
    tabOutTransition: 'fadeOut',
    cookieName: 'active-tab-7'
    
});
// ---- ----tab end

$(".leave_button").click(function(){
  $(".leave_content").toggleClass("leave_cont")
})