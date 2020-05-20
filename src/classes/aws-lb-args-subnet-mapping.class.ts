import { AwsLbArgsSubnetMappingIntterface } from '../interfaces';


export class AwsLbArgsSubnetMapping implements AwsLbArgsSubnetMappingIntterface {
  subnet_id: string;
  allocation_id?: string;

}
