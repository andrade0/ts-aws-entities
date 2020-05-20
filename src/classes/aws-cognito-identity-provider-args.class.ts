import { AwsCognitoIdentityProviderArgsIntterface } from '../interfaces';


export class AwsCognitoIdentityProviderArgs implements AwsCognitoIdentityProviderArgsIntterface {
  user_pool_id: string;
  provider_name: string;
  provider_type: string;
  attribute_mapping?: string;
  idp_identifiers?: string;
  provider_details?: string;

}
