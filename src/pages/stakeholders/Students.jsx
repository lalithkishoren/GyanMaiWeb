import StakeholderTemplate from '../../components/shared/StakeholderTemplate';
import { stakeholders } from '../../data/stakeholders';

export default function Students() {
  return <StakeholderTemplate stakeholder={stakeholders.find((s) => s.slug === 'students')} />;
}
