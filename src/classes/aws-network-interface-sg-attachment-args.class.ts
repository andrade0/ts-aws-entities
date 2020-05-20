import { AwsNetworkInterfaceSgAttachmentArgsIntterface } from '../interfaces';


export class AwsNetworkInterfaceSgAttachmentArgs implements AwsNetworkInterfaceSgAttachmentArgsIntterface {
  security_group_id: string;
  network_interface_id: string;

}
