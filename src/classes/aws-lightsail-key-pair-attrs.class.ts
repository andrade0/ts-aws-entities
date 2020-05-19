import { AwsLightsailKeyPairAttrsIntterface } from '../interfaces';


export class AwsLightsailKeyPairAttrs implements AwsLightsailKeyPairAttrsIntterface {
  	id?: string;
	arn?: string;
	fingerprint?: string;
	public_key?: string;
	private_key?: string;
	encrypted_private_key?: string;
	encrypted_fingerprint?: string;

}
