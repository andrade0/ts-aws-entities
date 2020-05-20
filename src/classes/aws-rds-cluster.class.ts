import { AwsRdsClusterIntterface } from '../interfaces';
import { AwsRdsClusterArgs, AwsRdsClusterAttrs } from '.';

export class AwsRdsCluster implements AwsRdsClusterIntterface {
  name: string = 'aws_rds_cluster';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/rds_cluster.html';
  groupName: string = 'RDS Resources';
  args: AwsRdsClusterArgs;
  attrs: AwsRdsClusterAttrs;

}
