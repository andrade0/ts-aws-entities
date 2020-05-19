import { AwsEc2TransitGatewayIntterface } from '../interfaces';
import { AwsEc2TransitGatewayArgs,  AwsEc2TransitGatewayAttrs } from '.';

export class AwsEc2TransitGateway implements AwsEc2TransitGatewayIntterface {
  	name: string = 'aws_ec2_transit_gateway';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/ec2_transit_gateway.html';
	groupName: string = 'EC2 Resources';
	args: AwsEc2TransitGatewayArgs;
	attrs: AwsEc2TransitGatewayAttrs;

}
