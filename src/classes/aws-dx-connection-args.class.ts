import { AwsDxConnectionArgsIntterface } from '../interfaces';


export class AwsDxConnectionArgs implements AwsDxConnectionArgsIntterface {
  name: string;
  bandwidth: string;
  location: string;
  tags?: string;

}
