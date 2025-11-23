import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  Paper,
  TextField,
  Typography,
  Stack,
} from '@mui/material';

export default function SignIn() {
  return (
    <>
      <div className="fulcrum-background" />
      <Container component="main" maxWidth="xs" sx={{ position: 'relative' }}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Box
          component="img"
          src="https://webassets.fulcrumapp.com/assets-eab24d3faeb5d558387b6c3a79a1a345602decd3/images/registration/fulcrum-logo1.png"
          alt="Fulcrum Logo"
          sx={{ mb: 4, height: 50 }}
        />

        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography component="h2" variant="h5" sx={{ fontWeight: 'bold' }}>
            Sign In
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Welcome back. Sign into your Fulcrum account below.
          </Typography>

          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me on this computer"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: '#d32f2f',
                '&:hover': { bgcolor: '#b71c1c' },
              }}
            >
              Sign In
            </Button>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Link
                href="https://web.fulcrumapp.com/users/saml"
                variant="body2"
                underline="hover"
              >
                Single Sign-on
              </Link>
              <Link
                href="https://web.fulcrumapp.com/users/password/new"
                variant="body2"
                underline="hover"
              >
                Forgot your password?
              </Link>
            </Stack>
          </Box>
        </Paper>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="text.secondary">
            Don't have an account?{' '}
            <Link
              href="https://www.fulcrumapp.com/lps/free-trial-general"
              variant="body2"
              underline="hover"
            >
              Get a Free Trial
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
    </>
  );
}
