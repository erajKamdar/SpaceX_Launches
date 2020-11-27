import { Rocket } from './rocket.model.launch';

export interface Launch {
  flight_number: number;
  mission_name: string;
  launch_year: number;
  launch_date_local: any;
  launch_success: boolean;
  rocket: Rocket;
  links: { mission_patch_small: string };
}