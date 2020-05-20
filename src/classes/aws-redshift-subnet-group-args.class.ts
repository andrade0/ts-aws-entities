import { AwsRedshiftSubnetGroupArgsIntterface } from '../interfaces';


export class AwsRedshiftSubnetGroupArgs implements AwsRedshiftSubnetGroupArgsIntterface {
  name: string;
  description?: string;
  subnet_ids: string;
  tags?: string;

}
