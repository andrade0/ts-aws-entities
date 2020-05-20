import { AwsEipIntterface } from '../interfaces';
import { AwsEipArgs, AwsEipAttrs } from '.';

export class AwsEip implements AwsEipIntterface {
  name: string = 'aws_eip';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/eip.html';
  groupName: string = 'EC2 Resources';
  args: AwsEipArgs;
  attrs: AwsEipAttrs;

}
