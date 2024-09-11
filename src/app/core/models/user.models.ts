export interface User {
    name: string;
    phone: string;
    email: string;
    img: string;
    role: string;
    state: boolean;
    google: boolean;
    directory: boolean;
    firstName: string;
    uid: string;
}

export interface AuthResponse {
    header: {
        error: string;
        code: number;
    }[];
    body: User[];
}
