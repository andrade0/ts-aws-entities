import { AwsWafIpsetArgsIntterface } from '../interfaces';


export class AwsWafIpsetArgs implements AwsWafIpsetArgsIntterface {
  name: string;
  ip_set_descriptors?: string;
  type: string;
  value: string;

}
