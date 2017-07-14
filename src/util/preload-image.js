import {
    getNextFrame,
    isFrameExternal,
    isFrameSingleChoice,
    getTheOnlyDestination,
    getFrameHeroImage,
    convertUrlToFrameId,
    isDestinationValid
} from '../data/states';

export const preload = (images) => {
    return new Promise((res) => {
            images.forEach(img => {
                const newImage = new Image();
                newImage.src = img;
            });
            res();
        }
    );
};

export const preloadNextState = (currentState) => {
    function preloadExternalAndInternal(nextDestination) {
        if (!isFrameExternal(nextDestination)) {
            preload([getFrameHeroImage(nextDestination)]);
        } else {
            const nextStateId = convertUrlToFrameId(nextDestination);
            if (isDestinationValid(nextStateId)) {
                preload([getFrameHeroImage(nextStateId)]);
            }
        }
    }

    if (isFrameSingleChoice(currentState)) {
        const nextDestination = getTheOnlyDestination(currentState);
        preloadExternalAndInternal(nextDestination);
    } else {
        const nextDestination1 = getNextFrame(currentState, 'choice1');
        const nextDestination2 = getNextFrame(currentState, 'choice2');

        preloadExternalAndInternal(nextDestination1);
        preloadExternalAndInternal(nextDestination2);
    }

};