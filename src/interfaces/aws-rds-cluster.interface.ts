import { AwsRdsClusterArgsIntterface, AwsRdsClusterAttrsIntterface } from '.';

export interface AwsRdsClusterIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsRdsClusterArgsIntterface;
	attrs: AwsRdsClusterAttrsIntterface;

}
