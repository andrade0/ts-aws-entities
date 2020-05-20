import { AwsDxLagIntterface } from '../interfaces';
import { AwsDxLagArgs, AwsDxLagAttrs } from '.';

export class AwsDxLag implements AwsDxLagIntterface {
  name: string = 'aws_dx_lag';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/dx_lag.html';
  groupName: string = 'Direct Connect Resources';
  args: AwsDxLagArgs;
  attrs: AwsDxLagAttrs;

}
