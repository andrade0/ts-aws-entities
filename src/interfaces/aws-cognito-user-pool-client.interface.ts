import { AwsCognitoUserPoolClientArgsIntterface, AwsCognitoUserPoolClientAttrsIntterface } from '.';

export interface AwsCognitoUserPoolClientIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCognitoUserPoolClientArgsIntterface;
	attrs: AwsCognitoUserPoolClientAttrsIntterface;

}
