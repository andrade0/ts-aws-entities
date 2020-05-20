import { AwsSsmAssociationArgsIntterface } from '../interfaces';
import { AwsSsmAssociationArgsInstanceId, AwsSsmAssociationArgsOutputLocation } from '.';

export class AwsSsmAssociationArgs implements AwsSsmAssociationArgsIntterface {
  name: string;
  association_name?: string;
  document_version?: string;
  instance_id?: AwsSsmAssociationArgsInstanceId;
  output_location?: AwsSsmAssociationArgsOutputLocation;
  parameters?: string;
  schedule_expression?: string;
  targets?: string;

}
