import { AwsCodecommitTriggerIntterface } from '../interfaces';
import { AwsCodecommitTriggerArgs, AwsCodecommitTriggerAttrs } from '.';

export class AwsCodecommitTrigger implements AwsCodecommitTriggerIntterface {
  name: string = 'aws_codecommit_trigger';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/codecommit_trigger.html';
  groupName: string = 'CodeCommit Resources';
  args: AwsCodecommitTriggerArgs;
  attrs: AwsCodecommitTriggerAttrs;

}
