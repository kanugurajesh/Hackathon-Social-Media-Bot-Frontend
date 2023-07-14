import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { useState, useEffect } from 'react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Header from './components/Header';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
const supabase = createClient('https://cyfpjgfjgocvjoqdblbp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5ZnBqZ2ZqZ29jdmpvcWRibGJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0OTIzNTIsImV4cCI6MjAwNDA2ODM1Mn0.3hq1S-yAh1Uq2K5lBbYJSvvmvGlg8NHd0kq7P-rlwQs')

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 1rem;
`

const StyledChat = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  gap: 1rem;
`

const StyledMesseges = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  gap: 1rem;
`

// style footer
const StyledFooter = styled.div`
  width:95vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
`

export default function App() {
  const [session, setSession] = useState(null);
  const [show, setShow] = useState(false);
  // create a list of alerts
  const [alerts, setAlerts] = useState(["who is dhoni", "who cpu work", "what is programming", "hello who are you",]);
  // create a list of messages
  const [messages, setMessages] = useState(["he is great","cpu is a brain of computer","programming is a art","i am a bot"]);

  const handleClick = () => setShow(!show);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const requestSendner = async (e) => {
    e.preventDefault();
    // update the alerts
    setAlerts([...alerts, e.target.value]);
    // update the messages
    setMessages([...messages, ""]);
    console.log(e.target.value);
    // send the request to the server
  }

  if (!session) {
    return (
      <>
        <StyledDiv>
          <AccountCircleIcon sx={{ fontSize: 100 }} />
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={['google', 'github']}
          />
      </StyledDiv>
      </>
    )
  }
  else {
    return (
      <>
        <StyledChat>
        <Header />
        <StyledMesseges>
        {alerts.map((alert, index) => (
          <React.Fragment key={index}>
            <Alert severity="info" sx={{ width: '45vw', alignSelf: 'flex-start' }}>{alert}</Alert>
            {messages[index] && (
              <Alert severity="success" sx={{ width: '45vw', alignSelf: 'flex-end' }}>{messages[index]}</Alert>
            )}
          </React.Fragment>
        ))}
        </StyledMesseges>
        <StyledFooter>
        {/* <Search placeholder="input search text" enterButton="Search" size="large" /> */}
        {/* <StyledInput> */}
        <TextArea rows={3} placeholder="maxLength is 6" maxLength={100} />
        <Button variant="outlined">Outlined</Button>
        {/* </StyledInput> */}
        </StyledFooter>
        </StyledChat>
      </>
    )
  }
}