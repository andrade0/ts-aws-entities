import { AwsKeyPairArgsIntterface } from '../interfaces';


export class AwsKeyPairArgs implements AwsKeyPairArgsIntterface {
  	key_name?: string;
	key_name_prefix?: string;
	public_key: string;

}
