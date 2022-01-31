import React, { useState,useContext } from "react";
import {useHistory} from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function Signin() {
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext)
  const [emailAdress, setEmailAdress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAdress === "";

  const handleSignIn = (event) => {
    event.preventDefault();

    firebase
    .auth()
    .signInWithEmailAndPassword(emailAdress,password) 
    .then(()=>{
      history.push(ROUTES.BROWSE);

    })
    .catch((error)=>{
      setEmailAdress("")
      setPassword("")
      setError(error.message);
    })
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email adress"
              value={emailAdress}
              onChange={({ target }) => setEmailAdress(target.value)}
            />
            <Form.Input
              type="Password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In{" "}
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New To Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            {" "}
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot. Learn more.{" "}
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      ;
      <FooterContainer />
    </>
  );
}
