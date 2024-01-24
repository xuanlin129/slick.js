$('.slick_01').slick({
  // 自動播放
  autoplay: true,
  autoplaySpeed: 2500, // default: 3000
  // 箭頭按鈕
  arrows: true, // default: true
  dots: true,
  // 顯示數量
  slidesToShow: 1,
  // 輪播數量/次
  slidesToScroll: 1,
});

window.addEventListener('load', () => {
  document.getElementById('loading').style.opacity = 0
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none'
  },3000)
})
