import { AwsKinesisStreamIntterface } from '../interfaces';
import { AwsKinesisStreamArgs, AwsKinesisStreamAttrs } from '.';

export class AwsKinesisStream implements AwsKinesisStreamIntterface {
  name: string = 'aws_kinesis_stream';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html';
  groupName: string = 'Kinesis Resources';
  args: AwsKinesisStreamArgs;
  attrs: AwsKinesisStreamAttrs;

}
