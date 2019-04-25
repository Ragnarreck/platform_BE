export interface UserScheme {
    _id: string;
    name: string;
    email: string;
    password: string;
    registration_date: string;
    skills: { name: string; level: number; }[];
}
