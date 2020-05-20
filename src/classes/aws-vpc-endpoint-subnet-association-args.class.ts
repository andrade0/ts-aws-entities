import { AwsVpcEndpointSubnetAssociationArgsIntterface } from '../interfaces';


export class AwsVpcEndpointSubnetAssociationArgs implements AwsVpcEndpointSubnetAssociationArgsIntterface {
  vpc_endpoint_id: string;
  subnet_id: string;
  create: string;
  delete: string;

}
