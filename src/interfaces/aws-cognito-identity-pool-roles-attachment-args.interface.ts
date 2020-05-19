import { AwsCognitoIdentityPoolRolesAttachmentArgsRoleMappingIntterface } from '.';

export interface AwsCognitoIdentityPoolRolesAttachmentArgsIntterface {
  	identity_pool_id: string;
	role_mapping?: AwsCognitoIdentityPoolRolesAttachmentArgsRoleMappingIntterface;
	roles: string;
	claim: string;
	match_type: string;
	role_arn: string;
	value: string;

}
