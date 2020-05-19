import { AwsIamPolicyDocumentArgsStatementIntterface } from '.';

export interface AwsIamPolicyDocumentArgsIntterface {
  	policy_id?: string;
	source_json?: string;
	override_json?: string;
	statement?: AwsIamPolicyDocumentArgsStatementIntterface;
	version?: string;
	type: string;
	identifiers: string;

}
