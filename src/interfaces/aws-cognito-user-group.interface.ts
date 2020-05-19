import { AwsCognitoUserGroupArgsIntterface, AwsCognitoUserGroupAttrsIntterface } from '.';

export interface AwsCognitoUserGroupIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCognitoUserGroupArgsIntterface;
	attrs: AwsCognitoUserGroupAttrsIntterface;

}
