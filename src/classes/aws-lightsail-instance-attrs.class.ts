import { AwsLightsailInstanceAttrsIntterface } from '../interfaces';


export class AwsLightsailInstanceAttrs implements AwsLightsailInstanceAttrsIntterface {
  	id?: string;
	arn?: string;
	availability_zone?: string;
	blueprint_id?: string;
	bundle_id?: string;
	key_pair_name?: string;
	user_data?: string;

}
