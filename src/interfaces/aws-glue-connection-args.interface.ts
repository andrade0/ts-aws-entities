import { AwsGlueConnectionArgsPhysicalConnectionRequirementsIntterface } from '.';

export interface AwsGlueConnectionArgsIntterface {
  catalog_id?: string;
  connection_properties: string;
  connection_type?: string;
  description?: string;
  match_criteria?: string;
  name: string;
  physical_connection_requirements?: AwsGlueConnectionArgsPhysicalConnectionRequirementsIntterface;

}
