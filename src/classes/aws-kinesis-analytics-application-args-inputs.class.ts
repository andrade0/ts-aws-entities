import { AwsKinesisAnalyticsApplicationArgsInputsIntterface } from '../interfaces';


export class AwsKinesisAnalyticsApplicationArgsInputs implements AwsKinesisAnalyticsApplicationArgsInputsIntterface {
  name_prefix: string;
  schema: string;
  kinesis_firehose?: string;
  kinesis_stream?: string;
  parallelism?: string;
  processing_configuration?: string;

}
