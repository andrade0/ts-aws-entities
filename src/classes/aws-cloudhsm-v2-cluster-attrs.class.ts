import { AwsCloudhsmV2ClusterAttrsIntterface } from '../interfaces';


export class AwsCloudhsmV2ClusterAttrs implements AwsCloudhsmV2ClusterAttrsIntterface {
  	cluster_id?: string;
	cluster_state?: string;
	vpc_id?: string;
	security_group_id?: string;
	cluster_certificates?: string;

}
