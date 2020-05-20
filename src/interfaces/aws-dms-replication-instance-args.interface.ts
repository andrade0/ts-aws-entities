export interface AwsDmsReplicationInstanceArgsIntterface {
  allocated_storage: string;
  apply_immediately: string;
  auto_minor_version_upgrade: string;
  availability_zone?: string;
  engine_version?: string;
  kms_key_arn?: string;
  multi_az?: string;
  preferred_maintenance_window?: string;
  publicly_accessible: string;
  replication_instance_class: string;
  replication_instance_id: string;
  replication_subnet_group_id?: string;
  tags?: string;
  vpc_security_group_ids?: string;

}
