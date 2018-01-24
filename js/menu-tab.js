$(document).ready(function(){
    var mainMenu = $('.main-menu > li');
    var tab = $('.board h2');
    var list = $('.related-list');
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
    tab.on('click', function(){
        $(this).parent().addClass('board-act').siblings().removeClass('board-act');
    });
    list.on('mouseenter focusin', function(){
        $(this).addClass('related-act');
    });
    list.on('mouseenter focusin', function(){
        $(this).addClass('related-act');
    });
    list.on('mouseleave focusout', function(){
        $(this).removeClass('related-act');
    });
});