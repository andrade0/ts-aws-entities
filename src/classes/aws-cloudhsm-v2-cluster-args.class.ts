import { AwsCloudhsmV2ClusterArgsIntterface } from '../interfaces';


export class AwsCloudhsmV2ClusterArgs implements AwsCloudhsmV2ClusterArgsIntterface {
  source_backup_identifier?: string;
  hsm_type: string;
  subnet_ids: string;
  tags?: string;

}
