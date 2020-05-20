export interface AwsKinesisStreamArgsIntterface {
  name: string;
  shard_count: string;
  retention_period?: string;
  shard_level_metrics?: string;
  encryption_type?: string;
  kms_key_id?: string;
  tags?: string;

}
