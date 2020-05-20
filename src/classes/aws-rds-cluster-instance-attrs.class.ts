import { AwsRdsClusterInstanceAttrsIntterface } from '../interfaces';


export class AwsRdsClusterInstanceAttrs implements AwsRdsClusterInstanceAttrsIntterface {
  arn?: string;
  cluster_identifier?: string;
  identifier?: string;
  id?: string;
  writer?: boolean;
  allocated_storage?: string;
  availability_zone?: string;
  endpoint?: string;
  engine?: string;
  engine_version?: string;
  database_name?: string;
  port?: string;
  status?: string;
  storage_encrypted?: string;
  kms_key_id?: string;
  dbi_resource_id?: string;
  performance_insights_enabled?: string;
  performance_insights_kms_key_id?: string;

}
