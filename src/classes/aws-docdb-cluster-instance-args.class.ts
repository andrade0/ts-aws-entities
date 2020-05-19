import { AwsDocdbClusterInstanceArgsIntterface } from '../interfaces';


export class AwsDocdbClusterInstanceArgs implements AwsDocdbClusterInstanceArgsIntterface {
  	apply_immediately?: string;
	auto_minor_version_upgrade?: string;
	availability_zone: string;
	cluster_identifier: string;
	engine?: string;
	identifier: string;
	identifier_prefix: string;
	instance_class: string;
	preferred_maintenance_window?: string;
	promotion_tier?: string;
	tags?: string;

}
