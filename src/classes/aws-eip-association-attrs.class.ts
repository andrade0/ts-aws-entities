import { AwsEipAssociationAttrsIntterface } from '../interfaces';


export class AwsEipAssociationAttrs implements AwsEipAssociationAttrsIntterface {
  association_id?: string;
  allocation_id?: string;
  instance_id?: string;
  network_interface_id?: string;
  private_ip_address?: string;
  public_ip?: string;

}
