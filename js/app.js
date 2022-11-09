$(function() {
  $('.js-menuTrigger').on('click', function() {
    //ハンバーガーアイコンを×型にする処理
    $(this).toggleClass('active');
    //右からレスポンシブ用のメニューを出す処理
    $('.js-headerMenu').toggleClass('active');
  });
});