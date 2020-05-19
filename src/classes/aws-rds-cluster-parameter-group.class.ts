import { AwsRdsClusterParameterGroupIntterface } from '../interfaces';
import { AwsRdsClusterParameterGroupArgs,  AwsRdsClusterParameterGroupAttrs } from '.';

export class AwsRdsClusterParameterGroup implements AwsRdsClusterParameterGroupIntterface {
  	name: string = 'aws_rds_cluster_parameter_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/rds_cluster_parameter_group.html';
	groupName: string = 'RDS Resources';
	args: AwsRdsClusterParameterGroupArgs;
	attrs: AwsRdsClusterParameterGroupAttrs;

}
