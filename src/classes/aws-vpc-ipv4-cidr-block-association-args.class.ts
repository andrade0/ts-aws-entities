import { AwsVpcIpv4CidrBlockAssociationArgsIntterface } from '../interfaces';
import { AwsVpcIpv4CidrBlockAssociationArgsCidrBlock } from '.';

export class AwsVpcIpv4CidrBlockAssociationArgs implements AwsVpcIpv4CidrBlockAssociationArgsIntterface {
  cidr_block: AwsVpcIpv4CidrBlockAssociationArgsCidrBlock;
  vpc_id: string;

}
