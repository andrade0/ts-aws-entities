import { AwsEc2FleetArgsLaunchTemplateConfigIntterface } from '../interfaces';


export class AwsEc2FleetArgsLaunchTemplateConfig implements AwsEc2FleetArgsLaunchTemplateConfigIntterface {
  	launch_template_specification: string;
	override?: string;
	availability_zone?: string;
	instance_type?: string;
	max_price?: string;
	priority?: string;
	subnet_id?: string;
	weighted_capacity?: number;

}
