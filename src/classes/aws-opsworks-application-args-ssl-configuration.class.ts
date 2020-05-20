import { AwsOpsworksApplicationArgsSslConfigurationIntterface } from '../interfaces';


export class AwsOpsworksApplicationArgsSslConfiguration implements AwsOpsworksApplicationArgsSslConfigurationIntterface {
  private_key: string;
  certificate: string;
  chain?: string;

}
