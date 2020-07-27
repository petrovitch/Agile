import { Type } from './data/meetings.js';
import Meeting from './meeting.js';
import participantMananger from './participantManager.js';
import loadParticipants from './participantManager.js';

Meeting.render(Type["Scrum"]);

init();

function init() {
    const buttonShow = document.getElementById('unhide');
    if (buttonShow) {
        buttonShow.addEventListener('click', (e) => {
            const participants = document.getElementsByClassName('participant');
            for (const participant of participants) {
                participant.classList.remove('hidden');
            }
        });
    }

    loadParticipants();
}
