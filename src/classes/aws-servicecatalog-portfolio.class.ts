import { AwsServicecatalogPortfolioIntterface } from '../interfaces';
import { AwsServicecatalogPortfolioArgs, AwsServicecatalogPortfolioAttrs } from '.';

export class AwsServicecatalogPortfolio implements AwsServicecatalogPortfolioIntterface {
  name: string = 'aws_servicecatalog_portfolio';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html';
  groupName: string = 'Service Catalog Resources';
  args: AwsServicecatalogPortfolioArgs;
  attrs: AwsServicecatalogPortfolioAttrs;

}
