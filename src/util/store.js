export const setBalance = balance => {
    window.balance = balance;
};
export const getBalance = () => window.balance || 0;
export const setPreviouslyShownBalance = balance => {
    window.previouslyShownBalance = balance;
};
export const getPreviouslyShownBalance = () => window.previouslyShownBalance || 0;

export const getMissions = () => window.missions || [];
export const addMission = mission => {
    window.missions = window.missions || [];
    window.missions.push(mission);
};
export const clearMissionsHistory = () => { window.missions = [] };