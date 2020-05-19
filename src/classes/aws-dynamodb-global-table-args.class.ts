import { AwsDynamodbGlobalTableArgsIntterface } from '../interfaces';
import { AwsDynamodbGlobalTableArgsReplica } from '.';

export class AwsDynamodbGlobalTableArgs implements AwsDynamodbGlobalTableArgsIntterface {
  	name: string;
	replica: AwsDynamodbGlobalTableArgsReplica;

}
