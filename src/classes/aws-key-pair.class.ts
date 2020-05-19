import { AwsKeyPairIntterface } from '../interfaces';
import { AwsKeyPairArgs,  AwsKeyPairAttrs } from '.';

export class AwsKeyPair implements AwsKeyPairIntterface {
  	name: string = 'aws_key_pair';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/key_pair.html';
	groupName: string = 'EC2 Resources';
	args: AwsKeyPairArgs;
	attrs: AwsKeyPairAttrs;

}
