import { AwsCognitoUserPoolDomainArgsIntterface, AwsCognitoUserPoolDomainAttrsIntterface } from '.';

export interface AwsCognitoUserPoolDomainIntterface {
  	name: string;
	type: string;
	url: string;
	groupName: string;
	args: AwsCognitoUserPoolDomainArgsIntterface;
	attrs: AwsCognitoUserPoolDomainAttrsIntterface;

}
