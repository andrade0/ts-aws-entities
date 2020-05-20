import { AwsCloudwatchEventRuleArgsIntterface } from '../interfaces';


export class AwsCloudwatchEventRuleArgs implements AwsCloudwatchEventRuleArgsIntterface {
  name?: string;
  name_prefix?: string;
  schedule_expression: string;
  event_pattern: string;
  description?: string;
  role_arn?: string;
  is_enabled?: string;

}
