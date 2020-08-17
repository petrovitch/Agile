class Model {
    constructor(attendeeRoleRepo, attendeeDetailRepo) {
        this.roleRepo = attendeeRoleRepo;
        this.attendeeDetailRepo = attendeeDetailRepo;
    }

    async load(meetingId) {
        const attendees = [];
        const attendeeRoles = await this.roleRepo.getByMeetingId(meetingId);
        for (const attendeeRole of attendeeRoles) {
            const attendee = await this.attendeeDetailRepo
                .getById(attendeeRole.attendeeId);

            attendees.push({
                id: attendeeRole.attendeeId,
                name: attendee.name,
                role: attendeeRole.role
            });
        }

        return attendees;
    }
}

export default Model;