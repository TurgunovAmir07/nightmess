import { BreadcumpDelivery } from './@BreadcumpDelivery'
import { BreadcumpHome } from './@BreadcumpHome'
import { BreadcumpBox } from './@BreadcumpBox'
import { BreadcumpOrder } from './@BreadcumpOrder'
import cl from './Breadcamps.module.scss'
import { BreadcumpLine } from './@BreadcumpLine'

export const Breadcumps = () => {
  return (
    <div className={cl.root}>
      <div className={cl.root__container}>
        <BreadcumpOrder />
        <BreadcumpLine />
        <BreadcumpBox />
        <BreadcumpLine />
        <BreadcumpDelivery />
        <BreadcumpLine />
        <BreadcumpHome />
      </div>
    </div>
  )
}
