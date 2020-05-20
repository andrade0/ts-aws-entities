import { AwsDocdbClusterInstanceIntterface } from '../interfaces';
import { AwsDocdbClusterInstanceArgs, AwsDocdbClusterInstanceAttrs } from '.';

export class AwsDocdbClusterInstance implements AwsDocdbClusterInstanceIntterface {
  name: string = 'aws_docdb_cluster_instance';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html';
  groupName: string = 'DocumentDB Resources';
  args: AwsDocdbClusterInstanceArgs;
  attrs: AwsDocdbClusterInstanceAttrs;

}
