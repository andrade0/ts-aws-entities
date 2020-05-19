import { AwsSsmMaintenanceWindowTaskArgsIntterface } from '../interfaces';
import { AwsSsmMaintenanceWindowTaskArgsLoggingInfo,  AwsSsmMaintenanceWindowTaskArgsTaskParameters } from '.';

export class AwsSsmMaintenanceWindowTaskArgs implements AwsSsmMaintenanceWindowTaskArgsIntterface {
  	window_id: string;
	max_concurrency: string;
	max_errors: string;
	task_type: string;
	task_arn: string;
	service_role_arn: string;
	name?: string;
	description?: string;
	targets: string;
	priority?: string;
	logging_info?: AwsSsmMaintenanceWindowTaskArgsLoggingInfo;
	task_parameters?: AwsSsmMaintenanceWindowTaskArgsTaskParameters;

}
