export interface AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationIntterface {
  cluster_jdbcurl: string;
  username: string;
  password: string;
  retry_duration?: string;
  role_arn: string;
  s3_backup_mode?: string;
  s3_backup_configuration?: string;
  data_table_name: string;
  copy_options?: string;
  data_table_columns?: string;
  cloudwatch_logging_options?: string;
  processing_configuration?: string;

}
