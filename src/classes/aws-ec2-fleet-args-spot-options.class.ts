import { AwsEc2FleetArgsSpotOptionsIntterface } from '../interfaces';


export class AwsEc2FleetArgsSpotOptions implements AwsEc2FleetArgsSpotOptionsIntterface {
  	allocation_strategy?: string;
	instance_interruption_behavior?: string;
	instance_pools_to_use_count?: number;

}
