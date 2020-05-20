import {
  AwsSesReceiptRuleArgsAddHeaderActionIntterface,
  AwsSesReceiptRuleArgsBounceActionIntterface,
  AwsSesReceiptRuleArgsLambdaActionIntterface,
  AwsSesReceiptRuleArgsS3ActionIntterface,
  AwsSesReceiptRuleArgsSnsActionIntterface,
  AwsSesReceiptRuleArgsStopActionIntterface,
  AwsSesReceiptRuleArgsWorkmailActionIntterface,
} from '.';

export interface AwsSesReceiptRuleArgsIntterface {
  name: string;
  rule_set_name: string;
  after?: string;
  enabled?: string;
  recipients?: string;
  scan_enabled?: string;
  tls_policy?: string;
  add_header_action?: AwsSesReceiptRuleArgsAddHeaderActionIntterface;
  bounce_action?: AwsSesReceiptRuleArgsBounceActionIntterface;
  lambda_action?: AwsSesReceiptRuleArgsLambdaActionIntterface;
  s3_action?: AwsSesReceiptRuleArgsS3ActionIntterface;
  sns_action?: AwsSesReceiptRuleArgsSnsActionIntterface;
  stop_action?: AwsSesReceiptRuleArgsStopActionIntterface;
  workmail_action?: AwsSesReceiptRuleArgsWorkmailActionIntterface;

}
