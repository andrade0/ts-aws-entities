import { AwsDlmLifecyclePolicyArgsPolicyDetailsIntterface, AwsDlmLifecyclePolicyArgsCreateRuleIntterface, AwsDlmLifecyclePolicyArgsRetainRuleIntterface } from '.';

export interface AwsDlmLifecyclePolicyArgsIntterface {
  	description: string;
	execution_role_arn: string;
	policy_details: AwsDlmLifecyclePolicyArgsPolicyDetailsIntterface;
	state?: string;
	copy_tags?: string;
	create_rule: AwsDlmLifecyclePolicyArgsCreateRuleIntterface;
	name: string;
	retain_rule: AwsDlmLifecyclePolicyArgsRetainRuleIntterface;
	tags_to_add?: string;

}
