import { AwsRedshiftClusterArgsIntterface } from '../interfaces';
import { AwsRedshiftClusterArgsLogging,  AwsRedshiftClusterArgsSnapshotCopy } from '.';

export class AwsRedshiftClusterArgs implements AwsRedshiftClusterArgsIntterface {
  	cluster_identifier: string;
	database_name?: string;
	node_type: string;
	cluster_type?: string;
	master_password: string;
	master_username: string;
	cluster_security_groups?: string;
	vpc_security_group_ids?: string;
	cluster_subnet_group_name?: string;
	availability_zone?: string;
	preferred_maintenance_window?: string;
	cluster_parameter_group_name?: string;
	automated_snapshot_retention_period?: string;
	port?: string;
	cluster_version?: string;
	allow_version_upgrade?: string;
	number_of_nodes?: string;
	publicly_accessible?: string;
	encrypted?: string;
	enhanced_vpc_routing?: string;
	kms_key_id?: string;
	elastic_ip?: string;
	skip_final_snapshot?: string;
	final_snapshot_identifier?: string;
	snapshot_identifier?: string;
	snapshot_cluster_identifier?: string;
	owner_account?: string;
	iam_roles?: string;
	logging?: AwsRedshiftClusterArgsLogging;
	snapshot_copy?: AwsRedshiftClusterArgsSnapshotCopy;
	tags?: string;

}
