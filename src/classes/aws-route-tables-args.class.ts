import { AwsRouteTablesArgsIntterface } from '../interfaces';
import { AwsRouteTablesArgsFilter } from '.';

export class AwsRouteTablesArgs implements AwsRouteTablesArgsIntterface {
  filter?: AwsRouteTablesArgsFilter;
  vpc_id?: string;
  tags?: string;

}
