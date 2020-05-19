import { AwsGlueCatalogTableIntterface } from '../interfaces';
import { AwsGlueCatalogTableArgs,  AwsGlueCatalogTableAttrs } from '.';

export class AwsGlueCatalogTable implements AwsGlueCatalogTableIntterface {
  	name: string = 'aws_glue_catalog_table';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html';
	groupName: string = 'Glue Resources';
	args: AwsGlueCatalogTableArgs;
	attrs: AwsGlueCatalogTableAttrs;

}
