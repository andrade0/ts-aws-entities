import { AwsAlbArgsSubnetMappingIntterface } from '../interfaces';


export class AwsAlbArgsSubnetMapping implements AwsAlbArgsSubnetMappingIntterface {
  	subnet_id: string;
	allocation_id?: string;

}
