import { AwsVpcEndpointServiceArgsIntterface } from '../interfaces';


export class AwsVpcEndpointServiceArgs implements AwsVpcEndpointServiceArgsIntterface {
  acceptance_required: string;
  network_load_balancer_arns: string;
  allowed_principals?: string;

}
