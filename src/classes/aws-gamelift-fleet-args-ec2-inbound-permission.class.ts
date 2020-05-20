import { AwsGameliftFleetArgsEc2InboundPermissionIntterface } from '../interfaces';


export class AwsGameliftFleetArgsEc2InboundPermission implements AwsGameliftFleetArgsEc2InboundPermissionIntterface {
  from_port: string;
  ip_range: string;
  protocol: string;
  to_port: string;

}
