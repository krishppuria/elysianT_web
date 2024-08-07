import { ThemeProvider, CssBaseline } from '@mui/material';
import 'toastr/build/toastr.min.css';

import theme from './theme';
import SignUp from './pages/SignUp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignUp />
    </ThemeProvider>
  );
}

export default App;
