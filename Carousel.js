class Carousel {
  constructor(element) {
      this.element = element;
      this.leftButton = element.querySelector('.left-button');
      this.rightButton = element.querySelector('.right-button');

      //Tracker to know what image we are on
      this.currentImageNum = 0;
      
      //Grab all the images in the Carousel
      this.images = this.element.querySelectorAll('.HeaderSlides');

      //show first image by default
      this.images[0].style.display = 'block';

      this.leftButton.addEventListener('click', () => this.previousImage());
      this.rightButton.addEventListener('click', () => this.nextImage());
  }

  nextImage() {
      if(this.currentImageNum < this.images.length - 1) {
          //Hide currently showing image
          this.images[this.currentImageNum].style.display = 'none';
                  
          //Increment currentImageNum
          this.currentImageNum += 1
          this.images[this.currentImageNum].style.display = 'block';
      } else {
          //remove the current image being displayed
          this.images[this.currentImageNum].style.display = 'none';

          // reset images counter
          this.currentImageNum = 0;

          //display next starting image
          this.images[this.currentImageNum].style.display = 'block';
      }
      
  }

  previousImage() {
      if(this.currentImageNum > 0) {
          //remove the current image being displayed
          this.images[this.currentImageNum].style.display = 'none';
          
          this.currentImageNum -= 1;
          this.images[this.currentImageNum].style.display = 'block';

      } else {
          this.images[0].style.display = 'none';

          this.currentImageNum = this.images.length - 1;
          this.images[this.currentImageNum].style.display = 'block';
      }
  }

}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);