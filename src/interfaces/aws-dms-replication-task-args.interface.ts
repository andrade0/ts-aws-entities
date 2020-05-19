

export interface AwsDmsReplicationTaskArgsIntterface {
  	cdc_start_time?: string;
	migration_type: string;
	replication_instance_arn: string;
	replication_task_id: string;
	replication_task_settings?: string;
	source_endpoint_arn: string;
	table_mappings: string;
	tags?: string;
	target_endpoint_arn: string;

}
