import { AwsDevicefarmProjectIntterface } from '../interfaces';
import { AwsDevicefarmProjectArgs, AwsDevicefarmProjectAttrs } from '.';

export class AwsDevicefarmProject implements AwsDevicefarmProjectIntterface {
  name: string = 'aws_devicefarm_project';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/devicefarm_project.html';
  groupName: string = 'Device Farm Resources';
  args: AwsDevicefarmProjectArgs;
  attrs: AwsDevicefarmProjectAttrs;

}
