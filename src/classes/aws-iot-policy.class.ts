import { AwsIotPolicyIntterface } from '../interfaces';
import { AwsIotPolicyArgs,  AwsIotPolicyAttrs } from '.';

export class AwsIotPolicy implements AwsIotPolicyIntterface {
  	name: string = 'aws_iot_policy';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/iot_policy.html';
	groupName: string = 'IoT Resources';
	args: AwsIotPolicyArgs;
	attrs: AwsIotPolicyAttrs;

}
