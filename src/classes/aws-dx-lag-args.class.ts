import { AwsDxLagArgsIntterface } from '../interfaces';


export class AwsDxLagArgs implements AwsDxLagArgsIntterface {
  name: string;
  connections_bandwidth: string;
  location: string;
  number_of_connections: string;
  force_destroy: string;
  tags?: string;

}
