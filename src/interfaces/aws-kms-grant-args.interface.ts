import { AwsKmsGrantArgsConstraintsIntterface } from '.';

export interface AwsKmsGrantArgsIntterface {
  	name: string;
	key_id: string;
	grantee_principal: string;
	operations: string;
	retiree_principal: string;
	constraints: AwsKmsGrantArgsConstraintsIntterface;
	grant_creation_tokens: string;
	retire_on_delete: string;

}
