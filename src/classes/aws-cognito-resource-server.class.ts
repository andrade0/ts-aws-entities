import { AwsCognitoResourceServerIntterface } from '../interfaces';
import { AwsCognitoResourceServerArgs, AwsCognitoResourceServerAttrs } from '.';

export class AwsCognitoResourceServer implements AwsCognitoResourceServerIntterface {
  name: string = 'aws_cognito_resource_server';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html';
  groupName: string = 'Cognito Resources';
  args: AwsCognitoResourceServerArgs;
  attrs: AwsCognitoResourceServerAttrs;

}
