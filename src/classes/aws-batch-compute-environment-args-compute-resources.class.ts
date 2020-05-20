import { AwsBatchComputeEnvironmentArgsComputeResourcesIntterface } from '../interfaces';


export class AwsBatchComputeEnvironmentArgsComputeResources implements AwsBatchComputeEnvironmentArgsComputeResourcesIntterface {
  bid_percentage?: string;
  desired_vcpus?: string;
  ec2_key_pair?: string;
  image_id?: string;
  instance_role: string;
  instance_type: string;
  max_vcpus: string;
  min_vcpus: string;
  security_group_ids: string;
  spot_iam_fleet_role?: string;
  subnets: string;
  tags?: string;
  type: string;

}
