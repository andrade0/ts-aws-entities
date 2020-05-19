import { AwsDmsEndpointArgsIntterface, AwsDmsEndpointAttrsIntterface } from '.';

export interface AwsDmsEndpointIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsDmsEndpointArgsIntterface;
	attrs: AwsDmsEndpointAttrsIntterface;

}
