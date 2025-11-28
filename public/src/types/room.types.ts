import type { Video } from './video.types'
import type { User } from './user.types'

export interface Room extends Video, User {
    currentVideo: Video,
    admin_id: number,
    room_id: number
    onRoom: User[]
}