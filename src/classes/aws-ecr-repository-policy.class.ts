import { AwsEcrRepositoryPolicyIntterface } from '../interfaces';
import { AwsEcrRepositoryPolicyArgs,  AwsEcrRepositoryPolicyAttrs } from '.';

export class AwsEcrRepositoryPolicy implements AwsEcrRepositoryPolicyIntterface {
  	name: string = 'aws_ecr_repository_policy';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ecr_repository_policy.html';
	groupName: string = 'ECS Resources';
	args: AwsEcrRepositoryPolicyArgs;
	attrs: AwsEcrRepositoryPolicyAttrs;

}
