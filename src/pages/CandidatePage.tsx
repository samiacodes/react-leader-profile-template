import { useTranslation } from 'react-i18next'

const CandidatePage = () => {
  const { t } = useTranslation()
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#1F2937] dark:text-white">
        {t('candidate')}
      </h1>
    </div>
  )
}

export default CandidatePage