import { AwsIamPolicyDocumentArgsIntterface } from '../interfaces';
import { AwsIamPolicyDocumentArgsStatement } from '.';

export class AwsIamPolicyDocumentArgs implements AwsIamPolicyDocumentArgsIntterface {
  	policy_id?: string;
	source_json?: string;
	override_json?: string;
	statement?: AwsIamPolicyDocumentArgsStatement;
	version?: string;
	type: string;
	identifiers: string;

}
