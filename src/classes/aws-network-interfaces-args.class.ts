import { AwsNetworkInterfacesArgsIntterface } from '../interfaces';
import { AwsNetworkInterfacesArgsFilter } from '.';

export class AwsNetworkInterfacesArgs implements AwsNetworkInterfacesArgsIntterface {
  tags?: string;
  filter?: AwsNetworkInterfacesArgsFilter;

}
