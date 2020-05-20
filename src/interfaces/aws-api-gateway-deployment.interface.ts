import { AwsApiGatewayDeploymentArgsIntterface, AwsApiGatewayDeploymentAttrsIntterface } from '.';

export interface AwsApiGatewayDeploymentIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsApiGatewayDeploymentArgsIntterface;
  attrs: AwsApiGatewayDeploymentAttrsIntterface;

}
