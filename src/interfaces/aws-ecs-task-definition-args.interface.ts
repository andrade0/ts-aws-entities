import { AwsEcsTaskDefinitionArgsPlacementConstraintsIntterface, AwsEcsTaskDefinitionArgsVolumeIntterface } from '.';

export interface AwsEcsTaskDefinitionArgsIntterface {
  family: string;
  container_definitions: string;
  task_role_arn?: string;
  execution_role_arn?: string;
  network_mode?: string;
  ipc_mode?: string;
  pid_mode?: string;
  volume?: AwsEcsTaskDefinitionArgsVolumeIntterface;
  placement_constraints?: AwsEcsTaskDefinitionArgsPlacementConstraintsIntterface;
  cpu?: string;
  memory?: string;
  requires_compatibilities?: string;
  tags?: string;

}
