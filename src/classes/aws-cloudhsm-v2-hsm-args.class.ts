import { AwsCloudhsmV2HsmArgsIntterface } from '../interfaces';


export class AwsCloudhsmV2HsmArgs implements AwsCloudhsmV2HsmArgsIntterface {
  	cluster_id: string;
	subnet_id?: string;
	availability_zone?: string;
	ip_address?: string;

}
