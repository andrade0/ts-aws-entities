import { AwsOpsworksMysqlLayerIntterface } from '../interfaces';
import { AwsOpsworksMysqlLayerArgs,  AwsOpsworksMysqlLayerAttrs } from '.';

export class AwsOpsworksMysqlLayer implements AwsOpsworksMysqlLayerIntterface {
  	name: string = 'aws_opsworks_mysql_layer';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/opsworks_mysql_layer.html';
	groupName: string = 'OpsWorks Resources';
	args: AwsOpsworksMysqlLayerArgs;
	attrs: AwsOpsworksMysqlLayerAttrs;

}
