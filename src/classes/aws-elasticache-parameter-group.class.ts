import { AwsElasticacheParameterGroupIntterface } from '../interfaces';
import { AwsElasticacheParameterGroupArgs, AwsElasticacheParameterGroupAttrs } from '.';

export class AwsElasticacheParameterGroup implements AwsElasticacheParameterGroupIntterface {
  name: string = 'aws_elasticache_parameter_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/elasticache_parameter_group.html';
  groupName: string = 'ElastiCache Resources';
  args: AwsElasticacheParameterGroupArgs;
  attrs: AwsElasticacheParameterGroupAttrs;

}
