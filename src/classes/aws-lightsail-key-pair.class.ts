import { AwsLightsailKeyPairIntterface } from '../interfaces';
import { AwsLightsailKeyPairArgs,  AwsLightsailKeyPairAttrs } from '.';

export class AwsLightsailKeyPair implements AwsLightsailKeyPairIntterface {
  	name: string = 'aws_lightsail_key_pair';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html';
	groupName: string = 'Lightsail Resources';
	args: AwsLightsailKeyPairArgs;
	attrs: AwsLightsailKeyPairAttrs;

}
