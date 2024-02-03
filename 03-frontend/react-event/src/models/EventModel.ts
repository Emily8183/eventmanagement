class EventModel {
    id: number;
    title: string;
    speaker?: string;
    description?: string;
    tickets?: number;
    ticketsAvailable?: number;
    category?: string;
    img?: string;
    //the question mark means the value can be null

    constructor(id: number, title: string, speaker: string, description: string, tickets: number, ticketsAvailable: number, category: string, img: string) {
        this.id = id;
        this.title = title;
        this.speaker = speaker;
        this.description = description;
        this.tickets = tickets;
        this.ticketsAvailable = ticketsAvailable;
        this.category = category;
        this.img = img;
    }
}

export default EventModel;