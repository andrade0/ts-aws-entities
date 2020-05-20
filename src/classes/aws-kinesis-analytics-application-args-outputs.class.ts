import { AwsKinesisAnalyticsApplicationArgsOutputsIntterface } from '../interfaces';


export class AwsKinesisAnalyticsApplicationArgsOutputs implements AwsKinesisAnalyticsApplicationArgsOutputsIntterface {
  name: string;
  schema: string;
  kinesis_firehose?: string;
  kinesis_stream?: string;
  lambda?: string;

}
