import { AwsDmsReplicationSubnetGroupIntterface } from '../interfaces';
import { AwsDmsReplicationSubnetGroupArgs,  AwsDmsReplicationSubnetGroupAttrs } from '.';

export class AwsDmsReplicationSubnetGroup implements AwsDmsReplicationSubnetGroupIntterface {
  	name: string = 'aws_dms_replication_subnet_group';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/dms_replication_subnet_group.html';
	groupName: string = 'Database Migration Service';
	args: AwsDmsReplicationSubnetGroupArgs;
	attrs: AwsDmsReplicationSubnetGroupAttrs;

}
