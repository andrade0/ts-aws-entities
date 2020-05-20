import { AwsSubnetIdsIntterface } from '../interfaces';
import { AwsSubnetIdsArgs, AwsSubnetIdsAttrs } from '.';

export class AwsSubnetIds implements AwsSubnetIdsIntterface {
  name: string = 'aws_subnet_ids';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/subnet_ids.html';
  groupName: string = 'Data Sources';
  args: AwsSubnetIdsArgs;
  attrs: AwsSubnetIdsAttrs;

}
