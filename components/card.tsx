
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

type Props = {
    name: string;
    fertiliser_group_name: string;
    categoryName: string;
    Manufacturer_name: string;
    Country: string;
    img: string
};



const card: React.FC<Props> = ({name,fertiliser_group_name,categoryName,Manufacturer_name, Country, img }) => (
    <Box  alignItems="center"
    justifyContent="center"
    style={{width:'760px', margin: '0 auto', border: '1px solid lightgray'}}
  >
      <Card sx={{ display: 'flex' }} >
        <CardMedia
          component="img"
          width="200"
          sx={{ width: 200}}
          image={img}
          alt="Product Image"
        />
      <CardContent sx={{ flex: '1' }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Name: {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} >
          Fertilizer Group: {fertiliser_group_name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} >
          Category: {categoryName}
        </Typography>
        <Typography sx={{ fontSize: 14 }} align={'center'}>
          Manufacturer: {Manufacturer_name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} align={'center'}>
          Country: {Country}
        </Typography>
      </CardContent>
      </Card>
      </Box>
  );


  export default card;

