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
        choice2: {
            destination: '/dashboards/2/5',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b2m4a2: {
        heroImageUrl: '/mission_b2m4a2.png',
        choice2: {
            destination: '/dashboards/2/5',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b2m5: {
        heroImageUrl: '/mission_b2m5.png',
        script: 'Do you want to be a maid?',
        choice1: {
            destination: 'mission_b2m5a1',
            text: 'Yes',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'mission_b2m5a2',
            text: 'No',
            animation: 'slide--forward'
        }
    },
    mission_b2m5a1: {
        heroImageUrl: '/mission_b2m5a1.png',
        choice2: {
            destination: '/dashboards/2/6',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b2m5a2: {
        heroImageUrl: '/mission_b2m5a2.png',
        choice2: {
            destination: '/dashboards/2/6',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b2m6: {
        heroImageUrl: '/mission_b2m6_intro1.jpg',
        script: 'Do you want to be a maid?',
        choice2: {
            destination: 'mission_b2m6q2',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b2m6q2: {
        heroImageUrl: '/mission_b2m6_intro2.jpg',
        choice2: {
            destination: 'mission_b2m6q3',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b2m6q3: {
        heroImageUrl: '/mission_b2m6q.jpg',
        script: 'Do you want to be a maid?',
        choice1: {
            destination: 'won',
            text: 'Yes',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'lost',
            text: 'No',
            animation: 'slide--forward'
        }
    },
    mission_b3m3: {
        heroImageUrl: '/mission_b3m3.jpg',
        script: 'Do you want to pole dance?',
        choice1: {
            destination: 'mission_b3m3a1',
            text: 'Yes',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'mission_b3m3a2',
            text: 'No',
            animation: 'slide--forward'
        }
    },
    mission_b3m3a1: {
        heroImageUrl: '/mission_b3m3a1.jpg',
        choice2: {
            destination: '/dashboards/3/4',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m3a2: {
        heroImageUrl: '/mission_b3m3a2.jpg',
        choice2: {
            destination: '/dashboards/3/4',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m4: {
        heroImageUrl: '/mission_b3m4.jpg',
        script: 'Do you want to pole dance?',
        choice1: {
            destination: 'mission_b3m4a1',
            text: 'Yes',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'mission_b3m4a2',
            text: 'No',
            animation: 'slide--forward'
        }
    },
    mission_b3m4a1: {
        heroImageUrl: '/mission_b3m4a1.jpg',
        choice2: {
            destination: '/dashboards/3/5',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m4a2: {
        heroImageUrl: '/mission_b3m4a2.jpg',
        choice2: {
            destination: '/dashboards/3/5',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m5: {
        heroImageUrl: '/mission_b3m5.jpg',
        script: 'Do you want to pole dance?',
        choice1: {
            destination: 'mission_b3m5a1',
            text: 'Yes',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'mission_b3m5a2',
            text: 'No',
            animation: 'slide--forward'
        }
    },
    mission_b3m5a1: {
        heroImageUrl: '/mission_b3m5a1.jpg',
        choice2: {
            destination: '/dashboards/3/6',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m5a2: {
        heroImageUrl: '/mission_b3m5a2.jpg',
        choice2: {
            destination: '/dashboards/3/6',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m6: {
        heroImageUrl: '/mission_b3m6.0.jpg',
        choice2: {
            destination: 'mission_b3m6q1',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-128.png',
            animation: 'slide--forward'
        }
    },
    mission_b3m6q1: {
        heroImageUrl: '/mission_b3m6.1.jpg',
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
        script: 'Do you want to pole dance?',
        choice1: {
            destination: 'won',
            text: 'Yes',
            animation: 'slide--forward'
        },
        choice2: {
            destination: 'lost',
            text: 'No',
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
