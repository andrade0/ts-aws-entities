import { AwsEcrLifecyclePolicyArgsIntterface, AwsEcrLifecyclePolicyAttrsIntterface } from '.';

export interface AwsEcrLifecyclePolicyIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsEcrLifecyclePolicyArgsIntterface;
	attrs: AwsEcrLifecyclePolicyAttrsIntterface;

}
