import { AwsOpsworksStackArgsCustomCookbooksSourceIntterface } from '../interfaces';


export class AwsOpsworksStackArgsCustomCookbooksSource implements AwsOpsworksStackArgsCustomCookbooksSourceIntterface {
  type: string;
  url: string;
  username?: string;
  password?: string;
  ssh_key?: string;
  revision?: string;

}
