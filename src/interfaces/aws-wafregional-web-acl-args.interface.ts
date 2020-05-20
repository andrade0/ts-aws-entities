import {
  AwsWafregionalWebAclArgsActionIntterface,
  AwsWafregionalWebAclArgsDefaultActionIntterface,
  AwsWafregionalWebAclArgsLoggingConfigurationIntterface,
} from '.';

export interface AwsWafregionalWebAclArgsIntterface {
  default_action: AwsWafregionalWebAclArgsDefaultActionIntterface;
  metric_name: string;
  name: string;
  logging_configuration?: AwsWafregionalWebAclArgsLoggingConfigurationIntterface;
  rule?: string;
  field_to_match: string;
  data?: string;
  type: string;
  priority: string;
  rule_id: string;
  action?: AwsWafregionalWebAclArgsActionIntterface;
  override_action?: string;

}
