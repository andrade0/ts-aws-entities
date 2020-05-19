import { AwsEc2FleetArgsTargetCapacitySpecificationIntterface } from '../interfaces';


export class AwsEc2FleetArgsTargetCapacitySpecification implements AwsEc2FleetArgsTargetCapacitySpecificationIntterface {
  	default_target_capacity_type: string;
	total_target_capacity: string;
	on_demand_target_capacity?: string;
	spot_target_capacity?: string;

}
