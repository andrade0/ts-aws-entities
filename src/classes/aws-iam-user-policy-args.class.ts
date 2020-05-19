import { AwsIamUserPolicyArgsIntterface } from '../interfaces';


export class AwsIamUserPolicyArgs implements AwsIamUserPolicyArgsIntterface {
  	policy: string;
	name?: string;
	name_prefix: string;
	user: string;

}
