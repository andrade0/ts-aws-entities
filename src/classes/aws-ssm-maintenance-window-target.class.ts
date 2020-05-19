import { AwsSsmMaintenanceWindowTargetIntterface } from '../interfaces';
import { AwsSsmMaintenanceWindowTargetArgs,  AwsSsmMaintenanceWindowTargetAttrs } from '.';

export class AwsSsmMaintenanceWindowTarget implements AwsSsmMaintenanceWindowTargetIntterface {
  	name: string = 'aws_ssm_maintenance_window_target';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html';
	groupName: string = 'SSM Resources';
	args: AwsSsmMaintenanceWindowTargetArgs;
	attrs: AwsSsmMaintenanceWindowTargetAttrs;

}
