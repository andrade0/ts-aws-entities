import { AwsCloudwatchLogGroupIntterface } from '../interfaces';
import { AwsCloudwatchLogGroupArgs, AwsCloudwatchLogGroupAttrs } from '.';

export class AwsCloudwatchLogGroup implements AwsCloudwatchLogGroupIntterface {
  name: string = 'aws_cloudwatch_log_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_group.html';
  groupName: string = 'CloudWatch Resources';
  args: AwsCloudwatchLogGroupArgs;
  attrs: AwsCloudwatchLogGroupAttrs;

}
