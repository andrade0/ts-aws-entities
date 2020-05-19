import { AwsEcrRepositoryIntterface } from '../interfaces';
import { AwsEcrRepositoryArgs,  AwsEcrRepositoryAttrs } from '.';

export class AwsEcrRepository implements AwsEcrRepositoryIntterface {
  	name: string = 'aws_ecr_repository';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ecr_repository.html';
	groupName: string = 'ECS Resources';
	args: AwsEcrRepositoryArgs;
	attrs: AwsEcrRepositoryAttrs;

}
