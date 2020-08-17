class Model {
    constructor(meetingRepo) {
        this.meetingRepo = meetingRepo;
    }

    // Create:

    // Read:
    async load(meetingId = 1) {
        try {
            const meeting = await this.meetingRepo.getById(meetingId);

            const meetingModel = {
                id: meeting.id,
                title: meeting.title,
                time: meeting.time,
                imageUrl: meeting.imageUrl,
            };

            return meetingModel;
        }
        catch (e) {
            console.error(Error(e.message));
        }
    }

    // Update:
    // Delete:
}

export default Model;