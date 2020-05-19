import { AwsRdsClusterAttrsIntterface } from '../interfaces';


export class AwsRdsClusterAttrs implements AwsRdsClusterAttrsIntterface {
  	arn?: string;
	id?: string;
	cluster_identifier?: string;
	cluster_resource_id?: string;
	cluster_members?: string;
	allocated_storage?: string;
	availability_zones?: string;
	backup_retention_period?: string;
	preferred_backup_window?: string;
	preferred_maintenance_window?: string;
	endpoint?: string;
	reader_endpoint?: string;
	engine?: string;
	engine_version?: string;
	maintenance_window?: string;
	database_name?: string;
	port?: string;
	status?: string;
	master_username?: string;
	storage_encrypted?: string;
	replication_source_identifier?: string;
	hosted_zone_id?: string;

}
