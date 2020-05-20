export interface AwsElasticacheClusterArgsIntterface {
  cluster_id: string;
  replication_group_id?: string;
  engine: string;
  engine_version?: string;
  maintenance_window?: string;
  node_type: string;
  num_cache_nodes: string;
  parameter_group_name: string;
  port?: string;
  subnet_group_name: string;
  security_group_names: string;
  security_group_ids: string;
  apply_immediately?: string;
  snapshot_arns?: string;
  snapshot_name?: string;
  snapshot_window: string;
  snapshot_retention_limit: string;
  notification_topic_arn?: string;
  az_mode: string;
  availability_zone?: string;
  availability_zones: string;
  preferred_availability_zones: string;
  tags?: string;

}
