import { AwsSsmMaintenanceWindowIntterface } from '../interfaces';
import { AwsSsmMaintenanceWindowArgs, AwsSsmMaintenanceWindowAttrs } from '.';

export class AwsSsmMaintenanceWindow implements AwsSsmMaintenanceWindowIntterface {
  name: string = 'aws_ssm_maintenance_window';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window.html';
  groupName: string = 'SSM Resources';
  args: AwsSsmMaintenanceWindowArgs;
  attrs: AwsSsmMaintenanceWindowAttrs;

}
