import { AwsAmiFromInstanceIntterface } from '../interfaces';
import { AwsAmiFromInstanceArgs, AwsAmiFromInstanceAttrs } from '.';

export class AwsAmiFromInstance implements AwsAmiFromInstanceIntterface {
  name: string = 'aws_ami_from_instance';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html';
  groupName: string = 'EC2 Resources';
  args: AwsAmiFromInstanceArgs;
  attrs: AwsAmiFromInstanceAttrs;

}
