import { AwsEipArgsIntterface } from '../interfaces';


export class AwsEipArgs implements AwsEipArgsIntterface {
  vpc?: boolean;
  instance?: string;
  network_interface?: string;
  associate_with_private_ip?: string;
  tags?: string;
  public_ipv4_pool?: string;

}
