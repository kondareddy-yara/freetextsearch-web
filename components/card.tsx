import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const card = (
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
          Word of the Day
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          {/* well meaning and kindly. This is an yara product
          <br />
          {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      </Card>
      </Box>
  );

  export default card;

