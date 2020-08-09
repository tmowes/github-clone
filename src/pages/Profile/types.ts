import { APIUser, APIRepo } from '../../@types'

export interface DataProps {
  user?: APIUser
  repos?: APIRepo[]
  error?: string
}
