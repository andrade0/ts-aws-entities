import { AwsSnsTopicArgsIntterface, AwsSnsTopicAttrsIntterface } from '.';

export interface AwsSnsTopicIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsSnsTopicArgsIntterface;
  attrs: AwsSnsTopicAttrsIntterface;

}
