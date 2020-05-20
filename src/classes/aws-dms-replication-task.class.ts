import { AwsDmsReplicationTaskIntterface } from '../interfaces';
import { AwsDmsReplicationTaskArgs, AwsDmsReplicationTaskAttrs } from '.';

export class AwsDmsReplicationTask implements AwsDmsReplicationTaskIntterface {
  name: string = 'aws_dms_replication_task';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/dms_replication_task.html';
  groupName: string = 'Database Migration Service';
  args: AwsDmsReplicationTaskArgs;
  attrs: AwsDmsReplicationTaskAttrs;

}
