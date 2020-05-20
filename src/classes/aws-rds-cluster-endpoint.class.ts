import { AwsRdsClusterEndpointIntterface } from '../interfaces';
import { AwsRdsClusterEndpointArgs, AwsRdsClusterEndpointAttrs } from '.';

export class AwsRdsClusterEndpoint implements AwsRdsClusterEndpointIntterface {
  name: string = 'aws_rds_cluster_endpoint';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/rds_cluster_endpoint.html';
  groupName: string = 'RDS Resources';
  args: AwsRdsClusterEndpointArgs;
  attrs: AwsRdsClusterEndpointAttrs;

}
