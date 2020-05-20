import { AwsIotTopicRuleIntterface } from '../interfaces';
import { AwsIotTopicRuleArgs, AwsIotTopicRuleAttrs } from '.';

export class AwsIotTopicRule implements AwsIotTopicRuleIntterface {
  name: string = 'aws_iot_topic_rule';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html';
  groupName: string = 'IoT Resources';
  args: AwsIotTopicRuleArgs;
  attrs: AwsIotTopicRuleAttrs;

}
