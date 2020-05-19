import { AwsRoute53RecordIntterface } from '../interfaces';
import { AwsRoute53RecordArgs,  AwsRoute53RecordAttrs } from '.';

export class AwsRoute53Record implements AwsRoute53RecordIntterface {
  	name: string = 'aws_route53_record';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/route53_record.html';
	groupName: string = 'Route53 Resources';
	args: AwsRoute53RecordArgs;
	attrs: AwsRoute53RecordAttrs;

}
