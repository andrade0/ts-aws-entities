import { AwsDbSubnetGroupArgsIntterface } from '../interfaces';


export class AwsDbSubnetGroupArgs implements AwsDbSubnetGroupArgsIntterface {
  name: string;
  name_prefix: string;
  description?: string;
  subnet_ids: string;
  tags?: string;

}
