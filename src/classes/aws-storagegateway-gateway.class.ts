import { AwsStoragegatewayGatewayIntterface } from '../interfaces';
import { AwsStoragegatewayGatewayArgs,  AwsStoragegatewayGatewayAttrs } from '.';

export class AwsStoragegatewayGateway implements AwsStoragegatewayGatewayIntterface {
  	name: string = 'aws_storagegateway_gateway';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/storagegateway_gateway.html';
	groupName: string = 'Storage Gateway Resources';
	args: AwsStoragegatewayGatewayArgs;
	attrs: AwsStoragegatewayGatewayAttrs;

}
