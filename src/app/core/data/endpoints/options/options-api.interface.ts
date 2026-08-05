export interface IOption {
  code: string
  name: string
}


export interface IOptions {
  departments?: IOption[]

}

export interface IOptionResponse{
  options: IOptions
}
