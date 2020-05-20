import { AwsInstanceIntterface } from '../interfaces';
import { AwsInstanceArgs, AwsInstanceAttrs } from '.';

export class AwsInstance implements AwsInstanceIntterface {
  name: string = 'aws_instance';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/instance.html';
  groupName: string = 'EC2 Resources';
  args: AwsInstanceArgs;
  attrs: AwsInstanceAttrs;

}
