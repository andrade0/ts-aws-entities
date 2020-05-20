import { AwsCognitoIdentityPoolRolesAttachmentArgsIntterface } from '../interfaces';
import { AwsCognitoIdentityPoolRolesAttachmentArgsRoleMapping } from '.';

export class AwsCognitoIdentityPoolRolesAttachmentArgs implements AwsCognitoIdentityPoolRolesAttachmentArgsIntterface {
  identity_pool_id: string;
  role_mapping?: AwsCognitoIdentityPoolRolesAttachmentArgsRoleMapping;
  roles: string;
  claim: string;
  match_type: string;
  role_arn: string;
  value: string;

}
