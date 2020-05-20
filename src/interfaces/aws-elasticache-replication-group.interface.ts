import { AwsElasticacheReplicationGroupArgsIntterface, AwsElasticacheReplicationGroupAttrsIntterface } from '.';

export interface AwsElasticacheReplicationGroupIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsElasticacheReplicationGroupArgsIntterface;
  attrs: AwsElasticacheReplicationGroupAttrsIntterface;

}
