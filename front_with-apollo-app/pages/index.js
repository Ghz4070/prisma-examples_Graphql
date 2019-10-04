import App from "../components/App";
import Header from "../components/Header";
import {withApollo} from "../lib/apollo";
import Product from "../components/Product";

const IndexPage = props => (
    <App>
        <Header/>
        <Product/>
    </App>
);

export default withApollo(IndexPage);
