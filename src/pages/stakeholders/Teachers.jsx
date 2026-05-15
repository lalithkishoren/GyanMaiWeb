import StakeholderTemplate from '../../components/shared/StakeholderTemplate';
import { stakeholders } from '../../data/stakeholders';

export default function Teachers() {
  return <StakeholderTemplate stakeholder={stakeholders.find((s) => s.slug === 'teachers')} />;
}
