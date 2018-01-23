$(document).ready(function(){
    var mainMenu = $('.main-menu > li');
    var tab = $('.board h2');
    // mainMenu.hover(function(){
    //     $(this).find('.sub-menu').toggleClass('sub-menu-act');
    // });
    // mainMenu.focusin(function(){
    //     $(this).siblings().find('.sub-menu').removeClass('sub-menu-act');
    //     $(this).find('.sub-menu').addClass('sub-menu-act');
    // });
    // mainMenu.on('mouseenter focusin', function(){
    //     $(this).siblings().find('.sub-menu').removeClass('sub-menu-act');
    //     $(this).find('.sub-menu').addClass('sub-menu-act');
    // });
    mainMenu.on('mouseenter focusin', function(){
        $(this).siblings().removeClass('menu-act');
        $(this).addClass('menu-act');
    });
    tab.on('click focusin', function(){
        $(this).parent().addClass('board-act').siblings().removeClass('board-act');
    });

});