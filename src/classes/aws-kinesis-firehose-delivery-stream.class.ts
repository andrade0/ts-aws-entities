import { AwsKinesisFirehoseDeliveryStreamIntterface } from '../interfaces';
import { AwsKinesisFirehoseDeliveryStreamArgs, AwsKinesisFirehoseDeliveryStreamAttrs } from '.';

export class AwsKinesisFirehoseDeliveryStream implements AwsKinesisFirehoseDeliveryStreamIntterface {
  name: string = 'aws_kinesis_firehose_delivery_stream';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html';
  groupName: string = 'Kinesis Firehose Resources';
  args: AwsKinesisFirehoseDeliveryStreamArgs;
  attrs: AwsKinesisFirehoseDeliveryStreamAttrs;

}
