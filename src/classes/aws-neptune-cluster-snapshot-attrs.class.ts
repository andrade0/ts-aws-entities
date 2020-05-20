import { AwsNeptuneClusterSnapshotAttrsIntterface } from '../interfaces';


export class AwsNeptuneClusterSnapshotAttrs implements AwsNeptuneClusterSnapshotAttrsIntterface {
  allocated_storage?: string;
  availability_zones?: string;
  db_cluster_snapshot_arn?: string;
  engine?: string;
  engine_version?: string;
  kms_key_id?: string;
  license_model?: string;
  port?: string;
  source_db_cluster_snapshot_identifier?: string;
  storage_encrypted?: string;
  status?: string;
  vpc_id?: string;

}
