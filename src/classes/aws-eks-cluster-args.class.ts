import { AwsEksClusterArgsIntterface } from '../interfaces';
import { AwsEksClusterArgsVpcConfig } from '.';

export class AwsEksClusterArgs implements AwsEksClusterArgsIntterface {
  name: string;
  role_arn: string;
  vpc_config: AwsEksClusterArgsVpcConfig;
  version?: string;

}
