import { AwsElasticacheReplicationGroupArgsIntterface } from '../interfaces';
import { AwsElasticacheReplicationGroupArgsPort } from '.';

export class AwsElasticacheReplicationGroupArgs implements AwsElasticacheReplicationGroupArgsIntterface {
  replication_group_id: string;
  replication_group_description: string;
  number_cache_clusters: string;
  node_type: string;
  automatic_failover_enabled?: string;
  auto_minor_version_upgrade?: string;
  availability_zones?: string;
  engine?: string;
  at_rest_encryption_enabled?: string;
  transit_encryption_enabled?: string;
  auth_token?: string;
  engine_version?: string;
  parameter_group_name?: string;
  port?: AwsElasticacheReplicationGroupArgsPort;
  subnet_group_name?: string;
  security_group_names?: string;
  security_group_ids?: string;
  snapshot_arns?: string;
  snapshot_name?: string;
  maintenance_window?: string;
  notification_topic_arn?: string;
  snapshot_window: string;
  snapshot_retention_limit: string;
  apply_immediately?: string;
  tags?: string;
  cluster_mode?: string;

}
