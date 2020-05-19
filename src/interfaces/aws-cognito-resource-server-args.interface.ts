import { AwsCognitoResourceServerArgsScopeIntterface } from '.';

export interface AwsCognitoResourceServerArgsIntterface {
  	identifier: string;
	name: string;
	scope?: AwsCognitoResourceServerArgsScopeIntterface;
	scope_identifiers: string;

}
