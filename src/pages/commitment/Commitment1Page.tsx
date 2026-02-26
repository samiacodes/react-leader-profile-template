import CommitmentDetailContent from '@/components/commitment/CommitmentDetailContent'
import { commitmentContent } from '@/config/commitmentContent'

const Commitment1Page = () => {
  return <CommitmentDetailContent commitment={commitmentContent[0]} />
}

export default Commitment1Page
