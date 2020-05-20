import { AwsAmiFromInstanceArgsIntterface } from '../interfaces';


export class AwsAmiFromInstanceArgs implements AwsAmiFromInstanceArgsIntterface {
  name: string;
  source_instance_id: string;
  snapshot_without_reboot?: boolean;
  tags?: string;
  create: string;
  update: string;
  delete: string;

}
