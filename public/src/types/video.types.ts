import { User } from './user.types'

export default interface VideoState {
    source: 'yt' | 'vk'  | 'zona' | 'url', // types of sources( youtube, vk, zona, only url(for test) )
    url: null | string, // url must be null(if we have video id from vk or youtube) or string(if we have zona or url source)
    isPaused: boolean, // state for pausing 
    inRoom: object,
}