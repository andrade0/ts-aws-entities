import { AwsLbAttrsIntterface } from '../interfaces';


export class AwsLbAttrs implements AwsLbAttrsIntterface {
  id?: string;
  arn?: string;
  arn_suffix?: string;
  dns_name?: string;
  zone_id?: string;

}
