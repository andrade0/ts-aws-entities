import { AwsKinesisAnalyticsApplicationArgsIntterface } from '../interfaces';
import {
  AwsKinesisAnalyticsApplicationArgsCloudwatchLoggingOptions,
  AwsKinesisAnalyticsApplicationArgsCsv,
  AwsKinesisAnalyticsApplicationArgsInputs,
  AwsKinesisAnalyticsApplicationArgsJson,
  AwsKinesisAnalyticsApplicationArgsLambda,
  AwsKinesisAnalyticsApplicationArgsOutputs,
  AwsKinesisAnalyticsApplicationArgsRecordColumns,
  AwsKinesisAnalyticsApplicationArgsRecordFormat,
  AwsKinesisAnalyticsApplicationArgsReferenceDataSources,
} from '.';

export class AwsKinesisAnalyticsApplicationArgs implements AwsKinesisAnalyticsApplicationArgsIntterface {
  name: string;
  code?: string;
  description?: string;
  cloudwatch_logging_options?: AwsKinesisAnalyticsApplicationArgsCloudwatchLoggingOptions;
  inputs?: AwsKinesisAnalyticsApplicationArgsInputs;
  outputs?: AwsKinesisAnalyticsApplicationArgsOutputs;
  reference_data_sources?: AwsKinesisAnalyticsApplicationArgsReferenceDataSources;
  resource_arn: string;
  role_arn: string;
  record_format_type: string;
  record_columns: AwsKinesisAnalyticsApplicationArgsRecordColumns;
  record_format: AwsKinesisAnalyticsApplicationArgsRecordFormat;
  record_encoding?: string;
  count: string;
  lambda: AwsKinesisAnalyticsApplicationArgsLambda;
  csv?: AwsKinesisAnalyticsApplicationArgsCsv;
  json?: AwsKinesisAnalyticsApplicationArgsJson;
  bucket_arn: string;
  file_key: string;

}
