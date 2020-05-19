import { AwsDaxClusterArgsServerSideEncryptionIntterface } from '.';

export interface AwsDaxClusterArgsIntterface {
  	cluster_name: string;
	iam_role_arn: string;
	node_type: string;
	replication_factor: string;
	availability_zones?: string;
	description?: string;
	notification_topic_arn?: string;
	parameter_group_name?: string;
	maintenance_window?: string;
	security_group_ids?: string;
	server_side_encryption?: AwsDaxClusterArgsServerSideEncryptionIntterface;
	subnet_group_name?: string;
	tags?: string;

}
