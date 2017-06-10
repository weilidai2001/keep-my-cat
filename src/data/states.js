const frames = {
    homepage: {
        heroImageUrl: 'placeholder-1.jpg',
        choice1: {
            destination: 'frame2',
            text: 'Choice 1'
        },
        choice2: {
            destination: 'frame2',
            text: 'Choice 2'
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