import { AwsRegionArgsIntterface, AwsRegionAttrsIntterface } from '.';

export interface AwsRegionIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsRegionArgsIntterface;
	attrs: AwsRegionAttrsIntterface;

}
