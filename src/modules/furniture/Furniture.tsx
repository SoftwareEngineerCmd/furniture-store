import { Stack } from "@mui/material";
import { FurnitureImageCard } from "../common/components/FurnitureImageCard";
import { FurnitureEnum } from "../common/components/models/furniture.enum";
import { NavBar } from "../common/components/NavBar";
import { Fragment } from "react/jsx-runtime";

export const Furniture = () => {
  return (
    <Fragment>
      <NavBar />
      <Stack flexDirection="row" flexWrap="wrap">
        <FurnitureImageCard
          imgSRC={
            "https://valyouhawaii.com/cdn/shop/articles/Innovative_Modern_Furniture_Designs_That_Will_Elevate_Your_Living_Space.jpg?v=1747078783&width=1500"
          }
          url="/vay-qu-are"
          price={3000}
          salePrice={1233}
          state={FurnitureEnum.SALE}
          subtitle={"խոհանոցային կահույք"}
        />
        <FurnitureImageCard
          imgSRC={
            "https://www.bhg.com/thmb/BZT_q1_xS1aY25Hbr_QoQa5Cv4A=/3360x0/filters:no_upscale():strip_icc()/Reading-nook-Avondale3651_D_NXiMLKK7n9vw29e7ETns-dbde16e5aa954e71a17eaeb2ca06e8f1.jpeg"
          }
          url="ara-ari-ara"
          price={0}
          subtitle={"բազմոց"}
        />
      </Stack>
    </Fragment>
  );
};
