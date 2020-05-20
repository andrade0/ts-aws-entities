import { AwsCloudwatchLogDestinationPolicyIntterface } from '../interfaces';
import { AwsCloudwatchLogDestinationPolicyArgs, AwsCloudwatchLogDestinationPolicyAttrs } from '.';

export class AwsCloudwatchLogDestinationPolicy implements AwsCloudwatchLogDestinationPolicyIntterface {
  name: string = 'aws_cloudwatch_log_destination_policy';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_destination_policy.html';
  groupName: string = 'CloudWatch Resources';
  args: AwsCloudwatchLogDestinationPolicyArgs;
  attrs: AwsCloudwatchLogDestinationPolicyAttrs;

}
