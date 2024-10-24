
    
        const images = ['Mario.jpg', 'Mario2.jpg', 'morris.webp'];
        let currentImageIndex = 0;

        function changeImage() {
            const image = document.querySelector('img');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            image.src = images[currentImageIndex];
        }

function changeImage() {
            const image = document.querySelector('img');
            if (image.src.includes('Mario.jpg')) {
                image.src = 'mario-bros.jpg';
            } else {
                image.src = 'mario-bros.jpg';
            }
        }
