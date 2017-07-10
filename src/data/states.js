const frames = {
    homepage: {
        heroImageUrl: '/intro_11.gif',
        choice1: {
            destination: '/intro',
            text: 'Intro',
            animation: 'slide--forward'
        },
        choice2: {
            destination: '/dashboards/0/1',
            text: 'Mission 1',
            animation: 'slide--forward'
        }
    },
    won: {
        heroImageUrl: '/win.png',
        choice1: {
            destination: '/',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    lost: {
        heroImageUrl: '/loose.png',
        choice1: {
            destination: '/',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b0m1: {
        heroImageUrl: '/mission_b0m1.png',
        script: 'Do you want to become a drone engineer again? It will take a few weeks to retrain yourself though.',
        choice1: {
            destination: 'mission_b0m1a1',
            text: 'Yes, why not?',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'mission_b0m1a2',
            text: 'No, it takes too long.',
            animation: 'slide--forward'
        }
    },
    mission_b0m1a1: {
        heroImageUrl: '/doesnotexist.png',
        script: 'You have gone back to your old job. You have 2 missions left to win the game. <br/>+£3,500',
        choice1: {
            destination: '/dashboards/4/2',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b0m1a2: {
        heroImageUrl: '/doesnotexist.png',
        script: 'No worries, you still have 5 more missions to go. <br/>£0',
        choice1: {
            destination: '/dashboards/1/2',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b4m2: {
        heroImageUrl: '/mission_b4m2.png',
        script: 'Fancy living abroad?',
        choice1: {
            destination: 'mission_b4m2a1',
            text: 'Sounds fun!',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'mission_b4m2a2',
            text: 'I\'m not leaving home.',
            animation: 'slide--forward'
        }
    },
    mission_b4m2a1: {
        heroImageUrl: '/mission_b4m2a1.png',
        script: 'You have saved money by living in somewhere cheaper. <br/>+£1,500',
        choice1: {
            destination: 'won',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b4m2a2: {
        heroImageUrl: '/mission_b4m2a2.png',
        script: 'Loving the British weather too much? That’s ok. There are other things to try…<br/>£0',
        choice1: {
            destination: '/dashboards/4/3',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b4m3: {
        heroImageUrl: '/mission_b4m3.png',
        script: 'Today is Sunday neighbour\'s kids seem to want to play with you.',
        choice1: {
            destination: 'mission_b4m3a1',
            text: 'Host a workshop for them',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'mission_b4m3a2',
            text: 'I\'d rather be alone!',
            animation: 'slide--forward'
        }
    },
    mission_b4m3a1: {
        heroImageUrl: '/mission_b4m3a1.png',
        script: 'The local council appreciates your kind work. <br/>+£2,000',
        choice1: {
            destination: 'won',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b4m3a2: {
        heroImageUrl: '/mission_b4m3a2.png',
        script: 'One step closer to becoming the smartest guy…<br/>+£0',
        choice1: {
            destination: 'lost',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b1m2: {
        heroImageUrl: '/mission_b1m2.png',
        script: 'Fancy living abroad?',
        choice1: {
            destination: 'mission_b1m2a1',
            text: 'Sounds fun!',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'mission_b1m2a2',
            text: 'I\'m not leaving my home.',
            animation: 'slide--forward'
        }
    },
    mission_b1m2a1: {
        heroImageUrl: '/mission_b4m2a1.png',
        script: 'You have saved money by living in somewhere cheaper. <br/>+£1,500',
        choice2: {
            destination: '/dashboards/2/3',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b1m2a2: {
        heroImageUrl: '/mission_b4m2a2.png',
        script: 'Loving the British weather too much? That’s ok. There are other things to try…<br/>£0',
        choice2: {
            destination: '/dashboards/3/3',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b2m3: {
        heroImageUrl: '/mission_b2m3.png',
        script: 'You met a successful business man',
        choice1: {
            destination: 'mission_b2m3a1',
            text: 'Apply to be his accountant',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'mission_b2m3a2',
            text: 'Show him your sexy moves',
            animation: 'slide--forward'
        }
    },
    mission_b2m3a1: {
        heroImageUrl: '/mission_b2m3a1.png',
        script: 'He prefers AI.<br/>+£0',
        choice2: {
            destination: '/dashboards/2/4',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b2m3a2: {
        heroImageUrl: '/mission_b2m3a2.png',
        script: 'He likes it.<br/>+£2,000',
        choice2: {
            destination: '/dashboards/2/4',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b2m4: {
        heroImageUrl: '/mission_b2m4.png',
        script: 'A maid café just opened.',
        choice1: {
            destination: 'mission_b2m4a1',
            text: 'I don’t mind waiting tables',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'mission_b2m4a2',
            text: 'Sell yourself as a manager',
            animation: 'slide--forward'
        }
    },
    mission_b2m4a1: {
        heroImageUrl: '/mission_b2m4a1.png',
        script: 'That was embarrassing but worth it!<br/>+£2,000',
        choice2: {
            destination: '/dashboards/2/5',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b2m4a2: {
        heroImageUrl: '/mission_b2m4a2.png',
        script: 'Sorry, the place is managed perfectly by algorithms!<br/>+£0',
        choice2: {
            destination: '/dashboards/2/5',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b2m5: {
        heroImageUrl: '/mission_b2m5.png',
        script: 'Today is Sunday, neighbour\'s kids seem to want to play with you.',
        choice1: {
            destination: 'mission_b2m5a1',
            text: 'Host a workshop for them',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'mission_b2m5a2',
            text: 'I\'d rather be alone!',
            animation: 'slide--forward'
        }
    },
    mission_b2m5a1: {
        heroImageUrl: '/mission_b2m5a1.png',
        script: 'The local council appreciates your kind work<br/>+£2,000',
        choice2: {
            destination: '/dashboards/2/6',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b2m5a2: {
        heroImageUrl: '/mission_b2m5a2.png',
        script: 'One step closer to becoming the smartest guy…<br/>+£0',
        choice2: {
            destination: '/dashboards/2/6',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b2m6: {
        heroImageUrl: '/mission_b2m6_intro1.jpg',
        script: 'A kid is looking for an adult to bring him back to the UK.',
        choice2: {
            destination: 'mission_b2m6q2',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b2m6q2: {
        heroImageUrl: '/mission_b2m6_intro2.jpg',
        script: 'A kid is looking for an adult to bring him back to the UK.',
        choice2: {
            destination: 'mission_b2m6q3',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b2m6q3: {
        heroImageUrl: '/mission_b2m6q.jpg',
        script: 'A kid is looking for an adult to bring him back to the UK.',
        choice1: {
            destination: 'won',
            text: 'Everyone is happy now',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'heroImageUrl',
            text: 'Say no',
            animation: 'slide--forward'
        }
    },
    mission_b2m6q3a2: {
        heroImageUrl: '/doesnotexist.jpg',
        script: 'Don\'t be an *rse…go back and choose again!',
        choice2: {
            destination: 'mission_b2m6q3',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m3: {
        heroImageUrl: '/mission_b3m3.jpg',
        script: 'A  traveller wants to live with you for a while',
        choice1: {
            destination: 'mission_b3m3a1',
            text: 'Sure, why not!',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'mission_b3m3a2',
            text: 'Go away',
            animation: 'slide--forward'
        }
    },
    mission_b3m3a1: {
        heroImageUrl: '/mission_b3m3a1.jpg',
        script: 'Here is your rent money',
        choice2: {
            destination: '/dashboards/3/4',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m3a2: {
        heroImageUrl: '/mission_b3m3a2.jpg',
        script: 'Hmm…',
        choice2: {
            destination: '/dashboards/3/4',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m4: {
        heroImageUrl: '/mission_b3m4.jpg',
        script: 'This farmer keeps a lot of sheep',
        choice1: {
            destination: 'mission_b3m4a1',
            text: 'Shear his sheep',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'mission_b3m4a2',
            text: 'Play with the farmer',
            animation: 'slide--forward'
        }
    },
    mission_b3m4a1: {
        heroImageUrl: '/mission_b3m4a1.jpg',
        script: 'The sheep prefers machine than you…<br/>+£0',
        choice2: {
            destination: '/dashboards/3/5',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m4a2: {
        heroImageUrl: '/mission_b3m4a2.jpg',
        script: 'The farmer enjoys your company.<br/>+£2,000',
        choice2: {
            destination: '/dashboards/3/5',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m5: {
        heroImageUrl: '/mission_b3m5.jpg',
        script: 'One of the robots is looking anxious.',
        choice1: {
            destination: 'mission_b3m5a1',
            text: 'Rob it!',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'mission_b3m5a2',
            text: 'Try to help it.',
            animation: 'slide--forward'
        }
    },
    mission_b3m5a1: {
        heroImageUrl: '/mission_b3m5a1.jpg',
        script: 'You have picked the wrong target man!<br/>+£0',
        choice2: {
            destination: '/dashboards/3/6',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m5a2: {
        heroImageUrl: '/mission_b3m5a2.jpg',
        script: 'You covered its shift so than it can pray to its god. <br/>£2,000',
        choice2: {
            destination: '/dashboards/3/6',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m6: {
        heroImageUrl: '/mission_b3m6.0.jpg',
        script: 'This old lady can cover the rest of the cat tax.',
        choice2: {
            destination: 'mission_b3m6q1',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m6q1: {
        heroImageUrl: '/mission_b3m6.1.jpg',
        script: 'She says you can pay her back by having more VR bike rides together in the future.',
        choice2: {
            destination: 'mission_b3m6q2',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m6q2: {
        heroImageUrl: '/mission_b3m6.2.jpg',
        choice2: {
            destination: 'mission_b3m6q3',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m6q3: {
        heroImageUrl: '/mission_b3m6.3.jpg',
        choice2: {
            destination: 'mission_b3m6q4',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m6q4: {
        heroImageUrl: '/mission_b3m6.4.jpg',
        script: '',
        choice1: {
            destination: 'won',
            text: 'Agree to the plan',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'lost',
            text: 'I\'d rather lose my cat',
            animation: 'slide--forward'
        }
    },
    mission_b3m6a1: {
        heroImageUrl: '/doesnotexist.jpg',
        script: 'Good choice!<br/>+£2,000',
        choice1: {
            destination: 'won',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m6a2: {
        heroImageUrl: '/doesnotexist.jpg',
        script: 'What?! Go back and choose again!',
        choice1: {
            destination: 'mission_b3m6q4',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    }
};

export const getCurrentHeroImage = id => frames[id].heroImageUrl;

export const getCurrentScript = id => frames[id].script;

export const getNextHeroImage = (id, choice) => {
    const nextFrameId = frames[id][choice].destination;
    return frames[nextFrameId].heroImageUrl;
};

export const getNextFrameDestination = (id, choice) => frames[id][choice].destination;

export const getNextFrameAnimation = (id, choice) => frames[id][choice].animation;

export const getNextFrameScript = (id, choice) => frames[getNextFrameDestination(id, choice)].script;

export const getChoice = (id, choice) => frames[id][choice];

export const isNextFrameExternal = (currentFrameId, choice) => frames[currentFrameId][choice].destination.includes('/');
