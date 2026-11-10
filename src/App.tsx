import './App.css';
import { Grid } from '@mui/material';
import { useState } from 'react';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';

function App() {
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <Grid container spacing={5} sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Grid size={{ xs: 12, md: 12 }}>
        <HeaderUI />
      </Grid>

      <Grid size={{ xs: 12, md: 12 }} container sx={{ justifyContent: 'flex-end', alignItems: 'center' }}>
        <AlertUI description={selectedCity ? `Clima en ${selectedCity}` : 'No se prevén lluvias'} />
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <SelectorUI value={selectedCity} onCityChange={setSelectedCity} />
      </Grid>

      <Grid size={{ xs: 12, md: 9 }}>
        Ciudad seleccionada: {selectedCity || 'Ninguna'}
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
        Elemento: Gráfico
      </Grid>

      <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
        Elemento: Tabla
      </Grid>

      <Grid size={{ xs: 12, md: 12 }}>Elemento: Información adicional</Grid>
    </Grid>
  );
}

export default App;