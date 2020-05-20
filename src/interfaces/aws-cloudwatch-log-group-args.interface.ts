export interface AwsCloudwatchLogGroupArgsIntterface {
  name: string;
  name_prefix: string;
  retention_in_days?: string;
  kms_key_id?: string;
  tags?: string;

}
