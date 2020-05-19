import { AwsIamGroupPolicyArgsIntterface } from '../interfaces';


export class AwsIamGroupPolicyArgs implements AwsIamGroupPolicyArgsIntterface {
  	policy: string;
	name?: string;
	name_prefix?: string;
	group: string;

}
