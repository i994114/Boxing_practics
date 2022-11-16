$(function() {

  //フロートヘッダーメニュー
  var targetHeight = $('.js-float-menu-target').height();
  $(window).on('scroll', function() {
    $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
  });
  
  //ハンバーガーメニュー
  var $btn = $('.js-menuTrigger');
  $btn.on('click', function() {
    //ハンバーガーアイコンを×型にする処理
    $(this).toggleClass('active');
    //右からレスポンシブ用のメニューを出す処理
    $('.js-headerMenu').toggleClass('active');
  });

  //レスポンス時、SPメニュークリックでメニューを閉じる
  var $btnMenu = $('.js-menu--link');
  $btnMenu.on('click', function() {
    $('.js-headerMenu').toggleClass('active');
    $('.js-menuTrigger').toggleClass('active');
  });
});