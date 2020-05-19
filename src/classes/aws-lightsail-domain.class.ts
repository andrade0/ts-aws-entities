import { AwsLightsailDomainIntterface } from '../interfaces';
import { AwsLightsailDomainArgs,  AwsLightsailDomainAttrs } from '.';

export class AwsLightsailDomain implements AwsLightsailDomainIntterface {
  	name: string = 'aws_lightsail_domain';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/lightsail_domain.html';
	groupName: string = 'Lightsail Resources';
	args: AwsLightsailDomainArgs;
	attrs: AwsLightsailDomainAttrs;

}
