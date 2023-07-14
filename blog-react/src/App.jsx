import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import styled from 'styled-components';
const supabase = createClient('https://cyfpjgfjgocvjoqdblbp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5ZnBqZ2ZqZ29jdmpvcWRibGJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0OTIzNTIsImV4cCI6MjAwNDA2ODM1Mn0.3hq1S-yAh1Uq2K5lBbYJSvvmvGlg8NHd0kq7P-rlwQs')

// const CenteredAuth = styled(Auth)`
//   width:100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const App = () => (
  <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
    providers={['google', 'facebook', 'twitter']}
  />
)
export default App
