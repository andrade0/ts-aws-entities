import { AwsDocdbSubnetGroupArgsIntterface } from '../interfaces';


export class AwsDocdbSubnetGroupArgs implements AwsDocdbSubnetGroupArgsIntterface {
  name: string;
  name_prefix: string;
  description?: string;
  subnet_ids: string;
  tags?: string;

}
