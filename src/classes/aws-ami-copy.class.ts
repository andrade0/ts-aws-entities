import { AwsAmiCopyIntterface } from '../interfaces';
import { AwsAmiCopyArgs, AwsAmiCopyAttrs } from '.';

export class AwsAmiCopy implements AwsAmiCopyIntterface {
  name: string = 'aws_ami_copy';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ami_copy.html';
  groupName: string = 'EC2 Resources';
  args: AwsAmiCopyArgs;
  attrs: AwsAmiCopyAttrs;

}
