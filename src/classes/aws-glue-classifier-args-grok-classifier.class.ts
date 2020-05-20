import { AwsGlueClassifierArgsGrokClassifierIntterface } from '../interfaces';


export class AwsGlueClassifierArgsGrokClassifier implements AwsGlueClassifierArgsGrokClassifierIntterface {
  classification: string;
  custom_patterns?: string;
  grok_pattern: string;

}
