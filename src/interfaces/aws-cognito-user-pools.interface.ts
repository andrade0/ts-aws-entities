import { AwsCognitoUserPoolsArgsIntterface, AwsCognitoUserPoolsAttrsIntterface } from '.';

export interface AwsCognitoUserPoolsIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCognitoUserPoolsArgsIntterface;
	attrs: AwsCognitoUserPoolsAttrsIntterface;

}
