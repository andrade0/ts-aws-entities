import { AwsCognitoUserPoolClientArgsIntterface } from '../interfaces';


export class AwsCognitoUserPoolClientArgs implements AwsCognitoUserPoolClientArgsIntterface {
  allowed_oauth_flows?: string;
  allowed_oauth_flows_user_pool_client?: string;
  allowed_oauth_scopes?: string;
  callback_urls?: string;
  default_redirect_uri?: string;
  explicit_auth_flows?: string;
  generate_secret?: string;
  logout_urls?: string;
  name: string;
  read_attributes?: string;
  refresh_token_validity?: string;
  supported_identity_providers?: string;
  user_pool_id: string;
  write_attributes?: string;
  id: string;
  client_secret: string;

}
