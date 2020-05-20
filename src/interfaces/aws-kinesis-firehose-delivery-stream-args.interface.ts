import {
  AwsKinesisFirehoseDeliveryStreamArgsCloudwatchLoggingOptionsIntterface,
  AwsKinesisFirehoseDeliveryStreamArgsDeserializerIntterface,
  AwsKinesisFirehoseDeliveryStreamArgsKinesisSourceConfigurationIntterface,
  AwsKinesisFirehoseDeliveryStreamArgsNameIntterface,
  AwsKinesisFirehoseDeliveryStreamArgsParametersIntterface,
  AwsKinesisFirehoseDeliveryStreamArgsProcessingConfigurationIntterface,
  AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationIntterface,
  AwsKinesisFirehoseDeliveryStreamArgsS3ConfigurationIntterface,
  AwsKinesisFirehoseDeliveryStreamArgsSerializerIntterface,
} from '.';

export interface AwsKinesisFirehoseDeliveryStreamArgsIntterface {
  name: AwsKinesisFirehoseDeliveryStreamArgsNameIntterface;
  tags?: string;
  kinesis_source_configuration?: AwsKinesisFirehoseDeliveryStreamArgsKinesisSourceConfigurationIntterface;
  destination: string;
  s3_configuration: AwsKinesisFirehoseDeliveryStreamArgsS3ConfigurationIntterface;
  extended_s3_configuration: string;
  redshift_configuration?: AwsKinesisFirehoseDeliveryStreamArgsRedshiftConfigurationIntterface;
  buffering_interval?: string;
  buffering_size?: string;
  domain_arn: string;
  index_name: string;
  index_rotation_period?: string;
  retry_duration?: string;
  role_arn: string;
  s3_backup_mode?: string;
  type_name: string;
  cloudwatch_logging_options?: AwsKinesisFirehoseDeliveryStreamArgsCloudwatchLoggingOptionsIntterface;
  processing_configuration?: AwsKinesisFirehoseDeliveryStreamArgsProcessingConfigurationIntterface;
  hec_acknowledgment_timeout?: string;
  hec_endpoint: string;
  hec_endpoint_type?: string;
  hec_token: string;
  type: string;
  parameters?: AwsKinesisFirehoseDeliveryStreamArgsParametersIntterface;
  deserializer: AwsKinesisFirehoseDeliveryStreamArgsDeserializerIntterface;
  timestamp_formats?: string;
  case_insensitive?: string;
  column_to_json_key_mappings?: string;
  convert_dots_in_json_keys_to_underscores?: string;
  serializer: AwsKinesisFirehoseDeliveryStreamArgsSerializerIntterface;
  block_size_bytes?: string;
  bloom_filter_columns?: string;
  bloom_filter_false_positive_probability?: string;
  compression?: string;
  dictionary_key_threshold?: string;
  enable_padding?: string;
  format_version?: string;
  padding_tolerance?: string;
  row_index_stride?: string;
  stripe_size_bytes?: string;
  enable_dictionary_compression?: string;
  max_padding_bytes?: string;
  page_size_bytes?: string;
  writer_version?: string;
  database_name: string;
  table_name: string;
  catalog_id?: string;
  region?: string;
  version_id?: string;

}
