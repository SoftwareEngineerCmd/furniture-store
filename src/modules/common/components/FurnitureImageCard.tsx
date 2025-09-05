import { FC } from "react";
import { FurnitureEnum } from "./models/furniture.enum";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export interface FurnitureImageCardProps {
  imgSRC: string;
  price: number;
  salePrice?: number;
  state?: FurnitureEnum;
  subtitle: string;
  url: string;
}

export const FurnitureImageCard: FC<FurnitureImageCardProps> = ({
  imgSRC,
  price,
  subtitle,
  salePrice,
  state,
  url,
}) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardActionArea component={Link} to={url}>
        <CardMedia component="img" height={350} image={imgSRC} alt={imgSRC} />
        <CardContent>
          <Tooltip title={subtitle}>
            <Typography variant="body1" align="center">
              {subtitle}
            </Typography>
          </Tooltip>
          <Typography variant="body2" align="center">
            {state === FurnitureEnum.SALE ? (
              <>
                <s>{price}</s> {salePrice}
              </>
            ) : (
              price
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
