import { AwsEfsMountTargetArgsIntterface } from '../interfaces';


export class AwsEfsMountTargetArgs implements AwsEfsMountTargetArgsIntterface {
  	file_system_id: string;
	subnet_id: string;
	ip_address?: string;
	security_groups?: string;

}
