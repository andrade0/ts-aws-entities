import { AwsAppmeshVirtualNodeArgsSpecIntterface } from '../interfaces';


export class AwsAppmeshVirtualNodeArgsSpec implements AwsAppmeshVirtualNodeArgsSpecIntterface {
  backends?: string;
  listener?: string;
  service_discovery?: string;

}
