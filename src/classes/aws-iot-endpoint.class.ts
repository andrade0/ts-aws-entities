import { AwsIotEndpointIntterface } from '../interfaces';
import { AwsIotEndpointArgs,  AwsIotEndpointAttrs } from '.';

export class AwsIotEndpoint implements AwsIotEndpointIntterface {
  	name: string = 'aws_iot_endpoint';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/iot_endpoint.html';
	groupName: string = 'Data Sources';
	args: AwsIotEndpointArgs;
	attrs: AwsIotEndpointAttrs;

}
