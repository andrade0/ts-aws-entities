import { AwsCognitoIdentityPoolIntterface } from '../interfaces';
import { AwsCognitoIdentityPoolArgs, AwsCognitoIdentityPoolAttrs } from '.';

export class AwsCognitoIdentityPool implements AwsCognitoIdentityPoolIntterface {
  name: string = 'aws_cognito_identity_pool';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html';
  groupName: string = 'Cognito Resources';
  args: AwsCognitoIdentityPoolArgs;
  attrs: AwsCognitoIdentityPoolAttrs;

}
