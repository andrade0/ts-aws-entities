import { AwsSsmActivationIntterface } from '../interfaces';
import { AwsSsmActivationArgs, AwsSsmActivationAttrs } from '.';

export class AwsSsmActivation implements AwsSsmActivationIntterface {
  name: string = 'aws_ssm_activation';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ssm_activation.html';
  groupName: string = 'SSM Resources';
  args: AwsSsmActivationArgs;
  attrs: AwsSsmActivationAttrs;

}
