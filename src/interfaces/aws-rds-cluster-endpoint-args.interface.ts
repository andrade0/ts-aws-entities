export interface AwsRdsClusterEndpointArgsIntterface {
  cluster_identifier: string;
  cluster_endpoint_identifier: string;
  custom_endpoint_type: string;
  static_members?: string;
  excluded_members?: string;

}
