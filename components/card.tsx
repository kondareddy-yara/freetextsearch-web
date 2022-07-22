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
};

const card: React.FC<Props> = ({name,fertiliser_group_name,categoryName,Manufacturer_name }) => (
    <Box  alignItems="center"
    justifyContent="center"
    style={{width:'760px', margin: '0 auto', border: '1px solid lightgray'}}
  >
      <Card sx={{ display: 'flex' }} >
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image="https://picsum.photos/400/300"
          alt="Live from space album cover"
        />
      <CardContent sx={{ flex: '1' }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} >
          {fertiliser_group_name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} >
          {categoryName}
        </Typography>
        <Typography sx={{ fontSize: 14 }} align={'right'}>
          {Manufacturer_name}
        </Typography>
      </CardContent>
      </Card>
      </Box>
  );

  export default card;

