export const setBalance = balance => {
    window.balance = balance;
    console.log('window.balance', window.balance);
};
export const getBalance = () => window.balance || 0;

export const getMissions = () => window.missions || [];
export const addMission = mission => {
    window.missions = window.missions || [];
    window.missions.push(mission);
    console.log('window.missions', window.missions);
};
export const clearMissionsHistory = () => { window.missions = [] };