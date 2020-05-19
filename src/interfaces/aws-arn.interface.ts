import { AwsArnArgsIntterface, AwsArnAttrsIntterface } from '.';

export interface AwsArnIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsArnArgsIntterface;
	attrs: AwsArnAttrsIntterface;

}
