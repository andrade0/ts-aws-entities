import { AwsCloudtrailArgsEventSelectorIntterface } from '.';

export interface AwsCloudtrailArgsIntterface {
  name: string;
  s3_bucket_name: string;
  s3_key_prefix?: string;
  cloud_watch_logs_role_arn?: string;
  cloud_watch_logs_group_arn?: string;
  enable_logging?: string;
  include_global_service_events?: string;
  is_multi_region_trail?: string;
  is_organization_trail?: string;
  sns_topic_name?: string;
  enable_log_file_validation?: string;
  kms_key_id?: string;
  event_selector?: AwsCloudtrailArgsEventSelectorIntterface;
  tags?: string;
  type: string;
  values: string;
  id: string;
  home_region: string;
  arn: string;

}
