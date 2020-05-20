import { AwsEksClusterArgsVpcConfigIntterface } from '.';

export interface AwsEksClusterArgsIntterface {
  name: string;
  role_arn: string;
  vpc_config: AwsEksClusterArgsVpcConfigIntterface;
  version?: string;

}
