const button = document.querySelector(".btn"),
   image = document.querySelector('#image'),
   selector = document.querySelector('#card-size');

button.addEventListener('click', () => {
   let size = selector.value;
   console.log(size);
   switch (size) {
      case "1080p":
         image.src = "https://picsum.photos/1920/1080.webp";
         break;
      case "720p":
         image.src = "https://picsum.photos/1280/720.webp";
         break;
      case "480p":
         image.src = "https://picsum.photos/640/480.webp";
         break;
      case "240p":
         image.src = "https://picsum.photos/320/240.webp";
         break;
      default:
         break;
   }
   console.log(image.src);
})