import { AwsEcsTaskDefinitionArgsIntterface } from '../interfaces';
import { AwsEcsTaskDefinitionArgsPlacementConstraints, AwsEcsTaskDefinitionArgsVolume } from '.';

export class AwsEcsTaskDefinitionArgs implements AwsEcsTaskDefinitionArgsIntterface {
  family: string;
  container_definitions: string;
  task_role_arn?: string;
  execution_role_arn?: string;
  network_mode?: string;
  ipc_mode?: string;
  pid_mode?: string;
  volume?: AwsEcsTaskDefinitionArgsVolume;
  placement_constraints?: AwsEcsTaskDefinitionArgsPlacementConstraints;
  cpu?: string;
  memory?: string;
  requires_compatibilities?: string;
  tags?: string;

}
