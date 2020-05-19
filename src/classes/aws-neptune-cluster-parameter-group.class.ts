import { AwsNeptuneClusterParameterGroupIntterface } from '../interfaces';
import { AwsNeptuneClusterParameterGroupArgs,  AwsNeptuneClusterParameterGroupAttrs } from '.';

export class AwsNeptuneClusterParameterGroup implements AwsNeptuneClusterParameterGroupIntterface {
  	name: string = 'aws_neptune_cluster_parameter_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/neptune_cluster_parameter_group.html';
	groupName: string = 'Neptune Resources';
	args: AwsNeptuneClusterParameterGroupArgs;
	attrs: AwsNeptuneClusterParameterGroupAttrs;

}
