import { AwsDefaultSubnetIntterface } from '../interfaces';
import { AwsDefaultSubnetArgs, AwsDefaultSubnetAttrs } from '.';

export class AwsDefaultSubnet implements AwsDefaultSubnetIntterface {
  name: string = 'aws_default_subnet';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/default_subnet.html';
  groupName: string = 'VPC Resources';
  args: AwsDefaultSubnetArgs;
  attrs: AwsDefaultSubnetAttrs;

}
