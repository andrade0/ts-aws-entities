import { AwsConfigConfigRuleArgsIntterface } from '../interfaces';
import { AwsConfigConfigRuleArgsScope, AwsConfigConfigRuleArgsSource } from '.';

export class AwsConfigConfigRuleArgs implements AwsConfigConfigRuleArgsIntterface {
  name: string;
  description?: string;
  input_parameters?: string;
  maximum_execution_frequency?: string;
  scope?: AwsConfigConfigRuleArgsScope;
  source: AwsConfigConfigRuleArgsSource;

}
