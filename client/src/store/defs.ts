export interface Action {
    type: string;
    payload?: any;
}

export interface User {
    fname: string;
    lname: string;
}

export interface Location {
    lon: number;
    lat: number;
}

export interface Infection {
    location: Location;
    datetime: string;
}

export interface State {
    user?: User | null;
    isLoading: boolean;
    isError: boolean;
    infections?: Array<Infection>;
    selectedInfection?: number | null;
}