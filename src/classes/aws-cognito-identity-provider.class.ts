import { AwsCognitoIdentityProviderIntterface } from '../interfaces';
import { AwsCognitoIdentityProviderArgs,  AwsCognitoIdentityProviderAttrs } from '.';

export class AwsCognitoIdentityProvider implements AwsCognitoIdentityProviderIntterface {
  	name: string = 'aws_cognito_identity_provider';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html';
	groupName: string = 'Cognito Resources';
	args: AwsCognitoIdentityProviderArgs;
	attrs: AwsCognitoIdentityProviderAttrs;

}
