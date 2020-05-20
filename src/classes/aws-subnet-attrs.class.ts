import { AwsSubnetAttrsIntterface } from '../interfaces';


export class AwsSubnetAttrs implements AwsSubnetAttrsIntterface {
  id?: string;
  arn?: string;
  ipv6_cidr_block_association_id?: string;
  owner_id?: string;

}
