import { AwsEcsServiceArgsNetworkConfigurationIntterface } from '../interfaces';


export class AwsEcsServiceArgsNetworkConfiguration implements AwsEcsServiceArgsNetworkConfigurationIntterface {
  subnets: string;
  security_groups?: string;
  assign_public_ip?: string;

}
