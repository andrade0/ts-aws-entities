import { AwsCloudwatchLogSubscriptionFilterIntterface } from '../interfaces';
import { AwsCloudwatchLogSubscriptionFilterArgs, AwsCloudwatchLogSubscriptionFilterAttrs } from '.';

export class AwsCloudwatchLogSubscriptionFilter implements AwsCloudwatchLogSubscriptionFilterIntterface {
  name: string = 'aws_cloudwatch_log_subscription_filter';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter.html';
  groupName: string = 'CloudWatch Resources';
  args: AwsCloudwatchLogSubscriptionFilterArgs;
  attrs: AwsCloudwatchLogSubscriptionFilterAttrs;

}
