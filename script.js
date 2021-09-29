function mudaTema() {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")){
    (document.getElementById("tema")).innerHTML = "LIGHT<br>MODE";
  } else {
    (document.getElementById("tema")).innerHTML = "DARK<br>MODE";
  }
}

//https://64.media.tumblr.com/9bbca134b9b71c8b7e73c4dcb5f48684/ac162f4241d907cf-41/s2048x3072/70932332f440ad0c18ff299178ab1e0c5d4f4c7f.png
//https://64.media.tumblr.com/7c912244fd6e78a5656fd2d7c9ac8652/ac162f4241d907cf-34/s2048x3072/9f26aa7c347bf33991b9bb2209792b82f708196d.png