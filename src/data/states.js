import {images} from '../data/assets';

const livingAbroadAnswer = 'Digital nomads, people who enjoy a nomadic lifestyle working remotely from anywhere in the world, will become much more common in 2037. It is a great way to reduce living costs while getting the same salary.';
const notlivingAbroadAnswer = 'In the future, a lot people may travel to cheaper countries to live while still working for the same employer remotely. But for those who choose to stay, it is still possible to enjoy life.';
const contribute = 'In 2037, contributing to the community is very encouraged. The government may start to pay salary for such work especially if other kinds of jobs have been taken by the machine.';
const noContribute = 'If you don’t contribute, you aren\'t rewarded…';
const coliving = 'Co-living will become very common, especially in big cities.';

export const frames = {
    homepage: {
        heroImageUrl: '/index.gif'
    },
    won: {
        heroImageUrl: images.won,
        animation: 'jackInTheBox',
        script: 'You win!',
        destination: '/'
    },
    lost: {
        heroImageUrl: images.lost,
        animation: 'jackInTheBox',
        script: 'You loose!',
        destination: '/'
    },
    mission_b0m1: {
        heroImageUrl: '/mission_b0m1.jpg',
        animation: 'jackInTheBox',
        script: 'Do you want to become a drone engineer again? It will take a few weeks to retrain yourself though.',
        choice1: {
            destination: 'mission_b0m1a1',
            text: 'Yes, why not?'
        },
        choice2: {
            destination: 'mission_b0m1a2',
            text: 'No, it takes too long.'
        }
    },
    mission_b0m1a1: {
        heroImageUrl: '/mission_b0m1a1.jpg',
        animation: 'jackInTheBox',
        retro: 'In 2037, STEM subjects will become even more important than they are now. People are much more likely to find jobs if they have skills in those areas.',
        script: 'You have gone back to your old job. You have 2 missions left to win the game. <br/>+£3,500',
        destination: '/dashboards/4/2',
        isAnswer: true,
        reward: 3500
    },
    mission_b0m1a2: {
        heroImageUrl: '/mission_b0m1a2.jpg',
        animation: 'jackInTheBox',
        retro: 'STEM subjects will continue to be highly employable in 2037. But it doesn\'t mean other jobs will completely disappear.',
        script: 'No worries, you still have 5 more missions to go. <br/>+£0',
        destination: '/dashboards/1/2',
        isAnswer: true,
        reward: 0
    },
    mission_b4m2: {
        heroImageUrl: '/mission_b4m2.jpg',
        animation: 'jackInTheBox',
        retro: livingAbroadAnswer,
        script: 'Fancy living abroad?',
        choice1: {
            destination: 'mission_b4m2a1',
            text: 'Sounds fun!'
        },
        choice2: {
            destination: 'mission_b4m2a2',
            text: 'I\'m not leaving home.'
        }
    },
    mission_b4m2a1: {
        heroImageUrl: '/mission_b4m2a1.jpg',
        animation: 'jackInTheBox',
        retro: notlivingAbroadAnswer,
        script: 'You have saved money by living in somewhere cheaper. <br/>+£1,500',
        destination: 'won',
        isAnswer: true,
        reward: 1500
    },
    mission_b4m2a2: {
        heroImageUrl: '/mission_b4m2a2.jpg',
        animation: 'jackInTheBox',
        retro: 'retro text for mission_b4m2a2',
        script: 'Loving the British weather too much? That’s ok. There are other things to try…<br/>+£0',
        destination: '/dashboards/4/3',
        isAnswer: true,
        reward: 0
    },
    mission_b4m3: {
        heroImageUrl: '/mission_b4m3.jpg',
        animation: 'jackInTheBox',
        script: 'Today is Sunday neighbour\'s kids seem to want to play with you.',
        choice1: {
            destination: 'mission_b4m3a1',
            text: 'Host a workshop for them'
        },
        choice2: {
            destination: 'mission_b4m3a2',
            text: 'I\'d rather be alone!'
        }
    },
    mission_b4m3a1: {
        heroImageUrl: '/mission_b4m3a1.jpg',
        animation: 'jackInTheBox',
        retro: contribute,
        script: 'The local council appreciates your kind work. <br/>+£2,000',
        destination: 'won',
        isAnswer: true,
        reward: 2000
    },
    mission_b4m3a2: {
        heroImageUrl: '/mission_b4m3a2.jpg',
        animation: 'jackInTheBox',
        retro: noContribute,
        script: 'One step closer to becoming the smartest guy…<br/>+£0',
        destination: 'lost',
        isAnswer: true,
        reward: 0
    },
    mission_b1m2: {
        heroImageUrl: '/mission_b1m2.jpg',
        animation: 'jackInTheBox',
        script: 'Fancy living abroad?',
        choice1: {
            destination: 'mission_b1m2a1',
            text: 'Sounds fun!'
        },
        choice2: {
            destination: 'mission_b1m2a2',
            text: 'I\'m not leaving my home.'
        }
    },
    mission_b1m2a1: {
        heroImageUrl: '/mission_b4m2a1.jpg',
        animation: 'jackInTheBox',
        retro: livingAbroadAnswer,
        script: 'You have saved money by living in somewhere cheaper. <br/>+£1,500',
        destination: '/dashboards/2/3',
        isAnswer: true,
        reward: 1500
    },
    mission_b1m2a2: {
        heroImageUrl: '/mission_b4m2a2.jpg',
        animation: 'jackInTheBox',
        retro: notlivingAbroadAnswer,
        script: 'Loving the British weather too much? That’s ok. There are other things to try…<br/>+£0',
        destination: '/dashboards/3/3',
        isAnswer: true,
        reward: 0
    },
    mission_b2m3: {
        heroImageUrl: '/mission_b2m3.jpg',
        animation: 'jackInTheBox',
        script: 'You met a successful business man',
        choice1: {
            destination: 'mission_b2m3a1',
            text: 'Apply to be his accountant'
        },
        choice2: {
            destination: 'mission_b2m3a2',
            text: 'Show him your sexy moves'
        }
    },
    mission_b2m3a1: {
        heroImageUrl: '/mission_b2m3a1.jpg',
        animation: 'jackInTheBox',
        retro: 'Accountancy is one of the professions very likely to be taken by AI in the 2037.',
        script: 'He prefers AI.<br/>+£0',
        destination: '/dashboards/2/4',
        isAnswer: true,
        reward: 0
    },
    mission_b2m3a2: {
        heroImageUrl: '/mission_b2m3a2.jpg',
        animation: 'jackInTheBox',
        retro: 'The entertaining industry will still need human workers in the future.',
        script: 'He likes it.<br/>+£2,000',
        destination: '/dashboards/2/4',
        isAnswer: true,
        reward: 2000
    },
    mission_b2m4: {
        heroImageUrl: '/mission_b2m4.jpg',
        animation: 'jackInTheBox',
        script: 'A maid café just opened.',
        choice1: {
            destination: 'mission_b2m4a1',
            text: 'I don’t mind waiting tables'
        },
        choice2: {
            destination: 'mission_b2m4a2',
            text: 'Sell yourself as a manager'
        }
    },
    mission_b2m4a1: {
        heroImageUrl: '/mission_b2m4a1.jpg',
        animation: 'jackInTheBox',
        retro: 'After 20 years, you may no longer see human staff in fast food restaurants. But places like the maid café will still hire waitresses because the dining experience is as important as the food served. ',
        script: 'That was embarrassing but worth it!<br/>+£2,000',
        destination: '/dashboards/2/5',
        isAnswer: true,
        reward: 2000
    },
    mission_b2m4a2: {
        heroImageUrl: '/mission_b2m4a2.png',
        animation: 'jackInTheBox',
        retro: 'Artificial intelligence is capable of taking over the managing task in certain working environment. ',
        script: 'Sorry, the place is managed perfectly by algorithms!<br/>+£0',
        destination: '/dashboards/2/5',
        isAnswer: true,
        reward: 0
    },
    mission_b2m5: {
        heroImageUrl: '/mission_b2m5.jpg',
        animation: 'jackInTheBox',
        script: 'Today is Sunday, neighbour\'s kids seem to want to play with you.',
        choice1: {
            destination: 'mission_b2m5a1',
            text: 'Host a workshop for them'
        },
        choice2: {
            destination: 'mission_b2m5a2',
            text: 'I\'d rather be alone!'
        }
    },
    mission_b2m5a1: {
        heroImageUrl: '/mission_b2m5a1.png',
        animation: 'jackInTheBox',
        retro: contribute,
        script: 'The local council appreciates your kind work<br/>+£2,000',
        destination: '/dashboards/2/6',
        isAnswer: true,
        reward: 2000
    },
    mission_b2m5a2: {
        heroImageUrl: '/mission_b2m5a2.jpg',
        animation: 'jackInTheBox',
        retro: noContribute,
        script: 'One step closer to becoming the smartest guy…<br/>+£0',
        destination: '/dashboards/2/6',
        isAnswer: true,
        reward: 0
    },
    mission_b2m6: {
        heroImageUrl: '/mission_b2m6.1.png',
        animation: 'slide',
        script: 'A kid is looking for an adult to bring him back to the UK.',
        destination: 'mission_b2m6q2'
    },
    mission_b2m6q2: {
        heroImageUrl: '/mission_b2m6.2.png',
        animation: 'slide',
        script: 'A kid is looking for an adult to bring him back to the UK.',
        destination: 'mission_b2m6q3'
    },
    mission_b2m6q3: {
        heroImageUrl: '/mission_b2m6.3.png',
        animation: 'slide',
        script: 'A kid is looking for an adult to bring him back to the UK.',
        choice1: {
            destination: 'mission_b2m6q3a1',
            text: 'Love to help'
        },
        choice2: {
            destination: 'mission_b2m6q3a2',
            text: 'Say no'
        }
    },
    mission_b2m6q3a1: {
        heroImageUrl: '/mission_b2m6.2.png',
        animation: 'slide',
        retro: 'This boy is a second generation British expatriate, a child of digital nomads. Perhaps children like him would be quite common after 20 years.',
        script: 'Everyone is happy now',
        destination: 'won',
        isAnswer: true,
        reward: 2000
    },
    mission_b2m6q3a2: {
        heroImageUrl: '/doesnotexist.jpg',
        animation: 'slide',
        script: 'Don\'t be an *rse…go back and choose again!',
        destination: 'mission_b2m6q3'
    },
    mission_b3m3: {
        heroImageUrl: '/mission_b3m3.png',
        animation: 'jackInTheBox',
        script: 'A traveller wants to live with you for a while.',
        choice1: {
            destination: 'mission_b3m3a1',
            text: 'Sure, why not!'
        },
        choice2: {
            destination: 'mission_b3m3a2',
            text: 'Go away'
        }
    },
    mission_b3m3a1: {
        heroImageUrl: '/mission_b3m3a1.png',
        animation: 'jackInTheBox',
        retro: coliving,
        script: 'Here is your rent money. <br/>+£1,500',
        destination: '/dashboards/3/4',
        isAnswer: true,
        reward: 1500
    },
    mission_b3m3a2: {
        heroImageUrl: '/mission_b3m3a2.png',
        animation: 'jackInTheBox',
        retro: coliving,
        script: 'Hmm…<br/>+£0',
        destination: '/dashboards/3/4',
        isAnswer: true,
        reward: 0
    },
    mission_b3m4: {
        heroImageUrl: '/mission_b3m4.png',
        animation: 'jackInTheBox',
        script: 'This farmer keeps a lot of sheep.',
        choice1: {
            destination: 'mission_b3m4a1',
            text: 'Shear his sheep'
        },
        choice2: {
            destination: 'mission_b3m4a2',
            text: 'Play with the farmer'
        }
    },
    mission_b3m4a1: {
        heroImageUrl: '/mission_b3m4a1.png',
        animation: 'jackInTheBox',
        retro: 'Less labour will be involved in agriculture as machine advances',
        script: 'The sheep prefers machine than you…<br/>+£0',
        destination: '/dashboards/3/5',
        isAnswer: true,
        reward: 0
    },
    mission_b3m4a2: {
        heroImageUrl: '/mission_b3m4a2.png',
        animation: 'jackInTheBox',
        retro: 'Since less work is needed, farmers will engage in other activities during the day.',
        script: 'The farmer enjoys your company.<br/>+£2,000',
        destination: '/dashboards/3/5',
        isAnswer: true,
        reward: 2000
    },
    mission_b3m5: {
        heroImageUrl: '/mission_b3m5.png',
        animation: 'jackInTheBox',
        script: 'One of the robots is looking anxious.',
        choice1: {
            destination: 'mission_b3m5a1',
            text: 'Rob it!'
        },
        choice2: {
            destination: 'mission_b3m5a2',
            text: 'Try to help it.'
        }
    },
    mission_b3m5a1: {
        heroImageUrl: '/mission_b3m5a1.png',
        animation: 'jackInTheBox',
        retro: 'You have picked the wrong target man…',
        script: 'You have picked the wrong target man!<br/>+£0',
        destination: '/dashboards/3/6',
        isAnswer: true,
        reward: 0
    },
    mission_b3m5a2: {
        heroImageUrl: '/mission_b3m5a2.png',
        animation: 'jackInTheBox',
        retro: 'Who says robots won’t develop their own religion?',
        script: 'You covered its shift so than it can pray to its god. <br/>+£2,000',
        destination: '/dashboards/3/6',
        isAnswer: true,
        reward: 2000
    },
    mission_b3m6: {
        heroImageUrl: '/mission_b3m6.1.png',
        animation: 'slide',
        script: '',
        destination: 'mission_b3m6q2'
    },
    mission_b3m6q2: {
        heroImageUrl: '/mission_b3m6.2.png',
        animation: 'slide',
        destination: 'mission_b3m6q3'
    },
    mission_b3m6q3: {
        heroImageUrl: '/mission_b3m6.3.png',
        animation: 'slide',
        destination: 'mission_b3m6q4'
    },
    mission_b3m6q4: {
        heroImageUrl: '/mission_b3m6.4.png',
        animation: 'slide',
        destination: 'mission_b3m6q5'
    },
    mission_b3m6q5: {
        heroImageUrl: '/mission_b3m6.5.png',
        animation: 'slide',
        destination: 'mission_b3m6q6'
    },
    mission_b3m6q6: {
        heroImageUrl: '/mission_b3m6.6.png',
        animation: 'slide',
        script: 'This old lady can cover the rest of the cat tax. She says you can pay her back by having more VR bike rides together in the future.',
        choice1: {
            destination: 'won',
            text: 'Agree to the plan'
        },
        choice2: {
            destination: 'lost',
            text: 'I\'d rather lose my cat'
        }
    },
    mission_b3m6a1: {
        heroImageUrl: '/doesnotexist.jpg',
        animation: 'jackInTheBox',
        retro: 'The VR technology could help those whose physical ability is compromised to engage in activities that are impossible for them in real life.',
        script: 'Good choice!<br/>+£2,000',
        destination: 'won',
        isAnswer: true,
        reward: 2000
    },
    mission_b3m6a2: {
        heroImageUrl: '/doesnotexist.jpg',
        animation: 'jackInTheBox',
        script: 'What?! Go back and choose again!',
        destination: 'mission_b3m6q4',
        reward: 0
    }
};


export const getFrameHeroImage = id => frames[id].heroImageUrl;

export const getFrameScript = id => frames[id].script;

export const getNextFrame = (id, choice) => frames[id][choice].destination;

export const getFrameAnimation = (id) => frames[id].animation;

export const isFrameExternal = (currentFrameId) => currentFrameId.includes('/');

export const getChoice = (id, choice) => frames[id][choice];

export const getRetroScript = (id) => frames[id].retro;

export const isAnswer = (id) => frames[id].isAnswer;

export const getReward = id => frames[id].reward || 0;

export const isFrameSingleChoice = (id) => !!frames[id].destination;

export const getTheOnlyDestination = (id) => frames[id].destination;

export const convertUrlToFrameId = url => {
    const urlSegments = url.split('/');
    const branchNumber = urlSegments[2];
    const missionNumber = urlSegments[3];
    return `mission_b${branchNumber}m${missionNumber}`;
};

export const isDestinationValid = destination => !!frames[destination];

export const convertBranchMissionToFrameId = (branchNumber, missionNumber) => `mission_b${branchNumber}m${missionNumber}`;

export const getFrameIdByIndex = (id) => Object.keys(frames)[id % Object.keys(frames).length];

export const getAllAnswerMissionIds = () => Object.entries(frames).filter(([key, value]) => value.isAnswer).map(([key, value]) => key);

export const wonStateId = 'won';

export const isGameFinished = (id) => id === wonStateId || id === 'lost';

export const retroPageUrl = '/retro';

export const deduplicate = (selectedMissionIds) => {
    let deduped = getAllAnswerMissionIds();
    if (!selectedMissionIds.length || selectedMissionIds.includes('mission_b1m2a1') || selectedMissionIds.includes('mission_b1m2a2')) {
       deduped = deduped.filter(key => key !== 'mission_b4m2a1');
       deduped = deduped.filter(key => key !== 'mission_b4m2a2');
    }
    if (selectedMissionIds.includes('mission_b4m2a1') || selectedMissionIds.includes('mission_b4m2a2')) {
        deduped = deduped.filter(key => key !== 'mission_b1m2a1');
        deduped = deduped.filter(key => key !== 'mission_b1m2a2');
    }

    return deduped;
};
