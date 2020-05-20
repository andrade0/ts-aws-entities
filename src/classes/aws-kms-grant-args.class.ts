import { AwsKmsGrantArgsIntterface } from '../interfaces';
import { AwsKmsGrantArgsConstraints } from '.';

export class AwsKmsGrantArgs implements AwsKmsGrantArgsIntterface {
  name: string;
  key_id: string;
  grantee_principal: string;
  operations: string;
  retiree_principal: string;
  constraints: AwsKmsGrantArgsConstraints;
  grant_creation_tokens: string;
  retire_on_delete: string;

}
