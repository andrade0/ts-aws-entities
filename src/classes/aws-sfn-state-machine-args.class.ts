import { AwsSfnStateMachineArgsIntterface } from '../interfaces';


export class AwsSfnStateMachineArgs implements AwsSfnStateMachineArgsIntterface {
  name: string;
  definition: string;
  role_arn: string;
  tags?: string;

}
