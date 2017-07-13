export const preload = (images) => {
    return new Promise((res) => {
        images.forEach(img => {
                const newImage = new Image();
            console.log('load image');

            newImage.src = img;
            });
            res();
        }
    );
};
