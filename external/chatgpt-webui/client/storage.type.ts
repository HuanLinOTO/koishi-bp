export interface conversation {
    id: string;
    messages: string[];
}
export interface storage {
    conversations: conversation[]
}