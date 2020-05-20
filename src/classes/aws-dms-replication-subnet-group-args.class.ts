import { AwsDmsReplicationSubnetGroupArgsIntterface } from '../interfaces';


export class AwsDmsReplicationSubnetGroupArgs implements AwsDmsReplicationSubnetGroupArgsIntterface {
  replication_subnet_group_description: string;
  replication_subnet_group_id: string;
  subnet_ids: string;
  tags?: string;

}
