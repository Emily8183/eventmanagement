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
}