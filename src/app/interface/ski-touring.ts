import { TimeInterval } from "rxjs"

export interface TechnicalInformation {
    starting_altitude: number;
    summit_elevation: number;
    positive_elevation: number;
    negative_elevation: number;
    technical_difficulty: string;
    physical_difficulty: string
}

export interface Itinerary {
    access: string,
    climb: string,
    descent: string
}

export interface SkiTouring {
    id:number;
    date: Date;
    summit_name: string;
    region: string;
    activity_type: string;
    description: string;
    climb_time: TimeInterval<number>;
    descent_time: TimeInterval<number>;
    distance: number;
    itinerary: Itinerary;
    technical_information: TechnicalInformation;
    map: string
    topo_link: string
}

export interface SkiTouringBackendAnswer {
    data: SkiTouring[]
}
