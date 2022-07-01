/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "./components/myModal.js";

const Menu = ({ items }) => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="form-control my-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="section-center">
        <div className="row">
          {items
            .filter((value) => {
              if (search === "") {
                return value;
              } else if (
                value.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return value;
              }
            })

            .map((menuItem) => {
              const {
                id,
                title,
                description,
                price,
                discountPercentage,
                rating,
                stock,
                brand,
                thumbnail,
              } = menuItem;

              return (
                <>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <article className="menu-item" key={id}>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={thumbnail} />
                        <Card.Body>
                          <div className="d-flex justify-content-between text-warning">
                            <Card.Title>{brand}</Card.Title>
                            <Card.Title>{title}</Card.Title>
                          </div>
                          <Card.Text>{description}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroup.Item>Rating: {rating}</ListGroup.Item>
                          <ListGroup.Item>Stock: {stock}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body className="d-flex justify-content-between">
                          <Card.Link href="#">{discountPercentage}</Card.Link>
                          <Card.Title>{price} $</Card.Title>
                        </Card.Body>
                        <Modal items={items} />
                      </Card>
                    </article>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Menu;
