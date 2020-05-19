

export interface AwsDocdbClusterArgsIntterface {
  	apply_immediately?: string;
	availability_zones?: string;
	backup_retention_period?: string;
	cluster_identifier_prefix: string;
	cluster_identifier: string;
	db_subnet_group_name?: string;
	enabled_cloudwatch_logs_exports?: string;
	engine_version?: string;
	engine?: string;
	final_snapshot_identifier?: string;
	kms_key_id?: string;
	master_password: string;
	master_username: string;
	port?: string;
	preferred_backup_window?: string;
	skip_final_snapshot?: string;
	snapshot_identifier?: string;
	storage_encrypted?: string;
	tags?: string;
	vpc_security_group_ids?: string;

}
