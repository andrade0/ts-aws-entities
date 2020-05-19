import { AwsRoute53ZoneAssociationArgsIntterface } from '../interfaces';


export class AwsRoute53ZoneAssociationArgs implements AwsRoute53ZoneAssociationArgsIntterface {
  	zone_id: string;
	vpc_id: string;
	vpc_region?: string;

}
