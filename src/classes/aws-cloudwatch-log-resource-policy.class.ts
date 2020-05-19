import { AwsCloudwatchLogResourcePolicyIntterface } from '../interfaces';
import { AwsCloudwatchLogResourcePolicyArgs,  AwsCloudwatchLogResourcePolicyAttrs } from '.';

export class AwsCloudwatchLogResourcePolicy implements AwsCloudwatchLogResourcePolicyIntterface {
  	name: string = 'aws_cloudwatch_log_resource_policy';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_resource_policy.html';
	groupName: string = 'CloudWatch Resources';
	args: AwsCloudwatchLogResourcePolicyArgs;
	attrs: AwsCloudwatchLogResourcePolicyAttrs;

}
