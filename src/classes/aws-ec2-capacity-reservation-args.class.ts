import { AwsEc2CapacityReservationArgsIntterface } from '../interfaces';


export class AwsEc2CapacityReservationArgs implements AwsEc2CapacityReservationArgsIntterface {
  	availability_zone: string;
	ebs_optimized?: string;
	end_date?: string;
	end_date_type?: string;
	ephemeral_storage?: string;
	instance_count: string;
	instance_match_criteria?: string;
	instance_platform: string;
	instance_type: string;
	tags?: string;
	tenancy?: string;

}
