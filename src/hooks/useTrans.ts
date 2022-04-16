import { useRouter } from 'next/router'
import en from '../../public/lang/en.js'
import vi from '../../public/lang/vi.js'

const useTrans = () => {
    const { locale } = useRouter()
    return locale === 'vi' ? vi : en
}

export default useTrans

