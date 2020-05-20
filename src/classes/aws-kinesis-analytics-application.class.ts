import { AwsKinesisAnalyticsApplicationIntterface } from '../interfaces';
import { AwsKinesisAnalyticsApplicationArgs, AwsKinesisAnalyticsApplicationAttrs } from '.';

export class AwsKinesisAnalyticsApplication implements AwsKinesisAnalyticsApplicationIntterface {
  name: string = 'aws_kinesis_analytics_application';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html';
  groupName: string = 'Kinesis Resources';
  args: AwsKinesisAnalyticsApplicationArgs;
  attrs: AwsKinesisAnalyticsApplicationAttrs;

}
