import { AwsSsmPatchBaselineArgsApprovalRuleIntterface } from '../interfaces';


export class AwsSsmPatchBaselineArgsApprovalRule implements AwsSsmPatchBaselineArgsApprovalRuleIntterface {
  	approve_after_days: string;
	patch_filter: string;
	compliance_level?: string;
	enable_non_security?: boolean;

}
