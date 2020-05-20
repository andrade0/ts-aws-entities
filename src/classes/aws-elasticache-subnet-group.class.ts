import { AwsElasticacheSubnetGroupIntterface } from '../interfaces';
import { AwsElasticacheSubnetGroupArgs, AwsElasticacheSubnetGroupAttrs } from '.';

export class AwsElasticacheSubnetGroup implements AwsElasticacheSubnetGroupIntterface {
  name: string = 'aws_elasticache_subnet_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/elasticache_subnet_group.html';
  groupName: string = 'ElastiCache Resources';
  args: AwsElasticacheSubnetGroupArgs;
  attrs: AwsElasticacheSubnetGroupAttrs;

}
