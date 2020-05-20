import { AwsApiGatewayDocumentationVersionIntterface } from '../interfaces';
import { AwsApiGatewayDocumentationVersionArgs, AwsApiGatewayDocumentationVersionAttrs } from '.';

export class AwsApiGatewayDocumentationVersion implements AwsApiGatewayDocumentationVersionIntterface {
  name: string = 'aws_api_gateway_documentation_version';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_version.html';
  groupName: string = 'API Gateway Resources';
  args: AwsApiGatewayDocumentationVersionArgs;
  attrs: AwsApiGatewayDocumentationVersionAttrs;

}
