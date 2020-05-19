import { AwsRoute53ZoneArgsIntterface } from '../interfaces';
import { AwsRoute53ZoneArgsVpc } from '.';

export class AwsRoute53ZoneArgs implements AwsRoute53ZoneArgsIntterface {
  	name: string;
	comment?: string;
	delegation_set_id?: string;
	force_destroy?: string;
	tags?: string;
	vpc?: AwsRoute53ZoneArgsVpc;
	vpc_id: string;
	vpc_region: string;

}
