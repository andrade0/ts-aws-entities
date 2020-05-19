import { AwsDocdbClusterIntterface } from '../interfaces';
import { AwsDocdbClusterArgs,  AwsDocdbClusterAttrs } from '.';

export class AwsDocdbCluster implements AwsDocdbClusterIntterface {
  	name: string = 'aws_docdb_cluster';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/docdb_cluster.html';
	groupName: string = 'DocumentDB Resources';
	args: AwsDocdbClusterArgs;
	attrs: AwsDocdbClusterAttrs;

}
