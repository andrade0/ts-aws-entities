import { AwsAthenaNamedQueryArgsIntterface } from '../interfaces';


export class AwsAthenaNamedQueryArgs implements AwsAthenaNamedQueryArgsIntterface {
  name: string;
  database: string;
  query: string;
  description?: string;

}
