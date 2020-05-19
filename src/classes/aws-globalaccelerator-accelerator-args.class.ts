import { AwsGlobalacceleratorAcceleratorArgsIntterface } from '../interfaces';
import { AwsGlobalacceleratorAcceleratorArgsAttributes } from '.';

export class AwsGlobalacceleratorAcceleratorArgs implements AwsGlobalacceleratorAcceleratorArgsIntterface {
  	name: string;
	ip_address_type?: string;
	enabled?: string;
	attributes?: AwsGlobalacceleratorAcceleratorArgsAttributes;

}
