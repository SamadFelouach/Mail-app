export class MaillData {
  addPropertyData: AddPropertyData;
  contactsList: any = []
  clear() {
    this.addPropertyData = new AddPropertyData();
    this.contactsList = []
  }
}

export class AddPropertyData{
  country: string = '';
  address: string = '';
  propertyType: string = '';
  bedrooms: string = '';
  bathrooms: string = '';
  size: string = '';
  amenities: Array<string> = [''];
  view: Array<string> = [''];
  portfolio: string = '';
  longitude: number = 0;
  city: string = '';
  latitude: number = 0;
  userid:string = '';
}
