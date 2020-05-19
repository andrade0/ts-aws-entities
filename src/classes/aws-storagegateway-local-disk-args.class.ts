import { AwsStoragegatewayLocalDiskArgsIntterface } from '../interfaces';


export class AwsStoragegatewayLocalDiskArgs implements AwsStoragegatewayLocalDiskArgsIntterface {
  	gateway_arn: string;
	disk_node?: string;
	disk_path?: string;

}
