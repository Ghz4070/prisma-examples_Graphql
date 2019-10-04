import gql from "graphql-tag";
import React from "react";
import {useMutation, useQuery} from "@apollo/react-hooks";
import DeleteProducts, {DELETE_PRODUCT} from "./remove";
import Button from "@material-ui/core/Button";

let stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export const GET_ALL_PRODUCT = gql`
    query getAllProduct {
        getAllProduct{
            id
            createdAt
            updatedAt
            price
            name
            description
            quantity
            image
            published
            category
        }
    }
`;

export const CHECKOUT_SESSION = gql`
    mutation createCheckoutSession{
        #etre connecter et ajouter les argument pour recuper les data
        createCheckoutSession
    }
`;

export default function AllProduct() {
    const {loading, error, data} = useQuery(GET_ALL_PRODUCT);
    const [createCheckout] = useMutation(CHECKOUT_SESSION);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <table style={{textAlign: "center"}}>
            <thead>
            <tr>
                <td>name</td>
                <td>quantity</td>
                <td>price</td>
                <td>category</td>
                <td>description</td>
                <td>remove</td>
                <td>buy</td>
            </tr>
            </thead>
            <tbody>
            {data.getAllProduct.map(product => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.description}</td>
                    <td><DeleteProducts id={product.id}/></td>
                    <td><Button onClick={async () => {
                        const session = await createCheckout();
                        await stripe.redirectToCheckout({
                            // Make the id field from the Checkout Session creation API response
                            // available to this file, so you can provide it as parameter here
                            // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
                            sessionId: session
                        })
                    }}></Button></td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};
 
