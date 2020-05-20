import { AwsSfnStateMachineIntterface } from '../interfaces';
import { AwsSfnStateMachineArgs, AwsSfnStateMachineAttrs } from '.';

export class AwsSfnStateMachine implements AwsSfnStateMachineIntterface {
  name: string = 'aws_sfn_state_machine';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html';
  groupName: string = 'Step Function Resources';
  args: AwsSfnStateMachineArgs;
  attrs: AwsSfnStateMachineAttrs;

}
