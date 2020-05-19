import { AwsEcrLifecyclePolicyIntterface } from '../interfaces';
import { AwsEcrLifecyclePolicyArgs,  AwsEcrLifecyclePolicyAttrs } from '.';

export class AwsEcrLifecyclePolicy implements AwsEcrLifecyclePolicyIntterface {
  	name: string = 'aws_ecr_lifecycle_policy';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ecr_lifecycle_policy.html';
	groupName: string = 'ECS Resources';
	args: AwsEcrLifecyclePolicyArgs;
	attrs: AwsEcrLifecyclePolicyAttrs;

}
