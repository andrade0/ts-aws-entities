import { AwsCloudfrontDistributionArgsOriginIntterface } from '../interfaces';


export class AwsCloudfrontDistributionArgsOrigin implements AwsCloudfrontDistributionArgsOriginIntterface {
  	custom_origin_config: string;
	domain_name: string;
	custom_header?: string;
	origin_id: string;
	origin_path?: string;
	s3_origin_config: string;
	http_port: string;
	https_port: string;
	origin_protocol_policy: string;
	origin_ssl_protocols: string;
	origin_keepalive_timeout?: string;
	origin_read_timeout?: string;
	origin_access_identity?: string;

}
