import { AwsSsmPatchBaselineArgsIntterface } from '../interfaces';
import { AwsSsmPatchBaselineArgsApprovalRule } from '.';

export class AwsSsmPatchBaselineArgs implements AwsSsmPatchBaselineArgsIntterface {
  	name: string;
	description?: string;
	operating_system?: string;
	approved_patches_compliance_level?: string;
	approved_patches?: string;
	rejected_patches?: string;
	global_filter?: string;
	approval_rule?: AwsSsmPatchBaselineArgsApprovalRule;

}
