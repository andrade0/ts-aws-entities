import { AwsSsmMaintenanceWindowTaskArgsIntterface, AwsSsmMaintenanceWindowTaskAttrsIntterface } from '.';

export interface AwsSsmMaintenanceWindowTaskIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSsmMaintenanceWindowTaskArgsIntterface;
	attrs: AwsSsmMaintenanceWindowTaskAttrsIntterface;

}
