import { AwsVpcsIntterface } from '../interfaces';
import { AwsVpcsArgs, AwsVpcsAttrs } from '.';

export class AwsVpcs implements AwsVpcsIntterface {
  name: string = 'aws_vpcs';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/vpcs.html';
  groupName: string = 'Data Sources';
  args: AwsVpcsArgs;
  attrs: AwsVpcsAttrs;

}
