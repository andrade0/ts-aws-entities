import { AwsDmsEndpointIntterface } from '../interfaces';
import { AwsDmsEndpointArgs,  AwsDmsEndpointAttrs } from '.';

export class AwsDmsEndpoint implements AwsDmsEndpointIntterface {
  	name: string = 'aws_dms_endpoint';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/dms_endpoint.html';
	groupName: string = 'Database Migration Service';
	args: AwsDmsEndpointArgs;
	attrs: AwsDmsEndpointAttrs;

}
