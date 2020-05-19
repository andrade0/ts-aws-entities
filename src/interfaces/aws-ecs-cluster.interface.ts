import { AwsEcsClusterArgsIntterface, AwsEcsClusterAttrsIntterface } from '.';

export interface AwsEcsClusterIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsEcsClusterArgsIntterface;
	attrs: AwsEcsClusterAttrsIntterface;

}
