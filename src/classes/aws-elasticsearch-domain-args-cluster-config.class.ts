import { AwsElasticsearchDomainArgsClusterConfigIntterface } from '../interfaces';


export class AwsElasticsearchDomainArgsClusterConfig implements AwsElasticsearchDomainArgsClusterConfigIntterface {
  	instance_type?: string;
	instance_count?: number;
	dedicated_master_enabled?: string;
	dedicated_master_type?: string;
	dedicated_master_count?: number;
	zone_awareness_enabled?: string;

}
