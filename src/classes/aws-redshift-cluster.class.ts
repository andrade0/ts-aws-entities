import { AwsRedshiftClusterIntterface } from '../interfaces';
import { AwsRedshiftClusterArgs,  AwsRedshiftClusterAttrs } from '.';

export class AwsRedshiftCluster implements AwsRedshiftClusterIntterface {
  	name: string = 'aws_redshift_cluster';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/redshift_cluster.html';
	groupName: string = 'Redshift Resources';
	args: AwsRedshiftClusterArgs;
	attrs: AwsRedshiftClusterAttrs;

}
