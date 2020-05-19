import { AwsEc2FleetIntterface } from '../interfaces';
import { AwsEc2FleetArgs,  AwsEc2FleetAttrs } from '.';

export class AwsEc2Fleet implements AwsEc2FleetIntterface {
  	name: string = 'aws_ec2_fleet';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ec2_fleet.html';
	groupName: string = 'EC2 Resources';
	args: AwsEc2FleetArgs;
	attrs: AwsEc2FleetAttrs;

}
