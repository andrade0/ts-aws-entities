import { AwsElasticacheClusterIntterface } from '../interfaces';
import { AwsElasticacheClusterArgs, AwsElasticacheClusterAttrs } from '.';

export class AwsElasticacheCluster implements AwsElasticacheClusterIntterface {
  name: string = 'aws_elasticache_cluster';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html';
  groupName: string = 'ElastiCache Resources';
  args: AwsElasticacheClusterArgs;
  attrs: AwsElasticacheClusterAttrs;

}
