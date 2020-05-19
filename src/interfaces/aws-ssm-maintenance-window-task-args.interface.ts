import { AwsSsmMaintenanceWindowTaskArgsLoggingInfoIntterface, AwsSsmMaintenanceWindowTaskArgsTaskParametersIntterface } from '.';

export interface AwsSsmMaintenanceWindowTaskArgsIntterface {
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
	logging_info?: AwsSsmMaintenanceWindowTaskArgsLoggingInfoIntterface;
	task_parameters?: AwsSsmMaintenanceWindowTaskArgsTaskParametersIntterface;

}
