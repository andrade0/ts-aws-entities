import { AwsCognitoUserPoolsIntterface } from '../interfaces';
import { AwsCognitoUserPoolsArgs,  AwsCognitoUserPoolsAttrs } from '.';

export class AwsCognitoUserPools implements AwsCognitoUserPoolsIntterface {
  	name: string = 'aws_cognito_user_pools';
	type: string = 'data_source';
	url: string = 'https://www.terraform.io/docs/providers/aws/d/cognito_user_pools.html';
	groupName: string = 'Data Sources';
	args: AwsCognitoUserPoolsArgs;
	attrs: AwsCognitoUserPoolsAttrs;

}
