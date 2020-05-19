import { AwsSpotInstanceRequestIntterface } from '../interfaces';
import { AwsSpotInstanceRequestArgs,  AwsSpotInstanceRequestAttrs } from '.';

export class AwsSpotInstanceRequest implements AwsSpotInstanceRequestIntterface {
  	name: string = 'aws_spot_instance_request';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/spot_instance_request.html';
	groupName: string = 'EC2 Resources';
	args: AwsSpotInstanceRequestArgs;
	attrs: AwsSpotInstanceRequestAttrs;

}
