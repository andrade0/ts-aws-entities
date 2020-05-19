import { AwsCognitoIdentityProviderArgsIntterface, AwsCognitoIdentityProviderAttrsIntterface } from '.';

export interface AwsCognitoIdentityProviderIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCognitoIdentityProviderArgsIntterface;
	attrs: AwsCognitoIdentityProviderAttrsIntterface;

}
