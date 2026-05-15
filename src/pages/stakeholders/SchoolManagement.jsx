import StakeholderTemplate from '../../components/shared/StakeholderTemplate';
import { stakeholders } from '../../data/stakeholders';

export default function SchoolManagement() {
  return <StakeholderTemplate stakeholder={stakeholders.find((s) => s.slug === 'school-management')} />;
}
