import {
  AwsKinesisAnalyticsApplicationArgsCloudwatchLoggingOptionsIntterface,
  AwsKinesisAnalyticsApplicationArgsCsvIntterface,
  AwsKinesisAnalyticsApplicationArgsInputsIntterface,
  AwsKinesisAnalyticsApplicationArgsJsonIntterface,
  AwsKinesisAnalyticsApplicationArgsLambdaIntterface,
  AwsKinesisAnalyticsApplicationArgsOutputsIntterface,
  AwsKinesisAnalyticsApplicationArgsRecordColumnsIntterface,
  AwsKinesisAnalyticsApplicationArgsRecordFormatIntterface,
  AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesIntterface,
} from '.';

export interface AwsKinesisAnalyticsApplicationArgsIntterface {
  name: string;
  code?: string;
  description?: string;
  cloudwatch_logging_options?: AwsKinesisAnalyticsApplicationArgsCloudwatchLoggingOptionsIntterface;
  inputs?: AwsKinesisAnalyticsApplicationArgsInputsIntterface;
  outputs?: AwsKinesisAnalyticsApplicationArgsOutputsIntterface;
  reference_data_sources?: AwsKinesisAnalyticsApplicationArgsReferenceDataSourcesIntterface;
  resource_arn: string;
  role_arn: string;
  record_format_type: string;
  record_columns: AwsKinesisAnalyticsApplicationArgsRecordColumnsIntterface;
  record_format: AwsKinesisAnalyticsApplicationArgsRecordFormatIntterface;
  record_encoding?: string;
  count: string;
  lambda: AwsKinesisAnalyticsApplicationArgsLambdaIntterface;
  csv?: AwsKinesisAnalyticsApplicationArgsCsvIntterface;
  json?: AwsKinesisAnalyticsApplicationArgsJsonIntterface;
  bucket_arn: string;
  file_key: string;

}
