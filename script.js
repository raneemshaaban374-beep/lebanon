var btn = document.getElementById("playBtn");

if (btn) {
  playBtn.addEventListener("click", function () {
    document.getElementById("videoBox").innerHTML =
      '<iframe src="https://www.youtube.com/embed/Df6OrUAhQj4?autoplay=1" ' +
      'title="Video about Lebanon" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    this.style.display = "none";
  });
}
// once the button id clicked the video will load

window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(function () {
      preloader.style.display = "none";
    }, 500);
  }
});
// the preoader was showing and stikcing to the page so i asked google how i can resolve it so now the pre loader will load for 5s 
