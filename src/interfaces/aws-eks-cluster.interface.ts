import { AwsEksClusterArgsIntterface, AwsEksClusterAttrsIntterface } from '.';

export interface AwsEksClusterIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsEksClusterArgsIntterface;
	attrs: AwsEksClusterAttrsIntterface;

}
