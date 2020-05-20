import { AwsConfigConfigRuleArgsScopeIntterface, AwsConfigConfigRuleArgsSourceIntterface } from '.';

export interface AwsConfigConfigRuleArgsIntterface {
  name: string;
  description?: string;
  input_parameters?: string;
  maximum_execution_frequency?: string;
  scope?: AwsConfigConfigRuleArgsScopeIntterface;
  source: AwsConfigConfigRuleArgsSourceIntterface;

}
