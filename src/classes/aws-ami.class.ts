import { AwsAmiIntterface } from '../interfaces';
import { AwsAmiArgs,  AwsAmiAttrs } from '.';

export class AwsAmi implements AwsAmiIntterface {
  	name: string = 'aws_ami';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ami.html';
	groupName: string = 'EC2 Resources';
	args: AwsAmiArgs;
	attrs: AwsAmiAttrs;

}
