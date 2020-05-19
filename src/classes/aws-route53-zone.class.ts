import { AwsRoute53ZoneIntterface } from '../interfaces';
import { AwsRoute53ZoneArgs,  AwsRoute53ZoneAttrs } from '.';

export class AwsRoute53Zone implements AwsRoute53ZoneIntterface {
  	name: string = 'aws_route53_zone';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/route53_zone.html';
	groupName: string = 'Route53 Resources';
	args: AwsRoute53ZoneArgs;
	attrs: AwsRoute53ZoneAttrs;

}
