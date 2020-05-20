import { AwsSsmMaintenanceWindowArgsIntterface, AwsSsmMaintenanceWindowAttrsIntterface } from '.';

export interface AwsSsmMaintenanceWindowIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsSsmMaintenanceWindowArgsIntterface;
  attrs: AwsSsmMaintenanceWindowAttrsIntterface;

}
