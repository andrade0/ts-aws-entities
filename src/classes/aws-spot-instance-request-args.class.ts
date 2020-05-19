import { AwsSpotInstanceRequestArgsIntterface } from '../interfaces';


export class AwsSpotInstanceRequestArgs implements AwsSpotInstanceRequestArgsIntterface {
  	spot_price: string;
	wait_for_fulfillment: string;
	spot_type: string;
	launch_group?: string;
	block_duration_minutes?: string;
	instance_interruption_behaviour?: string;
	valid_until?: string;
	valid_from?: string;
	tags?: string;
	create: string;
	delete: string;

}
