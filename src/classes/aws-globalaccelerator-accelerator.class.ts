import { AwsGlobalacceleratorAcceleratorIntterface } from '../interfaces';
import { AwsGlobalacceleratorAcceleratorArgs, AwsGlobalacceleratorAcceleratorAttrs } from '.';

export class AwsGlobalacceleratorAccelerator implements AwsGlobalacceleratorAcceleratorIntterface {
  name: string = 'aws_globalaccelerator_accelerator';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html';
  groupName: string = 'Global Accelerator Resources';
  args: AwsGlobalacceleratorAcceleratorArgs;
  attrs: AwsGlobalacceleratorAcceleratorAttrs;

}
