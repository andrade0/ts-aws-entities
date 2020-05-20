import { AwsGlueTriggerArgsIntterface, AwsGlueTriggerAttrsIntterface } from '.';

export interface AwsGlueTriggerIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsGlueTriggerArgsIntterface;
  attrs: AwsGlueTriggerAttrsIntterface;

}
