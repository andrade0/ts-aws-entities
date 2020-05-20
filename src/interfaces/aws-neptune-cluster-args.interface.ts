export interface AwsNeptuneClusterArgsIntterface {
  apply_immediately?: string;
  availability_zones?: string;
  backup_retention_period?: string;
  cluster_identifier: string;
  cluster_identifier_prefix: string;
  engine?: string;
  engine_version?: string;
  final_snapshot_identifier?: string;
  iam_roles?: string;
  iam_database_authentication_enabled?: string;
  kms_key_arn?: string;
  neptune_subnet_group_name?: string;
  neptune_cluster_parameter_group_name?: string;
  preferred_backup_window?: string;
  preferred_maintenance_window?: string;
  port?: string;
  replication_source_identifier?: string;
  skip_final_snapshot?: string;
  snapshot_identifier?: string;
  storage_encrypted?: string;
  tags?: string;
  vpc_security_group_ids?: string;

}
