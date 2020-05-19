import { AwsRdsGlobalClusterIntterface } from '../interfaces';
import { AwsRdsGlobalClusterArgs,  AwsRdsGlobalClusterAttrs } from '.';

export class AwsRdsGlobalCluster implements AwsRdsGlobalClusterIntterface {
  	name: string = 'aws_rds_global_cluster';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/rds_global_cluster.html';
	groupName: string = 'RDS Resources';
	args: AwsRdsGlobalClusterArgs;
	attrs: AwsRdsGlobalClusterAttrs;

}
