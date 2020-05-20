import { AwsApiGatewayDocumentationPartIntterface } from '../interfaces';
import { AwsApiGatewayDocumentationPartArgs, AwsApiGatewayDocumentationPartAttrs } from '.';

export class AwsApiGatewayDocumentationPart implements AwsApiGatewayDocumentationPartIntterface {
  name: string = 'aws_api_gateway_documentation_part';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html';
  groupName: string = 'API Gateway Resources';
  args: AwsApiGatewayDocumentationPartArgs;
  attrs: AwsApiGatewayDocumentationPartAttrs;

}
