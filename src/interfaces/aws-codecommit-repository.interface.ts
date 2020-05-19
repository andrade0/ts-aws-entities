import { AwsCodecommitRepositoryArgsIntterface, AwsCodecommitRepositoryAttrsIntterface } from '.';

export interface AwsCodecommitRepositoryIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCodecommitRepositoryArgsIntterface;
	attrs: AwsCodecommitRepositoryAttrsIntterface;

}
