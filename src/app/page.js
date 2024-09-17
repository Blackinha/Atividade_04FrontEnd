'use client';

import { useEffect, useState } from "react";
import BarraNavegacao from "./components/BarraNavegacao";
import axios from "axios";
import { Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardTitle, Col, Row, Container } from "react-bootstrap";



export default function page() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    // puxando a api
    axios.get("https://dummyjson.com/users").then((response) => {
      // puxa api, pega a resposta da api, coleta os dados e joga em users
      setUsers(response.data.users)
    })
  }, [])

  return (
    <>
    <BarraNavegacao />

    <Container className="mt-3">
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">

          {/* pega o users, map vai cada elemento do array e nele vai executar a função */}
          {users.map((user) => (
            <Col key={user.id}>
              <Card className="h-100">
                <CardImg variant="top" src={user.image} alt={`${user.firstName} ${user.lastName}`} />
                <CardBody>
                  <CardTitle>{user.firstName} {user.lastName}</CardTitle>
                  <CardSubtitle>{user.age} anos</CardSubtitle>
                </CardBody>

                <CardFooter className="text-end">
                  <Button href={"/" + user.id}>Detalhes</Button>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}