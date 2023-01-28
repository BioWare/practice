export type StreetType = {
  title: string
}

export type AddressType = {
  number?: number
  street: StreetType
}

export type HousesType = {
  buildedAt: number
  repaired: boolean
  address: AddressType
}

export type GovermentType = {
  type: string
  budget: number
  staffCount: number
  address: AddressType
}

export type CityType = {
  title: string
  houses: Array<HousesType>
  governmentBuildings: Array<GovermentType>
  citizensNumber: number
}

