export interface AwsEmrClusterArgsInstanceGroupIntterface {
  instance_role: string;
  instance_type: string;
  instance_count?: string;
  name?: string;
  bid_price?: string;
  ebs_config?: string;
  autoscaling_policy?: string;
  size: string;
  type: string;
  iops?: string;
  volumes_per_instance?: string;

}
