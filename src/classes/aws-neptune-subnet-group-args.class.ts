import { AwsNeptuneSubnetGroupArgsIntterface } from '../interfaces';


export class AwsNeptuneSubnetGroupArgs implements AwsNeptuneSubnetGroupArgsIntterface {
  name: string;
  name_prefix: string;
  description?: string;
  subnet_ids: string;
  tags?: string;

}
