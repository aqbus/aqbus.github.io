function adjustImageSize() {
  var container = document.getElementById('image-container');
  var img = document.getElementById('my-image');
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;
  
  // 假设我们要将图片的宽度调整到容器宽度，同时保持其宽高比
  img.width = containerWidth;
  
  // 重新计算图片高度以保持宽高比
  img.height = (containerWidth / img.naturalWidth) * img.naturalHeight;
  
  // 如果调整后的图片高度超过了容器高度，我们需要再次调整
  if (img.height > containerHeight) {
    img.height = containerHeight;
    img.width = (containerHeight / img.naturalHeight) * img.naturalWidth;
  }
}
 
// 调整页面加载完成后的图片大小
window.onload = function() {
  adjustImageSize();
};
 
// 如果容器大小发生变化，也要调整图片大小
window.addEventListener('resize', adjustImageSize);
