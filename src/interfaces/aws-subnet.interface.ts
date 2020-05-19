import { AwsSubnetArgsIntterface, AwsSubnetAttrsIntterface } from '.';

export interface AwsSubnetIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsSubnetArgsIntterface;
	attrs: AwsSubnetAttrsIntterface;

}
