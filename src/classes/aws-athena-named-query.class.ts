import { AwsAthenaNamedQueryIntterface } from '../interfaces';
import { AwsAthenaNamedQueryArgs,  AwsAthenaNamedQueryAttrs } from '.';

export class AwsAthenaNamedQuery implements AwsAthenaNamedQueryIntterface {
  	name: string = 'aws_athena_named_query';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/athena_named_query.html';
	groupName: string = 'Athena Resources';
	args: AwsAthenaNamedQueryArgs;
	attrs: AwsAthenaNamedQueryAttrs;

}
