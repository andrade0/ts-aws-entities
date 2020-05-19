import { AwsCognitoIdentityPoolArgsIntterface } from '../interfaces';
import { AwsCognitoIdentityPoolArgsCognitoIdentityProviders } from '.';

export class AwsCognitoIdentityPoolArgs implements AwsCognitoIdentityPoolArgsIntterface {
  	identity_pool_name: string;
	allow_unauthenticated_identities: string;
	developer_provider_name?: string;
	cognito_identity_providers?: AwsCognitoIdentityPoolArgsCognitoIdentityProviders;
	openid_connect_provider_arns?: string;
	saml_provider_arns?: string;
	supported_login_providers?: string;

}
