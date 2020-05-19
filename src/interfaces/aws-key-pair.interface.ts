import { AwsKeyPairArgsIntterface, AwsKeyPairAttrsIntterface } from '.';

export interface AwsKeyPairIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsKeyPairArgsIntterface;
	attrs: AwsKeyPairAttrsIntterface;

}
