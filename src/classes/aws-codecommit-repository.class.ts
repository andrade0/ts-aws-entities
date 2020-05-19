import { AwsCodecommitRepositoryIntterface } from '../interfaces';
import { AwsCodecommitRepositoryArgs,  AwsCodecommitRepositoryAttrs } from '.';

export class AwsCodecommitRepository implements AwsCodecommitRepositoryIntterface {
  	name: string = 'aws_codecommit_repository';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html';
	groupName: string = 'CodeCommit Resources';
	args: AwsCodecommitRepositoryArgs;
	attrs: AwsCodecommitRepositoryAttrs;

}
