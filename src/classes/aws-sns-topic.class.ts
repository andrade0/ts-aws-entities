import { AwsSnsTopicIntterface } from '../interfaces';
import { AwsSnsTopicArgs, AwsSnsTopicAttrs } from '.';

export class AwsSnsTopic implements AwsSnsTopicIntterface {
  name: string = 'aws_sns_topic';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/sns_topic.html';
  groupName: string = 'SNS Resources';
  args: AwsSnsTopicArgs;
  attrs: AwsSnsTopicAttrs;

}
