import { AwsGlueCatalogTableArgsStorageDescriptorIntterface } from '../interfaces';


export class AwsGlueCatalogTableArgsStorageDescriptor implements AwsGlueCatalogTableArgsStorageDescriptorIntterface {
  	columns?: string;
	location?: string;
	input_format?: string;
	output_format?: string;
	compressed?: string;
	number_of_buckets?: string;
	ser_de_info?: string;
	bucket_columns?: string;
	sort_columns?: string;
	parameters?: string;
	skewed_info?: string;
	stored_as_sub_directories?: string;

}
