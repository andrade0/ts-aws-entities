import { AwsInstancesAttrsIntterface } from '../interfaces';


export class AwsInstancesAttrs implements AwsInstancesAttrsIntterface {
  ids?: string;
  private_ips?: string;
  public_ips?: string;

}
