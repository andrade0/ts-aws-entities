import { AwsDaxSubnetGroupArgsIntterface } from '../interfaces';


export class AwsDaxSubnetGroupArgs implements AwsDaxSubnetGroupArgsIntterface {
  name: string;
  description?: string;
  subnet_ids: string;

}
