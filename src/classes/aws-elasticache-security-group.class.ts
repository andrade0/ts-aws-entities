import { AwsElasticacheSecurityGroupIntterface } from '../interfaces';
import { AwsElasticacheSecurityGroupArgs, AwsElasticacheSecurityGroupAttrs } from '.';

export class AwsElasticacheSecurityGroup implements AwsElasticacheSecurityGroupIntterface {
  name: string = 'aws_elasticache_security_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/elasticache_security_group.html';
  groupName: string = 'ElastiCache Resources';
  args: AwsElasticacheSecurityGroupArgs;
  attrs: AwsElasticacheSecurityGroupAttrs;

}
