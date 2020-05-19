import { AwsLightsailInstanceIntterface } from '../interfaces';
import { AwsLightsailInstanceArgs,  AwsLightsailInstanceAttrs } from '.';

export class AwsLightsailInstance implements AwsLightsailInstanceIntterface {
  	name: string = 'aws_lightsail_instance';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html';
	groupName: string = 'Lightsail Resources';
	args: AwsLightsailInstanceArgs;
	attrs: AwsLightsailInstanceAttrs;

}
