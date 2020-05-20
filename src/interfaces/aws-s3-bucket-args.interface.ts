import {
  AwsS3BucketArgsDefaultRetentionIntterface,
  AwsS3BucketArgsDestinationIntterface,
  AwsS3BucketArgsFilterIntterface,
  AwsS3BucketArgsIdIntterface,
  AwsS3BucketArgsLifecycleRuleIntterface,
  AwsS3BucketArgsLoggingIntterface,
  AwsS3BucketArgsObjectLockConfigurationIntterface,
  AwsS3BucketArgsReplicationConfigurationIntterface,
  AwsS3BucketArgsServerSideEncryptionConfigurationIntterface,
  AwsS3BucketArgsSourceSelectionCriteriaIntterface,
  AwsS3BucketArgsTagsIntterface,
  AwsS3BucketArgsVersioningIntterface,
  AwsS3BucketArgsWebsiteIntterface,
} from '.';

export interface AwsS3BucketArgsIntterface {
  bucket: string;
  bucket_prefix: string;
  acl?: string;
  policy?: string;
  tags?: AwsS3BucketArgsTagsIntterface;
  force_destroy: string;
  website?: AwsS3BucketArgsWebsiteIntterface;
  cors_rule?: string;
  versioning?: AwsS3BucketArgsVersioningIntterface;
  logging?: AwsS3BucketArgsLoggingIntterface;
  lifecycle_rule?: AwsS3BucketArgsLifecycleRuleIntterface;
  acceleration_status?: string;
  region?: string;
  request_payer?: string;
  replication_configuration?: AwsS3BucketArgsReplicationConfigurationIntterface;
  server_side_encryption_configuration?: AwsS3BucketArgsServerSideEncryptionConfigurationIntterface;
  object_lock_configuration?: AwsS3BucketArgsObjectLockConfigurationIntterface;
  allowed_headers?: string;
  allowed_methods: string;
  allowed_origins: string;
  expose_headers?: string;
  max_age_seconds?: string;
  date?: string;
  days?: string;
  expired_object_delete_marker?: string;
  storage_class: string;
  id?: AwsS3BucketArgsIdIntterface;
  priority?: string;
  destination: AwsS3BucketArgsDestinationIntterface;
  source_selection_criteria?: AwsS3BucketArgsSourceSelectionCriteriaIntterface;
  prefix?: string;
  status: string;
  filter?: AwsS3BucketArgsFilterIntterface;
  enabled: boolean;
  apply_server_side_encryption_by_default: string;
  owner: string;
  default_retention: AwsS3BucketArgsDefaultRetentionIntterface;

}
