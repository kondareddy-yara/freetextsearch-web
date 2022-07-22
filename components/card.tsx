import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Crop } from "../provider/api";
import ShowMoreText from "react-show-more-text";
import { useState } from "react";
import ShowMoreTextComponent from "./ShowMore";

type Props = {
  name: string;
  fertiliser_group_name: string;
  categoryName: string;
  Manufacturer_name: string;
  Country: string;
  img: string;
  crops: Crop[];
  description: string;
};

const CardComponent: React.FC<Props> = ({
  name,
  fertiliser_group_name,
  categoryName,
  Manufacturer_name,
  Country,
  img,
  crops,
  description,
}) => {
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      style={{ border: "1px solid lightgray" }}
    >
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          width="120"
          height="120"
          sx={{ width: 200 }}
          image={img}
          className="img"
          alt="Product Image"
        />
        <CardContent sx={{ flex: "1" }}>
          <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
            <strong>Name</strong>: {name}
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            <strong>Fertilizer Group</strong>: {fertiliser_group_name}
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            <strong>Category</strong>: {categoryName}
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            <strong>Crops</strong>:{" "}
            {crops?.map((crop) => crop.cropName).join(",")}
          </Typography>
          {/* <Typography sx={{ fontSize: 14 }}>
            <strong>Description:</strong>
            <ShowMoreTextComponent
              description={description}
              onClick={onClick}
              expand={expand}
            />
          </Typography> */}
          <Typography sx={{ fontSize: 14 }} align={"center"}>
            Manufacturer: {Manufacturer_name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} align={"center"}>
            Country: {Country}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardComponent;
