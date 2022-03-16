import "./App.css";
import Home from "./Pages/Home";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbmxwLVhyem1ReHlVSld0WW04eXVPVUNyWlVpZ3xBQ3Jtc0ttWFFRbWI1YllYOEFRQXRHdERCU3B6bF9hTnlIbHlHdU9WRFBpMjZZU0t2VmpBbHRtNEtuamFudHNidDU2cHlKYy04VDQ2VGxkUkM3ZE5seGh3YXdlN2l0SGRHNXFpMEJVcUtuTEpFQUhnR2p3eWl5Zw&q=https%3A%2F%2Fgraphql-weather-api.herokuapp.com%2F"
  })
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
