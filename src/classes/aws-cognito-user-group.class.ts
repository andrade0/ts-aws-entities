import { AwsCognitoUserGroupIntterface } from '../interfaces';
import { AwsCognitoUserGroupArgs,  AwsCognitoUserGroupAttrs } from '.';

export class AwsCognitoUserGroup implements AwsCognitoUserGroupIntterface {
  	name: string = 'aws_cognito_user_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html';
	groupName: string = 'Cognito Resources';
	args: AwsCognitoUserGroupArgs;
	attrs: AwsCognitoUserGroupAttrs;

}
