$(function () {
  showimg();
  /*导航下拉*/
  $("#nav").slide({
    type: "menu", // 效果类型，针对菜单/导航而引入的参数（默认slide）
    titCell: ".nLi", //鼠标触发对象
    targetCell: ".sub", //titCell里面包含的要显示/消失的对象
    effect: "slideDown", //targetCell下拉效果
    delayTime: 500, //效果时间
    triggerTime: 50, //鼠标延迟触发时间（默认150）
    returnDefault: true, //鼠标移走后返回默认状态，例如默认频道是“预告片”，鼠标移走后会返回“预告片”（默认false）
  });
  /*推荐新闻切换*/
  $(".index .newsBox .hot").slide({
    titCell: ".hot_nav",
    mainCell: ".hot_slide",
    autoPage: "<li></li>",
    effect: "fold",
    delayTime: 500,
  });
  /*新闻新闻切换*/
  $(".index .inews .box").slide({
    effect: "fold",
    delayTime: 500,
  });
  /*左侧分类*/
  $(".lefta .comt li i").click(function () {
    $(this).parent().find(".boxlist").slideToggle();
    $(this).parent().toggleClass("hover");
  });
  /*返回顶部*/
  $("#top").click(function () {
    $("body, html").stop().animate({
      scrollTop: 0,
    });
  });
  /*二维码弹窗*/
  $(".ewmbtn").click(function () {
    $("body .ewmbox").show();
    layout(1);
  });
  $(".ewmbox .close").click(function () {
    $(".ewmbox").hide();
    layout(0);
  });
});
/*详情页组图*/
function showimg() {
  if (!$("#showimg").length) {
    return false;
  }
  $("#showimg").banqh({
    box: "#showimg", //总框架
    pic: "#bigimg", //大图框架
    pnum: "#smallimg", //小图框架
    prev_btn: ".prev", //小图左箭头
    next_btn: ".next", //小图右箭头
    autoplay: true, //是否自动播放
    interTime: 5000, //图片自动切换间隔
    delayTime: 400, //切换一张图片时间
    order: 0, //当前显示的图片（从0开始）
    picdire: true, //大图滚动方向（true为水平方向滚动）
    mindire: true, //小图滚动方向（true为水平方向滚动）
    min_picnum: 3, //小图显示数量
    pop_up: false, //大图是否有弹出框
  });
}

function layout(u) {
  var $obj = $('<div class="dialog-layout"></div>');
  if (u == 0) {
    $(".dialog-layout").remove();
  } else {
    if (!$(".dialog-layout").length) {
      $obj.appendTo("body").show();
    }
  }
}
