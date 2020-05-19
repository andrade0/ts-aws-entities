import { AwsOpsworksRdsDbInstanceIntterface } from '../interfaces';
import { AwsOpsworksRdsDbInstanceArgs,  AwsOpsworksRdsDbInstanceAttrs } from '.';

export class AwsOpsworksRdsDbInstance implements AwsOpsworksRdsDbInstanceIntterface {
  	name: string = 'aws_opsworks_rds_db_instance';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html';
	groupName: string = 'OpsWorks Resources';
	args: AwsOpsworksRdsDbInstanceArgs;
	attrs: AwsOpsworksRdsDbInstanceAttrs;

}
