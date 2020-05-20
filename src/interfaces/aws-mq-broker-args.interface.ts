import {
  AwsMqBrokerArgsConfigurationIntterface,
  AwsMqBrokerArgsLogsIntterface,
  AwsMqBrokerArgsMaintenanceWindowStartTimeIntterface,
  AwsMqBrokerArgsUserIntterface,
} from '.';

export interface AwsMqBrokerArgsIntterface {
  apply_immediately?: string;
  auto_minor_version_upgrade?: string;
  broker_name: string;
  configuration?: AwsMqBrokerArgsConfigurationIntterface;
  deployment_mode?: string;
  engine_type: string;
  engine_version: string;
  host_instance_type: string;
  publicly_accessible?: string;
  security_groups: string;
  subnet_ids?: string;
  maintenance_window_start_time?: AwsMqBrokerArgsMaintenanceWindowStartTimeIntterface;
  logs?: AwsMqBrokerArgsLogsIntterface;
  user?: AwsMqBrokerArgsUserIntterface;
  tags?: string;

}
