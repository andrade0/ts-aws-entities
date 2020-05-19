import { AwsElasticacheSubnetGroupArgsIntterface } from '../interfaces';


export class AwsElasticacheSubnetGroupArgs implements AwsElasticacheSubnetGroupArgsIntterface {
  	name: string;
	description?: string;
	subnet_ids: string;

}
