import { AwsSesReceiptRuleArgsIntterface } from '../interfaces';
import {
  AwsSesReceiptRuleArgsAddHeaderAction,
  AwsSesReceiptRuleArgsBounceAction,
  AwsSesReceiptRuleArgsLambdaAction,
  AwsSesReceiptRuleArgsS3Action,
  AwsSesReceiptRuleArgsSnsAction,
  AwsSesReceiptRuleArgsStopAction,
  AwsSesReceiptRuleArgsWorkmailAction,
} from '.';

export class AwsSesReceiptRuleArgs implements AwsSesReceiptRuleArgsIntterface {
  name: string;
  rule_set_name: string;
  after?: string;
  enabled?: string;
  recipients?: string;
  scan_enabled?: string;
  tls_policy?: string;
  add_header_action?: AwsSesReceiptRuleArgsAddHeaderAction;
  bounce_action?: AwsSesReceiptRuleArgsBounceAction;
  lambda_action?: AwsSesReceiptRuleArgsLambdaAction;
  s3_action?: AwsSesReceiptRuleArgsS3Action;
  sns_action?: AwsSesReceiptRuleArgsSnsAction;
  stop_action?: AwsSesReceiptRuleArgsStopAction;
  workmail_action?: AwsSesReceiptRuleArgsWorkmailAction;

}
