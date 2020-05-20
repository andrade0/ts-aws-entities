import { AwsOpsworksApplicationArgsAppSourceIntterface } from '../interfaces';


export class AwsOpsworksApplicationArgsAppSource implements AwsOpsworksApplicationArgsAppSourceIntterface {
  type: string;
  url: string;
  username?: string;
  password?: string;
  ssh_key?: string;
  revision?: string;

}
