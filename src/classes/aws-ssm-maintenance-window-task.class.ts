import { AwsSsmMaintenanceWindowTaskIntterface } from '../interfaces';
import { AwsSsmMaintenanceWindowTaskArgs, AwsSsmMaintenanceWindowTaskAttrs } from '.';

export class AwsSsmMaintenanceWindowTask implements AwsSsmMaintenanceWindowTaskIntterface {
  name: string = 'aws_ssm_maintenance_window_task';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html';
  groupName: string = 'SSM Resources';
  args: AwsSsmMaintenanceWindowTaskArgs;
  attrs: AwsSsmMaintenanceWindowTaskAttrs;

}
