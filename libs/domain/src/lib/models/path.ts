import { Point } from './point';
import { Waypoint } from './waypoint';
export class Path {
  id: string;
  pathName: string;
  path: string;
  color: string;
  description: string[];
  points: Point[];
  waypoints: Waypoint[];
}
