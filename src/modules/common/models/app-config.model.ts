export interface AppConfigModel {
  homePage: {
    sliderImgs: string[];
    shopByCategories: { name: string; imgSRC: string }[];
    newProducts: string[];
    roomsWithFurniture: {
      name: string;
      img: string;
      row: number;
      col: number;
    }[];
  };
  aboutUs: {
    sliderImgs: string[];
    followUsInstagram: string[];
  };
}
