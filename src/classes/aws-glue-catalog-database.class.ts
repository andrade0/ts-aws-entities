import { AwsGlueCatalogDatabaseIntterface } from '../interfaces';
import { AwsGlueCatalogDatabaseArgs,  AwsGlueCatalogDatabaseAttrs } from '.';

export class AwsGlueCatalogDatabase implements AwsGlueCatalogDatabaseIntterface {
  	name: string = 'aws_glue_catalog_database';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html';
	groupName: string = 'Glue Resources';
	args: AwsGlueCatalogDatabaseArgs;
	attrs: AwsGlueCatalogDatabaseAttrs;

}
