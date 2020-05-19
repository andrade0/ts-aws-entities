import { AwsKmsAliasArgsIntterface } from '../interfaces';


export class AwsKmsAliasArgs implements AwsKmsAliasArgsIntterface {
  	name?: string;
	name_prefix?: string;
	target_key_id: string;

}
