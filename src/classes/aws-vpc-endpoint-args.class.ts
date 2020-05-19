import { AwsVpcEndpointArgsIntterface } from '../interfaces';


export class AwsVpcEndpointArgs implements AwsVpcEndpointArgsIntterface {
  	vpc_id: string;
	vpc_endpoint_type?: string;
	service_name: string;
	auto_accept?: string;
	policy?: string;
	route_table_ids?: string;
	subnet_ids?: string;
	security_group_ids?: string;
	private_dns_enabled: string;
	create: string;
	update: string;
	delete: string;

}
