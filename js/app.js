import { Type } from './data/meetings.js';
import Meeting from './meeting.js';
import participantMananger from './participantManager.js';
import loadParticipants from './participantManager.js';

Meeting.render(Type.Scrum);
//Meeting.render(Type["Go/No-go"]);

init();

function init() {
    loadParticipants();
}
