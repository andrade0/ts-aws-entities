import { AwsDmsReplicationInstanceIntterface } from '../interfaces';
import { AwsDmsReplicationInstanceArgs,  AwsDmsReplicationInstanceAttrs } from '.';

export class AwsDmsReplicationInstance implements AwsDmsReplicationInstanceIntterface {
  	name: string = 'aws_dms_replication_instance';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html';
	groupName: string = 'Database Migration Service';
	args: AwsDmsReplicationInstanceArgs;
	attrs: AwsDmsReplicationInstanceAttrs;

}
