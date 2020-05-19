import { AwsGlueCatalogTableArgsIntterface } from '../interfaces';
import { AwsGlueCatalogTableArgsStorageDescriptor } from '.';

export class AwsGlueCatalogTableArgs implements AwsGlueCatalogTableArgsIntterface {
  	name: string;
	database_name: string;
	catalog_id?: string;
	description?: string;
	owner?: string;
	retention?: string;
	storage_descriptor?: AwsGlueCatalogTableArgsStorageDescriptor;
	partition_keys?: string;
	view_original_text?: string;
	view_expanded_text?: string;
	table_type?: string;
	parameters?: string;
	type?: string;
	comment?: string;
	serialization_library?: string;
	column: string;
	sort_order: string;
	skewed_column_names?: string;
	skewed_column_value_location_maps?: string;
	skewed_column_values?: string;

}
