import { AwsCloudwatchLogStreamIntterface } from '../interfaces';
import { AwsCloudwatchLogStreamArgs, AwsCloudwatchLogStreamAttrs } from '.';

export class AwsCloudwatchLogStream implements AwsCloudwatchLogStreamIntterface {
  name: string = 'aws_cloudwatch_log_stream';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_stream.html';
  groupName: string = 'CloudWatch Resources';
  args: AwsCloudwatchLogStreamArgs;
  attrs: AwsCloudwatchLogStreamAttrs;

}
