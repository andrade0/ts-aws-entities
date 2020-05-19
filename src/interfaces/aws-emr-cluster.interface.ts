import { AwsEmrClusterArgsIntterface, AwsEmrClusterAttrsIntterface } from '.';

export interface AwsEmrClusterIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsEmrClusterArgsIntterface;
	attrs: AwsEmrClusterAttrsIntterface;

}
