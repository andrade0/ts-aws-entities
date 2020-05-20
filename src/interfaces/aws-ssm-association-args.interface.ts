import { AwsSsmAssociationArgsInstanceIdIntterface, AwsSsmAssociationArgsOutputLocationIntterface } from '.';

export interface AwsSsmAssociationArgsIntterface {
  name: string;
  association_name?: string;
  document_version?: string;
  instance_id?: AwsSsmAssociationArgsInstanceIdIntterface;
  output_location?: AwsSsmAssociationArgsOutputLocationIntterface;
  parameters?: string;
  schedule_expression?: string;
  targets?: string;

}
