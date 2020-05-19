import { AwsGlueCatalogDatabaseArgsIntterface } from '../interfaces';


export class AwsGlueCatalogDatabaseArgs implements AwsGlueCatalogDatabaseArgsIntterface {
  	name: string;
	catalog_id?: string;
	description?: string;
	location_uri?: string;
	parameters?: string;

}
