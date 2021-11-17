import { BsLinkedin as LinkedIn } from 'react-icons/bs'
import { v4 as uuid4 } from 'uuid'

export const footerdata = [
  {
    headline: 'Sprechen Sie mit mir',
    para1: 'ivergentz@posteo.com',
    para2: '+49 1590 6593897',
    id: uuid4(),
  },
  {
    headline: 'Besuchen Sie mich in Hamburg',
    para1: 'Wohlwillstr. 50',
    para2: '20359 Hamburg',
    id: uuid4(),
  },
  {
    headline: 'Finden Sie mich',
    img1: { LinkedIn },
    para1: 'GitHub',
    img2: { LinkedIn },
    para2: 'LinkedIn',
    id: uuid4(),
  },
]
