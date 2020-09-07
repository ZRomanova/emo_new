export interface User {
  login: string
  password?: string
  name: string
  surname: string
  birthDate?: Date
  sex: number
  institution: string
  levelStatus: number
  photo?: string
  onlineStatus: string
  online?: boolean
  text?: boolean
  read?: boolean
  surnameView?: boolean
  _id?: string
  setting?: number
  vote?: boolean
  sentence?: boolean
  answers?: boolean
  change?: boolean
  defaultColor?: string
  birthdays?: boolean
  firstColor?: string
  secondColor?: string
}

export interface Users {
  withMessageUsers: User[]
  withoutMessageUsers: User[]
}

export interface Message {
  sender?: string
  recipient?: string
  time?: Date
  type: number[]
  message: string[]
  read?: boolean
  _id?: string
}

export interface Messages {
  messagesRead: Message[]
  messagesNotRead: Message[]
}

export interface Institution {
  name: string
  _id?: string
}

export interface Picture {
  readonly folder: boolean
  boysGreyPicture?: string
  girlsGreyPicture?: string
  boysColorPicture?: string
  girlsColorPicture?: string
  answers: string[]
  exceptions?: string[]
  text?: string
  textForGirls?: string
  parent?: string
  p_sort: number
  invisible?: boolean
  readonly system: boolean
  user?: string
  many?: number
  _id?: string
  src?: string
  textInHTML?: string
  color?: number
  show?: boolean
}

export interface Folder {
  text: string
  many: number
  parent?: string
  _id?: string
}

export interface PictureAndFolder {
  pictures: Picture[]
  folder: Folder
}

export interface MessageFromServer {
  message: string
}

export interface Filter {
  login?: string
  name?: string
  surname?: string
  institution?: string
  sex?: string
  levelStatus?: string
}

export interface Answers {
  answers: Picture[]
}