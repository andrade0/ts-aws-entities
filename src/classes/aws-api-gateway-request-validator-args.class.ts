import { AwsApiGatewayRequestValidatorArgsIntterface } from '../interfaces';


export class AwsApiGatewayRequestValidatorArgs implements AwsApiGatewayRequestValidatorArgsIntterface {
  	name: string;
	rest_api_id: string;
	validate_request_body?: boolean;
	validate_request_parameters?: boolean;
	id: string;

}
