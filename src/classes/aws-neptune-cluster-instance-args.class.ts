import { AwsNeptuneClusterInstanceArgsIntterface } from '../interfaces';


export class AwsNeptuneClusterInstanceArgs implements AwsNeptuneClusterInstanceArgsIntterface {
  apply_immediately?: string;
  auto_minor_version_upgrade?: string;
  availability_zone?: string;
  cluster_identifier: string;
  engine?: string;
  engine_version?: string;
  identifier: string;
  identifier_prefix: string;
  instance_class: string;
  neptune_subnet_group_name: string;
  neptune_parameter_group_name?: string;
  port?: string;
  preferred_backup_window?: string;
  preferred_maintenance_window?: string;
  promotion_tier?: string;
  publicly_accessible?: string;
  tags?: string;

}
