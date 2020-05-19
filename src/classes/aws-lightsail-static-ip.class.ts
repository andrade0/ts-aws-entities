import { AwsLightsailStaticIpIntterface } from '../interfaces';
import { AwsLightsailStaticIpArgs,  AwsLightsailStaticIpAttrs } from '.';

export class AwsLightsailStaticIp implements AwsLightsailStaticIpIntterface {
  	name: string = 'aws_lightsail_static_ip';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip.html';
	groupName: string = 'Lightsail Resources';
	args: AwsLightsailStaticIpArgs;
	attrs: AwsLightsailStaticIpAttrs;

}
