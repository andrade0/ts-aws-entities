import { AwsDefaultVpcIntterface } from '../interfaces';
import { AwsDefaultVpcArgs, AwsDefaultVpcAttrs } from '.';

export class AwsDefaultVpc implements AwsDefaultVpcIntterface {
  name: string = 'aws_default_vpc';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/default_vpc.html';
  groupName: string = 'VPC Resources';
  args: AwsDefaultVpcArgs;
  attrs: AwsDefaultVpcAttrs;

}
