import { AwsEc2ClientVpnEndpointArgsIntterface } from '../interfaces';


export class AwsEc2ClientVpnEndpointArgs implements AwsEc2ClientVpnEndpointArgsIntterface {
  description?: string;
  client_cidr_block: string;
  dns_servers?: string;
  server_certificate_arn: string;
  transport_protocol?: string;
  authentication_options: string;
  connection_log_options: string;
  type: string;
  active_directory_id?: string;
  root_certificate_chain_arn?: string;
  enabled: string;
  cloudwatch_log_group?: string;
  cloudwatch_log_stream?: string;

}
