import { AwsDocdbClusterArgsIntterface, AwsDocdbClusterAttrsIntterface } from '.';

export interface AwsDocdbClusterIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsDocdbClusterArgsIntterface;
	attrs: AwsDocdbClusterAttrsIntterface;

}
