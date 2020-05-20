import { AwsElasticacheReplicationGroupIntterface } from '../interfaces';
import { AwsElasticacheReplicationGroupArgs, AwsElasticacheReplicationGroupAttrs } from '.';

export class AwsElasticacheReplicationGroup implements AwsElasticacheReplicationGroupIntterface {
  name: string = 'aws_elasticache_replication_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/elasticache_replication_group.html';
  groupName: string = 'ElastiCache Resources';
  args: AwsElasticacheReplicationGroupArgs;
  attrs: AwsElasticacheReplicationGroupAttrs;

}
