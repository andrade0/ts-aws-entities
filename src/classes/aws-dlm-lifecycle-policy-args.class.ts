import { AwsDlmLifecyclePolicyArgsIntterface } from '../interfaces';
import { AwsDlmLifecyclePolicyArgsPolicyDetails,  AwsDlmLifecyclePolicyArgsCreateRule,  AwsDlmLifecyclePolicyArgsRetainRule } from '.';

export class AwsDlmLifecyclePolicyArgs implements AwsDlmLifecyclePolicyArgsIntterface {
  	description: string;
	execution_role_arn: string;
	policy_details: AwsDlmLifecyclePolicyArgsPolicyDetails;
	state?: string;
	copy_tags?: string;
	create_rule: AwsDlmLifecyclePolicyArgsCreateRule;
	name: string;
	retain_rule: AwsDlmLifecyclePolicyArgsRetainRule;
	tags_to_add?: string;

}
