import { AwsAlbIntterface } from '../interfaces';
import { AwsAlbArgs,  AwsAlbAttrs } from '.';

export class AwsAlb implements AwsAlbIntterface {
  	name: string = 'aws_alb';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/lb.html';
	groupName: string = 'EC2 Resources';
	args: AwsAlbArgs;
	attrs: AwsAlbAttrs;

}
