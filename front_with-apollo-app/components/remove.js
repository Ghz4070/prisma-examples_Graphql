import gql from "graphql-tag";
import {useMutation} from "@apollo/react-hooks";
import {Button} from "@material-ui/core";
import {GET_ALL_PRODUCT} from "./Product";

const DELETE_PRODUCT = gql`
    mutation deleteProduct($id : ID!){
        deleteProduct(id: $id){
            id
        }
    }
`;

export default function DeleteProducts({id}) {
    const [removeProduct] = useMutation(DELETE_PRODUCT, {variables: {id}, refetchQueries: [{query: GET_ALL_PRODUCT}]});

    return (
        <Button onClick={() => removeProduct()}>
            remove
        </Button>
    );
}