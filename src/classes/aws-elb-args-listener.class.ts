import { AwsElbArgsListenerIntterface } from '../interfaces';


export class AwsElbArgsListener implements AwsElbArgsListenerIntterface {
  instance_port: string;
  instance_protocol: string;
  lb_port: string;
  lb_protocol: string;
  ssl_certificate_id?: string;

}
