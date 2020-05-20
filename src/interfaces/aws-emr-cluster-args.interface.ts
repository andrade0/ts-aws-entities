import {
  AwsEmrClusterArgsBootstrapActionIntterface,
  AwsEmrClusterArgsConfigurationsIntterface,
  AwsEmrClusterArgsInstanceGroupIntterface,
} from '.';

export interface AwsEmrClusterArgsIntterface {
  name: string;
  release_label: string;
  master_instance_type?: string;
  scale_down_behavior?: string;
  additional_info?: string;
  service_role: string;
  security_configuration?: string;
  core_instance_type?: string;
  core_instance_count?: number;
  instance_group?: AwsEmrClusterArgsInstanceGroupIntterface;
  log_uri?: string;
  applications?: string;
  termination_protection?: string;
  keep_job_flow_alive_when_no_steps?: string;
  ec2_attributes?: string;
  kerberos_attributes?: string;
  ebs_root_volume_size?: string;
  custom_ami_id?: string;
  bootstrap_action?: AwsEmrClusterArgsBootstrapActionIntterface;
  configurations?: AwsEmrClusterArgsConfigurationsIntterface;
  configurations_json?: string;
  key_name?: string;
  subnet_id?: string;
  additional_master_security_groups?: string;
  additional_slave_security_groups?: string;
  emr_managed_master_security_group?: string;
  emr_managed_slave_security_group?: string;
  service_access_security_group?: string;
  instance_profile: string;
  ad_domain_join_password?: string;
  ad_domain_join_user?: string;
  cross_realm_trust_principal_password?: string;
  kdc_admin_password: string;
  realm: string;
  action_on_failure: string;
  hadoop_jar_step: string;
  args?: string;
  jar: string;
  main_class?: string;
  properties?: string;

}
