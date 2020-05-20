import { AwsInstanceArgsNetworkInterfaceIntterface } from '../interfaces';


export class AwsInstanceArgsNetworkInterface implements AwsInstanceArgsNetworkInterfaceIntterface {
  device_index: string;
  network_interface_id: string;
  delete_on_termination?: string;

}
