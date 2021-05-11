import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";

const AddForm = ({ addTour }) => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const add = () => {
    addTour({ id: Date.now(), name, info, image, price });
    setImage("");
    setInfo("");
    setName("");
    setPrice("");
  };
  return (
    <Form style={{ margin: "20px 200px" }}>
      <Form.Field>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </Form.Field>
      <Form.Field>
        <label>Info</label>
        <input
          value={info}
          onChange={(e) => setInfo(e.target.value)}
          placeholder="Info"
        />
      </Form.Field>
      <Form.Field>
        <label>image</label>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="image"
        />
      </Form.Field>
      <Form.Field>
        <label>Price</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
      </Form.Field>

      <Link to="/tours">
        {" "}
        <Button onClick={add}>Add new Tour</Button>
      </Link>
    </Form>
  );
};

export default AddForm;
