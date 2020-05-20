import { AwsElasticacheSecurityGroupArgsIntterface, AwsElasticacheSecurityGroupAttrsIntterface } from '.';

export interface AwsElasticacheSecurityGroupIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsElasticacheSecurityGroupArgsIntterface;
  attrs: AwsElasticacheSecurityGroupAttrsIntterface;

}
