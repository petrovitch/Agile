import ParticipantRepo from './data/participants.js';

const repo = new ParticipantRepo();

init();

function init() {
    loadParticipants();
}

function loadParticipants() {
    const select = document.getElementById('selectParticipant');
    if (select) {
        const participants = repo.getAll();
        for (const participant of participants) {
            const option = document.createElement('option');
            if (option) {
                option.value = participant.id;
                option.text = participant.name;

                select.options.add(option);
            }
        }

        select.addEventListener('change', e => {
            var option = select.options[select.options.selectedIndex];
            alert(`${option.value}. ${option.text}`);
        });
    }
}

export default loadParticipants;