import { AwsAthenaNamedQueryArgsIntterface, AwsAthenaNamedQueryAttrsIntterface } from '.';

export interface AwsAthenaNamedQueryIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsAthenaNamedQueryArgsIntterface;
	attrs: AwsAthenaNamedQueryAttrsIntterface;

}
