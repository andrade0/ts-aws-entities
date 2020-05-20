import { AwsEmrInstanceGroupIntterface } from '../interfaces';
import { AwsEmrInstanceGroupArgs, AwsEmrInstanceGroupAttrs } from '.';

export class AwsEmrInstanceGroup implements AwsEmrInstanceGroupIntterface {
  name: string = 'aws_emr_instance_group';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html';
  groupName: string = 'Elastic Map Reduce Resources';
  args: AwsEmrInstanceGroupArgs;
  attrs: AwsEmrInstanceGroupAttrs;

}
