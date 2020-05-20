import { AwsApiGatewayDeploymentArgsIntterface } from '../interfaces';


export class AwsApiGatewayDeploymentArgs implements AwsApiGatewayDeploymentArgsIntterface {
  rest_api_id: string;
  stage_name: string;
  description?: string;
  stage_description?: string;
  variables?: string;
  id: string;
  invoke_url: string;
  execution_arn: string;
  created_date: string;

}
