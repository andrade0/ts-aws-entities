import { AwsCodecommitTriggerArgsIntterface, AwsCodecommitTriggerAttrsIntterface } from '.';

export interface AwsCodecommitTriggerIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsCodecommitTriggerArgsIntterface;
  attrs: AwsCodecommitTriggerAttrsIntterface;

}
