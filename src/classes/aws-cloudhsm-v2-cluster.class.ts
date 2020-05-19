import { AwsCloudhsmV2ClusterIntterface } from '../interfaces';
import { AwsCloudhsmV2ClusterArgs,  AwsCloudhsmV2ClusterAttrs } from '.';

export class AwsCloudhsmV2Cluster implements AwsCloudhsmV2ClusterIntterface {
  	name: string = 'aws_cloudhsm_v2_cluster';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_cluster.html';
	groupName: string = 'CloudHSM v2 Resources';
	args: AwsCloudhsmV2ClusterArgs;
	attrs: AwsCloudhsmV2ClusterAttrs;

}
