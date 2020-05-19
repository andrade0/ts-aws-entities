import { AwsGlueConnectionArgsIntterface } from '../interfaces';
import { AwsGlueConnectionArgsPhysicalConnectionRequirements } from '.';

export class AwsGlueConnectionArgs implements AwsGlueConnectionArgsIntterface {
  	catalog_id?: string;
	connection_properties: string;
	connection_type?: string;
	description?: string;
	match_criteria?: string;
	name: string;
	physical_connection_requirements?: AwsGlueConnectionArgsPhysicalConnectionRequirements;

}
