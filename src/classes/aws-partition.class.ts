import { AwsPartitionIntterface } from '../interfaces';
import { AwsPartitionArgs, AwsPartitionAttrs } from '.';

export class AwsPartition implements AwsPartitionIntterface {
  name: string = 'aws_partition';
  type: string = 'data_source';
  url: string = 'https://www.terraform.io/docs/providers/aws/d/partition.html';
  groupName: string = 'Data Sources';
  args: AwsPartitionArgs;
  attrs: AwsPartitionAttrs;

}
