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
    intro1: {
        heroImageUrl: '/intro_1.gif',
        choice2: {
            destination: 'intro2',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
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
    intro2: {
        heroImageUrl: '/intro_2.gif',
        choice1: {
            destination: 'intro1',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-left-01-128.png',
            animation: 'slide--back'
        },
        choice2: {
            destination: 'intro3',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    intro3: {
        heroImageUrl: '/intro_3.gif',
        choice1: {
            destination: 'intro2',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-left-01-128.png',
            animation: 'slide--back'
        },
        choice2: {
            destination: 'intro4',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    intro4: {
        heroImageUrl: '/intro_4.gif',
        choice1: {
            destination: 'intro3',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-left-01-128.png',
            animation: 'slide--back'
        },
        choice2: {
            destination: 'intro5',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    intro5: {
        heroImageUrl: '/intro_5.gif',
        choice1: {
            destination: 'intro4',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-left-01-128.png',
            animation: 'slide--back'
        },
        choice2: {
            destination: 'intro6',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    intro6: {
        heroImageUrl: '/intro_6.gif',
        choice1: {
            destination: 'intro5',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-left-01-128.png',
            animation: 'slide--back'
        },
        choice2: {
            destination: 'intro7',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    intro7: {
        heroImageUrl: '/intro_7.gif',
        choice1: {
            destination: 'intro6',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-left-01-128.png',
            animation: 'slide--back'
        },
        choice2: {
            destination: 'intro8',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    intro8: {
        heroImageUrl: '/intro_8.gif',
        choice1: {
            destination: 'intro7',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-left-01-128.png',
            animation: 'slide--back'
        },
        choice2: {
            destination: 'intro9',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    intro9: {
        heroImageUrl: '/intro_9.gif',
        choice1: {
            destination: 'intro8',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-left-01-128.png',
            animation: 'slide--back'
        },
        choice2: {
            destination: 'intro10',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    intro10: {
        heroImageUrl: '/intro_10.gif',
        choice1: {
            destination: 'intro9',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-left-01-128.png',
            animation: 'slide--back'
        },
        choice2: {
            destination: 'intro10a',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    intro10a: {
        heroImageUrl: '/intro_10a.jpg',
        choice1: {
            destination: 'intro10',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-left-01-128.png',
            animation: 'slide--back'
        },
        choice2: {
            destination: 'intro11',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    intro11: {
        heroImageUrl: '/intro_11.gif',
        choice1: {
            destination: 'intro10a',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-left-01-128.png',
            animation: 'slide--back'
        },
        choice2: {
            destination: '/dashboards/0/1',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b0m1q: {
        heroImageUrl: '/mission_b0m1q.png',
        choice1: {
            destination: '/dashboards/1/5',
            text: 'Choice 1',
            animation: 'slide--forward'
        },
        choice2: {
            destination: '/dashboards/1/5',
            text: 'Choice 2',
            animation: 'slide--forward'
        }
    },
    mission_b1m5q: {
        heroImageUrl: '/mission_b1m5q.png',
        choice1: {
            destination: 'mission_b1m5a1',
            text: 'Choice 1',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'mission_b1m5a2',
            text: 'Choice 2',
            animation: 'slide--forward'
        }
    },
    mission_b1m5a1: {
        heroImageUrl: '/mission_b1m5a1.png',
        choice1: {
            destination: 'won',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b1m5a2: {
        heroImageUrl: '/mission_b1m5a2.png',
        choice1: {
            destination: '/dashboards/1/6',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b1m6q: {
        heroImageUrl: '/mission_b1m6q.png',
        choice1: {
            destination: 'mission_b1m6a1',
            text: 'Choice 1',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'mission_b1m6a2',
            text: 'Choice 2',
            animation: 'slide--forward'
        }
    },
    mission_b1m6a1: {
        heroImageUrl: '/mission_b1m6a1.png',
        choice1: {
            destination: 'lost',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b1m6a2: {
        heroImageUrl: '/mission_b1m6a2.png',
        choice1: {
            destination: 'won',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    }
};

export const getCurrentHeroImage = id => frames[id].heroImageUrl;

export const getNextHeroImage = (id, choice) => {
    const nextFrameId = frames[id][choice].destination;
    return frames[nextFrameId].heroImageUrl;
};

export const getNextFrameDestination = (id, choice) => frames[id][choice].destination;

export const getNextFrameAnimation = (id, choice) => frames[id][choice].animation;

export const getChoice = (id, choice) => frames[id][choice];

export const isNextFrameExternal = (currentFrameId, choice) => frames[currentFrameId][choice].destination.includes('/');
