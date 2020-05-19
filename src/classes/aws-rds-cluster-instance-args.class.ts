import { AwsRdsClusterInstanceArgsIntterface } from '../interfaces';


export class AwsRdsClusterInstanceArgs implements AwsRdsClusterInstanceArgsIntterface {
  	identifier: string;
	identifier_prefix: string;
	cluster_identifier: string;
	engine?: string;
	engine_version?: string;
	instance_class: string;
	publicly_accessible?: string;
	db_subnet_group_name: string;
	db_parameter_group_name?: string;
	apply_immediately?: string;
	monitoring_role_arn?: string;
	monitoring_interval?: string;
	promotion_tier?: string;
	availability_zone: string;
	preferred_backup_window?: string;
	preferred_maintenance_window?: string;
	auto_minor_version_upgrade?: string;
	performance_insights_enabled?: string;
	performance_insights_kms_key_id?: string;
	copy_tags_to_snapshot: string;
	tags?: string;

}
