import { AwsRdsGlobalClusterArgsIntterface, AwsRdsGlobalClusterAttrsIntterface } from '.';

export interface AwsRdsGlobalClusterIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsRdsGlobalClusterArgsIntterface;
	attrs: AwsRdsGlobalClusterAttrsIntterface;

}
