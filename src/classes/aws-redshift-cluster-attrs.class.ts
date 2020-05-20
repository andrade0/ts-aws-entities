import { AwsRedshiftClusterAttrsIntterface } from '../interfaces';


export class AwsRedshiftClusterAttrs implements AwsRedshiftClusterAttrsIntterface {
  id?: string;
  cluster_identifier?: string;
  cluster_type?: string;
  node_type?: string;
  database_name?: string;
  availability_zone?: string;
  automated_snapshot_retention_period?: string;
  preferred_maintenance_window?: string;
  endpoint?: string;
  encrypted?: string;
  cluster_security_groups?: string;
  vpc_security_group_ids?: string;
  dns_name?: string;
  port?: string;
  cluster_version?: string;
  cluster_parameter_group_name?: string;
  cluster_subnet_group_name?: string;
  cluster_public_key?: string;
  cluster_revision_number?: string;

}
