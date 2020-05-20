import { AwsDxConnectionIntterface } from '../interfaces';
import { AwsDxConnectionArgs, AwsDxConnectionAttrs } from '.';

export class AwsDxConnection implements AwsDxConnectionIntterface {
  name: string = 'aws_dx_connection';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/dx_connection.html';
  groupName: string = 'Direct Connect Resources';
  args: AwsDxConnectionArgs;
  attrs: AwsDxConnectionAttrs;

}
