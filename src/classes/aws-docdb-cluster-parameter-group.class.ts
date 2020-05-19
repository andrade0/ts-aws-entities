import { AwsDocdbClusterParameterGroupIntterface } from '../interfaces';
import { AwsDocdbClusterParameterGroupArgs,  AwsDocdbClusterParameterGroupAttrs } from '.';

export class AwsDocdbClusterParameterGroup implements AwsDocdbClusterParameterGroupIntterface {
  	name: string = 'aws_docdb_cluster_parameter_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/docdb_cluster_parameter_group.html';
	groupName: string = 'DocumentDB Resources';
	args: AwsDocdbClusterParameterGroupArgs;
	attrs: AwsDocdbClusterParameterGroupAttrs;

}
