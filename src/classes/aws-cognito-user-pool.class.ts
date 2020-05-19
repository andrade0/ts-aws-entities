import { AwsCognitoUserPoolIntterface } from '../interfaces';
import { AwsCognitoUserPoolArgs,  AwsCognitoUserPoolAttrs } from '.';

export class AwsCognitoUserPool implements AwsCognitoUserPoolIntterface {
  	name: string = 'aws_cognito_user_pool';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html';
	groupName: string = 'Cognito Resources';
	args: AwsCognitoUserPoolArgs;
	attrs: AwsCognitoUserPoolAttrs;

}
