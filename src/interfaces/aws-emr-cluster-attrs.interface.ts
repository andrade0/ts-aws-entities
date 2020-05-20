export interface AwsEmrClusterAttrsIntterface {
  id?: string;
  name?: string;
  release_label?: string;
  master_instance_type?: string;
  master_public_dns?: string;
  core_instance_type?: string;
  core_instance_count?: string;
  log_uri?: string;
  applications?: string;
  ec2_attributes?: string;
  bootstrap_action?: string;
  configurations?: string;
  service_role?: string;
  visible_to_all_users?: string;
  tags?: string;

}
