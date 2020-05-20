import { AwsCloudwatchLogDestinationIntterface } from '../interfaces';
import { AwsCloudwatchLogDestinationArgs, AwsCloudwatchLogDestinationAttrs } from '.';

export class AwsCloudwatchLogDestination implements AwsCloudwatchLogDestinationIntterface {
  name: string = 'aws_cloudwatch_log_destination';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination.html';
  groupName: string = 'CloudWatch Resources';
  args: AwsCloudwatchLogDestinationArgs;
  attrs: AwsCloudwatchLogDestinationAttrs;

}
