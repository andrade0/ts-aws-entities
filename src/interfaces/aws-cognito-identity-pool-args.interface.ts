import { AwsCognitoIdentityPoolArgsCognitoIdentityProvidersIntterface } from '.';

export interface AwsCognitoIdentityPoolArgsIntterface {
  identity_pool_name: string;
  allow_unauthenticated_identities: string;
  developer_provider_name?: string;
  cognito_identity_providers?: AwsCognitoIdentityPoolArgsCognitoIdentityProvidersIntterface;
  openid_connect_provider_arns?: string;
  saml_provider_arns?: string;
  supported_login_providers?: string;

}
