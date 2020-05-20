import { AwsRdsClusterEndpointArgsIntterface, AwsRdsClusterEndpointAttrsIntterface } from '.';

export interface AwsRdsClusterEndpointIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsRdsClusterEndpointArgsIntterface;
  attrs: AwsRdsClusterEndpointAttrsIntterface;

}
