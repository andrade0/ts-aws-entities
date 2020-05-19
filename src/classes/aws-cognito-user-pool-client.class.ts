import { AwsCognitoUserPoolClientIntterface } from '../interfaces';
import { AwsCognitoUserPoolClientArgs,  AwsCognitoUserPoolClientAttrs } from '.';

export class AwsCognitoUserPoolClient implements AwsCognitoUserPoolClientIntterface {
  	name: string = 'aws_cognito_user_pool_client';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html';
	groupName: string = 'Cognito Resources';
	args: AwsCognitoUserPoolClientArgs;
	attrs: AwsCognitoUserPoolClientAttrs;

}
