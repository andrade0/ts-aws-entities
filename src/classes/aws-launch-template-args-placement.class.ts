import { AwsLaunchTemplateArgsPlacementIntterface } from '../interfaces';


export class AwsLaunchTemplateArgsPlacement implements AwsLaunchTemplateArgsPlacementIntterface {
  affinity: string;
  availability_zone: string;
  group_name: string;
  host_id: string;
  spread_domain: string;
  tenancy: string;

}
