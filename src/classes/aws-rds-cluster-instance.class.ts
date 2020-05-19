import { AwsRdsClusterInstanceIntterface } from '../interfaces';
import { AwsRdsClusterInstanceArgs,  AwsRdsClusterInstanceAttrs } from '.';

export class AwsRdsClusterInstance implements AwsRdsClusterInstanceIntterface {
  	name: string = 'aws_rds_cluster_instance';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/rds_cluster_instance.html';
	groupName: string = 'RDS Resources';
	args: AwsRdsClusterInstanceArgs;
	attrs: AwsRdsClusterInstanceAttrs;

}
