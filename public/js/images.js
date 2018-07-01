
var thumbs = document.getElementById('images');

/* предзагрузка */
var imgs = thumbs.getElementsByTagName('img');
for (var i = 0; i < imgs.length; i++) {
  var url = imgs[i].parentNode.href;
  var img = document.createElement('img');
  img.src = url;
}