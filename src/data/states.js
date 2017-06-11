const frames = {
    homepage: {
        heroImageUrl: 'placeholder-1.jpg',
        choice1: {
            destination: 'frame2',
            imageUrl: 'https://media0.giphy.com/media/a74pSGN7wvT7a/200.webp#93-grid1'
        },
        choice2: {
            destination: 'frame2',
            imageUrl: 'https://media2.giphy.com/media/14o3AsSMpn6PkY/200w.webp#95-grid1'
        },
    },
    frame2: {
        heroImageUrl: 'placeholder-2.png',
        choice1: {
            destination: 'homepage',
            text: 'Choice 1'
        }
    }
};

export const getCurrentHeroImage = id => frames[id].heroImageUrl;

export const getNextHeroImage = (id, choice) => {
    const nextFrameId = frames[id][choice].destination;
    return frames[nextFrameId].heroImageUrl;
};

export const getNextFrameId = (id, choice) => frames[id][choice].destination;

export const getChoice = (id, choice) => frames[id][choice];