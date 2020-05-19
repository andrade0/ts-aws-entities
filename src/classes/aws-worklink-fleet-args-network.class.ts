import { AwsWorklinkFleetArgsNetworkIntterface } from '../interfaces';


export class AwsWorklinkFleetArgsNetwork implements AwsWorklinkFleetArgsNetworkIntterface {
  	vpc_id: string;
	subnet_ids: string;
	security_group_ids: string;

}
