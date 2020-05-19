import { AwsDlmLifecyclePolicyIntterface } from '../interfaces';
import { AwsDlmLifecyclePolicyArgs,  AwsDlmLifecyclePolicyAttrs } from '.';

export class AwsDlmLifecyclePolicy implements AwsDlmLifecyclePolicyIntterface {
  	name: string = 'aws_dlm_lifecycle_policy';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html';
	groupName: string = 'Data Lifecycle Manager Resources';
	args: AwsDlmLifecyclePolicyArgs;
	attrs: AwsDlmLifecyclePolicyAttrs;

}
