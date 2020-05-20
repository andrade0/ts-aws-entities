import { AwsRdsClusterArgsEngineIntterface, AwsRdsClusterArgsPortIntterface } from '.';

export interface AwsRdsClusterArgsIntterface {
  cluster_identifier: string;
  cluster_identifier_prefix: string;
  database_name?: string;
  deletion_protection?: string;
  master_password: string;
  master_username: string;
  final_snapshot_identifier?: string;
  skip_final_snapshot?: string;
  availability_zones?: string;
  backtrack_window?: string;
  backup_retention_period?: string;
  preferred_backup_window?: string;
  preferred_maintenance_window?: string;
  port?: AwsRdsClusterArgsPortIntterface;
  vpc_security_group_ids?: string;
  snapshot_identifier?: string;
  storage_encrypted?: string;
  replication_source_identifier?: string;
  apply_immediately?: string;
  db_subnet_group_name?: string;
  db_cluster_parameter_group_name?: string;
  kms_key_id?: string;
  iam_roles?: string;
  iam_database_authentication_enabled?: string;
  engine?: AwsRdsClusterArgsEngineIntterface;
  engine_mode?: string;
  engine_version?: string;
  source_region?: string;
  enabled_cloudwatch_logs_exports?: string;
  scaling_configuration?: string;
  tags?: string;

}
