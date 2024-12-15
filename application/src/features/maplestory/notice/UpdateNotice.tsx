import { UpdateNoticeList } from "@entities/maplestory"
import { ReactElement } from "react"
import styles from './UpdateNotice.module.scss';

export const UpdateNotice = (): ReactElement => {
  return (
    <div className={styles.updateNoticeContainer}>
      업데이트 내역
      <div>
        <UpdateNoticeList />
      </div>
    </div>
  )
}