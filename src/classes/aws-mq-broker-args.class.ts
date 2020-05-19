import { AwsMqBrokerArgsIntterface } from '../interfaces';
import { AwsMqBrokerArgsConfiguration,  AwsMqBrokerArgsMaintenanceWindowStartTime,  AwsMqBrokerArgsLogs,  AwsMqBrokerArgsUser } from '.';

export class AwsMqBrokerArgs implements AwsMqBrokerArgsIntterface {
  	apply_immediately?: string;
	auto_minor_version_upgrade?: string;
	broker_name: string;
	configuration?: AwsMqBrokerArgsConfiguration;
	deployment_mode?: string;
	engine_type: string;
	engine_version: string;
	host_instance_type: string;
	publicly_accessible?: string;
	security_groups: string;
	subnet_ids?: string;
	maintenance_window_start_time?: AwsMqBrokerArgsMaintenanceWindowStartTime;
	logs?: AwsMqBrokerArgsLogs;
	user?: AwsMqBrokerArgsUser;
	tags?: string;

}
