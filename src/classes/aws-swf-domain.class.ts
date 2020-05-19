import { AwsSwfDomainIntterface } from '../interfaces';
import { AwsSwfDomainArgs,  AwsSwfDomainAttrs } from '.';

export class AwsSwfDomain implements AwsSwfDomainIntterface {
  	name: string = 'aws_swf_domain';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/swf_domain.html';
	groupName: string = 'SWF Resources';
	args: AwsSwfDomainArgs;
	attrs: AwsSwfDomainAttrs;

}
