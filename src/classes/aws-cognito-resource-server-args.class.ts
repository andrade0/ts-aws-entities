import { AwsCognitoResourceServerArgsIntterface } from '../interfaces';
import { AwsCognitoResourceServerArgsScope } from '.';

export class AwsCognitoResourceServerArgs implements AwsCognitoResourceServerArgsIntterface {
  	identifier: string;
	name: string;
	scope?: AwsCognitoResourceServerArgsScope;
	scope_identifiers: string;

}
