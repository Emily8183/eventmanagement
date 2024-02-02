class EventModel {
    id: number;
    title: string;
    speaker?: string;
    description?: string;
    seats?: number;
    seatsAvailable?: number;
    category?: string;
    img?: string;
    //the question mark means the value can be null

    constructor(id: number, title: string, speaker: string, description: string, seats: number, seatsAvailable: number, category: string, img: string) {
        this.id = id;
        this.title = title;
        this.speaker = speaker;
        this.description = description;
        this.seats = seats;
        this.seatsAvailable = seatsAvailable;
        this.category = category;
        this.img = img;
}