import { AwsCloudwatchLogResourcePolicyArgsIntterface, AwsCloudwatchLogResourcePolicyAttrsIntterface } from '.';

export interface AwsCloudwatchLogResourcePolicyIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCloudwatchLogResourcePolicyArgsIntterface;
	attrs: AwsCloudwatchLogResourcePolicyAttrsIntterface;

}
