import { AwsApiGatewayBasePathMappingArgsIntterface } from '../interfaces';


export class AwsApiGatewayBasePathMappingArgs implements AwsApiGatewayBasePathMappingArgsIntterface {
  	domain_name: string;
	api_id: string;
	stage_name?: string;
	base_path?: string;

}
