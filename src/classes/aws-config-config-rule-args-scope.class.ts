import { AwsConfigConfigRuleArgsScopeIntterface } from '../interfaces';


export class AwsConfigConfigRuleArgsScope implements AwsConfigConfigRuleArgsScopeIntterface {
  	compliance_resource_id?: string;
	compliance_resource_types?: string;
	tag_key: string;
	tag_value?: string;

}
