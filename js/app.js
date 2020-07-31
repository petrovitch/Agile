import { Type } from './data/meetings.js';
import Meeting from './meeting.js';
import participantMananger from './participantManager.js';
import loadParticipants from './participantManager.js';

Meeting.render(Type.Scrum);
//Meeting.render(Type["Go/No-go"]);

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

    // When clicked hide splash modal and start meeting timer
    const splash = document.getElementById('splash');
    if (splash) {
        splash.addEventListener('click', e => {
            splash.classList.add('hidden');
        });
    }
}
