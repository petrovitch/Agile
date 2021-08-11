import { RoleType as Role } from './types.js';

const data = [
    // Scrum
    { meetingId: 1, attendeeId: 1, role: Role.Lead },
    { meetingId: 1, attendeeId: 2, role: Role.Lead },
    // { meetingId: 1, attendeeId: 3, role: Role.Participant },
    { meetingId: 1, attendeeId: 4, role: Role.Participant },
    { meetingId: 1, attendeeId: 5, role: Role.Participant },
    { meetingId: 1, attendeeId: 6, role: Role.Participant },
    { meetingId: 1, attendeeId: 7, role: Role.Participant },
    { meetingId: 1, attendeeId: 8, role: Role.Participant },
    { meetingId: 1, attendeeId: 9, role: Role.Participant },
    // { meetingId: 1, attendeeId: 10, role: Role.Participant },
    { meetingId: 1, attendeeId: 11, role: Role.Participant },
    { meetingId: 1, attendeeId: 12, role: Role.Participant },
    { meetingId: 1, attendeeId: 13, role: Role.Observer },
    { meetingId: 1, attendeeId: 17, role: Role.Participant },
    // { meetingId: 1, attendeeId: 10, role: Role.Participant },
    { meetingId: 1, attendeeId: 18, role: Role.Participant },
    // { meetingId: 1, attendeeId: 19, role: Role.Participant },
    { meetingId: 1, attendeeId: 20, role: Role.Participant },

    // Go/No Go
    { meetingId: 2, attendeeId: 1, role: Role.Lead },
    { meetingId: 2, attendeeId: 2, role: Role.Lead },
    // { meetingId: 2, attendeeId: 3, role: Role.Participant },
    { meetingId: 2, attendeeId: 4, role: Role.Participant },
    { meetingId: 2, attendeeId: 5, role: Role.Participant },
    // { meetingId: 2, attendeeId: 6, role: Role.Participant },
    // { meetingId: 2, attendeeId: 7, role: Role.Participant },
    { meetingId: 2, attendeeId: 8, role: Role.Participant },
    { meetingId: 2, attendeeId: 9, role: Role.Participant },
    // { meetingId: 2, attendeeId: 10, role: Role.Participant },
    { meetingId: 2, attendeeId: 11, role: Role.Participant },
    { meetingId: 2, attendeeId: 12, role: Role.Participant },
    { meetingId: 2, attendeeId: 13, role: Role.Participant },
    { meetingId: 2, attendeeId: 14, role: Role.Participant },
    // { meetingId: 2, attendeeId: 15, role: Role.Participant },
    // { meetingId: 2, attendeeId: 16, role: Role.Participant },
    { meetingId: 2, attendeeId: 17, role: Role.Participant },
    { meetingId: 2, attendeeId: 18, role: Role.Participant },
    // { meetingId: 2, attendeeId: 19, role: Role.Participant },
    { meetingId: 2, attendeeId: 20, role: Role.Participant },
    { meetingId: 2, attendeeId: 21, role: Role.Lead },
    { meetingId: 2, attendeeId: 22, role: Role.Lead },
];

const repoName = 'Meeting Attendee Role Repository'
class Repo {
    getByMeetingId(meetingId) {
        const promise = new Promise((resolve, reject) => {
            const attendeeRoles = data.filter(d => d.meetingId === meetingId);
            if (attendeeRoles) {
                resolve(attendeeRoles);
            }
            else {
                reject(Error(`${repoName}: No data using id: ${meetingId}`));
            }
        });

        return promise;
    }
}

export default Repo;